# Changed — Bundle Modifications Report (Part 020 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `20 / 58` (**365** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 019](part-019.md) · [Part 021 →](part-021.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/313.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/313.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207)

#### 23. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L86-L89)

```diff
-     var Ez = bz(39033);
-     const nz = "logDepthFragment",
-       iz = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "imageProcessingFunctions",
+       Oq = "#if defined(COLORGRADING) && !defined(COLORGRADING3D)\n/** \n* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.\n* sampler3dSetting.x=textureOffset (0.5/textureSize).\n* sampler3dSetting.y=textureSize.\n*/\n#define inline\nvec3 sampleTexture3D(sampler2D c … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L95-L97` → after: `L95-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L95-L97) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L95-L97)

```diff
-   60382: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       skyPixelShader: () => wz
+   41747: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L99-L109` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L99-L102) · [Before (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L99-L109)

```diff
-     var Ez = bz(39033),
-       nz = bz(41367),
-       iz = bz(41171),
-       lz = bz(41376),
-       Mz = bz(41112),
-       tz = bz(41380),
-       Hz = bz(41404),
-       Oz = bz(41407);
-     const pz = "imageProcessingCompatibility",
-       dz = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
-     Ez.e.IncludesShadersStore[pz] || (Ez.e.IncludesShadersStore[pz] = dz);
+     var Yq = gq(39617);
+     const lq = "logDepthDeclaration",
+       Oq = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L111-L118` → after: `L104-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L104-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L104-L142) · [Before (L111-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L111-L118)

```diff
-         name: pz,
-         shader: dz
-       },
-       Zz = "skyPixelShader",
-       Rz = "precision highp float;varying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform floa … [truncated]
-     Ez.e.ShadersStore[Zz] || (Ez.e.ShadersStore[Zz] = Rz);
-     const Kz = [nz.c, iz.d, lz.c, Mz.c, tz.e, Hz.d, Oz.b, Fz];
-     for (const Xz of Kz) Ez.e.IncludesShadersStore[Xz.name] || (Ez.e.IncludesShadersStore[Xz.name] = Xz.shader);
+       name: lq,
+       shader: Oq
+     }
+   },
+   41948: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "logDepthFragment",
+       Oq = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+ ... (23 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/314.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/314.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/314.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/314.js#L4)

```diff
-   41112: (zz, uz, bz) => {
+   41921: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/314.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/314.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "helperFunctions",
-       iz = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clipPlaneFragment",
+       Oq = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L17` → after: `L17-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L17-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/314.js#L17-L95) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/314.js#L17)

```diff
-   60534: (zz, uz, bz) => {
+   41905: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "clipPlaneFragmentDeclaration",
+       Oq = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41956: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => mq
+ ... (63 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L19` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/314.js#L97) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/314.js#L19)

```diff
-       rgbdDecodePixelShader: () => tz
+       skyPixelShader: () => jq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L21-L27` → after: `L99-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/314.js#L99-L118) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/314.js#L21-L27)

```diff
-     var Ez = bz(39033),
-       nz = bz(41112);
-     const iz = "rgbdDecodePixelShader",
-       lz = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
-     Ez.e.ShadersStore[iz] || (Ez.e.ShadersStore[iz] = lz);
-     const Mz = [nz.c];
-     for (const Hz of Mz) Ez.e.IncludesShadersStore[Hz.name] || (Ez.e.IncludesShadersStore[Hz.name] = Hz.shader);
+     var Yq = gq(39617),
+       lq = gq(41905),
+       Oq = gq(41747),
+       mq = gq(41912),
+       xq = gq(41670),
+       Aq = gq(41921),
+       cq = gq(41948),
+       uq = gq(41956);
+     const Bq = "imageProcessingCompatibility",
+       Wq = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
+     Yq.d.IncludesShadersStore[Bq] || (Yq.d.IncludesShadersStore[Bq] = Wq);
+     const Nq = {
+         name: Bq,
+         shader: Wq
+       },
+       aq = "skyPixelShader",
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/315.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/315.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/315.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/315.js#L4)

```diff
-   41112: (zz, uz, bz) => {
+   41670: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/315.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/315.js#L8)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/315.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/315.js#L11)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/315.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/315.js#L17)

```diff
-   60546: (zz, uz, bz) => {
+   61365: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/315.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/315.js#L19)

```diff
-       rgbdEncodePixelShader: () => tz
+       rgbdDecodePixelShader: () => Aq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L21-L25` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/315.js#L21-L25) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/315.js#L21-L25)

```diff
-     var Ez = bz(39033),
-       nz = bz(41112);
-     const iz = "rgbdEncodePixelShader",
-       lz = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
-     Ez.e.ShadersStore[iz] || (Ez.e.ShadersStore[iz] = lz);
+     var Yq = gq(39617),
+       lq = gq(41670);
+     const Oq = "rgbdDecodePixelShader",
+       mq = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
+     Yq.d.ShadersStore[Oq] || (Yq.d.ShadersStore[Oq] = mq);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/315.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/315.js#L27)

```diff
-     for (const Hz of Mz) Ez.e.IncludesShadersStore[Hz.name] || (Ez.e.IncludesShadersStore[Hz.name] = Hz.shader);
+     for (const cq of xq) Yq.d.IncludesShadersStore[cq.name] || (Yq.d.IncludesShadersStore[cq.name] = cq.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/316.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/316.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/316.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/316.js#L4)

```diff
-   41198: (zz, uz, bz) => {
+   41670: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/316.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/316.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "bakedVertexAnimation",
-       iz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "helperFunctions",
+       Oq = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/316.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/316.js#L17-L19)

```diff
-   41117: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz
+   61377: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       rgbdEncodePixelShader: () => Aq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L21-L167` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/316.js#L21-L27) · [Before (L21-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/316.js#L21-L167)

```diff
-     var Ez = bz(39033);
-     const nz = "bakedVertexAnimationDeclaration",
-       iz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41114: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "bonesDeclaration",
-       iz = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
- ... (131 more removed lines; see GitHub link above)
+     var Yq = gq(39617),
+       lq = gq(41670);
+     const Oq = "rgbdEncodePixelShader",
+       mq = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
+     Yq.d.ShadersStore[Oq] || (Yq.d.ShadersStore[Oq] = mq);
+     const xq = [lq.c];
+     for (const cq of xq) Yq.d.IncludesShadersStore[cq.name] || (Yq.d.IncludesShadersStore[cq.name] = cq.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/317.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/317.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691)

#### 1. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/317.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/317.js#L4)

```diff
-   41126: (zz, uz, bz) => {
+   41772: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/317.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/317.js#L6)

```diff
-       c: () => lz
+       d: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/317.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/317.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "instancesDeclaration",
-       iz = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bakedVertexAnimation",
+       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/317.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/317.js#L17)

```diff
-   41187: (zz, uz, bz) => {
+   41678: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/317.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/317.js#L19)

```diff
-       b: () => lz
+       c: () => mq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/317.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/317.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "instancesVertex",
-       iz = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bakedVertexAnimationDeclaration",
+       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L30` → after: `L30-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L30-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/317.js#L30-L147) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/317.js#L30)

```diff
-   61048: (zz, uz, bz) => {
+   41673: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "bonesDeclaration",
+       Oq = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41763: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => mq
+ ... (102 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L32` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/317.js#L149) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/317.js#L32)

```diff
-       greasedLineVertexShader: () => Hz
+       colorVertexShader: () => Hq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L34-L41` → after: `L151-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/317.js#L151-L167) · [Before (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/317.js#L34-L41)

```diff
-     var Ez = bz(39033),
-       nz = bz(41126),
-       iz = bz(41187);
-     const lz = "greasedLineVertexShader",
-       Mz = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
-     Ez.e.ShadersStore[lz] || (Ez.e.ShadersStore[lz] = Mz);
-     const tz = [nz.c, iz.b];
-     for (const Oz of tz) Ez.e.IncludesShadersStore[Oz.name] || (Ez.e.IncludesShadersStore[Oz.name] = Oz.shader);
+     var Yq = gq(39617),
+       lq = gq(41673),
+       Oq = gq(41678),
+       mq = gq(41715),
+       xq = gq(41722),
+       Aq = gq(41683),
+       cq = gq(41761),
+       uq = gq(41763),
+       Bq = gq(41772),
+       Wq = gq(41798),
+       Nq = gq(41801),
+       aq = gq(41805);
+     const Vq = "colorVertexShader",
+       dq = "attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform mat4 view;\n#endif\n#include<i … [truncated]
+     Yq.d.ShadersStore[Vq] || (Yq.d.ShadersStore[Vq] = dq);
+     const jq = [lq.c, Oq.c, mq.b, xq.e, Aq.e, cq.b, uq.e, Bq.d, Wq.b, Nq.d, aq.b];
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/318.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/318.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73)

#### 1. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/318.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/318.js#L4)

```diff
-   41217: (zz, uz, bz) => {
+   41683: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/318.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/318.js#L6)

```diff
-       b: () => lz
+       e: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/318.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/318.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "bumpVertex",
-       iz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "instancesDeclaration",
+       Oq = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/318.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/318.js#L17)

```diff
-   41136: (zz, uz, bz) => {
+   41761: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/318.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/318.js#L19)

```diff
-       d: () => lz
+       b: () => mq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/318.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/318.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "bumpVertexDeclaration",
-       iz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "instancesVertex",
+       Oq = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L30-L32` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/318.js#L30-L32) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/318.js#L30-L32)

```diff
-   60687: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => lz
+   61844: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       greasedLineVertexShader: () => cq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L34-L122` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/318.js#L34-L41) · [Before (L34-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/318.js#L34-L122)

```diff
-     var Ez = bz(39033);
-     const nz = "harmonicsFunctions",
-       iz = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   60684: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "pbrBRDFFunctions",
-       iz = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
- ... (73 more removed lines; see GitHub link above)
+     var Yq = gq(39617),
+       lq = gq(41683),
+       Oq = gq(41761);
+     const mq = "greasedLineVertexShader",
+       xq = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
+     Yq.d.ShadersStore[mq] || (Yq.d.ShadersStore[mq] = xq);
+     const Aq = [lq.e, Oq.b];
+     for (const uq of Aq) Yq.d.IncludesShadersStore[uq.name] || (Yq.d.IncludesShadersStore[uq.name] = uq.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/319.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/319.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L4)

```diff
-   41226: (zz, uz, bz) => {
+   41792: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "clipPlaneVertex",
-       iz = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bumpVertex",
+       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L17)

```diff
-   41141: (zz, uz, bz) => {
+   41709: (qq, Eq, gq) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L19)

```diff
-       c: () => lz
+       e: () => mq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "clipPlaneVertexDeclaration",
-       iz = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bumpVertexDeclaration",
+       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L30)

```diff
-   41235: (zz, uz, bz) => {
+   61516: (qq, Eq, gq) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L32)

```diff
-       b: () => lz
+       e: () => mq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L34-L37)

```diff
-     var Ez = bz(39033);
-     const nz = "fogVertex",
-       iz = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "harmonicsFunctions",
+       Oq = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L43)

```diff
-   41147: (zz, uz, bz) => {
+   61509: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L45)

```diff
-       e: () => lz
+       d: () => mq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L47-L50)

```diff
-     var Ez = bz(39033);
-     const nz = "fogVertexDeclaration",
-       iz = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "pbrBRDFFunctions",
+       Oq = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L56)

```diff
-   41171: (zz, uz, bz) => {
+   61503: (qq, Eq, gq) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L58)

```diff
-       d: () => lz
+       b: () => mq
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L60-L63` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L60-L64) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L60-L63)

