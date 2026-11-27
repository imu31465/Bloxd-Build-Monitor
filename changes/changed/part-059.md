# Changed — Bundle Modifications Report (Part 059 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `59 / 126` (**372** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 058](part-058.md) · [Part 060 →](part-060.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/637.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/637.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544)

#### 13. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L152-L155` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L73-L76) · [Before (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L152-L155)

```diff
-     var yR = GR(41387);
-     const tR = "openpbrTransmissionLayerData",
-       uR = "float transmission_weight=vTransmissionWeight;vec3 transmission_color=vTransmissionColor.rgb;float transmission_depth=vTransmissionDepth;vec3 transmission_scatter=vTransmissionScatter.rgb;float transmission_scatter_anisotropy=clamp(vTransmissionScatterAnisotropy,-0.99 … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "mainUVVaryingDeclaration",
+       ar = "#ifdef MAINUV{X}\nvarying vec2 vMainUV{X};\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 14. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L161` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L82) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L161)

```diff
-   64410: (RR, JR, GR) => {
+   54408: (rr, Sr, Qr) => {
```

#### 15. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L163` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L84) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L163)

```diff
-       b: () => ZR
+       d: () => jr
```

#### 16. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L165-L168` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L86-L89) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L165-L168)

```diff
-     var yR = GR(41387);
-     const tR = "pbrBRDFFunctions",
-       uR = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "meshUboDeclaration",
+       ar = "#ifdef WEBGL2\nuniform mat4 world;uniform float visibility;\n#else\nlayout(std140,column_major) uniform;uniform Mesh\n{mat4 world;float visibility;};\n#endif\n#define WORLD_UBO\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 17. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L174` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L95) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L174)

```diff
-   64430: (RR, JR, GR) => {
+   54593: (rr, Sr, Qr) => {
```

#### 18. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L178-L181` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L99-L102) · [Before (L178-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L178-L181)

```diff
-     var yR = GR(41387);
-     const tR = "pbrFragmentReflectionDeclaration",
-       uR = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "oitDeclaration",
+       ar = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 19. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L187` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L108) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L187)

```diff
-   64485: (RR, JR, GR) => {
+   54711: (rr, Sr, Qr) => {
```

#### 20. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L189` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L110) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L189)

```diff
-       c: () => ZR
+       d: () => jr
```

#### 21. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L191-L194` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L112-L115) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L191-L194)

```diff
-     var yR = GR(41387);
-     const tR = "pbrIBLFunctions",
-       uR = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "oitFragment",
+       ar = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nfloat fragDepth=gl_FragCoord.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nuint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;\n#endif\nivec2 fragCoord=ivec2(gl_FragCoord.xy);ve … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 22. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L200` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L121) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L200)

```diff
-   54134: (RR, JR, GR) => {
+   54622: (rr, Sr, Qr) => {
```

#### 23. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L204` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L125) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L204)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 24. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L207` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L128) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L207)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 25. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L213` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L134) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L213)

```diff
-   54132: (RR, JR, GR) => {
+   54614: (rr, Sr, Qr) => {
```

#### 26. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L215` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L136) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L215)

```diff
-       c: () => ZR
+       e: () => jr
```

#### 27. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L217` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L138) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L217)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 28. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L220` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L141) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L220)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 29. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L226` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L147) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L226)

```diff
-   64632: (RR, JR, GR) => {
+   54404: (rr, Sr, Qr) => {
```

#### 30. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L228` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L149) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L228)

```diff
-       e: () => ZR
+       c: () => jr
```

#### 31. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L230-L233` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L151-L154) · [Before (L230-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L230-L233)

```diff
-     var yR = GR(41387);
-     const tR = "sceneFragmentDeclaration",
-       uR = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "sceneUboDeclaration",
+       ar = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 32. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L239` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L160) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L239)

```diff
-   53911: (RR, JR, GR) => {
+   54612: (rr, Sr, Qr) => {
```

#### 33. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L241` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L162) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L241)

```diff
-       c: () => ZR
+       b: () => jr
```

#### 34. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L243-L246` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L164-L167) · [Before (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L243-L246)

```diff
-     var yR = GR(41387);
-     const tR = "sceneUboDeclaration",
-       uR = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "shadowsFragmentFunctions",
+       ar = "#ifdef SHADOWS\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\n#ifndef SHADOWFLOAT\nfloat unpack(vec4 color)\n{const vec4 bit_shift=vec4(1.0/(255 … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 35. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L252-L254` → after: `L173-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L173-L175) · [Before (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L252-L254)

```diff
-   64727: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       geometryPixelShader: () => vR
+   54641: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => jr
```

#### 36. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L256-L287` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L177-L180) · [Before (L256-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L256-L287)

```diff
-     var yR = GR(41387),
-       tR = GR(54084),
-       uR = GR(54173);
-     const ZR = "mrtFragmentDeclaration",
-       qR = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
-     yR.b.IncludesShadersStore[ZR] || (yR.b.IncludesShadersStore[ZR] = qR);
-     const iR = {
-       name: ZR,
-       shader: qR
-     };
-     var fR = GR(54161),
-       VR = GR(54132),
-       KR = GR(54169),
-       wR = GR(53933),
-       rR = GR(64430),
-       eR = GR(64632),
- ... (16 more removed lines; see GitHub link above)
+     var Zr = Qr(41743);
+     const Wr = "textureRepetitionFunctions",
+       ar = "#if TEXTURE_REPETITION_MODE>0\nvec4 _texRepHash4(vec2 p) {return fract(sin(vec4(\n1.0+dot(p,vec2(37.0,17.0)),\n2.0+dot(p,vec2(11.0,47.0)),\n3.0+dot(p,vec2(41.0,29.0)),\n4.0+dot(p,vec2(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nvec4 _texRepSample … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/638.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/638.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074)

#### 1. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L4)

```diff
-   54027: (RR, JR, GR) => {
+   54670: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "bakedVertexAnimation",
-       uR = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bumpFragment",
+       ar = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 3. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L17)

```diff
-   53941: (RR, JR, GR) => {
+   54647: (rr, Sr, Qr) => {
```

#### 4. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L19)

```diff
-       b: () => ZR
+       e: () => jr
```

#### 5. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L21-L24)

```diff
-     var yR = GR(41387);
-     const tR = "bakedVertexAnimationDeclaration",
-       uR = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     Qr(54614);
+     const Wr = "bumpFragmentFunctions",
+       ar = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 6. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L30)

```diff
-   53939: (RR, JR, GR) => {
+   54643: (rr, Sr, Qr) => {
```

#### 7. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L34-L37)

```diff
-     var yR = GR(41387);
-     const tR = "bonesDeclaration",
-       uR = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bumpFragmentMainFunctions",
+       ar = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 8. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L43)

```diff
-   54022: (RR, JR, GR) => {
+   54664: (rr, Sr, Qr) => {
```

#### 9. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L45` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L46) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L45)

```diff
-       e: () => ZR
+       d: () => jr
```

#### 10. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L47-L50)

```diff
-     var yR = GR(41387);
-     const tR = "bonesVertex",
-       uR = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "clipPlaneFragment",
+       ar = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 11. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L56` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L57) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L56)

```diff
-   54050: (RR, JR, GR) => {
+   54649: (rr, Sr, Qr) => {
```

#### 12. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L60-L63` → after: `L61-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L61-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L61-L103) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L60-L63)

```diff
-     var yR = GR(41387);
-     const tR = "bumpVertex",
-       uR = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "clipPlaneFragmentDeclaration",
+       ar = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54421: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "helperFunctions",
+       ar = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+ ... (27 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L69` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L109) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L69)

```diff
-   54055: (RR, JR, GR) => {
+   65072: (rr, Sr, Qr) => {
```

#### 14. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L73-L76` → after: `L113-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L113-L116) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L73-L76)

```diff
-     var yR = GR(41387);
-     const tR = "clipPlaneVertex",
-       uR = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "openpbrGeometryInfo",
+       ar = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 15. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L82` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L122) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L82)

```diff
-   53978: (RR, JR, GR) => {
+   65077: (rr, Sr, Qr) => {
```

#### 16. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L86-L89` → after: `L126-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L126-L129) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L86-L89)

```diff
-     var yR = GR(41387);
-     const tR = "clipPlaneVertexDeclaration",
-       uR = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "openpbrIblFunctions",
+       ar = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 17. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L95` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L135) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L95)

```diff
-   64415: (RR, JR, GR) => {
+   65091: (rr, Sr, Qr) => {
```

#### 18. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L97` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L137) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L97)

```diff
-       c: () => ZR
+       b: () => jr
```

#### 19. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L99-L102` → after: `L139-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L139-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L139-L142) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L99-L102)

```diff
-     var yR = GR(41387);
-     const tR = "harmonicsFunctions",
-       uR = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "openpbrSubsurfaceLayerData",
+       ar = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 20. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L108` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L148) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L108)

```diff
-   53946: (RR, JR, GR) => {
+   65082: (rr, Sr, Qr) => {
```

#### 21. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L110` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L150) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L110)

```diff
-       d: () => ZR
+       b: () => jr
```

#### 22. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L112-L115` → after: `L152-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L152-L155) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L112-L115)

```diff
-     var yR = GR(41387);
-     const tR = "instancesDeclaration",
-       uR = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "openpbrTransmissionLayerData",
+       ar = "float transmission_weight=vTransmissionWeight;vec3 transmission_color=vTransmissionColor.rgb;float transmission_depth=vTransmissionDepth;vec3 transmission_scatter=vTransmissionScatter.rgb;float transmission_scatter_anisotropy=clamp(vTransmissionScatterAnisotropy,-0.99 … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 23. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L121` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L161) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L121)

```diff
-   54013: (RR, JR, GR) => {
+   64871: (rr, Sr, Qr) => {
```

#### 24. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L125-L128` → after: `L165-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L165-L168) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L125-L128)

```diff
-     var yR = GR(41387);
-     const tR = "instancesVertex",
-       uR = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "pbrBRDFFunctions",
+       ar = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 25. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L134` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L174) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L134)

```diff
-   54009: (RR, JR, GR) => {
+   64884: (rr, Sr, Qr) => {
```

#### 26. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L136` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L176) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L136)

```diff
-       e: () => ZR
+       c: () => jr
```

