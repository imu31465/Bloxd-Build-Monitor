# Changed — Bundle Modifications Report (Part 024 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `24 / 115` (**283** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 023](part-023.md) · [Part 025 →](part-025.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/126.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/126.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b)

#### 15. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L251-L271` → after: `L304-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L304-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L304-L322) · [Before (L251-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L251-L271)

```diff
-     function FU() {
-       if (null === yU) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return yU
-     }
-   },
-   7242: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => oU,
-       h: () => FU
-     });
-     var cU = zU(7251),
-       yU = zU(7219),
-       QU = zU(123);
-     const AU = 100;
-     async function FU(UU, XU) {
-       var zU;
- ... (5 more removed lines; see GitHub link above)
+     function IH(HH) {
+       let {
+         details: BH,
+         owner: LH,
+         onChanged: rH
+       } = HH;
+       const {
+         t: hH
+       } = (0, PH.B)(), tH = (0, EH.useNavigatePreserveSearch)(), {
+         userContext: zH
+       } = (0, MH.e)(), [GH, YH] = (0, AH.useState)(!1), [uH, QH] = (0, AH.useState)(null), [WH, vH] = (0, AH.useState)(!1), {
+         packId: TH,
+         name: UH,
+         description: IH,
+         live: fH
+       } = BH;
+ ... (3 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L273-L274` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L324) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L273-L274)

```diff
-           const XU = await (0, QU.q)(UU);
-           return XU ? await XU.requestDevice() : null
+           await HH(), BH()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L276` → after: `L326-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L326-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L326-L328) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L276)

```diff
-           return console.error("Couldn't get a WebGPU device to validate the shader pack.", XU), null
+           console.error("Failed to change a shader pack", LH), QH((0, kH.s)(LH, hH, "shaderPackListing:ownerActionFailed"))
+         } finally {
+           YH(!1)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L311-L321` → after: `L467-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L467-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L467-L547) · [Before (L311-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L311-L321)

```diff
-     async function oU(UU, XU) {
-       var zU;
-       if (!(0, cU.shaderPackNeedsCheck)(UU, XU) || (0, cU.isOtherApiVersion)(UU)) return UU;
-       const yU = await FU(XU, (0, cU.storedShaderPackFiles)(UU));
-       if (!yU) return UU;
-       const QU = !1 === (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.ok) && !UU.validation.fromRecheck,
-         AU = {
-           ...UU,
-           validation: QU ? yU : {
-             ...yU,
-             fromRecheck: !0
+     var fH = LH(69),
+       lH = LH(1962),
+       KH = LH(1214),
+       cH = LH(5513),
+       eH = LH(1131),
+       qH = LH(7129),
+       gH = LH(7121),
+       NH = LH(7141);
+ 
+     function RH(HH) {
+       let {
+         item: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, PH.B)(), [rH] = (0, qH.i)(), [hH, tH] = (0, AH.useState)(rH), [zH, CH] = (0, AH.useState)(!1), [EH, XH] = (0, AH.useState)(!1), {
+ ... (65 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L323-L324` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L549-L550) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L323-L324)

```diff
-         };
-       return await (0, cU.replaceShaderPack)(UU, AU, XU) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), AU
+         })]
+       })
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L327-L334` → after: `L553-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L553-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L553-L584) · [Before (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L327-L334)

```diff
-     function DU(UU, XU, zU) {
-       return {
-         headerVersion: (0, cU.pageShaderPackValidationVersion)(UU),
-         ok: 0 === XU.length,
-         errors: XU.slice(0, AU),
-         moreErrors: Math.max(0, XU.length - AU),
-         offInStrict: zU
-       }
+     function jH(HH) {
+       let {
+         fullUrl: BH,
+         largeUrl: LH,
+         alt: rH,
+         onClose: SH
+       } = HH;
+       const hH = (0, AH.useRef)(null);
+       return (0, KH.r)("popup", hH, SH), (0, AH.useEffect)((() => {
+         function HH(HH) {
+           "Escape" === HH.key && (HH.stopPropagation(), SH())
+         }
+         return window.addEventListener("keydown", HH, !0), () => {
+           window.removeEventListener("keydown", HH, !0)
+         }
+       }), [SH]), (0, fH.createPortal)((0, mH.jsxs)("div", {
+ ... (16 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L353` → after: `L589-L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L589-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L589-L670) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L353)

```diff
-       return UU === cU
+       let {
+         item: BH,
+         packUrl: LH,
+         baselineUrl: rH
+       } = HH;
+       const {
+         t: hH
+       } = (0, PH.B)(), [tH, zH] = (0, AH.useState)(50), CH = (0, AH.useRef)(!1), EH = (0, AH.useRef)(null), {
+         width: XH,
+         height: GH
+       } = SH.w.large;
+ 
+       function YH(HH) {
+         zH((BH => (0, lH.f)(BH + HH, 0, 100)))
+       }
+ 
+ ... (66 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L357` → after: `L674-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L674-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L674-L687) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L357)

```diff
-       return [...UU.features]
+       let {
+         side: BH,
+         onClick: LH,
+         children: AH
+       } = HH;
+       return (0, mH.jsx)("button", {
+         type: "button",
+         className: `ShaderPackStageButton ${BH}`,
+         onClick: LH,
+         children: (0, mH.jsx)("span", {
+           className: "ShaderPackStageButtonFace SmallTextBold",
+           children: AH
+         })
+       })
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L359-L361` → after: `L689-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L689-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L689-L699) · [Before (L359-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L359-L361)

```diff
-     const AU = 262144,
-       FU = 256,
-       oU = 256;
+     var wH = LH(5478),
+       ZH = LH(293),
+       dH = LH(7209);
+     const aH = {
+       compiler: "shaderPack:compilerUnavailable",
+       download: "shaderPackListing:useDownloadFailed",
+       apiVersion: "shaderPackListing:useOtherApiVersion",
+       invalid: "shaderPackListing:useInvalid",
+       errors: "shaderPackListing:useFailsHere",
+       save: "shaderPack:saveFailed"
+     };
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L364-L379` → after: `L702-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L702-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L702-L742) · [Before (L364-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L364-L379)

```diff
-       if ("object" !== typeof UU || null === UU || Array.isArray(UU)) return "The pack has no files.";
-       const XU = [];
-       for (const [zU, cU] of Object.entries(UU)) {
-         if ("string" !== typeof cU) return `${zU} isn't text.`;
-         XU.push({
-           path: zU,
-           source: cU
-         })
-       }
-       return XU.sort(((UU, XU) => YU(UU.path, XU.path))),
-         function(UU) {
-           if (0 === UU.length) return "The pack has no .wgsl files.";
-           if (UU.length > FU) return `The pack has more than ${FU} .wgsl files.`;
-           const XU = new Set;
-           for (const {
-               path: zU
+       const {
+         userContext: BH
+       } = (0, MH.e)(), [rH, SH] = (0, AH.useState)(null), [hH, tH] = (0, AH.useState)(!1), [zH, CH] = (0, AH.useState)(!1), [EH, XH] = (0, AH.useState)(null), GH = null === HH || void 0 === HH ? void 0 : HH.packId, YH = null === HH || void 0 === HH ? void 0 : HH.sourceHash;
+       return (0, AH.useEffect)((() => {
+         if (tH(!1), XH(null), void 0 === GH) return;
+         let HH = !1;
+         return Promise.all([(0, vH.hasUsableWebGpuAdapter)(), (0, dH.e)()]).then((BH => {
+           let [LH, AH] = BH;
+           var rH;
+           HH || (SH(LH), tH((null === AH || void 0 === AH || null === (rH = AH.listing) || void 0 === rH ? void 0 : rH.packId) === GH && AH.listing.sourceHash === YH))
+         })).catch((BH => {
+           console.error("Failed to check whether this shader pack can be used", BH), HH || SH(!1)
+         })), () => {
+           HH = !0
+         }
+       }), [GH, YH]), {
+ ... (25 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L381-L388` → after: `L744-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L744-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L744-L746) · [Before (L381-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L381-L388)

```diff
-             of UU) {
-             const UU = IU(zU);
-             if (null !== UU) return UU;
-             if (XU.has(zU)) return `The pack has two files at ${zU}.`;
-             XU.add(zU)
-           }
-           return NU(UU) > AU ? `The pack's .wgsl files are over ${AU/1024} KB in total.` : null
-         }(XU) ?? XU
+           }(HH)
+         }
+       }
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L392-L394` → after: `L750-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L750-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L750-L778) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L392-L394)

```diff
-       const XU = {};
-       for (const zU of UU) XU[zU.path] = zU.source;
-       return XU
+       let {
+         packUse: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, PH.B)(), {
+         webGpuUsable: AH,
+         inUse: rH,
+         busy: SH,
+         errorKey: hH,
+         use: tH
+       } = BH;
+       return (0, mH.jsxs)("div", {
+         className: "ShaderPackUse",
+         children: [(0, mH.jsxs)(XH.u, {
+           disabled: !0 !== AH || rH,
+ ... (13 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L397-L398` → after: `L781-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L781-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L781-L854) · [Before (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L397-L398)

```diff
-     function YU(UU, XU) {
-       return UU < XU ? -1 : UU > XU ? 1 : 0
+     function iH() {
+       var HH;
+       const {
+         t: BH
+       } = (0, PH.B)(), LH = (0, EH.useNavigatePreserveSearch)(), {
+         packId: SH
+       } = (0, rH.A)(), {
+         userContext: hH,
+         isUserContextUpdating: tH
+       } = (0, MH.e)(), [GH, uH] = (0, AH.useState)(null), [QH, vH] = (0, AH.useState)(null), [TH, UH] = (0, AH.useState)(0), VH = (0, AH.useRef)(0);
+ 
+       function OH() {
+         var HH;
+         null !== (HH = (0, EH.getPreviousLocation)()) && void 0 !== HH && HH.startsWith(kH.P) ? LH(-1) : LH(kH.P)
+       }(0, WH.c)(OH), (0, qH.d)(), (0, AH.useEffect)((() => {
+         if (tH || void 0 === SH) return;
+ ... (58 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L402-L408` → after: `L858-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L858-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L858-L876) · [Before (L402-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L402-L408)

```diff
-       const XU = new TextEncoder;
-       let zU = 0;
-       for (const {
-           source: cU
-         }
-         of UU) zU += XU.encode(cU).byteLength;
-       return zU
+       let {
+         item: BH,
+         favourites: LH,
+         packUse: AH
+       } = HH;
+       const rH = LH.isFavourite(BH.packId);
+       return (0, mH.jsxs)("div", {
+         className: "ShaderPackInformationActions",
+         children: [vH.featureFlags.settings.canUseShaderPacks && (0, mH.jsx)(JH, {
+           packUse: AH
+         }), (0, mH.jsx)(XH.C, {
+           className: "ShaderPackInformationLike",
+           onClick: () => {
+             LH.toggle(BH.packId)
+           },
+           isLiked: !0 === rH,
+ ... (3 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L412-L415` → after: `L880-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L880-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L880-L968) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L412-L415)

```diff
-       if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
-       if (UU.length > oU) return `A file path is over ${oU} characters.`;
-       if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
-       return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
+       let {
+         item: BH,
+         ownerPreview: LH,
+         bloxdhubSlug: AH,
+         actions: rH
+       } = HH;
+       const {
+         t: tH
+       } = (0, PH.B)(), zH = (0, QH.s)(), CH = null === AH ? null : (0, SH.g)(AH);
+       return (0, mH.jsxs)("div", {
+         className: "ShaderPackFacts",
+         children: [BH.description && (0, mH.jsx)("p", {
+           className: "ShaderPackDescription",
+           children: BH.description
+         }), (0, mH.jsxs)("div", {
+           className: "ShaderPackFeatureList",
+ ... (73 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L419-L433` → after: `L971-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L971-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L971-L986) · [Before (L419-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L419-L433)

```diff
-     function aU(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const cU = new Map;
-       XU.forEach(((UU, XU) => {
-         let {
-           numAnimStates: zU,
-           animStartIdx: yU
-         } = UU;
-         for (let QU = 1; QU < zU; QU++) cU.set(yU + QU - 1, XU)
-       }));
-       const yU = Object.entries(UU),
-         QU = new Map;
-       for (const [aU, tU] of yU) {
-         const UU = pU.exec(aU);
-         "1" === UU?.[2] && QU.set(UU[1], tU + 1)
+     function HB(HH) {
+       let {
+         label: BH,
+         time: LH,
+         now: AH
+       } = HH;
+       const {
+         t: rH,
+         selectedLanguage: SH
+       } = (0, PH.B)(), hH = new Date(LH);
+       let zH = hH.toLocaleDateString();
+       if (AH - LH <= 30 * tH.j) {
+         const HH = (0, PH.n)(SH.code, "shaderPackListing:timeAgo");
+         zH = rH("shaderPackListing:timeAgo", {
+           time: (0, tH._)(HH, LH, AH)
+         })
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L435-L494` → after: `L988-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L988-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L988-L1076) · [Before (L435-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L435-L494)

```diff
-       const AU = UU => {
-           const XU = pU.exec(UU);
-           return XU && QU.has(XU[1]) ? {
-             root: XU[1],
-             rotation: Number(XU[2]) - 1
-           } : null
-         },
-         FU = new Set(yU.map((UU => {
-           let [XU] = UU;
-           return AU(XU)?.root ?? XU
-         }))),
-         oU = (UU, zU) => {
-           const cU = UU.replace(/_?0$/, "");
-           return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
-         },
-         DU = new Map;
- ... (44 more removed lines; see GitHub link above)
+       return (0, mH.jsx)(GH.g, {
+         tooltipInner: hH.toLocaleString(),
+         children: (0, mH.jsxs)("div", {
+           children: [(0, mH.jsx)("dt", {
+             children: BH
+           }), (0, mH.jsx)("dd", {
+             children: zH
+           })]
+         })
+       })
+     }
+   },
+   5506: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+ ... (73 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L496-L515` → after: `L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/126.js#L1078) · [Before (L496-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/126.js#L496-L515)

```diff
-         } else NU.set(zU, aU + 1)
-       }
-       for (const pU of NU.keys()) IU.delete(pU);
-       for (const [pU, aU] of zU) {
-         const UU = NU.get(aU);
-         void 0 === UU || NU.has(pU) || (NU.set(pU, UU), IU.delete(pU))
-       }
-       return {
-         named: [...NU].sort(((UU, XU) => {
-           let [zU] = UU, [cU] = XU;
-           return zU < cU ? -1 : zU > cU ? 1 : 0
-         })).map((UU => {
-           let [XU, zU] = UU;
-           return {
-             name: XU,
-             id: zU
- ... (4 more removed lines; see GitHub link above)
+         }), [HH])
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/127.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/127.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596)

#### 1. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L2)

```diff
- export const ids = [127, 129, 150, 151];
+ export const ids = [127];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L4)

```diff
-   5603: (UU, XU, zU) => {
+   5539: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L6` → after: `L6-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L6-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L6-L336) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L6)

```diff
-       d: () => cU.j,
+       c: () => EH,
+       d: () => CH
+     });
+     var AH = LH(45),
+       rH = LH(1455),
+       SH = LH(1123),
+       hH = LH(81),
+       tH = LH(3484),
+       zH = LH(1225);
+ 
+     function CH() {
+       return !(0, hH.isMobile)()
+     }
+ 
+     function EH(HH) {
+       let {
+ ... (315 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L8` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L338) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L8)

```diff
-       i: () => cU.o
+       g: () => AH.l
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L10` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L340) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L10)

```diff
-     var cU = zU(5608);
+     var AH = LH(5531);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L16-L151` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L346) · [Before (L16-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L16-L151)

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
- ... (120 more removed lines; see GitHub link above)
+   5531: (HH, BH, LH) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L154-L192` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L351) · [Before (L154-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L154-L192)

```diff
-       f: () => QU
-     });
-     var cU = zU(42);
-     const yU = "shaderPack";
-     async function QU() {
-       var UU;
-       let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (UU = await cU.g.getItem(yU, XU)) && void 0 !== UU ? UU : null
-     }
-   },
-   7219: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       loadShaderPackTextures: () => AU,
-       shaderPackTextures: () => FU
-     });
-     var cU = zU(5608);
- ... (23 more removed lines; see GitHub link above)
+       f: () => QH,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L194-L196` → after: `L353-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L353-L354) · [Before (L194-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L194-L196)

```diff
-       k: () => aU,
-       m: () => YU,
-       o: () => yU,
+       l: () => rH,
+       n: () => SH,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L198-L200` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L356-L357) · [Before (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L198-L200)

```diff
-       r: () => DU,
-       u: () => EU,
-       y: () => NU
+       t: () => EH,
+       u: () => GH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L219` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L376) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L219)

```diff
-         if ("string" !== typeof cU) return `${zU} isn't text.`;
+         if ("string" !== typeof AH) return `${LH} isn't text.`;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L228` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L385) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L228)

```diff
-           if (UU.length > FU) return `The pack has more than ${FU} .wgsl files.`;
+           if (HH.length > tH) return `The pack has more than ${tH} .wgsl files.`;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L236` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L393) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L236)

```diff
-             if (XU.has(zU)) return `The pack has two files at ${zU}.`;
+             if (BH.has(LH)) return `The pack has two files at ${LH}.`;
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L239` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L396) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L239)

```diff
-           return NU(UU) > AU ? `The pack's .wgsl files are over ${AU/1024} KB in total.` : null
+           return GH(HH) > hH ? `The pack's .wgsl files are over ${hH/1024} KB in total.` : null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L264-L267` → after: `L421-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L421-L424) · [Before (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L264-L267)

```diff
-       if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
-       if (UU.length > oU) return `A file path is over ${oU} characters.`;
-       if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
-       return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
+       if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
+       if (HH.length > zH) return `A file path is over ${zH} characters.`;
+       if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
+       return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L300` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/127.js#L457) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/127.js#L300)

```diff
-           return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
+           return (BH[LH]?.numAnimStates ?? 0) > 1 && !tH.has(AH) ? AH : HH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/128.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/128.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L2)

```diff
- export const ids = [128, 129, 150];
+ export const ids = [128, 131, 152, 153];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L4)

```diff
-   5603: (UU, XU, zU) => {
+   5523: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L6)

```diff
-       d: () => cU.j,
+       b: () => AH.e,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L8)

```diff
-       i: () => cU.o
+       g: () => AH.l
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L10)

```diff
-     var cU = zU(5608);
+     var AH = LH(5531);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L16` → after: `L16-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L16-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L16-L96) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L16)

```diff
-   40071: (UU, XU, zU) => {
+   41811: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => XH,
+       installListedShaderPack: () => EH
+     });
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
+ ... (65 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L18-L21` → after: `L98-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L98-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L98-L111) · [Before (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L18-L21)

```diff
-       ShaderPackPage: () => oU,
-       harnessShaderPackMode: () => NU,
-       setHarnessUrlShaderPack: () => YU,
-       shaderPackPage: () => EU
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

#### 8. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L23-L40` → after: `L113-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L113-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L113-L128) · [Before (L23-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L23-L40)

```diff
-     var cU = zU(97),
-       yU = zU(42),
-       QU = (zU(3854), zU(5603), zU(3849)),
-       AU = zU(7253);
-     zU(7219);
-     const FU = {
-       status: "none"
-     };
-     class oU {
-       constructor() {
-         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
-       }
-       preload() {
-         if (null === this.stored) {
-           if ((0, QU.h)(cU.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), DU().then((UU => {
-             UU && yU.k.removeItem(QU.b)
- ... (2 more removed lines; see GitHub link above)
+     var AH = LH(5531),
+       rH = LH(5523),
+       SH = LH(30),
+       hH = LH(3831),
+       tH = LH(7209),
+       zH = LH(7179);
+     const CH = "shaderPackChangePending";
+     let EH = null;
+ 
+     function XH(HH, BH, LH) {
+       return {
+         manifest: HH.manifest,
+         files: (0, AH.t)(HH.files),
+         validation: BH,
+         ...LH && {
+           listing: LH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L42-L77` → after: `L130-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L130-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L130-L155) · [Before (L42-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L42-L77)

```diff
-         return this.stored
-       }
-       prefetchHint() {
-         return (0, QU.d)(cU.featureFlags.settings.canUseShaderPacks)
-       }
-       async loadActive() {
-         const UU = await this.load();
-         return "active" === UU.status ? UU.pack : null
-       }
-       load() {
-         return this.pagePack ??= this.read().catch((UU => (console.error("Failed to load the shader pack", UU), FU))).then((UU => (this.resolved ??= UU, UU))), this.pagePack
-       }
-       hasNone() {
-         var UU;
-         return "none" === (null === (UU = this.resolved) || void 0 === UU ? void 0 : UU.status)
-       }
- ... (20 more removed lines; see GitHub link above)
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
+ 
+     function uH(HH) {
+       const BH = YH.then(HH);
+       return YH = BH.catch((() => {})), BH
+     }
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L80-L90` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L158-L159) · [Before (L80-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L80-L90)

```diff
-       if (!(0, QU.k)(cU.featureFlags.settings.canUseShaderPacks)) return null;
-       try {
-         const UU = await (0, AU.f)(!0);
-         return UU || yU.k.setItem(QU.b, !1), UU
-       } catch (UU) {
-         return console.error("Failed to read the stored shader pack", UU), yU.k.removeItem(QU.b), null
-       }
-     }
-     const EU = new oU;
- 
-     function YU(UU, XU) {}
+       await SH.c.removeItem(tH.c), SH.e.removeItem(hH.d)
+     }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L93` → after: `L162-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L162-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L162-L228) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L93)

```diff
-       return null
+       return uH(xH)
+     }
+ 
+     function PH(HH, BH) {
+       return "active" === TH(HH, BH).kind
+     }
+ 
+     function TH(HH, BH) {
+       var LH;
+       return null === HH ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : OH(HH) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.ok) || HH.validation.fromRecheck ? null === BH ? {
+ ... (51 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L96-L109` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L231) · [Before (L96-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L96-L109)

```diff
-   7253: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => yU,
-       f: () => QU
-     });
-     var cU = zU(42);
-     const yU = "shaderPack";
-     async function QU() {
-       var UU;
-       let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (UU = await cU.g.getItem(yU, XU)) && void 0 !== UU ? UU : null
-     }
-   },
-   7219: (UU, XU, zU) => {
+   7179: (HH, BH, LH) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L114` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L236) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L114)

```diff
-     var cU = zU(5608);
+     var AH = LH(5531);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L119` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L241) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L119)

```diff
-       return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
+       return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L125` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L247) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L125)

```diff
-         return yU ??= (0, cU.k)(zU, QU, XU), yU
+         return rH ??= (0, AH.f)(LH, SH, BH), rH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L134` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L256) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L134)

```diff
-   5608: (UU, XU, zU) => {
+   7196: (HH, BH, LH) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L137` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L342) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L137)

```diff
-       h: () => AU,
+       f: () => QH,
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L139-L141` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L344-L345) · [Before (L139-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L139-L141)

```diff
-       k: () => aU,
-       m: () => YU,
-       o: () => yU,
+       l: () => rH,
+       n: () => SH,
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L143-L145` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L347-L348) · [Before (L143-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L143-L145)

```diff
-       r: () => DU,
-       u: () => EU,
-       y: () => NU
+       t: () => EH,
+       u: () => GH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L164` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L367) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L164)

```diff
-         if ("string" !== typeof cU) return `${zU} isn't text.`;
+         if ("string" !== typeof AH) return `${LH} isn't text.`;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L173` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L376) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L173)

```diff
-           if (UU.length > FU) return `The pack has more than ${FU} .wgsl files.`;
+           if (HH.length > tH) return `The pack has more than ${tH} .wgsl files.`;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L181` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L384) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L181)

```diff
-             if (XU.has(zU)) return `The pack has two files at ${zU}.`;
+             if (BH.has(LH)) return `The pack has two files at ${LH}.`;
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L184` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L387) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L184)

```diff
-           return NU(UU) > AU ? `The pack's .wgsl files are over ${AU/1024} KB in total.` : null
+           return GH(HH) > hH ? `The pack's .wgsl files are over ${hH/1024} KB in total.` : null
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L209-L212` → after: `L412-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L412-L415) · [Before (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L209-L212)

```diff
-       if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
-       if (UU.length > oU) return `A file path is over ${oU} characters.`;
-       if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
-       return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
+       if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
+       if (HH.length > zH) return `A file path is over ${zH} characters.`;
+       if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
+       return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L245` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/128.js#L448) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/128.js#L245)

```diff
-           return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
+           return (BH[LH]?.numAnimStates ?? 0) > 1 && !tH.has(AH) ? AH : HH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/129.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/129.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L2)

```diff
- export const ids = [129, 150];
+ export const ids = [129, 131, 152, 153];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L4` → after: `L4-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L4-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L4-L164) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L4)

```diff
-   7219: (UU, XU, zU) => {
+   5523: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => AH.e,
+       e: () => rH,
+       g: () => AH.l
+     });
+     var AH = LH(5531);
+     const rH = [!1, !0].flatMap((HH => ["terrain", "liquid", "model"].map((BH => ({
+       strict: HH,
+       program: BH
+     })))))
+   },
+   7201: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       forgetShaderPackActiveHint: () => oH,
+       isOtherApiVersion: () => OH,
+ ... (145 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L9` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L169) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L9)

```diff
-     var cU = zU(5608);
+     var AH = LH(5531);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L14` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L174) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L14)

```diff
-       return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
+       return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L20` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L180) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L20)

```diff
-         return yU ??= (0, cU.k)(zU, QU, XU), yU
+         return rH ??= (0, AH.f)(LH, SH, BH), rH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L29` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L189) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L29)

