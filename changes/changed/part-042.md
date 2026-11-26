# Changed — Bundle Modifications Report (Part 042 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `42 / 115` (**308** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 041](part-041.md) · [Part 043 →](part-043.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/613.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/613.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef)

#### 31. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L348-L393` → after: `L1008-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L1008-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/613.js#L1008-L1169) · [Before (L348-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/613.js#L348-L393)

```diff
-       static UploadDDSLevels(UU, XU, zU, cU, AU, oU) {
-         let DU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
-           aU = arguments.length > 7 ? arguments[7] : void 0,
-           tU = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
-           gU = null;
-         cU.sphericalPolynomial && (gU = []);
-         const kU = !!UU.getCaps().s3tc;
-         XU.generateMipMaps = AU;
-         const GU = new Int32Array(zU.buffer, zU.byteOffset, 31);
-         let BU, ZU, RU, PU, WU, dU, LU, eU = 0,
-           CU = 0,
-           wU = 1;
-         if (542327876 !== GU[0]) return void yU.b.Error("Invalid magic number in DDS header");
-         if (!cU.isFourCC && !cU.isRGB && !cU.isLuminance) return void yU.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
-         if (cU.isCompressed && !kU) return void yU.b.Error("Compressed textures are not supported on this platform.");
-         let qU = GU[22];
- ... (30 more removed lines; see GitHub link above)
+       await eH(BH), qH?.get(BH)?.() || (BH._runtimeBuilds?._e(), BH._renderableVersion++, BH._built = !0), await (BH._rebuildHook?.(BH))
+     }
+     var RH = null;
+     async function jH(HH) {
+       const BH = HH,
+         AH = BH.surface;
+       (0, rH.k)(AH, BH) || (await NH(HH), BH._renderables.sort(nH), await Promise.all(BH._frameGraph._tasks.map((HH => HH._preload?.()))), RH && await RH(BH), BH._frameGraph.build(), AH._renderingContexts[0] && (await LH.e(669).then((() => LH(64206)))).configureSwapchainOverlaySc … [truncated]
+     }
+     var nH = (HH, BH) => HH.order - BH.order
+   },
+   45174: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => CH,
+       g: () => EH
+     });
+     var AH = LH(45135),
+ ... (146 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L395-L448` → after: `L1171-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L1171-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/613.js#L1171-L1183) · [Before (L395-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/613.js#L395-L448)

```diff
-             if (UU) break
-           }
-           default:
-             return void yU.b.Error(["Unsupported FourCC code:", (SU = BU, String.fromCharCode(255 & SU, SU >> 8 & 255, SU >> 16 & 255, SU >> 24 & 255))])
-         }
-         var SU;
-         const rU = pU._ExtractLongWordOrder(GU[23]),
-           uU = pU._ExtractLongWordOrder(GU[24]),
-           fU = pU._ExtractLongWordOrder(GU[25]),
-           iU = pU._ExtractLongWordOrder(GU[26]);
-         OU && (CU = UU._getRGBABufferInternalSizedFormat(cU.textureType)), dU = 1, GU[2] & FU && !1 !== AU && (dU = Math.max(1, GU[7]));
-         const HU = aU || 0,
-           MU = UU.getCaps();
-         for (let yU = HU; yU < oU; yU++) {
-           for (ZU = GU[4], RU = GU[3], LU = 0; LU < dU; ++LU) {
-             if (-1 === DU || DU === LU) {
- ... (38 more removed lines; see GitHub link above)
+             const [tH, zH] = await Promise.all([xH.popErrorScope(), xH.popErrorScope()]);
+             if (LH) throw LH;
+             const CH = zH ?? tH;
+             if (CH) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${CH.message}`, {
+               cause: CH
+             });
+             const EH = MH.texture;
+             return EH && SH || (0, AH.c)(677), {
+               texture: EH,
+               view: EH.createView(),
+               sampler: SH,
+               width: XH,
+               height: GH
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L450` → after: `L1185-L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L1185-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/613.js#L1185-L1223) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/613.js#L450)

```diff
-             PU += qU ? ZU * RU * (qU / 8) : eU, ZU *= .5, RU *= .5, ZU = Math.max(1, ZU), RU = Math.max(1, RU)
+           }, bH = await (HH._dlr?.x(QH, XH, GH, vH, PH, UH, VH, uH, OH)) ?? await OH(QH);
+         return (0, SH.d)(bH), bH
+       } catch (xH) {
+         throw MH.texture?.destroy(), xH
+       } finally {
+         WH?.close()
+       }
+     }
+   },
+   45153: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       generateMipmaps: () => YH,
+       recordMipmaps: () => uH
+     });
+     var AH = LH(45138),
+       rH = LH(45147),
+ ... (23 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L452-L465` → after: `L1225-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L1225-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/613.js#L1225-L1305) · [Before (L452-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/613.js#L452-L465)

```diff
-           if (void 0 !== aU) break
-         }
-         gU && gU.length > 0 ? cU.sphericalPolynomial = QU.c.ConvertCubeMapToSphericalPolynomial({
-           size: GU[4],
-           right: gU[0],
-           left: gU[1],
-           up: gU[2],
-           down: gU[3],
-           front: gU[4],
-           back: gU[5],
-           format: 5,
-           type: 1,
-           gammaSpace: !1
-         }) : cU.sphericalPolynomial = void 0
+         }, {
+           binding: 1,
+           visibility: AH.h.FRAGMENT,
+           sampler: {}
+         }]
+       })
+     }
+ 
+     function YH(HH, BH, LH) {
+       const AH = HH._device,
+         rH = AH.createCommandEncoder();
+       uH(HH, BH, rH, LH), AH.queue.submit([rH.finish()])
+     }
+ 
+     function uH(HH, BH, LH, AH) {
+       if (BH.mipLevelCount <= 1) return;
+ ... (65 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L468` → after: `L1308-L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L1308-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/613.js#L1308-L1379) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/613.js#L468)

```diff
-     pU.StoreLODInAlphaChannel = !1
+   },
+   45157: (HH, BH, LH) => {
+     function AH(HH, BH) {
+       return Math.floor(Math.log2(Math.max(HH, BH))) + 1
+     }
+     LH.d(BH, {
+       b: () => AH
+     })
+   },
+   45132: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => CH,
+       e: () => EH
+     });
+     var AH = LH(45135),
+       rH = LH(45138),
+ ... (56 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/614.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/614.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/614.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/614.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/614.js#L4-L6)

```diff
-   44484: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       _ENVTextureLoader: () => dU
+   45226: (HH, BH, LH) => {
+     LH.d(BH, {
+       parseShaderPack: () => AH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/614.js` (Changed code · before: `L21-L36` → after: `L10-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9) · [After (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/614.js#L10-L15) · [Before (L21-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/614.js#L21-L36)

```diff
-       const XU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
-       let zU = 0;
-       for (let AU = 0; AU < IU.length; AU++)
-         if (XU.getUint8(zU++) !== IU[AU]) return EU.b.Error("Not a babylon environment map"), null;
-       let cU, yU = "";
-       for (; cU = XU.getUint8(zU++);) yU += String.fromCharCode(cU);
-       let QU = JSON.parse(yU);
-       return QU = aU(QU), QU.binaryDataPosition = zU, QU.specular && (QU.specular.lodGenerationScale = QU.specular.lodGenerationScale || .8), QU
-     }
- 
-     function aU(UU) {
-       if (UU.version > 2) throw new Error(`Unsupported babylon environment map version "${UU.version}". Latest supported version is "2".`);
-       return 2 === UU.version ? UU : UU = {
-         ...UU,
-         version: 2,
-         imageType: NU
+       var BH, LH;
+       const AH = HH.get("shaderPackUrl"),
+         rH = null !== (BH = HH.get("shaderPackMode")) && void 0 !== BH ? BH : "strict";
+       if (null === AH) {
+         if (HH.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
+         return null
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/614.js` (Changed code · before: `L38-L461` → after: `L17-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9) · [After (L17-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/614.js#L17-L25) · [Before (L38-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/614.js#L38-L461)

```diff
-     }
- 
-     function tU(UU, XU) {
-       const zU = (XU = aU(XU)).specular;
-       let cU = Math.log2(XU.width);
-       if (cU = Math.round(cU) + 1, zU.mipmaps.length !== 6 * cU) throw new Error(`Unsupported specular mipmaps number "${zU.mipmaps.length}"`);
-       const yU = new Array(cU);
-       for (let QU = 0; QU < cU; QU++) {
-         yU[QU] = new Array(6);
-         for (let cU = 0; cU < 6; cU++) {
-           const AU = zU.mipmaps[6 * QU + cU];
-           yU[QU][cU] = new Uint8Array(UU.buffer, UU.byteOffset + XU.binaryDataPosition + AU.position, AU.length)
-         }
-       }
-       return yU
-     }
- ... (408 more removed lines; see GitHub link above)
+       if ("lite" !== HH.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
+       if (! function(HH) {
+           return "strict" === HH || "allow" === HH
+         }(rH)) throw new Error(`Unknown shaderPackMode "${rH}" - use strict or allow`);
+       const SH = (null !== (LH = HH.get("variants")) && void 0 !== LH ? LH : "").split(",").find((HH => HH.trim().startsWith("liteShaderPack")));
+       if (void 0 !== SH) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${SH.trim()}`);
+       return {
+         url: AH,
+         mode: rH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/615.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/615.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/615.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/615.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/615.js#L4-L6)

```diff
-   44461: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       _IESTextureLoader: () => FU
+   45245: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => CH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/615.js` (Changed code · before: `L8` → after: `L8-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985a) · [After (L8-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/615.js#L8-L156) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/615.js#L8)

```diff
-     var cU = zU(37855);
+     var AH = LH(37963),
+       rH = LH(38002),
+       SH = LH(41275),
+       hH = LH(37972),
+       tH = LH(38074);
+     class zH {
+       constructor(HH, BH, LH, AH) {
+         this.name = HH, this.worldAxisForNormal = BH, this.worldAxisForFileX = LH, this.worldAxisForFileY = AH
+       }
+     }
+     class CH {
+       static _NearestPow2Floor(HH) {
+         return HH <= 1 ? 1 : 1 << Math.floor(Math.log2(HH))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(HH) {
+         if (!HH.isCube) return null;
+ ... (133 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/615.js` (Changed code · before: `L11` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985aR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985a) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/615.js#L159) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/615.js#L11)

```diff
-       return UU.split(" ").filter((UU => "" !== UU)).map((UU => parseFloat(UU)))
+       return HH.charCodeAt(0) + (HH.charCodeAt(1) << 8) + (HH.charCodeAt(2) << 16) + (HH.charCodeAt(3) << 24)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/615.js` (Changed code · before: `L13-L17` → after: `L161-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985aR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985a) · [After (L161-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/615.js#L161-L426) · [Before (L13-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/615.js#L13-L17)

```diff
- 
-     function QU(UU, XU, zU) {
-       for (; zU.length !== XU;) {
-         const XU = yU(UU.lines[UU.index++]);
-         zU.push(...XU)
+     const EH = CH("DXT1"),
+       XH = CH("DXT3"),
+       GH = CH("DXT5"),
+       YH = CH("DX10");
+     class uH {
+       static GetDDSInfo(HH) {
+         const BH = new Int32Array(HH.buffer, HH.byteOffset, 31),
+           LH = new Int32Array(HH.buffer, HH.byteOffset, 35);
+         let AH = 1;
+         BH[2] & tH && (AH = Math.max(1, BH[7]));
+         const rH = BH[21],
+           SH = rH === YH ? LH[32] : 0;
+         let hH = 0;
+         switch (rH) {
+           case 113:
+             hH = 2;
+ ... (250 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/615.js` (Changed code · before: `L20-L101` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985aR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985a) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/615.js#L429) · [Before (L20-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/615.js#L20-L101)

```diff
- 
-     function AU(UU, XU, zU) {
-       let yU = 0,
-         QU = 0,
-         AU = 0,
-         FU = 0,
-         oU = 0,
-         DU = 0;
-       for (let cU = 0; cU < UU.numberOfHorizontalAngles - 1; cU++)
-         if (zU < UU.horizontalAngles[cU + 1] || cU === UU.numberOfHorizontalAngles - 2) {
-           QU = cU, AU = UU.horizontalAngles[cU], FU = UU.horizontalAngles[cU + 1];
-           break
-         } for (let cU = 0; cU < UU.numberOfVerticalAngles - 1; cU++)
-         if (XU < UU.verticalAngles[cU + 1] || cU === UU.numberOfVerticalAngles - 2) {
-           yU = cU, oU = UU.verticalAngles[cU], DU = UU.verticalAngles[cU + 1];
-           break
- ... (66 more removed lines; see GitHub link above)
+     uH.StoreLODInAlphaChannel = !1
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/616.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/616.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/616.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/616.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/616.js#L2)

```diff
- export const ids = [616];
+ export const ids = [615, 616];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/616.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/616.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/616.js#L4)

```diff
-   44477: (UU, XU, zU) => {
+   45254: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/616.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/616.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/616.js#L6)

```diff
-       _BasisTextureLoader: () => kU
+       _DDSTextureLoader: () => SH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/616.js` (Changed code · before: `L8-L202` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12d) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/616.js#L8-L18) · [Before (L8-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/616.js#L8-L202)

```diff
-     var cU, yU = zU(41205),
-       QU = zU(39493),
-       AU = zU(41557),
-       FU = zU(40940);
- 
-     function oU() {
-       const UU = 0,
-         XU = 1,
-         zU = 2,
-         cU = 3,
-         yU = 6,
-         QU = 8,
-         AU = 9,
-         FU = 10,
-         oU = 14;
-       let DU = null;
- ... (179 more removed lines; see GitHub link above)
+     var AH = LH(41275),
+       rH = LH(45241);
+     class SH {
+       constructor() {
+         this.supportCascades = !0
+       }
+       loadCubeData(HH, BH, LH, SH) {
+         const hH = BH.Iu();
+         let tH, zH = !1,
+           CH = 1e3;
+         if (Array.isArray(HH))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/616.js` (Changed code · before: `L205-L213` → after: `L21-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12d) · [After (L21-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/616.js#L21-L212) · [Before (L205-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/616.js#L205-L213)

```diff
-             zU._uploadCompressedDataToTextureDirectly(UU, cU, QU.width, QU.height, QU.transcodedPixels, yU, XU)
-           }!zU._features.basisNeedsPOT || Math.log2(UU.width) % 1 === 0 && Math.log2(UU.height) % 1 === 0 || (QU.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with  … [truncated]
-         }
-       }
-     }, gU = {
-       JSModuleURL: DU.JSModuleURL,
-       WasmModuleURL: DU.WasmModuleURL,
-       GetInternalFormatFromBasisFormat: (UU, XU) => {
-         let zU;
+             tH = rH.DDSTools.GetDDSInfo(LH), BH.width = tH.width, BH.height = tH.height, zH = (tH.isRGB || tH.isLuminance || tH.mipmapCount > 1) && BH.generateMipMaps, hH._unpackFlipY(tH.isCompressed), rH.DDSTools.UploadDDSLevels(hH, BH, LH, tH, zH, 6, -1, AH), tH.isFourCC || 1 ! … [truncated]
+           } else {
+             const SH = HH;
+             tH = rH.DDSTools.GetDDSInfo(SH), BH.width = tH.width, BH.height = tH.height, LH && (tH.sphericalPolynomial = new AH.g), zH = (tH.isRGB || tH.isLuminance || tH.mipmapCount > 1) && BH.generateMipMaps, hH._unpackFlipY(tH.isCompressed), rH.DDSTools.UploadDDSLevels(hH, BH, … [truncated]
+           }
+         hH._setCubeMapTextureParams(BH, zH, CH), BH.isReady = !0, BH.onLoadedObservable.notifyObservers(BH), BH.onLoadedObservable.clear(), SH && SH({
+           isDDS: !0,
+           width: BH.width,
+           info: tH,
+           data: HH,
+           texture: BH
+         })
+       }
+       loadData(HH, BH, LH) {
+         const AH = rH.DDSTools.GetDDSInfo(HH),
+           SH = (AH.isRGB || AH.isLuminance || AH.mipmapCount > 1) && BH.generateMipMaps && Math.max(AH.width, AH.height) >> AH.mipmapCount - 1 === 1;
+ ... (176 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/616.js` (Changed code · before: `L215-L283` → after: `L214-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12dR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12d) · [After (L214-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/616.js#L214-L465) · [Before (L215-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/616.js#L215-L283)

```diff
-           case cU.cTFETC1:
-             zU = 36196;
-             break;
-           case cU.cTFBC1:
-             zU = 33776;
-             break;
-           case cU.cTFBC4:
-             zU = 33779;
-             break;
-           case cU.cTFASTC_4x4:
-             zU = 37808;
-             break;
-           case cU.cTFETC2:
-             zU = 37496;
-             break;
-           case cU.cTFBC7:
- ... (53 more removed lines; see GitHub link above)
+           case 113:
+             hH = 2;
+             break;
+           case 116:
+             hH = 1;
+             break;
+           case YH:
+             if (10 === SH) {
+               hH = 2;
+               break
+             }
+             if (2 === SH) {
+               hH = 1;
+               break
+             }
+         }
+ ... (236 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/617.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/617.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56)

#### 1. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L4-L6)

```diff
-   44516: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => gU
+   45261: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       _ENVTextureLoader: () => bH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L8-L40` → after: `L8-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L8-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L8-L36) · [Before (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L8-L40)

```diff
-     var cU = zU(37846),
-       yU = zU(37819),
-       QU = zU(41557),
-       AU = zU(41244),
-       FU = zU(41036),
-       oU = zU(39493),
-       DU = zU(41228),
-       EU = zU(41251),
-       YU = zU(37827),
-       NU = zU(40999),
-       IU = zU(41210),
-       pU = zU(41293);
-     class aU {
-       get renderList() {
-         return this._renderList
-       }
- ... (17 more removed lines; see GitHub link above)
+     var AH = LH(41222),
+       rH = LH(37963),
+       SH = LH(38002),
+       hH = LH(41275),
+       tH = LH(41122),
+       zH = LH(41283),
+       CH = (LH(41383), LH(45266)),
+       EH = LH(39595),
+       XH = (LH(45276), LH(45299), LH(41356));
+     const GH = "image/png",
+       YH = [134, 22, 135, 150, 246, 214, 150, 54];
+ 
+     function uH(HH) {
+       const BH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength);
+       let LH = 0;
+       for (let hH = 0; hH < YH.length; hH++)
+ ... (13 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L42-L50` → after: `L38-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L38-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L38-L49) · [Before (L42-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L42-L50)

```diff
-       set name(UU) {
-         if (this._name !== UU) {
-           if (this._name = UU, this._sceneUBOs)
-             for (let UU = 0; UU < this._sceneUBOs.length; ++UU) this._sceneUBOs[UU].name = `Scene ubo #${UU} for ${this.name}`;
-           if (this._scene)
-             for (let UU = 0; UU < this._renderPassIds.length; ++UU) {
-               const XU = this._renderPassIds[UU];
-               this._engine._renderPassNames[XU] = `${this._name}#${UU}`
-             }
+     }
+ 
+     function WH(HH, BH) {
+       const LH = (BH = QH(BH)).specular;
+       let AH = Math.log2(BH.width);
+       if (AH = Math.round(AH) + 1, LH.mipmaps.length !== 6 * AH) throw new Error(`Unsupported specular mipmaps number "${LH.mipmaps.length}"`);
+       const rH = new Array(AH);
+       for (let SH = 0; SH < AH; SH++) {
+         rH[SH] = new Array(6);
+         for (let AH = 0; AH < 6; AH++) {
+           const hH = LH.mipmaps[6 * SH + AH];
+           rH[SH][AH] = new Uint8Array(HH.buffer, HH.byteOffset + BH.binaryDataPosition + hH.position, hH.length)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L53-L159` → after: `L52-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L52-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L52-L63) · [Before (L53-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L53-L159)

```diff
-       get renderPassIds() {
-         return this._renderPassIds
-       }
-       get currentRefreshId() {
-         return this._currentRefreshId
-       }
-       getActiveMeshes() {
-         return this._activeMeshes
-       }
-       setMaterialForRendering(UU, XU) {
-         let zU;
-         zU = Array.isArray(UU) ? UU : [UU];
-         for (let cU = 0; cU < zU.length; ++cU)
-           for (let UU = 0; UU < this.options.numPasses; ++UU) {
-             let yU = zU[cU];
-             zU[cU].UH && (yU = zU[cU].KyU), yU.setMaterialForRenderPass(this._renderPassIds[UU], void 0 !== XU ? Array.isArray(XU) ? XU[UU] : XU : void 0)
- ... (91 more removed lines; see GitHub link above)
+       return rH
+     }
+ 
+     function MH(HH, BH) {
+       BH = QH(BH);
+       const LH = new Array(6),
+         AH = BH.irradiance?.irradianceTexture;
+       if (AH) {
+         if (6 !== AH.faces.length) throw new Error(`Incorrect irradiance texture faces number "${AH.faces.length}"`);
+         for (let rH = 0; rH < 6; rH++) {
+           const SH = AH.faces[rH];
+           LH[rH] = new Uint8Array(HH.buffer, HH.byteOffset + BH.binaryDataPosition + SH.position, SH.length)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L171-L183` → after: `L66-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L66-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L66-L80) · [Before (L171-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L171-L183)

```diff
-       render() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const zU = this._engine.currentRenderPassId;
-         this._engine.currentRenderPassId = this._renderPassIds[UU], this.onBeforeRenderObservable.notifyObservers(UU);
-         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(UU);
-         else {
-           const XU = this._prepareRenderingManager(UU),
-             zU = this._scene.getOutlineRenderer?.(),
-             cU = zU?.enabled;
-           zU && (zU.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(UU), this._renderingManager.render(this.customRenderFunction, XU, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshe … [truncated]
-         }
-         XU || this.onAfterRenderObservable.notifyObservers(UU), this._engine.currentRenderPassId = zU
+       return LH
+     }
+ 
+     function xH(HH, BH, LH) {
+       const AH = (LH = QH(LH)).specular;
+       if (!AH) return Promise.resolve([]);
+       HH._lodGenerationScale = AH.lodGenerationScale;
+       const SH = [],
+         hH = WH(BH, LH);
+       SH.push(PH(HH, hH, LH.imageType));
+       const tH = LH.irradiance?.irradianceTexture;
+       if (tH) {
+         const AH = MH(BH, LH);
+         let hH = null;
+         LH.irradiance?.irradianceTexture?.dominantDirection && (hH = rH.o.FromArray(LH.irradiance.irradianceTexture.dominantDirection)), SH.push(TH(HH, AH, tH.size, LH.imageType, hH))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L185-L198` → after: `L82-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L82-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L82-L98) · [Before (L185-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L185-L198)

```diff
-       _checkReadiness() {
-         const UU = this._scene,
-           XU = this._engine.currentRenderPassId;
-         let zU = !0;
-         UU.getViewMatrix() || UU.updateTransformMatrix();
-         const cU = this.options.numPasses;
-         for (let yU = 0; yU < cU && zU; yU++) {
-           const XU = this.renderList ? this.renderList : UU.frameGraph ? UU.meshes : UU.getActiveMeshes().data,
-             QU = this.renderList || UU.frameGraph ? XU.length : UU.getActiveMeshes().length;
-           this._engine.currentRenderPassId = this._renderPassIds[yU], this.onBeforeRenderObservable.notifyObservers(yU);
-           let AU = null,
-             FU = QU;
-           this.getCustomRenderList && (AU = this.getCustomRenderList(yU, XU, QU), AU && (FU = AU.length)), AU || (AU = XU), this.options.doNotChangeAspectRatio || UU.updateTransformMatrix(!0);
-           for (let UU = 0; UU < FU && zU; ++UU) {
+       return Promise.all(SH)
+     }
+     async function vH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
+       return await new Promise(((XH, GH) => {
+         if (LH) {
+           const LH = BH.createTexture(null, !0, !0, null, 1, null, (HH => {
+             GH(HH)
+           }), HH);
+           AH?.onEffectCreatedObservable.addOnce((tH => {
+             tH.executeWhenCompiled((() => {
+               AH.externalTextureSamplerBinding = !0, AH.onApply = AH => {
+                 AH._bindTexture("textureSampler", LH), AH.setFloat2("scale", 1, BH._features.needsInvertingBitmap && HH instanceof ImageBitmap ? -1 : 1)
+               }, BH.scenes.length && (BH.scenes[0].postProcessManager.directRender([AH], CH, !0, SH, hH), BH.restoreDefaultFramebuffer(), LH.dispose(), URL.revokeObjectURL(rH), XH())
+             }))
+           }))
+         } else {
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L200-L220` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L100) · [Before (L200-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L200-L220)

```diff
-             if (!XU.isEnabled() || XU.isBlocked || !XU.isVisible || !XU.uB) continue;
-             if (this.customIsReadyFunction) {
-               if (!this.customIsReadyFunction(XU, this.refreshRate, !0)) {
-                 zU = !1;
-                 continue
-               }
-             } else if (!XU.isReady(!0)) {
-               zU = !1;
-               continue
-             }
-             let cU = XU._edgesRenderer,
-               yU = XU.hasThinInstances;
-             if (XU.UH) {
-               const UU = XU.KyU;
-               UU.edgesShareWithInstances && UU._edgesRenderer?.isEnabled && (cU = UU._edgesRenderer, yU = !0)
-             } else XU.jyU && XU.edgesShareWithInstances && (yU = !0);
- ... (5 more removed lines; see GitHub link above)
+             LH && BH._uploadImageToTexture(LH._texture, HH, SH, 0)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L222-L241` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L102) · [Before (L222-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L222-L241)

```diff
-           if (this.renderSprites && UU.spritesEnabled) {
-             const XU = this.spriteManagerList || UU.spriteManagers;
-             if (XU)
-               for (const cU of XU) UU.activeCamera && 0 === (cU.layerMask & UU.activeCamera.layerMask) || cU.isReady && !cU.isReady() && (zU = !1)
-           }
-           this.onAfterRenderObservable.notifyObservers(yU), cU > 1 && (UU.incrementRenderId(), UU.resetCachedMaterial())
-         }
-         return this._engine.currentRenderPassId = XU, zU
-       }
-       _prepareRenderingManager() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const zU = this._scene;
-         let cU, yU, QU = null;
-         const AU = this.renderList ? this.renderList : zU.frameGraph ? zU.meshes : zU.getActiveMeshes().data,
-           FU = this.renderList || zU.frameGraph ? AU.length : zU.getActiveMeshes().length;
- ... (4 more removed lines; see GitHub link above)
+           XH()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L243-L252` → after: `L104-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L104-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L104-L160) · [Before (L243-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L243-L252)

```diff
-         const oU = zU.activeCamera,
-           DU = this.cameraForLOD ?? oU,
-           EU = zU.getBoundingBoxRenderer?.();
-         if (zU._activeMeshesFrozen && this._isFrozen) {
-           if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && EU) {
-             EU.reset();
-             for (let UU = 0; UU < this._activeBoundingBoxes.length; UU++) {
-               const XU = this._activeBoundingBoxes.data[UU];
-               EU.renderList.push(XU)
-             }
+       }))
+     }
+     async function PH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GH;
+       const AH = HH.Iu();
+       HH.format = 5, HH.type = 0, HH.generateMipMaps = !0, HH._cachedAnisotropicFilteringLevel = null, AH.updateTextureSamplingMode(3, HH), await UH(HH, BH, !0, LH), HH.isReady = !0
+     }
+     async function TH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GH,
+         rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+       const SH = HH.Iu(),
+         hH = new tH.e(SH, 5),
+         CH = new zH.e(SH, hH);
+       HH._irradianceTexture = CH, CH._dominantDirection = rH, hH.isCube = !0, hH.format = 5, hH.type = 0, hH.generateMipMaps = !0, hH._cachedAnisotropicFilteringLevel = null, hH.generateMipMaps = !0, hH.width = LH, hH.height = LH, SH.updateTextureSamplingMode(3, hH), await UH(hH, … [truncated]
+     }
+     async function UH(HH, BH, rH) {
+ ... (41 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L256-L285` → after: `L163-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L163-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L163-L186) · [Before (L256-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L256-L285)

```diff
-         if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), EU && EU.reset(), this.renderMeshes) {
-           const UU = zU.getRenderId(),
-             XU = zU.getFrameId();
-           for (let AU = 0; AU < cU; AU++) {
-             const cU = QU[AU];
-             if (cU && !cU.isBlocked) {
-               if (this.customIsReadyFunction) {
-                 if (!this.customIsReadyFunction(cU, this.refreshRate, !1)) {
-                   this.resetRefreshCounter();
-                   continue
-                 }
-               } else if (!cU.isReady(0 === this.refreshRate)) {
-                 this.resetRefreshCounter();
-                 continue
-               }
-               let QU, AU;
- ... (14 more removed lines; see GitHub link above)
+       }
+       const UH = [];
+       for (let LH = 0; LH < BH.length; LH++)
+         for (let AH = 0; AH < 6; AH++) {
+           const rH = BH[LH][AH],
+             SH = (0, XH.m)(rH),
+             tH = new Blob([SH], {
+               type: hH
+             }),
+             zH = URL.createObjectURL(tH);
+           let CH;
+           if (YH._features.forceBitmapOverHTMLImageElement) CH = YH.createImageBitmap(tH, {
+             premultiplyAlpha: "none",
+             colorSpaceConversion: "none"
+           }).then((async BH => await vH(BH, YH, uH, WH, zH, AH, LH, QH, xH, MH, HH)));
+           else {
+ ... (8 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L287-L301` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L188) · [Before (L287-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L287-L301)

```diff
-             }
-           }
-         }
-         if (this.enableBoundingBoxRendering && EU && XU)
-           for (let YU = 0; YU < EU.renderList.length; YU++) {
-             const UU = EU.renderList.data[YU];
-             this._activeBoundingBoxes.push(UU)
-           }
-         if (this._scene.particlesEnabled && this.renderParticles) {
-           this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
-           const UU = this.particleSystemList || zU.nB;
-           for (let XU = 0; XU < UU.length; XU++) {
-             const zU = UU[XU],
-               cU = zU.emitter;
-             zU.isStarted() && cU && (!cU.position || cU.isEnabled()) && this._renderingManager.dispatchParticles(zU)
+             }))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L303` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L190) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L303)

```diff
-           this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
+           UH.push(CH)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L305-L330` → after: `L192-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L192-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L192-L204) · [Before (L305-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L305-L330)

```diff
-         return QU
-       }
-       get renderingManager() {
-         return this._renderingManager
-       }
-       setRenderingOrder(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         this._renderingManager.setRenderingOrder(UU, XU, zU, cU)
-       }
-       setRenderingAutoClearDepthStencil(UU, XU) {
-         let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-           cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         this._renderingManager.setRenderingAutoClearDepthStencil(UU, XU, zU, cU), this._renderingManager._useSceneAutoClearSetup = !1
-       }
- ... (10 more removed lines; see GitHub link above)
+       if (await Promise.all(UH), BH.length < EH) {
+         let LH;
+         const AH = Math.pow(2, EH - 1 - BH.length),
+           rH = AH * AH * 4;
+         switch (HH.type) {
+           case 0:
+             LH = new Uint8Array(rH);
+             break;
+           case 2:
+             LH = new Uint16Array(rH);
+             break;
+           case 1:
+             LH = new Float32Array(rH)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L332-L337` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L206-L207) · [Before (L332-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L332-L337)

```diff
-         if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(),  … [truncated]
-           for (const zU of this._sceneUBOs) zU.dispose();
-         this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
-       }
-       _rebuild() {
-         this.refreshRate === aU.REFRESHRATE_RENDER_ONCE && (this.refreshRate = aU.REFRESHRATE_RENDER_ONCE)
+         for (let SH = BH.length; SH < EH; SH++)
+           for (let BH = 0; BH < 6; BH++) YH._uploadArrayBufferViewToTexture(MH?.texture || HH, LH, BH, SH)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L339-L340` → after: `L209-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L209-L211) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L339-L340)

```diff
-       freeRenderingGroups() {
-         this._renderingManager && this._renderingManager.freeRenderingGroups()
+       if (MH) {
+         const BH = HH._irradianceTexture;
+         HH._irradianceTexture = null, YH._releaseTexture(HH), MH._swapAndDie(HH), HH._irradianceTexture = BH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L343-L742` → after: `L215-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L215-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L215-L220) · [Before (L343-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L343-L742)

```diff
-     aU.REFRESHRATE_RENDER_ONCE = 0, aU.REFRESHRATE_RENDER_ONEVERYFRAME = 1, aU.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
-     var tU = zU(40989);
-     class gU extends QU.e {
-       get renderListPredicate() {
-         return this._objectRenderer.renderListPredicate
-       }
-       set renderListPredicate(UU) {
-         this._objectRenderer.renderListPredicate = UU
-       }
-       get renderList() {
-         return this._objectRenderer.renderList
-       }
-       set renderList(UU) {
-         this._objectRenderer.renderList = UU
-       }
-       get particleSystemList() {
- ... (384 more removed lines; see GitHub link above)
+ 
+     function VH(HH, BH) {
+       const LH = (BH = QH(BH)).irradiance;
+       if (!LH) return;
+       const AH = new hH.g;
+       rH.o.FromArrayToRef(LH.x, 0, AH.x), rH.o.FromArrayToRef(LH.y, 0, AH.y), rH.o.FromArrayToRef(LH.z, 0, AH.z), rH.o.FromArrayToRef(LH.xx, 0, AH.xx), rH.o.FromArrayToRef(LH.yy, 0, AH.yy), rH.o.FromArrayToRef(LH.zz, 0, AH.zz), rH.o.FromArrayToRef(LH.yz, 0, AH.yz), rH.o.FromArray … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L744-L760` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L222) · [Before (L744-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L744-L760)

```diff
-     gU.REFRESHRATE_RENDER_ONCE = aU.REFRESHRATE_RENDER_ONCE, gU.REFRESHRATE_RENDER_ONEVERYFRAME = aU.REFRESHRATE_RENDER_ONEVERYFRAME, gU.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = aU.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
-     Object.getOwnPropertyDescriptor(gU.prototype, "noPrePassRenderer") || Object.defineProperty(gU.prototype, "noPrePassRenderer", (0, tU.i)("RenderTargetTexture", "noPrePassRenderer"))
-   },
-   44501: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => DU,
-       g: () => EU
-     });
-     var cU = zU(41237),
-       yU = zU(38845),
-       QU = zU(37846),
-       AU = zU(40954),
-       FU = zU(41395);
-     const oU = {
-       positions: [1, 1, -1, 1, -1, -1, 1, -1],
-       indices: [0, 1, 2, 0, 2, 3]
- ... (1 more removed lines; see GitHub link above)
+     var OH = LH(45301);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L762-L772` → after: `L224-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L224-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L224-L239) · [Before (L762-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L762-L772)

```diff
-       constructor(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oU;
-         this._fullscreenViewport = new yU.d(0, 0, 1, 1);
-         const zU = XU.positions ?? oU.positions,
-           QU = XU.indices ?? oU.indices;
-         this.engine = UU, this._vertexBuffers = {
-           [cU.h.PositionKind]: new cU.h(UU, zU, cU.h.PositionKind, !1, !1, 2)
-         }, this._indexBuffer = UU.createIndexBuffer(QU), this._indexBufferLength = QU.length, this._onContextRestoredObserver = UU.wp.add((() => {
-           this._indexBuffer = UU.createIndexBuffer(QU);
-           for (const UU in this._vertexBuffers) {
-             this._vertexBuffers[UU]._rebuild()
+       constructor() {
+         this.supportCascades = !1
+       }
+       loadCubeData(HH, BH, LH, AH, rH) {
+         if (Array.isArray(HH)) return;
+         const SH = uH(HH);
+         if (SH) {
+           BH.width = SH.width, BH.height = SH.width;
+           try {
+             (0, OH.e)(), VH(BH, SH), xH(BH, HH, SH).then((() => {
+               BH.isReady = !0, BH.onLoadedObservable.notifyObservers(BH), BH.onLoadedObservable.clear(), AH && AH()
+             }), (HH => {
+               rH?.("Can not upload environment levels", HH)
+             }))
+           } catch (hH) {
+             rH?.("Can not upload environment file", hH)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L774-L786` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L241) · [Before (L774-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L774-L786)

```diff
-         }))
-       }
-       setViewport() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
-         this.engine.setViewport(UU)
-       }
-       bindBuffers(UU) {
-         this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, UU)
-       }
-       applyEffectWrapper(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this.engine.setState(!0), this.engine.depthCullingState.depthTest = XU, this.engine.stencilState.stencilTest = zU, this.engine.enableEffect(UU.drawWrapper), this.bindBuffers(UU.effect), UU.onApplyObservable.notifyObservers({})
+         } else rH && rH("Can not parse the environment file", null)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L788-L809` → after: `L243-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L243-L244) · [Before (L788-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L788-L809)

```diff
-       saveStates() {
-         this._savedStateDepthTest = this.engine.depthCullingState.depthTest, this._savedStateStencilTest = this.engine.stencilState.stencilTest
-       }
-       restoreStates() {
-         this.engine.depthCullingState.depthTest = this._savedStateDepthTest, this.engine.stencilState.stencilTest = this._savedStateStencilTest
-       }
-       draw() {
-         this.engine.drawElementsType(0, 0, this._indexBufferLength)
-       }
-       _isRenderTargetTexture(UU) {
-         return void 0 !== UU.renderTarget
-       }
-       render(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         if (!UU.effect.isReady()) return;
-         this.saveStates(), this.setViewport();
- ... (6 more removed lines; see GitHub link above)
+       loadData() {
+         throw ".env not supported in 2d."
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L936-L944` → after: `L248-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L248-L250) · [Before (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L936-L944)

```diff
-   44529: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       Dispose: () => kU,
-       DumpData: () => gU,
-       DumpDataAsync: () => tU,
-       DumpFramebuffer: () => aU,
-       DumpTools: () => GU,
-       EncodeImageAsync: () => pU,
-       RegisterDumpTools: () => ZU
+   45301: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L946-L1076` → after: `L252-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L252-L253) · [Before (L946-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L946-L1076)

```diff
-     var cU = zU(41113),
-       yU = zU(44501),
-       QU = zU(41205),
-       AU = zU(37855),
-       FU = zU(37841),
-       oU = zU(39493),
-       DU = zU(41171),
-       EU = zU(41121);
-     let YU = null;
-     async function NU() {
-       return YU || (YU = async function() {
-         const UU = FU.b.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
-         UU instanceof OffscreenCanvas && oU.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
-         const {
-           ThinEngine: XU
-         } = await Promise.resolve().then((() => zU(40948)));
- ... (115 more removed lines; see GitHub link above)
+     var AH = LH(45245),
+       rH = LH(41283);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1080-L1082` → after: `L257-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L257-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L257-L274) · [Before (L1080-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1080-L1082)

```diff
-       if (BU) return;
-       BU = !0;
-       QU.j.DumpData = gU, QU.j.DumpDataAsync = tU, QU.j.DumpFramebuffer = aU
+       SH || (SH = !0, rH.e.prototype._sphericalPolynomialTargetSize = 0, rH.e.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(rH.e.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = AH.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = HH, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+           }
+           return null
+         },
+         set: function(HH) {
+           this._texture && (this._texture._sphericalPolynomial = HH)
+         },
+         enumerable: !0,
+ ... (2 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1085` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L277) · [Before (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1085)

```diff
-   44509: (UU, XU, zU) => {
+   45245: (HH, BH, LH) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1087-L1089` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L279) · [Before (L1087-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1087-L1089)

```diff
-       c: () => IU,
-       f: () => pU,
-       h: () => aU
+       e: () => CH
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1091-L1120` → after: `L281-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L281-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L281-L288) · [Before (L1091-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1091-L1120)

```diff
-     var cU = zU(41557),
-       yU = zU(44516),
-       QU = zU(41113),
-       AU = zU(44492),
-       FU = zU(41134),
-       oU = zU(44524),
-       DU = zU(41121);
-     class EU extends AU.c {
-       getClassName() {
-         return "PassPostProcess"
-       }
-       constructor(UU, XU) {
-         let zU = arguments.length > 4 ? arguments[4] : void 0;
-         const cU = {
-           size: "number" === typeof XU ? XU : void 0,
-           camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
- ... (14 more removed lines; see GitHub link above)
+     var AH = LH(37963),
+       rH = LH(38002),
+       SH = LH(41275),
+       hH = LH(37972),
+       tH = LH(38074);
+     class zH {
+       constructor(HH, BH, LH, AH) {
+         this.name = HH, this.worldAxisForNormal = BH, this.worldAxisForFileX = LH, this.worldAxisForFileY = AH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1122-L1199` → after: `L290-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L290-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L290-L332) · [Before (L1122-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1122-L1199)

```diff
-     }(() => {
-       var UU;
-       let XU, zU = AU.c,
-         cU = [];
-       UU = class extends zU {
-         get face() {
-           return this._effectWrapper.face
-         }
-         set face(UU) {
-           this._effectWrapper.face = UU
-         }
-         getClassName() {
-           return "PassCubePostProcess"
-         }
-         constructor(UU, XU) {
-           let zU = arguments.length > 4 ? arguments[4] : void 0;
- ... (62 more removed lines; see GitHub link above)
+     }
+     class CH {
+       static _NearestPow2Floor(HH) {
+         return HH <= 1 ? 1 : 1 << Math.floor(Math.log2(HH))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(HH) {
+         if (!HH.isCube) return null;
+         HH.yN()?.Iu().flushFramebuffer();
+         const BH = HH.getSize().width,
+           LH = HH._sphericalPolynomialTargetSize,
+           AH = LH > 0 ? this._NearestPow2Floor(LH) : 0,
+           rH = !HH.noMipmap && !0 === HH._texture?.generateMipMaps,
+           SH = AH > 0 && AH < BH && rH,
+           hH = SH ? Math.max(0, Math.round(Math.log2(BH / AH))) : 0,
+           tH = SH ? Math.max(1, Math.floor(BH / Math.pow(2, hH))) : BH,
+           zH = HH.readPixels(0, hH, void 0, !1),
+ ... (27 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1202-L1329` → after: `L335-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L335-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L335-L356) · [Before (L1202-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1202-L1329)

```diff
-       }))
-     }
-     async function pU(UU, XU, QU) {
-       let FU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         oU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
-         DU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         EU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-       await async function(UU) {
-         if (UU.isReady()) return;
-         if (UU.loadingError) throw new Error(UU.errorObject?.message || `Texture ${UU.name} errored while loading.`);
-         const XU = UU.onLoadObservable;
-         if (XU) return await new Promise((UU => XU.addOnce((() => UU()))));
-         const zU = UU._texture?.onLoadedObservable;
-         if (zU) return await new Promise((UU => zU.addOnce((() => UU()))));
-         throw new Error(`Cannot determine readiness of texture ${UU.name}.`)
-       }(UU);
- ... (112 more removed lines; see GitHub link above)
+       }
+       static _AreaElement(HH, BH) {
+         return Math.atan2(HH * BH, Math.sqrt(HH * HH + BH * BH + 1))
+       }
+       static _DownsampleFace(HH, BH, LH, AH) {
+         const rH = HH instanceof Float32Array ? HH : Float32Array.from(HH),
+           SH = LH * LH * AH,
+           hH = new Float32Array(SH),
+           tH = BH / LH,
+           zH = 1 / (tH * tH);
+         for (let EH = 0; EH < LH; EH++) {
+           const HH = Math.floor(EH * tH),
+             SH = Math.floor((EH + 1) * tH);
+           for (let CH = 0; CH < LH; CH++) {
+             const XH = Math.floor(CH * tH),
+               GH = Math.floor((CH + 1) * tH),
+ ... (6 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1346` → after: `L360-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L360-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L360-L363) · [Before (L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1346)

```diff
-         kU = UU
+         if (HH instanceof Float32Array) return hH;
+         const CH = new(0, HH.constructor)(SH);
+         for (let EH = 0; EH < SH; EH++) CH[EH] = hH[EH] + .5 | 0;
+         return CH
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1348-L1358` → after: `L365-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L365-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L365-L409) · [Before (L1348-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1348-L1358)

```diff
-       const GU = tU * gU,
-         BU = 4 * GU;
-       if (kU.length !== BU) {
-         const UU = 0 === GU ? 0 : kU.length / GU;
-         if (1 === UU || 2 === UU || 3 === UU) {
-           const XU = new Uint8Array(BU);
-           for (let zU = 0, cU = 0, yU = 0; zU < GU; zU++, yU += 4) {
-             const zU = kU[cU++];
-             if (1 === UU) {
-               XU[yU] = zU, XU[yU + 1] = zU, XU[yU + 2] = zU, XU[yU + 3] = 255;
-               continue
+       static ConvertCubeMapToSphericalPolynomial(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const LH = BH > 0 ? this._NearestPow2Floor(BH) : 0;
+         if (LH > 0 && HH.size > LH) {
+           const BH = 5 === HH.format ? 4 : 3,
+             AH = ["right", "left", "up", "down", "front", "back"],
+             rH = {};
+           for (const SH of AH) rH[SH] = this._DownsampleFace(HH[SH], HH.size, LH, BH);
+           HH = {
+             ...HH,
+             ...rH,
+             size: LH
+           }
+         }
+         const AH = new SH.e;
+         let zH = 0;
+ ... (29 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1360-L1361` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L411) · [Before (L1360-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1360-L1361)

```diff
-             const QU = kU[cU++];
-             2 !== UU ? (XU[yU] = zU, XU[yU + 1] = QU, XU[yU + 2] = kU[cU++], XU[yU + 3] = 255) : (XU[yU] = zU, XU[yU + 1] = QU, XU[yU + 2] = 0, XU[yU + 3] = 255)
+             YH += EH
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1395` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L420) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1395)

```diff
-   44492: (UU, XU, zU) => {
+   45276: (HH, BH, LH) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1399-L1468` → after: `L424-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L424-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L424-L453) · [Before (L1399-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1399-L1468)

```diff
-     var cU = zU(41113),
-       yU = zU(41210),
-       QU = zU(37846),
-       AU = zU(37819),
-       FU = zU(40954),
-       oU = zU(41121),
-       DU = zU(41134),
-       EU = zU(37863),
-       YU = zU(41003),
-       NU = zU(41036),
-       IU = zU(44501);
-     let pU = (() => {
-         var UU;
-         let XU, FU, YU, pU, aU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU = [],
-           wU = [],
-           qU = [],
- ... (54 more removed lines; see GitHub link above)
+     var AH = LH(45266),
+       rH = LH(45285);
+     class SH {
+       static ExpandRGBDTexture(HH) {
+         const BH = HH._texture;
+         if (!BH || !HH.isRGBD) return;
+         const rH = BH.Iu(),
+           SH = rH.getCaps(),
+           hH = BH.isReady;
+         let tH = !1;
+         SH.textureHalfFloatRender && SH.textureHalfFloatLinearFiltering ? (tH = !0, BH.type = 2) : SH.textureFloatRender && SH.textureFloatLinearFiltering && (tH = !0, BH.type = 1), tH && (BH.isReady = !1, BH._isRGBD = !1, BH.invertY = !1);
+         const zH = async () => {
+           const SH = rH.isWebGPU,
+             hH = SH ? 1 : 0;
+           BH.isReady = !1, SH ? await LH.e(651).then((() => LH(64229))) : await LH.e(633).then((() => LH(64238)));
+           const tH = new AH.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, rH, !1, void 0, BH.type, void 0, null, !1, void 0, hH);
+ ... (14 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1470-L1974` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L455) · [Before (L1470-L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1470-L1974)

```diff
-           }
-           get shaderLanguage() {
-             return this._shaderLanguage
-           }
-           getEffectName() {
-             return this._fragmentUrl
-           }
-           set onActivate(UU) {
-             this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), UU && (this._onActivateObserver = this.onActivateObservable.add(UU))
-           }
-           set onSizeChanged(UU) {
-             this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(UU)
-           }
-           set onApply(UU) {
-             this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(UU)
-           }
- ... (489 more removed lines; see GitHub link above)
+           }))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1976-L1982` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L457) · [Before (L1976-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1976-L1982)

```diff
-         zU.engine || (zU.engine = yU.b.LastCreatedEngine), super(zU)
-       }
-     }
-     QU.FragmentUrl = "pass";
-     class AU extends cU.g {
-       _gatherImports(UU, XU) {
-         UU ? (this._webGPUReady = !0, XU.push(Promise.all([zU.e(678).then((() => zU(64123)))]))) : XU.push(Promise.all([zU.e(679).then((() => zU(64128)))])), super._gatherImports(UU, XU)
+         tH && (hH ? zH() : HH.onLoadObservable.addOnce(zH))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L1984-L2017` → after: `L459-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/617.js#L459-L461) · [Before (L1984-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/617.js#L1984-L2017)

```diff
-       constructor(UU) {
-         super({
-           ...arguments.length > 2 ? arguments[2] : void 0,
-           name: UU,
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || yU.b.LastCreatedEngine,
-           useShaderStore: !0,
-           useAsPostProcess: !0,
-           fragmentShader: AU.FragmentUrl,
-           defines: "#define POSITIVEX"
-         }), this._face = 0
-       }
-       get face() {
-         return this._face
-       }
-       set face(UU) {
-         if (!(UU < 0 || UU > 5)) switch (this._face = UU, this._face) {
- ... (18 more removed lines; see GitHub link above)
+       static async EncodeTextureToRGBD(HH, BH) {
+         let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         return BH.Iu().isWebGPU ? await LH.e(652).then((() => LH(64248))) : await LH.e(634).then((() => LH(64245))), await (0, rH.d)("rgbdEncode", HH, BH, AH, 1, 5)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/618.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/618.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67)

#### 1. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/618.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/618.js#L4)

```diff
-   44535: (UU, XU, zU) => {
+   45251: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/618.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/618.js#L6)

```diff
-       _HDRTextureLoader: () => EU
+       _IESTextureLoader: () => tH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L8-L73` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/618.js#L8-L17) · [Before (L8-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/618.js#L8-L73)

```diff
-     var cU = zU(37819);
-     class yU {
-       static ConvertPanoramaToCubemap(UU, XU, zU, cU) {
-         let yU, QU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           AU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!UU) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (UU.length != XU * zU * 3) {
-           if (UU.length != XU * zU * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           yU = 4
-         } else yU = 3;
-         return {
-           front: this.CreateCubemapTexture(cU, this.FACE_FRONT, UU, XU, zU, QU, AU, yU),
-           back: this.CreateCubemapTexture(cU, this.FACE_BACK, UU, XU, zU, QU, AU, yU),
-           left: this.CreateCubemapTexture(cU, this.FACE_LEFT, UU, XU, zU, QU, AU, yU),
-           right: this.CreateCubemapTexture(cU, this.FACE_RIGHT, UU, XU, zU, QU, AU, yU),
-           up: this.CreateCubemapTexture(cU, this.FACE_UP, UU, XU, zU, QU, AU, yU),
- ... (50 more removed lines; see GitHub link above)
+     var AH = LH(38002);
+ 
+     function rH(HH) {
+       return HH.split(" ").filter((HH => "" !== HH)).map((HH => parseFloat(HH)))
+     }
+ 
+     function SH(HH, BH, LH) {
+       for (; LH.length !== BH;) {
+         const BH = rH(HH.lines[HH.index++]);
+         LH.push(...BH)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L77-L80` → after: `L21-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L21-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/618.js#L21-L44) · [Before (L77-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/618.js#L77-L80)

```diff
-     function QU(UU, XU, zU, cU, yU, QU) {
-       yU > 0 ? (yU = function(UU, XU) {
-         return XU > 1023 ? UU * Math.pow(2, 1023) * Math.pow(2, XU - 1023) : XU < -1074 ? UU * Math.pow(2, -1074) * Math.pow(2, XU + 1074) : UU * Math.pow(2, XU)
-       }(1, yU - 136), UU[QU + 0] = XU * yU, UU[QU + 1] = zU * yU, UU[QU + 2] = cU * yU) : (UU[QU + 0] = 0, UU[QU + 1] = 0, UU[QU + 2] = 0)
+     function hH(HH, BH, LH) {
+       let rH = 0,
+         SH = 0,
+         hH = 0,
+         tH = 0,
+         zH = 0,
+         CH = 0;
+       for (let AH = 0; AH < HH.numberOfHorizontalAngles - 1; AH++)
+         if (LH < HH.horizontalAngles[AH + 1] || AH === HH.numberOfHorizontalAngles - 2) {
+           SH = AH, hH = HH.horizontalAngles[AH], tH = HH.horizontalAngles[AH + 1];
+           break
+         } for (let AH = 0; AH < HH.numberOfVerticalAngles - 1; AH++)
+         if (BH < HH.verticalAngles[AH + 1] || AH === HH.numberOfVerticalAngles - 2) {
+           rH = AH, zH = HH.verticalAngles[AH], CH = HH.verticalAngles[AH + 1];
+           break
+         } const EH = tH - hH,
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L158` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/618.js#L51) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/618.js#L158)

```diff
-         throw ".hdr not supported in Cube."
+         throw ".ies not supported in Cube."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L161-L169` → after: `L54-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L54-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/618.js#L54-L98) · [Before (L161-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/618.js#L161-L169)

```diff
-         const cU = new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength),
-           yU = FU(cU),
-           QU = oU(cU, yU),
-           AU = yU.width * yU.height,
-           DU = new Float32Array(4 * AU);
-         for (let FU = 0; FU < AU; FU += 1) DU[4 * FU] = QU[3 * FU], DU[4 * FU + 1] = QU[3 * FU + 1], DU[4 * FU + 2] = QU[3 * FU + 2], DU[4 * FU + 3] = 1;
-         zU(yU.width, yU.height, XU.generateMipMaps, !1, (() => {
-           const UU = XU.qp();
-           XU.type = 1, XU.format = 5, XU._gammaSpace = !1, UU._uploadDataToTextureDirectly(XU, DU)
+         const AH = function(HH) {
+           const BH = {
+               lines: new TextDecoder("utf-8").decode(HH).split("\n"),
+               index: 0
+             },
+             LH = {
+               version: BH.lines[0],
+               candelaValues: [],
+               horizontalAngles: [],
+               verticalAngles: [],
+               numberOfHorizontalAngles: 0,
+               numberOfVerticalAngles: 0
+             };
+           for (BH.index = 1; BH.lines.length > 0 && !BH.lines[BH.index].includes("TILT=");) BH.index++;
+           BH.lines[BH.index].includes("INCLUDE"), BH.index++;
+           const AH = rH(BH.lines[BH.index++]);
+ ... (29 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/619.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/619.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/619.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/619.js#L4)

```diff
-   44539: (UU, XU, zU) => {
+   45258: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/619.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/619.js#L6)

```diff
-       _KTXTextureLoader: () => pU
+       _BasisTextureLoader: () => xH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L8-L36` → after: `L8-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L8-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/619.js#L8-L58) · [Before (L8-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/619.js#L8-L36)

```diff
-     var cU = zU(39493);
-     class yU {
-       constructor(UU, XU) {
-         if (this.data = UU, this.isInvalid = !1, !yU.IsValid(UU)) return this.isInvalid = !0, void cU.b.Error("texture missing KTX identifier");
-         const zU = Uint32Array.BYTES_PER_ELEMENT,
-           QU = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * zU),
-           AU = 67305985 === QU.getUint32(0, !0);
-         return this.glType = QU.getUint32(1 * zU, AU), this.glTypeSize = QU.getUint32(2 * zU, AU), this.glFormat = QU.getUint32(3 * zU, AU), this.glInternalFormat = QU.getUint32(4 * zU, AU), this.glBaseInternalFormat = QU.getUint32(5 * zU, AU), this.pixelWidth = QU.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(UU, XU) {
-         switch (this.loadType) {
-           case yU.COMPRESSED_2D:
-             this._upload2DCompressedLevels(UU, XU);
-           case yU.TEX_2D:
-           case yU.COMPRESSED_3D:
-           case yU.TEX_3D:
- ... (13 more removed lines; see GitHub link above)
+     var AH, rH = LH(41387),
+       SH = LH(39595),
+       hH = LH(41777),
+       tH = LH(41122);
+ 
+     function zH() {
+       const HH = 0,
+         BH = 1,
+         LH = 2,
+         AH = 3,
+         rH = 6,
+         SH = 8,
+         hH = 9,
+         tH = 10,
+         zH = 14;
+       let CH = null;
+ ... (35 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L38-L67` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/619.js#L60-L63) · [Before (L38-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/619.js#L38-L67)

```diff
-           cU = Math.max(1, .5 * cU), QU = Math.max(1, .5 * QU)
-         }
-       }
-       static IsValid(UU) {
-         if (UU.byteLength >= 12) {
-           const XU = new Uint8Array(UU.buffer, UU.byteOffset, 12);
-           if (171 === XU[0] && 75 === XU[1] && 84 === XU[2] && 88 === XU[3] && 32 === XU[4] && 49 === XU[5] && 49 === XU[6] && 187 === XU[7] && 13 === XU[8] && 10 === XU[9] && 26 === XU[10] && 10 === XU[11]) return !0
-         }
-         return !1
-       }
-     }
-     yU.HEADER_LEN = 64, yU.COMPRESSED_2D = 0, yU.COMPRESSED_3D = 1, yU.TEX_2D = 2, yU.TEX_3D = 3;
-     var QU, AU, FU, oU = zU(44544),
-       DU = zU(41205);
- 
-     function EU(UU, XU) {
- ... (14 more removed lines; see GitHub link above)
+           CH || (CH = BASIS({
+             wasmBinary: XH.data.wasmBinary
+           })), null !== CH && CH.then((HH => {
+             BASIS = HH, HH.initializeBasis(), postMessage({
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L69-L194` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/619.js#L65) · [Before (L69-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/619.js#L69-L194)

```diff
-             });
-             break
-           }
-           case "setDefaultDecoderOptions":
-             UU.KTX2Decoder.DefaultDecoderOptions = zU.data.options;
-             break;
-           case "decode":
-             XU.decode(zU.data.data, zU.data.caps, zU.data.options).then((UU => {
-               const XU = [];
-               for (let zU = 0; zU < UU.mipmaps.length; ++zU) {
-                 const cU = UU.mipmaps[zU];
-                 cU && cU.data && XU.push(cU.data.buffer)
-               }
-               postMessage({
-                 action: "decoded",
-                 success: !0,
- ... (110 more removed lines; see GitHub link above)
+             })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L196-L356` → after: `L67-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L67-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/619.js#L67-L117) · [Before (L196-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/619.js#L196-L356)

```diff
-         }
-         if (NU._DecoderModulePromise) {
-           const cU = await NU._DecoderModulePromise;
-           return NU.DefaultDecoderOptions.isDirty && (NU._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = NU.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((yU, QU) => {
-             cU.decode(UU, zU, XU).then((UU => {
-               yU(UU)
-             })).catch((UU => {
-               QU({
-                 message: UU
-               })
-             }))
-           }))
-         }
-         throw new Error("KTX2 decoder module is not available")
-       }
-       _createTexture(UU, XU, zU) {
- ... (145 more removed lines; see GitHub link above)
+         } else if ("transcode" === XH.data.action) {
+           const CH = XH.data.config,
+             GH = XH.data.imageData,
+             YH = new BASIS.BasisFile(GH),
+             uH = function(HH) {
+               const BH = HH.getHasAlpha(),
+                 LH = HH.getNumImages(),
+                 AH = [];
+               for (let rH = 0; rH < LH; rH++) {
+                 const BH = {
+                     levels: []
+                   },
+                   LH = HH.getNumLevels(rH);
+                 for (let AH = 0; AH < LH; AH++) {
+                   const LH = {
+                     width: HH.getImageWidth(rH, AH),
+ ... (35 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L359-L360` → after: `L120-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L120-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/619.js#L120-L237) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/619.js#L359-L360)

```diff
-         }), this._ktx2DecoderOptions = UU, UU
-       }
+           YH.close(), YH.delete(), WH && (QH = -1), MH ? postMessage({
+             action: "transcode",
+             success: MH,
+             id: XH.data.id,
+             fileInfo: uH,
+             format: QH
+           }, xH) : postMessage({
+             action: "transcode",
+             success: MH,
+             id: XH.data.id
+           })
+         }
+       }
+     }! function(HH) {
+       HH[HH.cTFETC1 = 0] = "cTFETC1", HH[HH.cTFETC2 = 1] = "cTFETC2", HH[HH.cTFBC1 = 2] = "cTFBC1", HH[HH.cTFBC3 = 3] = "cTFBC3", HH[HH.cTFBC4 = 4] = "cTFBC4", HH[HH.cTFBC5 = 5] = "cTFBC5", HH[HH.cTFBC7 = 6] = "cTFBC7", HH[HH.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", HH[HH.cTFPVR … [truncated]
+     }(AH || (AH = {}));
+ ... (102 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L366` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/619.js#L243) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/619.js#L366)

```diff
-       loadCubeData(UU, XU, zU, cU) {
+       loadCubeData(HH, BH, LH, AH, SH) {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L368-L388` → after: `L245-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L245-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/619.js#L245-L279) · [Before (L368-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/619.js#L368-L388)

```diff
-         XU._invertVScale = !XU.invertY;
-         const QU = XU.qp(),
-           AU = new yU(UU, 6),
-           FU = IU(AU.glInternalFormat);
-         null !== FU ? (XU.format = FU, XU._useSRGBBuffer = QU._getUseSRGBBuffer(!0, !XU.generateMipMaps), XU._gammaSpace = !0) : XU.format = AU.glInternalFormat;
-         const oU = AU.numberOfMipmapLevels > 1 && XU.generateMipMaps;
-         QU._unpackFlipY(!0), AU.uploadLevels(XU, XU.generateMipMaps), XU.width = AU.pixelWidth, XU.height = AU.pixelHeight, QU._setCubeMapTextureParams(XU, oU, AU.numberOfMipmapLevels - 1), XU.isReady = !0, XU.onLoadedObservable.notifyObservers(XU), XU.onLoadedObservable.clear(), … [truncated]
-       }
-       loadData(UU, XU, zU, QU) {
-         if (yU.IsValid(UU)) {
-           XU._invertVScale = !XU.invertY;
-           const cU = new yU(UU, 1),
-             QU = IU(cU.glInternalFormat);
-           null !== QU ? (XU.format = QU, XU._useSRGBBuffer = XU.qp()._getUseSRGBBuffer(!0, !XU.generateMipMaps), XU._gammaSpace = !0) : XU.format = cU.glInternalFormat, zU(cU.pixelWidth, cU.pixelHeight, XU.generateMipMaps, !0, (() => {
-             cU.uploadLevels(XU, XU.generateMipMaps)
-           }), cU.isInvalid)
- ... (5 more removed lines; see GitHub link above)
+         const hH = BH.Iu().getCaps(),
+           tH = {
+             supportedCompressionFormats: {
+               etc1: !!hH.etc1,
+               s3tc: !!hH.s3tc,
+               pvrtc: !!hH.pvrtc,
+               etc2: !!hH.etc2,
+               astc: !!hH.astc,
+               bc7: !!hH.bptc
+             }
+           };
+         uH(HH, tH).then((HH => {
+           const LH = HH.fileInfo.images[0].levels.length > 1 && BH.generateMipMaps;
+           WH(BH, HH), BH.Iu()._setCubeMapTextureParams(BH, LH), BH.isReady = !0, BH.onLoadedObservable.notifyObservers(BH), BH.onLoadedObservable.clear(), AH && AH()
+         })).catch((HH => {
+           rH.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), BH.isReady = !0, SH && SH(HH)
+ ... (19 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L390-L424` → after: `L281-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/619.js#L281-L282) · [Before (L390-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/619.js#L390-L424)

```diff
-         } else cU.b.Error("texture missing KTX identifier"), zU(0, 0, !1, !1, (() => {}), !0)
-       }
-     }
-   },
-   44544: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => yU
-     });
-     class cU {
-       constructor(UU) {
-         this._pendingActions = new Array, this._workerInfos = UU.map((UU => ({
-           workerPromise: Promise.resolve(UU),
-           idle: !0
-         })))
-       }
-       dispose() {
- ... (19 more removed lines; see GitHub link above)
+         })).catch((HH => {
+           rH.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), rH.i.Warn(`Failed to transcode Basis file: ${HH}`), LH(0, 0, !1, !1, (() => {}), !0)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/620.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/620.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac)

#### 1. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L4` → after: `L4-L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L4-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/620.js#L4-L936) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/620.js#L4)

```diff
-   44550: (UU, XU, zU) => {
+   45290: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => MH
+     });
+     var AH = LH(37997),
+       rH = LH(37963),
+       SH = LH(41777),
+       hH = LH(41433),
+       tH = LH(41222),
+       zH = LH(39595),
+       CH = LH(41416),
+       EH = LH(41448),
+       XH = LH(37974),
+       GH = LH(41179),
+       YH = LH(41398),
+       uH = LH(41472);
+ ... (917 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L6` → after: `L938-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L938-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/620.js#L938-L944) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/620.js#L6)

```diff
-       _TGATextureLoader: () => FU
+       Dispose: () => xH,
+       DumpData: () => MH,
+       DumpDataAsync: () => WH,
+       DumpFramebuffer: () => QH,
+       DumpTools: () => vH,
+       EncodeImageAsync: () => uH,
+       RegisterDumpTools: () => TH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L8-L23` → after: `L946-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L946-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/620.js#L946-L1051) · [Before (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/620.js#L8-L23)

```diff
-     var cU = zU(39493);
- 
-     function yU(UU) {
-       let XU = 0;
-       return {
-         id_length: UU[XU++],
-         colormap_type: UU[XU++],
-         image_type: UU[XU++],
-         colormap_index: UU[XU++] | UU[XU++] << 8,
-         colormap_length: UU[XU++] | UU[XU++] << 8,
-         colormap_size: UU[XU++],
-         origin: [UU[XU++] | UU[XU++] << 8, UU[XU++] | UU[XU++] << 8],
-         width: UU[XU++] | UU[XU++] << 8,
-         height: UU[XU++] | UU[XU++] << 8,
-         pixel_size: UU[XU++],
-         flags: UU[17]
+     var AH = LH(41290),
+       rH = LH(45271),
+       SH = LH(41387),
+       hH = LH(38002),
+       tH = LH(37989),
+       zH = LH(39595),
+       CH = LH(41353),
+       EH = LH(41297);
+     let XH = null;
+     async function GH() {
+       return XH || (XH = async function() {
+         const HH = tH.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
+         HH instanceof OffscreenCanvas && zH.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
+         const {
+           ThinEngine: BH
+         } = await Promise.resolve().then((() => LH(41129)));
+ ... (90 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L27-L85` → after: `L1066-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L1066-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/620.js#L1066-L1069) · [Before (L27-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/620.js#L27-L85)

```diff
-     function QU(UU, XU) {
-       if (XU.length < 19) return void cU.b.Error("Unable to load TGA file - Not enough data to contain header");
-       let zU = 18;
-       const QU = yU(XU);
-       if (QU.id_length + zU > XU.length) return void cU.b.Error("Unable to load TGA file - Not enough data");
-       zU += QU.id_length;
-       let FU, oU = !1,
-         DU = !1,
-         EU = !1;
-       switch (QU.image_type) {
-         case 9:
-           oU = !0;
-         case 1:
-           DU = !0;
-           break;
-         case 10:
- ... (43 more removed lines; see GitHub link above)
+     function xH() {
+       XH && (XH?.then((HH => {
+         HH.canvas instanceof HTMLCanvasElement && HH.canvas.remove(), HH.dumpEngine && (HH.dumpEngine.engine.dispose(), HH.dumpEngine.renderer.dispose(), HH.dumpEngine.wrapper.dispose())
+       })), XH = null)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L88-L113` → after: `L1072-L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L1072-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/620.js#L1072-L1277) · [Before (L88-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/620.js#L88-L113)

```diff
-       GetTGAHeader: yU,
-       UploadContent: QU,
-       _getImageData8bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
-         const DU = zU,
-           EU = XU,
-           YU = UU.width,
-           NU = UU.height;
-         let IU, pU, aU, tU = 0;
-         const gU = new Uint8Array(YU * NU * 4);
-         for (aU = cU; aU !== QU; aU += yU)
-           for (pU = AU; pU !== oU; pU += FU, tU++) IU = DU[tU], gU[4 * (pU + YU * aU) + 3] = 255, gU[4 * (pU + YU * aU) + 2] = EU[3 * IU + 0], gU[4 * (pU + YU * aU) + 1] = EU[3 * IU + 1], gU[4 * (pU + YU * aU) + 0] = EU[3 * IU + 2];
-         return gU
-       },
-       _getImageData16bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
-         const DU = zU,
-           EU = UU.width,
- ... (10 more removed lines; see GitHub link above)
+       DumpData: MH,
+       DumpDataAsync: WH,
+       DumpFramebuffer: QH,
+       Dispose: xH
+     };
+     let PH = !1;
+ 
+     function TH() {
+       if (PH) return;
+       PH = !0;
+       SH.i.DumpData = MH, SH.i.DumpDataAsync = WH, SH.i.DumpFramebuffer = QH
+     }
+   },
+   45285: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => YH,
+ ... (190 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L115-L145` → after: `L1279-L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L1279-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/620.js#L1279-L1387) · [Before (L115-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/620.js#L115-L145)

```diff
-         return tU
-       },
-       _getImageData24bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
-         const DU = zU,
-           EU = UU.width,
-           YU = UU.height;
-         let NU, IU, pU = 0;
-         const aU = new Uint8Array(EU * YU * 4);
-         for (IU = cU; IU !== QU; IU += yU)
-           for (NU = AU; NU !== oU; NU += FU, pU += 3) aU[4 * (NU + EU * IU) + 3] = 255, aU[4 * (NU + EU * IU) + 2] = DU[pU + 0], aU[4 * (NU + EU * IU) + 1] = DU[pU + 1], aU[4 * (NU + EU * IU) + 0] = DU[pU + 2];
-         return aU
-       },
-       _getImageData32bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
-         const DU = zU,
-           EU = UU.width,
-           YU = UU.height;
- ... (15 more removed lines; see GitHub link above)
+         }(HH.textureFormat) || WH !== uH || MH !== QH) {
+         if (HH.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${CH?"RTT":"compression"} is not supported.`);
+         return await async function(HH, BH, SH, tH, zH) {
+           let CH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
+           const EH = HH.yN(),
+             XH = EH.Iu(),
+             GH = HH.getInternalTexture(),
+             YH = HH.is3D || !!GH?.is3D;
+           let uH;
+           if (XH.isWebGPU ? YH ? await LH.e(676).then((() => LH(64276))) : HH.isCube ? await LH.e(677).then((() => LH(64283))) : await LH.e(678).then((() => LH(64288))) : YH ? await LH.e(673).then((() => LH(64252))) : HH.isCube ? await LH.e(674).then((() => LH(64261))) : await LH … [truncated]
+             uniforms: ["lod", "gamma", "slice"],
+             samplingMode: AH.g.NEAREST_NEAREST_MIPNEAREST,
+             engine: XH,
+             shaderLanguage: XH.isWebGPU ? 1 : 0
+           });
+           else if (HH.isCube) {
+ ... (93 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L147-L155` → after: `L1389-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L1389-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/620.js#L1389-L1964) · [Before (L147-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/620.js#L147-L155)

```diff
-       _getImageDataGrey16bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
-         const DU = zU,
-           EU = UU.width,
-           YU = UU.height;
-         let NU, IU, pU = 0;
-         const aU = new Uint8Array(EU * YU * 4);
-         for (IU = cU; IU !== QU; IU += yU)
-           for (NU = AU; NU !== oU; NU += FU, pU += 2) aU[4 * (NU + EU * IU) + 0] = DU[pU + 0], aU[4 * (NU + EU * IU) + 1] = DU[pU + 0], aU[4 * (NU + EU * IU) + 2] = DU[pU + 0], aU[4 * (NU + EU * IU) + 3] = DU[pU + 1];
-         return aU
+       ApplyPostProcess: YH,
+       ToHalfFloat: GH.f,
+       FromHalfFloat: GH.d,
+       GetTextureDataAsync: uH
+     }
+   },
+   45266: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => uH
+     });
+     var AH = LH(41290),
+       rH = LH(41398),
+       SH = LH(37997),
+       hH = LH(37963),
+       tH = LH(41134),
+       zH = LH(41297),
+ ... (560 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L157-L160` → after: `L1966-L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L1966-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/620.js#L1966-L1976) · [Before (L157-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/620.js#L157-L160)

```diff
-     };
-     class FU {
-       constructor() {
-         this.supportCascades = !1
+       constructor(HH) {
+         let BH = arguments.length > 2 ? arguments[2] : void 0;
+         const LH = {
+           name: HH,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || rH.d.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: SH.FragmentUrl,
+           ...BH
+         };
+         LH.engine || (LH.engine = rH.d.LastCreatedEngine), super(LH)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L162-L163` → after: `L1978-L1982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L1978-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/620.js#L1978-L1982) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/620.js#L162-L163)

```diff
-       loadCubeData() {
-         throw ".env not supported in Cube."
+     }
+     SH.FragmentUrl = "pass";
+     class hH extends AH.f {
+       _gatherImports(HH, BH) {
+         HH ? (this._webGPUReady = !0, BH.push(Promise.all([LH.e(681).then((() => LH(64311)))]))) : BH.push(Promise.all([LH.e(682).then((() => LH(64313)))])), super._gatherImports(HH, BH)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L165-L170` → after: `L1984-L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L1984-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/620.js#L1984-L2017) · [Before (L165-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/620.js#L165-L170)

```diff
-       loadData(UU, XU, zU) {
-         const cU = new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength),
-           AU = yU(cU);
-         zU(AU.width, AU.height, XU.generateMipMaps, !1, (() => {
-           QU(XU, cU)
-         }))
+       constructor(HH) {
+         super({
+           ...arguments.length > 2 ? arguments[2] : void 0,
+           name: HH,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || rH.d.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: hH.FragmentUrl,
+           defines: "#define POSITIVEX"
+         }), this._face = 0
+       }
+       get face() {
+         return this._face
+       }
+       set face(HH) {
+         if (!(HH < 0 || HH > 5)) switch (this._face = HH, this._face) {
+ ... (18 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/621.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/621.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/621.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/621.js#L4)

```diff
-   44555: (UU, XU, zU) => {
+   45309: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/621.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/621.js#L6-L7)

```diff
-       ReadExrDataAsync: () => YX,
-       _ExrTextureLoader: () => EX
+       _HDRTextureLoader: () => EH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L9-L26` → after: `L8-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L8-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/621.js#L8-L75) · [Before (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/621.js#L9-L26)

```diff
-     var cU = zU(39493),
-       yU = zU(37855),
-       QU = zU(41179);
-     const AU = 4,
-       FU = 4,
-       oU = 1,
-       DU = 2,
-       EU = 8,
-       YU = 65536,
-       NU = YU >> 3,
-       IU = 14,
-       pU = 65537,
-       aU = 1 << IU,
-       tU = aU - 1,
-       gU = 59,
-       kU = 63,
- ... (2 more removed lines; see GitHub link above)
+     var AH = LH(37963);
+     class rH {
+       static ConvertPanoramaToCubemap(HH, BH, LH, AH) {
+         let rH, SH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           hH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         if (!HH) throw "ConvertPanoramaToCubemap: input cannot be null";
+         if (HH.length != BH * LH * 3) {
+           if (HH.length != BH * LH * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
+           rH = 4
+         } else rH = 3;
+         return {
+           front: this.CreateCubemapTexture(AH, this.FACE_FRONT, HH, BH, LH, SH, hH, rH),
+           back: this.CreateCubemapTexture(AH, this.FACE_BACK, HH, BH, LH, SH, hH, rH),
+           left: this.CreateCubemapTexture(AH, this.FACE_LEFT, HH, BH, LH, SH, hH, rH),
+           right: this.CreateCubemapTexture(AH, this.FACE_RIGHT, HH, BH, LH, SH, hH, rH),
+           up: this.CreateCubemapTexture(AH, this.FACE_UP, HH, BH, LH, SH, hH, rH),
+ ... (52 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L28-L33` → after: `L77-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L77-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/621.js#L77-L80) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/621.js#L28-L33)

```diff
-     function RU(UU, XU) {
-       const zU = new Uint8Array(UU);
-       let cU = 0;
-       for (; 0 != zU[XU.value + cU];) cU += 1;
-       const yU = (new TextDecoder).decode(zU.slice(XU.value, XU.value + cU));
-       return XU.value = XU.value + cU + 1, yU
+     function SH(HH, BH, LH, AH, rH, SH) {
+       rH > 0 ? (rH = function(HH, BH) {
+         return BH > 1023 ? HH * Math.pow(2, 1023) * Math.pow(2, BH - 1023) : BH < -1074 ? HH * Math.pow(2, -1074) * Math.pow(2, BH + 1074) : HH * Math.pow(2, BH)
+       }(1, rH - 136), HH[SH + 0] = BH * rH, HH[SH + 1] = LH * rH, HH[SH + 2] = AH * rH) : (HH[SH + 0] = 0, HH[SH + 1] = 0, HH[SH + 2] = 0)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L37-L164` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/621.js#L84-L86) · [Before (L37-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/621.js#L37-L164)

```diff
-       const zU = UU.getInt32(XU.value, !0);
-       return XU.value += AU, zU
-     }
- 
-     function WU(UU, XU) {
-       const zU = UU.getUint32(XU.value, !0);
-       return XU.value += AU, zU
-     }
- 
-     function dU(UU, XU) {
-       const zU = UU.getUint8(XU.value);
-       return XU.value += oU, zU
-     }
- 
-     function LU(UU, XU) {
-       const zU = UU.getUint16(XU.value, !0);
- ... (112 more removed lines; see GitHub link above)
+       let LH, AH = "";
+       for (let rH = BH; rH < HH.length - BH && (LH = String.fromCharCode(HH[rH]), "\n" != LH); rH++) AH += LH;
+       return AH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L168-L170` → after: `L90-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L90-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/621.js#L90-L108) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/621.js#L168-L170)

```diff
-       for (let XU = 1; XU < UU.length; XU++) {
-         const zU = UU[XU - 1] + UU[XU] - 128;
-         UU[XU] = zU
+       let BH = hH(HH, 0);
+       if ("#" != BH[0] || "?" != BH[1]) throw "Bad HDR Format.";
+       let LH = !1,
+         AH = !1,
+         rH = 0;
+       do {
+         rH += BH.length + 1, BH = hH(HH, rH), "FORMAT=32-bit_rle_rgbe" == BH ? AH = !0 : 0 == BH.length && (LH = !0)
+       } while (!LH);
+       if (!AH) throw "HDR Bad header format, unsupported FORMAT";
+       rH += BH.length + 1, BH = hH(HH, rH);
+       const SH = /^-Y (.*) \+X (.*)$/g.exec(BH);
+       if (!SH || SH.length < 3) throw "HDR Bad header format, no size";
+       const tH = parseInt(SH[2]),
+         zH = parseInt(SH[1]);
+       if (tH < 8 || tH > 32767) throw "HDR Bad header format, unsupported size";
+       return rH += BH.length + 1, {
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L175-L274` → after: `L113-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L113-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/621.js#L113-L133) · [Before (L175-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/621.js#L175-L274)

```diff
-       let zU = 0,
-         cU = Math.floor((UU.length + 1) / 2),
-         yU = 0;
-       const QU = UU.length - 1;
-       for (; !(yU > QU) && (XU[yU++] = UU[zU++], !(yU > QU));) XU[yU++] = UU[cU++]
-     }! function(UU) {
-       UU[UU.NO_COMPRESSION = 0] = "NO_COMPRESSION", UU[UU.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", UU[UU.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", UU[UU.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", UU[UU.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", UU[UU.PXR24_COMPRESSION = 5] = "PX … [truncated]
-     }(BU || (BU = {})),
-     function(UU) {
-       UU[UU.INCREASING_Y = 0] = "INCREASING_Y", UU[UU.DECREASING_Y = 1] = "DECREASING_Y"
-     }(ZU || (ZU = {}));
-     const fU = 20000630;
- 
-     function iU(UU, XU) {
-       if (UU.getUint32(0, !0) != fU) throw new Error("Incorrect OpenEXR format");
-       const zU = UU.getUint8(4),
- ... (84 more removed lines; see GitHub link above)
+       return function(HH, BH) {
+         let LH = BH.height;
+         const AH = BH.width;
+         let rH, hH, tH, zH, EH, XH, GH, YH, uH = BH.dataPosition;
+         const QH = new ArrayBuffer(4 * AH),
+           WH = new Uint8Array(QH),
+           MH = new ArrayBuffer(BH.width * BH.height * 4 * 3),
+           xH = new Float32Array(MH);
+         for (; LH > 0;) {
+           if (rH = HH[uH++], hH = HH[uH++], tH = HH[uH++], zH = HH[uH++], 2 != rH || 2 != hH || 128 & tH || BH.width < 8 || BH.width > 32767) return CH(HH, BH);
+           if ((tH << 8 | zH) != AH) throw "HDR Bad header format, wrong scan line width";
+           for (XH = 0, YH = 0; YH < 4; YH++)
+             for (GH = (YH + 1) * AH; XH < GH;)
+               if (rH = HH[uH++], hH = HH[uH++], rH > 128) {
+                 if (EH = rH - 128, 0 == EH || EH > GH - XH) throw "HDR Bad Format, bad scanline data (run)";
+                 for (; EH-- > 0;) WH[XH++] = hH
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L277-L388` → after: `L136-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/621.js#L136-L137) · [Before (L277-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/621.js#L277-L388)

```diff
-       }! function(UU) {
-         for (let zU = 0; zU <= 58; ++zU) nU[zU] = 0;
-         for (let zU = 0; zU < pU; ++zU) nU[UU[zU]] += 1;
-         let XU = 0;
-         for (let zU = 58; zU > 0; --zU) {
-           const UU = XU + nU[zU] >> 1;
-           nU[zU] = XU, XU = UU
-         }
-         for (let zU = 0; zU < pU; ++zU) {
-           const XU = UU[zU];
-           XU > 0 && (UU[zU] = XU | nU[XU]++ << 6)
-         }
-       }(QU)
-     }
- 
-     function lU(UU) {
- ... (96 more removed lines; see GitHub link above)
+         return xH
+       }(HH, BH)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L392-L454` → after: `L141-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L141-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/621.js#L141-L148) · [Before (L392-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/621.js#L392-L454)

```diff
-       const zU = KU(UU),
-         cU = KU(XU),
-         yU = zU + (1 & cU) + (cU >> 1);
-       return {
-         a: yU,
-         b: yU - cU
-       }
-     }
- 
-     function TU(UU, XU) {
-       const zU = jU(UU),
-         cU = jU(XU),
-         yU = zU - (cU >> 1) & MU;
-       return {
-         a: cU + yU - HU & MU,
-         b: yU
- ... (47 more removed lines; see GitHub link above)
+       let LH = BH.height;
+       const AH = BH.width;
+       let rH, hH, tH, zH, CH, EH = BH.dataPosition;
+       const XH = new ArrayBuffer(BH.width * BH.height * 4 * 3),
+         GH = new Float32Array(XH);
+       for (; LH > 0;) {
+         for (CH = 0; CH < BH.width; CH++) rH = HH[EH++], hH = HH[EH++], tH = HH[EH++], zH = HH[EH++], SH(GH, rH, hH, tH, zH, (BH.height - LH) * AH * 3 + 3 * CH);
+         LH--
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L458-L720` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/621.js#L152) · [Before (L458-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/621.js#L458-L720)

```diff
- 
-     function UX(UU) {
-       return new DataView(UU.array.buffer, UU.offset.value, UU.size)
-     }
- 
-     function XX(UU) {
-       const XU = UU.viewer.buffer.slice(UU.offset.value, UU.offset.value + UU.size),
-         zU = new Uint8Array(function(UU) {
-           let XU = UU.byteLength;
-           const zU = [];
-           let cU = 0;
-           const yU = new DataView(UU);
-           for (; XU > 0;) {
-             const UU = yU.getInt8(cU++);
-             if (UU < 0) {
-               const QU = -UU;
- ... (247 more removed lines; see GitHub link above)
+     rH.FACE_LEFT = [new AH.o(-1, -1, -1), new AH.o(1, -1, -1), new AH.o(-1, 1, -1), new AH.o(1, 1, -1)], rH.FACE_RIGHT = [new AH.o(1, -1, 1), new AH.o(-1, -1, 1), new AH.o(1, 1, 1), new AH.o(-1, 1, 1)], rH.FACE_FRONT = [new AH.o(1, -1, -1), new AH.o(1, -1, 1), new AH.o(1, 1, -1), … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L725-L726` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/621.js#L157-L158) · [Before (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/621.js#L725-L726)

```diff
-       loadCubeData(UU, XU, zU, cU, yU) {
-         throw ".exr not supported in Cube."
+       loadCubeData() {
+         throw ".hdr not supported in Cube."
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L729-L743` → after: `L161-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L161-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/621.js#L161-L169) · [Before (L729-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/621.js#L729-L743)

```diff
-         const yU = new DataView(UU.buffer),
-           QU = {
-             value: 0
-           },
-           AU = iU(yU, QU);
-         oX(AU, yU, QU, FX.DefaultOutputType).then((UU => {
-           DX(UU, AU, yU, QU);
-           const cU = AU.dataWindow.xMax - AU.dataWindow.xMin + 1,
-             FU = AU.dataWindow.yMax - AU.dataWindow.yMin + 1;
-           zU(cU, FU, XU.generateMipMaps, !1, (() => {
-             const zU = XU.qp();
-             XU.format = AU.format, XU.type = UU.textureType, XU.invertY = !1, XU._gammaSpace = !AU.linearSpace, UU.byteArray && zU._uploadDataToTextureDirectly(XU, UU.byteArray, 0, 0, void 0, !0)
-           }))
-         })).catch((UU => {
-           cU.b.Error("Failed to load EXR texture: ", UU)
+         const AH = new Uint8Array(HH.buffer, HH.byteOffset, HH.byteLength),
+           rH = tH(AH),
+           SH = zH(AH, rH),
+           hH = rH.width * rH.height,
+           CH = new Float32Array(4 * hH);
+         for (let tH = 0; tH < hH; tH += 1) CH[4 * tH] = SH[3 * tH], CH[4 * tH + 1] = SH[3 * tH + 1], CH[4 * tH + 2] = SH[3 * tH + 2], CH[4 * tH + 3] = 1;
+         LH(rH.width, rH.height, BH.generateMipMaps, !1, (() => {
+           const HH = BH.Iu();
+           BH.type = 1, BH.format = 5, BH._gammaSpace = !1, HH._uploadDataToTextureDirectly(BH, CH)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/622.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/622.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L4` → after: `L4-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L4-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/622.js#L4-L394) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/622.js#L4)

```diff
-   44704: (UU, XU, zU) => {
+   45312: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       _KTXTextureLoader: () => uH
+     });
+     var AH = LH(39595);
+     class rH {
+       constructor(HH, BH) {
+         if (this.data = HH, this.isInvalid = !1, !rH.IsValid(HH)) return this.isInvalid = !0, void AH.e.Error("texture missing KTX identifier");
+         const LH = Uint32Array.BYTES_PER_ELEMENT,
+           SH = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * LH),
+           hH = 67305985 === SH.getUint32(0, !0);
+         return this.glType = SH.getUint32(1 * LH, hH), this.glTypeSize = SH.getUint32(2 * LH, hH), this.glFormat = SH.getUint32(3 * LH, hH), this.glInternalFormat = SH.getUint32(4 * LH, hH), this.glBaseInternalFormat = SH.getUint32(5 * LH, hH), this.pixelWidth = SH.getUint32(6 *  … [truncated]
+       }
+       uploadLevels(HH, BH) {
+         switch (this.loadType) {
+           case rH.COMPRESSED_2D:
+ ... (375 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L6` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/622.js#L396) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/622.js#L6)

```diff
-       e: () => AU
+       c: () => rH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L8-L104` → after: `L398-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L398-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/622.js#L398-L457) · [Before (L8-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/622.js#L8-L104)

```diff
-     var cU = zU(40961);
-     const yU = "bumpVertex",
-       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   44631: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "bumpVertexDeclaration",
-       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
- ... (81 more removed lines; see GitHub link above)
+     class AH {
+       constructor(HH) {
+         this._pendingActions = new Array, this._workerInfos = HH.map((HH => ({
+           workerPromise: Promise.resolve(HH),
+           idle: !0
+         })))
+       }
+       dispose() {
+         for (const HH of this._workerInfos) HH.workerPromise.then((HH => {
+           HH.terminate()
+         }));
+         this._workerInfos.length = 0, this._pendingActions.length = 0
+       }
+       push(HH) {
+         this._executeOnIdleWorker(HH) || this._pendingActions.push(HH)
+       }
+ ... (44 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/623.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/623.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27)

#### 1. `bundles/preprod.bloxd.io/chunks/js/623.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/623.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/623.js#L4-L6)

```diff
-   44692: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => AU
+   45323: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       _TGATextureLoader: () => tH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/623.js` (Changed code · before: `L8-L11` → after: `L8-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27) · [After (L8-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/623.js#L8-L86) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/623.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "bakedVertexAnimation",
-       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(39595);
+ 
+     function rH(HH) {
+       let BH = 0;
+       return {
+         id_length: HH[BH++],
+         colormap_type: HH[BH++],
+         image_type: HH[BH++],
+         colormap_index: HH[BH++] | HH[BH++] << 8,
+         colormap_length: HH[BH++] | HH[BH++] << 8,
+         colormap_size: HH[BH++],
+         origin: [HH[BH++] | HH[BH++] << 8, HH[BH++] | HH[BH++] << 8],
+         width: HH[BH++] | HH[BH++] << 8,
+         height: HH[BH++] | HH[BH++] << 8,
+         pixel_size: HH[BH++],
+         flags: HH[17]
+ ... (63 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/623.js` (Changed code · before: `L13-L404` → after: `L88-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27) · [After (L88-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/623.js#L88-L171) · [Before (L13-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/623.js#L13-L404)

```diff
-       name: yU,
-       shader: QU
-     }
-   },
-   44606: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "bakedVertexAnimationDeclaration",
-       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
- ... (376 more removed lines; see GitHub link above)
+       GetTGAHeader: rH,
+       UploadContent: SH,
+       _getImageData8bits: function(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
+         const CH = LH,
+           EH = BH,
+           XH = HH.width,
+           GH = HH.height;
+         let YH, uH, QH, WH = 0;
+         const MH = new Uint8Array(XH * GH * 4);
+         for (QH = AH; QH !== SH; QH += rH)
+           for (uH = hH; uH !== zH; uH += tH, WH++) YH = CH[WH], MH[4 * (uH + XH * QH) + 3] = 255, MH[4 * (uH + XH * QH) + 2] = EH[3 * YH + 0], MH[4 * (uH + XH * QH) + 1] = EH[3 * YH + 1], MH[4 * (uH + XH * QH) + 0] = EH[3 * YH + 2];
+         return MH
+       },
+       _getImageData16bits: function(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
+         const CH = LH,
+           EH = HH.width,
+ ... (68 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/624.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/624.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/624.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/624.js#L4-L6)

```diff
-   44745: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => AU
+   45326: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       ReadExrDataAsync: () => XB,
+       _ExrTextureLoader: () => EB
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L8-L183` → after: `L9-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L9-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/624.js#L9-L771) · [Before (L8-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/624.js#L8-L183)

```diff
-     var cU = zU(40961);
-     const yU = "decalFragmentDeclaration",
-       QU = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   44850: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "depthPrePass",
-       QU = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
- ... (160 more removed lines; see GitHub link above)
+     var AH = LH(39595),
+       rH = LH(38002),
+       SH = LH(41364);
+     const hH = 4,
+       tH = 4,
+       zH = 1,
+       CH = 2,
+       EH = 8,
+       XH = 65536,
+       GH = XH >> 3,
+       YH = 14,
+       uH = 65537,
+       QH = 1 << YH,
+       WH = QH - 1,
+       MH = 59,
+       xH = 63,
+ ... (747 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/625.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/625.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320)

#### 1. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L4-L31` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/625.js#L4) · [Before (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/625.js#L4-L31)

```diff
-   44845: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "bumpFragment",
-       QU = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   44824: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
- ... (12 more removed lines; see GitHub link above)
+   45485: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L35-L38` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/625.js#L8-L11) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/625.js#L35-L38)

```diff
-     var cU = zU(40961);
-     const yU = "bumpFragmentMainFunctions",
-       QU = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bumpVertex",
+       SH = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L44-L70` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/625.js#L17) · [Before (L44-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/625.js#L44-L70)

```diff
-   44841: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "clipPlaneFragment",
-       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   44833: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
- ... (11 more removed lines; see GitHub link above)
+   45404: (HH, BH, LH) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L74-L77` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/625.js#L21-L24) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/625.js#L74-L77)

```diff
-     var cU = zU(40961);
-     const yU = "helperFunctions",
-       QU = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bumpVertexDeclaration",
+       SH = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L83-L96` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/625.js#L30) · [Before (L83-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/625.js#L83-L96)

```diff
-   44754: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "objectIdFunctions",
-       QU = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   64437: (UU, XU, zU) => {
+   45358: (HH, BH, LH) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L100-L103` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/625.js#L34-L38) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/625.js#L100-L103)

```diff
-     var cU = zU(40961);
-     const yU = "openpbrDielectricReflectance",
-       QU = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     LH(45342), LH(45351);
+     const rH = "defaultUboDeclaration",
+       SH = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L109-L241` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/625.js#L44-L46) · [Before (L109-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/625.js#L109-L241)

```diff
-   64442: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "openpbrGeometryInfo",
-       QU = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   64448: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => AU
- ... (117 more removed lines; see GitHub link above)
+   45328: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       defaultVertexShader: () => sH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L243-L246` → after: `L48-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/625.js#L48-L52) · [Before (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/625.js#L243-L246)

```diff
-     var cU = zU(40961);
-     const yU = "sceneUboDeclaration",
-       QU = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138),
+       rH = LH(45336);
+     const SH = "defaultVertexDeclaration",
+       hH = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
+     AH.c.IncludesShadersStore[SH] || (AH.c.IncludesShadersStore[SH] = hH);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L250-L261` → after: `L56-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L56-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/625.js#L56-L91) · [Before (L250-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/625.js#L250-L261)

```diff
-     }
-   },
-   64529: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       geometryPixelShader: () => wU
-     });
-     var cU = zU(40961),
-       yU = zU(44754),
-       QU = zU(44833);
-     const AU = "mrtFragmentDeclaration",
-       FU = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
-     cU.b.IncludesShadersStore[AU] || (cU.b.IncludesShadersStore[AU] = FU);
+     };
+     var zH = LH(45342),
+       CH = LH(45351),
+       EH = LH(45358),
+       XH = LH(45364),
+       GH = LH(45369),
+       YH = LH(45373),
+       uH = LH(45376),
+       QH = LH(45378),
+       WH = LH(45387),
+       MH = LH(45395),
+       xH = LH(45398),
+       vH = LH(45404),
+       PH = LH(45408),
+       TH = LH(45417),
+       UH = LH(45423),
+ ... (20 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L266-L287` → after: `L96-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L96-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/625.js#L96-L101) · [Before (L266-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/625.js#L266-L287)

```diff
-     var DU = zU(44822),
-       EU = zU(44791),
-       YU = zU(44824),
-       NU = zU(44588),
-       IU = zU(64221),
-       pU = zU(64429),
-       aU = zU(44571),
-       tU = zU(64197),
-       gU = zU(64437),
-       kU = zU(64266),
-       GU = zU(44798),
-       BU = zU(64442),
-       ZU = zU(64448),
-       RU = zU(44841),
-       PU = zU(44845),
-       WU = zU(64459),
- ... (6 more removed lines; see GitHub link above)
+     var wH = LH(45514);
+     const ZH = "defaultVertexShader",
+       dH = "#define CUSTOM_VERTEX_EXTENSION\n#include<__decl__defaultVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#include<uv … [truncated]
+     AH.c.ShadersStore[ZH] || (AH.c.ShadersStore[ZH] = dH);
+     const aH = [rH.b, tH, zH.e, CH.c, EH.b, XH.b, GH.d, YH.d, uH.e, QH.b, WH.c, MH.c, xH.e, vH.d, PH.b, TH.c, UH.b, VH.e, OH.b, bH.b, kH.d, mH.c, oH.b, IH.e, fH.b, lH.c, KH.d, cH.d, eH.b, qH.d, gH.e, NH.e, RH.e, jH.b, DH, wH.c];
+     for (const JH of aH) AH.c.IncludesShadersStore[JH.name] || (AH.c.IncludesShadersStore[JH.name] = JH.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/626.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/626.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L4)

```diff
-   44692: (UU, XU, zU) => {
+   45463: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L6)

```diff
-       d: () => AU
+       c: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L8)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L11)

```diff
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L17)

```diff
-   44606: (UU, XU, zU) => {
+   45376: (HH, BH, LH) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L19)

```diff
-       b: () => AU
+       e: () => hH
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L21)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L24)

```diff
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L30)

```diff
-   44597: (UU, XU, zU) => {
+   45373: (HH, BH, LH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L32)

```diff
-       c: () => AU
+       d: () => hH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L34)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L37)

```diff
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L43)

```diff
-   44688: (UU, XU, zU) => {
+   45461: (HH, BH, LH) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L45)

```diff
-       c: () => AU
+       b: () => hH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L47)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L50)

```diff
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L56)

```diff
-   44704: (UU, XU, zU) => {
+   45489: (HH, BH, LH) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L60-L63)

```diff
-     var cU = zU(40961);
-     const yU = "bumpVertex",
-       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertex",
+       SH = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L69)

```diff
-   44713: (UU, XU, zU) => {
+   45408: (HH, BH, LH) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L71)

```diff
-       d: () => AU
+       b: () => hH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L73-L76)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertex",
-       QU = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertexDeclaration",
+       SH = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L82)

```diff
-   44634: (UU, XU, zU) => {
+   45336: (HH, BH, LH) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L84)

```diff
-       c: () => AU
+       b: () => hH
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L86-L89)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertexDeclaration",
-       QU = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "decalVertexDeclaration",
+       SH = "#ifdef DECAL\nuniform vec4 vDecalInfos;uniform mat4 decalMatrix;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L95)

```diff
-   64201: (UU, XU, zU) => {
+   45497: (HH, BH, LH) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L97)

```diff
-       c: () => AU
+       e: () => hH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L99-L102` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L99-L102) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L99-L102)

```diff
-     var cU = zU(40961);
-     const yU = "harmonicsFunctions",
-       QU = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogVertex",
+       SH = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L108)

```diff
-   44609: (UU, XU, zU) => {
+   45417: (HH, BH, LH) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L112` → after: `L112-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L112-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L112-L138) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L112)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
+     const rH = "fogVertexDeclaration",
+       SH = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45369: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "helperFunctions",
+       SH = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+ ... (11 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L115` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L141) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L115)

```diff
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L121` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L147) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L121)

```diff
-   44684: (UU, XU, zU) => {
+   45452: (HH, BH, LH) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L123` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L149) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L123)

```diff
-       c: () => AU
+       e: () => hH
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L125` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L151) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L125)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L128` → after: `L154-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L154-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L154-L219) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L128)

```diff
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45423: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "lightVxFragmentDeclaration",
+       SH = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+ ... (50 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L134` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L225) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L134)

```diff
-   44679: (UU, XU, zU) => {
+   45351: (HH, BH, LH) => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L138` → after: `L229-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L229-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L229-L242) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L138)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
+     const rH = "meshUboDeclaration",
+       SH = "#ifdef WEBGL2\nuniform mat4 world;uniform float visibility;\n#else\nlayout(std140,column_major) uniform;uniform Mesh\n{mat4 world;float visibility;};\n#endif\n#define WORLD_UBO\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45450: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L141` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L245) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L141)

```diff
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L147` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L251) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L147)

```diff
-   44663: (UU, XU, zU) => {
+   45434: (HH, BH, LH) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L149` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L253) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L149)

```diff
-       c: () => AU
+       b: () => hH
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L151` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L255) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L151)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L154` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L258) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L154)

```diff
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L160` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L264) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L160)

```diff
-   44673: (UU, XU, zU) => {
+   45442: (HH, BH, LH) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L162` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L266) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L162)

```diff
-       e: () => AU
+       c: () => hH
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L164` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L268) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L164)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L167` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L271) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L167)

```diff
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L173` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L277) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L173)

```diff
-   44661: (UU, XU, zU) => {
+   45430: (HH, BH, LH) => {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L175` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L279) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L175)

```diff
-       d: () => AU
+       b: () => hH
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L177` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L281) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L177)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L180` → after: `L284-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L284-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L284-L297) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L180)

```diff
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45468: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "prePassVertex",
+       SH = "#ifdef PREPASS_DEPTH\nvViewPos=(view*worldPos).rgb;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvNormViewDepth=((view*worldPos).z-cameraInfo.x)/(cameraInfo.y-cameraInfo.x);\n#endif\n#ifdef PREPASS_LOCAL_POSITION\nvPosition=positionUpdated.xyz;\n#endif\n#if (defined … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L186` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L303) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L186)

```diff
-   44571: (UU, XU, zU) => {
+   45387: (HH, BH, LH) => {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L190` → after: `L307-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L307-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L307-L346) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L190)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
+     const rH = "prePassVertexDeclaration",
+       SH = "#ifdef PREPASS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vec3 vPosition;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vec3 vViewPos;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying float vNormViewDepth;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45398: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "samplerVertexDeclaration",
+       SH = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nvarying vec2 v_VARYINGNAME_UV;\n#endif\n";
+ ... (24 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L193` → after: `L349-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L349-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L349-L362) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L193)

```diff
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45502: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "shadowsVertex",
+       SH = "#ifdef SHADOWS\n#if defined(SHADOWCSM{X})\nvPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;\n#ifdef USE_REVERSE_DEPTHBUFFER\nvDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{ … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L199-L201` → after: `L368-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L368-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L368-L370) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L199-L201)

```diff
-   64525: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       geometryVertexShader: () => CU
+   45364: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L203-L211` → after: `L372-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L372-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L372-L375) · [Before (L203-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L203-L211)

```diff
-     var cU = zU(40961),
-       yU = zU(44597),
-       QU = zU(44606),
-       AU = zU(44661),
-       FU = zU(44663),
-       oU = zU(44609);
-     const DU = "geometryVertexDeclaration",
-       EU = "uniform mat4 viewProjection;uniform mat4 view;";
-     cU.b.IncludesShadersStore[DU] || (cU.b.IncludesShadersStore[DU] = EU);
+     var AH = LH(41138);
+     const rH = "uvAttributeDeclaration",
+       SH = "#ifdef UV{X}\nattribute vec2 uv{X};\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L215-L219` → after: `L379-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L379-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L379-L388) · [Before (L215-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L215-L219)

```diff
-     };
-     var NU = zU(44571);
-     const IU = "geometryUboDeclaration",
-       pU = "#include<sceneUboDeclaration>\n";
-     cU.b.IncludesShadersStore[IU] || (cU.b.IncludesShadersStore[IU] = pU);
+     }
+   },
+   45475: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "uvVariableDeclaration",
+       SH = "#if !defined(UV{X}) && defined(MAINUV{X})\nvec2 uv{X}=vec2(0.,0.);\n#endif\n#ifdef MAINUV{X}\nvMainUV{X}=uv{X};\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L223-L237` → after: `L392-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L392-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/626.js#L392-L401) · [Before (L223-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/626.js#L223-L237)

```diff
-     };
-     var tU = zU(44634),
-       gU = zU(64201),
-       kU = zU(44673),
-       GU = zU(44679),
-       BU = zU(44684),
-       ZU = zU(44688),
-       RU = zU(44692),
-       PU = zU(44713),
-       WU = zU(44704);
-     const dU = "geometryVertexShader",
-       LU = "precision highp float;\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#include<instancesDeclaration>\n#include<__decl__geom … [truncated]
-     cU.b.ShadersStore[dU] || (cU.b.ShadersStore[dU] = LU);
-     const eU = [yU.c, QU.b, AU.d, FU.c, oU.c, YU, NU.c, aU, tU.c, gU.c, kU.e, GU.c, BU.c, ZU.c, RU.d, PU.d, WU.e];
-     for (const wU of eU) cU.b.IncludesShadersStore[wU.name] || (cU.b.IncludesShadersStore[wU.name] = wU.shader);
+     }
+   },
+   45505: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "vertexColorMixing",
+       SH = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=colorUpdated;\n#else\nvColor.rgb*=colorUpdated.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#e … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/627.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/627.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953)

#### 1. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L4` → after: `L4-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/627.js#L4-L43) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/627.js#L4)

```diff
-   44577: (UU, XU, zU) => {
+   45527: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "decalFragmentDeclaration",
+       SH = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45643: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+ ... (24 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L8-L12` → after: `L47-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L47-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/627.js#L47-L115) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/627.js#L8-L12)

```diff
-     var cU = zU(40961);
-     zU(44571), zU(44575);
-     const yU = "defaultUboDeclaration",
-       QU = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "lightUboDeclaration",
+       SH = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45563: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "ltcHelperFunctions",
+       SH = "vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+ … [truncated]
+ ... (53 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L18-L20` → after: `L121-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/627.js#L121-L123) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/627.js#L18-L20)

```diff
-   44739: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       defaultPixelShader: () => hU
+   45592: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L22-L26` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/627.js#L125-L128) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/627.js#L22-L26)

```diff
-     var cU = zU(40961),
-       yU = zU(44745);
-     const QU = "defaultFragmentDeclaration",
-       AU = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
-     cU.b.IncludesShadersStore[QU] || (cU.b.IncludesShadersStore[QU] = AU);
+     var AH = LH(41138);
+     const rH = "reflectionFunction",
+       SH = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L30-L45` → after: `L132-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L132-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/627.js#L132-L141) · [Before (L30-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/627.js#L30-L45)

```diff
-     };
-     var oU = zU(44571),
-       DU = zU(44575),
-       EU = zU(44577),
-       YU = zU(44754),
-       NU = zU(44759),
-       IU = zU(44764),
-       pU = zU(44620),
-       aU = zU(44588),
-       tU = zU(44767),
-       gU = zU(44774),
-       kU = zU(44776),
-       GU = zU(44779);
-     const BU = "lightsFragmentFunctions",
-       ZU = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
-     cU.b.IncludesShadersStore[BU] || (cU.b.IncludesShadersStore[BU] = ZU);
+     }
+   },
+   45583: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "samplerFragmentDeclaration",
+       SH = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L49-L54` → after: `L145-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L145-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/627.js#L145-L154) · [Before (L49-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/627.js#L49-L54)

```diff
-     };
-     var PU = zU(44782),
-       WU = zU(44791);
-     const dU = "fresnelFunction",
-       LU = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
-     cU.b.IncludesShadersStore[dU] || (cU.b.IncludesShadersStore[dU] = LU);
+     }
+   },
+   45342: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "sceneUboDeclaration",
+       SH = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L58-L73` → after: `L158-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L158-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/627.js#L158-L167) · [Before (L58-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/627.js#L58-L73)

```diff
-     };
-     var CU = zU(44798),
-       wU = zU(44803),
-       qU = zU(44810),
-       OU = zU(44818),
-       SU = zU(44822),
-       rU = zU(44824),
-       uU = zU(44833),
-       fU = zU(44671),
-       iU = zU(44838),
-       HU = zU(44841),
-       MU = zU(44845),
-       vU = zU(44848);
-     const VU = "defaultFragmentAlpha",
-       sU = "#ifdef OPACITY\nvec4 opacityMap=TEXRD(opacitySampler,vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*vOpacityInfos.y;\n#endif\n#en … [truncated]
-     cU.b.IncludesShadersStore[VU] || (cU.b.IncludesShadersStore[VU] = sU);
+     }
+   },
+   45577: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "shadowsFragmentFunctions",
+       SH = "#ifdef SHADOWS\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\n#ifndef SHADOWFLOAT\nfloat unpack(vec4 color)\n{const vec4 bit_shift=vec4(1.0/(255 … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L77-L87` → after: `L171-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L171-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/627.js#L171-L180) · [Before (L77-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/627.js#L77-L87)

```diff
-     };
-     var mU = zU(44850),
-       lU = zU(44856),
-       xU = zU(44860),
-       JU = zU(44866),
-       jU = zU(44875);
-     const KU = "defaultPixelShader",
-       bU = "#define CUSTOM_FRAGMENT_EXTENSION\n#include<__decl__defaultFragment>\n#if defined(BUMP) || !defined(NORMAL)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN … [truncated]
-     cU.b.ShadersStore[KU] || (cU.b.ShadersStore[KU] = bU);
-     const TU = [yU.e, FU, oU.c, DU.c, EU.d, YU.c, NU.d, IU.e, pU.e, aU.d, tU.c, gU.c, kU.d, GU.e, RU, PU.e, WU.e, eU, CU.c, wU.b, qU.c, OU.d, SU.d, rU.b, uU.c, fU.e, iU.b, HU.c, MU.c, vU.b, nU, mU.c, lU.e, xU.b, JU.e, jU.e];
-     for (const UX of TU) cU.b.IncludesShadersStore[UX.name] || (cU.b.IncludesShadersStore[UX.name] = UX.shader);
+     }
+   },
+   45609: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "textureRepetitionFunctions",
+       SH = "#if TEXTURE_REPETITION_MODE>0\nvec4 _texRepHash4(vec2 p) {return fract(sin(vec4(\n1.0+dot(p,vec2(37.0,17.0)),\n2.0+dot(p,vec2(11.0,47.0)),\n3.0+dot(p,vec2(41.0,29.0)),\n4.0+dot(p,vec2(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nvec4 _texRepSample … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/628.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/628.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670)

#### 1. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L4)

```diff
-   44841: (UU, XU, zU) => {
+   45633: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L8` → after: `L8-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L8-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L8-L48) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L8)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
+     const rH = "bumpFragment",
+       SH = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45618: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     LH(45583);
+     const rH = "bumpFragmentFunctions",
+ ... (25 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L11` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L51) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L11)

```diff
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L17` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L57) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L17)

```diff
-   44833: (UU, XU, zU) => {
+   45620: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L19` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L59) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L19)

```diff
-       c: () => AU
+       e: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L21` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L61) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L21)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L24` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L64) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L24)

```diff
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L30` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L70) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L30)

```diff
-   44866: (UU, XU, zU) => {
+   45369: (HH, BH, LH) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L32` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L72) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L32)

```diff
-       e: () => AU
+       d: () => hH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L34-L37` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L74-L77) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L34-L37)

```diff
-     var cU = zU(40961);
-     const yU = "fogFragment",
-       QU = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "helperFunctions",
+       SH = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L43` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L83) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L43)

```diff
-   44838: (UU, XU, zU) => {
+   45536: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L45` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L85) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L45)

```diff
-       b: () => AU
+       c: () => hH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L47-L50` → after: `L87-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L87-L90) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L47-L50)

```diff
-     var cU = zU(40961);
-     const yU = "fogFragmentDeclaration",
-       QU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "objectIdFunctions",
+       SH = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L56` → after: `L96-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L96-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L96-L109) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L56)

```diff
-   44588: (UU, XU, zU) => {
+   64612: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "openpbrDielectricReflectance",
+       SH = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   64614: (HH, BH, LH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L60-L63` → after: `L113-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L113-L116) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L60-L63)

```diff
-     var cU = zU(40961);
-     const yU = "helperFunctions",
-       QU = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "openpbrGeometryInfo",
+       SH = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L69` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L122) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L69)

```diff
-   44803: (UU, XU, zU) => {
+   64618: (HH, BH, LH) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L71` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L124) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L71)

```diff
-       b: () => AU
+       c: () => hH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L73-L76` → after: `L126-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L126-L129) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L73-L76)

```diff
-     var cU = zU(40961);
-     const yU = "imageProcessingDeclaration",
-       QU = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "openpbrIblFunctions",
+       SH = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L82` → after: `L135-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L135-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L135-L148) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L82)

```diff
-   44810: (UU, XU, zU) => {
+   64632: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "openpbrSubsurfaceLayerData",
+       SH = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   64627: (HH, BH, LH) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L86-L89` → after: `L152-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L152-L155) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L86-L89)

```diff
-     var cU = zU(40961);
-     const yU = "imageProcessingFunctions",
-       QU = "#if defined(COLORGRADING) && !defined(COLORGRADING3D)\n/** \n* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.\n* sampler3dSetting.x=textureOffset (0.5/textureSize).\n* sampler3dSetting.y=textureSize.\n*/\n#define inline\nvec3 sampleTexture3D(sampler2D c … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "openpbrTransmissionLayerData",
+       SH = "float transmission_weight=vTransmissionWeight;vec3 transmission_color=vTransmissionColor.rgb;float transmission_depth=vTransmissionDepth;vec3 transmission_scatter=vTransmissionScatter.rgb;float transmission_scatter_anisotropy=clamp(vTransmissionScatterAnisotropy,-0.99 … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L95` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L161) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L95)

```diff
-   44671: (UU, XU, zU) => {
+   64388: (HH, BH, LH) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L97` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L163) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L97)

```diff
-       e: () => AU
+       b: () => hH
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L99-L102` → after: `L165-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L165-L168) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L99-L102)

```diff
-     var cU = zU(40961);
-     const yU = "logDepthDeclaration",
-       QU = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "pbrBRDFFunctions",
+       SH = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L108` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L174) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L108)

```diff
-   44860: (UU, XU, zU) => {
+   64414: (HH, BH, LH) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L112-L115` → after: `L178-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L178-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L178-L181) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L112-L115)

```diff
-     var cU = zU(40961);
-     const yU = "logDepthFragment",
-       QU = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "pbrFragmentReflectionDeclaration",
+       SH = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L121` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L187) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L121)

```diff
-   44754: (UU, XU, zU) => {
+   64458: (HH, BH, LH) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L123` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L189) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L123)

```diff
-       c: () => AU
+       d: () => hH
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L125-L128` → after: `L191-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L191-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L191-L220) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L125-L128)

```diff
-     var cU = zU(40961);
-     const yU = "objectIdFunctions",
-       QU = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "pbrIBLFunctions",
+       SH = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45592: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "reflectionFunction",
+       SH = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
+ ... (14 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L134` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L226) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L134)

```diff
-   44759: (UU, XU, zU) => {
+   64604: (HH, BH, LH) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L138-L142` → after: `L230-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L230-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/628.js#L230-L287) · [Before (L138-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/628.js#L138-L142)

```diff
-     var cU = zU(40961);
-     zU(44754);
-     const yU = "prePassDeclaration",
-       QU = "#ifdef PREPASS\n#extension GL_EXT_draw_buffers : require\n#ifdef PREPASS_MESH_BLEND_TAG\n#if {X}>0\n#if PREPASS_MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if  … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "sceneFragmentDeclaration",
+       SH = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45342: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "sceneUboDeclaration",
+       SH = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
+ ... (42 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/629.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/629.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/629.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/629.js#L4)

```diff
-   44841: (UU, XU, zU) => {
+   45463: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L8-L17` → after: `L8-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L8-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/629.js#L8-L160) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/629.js#L8-L17)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneFragment",
-       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   44833: (UU, XU, zU) => {
+     var AH = LH(41138);
+     const rH = "bakedVertexAnimation",
+       SH = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45376: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "bakedVertexAnimationDeclaration",
+       SH = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+ ... (137 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L21-L95` → after: `L164-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L164-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/629.js#L164-L199) · [Before (L21-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/629.js#L21-L95)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneFragmentDeclaration",
-       QU = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   44866: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "fogFragment",
-       QU = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
- ... (59 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "morphTargetsVertexGlobal",
+       SH = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nfloat vertexID;\n#endif\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45430: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "morphTargetsVertexGlobalDeclaration",
+       SH = "#ifdef MORPHTARGETS\nuniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];\n#ifdef MORPHTARGETS_TEXTURE \nuniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector … [truncated]
+ ... (20 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L97-L118` → after: `L201-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L201-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/629.js#L201-L237) · [Before (L97-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/629.js#L97-L118)

```diff
-       skyPixelShader: () => gU
-     });
-     var cU = zU(40961),
-       yU = zU(44833),
-       QU = zU(44671),
-       AU = zU(44838),
-       FU = zU(44588),
-       oU = zU(44841),
-       DU = zU(44860),
-       EU = zU(44866);
-     const YU = "imageProcessingCompatibility",
-       NU = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
-     cU.b.IncludesShadersStore[YU] || (cU.b.IncludesShadersStore[YU] = NU);
-     const IU = {
-         name: YU,
-         shader: NU
- ... (6 more removed lines; see GitHub link above)
+       geometryVertexShader: () => oH
+     });
+     var AH = LH(41138),
+       rH = LH(45373),
+       SH = LH(45376),
+       hH = LH(45430),
+       tH = LH(45434),
+       zH = LH(45378);
+     const CH = "geometryVertexDeclaration",
+       EH = "uniform mat4 viewProjection;uniform mat4 view;";
+     AH.c.IncludesShadersStore[CH] || (AH.c.IncludesShadersStore[CH] = EH);
+     const XH = {
+       name: CH,
+       shader: EH
+     };
+     var GH = LH(45342);
+ ... (21 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/630.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/630.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/630.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/630.js#L4)

```diff
-   44588: (UU, XU, zU) => {
+   45358: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/630.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/630.js#L6)

```diff
-       d: () => AU
+       b: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/630.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/630.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "helperFunctions",
-       QU = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     LH(45342), LH(45351);
+     const rH = "defaultUboDeclaration",
+       SH = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/630.js#L18) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/630.js#L17)

```diff
-   64057: (UU, XU, zU) => {
+   45518: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L19` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/630.js#L20) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/630.js#L19)

```diff
-       rgbdDecodePixelShader: () => oU
+       defaultPixelShader: () => yH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L21-L27` → after: `L22-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L22-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/630.js#L22-L87) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/630.js#L21-L27)

```diff
-     var cU = zU(40961),
-       yU = zU(44588);
-     const QU = "rgbdDecodePixelShader",
-       AU = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
-     cU.b.ShadersStore[QU] || (cU.b.ShadersStore[QU] = AU);
-     const FU = [yU.d];
-     for (const DU of FU) cU.b.IncludesShadersStore[DU.name] || (cU.b.IncludesShadersStore[DU.name] = DU.shader);
+     var AH = LH(41138),
+       rH = LH(45527);
+     const SH = "defaultFragmentDeclaration",
+       hH = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
+     AH.c.IncludesShadersStore[SH] || (AH.c.IncludesShadersStore[SH] = hH);
+     const tH = {
+       name: SH,
+       shader: hH
+     };
+     var zH = LH(45342),
+       CH = LH(45351),
+       EH = LH(45358),
+       XH = LH(45536),
+       GH = LH(45541),
+       YH = LH(45549),
+       uH = LH(45395),
+ ... (50 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/631.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/631.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/631.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/631.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/631.js#L4)

```diff
-   44588: (UU, XU, zU) => {
+   45629: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/631.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/631.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/631.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "helperFunctions",
-       QU = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneFragment",
+       SH = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/631.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/631.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/631.js#L17-L19)

```diff
-   64069: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       rgbdEncodePixelShader: () => oU
+   45620: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/631.js` (Changed code · before: `L21-L27` → after: `L21-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94) · [After (L21-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/631.js#L21-L142) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/631.js#L21-L27)

```diff
-     var cU = zU(40961),
-       yU = zU(44588);
-     const QU = "rgbdEncodePixelShader",
-       AU = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
-     cU.b.ShadersStore[QU] || (cU.b.ShadersStore[QU] = AU);
-     const FU = [yU.d];
-     for (const DU of FU) cU.b.IncludesShadersStore[DU.name] || (cU.b.IncludesShadersStore[DU.name] = DU.shader);
+     var AH = LH(41138);
+     const rH = "clipPlaneFragmentDeclaration",
+       SH = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45665: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "fogFragment",
+       SH = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+ ... (106 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/632.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/632.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L4)

```diff
-   44692: (UU, XU, zU) => {
+   45629: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "bakedVertexAnimation",
-       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneFragment",
+       SH = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L17)

```diff
-   44606: (UU, XU, zU) => {
+   45620: (HH, BH, LH) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L19)

```diff
-       b: () => AU
+       e: () => hH
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L21-L24)

```diff
-     var cU = zU(40961);
-     const yU = "bakedVertexAnimationDeclaration",
-       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneFragmentDeclaration",
+       SH = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L30)

```diff
-   44597: (UU, XU, zU) => {
+   45665: (HH, BH, LH) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L34-L37)

```diff
-     var cU = zU(40961);
-     const yU = "bonesDeclaration",
-       QU = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogFragment",
+       SH = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L43)

```diff
-   44688: (UU, XU, zU) => {
+   45625: (HH, BH, LH) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L45)

```diff
-       c: () => AU
+       d: () => hH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L47-L50)

```diff
-     var cU = zU(40961);
-     const yU = "bonesVertex",
-       QU = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogFragmentDeclaration",
+       SH = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L56)

```diff
-   44713: (UU, XU, zU) => {
+   45369: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L60-L63)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertex",
-       QU = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "helperFunctions",
+       SH = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L69)

```diff
-   44634: (UU, XU, zU) => {
+   45440: (HH, BH, LH) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L71)

```diff
-       c: () => AU
+       d: () => hH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L73-L76)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertexDeclaration",
-       QU = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "logDepthDeclaration",
+       SH = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L82)

```diff
-   44721: (UU, XU, zU) => {
+   45658: (HH, BH, LH) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L84)

```diff
-       d: () => AU
+       e: () => hH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L86-L89)

```diff
-     var cU = zU(40961);
-     const yU = "fogVertex",
-       QU = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "logDepthFragment",
+       SH = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L95-L97` → after: `L95-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L95-L97) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L95-L97)

```diff
-   44642: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
+   64164: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       skyPixelShader: () => MH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L99-L102` → after: `L99-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L99-L109) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L99-L102)

```diff
-     var cU = zU(40961);
-     const yU = "fogVertexDeclaration",
-       QU = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138),
+       rH = LH(45620),
+       SH = LH(45440),
+       hH = LH(45625),
+       tH = LH(45369),
+       zH = LH(45629),
+       CH = LH(45658),
+       EH = LH(45665);
+     const XH = "imageProcessingCompatibility",
+       GH = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
+     AH.c.IncludesShadersStore[XH] || (AH.c.IncludesShadersStore[XH] = GH);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L104-L167` → after: `L111-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L111-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/632.js#L111-L118) · [Before (L104-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/632.js#L104-L167)

```diff
-       name: yU,
-       shader: QU
-     }
-   },
-   44609: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "instancesDeclaration",
-       QU = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
- ... (48 more removed lines; see GitHub link above)
+         name: XH,
+         shader: GH
+       },
+       uH = "skyPixelShader",
+       QH = "precision highp float;varying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform floa … [truncated]
+     AH.c.ShadersStore[uH] || (AH.c.ShadersStore[uH] = QH);
+     const WH = [rH.e, SH.d, hH.d, tH.d, zH.d, CH.e, EH.c, YH];
+     for (const xH of WH) AH.c.IncludesShadersStore[xH.name] || (AH.c.IncludesShadersStore[xH.name] = xH.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/633.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/633.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/633.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/633.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/633.js#L4)

```diff
-   44609: (UU, XU, zU) => {
+   45369: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/633.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/633.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/633.js#L6)

```diff
-       c: () => AU
+       d: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/633.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/633.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/633.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "instancesDeclaration",
-       QU = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "helperFunctions",
+       SH = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/633.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282fR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/633.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/633.js#L17-L19)

```diff
-   44684: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
+   64238: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       rgbdDecodePixelShader: () => zH
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/633.js` (Changed code · before: `L21-L41` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/633.js#L21-L27) · [Before (L21-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/633.js#L21-L41)

```diff
-     var cU = zU(40961);
-     const yU = "instancesVertex",
-       QU = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   64563: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       greasedLineVertexShader: () => DU
-     });
-     var cU = zU(40961),
-       yU = zU(44609),
-       QU = zU(44684);
- ... (5 more removed lines; see GitHub link above)
+     var AH = LH(41138),
+       rH = LH(45369);
+     const SH = "rgbdDecodePixelShader",
+       hH = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
+     AH.c.ShadersStore[SH] || (AH.c.ShadersStore[SH] = hH);
+     const tH = [rH.d];
+     for (const CH of tH) AH.c.IncludesShadersStore[CH.name] || (AH.c.IncludesShadersStore[CH.name] = CH.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/634.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/634.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05)

#### 1. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/634.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/634.js#L4)

```diff
-   44704: (UU, XU, zU) => {
+   45369: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/634.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/634.js#L6)

```diff
-       e: () => AU
+       d: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/634.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/634.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "bumpVertex",
-       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "helperFunctions",
+       SH = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/634.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/634.js#L17-L19)

```diff
-   44631: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
+   64245: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       rgbdEncodePixelShader: () => zH
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L21-L122` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/634.js#L21-L27) · [Before (L21-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/634.js#L21-L122)

```diff
-     var cU = zU(40961);
-     const yU = "bumpVertexDeclaration",
-       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   64201: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "harmonicsFunctions",
-       QU = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
- ... (86 more removed lines; see GitHub link above)
+     var AH = LH(41138),
+       rH = LH(45369);
+     const SH = "rgbdEncodePixelShader",
+       hH = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
+     AH.c.ShadersStore[SH] || (AH.c.ShadersStore[SH] = hH);
+     const tH = [rH.d];
+     for (const CH of tH) AH.c.IncludesShadersStore[CH.name] || (AH.c.IncludesShadersStore[CH.name] = CH.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/635.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/635.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L4)

```diff
-   44713: (UU, XU, zU) => {
+   45463: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L6)

```diff
-       d: () => AU
+       c: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertex",
-       QU = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bakedVertexAnimation",
+       SH = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L17)

```diff
-   44634: (UU, XU, zU) => {
+   45376: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L19)

```diff
-       c: () => AU
+       e: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L21-L24)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertexDeclaration",
-       QU = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bakedVertexAnimationDeclaration",
+       SH = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L30)

```diff
-   44721: (UU, XU, zU) => {
+   45373: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L34-L37)

```diff
-     var cU = zU(40961);
-     const yU = "fogVertex",
-       QU = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bonesDeclaration",
+       SH = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L43)

```diff
-   44642: (UU, XU, zU) => {
+   45461: (HH, BH, LH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L45)

```diff
-       c: () => AU
+       b: () => hH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L47-L50)

```diff
-     var cU = zU(40961);
-     const yU = "fogVertexDeclaration",
-       QU = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bonesVertex",
+       SH = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L56)

```diff
-   44671: (UU, XU, zU) => {
+   45489: (HH, BH, LH) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L60-L63)

```diff
-     var cU = zU(40961);
-     const yU = "logDepthDeclaration",
-       QU = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertex",
+       SH = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L69)

```diff
-   44732: (UU, XU, zU) => {
+   45408: (HH, BH, LH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L71)

```diff
-       d: () => AU
+       b: () => hH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L73-L76)

```diff
-     var cU = zU(40961);
-     const yU = "logDepthVertex",
-       QU = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertexDeclaration",
+       SH = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L82` → after: `L82-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L82-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L82-L147) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L82)

```diff
-   63990: (UU, XU, zU) => {
+   45497: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "fogVertex",
+       SH = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45417: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH
+ ... (50 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L84` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L149) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L84)

```diff
-       particlesVertexShader: () => IU
+       colorVertexShader: () => xH
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L86-L97` → after: `L151-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/635.js#L151-L167) · [Before (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/635.js#L86-L97)

```diff
-     var cU = zU(40961),
-       yU = zU(44634),
-       QU = zU(44642),
-       AU = zU(44671),
-       FU = zU(44713),
-       oU = zU(44721),
-       DU = zU(44732);
-     const EU = "particlesVertexShader",
-       YU = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
-     cU.b.ShadersStore[EU] || (cU.b.ShadersStore[EU] = YU);
-     const NU = [yU.c, QU.c, AU.e, FU.d, oU.d, DU.d];
-     for (const pU of NU) cU.b.IncludesShadersStore[pU.name] || (cU.b.IncludesShadersStore[pU.name] = pU.shader);
+     var AH = LH(41138),
+       rH = LH(45373),
+       SH = LH(45376),
+       hH = LH(45408),
+       tH = LH(45417),
+       zH = LH(45378),
+       CH = LH(45452),
+       EH = LH(45461),
+       XH = LH(45463),
+       GH = LH(45489),
+       YH = LH(45497),
+       uH = LH(45505);
+     const QH = "colorVertexShader",
+       WH = "attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform mat4 view;\n#endif\n#include<i … [truncated]
+     AH.c.ShadersStore[QH] || (AH.c.ShadersStore[QH] = WH);
+     const MH = [rH.d, SH.e, hH.b, tH.c, zH.b, CH.e, EH.b, XH.c, GH.e, YH.e, uH.b];
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/636.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/636.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78)

#### 1. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/636.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/636.js#L4)

```diff
-   44713: (UU, XU, zU) => {
+   45378: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/636.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/636.js#L6)

```diff
-       d: () => AU
+       b: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/636.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/636.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertex",
-       QU = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "instancesDeclaration",
+       SH = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/636.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/636.js#L17)

```diff
-   44634: (UU, XU, zU) => {
+   45452: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/636.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/636.js#L19)

```diff
-       c: () => AU
+       e: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/636.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/636.js#L21-L24)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertexDeclaration",
-       QU = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "instancesVertex",
+       SH = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L30-L32` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/636.js#L30-L32) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/636.js#L30-L32)

```diff
-   44721: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => AU
+   64742: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       greasedLineVertexShader: () => CH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L34-L97` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/636.js#L34-L41) · [Before (L34-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/636.js#L34-L97)

```diff
-     var cU = zU(40961);
-     const yU = "fogVertex",
-       QU = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   44642: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "fogVertexDeclaration",
-       QU = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
- ... (48 more removed lines; see GitHub link above)
+     var AH = LH(41138),
+       rH = LH(45378),
+       SH = LH(45452);
+     const hH = "greasedLineVertexShader",
+       tH = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
+     AH.c.ShadersStore[hH] || (AH.c.ShadersStore[hH] = tH);
+     const zH = [rH.b, SH.e];
+     for (const EH of zH) AH.c.IncludesShadersStore[EH.name] || (AH.c.IncludesShadersStore[EH.name] = EH.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/637.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/637.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L4)

```diff
-   44845: (UU, XU, zU) => {
+   45485: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L6)

```diff
-       c: () => AU
+       d: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "bumpFragment",
-       QU = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bumpVertex",
+       SH = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L17)

```diff
-   44824: (UU, XU, zU) => {
+   45404: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L19)

```diff
-       b: () => AU
+       d: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L21-L25)

```diff
-     var cU = zU(40961);
-     zU(44791);
-     const yU = "bumpFragmentFunctions",
-       QU = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bumpVertexDeclaration",
+       SH = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L31)

```diff
-   44822: (UU, XU, zU) => {
+   64391: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L35-L38)

```diff
-     var cU = zU(40961);
-     const yU = "bumpFragmentMainFunctions",
-       QU = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "harmonicsFunctions",
+       SH = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L44)

```diff
-   44779: (UU, XU, zU) => {
+   64388: (HH, BH, LH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L46)

```diff
-       e: () => AU
+       b: () => hH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L48-L51)

```diff
-     var cU = zU(40961);
-     const yU = "clusteredLightingFunctions",
-       QU = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "pbrBRDFFunctions",
+       SH = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L57)

```diff
-   44848: (UU, XU, zU) => {
+   64381: (HH, BH, LH) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L59` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L58) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L59)

```diff
-       b: () => AU
+       d: () => hH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L61-L64` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L60-L64) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L61-L64)