#### 27. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L138-L141` → after: `L178-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L178-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L178-L181) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L138-L141)

```diff
-     var yR = GR(41387);
-     const tR = "morphTargetsVertex",
-       uR = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (float(i)>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;\n#ifdef MORPHTARGETS_POSITION\npositionUpdated+=(readVector3FromRawSa … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "pbrFragmentReflectionDeclaration",
+       ar = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 28. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L147` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L187) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L147)

```diff
-   53997: (RR, JR, GR) => {
+   64925: (rr, Sr, Qr) => {
```

#### 29. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L151-L154` → after: `L191-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L191-L194) · [Before (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L151-L154)

```diff
-     var yR = GR(41387);
-     const tR = "morphTargetsVertexDeclaration",
-       uR = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute vec3 position{X};\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute vec3 normal{X};\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute vec3 tangent{X};\n#endif\n#ifdef MORPHTARGETS_UV … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "pbrIBLFunctions",
+       ar = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 30. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L160` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L200) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L160)

```diff
-   54006: (RR, JR, GR) => {
+   54622: (rr, Sr, Qr) => {
```

#### 31. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L164-L167` → after: `L204-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L204-L207) · [Before (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L164-L167)

```diff
-     var yR = GR(41387);
-     const tR = "morphTargetsVertexGlobal",
-       uR = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nfloat vertexID;\n#endif\n#endif\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "reflectionFunction",
+       ar = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 32. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L173` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L213) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L173)

```diff
-   53991: (RR, JR, GR) => {
+   54614: (rr, Sr, Qr) => {
```

#### 33. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L177-L180` → after: `L217-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L217-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L217-L220) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L177-L180)

```diff
-     var yR = GR(41387);
-     const tR = "morphTargetsVertexGlobalDeclaration",
-       uR = "#ifdef MORPHTARGETS\nuniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];\n#ifdef MORPHTARGETS_TEXTURE \nuniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "samplerFragmentDeclaration",
+       ar = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 34. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L186` → after: `L226-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L226-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L226-L239) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L186)

```diff
-   53911: (RR, JR, GR) => {
+   65054: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "sceneFragmentDeclaration",
+       ar = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54404: (rr, Sr, Qr) => {
```

#### 35. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L190` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L243) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L190)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 36. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L193` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L246) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L193)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 37. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L199` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L252) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L199)

```diff
-   64724: (RR, JR, GR) => {
+   65155: (rr, Sr, Qr) => {
```

#### 38. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L201` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L254) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L201)

```diff
-       geometryVertexShader: () => bR
+       geometryPixelShader: () => Xr
```

#### 39. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L203-L219` → after: `L256-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L256-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L256-L261) · [Before (L203-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L203-L219)

```diff
-     var yR = GR(41387),
-       tR = GR(53939),
-       uR = GR(53941),
-       ZR = GR(53991),
-       qR = GR(53997),
-       iR = GR(53946);
-     const fR = "geometryVertexDeclaration",
-       VR = "uniform mat4 viewProjection;uniform mat4 view;";
-     yR.b.IncludesShadersStore[fR] || (yR.b.IncludesShadersStore[fR] = VR);
-     const KR = {
-       name: fR,
-       shader: VR
-     };
-     var wR = GR(53911);
-     const rR = "geometryUboDeclaration",
-       eR = "#include<sceneUboDeclaration>\n";
- ... (1 more removed lines; see GitHub link above)
+     var Zr = Qr(41743),
+       Wr = Qr(54579),
+       ar = Qr(54649);
+     const jr = "mrtFragmentDeclaration",
+       Ir = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
+     Zr.e.IncludesShadersStore[jr] || (Zr.e.IncludesShadersStore[jr] = Ir);
```

#### 40. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L224-L237` → after: `L266-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L266-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/638.js#L266-L287) · [Before (L224-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/638.js#L224-L237)

```diff
-     var LR = GR(53978),
-       nR = GR(64415),
-       UR = GR(54006),
-       WR = GR(54009),
-       AR = GR(54013),
-       CR = GR(54022),
-       XR = GR(54027),
-       MR = GR(54055),
-       BR = GR(54050);
-     const lR = "geometryVertexShader",
-       pR = "precision highp float;\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#include<instancesDeclaration>\n#include<__decl__geom … [truncated]
-     yR.b.ShadersStore[lR] || (yR.b.ShadersStore[lR] = pR);
-     const gR = [tR.e, uR.b, ZR.e, qR.d, iR.d, KR, wR.c, aR, LR.b, nR.c, UR.d, WR.e, AR.e, CR.e, XR.b, MR.c, BR.b];
-     for (const vR of gR) yR.b.IncludesShadersStore[vR.name] || (yR.b.IncludesShadersStore[vR.name] = vR.shader);
+     var Er = Qr(54643),
+       pr = Qr(54614),
+       xr = Qr(54647),
+       mr = Qr(54421),
+       Nr = Qr(64884),
+       Ur = Qr(65054),
+       tr = Qr(54404),
+       hr = Qr(64871),
+       zr = Qr(65063),
+       Yr = Qr(64925),
+       nr = Qr(54622),
+       er = Qr(65072),
+       Kr = Qr(65077),
+       yr = Qr(54664),
+       Br = Qr(54670),
+       Tr = Qr(65091),
+ ... (6 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/639.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/639.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af)

#### 1. `bundles/bloxd.io/chunks/js/639.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/639.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/639.js#L4)

