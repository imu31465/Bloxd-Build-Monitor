# Changed — Bundle Modifications Report (Part 043 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `43 / 115` (**311** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 042](part-042.md) · [Part 044 →](part-044.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/639.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/639.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9)

#### 2. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L6)

```diff
-       d: () => AU
+       e: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "bumpVertex",
-       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertex",
+       SH = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L17)

```diff
-   44945: (UU, XU, zU) => {
+   45408: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L19)

```diff
-       e: () => AU
+       b: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L21-L24)

```diff
-     var cU = zU(40961);
-     const yU = "bumpVertexDeclaration",
-       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertexDeclaration",
+       SH = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L30)

```diff
-   44898: (UU, XU, zU) => {
+   45497: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L32)

```diff
-       b: () => AU
+       e: () => hH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L34-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L34-L37) · [Before (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L34-L38)

```diff
-     var cU = zU(40961);
-     zU(44887), zU(44891);
-     const yU = "defaultUboDeclaration",
-       QU = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogVertex",
+       SH = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L44)

```diff
-   44910: (UU, XU, zU) => {
+   45417: (HH, BH, LH) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L48-L51)

```diff
-     var cU = zU(40961);
-     const yU = "helperFunctions",
-       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogVertexDeclaration",
+       SH = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L57)

```diff
-   44887: (UU, XU, zU) => {
+   45440: (HH, BH, LH) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L59` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L58) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L59)

```diff
-       b: () => AU
+       d: () => hH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L61-L64` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L60-L63) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L61-L64)

```diff
-     var cU = zU(40961);
-     const yU = "sceneUboDeclaration",
-       QU = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "logDepthDeclaration",
+       SH = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L70-L72` → after: `L69-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L69-L71) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L70-L72)

```diff
-   44881: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       defaultVertexShaderWGSL: () => lU
+   45514: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L74-L91` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L73-L76) · [Before (L74-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L74-L91)

```diff
-     var cU = zU(40961),
-       yU = zU(44887),
-       QU = zU(44891),
-       AU = zU(44898),
-       FU = zU(44904),
-       oU = zU(44910),
-       DU = zU(44917),
-       EU = zU(44919),
-       YU = zU(44921),
-       NU = zU(44926),
-       IU = zU(44935),
-       pU = zU(44939),
-       aU = zU(44945),
-       tU = zU(44954),
-       gU = zU(44962);
-     const kU = "lightVxFragmentDeclaration",
- ... (2 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "logDepthVertex",
+       SH = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L95-L120` → after: `L80-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L80-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/639.js#L80-L97) · [Before (L95-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/639.js#L95-L120)

```diff
-     };
-     var ZU = zU(44966),
-       RU = zU(44975),
-       PU = zU(44977),
-       WU = zU(44983),
-       dU = zU(44992),
-       LU = zU(44997),
-       eU = zU(45004),
-       CU = zU(45006),
-       wU = zU(45010),
-       qU = zU(45019),
-       OU = zU(45027),
-       SU = zU(45032),
-       rU = zU(45036),
-       uU = zU(45041),
-       fU = zU(45043),
- ... (10 more removed lines; see GitHub link above)
+     }
+   },
+   64158: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       skyVertexShader: () => YH
+     });
+     var AH = LH(41138),
+       rH = LH(45440),
+       SH = LH(45408),
+       hH = LH(45417),
+       tH = LH(45489),
+       zH = LH(45514),
+       CH = LH(45497);
+     const EH = "skyVertexShader",
+       XH = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
+     AH.c.ShadersStore[EH] || (AH.c.ShadersStore[EH] = XH);
+ ... (2 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/640.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/640.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/640.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/640.js#L4)

```diff
-   44921: (UU, XU, zU) => {
+   45633: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/640.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/640.js#L6)

```diff
-       d: () => AU
+       c: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/640.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/640.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "instancesDeclaration",
-       QU = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bumpFragment",
+       SH = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/640.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/640.js#L17)

```diff
-   45010: (UU, XU, zU) => {
+   45618: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/640.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/640.js#L21-L24)

```diff
-     var cU = zU(40961);
-     const yU = "instancesVertex",
-       QU = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     LH(45583);
+     const rH = "bumpFragmentFunctions",
+       SH = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/640.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/640.js#L30)

```diff
-   44891: (UU, XU, zU) => {
+   45611: (HH, BH, LH) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/640.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/640.js#L34-L37)

```diff
-     var cU = zU(40961);
-     const yU = "meshUboDeclaration",
-       QU = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bumpFragmentMainFunctions",
+       SH = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/640.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/640.js#L43)

```diff
-   44887: (UU, XU, zU) => {
+   45570: (HH, BH, LH) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/640.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/640.js#L47-L50)

```diff
-     var cU = zU(40961);
-     const yU = "sceneUboDeclaration",
-       QU = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clusteredLightingFunctions",
+       SH = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L56-L58` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/640.js#L57-L59) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/640.js#L56-L58)

```diff
-   64557: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       greasedLineVertexShaderWGSL: () => YU
+   45641: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L60-L69` → after: `L61-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L61-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/640.js#L61-L77) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/640.js#L60-L69)

```diff
-     var cU = zU(40961),
-       yU = zU(44921),
-       QU = zU(44887),
-       AU = zU(44891),
-       FU = zU(45010);
-     const oU = "greasedLineVertexShader",
-       DU = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
-     cU.b.ShadersStoreWGSL[oU] || (cU.b.ShadersStoreWGSL[oU] = DU);
-     const EU = [yU.d, QU.b, AU.c, FU.b];
-     for (const NU of EU) cU.b.IncludesShadersStoreWGSL[NU.name] || (cU.b.IncludesShadersStoreWGSL[NU.name] = NU.shader);
+     var AH = LH(41138);
+     const rH = "decalFragment",
+       SH = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45652: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "lightFragment",
+       SH = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/641.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/641.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/641.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/641.js#L4)

```diff
-   44898: (UU, XU, zU) => {
+   45629: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/641.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/641.js#L6)

```diff
-       b: () => AU
+       d: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/641.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/641.js#L8-L12)

```diff
-     var cU = zU(40961);
-     zU(44887), zU(44891);
-     const yU = "defaultUboDeclaration",
-       QU = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneFragment",
+       SH = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L18` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/641.js#L17) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/641.js#L18)

```diff
-   44910: (UU, XU, zU) => {
+   45620: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L20` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/641.js#L19) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/641.js#L20)

```diff
-       c: () => AU
+       e: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L22-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/641.js#L21-L24) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/641.js#L22-L25)

```diff
-     var cU = zU(40961);
-     const yU = "helperFunctions",
-       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneFragmentDeclaration",
+       SH = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/641.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/641.js#L31)

```diff
-   44887: (UU, XU, zU) => {
+   45665: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/641.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/641.js#L33)

```diff
-       b: () => AU
+       c: () => hH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/641.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/641.js#L35-L38)

```diff
-     var cU = zU(40961);
-     const yU = "sceneUboDeclaration",
-       QU = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogFragment",
+       SH = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L44-L46` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/641.js#L43-L45) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/641.js#L44-L46)

```diff
-   45076: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       defaultPixelShaderWGSL: () => TU
+   45625: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L48-L69` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/641.js#L47-L50) · [Before (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/641.js#L48-L69)

```diff
-     var cU = zU(40961),
-       yU = zU(44887),
-       QU = zU(44891),
-       AU = zU(44898),
-       FU = zU(45080),
-       oU = zU(45085),
-       DU = zU(45090),
-       EU = zU(44935),
-       YU = zU(44910),
-       NU = zU(45093),
-       IU = zU(45099),
-       pU = zU(45106);
-     const aU = "clusteredLightingCompute",
-       tU = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
-     cU.b.IncludesShadersStoreWGSL[aU] || (cU.b.IncludesShadersStoreWGSL[aU] = tU);
-     const gU = {
- ... (6 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "fogFragmentDeclaration",
+       SH = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L73-L112` → after: `L54-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L54-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/641.js#L54-L69) · [Before (L73-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/641.js#L73-L112)

```diff
-     };
-     var ZU = zU(45113),
-       RU = zU(45115);
-     const PU = "fresnelFunction",
-       WU = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[PU] || (cU.b.IncludesShadersStoreWGSL[PU] = WU);
-     const dU = {
-       name: PU,
-       shader: WU
-     };
-     var LU = zU(45118),
-       eU = zU(45126),
-       CU = zU(45134),
-       wU = zU(45137),
-       qU = zU(45142),
-       OU = zU(45151),
- ... (24 more removed lines; see GitHub link above)
+     }
+   },
+   46015: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       colorPixelShader: () => XH
+     });
+     var AH = LH(41138),
+       rH = LH(45620),
+       SH = LH(45625),
+       hH = LH(45629),
+       tH = LH(45665);
+     const zH = "colorPixelShader",
+       CH = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
+     AH.c.ShadersStore[zH] || (AH.c.ShadersStore[zH] = CH);
+     const EH = [rH.e, SH.d, hH.d, tH.c];
+     for (const GH of EH) AH.c.IncludesShadersStore[GH.name] || (AH.c.IncludesShadersStore[GH.name] = GH.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/642.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/642.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/642.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/642.js#L4)

```diff
-   44910: (UU, XU, zU) => {
+   45819: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/642.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/642.js#L6)

```diff
-       c: () => AU
+       d: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/642.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/642.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "helperFunctions",
-       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bumpVertex",
+       SH = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/642.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/642.js#L17)

```diff
-   64295: (UU, XU, zU) => {
+   45742: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/642.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/642.js#L19)

```diff
-       b: () => AU
+       e: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/642.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/642.js#L21-L24)

```diff
-     var cU = zU(40961);
-     const yU = "pbrBRDFFunctions",
-       QU = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bumpVertexDeclaration",
+       SH = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/642.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/642.js#L30)

```diff
-   44887: (UU, XU, zU) => {
+   45696: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/642.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/642.js#L32)

```diff
-       b: () => AU
+       d: () => hH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L34` → after: `L34-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L34-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/642.js#L34-L61) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/642.js#L34)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
+     LH(45685), LH(45690);
+     const rH = "defaultUboDeclaration",
+       SH = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45707: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "helperFunctions",
+ ... (12 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L37` → after: `L64-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L64-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/642.js#L64-L120) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/642.js#L37)

```diff
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45679: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       defaultVertexShaderWGSL: () => ZH
+     });
+     var AH = LH(41138),
+       rH = LH(45685),
+       SH = LH(45690),
+       hH = LH(45696),
+       tH = LH(45700),
+       zH = LH(45707),
+ ... (41 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/643.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/643.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/643.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/643.js#L4)

```diff
-   45027: (UU, XU, zU) => {
+   45722: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/643.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/643.js#L6)

```diff
-       c: () => AU
+       b: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/643.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/643.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "bakedVertexAnimation",
-       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "instancesDeclaration",
+       SH = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/643.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/643.js#L17)

```diff
-   44919: (UU, XU, zU) => {
+   45797: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/643.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/643.js#L19)

```diff
-       e: () => AU
+       b: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/643.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/643.js#L21-L24)

```diff
-     var cU = zU(40961);
-     const yU = "bakedVertexAnimationDeclaration",
-       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "instancesVertex",
+       SH = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/643.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/643.js#L30)

```diff
-   44917: (UU, XU, zU) => {
+   45690: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/643.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/643.js#L32)

```diff
-       b: () => AU
+       c: () => hH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/643.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/643.js#L34-L37)

```diff
-     var cU = zU(40961);
-     const yU = "bonesDeclaration",
-       QU = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "meshUboDeclaration",
+       SH = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/643.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/643.js#L43)

```diff
-   45019: (UU, XU, zU) => {
+   45685: (HH, BH, LH) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/643.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/643.js#L47-L50)

```diff
-     var cU = zU(40961);
-     const yU = "bonesVertex",
-       QU = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "sceneUboDeclaration",
+       SH = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/643.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/643.js#L56-L58)

```diff
-   45043: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => AU
+   64729: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       greasedLineVertexShaderWGSL: () => XH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L60-L223` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/643.js#L60-L69) · [Before (L60-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/643.js#L60-L223)

```diff
-     var cU = zU(40961);
-     const yU = "bumpVertex",
-       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   45046: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "clipPlaneVertex",
-       QU = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
- ... (148 more removed lines; see GitHub link above)
+     var AH = LH(41138),
+       rH = LH(45722),
+       SH = LH(45685),
+       hH = LH(45690),
+       tH = LH(45797);
+     const zH = "greasedLineVertexShader",
+       CH = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
+     AH.c.ShadersStoreWGSL[zH] || (AH.c.ShadersStoreWGSL[zH] = CH);
+     const EH = [rH.b, SH.c, hH.c, tH.b];
+     for (const GH of EH) AH.c.IncludesShadersStoreWGSL[GH.name] || (AH.c.IncludesShadersStoreWGSL[GH.name] = GH.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/644.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/644.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69)

#### 1. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L4-L108` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/644.js#L4) · [Before (L4-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/644.js#L4-L108)

```diff
-   45027: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "bakedVertexAnimation",
-       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   44919: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => AU
- ... (89 more removed lines; see GitHub link above)
+   45696: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L112-L141` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/644.js#L8-L12) · [Before (L112-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/644.js#L112-L141)

```diff
-     var cU = zU(40961);
-     const yU = "instancesDeclaration",
-       QU = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   45010: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "instancesVertex",
-       QU = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
- ... (14 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     LH(45685), LH(45690);
+     const rH = "defaultUboDeclaration",
+       SH = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L147-L160` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/644.js#L18) · [Before (L147-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/644.js#L147-L160)

```diff
-   44983: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "logDepthDeclaration",
-       QU = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   45072: (UU, XU, zU) => {
+   45707: (HH, BH, LH) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L164-L193` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/644.js#L22-L25) · [Before (L164-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/644.js#L164-L193)

```diff
-     var cU = zU(40961);
-     const yU = "logDepthVertex",
-       QU = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   44935: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "mainUVVaryingDeclaration",
-       QU = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
- ... (14 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "helperFunctions",
+       SH = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L199` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/644.js#L31) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/644.js#L199)

```diff
-   45006: (UU, XU, zU) => {
+   45685: (HH, BH, LH) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L203-L375` → after: `L35-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L35-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/644.js#L35-L112) · [Before (L203-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/644.js#L203-L375)

```diff
-     var cU = zU(40961);
-     const yU = "morphTargetsVertex",
-       QU = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}\n#ifdef USE_VERTEX_PULLING\nvertexID=f32(vpVertexIndex)*uniforms.morphTargetTextureInfo.x;\n#else\nvertexID=f32 … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   44977: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "morphTargetsVertexDeclaration",
-       QU = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute position{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute normal{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute tangent{X} : vec3<f32>;\n#endif\n# … [truncated]
- ... (157 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "sceneUboDeclaration",
+       SH = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45848: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       defaultPixelShaderWGSL: () => pH
+     });
+     var AH = LH(41138),
+       rH = LH(45685),
+       SH = LH(45690),
+ ... (62 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/645.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/645.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85)

#### 1. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L4-L43` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/645.js#L4) · [Before (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/645.js#L4-L43)

```diff
-   45165: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "clipPlaneFragment",
-       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   45154: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => AU
- ... (24 more removed lines; see GitHub link above)
+   45707: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L47-L76` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/645.js#L8-L11) · [Before (L47-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/645.js#L47-L76)

```diff
-     var cU = zU(40961);
-     const yU = "depthPrePass",
-       QU = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   45205: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "fogFragment",
-       QU = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
- ... (14 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "helperFunctions",
+       SH = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L82` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/645.js#L17) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/645.js#L82)

```diff
-   45126: (UU, XU, zU) => {
+   64498: (HH, BH, LH) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L86-L219` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/645.js#L21-L24) · [Before (L86-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/645.js#L86-L219)

```diff
-     var cU = zU(40961);
-     const yU = "imageProcessingDeclaration",
-       QU = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   45134: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "imageProcessingFunctions",
-       QU = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
- ... (118 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "pbrBRDFFunctions",
+       SH = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L225` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/645.js#L30) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/645.js#L225)

```diff
-   45216: (UU, XU, zU) => {
+   45685: (HH, BH, LH) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L229-L298` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/645.js#L34-L37) · [Before (L229-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/645.js#L229-L298)

```diff
-     var cU = zU(40961);
-     const yU = "oitFragment",
-       QU = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nvar fragDepth: f32=fragmentInputs.position.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nvar halfFloat: u32=pack2x16float( vec2f(fragDepth));var full: vec2f=unpack2x16float(halfFloat);fragDepth=full.x;\n#endif\nvar fragCoord … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   45085: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40961);
-     zU(45080);
-     const yU = "prePassDeclaration",
- ... (54 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "sceneUboDeclaration",
+       SH = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/646.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/646.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L4-L43` → after: `L4-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/646.js#L4-L43) · [Before (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/646.js#L4-L43)

```diff
-   45165: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "clipPlaneFragment",
-       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   45154: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => AU
- ... (24 more removed lines; see GitHub link above)
+   45803: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "bakedVertexAnimation",
+       SH = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45716: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+ ... (24 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L47-L161` → after: `L47-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L47-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/646.js#L47-L199) · [Before (L47-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/646.js#L47-L161)

```diff
-     var cU = zU(40961);
-     const yU = "fogFragmentDeclaration",
-       QU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   44910: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "helperFunctions",
-       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
- ... (99 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "bonesVertex",
+       SH = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45819: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "bumpVertex",
+       SH = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+ ... (137 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L163-L189` → after: `L201-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L201-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/646.js#L201-L223) · [Before (L163-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/646.js#L163-L189)

```diff
-       particlesPixelShaderWGSL: () => RU
-     });
-     var cU = zU(40961),
-       yU = zU(45080),
-       QU = zU(45085),
-       AU = zU(45154),
-       FU = zU(45126),
-       oU = zU(44983),
-       DU = zU(44910),
-       EU = zU(45134),
-       YU = zU(45158),
-       NU = zU(45165),
-       IU = zU(45201),
-       pU = zU(45205),
-       aU = zU(45212);
-     const tU = "geometryRenderingFragment",
- ... (11 more removed lines; see GitHub link above)
+       geometryVertexShaderWGSL: () => UH
+     });
+     var AH = LH(41138),
+       rH = LH(45711),
+       SH = LH(45716),
+       hH = LH(45759),
+       tH = LH(45761),
+       zH = LH(45722),
+       CH = LH(45685),
+       EH = LH(45746),
+       XH = LH(64501),
+       GH = LH(45783),
+       YH = LH(45789),
+       uH = LH(45797),
+       QH = LH(45799),
+       WH = LH(45803),
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/647.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/647.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608)

#### 1. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L4)

```diff
-   45165: (UU, XU, zU) => {
+   45803: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L6` → after: `L6-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L6-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L6-L84) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L6)

```diff
-       c: () => AU
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "bakedVertexAnimation",
+       SH = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45716: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+ ... (63 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L8-L11` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L86-L89) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneFragment",
-       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogVertex",
+       SH = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L17` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L95) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L17)

```diff
-   45154: (UU, XU, zU) => {
+   45748: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L21-L24` → after: `L99-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L99-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L99-L115) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L21-L24)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneFragmentDeclaration",
-       QU = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogVertexDeclaration",
+       SH = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45722: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "instancesDeclaration",
+       SH = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L30` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L121) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L30)

```diff
-   45205: (UU, XU, zU) => {
+   45797: (HH, BH, LH) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L34-L37` → after: `L125-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L125-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L125-L141) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L34-L37)

```diff
-     var cU = zU(40961);
-     const yU = "fogFragment",
-       QU = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "instancesVertex",
+       SH = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45752: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "lightVxUboDeclaration",
+       SH = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L43` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L147) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L43)

```diff
-   45158: (UU, XU, zU) => {
+   45764: (HH, BH, LH) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L47-L50` → after: `L151-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L151-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L151-L180) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L47-L50)

```diff
-     var cU = zU(40961);
-     const yU = "fogFragmentDeclaration",
-       QU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "logDepthDeclaration",
+       SH = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45842: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "logDepthVertex",
+       SH = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
+ ... (14 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L56` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L186) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L56)

```diff
-   44910: (UU, XU, zU) => {
+   45690: (HH, BH, LH) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L60-L63` → after: `L190-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L190-L193) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L60-L63)

```diff
-     var cU = zU(40961);
-     const yU = "helperFunctions",
-       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "meshUboDeclaration",
+       SH = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L69` → after: `L199-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L199-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L199-L212) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L69)