```diff
-     var Ez = bz(39033);
-     const nz = "logDepthDeclaration",
-       iz = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     gq(41642), gq(41651);
+     const lq = "pbrUboDeclaration",
+       Oq = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L69-L71` → after: `L70-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L70-L72) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L69-L71)

```diff
-   41259: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz
+   61497: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       pbrVertexShader: () => wq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L73-L76` → after: `L74-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L74-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L74-L78) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L73-L76)

```diff
-     var Ez = bz(39033);
-     const nz = "logDepthVertex",
-       iz = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617),
+       lq = gq(41634);
+     const Oq = "pbrVertexDeclaration",
+       mq = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
+     Yq.d.IncludesShadersStore[Oq] || (Yq.d.IncludesShadersStore[Oq] = mq);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L80-L97` → after: `L82-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L82-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/319.js#L82-L122) · [Before (L80-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/319.js#L80-L97)

```diff
-     }
-   },
-   60370: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       particlesVertexShader: () => Fz
-     });
-     var Ez = bz(39033),
-       nz = bz(41141),
-       iz = bz(41147),
-       lz = bz(41171),
-       Mz = bz(41226),
-       tz = bz(41235),
-       Hz = bz(41259);
-     const Oz = "particlesVertexShader",
-       pz = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
-     Ez.e.ShadersStore[Oz] || (Ez.e.ShadersStore[Oz] = pz);
- ... (2 more removed lines; see GitHub link above)
+     };
+     var Aq = gq(41642),
+       cq = gq(41651),
+       uq = gq(61503),
+       Bq = gq(41661),
+       Wq = gq(41698),
+       Nq = gq(41670),
+       aq = gq(61509),
+       Vq = gq(41673),
+       dq = gq(41678),
+       jq = gq(41683),
+       Hq = gq(41692),
+       oq = gq(41706),
+       Pq = gq(61516),
+       Qq = gq(41709),
+       yq = gq(41715),
+ ... (25 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/320.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/320.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68)

#### 1. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L4)

```diff
-   41226: (zz, uz, bz) => {
+   41798: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L6)

```diff
-       d: () => lz
+       b: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L8)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L11)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L17)

```diff
-   41141: (zz, uz, bz) => {
+   41715: (qq, Eq, gq) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L19)

```diff
-       c: () => lz
+       b: () => mq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L21)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L24)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L30)

```diff
-   41235: (zz, uz, bz) => {
+   41801: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L32)

```diff
-       b: () => lz
+       d: () => mq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L34)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L37)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L43)

```diff
-   41147: (zz, uz, bz) => {
+   41722: (qq, Eq, gq) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L47)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L50)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L56)

```diff
-   41171: (zz, uz, bz) => {
+   41747: (qq, Eq, gq) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L60)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L63)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L69)

```diff
-   41259: (zz, uz, bz) => {
+   41811: (qq, Eq, gq) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L73)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L76)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L82)

```diff
-   60380: (zz, uz, bz) => {
+   61167: (qq, Eq, gq) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L84)

```diff
-       skyVertexShader: () => Fz
+       particlesVertexShader: () => Nq
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L86-L97` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/320.js#L86-L97) · [Before (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/320.js#L86-L97)

```diff
-     var Ez = bz(39033),
-       nz = bz(41171),
-       iz = bz(41141),
-       lz = bz(41147),
-       Mz = bz(41226),
-       tz = bz(41259),
-       Hz = bz(41235);
-     const Oz = "skyVertexShader",
-       pz = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
-     Ez.e.ShadersStore[Oz] || (Ez.e.ShadersStore[Oz] = pz);
-     const dz = [nz.d, iz.c, lz.e, Mz.d, tz.b, Hz.b];
-     for (const Zz of dz) Ez.e.IncludesShadersStore[Zz.name] || (Ez.e.IncludesShadersStore[Zz.name] = Zz.shader);
+     var Yq = gq(39617),
+       lq = gq(41715),
+       Oq = gq(41722),
+       mq = gq(41747),
+       xq = gq(41798),
+       Aq = gq(41801),
+       cq = gq(41811);
+     const uq = "particlesVertexShader",
+       Bq = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
+     Yq.d.ShadersStore[uq] || (Yq.d.ShadersStore[uq] = Bq);
+     const Wq = [lq.b, Oq.e, mq.d, xq.b, Aq.d, cq.b];
+     for (const aq of Wq) Yq.d.IncludesShadersStore[aq.name] || (Yq.d.IncludesShadersStore[aq.name] = aq.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/321.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/321.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80)

#### 1. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L4)

```diff
-   41386: (zz, uz, bz) => {
+   41798: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L6)

```diff
-       c: () => lz
+       b: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "bumpFragment",
-       iz = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clipPlaneVertex",
+       Oq = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L17)

```diff
-   41363: (zz, uz, bz) => {
+   41715: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L21-L25)

```diff
-     var Ez = bz(39033);
-     bz(41322);
-     const nz = "bumpFragmentFunctions",
-       iz = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clipPlaneVertexDeclaration",
+       Oq = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L31)

```diff
-   41355: (zz, uz, bz) => {
+   41801: (qq, Eq, gq) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L35-L38)

```diff
-     var Ez = bz(39033);
-     const nz = "bumpFragmentMainFunctions",
-       iz = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "fogVertex",
+       Oq = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L44)

```diff
-   41308: (zz, uz, bz) => {
+   41722: (qq, Eq, gq) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L46)