```diff
-   53923: (RR, JR, GR) => {
+   54519: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/639.js` (Changed code · before: `L8-L18` → after: `L8-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0afR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af) · [After (L8-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/639.js#L8-L199) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/639.js#L8-L18)

```diff
-     var yR = GR(41387);
-     GR(53911), GR(53919);
-     const tR = "defaultUboDeclaration",
-       uR = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   54075: (RR, JR, GR) => {
+     var Zr = Qr(41743);
+     const Wr = "bakedVertexAnimation",
+       ar = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54433: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "bakedVertexAnimationDeclaration",
+       ar = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+ ... (176 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/639.js` (Changed code · before: `L20-L26` → after: `L201-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0afR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af) · [After (L201-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/639.js#L201-L211) · [Before (L20-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/639.js#L20-L26)

```diff
-       defaultPixelShader: () => hR
-     });
-     var yR = GR(41387),
-       tR = GR(54078);
-     const uR = "defaultFragmentDeclaration",
-       ZR = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
-     yR.b.IncludesShadersStore[uR] || (yR.b.IncludesShadersStore[uR] = ZR);
+       geometryVertexShader: () => lr
+     });
+     var Zr = Qr(41743),
+       Wr = Qr(54429),
+       ar = Qr(54433),
+       jr = Qr(54485),
+       Ir = Qr(54492),
+       fr = Qr(54439);
+     const Er = "geometryVertexDeclaration",
+       pr = "uniform mat4 viewProjection;uniform mat4 view;";
+     Zr.e.IncludesShadersStore[Er] || (Zr.e.IncludesShadersStore[Er] = pr);
```

#### 4. `bundles/bloxd.io/chunks/js/639.js` (Changed code · before: `L31-L45` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0afR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/639.js#L216-L219) · [Before (L31-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/639.js#L31-L45)

```diff
-     var iR = GR(53911),
-       fR = GR(53919),
-       VR = GR(53923),
-       KR = GR(54084),
-       wR = GR(54093),
-       rR = GR(54098),
-       eR = GR(53954),
-       aR = GR(53933),
-       LR = GR(54104),
-       nR = GR(54108),
-       UR = GR(54112),
-       WR = GR(54115);
-     const AR = "lightsFragmentFunctions",
-       CR = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
-     yR.b.IncludesShadersStore[AR] || (yR.b.IncludesShadersStore[AR] = CR);
+     var mr = Qr(54404);
+     const Nr = "geometryUboDeclaration",
+       Ur = "#include<sceneUboDeclaration>\n";
+     Zr.e.IncludesShadersStore[Nr] || (Zr.e.IncludesShadersStore[Nr] = Ur);
```

#### 5. `bundles/bloxd.io/chunks/js/639.js` (Changed code · before: `L50-L87` → after: `L224-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0afR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af) · [After (L224-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/639.js#L224-L237) · [Before (L50-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/639.js#L50-L87)

```diff
-     var MR = GR(54124),
-       BR = GR(54132);
-     const lR = "fresnelFunction",
-       pR = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
-     yR.b.IncludesShadersStore[lR] || (yR.b.IncludesShadersStore[lR] = pR);
-     const gR = {
-       name: lR,
-       shader: pR
-     };
-     var bR = GR(54134),
-       vR = GR(54137),
-       OR = GR(54143),
-       xR = GR(54152),
-       NR = GR(54161),
-       DR = GR(54169),
-       HR = GR(54173),
- ... (22 more removed lines; see GitHub link above)
+     var hr = Qr(54463),
+       zr = Qr(64873),
+       Yr = Qr(54500),
+       nr = Qr(54503),
+       er = Qr(54509),
+       Kr = Qr(54516),
+       yr = Qr(54519),
+       Br = Qr(54543),
+       Tr = Qr(54536);
+     const vr = "geometryVertexShader",
+       Or = "precision highp float;\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#include<instancesDeclaration>\n#include<__decl__geom … [truncated]
+     Zr.e.ShadersStore[vr] || (Zr.e.ShadersStore[vr] = Or);
+     const Lr = [Wr.d, ar.c, jr.d, Ir.d, fr.e, xr, mr.c, tr, hr.b, zr.c, Yr.d, nr.d, er.d, Kr.b, yr.e, Br.c, Tr.b];
+     for (const Xr of Lr) Zr.e.IncludesShadersStore[Xr.name] || (Zr.e.IncludesShadersStore[Xr.name] = Xr.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/640.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/640.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598)

#### 1. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/640.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/640.js#L4)

```diff
-   54180: (RR, JR, GR) => {
+   54413: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/640.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/640.js#L6)

```diff
-       d: () => ZR
+       b: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/640.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/640.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "clipPlaneFragment",
-       uR = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     Qr(54404), Qr(54408);
+     const Wr = "defaultUboDeclaration",
+       ar = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L17-L19` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/640.js#L18-L20) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/640.js#L17-L19)

```diff
-   54173: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => ZR
+   54569: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       defaultPixelShader: () => ur
```

#### 5. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L21-L24` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/640.js#L22-L26) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/640.js#L21-L24)

```diff
-     var yR = GR(41387);
-     const tR = "clipPlaneFragmentDeclaration",
-       uR = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743),
+       Wr = Qr(54572);
+     const ar = "defaultFragmentDeclaration",
+       jr = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
+     Zr.e.IncludesShadersStore[ar] || (Zr.e.IncludesShadersStore[ar] = jr);
```

#### 6. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L28-L37` → after: `L30-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L30-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/640.js#L30-L45) · [Before (L28-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/640.js#L28-L37)

```diff
-     }
-   },
-   54212: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "fogFragment",
-       uR = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     };
+     var fr = Qr(54404),
+       Er = Qr(54408),
+       pr = Qr(54413),
+       xr = Qr(54579),
+       mr = Qr(54588),
+       Nr = Qr(54593),
+       Ur = Qr(54446),
+       tr = Qr(54421),
+       hr = Qr(54596),
+       zr = Qr(54603),
+       Yr = Qr(54606),
+       nr = Qr(54610);
+     const er = "lightsFragmentFunctions",
+       Kr = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
+     Zr.e.IncludesShadersStore[er] || (Zr.e.IncludesShadersStore[er] = Kr);
```

#### 7. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L41-L50` → after: `L49-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L49-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/640.js#L49-L54) · [Before (L41-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/640.js#L41-L50)

```diff
-     }
-   },
-   54178: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "fogFragmentDeclaration",
-       uR = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     };
+     var Br = Qr(54612),
+       Tr = Qr(54614);
+     const vr = "fresnelFunction",
+       Or = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     Zr.e.IncludesShadersStore[vr] || (Zr.e.IncludesShadersStore[vr] = Or);
```

#### 8. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L54-L63` → after: `L58-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L58-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/640.js#L58-L73) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/640.js#L54-L63)

```diff
-     }
-   },
-   53933: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "helperFunctions",
-       uR = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     };
+     var lr = Qr(54622),
+       Xr = Qr(54626),
+       Pr = Qr(54632),
+       Hr = Qr(54641),
+       qr = Qr(54643),
+       Rr = Qr(54647),
+       gr = Qr(54649),
+       Cr = Qr(54498),
+       Mr = Qr(54658),
+       Gr = Qr(54664),
+       kr = Qr(54670),
+       Ar = Qr(54678);
+     const Vr = "defaultFragmentAlpha",
+       ir = "#ifdef OPACITY\nvec4 opacityMap=TEXRD(opacitySampler,vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*vOpacityInfos.y;\n#endif\n#en … [truncated]
+     Zr.e.IncludesShadersStore[Vr] || (Zr.e.IncludesShadersStore[Vr] = ir);
```

#### 9. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L67-L142` → after: `L77-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L77-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/640.js#L77-L87) · [Before (L67-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/640.js#L67-L142)

```diff
-     }
-   },
-   54137: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "imageProcessingDeclaration",
-       uR = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   54143: (RR, JR, GR) => {
- ... (60 more removed lines; see GitHub link above)
+     };
+     var cr = Qr(54681),
+       Fr = Qr(54690),
+       or = Qr(54697),
+       br = Qr(54703),
+       Jr = Qr(54711);
+     const Dr = "defaultPixelShader",
+       dr = "#define CUSTOM_FRAGMENT_EXTENSION\n#include<__decl__defaultFragment>\n#if defined(BUMP) || !defined(NORMAL)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN … [truncated]
+     Zr.e.ShadersStore[Dr] || (Zr.e.ShadersStore[Dr] = dr);
+     const sr = [Wr.d, Ir, fr.c, Er.d, pr.b, xr.d, mr.c, Nr.e, Ur.c, tr.d, hr.d, zr.d, Yr.d, nr.b, yr, Br.b, Tr.e, Lr, lr.d, Xr.e, Pr.e, Hr.e, qr.e, Rr.e, gr.b, Cr.c, Mr.e, Gr.d, kr.b, Ar.e, wr, cr.e, Fr.c, or.c, br.e, Jr.d];
+     for (const rS of sr) Zr.e.IncludesShadersStore[rS.name] || (Zr.e.IncludesShadersStore[rS.name] = rS.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/641.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/641.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365)

#### 1. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L4)

```diff
-   54180: (RR, JR, GR) => {
+   54664: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L8)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 3. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L11)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L17)

```diff
-   54173: (RR, JR, GR) => {
+   54649: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L21)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 6. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L24)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 7. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L30)

```diff
-   54212: (RR, JR, GR) => {
+   54703: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L34)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 9. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L37)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 10. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L43)

```diff
-   54178: (RR, JR, GR) => {
+   54658: (rr, Sr, Qr) => {
```

#### 11. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L45)

```diff
-       b: () => ZR
+       e: () => jr
```

#### 12. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L47)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 13. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L50)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 14. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L56)

```diff
-   53933: (RR, JR, GR) => {
+   54421: (rr, Sr, Qr) => {
```

#### 15. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L58)

```diff
-       c: () => ZR
+       d: () => jr
```

#### 16. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L60)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 17. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L63)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 18. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L69)

```diff
-   54004: (RR, JR, GR) => {
+   54626: (rr, Sr, Qr) => {
```

#### 19. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L71)

```diff
-       d: () => ZR
+       e: () => jr
```

#### 20. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L73-L76)

```diff
-     var yR = GR(41387);
-     const tR = "logDepthDeclaration",
-       uR = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "imageProcessingDeclaration",
+       ar = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 21. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L82)

```diff
-   54209: (RR, JR, GR) => {
+   54632: (rr, Sr, Qr) => {
```

#### 22. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L84)

```diff
-       c: () => ZR
+       e: () => jr
```

#### 23. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L86-L89)

```diff
-     var yR = GR(41387);
-     const tR = "logDepthFragment",
-       uR = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "imageProcessingFunctions",
+       ar = "#if defined(COLORGRADING) && !defined(COLORGRADING3D)\n/** \n* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.\n* sampler3dSetting.x=textureOffset (0.5/textureSize).\n* sampler3dSetting.y=textureSize.\n*/\n#define inline\nvec3 sampleTexture3D(sampler2D c … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 24. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L95-L97` → after: `L95-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L95-L97) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L95-L97)

```diff
-   64193: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       skyPixelShader: () => nR
+   54498: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => jr
```

#### 25. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L99-L109` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L99-L102) · [Before (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L99-L109)

```diff
-     var yR = GR(41387),
-       tR = GR(54173),
-       uR = GR(54004),
-       ZR = GR(54178),
-       qR = GR(53933),
-       iR = GR(54180),
-       fR = GR(54209),
-       VR = GR(54212);
-     const KR = "imageProcessingCompatibility",
-       wR = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
-     yR.b.IncludesShadersStore[KR] || (yR.b.IncludesShadersStore[KR] = wR);
+     var Zr = Qr(41743);
+     const Wr = "logDepthDeclaration",
+       ar = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 26. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L111-L118` → after: `L104-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L104-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/641.js#L104-L142) · [Before (L111-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/641.js#L111-L118)

```diff
-         name: KR,
-         shader: wR
-       },
-       eR = "skyPixelShader",
-       aR = "precision highp float;varying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform floa … [truncated]
-     yR.b.ShadersStore[eR] || (yR.b.ShadersStore[eR] = aR);
-     const LR = [tR.b, uR.d, ZR.b, qR.c, iR.d, fR.c, VR.e, rR];
-     for (const UR of LR) yR.b.IncludesShadersStore[UR.name] || (yR.b.IncludesShadersStore[UR.name] = UR.shader);
+       name: Wr,
+       shader: ar
+     }
+   },
+   54697: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "logDepthFragment",
+       ar = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/642.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/642.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9)

#### 1. `bundles/bloxd.io/chunks/js/642.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/642.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/642.js#L4)

