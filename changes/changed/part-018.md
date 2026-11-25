# Changed — Bundle Modifications Report (Part 018 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `18 / 56` (**317** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 017](part-017.md) · [Part 019 →](part-019.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/338.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/338.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31)

#### 1. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L4)

```diff
-   42669: (pp, ip, cp) => {
+   42299: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L6)

```diff
-       e: () => Sp
+       d: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "bumpVertex",
-       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneVertex",
+       TQ = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L17)

```diff
-   42556: (pp, ip, cp) => {
+   42199: (QQ, WQ, XQ) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L19)

```diff
-       b: () => Sp
+       c: () => zQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L21-L24)

```diff
-     var Op = cp(40062);
-     const op = "bumpVertexDeclaration",
-       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneVertexDeclaration",
+       TQ = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L30)

```diff
-   42505: (pp, ip, cp) => {
+   42304: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L34-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L34-L37) · [Before (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L34-L38)

```diff
-     var Op = cp(40062);
-     cp(42496), cp(42498);
-     const op = "defaultUboDeclaration",
-       Ip = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "fogVertex",
+       TQ = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L44)

```diff
-   42520: (pp, ip, cp) => {
+   42207: (QQ, WQ, XQ) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L46)

```diff
-       e: () => Sp
+       b: () => zQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L48-L51)

```diff
-     var Op = cp(40062);
-     const op = "helperFunctions",
-       Ip = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "fogVertexDeclaration",
+       TQ = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L57)

```diff
-   42496: (pp, ip, cp) => {
+   42237: (QQ, WQ, XQ) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L61-L64` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L60-L63) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L61-L64)

```diff
-     var Op = cp(40062);
-     const op = "sceneUboDeclaration",
-       Ip = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "logDepthDeclaration",
+       TQ = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L70-L72` → after: `L69-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L69-L71) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L70-L72)

```diff
-   42492: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       defaultVertexShaderWGSL: () => Gp
+   42319: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L74-L91` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L73-L76) · [Before (L74-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L74-L91)

```diff
-     var Op = cp(40062),
-       op = cp(42496),
-       Ip = cp(42498),
-       Sp = cp(42505),
-       xp = cp(42513),
-       Lp = cp(42520),
-       Yp = cp(42525),
-       Dp = cp(42527),
-       Ap = cp(42531),
-       Pp = cp(42536),
-       Wp = cp(42542),
-       yp = cp(42550),
-       Up = cp(42556),
-       wp = cp(42565),
-       vp = cp(42567);
-     const tp = "lightVxFragmentDeclaration",
- ... (2 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     const qQ = "logDepthVertex",
+       TQ = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L95-L120` → after: `L80-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L80-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/338.js#L80-L97) · [Before (L95-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/338.js#L95-L120)

```diff
-     };
-     var ep = cp(42576),
-       jp = cp(42584),
-       kp = cp(42589),
-       mp = cp(42598),
-       Rp = cp(42602),
-       qp = cp(42610),
-       Mp = cp(42612),
-       Cp = cp(42617),
-       Ep = cp(42624),
-       Xp = cp(42632),
-       lp = cp(42639),
-       Qp = cp(42644),
-       Jp = cp(42653),
-       Bp = cp(42661),
-       Np = cp(42669),
- ... (10 more removed lines; see GitHub link above)
+     }
+   },
+   61575: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       particlesVertexShader: () => IQ
+     });
+     var wQ = XQ(40126),
+       qQ = XQ(42199),
+       TQ = XQ(42207),
+       zQ = XQ(42237),
+       sQ = XQ(42299),
+       FQ = XQ(42304),
+       PQ = XQ(42319);
+     const gQ = "particlesVertexShader",
+       JQ = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
+     wQ.b.ShadersStore[gQ] || (wQ.b.ShadersStore[gQ] = JQ);
+ ... (2 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/339.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/339.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/339.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/339.js#L4)

```diff
-   42531: (pp, ip, cp) => {
+   42299: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/339.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/339.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "instancesDeclaration",
-       Ip = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneVertex",
+       TQ = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/339.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/339.js#L17)

```diff
-   42624: (pp, ip, cp) => {
+   42199: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/339.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/339.js#L19)

```diff
-       b: () => Sp
+       c: () => zQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/339.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/339.js#L21-L24)

```diff
-     var Op = cp(40062);
-     const op = "instancesVertex",
-       Ip = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneVertexDeclaration",
+       TQ = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/339.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/339.js#L30)

```diff
-   42498: (pp, ip, cp) => {
+   42304: (QQ, WQ, XQ) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/339.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/339.js#L34-L37)

```diff
-     var Op = cp(40062);
-     const op = "meshUboDeclaration",
-       Ip = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "fogVertex",
+       TQ = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/339.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/339.js#L43)

```diff
-   42496: (pp, ip, cp) => {
+   42207: (QQ, WQ, XQ) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/339.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/339.js#L45)

```diff
-       e: () => Sp
+       b: () => zQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/339.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/339.js#L47-L50)

```diff
-     var Op = cp(40062);
-     const op = "sceneUboDeclaration",
-       Ip = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "fogVertexDeclaration",
+       TQ = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L56` → after: `L56-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L56-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/339.js#L56-L82) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/339.js#L56)

```diff
-   61955: (pp, ip, cp) => {
+   42237: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "logDepthDeclaration",
+       TQ = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42319: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
+ ... (11 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L58` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/339.js#L84) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/339.js#L58)

```diff
-       greasedLineVertexShaderWGSL: () => Ap
+       skyVertexShader: () => IQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L60-L69` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/339.js#L86-L97) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/339.js#L60-L69)

```diff
-     var Op = cp(40062),
-       op = cp(42531),
-       Ip = cp(42496),
-       Sp = cp(42498),
-       xp = cp(42624);
-     const Lp = "greasedLineVertexShader",
-       Yp = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
-     Op.b.ShadersStoreWGSL[Lp] || (Op.b.ShadersStoreWGSL[Lp] = Yp);
-     const Dp = [op.d, Ip.e, Sp.e, xp.b];
-     for (const Pp of Dp) Op.b.IncludesShadersStoreWGSL[Pp.name] || (Op.b.IncludesShadersStoreWGSL[Pp.name] = Pp.shader);
+     var wQ = XQ(40126),
+       qQ = XQ(42237),
+       TQ = XQ(42199),
+       zQ = XQ(42207),
+       sQ = XQ(42299),
+       FQ = XQ(42319),
+       PQ = XQ(42304);
+     const gQ = "skyVertexShader",
+       JQ = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
+     wQ.b.ShadersStore[gQ] || (wQ.b.ShadersStore[gQ] = JQ);
+     const rQ = [qQ.e, TQ.c, zQ.b, sQ.d, FQ.d, PQ.e];
+     for (const jQ of rQ) wQ.b.IncludesShadersStore[jQ.name] || (wQ.b.IncludesShadersStore[jQ.name] = jQ.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/340.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/340.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/340.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/340.js#L4)

```diff
-   42505: (pp, ip, cp) => {
+   42447: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/340.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/340.js#L6)

```diff
-       e: () => Sp
+       c: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/340.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/340.js#L8-L12)

```diff
-     var Op = cp(40062);
-     cp(42496), cp(42498);
-     const op = "defaultUboDeclaration",
-       Ip = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "bumpFragment",
+       TQ = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L18` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/340.js#L17) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/340.js#L18)

```diff
-   42520: (pp, ip, cp) => {
+   42421: (QQ, WQ, XQ) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L20` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/340.js#L19) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/340.js#L20)

```diff
-       e: () => Sp
+       b: () => zQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L22-L25` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/340.js#L21-L25) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/340.js#L22-L25)

```diff
-     var Op = cp(40062);
-     const op = "helperFunctions",
-       Ip = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     XQ(42387);
+     const qQ = "bumpFragmentFunctions",
+       TQ = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/340.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/340.js#L31)

```diff
-   42496: (pp, ip, cp) => {
+   42414: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/340.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/340.js#L33)

```diff
-       e: () => Sp
+       b: () => zQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L35-L38` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/340.js#L35-L38) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/340.js#L35-L38)

```diff
-     var Op = cp(40062);
-     const op = "sceneUboDeclaration",
-       Ip = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "bumpFragmentMainFunctions",
+       TQ = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L44-L46` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/340.js#L44-L46) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/340.js#L44-L46)

```diff
-   42706: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       defaultPixelShaderWGSL: () => Vp
+   42372: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L48-L78` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/340.js#L48-L51) · [Before (L48-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/340.js#L48-L78)

```diff
-     var Op = cp(40062),
-       op = cp(42496),
-       Ip = cp(42498),
-       Sp = cp(42505),
-       xp = cp(42711),
-       Lp = cp(42714),
-       Yp = cp(42718),
-       Dp = cp(42542),
-       Ap = cp(42520),
-       Pp = cp(42721),
-       Wp = cp(42726),
-       yp = cp(42733);
-     const Up = "clusteredLightingCompute",
-       wp = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
-     Op.b.IncludesShadersStoreWGSL[Up] || (Op.b.IncludesShadersStoreWGSL[Up] = wp);
-     const vp = {
- ... (15 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     const qQ = "clusteredLightingFunctions",
+       TQ = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L82-L97` → after: `L55-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L55-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/340.js#L55-L64) · [Before (L82-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/340.js#L82-L97)

```diff
-     };
-     var qp = cp(42749),
-       Mp = cp(42752),
-       Cp = cp(42759),
-       Ep = cp(42765),
-       Xp = cp(42771),
-       lp = cp(42777),
-       Qp = cp(42783),
-       Jp = cp(42598),
-       Bp = cp(42790),
-       Np = cp(42794),
-       Tp = cp(42797),
-       fp = cp(42803);
-     const bp = "defaultFragmentAlpha",
-       hp = "#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpa … [truncated]
-     Op.b.IncludesShadersStoreWGSL[bp] || (Op.b.IncludesShadersStoreWGSL[bp] = hp);
+     }
+   },
+   42451: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "decalFragment",
+       TQ = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L101-L112` → after: `L68-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L68-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/340.js#L68-L77) · [Before (L101-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/340.js#L101-L112)

```diff
-     };
-     var np = cp(42807),
-       Fp = cp(42811),
-       gp = cp(42820),
-       Gp = cp(42825),
-       rp = cp(42831),
-       Zp = cp(42839);
-     const zp = "defaultPixelShader",
-       sp = "#include<defaultUboDeclaration>\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && … [truncated]
-     Op.b.ShadersStoreWGSL[zp] || (Op.b.ShadersStoreWGSL[zp] = sp);
-     const Kp = [op.e, Ip.e, Sp.e, xp.c, Lp.e, Yp.b, Dp.e, Ap.e, Pp.e, Wp.d, yp.c, vp, dp, ep.d, jp.d, Rp, qp.c, Mp.d, Cp.e, Ep.e, Xp.c, lp.c, Qp.d, Jp.d, Bp.b, Np.d, Tp.b, fp.d, ap, np.e, Fp.c, gp.b, Gp.d, rp.c, Zp.d];
-     for (const ii of Kp) Op.b.IncludesShadersStoreWGSL[ii.name] || (Op.b.IncludesShadersStoreWGSL[ii.name] = ii.shader);
+     }
+   },
+   42463: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "lightFragment",
+       TQ = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/341.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/341.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/341.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/341.js#L4)

```diff
-   42520: (pp, ip, cp) => {
+   42439: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/341.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/341.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "helperFunctions",
-       Ip = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneFragment",
+       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/341.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/341.js#L17)

```diff
-   61745: (pp, ip, cp) => {
+   42425: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/341.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/341.js#L21-L24)

```diff
-     var Op = cp(40062);
-     const op = "pbrBRDFFunctions",
-       Ip = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneFragmentDeclaration",
+       TQ = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L30` → after: `L30-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L30-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/341.js#L30-L43) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/341.js#L30)

```diff
-   42496: (pp, ip, cp) => {
+   42473: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "fogFragment",
+       TQ = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42433: (QQ, WQ, XQ) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L34-L37` → after: `L47-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L47-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/341.js#L47-L69) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/341.js#L34-L37)

```diff
-     var Op = cp(40062);
-     const op = "sceneUboDeclaration",
-       Ip = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "fogFragmentDeclaration",
+       TQ = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42851: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       colorPixelShader: () => JQ
+     });
+     var wQ = XQ(40126),
+       qQ = XQ(42425),
+       TQ = XQ(42433),
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/342.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/342.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L4)

```diff
-   42639: (pp, ip, cp) => {
+   42651: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L6)

```diff
-       c: () => Sp
+       d: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L8-L60` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L8) · [Before (L8-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L8-L60)

```diff
-     var Op = cp(40062);
-     const op = "bakedVertexAnimation",
-       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42527: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "bakedVertexAnimationDeclaration",
-       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
- ... (37 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L69` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L17) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L69)

```diff
-   42677: (pp, ip, cp) => {
+   42566: (QQ, WQ, XQ) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L71` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L19) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L71)

```diff
-       e: () => Sp
+       b: () => zQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L73-L75` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L21-L23) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L73-L75)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertex",
-       Ip = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "bumpVertexDeclaration",
+       TQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L82` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L30) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L82)

```diff
-   42565: (pp, ip, cp) => {
+   42511: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L84` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L32) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L84)

```diff
-       c: () => Sp
+       e: () => zQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L86-L88` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L34-L37) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L86-L88)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertexDeclaration",
-       Ip = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     var wQ = XQ(40126);
+     XQ(42500), XQ(42509);
+     const qQ = "defaultUboDeclaration",
+       TQ = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L95` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L44) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L95)