```diff
-       c: () => lz
+       e: () => mq
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L48-L51)

```diff
-     var Ez = bz(39033);
-     const nz = "clusteredLightingFunctions",
-       iz = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "fogVertexDeclaration",
+       Oq = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L57)

```diff
-   41393: (zz, uz, bz) => {
+   41747: (qq, Eq, gq) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L59` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L58) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L59)

```diff
-       c: () => lz
+       d: () => mq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L61-L64` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L60-L63) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L61-L64)

```diff
-     var Ez = bz(39033);
-     const nz = "decalFragment",
-       iz = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "logDepthDeclaration",
+       Oq = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L70` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L69) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L70)

```diff
-   41402: (zz, uz, bz) => {
+   41811: (qq, Eq, gq) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L72` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L71) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L72)

```diff
-       e: () => lz
+       b: () => mq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L74-L77` → after: `L73-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L73-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/321.js#L73-L97) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/321.js#L74-L77)

```diff
-     var Ez = bz(39033);
-     const nz = "lightFragment",
-       iz = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "logDepthVertex",
+       Oq = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   61180: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       skyVertexShader: () => Nq
+     });
+     var Yq = gq(39617),
+       lq = gq(41747),
+       Oq = gq(41715),
+ ... (9 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/322.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/322.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/322.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/322.js#L4)

```diff
-   41380: (zz, uz, bz) => {
+   41926: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/322.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/322.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "clipPlaneFragment",
-       iz = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bumpFragment",
+       Oq = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/322.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/322.js#L17)

```diff
-   41367: (zz, uz, bz) => {
+   41901: (qq, Eq, gq) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/322.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/322.js#L19)

```diff
-       c: () => lz
+       d: () => mq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/322.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/322.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "clipPlaneFragmentDeclaration",
-       iz = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     gq(41869);
+     const lq = "bumpFragmentFunctions",
+       Oq = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/322.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/322.js#L30)

```diff
-   41407: (zz, uz, bz) => {
+   41894: (qq, Eq, gq) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L32` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/322.js#L33) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/322.js#L32)

```diff
-       b: () => lz
+       d: () => mq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/322.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/322.js#L34-L37)

```diff
-     var Ez = bz(39033);
-     const nz = "fogFragment",
-       iz = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bumpFragmentMainFunctions",
+       Oq = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/322.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/322.js#L43)

```diff
-   41376: (zz, uz, bz) => {
+   41862: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L45` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/322.js#L46) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/322.js#L45)

```diff
-       c: () => lz
+       b: () => mq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/322.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/322.js#L47-L50)

```diff
-     var Ez = bz(39033);
-     const nz = "fogFragmentDeclaration",
-       iz = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clusteredLightingFunctions",
+       Oq = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L56-L58` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/322.js#L57-L59) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/322.js#L56-L58)

```diff
-   41798: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       colorPixelShader: () => pz
+   41933: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => mq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L60-L69` → after: `L61-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L61-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/322.js#L61-L77) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/322.js#L60-L69)

```diff
-     var Ez = bz(39033),
-       nz = bz(41367),
-       iz = bz(41376),
-       lz = bz(41380),
-       Mz = bz(41407);
-     const tz = "colorPixelShader",
-       Hz = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
-     Ez.e.ShadersStore[tz] || (Ez.e.ShadersStore[tz] = Hz);
-     const Oz = [nz.c, iz.c, lz.e, Mz.b];
-     for (const dz of Oz) Ez.e.IncludesShadersStore[dz.name] || (Ez.e.IncludesShadersStore[dz.name] = dz.shader);
+     var Yq = gq(39617);
+     const lq = "decalFragment",
+       Oq = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41943: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "lightFragment",
+       Oq = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/323.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/323.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/323.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/323.js#L4)

```diff
-   41575: (zz, uz, bz) => {
+   41921: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/323.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/323.js#L6)

```diff
-       d: () => lz
+       c: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/323.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/323.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "bumpVertex",
-       iz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clipPlaneFragment",
+       Oq = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/323.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/323.js#L17)

```diff
-   41483: (zz, uz, bz) => {
+   41905: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/323.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/323.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "bumpVertexDeclaration",
-       iz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clipPlaneFragmentDeclaration",
+       Oq = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/323.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/323.js#L30)

```diff
-   41431: (zz, uz, bz) => {
+   41956: (qq, Eq, gq) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/323.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/323.js#L32)

```diff
-       b: () => lz
+       e: () => mq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L34-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/323.js#L34-L37) · [Before (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/323.js#L34-L38)

```diff
-     var Ez = bz(39033);
-     bz(41422), bz(41426);
-     const nz = "defaultUboDeclaration",
-       iz = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "fogFragment",
+       Oq = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/323.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/323.js#L44)

```diff
-   41447: (zz, uz, bz) => {
+   41912: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/323.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/323.js#L46)

```diff
-       c: () => lz
+       e: () => mq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/323.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/323.js#L48-L51)

```diff
-     var Ez = bz(39033);
-     const nz = "helperFunctions",
-       iz = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "fogFragmentDeclaration",
+       Oq = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L57-L59` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/323.js#L56-L58) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/323.js#L57-L59)

```diff
-   41422: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz
+   42328: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       colorPixelShader: () => Bq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L61-L120` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/323.js#L60-L69) · [Before (L61-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/323.js#L61-L120)

```diff
-     var Ez = bz(39033);
-     const nz = "sceneUboDeclaration",
-       iz = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41415: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       defaultVertexShaderWGSL: () => Wz
-     });
-     var Ez = bz(39033),
-       nz = bz(41422),
-       iz = bz(41426),
- ... (44 more removed lines; see GitHub link above)
+     var Yq = gq(39617),
+       lq = gq(41905),
+       Oq = gq(41912),
+       mq = gq(41921),
+       xq = gq(41956);
+     const Aq = "colorPixelShader",
+       cq = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
+     Yq.d.ShadersStore[Aq] || (Yq.d.ShadersStore[Aq] = cq);
+     const uq = [lq.d, Oq.e, mq.c, xq.e];
+     for (const Wq of uq) Yq.d.IncludesShadersStore[Wq.name] || (Yq.d.IncludesShadersStore[Wq.name] = Wq.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/324.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/324.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05)

#### 1. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L4)

```diff
-   41460: (zz, uz, bz) => {
+   42125: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L6)

```diff
-       c: () => lz
+       b: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "instancesDeclaration",
-       iz = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bumpVertex",
+       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L17)

```diff
-   41543: (zz, uz, bz) => {
+   42037: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L19)

```diff
-       b: () => lz
+       c: () => mq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "instancesVertex",
-       iz = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bumpVertexDeclaration",
+       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L30)

```diff
-   41426: (zz, uz, bz) => {
+   41987: (qq, Eq, gq) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L32)

```diff
-       c: () => lz
+       b: () => mq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L34-L37` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L34-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L34-L37)

```diff
-     var Ez = bz(39033);
-     const nz = "meshUboDeclaration",
-       iz = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     gq(41973), gq(41979);
+     const lq = "defaultUboDeclaration",
+       Oq = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L43)

```diff
-   41422: (zz, uz, bz) => {
+   42e3: (qq, Eq, gq) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L47-L50)

```diff
-     var Ez = bz(39033);
-     const nz = "sceneUboDeclaration",
-       iz = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "helperFunctions",
+       Oq = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L56` → after: `L57-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L57-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L57-L70) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L56)

```diff
-   61040: (zz, uz, bz) => {
+   41973: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "sceneUboDeclaration",
+       Oq = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41968: (qq, Eq, gq) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L58` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L72) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L58)

```diff
-       greasedLineVertexShaderWGSL: () => pz
+       defaultVertexShaderWGSL: () => sq
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L60-L69` → after: `L74-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L74-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/324.js#L74-L120) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/324.js#L60-L69)

```diff
-     var Ez = bz(39033),
-       nz = bz(41460),
-       iz = bz(41422),
-       lz = bz(41426),
-       Mz = bz(41543);
-     const tz = "greasedLineVertexShader",
-       Hz = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
-     Ez.e.ShadersStoreWGSL[tz] || (Ez.e.ShadersStoreWGSL[tz] = Hz);
-     const Oz = [nz.c, iz.b, lz.c, Mz.b];
-     for (const dz of Oz) Ez.e.IncludesShadersStoreWGSL[dz.name] || (Ez.e.IncludesShadersStoreWGSL[dz.name] = dz.shader);
+     var Yq = gq(39617),
+       lq = gq(41973),
+       Oq = gq(41979),
+       mq = gq(41987),
+       xq = gq(41992),
+       Aq = gq(42e3),
+       cq = gq(42007),
+       uq = gq(42012),
+       Bq = gq(42018),
+       Wq = gq(42025),
+       Nq = gq(42029),
+       aq = gq(42034),
+       Vq = gq(42037),
+       dq = gq(42041),
+       jq = gq(42048);
+     const Hq = "lightVxFragmentDeclaration",
+ ... (31 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/325.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/325.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02)

#### 1. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/325.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/325.js#L4)

```diff
-   41431: (zz, uz, bz) => {
+   42018: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/325.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/325.js#L6)

```diff
-       b: () => lz
+       c: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/325.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/325.js#L8-L12)

```diff
-     var Ez = bz(39033);
-     bz(41422), bz(41426);
-     const nz = "defaultUboDeclaration",
-       iz = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "instancesDeclaration",
+       Oq = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L18` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/325.js#L17) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/325.js#L18)

```diff
-   41447: (zz, uz, bz) => {
+   42094: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L20` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/325.js#L19) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/325.js#L20)

```diff
-       c: () => lz
+       e: () => mq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L22-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/325.js#L21-L24) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/325.js#L22-L25)

```diff
-     var Ez = bz(39033);
-     const nz = "helperFunctions",
-       iz = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "instancesVertex",
+       Oq = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/325.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/325.js#L31)

```diff
-   41422: (zz, uz, bz) => {
+   41979: (qq, Eq, gq) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/325.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/325.js#L35-L38)

```diff
-     var Ez = bz(39033);
-     const nz = "sceneUboDeclaration",
-       iz = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "meshUboDeclaration",
+       Oq = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L44-L46` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/325.js#L43-L45) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/325.js#L44-L46)

```diff
-   41612: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       defaultPixelShaderWGSL: () => Yz
+   41973: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L48-L69` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/325.js#L47-L50) · [Before (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/325.js#L48-L69)

```diff
-     var Ez = bz(39033),
-       nz = bz(41422),
-       iz = bz(41426),
-       lz = bz(41431),
-       Mz = bz(41619),
-       tz = bz(41621),
-       Hz = bz(41623),
-       Oz = bz(41471),
-       pz = bz(41447),
-       dz = bz(41625),
-       Fz = bz(41628),
-       Zz = bz(41634);
-     const Rz = "clusteredLightingCompute",
-       Kz = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[Rz] || (Ez.e.IncludesShadersStoreWGSL[Rz] = Kz);
-     const wz = {
- ... (6 more removed lines; see GitHub link above)
+     var Yq = gq(39617);
+     const lq = "sceneUboDeclaration",
+       Oq = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L73-L112` → after: `L54-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L54-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/325.js#L54-L69) · [Before (L73-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/325.js#L73-L112)

```diff
-     };
-     var rz = bz(41640),
-       oz = bz(41645);
-     const Nz = "fresnelFunction",
-       vz = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[Nz] || (Ez.e.IncludesShadersStoreWGSL[Nz] = vz);
-     const xz = {
-       name: Nz,
-       shader: vz
-     };
-     var Jz = bz(41652),
-       Az = bz(41661),
-       Tz = bz(41670),
-       Lz = bz(41677),
-       Pz = bz(41686),
-       Gz = bz(41692),
- ... (24 more removed lines; see GitHub link above)
+     }
+   },
+   61834: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       greasedLineVertexShaderWGSL: () => Bq
+     });
+     var Yq = gq(39617),
+       lq = gq(42018),
+       Oq = gq(41973),
+       mq = gq(41979),
+       xq = gq(42094);
+     const Aq = "greasedLineVertexShader",
+       cq = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
+     Yq.d.ShadersStoreWGSL[Aq] || (Yq.d.ShadersStoreWGSL[Aq] = cq);
+     const uq = [lq.c, Oq.b, mq.b, xq.e];
+     for (const Wq of uq) Yq.d.IncludesShadersStoreWGSL[Wq.name] || (Yq.d.IncludesShadersStoreWGSL[Wq.name] = Wq.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/326.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/326.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea)

#### 1. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/326.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/326.js#L4)

```diff
-   41447: (zz, uz, bz) => {
+   41987: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/326.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/326.js#L6)

```diff
-       c: () => lz
+       b: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/326.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/326.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "helperFunctions",
-       iz = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     gq(41973), gq(41979);
+     const lq = "defaultUboDeclaration",
+       Oq = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/326.js#L18) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/326.js#L17)

```diff
-   60802: (zz, uz, bz) => {
+   42e3: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L19` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/326.js#L20) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/326.js#L19)

```diff
-       e: () => lz
+       b: () => mq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L21-L24` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/326.js#L22-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/326.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "pbrBRDFFunctions",
-       iz = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "helperFunctions",
+       Oq = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/326.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/326.js#L30)

```diff
-   41422: (zz, uz, bz) => {
+   41973: (qq, Eq, gq) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L34` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/326.js#L35) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/326.js#L34)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L37` → after: `L38-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L38-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/326.js#L38-L112) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/326.js#L37)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   42163: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       defaultPixelShaderWGSL: () => eq
+     });
+     var Yq = gq(39617),
+       lq = gq(41973),
+       Oq = gq(41979),
+       mq = gq(41987),
+       xq = gq(42172),
+       Aq = gq(42177),
+ ... (59 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/327.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/327.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/327.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/327.js#L4)

```diff
-   41553: (zz, uz, bz) => {
+   42e3: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/327.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/327.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "bakedVertexAnimation",
-       iz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "helperFunctions",
+       Oq = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/327.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/327.js#L17)

```diff
-   41458: (zz, uz, bz) => {
+   61596: (qq, Eq, gq) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/327.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/327.js#L19)

```diff
-       b: () => lz
+       e: () => mq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/327.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/327.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "bakedVertexAnimationDeclaration",
-       iz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "pbrBRDFFunctions",
+       Oq = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L30-L121` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/327.js#L30) · [Before (L30-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/327.js#L30-L121)

```diff
-   41454: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "bonesDeclaration",
-       iz = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41550: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => lz
- ... (76 more removed lines; see GitHub link above)
+   41973: (qq, Eq, gq) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L125-L190` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/327.js#L34) · [Before (L125-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/327.js#L125-L190)

```diff
-     var Ez = bz(39033);
-     const nz = "instancesVertex",
-       iz = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41540: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "morphTargetsVertex",
-       iz = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}\n#ifdef USE_VERTEX_PULLING\nvertexID=f32(vpVertexIndex)*uniforms.morphTargetTextureInfo.x;\n#else\nvertexID=f32 … [truncated]
- ... (50 more removed lines; see GitHub link above)
+     var Yq = gq(39617);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L193-L223` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/327.js#L37) · [Before (L193-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/327.js#L193-L223)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   60990: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       geometryVertexShaderWGSL: () => oz
-     });
-     var Ez = bz(39033),
-       nz = bz(41454),
-       iz = bz(41458),
-       lz = bz(41507),
-       Mz = bz(41509),
-       tz = bz(41460),
- ... (15 more removed lines; see GitHub link above)
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/328.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/328.js` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L4)

```diff
-   41553: (zz, uz, bz) => {
+   42106: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L6)

```diff
-       b: () => lz
+       e: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L8)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L11)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L17)

```diff
-   41458: (zz, uz, bz) => {
+   42012: (qq, Eq, gq) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L21)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L24)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L30)