```diff
-   53933: (RR, JR, GR) => {
+   54664: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/642.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/642.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/642.js#L6)

```diff
-       c: () => ZR
+       d: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/642.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/642.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/642.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "helperFunctions",
-       uR = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "clipPlaneFragment",
+       ar = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/642.js` (Changed code · before: `L17` → after: `L17-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9) · [After (L17-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/642.js#L17-L95) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/642.js#L17)

```diff
-   64257: (RR, JR, GR) => {
+   54649: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "clipPlaneFragmentDeclaration",
+       ar = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54703: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => jr
+ ... (63 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/642.js` (Changed code · before: `L19` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/642.js#L97) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/642.js#L19)

```diff
-       rgbdDecodePixelShader: () => iR
+       skyPixelShader: () => zr
```

#### 6. `bundles/bloxd.io/chunks/js/642.js` (Changed code · before: `L21-L27` → after: `L99-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9) · [After (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/642.js#L99-L118) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/642.js#L21-L27)

```diff
-     var yR = GR(41387),
-       tR = GR(53933);
-     const uR = "rgbdDecodePixelShader",
-       ZR = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
-     yR.b.ShadersStore[uR] || (yR.b.ShadersStore[uR] = ZR);
-     const qR = [tR.c];
-     for (const fR of qR) yR.b.IncludesShadersStore[fR.name] || (yR.b.IncludesShadersStore[fR.name] = fR.shader);
+     var Zr = Qr(41743),
+       Wr = Qr(54649),
+       ar = Qr(54498),
+       jr = Qr(54658),
+       Ir = Qr(54421),
+       fr = Qr(54664),
+       Er = Qr(54697),
+       pr = Qr(54703);
+     const xr = "imageProcessingCompatibility",
+       mr = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
+     Zr.e.IncludesShadersStore[xr] || (Zr.e.IncludesShadersStore[xr] = mr);
+     const Nr = {
+         name: xr,
+         shader: mr
+       },
+       Ur = "skyPixelShader",
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/643.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/643.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852)

#### 1. `bundles/bloxd.io/chunks/js/643.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/643.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/643.js#L4)

```diff
-   53933: (RR, JR, GR) => {
+   54421: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/643.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/643.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/643.js#L6)

```diff
-       c: () => ZR
+       d: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/643.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/643.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/643.js#L8)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 4. `bundles/bloxd.io/chunks/js/643.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/643.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/643.js#L11)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 5. `bundles/bloxd.io/chunks/js/643.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/643.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/643.js#L17)

```diff
-   64274: (RR, JR, GR) => {
+   64742: (rr, Sr, Qr) => {
```

#### 6. `bundles/bloxd.io/chunks/js/643.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/643.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/643.js#L19)

```diff
-       rgbdEncodePixelShader: () => iR
+       rgbdDecodePixelShader: () => fr
```

#### 7. `bundles/bloxd.io/chunks/js/643.js` (Changed code · before: `L21-L27` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/643.js#L21-L27) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/643.js#L21-L27)

```diff
-     var yR = GR(41387),
-       tR = GR(53933);
-     const uR = "rgbdEncodePixelShader",
-       ZR = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
-     yR.b.ShadersStore[uR] || (yR.b.ShadersStore[uR] = ZR);
-     const qR = [tR.c];
-     for (const fR of qR) yR.b.IncludesShadersStore[fR.name] || (yR.b.IncludesShadersStore[fR.name] = fR.shader);
+     var Zr = Qr(41743),
+       Wr = Qr(54421);
+     const ar = "rgbdDecodePixelShader",
+       jr = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
+     Zr.e.ShadersStore[ar] || (Zr.e.ShadersStore[ar] = jr);
+     const Ir = [Wr.d];
+     for (const Er of Ir) Zr.e.IncludesShadersStore[Er.name] || (Zr.e.IncludesShadersStore[Er.name] = Er.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/644.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/644.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49)

#### 1. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/644.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/644.js#L4)

```diff
-   54027: (RR, JR, GR) => {
+   54421: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/644.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/644.js#L6)

```diff
-       b: () => ZR
+       d: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/644.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/644.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "bakedVertexAnimation",
-       uR = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "helperFunctions",
+       ar = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/644.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/644.js#L17-L19)

```diff
-   53941: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => ZR
+   64750: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       rgbdEncodePixelShader: () => fr
```

#### 5. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L21-L167` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/644.js#L21-L27) · [Before (L21-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/644.js#L21-L167)

```diff
-     var yR = GR(41387);
-     const tR = "bakedVertexAnimationDeclaration",
-       uR = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   53939: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "bonesDeclaration",
-       uR = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
- ... (131 more removed lines; see GitHub link above)
+     var Zr = Qr(41743),
+       Wr = Qr(54421);
+     const ar = "rgbdEncodePixelShader",
+       jr = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
+     Zr.e.ShadersStore[ar] || (Zr.e.ShadersStore[ar] = jr);
+     const Ir = [Wr.d];
+     for (const Er of Ir) Zr.e.IncludesShadersStore[Er.name] || (Zr.e.IncludesShadersStore[Er.name] = Er.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/645.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/645.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9)

#### 1. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/645.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/645.js#L4)

```diff
-   53946: (RR, JR, GR) => {
+   54519: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/645.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/645.js#L6)

```diff
-       d: () => ZR
+       e: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/645.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/645.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "instancesDeclaration",
-       uR = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bakedVertexAnimation",
+       ar = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/645.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/645.js#L17)

```diff
-   54013: (RR, JR, GR) => {
+   54433: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/645.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/645.js#L19)

```diff
-       e: () => ZR
+       c: () => jr
```

#### 6. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/645.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/645.js#L21-L24)

```diff
-     var yR = GR(41387);
-     const tR = "instancesVertex",
-       uR = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bakedVertexAnimationDeclaration",
+       ar = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 7. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L30` → after: `L30-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L30-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/645.js#L30-L147) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/645.js#L30)

```diff
-   64776: (RR, JR, GR) => {
+   54429: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "bonesDeclaration",
+       ar = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54516: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => jr
+ ... (102 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L32` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/645.js#L149) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/645.js#L32)

```diff
-       greasedLineVertexShader: () => fR
+       colorVertexShader: () => Yr
```

#### 9. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L34-L41` → after: `L151-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/645.js#L151-L167) · [Before (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/645.js#L34-L41)

```diff
-     var yR = GR(41387),
-       tR = GR(53946),
-       uR = GR(54013);
-     const ZR = "greasedLineVertexShader",
-       qR = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
-     yR.b.ShadersStore[ZR] || (yR.b.ShadersStore[ZR] = qR);
-     const iR = [tR.d, uR.e];
-     for (const VR of iR) yR.b.IncludesShadersStore[VR.name] || (yR.b.IncludesShadersStore[VR.name] = VR.shader);
+     var Zr = Qr(41743),
+       Wr = Qr(54429),
+       ar = Qr(54433),
+       jr = Qr(54463),
+       Ir = Qr(54468),
+       fr = Qr(54439),
+       Er = Qr(54509),
+       pr = Qr(54516),
+       xr = Qr(54519),
+       mr = Qr(54543),
+       Nr = Qr(54546),
+       Ur = Qr(54560);
+     const tr = "colorVertexShader",
+       hr = "attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform mat4 view;\n#endif\n#include<i … [truncated]
+     Zr.e.ShadersStore[tr] || (Zr.e.ShadersStore[tr] = hr);
+     const zr = [Wr.d, ar.c, jr.b, Ir.b, fr.e, Er.d, pr.b, xr.e, mr.c, Nr.e, Ur.d];
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/646.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/646.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d)

#### 1. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/646.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/646.js#L4)

```diff
-   54050: (RR, JR, GR) => {
+   54439: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/646.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/646.js#L6)

```diff
-       b: () => ZR
+       e: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/646.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/646.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "bumpVertex",
-       uR = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "instancesDeclaration",
+       ar = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/646.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/646.js#L17)

```diff
-   53970: (RR, JR, GR) => {
+   54509: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/646.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/646.js#L21-L24)

```diff
-     var yR = GR(41387);
-     const tR = "bumpVertexDeclaration",
-       uR = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "instancesVertex",
+       ar = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 6. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L30-L32` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/646.js#L30-L32) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/646.js#L30-L32)

```diff
-   64415: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => ZR
+   65192: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       greasedLineVertexShader: () => Er
```

#### 7. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L34-L122` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/646.js#L34-L41) · [Before (L34-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/646.js#L34-L122)

```diff
-     var yR = GR(41387);
-     const tR = "harmonicsFunctions",
-       uR = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   64410: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "pbrBRDFFunctions",
-       uR = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
- ... (73 more removed lines; see GitHub link above)
+     var Zr = Qr(41743),
+       Wr = Qr(54439),
+       ar = Qr(54509);
+     const jr = "greasedLineVertexShader",
+       Ir = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
+     Zr.e.ShadersStore[jr] || (Zr.e.ShadersStore[jr] = Ir);
+     const fr = [Wr.e, ar.d];
+     for (const pr of fr) Zr.e.IncludesShadersStore[pr.name] || (Zr.e.IncludesShadersStore[pr.name] = pr.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/647.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/647.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe)

#### 1. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L4)

```diff
-   54055: (RR, JR, GR) => {
+   54536: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L6)

```diff
-       c: () => ZR
+       b: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "clipPlaneVertex",
-       uR = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bumpVertex",
+       ar = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L17)

```diff
-   53978: (RR, JR, GR) => {
+   54457: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L19)

```diff
-       b: () => ZR
+       d: () => jr
```

#### 6. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L21-L24)

```diff
-     var yR = GR(41387);
-     const tR = "clipPlaneVertexDeclaration",
-       uR = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bumpVertexDeclaration",
+       ar = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 7. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L30)

```diff
-   54059: (RR, JR, GR) => {
+   64873: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L34-L37)

```diff
-     var yR = GR(41387);
-     const tR = "fogVertex",
-       uR = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "harmonicsFunctions",
+       ar = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 9. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L43)

```diff
-   53980: (RR, JR, GR) => {
+   64871: (rr, Sr, Qr) => {
```

#### 10. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L45)

```diff
-       c: () => ZR
+       e: () => jr
```

#### 11. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L47-L50)

```diff
-     var yR = GR(41387);
-     const tR = "fogVertexDeclaration",
-       uR = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "pbrBRDFFunctions",
+       ar = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 12. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L56)

```diff
-   54004: (RR, JR, GR) => {
+   64864: (rr, Sr, Qr) => {
```

#### 13. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L58)

```diff
-       d: () => ZR
+       c: () => jr
```

#### 14. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L60-L63` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L60-L64) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L60-L63)

```diff
-     var yR = GR(41387);
-     const tR = "logDepthDeclaration",
-       uR = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     Qr(54404), Qr(54408);
+     const Wr = "pbrUboDeclaration",
+       ar = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 15. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L69-L71` → after: `L70-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L70-L72) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L69-L71)

```diff
-   54073: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => ZR
+   64862: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       pbrVertexShader: () => br
```

#### 16. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L73-L76` → after: `L74-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L74-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L74-L78) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L73-L76)

```diff
-     var yR = GR(41387);
-     const tR = "logDepthVertex",
-       uR = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743),
+       Wr = Qr(54398);
+     const ar = "pbrVertexDeclaration",
+       jr = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
+     Zr.e.IncludesShadersStore[ar] || (Zr.e.IncludesShadersStore[ar] = jr);
```

#### 17. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L80-L97` → after: `L82-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L82-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/647.js#L82-L122) · [Before (L80-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/647.js#L80-L97)

```diff
-     }
-   },
-   64176: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       particlesVertexShader: () => rR
-     });
-     var yR = GR(41387),
-       tR = GR(53978),
-       uR = GR(53980),
-       ZR = GR(54004),
-       qR = GR(54055),
-       iR = GR(54059),
-       fR = GR(54073);
-     const VR = "particlesVertexShader",
-       KR = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
-     yR.b.ShadersStore[VR] || (yR.b.ShadersStore[VR] = KR);
- ... (2 more removed lines; see GitHub link above)
+     };
+     var fr = Qr(54404),
+       Er = Qr(54408),
+       pr = Qr(64864),
+       xr = Qr(54418),
+       mr = Qr(54446),
+       Nr = Qr(54421),
+       Ur = Qr(64871),
+       tr = Qr(54429),
+       hr = Qr(54433),
+       zr = Qr(54439),
+       Yr = Qr(54443),
+       nr = Qr(54450),
+       er = Qr(64873),
+       Kr = Qr(54457),
+       yr = Qr(54463),
+ ... (25 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/648.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/648.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd)

#### 1. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L4)

```diff
-   54055: (RR, JR, GR) => {
+   54543: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L8)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 3. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L11)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L17)

```diff
-   53978: (RR, JR, GR) => {
+   54463: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L21)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 6. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L24)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 7. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L30)