```diff
-   44983: (UU, XU, zU) => {
+   45789: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "morphTargetsVertex",
+       SH = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}\n#ifdef USE_VERTEX_PULLING\nvertexID=f32(vpVertexIndex)*uniforms.morphTargetTextureInfo.x;\n#else\nvertexID=f32 … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45761: (HH, BH, LH) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L73-L76` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L216-L219) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L73-L76)

```diff
-     var cU = zU(40961);
-     const yU = "logDepthDeclaration",
-       QU = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "morphTargetsVertexDeclaration",
+       SH = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute position{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute normal{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute tangent{X} : vec3<f32>;\n#endif\n# … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L82` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L225) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L82)

```diff
-   45201: (UU, XU, zU) => {
+   45783: (HH, BH, LH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L86-L89` → after: `L229-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L229-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L229-L258) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L86-L89)

```diff
-     var cU = zU(40961);
-     const yU = "logDepthFragment",
-       QU = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "morphTargetsVertexGlobal",
+       SH = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nvar vertexID : f32;\n#endif\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45759: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "morphTargetsVertexGlobalDeclaration",
+       SH = "#ifdef MORPHTARGETS\nuniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;\n#ifdef MORPHTARGETS_TEXTURE \nuniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f3 … [truncated]
+ ... (14 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L95-L97` → after: `L264-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L264-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L264-L292) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L95-L97)

