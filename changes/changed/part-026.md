# Changed — Bundle Modifications Report (Part 026 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `26 / 115` (**287** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 025](part-025.md) · [Part 027 →](part-027.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/153.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/153.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6)

#### 18. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3863-L3875` → after: `L118-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L118-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L118-L120) · [Before (L3863-L3875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3863-L3875)

```diff
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
-       }
-       return XU
+     function kH(HH, BH) {
+       var LH;
+       return (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.headerVersion) !== bH(BH)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3879-L3903` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L124-L125) · [Before (L3879-L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3879-L3903)

```diff
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
-           moduleCode: zU[yU],
-           sceneDepth: 0 !== (UU & AU),
- ... (9 more removed lines; see GitHub link above)
+       return uH((async () => {
+         IH(await (0, tH.e)(!0), HH)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3966-L3973` → after: `L130-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L130-L132) · [Before (L3966-L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3966-L3973)

```diff
-       const UU = YU.map((UU => {
-         let {
-           name: XU,
-           type: zU
-         } = UU;
-         return `    ${XU}: ${zU},\n`
-       })).join("");
-       return `struct ${DU} {\n${UU}}\n@group(${cU}) @binding(${yU}) var<uniform> ${EU}: ${DU};\n`
+       return uH((async () => {
+         SH.e.removeItem(hH.d)
+       }))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3977-L3980` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L136) · [Before (L3977-L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3977-L3980)

```diff
-       const zU = new DataView(UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, NU),
-         [cU, yU, QU, AU, FU, oU] = YU;
-       zU.setFloat32(cU.offset, XU.seconds, !0), zU.setUint32(yU.offset, XU.lit ? 1 : 0, !0);
-       for (let DU = 0; DU < 3; DU++) zU.setInt32(QU.offset + 4 * DU, XU.renderOffset[DU], !0), zU.setFloat32(AU.offset + 4 * DU, XU.hUU[DU], !0), zU.setFloat32(FU.offset + 4 * DU, XU.eyePosition[DU], !0), zU.setFloat32(oU.offset + 4 * DU, XU.shadowDirection[DU], !0)
+       PH(HH, BH) ? SH.e.setItem(hH.d, !0) : SH.e.removeItem(hH.d)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3983-L3985` → after: `L148-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L148-L149) · [Before (L3983-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3983-L3985)

```diff
-     function aU(UU) {
-       const XU = new Uint32Array(Math.max(1, UU.length));
-       return UU.forEach(((UU, zU) => {
+     function hH() {
+       return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3987-L3988` → after: `L151-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L151-L153) · [Before (L3987-L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3987-L3988)

```diff
-           id: cU,
-           rotation: yU
+           FORMER_BLOCK_IMAGE_NAMES: BH,
+           textureNameToIndex: LH,
+           textureAnimationData: SH
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3990` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L155) · [Before (L3990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3990)

```diff
-         XU[zU] = 65535 & cU | (3 & yU) << 16
+         return rH ??= (0, AH.f)(LH, SH, BH), rH
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3993-L3996` → after: `L158-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L158-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L158-L161) · [Before (L3993-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3993-L3996)

```diff
-     const tU = {
-       off: 0,
-       strict: 1,
-       allow: 2
+ 
+     function tH() {
+       if (null === rH) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return rH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/154.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/154.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L4-L13` → after: `L4-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L4-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/154.js#L4-L154) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/154.js#L4-L13)

```diff
-   44434: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       compilePagePack: () => DU,
-       prefetchCompiler: () => FU,
-       reconcileHint: () => oU
-     });
-     var cU = zU(7209),
-       yU = zU(7251),
-       QU = zU(7219),
-       AU = zU(7242);
+   7187: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => PH,
+       h: () => TH,
+       l: () => xH,
+       p: () => MH
+     });
+     var AH = LH(7189);
+     const rH = 6,
+       SH = 3,
+       hH = 1,
+       tH = 2,
+       zH = 4,
+       CH = 8,
+       EH = 16,
+       XH = 32,
+ ... (135 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L16-L47` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/154.js#L157-L158) · [Before (L16-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/154.js#L16-L47)

```diff
-       (0, cU.loadPageShaderPackCompiler)()
-     }
-     async function oU() {
-       const UU = await (0, cU.loadPageShaderPackCompiler)();
-       await (UU ? (0, yU.reconcileStoredShaderPackHint)(UU) : (0, yU.forgetShaderPackActiveHint)())
-     }
-     async function DU(UU) {
-       const XU = await (0, cU.loadPageShaderPackCompiler)();
-       if (!XU) return {
-         status: "none"
-       };
-       const zU = await (0, AU.d)(UU, XU),
-         FU = (0, yU.storedPackOutcome)(zU, XU);
-       if ("none" === FU.kind) return {
-         status: "none"
-       };
- ... (16 more removed lines; see GitHub link above)
+       const HH = XH.map((HH => {
+         let {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L49-L52` → after: `L160-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L160-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/154.js#L160-L187) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/154.js#L49-L52)

```diff
-           variants: oU.variants,
-           keepCircleShadows: !0 === EU
-         }
-       }
+           type: LH
+         } = HH;
+         return `    ${BH}: ${LH},\n`
+       })).join("");
+       return `struct ${CH} {\n${HH}}\n@group(${AH}) @binding(${rH}) var<uniform> ${EH}: ${CH};\n`
+     }
+ 
+     function uH(HH, BH) {
+       const LH = new DataView(HH, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, GH),
+         [AH, rH, SH, hH, tH, zH] = XH;
+       LH.setFloat32(AH.offset, BH.seconds, !0), LH.setUint32(rH.offset, BH.lit ? 1 : 0, !0);
+       for (let CH = 0; CH < 3; CH++) LH.setInt32(SH.offset + 4 * CH, BH.renderOffset[CH], !0), LH.setFloat32(hH.offset + 4 * CH, BH.QBH[CH], !0), LH.setFloat32(tH.offset + 4 * CH, BH.eyePosition[CH], !0), LH.setFloat32(zH.offset + 4 * CH, BH.shadowDirection[CH], !0)
+     }
+ 
+     function QH(HH) {
+       const BH = new Uint32Array(Math.max(1, HH.length));
+ ... (12 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L55-L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/154.js#L190) · [Before (L55-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/154.js#L55-L190)

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
+   7189: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L193-L269` → after: `L193-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L193-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/154.js#L193-L245) · [Before (L193-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/154.js#L193-L269)

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
- ... (61 more removed lines; see GitHub link above)
+       g: () => hH,
+       i: () => tH,
+       j: () => rH,
+       k: () => SH
+     });
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
+ ... (37 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/155.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/155.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/155.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/155.js#L4)

```diff
-   7270: (UU, XU, zU) => {
+   34825: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/155.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/155.js#L6)

```diff
-       encodeBinaryMessageWithMetricsCookies: () => yU
+       e: () => tH,
+       h: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L8` → after: `L9-L3870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L9-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/155.js#L9-L3870) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/155.js#L8)

```diff
-     var cU = zU(4139);
+     var AH = LH(241),
+       rH = LH(114),
+       SH = LH(34828);
+ 
+     function hH() {
+       var HH, BH, LH;
+       return null !== (HH = (0, AH.o)(null !== (BH = null === (LH = (0, rH.l)()) || void 0 === LH ? void 0 : LH.renderer) && void 0 !== BH ? BH : null, (0, rH.i)())) && void 0 !== HH ? HH : "unknown"
+     }
+ 
+     function tH(HH, BH, LH, AH, rH) {
+       const hH = null === BH ? "untimed" : `${Math.round(BH)} ms`;
+       return `frames stalled, ${LH}, gpu ${(0,SH.c)(rH)}, blocking ${hH}, drawn ${Math.round(HH)} ms apart, timers ${AH.timers}, timer gap ${Math.round(AH.longestGapMs)} ms`
+     }
+   },
+   34828: (HH, BH, LH) => {
+     function AH(HH) {
+ ... (3846 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L11` → after: `L3873-L4009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R3873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L3873-L4009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/155.js#L3873-L4009) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/155.js#L11)

```diff
-       return cU.i.toBuffer(UU)
+       return "" === HH ? [] : HH.split(" ")
+     }
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
+       return BH
+ ... (121 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/156.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/156.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/156.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/156.js#L4)

```diff
-   7294: (UU, XU, zU) => {
+   45221: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L6-L8` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/156.js#L6-L8) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/156.js#L6-L8)

```diff
-       BloxdDiscordSDK: () => aU,
-       DiscordLoginCancelledError: () => pU,
-       discordPopupTimeoutMs: () => IU
+       compilePagePack: () => CH,
+       prefetchCompiler: () => tH,
+       reconcileHint: () => zH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L10-L78` → after: `L10-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L10-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/156.js#L10-L50) · [Before (L10-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/156.js#L10-L78)

```diff
-     var cU = zU(173),
-       yU = zU(1241),
-       QU = zU(1131),
-       AU = zU(1151),
-       FU = zU.n(AU),
-       oU = zU(1203),
-       DU = zU(42),
-       EU = zU(646),
-       YU = zU(1410),
-       NU = zU(1211);
-     const IU = 6e5;
-     class pU extends Error {
-       constructor() {
-         super(...arguments), this.name = QU.discordLoginCancelledErrorName
-       }
-     }
- ... (53 more removed lines; see GitHub link above)
+     var AH = LH(7165),
+       rH = LH(7201),
+       SH = LH(7179),
+       hH = LH(7196);
+ 
+     function tH() {
+       (0, AH.loadPageShaderPackCompiler)()
+     }
+     async function zH() {
+       const HH = await (0, AH.loadPageShaderPackCompiler)();
+       await (HH ? (0, rH.reconcileStoredShaderPackHint)(HH) : (0, rH.forgetShaderPackActiveHint)())
+     }
+     async function CH(HH) {
+       const BH = await (0, AH.loadPageShaderPackCompiler)();
+       if (!BH) return {
+         status: "none"
+ ... (25 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L80-L109` → after: `L52-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L52-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/156.js#L52-L204) · [Before (L80-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/156.js#L80-L109)

```diff
-         if (console.log("Discord OAuth window opened:", XU), !XU) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
-         this.popupWindow = XU;
-         const zU = window.setInterval((() => {
-           XU.closed && this.popupWindowPromise === UU && (window.clearInterval(zU), this.popupWindowCheckInterval = null, window.setTimeout((() => {
-             this.popupWindowPromise === UU && this.failPopup(new pU("Discord authentication was cancelled - popup window was closed"))
-           }), 1e3))
-         }), 200);
-         this.popupWindowCheckInterval = zU
-       }
-       async exchangeAuthorizationCodeForAccessToken(UU, XU) {
-         const {
-           accessToken: zU,
-           refreshToken: cU
-         } = await FU()((async () => await (0, QU.postJsonWithMetricsCookiesAndJsonResponse)(`${oU.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
-           authorizationCode: UU,
-           bloxdClientEnvironment: NU.d.clientEnvironment,
- ... (14 more removed lines; see GitHub link above)
+       }
+     }
+   },
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
+ ... (137 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L113-L125` → after: `L207-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L207-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/156.js#L207-L234) · [Before (L113-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/156.js#L113-L125)

```diff
-           const cU = await FU()((async () => {
-             try {
-               return await (0, QU.postJsonWithMetricsCookiesAndJsonResponse)(`${oU.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
-                 refreshToken: XU
-               }, {
-                 retries: 0
-               }, UU.getMetricsCookies())
-             } catch (zU) {
-               if (tU(zU)) throw new(FU().AbortError)(zU);
-               throw zU
-             }
-           }), {
-             retries: 3
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
+       }));
+       try {
+         const BH = await Promise.all(hH.validationModules.map((BH => async function(HH, BH, LH) {
+           BH.pushErrorScope("validation");
+           const AH = BH.createShaderModule({
+               code: LH.code
+ ... (12 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L127-L141` → after: `L236-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L236-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/156.js#L236-L268) · [Before (L127-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/156.js#L127-L141)

```diff
-           zU = cU.accessToken, DU.c.setItem(this.bloxdDiscordRefreshTokenKey, cU.refreshToken)
-         } catch (cU) {
-           return tU(cU) ? (DU.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", cU), null)
-         }
-         return {
-           accessToken: zU
-         }
-       }
-       signOut() {
-         this.failPopup(new pU("Signed out of Discord during login")), DU.c.removeItem(this.bloxdDiscordRefreshTokenKey)
-       }
-     }
- 
-     function tU(UU) {
-       return UU instanceof cU.e && 435 === UU.httpCode
+           return hH
+         }(HH, tH, BH))));
+         return zH ? null : CH(HH, HH.rrH(BH.flat()), hH.offInStrict)
+       } catch (EH) {
+         return console.error("Couldn't validate the shader pack on WebGPU.", EH), null
+       } finally {
+         tH.destroy()
+       }
+     }
+     async function zH(HH, BH) {
+       var LH;
+       if (!(0, AH.shaderPackNeedsCheck)(HH, BH) || (0, AH.isOtherApiVersion)(HH)) return HH;
+       const rH = await tH(BH, (0, AH.storedShaderPackFiles)(HH));
+       if (!rH) return HH;
+       const SH = !1 === (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.ok) && !HH.validation.fromRecheck,
+         hH = {
+ ... (17 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/157.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/157.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/157.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/157.js#L4-L6)

```diff
-   7299: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       BloxdFirebaseSdk: () => NU
+   7230: (HH, BH, LH) => {
+     LH.d(BH, {
+       encodeBinaryMessageWithMetricsCookies: () => rH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L8-L161` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/157.js#L8-L11) · [Before (L8-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/157.js#L8-L161)

```diff
-     var cU = zU(1919),
-       yU = zU(3221),
-       QU = zU(111),
-       AU = zU(97),
-       FU = zU(1734),
-       oU = zU(2111);
-     const DU = {
-       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-       authDomain: "bloxd-ee1aa.firebaseapp.com",
-       projectId: "bloxd-ee1aa",
-       storageBucket: "bloxd-ee1aa.appspot.com",
-       messagingSenderId: "758847442742",
-       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
-     };
-     var EU = zU(1835),
-       YU = zU(1765);
- ... (138 more removed lines; see GitHub link above)
+     var AH = LH(4113);
+ 
+     function rH(HH) {
+       return AH.m.toBuffer(HH)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/158.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/158.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961)

#### 1. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/158.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/158.js#L4)

```diff
-   7307: (UU, XU, zU) => {
+   7246: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/158.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/158.js#L6)

```diff
-       BloxdDiscordActivitySdk: () => GU
+       BloxdDiscordSDK: () => QH,
+       DiscordLoginCancelledError: () => uH,
+       discordPopupTimeoutMs: () => YH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L8-L64` → after: `L10-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L10-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/158.js#L10-L25) · [Before (L8-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/158.js#L8-L64)

```diff
-     var cU = zU(7310),
-       yU = zU(1241),
-       QU = zU(1193),
-       AU = zU(646),
-       FU = zU(1266),
-       oU = zU(1800),
-       DU = zU(1360),
-       EU = zU(825),
-       YU = zU(27),
-       NU = zU(1211),
-       IU = zU(2494),
-       pU = function(UU) {
-         return UU.APPLICATION_COMMANDS = "applications.commands", UU.IDENTIFY = "identify", UU.EMAIL = "email", UU.GUILDS = "guilds", UU.READ_DM_CHANNELS = "dm_channels.read", UU.WRITE_ACTIVITIES = "rpc.activities.write", UU
-       }(pU || {}),
-       aU = function(UU) {
-         return UU[UU.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", UU[UU.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", UU[UU.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", UU[UU.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", UU[UU.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", UU[UU.RATELIMITE … [truncated]
- ... (41 more removed lines; see GitHub link above)
+     var AH = LH(152),
+       rH = LH(1177),
+       SH = LH(1070),
+       hH = LH(1080),
+       tH = LH.n(hH),
+       zH = LH(1131),
+       CH = LH(30),
+       EH = LH(619),
+       XH = LH(1352),
+       GH = LH(1139);
+     const YH = 6e5;
+     class uH extends Error {
+       constructor() {
+         super(...arguments), this.name = SH.discordLoginCancelledErrorName
+       }
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L66-L116` → after: `L27-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L27-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/158.js#L27-L35) · [Before (L66-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/158.js#L66-L116)

```diff
-       constructor(UU) {
-         this.discordSdk = UU, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
-       }
-       static async setup() {
-         console.log("Setting up Discord SDK with client id", NU.d.discordClientID);
-         const UU = new cU.e(NU.d.discordClientID);
-         let XU = !1;
-         setTimeout((() => {
-           XU || (console.warn("Discord SDK took too long to initialize"), (0, oU.reloadBloxd)())
-         }), 15e3), await UU.ready(), XU = !0;
-         try {
-           const {
-             enabled: XU
-           } = await UU.commands.encourageHardwareAcceleration();
-           XU || console.warn("Hardware acceleration not enabled in the Discord client")
-         } catch (yU) {
- ... (35 more removed lines; see GitHub link above)
+       constructor() {
+         this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirect … [truncated]
+         const HH = new URL(this.discordRedirectUrl).origin;
+         window.addEventListener("message", (BH => {
+           var LH;
+           if (BH.origin !== HH || "oauth_authentication_discord" !== (null === (LH = BH.data) || void 0 === LH ? void 0 : LH.type)) return;
+           if ("string" !== typeof BH.data.code || !BH.data.code) return void this.failPopup(new uH("Discord authentication was cancelled on Discord"));
+           const AH = this.popupWindowPromiseResolve;
+           this.resetPopupState(), null === AH || void 0 === AH || AH(BH.data.code)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L119-L133` → after: `L38-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L38-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/158.js#L38-L132) · [Before (L119-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/158.js#L119-L133)

```diff
-       async getInGameDescriptions() {
-         const UU = (0, DU.b)(),
-           {
-             verb: XU,
-             title: zU
-           } = await this.getGameVerbAndTitle(UU.requestedGameNameWithVariation);
-         if ((0, DU.f)(UU)) return {
-           primary: `${XU} in a Discord World`
-         };
-         const cU = `${XU} in ${zU}`;
-         return (0, AU.P)(UU.lobbyName) ? {
-           primary: cU
-         } : {
-           primary: cU,
-           secondary: `Lobby ${UU.lobbyName}`
+       resetPopupState() {
+         null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseRe … [truncated]
+       }
+       failPopup(HH) {
+         var BH;
+         const LH = this.popupWindowPromiseReject;
+         null === (BH = this.popupWindow) || void 0 === BH || BH.close(), this.resetPopupState(), null === LH || void 0 === LH || LH(HH)
+       }
+       openDiscordOAuthWindow() {
+         const HH = GH.e.discordClientID;
+         return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${HH}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${wi … [truncated]
+       }
+       async showDiscordAuthPrompt() {
+         return new Promise(((HH, BH) => {
+           XH.NotificationProvider.showPromptPopup({
+             title: "Discord Login Required",
+ ... (79 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L136-L153` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/158.js#L135-L136) · [Before (L136-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/158.js#L136-L153)

```diff
-       async getGameVerbAndTitle(UU) {
-         var XU;
-         const zU = "Playing";
-         if ((0, AU.P)(UU)) return {
-           verb: zU,
-           title: "Bloxd"
-         };
-         const cU = (0, EU.m)(UU);
-         var yU;
-         if (null !== cU) return {
-           verb: null !== (yU = kU[UU]) && void 0 !== yU ? yU : gU[cU.type],
-           title: await (0, QU.E)(FU.d.ENGLISH, cU.title)
-         };
-         const oU = await (0, IU.c)(UU);
-         return {
-           verb: null !== (XU = oU && gU[oU.gameCategory]) && void 0 !== XU ? XU : zU,
- ... (2 more removed lines; see GitHub link above)
+       signOut() {
+         this.failPopup(new uH("Signed out of Discord during login")), CH.b.removeItem(this.bloxdDiscordRefreshTokenKey)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L155-L271` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/158.js#L138-L141) · [Before (L155-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/158.js#L155-L271)

```diff
-       getCurrentChannelType() {
-         const {
-           channelId: UU,
-           guildId: XU
-         } = this.getCurrentChannelAndGuild();
-         return null !== XU ? yU.d.GUILD : null !== UU ? yU.d.DM : null
-       }
-       getRequiredScopeForCurrentChannel() {
-         const UU = this.getCurrentChannelType(),
-           XU = [pU.APPLICATION_COMMANDS, pU.IDENTIFY, pU.EMAIL, pU.GUILDS, pU.WRITE_ACTIVITIES];
-         switch (UU) {
-           case yU.d.DM:
-           case yU.d.GUILD:
-             return [...XU];
-           default:
-             throw new Error(`Unknown Discord channel type: ${UU}`)
- ... (101 more removed lines; see GitHub link above)
+     }
+ 
+     function WH(HH) {
+       return HH instanceof AH.e && 435 === HH.httpCode
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/159.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/159.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131)

#### 1. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L4-L4534` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L4-L13) · [Before (L4-L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L4-L4534)

```diff
-   7310: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => yQ,
-       i: () => uz
-     });
-     var cU = {};
-     zU.r(cU), zU.d(cU, {
-       d: () => cc,
-       h: () => Ac,
-       g: () => Qc,
-       j: () => jz,
-       l: () => Jz,
-       m: () => Cc,
-       n: () => Tz,
-       q: () => Oc,
-       t: () => Rc,
- ... (4515 more removed lines; see GitHub link above)
+   7251: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       BloxdFirebaseSdk: () => GH
+     });
+     var AH = LH(1904),
+       rH = LH(3209),
+       SH = LH(92),
+       hH = LH(81),
+       tH = LH(1714),
+       zH = LH(2116);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L4536-L4638` → after: `L15-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L15-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L15-L20) · [Before (L4536-L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L4536-L4638)

```diff
-       [rc.READY]: {
-         payload: uc.extend({
-           evt: Az(rc.READY),
-           data: jX({
-             v: uX(),
-             config: jX({
-               cdn_host: rX().optional(),
-               api_endpoint: rX(),
-               environment: rX()
-             }),
-             user: jX({
-               id: rX(),
-               username: rX(),
-               discriminator: rX(),
-               avatar: rX().optional()
-             }).optional()
- ... (87 more removed lines; see GitHub link above)
+       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
+       authDomain: "bloxd-ee1aa.firebaseapp.com",
+       projectId: "bloxd-ee1aa",
+       storageBucket: "bloxd-ee1aa.appspot.com",
+       messagingSenderId: "758847442742",
+       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L4640-L4831` → after: `L22-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L22-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L22-L31) · [Before (L4640-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L4640-L4831)

```diff
-     const vc = jX({}).nullable(),
-       Vc = jX({
-         code: rX()
-       }),
-       sc = jX({
-         guilds: JX(jX({
-           id: rX(),
-           name: rX()
-         }))
-       }),
-       nc = jX({
-         id: rX(),
-         name: rX(),
-         icon_url: rX().optional(),
-         members: JX(Tz)
-       }),
- ... (176 more removed lines; see GitHub link above)
+     var EH = LH(1826),
+       XH = LH(1751);
+     class GH {
+       constructor() {}
+       static async setup() {
+         try {
+           return await GH.setupInternal()
+         } catch (HH) {
+           return console.error("Failed to setup Firebase SDK:", HH), null
+         }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L4833-L4840` → after: `L33-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L33-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L33-L50) · [Before (L4833-L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L4833-L4840)

```diff
-     }
- 
-     function Ny(UU) {
-       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
-       const zU = xz[UU].response,
-         cU = Kz.extend({
-           cmd: Az(UU),
-           data: zU
+       static async setupInternal() {
+         const HH = await Promise.all([LH.e(297), LH.e(296)]).then((() => LH(41814))),
+           BH = await Promise.all([LH.e(297), LH.e(298)]).then((() => LH(41842))),
+           YH = await Promise.all([LH.e(297), LH.e(299)]).then((() => LH(41847))),
+           uH = HH.initializeApp({
+             ...CH,
+             measurementId: rH.bloxdGa4MeasurementId
+           });
+         (0, rH.setUpGtag)(), window.gtag("config", rH.bloxdGa4MeasurementId), (0, rH.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
+         const QH = BH.getAnalytics(uH),
+           WH = {
+             portal: SH.currentUrl.getSearchParam("portal") || "root",
+             loggedIn: !1
+           };
+         BH.setUserProperties(QH, WH);
+         const MH = YH.initializeAuth(uH, {
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L4842-L4846` → after: `L52-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L52-L55) · [Before (L4842-L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L4842-L4846)

```diff
-       return zU => async yU => {
-         const QU = await zU({
-           cmd: UU,
-           args: yU,
-           transfer: XU(yU)
+         YH.useDeviceLanguage(MH);
+         const xH = new YH.GoogleAuthProvider;
+         xH.setCustomParameters({
+           prompt: "select_account"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L4848-L4893` → after: `L57-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L57-L61) · [Before (L4848-L4893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L4848-L4893)

```diff
-         return cU.parse(QU).data
-       }
-     }
-     const Iy = Ny(nz.AUTHENTICATE),
-       py = UU => Yy(UU, jz.AUTHORIZE, Vc),
-       ay = UU => Yy(UU, jz.CAPTURE_LOG, vc),
-       ty = UU => Yy(UU, jz.ENCOURAGE_HW_ACCELERATION, cy),
-       gy = UU => Yy(UU, jz.GET_ENTITLEMENTS_EMBEDDED, hc),
-       ky = UU => Yy(UU, jz.GET_SKUS_EMBEDDED, Tc),
-       Gy = UU => Yy(UU, jz.GET_CHANNEL_PERMISSIONS, yy),
-       By = UU => Yy(UU, jz.GET_PLATFORM_BEHAVIORS, Qy),
-       Zy = UU => Yy(UU, jz.OPEN_EXTERNAL_LINK, vc),
-       Ry = UU => Yy(UU, jz.OPEN_INVITE_DIALOG, vc),
-       Py = Ny(nz.OPEN_SHARE_MOMENT_DIALOG);
-     cc.DI({
-       state: !0,
- ... (30 more removed lines; see GitHub link above)
+         const vH = new YH.OAuthProvider(AH.h[AH.d.APPLE]),
+           PH = new YH.OAuthProvider(AH.h[AH.d.MICROSOFT]);
+         PH.setCustomParameters({
+           prompt: "select_account",
+           tenant: "consumers"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L4895-L5229` → after: `L63-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L63-L66) · [Before (L4895-L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L4895-L5229)

```diff
-         return async UU => {
-           try {
-             const cU = await XU({
-               cmd: zU,
-               args: UU,
-               transfer: QU(UU)
-             });
-             return AU.parse(cU).data
-           } catch (cU) {
-             if (cU.code === Sz.INVALID_PAYLOAD) {
-               const cU = yU(UU),
-                 FU = await XU({
-                   cmd: zU,
-                   args: cU,
-                   transfer: QU(cU)
-                 });
- ... (319 more removed lines; see GitHub link above)
+         const TH = {
+           [AH.d.GOOGLE]: xH,
+           [AH.d.APPLE]: vH,
+           [AH.d.MICROSOFT]: PH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L5231-L5259` → after: `L68-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L68-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L68-L77) · [Before (L5231-L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L5231-L5259)

```diff
-         XQ.forEach((XU => {
-           ! function(UU, XU, zU) {
-             const cU = UU[XU],
-               yU = UU;
-             cU && (UU[XU] = function() {
-               const UU = [].slice.call(arguments),
-                 QU = "" + UU.join(" ");
-               zU(XU, QU), cU.apply(yU, UU)
-             })
-           }(console, XU, UU)
-         }))
-       }
-       handleClose(UU) {
-         oy.parse(UU)
-       }
-       handleHandshake() {}
- ... (13 more removed lines; see GitHub link above)
+         window.gtag("set", {
+           cookie_flags: "SameSite=None;Secure"
+         }), await new Promise((HH => {
+           const BH = YH.onIdTokenChanged(MH, (LH => {
+             BH(), HH()
+           }))
+         }));
+         class UH extends GH {
+           setUserProperties(HH) {
+             BH.setUserProperties(QH, HH)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L5261-L5591` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L79-L80) · [Before (L5261-L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L5261-L5591)

```diff
-           if (null == cU.nonce) return void console.error("Missing nonce", UU);
-           null === (zU = this.pendingCommands.get(cU.nonce)) || void 0 === zU || zU.resolve(cU), this.pendingCommands.delete(cU.nonce)
-         }
-       }
-       _getSearch() {
-         return "undefined" === typeof window ? "" : window.location.search
-       }
-     }
-     var QQ, AQ = 1e9,
-       FQ = !0,
-       oQ = "[DecimalError] ",
-       DQ = oQ + "Invalid argument: ",
-       EQ = oQ + "Exponent out of range: ",
-       YQ = Math.floor,
-       NQ = Math.pow,
-       IQ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
- ... (315 more removed lines; see GitHub link above)
+           onIdTokenChanged(HH) {
+             YH.onIdTokenChanged(MH, HH)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L5593-L5664` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L82-L83) · [Before (L5593-L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L5593-L5664)

```diff
-           if (YU[EU] += QU, YU[EU] != pQ) break;
-           YU[EU--] = 0, QU = 1
-         }
-       for (cU = YU.length; 0 === YU[--cU];) YU.pop();
-       if (FQ && (UU.e > tQ || UU.e < -tQ)) throw Error(EQ + PQ(UU));
-       return UU
-     }
- 
-     function wQ(UU, XU) {
-       var zU, cU, yU, QU, AU, FU, oU, DU, EU, YU, NU = UU.constructor,
-         IU = NU.precision;
-       if (!UU.s || !XU.s) return XU.s ? XU.s = -XU.s : XU = new NU(UU), FQ ? CQ(XU, IU) : XU;
-       if (oU = UU.d, YU = XU.d, cU = XU.e, DU = UU.e, oU = oU.slice(), AU = DU - cU) {
-         for ((EU = AU < 0) ? (zU = oU, AU = -AU, FU = YU.length) : (zU = YU, cU = DU, FU = oU.length), AU > (yU = Math.max(Math.ceil(IU / 7), FU) + 2) && (AU = yU, zU.length = 1), zU.reverse(), yU = AU; yU--;) zU.push(0);
-         zU.reverse()
-       } else {
- ... (56 more removed lines; see GitHub link above)
+           canSignIn() {
+             return !0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L5666-L5930` → after: `L85-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L85-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L85-L108) · [Before (L5666-L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L5666-L5930)

```diff
-           return UU === ~~UU && UU < 1e7 ? (XU.e = 0, void(XU.d = [UU])) : eQ(XU, UU.toString())
-         }
-         if ("string" !== typeof UU) throw Error(DQ + UU);
-         if (45 === UU.charCodeAt(0) ? (UU = UU.slice(1), XU.s = -1) : XU.s = 1, !IQ.test(UU)) throw Error(DQ + UU);
-         eQ(XU, UU)
-       }
-       if (QU.prototype = gQ, QU.ROUND_UP = 0, QU.ROUND_DOWN = 1, QU.ROUND_CEIL = 2, QU.ROUND_FLOOR = 3, QU.ROUND_HALF_UP = 4, QU.ROUND_HALF_DOWN = 5, QU.ROUND_HALF_EVEN = 6, QU.ROUND_HALF_CEIL = 7, QU.ROUND_HALF_FLOOR = 8, QU.clone = UU, QU.config = QU.set = SQ, void 0 === XU &&  … [truncated]
-         for (yU = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], zU = 0; zU < yU.length;) XU.hasOwnProperty(cU = yU[zU++]) || (XU[cU] = this[cU]);
-       return QU.config(XU), QU
-     }({
-       precision: 20,
-       rounding: 4,
-       toExpNeg: -7,
-       toExpPos: 21,
-       LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-     });
- ... (249 more removed lines; see GitHub link above)
+           async signInWithPopup(HH) {
+             var BH;
+             const LH = await YH.signInWithPopup(MH, TH[HH]);
+             return null !== (BH = null === LH || void 0 === LH ? void 0 : LH.user) && void 0 !== BH ? BH : null
+           }
+           async getCurrentUser(HH) {
+             const BH = MH.currentUser;
+             if (!BH) return null;
+             const {
+               signInProvider: LH
+             } = await BH.getIdTokenResult(!1);
+             return LH === AH.h[HH] ? BH : null
+           }
+           async signOut(HH) {
+             null !== await this.getCurrentUser(HH) && await YH.signOut(MH)
+           }
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L5932-L5997` → after: `L110-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L110-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L110-L112) · [Before (L5932-L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L5932-L5997)

```diff
-         return UU
-       };
- 
-       function OX(UU, XU) {
-         return UU && qX(UU, XU, Ez)
-       }
- 
-       function SX(UU, XU) {
-         for (var zU = 0, cU = (XU = lX(XU, UU) ? [XU] : MX(XU)).length; null != UU && zU < cU;) UU = UU[KX(XU[zU++])];
-         return zU && zU == cU ? UU : void 0
-       }
- 
-       function rX(UU, XU) {
-         return null != UU && XU in Object(UU)
-       }
- 
- ... (50 more removed lines; see GitHub link above)
+         class OH extends GH {
+           setUserProperties(HH) {
+             BH.setUserProperties(QH, HH)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L5999-L6065` → after: `L114-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L114-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L114-L118) · [Before (L5999-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L5999-L6065)

```diff
-           if (!LU) return !1;
-           return EU || (EU = new LX),
-             function(UU, XU, zU, cU, yU, QU) {
-               var AU = 2 & yU,
-                 FU = Ez(UU),
-                 oU = FU.length,
-                 DU = Ez(XU),
-                 EU = DU.length;
-               if (oU != EU && !AU) return !1;
-               var YU = oU;
-               for (; YU--;) {
-                 var NU = FU[YU];
-                 if (!(AU ? NU in XU : TU.call(XU, NU))) return !1
-               }
-               var IU = QU.get(UU);
-               if (IU && QU.get(XU)) return IU == XU;
- ... (51 more removed lines; see GitHub link above)
+           onIdTokenChanged(HH) {
+             YH.onIdTokenChanged(MH, HH)
+           }
+           canSignIn(HH) {
+             return null !== (0, zH.e)(HH)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L6067-L6074` → after: `L120-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L120-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L120-L127) · [Before (L6067-L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L6067-L6074)

```diff
-         }(UU[0], UU[1]) : function(UU) {
-           var XU = function(UU) {
-             var XU = Ez(UU),
-               zU = XU.length;
-             for (; zU--;) {
-               var cU = XU[zU],
-                 yU = UU[cU];
-               XU[zU] = [cU, yU, xX(yU)]
+           async signInWithPopup(HH) {
+             const BH = (0, zH.e)(HH);
+             if (null === BH) return console.warn(`The app can't sign in with ${HH}; check canSignIn first`), null;
+             try {
+               return await VH(BH, "signIn")
+             } catch (LH) {
+               if (LH instanceof XH.d && "timeout" === LH.code) return null;
+               throw (0, EH.reportClientError)("login_failed", LH, `app_${BH}`), LH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L6104-L6109` → after: `L130-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L130-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L130-L143) · [Before (L6104-L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L6104-L6109)

```diff
-         }(UU) : function(UU) {
-           return lX(UU) ? (XU = KX(UU), function(UU) {
-             return null == UU ? void 0 : UU[XU]
-           }) : function(UU) {
-             return function(XU) {
-               return SX(XU, UU)
+           async getCurrentUser(HH) {
+             const BH = MH.currentUser;
+             if (BH) {
+               const {
+                 signInProvider: LH
+               } = await BH.getIdTokenResult(!1);
+               if (LH === AH.h[HH]) return BH
+             }
+             const LH = (0, zH.e)(HH);
+             if (null === LH) return null;
+             try {
+               return await VH(LH, "getCurrentUser")
+             } catch (rH) {
+               return console.error(`Failed to get the current ${HH} user from the app:`, rH), null
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L6150-L6155` → after: `L146-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L146-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L146-L156) · [Before (L6150-L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L6150-L6155)

```diff
-           if (NU) {
-             if (!vU(XU, (function(UU, XU) {
-                 if (!NU.has(XU) && (IU === UU || zU(IU, UU, cU, yU, QU))) return NU.add(XU)
-               }))) {
-               YU = !1;
-               break
+           async signOut(HH) {
+             const BH = (0, zH.e)(HH);
+             null !== BH && tH.b.request(`${BH}.signOut`, {}).catch((BH => {
+               console.error(`Failed to sign out of ${HH} in the app:`, BH)
+             }));
+             const LH = MH.currentUser;
+             if (LH) {
+               const {
+                 signInProvider: BH
+               } = await LH.getIdTokenResult(!1);
+               BH === AH.h[HH] && await YH.signOut(MH)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L6162-L6236` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L160) · [Before (L6162-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L6162-L6236)

```diff
-         return QU.delete(UU), QU.delete(XU), YU
-       }
- 
-       function VX(UU, XU) {
-         var zU = UU.__data__;
-         return function(UU) {
-           var XU = typeof UU;
-           return "string" == XU || "number" == XU || "symbol" == XU || "boolean" == XU ? "__proto__" !== UU : null === UU
-         }(XU) ? zU["string" == typeof XU ? "string" : "hash"] : zU.map
-       }
- 
-       function sX(UU, XU) {
-         var zU = function(UU, XU) {
-           return null == UU ? void 0 : UU[XU]
-         }(UU, XU);
-         return fX(zU) ? zU : void 0
- ... (59 more removed lines; see GitHub link above)
+         return (0, hH.isMobileApp)() ? (await tH.b.ready, new OH) : new UH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L6238-L6329` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/159.js#L162) · [Before (L6238-L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/159.js#L6238-L6329)

```diff
- 
-       function bX(UU) {
-         if (null != UU) {
-           try {
-             return bU.call(UU)
-           } catch (XU) {}
-           try {
-             return UU + ""
-           } catch (XU) {}
-         }
-         return ""
-       }
- 
-       function TX(UU, XU) {
-         if ("function" != typeof UU || XU && "function" != typeof XU) throw new TypeError("Expected a function");
-         var zU = function() {
- ... (76 more removed lines; see GitHub link above)
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/160.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/160.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/160.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/160.js#L4)

```diff
-   7315: (UU, XU, zU) => {
+   7259: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/160.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/160.js#L6-L7)

```diff
-       BloxdMsnAccountSdk: () => YU,
-       MsnSdkAdaptor: () => aU
+       BloxdDiscordActivitySdk: () => vH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L9-L89` → after: `L8-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L8-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/160.js#L8-L57) · [Before (L9-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/160.js#L9-L89)

```diff
-     var cU = zU(1351),
-       yU = zU(1184),
-       QU = zU(3861),
-       AU = zU(646),
-       FU = zU(1774);
-     const oU = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
-     let DU = null;
- 
-     function EU() {
-       return DU ??= async function() {
-         await (0, yU.c)(oU, {}, !1);
-         for (let UU = 0; UU < 50 && !window.$msstart; UU++) await (0, AU.S)(100)
-       }(), DU
-     }
-     class YU {
-       constructor() {}
- ... (65 more removed lines; see GitHub link above)
+     var AH = LH(7262),
+       rH = LH(1177),
+       SH = LH(1123),
+       hH = LH(619),
+       tH = LH(1194),
+       zH = LH(1789),
+       CH = LH(1297),
+       EH = LH(761),
+       XH = LH(15),
+       GH = LH(1139),
+       YH = LH(2523),
+       uH = function(HH) {
+         return HH.APPLICATION_COMMANDS = "applications.commands", HH.IDENTIFY = "identify", HH.EMAIL = "email", HH.GUILDS = "guilds", HH.READ_DM_CHANNELS = "dm_channels.read", HH.WRITE_ACTIVITIES = "rpc.activities.write", HH
+       }(uH || {}),
+       QH = function(HH) {
+         return HH[HH.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", HH[HH.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", HH[HH.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", HH[HH.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", HH[HH.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", HH[HH.RATELIMITE … [truncated]
+ ... (34 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L92-L101` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/160.js#L60-L63) · [Before (L92-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/160.js#L92-L101)

```diff
-         leaderboard: {
-           1: ["right", "left"],
-           5: ["top", "left"]
-         },
-         square: {
-           1: []
-         },
-         skyscraper: {
-           2: []
-         }
+         goalRush: "Playing",
+         heroesvbrainrots: "Battling",
+         hideseek: "Playing",
+         bingo: "Playing"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L103-L105` → after: `L65-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/160.js#L65-L67) · [Before (L103-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/160.js#L103-L105)

```diff
-     class aU extends cU.d {
-       constructor() {
-         super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
+     class vH {
+       constructor(HH) {
+         this.discordSdk = HH, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L108-L147` → after: `L70-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L70-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/160.js#L70-L99) · [Before (L108-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/160.js#L108-L147)

```diff
-         return await EU(), new aU
-       }
-       playVideoAd(UU, XU) {
-         this.playVideoOrRewarded("video", UU, UU)
-       }
-       playRewarded(UU, XU) {
-         this.playVideoOrRewarded("rewarded", UU, XU)
-       }
-       canShowBloxdAd(UU) {
-         for (const XU in pU)
-           if (UU.adId in pU[XU]) return !1;
-         return !0
-       }
-       async renderBanner(UU) {
-         if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,QU.c)(UU)}: msn placement is already showing so not requesting`);
-         const XU = pU[UU.adType][UU.adId];
- ... (24 more removed lines; see GitHub link above)
+         console.log("Setting up Discord SDK with client id", GH.e.discordClientID);
+         const HH = new AH.b(GH.e.discordClientID);
+         let BH = !1;
+         setTimeout((() => {
+           BH || (console.warn("Discord SDK took too long to initialize"), (0, zH.reloadBloxd)())
+         }), 15e3), await HH.ready(), BH = !0;
+         try {
+           const {
+             enabled: BH
+           } = await HH.commands.encourageHardwareAcceleration();
+           BH || console.warn("Hardware acceleration not enabled in the Discord client")
+         } catch (rH) {
+           console.error("Failed to encourage hardware acceleration in the Discord client", rH)
+         }
+         const LH = new vH(HH);
+         return LH.isMobilePlatform() && (LH.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
+ ... (14 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L149-L154` → after: `L101-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L101-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/160.js#L101-L213) · [Before (L149-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/160.js#L149-L154)

```diff
-         } else console.warn(`AD ${(0,QU.c)(UU)}: couldn't find an msn unit that fit screen size`)
-       }
-       async clearBanner(UU) {
-         null !== this.currentlyShowingBannerPlacement && (0, QU.c)(UU) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,QU.c)(UU)}: Attempting to clear msn banner ads for banner`, UU), await this.clearAllBannerAds())
-       }
-       async clearAllBannerAds() {
+         }
+         BH === this.activityUpdateId && await this.discordSdk.commands.setActivity({
+           activity: {
+             type: WH.PLAYING,
+             details: LH,
+             state: AH,
+             assets: {
+               large_image: "icon",
+               large_text: LH
+             },
+             timestamps: {
+               start: this.startTime
+             }
+           }
+         }).catch((HH => {
+           console.error(`Failed to update Discord activity rich presence with description="${LH}":`, HH)
+ ... (97 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L156-L157` → after: `L215-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L215-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/160.js#L215-L218) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/160.js#L156-L157)

```diff
-           if (this.isCurrentlyClearingAllBanners) return;
-           this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
+           const {
+             locale: HH
+           } = await this.discordSdk.commands.userSettingsGetLocale();
+           return HH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L159-L177` → after: `L220-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L220-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/160.js#L220-L261) · [Before (L159-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/160.js#L159-L177)

```diff
-           console.log("AD: Error while clearing all msn banner ads", UU)
-         } finally {
-           this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
-         }
-       }
-       playVideoOrRewarded(UU, XU, zU) {
-         const cU = XU => {
-           console.error(`AD: Error while playing MSN ${UU} ad: `, XU), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), zU()
-         };
-         if (window.$msstart) {
-           console.log(`AD: Attempting to play MSN ${UU} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
-           const zU = async () => {
-             try {
-               const zU = await window.$msstart.loadAdsAsync("rewarded" === UU),
-                 cU = await window.$msstart.showAdsAsync(zU.instanceId);
-               this.clearAllBannerAds(), await cU.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${UU} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), XU()
- ... (3 more removed lines; see GitHub link above)
+           return console.error("Failed to get user locale from Discord:", HH.stack), null
+         }
+       }
+       async getChannelName(HH) {
+         return this.discordSdk.commands.getChannel({
+           channel_id: HH
+         }).then((HH => HH.name)).catch((HH => "Your Current Discord Chat"))
+       }
+       async getDiscordContextFromChannelId(HH) {
+         const BH = await this.getChannelName(HH);
+         return rH.g.from({
+           type: rH.d.DM,
+           channelId: HH,
+           channelName: BH
+         })
+       }
+ ... (26 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L179-L209` → after: `L263-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L263-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/160.js#L263-L271) · [Before (L179-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/160.js#L179-L209)

```diff
-           window.adStartSoPause(null, {
-             preventMovement: !0
-           }), zU()
-         } else cU(`AD: Can't play MSN ${UU} ad because sdk is not loaded`)
-       }
-     }
- 
-     function tU(UU) {
-       let XU, zU;
-       switch (UU.placement) {
-         case "top":
-           XU = (window.innerWidth - UU.width) / 2, zU = NU;
-           break;
-         case "right":
-           XU = window.innerWidth - UU.width - NU, zU = window.innerHeight / 2 - UU.height / 2 - 10;
-           break;
- ... (15 more removed lines; see GitHub link above)
+         XH.c.set({
+           notchSize: {
+             top: BH("top", window.innerHeight),
+             right: Math.max(BH("right", window.innerWidth), 7),
+             bottom: 0,
+             left: BH("left", window.innerWidth)
+           }
+         })
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/161.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/161.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/161.js#L4-L9) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/161.js#L4)

```diff
-   7320: (UU, XU, zU) => {
+   7262: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => rS,
+       d: () => eL
+     });
+     var AH = {};
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L6` → after: `L11-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L11-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/161.js#L11-L28) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/161.js#L6)

```diff
-       GameDistributionSdkAdaptor: () => QU
+       c: () => AA,
+       k: () => hA,
+       g: () => SA,
+       n: () => sL,
+       q: () => aL,
+       t: () => oA,
+       w: () => pL,
+       z: () => lA,
+       A: () => UA,
+       C: () => fA,
+       G: () => JL,
+       K: () => OA,
+       N: () => mA,
+       O: () => IA,
+       R: () => iL,
+       Q: () => BA,
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L8-L10` → after: `L30-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L30-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/161.js#L30-L476) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/161.js#L8-L10)

```diff
-     var cU = zU(1351),
-       yU = zU(1184);
-     class QU extends cU.d {
+     var rH = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
+ 
+     function SH(HH) {
+       return HH && HH.__esModule && Object.prototype.hasOwnProperty.call(HH, "default") ? HH.default : HH
+     }
+     var hH = {
+       exports: {}
+     };
+     ! function(HH) {
+       var BH = Object.prototype.hasOwnProperty,
+         LH = "~";
+ 
+       function AH() {}
+ 
+       function rH(HH, BH, LH) {
+         this.EX = HH, this.context = BH, this.once = LH || !1
+ ... (431 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L12` → after: `L478-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L478-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/161.js#L478-L638) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/161.js#L12)

```diff
-         super(), this.setOnEndCb = UU, this.name = "gamedistribution"
+         this.spa = this.safeParseAsync, this._def = HH, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine  … [truncated]
+       }
+       get description() {
+         return this._def.description
+       }
+       _getType(HH) {
+         return XH(HH.data)
+       }
+       _getOrReturnCtx(HH, BH) {
+         return BH || {
+           common: HH.parent.common,
+           data: HH.data,
+           parsedType: XH(HH.data),
+           schemaErrorMap: this._def.errorMap,
+           path: HH.path,
+           parent: HH.parent
+ ... (145 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L14` → after: `L640-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L640-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/161.js#L640-L693) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/161.js#L14)

```diff
-       static async setup() {
+       brand() {
+         return new mB({
+           typeName: KB.ZodBranded,
+           type: this,
+           ...fH(this._def)
+         })
+       } catch (HH) {
+         const BH = "function" === typeof HH ? HH : () => HH;
+         return new OB({
+           ...fH(this._def),
+           innerType: this,
+           catchValue: BH,
+           typeName: KB.ZodCatch
+         })
+       }
+       describe(HH) {
+ ... (38 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L17-L52` → after: `L1038-L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1038-L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/161.js#L1038-L2065) · [Before (L17-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/161.js#L17-L52)

```diff
-         return window.GD_OPTIONS = {
-           gameId: "b35b336d21654aa5a378480d13ed7225",
-           onEvent: zU => {
-             const cU = () => {
-               XU && (window.adCompleteSoResume(), XU = !1), UU && (UU(), UU = null)
-             };
-             switch (zU.name) {
-               case "SDK_GAME_START":
-                 console.log("Gamedis SDK_GAME_START"), XU = !1, UU ? (UU(), UU = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
-                 break;
-               case "SDK_GAME_PAUSE":
-                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
-                   preventMovement: !0
-                 }), XU = !0;
-                 break;
-               case "SDK_ERROR":
- ... (20 more removed lines; see GitHub link above)
+         const LH = new vH;
+         for (const AH of this._def.checks)
+           if ("int" === AH.kind) tH.isInteger(HH.data) || (BH = this._getOrReturnCtx(HH, BH), xH(BH, {
+             code: GH.invalid_type,
+             expected: "integer",
+             received: "float",
+             message: AH.message
+           }), LH.gu());
+           else if ("min" === AH.kind) {
+           (AH.inclusive ? HH.data < AH.value : HH.data <= AH.value) && (BH = this._getOrReturnCtx(HH, BH), xH(BH, {
+             code: GH.too_small,
+             minimum: AH.value,
+             type: "number",
+             inclusive: AH.inclusive,
+             exact: !1,
+             message: AH.message
+ ... (1012 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L55-L56` → after: `L2068-L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2068-L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/161.js#L2068-L2107) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/161.js#L55-L56)

```diff
-       playVideoAd(UU, XU) {
-         this.setOnEndCb(UU), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
+     }
+     zB.create = (HH, BH, LH) => new zB({
+       left: HH,
+       right: BH,
+       typeName: KB.ZodIntersection,
+       ...fH(LH)
+     });
+     class CB extends lH {
+       _parse(HH) {
+         const {
+           status: BH,
+           ctx: LH
+         } = this._processInputParams(HH);
+         if (LH.parsedType !== EH.array) return xH(LH, {
+           code: GH.invalid_type,
+           expected: EH.array,
+ ... (24 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L58-L59` → after: `L2109-L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2109-L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/161.js#L2109-L2113) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/161.js#L58-L59)

```diff
-       willRequestBanner() {
-         return void 0 !== window.gdsdk.AdType.Display
+       rest(HH) {
+         return new CB({
+           ...this._def,
+           rest: HH
+         })
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L61-L64` → after: `L2115-L2220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2115-L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/161.js#L2115-L2220) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/161.js#L61-L64)

```diff
-       renderBanner(UU) {
-         console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(UU.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, UU.divId), window.gdsdk.showAd(window.gdsdk. … [truncated]
-           containerId: UU.divId
-         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((UU => console.info(UU)))) : console.error("window.gdsdk.AdType.Display is undefined")
+     }
+     CB.create = (HH, BH) => {
+       if (!Array.isArray(HH)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
+       return new CB({
+         items: HH,
+         typeName: KB.ZodTuple,
+         rest: null,
+         ...fH(BH)
+       })
+     };
+     class EB extends lH {
+       get keySchema() {
+         return this._def.keyType
+       }
+       get valueSchema() {
+         return this._def.valueType
+ ... (90 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/162.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/162.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567)

#### 1. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/162.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/162.js#L4)

```diff
-   7328: (UU, XU, zU) => {
+   7269: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/162.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/162.js#L6)

```diff
-       CoolMathGamesSdkAdaptor: () => QU
+       BloxdMsnAccountSdk: () => XH,
+       MsnSdkAdaptor: () => QH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L8-L10` → after: `L9-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L9-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/162.js#L9-L103) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/162.js#L8-L10)

```diff
-     var cU = zU(1351),
-       yU = zU(1184);
-     class QU extends cU.d {
+     var AH = LH(1289),
+       rH = LH(1110),
+       SH = LH(3870),
+       hH = LH(619),
+       tH = LH(1766);
+     const zH = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
+     let CH = null;
+ 
+     function EH() {
+       return CH ??= async function() {
+         await (0, rH.e)(zH, {}, !1);
+         for (let HH = 0; HH < 50 && !window.$msstart; HH++) await (0, hH.Q)(100)
+       }(), CH
+     }
+     class XH {
+       constructor() {}
+ ... (79 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L12-L24` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/162.js#L105) · [Before (L12-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/162.js#L12-L24)

```diff
-         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
-           console.error("adBreakStartCallback not set")
-         }, this.adBreakCompleteCallback = () => {
-           console.error("adBreakCompleteCallback not set")
-         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
-       }
-       doAdBreakStart() {
-         this.adBreakStartCallback();
-         const UU = document.getElementsByClassName("ads-popup");
-         for (const XU of UU) XU instanceof HTMLElement && (XU.style.position = "fixed")
-       }
-       doAdBreakComplete() {
-         this.adBreakCompleteCallback()
+         super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L27` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/162.js#L108) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/162.js#L27)

```diff
-         return await (0, yU.c)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, yU.c)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new QU
+         return await EH(), new QH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L30-L31` → after: `L111-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L111-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/162.js#L111-L179) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/162.js#L30-L31)

```diff
-         this.adBreakStartCallback = () => {
-           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+         this.playVideoOrRewarded("video", HH, HH)
+       }
+       playRewarded(HH, BH) {
+         this.playVideoOrRewarded("rewarded", HH, BH)
+       }
+       canShowBloxdAd(HH) {
+         for (const BH in uH)
+           if (HH.adId in uH[BH]) return !1;
+         return !0
+       }
+       async renderBanner(HH) {
+         if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,SH.c)(HH)}: msn placement is already showing so not requesting`);
+         const BH = uH[HH.adType][HH.adId];
+         if ((0, hH.M)(BH)) return void console.warn(`AD ${(0,SH.c)(HH)}: no msn placement is configured for this bloxd placement so not showing any ad`);
+         const LH = [];
+         for (const AH of BH)
+ ... (53 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L33-L53` → after: `L181-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L181-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/162.js#L181-L209) · [Before (L33-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/162.js#L33-L53)

```diff
-           })
-         }, this.adBreakCompleteCallback = () => {
-           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), UU()
-         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
-       }
-       onGameplayStart() {
-         try {
-           window.parent.cmgGameEvent("start")
-         } catch {
-           console.log("Couldn't access cmgGameEvent on parent")
-         }
-       }
-       onGameplayStop() {}
-       onGameEntered() {
-         try {
-           window.parent.cmgGameEvent("start")
- ... (5 more removed lines; see GitHub link above)
+           }), LH()
+         } else AH(`AD: Can't play MSN ${HH} ad because sdk is not loaded`)
+       }
+     }
+ 
+     function WH(HH) {
+       let BH, LH;
+       switch (HH.placement) {
+         case "top":
+           BH = (window.innerWidth - HH.width) / 2, LH = GH;
+           break;
+         case "right":
+           BH = window.innerWidth - HH.width - GH, LH = window.innerHeight / 2 - HH.height / 2 - 10;
+           break;
+         case "left":
+           BH = GH, LH = window.innerHeight / 2 - HH.height / 2 - 10
+ ... (13 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/163.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/163.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/163.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/163.js#L4)

```diff
-   7337: (UU, XU, zU) => {
+   7271: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/163.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/163.js#L6)

```diff
-       AdMobSdkAdaptor: () => YU
+       GameDistributionSdkAdaptor: () => SH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L8-L41` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/163.js#L8-L10) · [Before (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/163.js#L8-L41)

```diff
-     var cU = zU(1351),
-       yU = zU(27),
-       QU = zU(1734),
-       AU = zU(142),
-       FU = zU(3861),
-       oU = zU(344),
-       DU = zU(1783);
-     const EU = {
-       mobileAndroid: {
-         banners: {
-           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
-           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
-           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
-           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
-           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
-           square_1: "ca-app-pub-5991928098122027/6381115670"
- ... (18 more removed lines; see GitHub link above)
+     var AH = LH(1289),
+       rH = LH(1110);
+     class SH extends AH.b {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L43-L51` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/163.js#L12) · [Before (L43-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/163.js#L43-L51)

```diff
-         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = EU[UU], QU.d.on("ads.bannerStatus", (UU => {
-           let {
-             placementId: XU,
-             shown: zU,
-             error: cU
-           } = UU;
-           const yU = !this.bannerFirstResponseSeen.has(XU);
-           this.bannerFirstResponseSeen.add(XU), yU ? ((0, DU.k)(zU), zU ? console.log(`AD ${XU}: AdMob banner loaded`) : console.warn(`AD ${XU}: AdMob banner failed to load: ${cU}`)) : zU || console.warn(`AD ${XU}: AdMob banner refresh failed: ${cU}`)
-         }))
+         super(), this.setOnEndCb = HH, this.name = "gamedistribution"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L54-L76` → after: `L15-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L15-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/163.js#L15-L52) · [Before (L54-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/163.js#L54-L76)

```diff
-         const UU = "mobileIos" === AU.siteUsed ? "mobileIos" : "mobileAndroid";
-         return console.log(`AD: AdMobSDK initialised for ${UU}`), new YU(UU)
-       }
-       muteGameDuring(UU) {
-         return this.fullScreenAdsInFlight++, yU.e.set({
-           soundOnFromAd: !1
-         }), UU.finally((() => {
-           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && yU.e.set({
-             soundOnFromAd: !0
-           })
-         }))
-       }
-       playRewarded(UU, XU) {
-         const zU = this.adUnitIds.rewarded;
-         this.muteGameDuring(QU.d.request("ads.showRewarded", {
-           placementId: zU
- ... (7 more removed lines; see GitHub link above)
+         let HH;
+         let BH;
+         return window.GD_OPTIONS = {
+           gameId: "b35b336d21654aa5a378480d13ed7225",
+           onEvent: LH => {
+             const AH = () => {
+               BH && (window.adCompleteSoResume(), BH = !1), HH && (HH(), HH = null)
+             };
+             switch (LH.name) {
+               case "SDK_GAME_START":
+                 console.log("Gamedis SDK_GAME_START"), BH = !1, HH ? (HH(), HH = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
+                 break;
+               case "SDK_GAME_PAUSE":
+                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
+                   preventMovement: !0
+                 }), BH = !0;
+ ... (22 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L80-L87` → after: `L56-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L56-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/163.js#L56-L59) · [Before (L80-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/163.js#L80-L87)

```diff
-         const zU = this.adUnitIds.interstitial;
-         this.muteGameDuring(QU.d.request("ads.showInterstitial", {
-           placementId: zU
-         })).then((() => {
-           UU()
-         }), (XU => {
-           console.warn(`AD ${zU}: AdMob interstitial failed:`, XU), UU()
-         }))
+         this.setOnEndCb(HH), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
+       }
+       willRequestBanner() {
+         return void 0 !== window.gdsdk.AdType.Display
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L90-L118` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/163.js#L62-L64) · [Before (L90-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/163.js#L90-L118)

```diff
-         const XU = (0, FU.c)(UU),
-           zU = this.adUnitIds.banners[XU];
-         if (void 0 === zU) return;
-         const cU = document.getElementById(UU.divId);
-         if (!cU) return void console.warn(`AD ${XU}: AdMob renderBanner called but div ${UU.divId} is not in DOM`);
-         const yU = cU.getBoundingClientRect(),
-           AU = window.innerWidth,
-           EU = window.innerHeight;
-         if (0 === AU || 0 === EU) return void console.warn(`AD ${XU}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
-         const YU = {
-           x1: oU.d.clamp(yU.left / AU * 100, 0, 100),
-           y1: oU.d.clamp(yU.top / EU * 100, 0, 100),
-           x2: oU.d.clamp(yU.right / AU * 100, 0, 100),
-           y2: oU.d.clamp(yU.bottom / EU * 100, 0, 100)
-         };
-         this.bannerPlacementByBloxdId.set(XU, zU), console.log(`AD ${XU}: AdMob renderBanner placementId=${zU} box=`, YU), (0, DU.g)("site_sdk"), QU.d.emit("ads.showBanner", {
- ... (13 more removed lines; see GitHub link above)
+         console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(HH.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, HH.divId), window.gdsdk.showAd(window.gdsdk. … [truncated]
+           containerId: HH.divId
+         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((HH => console.info(HH)))) : console.error("window.gdsdk.AdType.Display is undefined")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/164.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/164.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/164.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/164.js#L4)

```diff
-   7342: (UU, XU, zU) => {
+   7274: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/164.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/164.js#L6)

```diff
-       AdinPlaySdkAdaptor: () => EU
+       CoolMathGamesSdkAdaptor: () => SH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L8-L34` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/164.js#L8-L10) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/164.js#L8-L34)

```diff
-     var cU = zU(1351),
-       yU = zU(1184),
-       QU = zU(241),
-       AU = zU(3221),
-       FU = zU(3229);
- 
-     function oU(UU) {
-       let XU = 0;
-       UU("addEventListener", 2, ((UU, zU) => {
-         if (!zU) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         !1 === UU.gdprApplies && (0, AU.noteNoGdprChoiceComing)();
-         const cU = function(UU) {
-           const XU = "useractioncomplete" === UU.eventStatus || "tcloaded" === UU.eventStatus && !!UU.tcString;
-           return UU.gdprApplies && XU ? FU.d.every((XU => !0 === UU.purpose.consents[XU])) : null
-         }(UU);
-         if (null === cU) return;
- ... (11 more removed lines; see GitHub link above)
+     var AH = LH(1289),
+       rH = LH(1110);
+     class SH extends AH.b {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L36` → after: `L12-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L12-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/164.js#L12-L24) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/164.js#L36)

```diff
-         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = DU
+         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
+           console.error("adBreakStartCallback not set")
+         }, this.adBreakCompleteCallback = () => {
+           console.error("adBreakCompleteCallback not set")
+         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
+       }
+       doAdBreakStart() {
+         this.adBreakStartCallback();
+         const HH = document.getElementsByClassName("ads-popup");
+         for (const BH of HH) BH instanceof HTMLElement && (BH.style.position = "fixed")
+       }
+       doAdBreakComplete() {
+         this.adBreakCompleteCallback()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L39-L63` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/164.js#L27) · [Before (L39-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/164.js#L39-L63)

```diff
-         return (0, QU.canonicaliseZonesWhenIdle)(DU), (0, AU.setUpGtag)({
-             tcfCmp: !0
-           }), await (0, yU.c)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
-           function() {
-             if (window.__tcfapi) return void oU(window.__tcfapi);
-             let UU = 0;
-             const XU = window.setInterval((() => {
-               UU++;
-               const zU = window.__tcfapi;
-               zU ? (window.clearInterval(XU), oU(zU)) : UU >= 150 && window.clearInterval(XU)
-             }), 200)
-           }(), new EU
-       }
-       playRewarded(UU, XU) {
-         if ("undefined" !== typeof window.aiptag.adplayer) {
-           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
- ... (9 more removed lines; see GitHub link above)
+         return await (0, rH.e)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, rH.e)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new SH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L66-L68` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/164.js#L30-L32) · [Before (L66-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/164.js#L66-L68)

```diff
-         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (XU ? ` (alias: ${XU})` : "")), window.aiptag.cmd.player.push((function() {
-           window.aiptag.adplayer.startPreRoll({
-             alias: XU
+         this.adBreakStartCallback = () => {
+           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+             preventMovement: !0
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L70` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/164.js#L34-L36) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/164.js#L70)

```diff
-         })), window.adStartSoPause(UU)) : (UU(), console.error("AIP ad lib not loaded, no ad playing"))
+         }, this.adBreakCompleteCallback = () => {
+           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), HH()
+         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L72-L73` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/164.js#L38-L43) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/164.js#L72-L73)

```diff
-       willRequestBanner() {
-         return "undefined" !== typeof window.aiptag.adplayer
+       onGameplayStart() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L75-L86` → after: `L45-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L45-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/164.js#L45-L51) · [Before (L75-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/164.js#L75-L86)

```diff
-       renderBanner(UU) {
-         if (!this.willRequestBanner()) return void console.log("AD: User has adblock, not requesting new banners");
-         const {
-           divId: XU,
-           alias: zU
-         } = UU;
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.display({
-             adUnitName: XU,
-             alias: zU
-           })
-         })), console.log("AD: Requested aip banner", document.getElementById(UU.divId), zU ? `(alias: ${zU})` : "")
+       onGameplayStop() {}
+       onGameEntered() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L88-L104` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/164.js#L53) · [Before (L88-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/164.js#L88-L104)

```diff
-       clearBanner(UU) {
-         "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.destroy(UU.divId)
-         })), console.log(`AD: Clearing aip banner ad ${UU.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
-       }
-       setBannerAutoRefreshEnabled(UU, XU) {
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.setAutoRefresh(UU.divId, XU)
-         }))
-       }
-       newPageSession() {
-         console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
-           window.__VM.push((function(UU, XU) {
-             XU.Instances.pageManager.newPageSession(!1)
-           }))
-         }))
- ... (1 more removed lines; see GitHub link above)
+       onGameExited() {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/165.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/165.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/165.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/165.js#L4)

```diff
-   7344: (UU, XU, zU) => {
+   7278: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/165.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/165.js#L6)

```diff
-       AdsenseForGamesSdkAdaptor: () => QU
+       AdMobSdkAdaptor: () => XH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L8-L12` → after: `L8-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L8-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/165.js#L8-L51) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/165.js#L8-L12)

```diff
-     var cU = zU(1351),
-       yU = zU(1184);
-     class QU extends cU.d {
-       constructor() {
-         super(), this.name = "adsense"
+     var AH = LH(1289),
+       rH = LH(15),
+       SH = LH(1714),
+       hH = LH(120),
+       tH = LH(3870),
+       zH = LH(317),
+       CH = LH(1769);
+     const EH = {
+       mobileAndroid: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
+           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
+           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
+           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
+           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
+           square_1: "ca-app-pub-5991928098122027/6381115670"
+ ... (28 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L15-L27` → after: `L54-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L54-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/165.js#L54-L77) · [Before (L15-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/165.js#L15-L27)

```diff
-         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(UU) {
-           window.adsbygoogle.push(UU)
-         }, window.adConfig({
-           preloadAdBreaks: "on",
-           sound: "on",
-           onReady: () => {
-             console.log("adsense for games ready")
-           }
-         }), await (0, yU.c)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
-           "data-ad-client": "ca-pub-5991928098122027",
-           "data-ad-frequency-hint": "120s",
-           type: "text/javascript"
-         }), console.log("Loaded adsense for games"), new QU
+         const HH = "mobileIos" === hH.siteUsed ? "mobileIos" : "mobileAndroid";
+         return console.log(`AD: AdMobSDK initialised for ${HH}`), new XH(HH)
+       }
+       muteGameDuring(HH) {
+         return this.fullScreenAdsInFlight++, rH.c.set({
+           soundOnFromAd: !1
+         }), HH.finally((() => {
+           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && rH.c.set({
+             soundOnFromAd: !0
+           })
+         }))
+       }
+       playRewarded(HH, BH) {
+         const LH = this.adUnitIds.rewarded;
+         this.muteGameDuring(SH.b.request("ads.showRewarded", {
+           placementId: LH
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L30-L48` → after: `L80-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L80-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/165.js#L80-L107) · [Before (L30-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/165.js#L30-L48)

```diff
-         console.log("playPreroll requested");
-         let zU = !1;
-         const cU = setTimeout((() => {
-           console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), zU = !0, UU()
-         }), 3e3);
-         window.adBreak({
-           type: "video_start" === XU ? "start" : "next",
-           name: XU,
-           beforeAd: () => {
-             console.log("beforeAd called"), clearTimeout(cU), window.adStartSoPause(null, {
-               preventMovement: !0
-             })
-           },
-           afterAd: () => {
-             console.log("afterAd called"), window.adCompleteSoResume()
-           },
- ... (3 more removed lines; see GitHub link above)
+         const LH = this.adUnitIds.interstitial;
+         this.muteGameDuring(SH.b.request("ads.showInterstitial", {
+           placementId: LH
+         })).then((() => {
+           HH()
+         }), (BH => {
+           console.warn(`AD ${LH}: AdMob interstitial failed:`, BH), HH()
+         }))
+       }
+       renderBanner(HH) {
+         const BH = (0, tH.c)(HH),
+           LH = this.adUnitIds.banners[BH];
+         if (void 0 === LH) return;
+         const AH = document.getElementById(HH.divId);
+         if (!AH) return void console.warn(`AD ${BH}: AdMob renderBanner called but div ${HH.divId} is not in DOM`);
+         const rH = AH.getBoundingClientRect(),
+ ... (12 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/166.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/166.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172)

#### 1. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/166.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/166.js#L4)

```diff
-   7348: (UU, XU, zU) => {
+   7282: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/166.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/166.js#L6)

```diff
-       AditudeSdkAdaptor: () => AU
+       AdinPlaySdkAdaptor: () => EH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L8-L14` → after: `L8-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/166.js#L8-L34) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/166.js#L8-L14)

```diff
-     var cU = zU(1351),
-       yU = zU(1184);
-     const QU = {
-       video: "pb-slot-interstitial-video",
-       rewarded: "pb-slot-rewarded-video"
-     };
-     class AU extends cU.d {
+     var AH = LH(1289),
+       rH = LH(1110),
+       SH = LH(202),
+       hH = LH(3209),
+       tH = LH(3218);
+ 
+     function zH(HH) {
+       let BH = 0;
+       HH("addEventListener", 2, ((HH, LH) => {
+         if (!LH) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         !1 === HH.gdprApplies && (0, hH.noteNoGdprChoiceComing)();
+         const AH = function(HH) {
+           const BH = "useractioncomplete" === HH.eventStatus || "tcloaded" === HH.eventStatus && !!HH.tcString;
+           return HH.gdprApplies && BH ? tH.e.every((BH => !0 === HH.purpose.consents[BH])) : null
+         }(HH);
+         if (null === AH) return;
+ ... (11 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L16` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/166.js#L36) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/166.js#L16)

```diff
-         super(), this.name = "aditude"
+         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = CH
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L19-L21` → after: `L39-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L39-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/166.js#L39-L63) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/166.js#L19-L21)

```diff
-         return window.tude = window.tude || {
-           cmd: []
-         }, await (0, yU.c)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new AU
+         return (0, SH.canonicaliseZonesWhenIdle)(CH), (0, hH.setUpGtag)({
+             tcfCmp: !0
+           }), await (0, rH.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
+           function() {
+             if (window.__tcfapi) return void zH(window.__tcfapi);
+             let HH = 0;
+             const BH = window.setInterval((() => {
+               HH++;
+               const LH = window.__tcfapi;
+               LH ? (window.clearInterval(BH), zH(LH)) : HH >= 150 && window.clearInterval(BH)
+             }), 200)
+           }(), new EH
+       }
+       playRewarded(HH, BH) {
+         if ("undefined" !== typeof window.aiptag.adplayer) {
+           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
+ ... (9 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L24` → after: `L66-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L66-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/166.js#L66-L70) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/166.js#L24)

```diff
-         this.playVideoOrRewarded("video", UU, UU)
+         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (BH ? ` (alias: ${BH})` : "")), window.aiptag.cmd.player.push((function() {
+           window.aiptag.adplayer.startPreRoll({
+             alias: BH
+           })
+         })), window.adStartSoPause(HH)) : (HH(), console.error("AIP ad lib not loaded, no ad playing"))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L26-L27` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/166.js#L72-L73) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/166.js#L26-L27)

```diff
-       playRewarded(UU, XU) {
-         this.playVideoOrRewarded("rewarded", UU, XU)
+       willRequestBanner() {
+         return "undefined" !== typeof window.aiptag.adplayer
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L30-L35` → after: `L76-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L76-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/166.js#L76-L95) · [Before (L30-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/166.js#L30-L35)

```diff
-         const XU = this.getBaseDivId(UU.adId, UU.width, UU.height);
-         window.tude.cmd.push((function() {
-           window.tude.refreshAdsViaDivMappings([{
-             divId: UU.divId,
-             baseDivId: XU
-           }])
+         if (!this.willRequestBanner()) return void console.log("AD: User has adblock, not requesting new banners");
+         const {
+           divId: BH,
+           alias: LH
+         } = HH;
+         window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.display({
+             adUnitName: BH,
+             alias: LH
+           })
+         })), console.log("AD: Requested aip banner", document.getElementById(HH.divId), LH ? `(alias: ${LH})` : "")
+       }
+       clearBanner(HH) {
+         "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.destroy(HH.divId)
+         })), console.log(`AD: Clearing aip banner ad ${HH.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
+ ... (4 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L38-L77` → after: `L98-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L98-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/166.js#L98-L102) · [Before (L38-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/166.js#L38-L77)

```diff
-       getBaseDivId(UU, XU, zU) {
-         return `pb-slot-bloxdio-${XU}-${zU}${UU>1?`-${UU}`:""}`
-       }
-       playVideoOrRewarded(UU, XU, zU) {
-         var cU;
-         let yU = !1;
-         const AU = () => {
-             document.getElementById("GenericVideoWrapper").style.display = "none", yU = !0
-           },
-           FU = (UU, XU) => {
-             console.error(`AD: Error while playing Aditude video ad: ${UU}:`, XU), AU(), zU()
-           };
-         if (console.log(`AD: Requesting Aditude ${UU} ad`), void 0 === (null === (cU = window.tude) || void 0 === cU ? void 0 : cU.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${UU} ad playing`), void FU("Aditude ad lib not loaded", null);
-         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
-           console.log("AD: Inside Aditude window.tude.cmd.push");
-           try {
- ... (24 more removed lines; see GitHub link above)
+       newPageSession() {
+         console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
+           window.__VM.push((function(HH, BH) {
+             BH.Instances.pageManager.newPageSession(!1)
+           }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/167.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/167.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73)

#### 1. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L5-L2614` → after: `L4-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L4-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/167.js#L4-L51) · [Before (L5-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/167.js#L5-L2614)

```diff
-   7385: (UU, XU, zU) => {
-     var cU = zU(7388);
-     XU.e = {
-       prefix: cU.prefix,
-       iconName: cU.iconName,
-       icon: [cU.width, cU.height, cU.aliases, cU.unicode, cU.svgPathData]
-     }, XU.g = XU.e, cU.prefix, cU.iconName, cU.width, cU.height, cU.aliases, cU.unicode, cU.svgPathData, cU.aliases
-   },
-   7392: (UU, XU, zU) => {
-     var cU = zU(7394);
-     XU.e = {
-       prefix: cU.prefix,
-       iconName: cU.iconName,
-       icon: [cU.width, cU.height, cU.aliases, cU.unicode, cU.svgPathData]
-     }, XU.h = XU.e, cU.prefix, cU.iconName, cU.width, cU.height, cU.aliases, cU.unicode, cU.svgPathData, cU.aliases
-   },
- ... (2594 more removed lines; see GitHub link above)
+   7287: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       AdsenseForGamesSdkAdaptor: () => SH
+     });
+     var AH = LH(1289),
+       rH = LH(1110);
+     class SH extends AH.b {
+       constructor() {
+         super(), this.name = "adsense"
+       }
+       static async setup() {
+         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(HH) {
+           window.adsbygoogle.push(HH)
+         }, window.adConfig({
+           preloadAdBreaks: "on",
+           sound: "on",
+ ... (32 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/168.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/168.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L4-L17` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/168.js#L4-L6) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/168.js#L4-L17)

```diff
-   8724: (UU, XU) => {
-     var zU = "youtube",
-       cU = [61802],
-       yU = "f167",
-       QU = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
-     XU.c = {
-       prefix: "fab",
-       iconName: zU,
-       icon: [576, 512, cU, yU, QU]
-     }, XU.e = XU.c
-   },
-   7517: (UU, XU) => {
-     Object.defineProperty(XU, "__esModule", {
-       value: !0
+   7296: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       AditudeSdkAdaptor: () => hH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L19-L167` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/168.js#L8-L9) · [Before (L19-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/168.js#L19-L167)

```diff
-     var zU = "bolt",
-       cU = [9889, "zap"],
-       yU = "f0e7",
-       QU = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
-     XU.definition = {
-       prefix: "fas",
-       iconName: zU,
-       icon: [448, 512, cU, yU, QU]
-     }, XU.faBolt = XU.definition, XU.prefix = "fas", XU.iconName = zU, XU.width = 448, XU.height = 512, XU.ligatures = cU, XU.unicode = yU, XU.svgPathData = QU, XU.aliases = cU
-   },
-   8247: (UU, XU) => {
-     var zU = "person-military-pointing",
-       cU = [],
-       yU = "e54a",
-       QU = "M214.9 14.1C202 15.2 192 26 192 39 192 52.8 203.2 64 217 64l151 0c8.8 0 16-7.2 16-16l0-30.6C384 8 376 .7 366.7 1.4L214.9 14.1zM208 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16L209.6 96c-1 5.2-1.6 10.5-1.6 16zM40 224c-22.1 0-40 17.9-40 40s17.9 40 40 40l1 … [truncated]
-     XU.b = {
- ... (133 more removed lines; see GitHub link above)
+     var AH = LH(1289),
+       rH = LH(1110);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L169-L174` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/168.js#L11-L12) · [Before (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/168.js#L169-L174)

```diff
-       youtube: pU.e,
-       "person-military-pointing": aU.c,
-       sparkle: tU.i,
-       user: gU.e,
-       wrench: kU.d,
-       zap: GU.d
+       video: "pb-slot-interstitial-video",
+       rewarded: "pb-slot-rewarded-video"
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L176-L182` → after: `L14-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L14-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/168.js#L14-L16) · [Before (L176-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/168.js#L176-L182)

```diff
- 
-     function ZU(UU) {
-       const [XU, zU, , , cU] = UU.icon;
-       return {
-         width: XU,
-         height: zU,
-         path: "string" === typeof cU ? cU : cU.join(" ")
+     class hH extends AH.b {
+       constructor() {
+         super(), this.name = "aditude"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L184-L210` → after: `L18-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/168.js#L18-L21) · [Before (L184-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/168.js#L184-L210)

```diff
-     }
-     const RU = new Map(Object.entries(BU).map((UU => {
-       let [XU, zU] = UU;
-       return [XU, ZU(zU)]
-     })));
-     let PU = !1;
-     const WU = new Set;
-     var dU = zU(41947);
-     const LU = "Jetbrains Mono",
-       eU = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
-       CU = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02 … [truncated]
- 
-     function wU(UU) {
-       return UU.split(",").map((UU => {
-         const [XU, zU = XU] = UU.slice(2).split("-");
-         return [parseInt(XU, 16), parseInt(zU, 16)]
- ... (11 more removed lines; see GitHub link above)
+       static async setup() {
+         return window.tude = window.tude || {
+           cmd: []
+         }, await (0, rH.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L212-L240` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/168.js#L23-L24) · [Before (L212-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/168.js#L212-L240)

```diff
-     }
-     const rU = 397,
-       uU = 1,
-       fU = {
-         translate: UU => [UU],
-         keyBindingText: UU => UU,
-         isFriend: () => !1,
-         hiddenNames: {},
-         loadsFontRest: !1
-       };
-     let iU = null,
-       HU = 0,
-       MU = "none";
- 
-     function vU() {
-       return HU
- ... (13 more removed lines; see GitHub link above)
+       playVideoAd(HH, BH) {
+         this.playVideoOrRewarded("video", HH, HH)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L242-L257` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/168.js#L26-L27) · [Before (L242-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/168.js#L242-L257)

```diff
-       load() {
-         if (null === this.latin) {
-           this.latin = new FontFace(LU, `url(${(0,dU.e)()}) format("woff2")`, {
-             unicodeRange: eU
-           }).load().then((UU => {
-             document.fonts.add(UU), this.loaded()
-           }), SU("Latin"));
-           const UU = new FontFace(LU, `url(${(0,dU.f)()}) format("woff2")`, {
-             unicodeRange: CU,
-             display: "swap"
-           });
-           document.fonts.add(UU), UU.loaded.then((() => {
-             this.loaded()
-           }), SU("rest")), this.rest = UU, this.restWanted && UU.load()
-         }
-         return this.latin
+       playRewarded(HH, BH) {
+         this.playVideoOrRewarded("rewarded", HH, BH)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L259` → after: `L29-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L29-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/168.js#L29-L41) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/168.js#L259)

```diff
-       loadRest() {
+       renderBanner(HH) {
+         const BH = this.getBaseDivId(HH.adId, HH.width, HH.height);
+         window.tude.cmd.push((function() {
+           window.tude.refreshAdsViaDivMappings([{
+             divId: HH.divId,
+             baseDivId: BH
+           }])
+         }))
+       }
+       getBaseDivId(HH, BH, LH) {
+         return `pb-slot-bloxdio-${BH}-${LH}${HH>1?`-${HH}`:""}`
+       }
+       playVideoOrRewarded(HH, BH, LH) {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L261-L482` → after: `L43-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L43-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/168.js#L43-L76) · [Before (L261-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/168.js#L261-L482)

```diff
-         this.restWanted || (this.restWanted = !0, null === (UU = this.rest) || void 0 === UU || UU.load())
-       }
-       loadFor(UU) {
-         !this.restWanted && OU.test(UU) && this.loadRest()
-       }
-     }(VU);
- 
-     function nU(UU) {
-       Object.assign(fU, UU), fU.loadsFontRest && sU.loadRest(), VU(!1)
-     }
- 
-     function mU(UU) {
-       UU !== iU && (iU = UU, VU())
-     }
- 
-     function lU(UU) {
- ... (206 more removed lines; see GitHub link above)
+         let rH = !1;
+         const hH = () => {
+             document.getElementById("GenericVideoWrapper").style.display = "none", rH = !0
+           },
+           tH = (HH, BH) => {
+             console.error(`AD: Error while playing Aditude video ad: ${HH}:`, BH), hH(), LH()
+           };
+         if (console.log(`AD: Requesting Aditude ${HH} ad`), void 0 === (null === (AH = window.tude) || void 0 === AH ? void 0 : AH.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${HH} ad playing`), void tH("Aditude ad lib not loaded", null);
+         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
+           console.log("AD: Inside Aditude window.tude.cmd.push");
+           try {
+             window.tude.requestInstreamPlayer({
+               code: SH[HH],
+               divId: "GenericVideoInner",
+               mode: "adOnly"
+             }).then((LH => {
+ ... (18 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L484-L1105` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/168.js#L78) · [Before (L484-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/168.js#L484-L1105)

```diff
-         }
-         yU.push({
-           kind: "text",
-           text: aU(UU, zU),
-           size: tU,
-           colour: gU
-         })
-       }
-       return yU
-     }
- 
-     function gU(UU) {
-       return void 0 !== UU && "rank" !== UU.kind
-     }
- 
-     function kU(UU, XU) {
- ... (606 more removed lines; see GitHub link above)
+         }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/169.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/169.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L4-L6` → after: `L5-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L5-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/169.js#L5-L56) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/169.js#L4-L6)

```diff
-   9447: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => FU
+   7315: (HH, BH, LH) => {
+     var AH = LH(7323);
+     BH.d = {
+       prefix: AH.prefix,
+       iconName: AH.iconName,
+       icon: [AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData]
+     }, BH.f = BH.d, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
+   },
+   7331: (HH, BH) => {
+     var LH = "alarm-clock",
+       AH = [9200],
+       rH = "f34e",
+       SH = "M504.4 132.5c-4.5 10.5-18.4 9.8-24.9 .4-27.8-40-66.1-72.2-111-92.6-10.4-4.7-13.7-18.3-4.1-24.6 15-9.9 33-15.7 52.3-15.7 52.6 0 95.2 42.6 95.2 95.2 0 13.2-2.7 25.8-7.6 37.3zm-471.9 .4c-6.5 9.4-20.5 10.1-24.9-.4-4.9-11.5-7.6-24.1-7.6-37.3 0-52.6 42.6-95.2 95.2-95.2 19.3 … [truncated]
+     BH.d = {
+       prefix: "fas",
+       iconName: LH,
+ ... (36 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L8-L38` → after: `L58-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L58-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/169.js#L58-L136) · [Before (L8-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/169.js#L8-L38)

```diff
-     var cU = zU(27),
-       yU = zU(1193),
-       QU = zU(5540),
-       AU = zU(1305);
- 
-     function FU(UU) {
-       let {
-         note: XU
-       } = UU;
-       const {
-         t: zU
-       } = (0, yU.I)(), {
-         clientEscMenuOptions: FU
-       } = (0, cU.q)(["clientEscMenuOptions"]);
-       return (0, AU.jsx)(QU.e, {
-         label: zU("touchSettings:actionButtons"),
- ... (15 more removed lines; see GitHub link above)
+     var LH = "angles-up",
+       AH = ["angle-double-up"],
+       rH = "f102",
+       SH = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0 … [truncated]
+     BH.definition = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [384, 512, AH, rH, SH]
+     }, BH.faAnglesUp = BH.definition, BH.prefix = "fas", BH.iconName = LH, BH.width = 384, BH.height = 512, BH.ligatures = AH, BH.unicode = rH, BH.svgPathData = SH, BH.aliases = AH
+   },
+   7362: (HH, BH) => {
+     var LH = "archway",
+       AH = [],
+       rH = "f557",
+       SH = "M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0 0-128c0-53 43-96 96-96s96 43 96 96l0 128 128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-272-448 0 0 272z";
+     BH.b = {
+ ... (63 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L40-L274` → after: `L138-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L138-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/169.js#L138-L166) · [Before (L40-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/169.js#L40-L274)

```diff
-     var cU = zU(1193),
-       yU = zU(61),
-       QU = zU(2058),
-       AU = zU(2067),
-       FU = zU(1106),
-       oU = zU.n(FU),
-       DU = zU(1494),
-       EU = zU(27),
-       YU = zU(97),
-       NU = zU(114),
-       IU = zU(5540),
-       pU = zU(2616),
-       aU = zU(287),
-       tU = zU(2071),
-       gU = zU(2077),
-       kU = zU(9443),
- ... (219 more removed lines; see GitHub link above)
+     var LH = "arrow-up-right-from-square",
+       AH = ["external-link"],
+       rH = "f08e",
+       SH = "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35. … [truncated]
+     BH.definition = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [512, 512, AH, rH, SH]
+     }, BH.faArrowUpRightFromSquare = BH.definition, BH.prefix = "fas", BH.iconName = LH, BH.width = 512, BH.height = 512, BH.ligatures = AH, BH.unicode = rH, BH.svgPathData = SH, BH.aliases = AH
+   },
+   7406: (HH, BH, LH) => {
+     var AH = LH(7415);
+     BH.c = {
+       prefix: AH.prefix,
+       iconName: AH.iconName,
+       icon: [AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData]
+ ... (13 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L276-L3009` → after: `L168-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L168-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/169.js#L168-L180) · [Before (L276-L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/169.js#L276-L3009)

```diff
- 
-     function UX(UU) {
-       let {
-         id: XU,
-         slot: zU,
-         icon: cU,
-         label: QU,
-         hidden: AU,
-         className: FU,
-         face: DU
-       } = UU;
-       const EU = (0, yU.useRef)(null);
-       return (0, yU.useLayoutEffect)((() => {
-         DU && EU.current && (0, TU.n)(EU.current, DU)
-       }), [DU]), (0, ZU.jsxs)("div", {
-         className: oU()("TouchKeyHit", `TouchSlot${zU}`, FU, {
- ... (2718 more removed lines; see GitHub link above)
+     var LH = "arrows-left-right",
+       AH = ["arrows-h"],
+       rH = "f07e",
+       SH = "M470.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l41.4 41.4-357.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45. … [truncated]
+     BH.definition = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [576, 512, AH, rH, SH]
+     }, BH.faArrowsLeftRight = BH.definition, BH.prefix = "fas", BH.iconName = LH, BH.width = 576, BH.height = 512, BH.ligatures = AH, BH.unicode = rH, BH.svgPathData = SH, BH.aliases = AH
+   },
+   7429: (HH, BH) => {
+     Object.defineProperty(BH, "__esModule", {
+       value: !0
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L3011-L3054` → after: `L182-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L182-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/169.js#L182-L194) · [Before (L3011-L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/169.js#L3011-L3054)

```diff
-     var cU = zU(61),
-       yU = zU(1390),
-       QU = zU(1305);
-     const AU = (0, cU.forwardRef)((function(UU, XU) {
-       let {
-         icon: zU,
-         title: cU,
-         sub: AU,
-         expanded: FU,
-         onClick: oU
-       } = UU;
-       return (0, QU.jsxs)("button", {
-         ref: XU,
-         type: "button",
-         className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
-         "aria-expanded": FU,
- ... (28 more removed lines; see GitHub link above)
+     var LH = "arrows-rotate",
+       AH = [128472, "refresh", "sync"],
+       rH = "f021",
+       SH = "M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6  … [truncated]
+     BH.definition = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [512, 512, AH, rH, SH]
+     }, BH.faArrowsRotate = BH.definition, BH.prefix = "fas", BH.iconName = LH, BH.width = 512, BH.height = 512, BH.ligatures = AH, BH.unicode = rH, BH.svgPathData = SH, BH.aliases = AH
+   },
+   7415: (HH, BH) => {
+     Object.defineProperty(BH, "__esModule", {
+       value: !0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L3056-L3127` → after: `L196-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L196-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/169.js#L196-L204) · [Before (L3056-L3127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/169.js#L3056-L3127)

```diff
-     var cU = zU(1715),
-       yU = zU(1808);
-     const QU = UU => UU >= 56320 && UU <= 57343,
-       AU = UU => UU >= 55296 && UU <= 56319,
-       FU = (UU, XU) => XU >= 2 && QU(UU.charCodeAt(XU - 1)) && AU(UU.charCodeAt(XU - 2)) ? XU - 2 : Math.max(0, XU - 1),
-       oU = (UU, XU) => {
-         let zU;
-         var cU, yU;
-         return zU = UU.start !== UU.end ? XU < 0 ? UU.start : UU.end : XU < 0 ? FU(UU.value, UU.start) : (cU = UU.value, (yU = UU.start) + 1 < cU.length && AU(cU.charCodeAt(yU)) && QU(cU.charCodeAt(yU + 1)) ? yU + 2 : Math.min(cU.length, yU + 1)), {
-           value: UU.value,
-           start: zU,
-           end: zU
-         }
-       },
-       DU = ["text", "search", "url", "email", "tel", "password", "number"],
-       EU = UU => !(!(0, yU.e)(UU) || UU.isContentEditable || UU.hasAttribute("data-pad-no-osk")) && (UU instanceof HTMLTextAreaElement || UU instanceof HTMLInputElement && DU.includes(UU.type)),
- ... (56 more removed lines; see GitHub link above)
+     var LH = "arrows-up-down-left-right",
+       AH = ["arrows"],
+       rH = "f047",
+       SH = "M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4 0 114.7-114.7 0 9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 114.7  … [truncated]
+     BH.definition = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [512, 512, AH, rH, SH]
+     }, BH.faArrowsUpDownLeftRight = BH.definition, BH.prefix = "fas", BH.iconName = LH, BH.width = 512, BH.height = 512, BH.ligatures = AH, BH.unicode = rH, BH.svgPathData = SH, BH.aliases = AH
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L3129-L3131` → after: `L206-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L206-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/169.js#L206-L240) · [Before (L3129-L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/169.js#L3129-L3131)

```diff
-   9417: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => FU
+   7435: (HH, BH) => {
+     var LH = "award",
+       AH = [],
+       rH = "f559",
+       SH = "M245.9-25.9c-13.4-8.2-30.3-8.2-43.7 0-24.4 14.9-39.5 18.9-68.1 18.3-15.7-.4-30.3 8.1-37.9 21.9-13.7 25.1-24.8 36.2-49.9 49.9-13.8 7.5-22.2 22.2-21.9 37.9 .7 28.6-3.4 43.7-18.3 68.1-8.2 13.4-8.2 30.3 0 43.7 14.9 24.4 18.9 39.5 18.3 68.1-.4 15.7 8.1 30.3 21.9 37.9 22.1  … [truncated]
+     BH.b = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [448, 512, AH, rH, SH]
+     }, BH.f = BH.b
+   },
+   7440: (HH, BH) => {
+     var LH = "backpack",
+       AH = [127890],
+       rH = "f5d4",
+       SH = "M184 48l80 0c4.4 0 8 3.6 8 8l0 40-96 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40C57.3 96 0 153.3 0 224L0 448c0 35.3 28.7 64 64 64l16 0 0-136c0-39.8 32.2-72 72-72l144 0c39.8 0 72 32.2 72 72l0 136 16 0c35.3 0 64-28.7 64-64l0-224c0-70.7-57.3-128-128-128l0-40c0-30.9-25.1-56-56-56L … [truncated]
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L3133-L3154` → after: `L242-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L242-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/169.js#L242-L297) · [Before (L3133-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/169.js#L3133-L3154)

```diff
-     var cU = zU(27),
-       yU = zU(2205),
-       QU = zU(1410),
-       AU = zU(1444);
-     const FU = async () => {
-       if ((0, AU.n)()) {
-         if (!0 !== await QU.NotificationProvider.showPromptPopup({
-             title: "controller:menusLeaveGameTitle",
-             confirmText: "controller:menusLeaveGameLeave",
-             cancelText: "controller:menusLeaveGameStay",
-             destructive: !0
-           }).getResult() || "inGame" !== cU.e.get("gameState")) return
-       }(0, yU.f)()
-     }
-   },
-   9422: (UU, XU, zU) => {
- ... (6 more removed lines; see GitHub link above)
+     var LH = "bars",
+       AH = ["navicon"],
+       rH = "f0c9",
+       SH = "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-3 … [truncated]
+     BH.definition = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [448, 512, AH, rH, SH]
+     }, BH.faBars = BH.definition, BH.prefix = "fas", BH.iconName = LH, BH.width = 448, BH.height = 512, BH.ligatures = AH, BH.unicode = rH, BH.svgPathData = SH, BH.aliases = AH
+   },
+   7463: (HH, BH) => {
+     var LH = [],
+       AH = "e0b2",
+       rH = "M334 448c-25.8 28-52 49.8-63.7 59.1-4.1 3.2-9.1 4.9-14.3 4.9s-10.2-1.6-14.3-4.9C230 497.8 203.8 476 178 448l156 0zM256 319.9c26.9 35.8 63.5 63.7 105.9 80.1l-211.8 0c42.4-16.3 79.1-44.3 105.9-80.1zM311 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L326.9 59c5.8 11.1 9.1 23. … [truncated]
+     BH.d = {
+       prefix: "fas",
+ ... (40 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L3156-L3166` → after: `L299-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L299-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/169.js#L299-L1467) · [Before (L3156-L3166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/169.js#L3156-L3166)

```diff
-     var cU = zU(2041);
-     const yU = "controllerPadShopOpen",
-       QU = UU => cU.h.includes(UU),
-       AU = UU => Object.values(UU).some((UU => !1 !== UU.canBuy && !UU.isRewardedAd)),
-       FU = (UU, XU, zU) => {
-         var cU, yU, AU, FU;
-         const oU = UU.filter((UU => !QU(UU))),
-           DU = null !== XU && UU.includes(XU) ? XU : null;
-         return null !== DU && !QU(DU) && zU(DU) ? DU : null !== (cU = null !== (yU = null !== (AU = null !== (FU = oU.find(zU)) && void 0 !== FU ? FU : oU[0]) && void 0 !== AU ? AU : DU) && void 0 !== yU ? yU : UU[0]) && void 0 !== cU ? cU : null
-       },
-       oU = UU => UU.userInput || UU.isRewardedAd || "boolean" === typeof UU.isSelected ? null : JSON.stringify([UU.image, UU.cost, UU.currency, UU.amount, UU.customTitle, UU.buyButtonText, UU.description, UU.canBuy])
+     var LH = "bolt",
+       AH = [9889, "zap"],
+       rH = "f0e7",
+       SH = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
+     BH.definition = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [448, 512, AH, rH, SH]
+     }, BH.faBolt = BH.definition, BH.prefix = "fas", BH.iconName = LH, BH.width = 448, BH.height = 512, BH.ligatures = AH, BH.unicode = rH, BH.svgPathData = SH, BH.aliases = AH
+   },
+   7487: (HH, BH) => {
+     var LH = "boot",
+       AH = [129406],
+       rH = "f782",
+       SH = "M0 32C0 14.3 14.3 0 32 0L288 0c17.7 0 32 14.3 32 32l0 48c0 17.7-14.3 32-32 32l-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 0 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0c70.7 0 128 57.3 128 128L0 384 0 32zM0 432l448 0 0 28.7c0 12.4-4.5 24.4-12.7 33.8-9.7 11.1-2 … [truncated]
+     BH.e = {
+ ... (1153 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L3168` → after: `L1469-L2801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L1469-L2801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/169.js#L1469-L2801) · [Before (L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/169.js#L3168)

```diff
-   9443: (UU, XU, zU) => {
+   8050: (HH, BH) => {
+     var LH = "layer-group",
+       AH = [],
+       rH = "f5fd",
+       SH = "M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3. … [truncated]
+     BH.d = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [512, 512, AH, rH, SH]
+     }, BH.g = BH.d
+   },
+   8054: (HH, BH) => {
+     var LH = "left-from-bracket",
+       AH = [],
+       rH = "e66c",
+       SH = "M352 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0zM7 239c-9.4 9.4-9.4 24.6 0 33.9L151 417c6.9 6.9 17.2 8.9 26.2 5.2S192 409.7 1 … [truncated]
+ ... (1317 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L3173-L3335` → after: `L2806-L2809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R2806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L2806-L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/169.js#L2806-L2809) · [Before (L3173-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/169.js#L3173-L3335)

```diff
-     var cU = zU(61),
-       yU = zU(1492),
-       QU = zU(2082),
-       AU = zU(1457),
-       FU = zU(1478),
-       oU = zU(1305);
-     const DU = () => {
-         const UU = (0, AU.o)();
-         if ((0, cU.useEffect)((() => {
-             (0, AU.i)()
-           }), []), !UU) return null;
-         const {
-           ControllerCategory: XU
-         } = UU;
-         return (0, oU.jsx)(FU.c, {
-           children: (0, oU.jsx)(XU, {})
- ... (147 more removed lines; see GitHub link above)
+     var AH = {
+         prefix: "fas",
+         iconName: "shirt",
+         icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-4 … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L3337-L3340` → after: `L2811-L2812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R2811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L2811-L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/169.js#L2811-L2812) · [Before (L3337-L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/169.js#L3337-L3340)

```diff
-       LU = UU => {
-         var XU, zU, cU, yU;
-         return null !== (XU = null !== (zU = null !== (cU = UU.getAttribute("data-pad-key")) && void 0 !== cU ? cU : UU.getAttribute("href")) && void 0 !== zU ? zU : null === (yU = UU.querySelector("a[href]")) || void 0 === yU ? void 0 : yU.getAttribute("href")) && void 0 !== XU  … [truncated]
-       }
+       rH = AH,
+       SH = AH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/170.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/170.js` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L4` → after: `L4-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L4-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L4-L81) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L4)

```diff
-   37318: (UU, XU, zU) => {
+   8840: (HH, BH) => {
+     var LH = "youtube",
+       AH = [61802],
+       rH = "f167",
+       SH = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
+     BH.c = {
+       prefix: "fab",
+       iconName: LH,
+       icon: [576, 512, AH, rH, SH]
+     }, BH.e = BH.c
+   },
+   7481: (HH, BH) => {
+     Object.defineProperty(BH, "__esModule", {
+       value: !0
+     });
+     var LH = "bolt",
+ ... (62 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L6-L9` → after: `L83-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L83-L84) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L6-L9)

```diff
-       b: () => tU,
-       e: () => gU,
-       f: () => NU,
-       h: () => YU
+       d: () => tH,
+       f: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L11-L18` → after: `L86-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L86-L88) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L11-L18)

```diff
-     var cU = zU(34859),
-       yU = zU(37325),
-       QU = zU(37334),
-       AU = zU(9282),
-       FU = zU(1492),
-       oU = zU(61),
-       DU = zU(73),
-       EU = zU(1305);
+     var AH = LH(3648);
+     let rH = null,
+       SH = null;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L21-L24` → after: `L91-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L91-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L91-L108) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L21-L24)

```diff
-       var UU;
-       return (0, FU.j)(yU.d, (0, yU.o)()), (0, EU.jsx)(EU.Fragment, {
-         children: null === (UU = (0, yU.o)()) || void 0 === UU ? void 0 : UU.content
-       })
+       return SH ??= LH.e(235).then((() => LH(37091))).then((HH => {
+         let {
+           ITEM_SPRITES: BH,
+           ITEM_SPRITES_WITHOUT_FILE: LH,
+           ITEM_FILES_WITHOUT_SPRITE: SH
+         } = HH;
+         rH = function(HH, BH, LH) {
+           const rH = new Set,
+             SH = (0, AH.v)(BH);
+           let hH = 0;
+           for (const [AH, tH] of HH.entries()) AH === SH[hH] ? hH++ : rH.add(tH);
+           if ("" !== LH)
+             for (const tH of LH.split(AH.q)) rH.add(tH);
+           return rH
+         }(BH.split(AH.q), LH, SH)
+       }), (HH => {
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L28-L41` → after: `L112-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L112-L113) · [Before (L28-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L28-L41)

```diff
-       var XU;
-       let {
-         show: zU
-       } = UU;
-       (0, FU.j)(yU.d, (0, yU.o)());
-       const DU = null === (XU = (0, yU.o)()) || void 0 === XU ? void 0 : XU.menu;
-       return (0, oU.useEffect)((() => {
-         var UU;
-         zU || (null === DU || void 0 === DU || null === (UU = DU.onClose) || void 0 === UU || UU.call(DU), (0, QU.t)())
-       }), [zU, DU]), (0, oU.useEffect)((() => zU ? (0, AU.d)(QU.x, QU.i) : void 0), [zU]), (0, EU.jsx)(cU.e, {
-         showing: zU,
-         globallyUniqueKey: "clientGameMenu",
-         children: null === DU || void 0 === DU ? void 0 : DU.content
-       })
+       var BH, LH;
+       return null !== (BH = null === (LH = rH) || void 0 === LH ? void 0 : LH.has(HH)) && void 0 !== BH && BH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L43-L44` → after: `L115-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L115-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L115-L123) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L43-L44)

```diff
-     const IU = new Map,
-       pU = new Set;
+   },
+   37169: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH,
+       g: () => tH
+     });
+     var AH = LH(37174);
+     let rH = null,
+       SH = null;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L46-L48` → after: `L125-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L125-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L125-L137) · [Before (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L46-L48)

```diff
-     function aU(UU, XU) {
-       XU ? IU.set(UU, XU) : IU.delete(UU);
-       for (const zU of pU) zU()
+     function hH() {
+       return rH ??= LH.e(73).then((() => LH(42483))).catch((HH => {
+         throw rH = null, HH
+       })), rH
+     }
+ 
+     function tH() {
+       return SH ??= Promise.all([hH(), (0, AH.f)()]).then((HH => {
+         let [BH] = HH;
+         return BH
+       }), (HH => {
+         throw SH = null, HH
+       })), SH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L52-L67` → after: `L176-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L176-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L176-L181) · [Before (L52-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L52-L67)

```diff
-       let {
-         placement: XU = "bottom"
-       } = UU;
-       const zU = (0, oU.useRef)(null);
-       return (0, oU.useLayoutEffect)((() => {
-         const UU = zU.current;
-         return aU(XU, UU), () => {
-           IU.get(XU) === UU && aU(XU, null)
-         }
-       }), [XU]), (0, EU.jsx)("div", {
-         ref: zU,
-         id: `clientGameHud-${XU}`,
-         style: {
-           display: "contents"
-         }
-       })
+       return "object" !== typeof HH || null === HH || Array.isArray(HH) ? void 0 : HH
+     }
+     const WH = new Set(AH.b);
+ 
+     function MH(HH, BH) {
+       return "string" === typeof HH ? (0, tH.v)(HH, BH) : BH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L71-L87` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L185) · [Before (L71-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L71-L87)

```diff
-       let {
-         children: XU,
-         placement: zU = "bottom"
-       } = UU;
-       const [cU, yU] = (0, oU.useState)((() => {
-         var UU;
-         return null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null
-       }));
-       return (0, oU.useEffect)((() => {
-         const UU = () => {
-           var UU;
-           yU(null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null)
-         };
-         return pU.add(UU), UU(), () => {
-           pU.delete(UU)
-         }
- ... (1 more removed lines; see GitHub link above)
+       return MH(HH.width, CH)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L89-L111` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L187-L188) · [Before (L89-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L89-L111)

```diff
-   },
-   9282: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => QU,
-       d: () => yU
-     });
-     let cU = null;
-     const yU = function(UU) {
-         const XU = {
-           cycle: UU,
-           canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
-         };
-         return cU = XU, () => {
-           cU === XU && (cU = null)
-         }
-       },
- ... (7 more removed lines; see GitHub link above)
+ 
+     function vH(HH, BH) {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L113-L128` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L190-L191) · [Before (L113-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L113-L128)

```diff
-       const {
-         width: yU,
-         height: QU
-       } = zU, AU = null !== (cU = UU.text) && void 0 !== cU ? cU : UU, FU = (AU.x / 100 - .5) * yU, oU = (AU.y / 100 - .5) * QU, DU = yU / 2 - XU.x;
-       if (null !== UU.text && Math.abs(FU) <= DU && oU >= XU.top - QU / 2 && oU <= QU / 2 - XU.bottom) return {
-         x: AU.x,
-         y: AU.y
-       };
-       const EU = Math.min(0 === FU ? 1 / 0 : DU / Math.abs(FU), oU > 0 ? (QU / 2 - XU.bottom) / oU : oU < 0 ? (XU.top - QU / 2) / oU : 1 / 0);
-       return !Number.isFinite(EU) || EU < 0 ? {
-         x: 50,
-         y: 50
-       } : {
-         x: 50 + FU * EU / yU * 100,
-         y: 50 + oU * EU / QU * 100
-       }
+       const AH = null !== (LH = HH.applyTo) && void 0 !== LH ? LH : "both";
+       return "both" === AH || AH === BH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L130-L164` → after: `L193-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L193-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L193-L225) · [Before (L130-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L130-L164)

```diff
-     zU.d(XU, {
-       d: () => cU
-     })
-   },
-   39374: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => AU
-     });
-     const cU = 4,
-       yU = 12e3,
-       QU = 1e3;
-     class AU {
-       constructor() {
-         let {
-           limit: UU = cU,
-           windowMs: XU = yU,
- ... (19 more removed lines; see GitHub link above)
+ 
+     function PH(HH) {
+       const BH = xH(HH);
+       return "glow" === HH.style ? BH * EH : Math.ceil(BH / 2) + 1
+     }
+ 
+     function TH(HH, BH, LH) {
+       var AH, hH;
+       let {
+         nameAsGiven: CH = !1
+       } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const TH = null !== (AH = QH(HH.info)) && void 0 !== AH ? AH : {},
+         UH = "string" === typeof HH.name ? HH.name : "",
+         VH = TH.subtitle;
+       if (Array.isArray(TH.content) && 0 === TH.content.length && !(Array.isArray(VH) && VH.length > 0)) return null;
+       const OH = "number" === typeof HH.hideNameSeed ? HH.hideNameSeed : null,
+ ... (17 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L166-L169` → after: `L227-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L227-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L227-L259) · [Before (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L166-L169)

```diff
-       addPriority(UU) {
-         return this.priority.add(UU), () => {
-           this.priority.delete(UU)
-         }
+       IH.push(...oH);
+       ("boolean" === typeof HH.player ? HH.player : Array.isArray(HH.ranks)) && "" !== UH && LH.isFriend(UH) && IH.push({
+         kind: "rank",
+         rank: uH
+       }), "number" === typeof HH.Ot && IH.push({
+         kind: "text",
+         text: ` ${HH.Ot}m`,
+         size: tH.e.DEFAULT_FONT_SIZE,
+         colour: "#cef3ff"
+       });
+       const fH = VH ? (0, tH.i)(VH, tH.e.DEFAULT_SUBTITLE_FONT_SIZE, LH) : null,
+         lH = "string" === typeof TH.backgroundColor ? TH.backgroundColor : "#22283b",
+         KH = "string" === typeof TH.subtitleBackgroundColor ? TH.subtitleBackgroundColor : "#1a1e2d",
+         cH = QH(TH.healthbar),
+         eH = QH(TH.border),
+         qH = Array.isArray(HH.effects) ? HH.effects.filter((HH => "string" === typeof HH && WH.has(HH))) : [],
+ ... (17 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L171-L173` → after: `L261-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L261-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L261-L335) · [Before (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L171-L173)

```diff
-       subscribe(UU) {
-         return this.listeners.add(UU), () => {
-           this.listeners.delete(UU)
+       const sH = NH.height + RH.height + ZH + dH,
+         JH = NH.width + tH.e.HORIZONTAL_PADDING,
+         iH = RH.width + tH.e.HORIZONTAL_PADDING,
+         pH = Math.max(JH, iH),
+         yH = (aH - pH) / 2,
+         HB = Math.max(jH.height, nH);
+       return {
+         width: aH,
+         height: sH,
+         draw: HH => {
+           const BH = [];
+           if (HH.fillStyle = lH, HH.fillRect(yH, HB, pH, NH.height), (0, tH.t)(IH, (aH - JH) / 2 + tH.e.HORIZONTAL_PADDING / 2, HB, NH.height, HH, LH, BH), fH) {
+             const AH = HB + NH.height;
+             HH.fillStyle = KH, HH.fillRect(yH, AH, pH, RH.height), (0, tH.t)(fH, (aH - iH) / 2 + tH.e.HORIZONTAL_PADDING / 2, AH, RH.height, HH, LH, BH)
+           }
+           let AH = null;
+ ... (59 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L205` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L340) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L205)

```diff
-   37334: (UU, XU, zU) => {
+   37127: (HH, BH, LH) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L209-L211` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L345-L346) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L209-L211)

```diff
-       l: () => tU,
-       o: () => FU,
-       r: () => NU,
+       m: () => TH,
+       p: () => PH,
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L214-L216` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L349) · [Before (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L214-L216)

```diff
-       w: () => GU,
-       x: () => pU,
-       y: () => kU
+       w: () => XH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L218-L221` → after: `L351-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L351-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L351-L362) · [Before (L218-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L218-L221)

```diff
-     var cU = zU(27),
-       yU = zU(31);
-     const QU = "clientGameInventoryButtonsChanged",
-       AU = new Map;
+     var AH = LH(602),
+       rH = LH(304);
+     const SH = {
+         DEFAULT_FONT_SIZE: 47,
+         DEFAULT_SUBTITLE_FONT_SIZE: 30,
+         HORIZONTAL_PADDING: 30,
+         VERTICAL_PADDING: 22,
+         TEXT_SHADOW_WIDTH: 2,
+         LINE_SPACING: 8,
+         EFFECT_ICON_SIZE: 70
+       },
+       hH = 41;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L223-L227` → after: `L364-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L364-L365) · [Before (L223-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L223-L227)

```diff
-     function FU() {
-       return [...AU.values()].sort(((UU, XU) => {
-         var zU, cU;
-         return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
-       }))
+     function tH(HH) {
+       return `bolder ${HH}px 'Jetbrains Mono'`
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L232` → after: `L369-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L369-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L369-L374) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L232)

```diff
-       oU = UU
+       return "object" === typeof HH && null !== HH
+     }
+ 
+     function CH(HH, BH) {
+       const LH = "number" === typeof HH ? HH : "string" === typeof HH ? Number(HH.replace("px", "")) : NaN;
+       return Number.isFinite(LH) && LH > 0 ? LH : BH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L237-L243` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L378) · [Before (L237-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L237-L243)

```diff
-       EU = !0;
-       try {
-         UU.onClick()
-       } finally {
-         EU = !1
-       }
-       UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
+       return zH(HH) ? HH : void 0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L246-L247` → after: `L381-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L381-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L381-L383) · [Before (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L246-L247)

```diff
-     function NU() {
-       return EU
+     function XH(HH) {
+       const BH = "number" === typeof HH ? AH.u[HH] : HH;
+       return "string" === typeof BH && Object.hasOwn(AH.j, BH) ? AH.j[BH] : void 0
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L250-L251` → after: `L386-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L386-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L386-L447) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L250-L251)

```diff
-     function IU() {
-       return FU().filter((UU => UU.panel && !UU.disabled))
+     function GH(HH, BH) {
+       return "string" === typeof HH ? HH : zH(HH) ? "string" === typeof HH.translationKey ? BH.translate(HH.translationKey, HH.params).map((HH => "string" === typeof HH ? HH : HH.icon)).join("") : "string" === typeof HH.entityName ? BH.shownPlayerName(HH.entityName) : "" : void 0 … [truncated]
+     }
+ 
+     function YH(HH, BH, LH, AH) {
+       if (!Array.isArray(HH)) return [];
+       const hH = [];
+       for (const uH of HH) {
+         var tH, XH;
+         if (zH(uH) && "chatTag" in uH) {
+           hH.push({
+             kind: "rank",
+             rank: uH
+           });
+           continue
+         }
+ ... (46 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L255-L257` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L451) · [Before (L255-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L255-L257)

```diff
-       const XU = IU(),
-         zU = XU.findIndex((UU => UU.id === oU));
-       return !(zU < 0 || XU.length < 2) && (YU(XU[(zU + UU + XU.length) % XU.length]), !0)
+       return void 0 !== HH && "rank" !== HH.kind
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L260-L261` → after: `L454-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L454-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L454-L457) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L260-L261)

```diff
-     function aU() {
-       return null !== oU && IU().length > 1
+     function QH(HH, BH) {
+       const LH = uH(HH),
+         AH = uH(BH);
+       return void 0 === HH && !AH || !LH && void 0 === BH ? 0 : LH !== AH ? .5 * SH.HORIZONTAL_PADDING : 0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L264-L265` → after: `L460-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L460-L461) · [Before (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L264-L265)

```diff
-     function tU() {
-       DU(null)
+     function WH(HH) {
+       return "rank" === HH.kind ? SH.DEFAULT_FONT_SIZE : HH.size
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L268-L269` → after: `L464-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L464-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L464-L468) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L268-L269)

```diff
-     function gU() {
-       "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
+     function MH(HH, BH, LH) {
+       return "icon" === HH.kind ? HH.size : "rank" === HH.kind ? function(HH, BH) {
+         const LH = BH.rankIcon(HH.rank.icon);
+         return LH ? hH * (LH.width / LH.height) : hH
+       }(HH, LH) + SH.HORIZONTAL_PADDING : (LH.glyphsShown(HH.text), BH.font = tH(HH.size), BH.measureText(HH.text).width)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L272-L274` → after: `L471-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L471-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L471-L492) · [Before (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L272-L274)

```diff
-     function kU() {
-       const UU = oU;
-       return DU(null), UU
+     function xH(HH, BH, LH) {
+       if (0 === HH.length) return {
+         width: 0,
+         height: 0,
+         sizes: []
+       };
+       let AH = 0;
+       for (const SH of HH) AH = Math.max(AH, WH(SH));
+       const rH = [];
+       let hH = QH(void 0, HH[0]);
+       for (let SH = 0; SH < HH.length; SH++) {
+         const AH = hH;
+         hH += MH(HH[SH], BH, LH), hH += QH(HH[SH], HH[SH + 1]), rH.push({
+           x: AH,
+           width: hH - AH
+         })
+ ... (6 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L277-L279` → after: `L495-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L495-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L495-L499) · [Before (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L277-L279)

```diff
-     function GU(UU) {
-       return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
-         AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
+     function vH(HH, BH, LH, AH, rH, SH, hH) {
+       BH += QH(void 0, HH[0]);
+       for (let tH = 0; tH < HH.length; tH++) {
+         const zH = PH(HH[tH], BH, LH, AH, rH, SH, hH);
+         BH += 0 === zH ? 0 : zH + QH(HH[tH], HH[tH + 1])
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L283` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L562) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L283)

```diff
-   37325: (UU, XU, zU) => {
+   37157: (HH, BH, LH) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L285` → after: `L564-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L564-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L564-L566) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L285)

```diff
-       d: () => FU,
+       c: () => aH,
+       e: () => HB,
+       g: () => FH,
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L288-L289` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L569) · [Before (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L288-L289)

```diff
-       l: () => gU,
-       n: () => NU,
+       k: () => dH,
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L291-L293` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L571-L572) · [Before (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L291-L293)

```diff
-       r: () => aU,
-       t: () => IU,
-       u: () => EU
+       p: () => DH,
+       q: () => jH
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L295-L304` → after: `L574-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L574-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L574-L598) · [Before (L295-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L295-L304)

```diff
-     var cU = zU(27),
-       yU = zU(31),
-       QU = zU(1310),
-       AU = zU(37334);
-     const FU = "clientGameUiChanged";
-     let oU = null;
- 
-     function DU() {
-       return oU
-     }
+     var AH = LH(4877),
+       rH = LH(4895),
+       SH = LH(35006),
+       hH = LH(3639),
+       tH = LH(3637),
+       zH = LH(1336),
+       CH = LH(37112),
+       EH = LH(81),
+       XH = LH(1204),
+       GH = LH(37162),
+       YH = LH(37169),
+       uH = LH(8840),
+       QH = LH(8261),
+       WH = LH(8437),
+       MH = LH(8554),
+       xH = LH(8684),
+ ... (9 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L306-L312` → after: `L600-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L600-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L600-L605) · [Before (L306-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L306-L312)

```diff
-     function EU(UU, XU) {
-       const zU = {
-         content: UU,
-         menu: XU
-       };
-       return oU = zU, yU.k.UY(FU, oU, !0), () => {
-         oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
+     function TH(HH) {
+       const [BH, LH, , , AH] = HH.icon;
+       return {
+         width: BH,
+         height: LH,
+         path: "string" === typeof AH ? AH : AH.join(" ")
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L315` → after: `L608-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L608-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L608-L617) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L315)

```diff
-     let YU = null;
+     const UH = new Map(Object.entries(PH).map((HH => {
+       let [BH, LH] = HH;
+       return [BH, TH(LH)]
+     })));
+     let VH = !1;
+     const OH = new Set;
+     var bH = LH(37177);
+     const kH = "Jetbrains Mono",
+       mH = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
+       oH = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02 … [truncated]
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L317-L318` → after: `L619-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L619-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L619-L623) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L317-L318)

```diff
-     function NU() {
-       return YU
+     function IH(HH) {
+       return HH.split(",").map((HH => {
+         const [BH, LH = BH] = HH.slice(2).split("-");
+         return [parseInt(BH, 16), parseInt(LH, 16)]
+       }))
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L322-L323` → after: `L632-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L632-L633) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L322-L323)

```diff
-       return YU = UU, () => {
-         YU === UU && (YU = null)
+       return BH => {
+         console.warn(`[bloxd-wasm-client] the text font's ${HH} file did not load`, BH)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L326-L334` → after: `L636-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L636-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L636-L647) · [Before (L326-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L326-L334)

```diff
-     let pU = !1;
- 
-     function aU() {
-       const UU = cU.e.get("openInGameMenuName");
-       "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
-         openInGameMenuName: "clientGame",
-         openEverythingMenuName: null
-       })
-     }
+     const cH = 397,
+       eH = 1,
+       qH = {
+         translate: HH => [HH],
+         keyBindingText: HH => HH,
+         isFriend: () => !1,
+         hiddenNames: {},
+         loadsFontRest: !1
+       };
+     let gH = null,
+       NH = 0,
+       RH = "none";
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L337` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L650) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L337)

```diff
-       GU(!1)
+       return NH
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L340-L341` → after: `L654-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L654-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L654-L657) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L340-L341)

```diff
-     function gU() {
-       GU(pU)
+     function FH(HH) {
+       return nH.add(HH), () => {
+         nH.delete(HH)
+       }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L345-L346` → after: `L661-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L661-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L661-L702) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L345-L346)

```diff
-       pU && GU(!1)
-     }
+       NH++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? RH = "all" : "none" === RH && (RH = "notBoards");
+       for (const HH of nH) HH()
+     }(0, zH.m)((() => {
+       (function() {
+         const HH = VH;
+         return VH = !1, HH
+       })() && DH(!1)
+     }));
+     const wH = new class {
+       constructor(HH) {
+         this.loaded = HH, this.latin = null, this.rest = null, this.restWanted = !1
+       }
+       load() {
+         if (null === this.latin) {
+           this.latin = new FontFace(kH, `url(${(0,bH.h)()}) format("woff2")`, {
+             unicodeRange: mH
+ ... (26 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L349-L351` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L705) · [Before (L349-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L349-L351)

```diff
-       "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
-         openInGameMenuName: UU ? "inventory" : null
-       }), UU || (0, AU.l)(), pU = !1
+       Object.assign(qH, HH), qH.loadsFontRest && wH.loadRest(), DH(!1)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L363-L488` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L709) · [Before (L363-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L363-L488)

```diff
-       let {
-         icon: XU
-       } = UU;
-       const zU = (0, cU.useCallback)((UU => {
-         null === UU || void 0 === UU || UU.replaceChildren((0, yU.e)(XU))
-       }), [XU]);
-       return (0, QU.jsx)("span", {
-         className: "SkyblockMapIconSlot",
-         ref: zU
-       })
-     }
-   },
-   39339: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => PU,
-       f: () => RU
- ... (110 more removed lines; see GitHub link above)
+       HH !== gH && (gH = HH, DH())
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L492` → after: `L713-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L713-L714) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L492)

```diff
-       return Object.hasOwn(BU, UU) || UU.startsWith("npc_")
+       if ("none" === RH || null === HH) return;
+       HH(cH, "all" === RH ? 0 : eH, new Uint8Array(0)) && (RH = "none")
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L495` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L719) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L495)

```diff
-     function PU(UU) {
+     function iH(HH, BH, LH) {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L497-L699` → after: `L721-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L721-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L721-L743) · [Before (L497-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L497-L699)

```diff
-       const zU = null !== (XU = BU[UU]) && void 0 !== XU ? XU : UU.startsWith("npc_") ? AU : pU;
-       if ("portal" !== UU) return ZU(zU, "SkyblockMapIcon");
-       const cU = document.createElement("span");
-       cU.className = "SkyblockMapIcon Portal";
-       const yU = document.createElement("span");
-       return yU.className = "SkyblockMapIconTint", yU.style.maskImage = yU.style.webkitMaskImage = `url("${YU}")`, cU.append(ZU(zU, "SkyblockMapIconLayer"), yU, ZU(YU, "SkyblockMapIconLayer SkyblockMapIconShade")), cU
-     }
-   },
-   34891: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => yU,
-       f: () => AU
-     });
-     const cU = [{
-       threshold: 10n ** 180n,
-       suffix: "NoQig"
- ... (187 more removed lines; see GitHub link above)
+       const rH = LH ? `${HH}#${LH.join(",")}` : HH,
+         SH = sH.get(rH);
+       if (SH) return SH.image;
+       const hH = {
+         image: null !== (AH = JH.get(rH)) && void 0 !== AH ? AH : null
+       };
+       return sH.set(rH, hH), BH().then((async HH => {
+         if (null === HH) return null;
+         const BH = new Image;
+         BH.crossOrigin = "anonymous", BH.src = HH, await BH.decode();
+         const AH = await createImageBitmap(BH);
+         if (!LH) return AH;
+         try {
+           return function(HH, BH) {
+             let [LH, AH, rH] = BH;
+             const SH = (0, CH.h)(HH.width, HH.height),
+ ... (7 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L701-L734` → after: `L745-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L745-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L745-L755) · [Before (L701-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L701-L734)

```diff
-         XU = BigInt(Math.floor(UU))
-       } else XU = UU;
-       const yU = XU < 0n ? -XU : XU,
-         QU = XU < 0n ? "-" : "",
-         AU = yU.toString();
-       if (AU.length <= zU) return `${QU}${AU}`;
-       const FU = 3 * Math.floor((AU.length - 1) / 3);
-       if (FU < 3) return `${QU}${AU}`;
-       if (FU > 3 * cU.length) {
-         const UU = AU[0],
-           XU = AU.slice(1, 3).replace(/0+$/, "");
-         return `${QU}${XU?`${UU}.${XU}`:UU}e${AU.length-1}`
-       }
-       const {
-         threshold: oU,
-         suffix: DU
- ... (18 more removed lines; see GitHub link above)
+       })).then((HH => {
+         sH.get(rH) === hH && JH.delete(rH), HH !== hH.image && (hH.image = HH, DH(!1))
+       }), (BH => {
+         console.warn(`[bloxd-wasm-client] text icon ${HH} did not load`, BH), sH.get(rH) === hH && (sH.delete(rH), JH.delete(rH), null !== hH.image && DH(!1))
+       })), hH.image
+     }(0, GH.e)((() => {
+       JH.clear();
+       for (const [HH, {
+           image: BH
+         }] of sH) null !== BH && JH.set(HH, BH);
+       sH.clear(), DH(!1)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L738-L750` → after: `L765-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L765-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/170.js#L765-L821) · [Before (L738-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/170.js#L738-L750)

```diff
-       const XU = Math.abs(UU),
-         zU = UU < 0 ? "-" : "";
-       for (const {
-           threshold: cU,
-           suffix: yU
-         }
-         of QU)
-         if (XU >= cU) {
-           const UU = XU / cU;
-           if (UU >= 1e3) return `${zU}${XU.toExponential(2).replace("e+","e")}`;
-           let QU;
-           return QU = UU >= 100 ? Math.floor(UU).toString() : UU >= 10 ? UU.toFixed(1).replace(/\.0$/, "") : UU.toFixed(2).replace(/\.?0+$/, ""), `${zU}${QU}${yU}`
-         } return `${zU}${XU}`
+       return pH.has(HH) ? iH(`icon:${HH}`, (async () => {
+         var BH, LH;
+         return null !== (BH = null === (LH = (0, GH.k)()) || void 0 === LH ? void 0 : LH.textureUrl(HH)) && void 0 !== BH ? BH : (await (0, YH.c)()).ingameIconUrl(HH)
+       })) : null
+     }
+     let LB = "unasked";
+     const AB = {
+       get canSeeRealPlayerNames() {
+         return EH.featureFlags.canSeeRealPlayerNames
+       },
+       get canSeePlayerWrittenText() {
+         return EH.featureFlags.canSeePlayerWrittenText
+       },
+       get localPlayerDbId() {
+         return gH
+       },
+ ... (41 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/171.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/171.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L4)

```diff
-   37334: (UU, XU, zU) => {
+   9568: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L6-L15` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L6) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L6-L15)

```diff
-       e: () => QU,
-       i: () => aU,
-       l: () => tU,
-       o: () => FU,
-       r: () => NU,
-       t: () => gU,
-       v: () => YU,
-       w: () => GU,
-       x: () => pU,
-       y: () => kU
+       e: () => tH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L17-L20` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L8-L11) · [Before (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L17-L20)

```diff
-     var cU = zU(27),
-       yU = zU(31);
-     const QU = "clientGameInventoryButtonsChanged",
-       AU = new Map;
+     var AH = LH(15),
+       rH = LH(1123),
+       SH = LH(5478),
+       hH = LH(1225);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L22-L26` → after: `L13-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L13-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L13-L32) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L22-L26)

```diff
-     function FU() {
-       return [...AU.values()].sort(((UU, XU) => {
-         var zU, cU;
-         return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
-       }))
+     function tH(HH) {
+       let {
+         note: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, rH.B)(), {
+         clientEscMenuOptions: tH
+       } = (0, AH.m)(["clientEscMenuOptions"]);
+       return (0, hH.jsx)(SH.c, {
+         label: LH("touchSettings:actionButtons"),
+         checked: tH.touchActionButtons,
+         onClick: HH => {
+           AH.c.setClientEscMenuOptions({
+             touchActionButtons: HH
+           })
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L28` → after: `L34-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L34-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L34-L71) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L28)

```diff
-     let oU = null;
+   },
+   9552: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => mL,
+       h: () => kL
+     });
+     var AH = LH(1123),
+       rH = LH(45),
+       SH = LH(2064),
+       hH = LH(2073),
+       tH = LH(1038),
+       zH = LH.n(tH),
+       CH = LH(1455),
+       EH = LH(15),
+       XH = LH(81),
+       GH = LH(101),
+ ... (22 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L31` → after: `L74-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L74-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L74-L80) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L31)

```diff
-       oU = UU
+       let {
+         className: BH,
+         keepPlace: LH
+       } = HH;
+       return LH ? (0, TH.jsx)("div", {
+         className: zH()(BH, "Placeholder")
+       }) : null
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L36-L42` → after: `L84-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L84-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L84-L113) · [Before (L36-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L36-L42)

```diff
-       EU = !0;
-       try {
-         UU.onClick()
-       } finally {
-         EU = !1
-       }
-       UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
+       let {
+         id: BH,
+         elements: LH,
+         actionButtons: rH,
+         keyNames: SH,
+         className: hH,
+         keepPlace: tH,
+         onHidden: zH
+       } = HH;
+       const {
+         t: EH
+       } = (0, AH.B)();
+       if (!IH.k[BH].hide) return (0, TH.jsx)(lH, {
+         className: hH,
+         keepPlace: tH
+       });
+ ... (14 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L45-L46` → after: `L116-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L116-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L116-L150) · [Before (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L45-L46)

```diff
-     function NU() {
-       return EU
+     function cH(HH) {
+       let {
+         id: BH,
+         elements: LH,
+         actionButtons: rH,
+         keyNames: SH,
+         className: hH,
+         keepPlace: tH,
+         onlyWhenMoved: zH,
+         locked: EH,
+         onReset: XH
+       } = HH;
+       const {
+         t: GH
+       } = (0, AH.B)(), YH = IH.k[BH], uH = (0, fH.F)(LH[BH]);
+       return !YH.move && !YH.scale || zH && uH ? (0, TH.jsx)(lH, {
+ ... (19 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L49-L50` → after: `L153-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L153-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L153-L187) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L49-L50)

```diff
-     function IU() {
-       return FU().filter((UU => UU.panel && !UU.disabled))
+     function eH(HH) {
+       let {
+         id: BH,
+         actionButtons: LH,
+         keyNames: rH,
+         className: SH,
+         keepPlace: hH,
+         locked: tH,
+         lockable: zH,
+         onLocked: EH
+       } = HH;
+       const {
+         t: XH
+       } = (0, AH.B)();
+       return zH || tH ? (0, TH.jsx)(CH.W, {
+         className: SH,
+ ... (19 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L54-L56` → after: `L191-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L191-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L191-L216) · [Before (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L54-L56)

```diff
-       const XU = IU(),
-         zU = XU.findIndex((UU => UU.id === oU));
-       return !(zU < 0 || XU.length < 2) && (YU(XU[(zU + UU + XU.length) % XU.length]), !0)
+       let {
+         className: BH,
+         open: LH,
+         name: rH,
+         onToggle: SH
+       } = HH;
+       const {
+         t: hH
+       } = (0, AH.B)();
+       return (0, TH.jsx)(CH.W, {
+         className: BH,
+         ariaLabel: hH(LH ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
+           name: rH
+         }),
+         pressed: LH,
+         analyticsClick: {
+ ... (10 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L59-L60` → after: `L219-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L219-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L219-L234) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L59-L60)

```diff
-     function aU() {
-       return null !== oU && IU().length > 1
+     function gH(HH, BH) {
+       var LH;
+       HH.contains(document.activeElement) && BH.focus({
+         preventScroll: !0
+       }), null === (LH = (0, mH.c)()) || void 0 === LH || LH.handOverPadFocus(HH, BH)
+     }
+ 
+     function NH(HH) {
+       const BH = HH.closest("[data-hud-row]"),
+         LH = null === BH || void 0 === BH ? void 0 : BH.querySelector(".HudElementRowName");
+       return !(!BH || !LH) && (gH(BH, LH), !0)
+     }
+     const RH = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";
+ 
+     function jH(HH, BH) {
+       return "joystick" === HH && !BH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L64` → after: `L238-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L238-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L238-L465) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L64)

```diff
-       DU(null)
+       const {
+         t: HH
+       } = (0, AH.B)();
+       return (0, TH.jsx)(CH.W, {
+         className: "HudFixJoystickButton",
+         analyticsClick: {
+           id: "hud_layout.fix_joystick"
+         },
+         onClick: HH => {
+           const BH = HH.currentTarget;
+           if (!NH(BH)) {
+             const HH = function(HH) {
+               var BH, LH;
+               const AH = [HH.previousElementSibling, HH.nextElementSibling].find((HH => HH instanceof HTMLElement && HH.matches(RH)));
+               return null !== (BH = null !== AH && void 0 !== AH ? AH : null === (LH = HH.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === LH ? void 0 : LH.querySelector(`:is(${RH}):not(.HudFixJoystickButton)`)) && void 0 !== BH ? BH : null
+             }(BH);
+ ... (212 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L68` → after: `L469-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L469-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L469-L858) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L68)

```diff
-       "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
+       return (0, TH.jsx)("div", {
+         className: "SocialBarContainer",
+         children: (0, TH.jsx)("div", {
+           className: "SocialBarOuter",
+           children: (0, TH.jsx)("div", {
+             className: "SocialBar",
+             children: (0, TH.jsx)("div", {
+               className: "CondensedSocialBarInner",
+               children: (0, TH.jsx)("div", {
+                 className: "CondensedSectionsContainer",
+                 children: (0, TH.jsxs)("div", {
+                   className: "CondensedSections",
+                   children: [(0, TH.jsxs)("div", {
+                     className: "CondensedSection CondensedSectionFriendRequests",
+                     children: [(0, TH.jsx)("div", {
+                       className: "CondensedSectionValue",
+ ... (374 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L72-L73` → after: `L862-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L862-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L862-L865) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L72-L73)

```diff
-       const UU = oU;
-       return DU(null), UU
+       const [HH, BH] = (0, rH.useState)({}), LH = (0, rH.useCallback)((HH => {
+         BH((BH => [...new Set([...Object.keys(BH), ...Object.keys(HH)])].every((LH => BH[LH] === HH[LH])) ? BH : HH))
+       }), []);
+       return [HH, LH]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L77-L78` → after: `L870-L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L870-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L870-L1025) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L77-L78)

```diff
-       return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
-         AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
+       var BH;
+       let {
+         selected: LH,
+         layout: rH,
+         actionButtons: SH,
+         keyNames: hH,
+         overlaps: tH,
+         scaleCaps: EH,
+         joystickFixed: XH,
+         onScale: GH,
+         onHidden: YH,
+         onReset: uH,
+         locked: QH,
+         lockable: WH,
+         onLocked: MH,
+         extra: xH
+ ... (140 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L81-L99` → after: `L1028-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L1028-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L1028-L1056) · [Before (L81-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L81-L99)

```diff
-   },
-   37325: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => FU,
-       h: () => kU,
-       j: () => tU,
-       l: () => gU,
-       n: () => NU,
-       o: () => DU,
-       r: () => aU,
-       t: () => IU,
-       u: () => EU
-     });
-     var cU = zU(27),
-       yU = zU(31),
-       QU = zU(1310),
- ... (3 more removed lines; see GitHub link above)
+ 
+     function kB(HH, BH, LH) {
+       let {
+         keysAbove: AH
+       } = LH;
+       const rH = [...HH.documentElement.classList].filter((HH => !TB.has(HH) && !VB.has(HH))),
+         SH = [...BH.documentElement.classList].filter((HH => VB.has(HH))),
+         hH = [vB, PB.hotbar, PB.hasShop, PB.hasBag];
+       AH && hH.push(PB.keysAbove), BH.documentElement.className = [...rH, ...hH, ...SH].join(" ")
+     }
+     const mB = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];
+ 
+     function oB(HH, BH, LH, AH, rH) {
+       const SH = (0, fH.z)(LH, AH, "joystick"),
+         hH = (0, JH.z)((0, JH.G)(LH, AH, rH), AH),
+         tH = hH.classes.filter((HH => !UB.has(HH))),
+ ... (13 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L102` → after: `L1059-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L1059-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L1059-L1076) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L102)

```diff
-       return oU
+       return (0, JH.F)(EH.c.get("notchSize"), window.innerWidth, window.innerHeight)
+     }
+ 
+     function fB(HH) {
+       return (0, JH.s)(IB(), (0, JH.K)(HH))
+     }
+ 
+     function lB(HH, BH, LH) {
+       const AH = HH.documentElement.style,
+         rH = (0, JH.D)(BH),
+         SH = AH.getPropertyValue(rH);
+       try {
+         return LH((HH => {
+           AH.setProperty(rH, String(HH))
+         }))
+       } finally {
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L106-L111` → after: `L1080-L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L1080-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L1080-L1155) · [Before (L106-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L106-L111)

```diff
-       const zU = {
-         content: UU,
-         menu: XU
-       };
-       return oU = zU, yU.k.UY(FU, oU, !0), () => {
-         oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
+       const [LH, AH] = lB(HH, "hotbar", (BH => {
+         const LH = LH => {
+           var AH, rH;
+           return BH(LH), null !== (AH = null === (rH = HH.querySelector(".HotBarGameItemsContainer")) || void 0 === rH ? void 0 : rH.getBoundingClientRect().width) && void 0 !== AH ? AH : 0
+         };
+         return [LH(1), LH(fH.j)]
+       }));
+       return LH <= 0 ? fH.j : Math.min(fH.j, Math.max(1, Math.floor(AH / LH / BH + 1e-6) * BH))
+     }
+     const cB = 3,
+       eB = .5,
+       qB = HH => HH.right - HH.left;
+     const gB = (HH, BH) => Math.abs((0, dH.d)(HH).x - (0, dH.d)(BH).x) + Math.abs((0, dH.d)(HH).y - (0, dH.d)(BH).y) + Math.abs(qB(HH) - qB(BH));
+ 
+     function NB(HH, BH, LH, AH, rH) {
+       let {
+ ... (60 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L114` → after: `L1159-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L1159-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L1159-L1169) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L114)

```diff
-     let YU = null;
+ 
+     function RB(HH, BH, LH, AH, rH) {
+       let [SH, hH, tH] = BH;
+       const zH = fH.v[HH],
+         CH = {};
+       zH.scale && qB(AH) > 0 && Math.abs(qB(LH) - qB(AH)) > eB && (CH.scale = Math.max(fH.n, Math.min(fH.j, tH * qB(LH) / qB(AH))));
+       const EH = (0, dH.d)(LH).x - (0, dH.d)(AH).x,
+         XH = (0, dH.d)(LH).y - (0, dH.d)(AH).y;
+       return zH.move && (Math.abs(EH) > eB || Math.abs(XH) > eB) && (CH.dx = SH + EH / rH.width, CH.dy = hH + XH / rH.height), void 0 === CH.scale && void 0 === CH.dx ? null : CH
+     }
+     let jB = 0;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L117` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L1172) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L117)

```diff
-       return YU
+       return jB > 0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L121-L122` → after: `L1182-L1382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR1182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L1182-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L1182-L1382) · [Before (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L121-L122)

```diff
-       return YU = UU, () => {
-         YU === UU && (YU = null)
+       let {
+         preview: BH,
+         stageRef: LH,
+         ringRef: AH,
+         centreLineRef: SH,
+         snapCentre: hH,
+         ready: tH,
+         measure: zH,
+         k: CH,
+         viewport: EH,
+         boxes: XH,
+         pieces: GH,
+         selected: YH,
+         insets: uH,
+         layout: QH,
+         canMove: WH,
+ ... (185 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L125` → after: `L1385-L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L1385-L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L1385-L1592) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L125)

```diff
-     let pU = !1;
+     var dB = LH(9603);
+ 
+     function aB(HH, BH) {
+       return Object.keys(HH).filter((HH => HH !== BH)).map((BH => HH[BH]))
+     }
+ 
+     function sB(HH) {
+       return HH.map((HH => {
+         let {
+           id: BH,
+           box: LH
+         } = HH;
+         return `${BH}:${LH.left},${LH.top},${LH.right},${LH.bottom}`
+       })).join(";")
+     }
+ 
+ ... (192 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L128-L131` → after: `L1595-L2341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L1595-L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L1595-L2341) · [Before (L128-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L128-L131)

```diff
-       const UU = cU.e.get("openInGameMenuName");
-       "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
-         openInGameMenuName: "clientGame",
-         openEverythingMenuName: null
+       const [HH, BH] = (0, wH.b)();
+       return (0, rH.useMemo)((() => ({
+         width: HH,
+         height: BH
+       })), [HH, BH])
+     }
+ 
+     function rL(HH) {
+       var BH;
+       const {
+         layout: LH,
+         orientation: SH,
+         selected: hH,
+         onSelect: tH,
+         onMove: CH,
+         canMove: EH,
+ ... (731 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L136` → after: `L2346-L2622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR2346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L2346-L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L2346-L2622) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L136)

```diff
-       GU(!1)
+       const {
+         t: HH
+       } = (0, AH.B)(), BH = (0, fH.X)(), {
+         clientEscMenuOptions: LH
+       } = (0, EH.m)(["clientEscMenuOptions"]), SH = (0, GL.g)(), hH = BH.hudLayouts[SH], [tH, zH] = (0, rH.useState)(null), {
+         rowIconsOpen: XH,
+         onRowIconsOpen: GH,
+         select: uH
+       } = function(HH, BH) {
+         const [LH, AH] = (0, rH.useState)((() => fH.A.some((BH => void 0 !== HH.hudElements[BH] || HH.hudLocked.includes(BH))))), SH = (0, rH.useCallback)((HH => {
+           BH(HH), (0, fH.H)(HH) && AH(!0)
+         }), [BH]);
+         return {
+           rowIconsOpen: LH,
+           onRowIconsOpen: AH,
+           select: SH
+ ... (261 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L140` → after: `L2731-L2733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L2731-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L2731-L2733) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L140)

```diff
-       GU(pU)
+       return (0, TH.jsx)(TH.Fragment, {
+         children: VL.map(((HH, BH) => (0, TH.jsx)(HH, {}, BH)))
+       })
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L144` → after: `L2738-L2847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L2738-L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L2738-L2847) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L144)

```diff
-       pU && GU(!1)
+       const {
+         t: HH
+       } = (0, AH.B)(), {
+         isTouchScreen: BH,
+         clientEscMenuOptions: LH,
+         gameState: hH
+       } = (0, EH.m)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), tH = (0, uH.j)("ezBridging"), zH = (0, uH.j)("ezTowering"), WH = "inGame" !== hH || !0 === tH, MH = (0, QH.i)(), vH = null !== MH && ("inGame" !== hH || !0 === zH), [, PH] = (0, rH.useReducer)((HH => HH  … [truncated]
+       return (0, TH.jsxs)("div", {
+         className: "SettingsMenuRightInner",
+         children: [UH && (0, TH.jsxs)("div", {
+           className: "SettingBox SettingBoxWithButton",
+           children: [(0, TH.jsx)("div", {
+             children: HH("controller:settingsControlsNote")
+           }), (0, TH.jsx)(CH.W, {
+             onClick: () => {
+               EH.c.set({
+ ... (94 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L148-L150` → after: `L2851-L3004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR2851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L2851-L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L2851-L3004) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L148-L150)

```diff
-       "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
-         openInGameMenuName: UU ? "inventory" : null
-       }), UU || (0, AU.l)(), pU = !1
+       let {
+         title: BH,
+         defaultOpen: LH,
+         children: AH
+       } = HH;
+       const [SH, hH] = (0, rH.useState)(LH);
+       return (0, TH.jsxs)("div", {
+         className: zH()("ControlsSection", {
+           Collapsed: !SH
+         }),
+         children: [(0, TH.jsxs)("div", {
+           className: "ControlsSectionHeader",
+           "data-pad-focusable": !0,
+           onClick: () => {
+             hH(!SH)
+           },
+ ... (138 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L153` → after: `L3007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR3007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L3007) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L153)

```diff
-   9339: (UU, XU, zU) => {
+   9584: (HH, BH, LH) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L157-L169` → after: `L3011-L3126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR3011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L3011-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L3011-L3126) · [Before (L157-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L157-L169)

```diff
-     var cU = zU(9348),
-       yU = zU(646),
-       QU = zU(142);
- 
-     function AU(UU) {
-       var XU, zU;
-       if ((0, yU.P)(UU)) return !0;
-       const AU = null !== (XU = null === (zU = QU.siteUsedData[QU.siteUsed]) || void 0 === zU ? void 0 : zU.adConfig.showRewardedAds) && void 0 !== XU && XU;
-       for (const yU in UU) {
-         const XU = UU[yU];
-         if (null !== XU && void 0 !== XU && XU.items)
-           for (const UU in XU.items)
-             if ((0, cU.o)(XU.items[UU], AU)) return !1
+     var AH = LH(45),
+       rH = LH(1315),
+       SH = LH(1225);
+     const hH = (0, AH.forwardRef)((function(HH, BH) {
+       let {
+         icon: LH,
+         title: AH,
+         sub: hH,
+         expanded: tH,
+         onClick: zH
+       } = HH;
+       return (0, SH.jsxs)("button", {
+         ref: BH,
+         type: "button",
+         className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
+         "aria-expanded": tH,
+ ... (100 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L171` → after: `L3128-L3145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L3128-L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L3128-L3145) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L171)

```diff
-       return !0
+   },
+   9537: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => tH
+     });
+     var AH = LH(15),
+       rH = LH(2213),
+       SH = LH(1352),
+       hH = LH(1390);
+     const tH = async () => {
+       if ((0, hH.m)()) {
+         if (!0 !== await SH.NotificationProvider.showPromptPopup({
+             title: "controller:menusLeaveGameTitle",
+             confirmText: "controller:menusLeaveGameLeave",
+             cancelText: "controller:menusLeaveGameStay",
+             destructive: !0
+ ... (2 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L174-L177` → after: `L3148-L3154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR3148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L3148-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L3148-L3154) · [Before (L174-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L174-L177)

```diff
-   63270: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       getClientGameMapKey: () => cU.n,
-       shopIsEmpty: () => yU.c
+   9540: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => zH,
+       i: () => SH,
+       l: () => hH,
+       n: () => rH,
+       p: () => tH
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L179-L180` → after: `L3156-L3166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR3156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L3156-L3166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L3156-L3166) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L179-L180)

```diff
-     var cU = zU(37325),
-       yU = zU(9339)
+     var AH = LH(2043);
+     const rH = "controllerPadShopOpen",
+       SH = HH => AH.i.includes(HH),
+       hH = HH => Object.values(HH).some((HH => !1 !== HH.canBuy && !HH.isRewardedAd)),
+       tH = (HH, BH, LH) => {
+         var AH, rH, hH, tH;
+         const zH = HH.filter((HH => !SH(HH))),
+           CH = null !== BH && HH.includes(BH) ? BH : null;
+         return null !== CH && !SH(CH) && LH(CH) ? CH : null !== (AH = null !== (rH = null !== (hH = null !== (tH = zH.find(LH)) && void 0 !== tH ? tH : zH[0]) && void 0 !== hH ? hH : CH) && void 0 !== rH ? rH : HH[0]) && void 0 !== AH ? AH : null
+       },
+       zH = HH => HH.userInput || HH.isRewardedAd || "boolean" === typeof HH.isSelected ? null : JSON.stringify([HH.image, HH.cost, HH.currency, HH.amount, HH.customTitle, HH.buyButtonText, HH.description, HH.canBuy])
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L182-L196` → after: `L3168-L3195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR3168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L3168-L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L3168-L3195) · [Before (L182-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L182-L196)

```diff
-   9348: (UU, XU, zU) => {
-     function cU(UU, XU) {
-       return !UU.hidden && (XU || !UU.isRewardedAd)
-     }
- 
-     function yU(UU) {
-       return "object" === typeof UU ? UU.option : UU
-     }
- 
-     function QU(UU, XU) {
-       var zU;
-       if ("dropdown" === (null === (zU = UU.userInput) || void 0 === zU ? void 0 : zU.type) && "object" === typeof UU.userInput.dropdownOptions[0]) {
-         for (const zU of UU.userInput.dropdownOptions)
-           if (yU(zU) === XU) return "object" === typeof zU ? zU.cost : UU.cost;
-         console.error("Didn't find matching option for dropdown item. Item:", UU, "input:", XU)
+   9561: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => CH,
+       g: () => EH
+     });
+     var AH = LH(45),
+       rH = LH(1450),
+       SH = LH(2085),
+       hH = LH(1405),
+       tH = LH(1433),
+       zH = LH(1225);
+     const CH = () => {
+         const HH = (0, hH.o)();
+         if ((0, AH.useEffect)((() => {
+             (0, hH.i)()
+           }), []), !HH) return null;
+ ... (12 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L198-L205` → after: `L3197-L3198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L3197-L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L3197-L3198) · [Before (L198-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L198-L205)

```diff
-       return UU.cost
-     }
- 
-     function AU(UU, XU, zU) {
-       var cU;
-       const yU = null !== (cU = zU.excludedPlayers) && void 0 !== cU ? cU : [XU];
-       return UU.filter((UU => !yU.includes(UU)))
-     }
+   },
+   9356: (HH, BH, LH) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L207` → after: `L3200-L3208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L3200-L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L3200-L3208) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L207)

```diff
-       d: () => QU,
+       C: () => CH,
+       G: () => kH,
+       I: () => UH,
+       K: () => VH,
+       O: () => WH,
+       S: () => zH,
+       U: () => EH,
+       c: () => MH,
+       f: () => bH,
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L210-L211` → after: `L3211-L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR3211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L3211-L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/171.js#L3211-L3340) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/171.js#L210-L211)

```diff
-       o: () => cU
-     })
+       n: () => uH,
+       r: () => QH,
+       t: () => GH,
+       v: () => YH,
+       z: () => OH
+     });
+     var AH = LH(18),
+       rH = LH(1696),
+       SH = LH(9361),
+       hH = LH(9364),
+       tH = LH(2548);
+     const zH = HH => (0, hH.k)(HH),
+       CH = HH => {
+         const BH = HH.getBoundingClientRect();
+         return {
+           x: BH.left + BH.width / 2,
+ ... (114 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/172.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/172.js` (57 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049)

#### 1. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L4)

```diff
-   39930: (UU, XU, zU) => {
+   37472: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L7` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L7-L9) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L7)

```diff
-       f: () => QU
+       e: () => MH,
+       i: () => GH,
+       k: () => XH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L9-L14` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L11-L18) · [Before (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L9-L14)

```diff
-     var cU = zU(4460);
-     let yU = null;
- 
-     function QU(UU) {
-       return null !== yU && UU === yU
-     }
+     var AH = LH(34986),
+       rH = LH(37474),
+       SH = LH(37479),
+       hH = LH(9412),
+       tH = LH(1450),
+       zH = LH(45),
+       CH = LH(69),
+       EH = LH(1225);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L17-L68` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L21-L24) · [Before (L17-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L17-L68)

```diff
-       this.HJ = !1, this.stopPropagation = !1, this.MJ = !1, this.disabled = !1
-     }
-     class FU {
-       constructor(UU, XU) {
-         this.version = "0.7.0";
-         var zU = Object.assign({}, new AU, XU || {});
-         this.element = UU || document, this.HJ = !!zU.HJ, this.stopPropagation = !!zU.stopPropagation, this.MJ = !!zU.MJ, this.disabled = !!zU.disabled, this.filterEvents = (UU, XU) => !0, this.ignoreEvent = UU => !1, this.down = new cU.EventEmitter, this.up = new cU.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           UzU: 0,
-           XzU: 0,
-           zzU: 0
-         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
-           lastX: 0,
-           lastY: 0,
-           currID: null
- ... (36 more removed lines; see GitHub link above)
+       var HH;
+       return (0, tH.e)(rH.b, (0, rH.p)()), (0, EH.jsx)(EH.Fragment, {
+         children: null === (HH = (0, rH.p)()) || void 0 === HH ? void 0 : HH.content
+       })
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L72-L78` → after: `L28-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L28-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L28-L41) · [Before (L72-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L72-L78)

```diff
-       window.addEventListener("keydown", tU.bind(null, UU, !0), !1), window.addEventListener("keyup", tU.bind(null, UU, !1), !1);
-       var XU = {
-         passive: !0
-       };
-       UU.element.addEventListener("touchstart", IU.bind(void 0, UU), {
-         passive: !1
-       }), UU.element.addEventListener("touchend", aU.bind(void 0, UU), XU), UU.element.addEventListener("mousedown", gU.bind(null, UU, !0), XU), window.document.addEventListener("mouseup", gU.bind(null, UU, !1), XU), UU.element.addEventListener("touchmove", kU.bind(null, UU), XU) … [truncated]
+       var BH;
+       let {
+         show: LH
+       } = HH;
+       (0, tH.e)(rH.b, (0, rH.p)());
+       const CH = null === (BH = (0, rH.p)()) || void 0 === BH ? void 0 : BH.menu;
+       return (0, zH.useEffect)((() => {
+         var HH;
+         LH || (null === CH || void 0 === CH || null === (HH = CH.onClose) || void 0 === HH || HH.call(CH), (0, SH.r)())
+       }), [LH, CH]), (0, zH.useEffect)((() => LH ? (0, hH.e)(SH.A, SH.g) : void 0), [LH]), (0, EH.jsx)(AH.e, {
+         showing: LH,
+         globallyUniqueKey: "clientGameMenu",
+         children: null === CH || void 0 === CH ? void 0 : CH.content
+       })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L80-L82` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L43-L44) · [Before (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L80-L82)

```diff
-     var EU = 0,
-       YU = 0,
-       NU = null;
+     const YH = new Map,
+       uH = new Set;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L85` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L47-L48) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L85)

```diff
-       XU.preventDefault(), pU(XU)
+       BH ? YH.set(HH, BH) : YH.delete(HH);
+       for (const LH of uH) LH()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L89-L188` → after: `L52-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L52-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L52-L59) · [Before (L89-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L89-L188)

```diff
-       let XU = !1;
-       for (let zU = 0; zU < UU.touches.length; ++zU)
-         if (UU.touches[zU].identifier === NU) {
-           XU = !0;
-           break
-         } if (!XU) {
-         const XU = UU.changedTouches[0];
-         EU = XU.clientX, YU = XU.clientY, NU = XU.identifier
-       }
-     }
- 
-     function aU(UU, XU) {
-       for (var zU = XU.changedTouches, cU = 0; cU < zU.length; ++cU) zU[cU].identifier === NU && (NU = null)
-     }
- 
-     function tU(UU, XU, zU) {
- ... (84 more removed lines; see GitHub link above)
+       let {
+         placement: BH = "bottom"
+       } = HH;
+       const LH = (0, zH.useRef)(null);
+       return (0, zH.useLayoutEffect)((() => {
+         const HH = LH.current;
+         return QH(BH, HH), () => {
+           YH.get(BH) === HH && QH(BH, null)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L190-L233` → after: `L61-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L61-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L61-L67) · [Before (L190-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L190-L233)

```diff
-       }() && (clearTimeout(UU._blurRelease), UU._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var XU in UU._modifiersHeldThroughBlur = {}, UU._keyStates) UU._keyStates[XU] && !/^Mouse\d/.test(XU) && dU(UU, XU)
-       }), 0))
-     }
- 
-     function WU(UU, XU) {
-       var zU = UU._modifiersHeldThroughBlur;
-       if (zU && XU.isTrusted && document.hasFocus())
-         for (var cU in zU) delete zU[cU], UU._keyStates[cU] && cU !== XU.code && (RU(XU, cU) || dU(UU, cU))
-     }
- 
-     function dU(UU, XU) {
-       const zU = {
-           code: XU,
-           preventDefault: () => {},
- ... (28 more removed lines; see GitHub link above)
+       }), [BH]), (0, EH.jsx)("div", {
+         ref: LH,
+         id: `clientGameHud-${BH}`,
+         style: {
+           display: "contents"
+         }
+       })
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L236-L237` → after: `L70-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L70-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L70-L87) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L236-L237)

```diff
-     function eU(UU, XU) {
-       return UU ? !XU : XU
+     function MH(HH) {
+       let {
+         children: BH,
+         placement: LH = "bottom"
+       } = HH;
+       const [AH, rH] = (0, zH.useState)((() => {
+         var HH;
+         return null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null
+       }));
+       return (0, zH.useEffect)((() => {
+         const HH = () => {
+           var HH;
+           rH(null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null)
+         };
+         return uH.add(HH), HH(), () => {
+           uH.delete(HH)
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L240` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L90) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L240)

```diff
-   37405: (UU, XU, zU) => {
+   9412: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L242-L243` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L92-L93) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L242-L243)

```diff
-       d: () => aU,
-       f: () => tU
+       c: () => SH,
+       e: () => rH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L245-L306` → after: `L95-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L95-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L95-L102) · [Before (L245-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L245-L306)

```diff
-     var cU = zU(61),
-       yU = zU(1492),
-       QU = zU(2047),
-       AU = zU(37354),
-       FU = zU(646),
-       oU = zU(1106),
-       DU = zU.n(oU),
-       EU = zU(1305);
-     const YU = [NU()];
- 
-     function NU() {
-       return {
-         source: null,
-         direction: null,
-         HV: null,
-         timeout: void 0,
- ... (46 more removed lines; see GitHub link above)
+     let AH = null;
+     const rH = function(HH) {
+         const BH = {
+           cycle: HH,
+           canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
+         };
+         return AH = BH, () => {
+           AH === BH && (AH = null)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L308-L326` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L104-L107) · [Before (L308-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L308-L326)

```diff
-       }), []), (0, EU.jsx)("div", {
-         className: "DirectionalDamage",
-         children: YU.map(((UU, XU) => (0, EU.jsx)("div", {
-           ref: XU => {
-             UU.HV = XU
-           },
-           className: DU()("DamageIndicator", {
-             DamageIndicatorFullCircle: (0, FU.P)(UU.direction),
-             DamageIndicatorIdle: null === UU.source
-           })
-         }, XU)))
-       })
-     }));
- 
-     function tU(UU) {
-       for (const XU of YU) {
- ... (3 more removed lines; see GitHub link above)
+       },
+       SH = () => {
+         var HH;
+         return null !== (HH = AH) && void 0 !== HH && HH.canCycle() ? AH.cycle : null
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L330-L342` → after: `L110-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L110-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L110-L128) · [Before (L330-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L330-L342)

```diff
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
-     function QU(UU) {
-       return cU !== UU && (cU = UU, !0)
+   39425: (HH, BH, LH) => {
+     function AH(HH, BH, LH) {
+       var AH;
+       const {
+         width: rH,
+         height: SH
+       } = LH, hH = null !== (AH = HH.text) && void 0 !== AH ? AH : HH, tH = (hH.x / 100 - .5) * rH, zH = (hH.y / 100 - .5) * SH, CH = rH / 2 - BH.x;
+       if (null !== HH.text && Math.abs(tH) <= CH && zH >= BH.top - SH / 2 && zH <= SH / 2 - BH.bottom) return {
+         x: hH.x,
+         y: hH.y
+       };
+       const EH = Math.min(0 === tH ? 1 / 0 : CH / Math.abs(tH), zH > 0 ? (SH / 2 - BH.bottom) / zH : zH < 0 ? (BH.top - SH / 2) / zH : 1 / 0);
+       return !Number.isFinite(EH) || EH < 0 ? {
+         x: 50,
+         y: 50
+       } : {
+ ... (3 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L347-L358` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L131-L132) · [Before (L347-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L347-L358)

```diff
-       e: () => QU,
-       g: () => yU
-     });
-     var cU = zU(27);
- 
-     function yU(UU, XU) {
-       return UU && !XU
-     }
- 
-     function QU() {
-       return yU(cU.e.get("isTouchScreen"), cU.e.get("clientEscMenuOptions").touchActionButtons)
-     }
+       e: () => AH
+     })
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L360-L362` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L134-L136) · [Before (L360-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L360-L362)

```diff
-   41730: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       startPadGameplay: () => ZU
+   39461: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L364-L423` → after: `L138-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L138-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L138-L168) · [Before (L364-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L364-L423)

```diff
-     zU(41624);
-     var cU = zU(41633),
-       yU = zU(4139),
-       QU = zU(27),
-       AU = zU(39888),
-       FU = zU(4063),
-       oU = zU(39919),
-       DU = zU(31),
-       EU = zU(3043),
-       YU = zU(39206),
-       NU = zU(9431),
-       IU = zU(41636);
-     const pU = {
-       yawRadPerSec: 0,
-       pitchRadPerSec: 0
-     };
- ... (44 more removed lines; see GitHub link above)
+     const AH = 4,
+       rH = 12e3,
+       SH = 1e3;
+     class hH {
+       constructor() {
+         let {
+           limit: HH = AH,
+           windowMs: BH = rH,
+           spacingMs: LH = SH,
+           now: hH = Date.now
+         } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = HH, this.windowMs = BH, this.spacingMs = LH, this.now = hH
+       }
+       isPacing() {
+         return !this.canSendPriority() || this.isPriorityWaiting()
+       }
+ ... (15 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L425-L531` → after: `L170-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L170-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L170-L201) · [Before (L425-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L425-L531)

```diff
-       };
-     var BU = zU(41640);
-     zU(38431), zU(9294);
-     zU(9314).e;
-     const ZU = () => {
-       const UU = (0, BU.e)((() => {
-           const UU = {
-             x: 0,
-             y: 0,
-             magnitude: 0,
-             headingOffset: 0,
-             jumpHeld: !1,
-             jumpPressedSinceTick: !1,
-             crouchHeld: !1,
-             running: !1,
-             sprintHeld: !1
- ... (91 more removed lines; see GitHub link above)
+       }
+       subscribe(HH) {
+         return this.listeners.add(HH), () => {
+           this.listeners.delete(HH)
+         }
+       }
+       dispose() {
+         this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
+       }
+       isPriorityWaiting() {
+         for (const HH of this.priority)
+           if (HH.waiting()) return !0;
+         return !1
+       }
+       prune() {
+         const HH = this.now() - this.windowMs;
+ ... (16 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L535` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L205) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L535)

```diff
-   37334: (UU, XU, zU) => {
+   37479: (HH, BH, LH) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L537-L540` → after: `L207-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L207-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L207-L213) · [Before (L537-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L537-L540)

```diff
-       e: () => QU,
-       i: () => aU,
-       l: () => tU,
-       o: () => FU,
+       A: () => uH,
+       C: () => xH,
+       c: () => SH,
+       g: () => QH,
+       j: () => WH,
+       k: () => tH,
+       n: () => GH,
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L543-L546` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L216) · [Before (L543-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L543-L546)

```diff
-       v: () => YU,
-       w: () => GU,
-       x: () => pU,
-       y: () => kU
+       x: () => vH
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L548-L549` → after: `L218-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L218-L219) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L548-L549)

```diff
-     var cU = zU(27),
-       yU = zU(31);
+     var AH = LH(15),
+       rH = LH(18);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L556` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L226) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L556)

```diff
-         return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
+         return (null !== (LH = HH.order) && void 0 !== LH ? LH : 0) - (null !== (AH = BH.order) && void 0 !== AH ? AH : 0)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L573` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L243) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L573)

```diff
-       UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
+       HH.panel && "clientGame" === AH.c.get("openInGameMenuName") && CH(HH.id)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L599` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L269) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L599)

```diff
-       "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
+       "inventory" !== AH.c.get("openInGameMenuName") && CH(null)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L608-L609` → after: `L278-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L278-L279) · [Before (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L608-L609)

```diff
-       return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
-         AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
+       return hH.set(HH.id, HH), rH.k.AX(SH, tH(), !0), () => {
+         hH.get(HH.id) === HH && (hH.delete(HH.id), rH.k.AX(SH, tH()))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L613` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L283) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L613)

```diff
-   37325: (UU, XU, zU) => {
+   37474: (HH, BH, LH) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L615-L616` → after: `L285-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L285-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L285-L287) · [Before (L615-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L615-L616)

```diff
-       d: () => FU,
-       h: () => kU,
+       b: () => tH,
+       c: () => xH,
+       g: () => WH,
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L620-L621` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L290) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L620-L621)

```diff
-       o: () => DU,
-       r: () => aU,
+       p: () => CH,
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L623` → after: `L292-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L292-L293) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L623)

```diff
-       u: () => EU
+       u: () => YH,
+       v: () => EH
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L625-L628` → after: `L295-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L295-L298) · [Before (L625-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L625-L628)

```diff
-     var cU = zU(27),
-       yU = zU(31),
-       QU = zU(1310),
-       AU = zU(37334);
+     var AH = LH(15),
+       rH = LH(18),
+       SH = LH(1241),
+       hH = LH(37479);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L641-L642` → after: `L311-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L311-L312) · [Before (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L641-L642)

```diff
-       return oU = zU, yU.k.UY(FU, oU, !0), () => {
-         oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
+       return zH = LH, rH.k.AX(tH, zH, !0), () => {
+         zH === LH && (zH = null, uH = !1, WH(), rH.k.AX(tH, null))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L659-L660` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L329-L330) · [Before (L659-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L659-L660)

```diff
-       const UU = cU.e.get("openInGameMenuName");
-       "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
+       const HH = AH.c.get("openInGameMenuName");
+       "clientGame" !== HH && (uH = "inventory" === HH), (0, hH.n)() || (0, hH.j)(), (0, SH.x)(SH.d), AH.c.set({
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L679` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L349) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L679)

```diff
-       "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
+       "clientGame" === AH.c.get("openInGameMenuName") && AH.c.set({
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L681` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L351) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L681)

```diff
-       }), UU || (0, AU.l)(), pU = !1
+       }), HH || (0, hH.j)(), uH = !1
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L684` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L354) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L684)

```diff
-   37203: (UU, XU, zU) => {
+   39467: (HH, BH, LH) => {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L686` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L356) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L686)

```diff
-       c: () => oU
+       d: () => hH
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L688-L692` → after: `L358-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L358-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L358-L360) · [Before (L688-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L688-L692)

```diff
-     var cU = zU(320),
-       yU = zU(27),
-       QU = zU(37211),
-       AU = zU(1680),
-       FU = zU(2058);
+     var AH = LH(45),
+       rH = LH(39433),
+       SH = LH(1225);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L694-L699` → after: `L362-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L362-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L362-L371) · [Before (L694-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L694-L699)

```diff
-     function oU(UU, XU) {
-       var zU, oU, DU;
-       if (!yU.e.get("isKeydownEnabled") || UU.repeat) return;
-       const EU = UU.code;
-       "Escape" === UU.key ? (0, AU.g)(UU) : null !== (zU = FU.w.OpenSettings) && void 0 !== zU && zU.includes(EU) ? (0, AU.x)(UU, cU.s.SETTINGS) : null !== (oU = FU.w.OpenCharacterCustomization) && void 0 !== oU && oU.includes(EU) ? (0, QU.e)() || (0, AU.x)(UU, cU.s.CUSTOMISATION … [truncated]
-         showDebugOverlay: !yU.e.get("showDebugOverlay")
+     function hH(HH) {
+       let {
+         icon: BH
+       } = HH;
+       const LH = (0, AH.useCallback)((HH => {
+         null === HH || void 0 === HH || HH.replaceChildren((0, rH.e)(BH))
+       }), [BH]);
+       return (0, SH.jsx)("span", {
+         className: "SkyblockMapIconSlot",
+         ref: LH
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L703` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L375) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L703)

```diff
-   39876: (UU, XU, zU) => {
+   39433: (HH, BH, LH) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L705` → after: `L377-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L377-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L377-L378) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L705)

```diff
-       e: () => oU
+       e: () => VH,
+       i: () => UH
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L707-L709` → after: `L380-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L380-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L380-L397) · [Before (L707-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L707-L709)

```diff
-     var cU = zU(9493),
-       yU = zU(37201),
-       QU = zU(39882);
+     const AH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
+       rH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
+       SH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC";
+     var hH = LH(39440);
+     const tH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
+     var zH = LH(39448);
+     var CH = LH(39451);
+     var EH = LH(39454);
+     const XH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAI … [truncated]
+     LH(45);
+     const GH = LH.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
+     const YH = LH.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
+       uH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
+     var QH = LH(19187),
+       WH = LH(21239),
+       MH = LH(23551),
+ ... (2 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L711-L719` → after: `L399-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L399-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L399-L484) · [Before (L711-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L711-L719)

```diff
-         seat: "seat_timeout",
-         socket_unopened: "socket_timeout_unopened",
-         socket: "socket_timeout"
-       },
-       FU = {
-         seat: "seat_lost",
-         socket_unopened: "socket_unopened",
-         socket: "socket_closed"
-       };
+       ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
+       auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
+       bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
+       carrot: QH,
+       castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
+       cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
+       combat_1: WH,
+       cow: tH,
+       craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
+       dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
+       emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
+       enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
+       farm: LH(26804),
+       farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
+       fishing: AH,
+       fishing_1: AH,
+ ... (70 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L722-L749` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L487-L488) · [Before (L722-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L722-L749)

```diff
-       if (UU instanceof yU.c) return {
-         at: AU[XU],
-         code: 0
-       };
-       const zU = (0, cU.f)(UU),
-         oU = "number" === typeof zU ? zU : 0;
-       return null !== (0, QU.l)(oU).name ? {
-         at: "refused",
-         code: oU
-       } : {
-         at: FU[XU],
-         code: oU
-       }
-     }
-   },
-   9493: (UU, XU, zU) => {
- ... (12 more removed lines; see GitHub link above)
+       const LH = document.createElement("img");
+       return LH.className = BH, LH.src = HH, LH.alt = "", LH.draggable = !1, LH
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L753` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L492) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L753)

```diff
-       return "object" === typeof UU && null !== UU ? UU.code : void 0
+       return Object.hasOwn(PH, HH) || HH.startsWith("npc_")
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L758-L768` → after: `L497-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L497-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L497-L502) · [Before (L758-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L758-L768)

```diff
-       return null !== (XU = Object.keys(yU.b).find((XU => yU.b[XU] === UU))) && void 0 !== XU ? XU : null
-     }
- 
-     function oU(UU) {
-       return "notWhitelisted" === UU ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
-     }
-     const DU = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+       const LH = null !== (BH = PH[HH]) && void 0 !== BH ? BH : HH.startsWith("npc_") ? hH : uH;
+       if ("portal" !== HH) return TH(LH, "SkyblockMapIcon");
+       const AH = document.createElement("span");
+       AH.className = "SkyblockMapIcon Portal";
+       const rH = document.createElement("span");
+       return rH.className = "SkyblockMapIconTint", rH.style.maskImage = rH.style.webkitMaskImage = `url("${XH}")`, AH.append(TH(LH, "SkyblockMapIconLayer"), rH, TH(XH, "SkyblockMapIconLayer SkyblockMapIconShade")), AH
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L771-L827` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L505) · [Before (L771-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L771-L827)

```diff
-   37181: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => NU,
-       h: () => EU,
-       i: () => IU,
-       l: () => YU
-     });
-     var cU = zU(344),
-       yU = zU(698),
-       QU = zU(708),
-       AU = zU(42);
-     const FU = {
-         idStorageKey: "playSessionId",
-         lastActivityStorageKey: "playSessionLastActivityMs",
-         expiryMs: 3e5
-       },
- ... (41 more removed lines; see GitHub link above)
+   35008: (HH, BH, LH) => {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L830` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L508) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L830)

```diff
-       g: () => RU
+       f: () => hH
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L832-L854` → after: `L510-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L510-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L510-L690) · [Before (L832-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L832-L854)

```diff
-     var cU = zU(1079),
-       yU = zU(220),
-       QU = zU(337),
-       AU = zU(654),
-       FU = zU(344),
-       oU = zU(1083),
-       DU = zU(687),
-       EU = zU(730),
-       YU = zU(4959),
-       NU = zU(97),
-       IU = zU(142),
-       pU = zU(1800),
-       aU = zU(114),
-       tU = zU(37181),
-       gU = zU(42),
-       kU = zU(702),
- ... (7 more removed lines; see GitHub link above)
+     const AH = [{
+       threshold: 10n ** 180n,
+       suffix: "NoQig"
+     }, {
+       threshold: 10n ** 177n,
+       suffix: "OcQig"
+     }, {
+       threshold: 10n ** 174n,
+       suffix: "SpQig"
+     }, {
+       threshold: 10n ** 171n,
+       suffix: "SQig"
+     }, {
+       threshold: 10n ** 168n,
+       suffix: "QiQig"
+     }, {
+ ... (165 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L856-L900` → after: `L692-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L692-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L692-L712) · [Before (L856-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L856-L900)

```diff
-     function RU(UU, XU, zU, RU, PU) {
-       const WU = (0, cU.l)(XU) ? (0, cU.p)(XU) : null,
-         dU = UU.isLoggedIn() && void 0 !== (0, yU.b)(QU.l, IU.siteUsed) ? (0, GU.g)() : null,
-         LU = {
-           cookies: (0, pU.getAllCookiesForGameNameWithVariation)(XU),
-           isMobile: (0, NU.isMobile)(),
-           isUsingCustomGameTexturePack: null !== WU && PU(WU),
-           generalCookies: {
-             joinDiscord: !!gU.k.getItem("DiscordPressed"),
-             newGo: YU.d,
-             ...UU.getMetricsCookies(),
-             trafficCode: RU,
-             compliance: NU.compliance
-           },
-           browserInfo: {
-             ua: window.navigator.userAgent,
- ... (29 more removed lines; see GitHub link above)
+     function rH(HH) {
+       let BH, LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
+       if ("number" === typeof HH) {
+         if (!Number.isFinite(HH)) return "0";
+         if (Math.abs(HH) < 100) {
+           const BH = HH < 0 ? "-" : "",
+             LH = Math.abs(HH);
+           return LH >= 10 ? `${BH}${LH.toFixed(1).replace(/\.0$/,"")}` : `${BH}${LH.toFixed(2).replace(/\.?0+$/,"")}`
+         }
+         BH = BigInt(Math.floor(HH))
+       } else BH = HH;
+       const rH = BH < 0n ? -BH : BH,
+         SH = BH < 0n ? "-" : "",
+         hH = rH.toString();
+       if (hH.length <= LH) return `${SH}${hH}`;
+       const tH = 3 * Math.floor((hH.length - 1) / 3);
+ ... (5 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L903-L918` → after: `L721-L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L721-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L721-L725) · [Before (L903-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L903-L918)

```diff
-   },
-   39882: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => yU,
-       f: () => QU,
-       i: () => FU,
-       l: () => EU,
-       p: () => oU,
-       r: () => AU
-     });
-     var cU = zU(212);
-     const yU = 3e3,
-       QU = 15e3;
- 
-     function AU(UU) {
-       const XU = UU.endsWith(cU.m);
+     const SH = AH.map((HH => {
+       let {
+         threshold: BH,
+         suffix: LH
+       } = HH;
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L920-L921` → after: `L727-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L727-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L727-L728) · [Before (L920-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L920-L921)

```diff
-         text: (XU ? UU.slice(0, -cU.m.length) : UU) || null,
-         dropsCache: XU
+         threshold: Number(BH),
+         suffix: LH
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L923-L930` → after: `L730-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L730-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L730-L735) · [Before (L923-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L923-L930)

```diff
-     }
-     const FU = "Either your internet isn't working or this is a bug.";
- 
-     function oU(UU, XU) {
-       const zU = EU(UU);
-       return null !== zU.name && "" === cU.e[zU.name].text && null !== XU ? XU : zU.reason
-     }
-     const DU = "You were removed from the game.";
+     })).filter((HH => {
+       let {
+         threshold: BH
+       } = HH;
+       return Number.isFinite(BH)
+     }));
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L933-L955` → after: `L738-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L738-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L738-L750) · [Before (L933-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L933-L955)

```diff
-       var XU;
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
- ... (7 more removed lines; see GitHub link above)
+       const BH = Math.abs(HH),
+         LH = HH < 0 ? "-" : "";
+       for (const {
+           threshold: AH,
+           suffix: rH
+         }
+         of SH)
+         if (BH >= AH) {
+           const HH = BH / AH;
+           if (HH >= 1e3) return `${LH}${BH.toExponential(2).replace("e+","e")}`;
+           let SH;
+           return SH = HH >= 100 ? Math.floor(HH).toString() : HH >= 10 ? HH.toFixed(1).replace(/\.0$/, "") : HH.toFixed(2).replace(/\.?0+$/, ""), `${LH}${SH}${rH}`
+         } return `${LH}${BH}`
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L958-L969` → after: `L753-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L753-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L753-L754) · [Before (L958-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L958-L969)

```diff
-   39819: (UU, XU, zU) => {
-     function cU(UU, XU, zU, cU, yU) {
-       var QU = {};
-       return Object.keys(cU).forEach((function(UU) {
-         QU[UU] = cU[UU]
-       })), QU.enumerable = !!QU.enumerable, QU.configurable = !!QU.configurable, ("value" in QU || QU.initializer) && (QU.writable = !0), QU = zU.slice().reverse().reduce((function(zU, cU) {
-         return cU(UU, XU, zU) || zU
-       }), QU), yU && void 0 !== QU.initializer && (QU.value = QU.initializer ? QU.initializer.call(yU) : void 0, QU.initializer = void 0), void 0 === QU.initializer && (Object.defineProperty(UU, XU, QU), QU = null), QU
-     }
-     zU.d(XU, {
-       d: () => cU
-     })
+   19187: HH => {
+     HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L971-L982` → after: `L756-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L756-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/172.js#L756-L781) · [Before (L971-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/172.js#L971-L982)

```diff
-   39812: (UU, XU, zU) => {
-     function cU(UU, XU, zU, cU) {
-       zU && Object.defineProperty(UU, XU, {
-         enumerable: zU.enumerable,
-         configurable: zU.configurable,
-         writable: zU.writable,
-         value: zU.initializer ? zU.initializer.call(cU) : void 0
-       })
-     }
-     zU.d(XU, {
-       c: () => cU
-     })
+   21239: HH => {
+     HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444K … [truncated]
+   },
+   23551: HH => {
+     HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
+   },
+   25090: HH => {
+     HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
+   },
+   26785: HH => {
+     HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLE … [truncated]
+   },
+   26804: HH => {
+     HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1 … [truncated]
+   },
+   39440: HH => {
+ ... (10 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/173.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/173.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L4` → after: `L4-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L4-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/173.js#L4-L174) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/173.js#L4)

```diff
-   9525: (UU, XU, zU) => {
+   37479: (HH, BH, LH) => {
+     LH.d(BH, {
+       A: () => uH,
+       C: () => xH,
+       c: () => SH,
+       g: () => QH,
+       j: () => WH,
+       k: () => tH,
+       n: () => GH,
+       r: () => MH,
+       t: () => XH,
+       x: () => vH
+     });
+     var AH = LH(15),
+       rH = LH(18);
+     const SH = "clientGameInventoryButtonsChanged",
+ ... (155 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L6-L42` → after: `L176-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L176-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/173.js#L176-L211) · [Before (L6-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/173.js#L6-L42)

```diff
-       pageBody: () => cU
-     });
-     const cU = {
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
+       getClientGameMapKey: () => AH.n,
+       shopIsEmpty: () => rH.d
+     });
+     var AH = LH(37474),
+       rH = LH(9467)
+   },
+   9475: (HH, BH, LH) => {
+     function AH(HH, BH) {
+       return !HH.hidden && (BH || !HH.isRewardedAd)
+     }
+ 
+     function rH(HH) {
+       return "object" === typeof HH ? HH.option : HH
+     }
+ 
+     function SH(HH, BH) {
+ ... (20 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/174.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/174.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390)

#### 1. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L4-L6` → after: `L4-L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L4-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/174.js#L4-L2730) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/174.js#L4-L6)

```diff
-   9528: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       pageBody: () => cU
+   40035: (HH, BH, LH) => {
+     function AH(HH) {
+       return !(!HH.lobbyLeaderboardInfo && !HH.lobbyManage)
+     }
+     LH.d(BH, {
+       e: () => AH
+     })
+   },
+   40018: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => SH,
+       h: () => hH
+     });
+     var AH = LH(18);
+     let rH = !1;
+ 
+ ... (2711 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L9-L32` → after: `L2864-L4465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R2864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L2864-L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/174.js#L2864-L4465) · [Before (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/174.js#L9-L32)

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
+       forward: "freeCamForward",
+       backward: "freeCamBackward",
+       left: "freeCamLeft",
+       right: "freeCamRight",
+       jump: "freeCamUp",
+       crouch: "freeCamDown"
+     };
+ 
+     function AB() {
+       var HH, BH;
+       return !(null === (HH = (0, mH.b)().client) || void 0 === HH || null === (BH = HH.freeCameraController) || void 0 === BH || !BH.movesFly())
+     }
+ 
+     function rB(HH) {
+       const BH = HH.on.bind(HH);
+       HH.on = (HH, LH) => {
+ ... (1586 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/175.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/175.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L4` → after: `L4-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L4-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/175.js#L4-L345) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/175.js#L4)

```diff
-   9531: (UU, XU, zU) => {
+   40038: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => tH,
+       f: () => SH
+     });
+     var AH = LH(4477);
+     let rH = null;
+ 
+     function SH(HH) {
+       return null !== rH && HH === rH
+     }
+ 
+     function hH() {
+       this.Qp = !1, this.stopPropagation = !1, this.kp = !1, this.disabled = !1
+     }
+     class tH {
+ ... (326 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L6-L7` → after: `L347-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L347-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/175.js#L347-L360) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/175.js#L6-L7)

```diff
-       pageBody: () => cU
-     });
+       startPadGameplay: () => TH
+     });
+     LH(41860);
+     var AH = LH(41864),
+       rH = LH(4113),
+       SH = LH(15),
+       hH = LH(4e4),
+       tH = LH(4061),
+       zH = LH(40032),
+       CH = LH(18),
+       EH = LH(3038),
+       XH = LH(39306),
+       GH = LH(9543),
+       YH = LH(41871);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L9-L39` → after: `L362-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L362-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/175.js#L362-L967) · [Before (L9-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/175.js#L9-L39)

```diff
-       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
-       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
-       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
-       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
-       faq: [{
-         question: "What is Bloxd Skywars?",
-         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
-       }, {
-         question: "How do you win in Skywars?",
-         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
-       }, {
-         question: "Can I play Skywars in my browser?",
-         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
-       }, {
-         question: "What are the best Skywars kits?",
- ... (15 more removed lines; see GitHub link above)
+       yawRadPerSec: 0,
+       pitchRadPerSec: 0
+     };
+     var QH = LH(41889),
+       WH = LH(9522),
+       MH = LH(40035);
+     const xH = HH => HH.padSneakToggled || !!SH.c.get("clientEscMenuOptions").crouchIsToggle && HH.crouchToggled,
+       vH = () => {
+         const HH = (() => {
+           const HH = (0, GH.d)();
+           let BH = uH;
+           const LH = new YH.b;
+           let AH = !1,
+             rH = 0;
+           const SH = () => {
+             const LH = performance.now(),
+ ... (590 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/176.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/176.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L4` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/176.js#L4-L19) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/176.js#L4)

```diff
-   9535: (UU, XU, zU) => {
+   9634: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => SH,
+       f: () => rH
+     });
+     let AH = !1;
+ 
+     function rH() {
+       AH = !0
+     }
+ 
+     function SH() {
+       return AH
+     }
+   },
+   9631: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L6` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/176.js#L21-L23) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/176.js#L6)

```diff
-       pageBody: () => cU
+       loadWasmPlay: () => GH,
+       loadWasmPlayAhead: () => YH,
+       loadWasmPreviews: () => uH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L8-L35` → after: `L25-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L25-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/176.js#L25-L61) · [Before (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/176.js#L8-L35)

```diff
-     const cU = {
-       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
-       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
-       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
-       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
-       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
-       faq: [{
-         question: "What is Lucky Towers?",
-         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
-       }, {
-         question: "How do you win in Bloxd Lucky Towers?",
-         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
-       }, {
-         question: "How often do you get items in Lucky Towers?",
-         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
-       }, {
- ... (12 more removed lines; see GitHub link above)
+     var AH = LH(3503),
+       rH = LH(2413),
+       SH = LH(2215),
+       hH = LH(5062),
+       tH = LH(3892),
+       zH = LH(9634);
+     let CH = null;
+ 
+     function EH() {
+       return Promise.all([LH.e(86), LH.e(89), LH.e(103), LH.e(234), LH.e(233), LH.e(150), LH.e(216), LH.e(243), LH.e(155), LH.e(101), LH.e(244), LH.e(75)]).then((() => LH(42e3)))
+     }
+ 
+     function XH() {
+       Promise.all([LH.e(84), LH.e(87), LH.e(85), LH.e(86), LH.e(103), LH.e(100), LH.e(300), LH.e(207), LH.e(250), LH.e(274), LH.e(244), LH.e(54)]).then((() => LH(42318))).catch((() => {}))
+     }
+ 
+ ... (21 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/177.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/177.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/177.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/177.js#L4)

```diff
-   9540: (UU, XU, zU) => {
+   9648: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/177.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/177.js#L9-L13)

```diff
-       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
-       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
-       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
-       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
-       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
+       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
+       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
+       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
+       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
+       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/177.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/177.js#L15-L16)

```diff
-         question: "What is Lucky Blocks Battlegrounds?",
-         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
+         question: "What is Bedwars?",
+         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/177.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/177.js#L18-L19)

```diff
-         question: "How do you win Lucky Blocks Battlegrounds?",
-         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
+         question: "How do you win Bedwars?",
+         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/177.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/177.js#L21-L22)

```diff
-         question: "How do I get Lucky Blocks?",
-         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
+         question: "What happens after your bed is destroyed?",
+         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
```