```diff
-   54059: (RR, JR, GR) => {
+   54546: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L32)

```diff
-       c: () => ZR
+       e: () => jr
```

#### 9. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L34)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 10. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L37)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 11. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L43)

```diff
-   53980: (RR, JR, GR) => {
+   54468: (rr, Sr, Qr) => {
```

#### 12. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L45)

```diff
-       c: () => ZR
+       b: () => jr
```

#### 13. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L47)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 14. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L50)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 15. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L56)

```diff
-   54004: (RR, JR, GR) => {
+   54498: (rr, Sr, Qr) => {
```

#### 16. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L58)

```diff
-       d: () => ZR
+       c: () => jr
```

#### 17. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L60)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 18. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L63)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 19. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L69)

```diff
-   54073: (RR, JR, GR) => {
+   54563: (rr, Sr, Qr) => {
```

#### 20. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L71)

```diff
-       d: () => ZR
+       c: () => jr
```

#### 21. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L73)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 22. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L76)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 23. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L82)

```diff
-   64186: (RR, JR, GR) => {
+   64654: (rr, Sr, Qr) => {
```

#### 24. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L84)

```diff
-       skyVertexShader: () => rR
+       particlesVertexShader: () => Nr
```

#### 25. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L86-L97` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/648.js#L86-L97) · [Before (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/648.js#L86-L97)

```diff
-     var yR = GR(41387),
-       tR = GR(54004),
-       uR = GR(53978),
-       ZR = GR(53980),
-       qR = GR(54055),
-       iR = GR(54073),
-       fR = GR(54059);
-     const VR = "skyVertexShader",
-       KR = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
-     yR.b.ShadersStore[VR] || (yR.b.ShadersStore[VR] = KR);
-     const wR = [tR.d, uR.b, ZR.c, qR.c, iR.d, fR.c];
-     for (const eR of wR) yR.b.IncludesShadersStore[eR.name] || (yR.b.IncludesShadersStore[eR.name] = eR.shader);
+     var Zr = Qr(41743),
+       Wr = Qr(54463),
+       ar = Qr(54468),
+       jr = Qr(54498),
+       Ir = Qr(54543),
+       fr = Qr(54546),
+       Er = Qr(54563);
+     const pr = "particlesVertexShader",
+       xr = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
+     Zr.e.ShadersStore[pr] || (Zr.e.ShadersStore[pr] = xr);
+     const mr = [Wr.b, ar.b, jr.c, Ir.c, fr.e, Er.c];
+     for (const Ur of mr) Zr.e.IncludesShadersStore[Ur.name] || (Zr.e.IncludesShadersStore[Ur.name] = Ur.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/649.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/649.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007)

#### 1. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L4)

```diff
-   54186: (RR, JR, GR) => {
+   54543: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L6)

```diff
-       e: () => ZR
+       c: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "bumpFragment",
-       uR = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "clipPlaneVertex",
+       ar = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L17)

```diff
-   54169: (RR, JR, GR) => {
+   54463: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L19)

```diff
-       d: () => ZR
+       b: () => jr
```

#### 6. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L21-L25)

```diff
-     var yR = GR(41387);
-     GR(54132);
-     const tR = "bumpFragmentFunctions",
-       uR = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "clipPlaneVertexDeclaration",
+       ar = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 7. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L31)

```diff
-   54161: (RR, JR, GR) => {
+   54546: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L33)

```diff
-       c: () => ZR
+       e: () => jr
```

#### 9. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L35-L38)

```diff
-     var yR = GR(41387);
-     const tR = "bumpFragmentMainFunctions",
-       uR = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "fogVertex",
+       ar = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 10. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L44)

```diff
-   54115: (RR, JR, GR) => {
+   54468: (rr, Sr, Qr) => {
```

#### 11. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L48-L51)

```diff
-     var yR = GR(41387);
-     const tR = "clusteredLightingFunctions",
-       uR = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "fogVertexDeclaration",
+       ar = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 12. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L57)

```diff
-   54190: (RR, JR, GR) => {
+   54498: (rr, Sr, Qr) => {
```

#### 13. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L59` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L58) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L59)

```diff
-       e: () => ZR
+       c: () => jr
```

#### 14. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L61-L64` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L60-L63) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L61-L64)

```diff
-     var yR = GR(41387);
-     const tR = "decalFragment",
-       uR = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "logDepthDeclaration",
+       ar = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 15. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L70` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L69) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L70)

```diff
-   54203: (RR, JR, GR) => {
+   54563: (rr, Sr, Qr) => {
```

#### 16. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L74-L77` → after: `L73-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L73-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/649.js#L73-L97) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/649.js#L74-L77)

```diff
-     var yR = GR(41387);
-     const tR = "lightFragment",
-       uR = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "logDepthVertex",
+       ar = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   64664: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       skyVertexShader: () => Nr
+     });
+     var Zr = Qr(41743),
+       Wr = Qr(54498),
+       ar = Qr(54463),
+ ... (9 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/650.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/650.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0)

#### 1. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/650.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/650.js#L4)

```diff
-   54180: (RR, JR, GR) => {
+   54670: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/650.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/650.js#L6)

```diff
-       d: () => ZR
+       b: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/650.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/650.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "clipPlaneFragment",
-       uR = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bumpFragment",
+       ar = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/650.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/650.js#L17)

```diff
-   54173: (RR, JR, GR) => {
+   54647: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/650.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/650.js#L19)

```diff
-       b: () => ZR
+       e: () => jr
```

#### 6. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/650.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/650.js#L21-L24)

```diff
-     var yR = GR(41387);
-     const tR = "clipPlaneFragmentDeclaration",
-       uR = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     Qr(54614);
+     const Wr = "bumpFragmentFunctions",
+       ar = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 7. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/650.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/650.js#L30)

```diff
-   54212: (RR, JR, GR) => {
+   54643: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/650.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/650.js#L34-L37)

```diff
-     var yR = GR(41387);
-     const tR = "fogFragment",
-       uR = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bumpFragmentMainFunctions",
+       ar = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 9. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/650.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/650.js#L43)

```diff
-   54178: (RR, JR, GR) => {
+   54610: (rr, Sr, Qr) => {
```

#### 10. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/650.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/650.js#L47-L50)

```diff
-     var yR = GR(41387);
-     const tR = "fogFragmentDeclaration",
-       uR = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "clusteredLightingFunctions",
+       ar = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 11. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L56-L58` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/650.js#L57-L59) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/650.js#L56-L58)

```diff
-   54573: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       colorPixelShader: () => KR
+   54678: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => jr
```

#### 12. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L60-L69` → after: `L61-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L61-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/650.js#L61-L77) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/650.js#L60-L69)

```diff
-     var yR = GR(41387),
-       tR = GR(54173),
-       uR = GR(54178),
-       ZR = GR(54180),
-       qR = GR(54212);
-     const iR = "colorPixelShader",
-       fR = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
-     yR.b.ShadersStore[iR] || (yR.b.ShadersStore[iR] = fR);
-     const VR = [tR.b, uR.b, ZR.d, qR.e];
-     for (const wR of VR) yR.b.IncludesShadersStore[wR.name] || (yR.b.IncludesShadersStore[wR.name] = wR.shader);
+     var Zr = Qr(41743);
+     const Wr = "decalFragment",
+       ar = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54690: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "lightFragment",
+       ar = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/651.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/651.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada)

#### 1. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L4)

```diff
-   54384: (RR, JR, GR) => {
+   54664: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L6)

```diff
-       b: () => ZR
+       d: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "bumpVertex",
-       uR = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "clipPlaneFragment",
+       ar = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L17)

```diff
-   54291: (RR, JR, GR) => {
+   54649: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L19)

```diff
-       c: () => ZR
+       b: () => jr
```

#### 6. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L21-L24)

```diff
-     var yR = GR(41387);
-     const tR = "bumpVertexDeclaration",
-       uR = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "clipPlaneFragmentDeclaration",
+       ar = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 7. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L30)

```diff
-   54240: (RR, JR, GR) => {
+   54703: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L32)

```diff
-       b: () => ZR
+       e: () => jr
```

#### 9. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L34-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L34-L37) · [Before (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L34-L38)

```diff
-     var yR = GR(41387);
-     GR(54226), GR(54234);
-     const tR = "defaultUboDeclaration",
-       uR = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "fogFragment",
+       ar = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 10. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L44)

```diff
-   54251: (RR, JR, GR) => {
+   54658: (rr, Sr, Qr) => {
```

#### 11. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L46)

```diff
-       c: () => ZR
+       e: () => jr
```

#### 12. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L48-L51)

```diff
-     var yR = GR(41387);
-     const tR = "helperFunctions",
-       uR = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "fogFragmentDeclaration",
+       ar = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 13. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L57-L59` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L56-L58) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L57-L59)

```diff
-   54226: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => ZR
+   55084: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       colorPixelShader: () => xr
```

#### 14. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L61-L120` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/651.js#L60-L69) · [Before (L61-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/651.js#L61-L120)

```diff
-     var yR = GR(41387);
-     const tR = "sceneUboDeclaration",
-       uR = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   54222: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       defaultVertexShaderWGSL: () => ER
-     });
-     var yR = GR(41387),
-       tR = GR(54226),
-       uR = GR(54234),
- ... (44 more removed lines; see GitHub link above)
+     var Zr = Qr(41743),
+       Wr = Qr(54649),
+       ar = Qr(54658),
+       jr = Qr(54664),
+       Ir = Qr(54703);
+     const fr = "colorPixelShader",
+       Er = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
+     Zr.e.ShadersStore[fr] || (Zr.e.ShadersStore[fr] = Er);
+     const pr = [Wr.b, ar.e, jr.d, Ir.e];
+     for (const mr of pr) Zr.e.IncludesShadersStore[mr.name] || (Zr.e.IncludesShadersStore[mr.name] = mr.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/652.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/652.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e)

#### 1. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L4)

```diff
-   54268: (RR, JR, GR) => {
+   54867: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L6)

```diff
-       e: () => ZR
+       b: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "instancesDeclaration",
-       uR = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bumpVertex",
+       ar = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L17)

```diff
-   54358: (RR, JR, GR) => {
+   54779: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L19)

```diff
-       c: () => ZR
+       e: () => jr
```

#### 6. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L21-L24)

```diff
-     var yR = GR(41387);
-     const tR = "instancesVertex",
-       uR = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bumpVertexDeclaration",
+       ar = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 7. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L30)

```diff
-   54234: (RR, JR, GR) => {
+   54730: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L32)

```diff
-       d: () => ZR
+       c: () => jr
```

#### 9. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L34-L37` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L34-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L34-L37)

```diff
-     var yR = GR(41387);
-     const tR = "meshUboDeclaration",
-       uR = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     Qr(54721), Qr(54723);
+     const Wr = "defaultUboDeclaration",
+       ar = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 10. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L43)

```diff
-   54226: (RR, JR, GR) => {
+   54740: (rr, Sr, Qr) => {
```

#### 11. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L45` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L46) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L45)

```diff
-       b: () => ZR
+       d: () => jr
```

#### 12. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L47-L50)

```diff
-     var yR = GR(41387);
-     const tR = "sceneUboDeclaration",
-       uR = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "helperFunctions",
+       ar = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 13. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L56` → after: `L57-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L57-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L57-L70) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L56)

```diff
-   64761: (RR, JR, GR) => {
+   54721: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "sceneUboDeclaration",
+       ar = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54718: (rr, Sr, Qr) => {
```

#### 14. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L58` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L72) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L58)

```diff
-       greasedLineVertexShaderWGSL: () => KR
+       defaultVertexShaderWGSL: () => Fr
```

#### 15. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L60-L69` → after: `L74-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L74-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/652.js#L74-L120) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/652.js#L60-L69)

```diff
-     var yR = GR(41387),
-       tR = GR(54268),
-       uR = GR(54226),
-       ZR = GR(54234),
-       qR = GR(54358);
-     const iR = "greasedLineVertexShader",
-       fR = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
-     yR.b.ShadersStoreWGSL[iR] || (yR.b.ShadersStoreWGSL[iR] = fR);
-     const VR = [tR.e, uR.b, ZR.d, qR.c];
-     for (const wR of VR) yR.b.IncludesShadersStoreWGSL[wR.name] || (yR.b.IncludesShadersStoreWGSL[wR.name] = wR.shader);
+     var Zr = Qr(41743),
+       Wr = Qr(54721),
+       ar = Qr(54723),
+       jr = Qr(54730),
+       Ir = Qr(54734),
+       fr = Qr(54740),
+       Er = Qr(54742),
+       pr = Qr(54747),
+       xr = Qr(54753),
+       mr = Qr(54758),
+       Nr = Qr(54763),
+       Ur = Qr(54771),
+       tr = Qr(54779),
+       hr = Qr(54788),
+       zr = Qr(54792);
+     const Yr = "lightVxFragmentDeclaration",
+ ... (31 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/653.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/653.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29)

#### 1. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/653.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/653.js#L4)

```diff
-   54240: (RR, JR, GR) => {
+   54753: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/653.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/653.js#L6)

```diff
-       b: () => ZR
+       d: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/653.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/653.js#L8-L12)

```diff
-     var yR = GR(41387);
-     GR(54226), GR(54234);
-     const tR = "defaultUboDeclaration",
-       uR = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "instancesDeclaration",
+       ar = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L18` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/653.js#L17) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/653.js#L18)

```diff
-   54251: (RR, JR, GR) => {
+   54837: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L22-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/653.js#L21-L24) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/653.js#L22-L25)

```diff
-     var yR = GR(41387);
-     const tR = "helperFunctions",
-       uR = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "instancesVertex",
+       ar = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 6. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/653.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/653.js#L31)

```diff
-   54226: (RR, JR, GR) => {
+   54723: (rr, Sr, Qr) => {
```

#### 7. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/653.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/653.js#L33)

```diff
-       b: () => ZR
+       c: () => jr
```

#### 8. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/653.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/653.js#L35-L38)

```diff
-     var yR = GR(41387);
-     const tR = "sceneUboDeclaration",
-       uR = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "meshUboDeclaration",
+       ar = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 9. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L44-L46` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/653.js#L43-L45) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/653.js#L44-L46)

```diff
-   54408: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       defaultPixelShaderWGSL: () => sR
+   54721: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => jr
```

#### 10. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L48-L69` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/653.js#L47-L50) · [Before (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/653.js#L48-L69)

```diff
-     var yR = GR(41387),
-       tR = GR(54226),
-       uR = GR(54234),
-       ZR = GR(54240),
-       qR = GR(54413),
-       iR = GR(54420),
-       fR = GR(54426),
-       VR = GR(54277),
-       KR = GR(54251),
-       wR = GR(54434),
-       rR = GR(54441),
-       eR = GR(54450);
-     const aR = "clusteredLightingCompute",
-       LR = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
-     yR.b.IncludesShadersStoreWGSL[aR] || (yR.b.IncludesShadersStoreWGSL[aR] = LR);
-     const nR = {
- ... (6 more removed lines; see GitHub link above)
+     var Zr = Qr(41743);
+     const Wr = "sceneUboDeclaration",
+       ar = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 11. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L73-L112` → after: `L54-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L54-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/653.js#L54-L69) · [Before (L73-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/653.js#L73-L112)

```diff
-     };
-     var CR = GR(54453),
-       XR = GR(54457);
-     const MR = "fresnelFunction",
-       BR = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
-     yR.b.IncludesShadersStoreWGSL[MR] || (yR.b.IncludesShadersStoreWGSL[MR] = BR);
-     const lR = {
-       name: MR,
-       shader: BR
-     };
-     var pR = GR(54464),
-       gR = GR(54472),
-       bR = GR(54480),
-       vR = GR(54484),
-       OR = GR(54492),
-       xR = GR(54495),
- ... (24 more removed lines; see GitHub link above)
+     }
+   },
+   65186: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       greasedLineVertexShaderWGSL: () => xr
+     });
+     var Zr = Qr(41743),
+       Wr = Qr(54753),
+       ar = Qr(54721),
+       jr = Qr(54723),
+       Ir = Qr(54837);
+     const fr = "greasedLineVertexShader",
+       Er = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
+     Zr.e.ShadersStoreWGSL[fr] || (Zr.e.ShadersStoreWGSL[fr] = Er);
+     const pr = [Wr.d, ar.e, jr.c, Ir.c];
+     for (const mr of pr) Zr.e.IncludesShadersStoreWGSL[mr.name] || (Zr.e.IncludesShadersStoreWGSL[mr.name] = mr.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/654.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/654.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9)

#### 1. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/654.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/654.js#L4)

```diff
-   54251: (RR, JR, GR) => {
+   54730: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/654.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/654.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "helperFunctions",
-       uR = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     Qr(54721), Qr(54723);
+     const Wr = "defaultUboDeclaration",
+       ar = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 3. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/654.js#L18) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/654.js#L17)

```diff
-   64520: (RR, JR, GR) => {
+   54740: (rr, Sr, Qr) => {
```

#### 4. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L19` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/654.js#L20) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/654.js#L19)

```diff
-       c: () => ZR
+       d: () => jr
```

#### 5. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L21-L24` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/654.js#L22-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/654.js#L21-L24)

```diff
-     var yR = GR(41387);
-     const tR = "pbrBRDFFunctions",
-       uR = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "helperFunctions",
+       ar = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 6. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/654.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/654.js#L30)

```diff
-   54226: (RR, JR, GR) => {
+   54721: (rr, Sr, Qr) => {
```

#### 7. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L32` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/654.js#L33) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/654.js#L32)

```diff
-       b: () => ZR
+       e: () => jr
```

#### 8. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L34` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/654.js#L35) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/654.js#L34)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 9. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L37` → after: `L38-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L38-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/654.js#L38-L112) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/654.js#L37)

```diff
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54901: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       defaultPixelShaderWGSL: () => sr
+     });
+     var Zr = Qr(41743),
+       Wr = Qr(54721),
+       ar = Qr(54723),
+       jr = Qr(54730),
+       Ir = Qr(54910),
+       fr = Qr(54917),
+ ... (59 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/655.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/655.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422)

#### 1. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/655.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/655.js#L4)

```diff
-   54366: (RR, JR, GR) => {
+   54740: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/655.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/655.js#L6)

```diff
-       b: () => ZR
+       d: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/655.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/655.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "bakedVertexAnimation",
-       uR = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "helperFunctions",
+       ar = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/655.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/655.js#L17)

```diff
-   54260: (RR, JR, GR) => {
+   64951: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/655.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/655.js#L19)

```diff
-       c: () => ZR
+       e: () => jr
```

#### 6. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/655.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/655.js#L21-L24)

```diff
-     var yR = GR(41387);
-     const tR = "bakedVertexAnimationDeclaration",
-       uR = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "pbrBRDFFunctions",
+       ar = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 7. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L30-L108` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/655.js#L30) · [Before (L30-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/655.js#L30-L108)

```diff
-   54256: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "bonesDeclaration",
-       uR = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   54361: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => ZR
- ... (63 more removed lines; see GitHub link above)
+   54721: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L112-L190` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/655.js#L34) · [Before (L112-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/655.js#L112-L190)

```diff
-     var yR = GR(41387);
-     const tR = "instancesDeclaration",
-       uR = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   54358: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "instancesVertex",
-       uR = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
- ... (63 more removed lines; see GitHub link above)
+     var Zr = Qr(41743);
```

#### 9. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L193-L223` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/655.js#L37) · [Before (L193-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/655.js#L193-L223)

```diff
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   64708: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       geometryVertexShaderWGSL: () => XR
-     });
-     var yR = GR(41387),
-       tR = GR(54256),
-       uR = GR(54260),
-       ZR = GR(54312),
-       qR = GR(54320),
-       iR = GR(54268),
- ... (15 more removed lines; see GitHub link above)
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/656.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/656.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719)

#### 1. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L4)

```diff
-   54366: (RR, JR, GR) => {
+   54845: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L6)

```diff
-       b: () => ZR
+       e: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L8)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 4. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L11)

```diff
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 5. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L17)

```diff
-   54260: (RR, JR, GR) => {
+   54747: (rr, Sr, Qr) => {
```

#### 6. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L19)

```diff
-       c: () => ZR
+       e: () => jr
```

#### 7. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L21)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 8. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L24)

```diff
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 9. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L30)

```diff
-   54256: (RR, JR, GR) => {
+   54742: (rr, Sr, Qr) => {
```

#### 10. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L34)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 11. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L37)

```diff
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 12. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L43)

```diff
-   54361: (RR, JR, GR) => {
+   54841: (rr, Sr, Qr) => {
```

#### 13. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L47)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 14. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L50)

```diff
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 15. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L56)

```diff
-   54390: (RR, JR, GR) => {
+   54867: (rr, Sr, Qr) => {
```

#### 16. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L60-L63)

```diff
-     var yR = GR(41387);
-     const tR = "clipPlaneVertex",
-       uR = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bumpVertex",
+       ar = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 17. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L69)

```diff
-   54299: (RR, JR, GR) => {
+   54876: (rr, Sr, Qr) => {
```

#### 18. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L71)

```diff
-       c: () => ZR
+       b: () => jr
```

#### 19. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L73-L76)

```diff
-     var yR = GR(41387);
-     const tR = "clipPlaneVertexDeclaration",
-       uR = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "clipPlaneVertex",
+       ar = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 20. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L82)

```diff
-   54392: (RR, JR, GR) => {
+   54788: (rr, Sr, Qr) => {
```

#### 21. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L84)

```diff
-       d: () => ZR
+       b: () => jr
```

#### 22. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L86-L89)

```diff
-     var yR = GR(41387);
-     const tR = "fogVertex",
-       uR = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "clipPlaneVertexDeclaration",
+       ar = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 23. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L95)

```diff
-   54301: (RR, JR, GR) => {
+   64954: (rr, Sr, Qr) => {
```

#### 24. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L97)

```diff
-       b: () => ZR
+       d: () => jr
```

#### 25. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L99-L102` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L99-L102) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L99-L102)

```diff
-     var yR = GR(41387);
-     const tR = "fogVertexDeclaration",
-       uR = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "harmonicsFunctions",
+       ar = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 26. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L108)

```diff
-   54268: (RR, JR, GR) => {
+   54753: (rr, Sr, Qr) => {
```

#### 27. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L110)

```diff
-       e: () => ZR
+       d: () => jr
```

#### 28. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L112)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 29. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L115)

```diff
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 30. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L121)

```diff
-   54358: (RR, JR, GR) => {
+   54837: (rr, Sr, Qr) => {
```

#### 31. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L125)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 32. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L128)

```diff
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 33. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L134-L147` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L134) · [Before (L134-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L134-L147)

```diff
-   54309: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "lightVxUboDeclaration",
-       uR = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   54329: (RR, JR, GR) => {
+   54829: (rr, Sr, Qr) => {
```

#### 34. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L151-L203` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L138) · [Before (L151-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L151-L203)

```diff
-     var yR = GR(41387);
-     const tR = "logDepthDeclaration",
-       uR = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   54401: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "logDepthVertex",
-       uR = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
- ... (37 more removed lines; see GitHub link above)
+     var Zr = Qr(41743);
```

#### 35. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L206` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L141) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L206)

```diff
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 36. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L212` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L147) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L212)

```diff
-   54320: (RR, JR, GR) => {
+   54808: (rr, Sr, Qr) => {
```

#### 37. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L214` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L149) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L214)

```diff
-       b: () => ZR
+       d: () => jr
```

#### 38. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L216` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L151) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L216)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 39. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L219` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L154) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L219)

```diff
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 40. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L225` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L160) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L225)

```diff
-   54346: (RR, JR, GR) => {
+   54824: (rr, Sr, Qr) => {
```

#### 41. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L227` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L162) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L227)

```diff
-       c: () => ZR
+       d: () => jr
```

#### 42. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L229` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L164) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L229)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 43. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L232` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L167) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L232)

```diff
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 44. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L238` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L173) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L238)

```diff
-   54312: (RR, JR, GR) => {
+   54801: (rr, Sr, Qr) => {
```

#### 45. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L242` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L177) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L242)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 46. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L245-L349` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L180) · [Before (L245-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L245-L349)

```diff
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   54369: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "prePassVertex",
-       uR = "#ifdef PREPASS_DEPTH\nvertexOutputs.vViewPos=(scene.view*worldPos).rgb;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvertexOutputs.vNormViewDepth=((scene.view*worldPos).z-uniforms.cameraInfo.x)/(uniforms.cameraInfo.y-uniforms.cameraInfo.x);\n#endif\n#ifdef PREPASS_L … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
-     const ZR = {
-       name: tR,
- ... (89 more removed lines; see GitHub link above)
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 47. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L355` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L186) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L355)

```diff
-   54332: (RR, JR, GR) => {
+   54721: (rr, Sr, Qr) => {
```

#### 48. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L359-L375` → after: `L190-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L190-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/656.js#L190-L223) · [Before (L359-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/656.js#L359-L375)

```diff
-     var yR = GR(41387);
-     const tR = "vertexPullingDeclaration",
-       uR = "#ifdef USE_VERTEX_PULLING\n#ifdef VERTEX_PULLING_USE_INDEX_BUFFER\nvar<storage,read> indices : array<u32>;\n#endif\nvar<storage,read> position : array<f32>;uniform vp_position_info : vec4f;\n#ifdef NORMAL\nvar<storage,read> normal : array<f32>;uniform vp_normal_info : … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   54338: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "vertexPullingVertex",
-       uR = "#ifdef USE_VERTEX_PULLING\nlet vpVertexIndex: u32=vp_readVertexIndex(vertexInputs.vertexIndex);positionUpdated=vp_readPosition(uniforms.vp_position_info,vpVertexIndex);\n#ifdef NORMAL\nnormalUpdated=vp_readNormal(uniforms.vp_normal_info,vpVertexIndex);\n#endif\n#ifdef … [truncated]
- ... (1 more removed lines; see GitHub link above)
+     var Zr = Qr(41743);
+     const Wr = "sceneUboDeclaration",
+       ar = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   65138: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       geometryVertexShaderWGSL: () => yr
+     });
+     var Zr = Qr(41743),
+       Wr = Qr(54742),
+       ar = Qr(54747),
+ ... (18 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/657.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/657.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1)

#### 1. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L4)

```diff
-   54510: (RR, JR, GR) => {
+   54845: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L6)

```diff
-       d: () => ZR
+       e: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "clipPlaneFragment",
-       uR = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bakedVertexAnimation",
+       ar = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 4. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L17)

```diff
-   54499: (RR, JR, GR) => {
+   54747: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L19)

```diff
-       b: () => ZR
+       e: () => jr
```

#### 6. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L21-L24)

```diff
-     var yR = GR(41387);
-     const tR = "clipPlaneFragmentDeclaration",
-       uR = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bakedVertexAnimationDeclaration",
+       ar = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 7. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L30)

```diff
-   54450: (RR, JR, GR) => {
+   54742: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L32)

```diff
-       b: () => ZR
+       d: () => jr
```

#### 9. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L34-L37)

```diff
-     var yR = GR(41387);
-     const tR = "clusteredLightingFunctions",
-       uR = "struct ClusteredLight {vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\nvLightDirection: vec4f,\nvLightFalloff: vec4f,}\nfn getClusteredLight(lightDataTexture: texture_2d<f32>,index: u32)->ClusteredLight {return ClusteredLight(\ntextureLoad(lightData … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bonesDeclaration",
+       ar = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 10. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L43)

```diff
-   54529: (RR, JR, GR) => {
+   54841: (rr, Sr, Qr) => {
```

#### 11. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L45)

```diff
-       d: () => ZR
+       c: () => jr
```

#### 12. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L47-L50)

```diff
-     var yR = GR(41387);
-     const tR = "depthPrePass",
-       uR = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bonesVertex",
+       ar = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 13. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L56)

```diff
-   54541: (RR, JR, GR) => {
+   54876: (rr, Sr, Qr) => {
```

#### 14. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L60-L63)

```diff
-     var yR = GR(41387);
-     const tR = "fogFragment",
-       uR = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "clipPlaneVertex",
+       ar = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 15. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L69)

```diff
-   54506: (RR, JR, GR) => {
+   54788: (rr, Sr, Qr) => {
```

#### 16. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L71)

```diff
-       e: () => ZR
+       b: () => jr
```

#### 17. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L73-L76)

```diff
-     var yR = GR(41387);
-     const tR = "fogFragmentDeclaration",
-       uR = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "clipPlaneVertexDeclaration",
+       ar = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 18. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L82)

```diff
-   54472: (RR, JR, GR) => {
+   54879: (rr, Sr, Qr) => {
```

#### 19. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L86-L89)

```diff
-     var yR = GR(41387);
-     const tR = "imageProcessingDeclaration",
-       uR = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "fogVertex",
+       ar = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 20. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L95` → after: `L95-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L95-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L95-L108) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L95)

```diff
-   54480: (RR, JR, GR) => {
+   54792: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "fogVertexDeclaration",
+       ar = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54753: (rr, Sr, Qr) => {
```

#### 21. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L99-L102` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L112-L115) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L99-L102)

```diff
-     var yR = GR(41387);
-     const tR = "imageProcessingFunctions",
-       uR = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "instancesDeclaration",
+       ar = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 22. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L108` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L121) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L108)

```diff
-   54434: (RR, JR, GR) => {
+   54837: (rr, Sr, Qr) => {
```

#### 23. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L112-L115` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L125-L128) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L112-L115)

```diff
-     var yR = GR(41387);
-     const tR = "lightUboDeclaration",
-       uR = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "instancesVertex",
+       ar = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 24. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L121` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L134) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L121)

```diff
-   54329: (RR, JR, GR) => {
+   54798: (rr, Sr, Qr) => {
```

#### 25. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L125-L128` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L138-L141) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L125-L128)

```diff
-     var yR = GR(41387);
-     const tR = "logDepthDeclaration",
-       uR = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "lightVxUboDeclaration",
+       ar = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 26. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L134` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L147) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L134)

```diff
-   54538: (RR, JR, GR) => {
+   54814: (rr, Sr, Qr) => {
```

#### 27. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L138-L141` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L151-L154) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L138-L141)

```diff
-     var yR = GR(41387);
-     const tR = "logDepthFragment",
-       uR = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "logDepthDeclaration",
+       ar = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 28. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L147` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L160) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L147)

