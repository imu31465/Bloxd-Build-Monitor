# Changed — Bundle Modifications Report (Part 035 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `35 / 99` (**311** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 034](part-034.md) · [Part 036 →](part-036.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/640.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/640.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e)

#### 8. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/640.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/640.js#L35-L38)

```diff
-     var OM = iM(40964);
-     const SM = "bumpFragmentMainFunctions",
-       jM = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "meshUboDeclaration",
+       QU = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/640.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/640.js#L44)

```diff
-   44761: (MM, rM, iM) => {
+   44887: (UU, XU, zU) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/640.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/640.js#L46)

```diff
-       e: () => aM
+       b: () => AU
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/640.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/640.js#L48-L51)

```diff
-     var OM = iM(40964);
-     const SM = "clusteredLightingFunctions",
-       jM = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "sceneUboDeclaration",
+       QU = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L57-L59` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/640.js#L56-L58) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/640.js#L57-L59)

```diff
-   44838: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
+   64557: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       greasedLineVertexShaderWGSL: () => YU
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L61-L77` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/640.js#L60-L69) · [Before (L61-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/640.js#L61-L77)

```diff
-     var OM = iM(40964);
-     const SM = "decalFragment",
-       jM = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44853: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "lightFragment",
-       jM = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
- ... (1 more removed lines; see GitHub link above)
+     var cU = zU(40961),
+       yU = zU(44921),
+       QU = zU(44887),
+       AU = zU(44891),
+       FU = zU(45010);
+     const oU = "greasedLineVertexShader",
+       DU = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
+     cU.b.ShadersStoreWGSL[oU] || (cU.b.ShadersStoreWGSL[oU] = DU);
+     const EU = [yU.d, QU.b, AU.c, FU.b];
+     for (const NU of EU) cU.b.IncludesShadersStoreWGSL[NU.name] || (cU.b.IncludesShadersStoreWGSL[NU.name] = NU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/641.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/641.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/641.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/641.js#L4)

```diff
-   44821: (MM, rM, iM) => {
+   44898: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/641.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/641.js#L6)

```diff
-       d: () => aM
+       b: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/641.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/641.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneFragment",
-       jM = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     zU(44887), zU(44891);
+     const yU = "defaultUboDeclaration",
+       QU = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/641.js#L18) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/641.js#L17)

```diff
-   44809: (MM, rM, iM) => {
+   44910: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L21-L24` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/641.js#L22-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/641.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneFragmentDeclaration",
-       jM = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "helperFunctions",
+       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/641.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/641.js#L30)

```diff
-   44868: (MM, rM, iM) => {
+   44887: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/641.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/641.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "fogFragment",
-       jM = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "sceneUboDeclaration",
+       QU = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L43-L45` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/641.js#L44-L46) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/641.js#L43-L45)

```diff
-   44813: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
+   45076: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       defaultPixelShaderWGSL: () => TU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L47-L50` → after: `L48-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/641.js#L48-L69) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/641.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "fogFragmentDeclaration",
-       jM = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961),
+       yU = zU(44887),
+       QU = zU(44891),
+       AU = zU(44898),
+       FU = zU(45080),
+       oU = zU(45085),
+       DU = zU(45090),
+       EU = zU(44935),
+       YU = zU(44910),
+       NU = zU(45093),
+       IU = zU(45099),
+       pU = zU(45106);
+     const aU = "clusteredLightingCompute",
+       tU = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
+     cU.b.IncludesShadersStoreWGSL[aU] || (cU.b.IncludesShadersStoreWGSL[aU] = tU);
+     const gU = {
+ ... (6 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L54-L69` → after: `L73-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L73-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/641.js#L73-L112) · [Before (L54-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/641.js#L54-L69)

```diff
-     }
-   },
-   45246: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       colorPixelShader: () => LM
-     });
-     var OM = iM(40964),
-       SM = iM(44809),
-       jM = iM(44813),
-       aM = iM(44821),
-       PM = iM(44868);
-     const nM = "colorPixelShader",
-       QM = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
-     OM.e.ShadersStore[nM] || (OM.e.ShadersStore[nM] = QM);
-     const zM = [SM.c, jM.c, aM.d, PM.b];
-     for (const mM of zM) OM.e.IncludesShadersStore[mM.name] || (OM.e.IncludesShadersStore[mM.name] = mM.shader);
+     };
+     var ZU = zU(45113),
+       RU = zU(45115);
+     const PU = "fresnelFunction",
+       WU = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[PU] || (cU.b.IncludesShadersStoreWGSL[PU] = WU);
+     const dU = {
+       name: PU,
+       shader: WU
+     };
+     var LU = zU(45118),
+       eU = zU(45126),
+       CU = zU(45134),
+       wU = zU(45137),
+       qU = zU(45142),
+       OU = zU(45151),
+ ... (24 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/642.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/642.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/642.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/642.js#L4)

```diff
-   45041: (MM, rM, iM) => {
+   44910: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/642.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/642.js#L6)

```diff
-       b: () => aM
+       c: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/642.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/642.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "bumpVertex",
-       jM = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "helperFunctions",
+       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/642.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/642.js#L17)

```diff
-   44948: (MM, rM, iM) => {
+   64295: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/642.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/642.js#L19)

```diff
-       e: () => aM
+       b: () => AU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/642.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/642.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "bumpVertexDeclaration",
-       jM = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "pbrBRDFFunctions",
+       QU = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/642.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/642.js#L30)

```diff
-   44893: (MM, rM, iM) => {
+   44887: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/642.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/642.js#L32)

```diff
-       e: () => aM
+       b: () => AU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L34-L61` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/642.js#L34) · [Before (L34-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/642.js#L34-L61)

```diff
-     var OM = iM(40964);
-     iM(44881), iM(44885);
-     const SM = "defaultUboDeclaration",
-       jM = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44908: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "helperFunctions",
- ... (12 more removed lines; see GitHub link above)
+     var cU = zU(40961);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L64-L120` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/642.js#L37) · [Before (L64-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/642.js#L64-L120)

```diff
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44879: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       defaultVertexShaderWGSL: () => BM
-     });
-     var OM = iM(40964),
-       SM = iM(44881),
-       jM = iM(44885),
-       aM = iM(44893),
-       PM = iM(44901),
-       nM = iM(44908),
- ... (41 more removed lines; see GitHub link above)
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/643.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/643.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/643.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/643.js#L4)

```diff
-   44925: (MM, rM, iM) => {
+   45027: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L8` → after: `L8-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L8-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/643.js#L8-L112) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/643.js#L8)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
+     const yU = "bakedVertexAnimation",
+       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   44919: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "bakedVertexAnimationDeclaration",
+       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
+ ... (89 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L11-L21` → after: `L115-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L115-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/643.js#L115-L125) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/643.js#L11-L21)

```diff
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   45012: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   45010: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+     });
+     var cU = zU(40961);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L24-L30` → after: `L128-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L128-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/643.js#L128-L173) · [Before (L24-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/643.js#L24-L30)

```diff
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44885: (MM, rM, iM) => {
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   45006: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "morphTargetsVertex",
+       QU = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}\n#ifdef USE_VERTEX_PULLING\nvertexID=f32(vpVertexIndex)*uniforms.morphTargetTextureInfo.x;\n#else\nvertexID=f32 … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+ ... (30 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L34-L47` → after: `L177-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L177-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/643.js#L177-L190) · [Before (L34-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/643.js#L34-L47)

```diff
-     var OM = iM(40964);
-     const SM = "meshUboDeclaration",
-       jM = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44881: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
-     });
-     var OM = iM(40964);
+     var cU = zU(40961);
+     const yU = "morphTargetsVertexGlobalDeclaration",
+       QU = "#ifdef MORPHTARGETS\nuniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;\n#ifdef MORPHTARGETS_TEXTURE \nuniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f3 … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   44887: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+     });
+     var cU = zU(40961);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L50-L56` → after: `L193-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L193-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/643.js#L193-L199) · [Before (L50-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/643.js#L50-L56)

```diff
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   64502: (MM, rM, iM) => {
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   64508: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L58-L69` → after: `L201-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L201-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/643.js#L201-L223) · [Before (L58-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/643.js#L58-L69)

```diff
-       greasedLineVertexShaderWGSL: () => LM
-     });
-     var OM = iM(40964),
-       SM = iM(44925),
-       jM = iM(44881),
-       aM = iM(44885),
-       PM = iM(45012);
-     const nM = "greasedLineVertexShader",
-       QM = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
-     OM.e.ShadersStoreWGSL[nM] || (OM.e.ShadersStoreWGSL[nM] = QM);
-     const zM = [SM.c, jM.c, aM.e, PM.b];
-     for (const mM of zM) OM.e.IncludesShadersStoreWGSL[mM.name] || (OM.e.IncludesShadersStoreWGSL[mM.name] = mM.shader);
+       geometryVertexShaderWGSL: () => RU
+     });
+     var cU = zU(40961),
+       yU = zU(44917),
+       QU = zU(44919),
+       AU = zU(44975),
+       FU = zU(44977),
+       oU = zU(44921),
+       DU = zU(44887),
+       EU = zU(44954),
+       YU = zU(64304),
+       NU = zU(45004),
+       IU = zU(45006),
+       pU = zU(45010),
+       aU = zU(45019),
+       tU = zU(45027),
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/644.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/644.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69)

#### 1. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L4` → after: `L4-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L4-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/644.js#L4-L238) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/644.js#L4)

```diff
-   44893: (MM, rM, iM) => {
+   45027: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "bakedVertexAnimation",
+       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   44919: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => AU
+ ... (219 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L8-L12` → after: `L242-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L242-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/644.js#L242-L245) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/644.js#L8-L12)

```diff
-     var OM = iM(40964);
-     iM(44881), iM(44885);
-     const SM = "defaultUboDeclaration",
-       jM = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "morphTargetsVertexGlobalDeclaration",
+       QU = "#ifdef MORPHTARGETS\nuniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;\n#ifdef MORPHTARGETS_TEXTURE \nuniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f3 … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L18` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/644.js#L251) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/644.js#L18)

```diff
-   44908: (MM, rM, iM) => {
+   45032: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L22-L25` → after: `L255-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L255-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/644.js#L255-L271) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/644.js#L22-L25)

```diff
-     var OM = iM(40964);
-     const SM = "helperFunctions",
-       jM = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "prePassVertex",
+       QU = "#ifdef PREPASS_DEPTH\nvertexOutputs.vViewPos=(scene.view*worldPos).rgb;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvertexOutputs.vNormViewDepth=((scene.view*worldPos).z-uniforms.cameraInfo.x)/(uniforms.cameraInfo.y-uniforms.cameraInfo.x);\n#endif\n#ifdef PREPASS_L … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   44926: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "prePassVertexDeclaration",
+       QU = "#ifdef PREPASS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELO … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L31` → after: `L277-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L277-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/644.js#L277-L342) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/644.js#L31)

```diff
-   44881: (MM, rM, iM) => {
+   44939: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "samplerVertexDeclaration",
+       QU = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nvarying v_VARYINGNAME_UV: vec2f;\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   45041: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => AU
+ ... (50 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L35-L112` → after: `L346-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L346-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/644.js#L346-L375) · [Before (L35-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/644.js#L35-L112)

```diff
-     var OM = iM(40964);
-     const SM = "sceneUboDeclaration",
-       jM = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   45078: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       defaultPixelShaderWGSL: () => VM
-     });
-     var OM = iM(40964),
-       SM = iM(44881),
-       jM = iM(44885),
- ... (62 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "vertexColorMixing",
+       QU = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertex … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   44992: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "vertexPullingDeclaration",
+       QU = "#ifdef USE_VERTEX_PULLING\n#ifdef VERTEX_PULLING_USE_INDEX_BUFFER\nvar<storage,read> indices : array<u32>;\n#endif\nvar<storage,read> position : array<f32>;uniform vp_position_info : vec4f;\n#ifdef NORMAL\nvar<storage,read> normal : array<f32>;uniform vp_normal_info : … [truncated]
+ ... (14 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/645.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/645.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85)

#### 1. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L4` → after: `L4-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/645.js#L4-L43) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/645.js#L4)

```diff
-   44908: (MM, rM, iM) => {
+   45165: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "clipPlaneFragment",
+       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   45154: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => AU
+ ... (24 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L8-L11` → after: `L47-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L47-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/645.js#L47-L76) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/645.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "helperFunctions",
-       jM = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "depthPrePass",
+       QU = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   45205: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "fogFragment",
+       QU = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+ ... (14 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L17` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/645.js#L82) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/645.js#L17)

```diff
-   64282: (MM, rM, iM) => {
+   45126: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L21-L24` → after: `L86-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L86-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/645.js#L86-L219) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/645.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "pbrBRDFFunctions",
-       jM = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "imageProcessingDeclaration",
+       QU = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   45134: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "imageProcessingFunctions",
+       QU = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
+ ... (118 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L30` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/645.js#L225) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/645.js#L30)

```diff
-   44881: (MM, rM, iM) => {
+   45216: (UU, XU, zU) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L34-L37` → after: `L229-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L229-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/645.js#L229-L298) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/645.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "sceneUboDeclaration",
-       jM = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "oitFragment",
+       QU = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nvar fragDepth: f32=fragmentInputs.position.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nvar halfFloat: u32=pack2x16float( vec2f(fragDepth));var full: vec2f=unpack2x16float(halfFloat);fragDepth=full.x;\n#endif\nvar fragCoord … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   45085: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+     });
+     var cU = zU(40961);
+     zU(45080);
+     const yU = "prePassDeclaration",
+ ... (54 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/646.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/646.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L4)

```diff
-   45023: (MM, rM, iM) => {
+   45165: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L6)

```diff
-       e: () => aM
+       c: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "bakedVertexAnimation",
-       jM = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneFragment",
+       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L17)

```diff
-   44920: (MM, rM, iM) => {
+   45154: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L19)

```diff
-       c: () => aM
+       d: () => AU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "bakedVertexAnimationDeclaration",
-       jM = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneFragmentDeclaration",
+       QU = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L30)

```diff
-   44917: (MM, rM, iM) => {
+   45205: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L32)

```diff
-       d: () => aM
+       b: () => AU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "bonesDeclaration",
-       jM = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogFragment",
+       QU = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L43)

```diff
-   45018: (MM, rM, iM) => {
+   45158: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L45)

```diff
-       d: () => aM
+       e: () => AU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "bonesVertex",
-       jM = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogFragmentDeclaration",
+       QU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L56)

```diff
-   45041: (MM, rM, iM) => {
+   44910: (UU, XU, zU) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L58)

```diff
-       b: () => aM
+       c: () => AU
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L60-L63)

```diff
-     var OM = iM(40964);
-     const SM = "bumpVertex",
-       jM = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "helperFunctions",
+       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L69)