```diff
-   61754: (pp, ip, cp) => {
+   42523: (QQ, WQ, XQ) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L97` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L46) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L97)

```diff
-       b: () => Sp
+       e: () => zQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L99-L101` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L48-L50) · [Before (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L99-L101)

```diff
-     var Op = cp(40062);
-     const op = "harmonicsFunctions",
-       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "helperFunctions",
+       TQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L108-L134` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L57) · [Before (L108-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L108-L134)

```diff
-   42531: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "instancesDeclaration",
-       Ip = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42624: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Sp
- ... (11 more removed lines; see GitHub link above)
+   42500: (QQ, WQ, XQ) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L138-L190` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L61) · [Before (L138-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L138-L190)

```diff
-     var Op = cp(40062);
-     const op = "morphTargetsVertex",
-       Ip = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}\n#ifdef USE_VERTEX_PULLING\nvertexID=f32(vpVertexIndex)*uniforms.morphTargetTextureInfo.x;\n#else\nvertexID=f32 … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42589: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "morphTargetsVertexDeclaration",
-       Ip = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute position{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute normal{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute tangent{X} : vec3<f32>;\n#endif\n# … [truncated]
- ... (37 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L199` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L70) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L199)

```diff
-   61907: (pp, ip, cp) => {
+   42491: (QQ, WQ, XQ) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L201` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L72) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L201)

```diff
-       geometryVertexShaderWGSL: () => jp
+       defaultVertexShaderWGSL: () => xQ
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L203-L220` → after: `L74-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L74-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L74-L117) · [Before (L203-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L203-L220)

```diff
-     var Op = cp(40062),
-       op = cp(42525),
-       Ip = cp(42527),
-       Sp = cp(42584),
-       xp = cp(42589),
-       Lp = cp(42531),
-       Yp = cp(42496),
-       Dp = cp(42565),
-       Ap = cp(61754),
-       Pp = cp(42612),
-       Wp = cp(42617),
-       yp = cp(42624),
-       Up = cp(42632),
-       wp = cp(42639),
-       vp = cp(42677),
-       tp = cp(42669);
- ... (2 more removed lines; see GitHub link above)
+     var wQ = XQ(40126),
+       qQ = XQ(42500),
+       TQ = XQ(42509),
+       zQ = XQ(42511),
+       sQ = XQ(42518),
+       FQ = XQ(42523),
+       PQ = XQ(42529),
+       gQ = XQ(42534),
+       JQ = XQ(42539),
+       rQ = XQ(42547),
+       IQ = XQ(42555),
+       jQ = XQ(42558),
+       BQ = XQ(42566),
+       yQ = XQ(42570),
+       VQ = XQ(42579);
+     const DQ = "lightVxFragmentDeclaration",
+ ... (28 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L222` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/342.js#L119) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/342.js#L222)

```diff
-     const ep = [op.c, Ip.e, Sp.d, xp.e, Lp.d, Yp.e, Dp.c, Ap.b, Pp.d, Wp.c, yp.b, Up.b, wp.c, vp.e, tp.e];
+     const nQ = [qQ.c, TQ.b, zQ.e, sQ.d, FQ.e, PQ.e, gQ.d, JQ.d, rQ.b, IQ.b, jQ.c, BQ.b, yQ.b, VQ.e, GQ, UQ.c, bQ.b, vQ.c, dQ.e, HQ.d, aQ.e, lQ.e, hQ.b, iQ.c, cQ.c, AQ.c, RQ.c, EQ.e, CQ.d, uQ.d, LQ.c, kQ.e, fQ.d, SQ.b, tQ.e];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/343.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/343.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392)

#### 1. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L4-L82` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/343.js#L4) · [Before (L4-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/343.js#L4-L82)

```diff
-   42639: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "bakedVertexAnimation",
-       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42527: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
- ... (63 more removed lines; see GitHub link above)
+   42539: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L86-L112` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/343.js#L8) · [Before (L86-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/343.js#L86-L112)

```diff
-     var Op = cp(40062);
-     const op = "fogVertex",
-       Ip = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42567: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "fogVertexDeclaration",
-       Ip = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
- ... (11 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L121` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/343.js#L17) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/343.js#L121)

```diff
-   42624: (pp, ip, cp) => {
+   42626: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L123` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/343.js#L19) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/343.js#L123)

```diff
-       b: () => Sp
+       c: () => zQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L125` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/343.js#L21) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/343.js#L125)

```diff
-     var Op = cp(40062);
+     var wQ = XQ(40126);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L134-L160` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/343.js#L30) · [Before (L134-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/343.js#L134-L160)

```diff
-   42576: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "lightVxUboDeclaration",
-       Ip = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42598: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
- ... (11 more removed lines; see GitHub link above)
+   42509: (QQ, WQ, XQ) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L164-L190` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/343.js#L34) · [Before (L164-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/343.js#L164-L190)

```diff
-     var Op = cp(40062);
-     const op = "logDepthVertex",
-       Ip = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42542: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "mainUVVaryingDeclaration",
-       Ip = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
- ... (11 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L199` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/343.js#L43) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/343.js#L199)

```diff
-   42617: (pp, ip, cp) => {
+   42500: (QQ, WQ, XQ) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L203-L205` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/343.js#L47-L49) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/343.js#L203-L205)

```diff
-     var Op = cp(40062);
-     const op = "morphTargetsVertex",
-       Ip = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}\n#ifdef USE_VERTEX_PULLING\nvertexID=f32(vpVertexIndex)*uniforms.morphTargetTextureInfo.x;\n#else\nvertexID=f32 … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "sceneUboDeclaration",
+       TQ = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L212-L214` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/343.js#L56-L58) · [Before (L212-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/343.js#L212-L214)

```diff
-   42589: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
+   62152: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       greasedLineVertexShaderWGSL: () => JQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L216-L375` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/343.js#L60-L69) · [Before (L216-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/343.js#L216-L375)

```diff
-     var Op = cp(40062);
-     const op = "morphTargetsVertexDeclaration",
-       Ip = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute position{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute normal{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute tangent{X} : vec3<f32>;\n#endif\n# … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42612: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "morphTargetsVertexGlobal",
-       Ip = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nvar vertexID : f32;\n#endif\n#endif\n";
- ... (144 more removed lines; see GitHub link above)
+     var wQ = XQ(40126),
+       qQ = XQ(42539),
+       TQ = XQ(42500),
+       zQ = XQ(42509),
+       sQ = XQ(42626);
+     const FQ = "greasedLineVertexShader",
+       PQ = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
+     wQ.b.ShadersStoreWGSL[FQ] || (wQ.b.ShadersStoreWGSL[FQ] = PQ);
+     const gQ = [qQ.d, TQ.c, zQ.b, sQ.c];
+     for (const rQ of gQ) wQ.b.IncludesShadersStoreWGSL[rQ.name] || (wQ.b.IncludesShadersStoreWGSL[rQ.name] = rQ.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/344.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/344.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14)

#### 1. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L4-L160` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/344.js#L4) · [Before (L4-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/344.js#L4-L160)

```diff
-   42794: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "clipPlaneFragment",
-       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42783: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
- ... (141 more removed lines; see GitHub link above)
+   42511: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L164-L179` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/344.js#L8-L11) · [Before (L164-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/344.js#L164-L179)

```diff
-     var Op = cp(40062);
-     const op = "mainUVVaryingDeclaration",
-       Ip = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42831: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "meshBlendTagFragmentOutput",
-       Ip = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
+     var wQ = XQ(40126);
+     XQ(42500), XQ(42509);
+     const qQ = "defaultUboDeclaration",
+       TQ = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L186` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/344.js#L18) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/344.js#L186)

```diff
-   42498: (pp, ip, cp) => {
+   42523: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L190-L192` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/344.js#L22-L24) · [Before (L190-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/344.js#L190-L192)

```diff
-     var Op = cp(40062);
-     const op = "meshUboDeclaration",
-       Ip = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     var wQ = XQ(40126);
+     const qQ = "helperFunctions",
+       TQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L199` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/344.js#L31) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/344.js#L199)

```diff
-   42711: (pp, ip, cp) => {
+   42500: (QQ, WQ, XQ) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L203-L218` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/344.js#L35-L37) · [Before (L203-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/344.js#L203-L218)

```diff
-     var Op = cp(40062);
-     const op = "objectIdFunctions",
-       Ip = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42718: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "oitDeclaration",
-       Ip = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#define MAX_DEPTH 99999.0\nvar oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "sceneUboDeclaration",
+       TQ = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L225-L227` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/344.js#L44-L46) · [Before (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/344.js#L225-L227)

```diff
-   42839: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
+   42685: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       defaultPixelShaderWGSL: () => mQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L229-L231` → after: `L48-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L48-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/344.js#L48-L61) · [Before (L229-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/344.js#L229-L231)

```diff
-     var Op = cp(40062);
-     const op = "oitFragment",
-       Ip = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nvar fragDepth: f32=fragmentInputs.position.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nvar halfFloat: u32=pack2x16float( vec2f(fragDepth));var full: vec2f=unpack2x16float(halfFloat);fragDepth=full.x;\n#endif\nvar fragCoord … [truncated]
+     var wQ = XQ(40126),
+       qQ = XQ(42500),
+       TQ = XQ(42509),
+       zQ = XQ(42511),
+       sQ = XQ(42689),
+       FQ = XQ(42697),
+       PQ = XQ(42701),
+       gQ = XQ(42555),
+       JQ = XQ(42523),
+       rQ = XQ(42707),
+       IQ = XQ(42716),
+       jQ = XQ(42720);
+     const BQ = "clusteredLightingCompute",
+       yQ = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L234-L245` → after: `L64-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L64-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/344.js#L64-L68) · [Before (L234-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/344.js#L234-L245)

```diff
-       name: op,
-       shader: Ip
-     }
-   },
-   42714: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     cp(42711);
-     const op = "prePassDeclaration",
-       Ip = "#ifdef PREPASS\n#ifndef PREPASS_CUSTOM_VARYINGS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if (defined(PREPASS … [truncated]
+         name: BQ,
+         shader: yQ
+       },
+       DQ = "lightsFragmentFunctions",
+       pQ = "struct lightingInfo\n{diffuse: vec3f,\n#ifdef SPECULARTERM\nspecular: vec3f,\n#endif\n#ifdef NDOTL\nndl: f32,\n#endif\n};fn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->ligh … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L250-L258` → after: `L73-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L73-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/344.js#L73-L77) · [Before (L250-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/344.js#L250-L258)

```diff
-     }
-   },
-   42749: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "reflectionFunction",
-       Ip = "fn computeFixedEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,direction: vec3f)->vec3f\n{var lon: f32=atan2(direction.z,direction.x);var lat: f32=acos(direction.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;v … [truncated]
+     };
+     var UQ = XQ(42729),
+       bQ = XQ(42738);
+     const vQ = "fresnelFunction",
+       dQ = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L263-L284` → after: `L82-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L82-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/344.js#L82-L96) · [Before (L263-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/344.js#L263-L284)

