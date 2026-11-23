# Changed — Bundle Modifications Report (Part 022 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `22 / 104` (**420** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 021](part-021.md) · [Part 023 →](part-023.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4595 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 3809. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29202` → after: `L28978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L28978) · [Before (L29202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29202)

```diff
-             return null !== (ik = this.imagesPerAtlas[ek]) && void 0 !== ik ? ik : Mk
+             return null !== (ZC = this.imagesPerAtlas[zC]) && void 0 !== ZC ? ZC : FC
```

#### 3810. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29204-L29209` → after: `L28980-L28985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28980-L28985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L28980-L28985) · [Before (L29204-L29209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29204-L29209)

```diff
-           fk = ik.map(((kk, ik) => (0, bk.wb)(ek, `textureAtlas${ik}`, this.useWebGL2 ? "2dArray" : "2d"))).join("\n"),
-           Sk = (0, bk.Hb)(ek, "uAnimData"),
-           rk = (0, bk.Hb)(ek, "uAnimDataPerTex"),
-           Pk = (0, bk.i)(ek),
-           mk = (0, bk.Kb)(ek, "texAtlasIndex", "float", "mediump"),
-           xk = (0, bk.T)(ek, "texAtlasIndex");
+           wC = ZC.map(((CC, ZC) => (0, nC.gb)(zC, `textureAtlas${ZC}`, this.useWebGL2 ? "2dArray" : "2d"))).join("\n"),
+           bC = (0, nC.ob)(zC, "uAnimData"),
+           fC = (0, nC.ob)(zC, "uAnimDataPerTex"),
+           oC = (0, nC.g)(zC),
+           qC = (0, nC.qb)(zC, "texAtlasIndex", "float", "mediump"),
+           NC = (0, nC.J)(zC, "texAtlasIndex");
```

#### 3811. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29212-L29213` → after: `L28988-L28989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28988-L28989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L28988-L28989) · [Before (L29212-L29213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29212-L29213)