```diff
-   41454: (zz, uz, bz) => {
+   42007: (qq, Eq, gq) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L32)

```diff
-       d: () => lz
+       e: () => mq
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L34)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L37)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L43)

```diff
-   41550: (zz, uz, bz) => {
+   42101: (qq, Eq, gq) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L45)

```diff
-       c: () => lz
+       b: () => mq
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L47)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L50)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L56)

```diff
-   41580: (zz, uz, bz) => {
+   42125: (qq, Eq, gq) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L58)

```diff
-       c: () => lz
+       b: () => mq
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L60-L63)

```diff
-     var Ez = bz(39033);
-     const nz = "clipPlaneVertex",
-       iz = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bumpVertex",
+       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L69)

```diff
-   41488: (zz, uz, bz) => {
+   42134: (qq, Eq, gq) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L71)

```diff
-       e: () => lz
+       d: () => mq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L73-L76)

```diff
-     var Ez = bz(39033);
-     const nz = "clipPlaneVertexDeclaration",
-       iz = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clipPlaneVertex",
+       Oq = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L82)

```diff
-   41584: (zz, uz, bz) => {
+   42041: (qq, Eq, gq) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L86-L89)

```diff
-     var Ez = bz(39033);
-     const nz = "fogVertex",
-       iz = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clipPlaneVertexDeclaration",
+       Oq = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L95)