```diff
-     }
-   },
-   42742: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "samplerFragmentDeclaration",
-       Ip = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42736: (pp, ip, cp) => {
- ... (6 more removed lines; see GitHub link above)
+     };
+     var aQ = XQ(42742),
+       lQ = XQ(42747),
+       hQ = XQ(42749),
+       iQ = XQ(42757),
+       cQ = XQ(42761),
+       AQ = XQ(42767),
+       RQ = XQ(42774),
+       EQ = XQ(42598),
+       CQ = XQ(42780),
+       uQ = XQ(42782),
+       LQ = XQ(42785),
+       kQ = XQ(42793);
+     const fQ = "defaultFragmentAlpha",
+       SQ = "#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpa … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L289-L298` → after: `L101-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L101-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/344.js#L101-L112) · [Before (L289-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/344.js#L289-L298)

```diff
-     }
-   },
-   42765: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "textureRepetitionFunctions",
-       Ip = "#if TEXTURE_REPETITION_MODE>0\nfn _texRepHash4(p: vec2f)->vec4f {return fract(sin(vec4f(\n1.0+dot(p,vec2f(37.0,17.0)),\n2.0+dot(p,vec2f(11.0,47.0)),\n3.0+dot(p,vec2f(41.0,29.0)),\n4.0+dot(p,vec2f(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nfn _te … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     };
+     var oQ = XQ(42800),
+       eQ = XQ(42805),
+       nQ = XQ(42814),
+       xQ = XQ(42820),
+       YQ = XQ(42824),
+       NQ = XQ(42829);
+     const ZQ = "defaultPixelShader",
+       OQ = "#include<defaultUboDeclaration>\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && … [truncated]
+     wQ.b.ShadersStoreWGSL[ZQ] || (wQ.b.ShadersStoreWGSL[ZQ] = OQ);
+     const KQ = [qQ.c, TQ.b, zQ.e, sQ.d, FQ.c, PQ.b, gQ.b, JQ.e, rQ.e, IQ.b, jQ.c, VQ, GQ, UQ.b, bQ.b, HQ, aQ.c, lQ.d, hQ.e, iQ.b, cQ.c, AQ.c, RQ.b, EQ.e, CQ.d, uQ.e, LQ.d, kQ.e, tQ, oQ.e, eQ.b, nQ.d, xQ.b, YQ.e, NQ.e];
+     for (const MQ of KQ) wQ.b.IncludesShadersStoreWGSL[MQ.name] || (wQ.b.IncludesShadersStoreWGSL[MQ.name] = MQ.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/345.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/345.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/345.js` (Changed code · before: `L4-L56` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/345.js#L4) · [Before (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/345.js#L4-L56)

```diff
-   42794: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "clipPlaneFragment",
-       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42783: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
- ... (37 more removed lines; see GitHub link above)
+   42523: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/345.js` (Changed code · before: `L60` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365e) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/345.js#L8) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/345.js#L60)

```diff
-     var Op = cp(40062);
+     var wQ = XQ(40126);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/345.js` (Changed code · before: `L69` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365e) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/345.js#L17) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/345.js#L69)

```diff
-   42752: (pp, ip, cp) => {
+   61912: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/345.js` (Changed code · before: `L71` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365eR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365e) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/345.js#L19) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/345.js#L71)

```diff
-       d: () => Sp
+       c: () => zQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/345.js` (Changed code · before: `L73-L75` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365e) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/345.js#L21-L23) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/345.js#L73-L75)

```diff
-     var Op = cp(40062);
-     const op = "imageProcessingDeclaration",
-       Ip = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "pbrBRDFFunctions",
+       TQ = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/345.js` (Changed code · before: `L82-L121` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365e) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/345.js#L30) · [Before (L82-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/345.js#L82-L121)

```diff
-   42759: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "imageProcessingFunctions",
-       Ip = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42598: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
- ... (24 more removed lines; see GitHub link above)
+   42500: (QQ, WQ, XQ) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/345.js` (Changed code · before: `L125-L127` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365eR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365e) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/345.js#L34-L36) · [Before (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/345.js#L125-L127)

```diff
-     var Op = cp(40062);
-     const op = "meshBlendTagFragmentOutput",
-       Ip = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "sceneUboDeclaration",
+       TQ = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/346.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/346.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/346.js` (Changed code · before: `L4` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/346.js#L4-L17) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/346.js#L4)

```diff
-   42794: (pp, ip, cp) => {
+   42635: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "bakedVertexAnimation",
+       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42534: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/346.js` (Changed code · before: `L8-L17` → after: `L21-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508efR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef) · [After (L21-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/346.js#L21-L56) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/346.js#L8-L17)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneFragment",
-       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42783: (pp, ip, cp) => {
+     var wQ = XQ(40126);
+     const qQ = "bakedVertexAnimationDeclaration",
+       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42529: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "bonesDeclaration",
+       TQ = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
+ ... (20 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/346.js` (Changed code · before: `L21-L30` → after: `L60-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508efR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef) · [After (L60-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/346.js#L60-L108) · [Before (L21-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/346.js#L21-L30)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneFragmentDeclaration",
-       Ip = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42825: (pp, ip, cp) => {
+     var wQ = XQ(40126);
+     const qQ = "bumpVertex",
+       TQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42659: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneVertex",
+       TQ = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+ ... (33 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/346.js` (Changed code · before: `L34-L56` → after: `L112-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508efR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef) · [After (L112-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/346.js#L112-L160) · [Before (L34-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/346.js#L34-L56)

```diff
-     var Op = cp(40062);
-     const op = "fogFragment",
-       Ip = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42790: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "fogFragmentDeclaration",
-       Ip = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
- ... (7 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     const qQ = "instancesDeclaration",
+       TQ = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42626: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "instancesVertex",
+       TQ = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+ ... (33 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/346.js` (Changed code · before: `L60-L95` → after: `L164-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508efR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef) · [After (L164-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/346.js#L164-L199) · [Before (L60-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/346.js#L60-L95)

```diff
-     var Op = cp(40062);
-     const op = "helperFunctions",
-       Ip = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42598: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "logDepthDeclaration",
-       Ip = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
- ... (20 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     const qQ = "morphTargetsVertexGlobal",
+       TQ = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nvar vertexID : f32;\n#endif\n#endif\n";
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42592: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "morphTargetsVertexGlobalDeclaration",
+       TQ = "#ifdef MORPHTARGETS\nuniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;\n#ifdef MORPHTARGETS_TEXTURE \nuniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f3 … [truncated]
+ ... (20 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/346.js` (Changed code · before: `L97-L115` → after: `L201-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508efR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef) · [After (L201-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/346.js#L201-L220) · [Before (L97-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/346.js#L97-L115)

```diff
-       skyPixelShaderWGSL: () => vp
-     });
-     var Op = cp(40062),
-       op = cp(42783),
-       Ip = cp(42598),
-       Sp = cp(42790),
-       xp = cp(42520),
-       Lp = cp(42794),
-       Yp = cp(42820),
-       Dp = cp(42825);
-     const Ap = "imageProcessingCompatibility",
-       Pp = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
-     Op.b.IncludesShadersStoreWGSL[Ap] || (Op.b.IncludesShadersStoreWGSL[Ap] = Pp);
-     const Wp = {
-         name: Ap,
-         shader: Pp
- ... (3 more removed lines; see GitHub link above)
+       geometryVertexShaderWGSL: () => bQ
+     });
+     var wQ = XQ(40126),
+       qQ = XQ(42529),
+       TQ = XQ(42534),
+       zQ = XQ(42592),
+       sQ = XQ(42596),
+       FQ = XQ(42539),
+       PQ = XQ(42500),
+       gQ = XQ(42570),
+       JQ = XQ(61920),
+       rQ = XQ(42619),
+       IQ = XQ(42622),
+       jQ = XQ(42626),
+       BQ = XQ(42629),
+       yQ = XQ(42635),
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/346.js` (Changed code · before: `L117` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508efR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/346.js#L222) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/346.js#L117)

```diff
-     const wp = [op.d, Ip.d, Sp.b, xp.e, Lp.d, Yp.b, Dp.d, Wp];
+     const UQ = [qQ.e, TQ.d, zQ.b, sQ.c, FQ.d, PQ.c, gQ.b, JQ.b, rQ.e, IQ.b, jQ.c, BQ.c, yQ.c, VQ.c, DQ.d];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/347.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/347.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6fcc510fef0e71b626dbd5d11e4d41f1d43e50479af14d93c4ccae22518d8f84)

#### 1. `bundles/preprod.bloxd.io/chunks/js/347.js` (Changed code · before: `L4-L27` → after: `L4-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6fcc510fef0e71b626dbd5d11e4d41f1d43e50479af14d93c4ccae22518d8f84R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6fcc510fef0e71b626dbd5d11e4d41f1d43e50479af14d93c4ccae22518d8f84) · [After (L4-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/347.js#L4-L375) · [Before (L4-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/347.js#L4-L27)

```diff
-   42520: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "helperFunctions",
-       Ip = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   61482: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       rgbdDecodePixelShaderWGSL: () => Lp
- ... (8 more removed lines; see GitHub link above)
+   42635: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "bakedVertexAnimation",
+       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42534: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
+ ... (356 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/348.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/348.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934)

#### 1. `bundles/preprod.bloxd.io/chunks/js/348.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/348.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/348.js#L4)

```diff
-   42520: (pp, ip, cp) => {
+   42782: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/348.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/348.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/348.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "helperFunctions",
-       Ip = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneFragment",
+       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/348.js` (Changed code · before: `L17-L19` → after: `L17-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934) · [After (L17-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/348.js#L17-L280) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/348.js#L17-L19)

```diff
-   61509: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       rgbdEncodePixelShaderWGSL: () => Lp
+   42774: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneFragmentDeclaration",
+       TQ = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42720: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ
+ ... (248 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/348.js` (Changed code · before: `L21-L27` → after: `L282-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934) · [After (L282-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/348.js#L282-L298) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/348.js#L21-L27)

```diff
-     var Op = cp(40062),
-       op = cp(42520);
-     const Ip = "rgbdEncodePixelShader",
-       Sp = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
-     Op.b.ShadersStoreWGSL[Ip] || (Op.b.ShadersStoreWGSL[Ip] = Sp);
-     const xp = [op.e];
-     for (const Yp of xp) Op.b.IncludesShadersStoreWGSL[Yp.name] || (Op.b.IncludesShadersStoreWGSL[Yp.name] = Yp.shader);
+     var wQ = XQ(40126);
+     const qQ = "shadowsFragmentFunctions",
+       TQ = "#ifdef SHADOWS\n#ifndef SHADOWFLOAT\nfn unpack(color: vec4f)->f32\n{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}\n#endif\nfn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f3 … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42757: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "textureRepetitionFunctions",
+       TQ = "#if TEXTURE_REPETITION_MODE>0\nfn _texRepHash4(p: vec2f)->vec4f {return fract(sin(vec4f(\n1.0+dot(p,vec2f(37.0,17.0)),\n2.0+dot(p,vec2f(11.0,47.0)),\n3.0+dot(p,vec2f(41.0,29.0)),\n4.0+dot(p,vec2f(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nfn _te … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/349.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/349.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab)

#### 1. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L4)

```diff
-   42639: (pp, ip, cp) => {
+   42782: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L6)

```diff
-       c: () => Sp
+       e: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "bakedVertexAnimation",
-       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneFragment",
+       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L17)

```diff
-   42527: (pp, ip, cp) => {
+   42774: (QQ, WQ, XQ) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L19)

```diff
-       e: () => Sp
+       b: () => zQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L21-L23` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L21-L23) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L21-L23)

```diff
-     var Op = cp(40062);
-     const op = "bakedVertexAnimationDeclaration",
-       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneFragmentDeclaration",
+       TQ = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L30)

```diff
-   42525: (pp, ip, cp) => {
+   42820: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L32)

```diff
-       c: () => Sp
+       b: () => zQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L34-L36` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L34-L36) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L34-L36)

```diff
-     var Op = cp(40062);
-     const op = "bonesDeclaration",
-       Ip = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "fogFragment",
+       TQ = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L43)

```diff
-   42632: (pp, ip, cp) => {
+   42780: (QQ, WQ, XQ) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L45)

```diff
-       b: () => Sp
+       d: () => zQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L47-L49` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L47-L49) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L47-L49)

```diff
-     var Op = cp(40062);
-     const op = "bonesVertex",
-       Ip = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "fogFragmentDeclaration",
+       TQ = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L56)

```diff
-   42677: (pp, ip, cp) => {
+   42523: (QQ, WQ, XQ) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L60-L62` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L60-L62) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L60-L62)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertex",
-       Ip = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "helperFunctions",
+       TQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L69)

```diff
-   42565: (pp, ip, cp) => {
+   42747: (QQ, WQ, XQ) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L71)

```diff
-       c: () => Sp
+       d: () => zQ
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L73-L75` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L73-L75) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L73-L75)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertexDeclaration",
-       Ip = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "imageProcessingDeclaration",
+       TQ = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L82)

```diff
-   42680: (pp, ip, cp) => {
+   42749: (QQ, WQ, XQ) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L84)

```diff
-       d: () => Sp
+       e: () => zQ
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L86-L88` → after: `L86-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L86-L88) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L86-L88)

```diff
-     var Op = cp(40062);
-     const op = "fogVertex",
-       Ip = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "imageProcessingFunctions",
+       TQ = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L95)

```diff
-   42567: (pp, ip, cp) => {
+   42598: (QQ, WQ, XQ) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L97)

```diff
-       c: () => Sp
+       e: () => zQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L99-L101` → after: `L99-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L99-L101) · [Before (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L99-L101)

```diff
-     var Op = cp(40062);
-     const op = "fogVertexDeclaration",
-       Ip = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "logDepthDeclaration",
+       TQ = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L108)

```diff
-   42531: (pp, ip, cp) => {
+   42814: (QQ, WQ, XQ) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L112-L114` → after: `L112-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L112-L114) · [Before (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L112-L114)

```diff
-     var Op = cp(40062);
-     const op = "instancesDeclaration",
-       Ip = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "logDepthFragment",
+       TQ = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L121)

```diff
-   42624: (pp, ip, cp) => {
+   42824: (QQ, WQ, XQ) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L123)

```diff
-       b: () => Sp
+       e: () => zQ
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L125-L127` → after: `L125-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L125-L127) · [Before (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L125-L127)

```diff
-     var Op = cp(40062);
-     const op = "instancesVertex",
-       Ip = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "meshBlendTagFragmentOutput",
+       TQ = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L134)

```diff
-   42688: (pp, ip, cp) => {
+   42689: (QQ, WQ, XQ) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L138-L140` → after: `L138-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L138-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L138-L140) · [Before (L138-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L138-L140)

```diff
-     var Op = cp(40062);
-     const op = "vertexColorMixing",
-       Ip = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertex … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "objectIdFunctions",
+       TQ = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L147` → after: `L147-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L147-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L147-L161) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L147)

```diff
-   42847: (pp, ip, cp) => {
+   42697: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ
+     });
+     var wQ = XQ(40126);
+     XQ(42689);
+     const qQ = "prePassDeclaration",
+       TQ = "#ifdef PREPASS\n#ifndef PREPASS_CUSTOM_VARYINGS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if (defined(PREPASS … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   61568: (QQ, WQ, XQ) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L149` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L163) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L149)

```diff
-       colorVertexShaderWGSL: () => tp
+       particlesPixelShaderWGSL: () => bQ
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L151-L164` → after: `L165-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L165-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L165-L186) · [Before (L151-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L151-L164)

```diff
-     var Op = cp(40062),
-       op = cp(42525),
-       Ip = cp(42527),
-       Sp = cp(42565),
-       xp = cp(42567),
-       Lp = cp(42531),
-       Yp = cp(42624),
-       Dp = cp(42632),
-       Ap = cp(42639),
-       Pp = cp(42677),
-       Wp = cp(42680),
-       yp = cp(42688);
-     const Up = "colorVertexShader",
-       wp = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform view: mat4x4f;\n#endif\n#i … [truncated]
+     var wQ = XQ(40126),
+       qQ = XQ(42689),
+       TQ = XQ(42697),
+       zQ = XQ(42774),
+       sQ = XQ(42747),
+       FQ = XQ(42598),
+       PQ = XQ(42523),
+       gQ = XQ(42749),
+       JQ = XQ(42780),
+       rQ = XQ(42782),
+       IQ = XQ(42814),
+       jQ = XQ(42820),
+       BQ = XQ(42824);
+     const yQ = "geometryRenderingFragment",
+       VQ = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nlet geometryCoverage=select(0.0,1.0,geometryColor.a>0.4);var fragData: array<vec4f,SCENE_MRT_COUNT>;\n#ifdef PREPASS_COLOR\nfragData[PREPASS_COLOR_INDEX]=geometryColor;\n#endif\n#ifdef PREPASS_POSITION\nfragData[PREPASS_POSITION_ … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[yQ] || (wQ.b.IncludesShadersStoreWGSL[yQ] = VQ);
+ ... (6 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L166` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/349.js#L188) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/349.js#L166)

```diff
-     const vp = [op.c, Ip.e, Sp.c, xp.c, Lp.d, Yp.b, Dp.b, Ap.c, Pp.e, Wp.d, yp.d];
+     const UQ = [qQ.d, TQ.c, zQ.b, sQ.d, FQ.e, PQ.e, gQ.e, JQ.d, rQ.e, IQ.d, jQ.b, BQ.e, DQ];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/350.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/350.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66)

#### 1. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/350.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/350.js#L4)

```diff
-   42669: (pp, ip, cp) => {
+   42782: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/350.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/350.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "bumpVertex",
-       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneFragment",
+       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/350.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/350.js#L17)

```diff
-   42556: (pp, ip, cp) => {
+   42774: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L21-L23` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/350.js#L21-L23) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/350.js#L21-L23)

```diff
-     var Op = cp(40062);
-     const op = "bumpVertexDeclaration",
-       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneFragmentDeclaration",
+       TQ = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/350.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/350.js#L30)

```diff
-   61754: (pp, ip, cp) => {
+   42820: (QQ, WQ, XQ) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L34-L36` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/350.js#L34-L36) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/350.js#L34-L36)

```diff
-     var Op = cp(40062);
-     const op = "harmonicsFunctions",
-       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "fogFragment",
+       TQ = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/350.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/350.js#L43)

```diff
-   61741: (pp, ip, cp) => {
+   42780: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L47-L50` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/350.js#L47-L49) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/350.js#L47-L50)

```diff
-     var Op = cp(40062);
-     cp(42496), cp(42498);
-     const op = "pbrUboDeclaration",
-       Ip = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "fogFragmentDeclaration",
+       TQ = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L57` → after: `L56-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L56-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/350.js#L56-L95) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/350.js#L57)

```diff
-   61736: (pp, ip, cp) => {
+   42523: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "helperFunctions",
+       TQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42598: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+ ... (24 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L59` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/350.js#L97) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/350.js#L59)

```diff
-       pbrVertexShaderWGSL: () => gp
+       skyPixelShaderWGSL: () => VQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L61-L80` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/350.js#L99-L100) · [Before (L61-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/350.js#L61-L80)

```diff
-     var Op = cp(40062),
-       op = cp(42496),
-       Ip = cp(42498),
-       Sp = cp(61741),
-       xp = cp(42513),
-       Lp = cp(42542),
-       Yp = cp(42520),
-       Dp = cp(61745),
-       Ap = cp(42525),
-       Pp = cp(42527),
-       Wp = cp(42531),
-       yp = cp(42536),
-       Up = cp(42550),
-       wp = cp(61754),
-       vp = cp(42556),
-       tp = cp(42565),
- ... (4 more removed lines; see GitHub link above)
+     var wQ = XQ(40126),
+       qQ = XQ(42774),
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L82-L99` → after: `L102-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L102-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/350.js#L102-L115) · [Before (L82-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/350.js#L82-L99)

```diff
-       mp = cp(42602),
-       Rp = cp(42610),
-       qp = cp(42612),
-       Mp = cp(42617),
-       Cp = cp(42624),
-       Ep = cp(42632),
-       Xp = cp(42639),
-       lp = cp(42644),
-       Qp = cp(42653),
-       Jp = cp(42661),
-       Bp = cp(42669),
-       Np = cp(42677),
-       Tp = cp(42680),
-       fp = cp(42684),
-       bp = cp(42688),
-       hp = cp(42697);
- ... (2 more removed lines; see GitHub link above)
+       zQ = XQ(42780),
+       sQ = XQ(42523),
+       FQ = XQ(42782),
+       PQ = XQ(42814),
+       gQ = XQ(42820);
+     const JQ = "imageProcessingCompatibility",
+       rQ = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
+     wQ.b.IncludesShadersStoreWGSL[JQ] || (wQ.b.IncludesShadersStoreWGSL[JQ] = rQ);
+     const IQ = {
+         name: JQ,
+         shader: rQ
+       },
+       jQ = "skyPixelShader",
+       BQ = "varying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform cameraPosition: vec3f;uniform cameraOffset: vec3f;uniform up: vec3f;uniform luminance: f32;uniform turbidity: f32;uniform rayleigh: f32;unif … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L101` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/350.js#L117) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/350.js#L101)

```diff
-     const Fp = [op.e, Ip.e, Sp.d, xp.b, Lp.e, Yp.e, Dp.c, Ap.c, Pp.e, Wp.d, yp.c, Up.e, wp.b, vp.b, tp.c, Hp.c, dp.e, ep.d, jp.e, kp.d, mp.e, Rp.e, qp.d, Mp.c, Cp.b, Ep.b, Xp.c, lp.e, Qp.b, Jp.d, Bp.e, Np.e, Tp.d, fp.b, bp.d, hp.b];
+     const yQ = [qQ.b, TQ.e, zQ.d, sQ.e, FQ.e, PQ.d, gQ.b, IQ];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/351.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/351.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/351.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/351.js#L4)

```diff
-   42677: (pp, ip, cp) => {
+   42523: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/351.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/351.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertex",
-       Ip = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "helperFunctions",
+       TQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/351.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/351.js#L17-L19)

```diff
-   42565: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
+   61658: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       rgbdDecodePixelShaderWGSL: () => FQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L21-L94` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/351.js#L21-L24) · [Before (L21-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/351.js#L21-L94)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertexDeclaration",
-       Ip = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42680: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "fogVertex",
-       Ip = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
- ... (58 more removed lines; see GitHub link above)
+     var wQ = XQ(40126),
+       qQ = XQ(42523);
+     const TQ = "rgbdDecodePixelShader",
+       zQ = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L96` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/351.js#L26) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/351.js#L96)

```diff
-     const Pp = [op.c, Ip.c, Sp.d, xp.e, Lp.d, Yp.b];
+     const sQ = [qQ.e];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/352.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/352.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/352.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/352.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/352.js#L4)

```diff
-   42677: (pp, ip, cp) => {
+   42523: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/352.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/352.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/352.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertex",
-       Ip = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "helperFunctions",
+       TQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/352.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/352.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/352.js#L17-L19)

```diff
-   42565: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
+   61677: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       rgbdEncodePixelShaderWGSL: () => FQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/352.js` (Changed code · before: `L21-L94` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/352.js#L21-L24) · [Before (L21-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/352.js#L21-L94)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertexDeclaration",
-       Ip = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42680: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "fogVertex",
-       Ip = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
- ... (58 more removed lines; see GitHub link above)
+     var wQ = XQ(40126),
+       qQ = XQ(42523);
+     const TQ = "rgbdEncodePixelShader",
+       zQ = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/352.js` (Changed code · before: `L96` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/352.js#L26) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/352.js#L96)

```diff
-     const Pp = [op.d, Ip.c, Sp.c, xp.e, Lp.b, Yp.d];
+     const sQ = [qQ.e];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/353.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/353.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575)

#### 1. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L4-L17` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L4) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L4-L17)

```diff
-   42797: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "bumpFragment",
-       Ip = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42777: (pp, ip, cp) => {
+   42635: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L21-L24` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L8-L10) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L21-L24)

```diff
-     var Op = cp(40062);
-     cp(42742);
-     const op = "bumpFragmentFunctions",
-       Ip = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "bakedVertexAnimation",
+       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L31-L44` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L17) · [Before (L31-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L31-L44)

```diff
-   42771: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "bumpFragmentMainFunctions",
-       Ip = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42794: (pp, ip, cp) => {
+   42534: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L48-L50` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L21-L23) · [Before (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L48-L50)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneFragment",
-       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "bakedVertexAnimationDeclaration",
+       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L57` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L30) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L57)

```diff
-   42783: (pp, ip, cp) => {
+   42529: (QQ, WQ, XQ) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L59` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L32) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L59)

```diff
-       d: () => Sp
+       e: () => zQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L61-L63` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L34-L36) · [Before (L61-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L61-L63)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneFragmentDeclaration",
-       Ip = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "bonesDeclaration",
+       TQ = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L70` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L43) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L70)

```diff
-   42711: (pp, ip, cp) => {
+   42629: (QQ, WQ, XQ) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L74-L76` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L47-L49) · [Before (L74-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L74-L76)

```diff
-     var Op = cp(40062);
-     const op = "objectIdFunctions",
-       Ip = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "bonesVertex",
+       TQ = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L83` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L56) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L83)

```diff
-   61883: (pp, ip, cp) => {
+   42659: (QQ, WQ, XQ) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L85-L98` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L58) · [Before (L85-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L85-L98)

```diff
-       b: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "openpbrDielectricReflectance",
-       Ip = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   61885: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
+       c: () => zQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L100-L102` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L60-L62) · [Before (L100-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L100-L102)

```diff
-     var Op = cp(40062);
-     const op = "openpbrGeometryInfo",
-       Ip = "struct geometryInfoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32};struct geometryInfoAnisoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32,\nanisotropy: f32,\nanisotropicTange … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneVertex",
+       TQ = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L109` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L69) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L109)

```diff
-   61889: (pp, ip, cp) => {
+   42570: (QQ, WQ, XQ) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L113-L128` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L73-L75) · [Before (L113-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L113-L128)

```diff
-     var Op = cp(40062);
-     const op = "openpbrIblFunctions",
-       Ip = "#ifdef REFLECTION\nfn sampleIrradiance(\nsurfaceNormal: vec3f\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,vEnvironmentIrradianceSH: vec3f\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defi … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   61903: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "openpbrSubsurfaceLayerData",
-       Ip = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneVertexDeclaration",
+       TQ = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L135` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L82) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L135)