```diff
-   64008: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       skyPixelShaderWGSL: () => gU
+   45731: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "prePassVertexDeclaration",
+       SH = "#ifdef PREPASS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELO … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45736: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+ ... (13 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L99-L109` → after: `L294-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L294-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L294-L297) · [Before (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L99-L109)

```diff
-     var cU = zU(40961),
-       yU = zU(45154),
-       QU = zU(44983),
-       AU = zU(45158),
-       FU = zU(44910),
-       oU = zU(45165),
-       DU = zU(45201),
-       EU = zU(45205);
-     const YU = "imageProcessingCompatibility",
-       NU = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[YU] || (cU.b.IncludesShadersStoreWGSL[YU] = NU);
+     var AH = LH(41138);
+     const rH = "samplerVertexImplementation",
+       SH = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nif (uniforms.v_INFONAME_==0.)\n{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\n#ifdef UV2\nelse if (uniforms.v_INFONAME_==1.)\n{vertexOutputs.v_VARYINGNAME_UV= (unifor … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L111-L118` → after: `L299-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L299-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/647.js#L299-L375) · [Before (L111-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/647.js#L111-L118)

```diff
-         name: YU,
-         shader: NU
-       },
-       pU = "skyPixelShader",
-       aU = "varying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform cameraPosition: vec3f;uniform cameraOffset: vec3f;uniform up: vec3f;uniform luminance: f32;uniform turbidity: f32;uniform rayleigh: f32;unif … [truncated]
-     cU.b.ShadersStoreWGSL[pU] || (cU.b.ShadersStoreWGSL[pU] = aU);
-     const tU = [yU.d, QU.c, AU.e, FU.c, oU.c, DU.b, EU.b, IU];
-     for (const kU of tU) cU.b.IncludesShadersStoreWGSL[kU.name] || (cU.b.IncludesShadersStoreWGSL[kU.name] = kU.shader);
+       name: rH,
+       shader: SH
+     }
+   },
+   45833: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "shadowsVertex",
+       SH = "#ifdef SHADOWS\n#if defined(SHADOWCSM{X})\n#ifdef SCENE_UBO\nvertexOutputs.vPositionFromCamera{X}=scene.view*worldPos;\n#else\nvertexOutputs.vPositionFromCamera{X}=uniforms.view*worldPos;\n#endif\n#if SHADOWCSMNUM_CASCADES{X}>0\nvertexOutputs.vPositionFromLight{X}_0=u … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+ ... (61 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/648.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/648.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873)

#### 1. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L4` → after: `L4-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L4-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/648.js#L4-L108) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/648.js#L4)

```diff
-   44910: (UU, XU, zU) => {
+   45948: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "clipPlaneFragment",
+       SH = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45936: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+ ... (89 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L8-L11` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/648.js#L112-L115) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/648.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "helperFunctions",
-       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "lightUboDeclaration",
+       SH = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L17-L19` → after: `L121-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L121-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/648.js#L121-L293) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/648.js#L17-L19)

```diff
-   64051: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       rgbdDecodePixelShaderWGSL: () => oU
+   45764: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "logDepthDeclaration",
+       SH = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45966: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+ ... (157 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L21-L27` → after: `L295-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/648.js#L295-L298) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/648.js#L21-L27)

```diff
-     var cU = zU(40961),
-       yU = zU(44910);
-     const QU = "rgbdDecodePixelShader",
-       AU = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
-     cU.b.ShadersStoreWGSL[QU] || (cU.b.ShadersStoreWGSL[QU] = AU);
-     const FU = [yU.c];
-     for (const DU of FU) cU.b.IncludesShadersStoreWGSL[DU.name] || (cU.b.IncludesShadersStoreWGSL[DU.name] = DU.shader);
+     var AH = LH(41138);
+     const rH = "textureRepetitionFunctions",
+       SH = "#if TEXTURE_REPETITION_MODE>0\nfn _texRepHash4(p: vec2f)->vec4f {return fract(sin(vec4f(\n1.0+dot(p,vec2f(37.0,17.0)),\n2.0+dot(p,vec2f(11.0,47.0)),\n3.0+dot(p,vec2f(41.0,29.0)),\n4.0+dot(p,vec2f(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nfn _te … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/649.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/649.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/649.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/649.js#L4)

```diff
-   44910: (UU, XU, zU) => {
+   45948: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/649.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/649.js#L6)

```diff
-       c: () => AU
+       b: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/649.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/649.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "helperFunctions",
-       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneFragment",
+       SH = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L17` → after: `L17-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L17-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/649.js#L17-L161) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/649.js#L17)

```diff
-   64078: (UU, XU, zU) => {
+   45936: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "clipPlaneFragmentDeclaration",
+       SH = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45973: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+ ... (129 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L19` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/649.js#L163) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/649.js#L19)

```diff
-       rgbdEncodePixelShaderWGSL: () => oU
+       particlesPixelShaderWGSL: () => UH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L21-L27` → after: `L165-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L165-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/649.js#L165-L189) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/649.js#L21-L27)

```diff
-     var cU = zU(40961),
-       yU = zU(44910);
-     const QU = "rgbdEncodePixelShader",
-       AU = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
-     cU.b.ShadersStoreWGSL[QU] || (cU.b.ShadersStoreWGSL[QU] = AU);
-     const FU = [yU.c];
-     for (const DU of FU) cU.b.IncludesShadersStoreWGSL[DU.name] || (cU.b.IncludesShadersStoreWGSL[DU.name] = DU.shader);
+     var AH = LH(41138),
+       rH = LH(45855),
+       SH = LH(45863),
+       hH = LH(45936),
+       tH = LH(45914),
+       zH = LH(45764),
+       CH = LH(45707),
+       EH = LH(45916),
+       XH = LH(45939),
+       GH = LH(45948),
+       YH = LH(45966),
+       uH = LH(45973),
+       QH = LH(45979);
+     const WH = "geometryRenderingFragment",
+       MH = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nlet geometryCoverage=select(0.0,1.0,geometryColor.a>0.4);var fragData: array<vec4f,SCENE_MRT_COUNT>;\n#ifdef PREPASS_COLOR\nfragData[PREPASS_COLOR_INDEX]=geometryColor;\n#endif\n#ifdef PREPASS_POSITION\nfragData[PREPASS_POSITION_ … [truncated]
+     AH.c.IncludesShadersStoreWGSL[WH] || (AH.c.IncludesShadersStoreWGSL[WH] = MH);
+ ... (9 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/650.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/650.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L4)

```diff
-   45027: (UU, XU, zU) => {
+   45948: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L6)

```diff
-       c: () => AU
+       b: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "bakedVertexAnimation",
-       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneFragment",
+       SH = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L17)

```diff
-   44919: (UU, XU, zU) => {
+   45936: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L19)

```diff
-       e: () => AU
+       b: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L21-L24)

```diff
-     var cU = zU(40961);
-     const yU = "bakedVertexAnimationDeclaration",
-       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneFragmentDeclaration",
+       SH = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L30)

```diff
-   44917: (UU, XU, zU) => {
+   45973: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L32)

```diff
-       b: () => AU
+       d: () => hH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L34-L37)

```diff
-     var cU = zU(40961);
-     const yU = "bonesDeclaration",
-       QU = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogFragment",
+       SH = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L43)

```diff
-   45019: (UU, XU, zU) => {
+   45939: (HH, BH, LH) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L47-L50)

```diff
-     var cU = zU(40961);
-     const yU = "bonesVertex",
-       QU = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogFragmentDeclaration",
+       SH = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L56)

```diff
-   45046: (UU, XU, zU) => {
+   45707: (HH, BH, LH) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L58)

```diff
-       e: () => AU
+       d: () => hH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L60-L63)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertex",
-       QU = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "helperFunctions",
+       SH = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L69)

```diff
-   44954: (UU, XU, zU) => {
+   45764: (HH, BH, LH) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L71)

```diff
-       d: () => AU
+       e: () => hH
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L73-L76)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertexDeclaration",
-       QU = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "logDepthDeclaration",
+       SH = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L82)

```diff
-   45052: (UU, XU, zU) => {
+   45966: (HH, BH, LH) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L86-L89)

```diff
-     var cU = zU(40961);
-     const yU = "fogVertex",
-       QU = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "logDepthFragment",
+       SH = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L95-L97` → after: `L95-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L95-L97) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L95-L97)

```diff
-   44962: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
+   64178: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       skyPixelShaderWGSL: () => MH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L99-L102` → after: `L99-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L99-L109) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L99-L102)

```diff
-     var cU = zU(40961);
-     const yU = "fogVertexDeclaration",
-       QU = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138),
+       rH = LH(45936),
+       SH = LH(45764),
+       hH = LH(45939),
+       tH = LH(45707),
+       zH = LH(45948),
+       CH = LH(45966),
+       EH = LH(45973);
+     const XH = "imageProcessingCompatibility",
+       GH = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[XH] || (AH.c.IncludesShadersStoreWGSL[XH] = GH);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L104-L167` → after: `L111-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L111-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/650.js#L111-L118) · [Before (L104-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/650.js#L104-L167)

```diff
-       name: yU,
-       shader: QU
-     }
-   },
-   44921: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "instancesDeclaration",
-       QU = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
- ... (48 more removed lines; see GitHub link above)
+         name: XH,
+         shader: GH
+       },
+       uH = "skyPixelShader",
+       QH = "varying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform cameraPosition: vec3f;uniform cameraOffset: vec3f;uniform up: vec3f;uniform luminance: f32;uniform turbidity: f32;uniform rayleigh: f32;unif … [truncated]
+     AH.c.ShadersStoreWGSL[uH] || (AH.c.ShadersStoreWGSL[uH] = QH);
+     const WH = [rH.b, SH.e, hH.c, tH.d, zH.b, CH.b, EH.d, YH];
+     for (const xH of WH) AH.c.IncludesShadersStoreWGSL[xH.name] || (AH.c.IncludesShadersStoreWGSL[xH.name] = xH.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/651.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/651.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/651.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/651.js#L4)

```diff
-   45043: (UU, XU, zU) => {
+   45707: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/651.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/651.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "bumpVertex",
-       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "helperFunctions",
+       SH = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/651.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/651.js#L17-L19)

```diff
-   44945: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => AU
+   64229: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       rgbdDecodePixelShaderWGSL: () => zH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L21-L102` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/651.js#L21-L27) · [Before (L21-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/651.js#L21-L102)

```diff
-     var cU = zU(40961);
-     const yU = "bumpVertexDeclaration",
-       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   64304: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "harmonicsFunctions",
-       QU = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
- ... (66 more removed lines; see GitHub link above)
+     var AH = LH(41138),
+       rH = LH(45707);
+     const SH = "rgbdDecodePixelShader",
+       hH = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
+     AH.c.ShadersStoreWGSL[SH] || (AH.c.ShadersStoreWGSL[SH] = hH);
+     const tH = [rH.d];
+     for (const CH of tH) AH.c.IncludesShadersStoreWGSL[CH.name] || (AH.c.IncludesShadersStoreWGSL[CH.name] = CH.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/652.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/652.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/652.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/652.js#L4)

```diff
-   45046: (UU, XU, zU) => {
+   45707: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/652.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/652.js#L6)

```diff
-       e: () => AU
+       d: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/652.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/652.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertex",
-       QU = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "helperFunctions",
+       SH = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/652.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/652.js#L17-L19)

```diff
-   44954: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => AU
+   64248: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       rgbdEncodePixelShaderWGSL: () => zH
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L21-L97` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/652.js#L21-L27) · [Before (L21-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/652.js#L21-L97)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertexDeclaration",
-       QU = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   45052: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "fogVertex",
-       QU = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
- ... (61 more removed lines; see GitHub link above)
+     var AH = LH(41138),
+       rH = LH(45707);
+     const SH = "rgbdEncodePixelShader",
+       hH = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
+     AH.c.ShadersStoreWGSL[SH] || (AH.c.ShadersStoreWGSL[SH] = hH);
+     const tH = [rH.d];
+     for (const CH of tH) AH.c.IncludesShadersStoreWGSL[CH.name] || (AH.c.IncludesShadersStoreWGSL[CH.name] = CH.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/653.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/653.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74)

#### 1. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L4)

```diff
-   45046: (UU, XU, zU) => {
+   45803: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L6)

```diff
-       e: () => AU
+       d: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertex",
-       QU = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bakedVertexAnimation",
+       SH = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L17)

```diff
-   44954: (UU, XU, zU) => {
+   45716: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L19)

```diff
-       d: () => AU
+       b: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L21-L24)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneVertexDeclaration",
-       QU = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bakedVertexAnimationDeclaration",
+       SH = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L30)

```diff
-   45052: (UU, XU, zU) => {
+   45711: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L32)

```diff
-       b: () => AU
+       d: () => hH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L34-L37)

```diff
-     var cU = zU(40961);
-     const yU = "fogVertex",
-       QU = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bonesDeclaration",
+       SH = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L43)

```diff
-   44962: (UU, XU, zU) => {
+   45799: (HH, BH, LH) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L45)

```diff
-       c: () => AU
+       e: () => hH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L47-L50)

```diff
-     var cU = zU(40961);
-     const yU = "fogVertexDeclaration",
-       QU = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bonesVertex",
+       SH = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L56)

```diff
-   44983: (UU, XU, zU) => {
+   45824: (HH, BH, LH) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L58)

```diff
-       c: () => AU
+       d: () => hH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L60-L63)

```diff
-     var cU = zU(40961);
-     const yU = "logDepthDeclaration",
-       QU = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertex",
+       SH = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L69)

```diff
-   45072: (UU, XU, zU) => {
+   45746: (HH, BH, LH) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L73-L76)

```diff
-     var cU = zU(40961);
-     const yU = "logDepthVertex",
-       QU = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertexDeclaration",
+       SH = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L82` → after: `L82-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L82-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L82-L147) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L82)

```diff
-   64006: (UU, XU, zU) => {
+   45831: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "fogVertex",
+       SH = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45748: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+ ... (50 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L84` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L149) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L84)

```diff
-       skyVertexShaderWGSL: () => IU
+       colorVertexShaderWGSL: () => xH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L86-L97` → after: `L151-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/653.js#L151-L167) · [Before (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/653.js#L86-L97)

```diff
-     var cU = zU(40961),
-       yU = zU(44983),
-       QU = zU(44954),
-       AU = zU(44962),
-       FU = zU(45046),
-       oU = zU(45072),
-       DU = zU(45052);
-     const EU = "skyVertexShader",
-       YU = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying v … [truncated]
-     cU.b.ShadersStoreWGSL[EU] || (cU.b.ShadersStoreWGSL[EU] = YU);
-     const NU = [yU.c, QU.d, AU.c, FU.e, oU.d, DU.b];
-     for (const pU of NU) cU.b.IncludesShadersStoreWGSL[pU.name] || (cU.b.IncludesShadersStoreWGSL[pU.name] = pU.shader);
+     var AH = LH(41138),
+       rH = LH(45711),
+       SH = LH(45716),
+       hH = LH(45746),
+       tH = LH(45748),
+       zH = LH(45722),
+       CH = LH(45797),
+       EH = LH(45799),
+       XH = LH(45803),
+       GH = LH(45824),
+       YH = LH(45831),
+       uH = LH(45840);
+     const QH = "colorVertexShader",
+       WH = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform view: mat4x4f;\n#endif\n#i … [truncated]
+     AH.c.ShadersStoreWGSL[QH] || (AH.c.ShadersStoreWGSL[QH] = WH);
+     const MH = [rH.d, SH.b, hH.d, tH.d, zH.b, CH.b, EH.e, XH.d, GH.d, YH.b, uH.d];
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/654.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/654.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L4-L57` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/654.js#L4) · [Before (L4-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/654.js#L4-L57)

```diff
-   45173: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "bumpFragment",
-       QU = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   45151: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
- ... (38 more removed lines; see GitHub link above)
+   45819: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L61-L103` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/654.js#L8-L11) · [Before (L61-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/654.js#L61-L103)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneFragmentDeclaration",
-       QU = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   45080: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "objectIdFunctions",
-       QU = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
- ... (27 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "bumpVertex",
+       SH = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L109` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/654.js#L17) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/654.js#L109)

```diff
-   64491: (UU, XU, zU) => {
+   45742: (HH, BH, LH) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L113-L116` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/654.js#L21-L24) · [Before (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/654.js#L113-L116)

```diff
-     var cU = zU(40961);
-     const yU = "openpbrIblFunctions",
-       QU = "#ifdef REFLECTION\nfn sampleIrradiance(\nsurfaceNormal: vec3f\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,vEnvironmentIrradianceSH: vec3f\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defi … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "bumpVertexDeclaration",
+       SH = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L122` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/654.js#L30) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/654.js#L122)

```diff
-   64503: (UU, XU, zU) => {
+   64501: (HH, BH, LH) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L126-L129` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/654.js#L34-L37) · [Before (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/654.js#L126-L129)

```diff
-     var cU = zU(40961);
-     const yU = "openpbrSubsurfaceLayerData",
-       QU = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "harmonicsFunctions",
+       SH = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L135-L187` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/654.js#L43) · [Before (L135-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/654.js#L135-L187)

```diff
-   64498: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "openpbrTransmissionLayerData",
-       QU = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   64329: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
- ... (37 more removed lines; see GitHub link above)
+   64493: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L191-L194` → after: `L47-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/654.js#L47-L51) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/654.js#L191-L194)

```diff
-     var cU = zU(40961);
-     const yU = "samplerFragmentDeclaration",
-       QU = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     LH(45685), LH(45690);
+     const rH = "pbrUboDeclaration",
+       SH = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L200` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/654.js#L57) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/654.js#L200)

```diff
-   64516: (UU, XU, zU) => {
+   64488: (HH, BH, LH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L202-L227` → after: `L59-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L59-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/654.js#L59-L102) · [Before (L202-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/654.js#L202-L227)

```diff
-       geometryPixelShaderWGSL: () => dU
-     });
-     var cU = zU(40961),
-       yU = zU(45080),
-       QU = zU(45154),
-       AU = zU(45142),
-       FU = zU(45115),
-       oU = zU(45151),
-       DU = zU(44910),
-       EU = zU(64329),
-       YU = zU(44887),
-       NU = zU(64295),
-       IU = zU(64479),
-       pU = zU(64387),
-       aU = zU(45118),
-       tU = zU(64482),
- ... (10 more removed lines; see GitHub link above)
+       pbrVertexShaderWGSL: () => wH
+     });
+     var AH = LH(41138),
+       rH = LH(45685),
+       SH = LH(45690),
+       hH = LH(64493),
+       tH = LH(45700),
+       zH = LH(45734),
+       CH = LH(45707),
+       EH = LH(64498),
+       XH = LH(45711),
+       GH = LH(45716),
+       YH = LH(45722),
+       uH = LH(45731),
+       QH = LH(45736),
+       WH = LH(64501),
+ ... (28 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/655.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/655.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L4)

```diff
-   45173: (UU, XU, zU) => {
+   45824: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L6)

```diff
-       c: () => AU
+       d: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "bumpFragment",
-       QU = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertex",
+       SH = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L17)