```diff
-   41495: (zz, uz, bz) => {
+   61603: (qq, Eq, gq) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L99-L102` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L99-L102) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L99-L102)

```diff
-     var Ez = bz(39033);
-     const nz = "fogVertexDeclaration",
-       iz = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "harmonicsFunctions",
+       Oq = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L108)

```diff
-   41460: (zz, uz, bz) => {
+   42018: (qq, Eq, gq) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L112)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L115)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L121)

```diff
-   41543: (zz, uz, bz) => {
+   42094: (qq, Eq, gq) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L123)

```diff
-       b: () => lz
+       e: () => mq
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L125)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L128)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L134)

```diff
-   41501: (zz, uz, bz) => {
+   42086: (qq, Eq, gq) => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L136-L201` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L136) · [Before (L136-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L136-L201)

```diff
-       c: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "lightVxUboDeclaration",
-       iz = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41518: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => lz
-     });
-     var Ez = bz(39033);
- ... (50 more removed lines; see GitHub link above)
+       d: () => mq
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L203` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L138) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L203)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L206` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L141) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L206)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L212` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L147) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L212)

```diff
-   41509: (zz, uz, bz) => {
+   42067: (qq, Eq, gq) => {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L214` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L149) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L214)

```diff
-       c: () => lz
+       d: () => mq
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L216` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L151) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L216)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L219` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L154) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L219)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L225` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L160) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L225)

```diff
-   41533: (zz, uz, bz) => {
+   42083: (qq, Eq, gq) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L229` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L164) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L229)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L232` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L167) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L232)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L238` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L173) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L238)

```diff
-   41507: (zz, uz, bz) => {
+   42060: (qq, Eq, gq) => {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L240` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L175) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L240)

```diff
-       c: () => lz
+       d: () => mq
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L242` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L177) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L242)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L245-L271` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L180) · [Before (L245-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L245-L271)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41556: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "prePassVertex",
-       iz = "#ifdef PREPASS_DEPTH\nvertexOutputs.vViewPos=(scene.view*worldPos).rgb;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvertexOutputs.vNormViewDepth=((scene.view*worldPos).z-uniforms.cameraInfo.x)/(uniforms.cameraInfo.y-uniforms.cameraInfo.x);\n#endif\n#ifdef PREPASS_L … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
-     const lz = {
-       name: nz,
- ... (11 more removed lines; see GitHub link above)
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L277` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L186) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L277)

```diff
-   41476: (zz, uz, bz) => {
+   41973: (qq, Eq, gq) => {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L281-L375` → after: `L190-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L190-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/328.js#L190-L223) · [Before (L281-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/328.js#L281-L375)

```diff
-     var Ez = bz(39033);
-     const nz = "samplerVertexDeclaration",
-       iz = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nvarying v_VARYINGNAME_UV: vec2f;\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41571: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "samplerVertexImplementation",
-       iz = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nif (uniforms.v_INFONAME_==0.)\n{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\n#ifdef UV2\nelse if (uniforms.v_INFONAME_==1.)\n{vertexOutputs.v_VARYINGNAME_UV= (unifor … [truncated]
- ... (79 more removed lines; see GitHub link above)
+     var Yq = gq(39617);
+     const lq = "sceneUboDeclaration",
+       Oq = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   61783: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       geometryVertexShaderWGSL: () => yq
+     });
+     var Yq = gq(39617),
+       lq = gq(42007),
+       Oq = gq(42012),
+ ... (18 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/329.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/329.js` (57 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe)

#### 1. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L4)

```diff
-   41708: (zz, uz, bz) => {
+   42106: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "clipPlaneFragment",
-       iz = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bakedVertexAnimation",
+       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L17` → after: `L17-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L17-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L17-L30) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L17)

```diff
-   41700: (zz, uz, bz) => {
+   42012: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "bakedVertexAnimationDeclaration",
+       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   42007: (qq, Eq, gq) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L21-L24` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L34-L37) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "clipPlaneFragmentDeclaration",
-       iz = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bonesDeclaration",
+       Oq = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L30` → after: `L43-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L43-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L43-L69) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L30)

```diff
-   41634: (zz, uz, bz) => {
+   42101: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "bonesVertex",
+       Oq = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   42134: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+ ... (11 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L34-L37` → after: `L73-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L73-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L73-L89) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L34-L37)

```diff
-     var Ez = bz(39033);
-     const nz = "clusteredLightingFunctions",
-       iz = "struct ClusteredLight {vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\nvLightDirection: vec4f,\nvLightFalloff: vec4f,}\nfn getClusteredLight(lightDataTexture: texture_2d<f32>,index: u32)->ClusteredLight {return ClusteredLight(\ntextureLoad(lightData … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clipPlaneVertexDeclaration",
+       Oq = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   42137: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "fogVertex",
+       Oq = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L43` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L95) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L43)

```diff
-   41733: (zz, uz, bz) => {
+   42048: (qq, Eq, gq) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L47-L50` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L99-L102) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L47-L50)

```diff
-     var Ez = bz(39033);
-     const nz = "depthPrePass",
-       iz = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "fogVertexDeclaration",
+       Oq = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L56` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L108) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L56)

```diff
-   41751: (zz, uz, bz) => {
+   42018: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L60-L63` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L112-L115) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L60-L63)

```diff
-     var Ez = bz(39033);
-     const nz = "fogFragment",
-       iz = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "instancesDeclaration",
+       Oq = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L69` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L121) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L69)

```diff
-   41706: (zz, uz, bz) => {
+   42094: (qq, Eq, gq) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L71` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L123) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L71)

```diff
-       b: () => lz
+       e: () => mq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L73-L76` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L125-L128) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L73-L76)

```diff
-     var Ez = bz(39033);
-     const nz = "fogFragmentDeclaration",
-       iz = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "instancesVertex",
+       Oq = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L82` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L134) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L82)

```diff
-   41661: (zz, uz, bz) => {
+   42052: (qq, Eq, gq) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L84` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L136) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L84)

```diff
-       b: () => lz
+       e: () => mq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L86-L89` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L138-L141) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L86-L89)

```diff
-     var Ez = bz(39033);
-     const nz = "imageProcessingDeclaration",
-       iz = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "lightVxUboDeclaration",
+       Oq = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L95` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L147) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L95)

```diff
-   41670: (zz, uz, bz) => {
+   42074: (qq, Eq, gq) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L99-L102` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L151-L154) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L99-L102)

```diff
-     var Ez = bz(39033);
-     const nz = "imageProcessingFunctions",
-       iz = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "logDepthDeclaration",
+       Oq = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L108` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L160) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L108)

```diff
-   41625: (zz, uz, bz) => {
+   42157: (qq, Eq, gq) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L112-L115` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L164-L167) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L112-L115)

```diff
-     var Ez = bz(39033);
-     const nz = "lightUboDeclaration",
-       iz = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "logDepthVertex",
+       Oq = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L121` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L173) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L121)

```diff
-   41518: (zz, uz, bz) => {
+   42029: (qq, Eq, gq) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L123` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L175) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L123)

```diff
-       e: () => lz
+       b: () => mq
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L125-L128` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L177-L180) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L125-L128)

```diff
-     var Ez = bz(39033);
-     const nz = "logDepthDeclaration",
-       iz = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "mainUVVaryingDeclaration",
+       Oq = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L134` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L186) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L134)

```diff
-   41749: (zz, uz, bz) => {
+   41979: (qq, Eq, gq) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L136` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L188) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L136)

```diff
-       c: () => lz
+       b: () => mq
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L138-L141` → after: `L190-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L190-L193) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L138-L141)

```diff
-     var Ez = bz(39033);
-     const nz = "logDepthFragment",
-       iz = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "meshUboDeclaration",
+       Oq = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L147` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L199) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L147)

```diff
-   41628: (zz, uz, bz) => {
+   42086: (qq, Eq, gq) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L149` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L201) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L149)

```diff
-       c: () => lz
+       d: () => mq
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L151-L154` → after: `L203-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L203-L206) · [Before (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L151-L154)

```diff
-     var Ez = bz(39033);
-     const nz = "ltcHelperFunctions",
-       iz = "fn LTCUv(N: vec3f,V: vec3f,roughness: f32)->vec2f {var LUTSIZE: f32=64.0;var LUTSCALE: f32=( LUTSIZE-1.0 )/LUTSIZE;var LUTBIAS:f32=0.5/LUTSIZE;var dotNV:f32=saturate( dot( N,V ) );var uv:vec2f=vec2f( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}\nfn … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "morphTargetsVertex",
+       Oq = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}\n#ifdef USE_VERTEX_PULLING\nvertexID=f32(vpVertexIndex)*uniforms.morphTargetTextureInfo.x;\n#else\nvertexID=f32 … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L160` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L212) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L160)

```diff
-   41471: (zz, uz, bz) => {
+   42067: (qq, Eq, gq) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L162` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L214) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L162)