```diff
-   61897: (pp, ip, cp) => {
+   42662: (QQ, WQ, XQ) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L139-L141` → after: `L86-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L86-L88) · [Before (L139-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L139-L141)

```diff
-     var Op = cp(40062);
-     const op = "openpbrTransmissionLayerData",
-       Ip = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "fogVertex",
+       TQ = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L148` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L95) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L148)

```diff
-   61766: (pp, ip, cp) => {
+   42579: (QQ, WQ, XQ) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L152-L154` → after: `L99-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L99-L101) · [Before (L152-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L152-L154)

```diff
-     var Op = cp(40062);
-     const op = "pbrFragmentReflectionDeclaration",
-       Ip = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\nvar reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;\n#ifdef LODBASEDMICROSFURACE\n#else\nvar reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamp … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "fogVertexDeclaration",
+       TQ = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L161` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L108) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L161)

```diff
-   61818: (pp, ip, cp) => {
+   42539: (QQ, WQ, XQ) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L163` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L110) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L163)

```diff
-       c: () => Sp
+       d: () => zQ
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L165-L167` → after: `L112-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L112-L114) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L165-L167)

```diff
-     var Op = cp(40062);
-     const op = "pbrIBLFunctions",
-       Ip = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfn getLodFromAlphaG(cubeMapDimensionPixels: f32,microsurfaceAverageSlope: f32)->f32 {var microsurfaceAverageSlopeTexels: f32=cubeMapDimensionPixels*microsurfaceAverageSlope;var lod: f32=log2(microsurfaceAverageSlopeTe … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "instancesDeclaration",
+       TQ = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L174` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L121) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L174)

```diff
-   42749: (pp, ip, cp) => {
+   42626: (QQ, WQ, XQ) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L178-L180` → after: `L125-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L125-L127) · [Before (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L178-L180)

```diff
-     var Op = cp(40062);
-     const op = "reflectionFunction",
-       Ip = "fn computeFixedEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,direction: vec3f)->vec3f\n{var lon: f32=atan2(direction.z,direction.x);var lat: f32=acos(direction.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;v … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "instancesVertex",
+       TQ = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L187` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L134) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L187)

```diff
-   42742: (pp, ip, cp) => {
+   42671: (QQ, WQ, XQ) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L189` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L136) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L189)