```diff
-   54441: (RR, JR, GR) => {
+   54895: (rr, Sr, Qr) => {
```

#### 29. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L149` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L162) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L149)

```diff
-       e: () => ZR
+       b: () => jr
```

#### 30. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L151-L154` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L164-L167) · [Before (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L151-L154)

```diff
-     var yR = GR(41387);
-     const tR = "ltcHelperFunctions",
-       uR = "fn LTCUv(N: vec3f,V: vec3f,roughness: f32)->vec2f {var LUTSIZE: f32=64.0;var LUTSCALE: f32=( LUTSIZE-1.0 )/LUTSIZE;var LUTBIAS:f32=0.5/LUTSIZE;var dotNV:f32=saturate( dot( N,V ) );var uv:vec2f=vec2f( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}\nfn … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "logDepthVertex",
+       ar = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 31. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L160` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L173) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L160)

```diff
-   54277: (RR, JR, GR) => {
+   54763: (rr, Sr, Qr) => {
```

#### 32. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L162` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L175) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L162)

```diff
-       d: () => ZR
+       c: () => jr
```

#### 33. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L164` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L177) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L164)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 34. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L167` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L180) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L167)

```diff
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 35. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L173` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L186) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L173)

```diff
-   54546: (RR, JR, GR) => {
+   54723: (rr, Sr, Qr) => {
```