```diff
-       c: () => lz
+       d: () => mq
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L164-L167` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L216-L219) · [Before (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L164-L167)

```diff
-     var Ez = bz(39033);
-     const nz = "mainUVVaryingDeclaration",
-       iz = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "morphTargetsVertexDeclaration",
+       Oq = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute position{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute normal{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute tangent{X} : vec3<f32>;\n#endif\n# … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L173` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L225) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L173)

```diff
-   41753: (zz, uz, bz) => {
+   42083: (qq, Eq, gq) => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L177-L180` → after: `L229-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L229-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L229-L232) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L177-L180)

```diff
-     var Ez = bz(39033);
-     const nz = "meshBlendTagFragmentOutput",
-       iz = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "morphTargetsVertexGlobal",
+       Oq = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nvar vertexID : f32;\n#endif\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L186` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L238) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L186)

```diff
-   41426: (zz, uz, bz) => {
+   42060: (qq, Eq, gq) => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L188` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L240) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L188)

```diff
-       c: () => lz
+       d: () => mq
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L190-L193` → after: `L242-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L242-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L242-L245) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L190-L193)

```diff
-     var Ez = bz(39033);
-     const nz = "meshUboDeclaration",
-       iz = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "morphTargetsVertexGlobalDeclaration",
+       Oq = "#ifdef MORPHTARGETS\nuniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;\n#ifdef MORPHTARGETS_TEXTURE \nuniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f3 … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L199` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L251) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L199)

```diff
-   41619: (zz, uz, bz) => {
+   42110: (qq, Eq, gq) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L201` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L253) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L201)

```diff
-       d: () => lz
+       e: () => mq
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L203-L206` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L255-L258) · [Before (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L203-L206)

```diff
-     var Ez = bz(39033);
-     const nz = "objectIdFunctions",
-       iz = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "prePassVertex",
+       Oq = "#ifdef PREPASS_DEPTH\nvertexOutputs.vViewPos=(scene.view*worldPos).rgb;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvertexOutputs.vNormViewDepth=((scene.view*worldPos).z-uniforms.cameraInfo.x)/(uniforms.cameraInfo.y-uniforms.cameraInfo.x);\n#endif\n#ifdef PREPASS_L … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L212` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L264) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L212)

```diff
-   41623: (zz, uz, bz) => {
+   42025: (qq, Eq, gq) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L216-L219` → after: `L268-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L268-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L268-L271) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L216-L219)

```diff
-     var Ez = bz(39033);
-     const nz = "oitDeclaration",
-       iz = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#define MAX_DEPTH 99999.0\nvar oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "prePassVertexDeclaration",
+       Oq = "#ifdef PREPASS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELO … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L225` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L277) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L225)

```diff
-   41761: (zz, uz, bz) => {
+   42034: (qq, Eq, gq) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L229-L232` → after: `L281-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L281-L284) · [Before (L229-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L229-L232)

```diff
-     var Ez = bz(39033);
-     const nz = "oitFragment",
-       iz = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nvar fragDepth: f32=fragmentInputs.position.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nvar halfFloat: u32=pack2x16float( vec2f(fragDepth));var full: vec2f=unpack2x16float(halfFloat);fragDepth=full.x;\n#endif\nvar fragCoord … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "samplerVertexDeclaration",
+       Oq = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nvarying v_VARYINGNAME_UV: vec2f;\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L238` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L290) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L238)

```diff
-   41621: (zz, uz, bz) => {
+   42121: (qq, Eq, gq) => {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L240` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L292) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L240)

```diff
-       b: () => lz
+       e: () => mq
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L242-L246` → after: `L294-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L294-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L294-L297) · [Before (L242-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L242-L246)

```diff
-     var Ez = bz(39033);
-     bz(41619);
-     const nz = "prePassDeclaration",
-       iz = "#ifdef PREPASS\n#ifndef PREPASS_CUSTOM_VARYINGS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if (defined(PREPASS … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "samplerVertexImplementation",
+       Oq = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nif (uniforms.v_INFONAME_==0.)\n{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\n#ifdef UV2\nelse if (uniforms.v_INFONAME_==1.)\n{vertexOutputs.v_VARYINGNAME_UV= (unifor … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L252` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L303) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L252)

```diff
-   41652: (zz, uz, bz) => {
+   42146: (qq, Eq, gq) => {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L254` → after: `L305-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L305-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L305-L318) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L254)

```diff
-       e: () => lz
+       c: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "shadowsVertex",
+       Oq = "#ifdef SHADOWS\n#if defined(SHADOWCSM{X})\n#ifdef SCENE_UBO\nvertexOutputs.vPositionFromCamera{X}=scene.view*worldPos;\n#else\nvertexOutputs.vPositionFromCamera{X}=uniforms.view*worldPos;\n#endif\n#if SHADOWCSMNUM_CASCADES{X}>0\nvertexOutputs.vPositionFromLight{X}_0=u … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41992: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L256-L259` → after: `L320-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L320-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L320-L323) · [Before (L256-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L256-L259)

```diff
-     var Ez = bz(39033);
-     const nz = "reflectionFunction",
-       iz = "fn computeFixedEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,direction: vec3f)->vec3f\n{var lon: f32=atan2(direction.z,direction.x);var lat: f32=acos(direction.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;v … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "uvAttributeDeclaration",
+       Oq = "#if defined(UV{X}) && !defined(USE_VERTEX_PULLING)\nattribute uv{X}: vec2f;\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L265` → after: `L329-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L329-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L329-L342) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L265)

```diff
-   41645: (zz, uz, bz) => {
+   42119: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "uvVariableDeclaration",
+       Oq = "#ifdef MAINUV{X}\n#if !defined(UV{X})\nvar uv{X}: vec2f=vec2f(0.,0.);\n#elif defined(USE_VERTEX_PULLING)\nvar uv{X}: vec2f=uv{X}Updated;\n#else\nvar uv{X}: vec2f=vertexInputs.uv{X};\n#endif\nvertexOutputs.vMainUV{X}=uv{X};\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   42153: (qq, Eq, gq) => {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L269-L272` → after: `L346-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L346-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L346-L349) · [Before (L269-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L269-L272)

```diff
-     var Ez = bz(39033);
-     const nz = "samplerFragmentDeclaration",
-       iz = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "vertexColorMixing",
+       Oq = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertex … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L278` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L355) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L278)

```diff
-   41640: (zz, uz, bz) => {
+   42077: (qq, Eq, gq) => {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L280` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L357) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L280)

```diff
-       e: () => lz
+       c: () => mq
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L282-L285` → after: `L359-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L359-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L359-L362) · [Before (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L282-L285)

```diff
-     var Ez = bz(39033);
-     const nz = "shadowsFragmentFunctions",
-       iz = "#ifdef SHADOWS\n#ifndef SHADOWFLOAT\nfn unpack(color: vec4f)->f32\n{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}\n#endif\nfn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f3 … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "vertexPullingDeclaration",
+       Oq = "#ifdef USE_VERTEX_PULLING\n#ifdef VERTEX_PULLING_USE_INDEX_BUFFER\nvar<storage,read> indices : array<u32>;\n#endif\nvar<storage,read> position : array<f32>;uniform vp_position_info : vec4f;\n#ifdef NORMAL\nvar<storage,read> normal : array<f32>;uniform vp_normal_info : … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L291` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L368) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L291)