```diff
-   45050: (MM, rM, iM) => {
+   45126: (UU, XU, zU) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L71)

```diff
-       c: () => aM
+       d: () => AU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L73-L76)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertex",
-       jM = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "imageProcessingDeclaration",
+       QU = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L82)

```diff
-   44953: (MM, rM, iM) => {
+   45134: (UU, XU, zU) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L84)

```diff
-       d: () => aM
+       e: () => AU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L86-L89)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertexDeclaration",
-       jM = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "imageProcessingFunctions",
+       QU = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L95)

```diff
-   64284: (MM, rM, iM) => {
+   44983: (UU, XU, zU) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L97)

```diff
-       e: () => aM
+       c: () => AU
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L99-L102` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L99-L102) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L99-L102)

```diff
-     var OM = iM(40964);
-     const SM = "harmonicsFunctions",
-       jM = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "logDepthDeclaration",
+       QU = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L108)

```diff
-   44925: (MM, rM, iM) => {
+   45201: (UU, XU, zU) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L110)

```diff
-       c: () => aM
+       b: () => AU
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L112-L115` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L112-L115) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L112-L115)

```diff
-     var OM = iM(40964);
-     const SM = "instancesDeclaration",
-       jM = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "logDepthFragment",
+       QU = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L121)

```diff
-   45012: (MM, rM, iM) => {
+   45212: (UU, XU, zU) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L123)

```diff
-       b: () => aM
+       e: () => AU
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L125-L128` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L125-L128) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L125-L128)

```diff
-     var OM = iM(40964);
-     const SM = "instancesVertex",
-       jM = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "meshBlendTagFragmentOutput",
+       QU = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L134)

```diff
-   45008: (MM, rM, iM) => {
+   45080: (UU, XU, zU) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L138-L141` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L138-L141) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L138-L141)

```diff
-     var OM = iM(40964);
-     const SM = "morphTargetsVertex",
-       jM = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}\n#ifdef USE_VERTEX_PULLING\nvertexID=f32(vpVertexIndex)*uniforms.morphTargetTextureInfo.x;\n#else\nvertexID=f32 … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "objectIdFunctions",
+       QU = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L147)

```diff
-   44981: (MM, rM, iM) => {
+   45085: (UU, XU, zU) => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L151-L154` → after: `L151-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L151-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L151-L155) · [Before (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L151-L154)

```diff
-     var OM = iM(40964);
-     const SM = "morphTargetsVertexDeclaration",
-       jM = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute position{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute normal{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute tangent{X} : vec3<f32>;\n#endif\n# … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     zU(45080);
+     const yU = "prePassDeclaration",
+       QU = "#ifdef PREPASS\n#ifndef PREPASS_CUSTOM_VARYINGS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if (defined(PREPASS … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L160-L162` → after: `L161-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L161-L163) · [Before (L160-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L160-L162)

```diff
-   45003: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
+   63987: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       particlesPixelShaderWGSL: () => RU
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L164-L167` → after: `L165-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L165-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L165-L180) · [Before (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L164-L167)

```diff
-     var OM = iM(40964);
-     const SM = "morphTargetsVertexGlobal",
-       jM = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nvar vertexID : f32;\n#endif\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961),
+       yU = zU(45080),
+       QU = zU(45085),
+       AU = zU(45154),
+       FU = zU(45126),
+       oU = zU(44983),
+       DU = zU(44910),
+       EU = zU(45134),
+       YU = zU(45158),
+       NU = zU(45165),
+       IU = zU(45201),
+       pU = zU(45205),
+       aU = zU(45212);
+     const tU = "geometryRenderingFragment",
+       gU = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nlet geometryCoverage=select(0.0,1.0,geometryColor.a>0.4);var fragData: array<vec4f,SCENE_MRT_COUNT>;\n#ifdef PREPASS_COLOR\nfragData[PREPASS_COLOR_INDEX]=geometryColor;\n#endif\n#ifdef PREPASS_POSITION\nfragData[PREPASS_POSITION_ … [truncated]
+     cU.b.IncludesShadersStoreWGSL[tU] || (cU.b.IncludesShadersStoreWGSL[tU] = gU);
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L169-L223` → after: `L182-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L182-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/646.js#L182-L189) · [Before (L169-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/646.js#L169-L223)

```diff
-       name: SM,
-       shader: jM
-     }
-   },
-   44974: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "morphTargetsVertexGlobalDeclaration",
-       jM = "#ifdef MORPHTARGETS\nuniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;\n#ifdef MORPHTARGETS_TEXTURE \nuniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f3 … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
- ... (39 more removed lines; see GitHub link above)
+         name: tU,
+         shader: gU
+       },
+       GU = "particlesPixelShader",
+       BU = "varying vUV: vec2f;varying vColor: vec4f;uniform textureMask: vec4f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;\n#ifdef PREPASS\nuniform geometryZeroAlphaDiscard: f32;\n#ifdef PREPASS_POSITION\nvarying vGeometryPositionW: vec3f;\n#endif\n#i … [truncated]
+     cU.b.ShadersStoreWGSL[GU] || (cU.b.ShadersStoreWGSL[GU] = BU);
+     const ZU = [yU.b, QU.b, AU.d, FU.d, oU.c, DU.c, EU.e, YU.e, NU.c, IU.b, pU.b, aU.e, kU];
+     for (const PU of ZU) cU.b.IncludesShadersStoreWGSL[PU.name] || (cU.b.IncludesShadersStoreWGSL[PU.name] = PU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/647.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/647.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608)

#### 1. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L4-L17` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L4) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L4-L17)

```diff
-   45023: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "bakedVertexAnimation",
-       jM = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44920: (MM, rM, iM) => {
+   45165: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L21-L37` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L8-L11) · [Before (L21-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L21-L37)

```diff
-     var OM = iM(40964);
-     const SM = "bakedVertexAnimationDeclaration",
-       jM = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44917: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "bonesDeclaration",
-       jM = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
- ... (1 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "clipPlaneFragment",
+       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L43` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L17) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L43)

```diff
-   45018: (MM, rM, iM) => {
+   45154: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L47-L50` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L21-L24) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "bonesVertex",
-       jM = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneFragmentDeclaration",
+       QU = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L56` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L30) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L56)

```diff
-   45050: (MM, rM, iM) => {
+   45205: (UU, XU, zU) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L58-L71` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L32) · [Before (L58-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L58-L71)

```diff
-       c: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "clipPlaneVertex",
-       jM = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44953: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
+       b: () => AU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L73-L76` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L34-L37) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L73-L76)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertexDeclaration",
-       jM = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogFragment",
+       QU = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L82` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L43) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L82)

```diff
-   45056: (MM, rM, iM) => {
+   45158: (UU, XU, zU) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L86-L89` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L47-L50) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L86-L89)

```diff
-     var OM = iM(40964);
-     const SM = "fogVertex",
-       jM = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogFragmentDeclaration",
+       QU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L95-L108` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L56) · [Before (L95-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L95-L108)

```diff
-   44958: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "fogVertexDeclaration",
-       jM = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44925: (MM, rM, iM) => {
+   44910: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L112-L141` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L60-L63) · [Before (L112-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L112-L141)

```diff
-     var OM = iM(40964);
-     const SM = "instancesDeclaration",
-       jM = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   45012: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "instancesVertex",
-       jM = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
- ... (14 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "helperFunctions",
+       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L147` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L69) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L147)