#### 36. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L175` → after: `L188-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L188-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L188-L201) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L175)

```diff
-       b: () => ZR
+       c: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "meshUboDeclaration",
+       ar = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54829: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => jr
```

#### 37. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L177-L180` → after: `L203-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L203-L206) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L177-L180)

```diff
-     var yR = GR(41387);
-     const tR = "meshBlendTagFragmentOutput",
-       uR = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "morphTargetsVertex",
+       ar = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}\n#ifdef USE_VERTEX_PULLING\nvertexID=f32(vpVertexIndex)*uniforms.morphTargetTextureInfo.x;\n#else\nvertexID=f32 … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 38. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L186` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L212) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L186)

```diff
-   54234: (RR, JR, GR) => {
+   54808: (rr, Sr, Qr) => {
```

#### 39. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L190-L193` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L216-L219) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L190-L193)

```diff
-     var yR = GR(41387);
-     const tR = "meshUboDeclaration",
-       uR = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "morphTargetsVertexDeclaration",
+       ar = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute position{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute normal{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute tangent{X} : vec3<f32>;\n#endif\n# … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 40. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L199` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L225) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L199)

```diff
-   54413: (RR, JR, GR) => {
+   54824: (rr, Sr, Qr) => {
```

#### 41. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L203-L206` → after: `L229-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L229-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L229-L232) · [Before (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L203-L206)