```diff
-   41677: (zz, uz, bz) => {
+   42080: (qq, Eq, gq) => {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L295-L298` → after: `L372-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L372-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/329.js#L372-L375) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/329.js#L295-L298)

```diff
-     var Ez = bz(39033);
-     const nz = "textureRepetitionFunctions",
-       iz = "#if TEXTURE_REPETITION_MODE>0\nfn _texRepHash4(p: vec2f)->vec4f {return fract(sin(vec4f(\n1.0+dot(p,vec2f(37.0,17.0)),\n2.0+dot(p,vec2f(11.0,47.0)),\n3.0+dot(p,vec2f(41.0,29.0)),\n4.0+dot(p,vec2f(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nfn _te … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "vertexPullingVertex",
+       Oq = "#ifdef USE_VERTEX_PULLING\nlet vpVertexIndex: u32=vp_readVertexIndex(vertexInputs.vertexIndex);positionUpdated=vp_readPosition(uniforms.vp_position_info,vpVertexIndex);\n#ifdef NORMAL\nnormalUpdated=vp_readNormal(uniforms.vp_normal_info,vpVertexIndex);\n#endif\n#ifdef … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/330.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/330.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L4)

```diff
-   41708: (zz, uz, bz) => {
+   42267: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L6)

```diff
-       e: () => lz
+       d: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L8)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L11)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L17)

```diff
-   41700: (zz, uz, bz) => {
+   42253: (qq, Eq, gq) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L19)

```diff
-       e: () => lz
+       c: () => mq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L21)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L24)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L30)

```diff
-   41751: (zz, uz, bz) => {
+   42204: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L32)

```diff
-       c: () => lz
+       b: () => mq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L34-L37)

```diff
-     var Ez = bz(39033);
-     const nz = "fogFragment",
-       iz = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clusteredLightingFunctions",
+       Oq = "struct ClusteredLight {vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\nvLightDirection: vec4f,\nvLightFalloff: vec4f,}\nfn getClusteredLight(lightDataTexture: texture_2d<f32>,index: u32)->ClusteredLight {return ClusteredLight(\ntextureLoad(lightData … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L43` → after: `L43-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L43-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L43-L56) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L43)

```diff
-   41706: (zz, uz, bz) => {
+   42275: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "depthPrePass",
+       Oq = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   42291: (qq, Eq, gq) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L47-L50` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L60-L63) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L47-L50)

```diff
-     var Ez = bz(39033);
-     const nz = "fogFragmentDeclaration",
-       iz = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "fogFragment",
+       Oq = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L56` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L69) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L56)

```diff
-   41447: (zz, uz, bz) => {
+   42258: (qq, Eq, gq) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L60-L63` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L73-L76) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L60-L63)

```diff
-     var Ez = bz(39033);
-     const nz = "helperFunctions",
-       iz = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "fogFragmentDeclaration",
+       Oq = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L69` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L82) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L69)

```diff
-   41661: (zz, uz, bz) => {
+   42228: (qq, Eq, gq) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L71` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L84) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L71)

```diff
-       b: () => lz
+       c: () => mq
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L73` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L86) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L73)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L76` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L89) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L76)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L82` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L95) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L82)

```diff
-   41670: (zz, uz, bz) => {
+   42231: (qq, Eq, gq) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L84` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L97) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L84)

```diff
-       d: () => lz
+       b: () => mq
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L86` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L99) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L86)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L89` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L102) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L89)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L95` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L108) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L95)

```diff
-   41518: (zz, uz, bz) => {
+   42189: (qq, Eq, gq) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L97` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L110) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L97)

```diff
-       e: () => lz
+       b: () => mq
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L99` → after: `L112-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L112-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L112-L125) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L99)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
+     const lq = "lightUboDeclaration",
+       Oq = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   42074: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(39617);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L102` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L128) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L102)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L108` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L134) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L108)

```diff
-   41749: (zz, uz, bz) => {
+   42289: (qq, Eq, gq) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L110` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L136) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L110)

```diff
-       c: () => lz
+       b: () => mq
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L112` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L138) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L112)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L115` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L141) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L115)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L121` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L147) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L121)

```diff
-   41753: (zz, uz, bz) => {
+   42196: (qq, Eq, gq) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L123` → after: `L149-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L149-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L149-L175) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L123)

```diff
-       e: () => lz
+       b: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "ltcHelperFunctions",
+       Oq = "fn LTCUv(N: vec3f,V: vec3f,roughness: f32)->vec2f {var LUTSIZE: f32=64.0;var LUTSCALE: f32=( LUTSIZE-1.0 )/LUTSIZE;var LUTBIAS:f32=0.5/LUTSIZE;var dotNV:f32=saturate( dot( N,V ) );var uv:vec2f=vec2f( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}\nfn … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   42029: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq
+     });
+     var Yq = gq(39617);
+ ... (11 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L125` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L177) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L125)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L128` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L180) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L128)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L134` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L186) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L134)

```diff
-   41619: (zz, uz, bz) => {
+   41979: (qq, Eq, gq) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L136` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L188) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L136)

```diff
-       d: () => lz
+       b: () => mq
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L138` → after: `L190-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L190-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L190-L203) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L138)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
+     const lq = "meshUboDeclaration",
+       Oq = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   42172: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => mq
+     });
+     var Yq = gq(39617);
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L141` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L206) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L141)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L147` → after: `L212-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L212-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L212-L238) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L147)

```diff
-   41621: (zz, uz, bz) => {
+   42185: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "oitDeclaration",
+       Oq = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#define MAX_DEPTH 99999.0\nvar oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   42302: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => mq
+ ... (11 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L151-L152` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L242-L243) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L151-L152)

```diff
-     var Ez = bz(39033);
-     bz(41619);
+     var Yq = gq(39617);
+     gq(42172);
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L155-L189` → after: `L246-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L246-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/330.js#L246-L298) · [Before (L155-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/330.js#L155-L189)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   60367: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       particlesPixelShaderWGSL: () => oz
-     });
-     var Ez = bz(39033),
-       nz = bz(41619),
-       iz = bz(41621),
-       lz = bz(41700),
-       Mz = bz(41661),
-       tz = bz(41518),
- ... (19 more removed lines; see GitHub link above)
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   42222: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "reflectionFunction",
+       Oq = "fn computeFixedEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,direction: vec3f)->vec3f\n{var lon: f32=atan2(direction.z,direction.x);var lat: f32=acos(direction.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;v … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+ ... (37 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/331.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/331.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824)

#### 1. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L4)

```diff
-   41708: (zz, uz, bz) => {
+   42267: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L6)

```diff
-       e: () => lz
+       d: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L8)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L11)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L17)

```diff
-   41700: (zz, uz, bz) => {
+   42253: (qq, Eq, gq) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L19)

```diff
-       e: () => lz
+       c: () => mq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L21)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L24)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L30)

```diff
-   41751: (zz, uz, bz) => {
+   42291: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L32)

```diff
-       c: () => lz
+       b: () => mq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L34)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L37)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L43)

```diff
-   41706: (zz, uz, bz) => {
+   42258: (qq, Eq, gq) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L45)

```diff
-       b: () => lz
+       c: () => mq
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L47)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L50)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L56)

```diff
-   41447: (zz, uz, bz) => {
+   42e3: (qq, Eq, gq) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L58)

```diff
-       c: () => lz
+       b: () => mq
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L60)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L63)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L69)

```diff
-   41518: (zz, uz, bz) => {
+   42228: (qq, Eq, gq) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L71)

```diff
-       e: () => lz
+       c: () => mq
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L73-L76)

```diff
-     var Ez = bz(39033);
-     const nz = "logDepthDeclaration",
-       iz = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "imageProcessingDeclaration",
+       Oq = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L82)

```diff
-   41749: (zz, uz, bz) => {
+   42231: (qq, Eq, gq) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L84)

```diff
-       c: () => lz
+       b: () => mq
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L86-L89)

```diff
-     var Ez = bz(39033);
-     const nz = "logDepthFragment",
-       iz = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "imageProcessingFunctions",
+       Oq = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L95` → after: `L95-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L95-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L95-L161) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L95)

```diff
-   60389: (zz, uz, bz) => {
+   42074: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "logDepthDeclaration",
+       Oq = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   42289: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq
+ ... (51 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L97` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L163) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L97)