```diff
-   45151: (UU, XU, zU) => {
+   45746: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L19)

```diff
-       b: () => AU
+       d: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L21-L25)

```diff
-     var cU = zU(40961);
-     zU(45115);
-     const yU = "bumpFragmentFunctions",
-       QU = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertexDeclaration",
+       SH = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L31)

```diff
-   45142: (UU, XU, zU) => {
+   45831: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L33)

```diff
-       e: () => AU
+       b: () => hH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L35-L38)

```diff
-     var cU = zU(40961);
-     const yU = "bumpFragmentMainFunctions",
-       QU = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogVertex",
+       SH = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L44)

```diff
-   45180: (UU, XU, zU) => {
+   45748: (HH, BH, LH) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L46)

```diff
-       e: () => AU
+       d: () => hH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L48-L51)

```diff
-     var cU = zU(40961);
-     const yU = "decalFragment",
-       QU = "#ifdef DECAL\nvar decalTempColor=decalColor.rgb;var decalTempAlpha=decalColor.a;\n#ifdef GAMMADECAL\ndecalTempColor=toLinearSpaceVec3(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalTempAlpha=decalColor.a*decalColor.a;\n#endif\nsurfaceAlbedo=mix(surfaceAlbedo … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogVertexDeclaration",
+       SH = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L57)

```diff
-   45195: (UU, XU, zU) => {
+   45764: (HH, BH, LH) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L59` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L58) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L59)

```diff
-       c: () => AU
+       e: () => hH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L61-L64` → after: `L60-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L60-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/655.js#L60-L97) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/655.js#L61-L64)

```diff
-     var cU = zU(40961);
-     const yU = "lightFragment",
-       QU = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvar diffuse{X}: vec4f=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X})\n{let slic … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "logDepthDeclaration",
+       SH = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45842: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "logDepthVertex",
+       SH = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
+ ... (22 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/656.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/656.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/656.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/656.js#L4)

```diff
-   45165: (UU, XU, zU) => {
+   45824: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/656.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/656.js#L6)

```diff
-       c: () => AU
+       d: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/656.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/656.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneFragment",
-       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertex",
+       SH = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/656.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/656.js#L17)

```diff
-   45154: (UU, XU, zU) => {
+   45746: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/656.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/656.js#L21-L24)

```diff
-     var cU = zU(40961);
-     const yU = "clipPlaneFragmentDeclaration",
-       QU = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "clipPlaneVertexDeclaration",
+       SH = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/656.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/656.js#L30)

```diff
-   45205: (UU, XU, zU) => {
+   45831: (HH, BH, LH) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/656.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/656.js#L34-L37)

```diff
-     var cU = zU(40961);
-     const yU = "fogFragment",
-       QU = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogVertex",
+       SH = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/656.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/656.js#L43)

```diff
-   45158: (UU, XU, zU) => {
+   45748: (HH, BH, LH) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/656.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/656.js#L45)

```diff
-       e: () => AU
+       d: () => hH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/656.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/656.js#L47-L50)

```diff
-     var cU = zU(40961);
-     const yU = "fogFragmentDeclaration",
-       QU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fogVertexDeclaration",
+       SH = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L56` → after: `L56-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L56-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/656.js#L56-L82) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/656.js#L56)

```diff
-   45229: (UU, XU, zU) => {
+   45764: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "logDepthDeclaration",
+       SH = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45842: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+ ... (11 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L58` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/656.js#L84) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/656.js#L58)

```diff
-       colorPixelShaderWGSL: () => YU
+       skyVertexShaderWGSL: () => YH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L60-L69` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/656.js#L86-L97) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/656.js#L60-L69)

```diff
-     var cU = zU(40961),
-       yU = zU(45154),
-       QU = zU(45158),
-       AU = zU(45165),
-       FU = zU(45205);
-     const oU = "colorPixelShader",
-       DU = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
-     cU.b.ShadersStoreWGSL[oU] || (cU.b.ShadersStoreWGSL[oU] = DU);
-     const EU = [yU.d, QU.e, AU.c, FU.b];
-     for (const NU of EU) cU.b.IncludesShadersStoreWGSL[NU.name] || (cU.b.IncludesShadersStoreWGSL[NU.name] = NU.shader);
+     var AH = LH(41138),
+       rH = LH(45764),
+       SH = LH(45746),
+       hH = LH(45748),
+       tH = LH(45824),
+       zH = LH(45842),
+       CH = LH(45831);
+     const EH = "skyVertexShader",
+       XH = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying v … [truncated]
+     AH.c.ShadersStoreWGSL[EH] || (AH.c.ShadersStoreWGSL[EH] = XH);
+     const GH = [rH.e, SH.d, hH.d, tH.d, zH.b, CH.b];
+     for (const uH of GH) AH.c.IncludesShadersStoreWGSL[uH.name] || (AH.c.IncludesShadersStoreWGSL[uH.name] = uH.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/657.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/657.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L4-L63` → after: `L4-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L4-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/657.js#L4-L230) · [Before (L4-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/657.js#L4-L63)

```diff
-   45219: (UU, XU, zU) => {
-     function cU(UU) {
-       return Math.floor(UU / 8)
-     }
- 
-     function yU(UU) {
-       return 1 << UU % 8
-     }
-     zU.d(XU, {
-       OptimizeIndices: () => AU
-     });
-     class QU {
-       constructor(UU) {
-         this.size = UU, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
-       }
-       get(UU) {
- ... (44 more removed lines; see GitHub link above)
+   45951: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "bumpFragment",
+       SH = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45929: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+ ... (211 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/658.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/658.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25)

#### 1. `bundles/preprod.bloxd.io/chunks/js/658.js` (Changed code · before: `L4-L11` → after: `L4-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25) · [After (L4-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/658.js#L4-L68) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/658.js#L4-L11)

```diff
-   63955: (UU, XU, zU) => {
-     var cU;
-     zU.r(XU), zU.d(XU, {
-         ShaderLanguage: () => cU
-       }),
-       function(UU) {
-         UU[UU.GLSL = 0] = "GLSL", UU[UU.WGSL = 1] = "WGSL"
-       }(cU || (cU = {}))
+   45951: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "bumpFragment",
+       SH = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45929: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+ ... (49 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/659.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/659.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842)

#### 1. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L4` → after: `L4-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/659.js#L4-L56) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/659.js#L4)

```diff
-   63962: (UU, XU, zU) => {
+   45948: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "clipPlaneFragment",
+       SH = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   45936: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+ ... (37 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L6` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/659.js#L58) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/659.js#L6)

```diff
-       postprocessVertexShader: () => AU
+       colorPixelShaderWGSL: () => XH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L8-L11` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/659.js#L60-L69) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/659.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "postprocessVertexShader",
-       QU = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
+     var AH = LH(41138),
+       rH = LH(45936),
+       SH = LH(45939),
+       hH = LH(45948),
+       tH = LH(45973);
+     const zH = "colorPixelShader",
+       CH = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
+     AH.c.ShadersStoreWGSL[zH] || (AH.c.ShadersStoreWGSL[zH] = CH);
+     const EH = [rH.b, SH.c, hH.b, tH.d];
+     for (const GH of EH) AH.c.IncludesShadersStoreWGSL[GH.name] || (AH.c.IncludesShadersStoreWGSL[GH.name] = GH.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/660.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/660.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80)

#### 1. `bundles/preprod.bloxd.io/chunks/js/660.js` (Changed code · before: `L4-L9` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/660.js#L4-L7) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/660.js#L4-L9)

```diff
-   63977: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       WorldCodeAiOutOfUsage: () => QU
-     });
-     var cU = zU(1494),
-       yU = zU(1305);
+   45992: (HH, BH, LH) => {
+     function AH(HH) {
+       return Math.floor(HH / 8)
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/660.js` (Changed code · before: `L12-L25` → after: `L10-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80) · [After (L10-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/660.js#L10-L63) · [Before (L12-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/660.js#L12-L25)

```diff
-       let {
-         onGetSuperRank: XU
-       } = UU;
-       return (0, yU.jsxs)("div", {
-         className: "WorldCodeAiOutOfUsage",
-         children: [(0, yU.jsx)("p", {
-           className: "WorldCodeAiOutOfUsageText",
-           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
-         }), (0, yU.jsx)(cU.l, {
-           className: "WorldCodeAiOutOfUsageButton",
-           onClick: XU,
-           children: "Get Super Rank"
-         })]
-       })
+       return 1 << HH % 8
+     }
+     LH.d(BH, {
+       OptimizeIndices: () => hH
+     });
+     class SH {
+       constructor(HH) {
+         this.size = HH, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
+       }
+       get(HH) {
+         if (HH >= this.size) throw new RangeError("Bit index out of range");
+         const BH = AH(HH),
+           LH = rH(HH);
+         return 0 !== (this._byteArray[BH] & LH)
+       }
+       set(HH, BH) {
+ ... (38 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/661.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/661.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/661.js` (Changed code · before: `L4` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7ad) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/661.js#L4-L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/661.js#L4)

```diff
-   63994: (UU, XU, zU) => {
+   64102: (HH, BH, LH) => {
+     var AH;
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/661.js` (Changed code · before: `L6-L35` → after: `L7-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7adR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7ad) · [After (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/661.js#L7-L11) · [Before (L6-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/661.js#L6-L35)

```diff
-       particlesPixelShader: () => ZU
-     });
-     var cU = zU(40961),
-       yU = zU(44754),
-       QU = zU(44759),
-       AU = zU(44833),
-       FU = zU(44803),
-       oU = zU(44671),
-       DU = zU(44588),
-       EU = zU(44810),
-       YU = zU(44838),
-       NU = zU(44841),
-       IU = zU(44860),
-       pU = zU(44866);
-     const aU = "geometryRenderingFragment",
-       tU = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
- ... (14 more removed lines; see GitHub link above)
+         ShaderLanguage: () => AH
+       }),
+       function(HH) {
+         HH[HH.GLSL = 0] = "GLSL", HH[HH.WGSL = 1] = "WGSL"
+       }(AH || (AH = {}))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/662.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/662.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/662.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/662.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/662.js#L4-L6)

```diff
-   64010: (UU, XU, zU) => {
-     zU.d(XU, {
-       allocateF64Mat4: () => yU
+   64110: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       postprocessVertexShader: () => hH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/662.js` (Changed code · before: `L8-L11` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/662.js#L8-L14) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/662.js#L8-L11)

```diff
-     var cU = zU(44417);
- 
-     function yU() {
-       return new cU.f(16)
+     var AH = LH(41138);
+     const rH = "postprocessVertexShader",
+       SH = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/663.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/663.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/663.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/663.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/663.js#L4)

```diff
-   64017: (UU, XU, zU) => {
+   64126: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/663.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/663.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/663.js#L6-L9)

```diff
-       applyLightFoOffset: () => AU,
-       getFloatingOriginOffset: () => yU,
-       lightFoVersion: () => QU,
-       wrapRenderableForFO: () => FU
+       WorldCodeAiOutOfUsage: () => tH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/663.js` (Changed code · before: `L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/663.js#L8-L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/663.js#L11)

```diff
-     var cU = zU(44423);
+     var AH = LH(1123),
+       rH = LH(2486),
+       SH = LH(1455),
+       hH = LH(1225);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/663.js` (Changed code · before: `L14-L57` → after: `L14-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711aR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a) · [After (L14-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/663.js#L14-L30) · [Before (L14-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/663.js#L14-L57)

```diff
-       const XU = UU.camera;
-       if (!XU) return {
-         x: 0,
-         y: 0,
-         z: 0
-       };
-       const zU = XU.worldMatrix;
-       return {
-         x: zU[12],
-         y: zU[13],
-         z: zU[14]
-       }
-     }
- 
-     function QU(UU) {
-       return UU.camera ? UU.camera.worldMatrixVersion : 0
- ... (28 more removed lines; see GitHub link above)
+       let {
+         onGetSuperRank: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, AH.B)(), tH = (0, rH.u)(Date.now()), zH = LH(tH.nameKey);
+       return (0, hH.jsxs)("div", {
+         className: "WorldCodeAiOutOfUsage",
+         children: [(0, hH.jsx)("p", {
+           className: "WorldCodeAiOutOfUsageText",
+           children: `You don't have any Super Bot.xd usage left - use Bot.xd or get ${zH} for more usage!`
+         }), (0, hH.jsx)(SH.u, {
+           className: "WorldCodeAiOutOfUsageButton",
+           onClick: BH,
+           children: LH(tH.getKey)
+         })]
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/664.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/664.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373)

#### 1. `bundles/preprod.bloxd.io/chunks/js/664.js` (Changed code · before: `L4-L9` → after: `L4-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373) · [After (L4-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/664.js#L4-L34) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/664.js#L4-L9)

```diff
-   64021: (UU, XU, zU) => {
-     function cU(UU, XU, zU, cU, yU, QU, AU) {
-       const FU = XU,
-         oU = cU,
-         DU = zU;
-       UU[DU + 0] = FU[oU + 0], UU[DU + 1] = FU[oU + 1], UU[DU + 2] = FU[oU + 2], UU[DU + 3] = FU[oU + 3], UU[DU + 4] = FU[oU + 4], UU[DU + 5] = FU[oU + 5], UU[DU + 6] = FU[oU + 6], UU[DU + 7] = FU[oU + 7], UU[DU + 8] = FU[oU + 8], UU[DU + 9] = FU[oU + 9], UU[DU + 10] = FU[oU + 10 … [truncated]
+   64151: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       particlesPixelShader: () => TH
+     });
+     var AH = LH(41138),
+       rH = LH(45536),
+       SH = LH(45541),
+       hH = LH(45620),
+       tH = LH(45594),
+       zH = LH(45440),
+       CH = LH(45369),
+       EH = LH(45603),
+       XH = LH(45625),
+       GH = LH(45629),
+       YH = LH(45658),
+       uH = LH(45665);
+ ... (15 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/665.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/665.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577)

#### 1. `bundles/preprod.bloxd.io/chunks/js/665.js` (Changed code · before: `L4-L6` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/665.js#L4-L11) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/665.js#L4-L6)

```diff
-   64028: (UU, XU, zU) => {
-     function cU(UU) {
-       return UU.features.has("timestamp-query")
+   64180: (HH, BH, LH) => {
+     LH.d(BH, {
+       allocateF64Mat4: () => rH
+     });
+     var AH = LH(45211);
+ 
+     function rH() {
+       return new AH.g(16)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/665.js` (Changed code · before: `L8-L84` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/665.js#L13) · [Before (L8-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/665.js#L8-L84)

```diff
- 
-     function yU(UU) {
-       return cU(UU) ? {
-         device: UU,
-         markerPipeline: UU.createComputePipeline({
-           layout: "auto",
-           compute: {
-             module: UU.createShaderModule({
-               code: "@compute @workgroup_size(1) fn main() {}"
-             }),
-             entryPoint: "main"
-           }
-         }),
-         querySet: UU.createQuerySet({
-           type: "timestamp",
-           count: 2
- ... (61 more removed lines; see GitHub link above)
+     rH["@@MAT4_STORAGE_F64@@"] = !0
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/666.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/666.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030)

#### 1. `bundles/preprod.bloxd.io/chunks/js/666.js` (Changed code · before: `L4-L7` → after: `L4-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030) · [After (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/666.js#L4-L29) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/666.js#L4-L7)

```diff
-   64031: (UU, XU, zU) => {
-     function cU(UU, XU) {
-       for (const zU of UU._frameGraph._tasks)
-         if (zU?._config && zU._colorAttachment && (zU._config.rt === XU.scRT || zU._config.rst === XU.scRT)) return zU
+   64186: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       applyLightFoOffset: () => hH,
+       getFloatingOriginOffset: () => rH,
+       lightFoVersion: () => SH,
+       wrapRenderableForFO: () => tH
+     });
+     var AH = LH(45215);
+ 
+     function rH(HH) {
+       const BH = HH.camera;
+       if (!BH) return {
+         x: 0,
+         y: 0,
+         z: 0
+       };
+ ... (10 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/666.js` (Changed code · before: `L11-L13` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/666.js#L33) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/666.js#L11-L13)

```diff
-       const zU = UU._renderingContexts[UU._renderingContexts.length - 1];
-       if (!zU?._frameGraph) return;
-       const yU = cU(XU, UU);
+       const LH = BH.camera?.worldMatrix;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/666.js` (Changed code · before: `L15-L21` → after: `L35-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030) · [After (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/666.js#L35-L49) · [Before (L15-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/666.js#L15-L21)

```diff
-       if (1 === UU.msaaSamples) return void(yU._config.clr = !1);
-       const QU = yU.enabled;
-       yU._config.clr = !0, yU.enabled = !1, XU._beforeRender.unshift((() => {
-         const XU = cU(zU, UU),
-           AU = XU?._config.rst === UU.scRT && XU._config.rt._colorView;
-         yU.enabled = !!AU && QU, yU._config.clr = !AU, AU && (yU._colorAttachment.view = AU)
-       }))
+       const rH = LH[12],
+         SH = LH[13],
+         hH = LH[14];
+       let tH = 0;
+       for (const zH of BH.lights) {
+         if (tH >= AH.e) break;
+         if (!zH._writeLightUbo) continue;
+         const BH = 4 + 16 * tH,
+           LH = HH[BH + 3];
+         if (0 === LH || 2 === LH) {
+           const LH = zH.worldMatrix;
+           HH[BH] = LH[12] - rH, HH[BH + 1] = LH[13] - SH, HH[BH + 2] = LH[14] - hH
+         }
+         tH++
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/666.js` (Changed code · before: `L23-L25` → after: `L51-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030) · [After (L51-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/666.js#L51-L58) · [Before (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/666.js#L23-L25)

```diff
-     zU.r(XU), zU.d(XU, {
-       configureSwapchainOverlayScene: () => yU
-     })
+ 
+     function tH(HH, BH, LH) {
+       let AH = -1;
+       return () => {
+         const rH = BH.camera ? BH.camera.worldMatrixVersion : -1;
+         rH !== AH && (LH(), AH = rH), HH()
+       }
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/667.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/667.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12ee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/667.js` (Changed code · before: `L4-L8` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12ee) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/667.js#L4-L10) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/667.js#L4-L8)

```diff
-   64039: (UU, XU, zU) => {
-     zU.d(XU, {
-       createShadowTask: () => QU
-     });
-     var cU = null;
+   64188: (HH, BH, LH) => {
+     function AH(HH, BH, LH, AH, rH, SH, hH) {
+       const tH = BH,
+         zH = AH,
+         CH = LH;
+       HH[CH + 0] = tH[zH + 0], HH[CH + 1] = tH[zH + 1], HH[CH + 2] = tH[zH + 2], HH[CH + 3] = tH[zH + 3], HH[CH + 4] = tH[zH + 4], HH[CH + 5] = tH[zH + 5], HH[CH + 6] = tH[zH + 6], HH[CH + 7] = tH[zH + 7], HH[CH + 8] = tH[zH + 8], HH[CH + 9] = tH[zH + 9], HH[CH + 10] = tH[zH + 10 … [truncated]
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/667.js` (Changed code · before: `L11` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12eeR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12ee) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/667.js#L13-L18) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/667.js#L11)

```diff
-       return cU?.get(UU)
+       return (BH, LH, rH, SH) => {
+         const hH = HH.camera;
+         if (!hH) return void AH(BH, LH, rH, SH, 0, 0, 0);
+         const tH = hH.worldMatrix;
+         AH(BH, LH, rH, SH, tH[12], tH[13], tH[14])
+       }
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/667.js` (Changed code · before: `L13-L75` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12eeR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12ee) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/667.js#L20-L23) · [Before (L13-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/667.js#L13-L75)

```diff
- 
-     function QU(UU, XU) {
-       const zU = new Set;
-       0;
-       const cU = {
-         name: "CY",
-         engine: UU,
-         sa: XU,
-         _passes: [],
-         async _preload() {
-           const UU = [];
-           for (const zU of XU.lights) {
-             const XU = zU.shadowGenerator,
-               cU = XU ? yU(XU) : null;
-             XU?._preloadShadowTask && cU && UU.push(AU(XU, cU))
-           }
- ... (47 more removed lines; see GitHub link above)
+     LH.r(BH), LH.d(BH, {
+       makePackMeshWorld: () => rH,
+       packMat4IntoF32WithOffset: () => AH
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/668.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/668.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/668.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/668.js#L4-L15)

```diff
-   64045: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       A: () => DU,
-       B: () => YU,
-       C: () => EU,
-       X: () => NU
-     });
-     var cU = zU(44400),
-       yU = (UU, XU) => UU.order - XU.order;
- 
-     function QU(UU, XU, zU) {
-       UU.pendingDisposers.set(XU, zU)
+   64197: (HH, BH, LH) => {
+     function AH(HH) {
+       return HH.features.has("timestamp-query")
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L18-L27` → after: `L9-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/668.js#L9-L32) · [Before (L18-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/668.js#L18-L27)

```diff
-     function AU(UU, XU, zU) {
-       zU && UU.pendingDisposers.get(XU) === zU && UU.pendingDisposers.delete(XU)
-     }
-     var FU = null,
-       oU = null;
- 
-     function DU(UU, XU, zU, cU) {
-       if (!XU || zU.material !== XU) return cU ?? Promise.resolve();
-       const yU = YU(UU, XU._buildGroup, zU);
-       return cU ? Promise.all([cU, yU]).then((() => {})) : yU
+     function rH(HH) {
+       return AH(HH) ? {
+         device: HH,
+         markerPipeline: HH.createComputePipeline({
+           layout: "auto",
+           compute: {
+             module: HH.createShaderModule({
+               code: "@compute @workgroup_size(1) fn main() {}"
+             }),
+             entryPoint: "main"
+           }
+         }),
+         querySet: HH.createQuerySet({
+           type: "timestamp",
+           count: 2
+         }),
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L30-L38` → after: `L35-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L35-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/668.js#L35-L68) · [Before (L30-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/668.js#L30-L38)

```diff
-     function EU(UU, XU, zU) {
-       let cU = zU;
-       for (const yU of XU) {
-         const XU = Array.isArray(yU),
-           zU = XU ? yU[0] : yU;
-         cU = DU(UU, XU ? yU[1] : zU.material, zU, cU)
-       }
-       return (cU ?? Promise.resolve()).catch((XU => {
-         UU._runtimeBuilds?._x(XU)
+     function SH(HH, BH) {
+       const LH = BH.beginComputePass({
+         timestampWrites: {
+           querySet: HH.querySet,
+           beginningOfPassWriteIndex: 0
+         }
+       });
+       LH.setPipeline(HH.markerPipeline), LH.dispatchWorkgroups(1), LH.end()
+     }
+ 
+     function hH(HH, BH) {
+       const LH = BH.beginComputePass({
+         timestampWrites: {
+           querySet: HH.querySet,
+           endOfPassWriteIndex: 1
+         }
+ ... (18 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L42-L64` → after: `L72-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L72-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/668.js#L72-L75) · [Before (L42-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/668.js#L42-L64)

```diff
-     function YU(UU, XU, cU) {
-       if (UU._z || !UU.meshes.includes(cU)) return UU._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
-       if (function(UU, XU, zU) {
-           for (const [yU, QU] of UU._groups)
-             if (yU !== XU) {
-               const UU = QU.indexOf(zU);
-               UU >= 0 && QU.splice(UU, 1)
-             } let cU = UU._groups.get(XU);
-           cU || (cU = [], UU._groups.set(XU, cU));
-           cU.includes(zU) || cU.push(zU)
-         }(UU, XU, cU), "pbr" === XU._materialFamily && (UU._built || UU._groups.get(XU)?.r)) {
-         const XU = UU._runtimeBuilds ?? IU(UU),
-           cU = zU.e(698).then((() => zU(64572))).then((XU => {
-             let {
-               rebuildScenePbrPipelines: zU
-             } = XU;
- ... (7 more removed lines; see GitHub link above)
+     function zH(HH) {
+       HH.querySet.destroy(), HH.resolveBuf.destroy();
+       for (const BH of HH.pool) BH.destroy();
+       HH.pool.length = 0
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L66-L289` → after: `L77-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L77-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/668.js#L77-L84) · [Before (L66-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/668.js#L66-L289)

```diff
- 
-     function NU(UU, XU, zU) {
-       return UU._z ? Promise.resolve(void 0) : (UU._runtimeBuilds ?? IU(UU)).exclusive(XU, zU)
-     }
- 
-     function IU(UU) {
-       const XU = {
-           kp: !1,
-           error: null,
-           active: new Set,
-           chains: new WeakMap,
-           generations: new WeakMap,
-           installed: new WeakMap,
-           installedMeshes: new Set,
-           pendingDisposers: new WeakMap,
-           tail: null
- ... (208 more removed lines; see GitHub link above)
+     LH.r(BH), LH.d(BH, {
+       createGpuFrameTimer: () => rH,
+       destroyGpuFrameTimer: () => zH,
+       gpuFrameTimerBegin: () => SH,
+       gpuFrameTimerEnd: () => hH,
+       gpuFrameTimerResolve: () => tH,
+       gpuTimingSupportedFor: () => AH
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/669.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/669.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93)

#### 1. `bundles/preprod.bloxd.io/chunks/js/669.js` (Changed code · before: `L4` → after: `L4-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93) · [After (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/669.js#L4-L22) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/669.js#L4)

```diff
-   64066: (UU, XU, zU) => {
+   64206: (HH, BH, LH) => {
+     function AH(HH, BH) {
+       for (const LH of HH._frameGraph._tasks)
+         if (LH?._config && LH._colorAttachment && (LH._config.rt === BH.scRT || LH._config.rst === BH.scRT)) return LH
+     }
+ 
+     function rH(HH, BH) {
+       const LH = HH._renderingContexts[HH._renderingContexts.length - 1];
+       if (!LH?._frameGraph) return;
+       const rH = AH(BH, HH);
+       if (!rH) return;
+       if (1 === HH.msaaSamples) return void(rH._config.clr = !1);
+       const SH = rH.enabled;
+       rH._config.clr = !0, rH.enabled = !1, BH._beforeRender.unshift((() => {
+         const BH = AH(LH, HH),
+           hH = BH?._config.rst === HH.scRT && BH._config.rt._colorView;
+ ... (3 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/669.js` (Changed code · before: `L6-L15` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/669.js#L24-L25) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/669.js#L6-L15)

```diff
-       postprocessVertexShaderWGSL: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "postprocessVertexShader",
-       QU = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
-     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
+       configureSwapchainOverlayScene: () => rH
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/670.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/670.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-00fc5c4ea111cdcb7b74b51c8a336ad4eb82be2e3ffbf931d219180d7ca9f44b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/670.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-00fc5c4ea111cdcb7b74b51c8a336ad4eb82be2e3ffbf931d219180d7ca9f44bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-00fc5c4ea111cdcb7b74b51c8a336ad4eb82be2e3ffbf931d219180d7ca9f44b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/670.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/670.js#L4-L6)

```diff
-   64085: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       lod3DPixelShader: () => AU
+   64208: (HH, BH, LH) => {
+     LH.d(BH, {
+       createShadowTask: () => SH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/670.js` (Changed code · before: `L8-L14` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-00fc5c4ea111cdcb7b74b51c8a336ad4eb82be2e3ffbf931d219180d7ca9f44bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-00fc5c4ea111cdcb7b74b51c8a336ad4eb82be2e3ffbf931d219180d7ca9f44b) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/670.js#L8-L74) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/670.js#L8-L14)

```diff
-     var cU = zU(40961);
-     const yU = "lod3DPixelShader",
-       QU = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
-     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
+     var AH = null;
+ 
+     function rH(HH) {
+       return AH?.get(HH)
+     }
+ 
+     function SH(HH, BH) {
+       const LH = new Set;
+       0;
+       const AH = {
+         name: "lX",
+         engine: HH,
+         NQ: BH,
+         _passes: [],
+         async _preload() {
+           const HH = [];
+ ... (51 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/671.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/671.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59)

#### 1. `bundles/preprod.bloxd.io/chunks/js/671.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/671.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/671.js#L4)

```diff
-   64088: (UU, XU, zU) => {
+   64216: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/671.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/671.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/671.js#L6)

```diff
-       lodCubePixelShader: () => AU
+       A: () => CH,
+       B: () => XH,
+       C: () => EH,
+       X: () => GH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/671.js` (Changed code · before: `L8-L14` → after: `L11-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59) · [After (L11-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/671.js#L11-L288) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/671.js#L8-L14)

```diff
-     var cU = zU(40961);
-     const yU = "lodCubePixelShader",
-       QU = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
-     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
+     var AH = LH(45204),
+       rH = (HH, BH) => HH.order - BH.order;
+ 
+     function SH(HH, BH, LH) {
+       HH.pendingDisposers.set(BH, LH)
+     }
+ 
+     function hH(HH, BH, LH) {
+       LH && HH.pendingDisposers.get(BH) === LH && HH.pendingDisposers.delete(BH)
+     }
+     var tH = null,
+       zH = null;
+ 
+     function CH(HH, BH, LH, AH) {
+       if (!BH || LH.material !== BH) return AH ?? Promise.resolve();
+       const rH = XH(HH, BH._buildGroup, LH);
+ ... (262 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/672.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/672.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989)

#### 1. `bundles/preprod.bloxd.io/chunks/js/672.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/672.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/672.js#L4)

```diff
-   64090: (UU, XU, zU) => {
+   64241: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/672.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/672.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/672.js#L6)

```diff
-       lodPixelShader: () => AU
+       postprocessVertexShaderWGSL: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/672.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/672.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/672.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "lodPixelShader",
-       QU = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
-     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "postprocessVertexShader",
+       SH = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
+     AH.c.ShadersStoreWGSL[rH] || (AH.c.ShadersStoreWGSL[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/673.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/673.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/673.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/673.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/673.js#L4)

```diff
-   64092: (UU, XU, zU) => {
+   64252: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/673.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/673.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/673.js#L6)

```diff
-       lod3DPixelShaderWGSL: () => AU
+       lod3DPixelShader: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/673.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/673.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/673.js#L8)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/673.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/673.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/673.js#L10-L11)

```diff
-       QU = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
-     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
+       SH = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
+     AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/674.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/674.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/674.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/674.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/674.js#L4)

```diff
-   64097: (UU, XU, zU) => {
+   64261: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/674.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/674.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/674.js#L6)

```diff
-       lodCubePixelShaderWGSL: () => AU
+       lodCubePixelShader: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/674.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942f) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/674.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/674.js#L8)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/674.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942fR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942f) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/674.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/674.js#L10-L11)

```diff
-       QU = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
-     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
+       SH = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
+     AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/675.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/675.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/675.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/675.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/675.js#L4)

```diff
-   64104: (UU, XU, zU) => {
+   64267: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/675.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/675.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/675.js#L6)

```diff
-       lodPixelShaderWGSL: () => AU
+       lodPixelShader: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/675.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/675.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/675.js#L8)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/675.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/675.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/675.js#L10-L11)

```diff
-       QU = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
-     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
+       SH = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
+     AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/676.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/676.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/676.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/676.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/676.js#L4)

```diff
-   64109: (UU, XU, zU) => {
+   64276: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/676.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/676.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/676.js#L6)

```diff
-       passPixelShaderWGSL: () => AU
+       lod3DPixelShaderWGSL: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/676.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/676.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/676.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "passPixelShader",
-       QU = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
-     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "lod3DPixelShader",
+       SH = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
+     AH.c.ShadersStoreWGSL[rH] || (AH.c.ShadersStoreWGSL[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/677.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/677.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/677.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/677.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/677.js#L4)

```diff
-   64115: (UU, XU, zU) => {
+   64283: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/677.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/677.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/677.js#L6)

```diff
-       passPixelShader: () => AU
+       lodCubePixelShaderWGSL: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/677.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/677.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/677.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "passPixelShader",
-       QU = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
-     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "lodCubePixelShader",
+       SH = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
+     AH.c.ShadersStoreWGSL[rH] || (AH.c.ShadersStoreWGSL[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/678.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/678.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/678.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/678.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/678.js#L4)

```diff
-   64123: (UU, XU, zU) => {
+   64288: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/678.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/678.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/678.js#L6)

```diff
-       passCubePixelShaderWGSL: () => AU
+       lodPixelShaderWGSL: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/678.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1d) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/678.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/678.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "passCubePixelShader",
-       QU = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
-     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "lodPixelShader",
+       SH = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
+     AH.c.ShadersStoreWGSL[rH] || (AH.c.ShadersStoreWGSL[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/679.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/679.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/679.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/679.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/679.js#L4)

```diff
-   64128: (UU, XU, zU) => {
+   64293: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/679.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/679.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/679.js#L6)

```diff
-       passCubePixelShader: () => AU
+       passPixelShaderWGSL: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/679.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/679.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/679.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "passCubePixelShader",
-       QU = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
-     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "passPixelShader",
+       SH = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
+     AH.c.ShadersStoreWGSL[rH] || (AH.c.ShadersStoreWGSL[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/680.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/680.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/680.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/680.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/680.js#L4)

```diff
-   64164: (UU, XU, zU) => {
+   64302: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/680.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/680.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/680.js#L6)

```diff
-       fxaaPixelShaderWGSL: () => AU
+       passPixelShader: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/680.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/680.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/680.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "fxaaPixelShader",
-       QU = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
-     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "passPixelShader",
+       SH = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
+     AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/681.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/681.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/681.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/681.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/681.js#L4)

```diff
-   64171: (UU, XU, zU) => {
+   64311: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/681.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/681.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/681.js#L6)

```diff
-       fxaaVertexShaderWGSL: () => AU
+       passCubePixelShaderWGSL: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/681.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/681.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/681.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "fxaaVertexShader",
-       QU = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
-     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "passCubePixelShader",
+       SH = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
+     AH.c.ShadersStoreWGSL[rH] || (AH.c.ShadersStoreWGSL[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/682.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/682.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/682.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/682.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/682.js#L4)

```diff
-   64175: (UU, XU, zU) => {
+   64313: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/682.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/682.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/682.js#L6)

```diff
-       fxaaPixelShader: () => AU
+       passCubePixelShader: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/682.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/682.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/682.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "fxaaPixelShader",
-       QU = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
-     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "passCubePixelShader",
+       SH = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
+     AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/683.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/683.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330)

#### 1. `bundles/preprod.bloxd.io/chunks/js/683.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/683.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/683.js#L4)

```diff
-   64180: (UU, XU, zU) => {
+   64347: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/683.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/683.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/683.js#L6)

```diff
-       fxaaVertexShader: () => AU
+       fxaaPixelShaderWGSL: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/683.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/683.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/683.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "fxaaVertexShader",
-       QU = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
-     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "fxaaPixelShader",
+       SH = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
+     AH.c.ShadersStoreWGSL[rH] || (AH.c.ShadersStoreWGSL[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/684.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/684.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36)

#### 1. `bundles/preprod.bloxd.io/chunks/js/684.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/684.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/684.js#L4-L18)

```diff
-   64189: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40961);
-     zU(44571), zU(44575);
-     const yU = "pbrUboDeclaration",
-       QU = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   64205: (UU, XU, zU) => {
+   64352: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/684.js` (Changed code · before: `L20` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/684.js#L6) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/684.js#L20)

```diff
-       pbrPixelShader: () => Rz
+       fxaaVertexShaderWGSL: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/684.js` (Changed code · before: `L22-L242` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-302ebc6772e4e531b0432377eebd3723a14b3c2bc3aace61ec4a23a68ae5bc36) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/684.js#L8-L11) · [Before (L22-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/684.js#L22-L242)

```diff
-     var cU = zU(40961),
-       yU = zU(44754),
-       QU = zU(44759),
-       AU = zU(44764),
-       FU = zU(44745);
-     const oU = "pbrFragmentDeclaration",
-       DU = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
-     cU.b.IncludesShadersStore[oU] || (cU.b.IncludesShadersStore[oU] = DU);
-     const EU = {
-       name: oU,
-       shader: DU
-     };
-     var YU = zU(44571),
-       NU = zU(44575),
-       IU = zU(64189),
-       pU = zU(44620),
- ... (205 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "fxaaVertexShader",
+       SH = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
+     AH.c.ShadersStoreWGSL[rH] || (AH.c.ShadersStoreWGSL[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/685.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/685.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a1a56222bf17a0d12fd15d04bc9bea29d9c5733c0ea3bc550046ef8965334c83)

#### 1. `bundles/preprod.bloxd.io/chunks/js/685.js` (Changed code · before: `L4-L195` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a1a56222bf17a0d12fd15d04bc9bea29d9c5733c0ea3bc550046ef8965334c83R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a1a56222bf17a0d12fd15d04bc9bea29d9c5733c0ea3bc550046ef8965334c83) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/685.js#L4-L11) · [Before (L4-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/685.js#L4-L195)

```diff
-   64201: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "harmonicsFunctions",
-       QU = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   64252: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => AU
- ... (176 more removed lines; see GitHub link above)
+   64355: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       fxaaPixelShader: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "fxaaPixelShader",
+       SH = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
+     AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/686.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/686.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f498d45490f9335fd3496d127b31a603e3f7ad9f97e4b6dd7daab2b3481208fb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/686.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f498d45490f9335fd3496d127b31a603e3f7ad9f97e4b6dd7daab2b3481208fbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f498d45490f9335fd3496d127b31a603e3f7ad9f97e4b6dd7daab2b3481208fb) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/686.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/686.js#L4-L6)

```diff
-   64201: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
+   64364: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       fxaaVertexShader: () => hH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/686.js` (Changed code · before: `L8-L115` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f498d45490f9335fd3496d127b31a603e3f7ad9f97e4b6dd7daab2b3481208fbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f498d45490f9335fd3496d127b31a603e3f7ad9f97e4b6dd7daab2b3481208fb) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/686.js#L8-L11) · [Before (L8-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/686.js#L8-L115)

```diff
-     var cU = zU(40961);
-     const yU = "harmonicsFunctions",
-       QU = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   64413: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40961);
-     zU(44571), zU(44575);
-     const yU = "openpbrUboDeclaration",
- ... (92 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "fxaaVertexShader",
+       SH = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
+     AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/687.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/687.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L4)

```diff
-   64293: (UU, XU, zU) => {
+   64381: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L6)

```diff
-       e: () => AU
+       d: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L8-L9)

```diff
-     var cU = zU(40961);
-     zU(44887), zU(44891);
+     var AH = LH(41138);
+     LH(45342), LH(45351);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L11-L12` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L11-L12) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L11-L12)

```diff
-       QU = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L18)

```diff
-   64313: (UU, XU, zU) => {
+   64400: (HH, BH, LH) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L20)

```diff
-       pbrPixelShaderWGSL: () => pz
+       pbrPixelShader: () => UL
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L22-L32` → after: `L22-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L22-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L22-L41) · [Before (L22-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L22-L32)

```diff
-     var cU = zU(40961),
-       yU = zU(45080),
-       QU = zU(45085),
-       AU = zU(45090),
-       FU = zU(44887),
-       oU = zU(44891),
-       DU = zU(64293),
-       EU = zU(44935),
-       YU = zU(64320),
-       NU = zU(45093),
-       IU = zU(45115);
+     var AH = LH(41138),
+       rH = LH(45536),
+       SH = LH(45541),
+       hH = LH(45549),
+       tH = LH(45527);
+     const zH = "pbrFragmentDeclaration",
+       CH = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
+     AH.c.IncludesShadersStore[zH] || (AH.c.IncludesShadersStore[zH] = CH);
+     const EH = {
+       name: zH,
+       shader: CH
+     };
+     var XH = LH(45342),
+       GH = LH(45351),
+       YH = LH(64381),
+       uH = LH(45395),
+ ... (4 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L34-L35` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L43-L44) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L34-L35)

```diff
-       aU = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     cU.b.IncludesShadersStoreWGSL[pU] || (cU.b.IncludesShadersStoreWGSL[pU] = aU);
+       PH = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     AH.c.IncludesShadersStore[vH] || (AH.c.IncludesShadersStore[vH] = PH);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L40` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L49) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L40)

```diff
-     var gU = zU(64329);
+     var UH = LH(64414);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L42-L43` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L51-L52) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L42-L43)

```diff
-       GU = "#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BAS … [truncated]
-     cU.b.IncludesShadersStoreWGSL[kU] || (cU.b.IncludesShadersStoreWGSL[kU] = GU);
+       OH = "#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BAS … [truncated]
+     AH.c.IncludesShadersStore[VH] || (AH.c.IncludesShadersStore[VH] = OH);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L48-L73` → after: `L57-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L57-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L57-L79) · [Before (L48-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L48-L73)

```diff
-     var ZU = zU(45126),
-       RU = zU(45154),
-       PU = zU(44983),
-       WU = zU(45158),
-       dU = zU(45137),
-       LU = zU(44910),
-       eU = zU(64335),
-       CU = zU(64339),
-       wU = zU(64346),
-       qU = zU(45134),
-       OU = zU(45113),
-       SU = zU(64304),
-       rU = zU(45099),
-       uU = zU(64355),
-       fU = zU(64360),
-       iU = zU(64295),
- ... (10 more removed lines; see GitHub link above)
+     var kH = LH(45594),
+       mH = LH(45620),
+       oH = LH(45440),
+       IH = LH(45625),
+       fH = LH(45609),
+       lH = LH(45369),
+       KH = LH(64418),
+       cH = LH(64420),
+       eH = LH(64426),
+       qH = LH(45603),
+       gH = LH(45577),
+       NH = LH(64391),
+       RH = LH(45563),
+       jH = LH(64435),
+       nH = LH(64440),
+       FH = LH(64388),
+ ... (7 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L75-L76` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L81-L82) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L75-L76)

```diff
-       KU = "struct albedoOpacityOutParams\n{surfaceAlbedo: vec3f,\nalpha: f32};\n#define pbr_inline\nfn albedoOpacityBlock(\nvAlbedoColor: vec4f\n#ifdef ALBEDO\n,albedoTexture: vec4f\n,albedoInfos: vec2f\n#endif\n,baseWeight: f32\n#ifdef BASE_WEIGHT\n,baseWeightTexture: vec4f\n,v … [truncated]
-     cU.b.IncludesShadersStoreWGSL[jU] || (cU.b.IncludesShadersStoreWGSL[jU] = KU);
+       pH = "struct albedoOpacityOutParams\n{vec3 surfaceAlbedo;float alpha;};\n#define pbr_inline\nalbedoOpacityOutParams albedoOpacityBlock(\nin vec4 vAlbedoColor\n#ifdef ALBEDO\n,in vec4 albedoTexture\n,in vec2 albedoInfos\n#endif\n,in float baseWeight\n#ifdef BASE_WEIGHT\n,in  … [truncated]
+     AH.c.IncludesShadersStore[iH] || (AH.c.IncludesShadersStore[iH] = pH);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L82-L83` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L88-L89) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L82-L83)

```diff
-       hU = "struct reflectivityOutParams\n{microSurface: f32,\nroughness: f32,\ndiffuseRoughness: f32,\nreflectanceF0: f32,\nreflectanceF90: vec3f,\ncolorReflectanceF0: vec3f,\ncolorReflectanceF90: vec3f,\n#ifdef METALLICWORKFLOW\nsurfaceAlbedo: vec3f,\nmetallic: f32,\nspecularWe … [truncated]
-     cU.b.IncludesShadersStoreWGSL[TU] || (cU.b.IncludesShadersStoreWGSL[TU] = hU);
+       BB = "struct reflectivityOutParams\n{float microSurface;float roughness;float diffuseRoughness;float reflectanceF0;vec3 reflectanceF90;vec3 colorReflectanceF0;vec3 colorReflectanceF90;\n#ifdef METALLICWORKFLOW\nvec3 surfaceAlbedo;float metallic;float specularWeight;vec3 die … [truncated]
+     AH.c.IncludesShadersStore[HB] || (AH.c.IncludesShadersStore[HB] = BB);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L89-L90` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L95-L96) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L89-L90)

```diff
-       zX = "struct ambientOcclusionOutParams\n{ambientOcclusionColor: vec3f,\n#if DEBUGMODE>0 && defined(AMBIENT)\nambientOcclusionColorMap: vec3f\n#endif\n};\n#define pbr_inline\nfn ambientOcclusionBlock(\n#ifdef AMBIENT\nambientOcclusionColorMap_: vec3f,\nvAmbientInfos: vec4f\n … [truncated]
-     cU.b.IncludesShadersStoreWGSL[XX] || (cU.b.IncludesShadersStoreWGSL[XX] = zX);
+       rB = "struct ambientOcclusionOutParams\n{vec3 ambientOcclusionColor;\n#if DEBUGMODE>0 && defined(AMBIENT)\nvec3 ambientOcclusionColorMap;\n#endif\n};ambientOcclusionOutParams ambientOcclusionBlock(\n#ifdef AMBIENT\nin vec3 ambientOcclusionColorMap_,\nin vec4 vAmbientInfos\n … [truncated]
+     AH.c.IncludesShadersStore[AB] || (AH.c.IncludesShadersStore[AB] = rB);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L96-L97` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L102-L103) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L96-L97)

```diff
-       QX = "#ifdef ALPHAFRESNEL\n#if defined(ALPHATEST) || defined(ALPHABLEND)\nstruct alphaFresnelOutParams\n{alpha: f32};fn faceforward(N: vec3<f32>,I: vec3<f32>,Nref: vec3<f32>)->vec3<f32> {return select(N,-N,dot(Nref,I)>0.0);}\n#define pbr_inline\nfn alphaFresnelBlock(\nnorma … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yX] || (cU.b.IncludesShadersStoreWGSL[yX] = QX);
+       tB = "#ifdef ALPHAFRESNEL\n#if defined(ALPHATEST) || defined(ALPHABLEND)\nstruct alphaFresnelOutParams\n{float alpha;};\n#define pbr_inline\nalphaFresnelOutParams alphaFresnelBlock(\nin vec3 normalW,\nin vec3 viewDirectionW,\nin float alpha,\nin float microSurface\n)\n{alph … [truncated]
+     AH.c.IncludesShadersStore[hB] || (AH.c.IncludesShadersStore[hB] = tB);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L103-L104` → after: `L109-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L109-L110) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L103-L104)

```diff
-       oX = "#ifdef ANISOTROPIC\nstruct anisotropicOutParams\n{anisotropy: f32,\nanisotropicTangent: vec3f,\nanisotropicBitangent: vec3f,\nanisotropicNormal: vec3f,\n#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)\nanisotropyMapData: vec3f\n#endif\n};\n#define pbr_inline\nfn aniso … [truncated]
-     cU.b.IncludesShadersStoreWGSL[FX] || (cU.b.IncludesShadersStoreWGSL[FX] = oX);
+       EB = "#ifdef ANISOTROPIC\nstruct anisotropicOutParams\n{float anisotropy;vec3 anisotropicTangent;vec3 anisotropicBitangent;vec3 anisotropicNormal;\n#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)\nvec3 anisotropyMapData;\n#endif\n};\n#define pbr_inline\nanisotropicOutParams … [truncated]
+     AH.c.IncludesShadersStore[CB] || (AH.c.IncludesShadersStore[CB] = EB);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L110-L111` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L116-L117) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L110-L111)

```diff
-       YX = "#ifdef REFLECTION\nstruct reflectionOutParams\n{environmentRadiance: vec4f\n,environmentIrradiance: vec3f\n#ifdef REFLECTIONMAP_3D\n,reflectionCoords: vec3f\n#else\n,reflectionCoords: vec2f\n#endif\n#ifdef SS_TRANSLUCENCY\n#ifdef USESPHERICALFROMREFLECTIONMAP\n#if !de … [truncated]
-     cU.b.IncludesShadersStoreWGSL[EX] || (cU.b.IncludesShadersStoreWGSL[EX] = YX);
+       YB = "#ifdef REFLECTION\nstruct reflectionOutParams\n{vec4 environmentRadiance;vec3 environmentIrradiance;\n#ifdef REFLECTIONMAP_3D\nvec3 reflectionCoords;\n#else\nvec2 reflectionCoords;\n#endif\n#ifdef SS_TRANSLUCENCY\n#ifdef USESPHERICALFROMREFLECTIONMAP\n#if !defined(NOR … [truncated]
+     AH.c.IncludesShadersStore[GB] || (AH.c.IncludesShadersStore[GB] = YB);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L117-L118` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L123-L124) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L117-L118)

```diff
-       pX = "#ifdef SHEEN\nstruct sheenOutParams\n{sheenIntensity: f32\n,sheenColor: vec3f\n,sheenRoughness: f32\n#ifdef SHEEN_LINKWITHALBEDO\n,surfaceAlbedo: vec3f\n#endif\n#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)\n,sheenAlbedoScaling: f32\n#endif\n#if defined … [truncated]
-     cU.b.IncludesShadersStoreWGSL[IX] || (cU.b.IncludesShadersStoreWGSL[IX] = pX);
+       WB = "#ifdef SHEEN\nstruct sheenOutParams\n{float sheenIntensity;vec3 sheenColor;float sheenRoughness;\n#ifdef SHEEN_LINKWITHALBEDO\nvec3 surfaceAlbedo;\n#endif\n#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)\nfloat sheenAlbedoScaling;\n#endif\n#if defined(REF … [truncated]
+     AH.c.IncludesShadersStore[QB] || (AH.c.IncludesShadersStore[QB] = WB);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L124-L125` → after: `L130-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L130-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L130-L131) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L124-L125)

```diff
-       gX = "struct clearcoatOutParams\n{specularEnvironmentR0: vec3f,\nconservationFactor: f32,\nclearCoatNormalW: vec3f,\nclearCoatAARoughnessFactors: vec2f,\nclearCoatIntensity: f32,\nclearCoatRoughness: f32,\n#ifdef REFLECTION\nfinalClearCoatRadianceScaled: vec3f,\n#endif\n#if … [truncated]
-     cU.b.IncludesShadersStoreWGSL[tX] || (cU.b.IncludesShadersStoreWGSL[tX] = gX);
+       vB = "struct clearcoatOutParams\n{vec3 specularEnvironmentR0;float conservationFactor;vec3 clearCoatNormalW;vec2 clearCoatAARoughnessFactors;float clearCoatIntensity;float clearCoatRoughness;\n#ifdef REFLECTION\nvec3 finalClearCoatRadianceScaled;\n#endif\n#ifdef CLEARCOAT_T … [truncated]
+     AH.c.IncludesShadersStore[xB] || (AH.c.IncludesShadersStore[xB] = vB);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L131-L132` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L137-L138) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L131-L132)

```diff
-       BX = "struct iridescenceOutParams\n{iridescenceIntensity: f32,\niridescenceIOR: f32,\niridescenceThickness: f32,\nspecularEnvironmentR0: vec3f};\n#ifdef IRIDESCENCE\nfn iridescenceBlock(\nvIridescenceParams: vec4f\n,viewAngle_: f32\n,specularEnvironmentR0: vec3f\n#ifdef IRI … [truncated]
-     cU.b.IncludesShadersStoreWGSL[GX] || (cU.b.IncludesShadersStoreWGSL[GX] = BX);
+       UB = "struct iridescenceOutParams\n{float iridescenceIntensity;float iridescenceIOR;float iridescenceThickness;vec3 specularEnvironmentR0;};\n#ifdef IRIDESCENCE\n#define pbr_inline\n#define inline\niridescenceOutParams iridescenceBlock(\nin vec4 vIridescenceParams\n,in floa … [truncated]
+     AH.c.IncludesShadersStore[TB] || (AH.c.IncludesShadersStore[TB] = UB);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L138-L139` → after: `L144-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L144-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L144-L160) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L138-L139)

```diff
-       PX = "struct subSurfaceOutParams\n{specularEnvironmentReflectance: vec3f,\n#ifdef SS_REFRACTION\nfinalRefraction: vec3f,\nsurfaceAlbedo: vec3f,\n#ifdef SS_LINKREFRACTIONTOTRANSPARENCY\nalpha: f32,\n#endif\nrefractionOpacity: f32,\n#endif\n#ifdef SS_TRANSLUCENCY\ntransmittan … [truncated]
-     cU.b.IncludesShadersStoreWGSL[RX] || (cU.b.IncludesShadersStoreWGSL[RX] = PX);
+       bB = "struct subSurfaceOutParams\n{vec3 specularEnvironmentReflectance;\n#ifdef SS_REFRACTION\nvec3 finalRefraction;vec3 surfaceAlbedo;\n#ifdef SS_LINKREFRACTIONTOTRANSPARENCY\nfloat alpha;\n#endif\nfloat refractionOpacity;\n#endif\n#ifdef SS_TRANSLUCENCY\nvec3 transmittanc … [truncated]
+     AH.c.IncludesShadersStore[OB] || (AH.c.IncludesShadersStore[OB] = bB);
+     const kB = {
+       name: OB,
+       shader: bB
+     };
+     var mB = LH(45570);
+     const oB = "pbrBlockReflectance0",
+       IB = "float reflectanceF0=reflectivityOut.reflectanceF0;vec3 specularEnvironmentR0=reflectivityOut.colorReflectanceF0;vec3 specularEnvironmentR90=reflectivityOut.colorReflectanceF90;\n#ifdef ALPHAFRESNEL\nfloat reflectance90=fresnelGrazingReflectance(reflectanceF0);specular … [truncated]
+     AH.c.IncludesShadersStore[oB] || (AH.c.IncludesShadersStore[oB] = IB);
+     const fB = {
+         name: oB,
+         shader: IB
+       },
+       lB = "pbrClusteredLightingFunctions",
+       KB = "#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\n#include<clusteredLightingFunctions>\n#define inline\nlightingInfo computeClusteredLighting(\nsampler2D lightDataTexture,\nsampler2D tileMaskTexture,\nvec4 lightData,\nivec2 sliceRange,\nvec3 V,\nvec3 N,\nvec3 posW, … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L144-L146` → after: `L165-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L165-L167) · [Before (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L144-L146)

```diff
-     var dX = zU(45165),
-       LX = zU(64392),
-       eX = zU(45173);
+     var eB = LH(45629),
+       qB = LH(64464),
+       gB = LH(45633);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L148-L149` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L169-L170) · [Before (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L148-L149)

```diff
-       wX = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
-     cU.b.IncludesShadersStoreWGSL[CX] || (cU.b.IncludesShadersStoreWGSL[CX] = wX);
+       RB = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=gl_FrontFacing ? faceNormal : -faceNormal;\n#endif\nnormalW*=sign(dot(normalW,faceNormal) … [truncated]
+     AH.c.IncludesShadersStore[NB] || (AH.c.IncludesShadersStore[NB] = RB);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L154` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L175) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L154)

```diff
-     var OX = zU(45189);
+     var nB = LH(45643);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L156-L157` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L177-L178) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L156-L157)

```diff
-       rX = "#ifdef LIGHTMAP\nvar lightmapColor: vec4f=TEXRD(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);\n#ifdef RGBDLIGHTMAP\nlightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);\n#endif\n#ifdef GAMMALIGHTMAP\nlightmapColor=vec4f(toLinear … [truncated]
-     cU.b.IncludesShadersStoreWGSL[SX] || (cU.b.IncludesShadersStoreWGSL[SX] = rX);
+       DB = "#ifdef LIGHTMAP\nvec4 lightmapColor=TEXRD(lightmapSampler,vLightmapUV+uvOffset);\n#ifdef RGBDLIGHTMAP\nlightmapColor.rgb=fromRGBD(lightmapColor);\n#endif\n#ifdef GAMMALIGHTMAP\nlightmapColor.rgb=toLinearSpace(lightmapColor.rgb);\n#endif\nlightmapColor.rgb*=vLightmapIn … [truncated]
+     AH.c.IncludesShadersStore[FB] || (AH.c.IncludesShadersStore[FB] = DB);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L163-L164` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L184-L185) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L163-L164)

```diff
-       iX = "var NdotVUnclamped: f32=dot(normalW,viewDirectionW);var NdotV: f32=absEps(NdotVUnclamped);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var AARoughnessFactors: vec2f=getAARoughnessFactors(normalW.xyz);\n#ifdef SPECULARAA\nalphaG+=AARoughnessFactors.y;\n#en … [truncated]
-     cU.b.IncludesShadersStoreWGSL[fX] || (cU.b.IncludesShadersStoreWGSL[fX] = iX);
+       dB = "float NdotVUnclamped=dot(normalW,viewDirectionW);float NdotV=absEps(NdotVUnclamped);float alphaG=convertRoughnessToAverageSlope(roughness);vec2 AARoughnessFactors=getAARoughnessFactors(normalW.xyz);\n#ifdef SPECULARAA\nalphaG+=AARoughnessFactors.y;\n#endif\n#if define … [truncated]
+     AH.c.IncludesShadersStore[ZB] || (AH.c.IncludesShadersStore[ZB] = dB);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L170-L171` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L191-L192) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L170-L171)

```diff
-       vX = "#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)\nvar baseSpecularEnvironmentReflectance: vec3f=getReflectanceFromBRDFWithEnvLookup(vec3f(reflectanceF0),vec3f(reflectivityOut.reflectanceF90),environmentBrdf);\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPE … [truncated]
-     cU.b.IncludesShadersStoreWGSL[MX] || (cU.b.IncludesShadersStoreWGSL[MX] = vX);
+       JB = "#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)\nvec3 baseSpecularEnvironmentReflectance=getReflectanceFromBRDFLookup(vec3(reflectanceF0),reflectivityOut.reflectanceF90,environmentBrdf);\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)\ … [truncated]
+     AH.c.IncludesShadersStore[sB] || (AH.c.IncludesShadersStore[sB] = JB);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L177-L178` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L198-L199) · [Before (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L177-L178)

```diff
-       nX = "var diffuseBase: vec3f=vec3f(0.,0.,0.);\n#ifdef SS_TRANSLUCENCY\nvar diffuseTransmissionBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef SPECULARTERM\nvar specularBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef CLEARCOAT\nvar clearCoatBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#i … [truncated]
-     cU.b.IncludesShadersStoreWGSL[sX] || (cU.b.IncludesShadersStoreWGSL[sX] = nX);
+       yB = "vec3 diffuseBase=vec3(0.,0.,0.);\n#ifdef SS_TRANSLUCENCY\nvec3 diffuseTransmissionBase=vec3(0.,0.,0.);\n#endif\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#ifdef CLEARCOAT\nvec3 clearCoatBase=vec3(0.,0.,0.);\n#endif\n#ifdef SHEEN\nvec3 sheenBase=v … [truncated]
+     AH.c.IncludesShadersStore[pB] || (AH.c.IncludesShadersStore[pB] = yB);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L183` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L204) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L183)

```diff
-     var lX = zU(45195);
+     var BL = LH(45652);
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L185-L186` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L206-L207) · [Before (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L185-L186)

```diff
-       JX = "aggShadow=aggShadow/numLights;\n#if defined(ENVIRONMENTBRDF)\n#ifdef MS_BRDF_ENERGY_CONSERVATION\nvar baseSpecularEnergyConservationFactor: vec3f=getEnergyConservationFactor(vec3f(reflectanceF0),environmentBrdf);var coloredEnergyConservationFactor: vec3f=getEnergyCons … [truncated]
-     cU.b.IncludesShadersStoreWGSL[xX] || (cU.b.IncludesShadersStoreWGSL[xX] = JX);
+       AL = "aggShadow=aggShadow/numLights;\n#if defined(ENVIRONMENTBRDF)\n#ifdef MS_BRDF_ENERGY_CONSERVATION\nvec3 baseSpecularEnergyConservationFactor=getEnergyConservationFactor(vec3(reflectanceF0),environmentBrdf);vec3 coloredEnergyConservationFactor=getEnergyConservationFacto … [truncated]
+     AH.c.IncludesShadersStore[LL] || (AH.c.IncludesShadersStore[LL] = AL);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L192-L193` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L213-L214) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L192-L193)

```diff
-       bX = "var finalDiffuse: vec3f=diffuseBase;finalDiffuse*=surfaceAlbedo;\n#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)\nfinalDiffuse*=subSurfaceOut.refractionOpacity;\n#endif\n#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)\nf … [truncated]
-     cU.b.IncludesShadersStoreWGSL[KX] || (cU.b.IncludesShadersStoreWGSL[KX] = bX);
+       hL = "vec3 finalDiffuse=diffuseBase;finalDiffuse*=surfaceAlbedo;\n#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)\nfinalDiffuse*=subSurfaceOut.refractionOpacity;\n#endif\n#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)\nfinalDi … [truncated]
+     AH.c.IncludesShadersStore[SL] || (AH.c.IncludesShadersStore[SL] = hL);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L199-L200` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L220-L221) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L199-L200)

```diff
-       Uz = "var finalColor: vec4f= vec4f(\n#ifndef UNLIT\n#ifdef REFLECTION\nfinalIrradiance +\n#endif\n#ifdef SPECULARTERM\nfinalSpecularScaled +\n#endif\n#ifdef SHEEN\nfinalSheenScaled +\n#endif\n#ifdef CLEARCOAT\nfinalClearCoatScaled +\n#endif\n#ifdef REFLECTION\nfinalRadiance … [truncated]
-     cU.b.IncludesShadersStoreWGSL[hX] || (cU.b.IncludesShadersStoreWGSL[hX] = Uz);
+       CL = "vec4 finalColor=vec4(\n#ifndef UNLIT\n#ifdef REFLECTION\nfinalIrradiance +\n#endif\n#ifdef SPECULARTERM\nfinalSpecularScaled +\n#endif\n#ifdef SHEEN\nfinalSheenScaled +\n#endif\n#ifdef CLEARCOAT\nfinalClearCoatScaled +\n#endif\n#ifdef REFLECTION\nfinalRadianceScaled + … [truncated]
+     AH.c.IncludesShadersStore[zL] || (AH.c.IncludesShadersStore[zL] = CL);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L205-L208` → after: `L226-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L226-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L226-L228) · [Before (L205-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L205-L208)

```diff
-     var zz = zU(45201),
-       cz = zU(45205),
-       yz = zU(64396),
-       Qz = zU(45212);
+     var XL = LH(45658),
+       GL = LH(45665),
+       YL = LH(64473);
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L210-L211` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L230-L231) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L210-L211)

```diff
-       Fz = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
-     cU.b.IncludesShadersStoreWGSL[Az] || (cU.b.IncludesShadersStoreWGSL[Az] = Fz);
+       QL = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nfloat writeGeometryInfo=1.0;\n#else\nfloat writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_INDEX,vec4(vPositionW,writeGeometryInfo));\ … [truncated]
+     AH.c.IncludesShadersStore[uL] || (AH.c.IncludesShadersStore[uL] = QL);
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L216-L217` → after: `L236-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L236-L237) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L216-L217)

```diff
-     var Dz = zU(45216),
-       Ez = zU(64400);
+     var ML = LH(45670),
+       xL = LH(64480);
```