```diff
-     var cU = zU(40961);
-     const yU = "decalFragment",
-       QU = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     LH(45342), LH(45351);
+     const rH = "pbrUboDeclaration",
+       SH = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L70-L72` → after: `L70-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L70-L72) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L70-L72)

```diff
-   44856: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => AU
+   64372: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       pbrVertexShader: () => aH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L74-L77` → after: `L74-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L74-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/637.js#L74-L122) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/637.js#L74-L77)

```diff
-     var cU = zU(40961);
-     const yU = "lightFragment",
-       QU = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138),
+       rH = LH(45336);
+     const SH = "pbrVertexDeclaration",
+       hH = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
+     AH.c.IncludesShadersStore[SH] || (AH.c.IncludesShadersStore[SH] = hH);
+     const tH = {
+       name: SH,
+       shader: hH
+     };
+     var zH = LH(45342),
+       CH = LH(45351),
+       EH = LH(64381),
+       XH = LH(45364),
+       GH = LH(45395),
+       YH = LH(45369),
+       uH = LH(64388),
+ ... (33 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/638.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/638.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L4)

```diff
-   44841: (UU, XU, zU) => {
+   45489: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L6)

```diff
-       c: () => AU
+       e: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneFragment",
-       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertex",
+       SH = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L17)

```diff
-   44833: (UU, XU, zU) => {
+   45408: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L19)