```diff
-       skyPixelShaderWGSL: () => wz
+       particlesPixelShaderWGSL: () => yq
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L99-L109` → after: `L165-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L165-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L165-L180) · [Before (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L99-L109)

```diff
-     var Ez = bz(39033),
-       nz = bz(41700),
-       iz = bz(41518),
-       lz = bz(41706),
-       Mz = bz(41447),
-       tz = bz(41708),
-       Hz = bz(41749),
-       Oz = bz(41751);
-     const pz = "imageProcessingCompatibility",
-       dz = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[pz] || (Ez.e.IncludesShadersStoreWGSL[pz] = dz);
+     var Yq = gq(39617),
+       lq = gq(42172),
+       Oq = gq(42177),
+       mq = gq(42253),
+       xq = gq(42228),
+       Aq = gq(42074),
+       cq = gq(42e3),
+       uq = gq(42231),
+       Bq = gq(42258),
+       Wq = gq(42267),
+       Nq = gq(42289),
+       aq = gq(42291),
+       Vq = gq(42300);
+     const dq = "geometryRenderingFragment",
+       jq = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nlet geometryCoverage=select(0.0,1.0,geometryColor.a>0.4);var fragData: array<vec4f,SCENE_MRT_COUNT>;\n#ifdef PREPASS_COLOR\nfragData[PREPASS_COLOR_INDEX]=geometryColor;\n#endif\n#ifdef PREPASS_POSITION\nfragData[PREPASS_POSITION_ … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[dq] || (Yq.d.IncludesShadersStoreWGSL[dq] = jq);
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L114-L118` → after: `L185-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L185-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/331.js#L185-L189) · [Before (L114-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/331.js#L114-L118)

```diff
-       Zz = "skyPixelShader",
-       Rz = "varying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform cameraPosition: vec3f;uniform cameraOffset: vec3f;uniform up: vec3f;uniform luminance: f32;uniform turbidity: f32;uniform rayleigh: f32;unif … [truncated]
-     Ez.e.ShadersStoreWGSL[Zz] || (Ez.e.ShadersStoreWGSL[Zz] = Rz);
-     const Kz = [nz.e, iz.e, lz.b, Mz.c, tz.e, Hz.c, Oz.c, Fz];
-     for (const Xz of Kz) Ez.e.IncludesShadersStoreWGSL[Xz.name] || (Ez.e.IncludesShadersStoreWGSL[Xz.name] = Xz.shader);
+       oq = "particlesPixelShader",
+       Pq = "varying vUV: vec2f;varying vColor: vec4f;uniform textureMask: vec4f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;\n#ifdef PREPASS\nuniform geometryZeroAlphaDiscard: f32;\n#ifdef PREPASS_POSITION\nvarying vGeometryPositionW: vec3f;\n#endif\n#i … [truncated]
+     Yq.d.ShadersStoreWGSL[oq] || (Yq.d.ShadersStoreWGSL[oq] = Pq);
+     const Qq = [lq.e, Oq.b, mq.c, xq.c, Aq.d, cq.b, uq.b, Bq.c, Wq.d, Nq.b, aq.b, Vq.d, Hq];
+     for (const tq of Qq) Yq.d.IncludesShadersStoreWGSL[tq.name] || (Yq.d.IncludesShadersStoreWGSL[tq.name] = tq.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/332.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/332.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782)

#### 1. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/332.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/332.js#L4)

```diff
-   41447: (zz, uz, bz) => {
+   42267: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/332.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/332.js#L6)

```diff
-       c: () => lz
+       d: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/332.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/332.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "helperFunctions",
-       iz = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clipPlaneFragment",
+       Oq = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L17` → after: `L17-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L17-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/332.js#L17-L95) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/332.js#L17)

```diff
-   60527: (zz, uz, bz) => {
+   42253: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "clipPlaneFragmentDeclaration",
+       Oq = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   42291: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq
+ ... (63 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L19` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/332.js#L97) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/332.js#L19)

```diff
-       rgbdDecodePixelShaderWGSL: () => tz
+       skyPixelShaderWGSL: () => jq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L21-L27` → after: `L99-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/332.js#L99-L118) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/332.js#L21-L27)

```diff
-     var Ez = bz(39033),
-       nz = bz(41447);
-     const iz = "rgbdDecodePixelShader",
-       lz = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
-     Ez.e.ShadersStoreWGSL[iz] || (Ez.e.ShadersStoreWGSL[iz] = lz);
-     const Mz = [nz.c];
-     for (const Hz of Mz) Ez.e.IncludesShadersStoreWGSL[Hz.name] || (Ez.e.IncludesShadersStoreWGSL[Hz.name] = Hz.shader);
+     var Yq = gq(39617),
+       lq = gq(42253),
+       Oq = gq(42074),
+       mq = gq(42258),
+       xq = gq(42e3),
+       Aq = gq(42267),
+       cq = gq(42289),
+       uq = gq(42291);
+     const Bq = "imageProcessingCompatibility",
+       Wq = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
+     Yq.d.IncludesShadersStoreWGSL[Bq] || (Yq.d.IncludesShadersStoreWGSL[Bq] = Wq);
+     const Nq = {
+         name: Bq,
+         shader: Wq
+       },
+       aq = "skyPixelShader",
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/333.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/333.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/333.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/333.js#L4)

```diff
-   41447: (zz, uz, bz) => {
+   42e3: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/333.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/333.js#L6)

```diff
-       c: () => lz
+       b: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/333.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/333.js#L8)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/333.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/333.js#L11)

```diff
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/333.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/333.js#L17)

```diff
-   60551: (zz, uz, bz) => {
+   61357: (qq, Eq, gq) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/333.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/333.js#L19)

```diff
-       rgbdEncodePixelShaderWGSL: () => tz
+       rgbdDecodePixelShaderWGSL: () => Aq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L21-L27` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/333.js#L21-L27) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/333.js#L21-L27)

```diff
-     var Ez = bz(39033),
-       nz = bz(41447);
-     const iz = "rgbdEncodePixelShader",
-       lz = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
-     Ez.e.ShadersStoreWGSL[iz] || (Ez.e.ShadersStoreWGSL[iz] = lz);
-     const Mz = [nz.c];
-     for (const Hz of Mz) Ez.e.IncludesShadersStoreWGSL[Hz.name] || (Ez.e.IncludesShadersStoreWGSL[Hz.name] = Hz.shader);
+     var Yq = gq(39617),
+       lq = gq(42e3);
+     const Oq = "rgbdDecodePixelShader",
+       mq = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
+     Yq.d.ShadersStoreWGSL[Oq] || (Yq.d.ShadersStoreWGSL[Oq] = mq);
+     const xq = [lq.b];
+     for (const cq of xq) Yq.d.IncludesShadersStoreWGSL[cq.name] || (Yq.d.IncludesShadersStoreWGSL[cq.name] = cq.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/334.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/334.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae)

#### 1. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/334.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/334.js#L4)

```diff
-   41553: (zz, uz, bz) => {
+   42e3: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/334.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/334.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "bakedVertexAnimation",
-       iz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "helperFunctions",
+       Oq = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/334.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/334.js#L17-L19)

```diff
-   41458: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz
+   61384: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       rgbdEncodePixelShaderWGSL: () => Aq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L21-L167` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/334.js#L21-L27) · [Before (L21-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/334.js#L21-L167)

```diff
-     var Ez = bz(39033);
-     const nz = "bakedVertexAnimationDeclaration",
-       iz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41454: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "bonesDeclaration",
-       iz = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
- ... (131 more removed lines; see GitHub link above)
+     var Yq = gq(39617),
+       lq = gq(42e3);
+     const Oq = "rgbdEncodePixelShader",
+       mq = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
+     Yq.d.ShadersStoreWGSL[Oq] || (Yq.d.ShadersStoreWGSL[Oq] = mq);
+     const xq = [lq.b];
+     for (const cq of xq) Yq.d.IncludesShadersStoreWGSL[cq.name] || (Yq.d.IncludesShadersStoreWGSL[cq.name] = cq.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/335.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/335.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/335.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/335.js#L4)

```diff
-   41575: (zz, uz, bz) => {
+   42106: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/335.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/335.js#L6)

```diff
-       d: () => lz
+       e: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/335.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/335.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "bumpVertex",
-       iz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bakedVertexAnimation",
+       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/335.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/335.js#L17)

```diff
-   41483: (zz, uz, bz) => {
+   42012: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/335.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/335.js#L19)

```diff
-       d: () => lz
+       b: () => mq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/335.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/335.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "bumpVertexDeclaration",
-       iz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bakedVertexAnimationDeclaration",
+       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/335.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/335.js#L30)

```diff
-   60806: (zz, uz, bz) => {
+   42007: (qq, Eq, gq) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/335.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/335.js#L34-L37)

```diff
-     var Ez = bz(39033);
-     const nz = "harmonicsFunctions",
-       iz = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bonesDeclaration",
+       Oq = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
+     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
```