```diff
-       d: () => Sp
+       b: () => zQ
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L191-L193` → after: `L138-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L138-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L138-L140) · [Before (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L191-L193)

```diff
-     var Op = cp(40062);
-     const op = "samplerFragmentDeclaration",
-       Ip = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "vertexColorMixing",
+       TQ = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertex … [truncated]
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L200` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L147) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L200)

```diff
-   61916: (pp, ip, cp) => {
+   42833: (QQ, WQ, XQ) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L202-L224` → after: `L149-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L149-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L149-L164) · [Before (L202-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L202-L224)

```diff
-       geometryPixelShaderWGSL: () => Rp
-     });
-     var Op = cp(40062),
-       op = cp(42711),
-       Ip = cp(42783),
-       Sp = cp(42771),
-       xp = cp(42742),
-       Lp = cp(42777),
-       Yp = cp(42520),
-       Dp = cp(61766),
-       Ap = cp(42496),
-       Pp = cp(61745),
-       Wp = cp(61883),
-       yp = cp(61818),
-       Up = cp(42749),
-       wp = cp(61885),
- ... (7 more removed lines; see GitHub link above)
+       colorVertexShaderWGSL: () => DQ
+     });
+     var wQ = XQ(40126),
+       qQ = XQ(42529),
+       TQ = XQ(42534),
+       zQ = XQ(42570),
+       sQ = XQ(42579),
+       FQ = XQ(42539),
+       PQ = XQ(42626),
+       gQ = XQ(42629),
+       JQ = XQ(42635),
+       rQ = XQ(42659),
+       IQ = XQ(42662),
+       jQ = XQ(42671);
+     const BQ = "colorVertexShader",
+       yQ = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform view: mat4x4f;\n#endif\n#i … [truncated]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L226` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/353.js#L166) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/353.js#L226)

```diff
-     const mp = [op.c, Ip.d, Sp.c, xp.d, Lp.c, Yp.e, Dp.e, Ap.e, Pp.c, Wp.b, yp.c, Up.c, wp.d, vp.b, tp.d, Hp.b, dp.c, ep.e];
+     const VQ = [qQ.e, TQ.d, zQ.b, sQ.e, FQ.d, PQ.c, gQ.c, JQ.c, rQ.c, IQ.e, jQ.b];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/354.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/354.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L4)

```diff
-   42797: (pp, ip, cp) => {
+   42651: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L6)

```diff
-       b: () => Sp
+       d: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "bumpFragment",
-       Ip = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "bumpVertex",
+       TQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L17)

```diff
-   42777: (pp, ip, cp) => {
+   42566: (QQ, WQ, XQ) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L19)

```diff
-       c: () => Sp
+       b: () => zQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L21-L24` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L21-L23) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L21-L24)

```diff
-     var Op = cp(40062);
-     cp(42742);
-     const op = "bumpFragmentFunctions",
-       Ip = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "bumpVertexDeclaration",
+       TQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L31)

```diff
-   42771: (pp, ip, cp) => {
+   61920: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L33)

```diff
-       c: () => Sp
+       b: () => zQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L35-L37` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L34-L36) · [Before (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L35-L37)

```diff
-     var Op = cp(40062);
-     const op = "bumpFragmentMainFunctions",
-       Ip = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "harmonicsFunctions",
+       TQ = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L44)

```diff
-   42803: (pp, ip, cp) => {
+   61903: (QQ, WQ, XQ) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L46)

```diff
-       d: () => Sp
+       c: () => zQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L48-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L47-L50) · [Before (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L48-L50)

```diff
-     var Op = cp(40062);
-     const op = "decalFragment",
-       Ip = "#ifdef DECAL\nvar decalTempColor=decalColor.rgb;var decalTempAlpha=decalColor.a;\n#ifdef GAMMADECAL\ndecalTempColor=toLinearSpaceVec3(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalTempAlpha=decalColor.a*decalColor.a;\n#endif\nsurfaceAlbedo=mix(surfaceAlbedo … [truncated]
+     var wQ = XQ(40126);
+     XQ(42500), XQ(42509);
+     const qQ = "pbrUboDeclaration",
+       TQ = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L57-L59` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L57-L59) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L57-L59)

```diff
-   42811: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
+   61895: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       pbrVertexShaderWGSL: () => nQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L61-L64` → after: `L61-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L61-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/354.js#L61-L102) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/354.js#L61-L64)

```diff
-     var Op = cp(40062);
-     const op = "lightFragment",
-       Ip = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvar diffuse{X}: vec4f=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X})\n{let slic … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126),
+       qQ = XQ(42500),
+       TQ = XQ(42509),
+       zQ = XQ(61903),
+       sQ = XQ(42518),
+       FQ = XQ(42555),
+       PQ = XQ(42523),
+       gQ = XQ(61912),
+       JQ = XQ(42529),
+       rQ = XQ(42534),
+       IQ = XQ(42539),
+       jQ = XQ(42547),
+       BQ = XQ(42558),
+       yQ = XQ(61920),
+       VQ = XQ(42566),
+       DQ = XQ(42570),
+ ... (26 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/355.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/355.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L4)

```diff
-   42794: (pp, ip, cp) => {
+   42659: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L6)

```diff
-       d: () => Sp
+       c: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneFragment",
-       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneVertex",
+       TQ = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L17)

```diff
-   42783: (pp, ip, cp) => {
+   42570: (QQ, WQ, XQ) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L19)

```diff
-       d: () => Sp
+       b: () => zQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L21-L23` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L21-L23) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L21-L23)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneFragmentDeclaration",
-       Ip = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneVertexDeclaration",
+       TQ = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L30)

```diff
-   42825: (pp, ip, cp) => {
+   42662: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L32)

```diff
-       d: () => Sp
+       e: () => zQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L34-L36` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L34-L36) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L34-L36)

```diff
-     var Op = cp(40062);
-     const op = "fogFragment",
-       Ip = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "fogVertex",
+       TQ = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L43)

```diff
-   42790: (pp, ip, cp) => {
+   42579: (QQ, WQ, XQ) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L45)

```diff
-       b: () => Sp
+       e: () => zQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L47-L49` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L47-L49) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L47-L49)

```diff
-     var Op = cp(40062);
-     const op = "fogFragmentDeclaration",
-       Ip = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "fogVertexDeclaration",
+       TQ = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L56` → after: `L56-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L56-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L56-L82) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L56)

```diff
-   42853: (pp, ip, cp) => {
+   42598: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "logDepthDeclaration",
+       TQ = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42676: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+ ... (11 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L58` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L84) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L58)

```diff
-       colorPixelShaderWGSL: () => Ap
+       particlesVertexShaderWGSL: () => IQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L60-L66` → after: `L86-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L86-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L86-L94) · [Before (L60-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L60-L66)

```diff
-     var Op = cp(40062),
-       op = cp(42783),
-       Ip = cp(42790),
-       Sp = cp(42794),
-       xp = cp(42825);
-     const Lp = "colorPixelShader",
-       Yp = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
+     var wQ = XQ(40126),
+       qQ = XQ(42570),
+       TQ = XQ(42579),
+       zQ = XQ(42598),
+       sQ = XQ(42659),
+       FQ = XQ(42662),
+       PQ = XQ(42676);
+     const gQ = "particlesVertexShader",
+       JQ = "attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;\n#ifdef ANIMATESHEET\nattribute cellIndex: f32;\n#endif\n#ifndef BILLBOARD\nattribute direction: vec3f;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute direction: vec3f;\n#endif … [truncated]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L68` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/355.js#L96) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/355.js#L68)