```diff
-       c: () => AU
+       b: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L21-L24)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneFragmentDeclaration",
-       QU = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertexDeclaration",
+       SH = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L30)

```diff
-   44866: (UU, XU, zU) => {
+   45497: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L34-L37)

```diff
-     var cU = zU(40961);
-     const yU = "fogFragment",
-       QU = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogVertex",
+       SH = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L43)

```diff
-   44838: (UU, XU, zU) => {
+   45417: (HH, BH, LH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L45)

```diff
-       b: () => AU
+       c: () => hH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L47-L50)

```diff
-     var cU = zU(40961);
-     const yU = "fogFragmentDeclaration",
-       QU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogVertexDeclaration",
+       SH = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L56` → after: `L56-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L56-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L56-L82) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L56)

```diff
-   45242: (UU, XU, zU) => {
+   45440: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "logDepthDeclaration",
+       SH = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45514: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH
+ ... (11 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L58` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L84) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L58)

```diff
-       colorPixelShader: () => YU
+       particlesVertexShader: () => YH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L60-L69` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/638.js#L86-L97) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/638.js#L60-L69)

```diff
-     var cU = zU(40961),
-       yU = zU(44833),
-       QU = zU(44838),
-       AU = zU(44841),
-       FU = zU(44866);
-     const oU = "colorPixelShader",
-       DU = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
-     cU.b.ShadersStore[oU] || (cU.b.ShadersStore[oU] = DU);
-     const EU = [yU.c, QU.b, AU.c, FU.e];
-     for (const NU of EU) cU.b.IncludesShadersStore[NU.name] || (cU.b.IncludesShadersStore[NU.name] = NU.shader);
+     var AH = LH(41138),
+       rH = LH(45408),
+       SH = LH(45417),
+       hH = LH(45440),
+       tH = LH(45489),
+       zH = LH(45497),
+       CH = LH(45514);
+     const EH = "particlesVertexShader",
+       XH = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
+     AH.c.ShadersStore[EH] || (AH.c.ShadersStore[EH] = XH);
+     const GH = [rH.b, SH.c, hH.d, tH.e, zH.e, CH.c];
+     for (const uH of GH) AH.c.IncludesShadersStore[uH.name] || (AH.c.IncludesShadersStore[uH.name] = uH.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/639.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/639.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L4)

```diff
-   45043: (UU, XU, zU) => {
+   45489: (HH, BH, LH) => {
```