```diff
-           CUSTOM_VERTEX_MAIN_BEGIN: Kk(ek) + (this.animDataPerTex ? `\n                    ${(0,bk.F)(ek,"float","animTick",(0,bk.V)(ek,"animTick",`${Sk}.x`))}\n                    ${(0,bk.F)(ek,"float","animTickStride",`${Sk}.y`)}\n                    ${(0,bk.F)(ek,"float","numA … [truncated]
-           CUSTOM_VERTEX_DEFINITIONS: `\n                ${(0,bk.$)(ek)?"":fk}\n                ${(0,bk.e)(ek,"texAtlasIndices","float","mediump")}\n                #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                    ${(0,bk.e)(ek,"aAtlasIdxFaces012","vec3","highp")}\n            … [truncated]
+           CUSTOM_VERTEX_MAIN_BEGIN: WC(zC) + (this.animDataPerTex ? `\n                    ${(0,nC.w)(zC,"float","animTick",(0,nC.L)(zC,"animTick",`${bC}.x`))}\n                    ${(0,nC.w)(zC,"float","animTickStride",`${bC}.y`)}\n                    ${(0,nC.w)(zC,"float","numA … [truncated]
+           CUSTOM_VERTEX_DEFINITIONS: `\n                ${(0,nC.S)(zC)?"":wC}\n                ${(0,nC.f)(zC,"texAtlasIndices","float","mediump")}\n                #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                    ${(0,nC.f)(zC,"aAtlasIdxFaces012","vec3","highp")}\n            … [truncated]
```

#### 3812. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29216-L29217` → after: `L28992-L28993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28992-L28993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L28992-L28993) · [Before (L29216-L29217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29216-L29217)

```diff
-           [(0, bk.I)(ek)]: `${Hk(this,ek)}${lk(this,ek,xk,Dk)}`,
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${fk}\n                ${mk}\n            `
+           [(0, nC.x)(zC)]: `${SC(this,zC)}${PC(this,zC,NC,QC)}`,
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${wC}\n                ${qC}\n            `
```

#### 3813. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29221` → after: `L28997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L28997) · [Before (L29221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29221)

```diff
-     (0, Pk.l)(yk)
+     (0, oC.o)(RC)
```

#### 3814. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29223` → after: `L28999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L28999) · [Before (L29223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29223)

```diff
-   37451: (kk, ek, ik) => {
+   37677: (CC, zC, ZC) => {
```

#### 3815. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29226-L29228` → after: `L29004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29004) · [Before (L29226-L29228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29226-L29228)

```diff
-       h: () => lk,
-       k: () => Hk,
-       n: () => Kk
+       f: () => WC
```

#### 3816. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29230-L29235` → after: `L29006-L29011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29006-L29011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29006-L29011) · [Before (L29230-L29235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29230-L29235)

```diff
-     var Dk = ik(36781),
-       fk = ik(36764),
-       Sk = ik(37037),
-       bk = ik(36773),
-       rk = ik(36789),
-       Pk = ik(36885);
+     var QC = ZC(37059),
+       wC = ZC(37044),
+       bC = ZC(37301),
+       nC = ZC(37050),
+       fC = ZC(37061),
+       oC = ZC(37158);
```

#### 3817. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29251` → after: `L29027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29027) · [Before (L29251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29251)

```diff
-       return `${kk}.r > 0.0 || ${kk}.g > 0.0 || ${kk}.b > 0.0`
+       return `${CC}.r > 0.0 || ${CC}.g > 0.0 || ${CC}.b > 0.0`
```

#### 3818. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29255-L29257` → after: `L29031-L29033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29031-L29033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29031-L29033) · [Before (L29255-L29257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29255-L29257)

```diff
-       const fk = (ek, ik) => (0, bk.F)(kk, "float", ek, ik),
-         Sk = (ek, ik) => (0, bk.F)(kk, "vec3", ek, ik);
-       return `\n\t\t${Sk("localPos",`rotationY(${ek}.w) * ${ik}.xyz`)}\n\t\t${fk("tickVal",`${ik}.w / 1000.0`)}\n\t\t${fk("mix1","addLine(localPos, tickVal, 1.1)")}\n\t\t${fk("mix2","addLine(localPos / GOLDEN_RATIO, tickVal / GOLDEN_RATIO, 2.4)")}\n\t\t${fk("totalMix","mix1 * 0.7 … [truncated]
+       const wC = (zC, ZC) => (0, nC.w)(CC, "float", zC, ZC),
+         bC = (zC, ZC) => (0, nC.w)(CC, "vec3", zC, ZC);
+       return `\n\t\t${bC("localPos",`rotationY(${zC}.w) * ${ZC}.xyz`)}\n\t\t${wC("tickVal",`${ZC}.w / 1000.0`)}\n\t\t${wC("mix1","addLine(localPos, tickVal, 1.1)")}\n\t\t${wC("mix2","addLine(localPos / GOLDEN_RATIO, tickVal / GOLDEN_RATIO, 2.4)")}\n\t\t${wC("totalMix","mix1 * 0.7 … [truncated]
```

#### 3819. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29261-L29263` → after: `L29037-L29039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29037-L29039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29037-L29039) · [Before (L29261-L29263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29261-L29263)

```diff
-       const ek = (0, bk.T)(kk, "vEnchantRgbAndRotY"),
-         ik = (0, bk.T)(kk, "vPositionAndAnimTick");
-       return `\n\t\t\n\t\tif (${nk(ek)}) {\n\t\t\t${Uk(kk,ek,ik,"baseColor.xyz")}\n\t\t\t${(0,bk.rb)(kk,"color","mix(color.xyz, newColor, totalMix)")}\n\t\t}\n\t`
+       const zC = (0, nC.J)(CC, "vEnchantRgbAndRotY"),
+         ZC = (0, nC.J)(CC, "vPositionAndAnimTick");
+       return `\n\t\t\n\t\tif (${MC(zC)}) {\n\t\t\t${gC(CC,zC,ZC,"baseColor.xyz")}\n\t\t\t${(0,nC.cb)(CC,"color","mix(color.xyz, newColor, totalMix)")}\n\t\t}\n\t`
```

#### 3820. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29267` → after: `L29043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29043) · [Before (L29267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29267)

```diff
-       return `fn ${kk}(rgbAndRotY: vec4f, posAndTick: vec4f, albedo: vec3f) -> vec4f {\n\tif (!(${nk("rgbAndRotY")})) {\n\t\treturn vec4f(0.0);\n\t}\n\t${Uk(bk.d.WGSL,"rgbAndRotY","posAndTick","albedo")}\n\treturn vec4f(newColor, totalMix);\n}\n`
+       return `fn ${CC}(rgbAndRotY: vec4f, posAndTick: vec4f, albedo: vec3f) -> vec4f {\n\tif (!(${MC("rgbAndRotY")})) {\n\t\treturn vec4f(0.0);\n\t}\n\t${gC(nC.e.WGSL,"rgbAndRotY","posAndTick","albedo")}\n\treturn vec4f(newColor, totalMix);\n}\n`
```

#### 3821. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29274` → after: `L29050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29050) · [Before (L29274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29274)

```diff
-         ...(0, fk.e)("ENCHANTMENT"),
+         ...(0, wC.b)("ENCHANTMENT"),
```

#### 3822. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29285` → after: `L29061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29061) · [Before (L29285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29285)

```diff
-         if (!Mk.dH()) {
+         if (!FC.nS()) {
```

#### 3823. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29292` → after: `L29068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29068) · [Before (L29292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29292)

```diff
-       getUniforms: kk => (0, bk.$)(kk) ? {} : (0, Sk.d)(mk, "vertex", kk),
+       getUniforms: CC => (0, nC.S)(CC) ? {} : (0, bC.d)(qC, "vertex", CC),
```

#### 3824. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29295-L29299` → after: `L29071-L29075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29071-L29075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29071-L29075) · [Before (L29295-L29299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29295-L29299)

```diff
-           const kk = (0, bk.V)(ek, "timeMs", "uAnimTick"),
-             ik = (0, bk.Rb)(ek, "aEnchantmentSpeed"),
-             Dk = (0, bk.Rb)(ek, "aEnchantmentColour"),
-             fk = (0, bk.Ub)(ek, "vEnchantRgbAndRotY"),
-             Sk = (0, bk.Ub)(ek, "vPositionAndAnimTick");
+           const CC = (0, nC.L)(zC, "timeMs", "uAnimTick"),
+             ZC = (0, nC.wb)(zC, "aEnchantmentSpeed"),
+             QC = (0, nC.wb)(zC, "aEnchantmentColour"),
+             wC = (0, nC.Ab)(zC, "vEnchantRgbAndRotY"),
+             bC = (0, nC.Ab)(zC, "vPositionAndAnimTick");
```

#### 3825. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29301-L29302` → after: `L29077-L29078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29077-L29078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29077-L29078) · [Before (L29301-L29302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29301-L29302)

```diff
-             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,bk.e)(ek,"aEnchantmentColour","vec3","lowp")}\n\t\t\t\t\t${(0,bk.e)(ek,"aEnchantmentSpeed","float","lowp")}\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${(0,bk.e)(ek,"aPosition","vec3","lowp")}\n\t\t\t\t\t\t${(0,bk. … [truncated]
-             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${fk} = ${(0,bk.n)(ek,"vec4",Dk,`${(0,bk.Rb)(ek,"aRotation")}.y`)};\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t${(0,bk.rb)(ek,Sk,`worldPos.xyz - ${(0,bk.Rb)(ek,"aPosition")} + ${(0,bk.Rb)(ek,"aOffset")}`) … [truncated]
+             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,nC.f)(zC,"aEnchantmentColour","vec3","lowp")}\n\t\t\t\t\t${(0,nC.f)(zC,"aEnchantmentSpeed","float","lowp")}\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${(0,nC.f)(zC,"aPosition","vec3","lowp")}\n\t\t\t\t\t\t${(0,nC. … [truncated]
+             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${wC} = ${(0,nC.l)(zC,"vec4",QC,`${(0,nC.wb)(zC,"aRotation")}.y`)};\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t${(0,nC.cb)(zC,bC,`worldPos.xyz - ${(0,nC.wb)(zC,"aPosition")} + ${(0,nC.wb)(zC,"aOffset")}`) … [truncated]
```

#### 3826. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29306-L29308` → after: `L29082-L29084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29082-L29084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29082-L29084) · [Before (L29306-L29308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29306-L29308)

```diff
-           const kk = (kk, ik) => (0, bk.F)(ek, "float", kk, ik),
-             ik = (kk, ik) => (0, bk.F)(ek, "vec3", kk, ik),
-             fk = (kk, ik) => (0, bk.F)(ek, "vec4", kk, ik);
+           const CC = (CC, ZC) => (0, nC.w)(zC, "float", CC, ZC),
+             ZC = (CC, ZC) => (0, nC.w)(zC, "vec3", CC, ZC),
+             wC = (CC, ZC) => (0, nC.w)(zC, "vec4", CC, ZC);
```

#### 3827. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29310` → after: `L29086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29086) · [Before (L29310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29310)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,bk.Kb)(ek,"vEnchantRgbAndRotY","vec4","lowp")}\n\t\t\t\t\t${(0,bk.Kb)(ek,"vPositionAndAnimTick","vec4","highp")}\n\n\t\t\t\t\t${(0,bk.w)(ek,"float","GOLDEN_RATIO",(0,Dk.rb)((1+Math.sqrt(5))/2))}\n\t\t\t\t\t${(0,bk.w)(ek," … [truncated]
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,nC.qb)(zC,"vEnchantRgbAndRotY","vec4","lowp")}\n\t\t\t\t\t${(0,nC.qb)(zC,"vPositionAndAnimTick","vec4","highp")}\n\n\t\t\t\t\t${(0,nC.r)(zC,"float","GOLDEN_RATIO",(0,QC.vb)((1+Math.sqrt(5))/2))}\n\t\t\t\t\t${(0,nC.r)(zC," … [truncated]
```

#### 3828. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29315` → after: `L29091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29091) · [Before (L29315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29315)

```diff
-               (0, bk.vb)(ek, "P.x == 0.0 && P.y == 0.0 && P.z == 0.0", "0.00001", "P.x")
+               (0, nC.fb)(zC, "P.x == 0.0 && P.y == 0.0 && P.z == 0.0", "0.00001", "P.x")
```

#### 3829. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29317` → after: `L29093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29093) · [Before (L29317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29317)

```diff
-               ik("Pi", `floor(P + dot(P, ${(0,bk.n)(ek,"vec3","SKEWFACTOR")}))`)
+               ZC("Pi", `floor(P + dot(P, ${(0,nC.l)(zC,"vec3","SKEWFACTOR")}))`)
```

#### 3830. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29320` → after: `L29096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29096) · [Before (L29320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29320)

```diff
-               ik("x0", `P - Pi + dot(Pi, ${(0,bk.n)(ek,"vec3","UNSKEWFACTOR")})`)
+               ZC("x0", `P - Pi + dot(Pi, ${(0,nC.l)(zC,"vec3","UNSKEWFACTOR")})`)
```

#### 3831. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29344` → after: `L29120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29120) · [Before (L29344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29344)

```diff
-               fk("v1234_x", (0, bk.n)(ek, "vec4", "x0.x", "x1.x", "x2.x", "x3.x"))
+               wC("v1234_x", (0, nC.l)(zC, "vec4", "x0.x", "x1.x", "x2.x", "x3.x"))
```

#### 3832. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29347` → after: `L29123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29123) · [Before (L29347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29347)

```diff
-               fk("v1234_y", (0, bk.n)(ek, "vec4", "x0.y", "x1.y", "x2.y", "x3.y"))
+               wC("v1234_y", (0, nC.l)(zC, "vec4", "x0.y", "x1.y", "x2.y", "x3.y"))
```

#### 3833. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29350` → after: `L29126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29126) · [Before (L29350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29350)

```diff
-               fk("v1234_z", (0, bk.n)(ek, "vec4", "x0.z", "x1.z", "x2.z", "x3.z"))
+               wC("v1234_z", (0, nC.l)(zC, "vec4", "x0.z", "x1.z", "x2.z", "x3.z"))
```

#### 3834. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29353` → after: `L29129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29129) · [Before (L29353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29353)

```diff
-               ik("Pi_inc1", `step(Pi, ${(0,bk.n)(ek,"vec3","69.0 - 1.5")}) * (Pi + 1.0)`)
+               ZC("Pi_inc1", `step(Pi, ${(0,nC.l)(zC,"vec3","69.0 - 1.5")}) * (Pi + 1.0)`)
```

#### 3835. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29356` → after: `L29132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29132) · [Before (L29356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29356)

```diff
-               fk("Pt", `${(0,bk.n)(ek,"vec4","Pi.xy","Pi_inc1.xy")} + ${(0,bk.n)(ek,"vec2","50.0","161.0")}.xyxy`)
+               wC("Pt", `${(0,nC.l)(zC,"vec4","Pi.xy","Pi_inc1.xy")} + ${(0,nC.l)(zC,"vec2","50.0","161.0")}.xyxy`)
```

#### 3836. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29359` → after: `L29135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29135) · [Before (L29359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29359)

```diff
-               fk("V1xy_V2xy", `mix(Pt.xyxy, Pt.zwzw, ${(0,bk.n)(ek,"vec4","Pi_1.xy","Pi_2.xy")})`)
+               wC("V1xy_V2xy", `mix(Pt.xyxy, Pt.zwzw, ${(0,nC.l)(zC,"vec4","Pi_1.xy","Pi_2.xy")})`)
```

#### 3837. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29362` → after: `L29138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29138) · [Before (L29362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29362)

```diff
-               (0, bk.n)(ek, "vec4", "Pt.x", "V1xy_V2xy.xz", "Pt.z")
+               (0, nC.l)(zC, "vec4", "Pt.x", "V1xy_V2xy.xz", "Pt.z")
```

#### 3838. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29364` → after: `L29140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29140) · [Before (L29364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29364)

```diff
-               (0, bk.n)(ek, "vec4", "Pt.y", "V1xy_V2xy.yw", "Pt.w")
+               (0, nC.l)(zC, "vec4", "Pt.y", "V1xy_V2xy.yw", "Pt.w")
```

#### 3839. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29366` → after: `L29142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29142) · [Before (L29366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29366)

```diff
-               (0, bk.w)(ek, "vec3", "SOMELARGEFLOATS", (0, bk.n)(ek, "vec3", "635.298681", "682.357502", "668.926525"))
+               (0, nC.r)(zC, "vec3", "SOMELARGEFLOATS", (0, nC.l)(zC, "vec3", "635.298681", "682.357502", "668.926525"))
```

#### 3840. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29369` → after: `L29145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29145) · [Before (L29369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29369)

```diff
-               (0, bk.w)(ek, "vec3", "ZINC", (0, bk.n)(ek, "vec3", "48.500388", "65.294118", "63.934599"))
+               (0, nC.r)(zC, "vec3", "ZINC", (0, nC.l)(zC, "vec3", "48.500388", "65.294118", "63.934599"))
```

#### 3841. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29378` → after: `L29154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29154) · [Before (L29378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29378)

```diff
-               (0, bk.vb)(ek, "Pi_1.z < 0.5", "lowz_mods", "highz_mods")
+               (0, nC.fb)(zC, "Pi_1.z < 0.5", "lowz_mods", "highz_mods")
```

#### 3842. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29380` → after: `L29156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29156) · [Before (L29380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29380)

```diff
-               (0, bk.vb)(ek, "Pi_2.z < 0.5", "lowz_mods", "highz_mods")
+               (0, nC.fb)(zC, "Pi_2.z < 0.5", "lowz_mods", "highz_mods")
```

#### 3843. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29382` → after: `L29158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29158) · [Before (L29382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29382)

```diff
-               fk("hash_0", `fract( Pt * ${(0,bk.n)(ek,"vec4","lowz_mods.x","Pi_1.x","Pi_2.x","highz_mods.x")} ) - 0.49999`)
+               wC("hash_0", `fract( Pt * ${(0,nC.l)(zC,"vec4","lowz_mods.x","Pi_1.x","Pi_2.x","highz_mods.x")} ) - 0.49999`)
```

#### 3844. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29385` → after: `L29161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29161) · [Before (L29385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29385)

```diff
-               fk("hash_1", `fract( Pt * ${(0,bk.n)(ek,"vec4","lowz_mods.y","Pi_1.y","Pi_2.y","highz_mods.y")} ) - 0.49999`)
+               wC("hash_1", `fract( Pt * ${(0,nC.l)(zC,"vec4","lowz_mods.y","Pi_1.y","Pi_2.y","highz_mods.y")} ) - 0.49999`)
```

#### 3845. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29388` → after: `L29164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29164) · [Before (L29388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29388)

```diff
-               fk("hash_2", `fract( Pt * ${(0,bk.n)(ek,"vec4","lowz_mods.z","Pi_1.z","Pi_2.z","highz_mods.z")} ) - 0.49999`)
+               wC("hash_2", `fract( Pt * ${(0,nC.l)(zC,"vec4","lowz_mods.z","Pi_1.z","Pi_2.z","highz_mods.z")} ) - 0.49999`)
```

#### 3846. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29391` → after: `L29167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29167) · [Before (L29391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29391)

```diff
-               fk("grad_results", `${(0,bk.Z)(ek,"hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2")} * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z )`)
+               wC("grad_results", `${(0,nC.P)(zC,"hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2")} * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z )`)
```

#### 3847. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29394` → after: `L29170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29170) · [Before (L29394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29394)

```diff
-               (0, bk.w)(ek, "float", "FINAL_NORMALIZATION", "37.837227241611314102871574478976")
+               (0, nC.r)(zC, "float", "FINAL_NORMALIZATION", "37.837227241611314102871574478976")
```

#### 3848. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29400-L29401` → after: `L29176-L29177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29176-L29177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29176-L29177) · [Before (L29400-L29401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29400-L29401)

```diff
-               (0, bk.n)(ek, "vec4", "0.0")
-             });\n\ t\ t\ t\ t\ t\ tkernel_weights = kernel_weights * kernel_weights * kernel_weights;\n\ t\ t\ t\ t\ t\ treturn dot(kernel_weights, grad_results) * FINAL_NORMALIZATION;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,bk.A)(ek,"mat3","rotationY",[{name:"y",type:" … [truncated]
+               (0, nC.l)(zC, "vec4", "0.0")
+             });\n\ t\ t\ t\ t\ t\ tkernel_weights = kernel_weights * kernel_weights * kernel_weights;\n\ t\ t\ t\ t\ t\ treturn dot(kernel_weights, grad_results) * FINAL_NORMALIZATION;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,nC.u)(zC,"mat3","rotationY",[{name:"y",type:" … [truncated]
```

#### 3849. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29403-L29404` → after: `L29179-L29180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29179-L29180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29179-L29180) · [Before (L29403-L29404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29403-L29404)

```diff
-               (0, bk.n)(ek, "mat3", "-cos(y)", "0.0", "-sin(y)", "0.0", "1.0", "0.0", "sin(y)", "0.0", "-cos(y)")
-             };\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t${(0,bk.A)(ek,"float","pcurve",[{name:"x",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"}],`\
+               (0, nC.l)(zC, "mat3", "-cos(y)", "0.0", "-sin(y)", "0.0", "1.0", "0.0", "sin(y)", "0.0", "-cos(y)")
+             };\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t${(0,nC.u)(zC,"float","pcurve",[{name:"x",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"}],`\
```

#### 3850. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29408` → after: `L29184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29184) · [Before (L29408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29408)

```diff
-             n\ t\ t\ t\ t\ t\ treturn k * pow(x, a) * pow(1.0 - x, b);\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,bk.A)(ek,"float","addLine",[{name:"localPos",type:"vec3"},{name:"tickVal",type:"float"},{name:"tiltScale",type:"float"}],`\
+             n\ t\ t\ t\ t\ t\ treturn k * pow(x, a) * pow(1.0 - x, b);\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,nC.u)(zC,"float","addLine",[{name:"localPos",type:"vec3"},{name:"tickVal",type:"float"},{name:"tiltScale",type:"float"}],`\
```

#### 3851. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29416` → after: `L29192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29192) · [Before (L29416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29416)

```diff
-               kk("intersection", `dot(\n\t\t\t\t\t\t\tlocalPos * ${(0,bk.n)(ek,"vec3","tiltScale","1.0","tiltScale")},\n\t\t\t\t\t\t\tnormalize(${(0,bk.n)(ek,"vec3","sin(planeAnim) * PLANE_TILT_AMOUNT","1.0","cos(planeAnim) * PLANE_TILT_AMOUNT")})\n\t\t\t\t\t\t)`)
+               CC("intersection", `dot(\n\t\t\t\t\t\t\tlocalPos * ${(0,nC.l)(zC,"vec3","tiltScale","1.0","tiltScale")},\n\t\t\t\t\t\t\tnormalize(${(0,nC.l)(zC,"vec3","sin(planeAnim) * PLANE_TILT_AMOUNT","1.0","cos(planeAnim) * PLANE_TILT_AMOUNT")})\n\t\t\t\t\t\t)`)
```

#### 3852. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29419` → after: `L29195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29195) · [Before (L29419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29419)

```diff
-               kk("sawtooth", (0, bk.db)(ek, "intersection - loopedTickVal", "1.0"))
+               CC("sawtooth", (0, nC.Y)(zC, "intersection - loopedTickVal", "1.0"))
```

#### 3853. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29422` → after: `L29198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29198) · [Before (L29422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29422)

```diff
-               ik("noisePos", `localPos * 4.0 - ${(0,bk.n)(ek,"vec3","0.0","tickVal * GOLDEN_RATIO * GOLDEN_RATIO","0.0")}`)
+               ZC("noisePos", `localPos * 4.0 - ${(0,nC.l)(zC,"vec3","0.0","tickVal * GOLDEN_RATIO * GOLDEN_RATIO","0.0")}`)
```

#### 3854. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29433` → after: `L29209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29209) · [Before (L29433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29433)

```diff
-             n\ n\ t\ t\ t\ t\ t\ treturn ramp;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,Pk.d)(ek,"enchantment")}\n\t\t\t\t`,
+             n\ n\ t\ t\ t\ t\ t\ treturn ramp;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,oC.d)(zC,"enchantment")}\n\t\t\t\t`,
```

#### 3855. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29440` → after: `L29216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29216) · [Before (L29440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29440)

```diff
-     (0, rk.l)(lk)
+     (0, fC.o)(PC)
```

#### 3856. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29442` → after: `L29218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29218) · [Before (L29442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29442)

```diff
-   37020: (kk, ek, ik) => {
+   37285: (CC, zC, ZC) => {
```

#### 3857. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29444-L29447` → after: `L29220-L29223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29220-L29223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29220-L29223) · [Before (L29444-L29447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29444-L29447)

```diff
-       c: () => Kk,
-       e: () => Hk,
-       h: () => Uk,
-       i: () => xk
+       b: () => WC,
+       d: () => SC,
+       f: () => gC,
+       g: () => NC
```

#### 3858. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29449-L29456` → after: `L29225-L29232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29225-L29232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29225-L29232) · [Before (L29449-L29456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29449-L29456)

```diff
-     var Dk = ik(36781),
-       fk = ik(37028),
-       Sk = ik(37031),
-       bk = ik(36764),
-       rk = ik(37037),
-       Pk = ik(36773),
-       mk = ik(36798),
-       Mk = ik(36789);
+     var QC = ZC(37059),
+       wC = ZC(37290),
+       bC = ZC(37292),
+       nC = ZC(37044),
+       fC = ZC(37301),
+       oC = ZC(37050),
+       qC = ZC(37063),
+       FC = ZC(37061);
```

#### 3859. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29459` → after: `L29235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29235) · [Before (L29459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29459)

```diff
-       const Dk = (0, mk.s)(kk, Hk, function(kk, ek, ik, Dk) {
+       const QC = (0, qC.u)(CC, SC, function(CC, zC, ZC, QC) {
```

#### 3860. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29461-L29462` → after: `L29237-L29238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29237-L29238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29237-L29238) · [Before (L29461-L29462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29461-L29462)

```diff
-           yH: kk,
-           uniformWriter: new Sk.h(kk),
+           Vg: CC,
+           uniformWriter: new bC.j(CC),
```

#### 3861. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29475` → after: `L29251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29251) · [Before (L29475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29475)

```diff
-       (0, Dk.$)(ik.x, ik.y, ik.z, ik.w, ek) && (ik.x = ek[0], ik.y = ek[1], ik.z = ek[2], ik.w = ek[3], kk.uniformLightVersion++)
+       (0, QC._)(ZC.x, ZC.y, ZC.z, ZC.w, zC) && (ZC.x = zC[0], ZC.y = zC[1], ZC.z = zC[2], ZC.w = zC[3], CC.uniformLightVersion++)
```

#### 3862. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29487` → after: `L29263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29263) · [Before (L29487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29487)

```diff
-         ...(0, bk.e)("ENTITY_LIGHT"),
+         ...(0, nC.b)("ENTITY_LIGHT"),
```

#### 3863. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29494` → after: `L29270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29270) · [Before (L29494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29494)

```diff
-         (0, fk.d)(kk, this.yH.ew);
+         (0, wC.d)(CC, this.Vg.lS);
```

#### 3864. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29496` → after: `L29272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29272) · [Before (L29496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29496)

```diff
-         Dk ? (0, Mk.d)(kk, Dk) : nk.disableUnusedSpecularTerm(kk, Sk);
+         QC ? (0, FC.i)(CC, QC) : MC.disableUnusedSpecularTerm(CC, bC);
```

#### 3865. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29501` → after: `L29277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29277) · [Before (L29501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29501)

```diff
-         return (0, rk.d)(this.uniformLevels ? [...Sk.f, {
+         return (0, fC.d)(this.uniformLevels ? [...bC.g, {
```

#### 3866. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29504` → after: `L29280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29280) · [Before (L29504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29504)

```diff
-         }] : Sk.f, "both", kk)
+         }] : bC.g, "both", CC)
```

#### 3867. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29510` → after: `L29286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29286) · [Before (L29510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29510)

```diff
-         return (0, Sk.o)(this.yH) + this.uniformLightVersion
+         return (0, bC.u)(this.Vg) + this.uniformLightVersion
```

#### 3868. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29513` → after: `L29289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29289) · [Before (L29513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29513)

```diff
-         this.yH.ew && !this.uniformLevels && kk.push("aLightLevels")
+         this.Vg.lS && !this.uniformLevels && CC.push("aLightLevels")
```

#### 3869. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29517` → after: `L29293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29293) · [Before (L29517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29517)

```diff
-           const kk = this.uniformLevels ? (0, Pk.Hb)(ek, "uEntityLightLevels") : (0, Pk.Rb)(ek, "aLightLevels");
+           const CC = this.uniformLevels ? (0, oC.ob)(zC, "uEntityLightLevels") : (0, oC.wb)(zC, "aLightLevels");
```

#### 3870. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29519-L29520` → after: `L29295-L29296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29295-L29296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29295-L29296) · [Before (L29519-L29520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29519-L29520)

```diff
-             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,Pk.e)(ek,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,Dk.Q)(ek)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
-             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,Dk.M)(ek,kk)}\n\t\t\t\t\t\t${(0,Pk.F)(ek,"vec3","blockLightContrib",(0,Dk.s)(ek,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,Pk.F)(ek,"vec3","skyContrib",`mix(${(0,Pk.Hb)(ek,"uAmbientL … [truncated]
+             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,oC.f)(zC,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,QC.O)(zC)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,QC.N)(zC,CC)}\n\t\t\t\t\t\t${(0,oC.w)(zC,"vec3","blockLightContrib",(0,QC.n)(zC,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,oC.w)(zC,"vec3","skyContrib",`mix(${(0,oC.ob)(zC,"uAmbientL … [truncated]
```

#### 3871. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29524-L29525` → after: `L29300-L29301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29300-L29301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29300-L29301) · [Before (L29524-L29525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29524-L29525)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,Dk.Q)(ek)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
-           CUSTOM_FRAGMENT_BEFORE_FOG: (0, Dk.J)(ek)
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,QC.O)(zC)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+           CUSTOM_FRAGMENT_BEFORE_FOG: (0, QC.K)(zC)
```

#### 3872. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29529` → after: `L29305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29305) · [Before (L29529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29529)

```diff
-     (0, Mk.l)(Hk)
+     (0, FC.o)(SC)
```

#### 3873. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29531` → after: `L29307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29307) · [Before (L29531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29531)

```diff
-   36789: (kk, ek, ik) => {
+   37061: (CC, zC, ZC) => {
```

#### 3874. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29537-L29541` → after: `L29313-L29317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29313-L29317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29313-L29317) · [Before (L29537-L29541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29537-L29541)

```diff
-       b: () => bk,
-       d: () => Dk,
-       g: () => Sk,
-       k: () => mk,
-       l: () => Pk
+       e: () => nC,
+       i: () => QC,
+       l: () => bC,
+       m: () => qC,
+       o: () => oC
```

#### 3875. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29574` → after: `L29350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29350) · [Before (L29574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29574)

```diff
-   36885: (kk, ek, ik) => {
+   37158: (CC, zC, ZC) => {
```

#### 3876. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29578` → after: `L29354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29354) · [Before (L29578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29578)

```diff
-     var Dk = ik(36773);
+     var QC = ZC(37050);
```

#### 3877. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29581` → after: `L29357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29357) · [Before (L29581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29581)

```diff
-       return `\n\t\t${(0,Dk.A)(kk,"vec3",`${ek}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
+       return `\n\t\t${(0,QC.u)(CC,"vec3",`${zC}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
```

#### 3878. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29583` → after: `L29359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29359) · [Before (L29583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29583)

```diff
-         (0, Dk.F)(kk, "vec4", "K", (0, Dk.n)(kk, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
+         (0, QC.w)(CC, "vec4", "K", (0, QC.l)(CC, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
```

#### 3879. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29586` → after: `L29362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29362) · [Before (L29586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29586)

```diff
-         (0, Dk.F)(kk, "vec4", "p", `mix(${(0,Dk.n)(kk,"vec4","c.bg","K.wz")}, ${(0,Dk.n)(kk,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
+         (0, QC.w)(CC, "vec4", "p", `mix(${(0,QC.l)(CC,"vec4","c.bg","K.wz")}, ${(0,QC.l)(CC,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
```

#### 3880. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29589` → after: `L29365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29365) · [Before (L29589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29589)

```diff
-         (0, Dk.F)(kk, "vec4", "q", `mix(${(0,Dk.n)(kk,"vec4","p.xyw","c.r")}, ${(0,Dk.n)(kk,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
+         (0, QC.w)(CC, "vec4", "q", `mix(${(0,QC.l)(CC,"vec4","p.xyw","c.r")}, ${(0,QC.l)(CC,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
```

#### 3881. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29592` → after: `L29368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29368) · [Before (L29592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29592)

```diff
-         (0, Dk.F)(kk, "float", "d", "q.x - min(q.w, q.y)")
+         (0, QC.w)(CC, "float", "d", "q.x - min(q.w, q.y)")
```

#### 3882. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29595` → after: `L29371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29371) · [Before (L29595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29595)

```diff
-         (0, Dk.F)(kk, "float", "e", "1.0e-10")
+         (0, QC.w)(CC, "float", "e", "1.0e-10")
```

#### 3883. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29598` → after: `L29374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29374) · [Before (L29598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29598)

```diff
-         (0, Dk.n)(kk, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
+         (0, QC.l)(CC, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
```

#### 3884. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29600` → after: `L29376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29376) · [Before (L29600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29600)

```diff
-       n\ t\ t`)}\n\n\t\t${(0,Dk.A)(kk,"vec3",`${ek}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
+       n\ t\ t`)}\n\n\t\t${(0,QC.u)(CC,"vec3",`${zC}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
```

#### 3885. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29602` → after: `L29378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29378) · [Before (L29602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29602)

```diff
-         (0, Dk.F)(kk, "vec4", "K", (0, Dk.n)(kk, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
+         (0, QC.w)(CC, "vec4", "K", (0, QC.l)(CC, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
```

#### 3886. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29605` → after: `L29381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29381) · [Before (L29605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29605)

```diff
-         (0, Dk.F)(kk, "vec3", "p", "abs(fract(c.xxx + K.xyz) * 6.0 - K.www)")
+         (0, QC.w)(CC, "vec3", "p", "abs(fract(c.xxx + K.xyz) * 6.0 - K.www)")
```

#### 3887. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29608` → after: `L29384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29384) · [Before (L29608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29608)

```diff
-         (0, Dk.n)(kk, "vec3", "0.0")
+         (0, QC.l)(CC, "vec3", "0.0")
```

#### 3888. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29610` → after: `L29386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29386) · [Before (L29610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29610)

```diff
-         (0, Dk.n)(kk, "vec3", "1.0")
+         (0, QC.l)(CC, "vec3", "1.0")
```

#### 3889. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29615` → after: `L29391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29391) · [Before (L29615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29615)

```diff
-   37435: (kk, ek, ik) => {
+   37666: (CC, zC, ZC) => {
```

#### 3890. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29621-L29625` → after: `L29397-L29401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29397-L29401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29397-L29401) · [Before (L29621-L29625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29621-L29625)

```diff
-     var Dk = ik(36781),
-       fk = ik(36764),
-       Sk = ik(36773),
-       bk = ik(36798),
-       rk = ik(36789);
+     var QC = ZC(37059),
+       wC = ZC(37044),
+       bC = ZC(37050),
+       nC = ZC(37063),
+       fC = ZC(37061);
```

#### 3891. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29632` → after: `L29408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29408) · [Before (L29632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29632)

```diff
-           ...(0, fk.e)("TERRAIN_FADE"),
+           ...(0, wC.b)("TERRAIN_FADE"),
```

#### 3892. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29640` → after: `L29416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29416) · [Before (L29640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29640)

```diff
-           const ik = (0, Sk.bb)(ek);
+           const ZC = (0, bC.U)(zC);
```

#### 3893. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29642-L29643` → after: `L29418-L29419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29418-L29419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29418-L29419) · [Before (L29642-L29643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29642-L29643)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,Dk.w)(ek)}\n            `,
-             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${Pk}\n                if (${ik} < 255.0 / 256.0 && ${ik} < bayerDither(${(0,Sk.Q)(ek)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,QC.r)(zC)}\n            `,
+             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${oC}\n                if (${ZC} < 255.0 / 256.0 && ${ZC} < bayerDither(${(0,bC.E)(zC)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
```

#### 3894. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29651` → after: `L29427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29427) · [Before (L29651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29651)

```diff
-         const ek = (0, bk.P)(kk, 1, !1),
+         const zC = (0, nC.Q)(CC, 1, !1),
```

#### 3895. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29653-L29654` → after: `L29429-L29430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29429-L29430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29429-L29430) · [Before (L29653-L29654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29653-L29654)

```diff
-         (0, bk.hb)(kk, {
-           transparencyMode: ek ? bk.r.alphaBlend : ik ? bk.r.alphaTest : bk.r.opaque
+         (0, nC.gb)(CC, {
+           transparencyMode: zC ? nC.t.alphaBlend : ZC ? nC.t.alphaTest : nC.t.opaque
```

#### 3896. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29656` → after: `L29432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29432) · [Before (L29656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29656)

```diff
-       }(0, bk.s)(kk, mk, {
+       }(0, nC.u)(CC, qC, {
```

#### 3897. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29660` → after: `L29436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29436) · [Before (L29660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29660)

```diff
-     }(0, rk.l)(mk)
+     }(0, fC.o)(qC)
```

#### 3898. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29662` → after: `L29438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29438) · [Before (L29662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29662)

```diff
-   37441: (kk, ek, ik) => {
+   37670: (CC, zC, ZC) => {
```

#### 3899. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29664-L29665` → after: `L29440-L29441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29440-L29441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29440-L29441) · [Before (L29664-L29665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29664-L29665)

```diff
-       c: () => lk,
-       e: () => xk,
+       b: () => PC,
+       d: () => NC,
```

#### 3900. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29667-L29668` → after: `L29443-L29444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29443-L29444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29443-L29444) · [Before (L29667-L29668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29667-L29668)

```diff
-       h: () => wk,
-       i: () => Uk
+       g: () => pC,
+       j: () => gC
```

#### 3901. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29670-L29677` → after: `L29446-L29453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29446-L29453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29446-L29453) · [Before (L29670-L29677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29670-L29677)

```diff
-     var Dk = ik(36781),
-       fk = ik(37028),
-       Sk = ik(37031),
-       bk = ik(36764),
-       rk = ik(37037),
-       Pk = ik(36773),
-       mk = ik(36798),
-       Mk = ik(36789);
+     var QC = ZC(37059),
+       wC = ZC(37290),
+       bC = ZC(37292),
+       nC = ZC(37044),
+       fC = ZC(37301),
+       oC = ZC(37050),
+       qC = ZC(37063),
+       FC = ZC(37061);
```

#### 3902. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29693` → after: `L29469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29469) · [Before (L29693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29693)

```diff
-         ...(0, bk.e)("TERRAIN_LIGHT"),
+         ...(0, nC.b)("TERRAIN_LIGHT"),
```

#### 3903. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29703` → after: `L29479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29479) · [Before (L29703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29703)

```diff
-         (0, fk.d)(kk, this.yH.ew), kk.BLOXD_LIGHT_WORD = nk.has(ik);
+         (0, wC.d)(CC, this.Vg.lS), CC.BLOXD_LIGHT_WORD = MC.has(ZC);
```

#### 3904. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29705` → after: `L29481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29481) · [Before (L29705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29705)

```diff
-         Sk || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), kk.BLOXD_TERRAIN_DIRECTI … [truncated]
+         bC || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), CC.BLOXD_TERRAIN_DIRECTI … [truncated]
```

#### 3905. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29708` → after: `L29484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29484) · [Before (L29708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29708)

```diff
-         this.yH.ew && kk.push("aPackedLightLevels")
+         this.Vg.lS && CC.push("aPackedLightLevels")
```

#### 3906. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29711` → after: `L29487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29487) · [Before (L29711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29711)

```diff
-         const ek = (0, rk.d)(Sk.f, "both", kk);
+         const zC = (0, fC.d)(bC.g, "both", CC);
```

#### 3907. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29713-L29714` → after: `L29489-L29490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29489-L29490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29489-L29490) · [Before (L29713-L29714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29713-L29714)

```diff
-         const ik = (0, rk.d)((0, Dk.F)(this.dirLightCount), "vertex", kk);
-         return (0, Pk.$)(kk) ? {
+         const ZC = (0, fC.d)((0, QC.D)(this.dirLightCount), "vertex", CC);
+         return (0, oC.S)(CC) ? {
```

#### 3908. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29718` → after: `L29494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29494) · [Before (L29718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29718)

```diff
-           vertex: `${ek.vertex}\n${ik.vertex}`,
+           vertex: `${zC.vertex}\n${ZC.vertex}`,
```

#### 3909. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29727` → after: `L29503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29503) · [Before (L29727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29727)

```diff
-         return (0, Sk.o)(this.yH)
+         return (0, bC.u)(this.Vg)
```

#### 3910. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29731-L29732` → after: `L29507-L29508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29507-L29508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29507-L29508) · [Before (L29731-L29732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29731-L29732)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,Dk.db)(ek)}\n                    ${(0,Dk.H)(ek)}\n                `,
-           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,Dk.gb)(ek)}\n                    ${(0,Dk.I)(ek,this.dirLightCount)}\n                `
+           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,QC.ab)(zC)}\n                    ${(0,QC.E)(zC)}\n                `,
+           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,QC.eb)(zC)}\n                    ${(0,QC.G)(zC,this.dirLightCount)}\n                `
```

#### 3911. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29734-L29736` → after: `L29510-L29512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29510-L29512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29510-L29512) · [Before (L29734-L29736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29734-L29736)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,Dk.Y)(ek)}\n                    ${(0,Dk.H)(ek)}\n                `,
-           CUSTOM_FRAGMENT_BEFORE_FOG: (0, Dk.U)(ek),
-           [(0, Dk.A)(ek)]: `\n                    ${(0,Dk.B)(ek)}\n                    ${(0,Dk.y)(ek)}\n                `
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,QC.W)(zC)}\n                    ${(0,QC.E)(zC)}\n                `,
+           CUSTOM_FRAGMENT_BEFORE_FOG: (0, QC.S)(zC),
+           [(0, QC.y)(zC)]: `\n                    ${(0,QC.B)(zC)}\n                    ${(0,QC.u)(zC)}\n                `
```

#### 3912. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29742` → after: `L29518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29518) · [Before (L29742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29742)

```diff
-       const ik = (0, Sk.t)(kk.model.view);
+       const ZC = (0, bC.A)(CC.model.view);
```

#### 3913. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29744-L29746` → after: `L29520-L29522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29520-L29522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29520-L29522) · [Before (L29744-L29746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29744-L29746)

```diff
-         yH: kk,
-         uniformWriter: new Sk.h(kk),
-         dirLightWriter: ik > 0 ? new Sk.c(kk.model.view, ik) : null,
+         Vg: CC,
+         uniformWriter: new bC.j(CC),
+         dirLightWriter: ZC > 0 ? new bC.e(CC.model.view, ZC) : null,
```

#### 3914. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29755-L29756` → after: `L29531-L29532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29531-L29532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29531-L29532) · [Before (L29755-L29756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29755-L29756)

```diff
-       (0, mk.w)(ik, Hk.name) || (0, mk.s)(ik, Hk, wk(ek, kk)), kk.checkReadyOnlyOnce = !0, (0, mk.ab)(kk, !0)
-     }(0, Mk.l)(Hk)
+       (0, qC.x)(ZC, SC.name) || (0, qC.u)(ZC, SC, pC(zC, CC)), CC.checkReadyOnlyOnce = !0, (0, qC._)(CC, !0)
+     }(0, FC.o)(SC)
```

#### 3915. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29758` → after: `L29534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29534) · [Before (L29758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29758)

```diff
-   37035: (kk, ek, ik) => {
+   37298: (CC, zC, ZC) => {
```

#### 3916. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29761-L29763` → after: `L29539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29539) · [Before (L29761-L29763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29761-L29763)

```diff
-       g: () => Dk,
-       h: () => fk,
-       l: () => bk
+       g: () => nC
```

#### 3917. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29783` → after: `L29559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29559) · [Before (L29783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29783)

```diff
-   37487: (kk, ek, ik) => {
+   37725: (CC, zC, ZC) => {
```

#### 3918. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29786-L29787` → after: `L29563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29563) · [Before (L29786-L29787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29786-L29787)

```diff
-       h: () => nk,
-       k: () => xk
+       f: () => NC
```

#### 3919. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29789` → after: `L29565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29565) · [Before (L29789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29789)

```diff
-     var Dk = ik(37064);
+     var QC = ZC(37329);
```

#### 3920. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29794` → after: `L29570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29570) · [Before (L29794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29794)

```diff
-       const Pk = "position" === ek ? Dk.G : Dk.H;
+       const oC = "position" === zC ? QC.E : QC.G;
```

#### 3921. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29798` → after: `L29574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29574) · [Before (L29798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29798)

```diff
-           bk = rk && "position" !== ek && 0 !== fk && 1 !== fk ? 1 / fk : 1;
+           nC = fC && "position" !== zC && 0 !== wC && 1 !== wC ? 1 / wC : 1;
```

#### 3922. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29874` → after: `L29650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29650) · [Before (L29874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29874)

```diff
-             return null !== (ek = Pk(ik)[rk]) && void 0 !== ek ? ek : []
+             return null !== (zC = oC(ZC)[fC]) && void 0 !== zC ? zC : []
```

#### 3923. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29910` → after: `L29686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29686) · [Before (L29910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29910)

```diff
-   37216: (kk, ek, ik) => {
+   37465: (CC, zC, ZC) => {
```

#### 3924. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29989` → after: `L29765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29765) · [Before (L29989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L29989)

```diff
-         const [ek, ik, Dk, bk] = null !== (xk = null === Sk || void 0 === Sk ? void 0 : Sk[kk / 4]) && void 0 !== xk ? xk : [0, 0, 1, 1];
+         const [zC, ZC, QC, nC] = null !== (NC = null === bC || void 0 === bC ? void 0 : bC[CC / 4]) && void 0 !== NC ? NC : [0, 0, 1, 1];
```

#### 3925. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30010-L30012` → after: `L29787-L29788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29787-L29788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29787-L29788) · [Before (L30010-L30012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30010-L30012)

```diff
-       h: () => Dk,
-       l: () => fk,
-       o: () => bk
+       g: () => wC,
+       i: () => nC
```

#### 3926. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30015` → after: `L29791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29791) · [Before (L30015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30015)

```diff
-   37062: (kk, ek, ik) => {
+   37324: (CC, zC, ZC) => {
```

#### 3927. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30018` → after: `L29794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29794) · [Before (L30018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30018)

```diff
-       h: () => Kk,
+       f: () => WC,
```

#### 3928. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30023` → after: `L29799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29799) · [Before (L30023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30023)

```diff
-       s: () => bk
+       q: () => nC
```

#### 3929. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30089` → after: `L29865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29865) · [Before (L30089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30089)

```diff
-       return (ArrayBuffer.isView(ik) ? (ik.byteOffset + Dk) % 4 === 0 && fk % 4 === 0 : 12 === fk && Dk % 4 === 0) ? ek : null
+       return (ArrayBuffer.isView(ZC) ? (ZC.byteOffset + QC) % 4 === 0 && wC % 4 === 0 : 12 === wC && QC % 4 === 0) ? zC : null
```

#### 3930. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30145` → after: `L29921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29921) · [Before (L30145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30145)

```diff
-   37075: (kk, ek, ik) => {
+   37339: (CC, zC, ZC) => {
```

#### 3931. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30147-L30148` → after: `L29923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29923) · [Before (L30147-L30148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30147-L30148)

```diff
-       b: () => rk,
-       c: () => Sk,
+       A: () => nC,
```

#### 3932. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30150-L30152` → after: `L29925-L29928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29925-L29928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29925-L29928) · [Before (L30150-L30152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30150-L30152)

```diff
-       i: () => nk,
-       m: () => Uk,
-       p: () => wk,
+       f: () => bC,
+       g: () => WC,
+       j: () => MC,
+       n: () => gC,
```

#### 3933. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30154-L30155` → after: `L29930-L29931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29930-L29931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29930-L29931) · [Before (L30154-L30155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30154-L30155)

```diff
-       s: () => Hk,
-       t: () => bk
+       t: () => NC,
+       x: () => SC
```

#### 3934. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30157` → after: `L29933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L29933) · [Before (L30157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30157)

```diff
-     var Dk = ik(36821);
+     var QC = ZC(37083);
```

#### 3935. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30241` → after: `L30017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30017) · [Before (L30241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30241)

```diff
-       kk.live && (kk.live = !1, fk--), kk.released = !0, (0, Dk.L)(kk.gpu)
+       CC.live && (CC.live = !1, wC--), CC.released = !0, (0, QC.R)(CC.gpu)
```

#### 3936. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30248` → after: `L30024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30024) · [Before (L30248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30248)

```diff
-   36806: (kk, ek, ik) => {
+   37069: (CC, zC, ZC) => {
```

#### 3937. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30250` → after: `L30026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30026) · [Before (L30250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30250)

```diff
-       d: () => Dk
+       c: () => QC
```

#### 3938. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30274` → after: `L30050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30050) · [Before (L30274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30274)

```diff
-   36812: (kk, ek, ik) => {
+   37076: (CC, zC, ZC) => {
```

#### 3939. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30276-L30277` → after: `L30052-L30053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30052-L30053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30052-L30053) · [Before (L30276-L30277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30276-L30277)

```diff
-       b: () => Sk,
-       d: () => bk
+       c: () => bC,
+       f: () => nC
```

#### 3940. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30288` → after: `L30064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30064) · [Before (L30288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30288)

```diff
-       return null !== (ek = kk && fk.get(kk)) && void 0 !== ek ? ek : Dk
+       return null !== (zC = CC && wC.get(CC)) && void 0 !== zC ? zC : QC
```

#### 3941. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30291` → after: `L30067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30067) · [Before (L30291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30291)

```diff
-   36798: (kk, ek, ik) => {
+   37063: (CC, zC, ZC) => {
```

#### 3942. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30293-L30294` → after: `L30069-L30070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30069-L30070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30069-L30070) · [Before (L30293-L30294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30293-L30294)

```diff
-       A: () => xk,
-       D: () => zk,
+       B: () => dC,
+       F: () => NC,
```

#### 3943. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30301-L30302` → after: `L30078-L30079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30078-L30079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30078-L30079) · [Before (L30301-L30302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30301-L30302)

```diff
-       T: () => Ik,
-       V: () => Uk,
+       S: () => mC,
+       W: () => gC,
```

#### 3944. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30305-L30306` → after: `L30083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30083) · [Before (L30305-L30306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30305-L30306)

```diff
-       d: () => rk,
-       db: () => Yk,
+       c: () => fC,
```

#### 3945. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30308-L30310` → after: `L30085-L30087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30085-L30087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30085-L30087) · [Before (L30308-L30310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30308-L30310)

```diff
-       f: () => Ck,
-       hb: () => dk,
-       j: () => Pk,
+       g: () => JC,
+       gb: () => eC,
+       k: () => oC,
```

#### 3946. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30312-L30314` → after: `L30089-L30090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30089-L30090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30089-L30090) · [Before (L30312-L30314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30312-L30314)

```diff
-       n: () => Mk,
-       r: () => bk,
-       s: () => uk,
+       p: () => FC,
+       t: () => nC,
```

#### 3947. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30316-L30317` → after: `L30092-L30093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30092-L30093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30092-L30093) · [Before (L30316-L30317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30316-L30317)

```diff
-       w: () => Vk,
-       z: () => qk
+       v: () => vC,
+       x: () => hC
```

#### 3948. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30319-L30321` → after: `L30095-L30097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30095-L30097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30095-L30097) · [Before (L30319-L30321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30319-L30321)

```diff
-     var Dk = ik(36806),
-       fk = ik(36812),
-       Sk = ik(36821);
+     var QC = ZC(37069),
+       wC = ZC(37076),
+       bC = ZC(37083);
```

#### 3949. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30381` → after: `L30157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30157) · [Before (L30381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30381)

```diff
-       Dk !== ik && (ik && (0, Sk.O)(ik), kk[ek] = ik, Dk && (0, Sk.M)(Dk), kk.version++)
+       QC !== ZC && (ZC && (0, bC.U)(ZC), CC[zC] = ZC, QC && (0, bC.S)(QC), CC.version++)
```

#### 3950. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30389` → after: `L30165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30165) · [Before (L30389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30389)

```diff
-       return void 0 === ek ? (0, fk.d)() : ek
+       return void 0 === zC ? (0, wC.f)() : zC
```

#### 3951. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30395` → after: `L30171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30171) · [Before (L30395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30395)

```diff
-         bk = (0, fk.d)(ek);
+         nC = (0, wC.f)(zC);
```

#### 3952. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30397` → after: `L30173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30173) · [Before (L30397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30397)

```diff
-       const rk = null !== (ik = null === bk || void 0 === bk ? void 0 : bk.create(Sk, ek)) && void 0 !== ik ? ik : Dk.d.defines();
+       const fC = null !== (ZC = null === nC || void 0 === nC ? void 0 : nC.create(bC, zC)) && void 0 !== ZC ? ZC : QC.c.defines();
```

#### 3953. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30399` → after: `L30175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30175) · [Before (L30399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30399)

```diff
-         feature: Dk.d,
+         feature: QC.c,
```

#### 3954. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30411` → after: `L30187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30187) · [Before (L30411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30411)

```diff
-         for (const kk of [ek.diffuseTexture, ek.opacityTexture, ek.emissiveTexture, ek.reflectionTexture]) kk && ((0, Sk.O)(kk), fk.push(kk));
+         for (const CC of [zC.diffuseTexture, zC.opacityTexture, zC.emissiveTexture, zC.reflectionTexture]) CC && ((0, bC.U)(CC), wC.push(CC));
```

#### 3955. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30417` → after: `L30193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30193) · [Before (L30417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30417)

```diff
-           if ("diffuseTexture" === fk || "opacityTexture" === fk || "emissiveTexture" === fk || "reflectionTexture" === fk) Yk(kk, fk, null !== (bk = Sk) && void 0 !== bk ? bk : null);
+           if ("diffuseTexture" === wC || "opacityTexture" === wC || "emissiveTexture" === wC || "reflectionTexture" === wC) AC(CC, wC, null !== (nC = bC) && void 0 !== nC ? nC : null);
```

#### 3956. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30422` → after: `L30198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30198) · [Before (L30422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30422)

```diff
-         for (const kk of fk)(0, Sk.M)(kk)
+         for (const CC of wC)(0, bC.S)(CC)
```

#### 3957. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30465` → after: `L30241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30241) · [Before (L30465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30465)

```diff
-       --kk.refs > 0 || (mk--, (0, Sk.L)(kk.gpu), Yk(kk, "diffuseTexture", null), Yk(kk, "opacityTexture", null), Yk(kk, "emissiveTexture", null), Yk(kk, "reflectionTexture", null), kk.mirror && (Kk.delete(kk.mirror), kk.mirror = null))
+       --CC.refs > 0 || (qC--, (0, bC.R)(CC.gpu), AC(CC, "diffuseTexture", null), AC(CC, "opacityTexture", null), AC(CC, "emissiveTexture", null), AC(CC, "reflectionTexture", null), CC.mirror && (WC.delete(CC.mirror), CC.mirror = null))
```

#### 3958. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30500` → after: `L30276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30276) · [Before (L30500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30500)

```diff
-   36821: (kk, ek, ik) => {
+   37083: (CC, zC, ZC) => {
```

#### 3959. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30502-L30503` → after: `L30278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30278) · [Before (L30502-L30503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30502-L30503)

```diff
-       A: () => lk,
-       E: () => Yk,
+       C: () => PC,
```

#### 3960. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30505-L30506` → after: `L30280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30280) · [Before (L30505-L30506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30505-L30506)

```diff
-       G: () => dk,
-       H: () => uk,
+       J: () => GC,
```

#### 3961. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30512-L30514` → after: `L30285-L30290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30285-L30290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30285-L30290) · [Before (L30512-L30514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30512-L30514)

```diff
-       b: () => bk,
-       c: () => fk,
-       f: () => Sk,
+       U: () => IC,
+       W: () => xC,
+       X: () => hC,
+       d: () => nC,
+       e: () => wC,
+       h: () => bC,
```

#### 3962. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30516` → after: `L30292-L30293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30292-L30293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30292-L30293) · [Before (L30516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30516)

```diff
-       l: () => Ck,
+       k: () => JC,
+       n: () => SC,
```

#### 3963. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30518-L30520` → after: `L30295-L30296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30295-L30296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30295-L30296) · [Before (L30518-L30520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30518-L30520)

```diff
-       t: () => wk,
-       w: () => Uk,
-       x: () => Pk,
+       r: () => gC,
+       u: () => oC,
```

#### 3964. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30523` → after: `L30299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30299) · [Before (L30523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30523)

```diff
-     var Dk = ik(36812);
+     var QC = ZC(37076);
```

#### 3965. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30575-L30576` → after: `L30351-L30352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30351-L30352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30351-L30352) · [Before (L30575-L30576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30575-L30576)

```diff
-         wrapU: null !== (ik = Uk.wrapU) && void 0 !== ik ? ik : mk,
-         wrapV: null !== (fk = Uk.wrapV) && void 0 !== fk ? fk : mk,
+         wrapU: null !== (ZC = gC.wrapU) && void 0 !== ZC ? ZC : qC,
+         wrapV: null !== (wC = gC.wrapV) && void 0 !== wC ? wC : qC,
```

#### 3966. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30580` → after: `L30356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30356) · [Before (L30580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30580)

```diff
-       return wk.hasAlpha = null !== (Sk = Uk.hasAlpha) && void 0 !== Sk && Sk, null === (bk = (0, Dk.d)(kk)) || void 0 === bk || bk.texture(wk, kk, ek), wk
+       return pC.hasAlpha = null !== (bC = gC.hasAlpha) && void 0 !== bC && bC, null === (nC = (0, QC.f)(CC)) || void 0 === nC || nC.texture(pC, CC, zC), pC
```

#### 3967. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30603` → after: `L30379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30379) · [Before (L30603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30603)

```diff
-       return Kk.matrix[10] = 1, null === (ik = (0, Dk.d)(kk)) || void 0 === ik || ik.cube(Kk, kk, ek), Kk
+       return WC.matrix[10] = 1, null === (ZC = (0, QC.f)(CC)) || void 0 === ZC || ZC.cube(WC, CC, zC), WC
```

#### 3968. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30636` → after: `L30412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30412) · [Before (L30636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30636)

```diff
-       return null !== (ek = null === (ik = yk) || void 0 === ik ? void 0 : ik.loaded(kk)) && void 0 !== ek ? ek : null
+       return null !== (zC = null === (ZC = RC) || void 0 === ZC ? void 0 : ZC.loaded(CC)) && void 0 !== zC ? zC : null
```

#### 3969. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30647` → after: `L30423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30423) · [Before (L30647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30647)

```diff
-       kk.live || (kk.live = !0, xk++, null === (ek = yk) || void 0 === ek || ek.XM(kk));
+       CC.live || (CC.live = !0, NC++, null === (zC = RC) || void 0 === zC || zC.vq(CC));
```

#### 3970. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30673` → after: `L30449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30449) · [Before (L30673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30673)

```diff
-   37064: (kk, ek, ik) => {
+   37329: (CC, zC, ZC) => {
```

#### 3971. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30877` → after: `L30655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30655) · [Before (L30877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30877)

```diff
-       H: () => Mk,
+       b: () => bC,
```

#### 3972. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30879-L30883` → after: `L30657-L30660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30657-L30660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30657-L30660) · [Before (L30879-L30883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30879-L30883)

```diff
-       f: () => fk,
-       i: () => Pk,
-       k: () => Kk,
-       m: () => rk,
-       q: () => xk,
+       h: () => oC,
+       l: () => WC,
+       o: () => fC,
+       r: () => NC,
```

#### 3973. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30885-L30886` → after: `L30662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30662) · [Before (L30885-L30886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30885-L30886)

```diff
-       v: () => bk,
-       z: () => Hk
+       x: () => nC
```

#### 3974. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30889` → after: `L30665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30665) · [Before (L30889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30889)

```diff
-   37053: (kk, ek, ik) => {
+   37318: (CC, zC, ZC) => {
```

#### 3975. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30894` → after: `L30670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30670) · [Before (L30894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30894)

```diff
-       i: () => mk
+       j: () => qC
```

#### 3976. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30896-L30898` → after: `L30672-L30674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30672-L30674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30672-L30674) · [Before (L30896-L30898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30896-L30898)

```diff
-     var Dk = ik(37062),
-       fk = ik(37064),
-       Sk = ik(37070);
+     var QC = ZC(37324),
+       wC = ZC(37329),
+       bC = ZC(37336);
```

#### 3977. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30908` → after: `L30684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30684) · [Before (L30908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30908)

```diff
-         this.owner = kk, this.geometry = ek, this.lw = ik, this.materials = Dk, this.gpu = []
+         this.owner = CC, this.geometry = zC, this.np = ZC, this.materials = QC, this.gpu = []
```

#### 3978. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30913` → after: `L30689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30689) · [Before (L30913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30913)

```diff
-         this.model = void 0, this.position = void 0, this.count = 0, this.lw = new Int32Array(2), this.boxes = new Float64Array(6)
+         this.model = void 0, this.position = void 0, this.count = 0, this.np = new Int32Array(2), this.boxes = new Float64Array(6)
```

#### 3979. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30916` → after: `L30692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30692) · [Before (L30916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30916)

```diff
-         this.count = kk, this.lw.length < 2 * kk && (this.lw = new Int32Array(2 * kk), this.boxes = new Float64Array(6 * kk))
+         this.count = CC, this.np.length < 2 * CC && (this.np = new Int32Array(2 * CC), this.boxes = new Float64Array(6 * CC))
```

#### 3980. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30926-L30927` → after: `L30702-L30703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30702-L30703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30702-L30703) · [Before (L30926-L30927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30926-L30927)

```diff
-         const bk = this.nodes.vK;
-         this.flags.length < bk && (this.layer = (0, Sk.g)(this.layer, bk), this.flags = (0, Sk.g)(this.flags, bk), this.version = (0, Sk.g)(this.version, bk), this.radius = (0, Sk.g)(this.radius, bk), this.visibility = (0, Sk.g)(this.visibility, bk), this.sphere = (0, Sk.g)(this. … [truncated]
+         const nC = this.nodes.HW;
+         this.flags.length < nC && (this.layer = (0, bC.o)(this.layer, nC), this.flags = (0, bC.o)(this.flags, nC), this.version = (0, bC.o)(this.version, nC), this.radius = (0, bC.o)(this.radius, nC), this.visibility = (0, bC.o)(this.visibility, nC), this.sphere = (0, bC.o)(this. … [truncated]
```

#### 3981. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30948` → after: `L30724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30724) · [Before (L30948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30948)

```diff
-         this.looseIndex.length < this.nodes.vK && (this.loose = (0, Sk.g)(this.loose, this.nodes.vK), this.looseIndex = (0, Sk.g)(this.looseIndex, this.nodes.vK));
+         this.looseIndex.length < this.nodes.HW && (this.loose = (0, bC.o)(this.loose, this.nodes.HW), this.looseIndex = (0, bC.o)(this.looseIndex, this.nodes.HW));
```

#### 3982. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30964` → after: `L30740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30740) · [Before (L30964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30964)

```diff
-           wi: ik,
+           sq: ZC,
```

#### 3983. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30966` → after: `L30742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30742) · [Before (L30966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30966)

```diff
-           Ux: fk
+           fN: wC
```

#### 3984. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30968` → after: `L30744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30744) · [Before (L30968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30968)

```diff
-         if (0 === (this.nodes.flags[kk] & Sk.c.mesh) || 0 === Dk[kk] || ik[Pk] * ik[Pk + 1] * ik[Pk + 2] === 0 || 0 === (rk & bk.isVisible) || !(this.visibility[kk] > 0)) return !1;
+         if (0 === (this.nodes.flags[CC] & bC.i.mesh) || 0 === QC[CC] || ZC[oC] * ZC[oC + 1] * ZC[oC + 2] === 0 || 0 === (fC & nC.isVisible) || !(this.visibility[CC] > 0)) return !1;
```

#### 3985. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30990` → after: `L30766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30766) · [Before (L30990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30990)

```diff
-           wi: rk,
+           sq: fC,
```

#### 3986. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30995` → after: `L30771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30771) · [Before (L30995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L30995)

```diff
-           if (0 === (mk[bk] & Sk.c.mesh) || (ik[bk] & Mk) !== Mk || 0 === Pk[bk] || Number.isNaN(Dk[bk])) continue;
+           if (0 === (qC[nC] & bC.i.mesh) || (ZC[nC] & FC) !== FC || 0 === oC[nC] || Number.isNaN(QC[nC])) continue;
```

#### 3987. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31014` → after: `L30790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30790) · [Before (L31014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31014)

```diff
-         const ek = Sk.c.mesh | Sk.c.enabled;
+         const zC = bC.i.mesh | bC.i.enabled;
```

#### 3988. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31024` → after: `L30800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30800) · [Before (L31024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31024)

```diff
-         if (this.nodes.worldNow(kk, Sk, Pk), (0, fk.i)(Pk, 0, mk), (0, fk.G)(ek, 0, mk, Mk, 0), (0, fk.H)(ek, 3, mk, Mk, 3), Mk[6] = ek[6], (0, Dk.s)(Mk), !(0, Dk.p)(Mk, this.sphere, 4 * kk) || !(0, Dk.l)(Mk, this.box, 6 * kk)) return -1;
+         if (this.nodes.worldNow(CC, bC, oC), (0, wC.h)(oC, 0, qC), (0, wC.E)(zC, 0, qC, FC, 0), (0, wC.G)(zC, 3, qC, FC, 3), FC[6] = zC[6], (0, QC.q)(FC), !(0, QC.p)(FC, this.sphere, 4 * CC) || !(0, QC.l)(FC, this.box, 6 * CC)) return -1;
```

#### 3989. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31028` → after: `L30804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30804) · [Before (L31028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31028)

```diff
-           const kk = (0, Dk.i)(bk.model, bk.position, Mk, ik, bk.lw[2 * fk], bk.lw[2 * fk + 1]); - 1 !== kk && (-1 === xk || kk < xk) && (xk = kk)
+           const CC = (0, QC.i)(nC.model, nC.position, FC, ZC, nC.np[2 * wC], nC.np[2 * wC + 1]); - 1 !== CC && (-1 === NC || CC < NC) && (NC = CC)
```

#### 3990. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31031` → after: `L30807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30807) · [Before (L31031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31031)

```diff
-         (0, fk.G)(Mk, 0, Pk, Kk, 0), Kk[3] = Mk[3] * xk, Kk[4] = Mk[4] * xk, Kk[5] = Mk[5] * xk, (0, fk.H)(Kk, 3, Pk, rk, 0), rk[0] += Kk[0], rk[1] += Kk[1], rk[2] += Kk[2];
+         (0, wC.E)(FC, 0, oC, WC, 0), WC[3] = FC[3] * NC, WC[4] = FC[4] * NC, WC[5] = FC[5] * NC, (0, wC.G)(WC, 3, oC, fC, 0), fC[0] += WC[0], fC[1] += WC[1], fC[2] += WC[2];
```

#### 3991. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31041` → after: `L30817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30817) · [Before (L31041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31041)

```diff
-         const Dk = ik ? this.flags[kk] | ek : this.flags[kk] & ~ek;
+         const QC = ZC ? this.flags[CC] | zC : this.flags[CC] & ~zC;
```

#### 3992. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31047` → after: `L30823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30823) · [Before (L31047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31047)

```diff
-         for (let ik = 0; ik < kk.length; ik++) 0 !== (kk[ik] & Sk.c.mesh) && ek++;
+         for (let ZC = 0; ZC < CC.length; ZC++) 0 !== (CC[ZC] & bC.i.mesh) && zC++;
```

#### 3993. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31052` → after: `L30828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30828) · [Before (L31052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31052)

```diff
-   37070: (kk, ek, ik) => {
+   37336: (CC, zC, ZC) => {
```

#### 3994. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31054-L31057` → after: `L30830-L30833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30830-L30833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30830-L30833) · [Before (L31054-L31057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31054-L31057)

```diff
-       b: () => fk,
-       c: () => Sk,
-       f: () => rk,
-       g: () => Pk
+       e: () => wC,
+       i: () => bC,
+       k: () => fC,
+       o: () => oC
```

#### 3995. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31059` → after: `L30835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30835) · [Before (L31059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31059)

```diff
-     var Dk = ik(37064);
+     var QC = ZC(37329);
```

#### 3996. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31077` → after: `L30853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30853) · [Before (L31077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31077)

```diff
-         this.vK = 0, this.liveCount = 0, this.parent = new Int32Array(0), this.position = new Float64Array(0), this.rotation = new Float64Array(0), this.wi = new Float64Array(0), this.Ux = new Float32Array(0), this.flags = new Uint8Array(0), this.billboard = new Uint8Array(0), th … [truncated]
+         this.HW = 0, this.liveCount = 0, this.parent = new Int32Array(0), this.position = new Float64Array(0), this.rotation = new Float64Array(0), this.sq = new Float64Array(0), this.fN = new Float32Array(0), this.flags = new Uint8Array(0), this.billboard = new Uint8Array(0), th … [truncated]
```

#### 3997. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31081` → after: `L30857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30857) · [Before (L31081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31081)

```diff
-         return this.freeCount > 0 ? kk = this.free[--this.freeCount] : (this.rows === this.vK && this.grow(Math.max(16, 2 * this.vK)), kk = this.rows++), this.parent[kk] = ek, this.position.fill(0, 3 * kk, 3 * kk + 3), this.rotation.set(bk, 4 * kk), this.wi.fill(1, 3 * kk, 3 * kk … [truncated]
+         return this.freeCount > 0 ? CC = this.free[--this.freeCount] : (this.rows === this.HW && this.grow(Math.max(16, 2 * this.HW)), CC = this.rows++), this.parent[CC] = zC, this.position.fill(0, 3 * CC, 3 * CC + 3), this.rotation.set(nC, 4 * CC), this.sq.fill(1, 3 * CC, 3 * CC … [truncated]
```

#### 3998. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31084` → after: `L30860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30860) · [Before (L31084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31084)

```diff
-         0 !== (this.flags[kk] & Sk.live) && (this.flags[kk] = 0, this.sources[kk] = null, this.enabled[kk] = 0, this.aU[this.disposedCount + this.pendingCount++] = kk, this.orderStale = !0, this.liveCount--)
+         0 !== (this.flags[CC] & bC.live) && (this.flags[CC] = 0, this.sources[CC] = null, this.enabled[CC] = 0, this.Sg[this.disposedCount + this.pendingCount++] = CC, this.orderStale = !0, this.liveCount--)
```

#### 3999. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31087` → after: `L30863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30863) · [Before (L31087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31087)

```diff
-         this.parent[kk] = ek, this.bH[kk] = 1, this.orderStale = !0
+         this.parent[CC] = zC, this.rg[CC] = 1, this.orderStale = !0
```

#### 4000. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31091` → after: `L30867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30867) · [Before (L31091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31091)

```diff
-         this.position[fk] = ek, this.position[fk + 1] = ik, this.position[fk + 2] = Dk, this.bH[kk] = 1
+         this.position[wC] = zC, this.position[wC + 1] = ZC, this.position[wC + 2] = QC, this.rg[CC] = 1
```

#### 4001. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31095` → after: `L30871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30871) · [Before (L31095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31095)

```diff
-         this.rotation[Sk] = ek, this.rotation[Sk + 1] = ik, this.rotation[Sk + 2] = Dk, this.rotation[Sk + 3] = fk, this.bH[kk] = 1
+         this.rotation[bC] = zC, this.rotation[bC + 1] = ZC, this.rotation[bC + 2] = QC, this.rotation[bC + 3] = wC, this.rg[CC] = 1
```

#### 4002. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31099` → after: `L30875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30875) · [Before (L31099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31099)

```diff
-         Sk[0] = ik, Sk[1] = ek, Sk[2] = fk, (0, Dk.u)(Sk, 0, this.rotation, 4 * kk), this.bH[kk] = 1
+         bC[0] = ZC, bC[1] = zC, bC[2] = wC, (0, QC.u)(bC, 0, this.rotation, 4 * CC), this.rg[CC] = 1
```

#### 4003. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31103` → after: `L30879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30879) · [Before (L31103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31103)

```diff
-         this.wi[fk] = ek, this.wi[fk + 1] = ik, this.wi[fk + 2] = Dk, this.bH[kk] = 1
+         this.sq[wC] = zC, this.sq[wC + 1] = ZC, this.sq[wC + 2] = QC, this.rg[CC] = 1
```

#### 4004. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31109` → after: `L30885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30885) · [Before (L31109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31109)

```diff
-         this.billboard[kk] = ek, this.bH[kk] = 1
+         this.billboard[CC] = zC, this.rg[CC] = 1
```

#### 4005. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31112` → after: `L30888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30888) · [Before (L31112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31112)

```diff
-         this.setFlag(kk, Sk.infiniteDistance, ek), this.bH[kk] = 1
+         this.setFlag(CC, bC.infiniteDistance, zC), this.rg[CC] = 1
```

#### 4006. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31118` → after: `L30894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30894) · [Before (L31118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31118)

```diff
-         this.sources[kk] = ek, this.setFlag(kk, Sk.copied, null !== ek), this.bH[kk] = 1
+         this.sources[CC] = zC, this.setFlag(CC, bC.copied, null !== zC), this.rg[CC] = 1
```

#### 4007. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31123-L31124` → after: `L30899-L30900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30899-L30900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30899-L30900) · [Before (L31123-L31124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31123-L31124)

```diff
-         for (let fk = 0; fk < this.disposedCount; fk++) this.free[this.freeCount++] = this.aU[fk];
-         this.aU.copyWithin(0, this.disposedCount, this.disposedCount + this.pendingCount), this.disposedCount = this.pendingCount, this.pendingCount = 0, this.orderStale && this.sortParentsFirst(), this.cameraBillboards(ek);
+         for (let wC = 0; wC < this.disposedCount; wC++) this.free[this.freeCount++] = this.Sg[wC];
+         this.Sg.copyWithin(0, this.disposedCount, this.disposedCount + this.pendingCount), this.disposedCount = this.pendingCount, this.pendingCount = 0, this.orderStale && this.sortParentsFirst(), this.cameraBillboards(zC);
```

#### 4008. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31130` → after: `L30906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30906) · [Before (L31130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31130)

```diff
-           bH: Pk,
+           rg: oC,
```

#### 4009. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31143` → after: `L30919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30919) · [Before (L31143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31143)

```diff
-           0 === Pk[kk] && !lk && (nk < 0 || Mk[kk] === mk[nk]) || (Pk[kk] = 0, nk >= 0 && (Mk[kk] = mk[nk]), wk ? this.out.set(this.sources[kk]) : this.computeWorld(kk, nk, Hk, ek, this.Ux, 16 * nk), this.storeWorld(kk) && mk[kk]++)
+           0 === oC[CC] && !PC && (MC < 0 || FC[CC] === qC[MC]) || (oC[CC] = 0, MC >= 0 && (FC[CC] = qC[MC]), pC ? this.out.set(this.sources[CC]) : this.computeWorld(CC, MC, SC, zC, this.fN, 16 * MC), this.storeWorld(CC) && qC[CC]++)
```

#### 4010. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31147` → after: `L30923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30923) · [Before (L31147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31147)

```diff
-         this.flags[kk] = ik ? this.flags[kk] | ek : this.flags[kk] & ~ek
+         this.flags[CC] = ZC ? this.flags[CC] | zC : this.flags[CC] & ~zC
```

#### 4011. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31150` → after: `L30926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30926) · [Before (L31150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31150)

```diff
-         this.vK = kk, this.parent = Pk(this.parent, kk), this.position = Pk(this.position, 3 * kk), this.rotation = Pk(this.rotation, 4 * kk), this.wi = Pk(this.wi, 3 * kk), this.Ux = Pk(this.Ux, 16 * kk), this.worldBits = new Uint32Array(this.Ux.buffer), this.flags = Pk(this.fla … [truncated]
+         this.HW = CC, this.parent = oC(this.parent, CC), this.position = oC(this.position, 3 * CC), this.rotation = oC(this.rotation, 4 * CC), this.sq = oC(this.sq, 3 * CC), this.fN = oC(this.fN, 16 * CC), this.worldBits = new Uint32Array(this.fN.buffer), this.flags = oC(this.fla … [truncated]
```

#### 4012. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31156` → after: `L30932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30932) · [Before (L31156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31156)

```diff
-           bH: ik,
+           rg: ZC,
```

#### 4013. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31181` → after: `L30957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30957) · [Before (L31181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31181)

```diff
-         ek.set(kk.viewMatrix), ek[12] = 0, ek[13] = 0, ek[14] = 0, (0, Dk.i)(ek, 0, ik), (0, Dk.z)(ik, this.scale, this.facing, fk), Sk[0] = 0, (0, Dk.f)(fk, Sk, 1), Sk[2] = 0, (0, Dk.u)(Sk, 0, fk, 0), (0, Dk.v)(fk, this.billboardY)
+         zC.set(CC.viewMatrix), zC[12] = 0, zC[13] = 0, zC[14] = 0, (0, QC.h)(zC, 0, ZC), (0, QC.A)(ZC, this.scale, this.facing, wC), bC[0] = 0, (0, QC.d)(wC, bC, 1), bC[2] = 0, (0, QC.u)(bC, 0, wC, 0), (0, QC.x)(wC, this.billboardY)
```

#### 4014. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31187` → after: `L30963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30963) · [Before (L31187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31187)

```diff
-           bH: bk,
+           rg: nC,
```

#### 4015. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31194` → after: `L30970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30970) · [Before (L31194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31194)

```diff
-           const ek = this.Ux,
+           const zC = this.fN,
```

#### 4016. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31201` → after: `L30977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30977) · [Before (L31201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31201)

```diff
-             0 !== (fk[kk] & Sk.copied) ? this.out.set(this.sources[kk]) : this.computeWorld(kk, bk, this.billboard[kk], ek, Mk === mk ? this.Ux : ik, Mk === mk ? 16 * bk : 0), ik.set(this.out)
+             0 !== (wC[CC] & bC.copied) ? this.out.set(this.sources[CC]) : this.computeWorld(CC, nC, this.billboard[CC], zC, FC === qC ? this.fN : ZC, FC === qC ? 16 * nC : 0), ZC.set(this.out)
```

#### 4017. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31214` → after: `L30990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30990) · [Before (L31214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31214)

```diff
-         }(0, Dk.d)(this.wi, Kk, this.rotation, 4 * kk, xk, nk, ek < 0 ? mk : Mk), ek >= 0 && (ik === fk.none ? (0, Dk.m)(Mk, rk, Pk, mk) : ((0, Dk.D)(rk, Pk, this.scale, this.inverse, this.parentPart), (0, Dk.m)(Mk, this.parentPart, 0, mk))), ik === fk.all ? this.turn(this.billbo … [truncated]
+         }(0, QC.b)(this.sq, WC, this.rotation, 4 * CC, NC, MC, zC < 0 ? qC : FC), zC >= 0 && (ZC === wC.none ? (0, QC.o)(FC, fC, oC, qC) : ((0, QC.D)(fC, oC, this.scale, this.inverse, this.parentPart), (0, QC.o)(FC, this.parentPart, 0, qC))), ZC === wC.all ? this.turn(this.billbo … [truncated]
```

#### 4018. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31221` → after: `L30997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L30997) · [Before (L31221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31221)

```diff
-         ek[12] = 0, ek[13] = 0, ek[14] = 0, (0, Dk.m)(ek, kk, 0, ek), ek[12] = ik, ek[13] = fk, ek[14] = Sk
+         zC[12] = 0, zC[13] = 0, zC[14] = 0, (0, QC.o)(zC, CC, 0, zC), zC[12] = ZC, zC[13] = wC, zC[14] = bC
```

#### 4019. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31225` → after: `L31001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R31001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L31001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L31001) · [Before (L31225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31225)

```diff
-         (0, Dk.i)(this.out, 0, ek);
+         (0, QC.h)(this.out, 0, zC);
```

#### 4020. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31239` → after: `L31015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R31015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L31015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L31015) · [Before (L31239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31239)

```diff
-         Kk[0] = -Math.atan2(Pk, Math.sqrt(rk * rk + mk * mk)), Kk[1] = -Math.atan2(mk, rk) + Math.PI / 2, (0, Dk.u)(Kk, 0, this.quaternion, 0), (0, Dk.v)(this.quaternion, this.facing), this.turn(this.facing)
+         WC[0] = -Math.atan2(oC, Math.sqrt(fC * fC + qC * qC)), WC[1] = -Math.atan2(qC, fC) + Math.PI / 2, (0, QC.u)(WC, 0, this.quaternion, 0), (0, QC.x)(this.quaternion, this.facing), this.turn(this.facing)
```

#### 4021. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31247` → after: `L31023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R31023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L31023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L31023) · [Before (L31247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31247)

```diff
-           if (ek[Dk + fk] !== ik[fk]) return this.Ux.set(this.out, Dk), !0;
+           if (zC[QC + wC] !== ZC[wC]) return this.fN.set(this.out, QC), !0;
```

#### 4022. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31257` → after: `L31033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R31033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L31033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L31033) · [Before (L31257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31257)

```diff
-   36906: (kk, ek, ik) => {
+   37184: (CC, zC, ZC) => {
```

#### 4023. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31259-L31260` → after: `L31035-L31036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R31035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L31035-L31036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L31035-L31036) · [Before (L31259-L31260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31259-L31260)

```diff
-       e: () => fk,
-       f: () => Sk
+       c: () => wC,
+       e: () => bC
```

#### 4024. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31273` → after: `L31049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R31049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L31049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L31049) · [Before (L31273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31273)

```diff
-   37792: (kk, ek, ik) => {
+   38031: (CC, zC, ZC) => {
```

#### 4025. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31275-L31276` → after: `L31051-L31052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R31051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L31051-L31052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L31051-L31052) · [Before (L31275-L31276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31275-L31276)

```diff
-       c: () => Pk,
-       d: () => Kk
+       e: () => oC,
+       i: () => WC
```

#### 4026. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31278-L31281` → after: `L31054-L31057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R31054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L31054-L31057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L31054-L31057) · [Before (L31278-L31281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31278-L31281)

```diff
-     var Dk = ik(36653),
-       fk = ik(1218),
-       Sk = ik(591),
-       bk = ik(314);
+     var QC = ZC(36918),
+       wC = ZC(1183),
+       bC = ZC(597),
+       nC = ZC(326);
```

#### 4027. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31292` → after: `L31068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R31068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L31068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L31068) · [Before (L31292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31292)

```diff
-           ...Object.fromEntries(bk.xc.map((ek => [`Invisible ${ek} Light`, {
+           ...Object.fromEntries(nC.sc.map((zC => [`Invisible ${zC} Light`, {
```

#### 4028. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31294` → after: `L31070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R31070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L31070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L31070) · [Before (L31294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31294)

```diff
-             altNames: [`${ek} Light Block`]
+             altNames: [`${zC} Light Block`]
```

#### 4029. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31302` → after: `L31078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R31078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L31078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L31078) · [Before (L31302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L31302)

```diff
-       Pk = ["Dirt", "Grass Block", "Pine Grass Block", "Jungle Grass Block", "Dry Grass Block", "Sand", "Red Sand", "Ash", "Clay", "Snow", "Ice", "Maple Log", "Ancient Maple Log", "Maple Wood Planks", "Stone", "Messy Stone", "Smooth Stone", "Diorite", "Smooth Diorite", "Andesite" … [truncated]
+       oC = ["Dirt", "Grass Block", "Pine Grass Block", "Jungle Grass Block", "Dry Grass Block", "Sand", "Red Sand", "Ash", "Clay", "Snow", "Ice", "Maple Log", "Ancient Maple Log", "Maple Wood Planks", "Stone", "Messy Stone", "Smooth Stone", "Diorite", "Smooth Diorite", "Andesite" … [truncated]
```

#### 4030. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32609` → after: `L32385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32385) · [Before (L32609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32609)

```diff
-       ...Object.fromEntries(fk.C.map((kk => [kk, {
+       ...Object.fromEntries(wC.z.map((CC => [CC, {
```

#### 4031. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32650` → after: `L32426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32426) · [Before (L32650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32650)

```diff
-       [(0, bk.Eb)("Sheep")]: {
+       [(0, nC.Gb)("Sheep")]: {
```

#### 4032. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32653` → after: `L32429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32429) · [Before (L32653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32653)

```diff
-       [(0, bk.Eb)("Cow")]: {
+       [(0, nC.Gb)("Cow")]: {
```

#### 4033. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32656` → after: `L32432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32432) · [Before (L32656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32656)

```diff
-       [(0, bk.Eb)("Pig")]: {
+       [(0, nC.Gb)("Pig")]: {
```

#### 4034. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32659` → after: `L32435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32435) · [Before (L32659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32659)

```diff
-       [(0, bk.Eb)("Horse")]: {
+       [(0, nC.Gb)("Horse")]: {
```

#### 4035. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32662` → after: `L32438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32438) · [Before (L32662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32662)

```diff
-       [(0, bk.Eb)("Camel")]: {
+       [(0, nC.Gb)("Camel")]: {
```

#### 4036. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32665` → after: `L32441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32441) · [Before (L32665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32665)

```diff
-       [(0, bk.Eb)("Wolf")]: {
+       [(0, nC.Gb)("Wolf")]: {
```

#### 4037. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32668` → after: `L32444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32444) · [Before (L32668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32668)

```diff
-       [(0, bk.Eb)("Deer")]: {
+       [(0, nC.Gb)("Deer")]: {
```

#### 4038. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32671` → after: `L32447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32447) · [Before (L32671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32671)

```diff
-       [(0, bk.Eb)("Wildcat")]: {
+       [(0, nC.Gb)("Wildcat")]: {
```

#### 4039. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32708` → after: `L32484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32484) · [Before (L32708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32708)

```diff
-       return Object.fromEntries(Sk.u.map((kk => [(0, bk.Ib)(kk), Uk(kk, [`Mob ${kk} Spawn Egg`])])))
+       return Object.fromEntries(bC.B.map((CC => [(0, nC.Jb)(CC), gC(CC, [`Mob ${CC} Spawn Egg`])])))
```

#### 4040. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32712` → after: `L32488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32488) · [Before (L32712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32712)

```diff
-       return Object.fromEntries(Sk.u.map((kk => [(0, bk.Kb)(kk), Uk(kk, [`${kk} Mob Spawner Block`])])))
+       return Object.fromEntries(bC.B.map((CC => [(0, nC.Mb)(CC), gC(CC, [`${CC} Mob Spawner Block`])])))
```

#### 4041. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32716` → after: `L32492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32492) · [Before (L32716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32716)

```diff
-       const ik = Sk.h.includes(kk);
+       const ZC = bC.j.includes(CC);
```

#### 4042. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32720` → after: `L32496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32496) · [Before (L32720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32720)

```diff
-         isDisabled: ik ? mk : void 0
+         isDisabled: ZC ? qC : void 0
```

#### 4043. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32724` → after: `L32500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32500) · [Before (L32724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32724)

```diff
-   37584: (kk, ek, ik) => {
+   37827: (CC, zC, ZC) => {
```

#### 4044. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32727-L32728` → after: `L32503-L32504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32503-L32504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32503-L32504) · [Before (L32727-L32728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32727-L32728)

```diff
-       c: () => wk,
-       f: () => lk,
+       e: () => pC,
+       h: () => PC,
```

#### 4045. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32731-L32732` → after: `L32507-L32508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32507-L32508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32507-L32508) · [Before (L32731-L32732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32731-L32732)

```diff
-     var Dk = ik(585),
-       fk = ik(594);
+     var QC = ZC(590),
+       wC = ZC(600);
```

#### 4046. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32818` → after: `L32594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32594) · [Before (L32818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32818)

```diff
-         const fk = null !== (Dk = null === ek || void 0 === ek ? void 0 : ek.rootName) && void 0 !== Dk ? Dk : kk.substring(0, ik);
+         const wC = null !== (QC = null === zC || void 0 === zC ? void 0 : zC.rootName) && void 0 !== QC ? QC : CC.substring(0, ZC);
```

#### 4047. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32820-L32821` → after: `L32596-L32597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32596-L32597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32596-L32597) · [Before (L32820-L32821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32820-L32821)

```diff
-           const Dk = ek ? ek.metaStr ? `|${ek.metaStr}` : "" : kk.substring(ik);
-           return `${bk[fk]}${Dk}`
+           const QC = zC ? zC.metaStr ? `|${zC.metaStr}` : "" : CC.substring(ZC);
+           return `${nC[wC]}${QC}`
```

#### 4048. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32835-L32839` → after: `L32611-L32615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32611-L32615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32611-L32615) · [Before (L32835-L32839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32835-L32839)

```diff
-     var Kk = ik(36630),
-       xk = ik(37586),
-       nk = ik(36435),
-       Uk = ik(189),
-       Hk = ik(37402);
+     var WC = ZC(36897),
+       NC = ZC(37834),
+       MC = ZC(36708),
+       gC = ZC(184),
+       SC = ZC(37640);
```

#### 4049. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32846` → after: `L32622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32622) · [Before (L32846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32846)

```diff
-       return (0, xk.c)(Kk.q[kk], ek)
+       return (0, NC.d)(WC.m[CC], zC)
```

#### 4050. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32850` → after: `L32626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32626) · [Before (L32850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32850)

```diff
-         this.Lx = void 0, this.state = void 0, this.numSlots = void 0, this.items = void 0, this._selectedSlotI = 0, this.temporaryClone = null, this.updatesHeld = !1, this.heldUpdate = null, this.Lx = kk, this.state = ek, this.numSlots = ik, this.items = new Array(this.numSlots) … [truncated]
+         this.MN = void 0, this.state = void 0, this.numSlots = void 0, this.items = void 0, this._selectedSlotI = 0, this.temporaryClone = null, this.updatesHeld = !1, this.heldUpdate = null, this.MN = CC, this.state = zC, this.numSlots = ZC, this.items = new Array(this.numSlots) … [truncated]
```

#### 4051. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32865` → after: `L32641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32641) · [Before (L32865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32865)

```diff
-               name: null !== (Dk = Kk.q[kk]) && void 0 !== Dk && Dk.keepMetaInChest ? kk : this.Lx.bloxd.getMetaInfo(kk).rootName,
+               name: null !== (QC = WC.m[CC]) && void 0 !== QC && QC.keepMetaInChest ? CC : this.MN.bloxd.getMetaInfo(CC).rootName,
```

#### 4052. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32870` → after: `L32646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32646) · [Before (L32870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32870)

```diff
-         return (0, fk.x)(ik)
+         return (0, wC.B)(ZC)
```

#### 4053. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32876` → after: `L32652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32652) · [Before (L32876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32876)

```diff
-           fk = ik ? Pk : mk,
+           wC = ZC ? oC : qC,
```

#### 4054. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32885-L32886` → after: `L32661-L32662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32661-L32662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32661-L32662) · [Before (L32885-L32886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32885-L32886)

```diff
-           kk.name = fk(kk.name, null === (bk = this.Lx.bloxd.dn.metadatas[kk.name]) || void 0 === bk ? void 0 : bk.meta);
-           if (Mk(kk, void 0 !== this.Lx.bloxd.dn.metadatas[kk.name] && this.Lx.bloxd.getItemTypeObj(kk.name).stackable), !this.checkItem(kk)) {
+           CC.name = wC(CC.name, null === (nC = this.MN.bloxd.qM.metadatas[CC.name]) || void 0 === nC ? void 0 : nC.meta);
+           if (FC(CC, void 0 !== this.MN.bloxd.qM.metadatas[CC.name] && this.MN.bloxd.getItemTypeObj(CC.name).stackable), !this.checkItem(CC)) {
```

#### 4055. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32898` → after: `L32674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32674) · [Before (L32898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32898)

```diff
-             typeObj: this.Lx.bloxd.getItemTypeObj(ek)
+             typeObj: this.MN.bloxd.getItemTypeObj(zC)
```

#### 4056. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32908` → after: `L32684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32684) · [Before (L32908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32908)

```diff
-           inventory: new pk(this.Lx, Yk(this.state.Mq, null), 0),
+           inventory: new GC(this.MN, AC(this.state.mH, null), 0),
```

#### 4057. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32911` → after: `L32687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32687) · [Before (L32911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32911)

```diff
-         kk.Lx = this.Lx, kk.state.Mq = this.state.Mq, kk.numSlots = this.numSlots, kk._selectedSlotI = this._selectedSlotI, kk.items.length = this.items.length, ek.length > this.items.length && (ek.length = this.items.length);
+         CC.MN = this.MN, CC.state.mH = this.state.mH, CC.numSlots = this.numSlots, CC._selectedSlotI = this._selectedSlotI, CC.items.length = this.items.length, zC.length > this.items.length && (zC.length = this.items.length);
```

#### 4058. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32932-L32933` → after: `L32708-L32709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32708-L32709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32708-L32709) · [Before (L32932-L32933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32932-L32933)

```diff
-           if (kk.typeObj.stackable && (0 === kk.amount || null === kk.amount)) return console.error(new Error(`Stackable object ${kk.name} is being picked up with amount ${kk.amount}. Nothing will be added to inventory.`).stack), ik;
-           if (kk.amount < 0) return console.error(new Error(`Found item with amount less than 0 ${kk.name} ${kk.amount}`).stack), ik
+           if (CC.typeObj.stackable && (0 === CC.amount || null === CC.amount)) return console.error(new Error(`Stackable object ${CC.name} is being picked up with amount ${CC.amount}. Nothing will be added to inventory.`).stack), ZC;
+           if (CC.amount < 0) return console.error(new Error(`Found item with amount less than 0 ${CC.name} ${CC.amount}`).stack), ZC
```

#### 4059. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32943-L32944` → after: `L32719-L32720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32719-L32720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32719-L32720) · [Before (L32943-L32944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32943-L32944)

```diff
-               if (ek.amount <= 0 || null === ek.amount) return console.error(new Error(`Found item with different amount type to current item ${kk.name} ${ek.name} ${kk.amount} ${ek.amount}`).stack), ik;
-               if (ek.amount + fk <= Uk.g.maxItemStackSize) return ek.amount += fk, this.update(!0), {
+               if (zC.amount <= 0 || null === zC.amount) return console.error(new Error(`Found item with different amount type to current item ${CC.name} ${zC.name} ${CC.amount} ${zC.amount}`).stack), ZC;
+               if (zC.amount + wC <= gC.f.maxItemStackSize) return zC.amount += wC, this.update(!0), {
```

#### 4060. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32949-L32950` → after: `L32725-L32726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32725-L32726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32725-L32726) · [Before (L32949-L32950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32949-L32950)

```diff
-               if (ek.amount < Uk.g.maxItemStackSize) {
-                 const kk = Uk.g.maxItemStackSize - ek.amount;
+               if (zC.amount < gC.f.maxItemStackSize) {
+                 const CC = gC.f.maxItemStackSize - zC.amount;
```

#### 4061. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32958` → after: `L32734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32734) · [Before (L32958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32958)

```diff
-           const Dk = null === fk ? null : Math.min(fk, Uk.g.maxItemStackSize);
+           const QC = null === wC ? null : Math.min(wC, gC.f.maxItemStackSize);
```

#### 4062. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32969` → after: `L32745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32745) · [Before (L32969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32969)

```diff
-           fk -= Math.min(fk, Uk.g.maxItemStackSize)
+           wC -= Math.min(wC, gC.f.maxItemStackSize)
```

#### 4063. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32982` → after: `L32758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32758) · [Before (L32982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L32982)

```diff
-         return null !== this.items[kk] && (null === this.items[kk].amount ? this.items[kk] = null : (this.items[kk].amount <= 0 && console.error(new Error(`Found item with amount less than or equal to zero ${this.items[kk].name} ${this.items[kk].amount}`)), this.items[kk].amount  … [truncated]
+         return null !== this.items[CC] && (null === this.items[CC].amount ? this.items[CC] = null : (this.items[CC].amount <= 0 && console.error(new Error(`Found item with amount less than or equal to zero ${this.items[CC].name} ${this.items[CC].amount}`)), this.items[CC].amount  … [truncated]
```

#### 4064. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33011` → after: `L32787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32787) · [Before (L33011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33011)

```diff
-           const fk = this.Lx.bloxd.getItemTypeObj(ek);
+           const wC = this.MN.bloxd.getItemTypeObj(zC);
```

#### 4065. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33051` → after: `L32827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32827) · [Before (L33051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33051)

```diff
-         this.state.selectedItem = this.items[this._selectedSlotI], Dk && (this.updatesHeld ? this.heldUpdate = this.heldUpdate || kk : null === (ek = (ik = this.state).onInventoryUpdate) || void 0 === ek || ek.call(ik, kk))
+         this.state.selectedItem = this.items[this._selectedSlotI], QC && (this.updatesHeld ? this.heldUpdate = this.heldUpdate || CC : null === (zC = (ZC = this.state).onInventoryUpdate) || void 0 === zC || zC.call(ZC, CC))
```

#### 4066. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33076` → after: `L32852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32852) · [Before (L33076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33076)

```diff
-               console.error(new Error(`Found item ${ik.name} with amount ${ik.amount}`).stack);
+               console.error(new Error(`Found item ${ZC.name} with amount ${ZC.amount}`).stack);
```

#### 4067. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33097-L33099` → after: `L32873-L32875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32873-L32875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32873-L32875) · [Before (L33097-L33099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33097-L33099)

```diff
-         if (!this.Lx.bloxd.dn.metadatas[kk.name]) return console.warn(new Error(`Checked item with unknown/outdated name ${kk.name}`).stack), !1;
-         const ek = this.Lx.bloxd.getItemTypeObj(kk.name);
-         return ek.stackable && null === kk.amount ? (console.error(new Error(`Checked stackable item ${kk.name} with null amount`).stack), !1) : ek.stackable || null === kk.amount ? ek.stackable && kk.amount <= 0 ? (console.error(new Error(`Checked stackable item ${kk.name} with  … [truncated]
+         if (!this.MN.bloxd.qM.metadatas[CC.name]) return console.warn(new Error(`Checked item with unknown/outdated name ${CC.name}`).stack), !1;
+         const zC = this.MN.bloxd.getItemTypeObj(CC.name);
+         return zC.stackable && null === CC.amount ? (console.error(new Error(`Checked stackable item ${CC.name} with null amount`).stack), !1) : zC.stackable || null === CC.amount ? zC.stackable && CC.amount <= 0 ? (console.error(new Error(`Checked stackable item ${CC.name} with  … [truncated]
```

#### 4068. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33106` → after: `L32882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32882) · [Before (L33106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33106)

```diff
-         Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : fk.h;
+         QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wC.n;
```

#### 4069. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33114` → after: `L32890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32890) · [Before (L33114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33114)

```diff
-         Mq: kk,
+         mH: CC,
```

#### 4070. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33122` → after: `L32898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32898) · [Before (L33122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33122)

```diff
-   37788: (kk, ek, ik) => {
+   38025: (CC, zC, ZC) => {
```

#### 4071. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33126-L33132` → after: `L32902-L32908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32902-L32908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32902-L32908) · [Before (L33126-L33132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33126-L33132)

```diff
-     var Dk = ik(585),
-       fk = ik(189),
-       Sk = ik(37792),
-       bk = ik(594),
-       rk = ik(37584),
-       Pk = ik(36435),
-       mk = ik(314);
+     var QC = ZC(590),
+       wC = ZC(184),
+       bC = ZC(38031),
+       nC = ZC(600),
+       fC = ZC(37827),
+       oC = ZC(36708),
+       qC = ZC(326);
```

#### 4072. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33135` → after: `L32911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32911) · [Before (L33135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33135)

```diff
-         this.callbacks = ik, this.Lx = void 0, this.playerInventory = void 0, this.bD = null, this.rD = null, this.PD = null, this.inCreative = !1, this.chestsWithUpdatesHeld = null, this.Lx = kk, this.playerInventory = ek
+         this.callbacks = ZC, this.MN = void 0, this.playerInventory = void 0, this.bQ = null, this.nQ = null, this.fQ = null, this.inCreative = !1, this.chestsWithUpdatesHeld = null, this.MN = CC, this.playerInventory = zC
```

#### 4073. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33138-L33139` → after: `L32914-L32915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32914-L32915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32914-L32915) · [Before (L33138-L33139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33138-L33139)

```diff
-         let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bk.h;
-         this.loadOpenChestFromStr(kk, fk), this.chestOpenedWithExistingInventory(this.bD, ek, ik, Dk)
+         let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nC.n;
+         this.loadOpenChestFromStr(CC, wC), this.chestOpenedWithExistingInventory(this.bQ, zC, ZC, QC)
```

#### 4074. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33142` → after: `L32918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32918) · [Before (L33142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33142)

```diff
-         this.bD = kk, this.rD = ek, this.PD = ik, this.holdChestUpdates()
+         this.bQ = CC, this.nQ = zC, this.fQ = ZC, this.holdChestUpdates()
```

#### 4075. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33145` → after: `L32921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32921) · [Before (L33145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33145)

```diff
-         this.bD = null, this.rD = null, this.PD = null
+         this.bQ = null, this.nQ = null, this.fQ = null
```

#### 4076. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33148` → after: `L32924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32924) · [Before (L33148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33148)

```diff
-         this.playerInventory.loadFromString(fk), this.bD ? this.bD.loadFromString(kk) : this.chestOpened(kk, ek, ik, null, Dk)
+         this.playerInventory.loadFromString(wC), this.bQ ? this.bQ.loadFromString(CC) : this.chestOpened(CC, zC, ZC, null, QC)
```

#### 4077. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33151` → after: `L32927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32927) · [Before (L33151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33151)

```diff
-         return !(kk >= this.playerInventory.numSlots && !this.bD && !this.inCreative) && (kk < this.playerInventory.numSlots ? this.playerInventory.removeItem(kk, ek) : this.bD ? this.bD.removeItem(kk - this.playerInventory.numSlots, ek) : (console.assert(this.inCreative, "Must b … [truncated]
+         return !(CC >= this.playerInventory.numSlots && !this.bQ && !this.inCreative) && (CC < this.playerInventory.numSlots ? this.playerInventory.removeItem(CC, zC) : this.bQ ? this.bQ.removeItem(CC - this.playerInventory.numSlots, zC) : (console.assert(this.inCreative, "Must b … [truncated]
```

#### 4078. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33154` → after: `L32930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32930) · [Before (L33154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33154)

```diff
-         if (!this.bD && !this.inCreative && (kk >= this.playerInventory.numSlots || ek >= this.playerInventory.numSlots)) return !1;
+         if (!this.bQ && !this.inCreative && (CC >= this.playerInventory.numSlots || zC >= this.playerInventory.numSlots)) return !1;
```

#### 4079. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33159` → after: `L32935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32935) · [Before (L33159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33159)

```diff
-         if (rk && Dk && (0, mk.lb)(Dk.name) !== rk || bk && Sk && (0, mk.lb)(Sk.name) !== bk) return !1;
+         if (fC && QC && (0, qC.ib)(QC.name) !== fC || nC && bC && (0, qC.ib)(bC.name) !== nC) return !1;
```

#### 4080. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33161-L33162` → after: `L32937-L32938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32937-L32938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32937-L32938) · [Before (L33161-L33162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33161-L33162)

```diff
-           if ("Name Tag" === Dk.name && Dk.attributes.customAttributes.text && null === Sk.amount && !fk.g.nonRenameableItems.includes(Sk.name)) return this.Lx.bloxd.renameItem(Sk, Dk.attributes.customAttributes.text, ik), this.setItemAtIdx(kk, Sk), this.removeItem(ek, 1), this.u … [truncated]
-           if ("Name Tag" === Sk.name && Sk.attributes.customAttributes.text && null === Dk.amount && !fk.g.nonRenameableItems.includes(Dk.name)) return this.Lx.bloxd.renameItem(Dk, Sk.attributes.customAttributes.text, ik), this.setItemAtIdx(ek, Dk), this.removeItem(kk, 1), this.u … [truncated]
+           if ("Name Tag" === QC.name && QC.attributes.customAttributes.text && null === bC.amount && !wC.f.nonRenameableItems.includes(bC.name)) return this.MN.bloxd.renameItem(bC, QC.attributes.customAttributes.text, ZC), this.setItemAtIdx(CC, bC), this.removeItem(zC, 1), this.u … [truncated]
+           if ("Name Tag" === bC.name && bC.attributes.customAttributes.text && null === QC.amount && !wC.f.nonRenameableItems.includes(QC.name)) return this.MN.bloxd.renameItem(QC, bC.attributes.customAttributes.text, ZC), this.setItemAtIdx(zC, QC), this.removeItem(CC, 1), this.u … [truncated]
```

#### 4081. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33167` → after: `L32943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32943) · [Before (L33167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33167)

```diff
-         return this.inCreative && !this.bD && kk >= this.playerInventory.numSlots
+         return this.inCreative && !this.bQ && CC >= this.playerInventory.numSlots
```

#### 4082. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33170` → after: `L32946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32946) · [Before (L33170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33170)

```diff
-         if (!this.bD && !this.inCreative && (kk >= this.playerInventory.numSlots || ek >= this.playerInventory.numSlots)) return !1;
+         if (!this.bQ && !this.inCreative && (CC >= this.playerInventory.numSlots || zC >= this.playerInventory.numSlots)) return !1;
```

#### 4083. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33175` → after: `L32951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32951) · [Before (L33175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33175)

```diff
-         if (Sk && (!(0, Pk.b)(Dk, Sk) || Sk.amount + ik > fk.g.maxItemStackSize)) return !1;
+         if (bC && (!(0, oC.b)(QC, bC) || bC.amount + ZC > wC.f.maxItemStackSize)) return !1;
```

#### 4084. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33177` → after: `L32953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32953) · [Before (L33177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33177)

```diff
-         if (Dk.amount <= 0) return console.error(new Error(`movePosWithAmt found item ${Dk.name} with amount ${Dk.amount}`).stack), !1;
+         if (QC.amount <= 0) return console.error(new Error(`movePosWithAmt found item ${QC.name} with amount ${QC.amount}`).stack), !1;
```

#### 4085. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33180-L33181` → after: `L32956-L32957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32956-L32957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32956-L32957) · [Before (L33180-L33181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33180-L33181)

```diff
-         if (bk && (0, mk.lb)(Dk.name) !== bk) return !1;
-         const Kk = (0, rk.c)(Dk.attributes);
+         if (nC && (0, qC.ib)(QC.name) !== nC) return !1;
+         const WC = (0, fC.e)(QC.attributes);
```

#### 4086. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33193` → after: `L32969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32969) · [Before (L33193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33193)

```diff
-         if (null !== bk.amount && bk.amount <= 0) return console.error(new Error(`moveItemIntoIdxs found item ${bk.name} with amount ${bk.amount}`).stack), Sk;
+         if (null !== nC.amount && nC.amount <= 0) return console.error(new Error(`moveItemIntoIdxs found item ${nC.name} with amount ${nC.amount}`).stack), bC;
```

#### 4087. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33203` → after: `L32979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32979) · [Before (L33203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33203)

```diff
-                 console.error(new Error(`moveItemIntoIdxs found item ${kk.name} with amount ${kk.amount}`).stack);
+                 console.error(new Error(`moveItemIntoIdxs found item ${CC.name} with amount ${CC.amount}`).stack);
```

#### 4088. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33207` → after: `L32983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32983) · [Before (L33207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33207)

```diff
-               if (kk.amount + Mk <= fk.g.maxItemStackSize) return kk.amount += Mk, bk.amount -= Mk, bk.amount <= 0 && (this.setItemAtIdx(ik, null), bk.amount < 0 && !(this.inCreative && !this.bD && ik >= this.playerInventory.numSlots) && console.error(new Error("Moved too much it … [truncated]
+               if (CC.amount + FC <= wC.f.maxItemStackSize) return CC.amount += FC, nC.amount -= FC, nC.amount <= 0 && (this.setItemAtIdx(ZC, null), nC.amount < 0 && !(this.inCreative && !this.bQ && ZC >= this.playerInventory.numSlots) && console.error(new Error("Moved too much it … [truncated]
```

#### 4089. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33211-L33212` → after: `L32987-L32988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32987-L32988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L32987-L32988) · [Before (L33211-L33212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33211-L33212)

```diff
-               if (kk.amount < fk.g.maxItemStackSize) {
-                 const ek = fk.g.maxItemStackSize - kk.amount;
+               if (CC.amount < wC.f.maxItemStackSize) {
+                 const zC = wC.f.maxItemStackSize - CC.amount;
```

#### 4090. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33224-L33225` → after: `L33000-L33001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33000-L33001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33000-L33001) · [Before (L33224-L33225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33224-L33225)

```diff
-             attributes: (0, rk.c)(bk.attributes)
-           }), bk.amount -= Mk, bk.amount <= 0 && (this.setItemAtIdx(ik, null), bk.amount < 0 && !(this.inCreative && !this.bD && ik >= this.playerInventory.numSlots) && console.error(new Error(`Moved too much item: tried to move ${Mk} ${bk.name} from slot ${ik} that had ${kk} ${b … [truncated]
+             attributes: (0, fC.e)(nC.attributes)
+           }), nC.amount -= FC, nC.amount <= 0 && (this.setItemAtIdx(ZC, null), nC.amount < 0 && !(this.inCreative && !this.bQ && ZC >= this.playerInventory.numSlots) && console.error(new Error(`Moved too much item: tried to move ${FC} ${nC.name} from slot ${ZC} that had ${CC} ${n … [truncated]
```

#### 4091. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33230` → after: `L33006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33006) · [Before (L33230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33230)

```diff
-         return this.update(), null === mk ? Sk : {
+         return this.update(), null === qC ? bC : {
```

#### 4092. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33236` → after: `L33012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33012) · [Before (L33236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33236)

```diff
-         const ik = this.playerInventory.numSlots + (this.bD ? this.bD.numSlots : 0);
+         const ZC = this.playerInventory.numSlots + (this.bQ ? this.bQ.numSlots : 0);
```

#### 4093. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33243` → after: `L33019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33019) · [Before (L33243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33243)

```diff
-           if (this.bD) this.bD.setItemSlot(kk - this.playerInventory.numSlots, ek, ik, fk);
+           if (this.bQ) this.bQ.setItemSlot(CC - this.playerInventory.numSlots, zC, ZC, wC);
```

#### 4094. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33247` → after: `L33023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33023) · [Before (L33247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33247)

```diff
-           if ("Air" !== ek && (0, mk.lb)(ek) !== Dk.b[Sk]) throw new Error(`Attempting to put invalid item ${ek} ${ik} ${fk} \t\t\t\t\tinto armour inven slot idx ${kk}`);
+           if ("Air" !== zC && (0, qC.ib)(zC) !== QC.b[bC]) throw new Error(`Attempting to put invalid item ${zC} ${ZC} ${wC} \t\t\t\t\tinto armour inven slot idx ${CC}`);
```

#### 4095. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33253-L33254` → after: `L33029-L33030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33029-L33030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33029-L33030) · [Before (L33253-L33254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33253-L33254)

```diff
-         if (ek && null !== ek.amount && (ek.amount < 0 || ek.amount > fk.g.maxItemStackSize) && (console.error(new Error(`Tried to setItemAtIdx ${kk} with invalid amount ${ek.amount}. Slot will be set to null instead`).stack), ek = null), kk >= this.playerInventory.numSlots) {
-           if (this.bD) this.bD.items[kk - this.playerInventory.numSlots] = ek;
+         if (zC && null !== zC.amount && (zC.amount < 0 || zC.amount > wC.f.maxItemStackSize) && (console.error(new Error(`Tried to setItemAtIdx ${CC} with invalid amount ${zC.amount}. Slot will be set to null instead`).stack), zC = null), CC >= this.playerInventory.numSlots) {
+           if (this.bQ) this.bQ.items[CC - this.playerInventory.numSlots] = zC;
```

#### 4096. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33259` → after: `L33035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33035) · [Before (L33259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33259)

```diff
-           if (ek && (0, mk.lb)(ek.name) !== Dk.b[fk]) throw new Error(`Attempting to put invalid item ${null===(ik=ek)||void 0===ik?void 0:ik.name} ${null===(Sk=ek)||void 0===Sk?void 0:Sk.amount} ${JSON.stringify(null!==(bk=null===(rk=ek)||void 0===rk?void 0:rk.attributes)&&void  … [truncated]
+           if (zC && (0, qC.ib)(zC.name) !== QC.b[wC]) throw new Error(`Attempting to put invalid item ${null===(ZC=zC)||void 0===ZC?void 0:ZC.name} ${null===(bC=zC)||void 0===bC?void 0:bC.amount} ${JSON.stringify(null!==(nC=null===(fC=zC)||void 0===fC?void 0:fC.attributes)&&void  … [truncated]
```

#### 4097. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33265` → after: `L33041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33041) · [Before (L33265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33265)

```diff
-           if (this.bD) return this.bD.items[kk - this.playerInventory.numSlots];
+           if (this.bQ) return this.bQ.items[CC - this.playerInventory.numSlots];
```

#### 4098. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33267-L33269` → after: `L33043-L33045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33043-L33045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33043-L33045) · [Before (L33267-L33269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33267-L33269)

```diff
-             const ek = Sk.c[kk - this.playerInventory.numSlots],
-               ik = this.Lx.bloxd.getItemTypeObj(ek);
-             if (!ik) throw new Error(`item ${ek} defined in creativeItems but not elsewhere`);
+             const zC = bC.e[CC - this.playerInventory.numSlots],
+               ZC = this.MN.bloxd.getItemTypeObj(zC);
+             if (!ZC) throw new Error(`item ${zC} defined in creativeItems but not elsewhere`);
```

#### 4099. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33273` → after: `L33049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33049) · [Before (L33273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33273)

```diff
-               attributes: (0, rk.f)(ek),
+               attributes: (0, fC.h)(zC),
```

#### 4100. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33277` → after: `L33053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33053) · [Before (L33277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33277)

```diff
-           return this.Lx.BH(`Attempting to get item in high idx ${kk} when not in chest or creative`, new Error(`Attempting to get item in high idx ${kk} when not in chest or creative`)), null
+           return this.MN.xS(`Attempting to get item in high idx ${CC} when not in chest or creative`, new Error(`Attempting to get item in high idx ${CC} when not in chest or creative`)), null
```

#### 4101. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33282` → after: `L33058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33058) · [Before (L33282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33282)

```diff
-         const ek = kk - bk.p + Dk.b.length;
+         const zC = CC - nC.s + QC.b.length;
```

#### 4102. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33287` → after: `L33063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33063) · [Before (L33287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33287)

```diff
-         this.playerInventory.update(!0), null === (kk = this.bD) || void 0 === kk || kk.update(!0)
+         this.playerInventory.update(!0), null === (CC = this.bQ) || void 0 === CC || CC.update(!0)
```

#### 4103. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33300` → after: `L33076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33076) · [Before (L33300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33300)

```diff
-         this.bD && this.chestsWithUpdatesHeld && !this.chestsWithUpdatesHeld.has(this.bD) && (this.bD.holdUpdates(), this.chestsWithUpdatesHeld.add(this.bD))
+         this.bQ && this.chestsWithUpdatesHeld && !this.chestsWithUpdatesHeld.has(this.bQ) && (this.bQ.holdUpdates(), this.chestsWithUpdatesHeld.add(this.bQ))
```

#### 4104. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33304-L33308` → after: `L33080-L33084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33080-L33084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33080-L33084) · [Before (L33304-L33308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33304-L33308)

```diff
-           Ae: this.playerInventory.stringify(),
-           bD: this.bD ? this.bD.stringify() : null,
-           rD: this.rD,
-           PD: JSON.stringify(this.PD),
-           mD: this.bD ? this.bD.numSlots : null
+           wQ: this.playerInventory.stringify(),
+           bQ: this.bQ ? this.bQ.stringify() : null,
+           nQ: this.nQ,
+           fQ: JSON.stringify(this.fQ),
+           oQ: this.bQ ? this.bQ.numSlots : null
```

#### 4105. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33313-L33317` → after: `L33089-L33093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33089-L33093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33089-L33093) · [Before (L33313-L33317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33313-L33317)

```diff
-           Ae: ek,
-           bD: ik,
-           rD: Dk,
-           PD: fk,
-           mD: Sk
+           wQ: zC,
+           bQ: ZC,
+           nQ: QC,
+           fQ: wC,
+           oQ: bC
```

#### 4106. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33319` → after: `L33095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33095) · [Before (L33319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33319)

```diff
-         this.playerInventory.loadFromString(ek), ik ? (this.loadOpenChestFromStr(ik, null !== Sk && void 0 !== Sk ? Sk : bk.h), this.rD = Dk || null, this.PD = JSON.parse(fk) || null) : (this.bD = null, this.rD = null, this.PD = null)
+         this.playerInventory.loadFromString(zC), ZC ? (this.loadOpenChestFromStr(ZC, null !== bC && void 0 !== bC ? bC : nC.n), this.nQ = QC || null, this.fQ = JSON.parse(wC) || null) : (this.bQ = null, this.nQ = null, this.fQ = null)
```

#### 4107. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33322-L33323` → after: `L33098-L33099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33098-L33099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33098-L33099) · [Before (L33322-L33323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33322-L33323)

```diff
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk.h;
-         return this.bD = (0, rk.j)(this.Lx, this.playerInventory.state.Mq, (kk => {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nC.n;
+         return this.bQ = (0, fC.j)(this.MN, this.playerInventory.state.mH, (CC => {
```

#### 4108. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33326` → after: `L33102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33102) · [Before (L33326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33326)

```diff
-         }), ek), this.holdChestUpdates(), this.bD.loadFromString(kk), this.bD
+         }), zC), this.holdChestUpdates(), this.bQ.loadFromString(CC), this.bQ
```

#### 4109. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33330` → after: `L33106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33106) · [Before (L33330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33330)

```diff
-   38053: (kk, ek, ik) => {
+   38297: (CC, zC, ZC) => {
```

#### 4110. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33337-L33338` → after: `L33110-L33114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33110-L33114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33110-L33114) · [Before (L33337-L33338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33337-L33338)

```diff
-       k: () => Kk,
-       o: () => bk
+       h: () => MC,
+       j: () => FC,
+       n: () => NC,
+       q: () => WC,
+       r: () => nC
```

#### 4111. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33340-L33342` → after: `L33116-L33118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33116-L33118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33116-L33118) · [Before (L33340-L33342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33340-L33342)

```diff
-     var Dk = ik(1850),
-       fk = ik(3163),
-       Sk = ik(2195);
+     var QC = ZC(1806),
+       wC = ZC(3171),
+       bC = ZC(2166);
```

#### 4112. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33345` → after: `L33121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33121) · [Before (L33345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33345)

```diff
-       Pk = (0, Dk.h)(20),
+       oC = (0, QC.j)(20),
```

#### 4113. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33351-L33355` → after: `L33127-L33131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33127-L33131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33127-L33131) · [Before (L33351-L33355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33351-L33355)

```diff
-       Mk = (0, Dk.h)(40),
-       Kk = (0, Dk.h)(0),
-       xk = (0, Dk.h)(20),
-       nk = (0, Dk.h)(35),
-       Uk = (0, Dk.h)(40),
+       FC = (0, QC.j)(40),
+       WC = (0, QC.j)(0),
+       NC = (0, QC.j)(20),
+       MC = (0, QC.j)(35),
+       gC = (0, QC.j)(40),
```

#### 4114. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33358-L33359` → after: `L33134-L33135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33134-L33135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33134-L33135) · [Before (L33358-L33359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33358-L33359)

```diff
-         numTexturesInAtlas: fk.d,
-         textureOffsets: Sk.d,
+         numTexturesInAtlas: wC.c,
+         textureOffsets: bC.c,
```

#### 4115. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33558` → after: `L33334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33334) · [Before (L33558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33558)

```diff
-               softTolerance: (0, Dk.h)(60),
+               softTolerance: (0, QC.j)(60),
```

#### 4116. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33574` → after: `L33350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33350) · [Before (L33574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33574)

```diff
-               softTolerance: (0, Dk.h)(60),
+               softTolerance: (0, QC.j)(60),
```

#### 4117. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33589` → after: `L33365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33365) · [Before (L33589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33589)

```diff
-               softTolerance: (0, Dk.h)(60),
+               softTolerance: (0, QC.j)(60),
```

#### 4118. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33819` → after: `L33595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33595) · [Before (L33819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33819)

```diff
-               softTolerance: (0, Dk.h)(60),
+               softTolerance: (0, QC.j)(60),
```

#### 4119. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33894` → after: `L33670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33670) · [Before (L33894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33894)

```diff
-             softTolerance: (0, Dk.h)(60),
+             softTolerance: (0, QC.j)(60),
```

#### 4120. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33899` → after: `L33675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33675) · [Before (L33899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L33899)

```diff
-             softTolerance: (0, Dk.h)(60),
+             softTolerance: (0, QC.j)(60),
```

#### 4121. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34035` → after: `L33811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33811) · [Before (L34035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34035)

```diff
-   36758: (kk, ek, ik) => {
+   37032: (CC, zC, ZC) => {
```

#### 4122. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34061` → after: `L33837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33837) · [Before (L34061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34061)

```diff
-       return null !== (ek = bk[kk]) && void 0 !== ek ? ek : null
+       return null !== (zC = nC[CC]) && void 0 !== zC ? zC : null
```

#### 4123. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34133` → after: `L33909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33909) · [Before (L34133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34133)

```diff
-   38045: (kk, ek, ik) => {
+   38292: (CC, zC, ZC) => {
```

#### 4124. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34135` → after: `L33911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L33911) · [Before (L34135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34135)

```diff
-       e: () => fk
+       c: () => wC
```

#### 4125. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34921` → after: `L34697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34697) · [Before (L34921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34921)

```diff
-   37723: (kk, ek, ik) => {
+   37979: (CC, zC, ZC) => {
```

#### 4126. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34927` → after: `L34703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34703) · [Before (L34927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34927)

```diff
-   37268: (kk, ek, ik) => {
+   37512: (CC, zC, ZC) => {
```

#### 4127. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34931` → after: `L34706-L34707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34706-L34707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34706-L34707) · [Before (L34931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34931)

```diff
-       i: () => tk
+       i: () => BC,
+       k: () => sC
```

#### 4128. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34933-L34937` → after: `L34709-L34713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34709-L34713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34709-L34713) · [Before (L34933-L34937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34933-L34937)

```diff
-     var Dk = ik(189),
-       fk = ik(9020),
-       Sk = ik(9044),
-       bk = ik(37273),
-       rk = ik(314);
+     var QC = ZC(184),
+       wC = ZC(9194),
+       bC = ZC(9217),
+       nC = ZC(37519),
+       fC = ZC(326);
```

#### 4129. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34941` → after: `L34717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34717) · [Before (L34941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34941)

```diff
-       return (0, bk.g)((Dk => {
+       return (0, nC.j)((QC => {
```

#### 4130. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34944` → after: `L34720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34720) · [Before (L34944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34944)

```diff
-         return Dk === Sk.mY.jW(Sk.Qq) ? function(kk, ek) {
+         return QC === bC.JR.eT(bC.qE) ? function(CC, zC) {
```

#### 4131. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34948` → after: `L34724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34724) · [Before (L34948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34948)

```diff
-             if (!kk.qT(ek[0], ek[1], ek[2])) return !0
+             if (!CC.Gy(zC[0], zC[1], zC[2])) return !0
```

#### 4132. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34951` → after: `L34727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34727) · [Before (L34951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34951)

```diff
-         }(fk, Dk) : (ik[0] = Math.floor((Dk.Mx.base[0] + Dk.Mx.max[0]) / 2), ik[1] = Math.floor(Dk.Mx.base[1]), ik[2] = Math.floor((Dk.Mx.base[2] + Dk.Mx.max[2]) / 2), fk.iN(ik, ik), !fk.qT(ik[0], ik[1], ik[2]))
+         }(wC, QC) : (ZC[0] = Math.floor((QC.wN.base[0] + QC.wN.max[0]) / 2), ZC[1] = Math.floor(QC.wN.base[1]), ZC[2] = Math.floor((QC.wN.base[2] + QC.wN.max[2]) / 2), wC.lB(ZC, ZC), !wC.Gy(ZC[0], ZC[1], ZC[2]))
```

#### 4133. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34956` → after: `L34732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34732) · [Before (L34956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34956)

```diff
-       Kk = [...rk.Fc.map((kk => fk.g[kk].id)), fk.g.Vines.id, fk.g["Maple Trapdoor"].id, fk.g["Pine Trapdoor"].id, fk.g["Plum Trapdoor"].id, fk.g["Cedar Trapdoor"].id, fk.g["Aspen Trapdoor"].id, fk.g["Jungle Trapdoor"].id, fk.g["Palm Trapdoor"].id, fk.g["Pear Trapdoor"].id, fk.g[ … [truncated]
+       WC = [...fC.xc.map((CC => wC.g[CC].id)), wC.g.Vines.id, wC.g["Maple Trapdoor"].id, wC.g["Pine Trapdoor"].id, wC.g["Plum Trapdoor"].id, wC.g["Cedar Trapdoor"].id, wC.g["Aspen Trapdoor"].id, wC.g["Jungle Trapdoor"].id, wC.g["Palm Trapdoor"].id, wC.g["Pear Trapdoor"].id, wC.g[ … [truncated]
```

#### 4134. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34959` → after: `L34735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34735) · [Before (L34959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34959)

```diff
-       Uk = Object.keys(fk.g).filter((kk => fk.g[kk].qn)).map((kk => fk.g[kk].id)),
+       gC = Object.keys(wC.g).filter((CC => wC.g[CC].NM)).map((CC => wC.g[CC].id)),
```

#### 4135. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34962` → after: `L34738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34738) · [Before (L34962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34962)

```diff
-     for (const [De, fe] of Object.entries(Sk.Nb)) {
+     for (const [Zz, Qz] of Object.entries(bC.bc)) {
```

#### 4136. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34964` → after: `L34740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34740) · [Before (L34964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34964)

```diff
-       if (!kk) throw new Error(`Jump pad "${De}" not found in blockMetadata`);
+       if (!CC) throw new Error(`Jump pad "${Zz}" not found in blockMetadata`);
```

#### 4137. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34977-L34978` → after: `L34753-L34754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34753-L34754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34753-L34754) · [Before (L34977-L34978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34977-L34978)

```diff
-       let ik = kk.yw ? 0 : 1;
-       for (let Dk = 4; kk.yw && Dk < kk.yw.length; Dk += 6) ik = Math.max(ik, kk.yw[Dk]);
+       let ZC = CC.qp ? 0 : 1;
+       for (let QC = 4; CC.qp && QC < CC.qp.length; QC += 6) ZC = Math.max(ZC, CC.qp[QC]);
```

#### 4138. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34983` → after: `L34759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34759) · [Before (L34983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34983)

```diff
-       return kk[kk.bounceable = 1] = "bounceable", kk[kk.wallClimbable = 2] = "wallClimbable", kk[kk.ceilingClimbable = 4] = "ceilingClimbable", kk[kk.cobweb = 8] = "cobweb", kk[kk.qn = 16] = "qn", kk[kk.jumpPad = 32] = "jumpPad", kk[kk.conveyor = 64] = "conveyor", kk
+       return CC[CC.bounceable = 1] = "bounceable", CC[CC.wallClimbable = 2] = "wallClimbable", CC[CC.ceilingClimbable = 4] = "ceilingClimbable", CC[CC.cobweb = 8] = "cobweb", CC[CC.NM = 16] = "NM", CC[CC.jumpPad = 32] = "jumpPad", CC[CC.conveyor = 64] = "conveyor", CC
```

#### 4139. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34985` → after: `L34761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34761) · [Before (L34985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34985)

```diff
-     const jk = (0, rk.P)(fk.g, (kk => {
+     const iC = (0, fC.T)(wC.g, (CC => {
```

#### 4140. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34988` → after: `L34764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34764) · [Before (L34988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34988)

```diff
-       return nk.includes(kk) && (ik |= Ak.bounceable), Kk.includes(kk) && (ik |= Ak.wallClimbable), null !== (ek = fk.g[kk]) && void 0 !== ek && ek.climbableInside && (ik |= Ak.ceilingClimbable), xk.includes(kk) && (ik |= Ak.cobweb), Uk.includes(kk) && (ik |= Ak.qn), Hk.includes( … [truncated]
+       return MC.includes(CC) && (ZC |= IC.bounceable), WC.includes(CC) && (ZC |= IC.wallClimbable), null !== (zC = wC.g[CC]) && void 0 !== zC && zC.climbableInside && (ZC |= IC.ceilingClimbable), NC.includes(CC) && (ZC |= IC.cobweb), gC.includes(CC) && (ZC |= IC.NM), SC.includes( … [truncated]
```

#### 4141. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34995` → after: `L34771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34771) · [Before (L34995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L34995)

```diff
-     const qk = (0, rk.P)(fk.g, (kk => {
+     const dC = (0, fC.T)(wC.g, (CC => {
```

#### 4142. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35002` → after: `L34778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34778) · [Before (L35002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35002)

```diff
-       return 1 === ek || 2 === ek ? 1 === ek : "trapdoor" === fk.g[kk].model
+       return 1 === zC || 2 === zC ? 1 === zC : "trapdoor" === wC.g[CC].model
```

#### 4143. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35006` → after: `L34782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34782) · [Before (L35006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35006)

```diff
-       const ek = kk.dn;
+       const zC = CC.qM;
```

#### 4144. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35014` → after: `L34790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34790) · [Before (L35014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35014)

```diff
-         ik && Number.isInteger(ik.rootId) && !(Math.abs(ik.rootId) > 2147483647) && (null == fk || Number.isInteger(fk) && fk >= 0 && fk <= 127) && (dk[Dk] = 1, Vk[Dk] = ik.rootId, Fk[Dk] = null !== fk && void 0 !== fk ? fk : 0, uk[Dk] = ik.open ? 1 : 0)
+         ZC && Number.isInteger(ZC.rootId) && !(Math.abs(ZC.rootId) > 2147483647) && (null == wC || Number.isInteger(wC) && wC >= 0 && wC <= 127) && (eC[QC] = 1, hC[QC] = ZC.rootId, KC[QC] = null !== wC && void 0 !== wC ? wC : 0, YC[QC] = ZC.open ? 1 : 0)
```

#### 4145. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35037-L35038` → after: `L34813-L34814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34813-L34814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34813-L34814) · [Before (L35037-L35038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35037-L35038)

```diff
-       kk.dn !== sk && zk(kk);
-       const fk = kk.Lx.mY.ZZ(ek).zkk,
+       CC.qM !== vC && HC(CC);
+       const wC = CC.MN.JR.lL(zC).DCC,
```

#### 4146. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35041` → after: `L34817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34817) · [Before (L35041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35041)

```diff
-         rk = kk.iN(fk, hk),
+         fC = CC.lB(wC, cC),
```

#### 4147. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35045-L35046` → after: `L34821-L34822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34821-L34822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34821-L34822) · [Before (L35045-L35046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35045-L35046)

```diff
-         nk = Kk + Dk.g.Qp,
-         Uk = .5 * (ik.Mx.max[0] - ik.Mx.base[0]),
+         MC = WC + QC.f.Dp,
+         gC = .5 * (ZC.wN.max[0] - ZC.wN.base[0]),
```

#### 4148. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35105` → after: `L34881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34881) · [Before (L35105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35105)

```diff
-             1 === Dk || 3 === Dk ? (kk = 2, Sk = 0, bk = mk + .5, fk = 1 === Dk ? yk : yk + 1) : (kk = 0, Sk = 2, bk = yk + .5, fk = 2 === Dk ? mk : mk + 1), Math.abs(rk[kk] - fk) < tk && Math.abs(rk[Sk] - bk) - .499 < Uk && (Zk = !0, 0 !== ik.resting[kk] && (Ek[kk] = ek))
+             1 === QC || 3 === QC ? (CC = 2, bC = 0, nC = qC + .5, wC = 1 === QC ? RC : RC + 1) : (CC = 0, bC = 2, nC = RC + .5, wC = 2 === QC ? qC : qC + 1), Math.abs(fC[CC] - wC) < sC && Math.abs(fC[bC] - nC) - .499 < gC && (jC = !0, 0 !== ZC.resting[CC] && (XC[CC] = zC))
```

#### 4149. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35108` → after: `L34884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34884) · [Before (L35108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35108)

```diff
-             !(Pk - pk > mk + 1 || Pk + pk < mk || xk - pk > yk + 1 || xk + pk < yk) && (Gk || (Gk = !!(sk & Ak.cobweb)), Nk || (Nk = !!(sk & Ak.qn)))
+             !(oC - GC > qC + 1 || oC + GC < qC || NC - GC > RC + 1 || NC + GC < RC) && (UC || (UC = !!(vC & IC.cobweb)), BC || (BC = !!(vC & IC.NM)))
```

#### 4150. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35119-L35120` → after: `L34895-L34896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34895-L34896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34895-L34896) · [Before (L35119-L35120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35119-L35120)

```diff
-       const fk = ek.Mx.base,
-         Sk = ek.Mx.max,
+       const wC = zC.wN.base,
+         bC = zC.wN.max,
```

#### 4151. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35122` → after: `L34898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34898) · [Before (L35122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35122)

```diff
-       return bk[0] = fk[0] - ik, bk[1] = fk[1] - Dk, bk[2] = fk[2] - ik, bk[3] = Sk[0] + ik, bk[4] = Sk[1] + Dk, bk[5] = Sk[2] + ik, gk(kk.Lx, bk)
+       return nC[0] = wC[0] - ZC, nC[1] = wC[1] - QC, nC[2] = wC[2] - ZC, nC[3] = bC[0] + ZC, nC[4] = bC[1] + QC, nC[5] = bC[2] + ZC, LC(CC.MN, nC)
```

#### 4152. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35130` → after: `L34906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34906) · [Before (L35130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35130)

```diff
-       const ik = kk.Xx;
+       const ZC = CC.YN;
```

#### 4153. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35159-L35160` → after: `L34935-L34936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34935-L34936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34935-L34936) · [Before (L35159-L35160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35159-L35160)

```diff
-         const Sk = kk.mY.ZZ(ek),
-           bk = kk.mY.jW(ek);
+         const bC = CC.JR.lL(zC),
+           nC = CC.JR.eT(zC);
```

#### 4154. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35162-L35163` → after: `L34938-L34939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34938-L34939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34938-L34939) · [Before (L35162-L35163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35162-L35163)

```diff
-         const rk = Sk.Mik,
-           Pk = null !== (fk = Sk.Xx) && void 0 !== fk ? fk : kk.Xx,
+         const fC = bC.GZC,
+           oC = null !== (wC = bC.YN) && void 0 !== wC ? wC : CC.YN,
```

#### 4155. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35174-L35175` → after: `L34950-L34951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34950-L34951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34950-L34951) · [Before (L35174-L35175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35174-L35175)

```diff
-           const xk = kk.Fy(ek);
-           if (kk.dn.pT(xk)) {
+           const NC = CC.rG(zC);
+           if (CC.qM.Sy(NC)) {
```

#### 4156. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35211` → after: `L34987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34987) · [Before (L35211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35211)

```diff
-   37576: (kk, ek, ik) => {
+   37821: (CC, zC, ZC) => {
```

#### 4157. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35214` → after: `L34990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34990) · [Before (L35214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35214)

```diff
-       f: () => Sk
+       g: () => bC
```

#### 4158. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35216` → after: `L34992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L34992) · [Before (L35216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35216)

```diff
-     var Dk = ik(9020);
+     var QC = ZC(9194);
```

#### 4159. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35245` → after: `L35021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35021) · [Before (L35245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35245)

```diff
-   36945: (kk, ek, ik) => {
+   37213: (CC, zC, ZC) => {
```

#### 4160. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35248-L35250` → after: `L35024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35024) · [Before (L35248-L35250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35248-L35250)

```diff
-       c: () => fk,
-       e: () => Pk,
-       f: () => rk,
+       d: () => wC,
```

#### 4161. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35252` → after: `L35026-L35028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35026-L35028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35026-L35028) · [Before (L35252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35252)

```diff
-       k: () => Sk
+       h: () => fC,
+       k: () => nC,
+       n: () => bC
```

#### 4162. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35263` → after: `L35039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35039) · [Before (L35263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35263)

```diff
-   36967: (kk, ek, ik) => {
+   37235: (CC, zC, ZC) => {
```

#### 4163. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35267` → after: `L35042-L35043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35042-L35043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35042-L35043) · [Before (L35267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35267)

```diff
-       d: () => uk
+       d: () => dC,
+       e: () => YC
```

#### 4164. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35269` → after: `L35045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35045) · [Before (L35269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35269)

```diff
-     var Dk = ik(36960);
+     var QC = ZC(37222);
```

#### 4165. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35319-L35320` → after: `L35095-L35096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35095-L35096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35095-L35096) · [Before (L35319-L35320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35319-L35320)

```diff
-       if (kk.loop === Dk.k.Loop || null !== kk.animTimeUpdate) return 1 / 0;
-       if (kk.loop === Dk.k.Hold && kk.lengthSeconds > 0) return kk.startDelaySeconds + kk.lengthSeconds;
+       if (CC.loop === QC.h.Loop || null !== CC.animTimeUpdate) return 1 / 0;
+       if (CC.loop === QC.h.Hold && CC.lengthSeconds > 0) return CC.startDelaySeconds + CC.lengthSeconds;
```

#### 4166. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35322` → after: `L35098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35098) · [Before (L35322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35322)

```diff
-       return ik ? 1 / 0 : kk.startDelaySeconds + ek + 2 * Dk.o
+       return ZC ? 1 / 0 : CC.startDelaySeconds + zC + 2 * QC.k
```

#### 4167. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35344` → after: `L35120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35120) · [Before (L35344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35344)

```diff
-       return "number" === typeof kk ? kk : kk.constant
+       return "number" === typeof CC ? CC : CC.constant
```

#### 4168. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35346-L35348` → after: `L35122-L35124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35122-L35124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35122-L35124) · [Before (L35346-L35348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35346-L35348)

```diff
-     var nk = ik(36971),
-       Uk = ik(36953),
-       Hk = ik(36963);
+     var MC = ZC(37244),
+       gC = ZC(37215),
+       SC = ZC(37227);
```

#### 4169. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35354-L35356` → after: `L35130-L35132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35130-L35132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35130-L35132) · [Before (L35354-L35356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35354-L35356)

```diff
-         ["rotation", Dk.i.Rotation],
-         ["position", Dk.i.Position],
-         ["scale", Dk.i.Scale]
+         ["rotation", QC.d.Rotation],
+         ["position", QC.d.Position],
+         ["scale", QC.d.Scale]
```

#### 4170. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35362` → after: `L35138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35138) · [Before (L35362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35362)

```diff
-       if (kk.length > lk) return jk(ek, `file is ${kk.length} characters, over the 524288 limit`);
+       if (CC.length > PC) return iC(zC, `file is ${CC.length} characters, over the 524288 limit`);
```

#### 4171. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35367` → after: `L35143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35143) · [Before (L35367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35367)

```diff
-         return jk(ek, `invalid JSON: ${fk.message}`)
+         return iC(zC, `invalid JSON: ${wC.message}`)
```

#### 4172. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35372` → after: `L35148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35148) · [Before (L35372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35372)

```diff
-         return jk(ek, `could not be loaded: ${fk.message}`)
+         return iC(zC, `could not be loaded: ${wC.message}`)
```

#### 4173. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35380` → after: `L35156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35156) · [Before (L35380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35380)

```diff
-           severity: Dk.e.Error,
+           severity: QC.b.Error,
```

#### 4174. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35393` → after: `L35169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35169) · [Before (L35393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35393)

```diff
-         if ("string" !== typeof ek || !wk.includes(ek)) return jk(this.source, `unsupported format_version ${JSON.stringify(ek)}; expected one of ${wk.join(", ")}`);
+         if ("string" !== typeof zC || !pC.includes(zC)) return iC(this.source, `unsupported format_version ${JSON.stringify(zC)}; expected one of ${pC.join(", ")}`);
```

#### 4175. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35397` → after: `L35173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35173) · [Before (L35397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35397)

```diff
-         if (fk.length > 128) return jk(this.source, `${fk.length} animations, over the 128 limit`);
+         if (wC.length > 128) return iC(this.source, `${wC.length} animations, over the 128 limit`);
```

#### 4176. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35402-L35403` → after: `L35178-L35179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35178-L35179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35178-L35179) · [Before (L35402-L35403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35402-L35403)

```diff
-           if (!(bk instanceof Uk.b)) throw bk;
-           this.CU(Dk.e.Error, `${rk}: ${bk.message}`)
+           if (!(nC instanceof gC.c)) throw nC;
+           this.Cg(QC.b.Error, `${fC}: ${nC.message}`)
```

#### 4177. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35406` → after: `L35182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35182) · [Before (L35406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35406)

```diff
-           severity: Dk.e.Warning,
+           severity: QC.b.Warning,
```

#### 4178. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35416-L35417` → after: `L35192-L35193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35192-L35193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35192-L35193) · [Before (L35416-L35417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35416-L35417)

```diff
-         if (0 === kk.length || kk.length > yk) throw new Uk.b("animation names must be 1-128 characters");
-         if (!(0, Uk.j)(ek)) throw new Uk.b("is not an object");
+         if (0 === CC.length || CC.length > RC) throw new gC.c("animation names must be 1-128 characters");
+         if (!(0, gC.j)(zC)) throw new gC.c("is not an object");
```

#### 4179. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35421-L35423` → after: `L35197-L35199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35197-L35199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35197-L35199) · [Before (L35421-L35423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35421-L35423)

```diff
-         rk.length > 0 && this.CU(Dk.e.Warning, `${kk}: ${rk.join(", ")} not supported and ignored`), Pk.length > 0 && this.CU(Dk.e.Warning, `${kk}: unknown keys ignored: ${Pk.slice(0,5).join(", ")}${Pk.length>5?", ...":""}`);
-         const mk = null !== (ik = ek.bones) && void 0 !== ik ? ik : {};
-         if (!(0, Uk.j)(mk)) throw new Uk.b('"bones" is not an object');
+         fC.length > 0 && this.Cg(QC.b.Warning, `${CC}: ${fC.join(", ")} not supported and ignored`), oC.length > 0 && this.Cg(QC.b.Warning, `${CC}: unknown keys ignored: ${oC.slice(0,5).join(", ")}${oC.length>5?", ...":""}`);
+         const qC = null !== (ZC = zC.bones) && void 0 !== ZC ? ZC : {};
+         if (!(0, gC.j)(qC)) throw new gC.c('"bones" is not an object');
```

#### 4180. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35425` → after: `L35201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35201) · [Before (L35425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35425)

```diff
-         if (Mk.length > 128) throw new Uk.b(`${Mk.length} bones, over the 128 limit`);
+         if (FC.length > 128) throw new gC.c(`${FC.length} bones, over the 128 limit`);
```

#### 4181. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35431-L35432` → after: `L35207-L35208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35207-L35208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35207-L35208) · [Before (L35431-L35432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35431-L35432)

```diff
-           if (0 === Dk.length || Dk.length > yk) throw new Uk.b("bone names must be 1-128 characters");
-           if (xk.has(kk)) throw new Uk.b(`bone "${Dk}" appears twice (bone names are case-insensitive)`);
+           if (0 === QC.length || QC.length > RC) throw new gC.c("bone names must be 1-128 characters");
+           if (NC.has(CC)) throw new gC.c(`bone "${QC}" appears twice (bone names are case-insensitive)`);
```

#### 4182. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35443` → after: `L35219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35219) · [Before (L35443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35443)

```diff
-           if ("number" !== typeof wk || !Number.isFinite(wk) || wk < 0 || wk > Uk.f) throw new Uk.b(`animation_length must be a number from 0 to ${Uk.f}`);
+           if ("number" !== typeof pC || !Number.isFinite(pC) || pC < 0 || pC > gC.e) throw new gC.c(`animation_length must be a number from 0 to ${gC.e}`);
```

#### 4183. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35447` → after: `L35223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35223) · [Before (L35447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35447)

```diff
-         if ("boolean" !== typeof pk) throw new Uk.b("override_previous_animation must be true or false");
+         if ("boolean" !== typeof GC) throw new gC.c("override_previous_animation must be true or false");
```

#### 4184. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35463-L35464` → after: `L35239-L35240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35239-L35240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35239-L35240) · [Before (L35463-L35464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35463-L35464)

```diff
-           jk = (0, nk.n)(Ak);
-         if (jk > nk.h) throw new Uk.b(`costs ${jk} to play each frame, over the ${nk.h} limit: animate fewer bones or simplify its Molang`);
+           iC = (0, MC.j)(IC);
+         if (iC > MC.d) throw new gC.c(`costs ${iC} to play each frame, over the ${MC.d} limit: animate fewer bones or simplify its Molang`);
```

#### 4185. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35468` → after: `L35244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35244) · [Before (L35468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35468)

```diff
-         if (!(0, Uk.j)(ek)) throw new Uk.b(`bone "${kk}" is not an object`);
+         if (!(0, gC.j)(zC)) throw new gC.c(`bone "${CC}" is not an object`);
```

#### 4186. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35470-L35472` → after: `L35246-L35248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35246-L35248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35246-L35248) · [Before (L35470-L35472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35470-L35472)

```diff
-           [Dk.i.Rotation]: null,
-           [Dk.i.Position]: null,
-           [Dk.i.Scale]: null
+           [QC.d.Rotation]: null,
+           [QC.d.Position]: null,
+           [QC.d.Scale]: null
```

#### 4187. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35476-L35477` → after: `L35252-L35253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35252-L35253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35252-L35253) · [Before (L35476-L35477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35476-L35477)

```diff
-           if (void 0 === fk) throw new Uk.b(`bone "${kk}": "${Dk}" is not supported (only rotation, position and scale)`);
-           ik[fk] = this.compileChannel(ek[Dk], fk, `${kk}.${Dk}`)
+           if (void 0 === wC) throw new gC.c(`bone "${CC}": "${QC}" is not supported (only rotation, position and scale)`);
+           ZC[wC] = this.compileChannel(zC[QC], wC, `${CC}.${QC}`)
```

#### 4188. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35481-L35483` → after: `L35257-L35259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35257-L35259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35257-L35259) · [Before (L35481-L35483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35481-L35483)

```diff
-           rotation: ik[Dk.i.Rotation],
-           position: ik[Dk.i.Position],
-           scale: ik[Dk.i.Scale]
+           rotation: ZC[QC.d.Rotation],
+           position: ZC[QC.d.Position],
+           scale: ZC[QC.d.Scale]
```

#### 4189. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35490` → after: `L35266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35266) · [Before (L35490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35490)

```diff
-           dataPoints: (0, Uk.k)(kk, ek, ik),
+           dataPoints: (0, gC.l)(CC, zC, ZC),
```

#### 4190. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35496-L35497` → after: `L35272-L35273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35272-L35273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35272-L35273) · [Before (L35496-L35497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35496-L35497)

```diff
-           dataPoints: (0, Uk.k)(kk, ek, ik),
-           catmullRom: (0, Uk.m)(kk, ik),
+           dataPoints: (0, gC.l)(CC, zC, ZC),
+           catmullRom: (0, gC.q)(CC, ZC),
```

#### 4191. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35501` → after: `L35277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35277) · [Before (L35501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35501)

```diff
-           if (!(0, Uk.j)(kk)) throw new Uk.b(`${ik} must be a value, an array or a map of keyframes`);
+           if (!(0, gC.j)(CC)) throw new gC.c(`${ZC} must be a value, an array or a map of keyframes`);
```

#### 4192. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35504` → after: `L35280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35280) · [Before (L35504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35504)

```diff
-             if (Dk.length > 2048) throw new Uk.b(`${ik} has ${Dk.length} keyframes, over the 2048 limit`);
+             if (QC.length > 2048) throw new gC.c(`${ZC} has ${QC.length} keyframes, over the 2048 limit`);
```

#### 4193. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35507` → after: `L35283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35283) · [Before (L35507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35507)

```diff
-                 bk = `${ik}@${Sk}`;
+                 nC = `${ZC}@${bC}`;
```

#### 4194. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35509-L35511` → after: `L35285-L35287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35285-L35287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35285-L35287) · [Before (L35509-L35511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35509-L35511)

```diff
-                 time: (0, Uk.l)(Sk, ik),
-                 dataPoints: (0, Uk.k)(Dk, ek, bk),
-                 catmullRom: !!(0, Uk.j)(Dk) && (0, Uk.m)(Dk, bk),
+                 time: (0, gC.n)(bC, ZC),
+                 dataPoints: (0, gC.l)(QC, zC, nC),
+                 catmullRom: !!(0, gC.j)(QC) && (0, gC.q)(QC, nC),
```

#### 4195. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35517-L35518` → after: `L35293-L35294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35293-L35294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35293-L35294) · [Before (L35517-L35518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35517-L35518)

```diff
-         if (0 === fk.length) throw new Uk.b(`${ik} has no keyframes`);
-         if (this.keyframeCount += fk.length, this.keyframeCount > 2e4) throw new Uk.b("the file has over 20000 keyframes");
+         if (0 === wC.length) throw new gC.c(`${ZC} has no keyframes`);
+         if (this.keyframeCount += wC.length, this.keyframeCount > 2e4) throw new gC.c("the file has over 20000 keyframes");
```

#### 4196. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35521-L35522` → after: `L35297-L35298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35297-L35298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35297-L35298) · [Before (L35521-L35522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35521-L35522)

```diff
-           if (fk[Sk].time - fk[Sk - 1].time < Dk.o) throw new Uk.b(`${ik} has two keyframes at ${fk[Sk].time}s`);
-         return (0, Uk.i)(fk), {
+           if (wC[bC].time - wC[bC - 1].time < QC.k) throw new gC.c(`${ZC} has two keyframes at ${wC[bC].time}s`);
+         return (0, gC.f)(wC), {
```

#### 4197. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35548` → after: `L35324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35324) · [Before (L35548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35548)

```diff
-         return null !== (ik = Dk.constant) && void 0 !== ik ? ik : Dk
+         return null !== (ZC = QC.constant) && void 0 !== ZC ? ZC : QC
```

#### 4198. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35551-L35555` → after: `L35327-L35331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35327-L35331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35327-L35331) · [Before (L35551-L35555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35551-L35555)

```diff
-         if ("number" === typeof kk) return (0, Hk.k)(dk(kk, ek));
-         if ("string" !== typeof kk) throw new Uk.b(`${ek}: expected a number or a Molang string`);
-         if (this.molangChars += kk.length, this.molangChars > 65536) throw new Uk.b("the file has over 65536 characters of Molang");
-         if (!this.variables.reserve(kk)) throw new Uk.b(`${ek}: the pack reads too many different variables`);
-         const ik = (0, Hk.h)(kk, {
+         if ("number" === typeof CC) return (0, SC.g)(eC(CC, zC));
+         if ("string" !== typeof CC) throw new gC.c(`${zC}: expected a number or a Molang string`);
+         if (this.molangChars += CC.length, this.molangChars > 65536) throw new gC.c("the file has over 65536 characters of Molang");
+         if (!this.variables.reserve(CC)) throw new gC.c(`${zC}: the pack reads too many different variables`);
+         const ZC = (0, SC.f)(CC, {
```

#### 4199. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35558-L35559` → after: `L35334-L35335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35334-L35335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35334-L35335) · [Before (L35558-L35559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35558-L35559)

```diff
-         if (!ik.ok) throw new Uk.b(`${ek}: ${ik.error}`);
-         return null === ik.value.constant ? ik.value : (0, Hk.k)(dk(ik.value.constant, ek))
+         if (!ZC.ok) throw new gC.c(`${zC}: ${ZC.error}`);
+         return null === ZC.value.constant ? ZC.value : (0, SC.g)(eC(ZC.value.constant, zC))
```

#### 4200. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35564` → after: `L35340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35340) · [Before (L35564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35564)

```diff
-         if (null === ik || ik < 0 || ik > Uk.f) throw new Uk.b(`${ek} must be a constant number of seconds from 0 to ${Uk.f}`);
+         if (null === ZC || ZC < 0 || ZC > gC.e) throw new gC.c(`${zC} must be a constant number of seconds from 0 to ${gC.e}`);
```

#### 4201. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35577` → after: `L35353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35353) · [Before (L35577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35577)

```diff
-       if (!Number.isFinite(kk) || Math.abs(kk) > pk) throw new Uk.b(`${ek}: ${kk} is not a finite number within \xb11000000`);
+       if (!Number.isFinite(CC) || Math.abs(CC) > GC) throw new gC.c(`${zC}: ${CC} is not a finite number within \xb11000000`);
```

#### 4202. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35582-L35585` → after: `L35358-L35361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35358-L35361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35358-L35361) · [Before (L35582-L35585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35582-L35585)

```diff
-       if (void 0 === kk || !1 === kk) return Dk.k.Once;
-       if (!0 === kk) return Dk.k.Loop;
-       if ("hold_on_last_frame" === kk) return Dk.k.Hold;
-       throw new Uk.b(`loop ${JSON.stringify(kk)} is not supported (true, false or "hold_on_last_frame")`)
+       if (void 0 === CC || !1 === CC) return QC.h.Once;
+       if (!0 === CC) return QC.h.Loop;
+       if ("hold_on_last_frame" === CC) return QC.h.Hold;
+       throw new gC.c(`loop ${JSON.stringify(CC)} is not supported (true, false or "hold_on_last_frame")`)
```

#### 4203. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35599` → after: `L35375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35375) · [Before (L35599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35599)

```diff
-                 severity: Dk.e.Error,
+                 severity: QC.b.Error,
```

#### 4204. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35601` → after: `L35377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35377) · [Before (L35601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35601)

```diff
-                 message: `${fk.id} is already defined by another file; the first definition is kept`
+                 message: `${wC.id} is already defined by another file; the first definition is kept`
```

#### 4205. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35613` → after: `L35389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35389) · [Before (L35613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35613)

```diff
-         return null !== (ek = null !== (ik = this.byId.get(kk)) && void 0 !== ik ? ik : this.byShortName.get(kk)) && void 0 !== ek ? ek : null
+         return null !== (zC = null !== (ZC = this.byId.get(CC)) && void 0 !== ZC ? ZC : this.byShortName.get(CC)) && void 0 !== zC ? zC : null
```

#### 4206. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35636` → after: `L35412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35412) · [Before (L35636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35636)

```diff
-   36984: (kk, ek, ik) => {
+   37257: (CC, zC, ZC) => {
```

#### 4207. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35638-L35640` → after: `L35414-L35416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35414-L35416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35414-L35416) · [Before (L35638-L35640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35638-L35640)

```diff
-       c: () => Mk,
-       f: () => Sk,
-       g: () => bk
+       e: () => FC,
+       g: () => bC,
+       k: () => nC
```

#### 4208. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35642` → after: `L35418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35418) · [Before (L35642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35642)

```diff
-     var Dk = ik(36960);
+     var QC = ZC(37222);
```

#### 4209. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35651` → after: `L35427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35427) · [Before (L35651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35651)

```diff
-         case Dk.k.Once:
+         case QC.h.Once:
```

#### 4210. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35653` → after: `L35429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35429) · [Before (L35653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35653)

```diff
-         case Dk.k.Hold:
+         case QC.h.Hold:
```

#### 4211. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35655` → after: `L35431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35431) · [Before (L35655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35655)

```diff
-         case Dk.k.Loop: {
+         case QC.h.Loop: {
```

#### 4212. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35678` → after: `L35454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35454) · [Before (L35678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35678)

```diff
-       if (null !== xk && Math.abs(xk.time - ek) < Dk.o ? Uk = xk : null !== nk && Math.abs(nk.time - ek) < Dk.o ? Uk = nk : null === xk || !xk.step && null !== nk ? null !== nk && null === xk && (Uk = nk) : Uk = xk, null !== Uk) return void mk(Uk, ek, fk, Sk);
+       if (null !== NC && Math.abs(NC.time - zC) < QC.k ? gC = NC : null !== MC && Math.abs(MC.time - zC) < QC.k ? gC = MC : null === NC || !NC.step && null !== MC ? null !== MC && null === NC && (gC = MC) : gC = NC, null !== gC) return void qC(gC, zC, wC, bC);
```

#### 4213. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35702` → after: `L35478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35478) · [Before (L35702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35702)

```diff
-           bk = kk[0 === fk ? fk : fk - 1],
+           nC = CC[0 === wC ? wC : wC - 1],
```

#### 4214. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35716` → after: `L35492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35492) · [Before (L35716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35716)

```diff
-       }(kk.time > ek || Math.abs(kk.time - ek) < Dk.o ? kk.pre : kk.post, ik, fk)
+       }(CC.time > zC || Math.abs(CC.time - zC) < QC.k ? CC.pre : CC.post, ZC, wC)
```

#### 4215. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35720` → after: `L35496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35496) · [Before (L35720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35720)

```diff
-       return "number" === typeof kk ? kk : kk.evaluate(ek)
+       return "number" === typeof CC ? CC : CC.evaluate(zC)
```

#### 4216. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35723` → after: `L35499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35499) · [Before (L35723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35723)

```diff
-   36960: (kk, ek, ik) => {
+   37222: (CC, zC, ZC) => {
```

#### 4217. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35725-L35728` → after: `L35501-L35504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35501-L35504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35501-L35504) · [Before (L35725-L35728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35725-L35728)

```diff
-       e: () => bk,
-       i: () => fk,
-       k: () => Sk,
-       o: () => Dk
+       b: () => nC,
+       d: () => wC,
+       h: () => bC,
+       k: () => QC
```

#### 4218. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35741` → after: `L35517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35517) · [Before (L35741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35741)

```diff
-   36971: (kk, ek, ik) => {
+   37244: (CC, zC, ZC) => {
```

#### 4219. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35744-L35746` → after: `L35521-L35522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35521-L35522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35521-L35522) · [Before (L35744-L35746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35744-L35746)

```diff
-       h: () => Dk,
-       l: () => Hk,
-       n: () => Kk
+       g: () => SC,
+       j: () => WC
```

#### 4220. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35761` → after: `L35537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35537) · [Before (L35761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35761)

```diff
-         ek = Uk(kk.blendWeight) + (null !== (ik = null === (Dk = kk.animTimeUpdate) || void 0 === Dk ? void 0 : Dk.cost) && void 0 !== ik ? ik : 0);
+         zC = gC(CC.blendWeight) + (null !== (ZC = null === (QC = CC.animTimeUpdate) || void 0 === QC ? void 0 : QC.cost) && void 0 !== ZC ? ZC : 0);
```

#### 4221. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35775` → after: `L35551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35551) · [Before (L35775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35775)

```diff
-       return ik && Dk > 1 ? bk + fk + (Dk >= 3 ? Pk : Dk) * ek : Sk + fk + Math.min(rk, Dk) * ek
+       return ZC && QC > 1 ? nC + wC + (QC >= 3 ? oC : QC) * zC : bC + wC + Math.min(fC, QC) * zC
```

#### 4222. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35806` → after: `L35582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35582) · [Before (L35806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35806)

```diff
-   36978: (kk, ek, ik) => {
+   37246: (CC, zC, ZC) => {
```

#### 4223. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35809` → after: `L35585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35585) · [Before (L35809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35809)

```diff
-       h: () => Sk,
+       g: () => bC,
```

#### 4224. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35811-L35812` → after: `L35587-L35588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35587-L35588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35587-L35588) · [Before (L35811-L35812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35811-L35812)

```diff
-       n: () => mk,
-       p: () => Pk
+       o: () => qC,
+       s: () => oC
```

#### 4225. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35814` → after: `L35590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35590) · [Before (L35814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35814)

```diff
-     var Dk = ik(36963);
+     var QC = ZC(37227);
```

#### 4226. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35836` → after: `L35612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35612) · [Before (L35836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35836)

```diff
-       Pk[Dk.e.LifeTime] = ik, Pk[Dk.e.DeltaTime] = Sk, Pk[Dk.e.GroundSpeed] = ek[fk.GroundSpeed], Pk[Dk.e.ModifiedMoveSpeed] = ek[fk.GroundSpeed], Pk[Dk.e.ModifiedDistanceMoved] = bk, Pk[Dk.e.VerticalSpeed] = ek[fk.VerticalSpeed], Pk[Dk.e.IsOnGround] = ek[fk.OnGround], Pk[Dk.e.Is … [truncated]
+       oC[QC.d.LifeTime] = ZC, oC[QC.d.DeltaTime] = bC, oC[QC.d.GroundSpeed] = zC[wC.GroundSpeed], oC[QC.d.ModifiedMoveSpeed] = zC[wC.GroundSpeed], oC[QC.d.ModifiedDistanceMoved] = nC, oC[QC.d.VerticalSpeed] = zC[wC.VerticalSpeed], oC[QC.d.IsOnGround] = zC[wC.OnGround], oC[QC.d.Is … [truncated]
```

#### 4227. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35845` → after: `L35621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35621) · [Before (L35845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35845)

```diff
-   36743: (kk, ek, ik) => {
+   37009: (CC, zC, ZC) => {
```

#### 4228. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35847` → after: `L35623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/119.js#L35623) · [Before (L35847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/119.js#L35847)

```diff
-       d: () => Dk,
+       c: () => QC,
```