```diff
-     const Dp = [op.d, Ip.b, Sp.d, xp.d];
+     const rQ = [qQ.b, TQ.e, zQ.e, sQ.c, FQ.e, PQ.e];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/356.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/356.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/356.js` (Changed code · before: `L4-L6` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/356.js#L4-L14) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/356.js#L4-L6)

```diff
-   42843: (pp, ip, cp) => {
-     function Op(pp) {
-       return Math.floor(pp / 8)
+   42659: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneVertex",
+       TQ = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/356.js` (Changed code · before: `L8-L10` → after: `L16-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7) · [After (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/356.js#L16-L27) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/356.js#L8-L10)

```diff
- 
-     function op(pp) {
-       return 1 << pp % 8
+   },
+   42570: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneVertexDeclaration",
+       TQ = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/356.js` (Changed code · before: `L13` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/356.js#L32) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/356.js#L13)

```diff
-       OptimizeIndices: () => Sp
+       e: () => zQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/356.js` (Changed code · before: `L15-L30` → after: `L34-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7) · [After (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/356.js#L34-L40) · [Before (L15-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/356.js#L15-L30)

```diff
-     class Ip {
-       constructor(pp) {
-         this.size = pp, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
-       }
-       get(pp) {
-         if (pp >= this.size) throw new RangeError("Bit index out of range");
-         const ip = Op(pp),
-           cp = op(pp);
-         return 0 !== (this._byteArray[ip] & cp)
-       }
-       set(pp, ip) {
-         if (pp >= this.size) throw new RangeError("Bit index out of range");
-         const cp = Op(pp),
-           Ip = op(pp);
-         ip ? this._byteArray[cp] |= Ip : this._byteArray[cp] &= ~Ip
-       }
+     var wQ = XQ(40126);
+     const qQ = "fogVertex",
+       TQ = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/356.js` (Changed code · before: `L32-L63` → after: `L42-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7) · [After (L42-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/356.js#L42-L100) · [Before (L32-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/356.js#L32-L63)

```diff
- 
-     function Sp(pp) {
-       const ip = [],
-         cp = pp.length / 3;
-       for (let Ip = 0; Ip < cp; Ip++) ip.push([pp[3 * Ip], pp[3 * Ip + 1], pp[3 * Ip + 2]]);
-       const Op = new Map;
-       for (let Ip = 0; Ip < ip.length; Ip++) {
-         const pp = ip[Ip];
-         for (const ip of pp) {
-           let pp = Op.get(ip);
-           pp || Op.set(ip, pp = []), pp.push(Ip)
-         }
-       }
-       const op = new Ip(cp),
-         Sp = [],
-         xp = pp => {
- ... (16 more removed lines; see GitHub link above)
+   },
+   42579: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "fogVertexDeclaration",
+       TQ = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42598: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+ ... (43 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/357.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/357.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219eca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/357.js` (Changed code · before: `L4-L5` → after: `L4-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219ecaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219eca) · [After (L4-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/357.js#L4-L200) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/357.js#L4-L5)

```diff
-   61383: (pp, ip, cp) => {
-     var Op;
+   42785: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "bumpFragment",
+       TQ = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42767: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ
+ ... (181 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/357.js` (Changed code · before: `L7-L11` → after: `L202-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219ecaR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219eca) · [After (L202-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/357.js#L202-L231) · [Before (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/357.js#L7-L11)

```diff
-         ShaderLanguage: () => Op
-       }),
-       function(pp) {
-         pp[pp.GLSL = 0] = "GLSL", pp[pp.WGSL = 1] = "WGSL"
-       }(Op || (Op = {}))
+       geometryPixelShaderWGSL: () => HQ
+     });
+     var wQ = XQ(40126),
+       qQ = XQ(42689),
+       TQ = XQ(42774),
+       zQ = XQ(42761),
+       sQ = XQ(42738),
+       FQ = XQ(42767),
+       PQ = XQ(42523),
+       gQ = XQ(61934),
+       JQ = XQ(42500),
+       rQ = XQ(61912),
+       IQ = XQ(62071),
+       jQ = XQ(61988),
+       BQ = XQ(42742),
+       yQ = XQ(62080),
+ ... (14 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/358.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/358.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872)

#### 1. `bundles/preprod.bloxd.io/chunks/js/358.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/358.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/358.js#L4-L6)

```diff
-   61392: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       postprocessVertexShader: () => Sp
+   42785: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/358.js` (Changed code · before: `L8-L11` → after: `L8-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872) · [After (L8-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/358.js#L8-L64) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/358.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "postprocessVertexShader",
-       Ip = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "bumpFragment",
+       TQ = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42767: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ
+     });
+     var wQ = XQ(40126);
+     XQ(42738);
+     const qQ = "bumpFragmentFunctions",
+ ... (41 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/359.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/359.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122)

#### 1. `bundles/preprod.bloxd.io/chunks/js/359.js` (Changed code · before: `L4` → after: `L4-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122) · [After (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/359.js#L4-L56) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/359.js#L4)

```diff
-   61399: (pp, ip, cp) => {
+   42782: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneFragment",
+       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42774: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+ ... (37 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/359.js` (Changed code · before: `L6` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/359.js#L58) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/359.js#L6)

```diff
-       WorldCodeAiOutOfUsage: () => Ip
+       colorPixelShaderWGSL: () => JQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/359.js` (Changed code · before: `L8-L25` → after: `L60-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122) · [After (L60-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/359.js#L60-L72) · [Before (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/359.js#L8-L25)

```diff
-     var Op = cp(1480),
-       op = cp(1112);
- 
-     function Ip(pp) {
-       let {
-         onGetSuperRank: ip
-       } = pp;
-       return (0, op.jsxs)("div", {
-         className: "WorldCodeAiOutOfUsage",
-         children: [(0, op.jsx)("p", {
-           className: "WorldCodeAiOutOfUsageText",
-           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
-         }), (0, op.jsx)(Op.o, {
-           className: "WorldCodeAiOutOfUsageButton",
-           onClick: ip,
-           children: "Get Super Rank"
- ... (2 more removed lines; see GitHub link above)
+     var wQ = XQ(40126),
+       qQ = XQ(42774),
+       TQ = XQ(42780),
+       zQ = XQ(42782),
+       sQ = XQ(42820);
+     const FQ = "colorPixelShader",
+       PQ = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
+     wQ.b.ShadersStoreWGSL[FQ] || (wQ.b.ShadersStoreWGSL[FQ] = PQ);
+     const gQ = [qQ.b, TQ.d, zQ.e, sQ.b];
+     for (const rQ of gQ) wQ.b.IncludesShadersStoreWGSL[rQ.name] || (wQ.b.IncludesShadersStoreWGSL[rQ.name] = rQ.shader);
+     const JQ = {
+       name: FQ,
+       shader: PQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/360.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/360.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/360.js` (Changed code · before: `L4-L6` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdb) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/360.js#L4-L13) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/360.js#L4-L6)

```diff
-   61419: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       particlesPixelShader: () => ep
+   42831: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       return Math.floor(QQ / 8)
+     }
+ 
+     function qQ(QQ) {
+       return 1 << QQ % 8
+     }
+     XQ.d(WQ, {
+       OptimizeIndices: () => zQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/360.js` (Changed code · before: `L8-L34` → after: `L15-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdbR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdb) · [After (L15-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/360.js#L15-L63) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/360.js#L8-L34)

```diff
-     var Op = cp(40062),
-       op = cp(42362),
-       Ip = cp(42365),
-       Sp = cp(42436),
-       xp = cp(42412),
-       Lp = cp(42266),
-       Yp = cp(42174),
-       Dp = cp(42416),
-       Ap = cp(42443),
-       Pp = cp(42449),
-       Wp = cp(42470),
-       yp = cp(42476);
-     const Up = "geometryRenderingFragment",
-       wp = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
-     Op.b.IncludesShadersStore[Up] || (Op.b.IncludesShadersStore[Up] = wp);
-     const vp = {
- ... (11 more removed lines; see GitHub link above)
+     class TQ {
+       constructor(QQ) {
+         this.size = QQ, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
+       }
+       get(QQ) {
+         if (QQ >= this.size) throw new RangeError("Bit index out of range");
+         const WQ = wQ(QQ),
+           XQ = qQ(QQ);
+         return 0 !== (this._byteArray[WQ] & XQ)
+       }
+       set(QQ, WQ) {
+         if (QQ >= this.size) throw new RangeError("Bit index out of range");
+         const XQ = wQ(QQ),
+           TQ = qQ(QQ);
+         WQ ? this._byteArray[XQ] |= TQ : this._byteArray[XQ] &= ~TQ
+       }
+ ... (33 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/361.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/361.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/361.js` (Changed code · before: `L4-L13` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/361.js#L4-L11) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/361.js#L4-L13)

```diff
-   61441: (pp, ip, cp) => {
-     cp.d(ip, {
-       allocateF64Mat4: () => op
-     });
-     var Op = cp(41971);
- 
-     function op() {
-       return new Op.g(16)
-     }
-     op["@@MAT4_STORAGE_F64@@"] = !0
+   61534: (QQ, WQ, XQ) => {
+     var wQ;
+     XQ.r(WQ), XQ.d(WQ, {
+         ShaderLanguage: () => wQ
+       }),
+       function(QQ) {
+         QQ[QQ.GLSL = 0] = "GLSL", QQ[QQ.WGSL = 1] = "WGSL"
+       }(wQ || (wQ = {}))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/362.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/362.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/362.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/362.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/362.js#L4)

```diff
-   61443: (pp, ip, cp) => {
+   61542: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/362.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/362.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/362.js#L6-L9)

```diff
-       applyLightFoOffset: () => Sp,
-       getFloatingOriginOffset: () => op,
-       lightFoVersion: () => Ip,
-       wrapRenderableForFO: () => xp
+       postprocessVertexShader: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/362.js` (Changed code · before: `L11-L57` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/362.js#L8-L14) · [Before (L11-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/362.js#L11-L57)

```diff
-     var Op = cp(41977);
- 
-     function op(pp) {
-       const ip = pp.camera;
-       if (!ip) return {
-         x: 0,
-         y: 0,
-         z: 0
-       };
-       const cp = ip.worldMatrix;
-       return {
-         x: cp[12],
-         y: cp[13],
-         z: cp[14]
-       }
-     }
- ... (31 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     const qQ = "postprocessVertexShader",
+       TQ = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/363.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/363.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171ede)

#### 1. `bundles/preprod.bloxd.io/chunks/js/363.js` (Changed code · before: `L4-L10` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171edeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171ede) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/363.js#L4-L9) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/363.js#L4-L10)

```diff
-   61449: (pp, ip, cp) => {
-     function Op(pp, ip, cp, Op, op, Ip, Sp) {
-       const xp = ip,
-         Lp = Op,
-         Yp = cp;
-       pp[Yp + 0] = xp[Lp + 0], pp[Yp + 1] = xp[Lp + 1], pp[Yp + 2] = xp[Lp + 2], pp[Yp + 3] = xp[Lp + 3], pp[Yp + 4] = xp[Lp + 4], pp[Yp + 5] = xp[Lp + 5], pp[Yp + 6] = xp[Lp + 6], pp[Yp + 7] = xp[Lp + 7], pp[Yp + 8] = xp[Lp + 8], pp[Yp + 9] = xp[Lp + 9], pp[Yp + 10] = xp[Lp + 10 … [truncated]
-     }
+   61556: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       WorldCodeAiOutOfUsage: () => TQ
+     });
+     var wQ = XQ(1507),
+       qQ = XQ(1145);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/363.js` (Changed code · before: `L13-L18` → after: `L12-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171edeR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171ede) · [After (L12-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/363.js#L12-L25) · [Before (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/363.js#L13-L18)

```diff
-       return (ip, cp, op, Ip) => {
-         const Sp = pp.camera;
-         if (!Sp) return void Op(ip, cp, op, Ip, 0, 0, 0);
-         const xp = Sp.worldMatrix;
-         Op(ip, cp, op, Ip, xp[12], xp[13], xp[14])
-       }
+       let {
+         onGetSuperRank: WQ
+       } = QQ;
+       return (0, qQ.jsxs)("div", {
+         className: "WorldCodeAiOutOfUsage",
+         children: [(0, qQ.jsx)("p", {
+           className: "WorldCodeAiOutOfUsageText",
+           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
+         }), (0, qQ.jsx)(wQ.s, {
+           className: "WorldCodeAiOutOfUsageButton",
+           onClick: WQ,
+           children: "Get Super Rank"
+         })]
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/364.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/364.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582)

#### 1. `bundles/preprod.bloxd.io/chunks/js/364.js` (Changed code · before: `L4-L6` → after: `L4-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582) · [After (L4-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/364.js#L4-L34) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/364.js#L4-L6)

```diff
-   61456: (pp, ip, cp) => {
-     function Op(pp) {
-       return pp.features.has("timestamp-query")
+   61580: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       particlesPixelShader: () => UQ
+     });
+     var wQ = XQ(40126),
+       qQ = XQ(42335),
+       TQ = XQ(42341),
+       zQ = XQ(42425),
+       sQ = XQ(42396),
+       FQ = XQ(42237),
+       PQ = XQ(42158),
+       gQ = XQ(42402),
+       JQ = XQ(42433),
+       rQ = XQ(42439),
+       IQ = XQ(42469),
+       jQ = XQ(42473);
+ ... (15 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/365.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/365.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/365.js` (Changed code · before: `L4-L7` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9b) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/365.js#L4-L11) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/365.js#L4-L7)

```diff
-   61462: (pp, ip, cp) => {
-     function Op(pp, ip) {
-       for (const cp of pp._frameGraph._tasks)
-         if (cp?._config && cp._colorAttachment && (cp._config.rt === ip.scRT || cp._config.rst === ip.scRT)) return cp
+   61610: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       allocateF64Mat4: () => qQ
+     });
+     var wQ = XQ(41975);
+ 
+     function qQ() {
+       return new wQ.f(16)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/365.js` (Changed code · before: `L9-L25` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9bR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9b) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/365.js#L13) · [Before (L9-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/365.js#L9-L25)

```diff
- 
-     function op(pp, ip) {
-       const cp = pp._renderingContexts[pp._renderingContexts.length - 1];
-       if (!cp?._frameGraph) return;
-       const op = Op(ip, pp);
-       if (!op) return;
-       if (1 === pp.msaaSamples) return void(op._config.clr = !1);
-       const Ip = op.enabled;
-       op._config.clr = !0, op.enabled = !1, ip._beforeRender.unshift((() => {
-         const ip = Op(cp, pp),
-           Sp = ip?._config.rst === pp.scRT && ip._config.rt._colorView;
-         op.enabled = !!Sp && Ip, op._config.clr = !Sp, Sp && (op._colorAttachment.view = Sp)
-       }))
-     }
-     cp.r(ip), cp.d(ip, {
-       configureSwapchainOverlayScene: () => op
- ... (1 more removed lines; see GitHub link above)
+     qQ["@@MAT4_STORAGE_F64@@"] = !0
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/366.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/366.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/366.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/366.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/366.js#L4-L6)

```diff
-   61466: (pp, ip, cp) => {
-     cp.d(ip, {
-       createShadowTask: () => Ip
+   61618: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       applyLightFoOffset: () => zQ,
+       getFloatingOriginOffset: () => qQ,
+       lightFoVersion: () => TQ,
+       wrapRenderableForFO: () => sQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/366.js` (Changed code · before: `L8` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/366.js#L11) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/366.js#L8)

```diff
-     var Op = null;
+     var wQ = XQ(41977);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/366.js` (Changed code · before: `L11` → after: `L14-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3) · [After (L14-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/366.js#L14-L29) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/366.js#L11)

```diff
-       return Op?.get(pp)
+       const WQ = QQ.camera;
+       if (!WQ) return {
+         x: 0,
+         y: 0,
+         z: 0
+       };
+       const XQ = WQ.worldMatrix;
+       return {
+         x: XQ[12],
+         y: XQ[13],
+         z: XQ[14]
+       }
+     }
+ 
+     function TQ(QQ) {
+       return QQ.camera ? QQ.camera.worldMatrixVersion : 0
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/366.js` (Changed code · before: `L15-L68` → after: `L33-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3) · [After (L33-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/366.js#L33-L46) · [Before (L15-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/366.js#L15-L68)

```diff
-       const cp = new Set;
-       0;
-       const Op = {
-         name: "Ay",
-         engine: pp,
-         pw: ip,
-         _passes: [],
-         async _preload() {
-           const pp = [];
-           for (const cp of ip.lights) {
-             const ip = cp.shadowGenerator,
-               Op = ip ? op(ip) : null;
-             ip?._preloadShadowTask && Op && pp.push(Sp(ip, Op))
-           }
-           await Promise.all(pp)
-         },
- ... (38 more removed lines; see GitHub link above)
+       const XQ = WQ.camera?.worldMatrix;
+       if (!XQ) return;
+       const qQ = XQ[12],
+         TQ = XQ[13],
+         zQ = XQ[14];
+       let sQ = 0;
+       for (const FQ of WQ.lights) {
+         if (sQ >= wQ.c) break;
+         if (!FQ._writeLightUbo) continue;
+         const WQ = 4 + 16 * sQ,
+           XQ = QQ[WQ + 3];
+         if (0 === XQ || 2 === XQ) {
+           const XQ = FQ.worldMatrix;
+           QQ[WQ] = XQ[12] - qQ, QQ[WQ + 1] = XQ[13] - TQ, QQ[WQ + 2] = XQ[14] - zQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/366.js` (Changed code · before: `L70-L71` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/366.js#L48-L49) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/366.js#L70-L71)

```diff
-       };
-       return Op
+         sQ++
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/366.js` (Changed code · before: `L73-L74` → after: `L51-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3) · [After (L51-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/366.js#L51-L57) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/366.js#L73-L74)

```diff
-     async function Sp(pp, ip) {
-       pp._preloadPending = ip, await (pp._preloadShadowTask?.(ip)), pp._preloadPending === ip && (pp._preloadPending = void 0)
+ 
+     function sQ(QQ, WQ, XQ) {
+       let wQ = -1;
+       return () => {
+         const qQ = WQ.camera ? WQ.camera.worldMatrixVersion : -1;
+         qQ !== wQ && (XQ(), wQ = qQ), QQ()
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/367.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/367.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/367.js` (Changed code · before: `L4-L68` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/367.js#L4-L9) · [Before (L4-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/367.js#L4-L68)

```diff
-   61471: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       A: () => Yp,
-       B: () => Ap,
-       C: () => Dp,
-       X: () => Pp
-     });
-     var Op = cp(41959),
-       op = (pp, ip) => pp.order - ip.order;
- 
-     function Ip(pp, ip, cp) {
-       pp.pendingDisposers.set(ip, cp)
-     }
- 
-     function Sp(pp, ip, cp) {
-       cp && pp.pendingDisposers.get(ip) === cp && pp.pendingDisposers.delete(ip)
- ... (49 more removed lines; see GitHub link above)
+   61627: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
+       const sQ = WQ,
+         FQ = wQ,
+         PQ = XQ;
+       QQ[PQ + 0] = sQ[FQ + 0], QQ[PQ + 1] = sQ[FQ + 1], QQ[PQ + 2] = sQ[FQ + 2], QQ[PQ + 3] = sQ[FQ + 3], QQ[PQ + 4] = sQ[FQ + 4], QQ[PQ + 5] = sQ[FQ + 5], QQ[PQ + 6] = sQ[FQ + 6], QQ[PQ + 7] = sQ[FQ + 7], QQ[PQ + 8] = sQ[FQ + 8], QQ[PQ + 9] = sQ[FQ + 9], QQ[PQ + 10] = sQ[FQ + 10 … [truncated]
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/367.js` (Changed code · before: `L72-L257` → after: `L13-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0) · [After (L13-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/367.js#L13-L17) · [Before (L72-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/367.js#L72-L257)

```diff
-       const ip = {
-           Ry: !1,
-           error: null,
-           active: new Set,
-           chains: new WeakMap,
-           generations: new WeakMap,
-           installed: new WeakMap,
-           installedMeshes: new Set,
-           pendingDisposers: new WeakMap,
-           tail: null
-         },
-         cp = pp,
-         Yp = {
-           queue: (cp, Dp) => {
-             const Ap = (ip.generations.get(Dp) ?? 0) + 1,
-               Pp = Dp.material;
- ... (170 more removed lines; see GitHub link above)
+       return (WQ, XQ, qQ, TQ) => {
+         const zQ = QQ.camera;
+         if (!zQ) return void wQ(WQ, XQ, qQ, TQ, 0, 0, 0);
+         const sQ = zQ.worldMatrix;
+         wQ(WQ, XQ, qQ, TQ, sQ[12], sQ[13], sQ[14])
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/367.js` (Changed code · before: `L260-L289` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/367.js#L20-L23) · [Before (L260-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/367.js#L260-L289)

```diff
- 
-     function Up(pp, ip, cp) {
-       yp(pp, ip, cp)
-     }
- 
-     function wp(pp, ip, cp, Op, op, Ip) {
-       return !ip.Ry && ip.generations.get(Op) === Ip && pp.meshes.includes(Op) && Op.material === op && op._buildGroup === cp
-     }
- 
-     function vp(pp, ip, cp, op) {
-       const Ip = pp._meshDisposables.get(cp);
-       if (Ip && Ip !== op) {
-         pp._meshDisposables.delete(cp);
-         for (const pp of Ip) pp()
-       }
-       if (op)
- ... (14 more removed lines; see GitHub link above)
+     XQ.r(WQ), XQ.d(WQ, {
+       makePackMeshWorld: () => qQ,
+       packMat4IntoF32WithOffset: () => wQ
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/368.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/368.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/368.js` (Changed code · before: `L4` → after: `L4-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3) · [After (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/368.js#L4-L76) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/368.js#L4)

```diff
-   61499: (pp, ip, cp) => {
+   61631: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       return QQ.features.has("timestamp-query")
+     }
+ 
+     function qQ(QQ) {
+       return wQ(QQ) ? {
+         device: QQ,
+         markerPipeline: QQ.createComputePipeline({
+           layout: "auto",
+           compute: {
+             module: QQ.createShaderModule({
+               code: "@compute @workgroup_size(1) fn main() {}"
+             }),
+             entryPoint: "main"
+           }
+ ... (57 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/368.js` (Changed code · before: `L6-L15` → after: `L78-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3) · [After (L78-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/368.js#L78-L84) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/368.js#L6-L15)

```diff
-       postprocessVertexShaderWGSL: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "postprocessVertexShader",
-       Ip = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
-     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
+       createGpuFrameTimer: () => qQ,
+       destroyGpuFrameTimer: () => FQ,
+       gpuFrameTimerBegin: () => TQ,
+       gpuFrameTimerEnd: () => zQ,
+       gpuFrameTimerResolve: () => sQ,
+       gpuTimingSupportedFor: () => wQ
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/369.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/369.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/369.js` (Changed code · before: `L4` → after: `L4-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9) · [After (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/369.js#L4-L22) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/369.js#L4)

```diff
-   61516: (pp, ip, cp) => {
+   61633: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ) {
+       for (const XQ of QQ._frameGraph._tasks)
+         if (XQ?._config && XQ._colorAttachment && (XQ._config.rt === WQ.scRT || XQ._config.rst === WQ.scRT)) return XQ
+     }
+ 
+     function qQ(QQ, WQ) {
+       const XQ = QQ._renderingContexts[QQ._renderingContexts.length - 1];
+       if (!XQ?._frameGraph) return;
+       const qQ = wQ(WQ, QQ);
+       if (!qQ) return;
+       if (1 === QQ.msaaSamples) return void(qQ._config.clr = !1);
+       const TQ = qQ.enabled;
+       qQ._config.clr = !0, qQ.enabled = !1, WQ._beforeRender.unshift((() => {
+         const WQ = wQ(XQ, QQ),
+           zQ = WQ?._config.rst === QQ.scRT && WQ._config.rt._colorView;
+ ... (3 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/369.js` (Changed code · before: `L6-L15` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/369.js#L24-L25) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/369.js#L6-L15)

```diff
-       lod3DPixelShader: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "lod3DPixelShader",
-       Ip = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
-     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
+       configureSwapchainOverlayScene: () => qQ
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/370.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/370.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87)

#### 1. `bundles/preprod.bloxd.io/chunks/js/370.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/370.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/370.js#L4-L6)

```diff
-   61519: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       lodCubePixelShader: () => Sp
+   61636: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       createShadowTask: () => TQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/370.js` (Changed code · before: `L8-L14` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/370.js#L8-L74) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/370.js#L8-L14)

```diff
-     var Op = cp(40062);
-     const op = "lodCubePixelShader",
-       Ip = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
-     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
+     var wQ = null;
+ 
+     function qQ(QQ) {
+       return wQ?.get(QQ)
+     }
+ 
+     function TQ(QQ, WQ) {
+       const XQ = new Set;
+       0;
+       const wQ = {
+         name: "YI",
+         engine: QQ,
+         cB: WQ,
+         _passes: [],
+         async _preload() {
+           const QQ = [];
+ ... (51 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/371.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/371.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/371.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/371.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/371.js#L4)

```diff
-   61525: (pp, ip, cp) => {
+   61644: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/371.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/371.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/371.js#L6)

```diff
-       lodPixelShader: () => Sp
+       A: () => PQ,
+       B: () => JQ,
+       C: () => gQ,
+       X: () => rQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/371.js` (Changed code · before: `L8-L14` → after: `L11-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3fR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f) · [After (L11-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/371.js#L11-L288) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/371.js#L8-L14)

```diff
-     var Op = cp(40062);
-     const op = "lodPixelShader",
-       Ip = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
-     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
+     var wQ = XQ(41963),
+       qQ = (QQ, WQ) => QQ.order - WQ.order;
+ 
+     function TQ(QQ, WQ, XQ) {
+       QQ.pendingDisposers.set(WQ, XQ)
+     }
+ 
+     function zQ(QQ, WQ, XQ) {
+       XQ && QQ.pendingDisposers.get(WQ) === XQ && QQ.pendingDisposers.delete(WQ)
+     }
+     var sQ = null,
+       FQ = null;
+ 
+     function PQ(QQ, WQ, XQ, wQ) {
+       if (!WQ || XQ.material !== WQ) return wQ ?? Promise.resolve();
+       const qQ = JQ(QQ, WQ._buildGroup, XQ);
+ ... (262 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/372.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/372.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659)

#### 1. `bundles/preprod.bloxd.io/chunks/js/372.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/372.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/372.js#L4)

```diff
-   61532: (pp, ip, cp) => {
+   61666: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/372.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/372.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/372.js#L6)

```diff
-       lod3DPixelShaderWGSL: () => Sp
+       postprocessVertexShaderWGSL: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/372.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/372.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/372.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "lod3DPixelShader",
-       Ip = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "postprocessVertexShader",
+       TQ = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/373.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/373.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35)

#### 1. `bundles/preprod.bloxd.io/chunks/js/373.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/373.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/373.js#L4)

```diff
-   61535: (pp, ip, cp) => {
+   61680: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/373.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/373.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/373.js#L6)

```diff
-       lodCubePixelShaderWGSL: () => Sp
+       lod3DPixelShader: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/373.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/373.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/373.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "lodCubePixelShader",
-       Ip = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
-     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "lod3DPixelShader",
+       TQ = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
+     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/374.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/374.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936)

#### 1. `bundles/preprod.bloxd.io/chunks/js/374.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/374.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/374.js#L4)

```diff
-   61544: (pp, ip, cp) => {
+   61689: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/374.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/374.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/374.js#L6)

```diff
-       lodPixelShaderWGSL: () => Sp
+       lodCubePixelShader: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/374.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/374.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/374.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "lodPixelShader",
-       Ip = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
-     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "lodCubePixelShader",
+       TQ = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
+     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/375.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/375.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/375.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/375.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/375.js#L4)

```diff
-   61552: (pp, ip, cp) => {
+   61698: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/375.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/375.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/375.js#L6)

```diff
-       passPixelShaderWGSL: () => Sp
+       lodPixelShader: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/375.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/375.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/375.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "passPixelShader",
-       Ip = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
-     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "lodPixelShader",
+       TQ = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
+     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/376.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/376.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/376.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/376.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/376.js#L4)

```diff
-   61559: (pp, ip, cp) => {
+   61705: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/376.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/376.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/376.js#L6)

```diff
-       passPixelShader: () => Sp
+       lod3DPixelShaderWGSL: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/376.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/376.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/376.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "passPixelShader",
-       Ip = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
-     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "lod3DPixelShader",
+       TQ = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
+     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/377.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/377.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/377.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/377.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/377.js#L4)

```diff
-   61565: (pp, ip, cp) => {
+   61707: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/377.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/377.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/377.js#L6)

```diff
-       passCubePixelShaderWGSL: () => Sp
+       lodCubePixelShaderWGSL: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/377.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/377.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/377.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "passCubePixelShader",
-       Ip = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "lodCubePixelShader",
+       TQ = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/378.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/378.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/378.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/378.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/378.js#L4)

```diff
-   61570: (pp, ip, cp) => {
+   61710: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/378.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/378.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/378.js#L6)

```diff
-       passCubePixelShader: () => Sp
+       lodPixelShaderWGSL: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/378.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/378.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/378.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "passCubePixelShader",
-       Ip = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
-     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "lodPixelShader",
+       TQ = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
+     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/379.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/379.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21)

#### 1. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/379.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/379.js#L4)

```diff
-   61601: (pp, ip, cp) => {
+   61713: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/379.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/379.js#L6)

```diff
-       fxaaPixelShaderWGSL: () => Sp
+       passPixelShaderWGSL: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/379.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/379.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "fxaaPixelShader",
-       Ip = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "passPixelShader",
+       TQ = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/380.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/380.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/380.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/380.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/380.js#L4)

```diff
-   61604: (pp, ip, cp) => {
+   61717: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/380.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfd) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/380.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/380.js#L6)

```diff
-       fxaaVertexShaderWGSL: () => Sp
+       passPixelShader: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/380.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfd) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/380.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/380.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "fxaaVertexShader",
-       Ip = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
-     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "passPixelShader",
+       TQ = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
+     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/381.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/381.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/381.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/381.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/381.js#L4)

```diff
-   61612: (pp, ip, cp) => {
+   61726: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/381.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/381.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/381.js#L6)

```diff
-       fxaaPixelShader: () => Sp
+       passCubePixelShaderWGSL: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/381.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/381.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/381.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "fxaaPixelShader",
-       Ip = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
-     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "passCubePixelShader",
+       TQ = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
+     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/382.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/382.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/382.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/382.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/382.js#L4)

```diff
-   61618: (pp, ip, cp) => {
+   61733: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/382.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/382.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/382.js#L6)

```diff
-       fxaaVertexShader: () => Sp
+       passCubePixelShader: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/382.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/382.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/382.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "fxaaVertexShader",
-       Ip = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "passCubePixelShader",
+       TQ = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/383.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/383.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08)

#### 1. `bundles/preprod.bloxd.io/chunks/js/383.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/383.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/383.js#L4-L18)

```diff
-   61627: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Sp
-     });
-     var Op = cp(40062);
-     cp(42157), cp(42159);
-     const op = "pbrUboDeclaration",
-       Ip = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   61644: (pp, ip, cp) => {
+   61776: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/383.js` (Changed code · before: `L20` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/383.js#L6) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/383.js#L20)

```diff
-       pbrPixelShader: () => mc
+       fxaaPixelShaderWGSL: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/383.js` (Changed code · before: `L22-L242` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/383.js#L8-L11) · [Before (L22-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/383.js#L22-L242)

```diff
-     var Op = cp(40062),
-       op = cp(42362),
-       Ip = cp(42365),
-       Sp = cp(42369),
-       xp = cp(42359);
-     const Lp = "pbrFragmentDeclaration",
-       Yp = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
-     Op.b.IncludesShadersStore[Lp] || (Op.b.IncludesShadersStore[Lp] = Yp);
-     const Dp = {
-       name: Lp,
-       shader: Yp
-     };
-     var Ap = cp(42157),
-       Pp = cp(42159),
-       Wp = cp(61627),
-       yp = cp(42206),
- ... (205 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     const qQ = "fxaaPixelShader",
+       TQ = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
+     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/384.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/384.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/384.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/384.js#L4-L6)

```diff
-   61640: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
+   61784: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       fxaaVertexShaderWGSL: () => zQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L8-L195` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/384.js#L8-L11) · [Before (L8-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/384.js#L8-L195)

```diff
-     var Op = cp(40062);
-     const op = "harmonicsFunctions",
-       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   61698: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "hdrFilteringFunctions",
-       Ip = "#if NUM_SAMPLES\n#if NUM_SAMPLES>0\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\nprecision highp int;float radicalInverse_VdC(uint bits)\n{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x3333333 … [truncated]
- ... (172 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     const qQ = "fxaaVertexShader",
+       TQ = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
+     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/385.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/385.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/385.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/385.js#L4-L6)

```diff
-   61640: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
+   61788: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       fxaaPixelShader: () => zQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L8-L112` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/385.js#L8-L10) · [Before (L8-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/385.js#L8-L112)

```diff
-     var Op = cp(40062);
-     const op = "harmonicsFunctions",
-       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   61834: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     cp(42157), cp(42159);
-     const op = "openpbrUboDeclaration",
- ... (89 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     const qQ = "fxaaPixelShader",
+       TQ = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/386.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/386.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/386.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/386.js#L4-L18)

```diff
-   61741: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
-     });
-     var Op = cp(40062);
-     cp(42496), cp(42498);
-     const op = "pbrUboDeclaration",
-       Ip = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   61756: (pp, ip, cp) => {
+   61792: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L20` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/386.js#L6) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/386.js#L20)

```diff
-       pbrPixelShaderWGSL: () => vc
+       fxaaVertexShader: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L22-L222` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/386.js#L8-L11) · [Before (L22-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/386.js#L22-L222)

```diff
-     var Op = cp(40062),
-       op = cp(42711),
-       Ip = cp(42714),
-       Sp = cp(42718),
-       xp = cp(42496),
-       Lp = cp(42498),
-       Yp = cp(61741),
-       Dp = cp(42542),
-       Ap = cp(61762),
-       Pp = cp(42721),
-       Wp = cp(42742);
-     const yp = "samplerFragmentAlternateDeclaration",
-       Up = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     Op.b.IncludesShadersStoreWGSL[yp] || (Op.b.IncludesShadersStoreWGSL[yp] = Up);
-     const wp = {
-       name: yp,
- ... (185 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     const qQ = "fxaaVertexShader",
+       TQ = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
+     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/387.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/387.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bbed0cd75350073ed4cc8d514e3fc003c0ebee9e0ea9d5156357fdcb6a698358)

#### 1. `bundles/preprod.bloxd.io/chunks/js/387.js` (Changed code · before: `L86-L184` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bbed0cd75350073ed4cc8d514e3fc003c0ebee9e0ea9d5156357fdcb6a698358R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bbed0cd75350073ed4cc8d514e3fc003c0ebee9e0ea9d5156357fdcb6a698358) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/387.js#L8-L12) · [Before (L86-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/387.js#L86-L184)

```diff
-     var Op = cp(40062);
-     cp(61802);
-     const op = "pbrClusteredLightingFunctions",
-       Ip = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nlightData: vec4f,\nsliceRange: vec2u,\nV: vec3f,\nN: vec3f,\nposW: vec3f,\nsurfaceAlbedo: vec3f,\nreflectivityOut: refle … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   61824: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "pbrDebug",
- ... (83 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     XQ(42137), XQ(42143);
+     const qQ = "pbrUboDeclaration",
+       TQ = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/387.js` (Changed code · before: `L190-L210` → after: `L18-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bbed0cd75350073ed4cc8d514e3fc003c0ebee9e0ea9d5156357fdcb6a698358R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bbed0cd75350073ed4cc8d514e3fc003c0ebee9e0ea9d5156357fdcb6a698358) · [After (L18-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/387.js#L18-L242) · [Before (L190-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/387.js#L190-L210)

```diff
-   61818: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "pbrIBLFunctions",
-       Ip = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfn getLodFromAlphaG(cubeMapDimensionPixels: f32,microsurfaceAverageSlope: f32)->f32 {var microsurfaceAverageSlopeTexels: f32=cubeMapDimensionPixels*microsurfaceAverageSlope;var lod: f32=log2(microsurfaceAverageSlopeTe … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   61771: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
- ... (5 more removed lines; see GitHub link above)
+   61823: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       pbrPixelShader: () => bX
+     });
+     var wQ = XQ(40126),
+       qQ = XQ(42335),
+       TQ = XQ(42341),
+       zQ = XQ(42349),
+       sQ = XQ(42328);
+     const FQ = "pbrFragmentDeclaration",
+       PQ = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
+     wQ.b.IncludesShadersStore[FQ] || (wQ.b.IncludesShadersStore[FQ] = PQ);
+     const gQ = {
+       name: FQ,
+       shader: PQ
+     };
+ ... (209 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/388.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/388.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/388.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/388.js#L4)

```diff
-   61754: (pp, ip, cp) => {
+   61816: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/388.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/388.js#L6)

```diff
-       b: () => Sp
+       c: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/388.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/388.js#L8)

```diff
-     var Op = cp(40062);
+     var wQ = XQ(40126);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L10-L11` → after: `L10-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L10-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/388.js#L10-L37) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/388.js#L10-L11)

```diff
-       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+       TQ = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   61865: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "hdrFilteringFunctions",
+       TQ = "#if NUM_SAMPLES\n#if NUM_SAMPLES>0\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\nprecision highp int;float radicalInverse_VdC(uint bits)\n{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x3333333 … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L17` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/388.js#L43) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/388.js#L17)

```diff
-   61875: (pp, ip, cp) => {
+   61807: (QQ, WQ, XQ) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L21-L25` → after: `L47-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L47-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/388.js#L47-L76) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/388.js#L21-L25)

```diff
-     var Op = cp(40062);
-     cp(42496), cp(42498);
-     const op = "openpbrUboDeclaration",
-       Ip = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
-     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126);
+     const qQ = "pbrBRDFFunctions",
+       TQ = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   61885: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "pbrBlockImageProcessing",
+       TQ = "#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)\n#if !defined(SKIPFINALCOLORCLAMP)\nfinalColor.rgb=clamp(finalColor.rgb,0.,30.0);\n#endif\n#else\nfinalColor=applyImageProcessing(finalColor);\n#endif\nfinalColor.a*=visibility;\n#ifdef PREMULTIPLYALPHA … [truncated]
+ ... (14 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L31-L33` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/388.js#L82-L84) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/388.js#L31-L33)

```diff
-   61871: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       openpbrVertexShaderWGSL: () => zp
+   61888: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
```