```diff
-   44987: (MM, rM, iM) => {
+   44983: (UU, XU, zU) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L151` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L73) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L151)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L154-L167` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L76) · [Before (L154-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L154-L167)

```diff
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   45070: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "logDepthVertex",
-       jM = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L173-L199` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L82) · [Before (L173-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L173-L199)

```diff
-   44935: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "mainUVVaryingDeclaration",
-       jM = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44885: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
- ... (11 more removed lines; see GitHub link above)
+   45201: (UU, XU, zU) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L203-L206` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L86-L89) · [Before (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L203-L206)

```diff
-     var OM = iM(40964);
-     const SM = "morphTargetsVertex",
-       jM = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}\n#ifdef USE_VERTEX_PULLING\nvertexID=f32(vpVertexIndex)*uniforms.morphTargetTextureInfo.x;\n#else\nvertexID=f32 … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "logDepthFragment",
+       QU = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L212-L214` → after: `L95-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L95-L97) · [Before (L212-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L212-L214)

```diff
-   44981: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
+   64008: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       skyPixelShaderWGSL: () => gU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L216-L219` → after: `L99-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L99-L109) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L216-L219)

```diff
-     var OM = iM(40964);
-     const SM = "morphTargetsVertexDeclaration",
-       jM = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute position{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute normal{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute tangent{X} : vec3<f32>;\n#endif\n# … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961),
+       yU = zU(45154),
+       QU = zU(44983),
+       AU = zU(45158),
+       FU = zU(44910),
+       oU = zU(45165),
+       DU = zU(45201),
+       EU = zU(45205);
+     const YU = "imageProcessingCompatibility",
+       NU = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[YU] || (cU.b.IncludesShadersStoreWGSL[YU] = NU);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L221-L375` → after: `L111-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L111-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/647.js#L111-L118) · [Before (L221-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/647.js#L221-L375)

```diff
-       name: SM,
-       shader: jM
-     }
-   },
-   45003: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "morphTargetsVertexGlobal",
-       jM = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nvar vertexID : f32;\n#endif\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
- ... (139 more removed lines; see GitHub link above)
+         name: YU,
+         shader: NU
+       },
+       pU = "skyPixelShader",
+       aU = "varying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform cameraPosition: vec3f;uniform cameraOffset: vec3f;uniform up: vec3f;uniform luminance: f32;uniform turbidity: f32;uniform rayleigh: f32;unif … [truncated]
+     cU.b.ShadersStoreWGSL[pU] || (cU.b.ShadersStoreWGSL[pU] = aU);
+     const tU = [yU.d, QU.c, AU.e, FU.c, oU.c, DU.b, EU.b, IU];
+     for (const kU of tU) cU.b.IncludesShadersStoreWGSL[kU.name] || (cU.b.IncludesShadersStoreWGSL[kU.name] = kU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/648.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/648.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873)

#### 1. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/648.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/648.js#L4)

```diff
-   45185: (MM, rM, iM) => {
+   44910: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/648.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/648.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneFragment",
-       jM = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "helperFunctions",
+       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L17-L293` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/648.js#L17-L19) · [Before (L17-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/648.js#L17-L293)

```diff
-   45168: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "clipPlaneFragmentDeclaration",
-       jM = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   45116: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
- ... (261 more removed lines; see GitHub link above)
+   64051: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       rgbdDecodePixelShaderWGSL: () => oU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L295-L298` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/648.js#L21-L27) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/648.js#L295-L298)

```diff
-     var OM = iM(40964);
-     const SM = "textureRepetitionFunctions",
-       jM = "#if TEXTURE_REPETITION_MODE>0\nfn _texRepHash4(p: vec2f)->vec4f {return fract(sin(vec4f(\n1.0+dot(p,vec2f(37.0,17.0)),\n2.0+dot(p,vec2f(11.0,47.0)),\n3.0+dot(p,vec2f(41.0,29.0)),\n4.0+dot(p,vec2f(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nfn _te … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961),
+       yU = zU(44910);
+     const QU = "rgbdDecodePixelShader",
+       AU = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
+     cU.b.ShadersStoreWGSL[QU] || (cU.b.ShadersStoreWGSL[QU] = AU);
+     const FU = [yU.c];
+     for (const DU of FU) cU.b.IncludesShadersStoreWGSL[DU.name] || (cU.b.IncludesShadersStoreWGSL[DU.name] = DU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/649.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/649.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/649.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/649.js#L4)

```diff
-   45185: (MM, rM, iM) => {
+   44910: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/649.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/649.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneFragment",
-       jM = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "helperFunctions",
+       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/649.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/649.js#L17-L19)

```diff
-   45168: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
+   64078: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       rgbdEncodePixelShaderWGSL: () => oU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L21-L189` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/649.js#L21-L27) · [Before (L21-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/649.js#L21-L189)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneFragmentDeclaration",
-       jM = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   45208: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "fogFragment",
-       jM = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
- ... (153 more removed lines; see GitHub link above)
+     var cU = zU(40961),
+       yU = zU(44910);
+     const QU = "rgbdEncodePixelShader",
+       AU = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
+     cU.b.ShadersStoreWGSL[QU] || (cU.b.ShadersStoreWGSL[QU] = AU);
+     const FU = [yU.c];
+     for (const DU of FU) cU.b.IncludesShadersStoreWGSL[DU.name] || (cU.b.IncludesShadersStoreWGSL[DU.name] = DU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/650.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/650.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L4)

```diff
-   45185: (MM, rM, iM) => {
+   45027: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneFragment",
-       jM = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bakedVertexAnimation",
+       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L17)

```diff
-   45168: (MM, rM, iM) => {
+   44919: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L19)

```diff
-       c: () => aM
+       e: () => AU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneFragmentDeclaration",
-       jM = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bakedVertexAnimationDeclaration",
+       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L30)

```diff
-   45208: (MM, rM, iM) => {
+   44917: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "fogFragment",
-       jM = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bonesDeclaration",
+       QU = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L43)

```diff
-   45177: (MM, rM, iM) => {
+   45019: (UU, XU, zU) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "fogFragmentDeclaration",
-       jM = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bonesVertex",
+       QU = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L56)

```diff
-   44908: (MM, rM, iM) => {
+   45046: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L58)

```diff
-       d: () => aM
+       e: () => AU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L60-L63)

```diff
-     var OM = iM(40964);
-     const SM = "helperFunctions",
-       jM = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneVertex",
+       QU = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L69)

```diff
-   44987: (MM, rM, iM) => {
+   44954: (UU, XU, zU) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L71)

```diff
-       c: () => aM
+       d: () => AU
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L73-L76)

```diff
-     var OM = iM(40964);
-     const SM = "logDepthDeclaration",
-       jM = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneVertexDeclaration",
+       QU = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L82)

```diff
-   45205: (MM, rM, iM) => {
+   45052: (UU, XU, zU) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L84)

```diff
-       c: () => aM
+       b: () => AU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L86-L89)

```diff
-     var OM = iM(40964);
-     const SM = "logDepthFragment",
-       jM = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogVertex",
+       QU = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L95` → after: `L95-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L95-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L95-L147) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L95)

```diff
-   63971: (MM, rM, iM) => {
+   44962: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "fogVertexDeclaration",
+       QU = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   44921: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => AU
+ ... (37 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L97` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L149) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L97)

```diff
-       skyPixelShaderWGSL: () => yM
+       colorVertexShaderWGSL: () => kU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L99-L118` → after: `L151-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/650.js#L151-L167) · [Before (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/650.js#L99-L118)

```diff
-     var OM = iM(40964),
-       SM = iM(45168),
-       jM = iM(44987),
-       aM = iM(45177),
-       PM = iM(44908),
-       nM = iM(45185),
-       QM = iM(45205),
-       zM = iM(45208);
-     const LM = "imageProcessingCompatibility",
-       mM = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[LM] || (OM.e.IncludesShadersStoreWGSL[LM] = mM);
-     const HM = {
-         name: LM,
-         shader: mM
-       },
-       hM = "skyPixelShader",
- ... (4 more removed lines; see GitHub link above)
+     var cU = zU(40961),
+       yU = zU(44917),
+       QU = zU(44919),
+       AU = zU(44954),
+       FU = zU(44962),
+       oU = zU(44921),
+       DU = zU(45010),
+       EU = zU(45019),
+       YU = zU(45027),
+       NU = zU(45046),
+       IU = zU(45052),
+       pU = zU(45063);
+     const aU = "colorVertexShader",
+       tU = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform view: mat4x4f;\n#endif\n#i … [truncated]
+     cU.b.ShadersStoreWGSL[aU] || (cU.b.ShadersStoreWGSL[aU] = tU);
+     const gU = [yU.b, QU.e, AU.d, FU.c, oU.d, DU.b, EU.c, YU.c, NU.e, IU.b, pU.c];
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/651.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/651.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/651.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/651.js#L4)

```diff
-   44908: (MM, rM, iM) => {
+   45043: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/651.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/651.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "helperFunctions",
-       jM = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bumpVertex",
+       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L17` → after: `L17-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L17-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/651.js#L17-L57) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/651.js#L17)

```diff
-   64026: (MM, rM, iM) => {
+   44945: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "bumpVertexDeclaration",
+       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   64304: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+ ... (25 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L19` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/651.js#L59) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/651.js#L19)

```diff
-       rgbdDecodePixelShaderWGSL: () => nM
+       pbrVertexShaderWGSL: () => mU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L21-L27` → after: `L61-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L61-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/651.js#L61-L102) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/651.js#L21-L27)

```diff
-     var OM = iM(40964),
-       SM = iM(44908);
-     const jM = "rgbdDecodePixelShader",
-       aM = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
-     OM.e.ShadersStoreWGSL[jM] || (OM.e.ShadersStoreWGSL[jM] = aM);
-     const PM = [SM.d];
-     for (const QM of PM) OM.e.IncludesShadersStoreWGSL[QM.name] || (OM.e.IncludesShadersStoreWGSL[QM.name] = QM.shader);
+     var cU = zU(40961),
+       yU = zU(44887),
+       QU = zU(44891),
+       AU = zU(64293),
+       FU = zU(44904),
+       oU = zU(44935),
+       DU = zU(44910),
+       EU = zU(64295),
+       YU = zU(44917),
+       NU = zU(44919),
+       IU = zU(44921),
+       pU = zU(44926),
+       aU = zU(44939),
+       tU = zU(64304),
+       gU = zU(44945),
+       kU = zU(44954),
+ ... (26 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/652.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/652.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/652.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/652.js#L4)

```diff
-   44908: (MM, rM, iM) => {
+   45046: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/652.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/652.js#L6)

```diff
-       d: () => aM
+       e: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/652.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/652.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "helperFunctions",
-       jM = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneVertex",
+       QU = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L17` → after: `L17-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L17-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/652.js#L17-L82) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/652.js#L17)

```diff
-   64042: (MM, rM, iM) => {
+   44954: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "clipPlaneVertexDeclaration",
+       QU = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   45052: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+ ... (50 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L19` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/652.js#L84) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/652.js#L19)

```diff
-       rgbdEncodePixelShaderWGSL: () => nM
+       particlesVertexShaderWGSL: () => IU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L21-L27` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/652.js#L86-L97) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/652.js#L21-L27)

```diff
-     var OM = iM(40964),
-       SM = iM(44908);
-     const jM = "rgbdEncodePixelShader",
-       aM = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
-     OM.e.ShadersStoreWGSL[jM] || (OM.e.ShadersStoreWGSL[jM] = aM);
-     const PM = [SM.d];
-     for (const QM of PM) OM.e.IncludesShadersStoreWGSL[QM.name] || (OM.e.IncludesShadersStoreWGSL[QM.name] = QM.shader);
+     var cU = zU(40961),
+       yU = zU(44954),
+       QU = zU(44962),
+       AU = zU(44983),
+       FU = zU(45046),
+       oU = zU(45052),
+       DU = zU(45072);
+     const EU = "particlesVertexShader",
+       YU = "attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;\n#ifdef ANIMATESHEET\nattribute cellIndex: f32;\n#endif\n#ifndef BILLBOARD\nattribute direction: vec3f;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute direction: vec3f;\n#endif … [truncated]
+     cU.b.ShadersStoreWGSL[EU] || (cU.b.ShadersStoreWGSL[EU] = YU);
+     const NU = [yU.d, QU.c, AU.c, FU.e, oU.b, DU.d];
+     for (const pU of NU) cU.b.IncludesShadersStoreWGSL[pU.name] || (cU.b.IncludesShadersStoreWGSL[pU.name] = pU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/653.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/653.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74)

#### 1. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L4)

```diff
-   45023: (MM, rM, iM) => {
+   45046: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "bakedVertexAnimation",
-       jM = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneVertex",
+       QU = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L17)

```diff
-   44920: (MM, rM, iM) => {
+   44954: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L19)

```diff
-       c: () => aM
+       d: () => AU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "bakedVertexAnimationDeclaration",
-       jM = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneVertexDeclaration",
+       QU = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L30)

```diff
-   44917: (MM, rM, iM) => {
+   45052: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L32)

```diff
-       d: () => aM
+       b: () => AU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "bonesDeclaration",
-       jM = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogVertex",
+       QU = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L43)

```diff
-   45018: (MM, rM, iM) => {
+   44962: (UU, XU, zU) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L45)

```diff
-       d: () => aM
+       c: () => AU
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "bonesVertex",
-       jM = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogVertexDeclaration",
+       QU = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L56)

```diff
-   45050: (MM, rM, iM) => {
+   44983: (UU, XU, zU) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L60-L63)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertex",
-       jM = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "logDepthDeclaration",
+       QU = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L69)

```diff
-   44953: (MM, rM, iM) => {
+   45072: (UU, XU, zU) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L73-L76)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertexDeclaration",
-       jM = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "logDepthVertex",
+       QU = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L82-L84` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L82-L84) · [Before (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L82-L84)

```diff
-   45056: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
+   64006: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       skyVertexShaderWGSL: () => IU
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L86-L167` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/653.js#L86-L97) · [Before (L86-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/653.js#L86-L167)

```diff
-     var OM = iM(40964);
-     const SM = "fogVertex",
-       jM = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44958: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "fogVertexDeclaration",
-       jM = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
- ... (66 more removed lines; see GitHub link above)
+     var cU = zU(40961),
+       yU = zU(44983),
+       QU = zU(44954),
+       AU = zU(44962),
+       FU = zU(45046),
+       oU = zU(45072),
+       DU = zU(45052);
+     const EU = "skyVertexShader",
+       YU = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying v … [truncated]
+     cU.b.ShadersStoreWGSL[EU] || (cU.b.ShadersStoreWGSL[EU] = YU);
+     const NU = [yU.c, QU.d, AU.c, FU.e, oU.d, DU.b];
+     for (const pU of NU) cU.b.IncludesShadersStoreWGSL[pU.name] || (cU.b.IncludesShadersStoreWGSL[pU.name] = pU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/654.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/654.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L4` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/654.js#L4-L17) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/654.js#L4)

```diff
-   45041: (MM, rM, iM) => {
+   45173: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "bumpFragment",
+       QU = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   45151: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L8-L11` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/654.js#L21-L25) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/654.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "bumpVertex",
-       jM = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     zU(45115);
+     const yU = "bumpFragmentFunctions",
+       QU = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L17` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/654.js#L31) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/654.js#L17)

```diff
-   44948: (MM, rM, iM) => {
+   45142: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L21-L24` → after: `L35-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L35-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/654.js#L35-L103) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/654.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "bumpVertexDeclaration",
-       jM = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bumpFragmentMainFunctions",
+       QU = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   45165: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "clipPlaneFragment",
+       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+ ... (53 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L30` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/654.js#L109) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/654.js#L30)

```diff
-   64284: (MM, rM, iM) => {
+   64491: (UU, XU, zU) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L34-L37` → after: `L113-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L113-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/654.js#L113-L129) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/654.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "harmonicsFunctions",
-       jM = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "openpbrIblFunctions",
+       QU = "#ifdef REFLECTION\nfn sampleIrradiance(\nsurfaceNormal: vec3f\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,vEnvironmentIrradianceSH: vec3f\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defi … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   64503: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "openpbrSubsurfaceLayerData",
+       QU = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L43` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/654.js#L135) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/654.js#L43)

```diff
-   64280: (MM, rM, iM) => {
+   64498: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L47-L51` → after: `L139-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L139-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/654.js#L139-L194) · [Before (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/654.js#L47-L51)

```diff
-     var OM = iM(40964);
-     iM(44881), iM(44885);
-     const SM = "pbrUboDeclaration",
-       jM = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "openpbrTransmissionLayerData",
+       QU = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   64329: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "pbrFragmentReflectionDeclaration",
+       QU = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\nvar reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;\n#ifdef LODBASEDMICROSFURACE\n#else\nvar reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamp … [truncated]
+ ... (40 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L57` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/654.js#L200) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/654.js#L57)

```diff
-   64276: (MM, rM, iM) => {
+   64516: (UU, XU, zU) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L59-L102` → after: `L202-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L202-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/654.js#L202-L227) · [Before (L59-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/654.js#L59-L102)

```diff
-       pbrVertexShaderWGSL: () => FM
-     });
-     var OM = iM(40964),
-       SM = iM(44881),
-       jM = iM(44885),
-       aM = iM(64280),
-       PM = iM(44901),
-       nM = iM(44935),
-       QM = iM(44908),
-       zM = iM(64282),
-       LM = iM(44917),
-       mM = iM(44920),
-       HM = iM(44925),
-       hM = iM(44928),
-       JM = iM(44944),
-       dM = iM(64284),
- ... (28 more removed lines; see GitHub link above)
+       geometryPixelShaderWGSL: () => dU
+     });
+     var cU = zU(40961),
+       yU = zU(45080),
+       QU = zU(45154),
+       AU = zU(45142),
+       FU = zU(45115),
+       oU = zU(45151),
+       DU = zU(44910),
+       EU = zU(64329),
+       YU = zU(44887),
+       NU = zU(64295),
+       IU = zU(64479),
+       pU = zU(64387),
+       aU = zU(45118),
+       tU = zU(64482),
+ ... (10 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/655.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/655.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/655.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/655.js#L4)

```diff
-   45050: (MM, rM, iM) => {
+   45173: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/655.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/655.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertex",
-       jM = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bumpFragment",
+       QU = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/655.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/655.js#L17)

```diff
-   44953: (MM, rM, iM) => {
+   45151: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/655.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/655.js#L19)

```diff
-       d: () => aM
+       b: () => AU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/655.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/655.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertexDeclaration",
-       jM = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     zU(45115);
+     const yU = "bumpFragmentFunctions",
+       QU = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/655.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/655.js#L30)

```diff
-   45056: (MM, rM, iM) => {
+   45142: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/655.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/655.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "fogVertex",
-       jM = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bumpFragmentMainFunctions",
+       QU = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/655.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/655.js#L43)

```diff
-   44958: (MM, rM, iM) => {
+   45180: (UU, XU, zU) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L45` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/655.js#L46) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/655.js#L45)

```diff
-       b: () => aM
+       e: () => AU
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/655.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/655.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "fogVertexDeclaration",
-       jM = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "decalFragment",
+       QU = "#ifdef DECAL\nvar decalTempColor=decalColor.rgb;var decalTempAlpha=decalColor.a;\n#ifdef GAMMADECAL\ndecalTempColor=toLinearSpaceVec3(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalTempAlpha=decalColor.a*decalColor.a;\n#endif\nsurfaceAlbedo=mix(surfaceAlbedo … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L56` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/655.js#L57) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/655.js#L56)

```diff
-   44987: (MM, rM, iM) => {
+   45195: (UU, XU, zU) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L60-L97` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/655.js#L61-L64) · [Before (L60-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/655.js#L60-L97)

```diff
-     var OM = iM(40964);
-     const SM = "logDepthDeclaration",
-       jM = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   45070: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "logDepthVertex",
-       jM = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
- ... (22 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "lightFragment",
+       QU = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvar diffuse{X}: vec4f=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X})\n{let slic … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/656.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/656.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/656.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/656.js#L4)

```diff
-   45050: (MM, rM, iM) => {
+   45165: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/656.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/656.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertex",
-       jM = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneFragment",
+       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/656.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/656.js#L17)

```diff
-   44953: (MM, rM, iM) => {
+   45154: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/656.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/656.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertexDeclaration",
-       jM = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneFragmentDeclaration",
+       QU = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/656.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/656.js#L30)

```diff
-   45056: (MM, rM, iM) => {
+   45205: (UU, XU, zU) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/656.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/656.js#L32)

```diff
-       e: () => aM
+       b: () => AU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/656.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/656.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "fogVertex",
-       jM = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogFragment",
+       QU = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/656.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/656.js#L43)

```diff
-   44958: (MM, rM, iM) => {
+   45158: (UU, XU, zU) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/656.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/656.js#L45)

```diff
-       b: () => aM
+       e: () => AU
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/656.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/656.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "fogVertexDeclaration",
-       jM = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogFragmentDeclaration",
+       QU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/656.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/656.js#L56-L58)

```diff
-   44987: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
+   45229: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       colorPixelShaderWGSL: () => YU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L60-L97` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/656.js#L60-L69) · [Before (L60-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/656.js#L60-L97)

```diff
-     var OM = iM(40964);
-     const SM = "logDepthDeclaration",
-       jM = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   45070: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "logDepthVertex",
-       jM = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
- ... (22 more removed lines; see GitHub link above)
+     var cU = zU(40961),
+       yU = zU(45154),
+       QU = zU(45158),
+       AU = zU(45165),
+       FU = zU(45205);
+     const oU = "colorPixelShader",
+       DU = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
+     cU.b.ShadersStoreWGSL[oU] || (cU.b.ShadersStoreWGSL[oU] = DU);
+     const EU = [yU.d, QU.e, AU.c, FU.b];
+     for (const NU of EU) cU.b.IncludesShadersStoreWGSL[NU.name] || (cU.b.IncludesShadersStoreWGSL[NU.name] = NU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/657.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/657.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L4` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/657.js#L4-L11) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/657.js#L4)

```diff
-   45189: (MM, rM, iM) => {
+   45219: (UU, XU, zU) => {
+     function cU(UU) {
+       return Math.floor(UU / 8)
+     }
+ 
+     function yU(UU) {
+       return 1 << UU % 8
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L6` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/657.js#L13) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/657.js#L6)

```diff
-       d: () => aM
+       OptimizeIndices: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L8-L14` → after: `L15-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L15-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/657.js#L15-L30) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/657.js#L8-L14)

```diff
-     var OM = iM(40964);
-     const SM = "bumpFragment",
-       jM = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
+     class QU {
+       constructor(UU) {
+         this.size = UU, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
+       }
+       get(UU) {
+         if (UU >= this.size) throw new RangeError("Bit index out of range");
+         const XU = cU(UU),
+           zU = yU(UU);
+         return 0 !== (this._byteArray[XU] & zU)
+       }
+       set(UU, XU) {
+         if (UU >= this.size) throw new RangeError("Bit index out of range");
+         const zU = cU(UU),
+           QU = yU(UU);
+         XU ? this._byteArray[zU] |= QU : this._byteArray[zU] &= ~QU
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L16-L230` → after: `L32-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L32-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/657.js#L32-L63) · [Before (L16-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/657.js#L16-L230)

```diff
-   },
-   45159: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     iM(45129);
-     const SM = "bumpFragmentFunctions",
-       jM = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   45153: (MM, rM, iM) => {
- ... (199 more removed lines; see GitHub link above)
+ 
+     function AU(UU) {
+       const XU = [],
+         zU = UU.length / 3;
+       for (let QU = 0; QU < zU; QU++) XU.push([UU[3 * QU], UU[3 * QU + 1], UU[3 * QU + 2]]);
+       const cU = new Map;
+       for (let QU = 0; QU < XU.length; QU++) {
+         const UU = XU[QU];
+         for (const XU of UU) {
+           let UU = cU.get(XU);
+           UU || cU.set(XU, UU = []), UU.push(QU)
+         }
+       }
+       const yU = new QU(zU),
+         AU = [],
+         FU = UU => {
+ ... (16 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/658.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/658.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25)

#### 1. `bundles/preprod.bloxd.io/chunks/js/658.js` (Changed code · before: `L4-L68` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/658.js#L4-L11) · [Before (L4-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/658.js#L4-L68)

```diff
-   45189: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "bumpFragment",
-       jM = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   45159: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
- ... (49 more removed lines; see GitHub link above)
+   63955: (UU, XU, zU) => {
+     var cU;
+     zU.r(XU), zU.d(XU, {
+         ShaderLanguage: () => cU
+       }),
+       function(UU) {
+         UU[UU.GLSL = 0] = "GLSL", UU[UU.WGSL = 1] = "WGSL"
+       }(cU || (cU = {}))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/659.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/659.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842)

#### 1. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/659.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/659.js#L4-L6)

```diff
-   45185: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
+   63962: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       postprocessVertexShader: () => AU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L8-L69` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/659.js#L8-L11) · [Before (L8-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/659.js#L8-L69)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneFragment",
-       jM = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   45168: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "clipPlaneFragmentDeclaration",
-       jM = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
- ... (46 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "postprocessVertexShader",
+       QU = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/660.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/660.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80)

#### 1. `bundles/preprod.bloxd.io/chunks/js/660.js` (Changed code · before: `L4-L7` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/660.js#L4-L9) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/660.js#L4-L7)

```diff
-   45226: (MM, rM, iM) => {
-     function OM(MM) {
-       return Math.floor(MM / 8)
-     }
+   63977: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       WorldCodeAiOutOfUsage: () => QU
+     });
+     var cU = zU(1494),
+       yU = zU(1305);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/660.js` (Changed code · before: `L10-L63` → after: `L12-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80) · [After (L12-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/660.js#L12-L25) · [Before (L10-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/660.js#L10-L63)

```diff
-       return 1 << MM % 8
-     }
-     iM.d(rM, {
-       OptimizeIndices: () => aM
-     });
-     class jM {
-       constructor(MM) {
-         this.size = MM, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
-       }
-       get(MM) {
-         if (MM >= this.size) throw new RangeError("Bit index out of range");
-         const rM = OM(MM),
-           iM = SM(MM);
-         return 0 !== (this._byteArray[rM] & iM)
-       }
-       set(MM, rM) {
- ... (38 more removed lines; see GitHub link above)
+       let {
+         onGetSuperRank: XU
+       } = UU;
+       return (0, yU.jsxs)("div", {
+         className: "WorldCodeAiOutOfUsage",
+         children: [(0, yU.jsx)("p", {
+           className: "WorldCodeAiOutOfUsageText",
+           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
+         }), (0, yU.jsx)(cU.l, {
+           className: "WorldCodeAiOutOfUsageButton",
+           onClick: XU,
+           children: "Get Super Rank"
+         })]
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/661.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/661.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/661.js` (Changed code · before: `L4-L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7ad) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/661.js#L4) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/661.js#L4-L5)

```diff
-   63903: (MM, rM, iM) => {
-     var OM;
+   63994: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/661.js` (Changed code · before: `L7-L11` → after: `L6-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7adR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7ad) · [After (L6-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/661.js#L6-L35) · [Before (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/661.js#L7-L11)

```diff
-         ShaderLanguage: () => OM
-       }),
-       function(MM) {
-         MM[MM.GLSL = 0] = "GLSL", MM[MM.WGSL = 1] = "WGSL"
-       }(OM || (OM = {}))
+       particlesPixelShader: () => ZU
+     });
+     var cU = zU(40961),
+       yU = zU(44754),
+       QU = zU(44759),
+       AU = zU(44833),
+       FU = zU(44803),
+       oU = zU(44671),
+       DU = zU(44588),
+       EU = zU(44810),
+       YU = zU(44838),
+       NU = zU(44841),
+       IU = zU(44860),
+       pU = zU(44866);
+     const aU = "geometryRenderingFragment",
+       tU = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
+ ... (14 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/662.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/662.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/662.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/662.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/662.js#L4-L6)

```diff
-   63910: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       postprocessVertexShader: () => aM
+   64010: (UU, XU, zU) => {
+     zU.d(XU, {
+       allocateF64Mat4: () => yU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/662.js` (Changed code · before: `L8-L14` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/662.js#L8-L11) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/662.js#L8-L14)

```diff
-     var OM = iM(40964);
-     const SM = "postprocessVertexShader",
-       jM = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
+     var cU = zU(44417);
+ 
+     function yU() {
+       return new cU.f(16)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/663.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/663.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/663.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/663.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/663.js#L4)

```diff
-   63929: (MM, rM, iM) => {
+   64017: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/663.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/663.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/663.js#L6)

```diff
-       WorldCodeAiOutOfUsage: () => jM
+       applyLightFoOffset: () => AU,
+       getFloatingOriginOffset: () => yU,
+       lightFoVersion: () => QU,
+       wrapRenderableForFO: () => FU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/663.js` (Changed code · before: `L8-L9` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711aR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/663.js#L11) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/663.js#L8-L9)

```diff
-     var OM = iM(1520),
-       SM = iM(1303);
+     var cU = zU(44423);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/663.js` (Changed code · before: `L12-L25` → after: `L14-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711aR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a) · [After (L14-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/663.js#L14-L57) · [Before (L12-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/663.js#L12-L25)

```diff
-       let {
-         onGetSuperRank: rM
-       } = MM;
-       return (0, SM.jsxs)("div", {
-         className: "WorldCodeAiOutOfUsage",
-         children: [(0, SM.jsx)("p", {
-           className: "WorldCodeAiOutOfUsageText",
-           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
-         }), (0, SM.jsx)(OM.p, {
-           className: "WorldCodeAiOutOfUsageButton",
-           onClick: rM,
-           children: "Get Super Rank"
-         })]
-       })
+       const XU = UU.camera;
+       if (!XU) return {
+         x: 0,
+         y: 0,
+         z: 0
+       };
+       const zU = XU.worldMatrix;
+       return {
+         x: zU[12],
+         y: zU[13],
+         z: zU[14]
+       }
+     }
+ 
+     function QU(UU) {
+       return UU.camera ? UU.camera.worldMatrixVersion : 0
+ ... (28 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/664.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/664.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373)

#### 1. `bundles/preprod.bloxd.io/chunks/js/664.js` (Changed code · before: `L4` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/664.js#L4-L19) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/664.js#L4)

```diff
-   63948: (MM, rM, iM) => {
+   64021: (UU, XU, zU) => {
+     function cU(UU, XU, zU, cU, yU, QU, AU) {
+       const FU = XU,
+         oU = cU,
+         DU = zU;
+       UU[DU + 0] = FU[oU + 0], UU[DU + 1] = FU[oU + 1], UU[DU + 2] = FU[oU + 2], UU[DU + 3] = FU[oU + 3], UU[DU + 4] = FU[oU + 4], UU[DU + 5] = FU[oU + 5], UU[DU + 6] = FU[oU + 6], UU[DU + 7] = FU[oU + 7], UU[DU + 8] = FU[oU + 8], UU[DU + 9] = FU[oU + 9], UU[DU + 10] = FU[oU + 10 … [truncated]
+     }
+ 
+     function yU(UU) {
+       return (XU, zU, yU, QU) => {
+         const AU = UU.camera;
+         if (!AU) return void cU(XU, zU, yU, QU, 0, 0, 0);
+         const FU = AU.worldMatrix;
+         cU(XU, zU, yU, QU, FU[12], FU[13], FU[14])
+       }
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/664.js` (Changed code · before: `L6-L35` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/664.js#L21-L23) · [Before (L6-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/664.js#L6-L35)

```diff
-       particlesPixelShader: () => GM
-     });
-     var OM = iM(40964),
-       SM = iM(44731),
-       jM = iM(44733),
-       aM = iM(44809),
-       PM = iM(44776),
-       nM = iM(44633),
-       QM = iM(44548),
-       zM = iM(44784),
-       LM = iM(44813),
-       mM = iM(44821),
-       HM = iM(44862),
-       hM = iM(44868);
-     const JM = "geometryRenderingFragment",
-       dM = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
- ... (14 more removed lines; see GitHub link above)
+       makePackMeshWorld: () => yU,
+       packMat4IntoF32WithOffset: () => cU
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/665.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/665.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577)

#### 1. `bundles/preprod.bloxd.io/chunks/js/665.js` (Changed code · before: `L4-L8` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/665.js#L4-L7) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/665.js#L4-L8)

```diff
-   63976: (MM, rM, iM) => {
-     iM.d(rM, {
-       allocateF64Mat4: () => SM
-     });
-     var OM = iM(44379);
+   64028: (UU, XU, zU) => {
+     function cU(UU) {
+       return UU.features.has("timestamp-query")
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/665.js` (Changed code · before: `L10-L11` → after: `L9-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577) · [After (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/665.js#L9-L32) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/665.js#L10-L11)

```diff
-     function SM() {
-       return new OM.g(16)
+     function yU(UU) {
+       return cU(UU) ? {
+         device: UU,
+         markerPipeline: UU.createComputePipeline({
+           layout: "auto",
+           compute: {
+             module: UU.createShaderModule({
+               code: "@compute @workgroup_size(1) fn main() {}"
+             }),
+             entryPoint: "main"
+           }
+         }),
+         querySet: UU.createQuerySet({
+           type: "timestamp",
+           count: 2
+         }),
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/665.js` (Changed code · before: `L13` → after: `L34-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577) · [After (L34-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/665.js#L34-L84) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/665.js#L13)

```diff
-     SM["@@MAT4_STORAGE_F64@@"] = !0
+ 
+     function QU(UU, XU) {
+       const zU = XU.beginComputePass({
+         timestampWrites: {
+           querySet: UU.querySet,
+           beginningOfPassWriteIndex: 0
+         }
+       });
+       zU.setPipeline(UU.markerPipeline), zU.dispatchWorkgroups(1), zU.end()
+     }
+ 
+     function AU(UU, XU) {
+       const zU = XU.beginComputePass({
+         timestampWrites: {
+           querySet: UU.querySet,
+           endOfPassWriteIndex: 1
+ ... (35 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/666.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/666.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030)

#### 1. `bundles/preprod.bloxd.io/chunks/js/666.js` (Changed code · before: `L4-L29` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/666.js#L4-L7) · [Before (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/666.js#L4-L29)

```diff
-   63981: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       applyLightFoOffset: () => aM,
-       getFloatingOriginOffset: () => SM,
-       lightFoVersion: () => jM,
-       wrapRenderableForFO: () => PM
-     });
-     var OM = iM(44384);
- 
-     function SM(MM) {
-       const rM = MM.camera;
-       if (!rM) return {
-         x: 0,
-         y: 0,
-         z: 0
-       };
- ... (10 more removed lines; see GitHub link above)
+   64031: (UU, XU, zU) => {
+     function cU(UU, XU) {
+       for (const zU of UU._frameGraph._tasks)
+         if (zU?._config && zU._colorAttachment && (zU._config.rt === XU.scRT || zU._config.rst === XU.scRT)) return zU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/666.js` (Changed code · before: `L33` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/666.js#L11-L13) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/666.js#L33)

```diff
-       const iM = rM.camera?.worldMatrix;
+       const zU = UU._renderingContexts[UU._renderingContexts.length - 1];
+       if (!zU?._frameGraph) return;
+       const yU = cU(XU, UU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/666.js` (Changed code · before: `L35-L49` → after: `L15-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030) · [After (L15-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/666.js#L15-L21) · [Before (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/666.js#L35-L49)

```diff
-       const SM = iM[12],
-         jM = iM[13],
-         aM = iM[14];
-       let PM = 0;
-       for (const nM of rM.lights) {
-         if (PM >= OM.b) break;
-         if (!nM._writeLightUbo) continue;
-         const rM = 4 + 16 * PM,
-           iM = MM[rM + 3];
-         if (0 === iM || 2 === iM) {
-           const iM = nM.worldMatrix;
-           MM[rM] = iM[12] - SM, MM[rM + 1] = iM[13] - jM, MM[rM + 2] = iM[14] - aM
-         }
-         PM++
-       }
+       if (1 === UU.msaaSamples) return void(yU._config.clr = !1);
+       const QU = yU.enabled;
+       yU._config.clr = !0, yU.enabled = !1, XU._beforeRender.unshift((() => {
+         const XU = cU(zU, UU),
+           AU = XU?._config.rst === UU.scRT && XU._config.rt._colorView;
+         yU.enabled = !!AU && QU, yU._config.clr = !AU, AU && (yU._colorAttachment.view = AU)
+       }))
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/666.js` (Changed code · before: `L51-L58` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/666.js#L23-L25) · [Before (L51-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/666.js#L51-L58)

```diff
- 
-     function PM(MM, rM, iM) {
-       let OM = -1;
-       return () => {
-         const SM = rM.camera ? rM.camera.worldMatrixVersion : -1;
-         SM !== OM && (iM(), OM = SM), MM()
-       }
-     }
+     zU.r(XU), zU.d(XU, {
+       configureSwapchainOverlayScene: () => yU
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/667.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/667.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12ee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/667.js` (Changed code · before: `L4-L9` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12ee) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/667.js#L4-L11) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/667.js#L4-L9)

```diff
-   63990: (MM, rM, iM) => {
-     function OM(MM, rM, iM, OM, SM, jM, aM) {
-       const PM = rM,
-         nM = OM,
-         QM = iM;
-       MM[QM + 0] = PM[nM + 0], MM[QM + 1] = PM[nM + 1], MM[QM + 2] = PM[nM + 2], MM[QM + 3] = PM[nM + 3], MM[QM + 4] = PM[nM + 4], MM[QM + 5] = PM[nM + 5], MM[QM + 6] = PM[nM + 6], MM[QM + 7] = PM[nM + 7], MM[QM + 8] = PM[nM + 8], MM[QM + 9] = PM[nM + 9], MM[QM + 10] = PM[nM + 10 … [truncated]
+   64039: (UU, XU, zU) => {
+     zU.d(XU, {
+       createShadowTask: () => QU
+     });
+     var cU = null;
+ 
+     function yU(UU) {
+       return cU?.get(UU)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/667.js` (Changed code · before: `L12-L18` → after: `L14-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12eeR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12ee) · [After (L14-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/667.js#L14-L71) · [Before (L12-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/667.js#L12-L18)

```diff
-     function SM(MM) {
-       return (rM, iM, SM, jM) => {
-         const aM = MM.camera;
-         if (!aM) return void OM(rM, iM, SM, jM, 0, 0, 0);
-         const PM = aM.worldMatrix;
-         OM(rM, iM, SM, jM, PM[12], PM[13], PM[14])
-       }
+     function QU(UU, XU) {
+       const zU = new Set;
+       0;
+       const cU = {
+         name: "CY",
+         engine: UU,
+         sa: XU,
+         _passes: [],
+         async _preload() {
+           const UU = [];
+           for (const zU of XU.lights) {
+             const XU = zU.shadowGenerator,
+               cU = XU ? yU(XU) : null;
+             XU?._preloadShadowTask && cU && UU.push(AU(XU, cU))
+           }
+           await Promise.all(UU)
+ ... (42 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/667.js` (Changed code · before: `L20-L23` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12eeR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12ee) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/667.js#L73-L75) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/667.js#L20-L23)

```diff
-     iM.r(rM), iM.d(rM, {
-       makePackMeshWorld: () => SM,
-       packMat4IntoF32WithOffset: () => OM
-     })
+     async function AU(UU, XU) {
+       UU._preloadPending = XU, await (UU._preloadShadowTask?.(XU)), UU._preloadPending === XU && (UU._preloadPending = void 0)
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/668.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/668.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L4` → after: `L4-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L4-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/668.js#L4-L70) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/668.js#L4)

```diff
-   63999: (MM, rM, iM) => {
+   64045: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       A: () => DU,
+       B: () => YU,
+       C: () => EU,
+       X: () => NU
+     });
+     var cU = zU(44400),
+       yU = (UU, XU) => UU.order - XU.order;
+ 
+     function QU(UU, XU, zU) {
+       UU.pendingDisposers.set(XU, zU)
+     }
+ 
+     function AU(UU, XU, zU) {
+       zU && UU.pendingDisposers.get(XU) === zU && UU.pendingDisposers.delete(XU)
+ ... (51 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L6-L18` → after: `L72-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L72-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/668.js#L72-L240) · [Before (L6-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/668.js#L6-L18)

```diff
-       return MM.features.has("timestamp-query")
-     }
- 
-     function SM(MM) {
-       return OM(MM) ? {
-         device: MM,
-         markerPipeline: MM.createComputePipeline({
-           layout: "auto",
-           compute: {
-             module: MM.createShaderModule({
-               code: "@compute @workgroup_size(1) fn main() {}"
-             }),
-             entryPoint: "main"
+       const XU = {
+           kp: !1,
+           error: null,
+           active: new Set,
+           chains: new WeakMap,
+           generations: new WeakMap,
+           installed: new WeakMap,
+           installedMeshes: new Set,
+           pendingDisposers: new WeakMap,
+           tail: null
+         },
+         zU = UU,
+         DU = {
+           queue: (zU, EU) => {
+             const YU = (XU.generations.get(EU) ?? 0) + 1,
+               NU = EU.material;
+ ... (153 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L20-L32` → after: `L242-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L242-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/668.js#L242-L282) · [Before (L20-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/668.js#L20-L32)

```diff
-         }),
-         querySet: MM.createQuerySet({
-           type: "timestamp",
-           count: 2
-         }),
-         resolveBuf: MM.createBuffer({
-           size: 16,
-           usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
-         }),
-         pool: [],
-         lastMs: 0,
-         inFlight: 0
-       } : null
+         };
+       return UU._runtimeBuilds = DU, (UU._beforeRender ??= []).push((() => {
+         DU._e()
+       })), UU._disposables.push((() => {
+         XU.kp = !0, XU.active.clear();
+         for (const zU of XU.installedMeshes) aU(UU, XU, zU);
+         for (const XU of UU._groups.keys()) oU?.get(XU)?.gUU.delete(UU);
+         UU._runtimeBuilds = void 0, zU._pbrMeshGeomContexts = void 0
+       })), DU
+     }
+ 
+     function pU(UU, XU, zU) {
+       const cU = XU.installed.get(zU);
+       if (cU) {
+         for (const XU of cU) oU?.get(XU)?.scenes.get(UU)?.delete(zU);
+         XU.installed.delete(zU), XU.installedMeshes.delete(zU)
+ ... (25 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L36-L84` → after: `L286-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L286-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/668.js#L286-L289) · [Before (L36-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/668.js#L36-L84)

```diff
-       const iM = rM.beginComputePass({
-         timestampWrites: {
-           querySet: MM.querySet,
-           beginningOfPassWriteIndex: 0
-         }
-       });
-       iM.setPipeline(MM.markerPipeline), iM.dispatchWorkgroups(1), iM.end()
-     }
- 
-     function aM(MM, rM) {
-       const iM = rM.beginComputePass({
-         timestampWrites: {
-           querySet: MM.querySet,
-           endOfPassWriteIndex: 1
-         }
-       });
- ... (33 more removed lines; see GitHub link above)
+       if (!XU.kp) return;
+       const zU = UU._disposables.splice(0);
+       for (const cU of zU) cU()
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/669.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/669.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93)

#### 1. `bundles/preprod.bloxd.io/chunks/js/669.js` (Changed code · before: `L4-L7` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/669.js#L4-L14) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/669.js#L4-L7)

```diff
-   64007: (MM, rM, iM) => {
-     function OM(MM, rM) {
-       for (const iM of MM._frameGraph._tasks)
-         if (iM?._config && iM._colorAttachment && (iM._config.rt === rM.scRT || iM._config.rst === rM.scRT)) return iM
+   64066: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       postprocessVertexShaderWGSL: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "postprocessVertexShader",
+       QU = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
+     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/670.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/670.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-00fc5c4ea111cdcb7b74b51c8a336ad4eb82be2e3ffbf931d219180d7ca9f44b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/670.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-00fc5c4ea111cdcb7b74b51c8a336ad4eb82be2e3ffbf931d219180d7ca9f44bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-00fc5c4ea111cdcb7b74b51c8a336ad4eb82be2e3ffbf931d219180d7ca9f44b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/670.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/670.js#L4-L6)

```diff
-   64013: (MM, rM, iM) => {
-     iM.d(rM, {
-       createShadowTask: () => jM
+   64085: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       lod3DPixelShader: () => AU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/670.js` (Changed code · before: `L8-L74` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-00fc5c4ea111cdcb7b74b51c8a336ad4eb82be2e3ffbf931d219180d7ca9f44bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-00fc5c4ea111cdcb7b74b51c8a336ad4eb82be2e3ffbf931d219180d7ca9f44b) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/670.js#L8-L14) · [Before (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/670.js#L8-L74)

```diff
-     var OM = null;
- 
-     function SM(MM) {
-       return OM?.get(MM)
-     }
- 
-     function jM(MM, rM) {
-       const iM = new Set;
-       0;
-       const OM = {
-         name: "tL",
-         engine: MM,
-         YJ: rM,
-         _passes: [],
-         async _preload() {
-           const MM = [];
- ... (51 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "lod3DPixelShader",
+       QU = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
+     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/671.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/671.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59)

#### 1. `bundles/preprod.bloxd.io/chunks/js/671.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/671.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/671.js#L4)

```diff
-   64015: (MM, rM, iM) => {
+   64088: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/671.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/671.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/671.js#L6-L9)

```diff
-       A: () => QM,
-       B: () => LM,
-       C: () => zM,
-       X: () => mM
+       lodCubePixelShader: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/671.js` (Changed code · before: `L11-L288` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/671.js#L8-L14) · [Before (L11-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/671.js#L11-L288)

```diff
-     var OM = iM(44368),
-       SM = (MM, rM) => MM.order - rM.order;
- 
-     function jM(MM, rM, iM) {
-       MM.pendingDisposers.set(rM, iM)
-     }
- 
-     function aM(MM, rM, iM) {
-       iM && MM.pendingDisposers.get(rM) === iM && MM.pendingDisposers.delete(rM)
-     }
-     var PM = null,
-       nM = null;
- 
-     function QM(MM, rM, iM, OM) {
-       if (!rM || iM.material !== rM) return OM ?? Promise.resolve();
-       const SM = LM(MM, rM._buildGroup, iM);
- ... (262 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "lodCubePixelShader",
+       QU = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
+     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/672.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/672.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989)

#### 1. `bundles/preprod.bloxd.io/chunks/js/672.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/672.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/672.js#L4)

```diff
-   64036: (MM, rM, iM) => {
+   64090: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/672.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/672.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/672.js#L6)

```diff
-       postprocessVertexShaderWGSL: () => aM
+       lodPixelShader: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/672.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/672.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/672.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "postprocessVertexShader",
-       jM = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
-     OM.e.ShadersStoreWGSL[SM] || (OM.e.ShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "lodPixelShader",
+       QU = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
+     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/673.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/673.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/673.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/673.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/673.js#L4)

```diff
-   64051: (MM, rM, iM) => {
+   64092: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/673.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/673.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/673.js#L6)

```diff
-       lod3DPixelShader: () => aM
+       lod3DPixelShaderWGSL: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/673.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/673.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/673.js#L8)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/673.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/673.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/673.js#L10-L11)

```diff
-       jM = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
-     OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
+       QU = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
+     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/674.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/674.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/674.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/674.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/674.js#L4)

```diff
-   64055: (MM, rM, iM) => {
+   64097: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/674.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/674.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/674.js#L6)

```diff
-       lodCubePixelShader: () => aM
+       lodCubePixelShaderWGSL: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/674.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942f) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/674.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/674.js#L8)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/674.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942fR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942f) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/674.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/674.js#L10-L11)

```diff
-       jM = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
-     OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
+       QU = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
+     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/675.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/675.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/675.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/675.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/675.js#L4)

```diff
-   64060: (MM, rM, iM) => {
+   64104: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/675.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/675.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/675.js#L6)

```diff
-       lodPixelShader: () => aM
+       lodPixelShaderWGSL: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/675.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/675.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/675.js#L8)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/675.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/675.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/675.js#L10-L11)

```diff
-       jM = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
-     OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
+       QU = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
+     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/676.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/676.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/676.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/676.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/676.js#L4)

```diff
-   64066: (MM, rM, iM) => {
+   64109: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/676.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/676.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/676.js#L6)

```diff
-       lod3DPixelShaderWGSL: () => aM
+       passPixelShaderWGSL: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/676.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/676.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/676.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "lod3DPixelShader",
-       jM = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
-     OM.e.ShadersStoreWGSL[SM] || (OM.e.ShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "passPixelShader",
+       QU = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
+     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/677.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/677.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/677.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/677.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/677.js#L4)

```diff
-   64072: (MM, rM, iM) => {
+   64115: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/677.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/677.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/677.js#L6)

```diff
-       lodCubePixelShaderWGSL: () => aM
+       passPixelShader: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/677.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/677.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/677.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "lodCubePixelShader",
-       jM = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
-     OM.e.ShadersStoreWGSL[SM] || (OM.e.ShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "passPixelShader",
+       QU = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
+     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/678.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/678.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/678.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/678.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/678.js#L4)

```diff
-   64075: (MM, rM, iM) => {
+   64123: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/678.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/678.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/678.js#L6)

```diff
-       lodPixelShaderWGSL: () => aM
+       passCubePixelShaderWGSL: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/678.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1d) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/678.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/678.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "lodPixelShader",
-       jM = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
-     OM.e.ShadersStoreWGSL[SM] || (OM.e.ShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "passCubePixelShader",
+       QU = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
+     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/679.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/679.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/679.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/679.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/679.js#L4)

```diff
-   64081: (MM, rM, iM) => {
+   64128: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/679.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/679.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/679.js#L6)

```diff
-       passPixelShaderWGSL: () => aM
+       passCubePixelShader: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/679.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/679.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/679.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "passPixelShader",
-       jM = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
-     OM.e.ShadersStoreWGSL[SM] || (OM.e.ShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "passCubePixelShader",
+       QU = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
+     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/680.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/680.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/680.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/680.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/680.js#L4)

```diff
-   64089: (MM, rM, iM) => {
+   64164: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/680.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/680.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/680.js#L6)

```diff
-       passPixelShader: () => aM
+       fxaaPixelShaderWGSL: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/680.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/680.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/680.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "passPixelShader",
-       jM = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
-     OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fxaaPixelShader",
+       QU = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
+     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/681.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/681.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/681.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/681.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/681.js#L4)

```diff
-   64097: (MM, rM, iM) => {
+   64171: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/681.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/681.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/681.js#L6)

```diff
-       passCubePixelShaderWGSL: () => aM
+       fxaaVertexShaderWGSL: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/681.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/681.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/681.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "passCubePixelShader",
-       jM = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
-     OM.e.ShadersStoreWGSL[SM] || (OM.e.ShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fxaaVertexShader",
+       QU = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
+     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/682.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/682.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/682.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/682.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/682.js#L4)

```diff
-   64101: (MM, rM, iM) => {
+   64175: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/682.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/682.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/682.js#L6)

```diff
-       passCubePixelShader: () => aM
+       fxaaPixelShader: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/682.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/682.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/682.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "passCubePixelShader",
-       jM = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
-     OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fxaaPixelShader",
+       QU = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
+     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/683.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/683.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330)

#### 1. `bundles/preprod.bloxd.io/chunks/js/683.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/683.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/683.js#L4)

```diff
-   64144: (MM, rM, iM) => {
+   64180: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/683.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/683.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/683.js#L6)

```diff
-       fxaaPixelShaderWGSL: () => aM
+       fxaaVertexShader: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/683.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/683.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/683.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "fxaaPixelShader",
-       jM = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
-     OM.e.ShadersStoreWGSL[SM] || (OM.e.ShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fxaaVertexShader",
+       QU = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
+     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/684.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/684.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36)

#### 1. `bundles/preprod.bloxd.io/chunks/js/684.js` (Changed code · before: `L4` → after: `L4-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36) · [After (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/684.js#L4-L18) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/684.js#L4)

```diff
-   64151: (MM, rM, iM) => {
+   64189: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+     });
+     var cU = zU(40961);
+     zU(44571), zU(44575);
+     const yU = "pbrUboDeclaration",
+       QU = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   64205: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/684.js` (Changed code · before: `L6` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/684.js#L20) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/684.js#L6)

```diff
-       fxaaVertexShaderWGSL: () => aM
+       pbrPixelShader: () => Rz
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/684.js` (Changed code · before: `L8-L11` → after: `L22-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36) · [After (L22-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/684.js#L22-L242) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/684.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "fxaaVertexShader",
-       jM = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
-     OM.e.ShadersStoreWGSL[SM] || (OM.e.ShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961),
+       yU = zU(44754),
+       QU = zU(44759),
+       AU = zU(44764),
+       FU = zU(44745);
+     const oU = "pbrFragmentDeclaration",
+       DU = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
+     cU.b.IncludesShadersStore[oU] || (cU.b.IncludesShadersStore[oU] = DU);
+     const EU = {
+       name: oU,
+       shader: DU
+     };
+     var YU = zU(44571),
+       NU = zU(44575),
+       IU = zU(64189),
+       pU = zU(44620),
+ ... (205 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/685.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/685.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a1a56222bf17a0d12fd15d04bc9bea29d9c5733c0ea3bc550046ef8965334c83)

#### 1. `bundles/preprod.bloxd.io/chunks/js/685.js` (Changed code · before: `L4-L11` → after: `L4-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a1a56222bf17a0d12fd15d04bc9bea29d9c5733c0ea3bc550046ef8965334c83R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a1a56222bf17a0d12fd15d04bc9bea29d9c5733c0ea3bc550046ef8965334c83) · [After (L4-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/685.js#L4-L195) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/685.js#L4-L11)

```diff
-   64153: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       fxaaPixelShader: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "fxaaPixelShader",
-       jM = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
-     OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
+   64201: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "harmonicsFunctions",
+       QU = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   64252: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => AU
+ ... (176 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/686.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/686.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f498d45490f9335fd3496d127b31a603e3f7ad9f97e4b6dd7daab2b3481208fb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/686.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f498d45490f9335fd3496d127b31a603e3f7ad9f97e4b6dd7daab2b3481208fbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f498d45490f9335fd3496d127b31a603e3f7ad9f97e4b6dd7daab2b3481208fb) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/686.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/686.js#L4)

```diff
-   64161: (MM, rM, iM) => {
+   64201: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "harmonicsFunctions",
+       QU = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   64413: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/686.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f498d45490f9335fd3496d127b31a603e3f7ad9f97e4b6dd7daab2b3481208fbR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f498d45490f9335fd3496d127b31a603e3f7ad9f97e4b6dd7daab2b3481208fb) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/686.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/686.js#L6)

```diff
-       fxaaVertexShader: () => aM
+       openpbrVertexShader: () => XX
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/686.js` (Changed code · before: `L8-L11` → after: `L48-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f498d45490f9335fd3496d127b31a603e3f7ad9f97e4b6dd7daab2b3481208fbR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f498d45490f9335fd3496d127b31a603e3f7ad9f97e4b6dd7daab2b3481208fb) · [After (L48-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/686.js#L48-L115) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/686.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "fxaaVertexShader",
-       jM = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
-     OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "sceneVertexDeclaration",
+       QU = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     };
+     var FU = zU(44566);
+     const oU = "openpbrVertexDeclaration",
+       DU = "#include<sceneVertexDeclaration>\n#ifdef BASE_COLOR\nuniform vec2 vBaseColorInfos;uniform mat4 baseColorMatrix;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;\n#endif\nuniform float vBaseDiffuseRoughness;\n#ifdef BASE_DIFFUSE … [truncated]
+     cU.b.IncludesShadersStore[oU] || (cU.b.IncludesShadersStore[oU] = DU);
+     const EU = {
+       name: oU,
+       shader: DU
+     };
+ ... (52 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/687.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/687.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L4)

```diff
-   64176: (MM, rM, iM) => {
+   64293: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L6)

```diff
-       c: () => aM
+       e: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L8-L9)

```diff
-     var OM = iM(40964);
-     iM(44525), iM(44534);
+     var cU = zU(40961);
+     zU(44887), zU(44891);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L11-L12` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L11-L12) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L11-L12)

```diff
-       jM = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L18)

```diff
-   64199: (MM, rM, iM) => {
+   64313: (UU, XU, zU) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L20)

```diff
-       pbrPixelShader: () => ei
+       pbrPixelShaderWGSL: () => pz
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L22-L41` → after: `L22-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L22-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L22-L32) · [Before (L22-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L22-L41)

```diff
-     var OM = iM(40964),
-       SM = iM(44731),
-       jM = iM(44733),
-       aM = iM(44738),
-       PM = iM(44723);
-     const nM = "pbrFragmentDeclaration",
-       QM = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
-     OM.e.IncludesShadersStore[nM] || (OM.e.IncludesShadersStore[nM] = QM);
-     const zM = {
-       name: nM,
-       shader: QM
-     };
-     var LM = iM(44525),
-       mM = iM(44534),
-       HM = iM(64176),
-       hM = iM(44579),
- ... (4 more removed lines; see GitHub link above)
+     var cU = zU(40961),
+       yU = zU(45080),
+       QU = zU(45085),
+       AU = zU(45090),
+       FU = zU(44887),
+       oU = zU(44891),
+       DU = zU(64293),
+       EU = zU(44935),
+       YU = zU(64320),
+       NU = zU(45093),
+       IU = zU(45115);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L43-L44` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L34-L35) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L43-L44)

```diff
-       UM = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     OM.e.IncludesShadersStore[EM] || (OM.e.IncludesShadersStore[EM] = UM);
+       aU = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     cU.b.IncludesShadersStoreWGSL[pU] || (cU.b.IncludesShadersStoreWGSL[pU] = aU);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L49` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L40) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L49)

```diff
-     var CM = iM(64213);
+     var gU = zU(64329);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L51-L52` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L42-L43) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L51-L52)

```diff
-       bM = "#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BAS … [truncated]
-     OM.e.IncludesShadersStore[eM] || (OM.e.IncludesShadersStore[eM] = bM);
+       GU = "#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BAS … [truncated]
+     cU.b.IncludesShadersStoreWGSL[kU] || (cU.b.IncludesShadersStoreWGSL[kU] = GU);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L57-L79` → after: `L48-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L48-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L48-L73) · [Before (L57-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L57-L79)

```diff
-     var tM = iM(44776),
-       gM = iM(44809),
-       uM = iM(44633),
-       RM = iM(44813),
-       pM = iM(44788),
-       WM = iM(44548),
-       sM = iM(64217),
-       DM = iM(64220),
-       kM = iM(64222),
-       ZM = iM(44784),
-       oM = iM(44763),
-       fM = iM(64193),
-       YM = iM(44752),
-       NM = iM(64230),
-       AM = iM(64234),
-       xM = iM(64185),
- ... (7 more removed lines; see GitHub link above)
+     var ZU = zU(45126),
+       RU = zU(45154),
+       PU = zU(44983),
+       WU = zU(45158),
+       dU = zU(45137),
+       LU = zU(44910),
+       eU = zU(64335),
+       CU = zU(64339),
+       wU = zU(64346),
+       qU = zU(45134),
+       OU = zU(45113),
+       SU = zU(64304),
+       rU = zU(45099),
+       uU = zU(64355),
+       fU = zU(64360),
+       iU = zU(64295),
+ ... (10 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L81-L82` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L75-L76) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L81-L82)

```diff
-       VM = "struct albedoOpacityOutParams\n{vec3 surfaceAlbedo;float alpha;};\n#define pbr_inline\nalbedoOpacityOutParams albedoOpacityBlock(\nin vec4 vAlbedoColor\n#ifdef ALBEDO\n,in vec4 albedoTexture\n,in vec2 albedoInfos\n#endif\n,in float baseWeight\n#ifdef BASE_WEIGHT\n,in  … [truncated]
-     OM.e.IncludesShadersStore[TM] || (OM.e.IncludesShadersStore[TM] = VM);
+       KU = "struct albedoOpacityOutParams\n{surfaceAlbedo: vec3f,\nalpha: f32};\n#define pbr_inline\nfn albedoOpacityBlock(\nvAlbedoColor: vec4f\n#ifdef ALBEDO\n,albedoTexture: vec4f\n,albedoInfos: vec2f\n#endif\n,baseWeight: f32\n#ifdef BASE_WEIGHT\n,baseWeightTexture: vec4f\n,v … [truncated]
+     cU.b.IncludesShadersStoreWGSL[jU] || (cU.b.IncludesShadersStoreWGSL[jU] = KU);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L88-L89` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L82-L83) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L88-L89)

```diff
-       rr = "struct reflectivityOutParams\n{float microSurface;float roughness;float diffuseRoughness;float reflectanceF0;vec3 reflectanceF90;vec3 colorReflectanceF0;vec3 colorReflectanceF90;\n#ifdef METALLICWORKFLOW\nvec3 surfaceAlbedo;float metallic;float specularWeight;vec3 die … [truncated]
-     OM.e.IncludesShadersStore[Mr] || (OM.e.IncludesShadersStore[Mr] = rr);
+       hU = "struct reflectivityOutParams\n{microSurface: f32,\nroughness: f32,\ndiffuseRoughness: f32,\nreflectanceF0: f32,\nreflectanceF90: vec3f,\ncolorReflectanceF0: vec3f,\ncolorReflectanceF90: vec3f,\n#ifdef METALLICWORKFLOW\nsurfaceAlbedo: vec3f,\nmetallic: f32,\nspecularWe … [truncated]
+     cU.b.IncludesShadersStoreWGSL[TU] || (cU.b.IncludesShadersStoreWGSL[TU] = hU);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L95-L96` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L89-L90) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L95-L96)

```diff
-       Sr = "struct ambientOcclusionOutParams\n{vec3 ambientOcclusionColor;\n#if DEBUGMODE>0 && defined(AMBIENT)\nvec3 ambientOcclusionColorMap;\n#endif\n};ambientOcclusionOutParams ambientOcclusionBlock(\n#ifdef AMBIENT\nin vec3 ambientOcclusionColorMap_,\nin vec4 vAmbientInfos\n … [truncated]
-     OM.e.IncludesShadersStore[Or] || (OM.e.IncludesShadersStore[Or] = Sr);
+       zX = "struct ambientOcclusionOutParams\n{ambientOcclusionColor: vec3f,\n#if DEBUGMODE>0 && defined(AMBIENT)\nambientOcclusionColorMap: vec3f\n#endif\n};\n#define pbr_inline\nfn ambientOcclusionBlock(\n#ifdef AMBIENT\nambientOcclusionColorMap_: vec3f,\nvAmbientInfos: vec4f\n … [truncated]
+     cU.b.IncludesShadersStoreWGSL[XX] || (cU.b.IncludesShadersStoreWGSL[XX] = zX);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L102-L103` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L96-L97) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L102-L103)

```diff
-       Pr = "#ifdef ALPHAFRESNEL\n#if defined(ALPHATEST) || defined(ALPHABLEND)\nstruct alphaFresnelOutParams\n{float alpha;};\n#define pbr_inline\nalphaFresnelOutParams alphaFresnelBlock(\nin vec3 normalW,\nin vec3 viewDirectionW,\nin float alpha,\nin float microSurface\n)\n{alph … [truncated]
-     OM.e.IncludesShadersStore[ar] || (OM.e.IncludesShadersStore[ar] = Pr);
+       QX = "#ifdef ALPHAFRESNEL\n#if defined(ALPHATEST) || defined(ALPHABLEND)\nstruct alphaFresnelOutParams\n{alpha: f32};fn faceforward(N: vec3<f32>,I: vec3<f32>,Nref: vec3<f32>)->vec3<f32> {return select(N,-N,dot(Nref,I)>0.0);}\n#define pbr_inline\nfn alphaFresnelBlock(\nnorma … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yX] || (cU.b.IncludesShadersStoreWGSL[yX] = QX);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L109-L110` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L103-L104) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L109-L110)

```diff
-       zr = "#ifdef ANISOTROPIC\nstruct anisotropicOutParams\n{float anisotropy;vec3 anisotropicTangent;vec3 anisotropicBitangent;vec3 anisotropicNormal;\n#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)\nvec3 anisotropyMapData;\n#endif\n};\n#define pbr_inline\nanisotropicOutParams … [truncated]
-     OM.e.IncludesShadersStore[Qr] || (OM.e.IncludesShadersStore[Qr] = zr);
+       oX = "#ifdef ANISOTROPIC\nstruct anisotropicOutParams\n{anisotropy: f32,\nanisotropicTangent: vec3f,\nanisotropicBitangent: vec3f,\nanisotropicNormal: vec3f,\n#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)\nanisotropyMapData: vec3f\n#endif\n};\n#define pbr_inline\nfn aniso … [truncated]
+     cU.b.IncludesShadersStoreWGSL[FX] || (cU.b.IncludesShadersStoreWGSL[FX] = oX);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L116-L117` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L110-L111) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L116-L117)

```diff
-       Hr = "#ifdef REFLECTION\nstruct reflectionOutParams\n{vec4 environmentRadiance;vec3 environmentIrradiance;\n#ifdef REFLECTIONMAP_3D\nvec3 reflectionCoords;\n#else\nvec2 reflectionCoords;\n#endif\n#ifdef SS_TRANSLUCENCY\n#ifdef USESPHERICALFROMREFLECTIONMAP\n#if !defined(NOR … [truncated]
-     OM.e.IncludesShadersStore[mr] || (OM.e.IncludesShadersStore[mr] = Hr);
+       YX = "#ifdef REFLECTION\nstruct reflectionOutParams\n{environmentRadiance: vec4f\n,environmentIrradiance: vec3f\n#ifdef REFLECTIONMAP_3D\n,reflectionCoords: vec3f\n#else\n,reflectionCoords: vec2f\n#endif\n#ifdef SS_TRANSLUCENCY\n#ifdef USESPHERICALFROMREFLECTIONMAP\n#if !de … [truncated]
+     cU.b.IncludesShadersStoreWGSL[EX] || (cU.b.IncludesShadersStoreWGSL[EX] = YX);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L123-L124` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L117-L118) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L123-L124)

```diff
-       dr = "#ifdef SHEEN\nstruct sheenOutParams\n{float sheenIntensity;vec3 sheenColor;float sheenRoughness;\n#ifdef SHEEN_LINKWITHALBEDO\nvec3 surfaceAlbedo;\n#endif\n#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)\nfloat sheenAlbedoScaling;\n#endif\n#if defined(REF … [truncated]
-     OM.e.IncludesShadersStore[Jr] || (OM.e.IncludesShadersStore[Jr] = dr);
+       pX = "#ifdef SHEEN\nstruct sheenOutParams\n{sheenIntensity: f32\n,sheenColor: vec3f\n,sheenRoughness: f32\n#ifdef SHEEN_LINKWITHALBEDO\n,surfaceAlbedo: vec3f\n#endif\n#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)\n,sheenAlbedoScaling: f32\n#endif\n#if defined … [truncated]
+     cU.b.IncludesShadersStoreWGSL[IX] || (cU.b.IncludesShadersStoreWGSL[IX] = pX);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L130-L131` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L124-L125) · [Before (L130-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L130-L131)

```diff
-       Er = "struct clearcoatOutParams\n{vec3 specularEnvironmentR0;float conservationFactor;vec3 clearCoatNormalW;vec2 clearCoatAARoughnessFactors;float clearCoatIntensity;float clearCoatRoughness;\n#ifdef REFLECTION\nvec3 finalClearCoatRadianceScaled;\n#endif\n#ifdef CLEARCOAT_T … [truncated]
-     OM.e.IncludesShadersStore[lr] || (OM.e.IncludesShadersStore[lr] = Er);
+       gX = "struct clearcoatOutParams\n{specularEnvironmentR0: vec3f,\nconservationFactor: f32,\nclearCoatNormalW: vec3f,\nclearCoatAARoughnessFactors: vec2f,\nclearCoatIntensity: f32,\nclearCoatRoughness: f32,\n#ifdef REFLECTION\nfinalClearCoatRadianceScaled: vec3f,\n#endif\n#if … [truncated]
+     cU.b.IncludesShadersStoreWGSL[tX] || (cU.b.IncludesShadersStoreWGSL[tX] = gX);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L137-L138` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L131-L132) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L137-L138)

```diff
-       Cr = "struct iridescenceOutParams\n{float iridescenceIntensity;float iridescenceIOR;float iridescenceThickness;vec3 specularEnvironmentR0;};\n#ifdef IRIDESCENCE\n#define pbr_inline\n#define inline\niridescenceOutParams iridescenceBlock(\nin vec4 vIridescenceParams\n,in floa … [truncated]
-     OM.e.IncludesShadersStore[Gr] || (OM.e.IncludesShadersStore[Gr] = Cr);
+       BX = "struct iridescenceOutParams\n{iridescenceIntensity: f32,\niridescenceIOR: f32,\niridescenceThickness: f32,\nspecularEnvironmentR0: vec3f};\n#ifdef IRIDESCENCE\nfn iridescenceBlock(\nvIridescenceParams: vec4f\n,viewAngle_: f32\n,specularEnvironmentR0: vec3f\n#ifdef IRI … [truncated]
+     cU.b.IncludesShadersStoreWGSL[GX] || (cU.b.IncludesShadersStoreWGSL[GX] = BX);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L144-L160` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L138-L139) · [Before (L144-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L144-L160)

```diff
-       wr = "struct subSurfaceOutParams\n{vec3 specularEnvironmentReflectance;\n#ifdef SS_REFRACTION\nvec3 finalRefraction;vec3 surfaceAlbedo;\n#ifdef SS_LINKREFRACTIONTOTRANSPARENCY\nfloat alpha;\n#endif\nfloat refractionOpacity;\n#endif\n#ifdef SS_TRANSLUCENCY\nvec3 transmittanc … [truncated]
-     OM.e.IncludesShadersStore[br] || (OM.e.IncludesShadersStore[br] = wr);
-     const tr = {
-       name: br,
-       shader: wr
-     };
-     var gr = iM(44761);
-     const ur = "pbrBlockReflectance0",
-       Rr = "float reflectanceF0=reflectivityOut.reflectanceF0;vec3 specularEnvironmentR0=reflectivityOut.colorReflectanceF0;vec3 specularEnvironmentR90=reflectivityOut.colorReflectanceF90;\n#ifdef ALPHAFRESNEL\nfloat reflectance90=fresnelGrazingReflectance(reflectanceF0);specular … [truncated]
-     OM.e.IncludesShadersStore[ur] || (OM.e.IncludesShadersStore[ur] = Rr);
-     const pr = {
-         name: ur,
-         shader: Rr
-       },
-       Wr = "pbrClusteredLightingFunctions",
-       sr = "#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\n#include<clusteredLightingFunctions>\n#define inline\nlightingInfo computeClusteredLighting(\nsampler2D lightDataTexture,\nsampler2D tileMaskTexture,\nvec4 lightData,\nivec2 sliceRange,\nvec3 V,\nvec3 N,\nvec3 posW, … [truncated]
- ... (1 more removed lines; see GitHub link above)
+       PX = "struct subSurfaceOutParams\n{specularEnvironmentReflectance: vec3f,\n#ifdef SS_REFRACTION\nfinalRefraction: vec3f,\nsurfaceAlbedo: vec3f,\n#ifdef SS_LINKREFRACTIONTOTRANSPARENCY\nalpha: f32,\n#endif\nrefractionOpacity: f32,\n#endif\n#ifdef SS_TRANSLUCENCY\ntransmittan … [truncated]
+     cU.b.IncludesShadersStoreWGSL[RX] || (cU.b.IncludesShadersStoreWGSL[RX] = PX);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L165-L167` → after: `L144-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L144-L146) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L165-L167)

```diff
-     var kr = iM(44821),
-       Zr = iM(64258),
-       or = iM(44830);
+     var dX = zU(45165),
+       LX = zU(64392),
+       eX = zU(45173);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L169-L170` → after: `L148-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L148-L149) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L169-L170)

```diff
-       Yr = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=gl_FrontFacing ? faceNormal : -faceNormal;\n#endif\nnormalW*=sign(dot(normalW,faceNormal) … [truncated]
-     OM.e.IncludesShadersStore[fr] || (OM.e.IncludesShadersStore[fr] = Yr);
+       wX = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
+     cU.b.IncludesShadersStoreWGSL[CX] || (cU.b.IncludesShadersStoreWGSL[CX] = wX);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L175` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L154) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L175)

```diff
-     var Ar = iM(44844);
+     var OX = zU(45189);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L177-L178` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L156-L157) · [Before (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L177-L178)

```diff
-       vr = "#ifdef LIGHTMAP\nvec4 lightmapColor=TEXRD(lightmapSampler,vLightmapUV+uvOffset);\n#ifdef RGBDLIGHTMAP\nlightmapColor.rgb=fromRGBD(lightmapColor);\n#endif\n#ifdef GAMMALIGHTMAP\nlightmapColor.rgb=toLinearSpace(lightmapColor.rgb);\n#endif\nlightmapColor.rgb*=vLightmapIn … [truncated]
-     OM.e.IncludesShadersStore[xr] || (OM.e.IncludesShadersStore[xr] = vr);
+       rX = "#ifdef LIGHTMAP\nvar lightmapColor: vec4f=TEXRD(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);\n#ifdef RGBDLIGHTMAP\nlightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);\n#endif\n#ifdef GAMMALIGHTMAP\nlightmapColor=vec4f(toLinear … [truncated]
+     cU.b.IncludesShadersStoreWGSL[SX] || (cU.b.IncludesShadersStoreWGSL[SX] = rX);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L184-L185` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L163-L164) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L184-L185)

```diff
-       Xr = "float NdotVUnclamped=dot(normalW,viewDirectionW);float NdotV=absEps(NdotVUnclamped);float alphaG=convertRoughnessToAverageSlope(roughness);vec2 AARoughnessFactors=getAARoughnessFactors(normalW.xyz);\n#ifdef SPECULARAA\nalphaG+=AARoughnessFactors.y;\n#endif\n#if define … [truncated]
-     OM.e.IncludesShadersStore[Br] || (OM.e.IncludesShadersStore[Br] = Xr);
+       iX = "var NdotVUnclamped: f32=dot(normalW,viewDirectionW);var NdotV: f32=absEps(NdotVUnclamped);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var AARoughnessFactors: vec2f=getAARoughnessFactors(normalW.xyz);\n#ifdef SPECULARAA\nalphaG+=AARoughnessFactors.y;\n#en … [truncated]
+     cU.b.IncludesShadersStoreWGSL[fX] || (cU.b.IncludesShadersStoreWGSL[fX] = iX);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L191-L192` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L170-L171) · [Before (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L191-L192)

```diff
-       qr = "#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)\nvec3 baseSpecularEnvironmentReflectance=getReflectanceFromBRDFLookup(vec3(reflectanceF0),reflectivityOut.reflectanceF90,environmentBrdf);\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)\ … [truncated]
-     OM.e.IncludesShadersStore[Kr] || (OM.e.IncludesShadersStore[Kr] = qr);
+       vX = "#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)\nvar baseSpecularEnvironmentReflectance: vec3f=getReflectanceFromBRDFWithEnvLookup(vec3f(reflectanceF0),vec3f(reflectivityOut.reflectanceF90),environmentBrdf);\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPE … [truncated]
+     cU.b.IncludesShadersStoreWGSL[MX] || (cU.b.IncludesShadersStoreWGSL[MX] = vX);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L198-L199` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L177-L178) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L198-L199)

```diff
-       cr = "vec3 diffuseBase=vec3(0.,0.,0.);\n#ifdef SS_TRANSLUCENCY\nvec3 diffuseTransmissionBase=vec3(0.,0.,0.);\n#endif\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#ifdef CLEARCOAT\nvec3 clearCoatBase=vec3(0.,0.,0.);\n#endif\n#ifdef SHEEN\nvec3 sheenBase=v … [truncated]
-     OM.e.IncludesShadersStore[Vr] || (OM.e.IncludesShadersStore[Vr] = cr);
+       nX = "var diffuseBase: vec3f=vec3f(0.,0.,0.);\n#ifdef SS_TRANSLUCENCY\nvar diffuseTransmissionBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef SPECULARTERM\nvar specularBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef CLEARCOAT\nvar clearCoatBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#i … [truncated]
+     cU.b.IncludesShadersStoreWGSL[sX] || (cU.b.IncludesShadersStoreWGSL[sX] = nX);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L204` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L183) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L204)

```diff
-     var ri = iM(44853);
+     var lX = zU(45195);
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L206-L207` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L185-L186) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L206-L207)

```diff
-       Oi = "aggShadow=aggShadow/numLights;\n#if defined(ENVIRONMENTBRDF)\n#ifdef MS_BRDF_ENERGY_CONSERVATION\nvec3 baseSpecularEnergyConservationFactor=getEnergyConservationFactor(vec3(reflectanceF0),environmentBrdf);vec3 coloredEnergyConservationFactor=getEnergyConservationFacto … [truncated]
-     OM.e.IncludesShadersStore[ii] || (OM.e.IncludesShadersStore[ii] = Oi);
+       JX = "aggShadow=aggShadow/numLights;\n#if defined(ENVIRONMENTBRDF)\n#ifdef MS_BRDF_ENERGY_CONSERVATION\nvar baseSpecularEnergyConservationFactor: vec3f=getEnergyConservationFactor(vec3f(reflectanceF0),environmentBrdf);var coloredEnergyConservationFactor: vec3f=getEnergyCons … [truncated]
+     cU.b.IncludesShadersStoreWGSL[xX] || (cU.b.IncludesShadersStoreWGSL[xX] = JX);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L213-L214` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L192-L193) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L213-L214)

```diff
-       ai = "vec3 finalDiffuse=diffuseBase;finalDiffuse*=surfaceAlbedo;\n#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)\nfinalDiffuse*=subSurfaceOut.refractionOpacity;\n#endif\n#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)\nfinalDi … [truncated]
-     OM.e.IncludesShadersStore[ji] || (OM.e.IncludesShadersStore[ji] = ai);
+       bX = "var finalDiffuse: vec3f=diffuseBase;finalDiffuse*=surfaceAlbedo;\n#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)\nfinalDiffuse*=subSurfaceOut.refractionOpacity;\n#endif\n#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)\nf … [truncated]
+     cU.b.IncludesShadersStoreWGSL[KX] || (cU.b.IncludesShadersStoreWGSL[KX] = bX);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L220-L221` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L199-L200) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L220-L221)

```diff
-       Qi = "vec4 finalColor=vec4(\n#ifndef UNLIT\n#ifdef REFLECTION\nfinalIrradiance +\n#endif\n#ifdef SPECULARTERM\nfinalSpecularScaled +\n#endif\n#ifdef SHEEN\nfinalSheenScaled +\n#endif\n#ifdef CLEARCOAT\nfinalClearCoatScaled +\n#endif\n#ifdef REFLECTION\nfinalRadianceScaled + … [truncated]
-     OM.e.IncludesShadersStore[ni] || (OM.e.IncludesShadersStore[ni] = Qi);
+       Uz = "var finalColor: vec4f= vec4f(\n#ifndef UNLIT\n#ifdef REFLECTION\nfinalIrradiance +\n#endif\n#ifdef SPECULARTERM\nfinalSpecularScaled +\n#endif\n#ifdef SHEEN\nfinalSheenScaled +\n#endif\n#ifdef CLEARCOAT\nfinalClearCoatScaled +\n#endif\n#ifdef REFLECTION\nfinalRadiance … [truncated]
+     cU.b.IncludesShadersStoreWGSL[hX] || (cU.b.IncludesShadersStoreWGSL[hX] = Uz);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L226-L228` → after: `L205-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L205-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L205-L208) · [Before (L226-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L226-L228)

```diff
-     var Li = iM(44862),
-       mi = iM(44868),
-       Hi = iM(64265);
+     var zz = zU(45201),
+       cz = zU(45205),
+       yz = zU(64396),
+       Qz = zU(45212);
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L230-L231` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L210-L211) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L230-L231)

```diff
-       di = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nfloat writeGeometryInfo=1.0;\n#else\nfloat writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_INDEX,vec4(vPositionW,writeGeometryInfo));\ … [truncated]
-     OM.e.IncludesShadersStore[Ji] || (OM.e.IncludesShadersStore[Ji] = di);
+       Fz = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
+     cU.b.IncludesShadersStoreWGSL[Az] || (cU.b.IncludesShadersStoreWGSL[Az] = Fz);
```