```diff
-   5608: (UU, XU, zU) => {
+   5531: (HH, BH, LH) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L32` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L194) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L32)

```diff
-       h: () => AU,
+       f: () => QH,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L34-L36` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L196-L197) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L34-L36)

```diff
-       k: () => aU,
-       m: () => YU,
-       o: () => yU,
+       l: () => rH,
+       n: () => SH,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L38-L40` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L199-L200) · [Before (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L38-L40)

```diff
-       r: () => DU,
-       u: () => EU,
-       y: () => NU
+       t: () => EH,
+       u: () => GH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L59` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L219) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L59)

```diff
-         if ("string" !== typeof cU) return `${zU} isn't text.`;
+         if ("string" !== typeof AH) return `${LH} isn't text.`;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L68` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L228) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L68)

```diff
-           if (UU.length > FU) return `The pack has more than ${FU} .wgsl files.`;
+           if (HH.length > tH) return `The pack has more than ${tH} .wgsl files.`;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L76` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L236) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L76)

```diff
-             if (XU.has(zU)) return `The pack has two files at ${zU}.`;
+             if (BH.has(LH)) return `The pack has two files at ${LH}.`;
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L79` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L239) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L79)

```diff
-           return NU(UU) > AU ? `The pack's .wgsl files are over ${AU/1024} KB in total.` : null
+           return GH(HH) > hH ? `The pack's .wgsl files are over ${hH/1024} KB in total.` : null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L104-L107` → after: `L264-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L264-L267) · [Before (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L104-L107)

```diff
-       if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
-       if (UU.length > oU) return `A file path is over ${oU} characters.`;
-       if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
-       return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
+       if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
+       if (HH.length > zH) return `A file path is over ${zH} characters.`;
+       if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
+       return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L140` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/129.js#L300) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/129.js#L140)

```diff
-           return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
+           return (BH[LH]?.numAnimStates ?? 0) > 1 && !tH.has(AH) ? AH : HH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/130.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/130.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66)

#### 1. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L3)

```diff
- export const ids = [130];
+ export const ids = [130, 131, 152];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L5-L18148` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L4-L8) · [Before (L5-L18148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L5-L18148)

```diff
-   6802: function(UU, XU, zU) {
-     var cU;
-     ! function() {
-       var yU, QU = 1e9,
-         AU = {
-           precision: 20,
-           rounding: 4,
-           toExpNeg: -7,
-           toExpPos: 21,
-           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-         },
-         FU = !0,
-         oU = "[DecimalError] ",
-         DU = oU + "Invalid argument: ",
-         EU = oU + "Exponent out of range: ",
-         YU = Math.floor,
- ... (18128 more removed lines; see GitHub link above)
+   5523: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => AH.e,
+       e: () => rH,
+       g: () => AH.l
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L18150-L18278` → after: `L10-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L10-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L10-L27) · [Before (L18150-L18278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L18150-L18278)

```diff
-     var pQ = zU(6813),
-       aQ = zU(6715);
- 
-     function tQ(UU) {
-       for (var XU = UU.length, zU = new Array(XU); --XU >= 0;) zU[XU] = XU;
-       return zU
-     }
- 
-     function gQ(UU, XU) {
-       return UU[XU]
-     }
- 
-     function kQ(UU) {
-       const XU = [];
-       return XU.key = UU, XU
-     }
- ... (113 more removed lines; see GitHub link above)
+     var AH = LH(5531);
+     const rH = [!1, !0].flatMap((HH => ["terrain", "liquid", "model"].map((BH => ({
+       strict: HH,
+       program: BH
+     })))))
+   },
+   40182: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       ShaderPackPage: () => zH,
+       harnessShaderPackMode: () => GH,
+       setHarnessUrlShaderPack: () => XH,
+       shaderPackPage: () => EH
+     });
+     var AH = LH(81),
+       rH = LH(30),
+       SH = (LH(3835), LH(5523), LH(3831)),
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L18280-L18298` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L29) · [Before (L18280-L18298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L18280-L18298)

```diff
-       rangeStep: function(UU, XU, zU) {
-         for (var cU = new(nQ())(UU), yU = 0, QU = []; cU.lt(XU) && yU < 1e5;) QU.push(cU.toNumber()), cU = cU.add(zU), yU++;
-         return QU
-       },
-       getDigitCount: function(UU) {
-         return 0 === UU ? 1 : Math.floor(new(nQ())(UU).abs().log(10).toNumber()) + 1
-       },
-       interpolateNumber: TQ((function(UU, XU, zU) {
-         var cU = +UU;
-         return cU + zU * (+XU - cU)
-       })),
-       uninterpolateNumber: TQ((function(UU, XU, zU) {
-         var cU = XU - +UU;
-         return (zU - UU) / (cU = cU || 1 / 0)
-       })),
-       uninterpolateTruncation: TQ((function(UU, XU, zU) {
- ... (3 more removed lines; see GitHub link above)
+       status: "none"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L18300-L19157` → after: `L31-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L31-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L31-L40) · [Before (L18300-L19157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L18300-L19157)

```diff
- 
-     function QA(UU) {
-       return function(UU) {
-         if (Array.isArray(UU)) return oA(UU)
-       }(UU) || function(UU) {
-         if ("undefined" !== typeof Symbol && Symbol.iterator in Object(UU)) return Array.from(UU)
-       }(UU) || FA(UU) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function AA(UU, XU) {
-       return function(UU) {
-         if (Array.isArray(UU)) return UU
-       }(UU) || function(UU, XU) {
-         if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(UU))) return;
- ... (842 more removed lines; see GitHub link above)
+     class zH {
+       constructor() {
+         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
+       }
+       preload() {
+         if (null === this.stored) {
+           if ((0, SH.k)(AH.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), CH().then((HH => {
+             HH && rH.e.removeItem(SH.d)
+           })), this.stored;
+           this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19159-L19184` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L42) · [Before (L19159-L19184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19159-L19184)

```diff
-         return zU ? void 0 : 0
-       },
-       AF = function(UU, XU, zU) {
-         return UU && UU.length ? MQ()(UU, qQ()(zU, "type.defaultProps.domain")) ? XU : UU : XU
-       },
-       FF = function(UU, XU) {
-         var zU = UU.type.defaultProps ? PA(PA({}, UU.type.defaultProps), UU.props) : UU.props,
-           cU = zU.dataKey,
-           yU = zU.name,
-           QU = zU.unit,
-           AU = zU.formatter,
-           FU = zU.tooltipType,
-           oU = zU.chartType,
-           DU = zU.hide;
-         return PA(PA({}, (0, gA.c)(UU, !1)), {}, {
-           dataKey: cU,
- ... (10 more removed lines; see GitHub link above)
+         return this.stored
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19186-L19208` → after: `L44-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L44-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L44-L76) · [Before (L19186-L19208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19186-L19208)

```diff
-   },
-   6743: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => NU,
-       g: () => YU
-     });
-     var cU = zU(6588);
- 
-     function yU(UU) {
-       return yU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
-         return typeof UU
-       } : function(UU) {
-         return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
-       }, yU(UU)
-     }
- 
- ... (7 more removed lines; see GitHub link above)
+       prefetchHint() {
+         return (0, SH.h)(AH.featureFlags.settings.canUseShaderPacks)
+       }
+       async loadActive() {
+         const HH = await this.load();
+         return "active" === HH.status ? HH.pack : null
+       }
+       load() {
+         return this.pagePack ??= this.read().catch((HH => (console.error("Failed to load the shader pack", HH), tH))).then((HH => (this.resolved ??= HH, HH))), this.pagePack
+       }
+       hasNone() {
+         var HH;
+         return "none" === (null === (HH = this.resolved) || void 0 === HH ? void 0 : HH.status)
+       }
+       block(HH) {
+         this.resolved = {
+ ... (17 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19212-L19220` → after: `L79-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L79-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L79-L85) · [Before (L19212-L19220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19212-L19220)

```diff
- 
-     function AU(UU) {
-       for (var XU = 1; XU < arguments.length; XU++) {
-         var zU = null != arguments[XU] ? arguments[XU] : {};
-         XU % 2 ? QU(Object(zU), !0).forEach((function(XU) {
-           FU(UU, XU, zU[XU])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : QU(Object(zU)).forEach((function(XU) {
-           Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
-         }))
+     async function CH() {
+       if (!(0, SH.m)(AH.featureFlags.settings.canUseShaderPacks)) return null;
+       try {
+         const HH = await (0, hH.e)(!0);
+         return HH || rH.e.setItem(SH.d, !1), HH
+       } catch (HH) {
+         return console.error("Failed to read the stored shader pack", HH), rH.e.removeItem(SH.d), null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19225-L19376` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L90) · [Before (L19225-L19376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19225-L19376)

```diff
-     function FU(UU, XU, zU) {
-       return (XU = function(UU) {
-         var XU = function(UU, XU) {
-           if ("object" != yU(UU) || !UU) return UU;
-           var zU = UU[Symbol.toPrimitive];
-           if (void 0 !== zU) {
-             var cU = zU.call(UU, XU || "default");
-             if ("object" != yU(cU)) return cU;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === XU ? String : Number)(UU)
-         }(UU, "string");
-         return "symbol" == yU(XU) ? XU : XU + ""
-       }(XU)) in UU ? Object.defineProperty(UU, XU, {
-         value: zU,
-         enumerable: !0,
- ... (136 more removed lines; see GitHub link above)
+     function XH(HH, BH) {}
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19378-L19381` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L92-L93) · [Before (L19378-L19381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19378-L19381)

```diff
-     function WU(UU, XU, zU) {
-       return UU && UU.length ? UU.find((function(UU) {
-         return UU && ("function" === typeof XU ? XU(UU) : oU()(UU, XU)) === zU
-       })) : null
+     function GH() {
+       return null
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19398` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L96) · [Before (L19398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19398)

```diff
-   6588: (UU, XU, zU) => {
+   7209: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19402-L19433` → after: `L101-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L101-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L101-L106) · [Before (L19402-L19433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19402-L19433)

```diff
-     var cU = {
-       isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
-       get: function(UU) {
-         return cU[UU]
-       },
-       set: function(UU, XU) {
-         if ("string" === typeof UU) cU[UU] = XU;
-         else {
-           var zU = Object.keys(UU);
-           zU && zU.length && zU.forEach((function(XU) {
-             cU[XU] = UU[XU]
-           }))
-         }
-       }
-     }
-   },
- ... (16 more removed lines; see GitHub link above)
+     var AH = LH(30);
+     const rH = "shaderPack";
+     async function SH() {
+       var HH;
+       let BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (HH = await AH.c.getItem(rH, BH)) && void 0 !== HH ? HH : null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19436-L19440` → after: `L109-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L109-L112) · [Before (L19436-L19440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19436-L19440)

```diff
-   6822: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => FU,
-       d: () => NU,
-       f: () => DU
+   7179: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       loadShaderPackTextures: () => hH,
+       shaderPackTextures: () => tH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19442-L19450` → after: `L114-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L114-L116) · [Before (L19442-L19450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19442-L19450)

```diff
-     zU(5987), zU(61), zU(5845);
- 
-     function cU(UU) {
-       return cU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
-         return typeof UU
-       } : function(UU) {
-         return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
-       }, cU(UU)
-     }
+     var AH = LH(5531);
+     let rH = null,
+       SH = null;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19452-L19460` → after: `L118-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L118-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L118-L126) · [Before (L19452-L19460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19452-L19460)

```diff
-     function yU(UU, XU) {
-       var zU = Object.keys(UU);
-       if (Object.getOwnPropertySymbols) {
-         var cU = Object.getOwnPropertySymbols(UU);
-         XU && (cU = cU.filter((function(XU) {
-           return Object.getOwnPropertyDescriptor(UU, XU).enumerable
-         }))), zU.push.apply(zU, cU)
-       }
-       return zU
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

#### 16. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19463-L19471` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L129-L130) · [Before (L19463-L19471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19463-L19471)

```diff
-     function QU(UU) {
-       for (var XU = 1; XU < arguments.length; XU++) {
-         var zU = null != arguments[XU] ? arguments[XU] : {};
-         XU % 2 ? yU(Object(zU), !0).forEach((function(XU) {
-           AU(UU, XU, zU[XU])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : yU(Object(zU)).forEach((function(XU) {
-           Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
-         }))
-       }
+     function tH() {
+       if (null === rH) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19583` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L134) · [Before (L19583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19583)

```diff
-   5998: (UU, XU, zU) => {
+   5531: (HH, BH, LH) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19589-L19592` → after: `L140-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L140-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L140-L143) · [Before (L19589-L19592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19589-L19592)

```diff
-       h: () => HU,
-       i: () => SU,
-       m: () => uU,
-       p: () => MU,
+       j: () => XH,
+       l: () => rH,
+       n: () => SH,
+       q: () => CH,
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19596-L19630` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L147) · [Before (L19596-L19630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19596-L19630)

```diff
-     var cU = zU(5781),
-       yU = zU.n(cU),
-       QU = zU(5987),
-       AU = zU.n(QU),
-       FU = zU(5751),
-       oU = zU.n(FU),
-       DU = zU(5845),
-       EU = zU.n(DU),
-       YU = zU(5680),
-       NU = zU.n(YU),
-       IU = zU(61),
-       pU = zU(6004),
-       aU = zU(5746),
-       tU = zU(6014),
-       gU = zU(6019),
-       kU = ["children"],
- ... (19 more removed lines; see GitHub link above)
+     const AH = 5;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19633-L19768` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L150) · [Before (L19633-L19768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19633-L19768)

```diff
-       return ZU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
-         return typeof UU
-       } : function(UU) {
-         return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
-       }, ZU(UU)
-     }
-     var RU = {
-         click: "onClick",
-         mousedown: "onMouseDown",
-         mouseup: "onMouseUp",
-         mouseover: "onMouseOver",
-         mousemove: "onMouseMove",
-         mouseout: "onMouseOut",
-         mouseenter: "onMouseEnter",
-         mouseleave: "onMouseLeave",
-         touchcancel: "onTouchCancel",
- ... (120 more removed lines; see GitHub link above)
+       return HH === AH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19783-L19798` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L154) · [Before (L19783-L19798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19783-L19798)

```diff
-       return AU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
-         return typeof UU
-       } : function(UU) {
-         return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
-       }, AU(UU)
-     }
- 
-     function FU(UU, XU) {
-       var zU = Object.keys(UU);
-       if (Object.getOwnPropertySymbols) {
-         var cU = Object.getOwnPropertySymbols(UU);
-         XU && (cU = cU.filter((function(XU) {
-           return Object.getOwnPropertyDescriptor(UU, XU).enumerable
-         }))), zU.push.apply(zU, cU)
-       }
-       return zU
+       return [...HH.features]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19802-L19808` → after: `L161-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L161-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L161-L168) · [Before (L19802-L19808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19802-L19808)

```diff
-       for (var XU = 1; XU < arguments.length; XU++) {
-         var zU = null != arguments[XU] ? arguments[XU] : {};
-         XU % 2 ? FU(Object(zU), !0).forEach((function(XU) {
-           DU(UU, XU, zU[XU])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : FU(Object(zU)).forEach((function(XU) {
-           Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
-         }))
+       if ("object" !== typeof HH || null === HH || Array.isArray(HH)) return "The pack has no files.";
+       const BH = [];
+       for (const [LH, AH] of Object.entries(HH)) {
+         if ("string" !== typeof AH) return `${LH} isn't text.`;
+         BH.push({
+           path: LH,
+           source: AH
+         })
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19810-L19851` → after: `L170-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L170-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L170-L182) · [Before (L19810-L19851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19810-L19851)

```diff
-       return UU
-     }
- 
-     function DU(UU, XU, zU) {
-       return (XU = function(UU) {
-         var XU = function(UU, XU) {
-           if ("object" != AU(UU) || !UU) return UU;
-           var zU = UU[Symbol.toPrimitive];
-           if (void 0 !== zU) {
-             var cU = zU.call(UU, XU || "default");
-             if ("object" != AU(cU)) return cU;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === XU ? String : Number)(UU)
-         }(UU, "string");
-         return "symbol" == AU(XU) ? XU : XU + ""
- ... (26 more removed lines; see GitHub link above)
+       return BH.sort(((HH, BH) => XH(HH.path, BH.path))),
+         function(HH) {
+           if (0 === HH.length) return "The pack has no .wgsl files.";
+           if (HH.length > tH) return `The pack has more than ${tH} .wgsl files.`;
+           const BH = new Set;
+           for (const {
+               path: LH
+             }
+             of HH) {
+             const HH = YH(LH);
+             if (null !== HH) return HH;
+             if (BH.has(LH)) return `The pack has two files at ${LH}.`;
+             BH.add(LH)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19853-L19872` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L184-L185) · [Before (L19853-L19872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19853-L19872)

```diff
-         })))
-       }), []) : (zU || []).map((function(UU) {
-         var XU = UU.item,
-           zU = XU.type.defaultProps,
-           cU = void 0 !== zU ? oU(oU({}, zU), XU.props) : {},
-           QU = cU.dataKey,
-           AU = cU.name,
-           FU = cU.legendType;
-         return {
-           inactive: cU.hide,
-           dataKey: QU,
-           type: NU.iconType || FU || "square",
-           color: (0, yU.T)(XU),
-           value: AU || QU,
-           payload: cU
-         }
- ... (4 more removed lines; see GitHub link above)
+           return GH(HH) > hH ? `The pack's .wgsl files are over ${hH/1024} KB in total.` : null
+         }(BH) ?? BH
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19956-L20008` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L189-L190) · [Before (L19956-L20008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L19956-L20008)

```diff
-       if ("object" === typeof UU && null !== UU) {
-         var XU = UU.$$typeof;
-         switch (XU) {
-           case cU:
-             switch (UU = UU.type) {
-               case QU:
-               case FU:
-               case AU:
-               case NU:
-               case IU:
-                 return UU;
-               default:
-                 switch (UU = UU && UU.$$typeof) {
-                   case EU:
-                   case DU:
-                   case YU:
- ... (37 more removed lines; see GitHub link above)
+       const BH = {};
+       for (const LH of HH) BH[LH.path] = LH.source;
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L20165-L20170` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L195) · [Before (L20165-L20170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L20165-L20170)

```diff
-       let {
-         _intern: zU,
-         _key: cU
-       } = UU;
-       const yU = cU(XU);
-       return zU.has(yU) && (XU = zU.get(yU), zU.delete(yU)), XU
+       return HH < BH ? -1 : HH > BH ? 1 : 0
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L20174-L20189` → after: `L199-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L199-L202) · [Before (L20174-L20189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L20174-L20189)

```diff
-       return null !== UU && "object" === typeof UU ? UU.valueOf() : UU
-     }
-     var oU = zU(6758);
-     const DU = Symbol("implicit");
- 
-     function EU() {
-       var UU = new cU,
-         XU = [],
-         zU = [],
-         yU = DU;
- 
-       function QU(cU) {
-         let QU = UU.get(cU);
-         if (void 0 === QU) {
-           if (yU !== DU) return yU;
-           UU.set(cU, QU = XU.push(cU) - 1)
+       const BH = new TextEncoder;
+       let LH = 0;
+       for (const {
+           source: AH
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L20191-L20204` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L204-L205) · [Before (L20191-L20204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L20191-L20204)

```diff
-         return zU[QU % zU.length]
-       }
-       return QU.domain = function(zU) {
-         if (!arguments.length) return XU.slice();
-         XU = [], UU = new cU;
-         for (const cU of zU) UU.has(cU) || UU.set(cU, XU.push(cU) - 1);
-         return QU
-       }, QU.range = function(UU) {
-         return arguments.length ? (zU = Array.from(UU), QU) : zU.slice()
-       }, QU.unknown = function(UU) {
-         return arguments.length ? (yU = UU, QU) : yU
-       }, QU.copy = function() {
-         return EU(XU, zU).unknown(yU)
-       }, oU.g.apply(QU, arguments), QU
+         of HH) LH += BH.encode(AH).byteLength;
+       return LH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L20214-L20221` → after: `L209-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L209-L212) · [Before (L20214-L20221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L20214-L20221)

```diff
-       return "object" === typeof UU && "length" in UU ? UU : Array.from(UU)
-     }
-   },
-   6715: (UU, XU, zU) => {
-     function cU(UU) {
-       return function() {
-         return UU
-       }
+       if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
+       if (HH.length > zH) return `A file path is over ${zH} characters.`;
+       if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
+       return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L20223-L20234` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L214) · [Before (L20223-L20234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L20223-L20234)

```diff
-     zU.d(XU, {
-       b: () => cU
-     })
-   },
-   6717: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => DU
-     });
-     const cU = Math.PI,
-       yU = 2 * cU,
-       QU = 1e-6,
-       AU = yU - QU;
+     const uH = /^(.*)\[rot\[([1-4])$/;
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L20236-L20304` → after: `L216-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L216-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L216-L293) · [Before (L20236-L20304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L20236-L20304)

```diff
-     function FU(UU) {
-       this._ += UU[0];
-       for (let XU = 1, zU = UU.length; XU < zU; ++XU) this._ += arguments[XU] + UU[XU]
-     }
-     class oU {
-       constructor(UU) {
-         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == UU ? FU : function(UU) {
-           let XU = Math.floor(UU);
-           if (!(XU >= 0)) throw new Error(`invalid digits: ${UU}`);
-           if (XU > 15) return FU;
-           const zU = 10 ** XU;
-           return function(UU) {
-             this._ += UU[0];
-             for (let XU = 1, cU = UU.length; XU < cU; ++XU) this._ += Math.round(arguments[XU] * zU) / zU + UU[XU]
-           }
-         }(UU)
- ... (53 more removed lines; see GitHub link above)
+     function QH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const AH = new Map;
+       BH.forEach(((HH, BH) => {
+         let {
+           numAnimStates: LH,
+           animStartIdx: rH
+         } = HH;
+         for (let SH = 1; SH < LH; SH++) AH.set(rH + SH - 1, BH)
+       }));
+       const rH = Object.entries(HH),
+         SH = new Map;
+       for (const [QH, WH] of rH) {
+         const HH = uH.exec(QH);
+         "1" === HH?.[2] && SH.set(HH[1], WH + 1)
+       }
+ ... (62 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L20306-L20307` → after: `L295-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L295-L298) · [Before (L20306-L20307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L20306-L20307)

```diff
-       toString() {
-         return this._
+       for (const uH of GH.keys()) YH.delete(uH);
+       for (const [uH, QH] of LH) {
+         const HH = GH.get(QH);
+         void 0 === HH || GH.has(uH) || (GH.set(uH, HH), YH.delete(uH))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L20309-L20338` → after: `L300-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L300-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/130.js#L300-L312) · [Before (L20309-L20338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/130.js#L20309-L20338)

```diff
-     }
- 
-     function DU(UU) {
-       let XU = 3;
-       return UU.digits = function(zU) {
-         if (!arguments.length) return XU;
-         if (null == zU) XU = null;
-         else {
-           const UU = Math.floor(zU);
-           if (!(UU >= 0)) throw new RangeError(`invalid digits: ${zU}`);
-           XU = UU
-         }
-         return UU
-       }, () => new oU(XU)
-     }
-     oU.prototype
- ... (14 more removed lines; see GitHub link above)
+       return {
+         named: [...GH].sort(((HH, BH) => {
+           let [LH] = HH, [AH] = BH;
+           return LH < AH ? -1 : LH > AH ? 1 : 0
+         })).map((HH => {
+           let [BH, LH] = HH;
+           return {
+             name: BH,
+             id: LH
+           }
+         })),
+         aliases: [...YH.values()],
+         layers: XH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/131.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/131.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L3)

```diff
- export const ids = [131];
+ export const ids = [131, 152];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L5)

```diff
-   7025: (UU, XU, zU) => {
+   7179: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L7-L13` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L6-L7) · [Before (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L7-L13)

```diff
-       Graph: () => vU,
-       debug: () => wz,
-       default: () => Oz,
-       graphlib: () => QU,
-       layout: () => Iz,
-       util: () => qz,
-       version: () => QX
+       loadShaderPackTextures: () => hH,
+       shaderPackTextures: () => tH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L15-L614` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L9-L11) · [Before (L15-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L15-L614)

```diff
-     var cU = Object.defineProperty,
-       yU = (UU, XU, zU) => ((UU, XU, zU) => XU in UU ? cU(UU, XU, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: zU
-       }) : UU[XU] = zU)(UU, "symbol" != typeof XU ? XU + "" : XU, zU),
-       QU = {};
-     ((UU, XU) => {
-       for (var zU in XU) cU(UU, zU, {
-         get: XU[zU],
-         enumerable: !0
-       })
-     })(QU, {
-       Graph: () => vU,
-       alg: () => gU
- ... (584 more removed lines; see GitHub link above)
+     var AH = LH(5531);
+     let rH = null,
+       SH = null;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L616-L625` → after: `L13-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L13-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L13-L20) · [Before (L616-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L616-L625)

```diff
-     function SU(UU, XU, zU, cU, yU) {
-       Array.isArray(XU) || (XU = [XU]);
-       let QU = XU => {
-           var zU;
-           return null != (zU = UU.isDirected() ? UU.successors(XU) : UU.neighbors(XU)) ? zU : []
-         },
-         AU = {};
-       return XU.forEach((function(XU) {
-         if (!UU.hasNode(XU)) throw new Error("Graph does not have node: " + XU);
-         yU = rU(UU, XU, "post" === zU, AU, QU, cU, yU)
+     function hH() {
+       return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: BH,
+           textureNameToIndex: LH,
+           textureAnimationData: SH
+         } = HH;
+         return rH ??= (0, AH.f)(LH, SH, BH), rH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L629-L677` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L24-L25) · [Before (L629-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L629-L677)

```diff
-     function rU(UU, XU, zU, cU, yU, QU, AU) {
-       return XU in cU || (cU[XU] = !0, zU || (AU = QU(AU, XU)), yU(XU).forEach((function(XU) {
-         AU = rU(UU, XU, zU, cU, yU, QU, AU)
-       })), zU && (AU = QU(AU, XU))), AU
-     }
- 
-     function uU(UU, XU, zU) {
-       return SU(UU, XU, zU, (function(UU, XU) {
-         return UU.push(XU), UU
-       }), [])
-     }
- 
-     function fU(UU, XU) {
-       return uU(UU, XU, "post")
-     }
- 
- ... (33 more removed lines; see GitHub link above)
+     function tH() {
+       if (null === rH) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L680-L713` → after: `L28-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L28-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L28-L42) · [Before (L680-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L680-L713)

```diff
- 
-     function MU(UU, XU, zU, cU) {
-       return function(UU, XU, zU, cU) {
-         if (void 0 === zU) return PU(UU, XU, zU, cU);
-         let yU = !1,
-           QU = UU.nodes();
-         for (let AU = 0; AU < QU.length; AU++) {
-           let FU = QU[AU];
-           if (void 0 === FU) continue;
-           let oU = cU(FU);
-           for (let UU = 0; UU < oU.length; UU++) {
-             let XU = oU[UU];
-             if (!XU) continue;
-             let cU = XU.v === FU ? XU.v : XU.w;
-             zU({
-               v: cU,
- ... (18 more removed lines; see GitHub link above)
+   },
+   5531: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => tH,
+       d: () => hH,
+       e: () => AH,
+       f: () => QH,
+       j: () => XH,
+       l: () => rH,
+       n: () => SH,
+       q: () => CH,
+       t: () => EH,
+       u: () => GH
+     });
+     const AH = 5;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L716-L737` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L45) · [Before (L716-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L716-L737)

```diff
-       let XU = new vU({
-         multigraph: UU.isMultigraph()
-       }).setGraph(UU.graph());
-       return UU.nodes().forEach((zU => {
-         UU.children(zU).length || XU.setNode(zU, UU.node(zU))
-       })), UU.edges().forEach((zU => {
-         XU.setEdge(zU, UU.edge(zU))
-       })), XU
-     }
- 
-     function nU(UU, XU) {
-       let zU, cU, yU = UU.x,
-         QU = UU.y,
-         AU = XU.x - yU,
-         FU = XU.y - QU,
-         oU = UU.width / 2,
- ... (6 more removed lines; see GitHub link above)
+       return HH === AH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L741-L771` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L49) · [Before (L741-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L741-L771)

```diff
-       let XU = UX(jU(UU) + 1).map((() => []));
-       return UU.nodes().forEach((zU => {
-         let cU = UU.node(zU),
-           yU = cU.rank;
-         void 0 !== yU && (XU[yU] || (XU[yU] = []), XU[yU][cU.order] = zU)
-       })), XU
-     }
- 
-     function lU(UU, XU, zU, cU) {
-       let yU = {
-         width: 0,
-         height: 0
-       };
-       return arguments.length >= 4 && (yU.rank = zU, yU.order = cU), VU(UU, "border", yU, XU)
-     }
-     var xU = 65535;
- ... (15 more removed lines; see GitHub link above)
+       return [...HH.features]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L775-L787` → after: `L56-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L56-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L56-L63) · [Before (L775-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L775-L787)

```diff
-       let XU = UU.nodes().map((XU => {
-         let zU = UU.node(XU).rank;
-         return void 0 === zU ? Number.MIN_VALUE : zU
-       }));
-       return JU(Math.max, XU)
-     }
- 
-     function KU(UU, XU) {
-       let zU = Date.now();
-       try {
-         return XU()
-       } finally {
-         console.log(UU + " time: " + (Date.now() - zU) + "ms")
+       if ("object" !== typeof HH || null === HH || Array.isArray(HH)) return "The pack has no files.";
+       const BH = [];
+       for (const [LH, AH] of Object.entries(HH)) {
+         if ("string" !== typeof AH) return `${LH} isn't text.`;
+         BH.push({
+           path: LH,
+           source: AH
+         })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L797-L806` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L84-L85) · [Before (L797-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L797-L806)

```diff
-       return UU + "" + ++TU
-     }
- 
-     function UX(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       null == XU && (XU = UU, UU = 0);
-       let cU = UU => UU < XU;
-       zU < 0 && (cU = UU => XU < UU);
-       let yU = [];
-       for (let QU = UU; cU(QU); QU += zU) yU.push(QU);
+       const BH = {};
+       for (const LH of HH) BH[LH.path] = LH.source;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L811-L842` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L90) · [Before (L811-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L811-L842)

```diff
-       let zU = {};
-       for (let cU of XU) void 0 !== UU[cU] && (zU[cU] = UU[cU]);
-       return zU
-     }
- 
-     function zX(UU, XU) {
-       let zU;
-       return zU = "string" == typeof XU ? UU => UU[XU] : XU, Object.entries(UU).reduce(((UU, XU) => {
-         let [cU, yU] = XU;
-         return UU[cU] = zU(yU, cU), UU
-       }), {})
-     }
-     var cX = "\0";
- 
-     function yX(UU, XU, zU) {
-       var cU, yU, QU, AU, FU, oU;
- ... (16 more removed lines; see GitHub link above)
+       return HH < BH ? -1 : HH > BH ? 1 : 0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L847-L985` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L94-L97) · [Before (L847-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L847-L985)

```diff
-       UU._prev._next = UU._next, UU._next._prev = UU._prev, delete UU._next, delete UU._prev
-     }
- 
-     function FX(UU, XU) {
-       if ("_next" !== UU && "_prev" !== UU) return XU
-     }
-     var oX = class {
-         constructor() {
-           yU(this, "_sentinel");
-           let UU = {};
-           UU._next = UU._prev = UU, this._sentinel = UU
-         }
-         dequeue() {
-           let UU = this._sentinel,
-             XU = UU._prev;
-           if (XU !== UU) return AX(XU), XU
- ... (123 more removed lines; see GitHub link above)
+       const BH = new TextEncoder;
+       let LH = 0;
+       for (const {
+           source: AH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L987-L1044` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L99) · [Before (L987-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L987-L1044)

```diff
-         let FU = QU;
-         return XU && "function" == typeof XU.node && (FU = AU), UU.sources().forEach(FU), UU.nodes().forEach(FU), zU
-       }(UU, null != XU ? XU : null)).forEach((XU => {
-         let zU = UU.edge(XU);
-         UU.removeEdge(XU), zU.forwardName = XU.name, zU.reversed = !0, UU.setEdge(XU.w, XU.v, zU, hU("rev"))
-       }))
-     }
- 
-     function pX(UU) {
-       UU.graph().dummyChains = [], UU.edges().forEach((XU => function(UU, XU) {
-         let zU, cU, yU, QU = XU.v,
-           AU = UU.node(QU).rank,
-           FU = XU.w,
-           oU = UU.node(FU).rank,
-           DU = XU.name,
-           EU = UU.edge(XU),
- ... (42 more removed lines; see GitHub link above)
+         of HH) LH += BH.encode(AH).byteLength;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L1075-L1122` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L104-L107) · [Before (L1075-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L1075-L1122)

```diff
-       UU = function(UU) {
-         let XU = (new vU).setGraph(UU.graph());
-         return UU.nodes().forEach((zU => XU.setNode(zU, UU.node(zU)))), UU.edges().forEach((zU => {
-           let cU = XU.edge(zU.v, zU.w) || {
-               weight: 0,
-               minlen: 1
-             },
-             yU = UU.edge(zU);
-           XU.setEdge(zU.v, zU.w, {
-             weight: cU.weight + yU.weight,
-             minlen: Math.max(cU.minlen, yU.minlen)
-           })
-         })), XU
-       }(UU), aX(UU);
-       let XU, zU, cU = gX(UU);
-       for (eX(cU), dX(cU, UU); XU = wX(cU);) zU = qX(cU, UU, XU), OX(cU, UU, XU, zU)
- ... (32 more removed lines; see GitHub link above)
+       if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
+       if (HH.length > zH) return `A file path is over ${zH} characters.`;
+       if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
+       return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L1126-L1283` → after: `L112-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L112-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L112-L119) · [Before (L1126-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L1126-L1283)

```diff
-       arguments.length < 2 && (XU = UU.nodes()[0]), CX(UU, {}, 1, XU)
-     }
- 
-     function CX(UU, XU, zU, cU, yU) {
-       let QU = zU,
-         AU = UU.node(cU);
-       XU[cU] = !0;
-       let FU = UU.neighbors(cU);
-       return FU && FU.forEach((yU => {
-         Object.hasOwn(XU, yU) || (zU = CX(UU, XU, zU, yU, cU))
-       })), AU.low = QU, AU.lim = zU++, yU ? AU.parent = yU : delete AU.parent, zU
-     }
- 
-     function wX(UU) {
-       return UU.edges().find((XU => UU.edge(XU).cutvalue < 0))
-     }
- ... (142 more removed lines; see GitHub link above)
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const AH = new Map;
+       BH.forEach(((HH, BH) => {
+         let {
+           numAnimStates: LH,
+           animStartIdx: rH
+         } = HH;
+         for (let SH = 1; SH < LH; SH++) AH.set(rH + SH - 1, BH)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L1285-L1326` → after: `L121-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L121-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L121-L132) · [Before (L1285-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L1285-L1326)

```diff
-       let DU = lU(UU, "_bt"),
-         EU = lU(UU, "_bb"),
-         YU = UU.node(AU);
-       UU.setParent(DU, AU), YU.borderTop = DU, UU.setParent(EU, AU), YU.borderBottom = EU, oU.forEach((FU => {
-         var oU;
-         MX(UU, XU, zU, cU, yU, QU, FU);
-         let YU = UU.node(FU),
-           NU = YU.borderTop ? YU.borderTop : FU,
-           IU = YU.borderBottom ? YU.borderBottom : FU,
-           pU = YU.borderTop ? cU : 2 * cU,
-           aU = NU !== IU ? 1 : yU - (null != (oU = QU[AU]) ? oU : 0) + 1;
-         UU.setEdge(DU, NU, {
-           weight: pU,
-           minlen: aU,
-           nestingEdge: !0
-         }), UU.setEdge(IU, EU, {
- ... (26 more removed lines; see GitHub link above)
+       const rH = Object.entries(HH),
+         SH = new Map;
+       for (const [QH, WH] of rH) {
+         const HH = uH.exec(QH);
+         "1" === HH?.[2] && SH.set(HH[1], WH + 1)
+       }
+       const hH = HH => {
+           const BH = uH.exec(HH);
+           return BH && SH.has(BH[1]) ? {
+             root: BH[1],
+             rotation: Number(BH[2]) - 1
+           } : null
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L1328-L1664` → after: `L134-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L134-L137) · [Before (L1328-L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L1328-L1664)

```diff
-         FU = yU[XU][QU - 1],
-         oU = VU(UU, "border", AU, zU);
-       yU[XU][QU] = oU, UU.setParent(oU, cU), FU && UU.setEdge(FU, oU, {
-         weight: 1
-       })
-     }
- 
-     function sX(UU) {
-       var XU;
-       let zU = null == (XU = UU.graph().rankdir) ? void 0 : XU.toLowerCase();
-       ("bt" === zU || "rl" === zU) && function(UU) {
-         UU.nodes().forEach((XU => lX(UU.node(XU)))), UU.edges().forEach((XU => {
-           var zU;
-           let cU = UU.edge(XU);
-           null == (zU = cU.points) || zU.forEach(lX), Object.hasOwn(cU, "y") && lX(cU)
-         }))
- ... (321 more removed lines; see GitHub link above)
+         tH = new Set(rH.map((HH => {
+           let [BH] = HH;
+           return hH(BH)?.root ?? BH
+         }))),
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L1666-L2077` → after: `L139-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L139-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L139-L141) · [Before (L1666-L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L1666-L2077)

```diff
-           cU.has(UU) || cU.set(UU, []), cU.get(UU).push(XU)
-         };
-       for (let QU of UU.nodes()) {
-         let XU = UU.node(QU);
-         if ("number" == typeof XU.rank && yU(XU.rank, QU), "number" == typeof XU.minRank && "number" == typeof XU.maxRank)
-           for (let UU = XU.minRank; UU <= XU.maxRank; UU++) UU !== XU.rank && yU(UU, QU)
-       }
-       return XU.map((function(XU) {
-         return Xz(UU, XU, zU, cU.get(XU) || [])
-       }))
-     }
- 
-     function yz(UU, XU, zU, cU) {
-       let yU = !0,
-         QU = new vU;
-       UU.forEach((function(UU) {
- ... (396 more removed lines; see GitHub link above)
+           const AH = HH.replace(/_?0$/, "");
+           return (BH[LH]?.numAnimStates ?? 0) > 1 && !tH.has(AH) ? AH : HH
+         },
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L2079-L2083` → after: `L143-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L143-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L143-L154) · [Before (L2079-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L2079-L2083)

```diff
-       yU.forEach((XU => {
-         let zU = UU.node(XU);
-         zU && zU.rankdir && QU[XU] && FU.set(XU, (UU.children(XU) || []).filter((UU => UU !== XU)))
-       }));
-       let oU = new Set([...FU.values()].flat()),
+       for (const [uH, QH] of rH) CH.set(QH, zH(hH(uH)?.root ?? uH, QH));
+       const EH = rH.reduce(((HH, BH) => {
+           let [, LH] = BH;
+           return Math.max(HH, LH + 1)
+         }), 0),
+         XH = Array.from({
+           length: EH
+         }, ((HH, BH) => ({
+           id: BH + 1,
+           rotation: 0
+         }))),
+         GH = new Map,
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L2085-L2177` → after: `L156-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L156-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L156-L180) · [Before (L2085-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L2085-L2177)

```diff
-       FU.forEach(((XU, zU) => {
-         oU.has(zU) || DU.set(zU, (XU => {
-           let zU = [],
-             cU = (UU.children(XU) || []).filter((UU => UU !== XU));
-           for (; cU.length > 0;) {
-             let XU = cU.shift();
-             zU.push(XU), (UU.children(XU) || []).filter((UU => UU !== XU)).forEach((UU => cU.push(UU)))
-           }
-           return zU
-         })(zU))
-       }));
-       let EU = new Set([...DU.values()].flat()),
-         YU = UU => {
-           for (let [XU, zU] of DU)
-             if (zU.includes(UU)) return XU;
-           return UU
- ... (77 more removed lines; see GitHub link above)
+       for (const [uH, QH] of rH) {
+         const HH = hH(uH),
+           BH = AH.get(QH);
+         if (void 0 !== BH) {
+           const LH = CH.get(BH);
+           YH.set(uH, {
+             name: uH,
+             texture: LH,
+             kind: "frame"
+           }), HH && !YH.has(HH.root) && YH.set(HH.root, {
+             name: HH.root,
+             texture: LH,
+             kind: "frame"
+           });
+           continue
+         }
+ ... (9 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L2179-L2488` → after: `L182-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L182-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L182-L203) · [Before (L2179-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L2179-L2488)

```diff
-             node: cU,
-             parent: yU
-           } = XU;
-           UU.setNode(zU, cU), void 0 !== yU && UU.setParent(zU, yU)
-         })), AU.forEach((XU => {
-           let {
-             edge: zU,
-             label: cU
-           } = XU;
-           UU.setEdge(zU, cU)
-         })), cU.nodes().forEach((XU => {
-           if (XU === zU) return;
-           let yU = cU.node(XU),
-             QU = UU.node(XU);
-           QU && yU && "number" == typeof yU.x && "number" == typeof yU.y && (QU.x = EU + (yU.x - NU), QU.y = YU + (yU.y - IU))
-         })), delete DU._dagreClusterSubgraph
- ... (294 more removed lines; see GitHub link above)
+             rotation: HH.rotation
+           }, GH.set(LH, BH), YH.set(uH, {
+             name: uH,
+             texture: LH,
+             kind: "rotation"
+           })
+         } else GH.set(LH, QH + 1)
+       }
+       for (const uH of GH.keys()) YH.delete(uH);
+       for (const [uH, QH] of LH) {
+         const HH = GH.get(QH);
+         void 0 === HH || GH.has(uH) || (GH.set(uH, HH), YH.delete(uH))
+       }
+       return {
+         named: [...GH].sort(((HH, BH) => {
+           let [LH] = HH, [AH] = BH;
+ ... (6 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L2490-L2493` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/131.js#L205-L207) · [Before (L2490-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/131.js#L2490-L2493)

```diff
-         }))
-       }(UU))), {
-         graph: UU,
-         rawNodes: DU
+         })),
+         aliases: [...YH.values()],
+         layers: XH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/132.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/132.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L4` → after: `L5-L2317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L5-L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/132.js#L5-L2317) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/132.js#L4)

```diff
-   7062: (UU, XU, zU) => {
+   6731: function(HH, BH, LH) {
+     var AH;
+     ! function() {
+       var rH, SH = 1e9,
+         hH = {
+           precision: 20,
+           rounding: 4,
+           toExpNeg: -7,
+           toExpPos: 21,
+           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
+         },
+         tH = !0,
+         zH = "[DecimalError] ",
+         CH = zH + "Invalid argument: ",
+         EH = zH + "Exponent out of range: ",
+         XH = Math.floor,
+ ... (2297 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L9-L168` → after: `L2493-L20339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L2493-L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/132.js#L2493-L20339) · [Before (L9-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/132.js#L9-L168)

```diff
-       canChange: !0,
-       blockReach: 6,
-       ezBridging: !0,
-       ezBridgingGrowMs: null,
-       ezTowering: !0,
-       ezToweringGrowMs: null,
-       speedMultiplier: 1,
-       crouchingSpeed: 2,
-       walkingSpeed: 4,
-       runningSpeed: 7,
-       jumpAmount: 8,
-       airJumpCount: 0,
-       jumpHoldThrust: null,
-       bunnyhopMaxMultiplier: 1.3,
-       music: null,
-       musicVolumeLevel: .6,
- ... (144 more removed lines; see GitHub link above)
+         "[object Int8Array]": !0,
+         "[object Uint8Array]": !0,
+         "[object Uint8ClampedArray]": !0,
+         "[object Int16Array]": !0,
+         "[object Uint16Array]": !0,
+         "[object Int32Array]": !0,
+         "[object Uint32Array]": !0,
+         "[object Float16Array]": !0,
+         "[object Float32Array]": !0,
+         "[object Float64Array]": !0,
+         "[object BigInt64Array]": !0,
+         "[object BigUint64Array]": !0
+       },
+       cH = Object.prototype.toString;
+ 
+     function eH(HH) {
+ ... (17831 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/133.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/133.js` (50 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61)

#### 1. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L2)

```diff
- export const ids = [133, 702];
+ export const ids = [133];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L4)

```diff
-   37032: (UU, XU, zU) => {
+   6977: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L6` → after: `L7-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L7-L13) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L6)

```diff
-       default: () => fX
+       Graph: () => jH,
+       debug: () => IL,
+       default: () => lL,
+       graphlib: () => SH,
+       layout: () => YL,
+       util: () => fL,
+       version: () => SB
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L8-L40` → after: `L15-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L15-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L15-L1193) · [Before (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L8-L40)

```diff
-     var cU = zU(320),
-       yU = zU(3887),
-       QU = zU(3929),
-       AU = zU(3920),
-       FU = zU(3914),
-       oU = zU(1193),
-       DU = zU(42),
-       EU = zU(1800),
-       YU = zU(1420),
-       NU = zU(1494),
-       IU = zU(1106),
-       pU = zU.n(IU),
-       aU = zU(1726),
-       tU = zU(61),
-       gU = zU(73),
-       kU = zU(2494),
- ... (17 more removed lines; see GitHub link above)
+     var AH = Object.defineProperty,
+       rH = (HH, BH, LH) => ((HH, BH, LH) => BH in HH ? AH(HH, BH, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: LH
+       }) : HH[BH] = LH)(HH, "symbol" != typeof BH ? BH + "" : BH, LH),
+       SH = {};
+     ((HH, BH) => {
+       for (var LH in BH) AH(HH, LH, {
+         get: BH[LH],
+         enumerable: !0
+       })
+     })(SH, {
+       Graph: () => jH,
+       alg: () => MH
+ ... (1163 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L43-L56` → after: `L1196-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1196-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1196-L1208) · [Before (L43-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L43-L56)

```diff
-       var XU;
-       let {
-         eventName: zU
-       } = UU;
-       const {
-         t: cU
-       } = (0, oU.I)(), yU = eU.h[zU], [QU, AU] = (0, tU.useState)((() => Date.now() >= yU.endsAt.getTime())), [FU, DU] = (0, tU.useState)("overall"), EU = function(UU, XU) {
-         const {
-           userContext: zU,
-           isUserContextUpdating: cU
-         } = (0, ZU.d)(), yU = `${UU}:${XU}`, [QU, AU] = (0, tU.useState)({
-           requestKey: yU,
-           leaderboard: {
-             status: "loading"
+       VB(HH)
+     }
+     var gB = function(HH) {
+       let BH = function(HH) {
+           let BH = {},
+             LH = 0;
+ 
+           function AH(rH) {
+             let SH = LH;
+             HH.children(rH).forEach(AH), BH[rH] = {
+               low: SH,
+               lim: LH++
+             }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L58-L81` → after: `L1210-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1210-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1210-L1232) · [Before (L58-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L58-L81)

```diff
-         });
-         return (0, tU.useEffect)((() => {
-           if (cU) return;
-           let QU, FU = !1;
-           const oU = async () => {
-             if ("visible" === document.visibilityState) try {
-               const cU = await CU.c.getGameEventLeaderboard(zU, {
-                 event: UU,
-                 scope: XU
-               });
-               FU || AU({
-                 requestKey: yU,
-                 leaderboard: {
-                   status: "loaded",
-                   leaderboard: cU
-                 }
- ... (8 more removed lines; see GitHub link above)
+           return HH.children(AB).forEach(AH), BH
+         }(HH),
+         LH = HH.graph();
+       if (!Array.isArray(LH.dummyChains)) return;
+       LH.dummyChains.forEach((LH => {
+         let AH = HH.node(LH),
+           rH = AH.edgeObj,
+           SH = function(HH, BH, LH, AH) {
+             let rH, SH = [],
+               hH = [],
+               tH = Math.min(BH[LH].low, BH[AH].low),
+               zH = Math.max(BH[LH].lim, BH[AH].lim);
+             rH = LH;
+             do {
+               rH = HH.parent(rH), SH.push(rH)
+             } while (rH && (BH[rH].low > tH || zH > BH[rH].lim));
+ ... (7 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L83-L86` → after: `L1234-L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1234-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1234-L1244) · [Before (L83-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L83-L86)

```diff
-             FU || (QU = setTimeout(oU, uU))
-           };
-           return oU(), () => {
-             FU = !0, clearTimeout(QU)
+           }(HH, BH, rH.v, rH.w),
+           hH = SH.path,
+           tH = SH.lca,
+           zH = 0,
+           CH = hH[zH],
+           EH = !0;
+         for (; LH !== rH.w;) {
+           if (AH = HH.node(LH), EH) {
+             for (;
+               (CH = hH[zH]) !== tH && HH.node(CH).maxRank < AH.rank;) zH++;
+             CH === tH && (EH = !1)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L88-L108` → after: `L1246-L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1246-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1246-L1248) · [Before (L88-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L88-L108)

```diff
-         }), [UU, XU, yU, zU, cU]), QU.requestKey === yU ? QU.leaderboard : {
-           status: "loading"
-         }
-       }(zU, FU), YU = function(UU) {
-         const XU = (0, tU.useRef)(null),
-           zU = (0, tU.useRef)(0),
-           cU = (0, tU.useRef)(),
-           [yU, QU] = (0, tU.useState)({});
-         return (0, tU.useEffect)((() => {
-           const yU = null === UU || void 0 === UU ? void 0 : UU.entries;
-           if (!yU) return;
-           const AU = new Map(yU.map((UU => [UU.player.name, UU.value]))),
-             FU = XU.current;
-           if (XU.current = AU, null === FU) return;
-           const oU = {};
-           for (const [UU, XU] of AU) {
- ... (5 more removed lines; see GitHub link above)
+           if (!EH) {
+             for (; zH < hH.length - 1 && HH.node(hH[zH + 1]).minRank <= AH.rank;) zH++;
+             CH = hH[zH]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L110-L246` → after: `L1250-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1250-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1250-L1253) · [Before (L110-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L110-L246)

```diff
-           0 !== Object.keys(oU).length && (QU(oU), clearTimeout(cU.current), cU.current = setTimeout((() => {
-             QU({})
-           }), fU))
-         }), [UU]), (0, tU.useEffect)((() => () => {
-           clearTimeout(cU.current)
-         }), []), yU
-       }("loaded" === EU.status ? EU.leaderboard : null), NU = function(UU) {
-         const [XU, zU] = (0, tU.useState)(null), cU = "loaded" === UU.status ? UU.leaderboard.goalProgress : void 0;
-         return (0, tU.useEffect)((() => {
-           cU && zU(cU)
-         }), [cU]), XU
-       }(EU), IU = wU.h[`profileEffect_${yU.prizePack}`];
-       if (QU) return null;
-       const aU = "loaded" === EU.status ? EU.leaderboard : null,
-         gU = null !== (XU = null === aU || void 0 === aU ? void 0 : aU.entries) && void 0 !== XU ? XU : null,
-         kU = null !== aU && void 0 !== aU && aU.own && null !== gU && !gU.some((UU => UU.isOwn)) ? aU.own : null;
- ... (121 more removed lines; see GitHub link above)
+           void 0 !== CH && HH.setParent(LH, CH), LH = HH.successors(LH)[0]
+         }
+       }))
+     };
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L249-L298` → after: `L1256-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1256-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1256-L1258) · [Before (L249-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L249-L298)

```diff
-       let {
-         event: XU,
-         progress: zU
-       } = UU;
-       const {
-         t: cU
-       } = (0, oU.I)(), yU = null !== zU && XU.prizeGoals.some(((UU, XU) => zU[XU] >= UU.target));
-       return (0, rU.jsxs)("div", {
-         className: "GameEventPanelGoals",
-         children: [(0, rU.jsx)("div", {
-           className: "GameEventPanelGoalsHeading",
-           children: cU(yU ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
-         }), (0, rU.jsx)("div", {
-           className: "GameEventPanelGoalRow",
-           children: XU.prizeGoals.map(((UU, XU) => {
-             const yU = null === zU ? null : Math.min(zU[XU], UU.target);
- ... (34 more removed lines; see GitHub link above)
+       let BH = nH(HH, "root", {}, "_root"),
+         LH = function(HH) {
+           let BH = {};
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L300-L314` → after: `L1260-L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1260-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1260-L1262) · [Before (L300-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L300-L314)

```diff
-     function mU(UU) {
-       let {
-         gameNameWithVariation: XU
-       } = UU;
-       const zU = (0, MU.F)(XU),
-         [cU, yU] = (0, tU.useState)(null);
-       if ((0, tU.useEffect)((() => {
-           if (!zU) return;
-           let UU = !0;
-           return (0, vU.k)(zU).then((XU => {
-             UU && yU(XU)
-           })).catch((UU => {
-             console.error(`Failed to load the page copy for ${zU.name}`, UU)
-           })), () => {
-             UU = !1
+           function LH(AH, rH) {
+             let SH = HH.children(AH);
+             SH && SH.length && SH.forEach((HH => LH(HH, rH + 1))), BH[AH] = rH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L316-L392` → after: `L1264-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1264-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1264-L1303) · [Before (L316-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L316-L392)

```diff
-         }), [zU]), !zU || !cU || cU.name !== zU.name) return null;
-       const QU = (0, vU.g)(cU),
-         AU = new Set((0, VU.c)((0, sU.l)()).map((UU => (0, MU.z)(UU)))),
-         FU = cU.similarGames.filter((UU => AU.has((0, MU.z)(UU))));
-       return (0, rU.jsx)("div", {
-         className: "GamePageContent",
-         children: (0, rU.jsxs)("div", {
-           className: "GamePageContentColumns",
-           children: [(0, rU.jsxs)("section", {
-             className: "GamePageContentSection",
-             children: [(0, rU.jsx)("h2", {
-               children: QU.whatIs
-             }), cU.whatIs.map((UU => (0, rU.jsx)("p", {
-               children: UU
-             }, UU)))]
-           }), (0, rU.jsxs)("section", {
- ... (61 more removed lines; see GitHub link above)
+           return HH.children(AB).forEach((HH => LH(HH, 1))), BH
+         }(HH),
+         AH = Object.values(LH),
+         rH = aH(Math.max, AH) - 1,
+         SH = 2 * rH + 1;
+       HH.graph().nestingRoot = BH, HH.edges().forEach((BH => HH.edge(BH).minlen *= SH));
+       let hH = function(HH) {
+         return HH.edges().reduce(((BH, LH) => BH + HH.edge(LH).weight), 0)
+       }(HH) + 1;
+       HH.children(AB).forEach((AH => {
+         RB(HH, BH, SH, hH, rH, LH, AH)
+       })), HH.graph().nodeRankFactor = SH
+     }
+ 
+     function RB(HH, BH, LH, AH, rH, SH, hH) {
+       var tH;
+ ... (24 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L396-L418` → after: `L1310-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1310-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1310-L1319) · [Before (L396-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L396-L418)

```diff
-     var lU = zU(1390),
-       xU = zU(97),
-       JU = zU(1131),
-       jU = zU(34909),
-       KU = zU(1696),
-       bU = zU(1577),
-       TU = zU(1568),
-       hU = zU(1652),
-       UX = zU(1507),
-       XX = zU(1410),
-       zX = zU(37036),
-       cX = zU(1250),
-       yX = zU(1079),
-       QX = zU(344),
-       AX = zU(1086),
-       FX = zU(1592),
- ... (7 more removed lines; see GitHub link above)
+     var jB = function(HH) {
+       HH.children(AB).forEach((function BH(LH) {
+         let AH = HH.children(LH),
+           rH = HH.node(LH);
+         if (AH.length && AH.forEach(BH), rH && Object.hasOwn(rH, "minRank")) {
+           rH.borderLeft = [], rH.borderRight = [];
+           for (let BH = rH.minRank, AH = rH.maxRank + 1; BH < AH; ++BH) nB(HH, "borderLeft", "_bl", LH, rH, BH), nB(HH, "borderRight", "_br", LH, rH, BH)
+         }
+       }))
+     };
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L420-L441` → after: `L1321-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1321-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1321-L1331) · [Before (L420-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L420-L441)

```diff
-     function aX(UU) {
-       let {
-         preview: XU,
-         isBroken: zU
-       } = UU;
-       const cU = null === XU ? null : (0, QU.c)(XU, "small"),
-         AU = (0, yU.f)(null !== cU && void 0 !== cU ? cU : QU.i);
-       return null === XU ? (0, rU.jsx)("div", {
-         className: pU()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
-           FeaturedGamesPopupSlotThumbnailBroken: zU
-         }),
-         children: (0, rU.jsx)(lU.d, {
-           name: zU ? "triangle-exclamation" : "star"
-         })
-       }) : (0, rU.jsx)("div", {
-         className: pU()("FeaturedGamesPopupSlotThumbnail", FU.i),
- ... (6 more removed lines; see GitHub link above)
+     function nB(HH, BH, LH, AH, rH, SH) {
+       let hH = {
+           width: 0,
+           height: 0,
+           rank: SH,
+           borderType: BH
+         },
+         tH = rH[BH][SH - 1],
+         zH = nH(HH, "border", hH, LH);
+       rH[BH][SH] = zH, HH.setParent(zH, AH), tH && HH.setEdge(tH, zH, {
+         weight: 1
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L446-L456` → after: `L1336-L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1336-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1336-L1342) · [Before (L446-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L446-L456)

```diff
-       let {
-         schematicId: XU,
-         gameName: zU
-       } = UU;
-       const {
-         userContext: yU
-       } = (0, ZU.d)(), QU = (0, pX.b)(), [AU, FU] = (0, tU.useState)(null), [oU, DU] = (0, tU.useState)(null), [EU, YU] = (0, tU.useState)(!1), IU = (0, tU.useCallback)((() => {
-         DU(null), CU.c.getFeaturedGames(yU).then((UU => {
-           QU.current && FU(UU.slots)
-         })).catch((UU => {
-           console.error("Failed to get featured games", UU), QU.current && DU("Failed to load featured games")
+       var BH;
+       let LH = null == (BH = HH.graph().rankdir) ? void 0 : BH.toLowerCase();
+       ("bt" === LH || "rl" === LH) && function(HH) {
+         HH.nodes().forEach((BH => ZB(HH.node(BH)))), HH.edges().forEach((BH => {
+           var LH;
+           let AH = HH.edge(BH);
+           null == (LH = AH.points) || LH.forEach(ZB), Object.hasOwn(AH, "y") && ZB(AH)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L458-L551` → after: `L1344-L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1344-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1344-L1350) · [Before (L458-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L458-L551)

```diff
-       }), [yU, QU]);
-       (0, tU.useEffect)((() => {
-         IU()
-       }), [IU]);
-       const pU = (UU, XU) => {
-         EU || (YU(!0), CU.c.setFeaturedGame(yU, UU, XU).then((() => {
-           QU.current && IU()
-         })).catch((UU => {
-           console.error("Failed to set featured game", UU), QU.current && DU("Failed to update the featured slot")
-         })).finally((() => {
-           QU.current && YU(!1)
-         })))
-       };
-       return (0, rU.jsxs)("div", {
-         className: "FeaturedGamesPopupBody",
-         children: [(0, rU.jsx)("h1", {
- ... (78 more removed lines; see GitHub link above)
+       }(HH), ("lr" === LH || "rl" === LH) && (function(HH) {
+         HH.nodes().forEach((BH => dB(HH.node(BH)))), HH.edges().forEach((BH => {
+           var LH;
+           let AH = HH.edge(BH);
+           null == (LH = AH.points) || LH.forEach(dB), Object.hasOwn(AH, "x") && dB(AH)
+         }))
+       }(HH), DB(HH))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L560-L582` → after: `L1354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1354) · [Before (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L560-L582)

```diff
-       let {
-         customLobbies: XU,
-         favouriteLobbies: zU,
-         toggleLikeLobby: cU,
-         showReport: yU
-       } = UU;
-       const [QU, AU] = (0, tU.useState)(BX);
-       return (0, tU.useEffect)((() => {
-         if (QU >= XU.length) return;
-         let UU = !0;
-         return (0, GX.g)().then((() => {
-           UU && AU(QU + ZX)
-         })), () => {
-           UU = !1
-         }
-       }), [QU, XU.length]), (0, rU.jsx)(rU.Fragment, {
- ... (7 more removed lines; see GitHub link above)
+       HH.nodes().forEach((BH => wB(HH.node(BH)))), HH.edges().forEach((BH => wB(HH.edge(BH))))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L613-L631` → after: `L1357-L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1357-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1357-L1359) · [Before (L613-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L613-L631)

```diff
-     function rX(UU, XU) {
-       const zU = YX.f[UU.schematicId];
-       return {
-         listedVariations: [],
-         backgroundImage: (0, QU.c)(UU, "large"),
-         badges: [],
-         category: UU.gameCategory,
-         title: void 0 !== (null === zU || void 0 === zU ? void 0 : zU.title) ? XU(zU.title) : UU.name,
-         variationTitle: null,
-         description: void 0 !== (null === zU || void 0 === zU ? void 0 : zU.description) ? XU(zU.description) : UU.description,
-         ownerSocialPreviewWithoutLocation: "owner" in UU ? UU.owner : null,
-         ccu: UU.ccu,
-         favourites: UU.favourites,
-         isFavourite: null,
-         useRejoinLastLobbyButton: "persistWorld" in UU ? UU.persistWorld : null,
-         showWorldsInsteadOfCustomLobbies: !1,
- ... (3 more removed lines; see GitHub link above)
+     function wB(HH) {
+       let BH = HH.width;
+       HH.width = HH.height, HH.height = BH
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L635-L642` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1363) · [Before (L635-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L635-L642)

```diff
-       var XU, zU, cU;
-       return null !== (XU = null !== (zU = (0, wX.j)() ? function(UU) {
-         for (const [XU, zU] of Object.entries(qX)) {
-           const cU = [XU, ...zU.map((UU => (0, QX.Rb)(XU, UU)))];
-           if (cU.includes(UU)) return cU
-         }
-         return null
-       }(UU) : null) && void 0 !== zU ? zU : null === (cU = YX.d[UU]) || void 0 === cU ? void 0 : cU.listedVariations) && void 0 !== XU ? XU : null
+       HH.y = -HH.y
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L645-L653` → after: `L1366-L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1366-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1366-L1368) · [Before (L645-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L645-L653)

```diff
-     function fX() {
-       const {
-         gameNameWithVariation: UU
-       } = (0, bU.C)();
-       if ((0, tU.useEffect)(LX.r, []), UU && (0, cX.w)(UU)) return (0, rU.jsx)(iX, {
-         urlId: UU
-       }, UU);
-       const XU = UU && (0, yX.l)(UU) ? UU : "firstParty";
-       return (0, rU.jsx)(MX, {}, XU)
+     function dB(HH) {
+       let BH = HH.x;
+       HH.x = HH.y, HH.y = BH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L657-L693` → after: `L1372-L1388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1372-L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1372-L1388) · [Before (L657-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L657-L693)

```diff
-       let {
-         urlId: XU
-       } = UU;
-       const {
-         t: zU
-       } = (0, oU.I)(), {
-         userContext: cU,
-         isUserContextUpdating: yU
-       } = (0, ZU.d)(), QU = (0, tU.useMemo)((() => (0, KU.h)(XU)), [XU]);
-       (0, tU.useMemo)((() => {
-         if (null === QU) return;
-         const UU = JU.userContextManager.peekCurrentUserContext();
-         (null !== UU ? CU.c.getGame(UU, QU.schematicId) : JU.userContextManager.getCurrentUserContext().then((UU => CU.c.getGame(UU, QU.schematicId)))).catch((UU => {
-           null === (0, CU.h)(UU) && console.error(`Failed to get the custom game ${QU.schematicId}`, UU), (0, KU.g)(XU)
-         }))
-       }), [QU, XU]);
- ... (21 more removed lines; see GitHub link above)
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+         LH = {},
+         AH = HH.nodes().filter((BH => !HH.children(BH).length)),
+         rH = AH.map((BH => HH.node(BH).rank)),
+         SH = HB(aH(Math.max, rH) + 1).map((() => []));
+       return AH.sort(((BH, LH) => HH.node(BH).rank - HH.node(LH).rank)).forEach((function AH(rH) {
+         if (LH[rH]) return;
+         LH[rH] = !0;
+         let hH = HH.node(rH);
+         SH[hH.rank].push(rH);
+         let tH = HH.successors(rH);
+         tH && [...tH].sort(((LH, AH) => function(LH, AH) {
+           let rH = HH.node(LH),
+             SH = HH.node(AH);
+           return rB(BH, rH, SH)
+         }(LH, AH))).forEach(AH)
+ ... (1 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L697` → after: `L1392-L1394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1392-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1392-L1394) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L697)

```diff
-       (0, TU.navigateToHomePage)(), (0, CX.e)(UU, XU)
+       let LH = 0;
+       for (let AH = 1; AH < BH.length; ++AH) LH += JB(HH, BH[AH - 1], BH[AH]);
+       return LH
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L700-L733` → after: `L1397-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1397-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1397-L1449) · [Before (L700-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L700-L733)

```diff
-     function MX(UU) {
-       var XU, zU, AU, IU, eU, wU, qU, SU;
-       let {
-         gameNameWithVariation: uU,
-         knownCustomGame: fU = null
-       } = UU;
-       const {
-         t: HU
-       } = (0, oU.I)();
-       (0, EX.j)();
-       const vU = (0, EX.o)(),
-         {
-           userContext: VU,
-           isUserContextUpdating: sU
-         } = (0, ZU.d)(),
-         nU = (0, dX.g)(),
- ... (18 more removed lines; see GitHub link above)
+     function JB(HH, BH, LH) {
+       let AH = function(HH, BH) {
+           return HH.reduce(((HH, LH, AH) => (HH[LH] = BH[AH], HH)), {})
+         }(LH, LH.map(((HH, BH) => BH))),
+         rH = BH.flatMap((BH => {
+           let LH = HH.outEdges(BH);
+           return LH ? LH.map((BH => ({
+             pos: AH[BH.w],
+             weight: HH.edge(BH).weight
+           }))).sort(((HH, BH) => HH.pos - BH.pos)) : []
+         })),
+         SH = 1;
+       for (; SH < LH.length;) SH <<= 1;
+       let hH = 2 * SH - 1;
+       SH -= 1;
+       let tH = new Array(hH).fill(0),
+ ... (37 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L735-L810` → after: `L1451-L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1451-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1451-L1474) · [Before (L735-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L735-L810)

```diff
-         }), [UX]);
-       (0, tU.useEffect)((() => {
-         const UU = UX.gameNameWithVariation;
-         cX.gameNameWithVariation !== UU && UU !== (0, QX.Tb)(UU) && JU((0, MU.A)(cX.gameNameWithVariation), {
-           replace: !0
-         })
-       }), [cX.gameNameWithVariation, UX.gameNameWithVariation, JU]);
-       const [pX, aX] = (0, tU.useState)(""), GX = tU.useRef(null), [BX, ZX] = (0, tU.useState)(), LX = (0, yX.l)(cX.gameNameWithVariation), CX = (0, tU.useMemo)((() => LX ? null : function(UU, XU, zU) {
-         var cU, yU;
-         const AU = YX.d[UU];
-         return (0, OX.P)(AU) ? null : {
-           listedVariations: uX(UU),
-           backgroundImage: (0, QU.g)(UU, (0, QU.b)(AU)),
-           badges: (0, EU.filterBadges)(AU.badges),
-           category: AU.type,
-           title: zU(AU.title),
- ... (60 more removed lines; see GitHub link above)
+ 
+           function AH(BH) {
+             return LH => {
+               LH.in.push(BH), 0 === --LH.indegree && HH.push(LH)
+             }
+           }
+           for (; HH.length;) {
+             let rH = HH.pop();
+             BH.push(rH), rH.in.reverse().forEach(LH(rH)), rH.out.forEach(AH(rH))
+           }
+           return BH.filter((HH => !HH.merged)).map((HH => BB(HH, ["vs", "i", "barycenter", "weight"])))
+         }(Object.values(LH).filter((HH => !HH.indegree)))
+     }
+ 
+     function pB(HH, BH, LH, AH, rH) {
+       let SH = {},
+ ... (8 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L812-L875` → after: `L1476-L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1476-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1476-L1510) · [Before (L812-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L812-L875)

```diff
-         return document.addEventListener("pointerdown", UU, !0), document.addEventListener("keydown", XU, !0), () => {
-           document.removeEventListener("pointerdown", UU, !0), document.removeEventListener("keydown", XU, !0)
-         }
-       }), []), (0, RU.d)("Enter", (UU => {
-         const XU = UU.target instanceof Element ? UU.target : null;
-         if (UU.defaultPrevented || null !== XU && void 0 !== XU && XU.closest("input, textarea, select")) return;
-         const zU = null === XU || void 0 === XU ? void 0 : XU.closest("a, button");
-         zU && zU !== yz.current || (UU.preventDefault(), Iz())
-       })), (0, PU.e)(TU.navigateToHomePage);
-       const Qz = lX.length > 0 || xX.length > 0,
-         Az = !sX.useRejoinLastLobbyButton || 0 === lX.length,
-         Fz = LX && null === sX.ownerSocialPreviewWithoutLocation,
-         oz = VU.getPlayerName() === (null === BX || void 0 === BX || null === (XU = BX.owner) || void 0 === XU ? void 0 : XU.name),
-         Dz = null !== (zU = null === (AU = sX.badges.find((UU => "event" === UU.type))) || void 0 === AU ? void 0 : AU.event) && void 0 !== zU ? zU : null,
-         Ez = Az ? NU.l : NU.f,
-         Yz = (0, rU.jsx)(YU.d, {
- ... (48 more removed lines; see GitHub link above)
+           return HH.forEach((HH => {
+             BH(HH) ? LH.lhs.push(HH) : LH.rhs.push(HH)
+           })), LH
+         }(HH, (HH => Object.hasOwn(HH, "barycenter"))),
+         EH = CH.lhs,
+         XH = CH.rhs.sort(((HH, BH) => BH.i - HH.i)),
+         GH = [],
+         YH = 0,
+         uH = 0,
+         QH = 0;
+       EH.sort(function(HH, BH, LH) {
+         return (AH, rH) => {
+           if (AH.barycenter < rH.barycenter) return -1;
+           if (AH.barycenter > rH.barycenter) return 1;
+           if (HH && ("string" == typeof AH.vs[0] || "string" == typeof rH.vs[0])) {
+             let LH = HH.node(AH.vs[0]),
+ ... (19 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L877-L907` → after: `L1512-L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1512-L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1512-L1551) · [Before (L877-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L877-L907)

```diff
-       function Iz(UU) {
-         (0, eX.h)(), JU((0, GU.b)(cX.gameNameWithVariation, UU))
-       }(0, tU.useEffect)((() => {
-         Nz && (0, TU.navigateToHomePage)()
-       }), [Nz]), (0, tU.useEffect)((() => {
-         if (!1 === sX.canCreateCustomLobbies) return;
-         let UU = !0;
-         return null !== sX.showWorldsInsteadOfCustomLobbies && !1 === sU && (jX(!0), CU.c.getFavouriteLobbies(VU).then((UU => {
-           hX(UU)
-         })), CU.c.getOpenCustomLobbies(VU, {
-           gameNameWithVariation: sX.showWorldsInsteadOfCustomLobbies ? "classic" : cX.gameNameWithVariation,
-           onlyOwnedLobbies: "owned" === Uz,
-           onlyFavouriteLobbies: "favourite" === Uz
-         }).then((XU => {
-           UU && (0, gU.unstable_batchedUpdates)((() => {
-             bX(XU), jX(!1)
- ... (15 more removed lines; see GitHub link above)
+     function yB(HH, BH, LH) {
+       let AH;
+       for (; BH.length && (AH = BH[BH.length - 1]).i <= LH;) BH.pop(), HH.push(AH.vs), LH++;
+       return LH
+     }
+ 
+     function HL(HH, BH, LH, AH, rH) {
+       var SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH;
+       let WH = null,
+         MH = rH;
+       "boolean" == typeof AH ? (MH = AH, WH = null) : void 0 !== AH && (WH = AH);
+       let xH = HH.children(BH),
+         vH = HH.node(BH),
+         PH = vH ? vH.borderLeft : void 0,
+         TH = vH ? vH.borderRight : void 0,
+         UH = {};
+ ... (24 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L909-L917` → after: `L1553-L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1553-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1553-L1638) · [Before (L909-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L909-L917)

```diff
-         }), [VU, TX]),
-         az = (null === BX || void 0 === BX ? void 0 : BX.schematicId) === (0, yX.p)(UX.gameNameWithVariation) ? BX : null,
-         tz = az && (0, MU.G)(UX.gameNameWithVariation, (UU => HU(UU)), az);
-       (0, hU.g)(az && (0, MU.A)(UX.gameNameWithVariation, az));
-       const gz = xU.featureFlags.canUseCustomLobbies && !0 === sX.canCreateCustomLobbies,
-         kz = (0, rU.jsx)("div", {
-           className: "GameInformationPageContentAnchor",
-           children: (0, rU.jsx)(mU, {
-             gameNameWithVariation: cX.gameNameWithVariation
+         }))
+       }(HH, xH);
+       VH.forEach((BH => {
+         if (HH.children(BH.v).length) {
+           let {
+             result: AH
+           } = HL(HH, BH.v, LH, WH, MH);
+           UH[BH.v] = AH, Object.hasOwn(AH, "barycenter") && function(HH, BH) {
+             void 0 !== HH.barycenter ? (HH.barycenter = (HH.barycenter * HH.weight + BH.barycenter * BH.weight) / (HH.weight + BH.weight), HH.weight += BH.weight) : (HH.barycenter = BH.barycenter, HH.weight = BH.weight)
+           }(BH, AH)
+         }
+       }));
+       let OH = iB(VH, LH);
+       ! function(HH, BH) {
+         HH.forEach((HH => {
+           HH.vs = HH.vs.flatMap((HH => BH[HH] ? BH[HH].vs : HH))
+ ... (70 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L919-L1284` → after: `L1640-L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1640-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1640-L1641) · [Before (L919-L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L919-L1284)

```diff
-         });
-       return (0, rU.jsx)(rU.Fragment, {
-         children: (0, rU.jsxs)("article", {
-           className: pU()("GameInformation", {
-             GameInformationFadeIn: nX,
-             GameInformationReleaseCountdown: "releaseCountdown" === (null === (IU = sX.countdownInformation) || void 0 === IU ? void 0 : IU.type)
-           }),
-           children: [tz && (0, rU.jsx)(BU.d, {
-             meta: tz
-           }), (0, rU.jsxs)("div", {
-             className: "GameInformationInner",
-             children: [(0, rU.jsxs)("div", {
-               className: "GameInformationTop",
-               children: [(0, rU.jsxs)("div", {
-                 className: "GameInformationTopBackgroundContainer",
-                 children: [(0, rU.jsx)("div", {
- ... (350 more removed lines; see GitHub link above)
+         }
+       })), SH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1288-L1316` → after: `L1645-L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1645-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1645-L1660) · [Before (L1288-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1288-L1316)

```diff
-       let {
-         variation: XU,
-         isSelected: zU,
-         children: cU
-       } = UU;
-       const oU = YX.d[XU],
-         EU = (0, QU.g)(XU, (0, QU.h)(oU)),
-         YU = (0, yU.f)(EU),
-         NU = (0, AU.f)([(0, QU.f)(XU, (0, QU.b)(oU))]);
-       return (0, rU.jsxs)(TU.LinkPreserveSearch, {
-         to: (0, MU.A)(XU),
-         replace: !0,
-         className: pU()("GameInformationVariation", FU.i, {
-           SelectedGameInformationVariation: zU
-         }),
-         onClick: UU => {
- ... (13 more removed lines; see GitHub link above)
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       if ("function" == typeof BH.customOrder) return void BH.customOrder(HH, LL);
+       let AH = sH(HH),
+         rH = AL(HH, HB(1, AH + 1), "inEdges"),
+         SH = AL(HH, HB(AH - 1, -1, -1), "outEdges"),
+         hH = aB(HH, LH);
+       if (SL(HH, hH), BH.disableOptimalOrderHeuristic) return;
+       let tH, zH = Number.POSITIVE_INFINITY,
+         CH = BH.constraints || [];
+       for (let EH = 0, XH = 0; XH < 4; ++EH, ++XH) {
+         rL(EH % 2 ? rH : SH, EH % 4 >= 2, CH, LH), hH = wH(HH);
+         let BH = sB(HH, hH);
+         BH < zH ? (XH = 0, tH = Object.assign({}, hH), zH = BH) : BH === zH && (tH = structuredClone(hH))
+       }
+       SL(HH, tH)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1336-L1378` → after: `L1663-L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1663-L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1663-L1675) · [Before (L1336-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1336-L1378)

```diff
-     function aU(UU) {
-       let {
-         info: XU,
-         className: zU
-       } = UU;
-       const {
-         statusText: cU,
-         rowText: yU
-       } = (0, IU.f)();
-       return (0, pU.jsxs)("div", {
-         className: NU()("GameApprovalInfoDetails", zU),
-         children: [(0, pU.jsxs)("div", {
-           className: NU()("GameApprovalInfoSummary", XU.overallPassed ? "Passed" : "Failed"),
-           children: [(0, pU.jsx)(EU.d, {
-             name: XU.overallPassed ? "circle-check" : "circle-xmark"
-           }), (0, pU.jsx)("span", {
- ... (27 more removed lines; see GitHub link above)
+     function AL(HH, BH, LH) {
+       let AH = new Map,
+         rH = (HH, BH) => {
+           AH.has(HH) || AH.set(HH, []), AH.get(HH).push(BH)
+         };
+       for (let SH of HH.nodes()) {
+         let BH = HH.node(SH);
+         if ("number" == typeof BH.rank && rH(BH.rank, SH), "number" == typeof BH.minRank && "number" == typeof BH.maxRank)
+           for (let HH = BH.minRank; HH <= BH.maxRank; HH++) HH !== BH.rank && rH(HH, SH)
+       }
+       return BH.map((function(BH) {
+         return BL(HH, BH, LH, AH.get(BH) || [])
+       }))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1383-L1391` → after: `L1678-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1678-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1678-L1699) · [Before (L1383-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1383-L1391)

```diff
-     function kU(UU) {
-       gU.NotificationProvider.showCustomPopup({
-         body: () => (0, pU.jsx)(GU, {
-           ...UU
-         }),
-         middleScreenPopupClassName: "ApprovalInfoPopup",
-         onClose: () => {},
-         unlockPointerKey: "approvalInfoPopup"
-       })
+     function rL(HH, BH, LH, AH) {
+       let rH = !0,
+         SH = new jH;
+       HH.forEach((function(HH) {
+         LH.forEach((HH => SH.setEdge(HH.left, HH.right)));
+         let hH = HH.graph().root,
+           {
+             result: tH,
+             usedBias: zH
+           } = HL(HH, hH, SH, AH, rH);
+         BH && zH && (rH = !rH), tH.vs.forEach(((BH, LH) => HH.node(BH).order = LH)),
+           function(HH, BH, LH) {
+             let AH, rH = {};
+             LH.forEach((LH => {
+               let SH, hH, tH = HH.parent(LH);
+               for (; tH;) {
+ ... (6 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1394-L1484` → after: `L1702-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1702-L1703) · [Before (L1394-L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1394-L1484)

```diff
-     function GU(UU) {
-       let {
-         schematicId: XU,
-         canOverride: zU,
-         onApprovalChanged: YU
-       } = UU;
-       const {
-         t: NU
-       } = (0, tU.I)(), {
-         userContext: IU
-       } = (0, FU.d)(), gU = (0, AU.b)(), [kU, GU] = (0, cU.useState)(null), [BU, ZU] = (0, cU.useState)(null), [RU, PU] = (0, cU.useState)(!1), WU = (0, cU.useCallback)((() => {
-         ZU(null), QU.c.getGameApprovalInfo(IU, XU).then((UU => {
-           gU.current && GU(UU)
-         })).catch((UU => {
-           console.error("Failed to get game approval info", UU), gU.current && ZU(NU("studio:approvalLoadFailed"))
-         }))
- ... (75 more removed lines; see GitHub link above)
+     function SL(HH, BH) {
+       Object.values(BH).forEach((BH => BH.forEach(((BH, LH) => HH.node(BH).order = LH))))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1503-L1520` → after: `L1706-L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1706-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1706-L1749) · [Before (L1503-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1503-L1520)

```diff
-     function AU() {
-       const {
-         t: UU,
-         selectedLanguage: XU
-       } = (0, yU.I)();
-       return {
-         statusText: XU => UU(QU[XU]),
-         rowText: zU => {
-           const QU = (UU, zU) => (0, cU.eb)((0, yU.l)(XU.code, UU), 0, zU);
-           switch (zU.kind) {
-             case "ownerAccountAge": {
-               const XU = zU.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
-               return {
-                 label: UU("studio:approvalAccountAgeLabel"),
-                 value: UU(XU, {
-                   age: QU(XU, zU.accountAgeMs),
- ... (2 more removed lines; see GitHub link above)
+     function hL(HH, BH, LH) {
+       if (BH > LH) {
+         let HH = BH;
+         BH = LH, LH = HH
+       }
+       let AH = HH[BH];
+       AH || (HH[BH] = AH = {}), AH[LH] = !0
+     }
+ 
+     function tL(HH, BH, LH) {
+       if (BH > LH) {
+         let HH = BH;
+         BH = LH, LH = HH
+       }
+       let AH = HH[BH];
+       return void 0 !== AH && Object.hasOwn(AH, LH)
+ ... (28 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1522-L1557` → after: `L1751-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1751-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1751-L1764) · [Before (L1522-L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1522-L1557)

```diff
-             }
-             case "sinceUnbannedOrUnmuted":
-               return {
-                 label: UU("studio:approvalSinceUnbannedLabel"), value: UU("studio:approvalSinceUnbannedValue", {
-                   time: QU("studio:approvalSinceUnbannedValue", zU.sinceMs),
-                   days: zU.minDays
-                 })
-               };
-             case "reportHold": {
-               const {
-                 detail: XU
-               } = zU;
-               if (null === XU) return {
-                 label: UU("studio:approvalUnderInvestigation"),
-                 value: null
-               };
- ... (20 more removed lines; see GitHub link above)
+             }(SH.nodesep, SH.edgesep, AH);
+           return BH.forEach((BH => {
+             let AH;
+             BH.forEach((BH => {
+               let SH = LH[BH];
+               if (void 0 !== SH) {
+                 if (rH.setNode(SH), void 0 !== AH) {
+                   let tH = LH[AH];
+                   if (void 0 !== tH) {
+                     let LH = rH.edge(tH, SH);
+                     rH.setEdge(tH, SH, Math.max(hH(HH, BH, AH), LH || 0))
+                   }
+                 }
+                 AH = BH
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1559` → after: `L1766-L1779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1766-L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1766-L1779) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1559)

```diff
-             }
+             }))
+           })), rH
+         }(HH, BH, LH, rH),
+         tH = rH ? "borderLeft" : "borderRight";
+ 
+       function zH(HH, BH) {
+         let LH = hH.nodes().slice(),
+           AH = {},
+           rH = LH.pop();
+         for (; rH;) {
+           if (AH[rH]) HH(rH);
+           else {
+             AH[rH] = !0, LH.push(rH);
+             for (let HH of BH(rH)) LH.push(HH)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1565-L1566` → after: `L1813-L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1813-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1813-L1967) · [Before (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1565-L1566)

```diff
-     function FU(UU) {
-       return null === UU.manualOverride && UU.rows.some((UU => "reportHold" === UU.kind && !UU.passed))
+     function CL(HH, BH) {
+       let LH, AH = wH(HH),
+         rH = Object.assign(function(HH, BH) {
+           let LH = {};
+           return BH.length && BH.reduce((function(BH, AH) {
+             let rH = 0,
+               SH = 0,
+               hH = BH.length,
+               tH = AH[AH.length - 1];
+             return AH.forEach(((BH, zH) => {
+               let CH = function(HH, BH) {
+                   if (HH.node(BH).dummy) {
+                     let LH = HH.predecessors(BH);
+                     if (LH) return LH.find((BH => HH.node(BH).dummy))
+                   }
+                 }(HH, BH),
+ ... (139 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1607-L1635` → after: `L1970-L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1970-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1970-L1977) · [Before (L1607-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1607-L1635)

```diff
-     function tU(UU, XU) {
-       const zU = !0 === XU.debugResult.gameRefused,
-         QU = zU || XU.code === cU.m.REQUEST_TO_MATCHMAKING ? (0, IU.h)(XU.message) : null;
-       if (null !== QU) return ZU(UU, UU((0, IU.n)(QU)), UU(IU.j[QU])), !0;
-       if (zU) return async function(UU) {
-         const {
-           gameNameWithVariation: XU,
-           lobbyName: zU,
-           shownLobbyName: cU
-         } = oU.gameBridge.latest("connectedGame"), yU = "classic" === XU && (0, FU.A)(zU) ? cU : await (0, DU.g)(UU, XU, zU);
-         return "" !== yU ? UU("general:cantJoinGame", {
-           game: yU
-         }) : UU("general:cantJoinThisGame")
-       }(UU).then((zU => {
-         ZU(UU, zU, XU.message)
-       })), !0;
- ... (13 more removed lines; see GitHub link above)
+     function EL(HH, BH, LH) {
+       var AH;
+       if (!LH) return !1;
+       let rH = null == (AH = BH.node(HH)) ? void 0 : AH.edgeObj;
+       if (!rH || BH.node(HH).edgeLabel.reversed) return !1;
+       let SH = LH.indexOf(null == rH ? void 0 : rH.v),
+         hH = LH.indexOf(null == rH ? void 0 : rH.w);
+       return -1 !== SH && -1 !== hH && SH === (hH + 1) % LH.length || SH === (hH - 1) % LH.length
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1639-L1641` → after: `L1981-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1981-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L1981-L2001) · [Before (L1639-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1639-L1641)

```diff
-       !0 !== (null === XU || void 0 === XU ? void 0 : XU.takenDown) ? ZU(UU, UU("general:cantJoinThisGame"), yU.e.customGameTakenDown.text) : GU(UU, "lock", UU("studio:gameTakenDownTitle", {
-         game: XU.name
-       }), UU("studio:viewInStudio"), XU.schematicId)
+       (function(HH) {
+         let BH = wH(HH),
+           LH = HH.graph(),
+           AH = LH.ranksep,
+           rH = LH.rankalign,
+           SH = 0;
+         BH.forEach((BH => {
+           let LH = BH.reduce(((BH, LH) => {
+             var AH;
+             let rH = null != (AH = HH.node(LH).height) ? AH : 0;
+             return BH > rH ? BH : rH
+           }), 0);
+           BH.forEach((BH => {
+             let AH = HH.node(BH);
+             AH.y = "top" === rH ? SH + AH.height / 2 : "bottom" === rH ? SH + LH - AH.height / 2 : SH + LH / 2
+           })), SH += LH + AH
+ ... (5 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1644-L1653` → after: `L2005-L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2005-L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L2005-L2006) · [Before (L1644-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1644-L1653)

```diff
-     function kU() {
-       return (0, QU.p)(oU.gameBridge.latest("connectedGame").gameNameWithVariation)
-     }
-     async function GU(UU, XU, zU, cU, yU) {
-       !0 === await YU.NotificationProvider.showPromptPopup({
-         icon: XU,
-         title: zU,
-         confirmText: cU,
-         cancelText: UU("general:cancel")
-       }).getResult() && (0, pU.navigatePreserveSearch)((0, aU.r)((0, AU.e)(yU), "manage"))
+     function YL(HH) {
+       return QL(HH, iH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), HH
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1655-L1659` → after: `L2008-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2008-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L2008-L2014) · [Before (L1655-L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1655-L1659)

```diff
-     async function BU(UU) {
-       try {
-         return await EU.c.getGame(await NU.userContextManager.getCurrentUserContext(), UU, !0)
-       } catch (XU) {
-         return (0, EU.e)(XU) || console.error(`Failed to get game ${UU}`, XU), null
+ 
+     function uL(HH, BH, LH) {
+       let AH = BH;
+       for (; void 0 !== AH;) {
+         let BH = HH.parent(AH);
+         if (BH === LH) return AH;
+         AH = BH
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1664-L1670` → after: `L2019-L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2019-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L2019-L2216) · [Before (L1664-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1664-L1670)

```diff
-       YU.NotificationProvider.showPromptPopup({
-         icon: "lock",
-         title: XU,
-         subtitle: zU,
-         confirmText: UU("general:ok"),
-         cancelText: ""
-       })
+       var AH;
+       let rH = HH.nodes().filter((BH => HH.children(BH).length)),
+         SH = {};
+       rH.forEach((AH => {
+         let rH = HH.node(AH);
+         if (rH && rH.rankdir) {
+           let hH = new jH({
+             multigraph: !0,
+             compound: !0
+           });
+           hH.setGraph({
+             rankdir: rH.rankdir
+           });
+           let tH = HH.children(AH);
+           tH.forEach((BH => {
+             let LH = {
+ ... (182 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1681-L1682` → after: `L2219-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2219-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L2219-L2334) · [Before (L1681-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1681-L1682)

```diff
-     function AU(UU) {
-       return UU = function(UU, XU) {
+     function WL(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+       var rH, SH;
+       let hH = !1 !== (null == LH ? void 0 : LH.useDynamic),
+         tH = hH && null != (rH = null == AH ? void 0 : AH.graph) ? rH : null,
+         zH = hH && null != (SH = null == AH ? void 0 : AH.rawNodes) ? SH : null;
+       BH("    makeSpaceForEdgeLabels", (() => function(HH) {
+         let BH = HH.graph();
+         BH.ranksep /= 2, HH.edges().forEach((LH => {
+           var AH;
+           let rH = HH.edge(LH);
+           rH.minlen *= 2, "c" !== (null != (AH = rH.labelpos) ? AH : "r").toLowerCase() && ("TB" === BH.rankdir || "BT" === BH.rankdir ? rH.width += rH.labeloffset : rH.height += rH.labeloffset)
+         }))
+       }(HH))), BH("    removeSelfEdges", (() => function(HH) {
+         HH.edges().forEach((BH => {
+           if (BH.v === BH.w) {
+ ... (100 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1684-L1711` → after: `L2336-L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2336-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L2336-L2448) · [Before (L1684-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1684-L1711)

```diff
-         const cU = new URLSearchParams(XU),
-           yU = cU.get("lobby"),
-           QU = cU.get("vm"),
-           AU = null !== (zU = yU) && void 0 !== zU ? zU : UU.lobbyName,
-           FU = null !== QU && void 0 !== QU ? QU : UU.directJoinVmUrl;
-         if (AU === UU.lobbyName && FU === UU.directJoinVmUrl) return UU;
-         return {
-           ...UU,
-           lobbyName: AU,
-           directJoinVmUrl: FU
-         }
-       }(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), UU = function(UU) {
-         if ((0, QU.P)(UU.directJoinVmUrl)) return UU;
-         const XU = (0, yU.S)(UU.directJoinVmUrl);
-         null === XU && (UU.directJoinVmUrl = void 0);
-         return UU
- ... (12 more removed lines; see GitHub link above)
+         let LH = null == (BH = HH.graph().rankdir) ? void 0 : BH.toLowerCase();
+         ("lr" === LH || "rl" === LH) && DB(HH)
+       }(HH))), BH("    position", (() => XL(HH, LH.corePath))), BH("    positionSelfEdges", (() => function(HH) {
+         HH.nodes().forEach((BH => {
+           let LH = HH.node(BH),
+             AH = HH => "number" == typeof HH && isFinite(HH);
+           if ("selfedge" === LH.dummy) {
+             let rH = LH,
+               SH = HH.node(rH.e.v),
+               hH = AH(null == SH ? void 0 : SH.x) ? SH.x : 0,
+               tH = AH(null == SH ? void 0 : SH.y) ? SH.y : 0,
+               zH = AH(null == SH ? void 0 : SH.width) ? SH.width : 0,
+               CH = AH(null == SH ? void 0 : SH.height) ? SH.height : 0,
+               EH = AH(LH.x) ? LH.x : hH,
+               XH = AH(LH.y) ? LH.y : tH,
+               GH = zH / 2,
+ ... (97 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1713-L1714` → after: `L2450-L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2450-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L2450-L2494) · [Before (L1713-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1713-L1714)

```diff
-     function yU() {
-       cU = !0
+         function zH(HH) {
+           let SH = HH.x,
+             hH = HH.y,
+             tH = HH.width,
+             zH = HH.height;
+           BH = Math.min(BH, SH - tH / 2), LH = Math.max(LH, SH + tH / 2), AH = Math.min(AH, hH - zH / 2), rH = Math.max(rH, hH + zH / 2)
+         }
+         HH.nodes().forEach((BH => zH(HH.node(BH)))), HH.edges().forEach((BH => {
+           let LH = HH.edge(BH);
+           Object.hasOwn(LH, "x") && zH(LH)
+         })), BH -= hH, AH -= tH, HH.nodes().forEach((LH => {
+           let rH = HH.node(LH);
+           rH.x -= BH, rH.y -= AH
+         })), HH.edges().forEach((LH => {
+           let rH = HH.edge(LH);
+           rH.points.forEach((HH => {
+ ... (29 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1717-L1718` → after: `L2497-L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2497-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L2497-L2506) · [Before (L1717-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1717-L1718)

```diff
-     function QU() {
-       return cU
+     function ML(HH, BH) {
+       HH.nodes().forEach((LH => {
+         let AH = HH.node(LH),
+           rH = BH.node(LH);
+         AH && (AH.x = rH.x, AH.y = rH.y, AH.order = rH.order, AH.rank = rH.rank, BH.children(LH).length && (AH.width = rH.width, AH.height = rH.height))
+       })), HH.edges().forEach((LH => {
+         let AH = HH.edge(LH),
+           rH = BH.edge(LH);
+         AH.points = rH.points, Object.hasOwn(rH, "x") && (AH.x = rH.x, AH.y = rH.y)
+       })), HH.graph().width = BH.graph().width, HH.graph().height = BH.graph().height
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1720-L1730` → after: `L2508-L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2508-L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L2508-L2531) · [Before (L1720-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1720-L1730)

```diff
-   },
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
+     var xL = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
+       vL = {
+         ranksep: 50,
+         edgesep: 20,
+         nodesep: 50,
+         rankdir: "TB",
+         rankalign: "center"
+       },
+       PL = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
+       TL = ["width", "height", "rank"],
+       UL = {
+         width: 0,
+         height: 0
+       },
+       VL = ["minlen", "weight", "width", "height", "labeloffset"],
+       OL = {
+ ... (8 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1733` → after: `L2534-L2549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2534-L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L2534-L2549) · [Before (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1733)

```diff
-       return AU(UU) === cU.e.gameOrPluginOnPlayerAuthRejected.code
+       let BH = new jH({
+           multigraph: !0,
+           compound: !0
+         }),
+         LH = oL(HH.graph());
+       return BH.setGraph(Object.assign({}, vL, mL(LH, xL), BB(LH, PL))), HH.nodes().forEach((LH => {
+         let AH = mL(oL(HH.node(LH)), TL);
+         Object.keys(UL).forEach((HH => {
+           void 0 === AH[HH] && (AH[HH] = UL[HH])
+         })), BH.setNode(LH, AH);
+         let rH = HH.parent(LH);
+         void 0 !== rH && BH.setParent(LH, rH)
+       })), HH.edges().forEach((LH => {
+         let AH = oL(HH.edge(LH));
+         BH.setEdge(LH, Object.assign({}, OL, mL(AH, VL), BB(AH, bL)))
+       })), BH
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1736-L1737` → after: `L2552-L2553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2552-L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L2552-L2553) · [Before (L1736-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1736-L1737)

```diff
-     function AU(UU) {
-       return "object" === typeof UU && null !== UU ? UU.code : void 0
+     function mL(HH, BH) {
+       return LB(BB(HH, BH), Number)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1741-L1742` → after: `L2557-L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2557-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L2557-L2561) · [Before (L1741-L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1741-L1742)

```diff
-       var XU;
-       return null !== (XU = Object.keys(yU.b).find((XU => yU.b[XU] === UU))) && void 0 !== XU ? XU : null
+       let BH = {};
+       return HH && Object.entries(HH).forEach((HH => {
+         let [LH, AH] = HH;
+         "string" == typeof LH && (LH = LH.toLowerCase()), BH[LH] = AH
+       })), BH
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1746-L1761` → after: `L2565-L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2565-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/133.js#L2565-L2596) · [Before (L1746-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/133.js#L1746-L1761)

```diff
-       return "notWhitelisted" === UU ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
-     }
-     const DU = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
-     }
-   },
-   37067: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => yU,
-       h: () => cU
-     });
-     const cU = "skyblockSkills",
-       yU = "skills_test_gym"
+       let BH = wH(HH),
+         LH = new jH({
+           compound: !0,
+           multigraph: !0
+         }).setGraph({});
+       return HH.nodes().forEach((BH => {
+         LH.setNode(BH, {
+           label: BH
+         }), LH.setParent(BH, "layer" + HH.node(BH).rank)
+       })), HH.edges().forEach((HH => LH.setEdge(HH.v, HH.w, {}, HH.name))), BH.forEach(((HH, BH) => {
+         let AH = "layer" + BH;
+         LH.setNode(AH, {
+           rank: "same"
+         }), HH.reduce(((HH, BH) => (LH.setEdge(HH, BH, {
+           style: "invis"
+         }), BH)))
+ ... (16 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/134.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/134.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/134.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/134.js#L4)

```diff
-   9305: (UU, XU, zU) => {
+   7014: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L9-L70` → after: `L8-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L8-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/134.js#L8-L46) · [Before (L9-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/134.js#L9-L70)

```diff
-     var cU = zU(2067);
-     const yU = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
-       QU = UU => "string" === typeof UU.icon && "" !== UU.icon && "string" === typeof UU.keycode && yU.test(UU.keycode),
-       AU = UU => "Space" === UU ? "_" : cU.i[UU]
-   },
-   37211: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => yU,
-       g: () => QU
-     });
-     let cU = !1;
- 
-     function yU() {
-       return cU
-     }
- 
- ... (46 more removed lines; see GitHub link above)
+     const AH = {
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
+ ... (23 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L72-L388` → after: `L48-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L48-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/134.js#L48-L168) · [Before (L72-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/134.js#L72-L388)

```diff
-       }
-     }
- 
-     function yU(UU) {
-       return UU < 15 ? "<15" : UU < 30 ? "15-30" : UU < 50 ? "30-50" : "50+"
-     }
- 
-     function QU(UU) {
-       return Math.round(10 * UU) / 10
-     }
-   },
-   40626: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => yU
-     });
-     var cU = zU(1328);
- ... (301 more removed lines; see GitHub link above)
+       },
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
+       middleTextTop: "",
+ ... (105 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/135.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/135.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L2)

```diff
- export const ids = [135, 136];
+ export const ids = [135, 705];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L4-L6)

```diff
-   7126: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => yU
+   37192: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       default: () => qB
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L8` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L8-L40) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L8)

```diff
-     var cU = zU(1305);
+     var AH = LH(304),
+       rH = LH(3892),
+       SH = LH(3924),
+       hH = LH(3919),
+       tH = LH(3917),
+       zH = LH(1123),
+       CH = LH(30),
+       EH = LH(1789),
+       XH = LH(1365),
+       GH = LH(1455),
+       YH = LH(1038),
+       uH = LH.n(YH),
+       QH = LH(1706),
+       WH = LH(45),
+       MH = LH(69),
+       xH = LH(2523),
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L12-L13` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L45) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L12-L13)

```diff
-         href: XU,
-         children: zU
+         eventName: LH
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L45-L50` → after: `L49-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L49-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L49-L244) · [Before (L45-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L45-L50)

```diff
-       } = (0, cU.I)();
-       return (0, QU.jsxs)(QU.Fragment, {
-         children: [UU("superBotXd:deepSeekNotice"), " ", (0, QU.jsx)(yU.c, {
-           href: AU,
-           children: UU("superBotXd:deepSeekPrivacyPolicy")
-         })]
+       } = (0, zH.B)(), rH = mH.h[LH], [SH, hH] = (0, WH.useState)((() => Date.now() >= rH.endsAt.getTime())), [tH, CH] = (0, WH.useState)("overall"), EH = function(HH, BH) {
+         const {
+           userContext: LH,
+           isUserContextUpdating: AH
+         } = (0, TH.e)(), rH = `${HH}:${BH}`, [SH, hH] = (0, WH.useState)({
+           requestKey: rH,
+           leaderboard: {
+             status: "loading"
+           }
+         });
+         return (0, WH.useEffect)((() => {
+           if (AH) return;
+           let SH, tH = !1;
+           const zH = async () => {
+             if ("visible" === document.visibilityState) try {
+               const AH = await oH.d.getGameEventLeaderboard(LH, {
+ ... (180 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L54` → after: `L248-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L248-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L248-L252) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L54)

```diff
-     function EU() {
+     function NH(HH) {
+       let {
+         event: BH,
+         progress: LH
+       } = HH;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L57-L64` → after: `L255-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L255-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L255-L290) · [Before (L57-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L57-L64)

```diff
-       } = (0, cU.I)();
-       return (0, QU.jsxs)(QU.Fragment, {
-         children: [UU("aiHelperChatGpt:notice"), " ", (0, QU.jsx)(yU.c, {
-           href: FU,
-           children: UU("aiHelperChatGpt:terms")
-         }), " ", (0, QU.jsx)(yU.c, {
-           href: oU,
-           children: UU("aiHelperChatGpt:privacyPolicy")
+       } = (0, zH.B)(), rH = null !== LH && BH.prizeGoals.some(((HH, BH) => LH[BH] >= HH.target));
+       return (0, cH.jsxs)("div", {
+         className: "GameEventPanelGoals",
+         children: [(0, cH.jsx)("div", {
+           className: "GameEventPanelGoalsHeading",
+           children: AH(rH ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
+         }), (0, cH.jsx)("div", {
+           className: "GameEventPanelGoalRow",
+           children: BH.prizeGoals.map(((HH, BH) => {
+             const rH = null === LH ? null : Math.min(LH[BH], HH.target);
+             return (0, cH.jsxs)(WH.Fragment, {
+               children: [BH > 0 && (0, cH.jsx)("div", {
+                 className: "GameEventPanelGoalsOr",
+                 children: AH("gameEvents:goalsOr")
+               }), (0, cH.jsxs)("div", {
+                 className: uH()("GameEventPanelGoal", {
+ ... (20 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L68-L84` → after: `L294-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L294-L298) · [Before (L68-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L68-L84)

```diff
-   },
-   7117: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       default: () => wU
-     });
-     var cU = zU(61),
-       yU = zU(1193),
-       QU = zU(142),
-       AU = zU(241),
-       FU = zU(1494),
-       oU = zU(1349),
-       DU = zU(27),
-       EU = zU(1734),
-       YU = zU(3774),
-       NU = zU(3767),
-       IU = zU(3485),
- ... (1 more removed lines; see GitHub link above)
+     var RH = LH(1543),
+       jH = LH(1613),
+       nH = LH(1026),
+       FH = LH(732),
+       DH = LH(3872);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L88` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L302) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L88)

```diff
-         allowsPersonalizedAds: XU
+         gameNameWithVariation: BH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L90-L156` → after: `L304-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L304-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L304-L345) · [Before (L90-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L90-L156)

```diff
-       return (0, pU.jsxs)(pU.Fragment, {
-         children: [(0, pU.jsx)("h2", {
-           children: "4. Cookies and Tracking Technologies"
-         }), (0, pU.jsx)("h3", {
-           children: "4.1 What Are Cookies?"
-         }), (0, pU.jsx)("p", {
-           children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
-         }), (0, pU.jsx)("h3", {
-           children: "4.2 Types of Cookies We Use"
-         }), (0, pU.jsx)("p", {
-           children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
-         }), (0, pU.jsxs)("table", {
-           children: [(0, pU.jsxs)("tr", {
-             children: [(0, pU.jsx)("td", {
-               children: (0, pU.jsx)("p", {
-                 children: "Type of Cookie"
- ... (51 more removed lines; see GitHub link above)
+       const LH = (0, RH.G)(BH),
+         [AH, rH] = (0, WH.useState)(null);
+       if ((0, WH.useEffect)((() => {
+           if (!LH) return;
+           let HH = !0;
+           return (0, jH.g)(LH).then((BH => {
+             HH && rH(BH)
+           })).catch((HH => {
+             console.error(`Failed to load the page copy for ${LH.name}`, HH)
+           })), () => {
+             HH = !1
+           }
+         }), [LH]), !LH || !AH || AH.name !== LH.name) return null;
+       const SH = (0, jH.d)(AH),
+         hH = new Set((0, nH.c)((0, FH.i)()).map((HH => (0, RH.v)(HH)))),
+         tH = AH.similarGames.filter((HH => hH.has((0, RH.v)(HH))));
+ ... (26 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L158-L170` → after: `L347-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L347-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L347-L354) · [Before (L158-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L158-L170)

```diff
-           }), (0, pU.jsxs)("tr", {
-             children: [(0, pU.jsx)("td", {
-               children: (0, pU.jsx)("p", {
-                 children: "Notice Acceptance Cookies"
-               })
-             }), (0, pU.jsx)("td", {
-               children: (0, pU.jsx)("p", {
-                 children: "Record whether you have acknowledged or accepted notices, such as our cookie policy."
-               })
-             }), (0, pU.jsx)("td", {
-               children: (0, pU.jsx)("p", {
-                 children: "Storing your acceptance of our cookie banner or other notifications."
-               })
+           }), (0, cH.jsxs)("aside", {
+             className: "GamePageContentSection",
+             children: [(0, cH.jsx)("h2", {
+               children: SH.tips
+             }), (0, cH.jsx)("ul", {
+               children: AH.tips.map((HH => (0, cH.jsx)("li", {
+                 children: HH
+               }, HH)))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L172-L184` → after: `L356-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L356-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L356-L390) · [Before (L172-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L172-L184)

```diff
-           }), NU.c && (0, pU.jsxs)("tr", {
-             children: [(0, pU.jsx)("td", {
-               children: (0, pU.jsx)("p", {
-                 children: "Session Recording Storage (only until a recording is sent)"
-               })
-             }), (0, pU.jsx)("td", {
-               children: (0, pU.jsx)("p", {
-                 children: "Store, on your device, parts of a recording that haven\u2019t been sent to us yet, and a small helper that finishes sending them after you close the page. They hold no ID that links them to you or your device."
-               })
-             }), (0, pU.jsx)("td", {
-               children: (0, pU.jsx)("p", {
-                 children: "Session recordings (section 2.5)."
-               })
+           }), (0, cH.jsxs)("section", {
+             className: "GamePageContentSection GamePageContentFaq",
+             children: [(0, cH.jsx)("h2", {
+               children: SH.faq
+             }), AH.faq.map((HH => {
+               let {
+                 question: BH,
+                 answer: LH
+               } = HH;
+               return (0, cH.jsxs)("div", {
+                 className: "GamePageContentFaqItem",
+                 children: [(0, cH.jsx)("h3", {
+                   children: BH
+                 }), (0, cH.jsx)("p", {
+                   children: LH
+                 })]
+ ... (19 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L187-L201` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L393) · [Before (L187-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L187-L201)

```diff
-         }), (0, pU.jsx)("h3", {
-           children: "4.3 Managing Cookies"
-         }), (0, pU.jsx)("p", {
-           children: "You can control cookie settings through your browser. Below are links to guides on how to manage cookies for common browsers:"
-         }), (0, pU.jsxs)("ul", {
-           children: [(0, pU.jsx)("li", {
-             children: "Google Chrome: Go to Settings > Privacy and Security > Clear browsing data > Cookies and other site data."
-           }), (0, pU.jsx)("li", {
-             children: "Mozilla Firefox: Go to Options > Privacy & Security > Cookies and Site Data > Clear Data."
-           }), (0, pU.jsx)("li", {
-             children: "Safari: Go to Preferences > Privacy > Manage Website Data > Remove All."
-           }), (0, pU.jsx)("li", {
-             children: "Microsoft Edge: Go to Settings > Cookies and site permissions > Manage and delete cookies and site data."
-           })]
-         })]
+         })
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L207` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L422-L423) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L207)

```diff
-         allowsPersonalizedAds: XU
+         preview: BH,
+         isBroken: LH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L209-L306` → after: `L425-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L425-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L425-L545) · [Before (L209-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L209-L306)

```diff
-       return (0, pU.jsxs)(pU.Fragment, {
-         children: [(0, pU.jsx)("h2", {
-           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
-         }), (0, pU.jsx)("h3", {
-           children: "2.1 Visitors"
-         }), (0, pU.jsx)("h4", {
-           children: "2.1.1 Data Collection and Usage"
-         }), (0, pU.jsxs)("p", {
-           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
-         }), (0, pU.jsxs)("table", {
-           children: [(0, pU.jsxs)("tr", {
-             children: [(0, pU.jsx)("td", {
-               children: (0, pU.jsx)("p", {
-                 children: "Type of Information"
-               })
-             }), (0, pU.jsx)("td", {
- ... (82 more removed lines; see GitHub link above)
+       const AH = null === BH ? null : (0, SH.h)(BH, "small"),
+         hH = (0, rH.g)(null !== AH && void 0 !== AH ? AH : SH.t);
+       return null === BH ? (0, cH.jsx)("div", {
+         className: uH()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
+           FeaturedGamesPopupSlotThumbnailBroken: LH
+         }),
+         children: (0, cH.jsx)(ZH.c, {
+           name: LH ? "triangle-exclamation" : "star"
+         })
+       }) : (0, cH.jsx)("div", {
+         className: uH()("FeaturedGamesPopupSlotThumbnail", tH.i),
+         style: (0, tH.f)(hH),
+         role: "img",
+         "aria-label": BH.name,
+         children: (0, cH.jsx)(tH.e, {
+           image: hH
+ ... (105 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L308-L487` → after: `L547-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L547-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L547-L548) · [Before (L308-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L308-L487)

```diff
-             children: "Chat you send, including private messages, may appear in other players\u2019 session recordings, watched only by Bloxd staff to fix problems in the game, and staff watching one may read the chat sent in its games from these logs (section 2.5). Chat logs are … [truncated]
-           })]
-         }), (0, pU.jsx)("p", {
-           children: "Before participating in chat rooms, players and their guardians are encouraged to review our Community Conduct."
-         }), (0, pU.jsx)("h3", {
-           children: "2.3 Registered players"
-         }), (0, pU.jsx)("h4", {
-           children: "2.3.1 Age Requirements and Parental Consent"
-         }), (0, pU.jsxs)("p", {
-           children: ["Accounts on Bloxd.io can only be created by players aged 13 or older, or by younger players with parental consent. For those registering through Google, Google will verify the user\u2019s age and obtain parental consent if required. For more details, refer t … [truncated]
-             href: "https://families.google.com/familylink/privacy/child-policy",
-             children: "Google\u2019s Child Privacy Policy"
-           }), "."]
-         }), (0, pU.jsx)("h4", {
-           children: "2.3.2 Data Collection for Registered Players"
-         }), (0, pU.jsx)("p", {
- ... (164 more removed lines; see GitHub link above)
+             className: "FeaturedGamesPopupHint",
+             children: "A game leaves its slot once it ranks higher on its own."
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L489-L551` → after: `L550-L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L550-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L550-L1279) · [Before (L489-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L489-L551)

```diff
-         }), (0, pU.jsx)("p", {
-           children: "Our payment providers, who act as our merchant of record, securely collect payment information and handle it according to the required security & law. Payment information is not shared with or processed by bloxd."
-         }), (0, pU.jsx)("p", {
-           children: "Data Retention: Data related to purchases can be stored for up to 5 years after fulfilling the purposes for which the data were collected to combat fraud and for reporting purposes."
-         }), (0, pU.jsx)("h3", {
-           children: "2.4 When You Contact Us"
-         }), (0, pU.jsx)("p", {
-           children: "When you reach out to us, we collect information to help us respond to you effectively:"
-         }), (0, pU.jsxs)("table", {
-           children: [(0, pU.jsxs)("tr", {
-             children: [(0, pU.jsx)("td", {
-               children: (0, pU.jsx)("p", {
-                 children: "Type of Information"
-               })
-             }), (0, pU.jsx)("td", {
-               children: (0, pU.jsx)("p", {
- ... (47 more removed lines; see GitHub link above)
+         })]
+       })
+     }
+     var MB = LH(5128),
+       xB = LH(4998),
+       vB = LH(3811);
+     const PB = 8,
+       TB = 12;
+ 
+     function UB(HH) {
+       let {
+         customLobbies: BH,
+         favouriteLobbies: LH,
+         toggleLikeLobby: AH,
+         showReport: rH
+       } = HH;
+ ... (714 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L555-L556` → after: `L1354-L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1354-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1354-L1376) · [Before (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L555-L556)

```diff
-         }), (0, pU.jsx)("p", {
-           children: "Data Retention:\xa0We will retain the personal data collected from your inquiries for up to\xa0three months after your query is resolved or closed. This extended period allows us to ensure that any follow-up questions can be addressed. If the inquiry is from  … [truncated]
+         }), BH.rows.length > 0 && (0, uH.jsx)("div", {
+           className: "GameApprovalInfoRows",
+           children: BH.rows.map((HH => {
+             const {
+               label: BH,
+               value: LH
+             } = rH(HH);
+             return (0, uH.jsxs)("div", {
+               className: GH()("GameApprovalInfoRow", HH.passed ? "Passed" : "Failed"),
+               children: [(0, uH.jsx)(EH.c, {
+                 name: HH.passed ? "check" : "xmark"
+               }), (0, uH.jsxs)("div", {
+                 className: "GameApprovalInfoRowText",
+                 children: [(0, uH.jsx)("div", {
+                   className: "GameApprovalInfoRowLabel",
+                   children: BH
+ ... (7 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L563` → after: `L1396-L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1396-L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1396-L1398) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L563)

```diff
-         allowsPersonalizedAds: XU
+         schematicId: BH,
+         canOverride: LH,
+         onApprovalChanged: XH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L565-L952` → after: `L1400-L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1400-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1400-L1479) · [Before (L565-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L565-L952)

```diff
-       return (0, pU.jsxs)(pU.Fragment, {
-         children: [(0, pU.jsx)("h3", {
-           children: "3.3 Service Providers"
-         }), (0, pU.jsx)("p", {
-           children: "We work with trusted third-party service providers to help operate the website and deliver services effectively. These providers only receive the data necessary to perform their functions and are required to maintain the confidentiality and security of your i … [truncated]
-         }), (0, pU.jsx)("h4", {
-           children: "Hosting and Data Storage"
-         }), (0, pU.jsxs)("table", {
-           children: [(0, pU.jsxs)("tr", {
-             children: [(0, pU.jsx)("td", {
-               children: (0, pU.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, pU.jsx)("td", {
-               children: (0, pU.jsx)("p", {
-                 children: "What They Collect"
- ... (372 more removed lines; see GitHub link above)
+       const {
+         t: GH
+       } = (0, WH.B)(), {
+         userContext: YH
+       } = (0, tH.e)(), MH = (0, hH.c)(), [xH, vH] = (0, AH.useState)(null), [PH, TH] = (0, AH.useState)(null), [UH, VH] = (0, AH.useState)(!1), OH = (0, AH.useCallback)((() => {
+         TH(null), SH.d.getGameApprovalInfo(YH, BH).then((HH => {
+           MH.current && vH(HH)
+         })).catch((HH => {
+           console.error("Failed to get game approval info", HH), MH.current && TH(GH("studio:approvalLoadFailed"))
+         }))
+       }), [YH, BH, MH, GH]);
+       (0, AH.useEffect)((() => {
+         OH()
+       }), [OH]);
+       const bH = HH => {
+         UH || (VH(!0), SH.d.setGameApproval(YH, BH, HH).then((() => {
+ ... (64 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L960-L1392` → after: `L1495-L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1495-L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1495-L1560) · [Before (L960-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L960-L1392)

```diff
-         CA: {
-           name: "Canada",
-           status: "bySubdivision"
-         },
-         US: {
-           name: "the United States",
-           status: "bySubdivision"
-         },
-         AT: {
-           name: "Austria",
-           status: "off"
-         },
-         AX: {
-           name: "\xc5land",
-           status: "off"
-         },
- ... (417 more removed lines; see GitHub link above)
+       manuallyApproved: "studio:approvalStatusManuallyApproved",
+       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
+       manuallyDenied: "studio:approvalStatusManuallyDenied",
+       autoApproved: "studio:approvalStatusAutoApproved",
+       notApproved: "studio:approvalStatusNotApproved",
+       notIndexed: "studio:approvalStatusNotIndexed"
+     };
+ 
+     function hH() {
+       const {
+         t: HH,
+         selectedLanguage: BH
+       } = (0, rH.B)();
+       return {
+         statusText: BH => HH(SH[BH]),
+         rowText: LH => {
+ ... (50 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1394-L1395` → after: `L1562-L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1562-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1562-L1563) · [Before (L1394-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L1394-L1395)

```diff
-       };
-     new Set;
+       }
+     }
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1397-L1398` → after: `L1565-L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1565-L1566) · [Before (L1397-L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L1397-L1398)

```diff
-     function BU(UU, XU) {
-       return UU.replace(/^the /, "").localeCompare(XU.replace(/^the /, ""))
+     function tH(HH) {
+       return null === HH.manualOverride && HH.rows.some((HH => "reportHold" === HH.kind && !HH.passed))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1400-L1401` → after: `L1568-L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1568-L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1568-L1571) · [Before (L1400-L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L1400-L1401)

```diff
-     const ZU = new Intl.ListFormat("en-GB", {
-       type: "conjunction"
+   },
+   35020: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => SH
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1405-L1430` → after: `L1577-L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1577-L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1577-L1583) · [Before (L1405-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L1405-L1430)

```diff
-       const {
-         countries: UU,
-         subdivisions: XU
-       } = function(UU) {
-         const XU = [],
-           zU = [];
-         for (const [cU, yU] of Object.entries(kU))
-           if ("bySubdivision" === yU.status) {
-             const XU = Object.entries(GU).filter((XU => {
-               let [zU, yU] = XU;
-               return zU.startsWith(`${cU}-`) && UU(yU)
-             })).map((UU => {
-               let [, XU] = UU;
-               return XU.name
-             }));
-             XU.length > 0 && zU.push({
- ... (10 more removed lines; see GitHub link above)
+       const [HH, BH] = (0, AH.useState)(!1);
+       return (0, AH.useLayoutEffect)((() => {
+         let HH = !0;
+         return (0, rH.e)().then((() => {
+           HH && BH(!0)
+         })), () => {
+           HH = !1
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1432-L1450` → after: `L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1585) · [Before (L1432-L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L1432-L1450)

```diff
-       }((UU => {
-         let {
-           status: XU
-         } = UU;
-         return "off" === XU
-       }));
-       return (0, pU.jsxs)("ul", {
-         children: [(0, pU.jsxs)("li", {
-           children: ["Countries and territories: ", ZU.format(UU), "."]
-         }), XU.map((UU => {
-           let {
-             country: XU,
-             names: zU
-           } = UU;
-           return (0, pU.jsxs)("li", {
-             children: ["In ", XU, ": ", ZU.format(zU), "."]
- ... (3 more removed lines; see GitHub link above)
+       }), []), HH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1453-L1483` → after: `L1607-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1607-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1607-L1635) · [Before (L1453-L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L1453-L1483)

```diff
-     function PU() {
-       return (0, pU.jsxs)(pU.Fragment, {
-         children: [(0, pU.jsx)("h3", {
-           id: "session-recordings",
-           children: "2.5 Session Recordings"
-         }), (0, pU.jsx)("p", {
-           children: "To fix problems in the game, we record some visits to Bloxd by players of any age, guests too, once you have agreed to Bloxd\u2019s privacy popup. We record on bloxd.io in a web browser and in our Android and iOS apps, never in our desktop apps or on other we … [truncated]
-         }), (0, pU.jsx)("p", {
-           children: "What we record: your screen in the game and on Bloxd\u2019s pages as you see them, including chat, usernames, other players\u2019 characters and builds; where you move, click, tap and scroll, and which keys and buttons you press; which pages, games and menus  … [truncated]
-         }), (0, pU.jsx)("p", {
-           children: "Each recording is linked to your player ID: your account\u2019s when you are logged in, else your guest ID. It also keeps a scrambled code made from your internet (IP) address, never the address itself, and whether your network looks shared by many people, su … [truncated]
-         }), (0, pU.jsx)("p", {
-           children: "Why: to fix problems in the game, which is in our legitimate interest. Only Bloxd staff can watch recordings, and we never use one to make decisions about anyone, such as bans. If a recording shows a bug, our staff may look at your other recordings, and may k … [truncated]
-         }), (0, pU.jsx)("p", {
-           children: "Where we never record: we only record when your IP address shows which country you\u2019re in and your device\u2019s time zone is in the same country, never when your IP address belongs to a VPN, proxy or hosting service, and never in these places:"
-         }), (0, pU.jsx)(RU, {}), (0, pU.jsx)("p", {
- ... (15 more removed lines; see GitHub link above)
+     function WH(HH, BH) {
+       const LH = !0 === BH.debugResult.gameRefused,
+         SH = LH || BH.code === AH.h.REQUEST_TO_MATCHMAKING ? (0, YH.f)(BH.message) : null;
+       if (null !== SH) return TH(HH, HH((0, YH.l)(SH)), HH(YH.j[SH])), !0;
+       if (LH) return async function(HH) {
+         const {
+           gameNameWithVariation: BH,
+           lobbyName: LH,
+           shownLobbyName: AH
+         } = zH.gameBridge.latest("connectedGame"), rH = "classic" === BH && (0, tH.G)(LH) ? AH : await (0, CH.f)(HH, BH, LH);
+         return "" !== rH ? HH("general:cantJoinGame", {
+           game: rH
+         }) : HH("general:cantJoinThisGame")
+       }(HH).then((LH => {
+         TH(HH, LH, BH.message)
+       })), !0;
+ ... (13 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1486-L1495` → after: `L1638-L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1638-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1638-L1641) · [Before (L1486-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L1486-L1495)

```diff
-     function WU() {
-       return (0, pU.jsxs)(pU.Fragment, {
-         children: [(0, pU.jsx)("h3", {
-           children: "2.6 Our Staff Analytics Tool"
-         }), (0, pU.jsx)("p", {
-           children: "Bloxd staff use a tool we run ourselves, PostHog, on servers at Hetzner in Finland, to watch session recordings (section 2.5), which Amazon Web Services stores in the United States, and to search our analytics data. Through it, staff can see how players use B … [truncated]
-         }), (0, pU.jsx)("p", {
-           children: "Only Bloxd staff can use it. We use each kind of data only for the reasons this policy gives for collecting it: for example, shared AI Helper conversations only to improve the AI Helper. Besides parts of session recordings, the tool keeps staff accounts, save … [truncated]
-         })]
-       })
+     function MH(HH, BH) {
+       !0 !== (null === BH || void 0 === BH ? void 0 : BH.takenDown) ? TH(HH, HH("general:cantJoinThisGame"), rH.e.customGameTakenDown.text) : vH(HH, "lock", HH("studio:gameTakenDownTitle", {
+         game: BH.name
+       }), HH("studio:viewInStudio"), BH.schematicId)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1499-L1578` → after: `L1645-L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1645-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1645-L1660) · [Before (L1499-L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L1499-L1578)

```diff
-       return (0, pU.jsxs)(pU.Fragment, {
-         children: [(0, pU.jsx)("h2", {
-           children: "8. Your Rights"
-         }), (0, pU.jsx)("h3", {
-           children: "8.1 Your Choices and Control"
-         }), (0, pU.jsx)("p", {
-           children: "As a user of Bloxd.io, you have the right to:"
-         }), (0, pU.jsxs)("ul", {
-           children: [(0, pU.jsx)("li", {
-             children: "Access Your Data: Request a copy of the personal information we hold about you."
-           }), (0, pU.jsx)("li", {
-             children: "Correct Your Data: Ask us to correct any inaccurate or incomplete information."
-           }), (0, pU.jsx)("li", {
-             children: "Delete Your Data: Request the deletion of your personal information when it is no longer needed."
-           }), (0, pU.jsx)("li", {
-             children: "Limit Data Collection: Request that we limit the collection or use of your data."
- ... (64 more removed lines; see GitHub link above)
+       return (0, SH.q)(zH.gameBridge.latest("connectedGame").gameNameWithVariation)
+     }
+     async function vH(HH, BH, LH, AH, rH) {
+       !0 === await XH.NotificationProvider.showPromptPopup({
+         icon: BH,
+         title: LH,
+         confirmText: AH,
+         cancelText: HH("general:cancel")
+       }).getResult() && (0, uH.navigatePreserveSearch)((0, QH.t)((0, hH.d)(rH), "manage"))
+     }
+     async function PH(HH) {
+       try {
+         return await EH.d.getGame(await GH.userContextManager.getCurrentUserContext(), HH, !0)
+       } catch (BH) {
+         return (0, EH.g)(BH) || console.error(`Failed to get game ${HH}`, BH), null
+       }
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1582-L1809` → after: `L1663-L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1663-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1663-L1669) · [Before (L1582-L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L1582-L1809)

```diff
-     function eU() {
-       const {
-         t: UU
-       } = (0, yU.I)(), XU = !(0, AU.shouldUseUkPrivacyPolicy)(), zU = NU.c ? "2.7" : "2.5";
-       return (0, pU.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, pU.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: UU("homePage:privacyPolicy")
-         }), (0, pU.jsx)("p", {
-           children: (0, pU.jsxs)("em", {
-             children: ["Last updated: ", YU.f.toLocaleDateString()]
-           })
-         }), (0, pU.jsx)("p", {
-           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
-         }), (0, pU.jsx)("h2", {
- ... (212 more removed lines; see GitHub link above)
+     function TH(HH, BH, LH) {
+       XH.NotificationProvider.showPromptPopup({
+         icon: "lock",
+         title: BH,
+         subtitle: LH,
+         confirmText: HH("general:ok"),
+         cancelText: ""
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1814-L1830` → after: `L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1714) · [Before (L1814-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L1814-L1830)

```diff
-       const {
-         adMobPrivacyOptionsRequired: UU
-       } = (0, DU.q)(["adMobPrivacyOptionsRequired"]);
-       if (!UU) return null;
-       return (0, pU.jsx)(FU.f, {
-         className: "PrivacyChoicesButton",
-         onClick: () => {
-           (async () => {
-             try {
-               await EU.d.request("ads.showPrivacyOptions", {})
-             } catch (UU) {
-               console.error("Failed to open AdMob privacy options:", UU)
-             }
-           })()
-         },
-         children: "Manage Privacy Choices"
- ... (1 more removed lines; see GitHub link above)
+       AH = !0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1834-L1850` → after: `L1718-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1718-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/135.js#L1718-L1733) · [Before (L1834-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/135.js#L1834-L1850)

```diff
-       return (0, cU.useEffect)((() => {
-         const UU = window.location.hash.slice(1);
-         var XU;
-         "" !== UU && (null === (XU = document.getElementById(UU)) || void 0 === XU || XU.scrollIntoView())
-       }), []), (0, pU.jsxs)(pU.Fragment, {
-         children: [(0, QU.isDiscordClient)() && (0, pU.jsx)(pU.Fragment, {
-           children: (0, pU.jsx)(FU.f, {
-             className: "PrivacyChoicesButton",
-             onClick: () => {
-               (0, oU.r)()
-             },
-             children: "Adjust Discord Privacy Choices"
-           })
-         }), (0, pU.jsx)(CU, {}), (0, pU.jsx)(IU.b, {
-           className: "PrivacyPolicyLinks"
-         }), (0, pU.jsx)(eU, {})]
- ... (1 more removed lines; see GitHub link above)
+       return AH
+     }
+   },
+   9627: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => SH,
+       e: () => hH,
+       f: () => tH,
+       j: () => CH,
+       l: () => zH
+     });
+     var AH = LH(176),
+       rH = LH(5037);
+ 
+     function SH(HH) {
+       return hH(HH) === AH.e.gameOrPluginOnPlayerAuthRejected.code
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/136.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/136.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00)

#### 1. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L4-L7` → after: `L4-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L4-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/136.js#L4-L361) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/136.js#L4-L7)

```diff
-   7123: (UU, XU, zU) => {
-     zU.d(XU, {
-       WorldCodeAiChatGptNotice: () => EU,
-       WorldCodeAiDeepSeekNotice: () => DU,
+   9444: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH,
+       d: () => SH
+     });
+     var AH = LH(2073);
+     const rH = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
+       SH = HH => "string" === typeof HH.icon && "" !== HH.icon && "string" === typeof HH.keycode && rH.test(HH.keycode),
+       hH = HH => "Space" === HH ? "_" : AH.i[HH]
+   },
+   37373: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => rH,
+       e: () => SH
+     });
+     let AH = !1;
+ ... (342 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L10-L43` → after: `L364-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L364-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/136.js#L364-L388) · [Before (L10-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/136.js#L10-L43)

```diff
-       k: () => FU
-     });
-     var cU = zU(1193),
-       yU = zU(7126),
-       QU = zU(1305);
-     const AU = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
-       FU = "https://openai.com/policies/terms-of-use/",
-       oU = "https://openai.com/policies/privacy-policy/";
- 
-     function DU() {
-       const {
-         t: UU
-       } = (0, cU.I)();
-       return (0, QU.jsxs)(QU.Fragment, {
-         children: [UU("superBotXd:deepSeekNotice"), " ", (0, QU.jsx)(yU.c, {
-           href: AU,
- ... (18 more removed lines; see GitHub link above)
+       i: () => tH,
+       j: () => CH
+     });
+     const AH = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((HH => `Key${HH}`)), ...Array.from({
+         length: 10
+       }, ((HH, BH) => `Digit${BH}`)), ...Array.from({
+         length: 12
+       }, ((HH, BH) => `F${BH+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown … [truncated]
+         length: 10
+       }, ((HH, BH) => `Numpad${BH}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
+       rH = new Map(AH.map(((HH, BH) => [HH, BH])));
+ 
+     function SH(HH) {
+       var BH;
+       return null !== (BH = rH.get(HH)) && void 0 !== BH ? BH : 0
+     }
+ ... (9 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/137.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/137.js` (45 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L2)

```diff
- export const ids = [137];
+ export const ids = [137, 138];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L4-L6` → after: `L4-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L4-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L4-L33) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L4-L6)

```diff
-   7129: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       default: () => QU
+   7088: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => rH
+     });
+     var AH = LH(1225);
+ 
+     function rH(HH) {
+       let {
+         href: BH,
+         children: LH
+       } = HH;
+       return (0, AH.jsxs)("a", {
+         className: "WorldCodeAiExternalLink",
+         href: BH,
+         target: "_blank",
+         rel: "noreferrer noopener",
+ ... (14 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L8-L9` → after: `L35-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L35-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L35-L40) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L8-L9)

```diff
-     var cU = zU(1193),
-       yU = zU(1305);
+     var AH = LH(1123),
+       rH = LH(7088),
+       SH = LH(1225);
+     const hH = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
+       tH = "https://openai.com/policies/terms-of-use/",
+       zH = "https://openai.com/policies/privacy-policy/";
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L14-L23` → after: `L45-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L45-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L45-L94) · [Before (L14-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L14-L23)

```diff
-       } = (0, cU.I)();
-       return (0, yU.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, yU.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: UU("homePage:termsOfService")
-         }), (0, yU.jsx)("p", {
-           children: (0, yU.jsx)("em", {
-             children: "Last updated: July 15, 2025"
-           })
+       } = (0, AH.B)();
+       return (0, SH.jsxs)(SH.Fragment, {
+         children: [HH("superBotXd:deepSeekNotice"), " ", (0, SH.jsx)(rH.e, {
+           href: hH,
+           children: HH("superBotXd:deepSeekPrivacyPolicy")
+         })]
+       })
+     }
+ 
+     function EH() {
+       const {
+         t: HH
+       } = (0, AH.B)();
+       return (0, SH.jsxs)(SH.Fragment, {
+         children: [HH("aiHelperChatGpt:notice"), " ", (0, SH.jsx)(rH.e, {
+           href: tH,
+ ... (34 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L25` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L96) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L25)

```diff
-           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
+           children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L27` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L98) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L27)

```diff
-           children: "1. General Information"
+           children: "4.2 Types of Cookies We Use"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L29` → after: `L100-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L100-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L100-L186) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L29)

```diff
-           children: "We may update these Terms at any time. When we do, we\u2019ll post the revised version on our website with the new effective date. Your continued use of Bloxd.io after the changes take effect means you accept the updated Terms. If you do not agree to the chan … [truncated]
+           children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
+         }), (0, uH.jsxs)("table", {
+           children: [(0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Type of Cookie"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Purpose"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Example"
+               })
+             })]
+ ... (71 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L31` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L188) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L31)

```diff
-           children: "2. Definitions"
+           children: "4.3 Managing Cookies"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L33-L45` → after: `L190-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L190-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L190-L231) · [Before (L33-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L33-L45)

```diff
-           children: (0, yU.jsxs)("ul", {
-             children: [(0, yU.jsx)("li", {
-               children: '"Account" means the account you create to access the Services on Bloxd.io.'
-             }), (0, yU.jsx)("li", {
-               children: '"Company" refers to Bloxd LTD and its affiliates, subsidiaries, and associated entities.'
-             }), (0, yU.jsx)("li", {
-               children: '"Services" includes the Bloxd.io website, games, content, and related services provided by us.'
-             }), (0, yU.jsx)("li", {
-               children: '"User", "you", or "your" refers to anyone using the Services.'
-             }), (0, yU.jsx)("li", {
-               children: '"Content" means all text, graphics, logos, images, software, and other material found on Bloxd.io.'
-             }), (0, yU.jsx)("li", {
-               children: '"Virtual Goods" refers to virtual items available for purchase within Bloxd.io, such as game items and in-game currency.'
+           children: "You can control cookie settings through your browser. Below are links to guides on how to manage cookies for common browsers:"
+         }), (0, uH.jsxs)("ul", {
+           children: [(0, uH.jsx)("li", {
+             children: "Google Chrome: Go to Settings > Privacy and Security > Clear browsing data > Cookies and other site data."
+           }), (0, uH.jsx)("li", {
+             children: "Mozilla Firefox: Go to Options > Privacy & Security > Cookies and Site Data > Clear Data."
+           }), (0, uH.jsx)("li", {
+             children: "Safari: Go to Preferences > Privacy > Manage Website Data > Remove All."
+           }), (0, uH.jsx)("li", {
+             children: "Microsoft Edge: Go to Settings > Cookies and site permissions > Manage and delete cookies and site data."
+           })]
+         })]
+       })
+     }
+ 
+     function WH(HH) {
+ ... (26 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L47` → after: `L233-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L233-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L233-L291) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L47)

```diff
-           })
+           }), (0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Technical Info"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "IP address, browser type, device type, screen resolution, language selection"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "To ensure the website functions correctly and displays in your preferred language."
+               })
+             })]
+           }), (0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+ ... (43 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L49` → after: `L293-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L293-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L293-L309) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L49)

```diff
-           children: "3. Age Requirements"
+           children: "2.2 Chat Rooms"
+         }), (0, uH.jsx)("p", {
+           children: "Bloxd.io includes online social features, such as chat rooms, where players can interact. We implement several measures to ensure chat safety:"
+         }), (0, uH.jsxs)("ul", {
+           children: [(0, uH.jsx)("li", {
+             children: "Automated Moderation: Tools are used to automatically detect and filter inappropriate content."
+           }), (0, uH.jsx)("li", {
+             children: "Manual Moderation: Human moderators review flagged content to ensure compliance with our chat safety rules."
+           }), (0, uH.jsx)("li", {
+             children: "User Reports: players can report content they believe violates guidelines, and it will be reviewed by moderators."
+           })]
+         }), GH.d && (0, uH.jsxs)(uH.Fragment, {
+           children: [(0, uH.jsx)("p", {
+             children: "We keep chat logs for moderation because it is in our legitimate interest, and our players', to keep chat safe."
+           }), (0, uH.jsx)("p", {
+             children: "Chat you send, including private messages, may appear in other players\u2019 session recordings, watched only by Bloxd staff to fix problems in the game, and staff watching one may read the chat sent in its games from these logs (section 2.5). Chat logs are … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L51` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L311) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L51)

```diff
-           children: "To use Bloxd.io, you must be at least 13 years old. If you are under 13, you need permission from a parent or guardian. By using our Services, you confirm that you meet this age or permission requirement."
+           children: "Before participating in chat rooms, players and their guardians are encouraged to review our Community Conduct."
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L53` → after: `L313-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L313-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L313-L322) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L53)

```diff
-           children: "4. Account Creation and Security"
+           children: "2.3 Registered players"
+         }), (0, uH.jsx)("h4", {
+           children: "2.3.1 Age Requirements and Parental Consent"
+         }), (0, uH.jsxs)("p", {
+           children: ["Accounts on Bloxd.io can only be created by players aged 13 or older, or by younger players with parental consent. For those registering through Google, Google will verify the user\u2019s age and obtain parental consent if required. For more details, refer t … [truncated]
+             href: "https://families.google.com/familylink/privacy/child-policy",
+             children: "Google\u2019s Child Privacy Policy"
+           }), "."]
+         }), (0, uH.jsx)("h4", {
+           children: "2.3.2 Data Collection for Registered Players"
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L55-L59` → after: `L324-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L324-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L324-L338) · [Before (L55-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L55-L59)

```diff
-           children: (0, yU.jsxs)("ul", {
-             children: [(0, yU.jsx)("li", {
-               children: "Account Information: You agree to provide accurate and complete information when creating your account. You are responsible for keeping your account information secure and confidential."
-             }), (0, yU.jsx)("li", {
-               children: "Account Security: Notify us immediately if you suspect unauthorized access to your account. We are not liable for any loss or damage arising from your failure to secure your account."
+           children: "When creating an account, the following data is collected to provide personalized services and enhance user experience:"
+         }), (0, uH.jsxs)("table", {
+           children: [(0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "What We Collect"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Why We Collect It"
+               })
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L61` → after: `L340-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L340-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L340-L398) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L61)

```diff
-           })
+           }), (0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Account Info"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Username, email address"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "To create and manage user accounts."
+               })
+             })]
+           }), (0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+ ... (43 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L63` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L400) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L63)

```diff
-           children: "5. User Conduct and Community Guidelines"
+           children: "2.3.3 Data Collection for Store Purchases"
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L65-L67` → after: `L402-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L402-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L402-L488) · [Before (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L65-L67)

```diff
-           children: "We are committed to creating a fun, safe, and inclusive environment for everyone. By using Bloxd.io, you agree to follow our Community Conduct Guidelines and adhere to the following rules:"
-         }), (0, yU.jsx)("h4", {
-           children: "Expected Behavior"
+           children: "When making a store purchase as a registered player, the following data is collected by us or our payment partners listed in section 3.3 to provide a compliant checkout experience and access to their purchase:"
+         }), (0, uH.jsxs)("table", {
+           children: [(0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "What We Collect"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Why We Collect It"
+               })
+             })]
+ ... (71 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L69-L75` → after: `L490-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L490-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L490-L510) · [Before (L69-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L69-L75)

```diff
-           children: (0, yU.jsxs)("ul", {
-             children: [(0, yU.jsx)("li", {
-               children: "Show Respect: Treat others with kindness and consideration in all interactions."
-             }), (0, yU.jsx)("li", {
-               children: "Promote Positivity: Engage in activities that contribute to a positive community experience."
-             }), (0, yU.jsx)("li", {
-               children: "Play Fairly: Participate honestly and with integrity, respecting the rules and spirit of the game."
+           children: "Our payment providers, who act as our merchant of record, securely collect payment information and handle it according to the required security & law. Payment information is not shared with or processed by bloxd."
+         }), (0, uH.jsx)("p", {
+           children: "Data Retention: Data related to purchases can be stored for up to 5 years after fulfilling the purposes for which the data were collected to combat fraud and for reporting purposes."
+         }), (0, uH.jsx)("h3", {
+           children: "2.4 When You Contact Us"
+         }), (0, uH.jsx)("p", {
+           children: "When you reach out to us, we collect information to help us respond to you effectively:"
+         }), (0, uH.jsxs)("table", {
+           children: [(0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "What We Collect"
+ ... (5 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L77` → after: `L512-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L512-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L512-L569) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L77)

```diff
-           })
+           }), (0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Contact Info"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Your email address or phone number"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "To get back to you about your questions or concerns."
+               })
+             })]
+           }), (0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+ ... (42 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L79-L95` → after: `L571-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L571-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L571-L641) · [Before (L79-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L79-L95)

```diff
-           children: "Prohibited Behavior"
-         }), (0, yU.jsxs)("p", {
-           children: ["To maintain a safe and welcoming environment, the following actions are strictly prohibited:", (0, yU.jsxs)("ul", {
-             children: [(0, yU.jsx)("li", {
-               children: "Harassment and Threats: Any form of bullying, stalking, or harassment, including making threats or inciting violence."
-             }), (0, yU.jsx)("li", {
-               children: "Discrimination and Hate Speech: Discriminating against or mocking others based on age, race, ethnicity, gender, sexual orientation, religion, disability, or any other protected characteristic."
-             }), (0, yU.jsx)("li", {
-               children: "Inappropriate Content and Behavior: Sharing or promoting content that is sexually explicit, violent, or otherwise inappropriate."
-             }), (0, yU.jsx)("li", {
-               children: "Impersonation: Impersonating other players, staff, or developers with the intent to deceive or harm."
-             }), (0, yU.jsx)("li", {
-               children: "Account Security and Privacy: Sharing, selling, or trading accounts, or using someone else's account without permission."
-             }), (0, yU.jsx)("li", {
-               children: "Spam and Advertising: Spamming chat, boards, or other communication channels with repetitive or irrelevant messages."
-             }), (0, yU.jsx)("li", {
- ... (1 more removed lines; see GitHub link above)
+           children: "Hosting and Data Storage"
+         }), (0, uH.jsxs)("table", {
+           children: [(0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Service Provider"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "What They Collect"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "What They Do"
+               })
+             })]
+ ... (55 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L99-L111` → after: `L645-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L645-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L645-L831) · [Before (L99-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L99-L111)

```diff
-           children: "Cheating and Unfair Play"
-         }), (0, yU.jsxs)("p", {
-           children: ["You may not make, use, share, or promote any cheats, hacks, bots, scripts, or other tools that change how the game works or give players an unfair advantage.", (0, yU.jsxs)("ul", {
-             children: [(0, yU.jsx)("li", {
-               children: "This includes trying to bypass any form of security - including, but not limited to, protections related to client integrity or gameplay action security."
-             }), (0, yU.jsx)("li", {
-               children: "It also includes trying to reverse engineer our game's code in any way, or trying to gain unauthorised access to our systems."
-             }), (0, yU.jsx)("li", {
-               children: "If you do any of these things, we may suspend or ban your account, and we reserve the right to take civil and/or criminal legal action for your actions harming our game, our players, and our business."
-             }), (0, yU.jsx)("li", {
-               children: "If you break these rules - like hacking, cheating, or trying to mess with our game or servers - you agree to pay us \xa325,000 for each violation. This is because it's hard to measure exactly how much damage those actions cause, and this amount is a fair  … [truncated]
-             }), (0, yU.jsx)("li", {
-               children: "These rules apply to everyone, whether or not you have a game account, and even if you used a bot or other automated tool to do it."
+           children: "Website Security and Performance"
+         }), (0, uH.jsxs)("table", {
+           children: [(0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Service Provider"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "What They Collect"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "What They Do"
+               })
+             })]
+ ... (171 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L115` → after: `L1503-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1503-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1503-L1505) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L115)

```diff
-           children: "6. Software License and IP Restrictions"
+           children: "8.1 Your Choices and Control"
+         }), (0, uH.jsx)("p", {
+           children: "As a user of Bloxd.io, you have the right to:"
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L118` → after: `L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1508) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L118)

```diff
-             children: "License Grant: We grant you a limited, non-exclusive, non-transferable right to download and run the Bloxd game client solely to access and play our Services."
+             children: "Access Your Data: Request a copy of the personal information we hold about you."
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L120` → after: `L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1510) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L120)

```diff
-             children: "What You Can't Do: You may not copy, modify, distribute, or create derivative works of the game client, or attempt to reverse-engineer, decompile, disassemble, hack, bypass security, inject cheats, bots, scripts, or any unauthorized tools. Any such action a … [truncated]
+             children: "Correct Your Data: Ask us to correct any inaccurate or incomplete information."
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L122` → after: `L1512-L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1512-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1512-L1520) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L122)

```diff
-             children: "Our Ownership: All intellectual property rights in the game client and Services stay with Bloxd LTD. You get no ownership or other rights here beyond this limited license."
+             children: "Delete Your Data: Request the deletion of your personal information when it is no longer needed."
+           }), (0, uH.jsx)("li", {
+             children: "Limit Data Collection: Request that we limit the collection or use of your data."
+           }), (0, uH.jsx)("li", {
+             children: "Object to Data Processing: Object to certain types of data processing, such as for marketing purposes."
+           }), (0, uH.jsxs)("li", {
+             children: ["Withdraw Consent: Where we rely on your consent, withdraw it at any time, as described in section 3.2, or for the AI Helper in section", GH.d ? " 2.7" : " 2.5", "."]
+           }), GH.d && (0, uH.jsx)("li", {
+             children: "Session Recordings: you can object to being recorded, or ask to see or delete recordings of your play (section 2.5)."
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L125` → after: `L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1523) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L125)

```diff
-           children: "7. Virtual Goods and In-Game Purchases"
+           children: "8.2 Parental Choices and Control "
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L127-L135` → after: `L1525-L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1525-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1525-L1537) · [Before (L127-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L127-L135)

```diff
-           children: (0, yU.jsxs)("ul", {
-             children: [(0, yU.jsx)("li", {
-               children: "Purchases: Virtual Goods can be purchased within the Services. All purchases are final and non-refundable unless required by law."
-             }), (0, yU.jsx)("li", {
-               children: "License: When you purchase Virtual Goods, you receive a limited, non-transferable license to use them within the Services."
-             }), (0, yU.jsx)("li", {
-               children: "Termination: We may terminate your access to Virtual Goods if you violate these Terms or our Community Conduct Guidelines."
-             })]
-           })
+           children: "As a verified parent or guardian of a child using Bloxd.io, you have the right to:"
+         }), (0, uH.jsxs)("ul", {
+           children: [(0, uH.jsx)("li", {
+             children: "Access Your Child\u2019s Data: Request a copy of the personal information we\u2019ve collected about your child, including details like username, email address, and chat logs."
+           }), (0, uH.jsx)("li", {
+             children: "Correct Your Child\u2019s Data: Ask us to correct any inaccurate or incomplete information about your child."
+           }), (0, uH.jsx)("li", {
+             children: "Delete Your Child\u2019s Data: Request the deletion of your child\u2019s account and all associated data. Once verified, we will delete this data promptly, typically within 30 days. This will also remove any saved progress in the game."
+           }), (0, uH.jsx)("li", {
+             children: "Limit Data Collection for Your Child: Request that we limit the collection or use of certain types of data, such as usage information, from your child."
+           })]
+         }), GH.d && (0, uH.jsx)("p", {
+           children: "For session recordings, you can also object to your child being recorded, or ask to see or delete recordings of their play (section 2.5)."
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L137` → after: `L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1539) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L137)

```diff
-           children: "8. Modifications and Updates"
+           children: "8.3 How to Exercise Your Rights"
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L139-L145` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1541) · [Before (L139-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L139-L145)

```diff
-           children: (0, yU.jsxs)("ul", {
-             children: [(0, yU.jsx)("li", {
-               children: "Service Changes: We may update or modify the Services at any time without prior notice. We are not liable for any changes, suspensions, or discontinuations of the Services."
-             }), (0, yU.jsx)("li", {
-               children: "Terms Updates: These Terms may be updated periodically. We will notify you of significant changes, and your continued use of the Services constitutes your acceptance of the new Terms."
-             })]
-           })
+           children: "To exercise any of these rights, contact us using the information provided below. We may require proof of identity before proceeding with your request. Responses will typically be provided within 30 days."
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L147` → after: `L1543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1543) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L147)

```diff
-           children: "9. Termination"
+           children: "8.4 Your California Privacy Rights"
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L149-L157` → after: `L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1545) · [Before (L149-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L149-L157)

```diff
-           children: (0, yU.jsxs)("ul", {
-             children: [(0, yU.jsx)("li", {
-               children: "Termination by You: You can terminate your account at any time by contacting us."
-             }), (0, yU.jsx)("li", {
-               children: "Termination by Us: We reserve the right to terminate or suspend your account if you violate these Terms, the Community Conduct Guidelines, or engage in harmful behavior."
-             })]
-           })
-         }), (0, yU.jsx)("h3", {
-           children: "10. Reporting and Consequences"
+           children: "If you are a California resident, the California Consumer Privacy Act, as amended by the California Privacy Rights Act (together, the \u201cCCPA\u201d), gives you the rights below. This section supplements the rest of this Privacy Policy."
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L159-L167` → after: `L1547-L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1547-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1547-L1555) · [Before (L159-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L159-L167)

```diff
-           children: (0, yU.jsxs)("ul", {
-             children: [(0, yU.jsx)("li", {
-               children: "Reporting Violations: If you encounter behavior that violates these Terms or the Community Conduct Guidelines, report it using the in-game tools. Your reports help us maintain a high-quality, enjoyable experience for everyone."
-             }), (0, yU.jsx)("li", {
-               children: "Consequences for Violations: Breaking these guidelines can result in penalties ranging from temporary suspensions to permanent bans. Players who demonstrate positive behavior over time may see a reduction in penalties."
-             })]
-           })
-         }), (0, yU.jsx)("h3", {
-           children: "11. Disclaimer of Warranties"
+           children: "Personal Information We Collect: In the past 12 months we have collected the following categories of personal information, from you, from your device, and from the service providers listed in section 3.3, for the purposes described in sections 2 and 3:"
+         }), (0, uH.jsxs)("ul", {
+           children: [(0, uH.jsx)("li", {
+             children: "Identifiers, such as your username, email address, user ID, IP address and device advertising identifiers."
+           }), (0, uH.jsx)("li", {
+             children: "Internet or other electronic network activity information, such as pages visited, interactions with our website and ad interactions."
+           }), (0, uH.jsx)("li", {
+             children: "Commercial information, such as your purchase history."
+           })]
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L169-L174` → after: `L1557-L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1557-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1557-L1593) · [Before (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L169-L174)

```diff
-           children: (0, yU.jsxs)("ul", {
-             children: [(0, yU.jsx)("li", {
-               children: 'As-Is Basis: The Services are provided "as is" and "as available", without any warranties, either express or implied.'
-             }), (0, yU.jsx)("li", {
-               children: "No Warranty: We do not guarantee that the Services will be uninterrupted or error-free."
-             })]
+           children: "Sale and Sharing of Personal Information: Our advertising partners listed in section 3.3 may collect identifiers and internet or other electronic network activity information through cookies and similar technologies on our website to deliver and measure ads.  … [truncated]
+         }), (0, uH.jsx)("p", {
+           children: "Under the CCPA, you have the right to:"
+         }), (0, uH.jsxs)("ul", {
+           children: [(0, uH.jsx)("li", {
+             children: "Know: Request the categories and specific pieces of personal information we have collected about you, and how we use and disclose it."
+           }), (0, uH.jsx)("li", {
+             children: "Delete: Request the deletion of personal information we have collected from you."
+           }), (0, uH.jsx)("li", {
+             children: "Correct: Ask us to correct inaccurate personal information we hold about you."
+           }), (0, uH.jsx)("li", {
+             children: "Opt Out of Sale or Sharing: Opt out of the sale or sharing of your personal information."
+           }), (0, uH.jsx)("li", {
+             children: "Non-Discrimination: Exercise any of these rights without being treated differently by us."
+           })]
+         }), (0, uH.jsxs)("p", {
+ ... (21 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L177` → after: `L1636-L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1636-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1636-L1638) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L177)

```diff
-           children: "12. Limitation of Liability"
+           children: "3.1 Scope of This Privacy Policy"
+         }), (0, uH.jsxs)("p", {
+           children: ["This Privacy Policy applies only to the Bloxd.io game and its related services when accessed through the official Bloxd.io website or our mobile apps (such as those on iOS and Android).", " "]
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L179-L185` → after: `L1640-L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1640-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1640-L1642) · [Before (L179-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L179-L185)

```diff
-           children: (0, yU.jsxs)("ul", {
-             children: [(0, yU.jsx)("li", {
-               children: "No Liability: To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Services."
-             }), (0, yU.jsx)("li", {
-               children: "Total Liability: Our total liability to you for any claims related to the Services is limited to the amount you paid us in the past 12 months."
-             })]
-           })
+           children: "If you use Bloxd.io through a third-party platform or website, this Privacy Policy does not cover those environments. We recommend checking the privacy policies of those sites or platforms and making sure you understand how your data is used before engaging w … [truncated]
+         }), (0, uH.jsx)("p", {
+           children: "We may also work with third-party services for some features in our game. These third parties have their own privacy policies, which apply in addition to ours. We encourage you to review those policies as well."
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L187` → after: `L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1644) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L187)

```diff
-           children: "13. Governing Law and Dispute Resolution"
+           children: "3.2 Advertisers"
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L189-L199` → after: `L1646-L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1646-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1646-L1670) · [Before (L189-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L189-L199)

```diff
-           children: (0, yU.jsxs)("ul", {
-             children: [(0, yU.jsx)("li", {
-               children: "Governing Law: These Terms are governed by the laws of England and Wales."
-             }), (0, yU.jsx)("li", {
-               children: "Small-Claims Court Option: If you or we seek only money damages up to the small-claims track limit set by the Civil Procedure Rules (currently \xa310,000), you may choose to bring that claim in the County Court small-claims track in England and Wales. Thi … [truncated]
-             }), (0, yU.jsx)("li", {
-               children: "Dispute Resolution: Any other disputes arising from these Terms will be resolved through binding arbitration in London, United Kingdom. You waive any right to participate in a class action or jury trial."
-             }), (0, yU.jsx)("li", {
-               children: "Equitable Relief for Bloxd: Even though we agree to arbitrate all other non-small claim disputes, only Bloxd LTD (not you) may go to an English or Welsh court for urgent orders - like injunctions or specific-performance - to protect our IP, confidential d … [truncated]
-             }), (0, yU.jsx)("li", {
-               children: "Identity Verification: If the arbitrator issues any award against you (including for hacks, cheats, or other breaches), you agree that upon request you will promptly provide your full legal name, current address, relevant IP logs, and a copy of a governme … [truncated]
+           children: "Bloxd.io displays ads from selected partners. On our website, ads are managed and delivered by our web advertising partners; within our mobile apps (available on iOS and Android), ads are delivered through Google AdMob."
+         }), BH && (0, uH.jsx)("p", {
+           children: "With your consent, we may display personalized ads tailored to your interests based on information such as your browsing history, device information, your device\u2019s advertising identifier, and your interactions with our site and apps. Where you do not pro … [truncated]
+         }), !BH && (0, uH.jsx)("p", {
+           children: "These ads are non-personalized, meaning they are not based on your personal data or browsing behavior, but rather on general context. We do not collect personal data from children under 13 for advertising purposes."
+         }), (0, uH.jsx)("p", {
+           children: "Where the EU or UK General Data Protection Regulation (GDPR) applies, our website asks for your advertising and cookie choices through a consent prompt registered with the IAB Transparency and Consent Framework when you first visit. You can review, change or  … [truncated]
+         }), (0, uH.jsx)(MH, {
+           allowsPersonalizedAds: BH
+         }), (0, uH.jsx)("h4", {
+           children: "AI Helper"
+         }), (0, uH.jsxs)("table", {
+           children: [(0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Service Provider"
+ ... (9 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L201` → after: `L1672-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1672-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1672-L1703) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L201)

```diff
-           })
+           }), (0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "OVHcloud"
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsxs)("p", {
+                 children: ["AI Helper questions, game code and chats, as section ", LH, " describes"]
+               })
+             }), (0, uH.jsx)("td", {
+               children: (0, uH.jsx)("p", {
+                 children: "Runs the AI models that answer Bot.xd and some Super Bot.xd questions, and the safety check."
+               })
+             })]
+           }), (0, uH.jsxs)("tr", {
+             children: [(0, uH.jsx)("td", {
+ ... (16 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L203` → after: `L1705-L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1705-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1705-L1721) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L203)

```diff
-           children: "14. Severability"
+           children: "3.4 YouTube API Services"
+         }), (0, uH.jsxs)("p", {
+           children: ["Bloxd.io uses YouTube API Services to show YouTube videos, livestreams and Shorts from Bloxd creators on our homepage, and to find the YouTube channel that a creator links to their Bloxd profile. By using these features, you agree to be bound by the", " ", ( … [truncated]
+             href: "https://www.youtube.com/t/terms",
+             children: "YouTube Terms of Service"
+           }), "."]
+         }), (0, uH.jsxs)("p", {
+           children: ["YouTube API Services are provided by Google. Google\u2019s use of information is described in the Google Privacy Policy at", " ", (0, uH.jsx)("a", {
+             href: "http://www.google.com/policies/privacy",
+             children: "http://www.google.com/policies/privacy"
+           }), "."]
+         }), (0, uH.jsx)("p", {
+           children: "We only retrieve publicly available YouTube data: video titles, thumbnails, publish dates, view and live viewer counts and live status, and the channel ID for a YouTube handle a creator adds to their profile. We do not ask you to sign in with YouTube or Googl … [truncated]
+         }), (0, uH.jsx)(QH, {
+           allowsPersonalizedAds: BH
+         }), (0, uH.jsx)("h2", {
+ ... (1 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L205` → after: `L1723-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1723-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1723-L1733) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L205)

```diff
-           children: "If any part of these Terms is found to be unenforceable, the remaining provisions will continue to be in full force and effect."
+           children: "We take the security of your data seriously. We implement various measures to ensure your personal information is protected and manage it according to applicable data protection laws."
+         }), (0, uH.jsx)("h3", {
+           children: "5.1 Technologies and Procedures"
+         }), (0, uH.jsxs)("ul", {
+           children: [(0, uH.jsx)("li", {
+             children: "We use encryption\xa0and other security technologies to safeguard your personal information during transmission and storage."
+           }), (0, uH.jsx)("li", {
+             children: "Our servers are hosted by trusted partners who apply high security standards to protect the data we store."
+           }), (0, uH.jsx)("li", {
+             children: "We regularly monitor our systems for potential vulnerabilities and use firewalls and anti-virus software to prevent unauthorized access."
+           })]
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L207` → after: `L1735-L1763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1735-L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1735-L1763) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L207)

```diff
-           children: "15. Contact Information"
+           children: "5.2 Staff Training and Compliance"
+         }), (0, uH.jsxs)("ul", {
+           children: [(0, uH.jsx)("li", {
+             children: "Our team is trained to manage your data securely and in accordance with data protection laws like GDPR\xa0and COPPA."
+           }), (0, uH.jsx)("li", {
+             children: "Internal procedures are in place to ensure that only authorized personnel can access sensitive data."
+           })]
+         }), (0, uH.jsx)("h3", {
+           children: "5.3 Data Breach Notification"
+         }), (0, uH.jsx)("p", {
+           children: "In the unlikely event of a data breach that affects your personal information:"
+         }), (0, uH.jsxs)("ul", {
+           children: [(0, uH.jsx)("li", {
+             children: "We will promptly notify\xa0affected users, as required by law."
+           }), (0, uH.jsx)("li", {
+             children: "The notification will include:"
+ ... (13 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L209` → after: `L1765-L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1765-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1765-L1781) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L209)

```diff
-           children: ["If you have any questions about these Terms, please contact us at:", (0, yU.jsxs)("ul", {
+           children: ["Your data may be transferred to servers in other countries. All international transfers comply with relevant data protection regulations, ensuring that your information is safeguarded.", GH.d && " Session recordings are stored in the United States by Amazon  … [truncated]
+         }), (0, uH.jsx)("h2", {
+           children: "7. Data Retention"
+         }), (0, uH.jsx)("p", {
+           children: "We retain your data only for as long as necessary to fulfil the purposes outlined in this policy:"
+         }), (0, uH.jsxs)("ul", {
+           children: [(0, uH.jsx)("li", {
+             children: "Technical and Usage Data:\xa0Retained for 14 months after your last visit to the site or until you request removal and the removal is verified."
+           }), (0, uH.jsx)("li", {
+             children: "Personal Data for Registered players:\xa0Retained for as long as the account is active. Upon request for account deletion, data will be removed promptly, typically within 30 days after the request is processed."
+           }), (0, uH.jsx)("li", {
+             children: "Contact Information:\xa0Retained for three months after the query is resolved or closed. If personal data from children is collected, it will be deleted as soon as possible."
+           }), (0, uH.jsx)("li", {
+             children: "Cookies:\xa0Cookies are retained for varying periods, depending on their purpose. Functional cookies are typically retained for as long as they are needed to operate the site, while analytical cookies may be retained for a shorter period to analyze site per … [truncated]
+           }), (0, uH.jsx)("li", {
+             children: "YouTube API Data:\xa0Public video metadata retrieved from YouTube API Services is refreshed every hour and is never kept for more than 24 hours. Creator-linked YouTube handles and channel IDs are retained while the link remains on the account and deleted as … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L211` → after: `L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1783) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L211)

```diff
-               children: "Email: privacy@bloxd.io"
+               children: "Session Recordings:\xa0Retained for 90 days after each recording, or up to one year if kept to fix a bug (section 2.5)."
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L213` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1785) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L213)

```diff
-               children: "Address: Bloxd LTD, 86-90 Paul Street, London, England, United Kingdom, EC2A 4NE"
+               children: "Staff Analytics Tool:\xa0staff notes on a recording are deleted with it; the log of what staff viewed is kept for one year; saved charts are reviewed every year and deleted once unused for a year, and their results are refreshed or deleted within 7 days;  … [truncated]
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L219` → after: `L1791-L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1791-L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/137.js#L1791-L1808) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/137.js#L219)

```diff
-           children: "These Terms, together with our Privacy Policy and Community Conduct Guidelines, constitute the entire agreement between you and Bloxd LTD regarding your use of the Services. They supersede any prior agreements or communications."
+           children: "If we collect personal data beyond what is outlined above, we will remove it as soon as possible once it is no longer needed."
+         }), (0, uH.jsx)(bH, {}), (0, uH.jsx)("h2", {
+           children: "9. Contact Us"
+         }), (0, uH.jsx)("p", {
+           children: "Got questions or concerns? We\u2019re here to help. Reach out to us at:"
+         }), (0, uH.jsxs)("ul", {
+           children: [(0, uH.jsxs)("li", {
+             children: ["Email: ", (0, uH.jsx)("a", {
+               href: "mailto:privacy@bloxd.io",
+               children: "privacy@bloxd.io"
+             })]
+           }), (0, uH.jsx)("li", {
+             children: "Address: Bloxd LTD, 86-90 Paul Street, London, England, United Kingdom, EC2A 4NE"
+           })]
+         }), (0, uH.jsx)("h2", {
+           children: "10. Updates to This Policy"
+ ... (2 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/138.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/138.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L4-L6` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/138.js#L4-L10) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/138.js#L4-L6)

```diff
-   7135: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       default: () => aU
+   7083: (HH, BH, LH) => {
+     LH.d(BH, {
+       WorldCodeAiChatGptNotice: () => EH,
+       WorldCodeAiDeepSeekNotice: () => CH,
+       c: () => hH,
+       f: () => zH,
+       i: () => tH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L8-L17` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/138.js#L12-L17) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/138.js#L8-L17)

```diff
-     var cU = zU(1577),
-       yU = zU(1605),
-       QU = zU(3329),
-       AU = zU(2401),
-       FU = zU(1494),
-       oU = zU(1568),
-       DU = zU(1129),
-       EU = zU(61),
-       YU = zU(1390),
-       NU = zU(1305);
+     var AH = LH(1123),
+       rH = LH(7088),
+       SH = LH(1225);
+     const hH = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
+       tH = "https://openai.com/policies/terms-of-use/",
+       zH = "https://openai.com/policies/privacy-policy/";
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L19-L49` → after: `L19-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L19-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/138.js#L19-L27) · [Before (L19-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/138.js#L19-L49)

```diff
-     function IU(UU) {
-       let {
-         iconName: XU,
-         iconCountPerGroup: zU,
-         animation: cU,
-         midShowerStart: yU = !1,
-         customClass: QU
-       } = UU;
-       const [AU, FU] = (0, EU.useState)({});
-       return (0, EU.useEffect)((() => {
-         const UU = {};
-         for (const XU of Array.from(Array(3).keys())) {
-           UU[XU] = [];
-           for (let cU = 0; cU < zU; cU++) UU[XU].push({
-             left: 100 * Math.random() + "%",
-             animationDelay: 20 * Math.random() * (yU ? -1 : 1) + "s"
- ... (15 more removed lines; see GitHub link above)
+     function CH() {
+       const {
+         t: HH
+       } = (0, AH.B)();
+       return (0, SH.jsxs)(SH.Fragment, {
+         children: [HH("superBotXd:deepSeekNotice"), " ", (0, SH.jsx)(rH.e, {
+           href: hH,
+           children: HH("superBotXd:deepSeekPrivacyPolicy")
+         })]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L58-L102` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/138.js#L34-L41) · [Before (L58-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/138.js#L58-L102)

```diff
-       } = (0, pU.I)(), {
-         pack: zU
-       } = (0, cU.C)(), {
-         userContext: EU
-       } = (0, DU.d)();
-       if (zU) {
-         const UU = yU.c[zU];
-         if (null === UU || void 0 === UU || !UU.purchasable) return (0, NU.jsx)(oU.NavigatePreserveSearch, {
-           to: "/"
-         })
-       }
-       const aU = zU ? yU.c[zU] : null,
-         tU = zU ? QU.p[(0, AU.m)(zU)] : null,
-         gU = void 0 !== (null === aU || void 0 === aU ? void 0 : aU.characterSet) || null !== aU && void 0 !== aU && aU.singleItem ? aU.displayName : `${null!==(UU=null===aU||void 0===aU?void 0:aU.displayName)&&void 0!==UU?UU:zU} Pack`,
-         kU = aU ? `Your ${gU} is Ready!` : "Welcome To Super Rank!",
-         GU = aU ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
- ... (29 more removed lines; see GitHub link above)
+       } = (0, AH.B)();
+       return (0, SH.jsxs)(SH.Fragment, {
+         children: [HH("aiHelperChatGpt:notice"), " ", (0, SH.jsx)(rH.e, {
+           href: tH,
+           children: HH("aiHelperChatGpt:terms")
+         }), " ", (0, SH.jsx)(rH.e, {
+           href: zH,
+           children: HH("aiHelperChatGpt:privacyPolicy")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/139.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/139.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226)

#### 1. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/139.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/139.js#L4)

```diff
-   7140: (UU, XU, zU) => {
+   7093: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L8-L16` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/139.js#L8-L9) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/139.js#L8-L16)

```diff
-     var cU = zU(1384),
-       yU = zU(61),
-       QU = zU(111),
-       AU = zU(1577),
-       FU = zU(1241),
-       oU = zU(320),
-       DU = zU(687);
-     const EU = new URL(FU.p[oU.e.PRODUCTION]).origin;
-     var YU = zU(1305);
+     var AH = LH(1123),
+       rH = LH(1225);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L19-L40` → after: `L12-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L12-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/139.js#L12-L220) · [Before (L19-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/139.js#L19-L40)

```diff
-       const UU = (0, AU.C)();
-       return (0, yU.useEffect)((() => {
-         const XU = QU.currentUrl.getSearchParam("code");
-         QU.currentUrl.removeSearchParam("code"), null === XU && (console.error("No authorization code found in the URL"), window.close());
-         const zU = {
-           type: `oauth_authentication_${UU.providerName}`,
-           code: XU
-         };
-         for (const UU of (yU = window.location.origin) === EU ? [yU, `https://${DU.d}`] : [yU]) {
-           var cU;
-           null === (cU = window.opener) || void 0 === cU || cU.postMessage(zU, UU)
-         }
-         var yU;
-         setTimeout((() => {
-           window.close()
-         }), 1e3)
- ... (6 more removed lines; see GitHub link above)
+       const {
+         t: HH
+       } = (0, AH.B)();
+       return (0, rH.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, rH.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: HH("homePage:termsOfService")
+         }), (0, rH.jsx)("p", {
+           children: (0, rH.jsx)("em", {
+             children: "Last updated: July 15, 2025"
+           })
+         }), (0, rH.jsx)("p", {
+           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
+         }), (0, rH.jsx)("h3", {
+           children: "1. General Information"
+ ... (193 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/140.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/140.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/140.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/140.js#L4)

```diff
-   7142: (UU, XU, zU) => {
+   7095: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L8-L32` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/140.js#L8-L17) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/140.js#L8-L32)

```diff
-     var cU = zU(61),
-       yU = zU(1577),
-       QU = zU(1106),
-       AU = zU.n(QU),
-       FU = zU(320),
-       oU = zU(7158),
-       DU = zU(1390),
-       EU = zU(1568),
-       YU = zU(4997),
-       NU = zU(1494),
-       IU = zU(3490),
-       pU = zU(5004),
-       aU = zU(1726),
-       tU = zU(4991),
-       gU = zU(1129),
-       kU = zU(27),
- ... (9 more removed lines; see GitHub link above)
+     var AH = LH(1520),
+       rH = LH(1556),
+       SH = LH(3319),
+       hH = LH(2406),
+       tH = LH(1455),
+       zH = LH(1509),
+       CH = LH(1061),
+       EH = LH(45),
+       XH = LH(1315),
+       GH = LH(1225);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L36-L39` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/140.js#L21-L25) · [Before (L36-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/140.js#L36-L39)

```diff
-         pack: XU,
-         view: zU,
-         favourite: cU,
-         notice: yU
+         iconName: BH,
+         iconCountPerGroup: LH,
+         animation: AH,
+         midShowerStart: rH = !1,
+         customClass: SH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L41-L94` → after: `L27-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L27-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/140.js#L27-L49) · [Before (L41-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/140.js#L41-L94)

```diff
-       const {
-         width: QU,
-         height: FU
-       } = oU.s.thumb, {
-         live: YU
-       } = XU;
-       return (0, eU.jsx)("div", {
-         className: "ShaderPackCard",
-         children: (0, eU.jsxs)("div", {
-           className: "ShaderPackCardTile",
-           children: [(0, eU.jsxs)(EU.LinkPreserveSearch, {
-             to: (0, dU.Z)(XU.packId),
-             className: "ShaderPackCardLink",
-             children: [YU && (0, eU.jsx)("img", {
-               className: "ShaderPackCardImage",
-               src: (0, oU.v)(BU.clientSideServerUrls.s3Url, YU, zU, "thumb"),
- ... (38 more removed lines; see GitHub link above)
+       const [hH, tH] = (0, EH.useState)({});
+       return (0, EH.useEffect)((() => {
+         const HH = {};
+         for (const BH of Array.from(Array(3).keys())) {
+           HH[BH] = [];
+           for (let AH = 0; AH < LH; AH++) HH[BH].push({
+             left: 100 * Math.random() + "%",
+             animationDelay: 20 * Math.random() * (rH ? -1 : 1) + "s"
+           })
+         }
+         tH(HH)
+       }), [LH, rH]), (0, GH.jsx)("div", {
+         className: `IconShower IconShowerAnimation${AH} ${null!==SH&&void 0!==SH?SH:""}`,
+         children: Object.keys(hH).map((HH => hH[HH].map((LH => (0, GH.jsx)("div", {
+           className: `Icon IconGroup${HH}`,
+           style: {
+ ... (7 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L97` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/140.js#L52-L53) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/140.js#L97)

```diff
-     var wU = zU(7172);
+     var uH = LH(1123),
+       QH = LH(2486);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L99-L107` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/140.js#L55-L56) · [Before (L99-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/140.js#L99-L107)

```diff
-     function qU(UU) {
-       let {
-         results: XU,
-         loading: zU,
-         failed: cU,
-         onRetry: yU,
-         view: QU,
-         previewView: FU
-       } = UU;
+     function WH() {
+       var HH;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L110` → after: `L59-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L59-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/140.js#L59-L78) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/140.js#L110)

```diff
-       } = (0, RU.I)(), DU = (0, wU.h)(), EU = Date.now(), YU = null === XU ? 0 : "owned" === XU.kind ? XU.packs.length : XU.page.results.length;
+       } = (0, uH.B)(), {
+         pack: LH
+       } = (0, AH.A)(), {
+         userContext: EH
+       } = (0, CH.e)();
+       if (LH) {
+         const HH = rH.b[LH];
+         if (null === HH || void 0 === HH || !HH.purchasable) return (0, GH.jsx)(zH.NavigatePreserveSearch, {
+           to: "/"
+         })
+       }
+       const WH = LH ? rH.b[LH] : null,
+         MH = LH ? SH.j[(0, hH.j)(LH)] : null,
+         xH = void 0 !== (null === WH || void 0 === WH ? void 0 : WH.characterSet) || null !== WH && void 0 !== WH && WH.singleItem ? WH.displayName : `${null!==(HH=null===WH||void 0===WH?void 0:WH.displayName)&&void 0!==HH?HH:LH} Pack`,
+         vH = Date.now(),
+         PH = BH((0, QH.u)(vH).nameKey),
+ ... (4 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L112-L117` → after: `L80-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L80-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/140.js#L80-L92) · [Before (L112-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/140.js#L112-L117)

```diff
-         className: AU()("ShaderPackBrowseResults", {
-           Loading: zU && null !== XU
-         }),
-         children: [zU && null === XU && (0, eU.jsx)("div", {
-           className: "ShaderPackBrowseMessage",
-           children: (0, eU.jsx)(PU.b, {})
+         className: "PurchaseWelcome AnimFadeInScaleUp",
+         children: [MH && (0, GH.jsx)(MH, {}), !WH && (0, GH.jsx)(YH, {
+           iconName: "bolt",
+           iconCountPerGroup: 10,
+           animation: "Fall",
+           midShowerStart: !0,
+           customClass: "SuperRankWelcomeIconShower"
+         }), (0, GH.jsx)("div", {
+           className: "PurchaseWelcomeTitle FullyFancyText",
+           children: TH
+         }), (0, GH.jsx)("div", {
+           className: "PurchaseWelcomeText",
+           children: UH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L119-L122` → after: `L94-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L94-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/140.js#L94-L98) · [Before (L119-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/140.js#L119-L122)

```diff
-           className: "ShaderPackBrowseMessage",
-           children: [oU("shaderPackListing:loadFailed"), (0, eU.jsx)(NU.f, {
-             onClick: yU,
-             children: oU("general:tryAgain")
+           className: "PurchaseWelcomeWarning",
+           children: [(0, GH.jsx)(XH.c, {
+             name: "circle-info"
+           }), (0, GH.jsx)("div", {
+             children: OH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L124-L194` → after: `L100-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L100-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/140.js#L100-L104) · [Before (L124-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/140.js#L124-L194)

```diff
-         }), "listing" === (null === XU || void 0 === XU ? void 0 : XU.kind) && YU > 0 && (0, eU.jsx)("div", {
-           className: "ShaderPackBrowseGrid",
-           children: XU.page.results.map((UU => (0, eU.jsx)(CU, {
-             pack: {
-               packId: UU.packId,
-               name: UU.name,
-               live: UU
-             },
-             view: FU,
-             favourite: {
-               isFavourite: DU.isFavourite(UU.packId),
-               onToggle: () => {
-                 DU.toggle(UU.packId)
-               }
-             }
-           }, UU.packId)))
- ... (55 more removed lines; see GitHub link above)
+         }), (0, GH.jsx)(zH.LinkPreserveSearch, {
+           to: "/",
+           children: (0, GH.jsx)(tH.u, {
+             className: "PurchaseWelcomeContinue",
+             children: BH("general:continue")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/141.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/141.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417)

#### 1. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/141.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/141.js#L4-L6)

```diff
-   7167: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => FU
+   7097: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       default: () => GH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L8-L90` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/141.js#L8-L16) · [Before (L8-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/141.js#L8-L90)

```diff
-     var cU = zU(1106),
-       yU = zU.n(cU),
-       QU = zU(1193),
-       AU = zU(1305);
- 
-     function FU(UU) {
-       let {
-         item: XU,
-         className: zU
-       } = UU;
-       const {
-         t: cU
-       } = (0, QU.I)();
-       return null === XU.renderId || XU.previewsOutdated ? (0, AU.jsx)("div", {
-         className: yU()("ShaderPackPreviewsNotice", zU),
-         children: (0, AU.jsx)("span", {
- ... (67 more removed lines; see GitHub link above)
+     var AH = LH(1313),
+       rH = LH(45),
+       SH = LH(92),
+       hH = LH(1520),
+       tH = LH(1177),
+       zH = LH(304),
+       CH = LH(642);
+     const EH = new URL(tH.l[zH.c.PRODUCTION]).origin;
+     var XH = LH(1225);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L93-L119` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/141.js#L19) · [Before (L93-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/141.js#L93-L119)

```diff
-       var UU;
-       const [XU, zU] = (0, FU.d)(DU, yU.E[0]);
-       return [null !== (UU = yU.E.find((UU => UU === XU))) && void 0 !== UU ? UU : yU.E[0], zU]
-     }
- 
-     function NU() {
-       (0, cU.useEffect)((() => () => {
-         window.location.pathname.startsWith(AU.T) || (0, AU.k)()
-       }), [])
-     }
- 
-     function IU() {
-       return (0, FU.d)(EU, !1)
-     }
- 
-     function pU() {
- ... (11 more removed lines; see GitHub link above)
+       const HH = (0, hH.A)();
```