```diff
-     var yR = GR(41387);
-     const tR = "objectIdFunctions",
-       uR = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "morphTargetsVertexGlobal",
+       ar = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nvar vertexID : f32;\n#endif\n#endif\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 42. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L212` → after: `L238-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L238-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L238-L251) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L212)

```diff
-   54426: (RR, JR, GR) => {
+   54801: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "morphTargetsVertexGlobalDeclaration",
+       ar = "#ifdef MORPHTARGETS\nuniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;\n#ifdef MORPHTARGETS_TEXTURE \nuniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f3 … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54854: (rr, Sr, Qr) => {
```

#### 43. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L216-L219` → after: `L255-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L255-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L255-L271) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L216-L219)

```diff
-     var yR = GR(41387);
-     const tR = "oitDeclaration",
-       uR = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#define MAX_DEPTH 99999.0\nvar oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;\n#endif\n";
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "prePassVertex",
+       ar = "#ifdef PREPASS_DEPTH\nvertexOutputs.vViewPos=(scene.view*worldPos).rgb;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvertexOutputs.vNormViewDepth=((scene.view*worldPos).z-uniforms.cameraInfo.x)/(uniforms.cameraInfo.y-uniforms.cameraInfo.x);\n#endif\n#ifdef PREPASS_L … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54758: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "prePassVertexDeclaration",
+       ar = "#ifdef PREPASS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELO … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L225` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L277) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L225)

```diff
-   54551: (RR, JR, GR) => {
+   54771: (rr, Sr, Qr) => {
```

#### 45. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L229-L232` → after: `L281-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L281-L284) · [Before (L229-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L229-L232)

```diff
-     var yR = GR(41387);
-     const tR = "oitFragment",
-       uR = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nvar fragDepth: f32=fragmentInputs.position.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nvar halfFloat: u32=pack2x16float( vec2f(fragDepth));var full: vec2f=unpack2x16float(halfFloat);fragDepth=full.x;\n#endif\nvar fragCoord … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "samplerVertexDeclaration",
+       ar = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nvarying v_VARYINGNAME_UV: vec2f;\n#endif\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 46. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L238` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L290) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L238)

```diff
-   54420: (RR, JR, GR) => {
+   54862: (rr, Sr, Qr) => {
```

#### 47. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L242-L246` → after: `L294-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L294-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L294-L297) · [Before (L242-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L242-L246)

```diff
-     var yR = GR(41387);
-     GR(54413);
-     const tR = "prePassDeclaration",
-       uR = "#ifdef PREPASS\n#ifndef PREPASS_CUSTOM_VARYINGS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if (defined(PREPASS … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "samplerVertexImplementation",
+       ar = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nif (uniforms.v_INFONAME_==0.)\n{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\n#ifdef UV2\nelse if (uniforms.v_INFONAME_==1.)\n{vertexOutputs.v_VARYINGNAME_UV= (unifor … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 48. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L252` → after: `L303-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L303-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L303-L316) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L252)

```diff
-   54464: (RR, JR, GR) => {
+   54886: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "shadowsVertex",
+       ar = "#ifdef SHADOWS\n#if defined(SHADOWCSM{X})\n#ifdef SCENE_UBO\nvertexOutputs.vPositionFromCamera{X}=scene.view*worldPos;\n#else\nvertexOutputs.vPositionFromCamera{X}=uniforms.view*worldPos;\n#endif\n#if SHADOWCSMNUM_CASCADES{X}>0\nvertexOutputs.vPositionFromLight{X}_0=u … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54734: (rr, Sr, Qr) => {
```

#### 49. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L256-L259` → after: `L320-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L320-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L320-L323) · [Before (L256-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L256-L259)

```diff
-     var yR = GR(41387);
-     const tR = "reflectionFunction",
-       uR = "fn computeFixedEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,direction: vec3f)->vec3f\n{var lon: f32=atan2(direction.z,direction.x);var lat: f32=acos(direction.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;v … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "uvAttributeDeclaration",
+       ar = "#if defined(UV{X}) && !defined(USE_VERTEX_PULLING)\nattribute uv{X}: vec2f;\n#endif\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 50. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L265` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L329) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L265)

```diff
-   54457: (RR, JR, GR) => {
+   54859: (rr, Sr, Qr) => {
```

#### 51. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L269-L272` → after: `L333-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L333-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L333-L336) · [Before (L269-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L269-L272)

```diff
-     var yR = GR(41387);
-     const tR = "samplerFragmentDeclaration",
-       uR = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "uvVariableDeclaration",
+       ar = "#ifdef MAINUV{X}\n#if !defined(UV{X})\nvar uv{X}: vec2f=vec2f(0.,0.);\n#elif defined(USE_VERTEX_PULLING)\nvar uv{X}: vec2f=uv{X}Updated;\n#else\nvar uv{X}: vec2f=vertexInputs.uv{X};\n#endif\nvertexOutputs.vMainUV{X}=uv{X};\n#endif\n";
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 52. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L278` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L342) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L278)

```diff
-   54453: (RR, JR, GR) => {
+   54889: (rr, Sr, Qr) => {
```

#### 53. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L282-L285` → after: `L346-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L346-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L346-L349) · [Before (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L282-L285)

```diff
-     var yR = GR(41387);
-     const tR = "shadowsFragmentFunctions",
-       uR = "#ifdef SHADOWS\n#ifndef SHADOWFLOAT\nfn unpack(color: vec4f)->f32\n{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}\n#endif\nfn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f3 … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "vertexColorMixing",
+       ar = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertex … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

#### 54. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L291` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L355) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L291)

```diff
-   54484: (RR, JR, GR) => {
+   54817: (rr, Sr, Qr) => {
```

#### 55. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L293` → after: `L357-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L357-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L357-L370) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L293)

```diff
-       b: () => ZR
+       e: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "vertexPullingDeclaration",
+       ar = "#ifdef USE_VERTEX_PULLING\n#ifdef VERTEX_PULLING_USE_INDEX_BUFFER\nvar<storage,read> indices : array<u32>;\n#endif\nvar<storage,read> position : array<f32>;uniform vp_position_info : vec4f;\n#ifdef NORMAL\nvar<storage,read> normal : array<f32>;uniform vp_normal_info : … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54819: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => jr
```

#### 56. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L295-L298` → after: `L372-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L372-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/657.js#L372-L375) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/657.js#L295-L298)

```diff
-     var yR = GR(41387);
-     const tR = "textureRepetitionFunctions",
-       uR = "#if TEXTURE_REPETITION_MODE>0\nfn _texRepHash4(p: vec2f)->vec4f {return fract(sin(vec4f(\n1.0+dot(p,vec2f(37.0,17.0)),\n2.0+dot(p,vec2f(11.0,47.0)),\n3.0+dot(p,vec2f(41.0,29.0)),\n4.0+dot(p,vec2f(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nfn _te … [truncated]
-     yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "vertexPullingVertex",
+       ar = "#ifdef USE_VERTEX_PULLING\nlet vpVertexIndex: u32=vp_readVertexIndex(vertexInputs.vertexIndex);positionUpdated=vp_readPosition(uniforms.vp_position_info,vpVertexIndex);\n#ifdef NORMAL\nnormalUpdated=vp_readNormal(uniforms.vp_normal_info,vpVertexIndex);\n#endif\n#ifdef … [truncated]
+     Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/658.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/658.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43)

#### 1. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/658.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/658.js#L4)

```diff
-   54510: (RR, JR, GR) => {
+   55005: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/658.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/658.js#L6)

```diff
-       d: () => ZR
+       c: () => jr
```
