# Changed — Bundle Modifications Report (Part 027 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `27 / 86` (**322** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 026](part-026.md) · [Part 028 →](part-028.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/639.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/639.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9)

#### 9. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L67-L97` → after: `L77-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L77-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/639.js#L77-L87) · [Before (L67-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/639.js#L67-L97)

```diff
-     }
-   },
-   45213: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "logDepthVertex",
-       QB = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   63930: (BB, OB, GB) => {
- ... (15 more removed lines; see GitHub link above)
+     };
+     var qW = OW(54368),
+       RW = OW(54372),
+       GW = OW(54377),
+       IW = OW(54380),
+       aW = OW(54388);
+     const rW = "defaultPixelShader",
+       zW = "#define CUSTOM_FRAGMENT_EXTENSION\n#include<__decl__defaultFragment>\n#if defined(BUMP) || !defined(NORMAL)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN … [truncated]
+     mW.c.ShadersStore[rW] || (mW.c.ShadersStore[rW] = zW);
+     const FW = [EW.b, LW, cW.c, wW.d, tW.c, ZW.b, xW.c, lW.c, AW.d, bW.b, jW.d, UW.b, kW.c, sW.d, SW, YW.e, yW.d, hW, HW.c, nW.c, uW.e, oW.b, dW.d, eW.b, vW.b, gW.b, DW.c, VW.b, pW.b, fW.c, BW, qW.d, RW.e, GW.e, IW.d, aW.e];
+     for (const Wi of FW) mW.c.IncludesShadersStore[Wi.name] || (mW.c.IncludesShadersStore[Wi.name] = Wi.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/640.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/640.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L4)

```diff
-   45326: (BB, OB, GB) => {
+   54352: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L6)

```diff
-       c: () => oB
+       b: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "bumpFragment",
-       QB = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "clipPlaneFragment",
+       NW = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L17)

```diff
-   45301: (BB, OB, GB) => {
+   54343: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L19)

```diff
-       d: () => oB
+       b: () => PW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L21-L25)

```diff
-     var YB = GB(40864);
-     GB(45266);
-     const DB = "bumpFragmentFunctions",
-       QB = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "clipPlaneFragmentDeclaration",
+       NW = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L31)

```diff
-   45298: (BB, OB, GB) => {
+   54380: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L33)

```diff
-       b: () => oB
+       d: () => PW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L35-L38)

```diff
-     var YB = GB(40864);
-     const DB = "bumpFragmentMainFunctions",
-       QB = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "fogFragment",
+       NW = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L44)

```diff
-   45259: (BB, OB, GB) => {
+   54347: (WW, iW, OW) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L46)

```diff
-       b: () => oB
+       c: () => PW
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L48-L51)

```diff
-     var YB = GB(40864);
-     const DB = "clusteredLightingFunctions",
-       QB = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "fogFragmentDeclaration",
+       NW = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L57)

```diff
-   45329: (BB, OB, GB) => {
+   54093: (WW, iW, OW) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L61-L64` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L60-L63) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L61-L64)

```diff
-     var YB = GB(40864);
-     const DB = "decalFragment",
-       QB = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L70` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L69) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L70)

```diff
-   45346: (BB, OB, GB) => {
+   54308: (WW, iW, OW) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L74-L77` → after: `L73-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L73-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/640.js#L73-L142) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/640.js#L74-L77)

```diff
-     var YB = GB(40864);
-     const DB = "lightFragment",
-       QB = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "imageProcessingDeclaration",
+       NW = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54314: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "imageProcessingFunctions",
+       NW = "#if defined(COLORGRADING) && !defined(COLORGRADING3D)\n/** \n* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.\n* sampler3dSetting.x=textureOffset (0.5/textureSize).\n* sampler3dSetting.y=textureSize.\n*/\n#define inline\nvec3 sampleTexture3D(sampler2D c … [truncated]
+ ... (54 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/641.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/641.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L4)

```diff
-   45323: (BB, OB, GB) => {
+   54352: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L6)

```diff
-       c: () => oB
+       b: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L8)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L11)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L17)

```diff
-   45308: (BB, OB, GB) => {
+   54343: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L19)

```diff
-       d: () => oB
+       b: () => PW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L21)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L24)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L30)

```diff
-   45360: (BB, OB, GB) => {
+   54380: (WW, iW, OW) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L34)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L37)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L43)

```diff
-   45317: (BB, OB, GB) => {
+   54347: (WW, iW, OW) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L47)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L50)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L56` → after: `L56-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L56-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L56-L95) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L56)

```diff
-   45721: (BB, OB, GB) => {
+   54093: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54166: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+ ... (24 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L58` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L97) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L58)

```diff
-       colorPixelShader: () => PB
+       skyPixelShader: () => UW
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/641.js` (Changed code · before: `L60-L69` → after: `L99-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ceR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0e8903f802926a9728bbf789a2704242eb40b7db57af98ff09cc1d5afc2316ce) · [After (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/641.js#L99-L118) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/641.js#L60-L69)

```diff
-     var YB = GB(40864),
-       DB = GB(45308),
-       QB = GB(45317),
-       oB = GB(45323),
-       jB = GB(45360);
-     const yB = "colorPixelShader",
-       JB = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
-     YB.b.ShadersStore[yB] || (YB.b.ShadersStore[yB] = JB);
-     const MB = [DB.d, QB.c, oB.c, jB.d];
-     for (const zB of MB) YB.b.IncludesShadersStore[zB.name] || (YB.b.IncludesShadersStore[zB.name] = zB.shader);
+     var mW = OW(41392),
+       EW = OW(54343),
+       NW = OW(54166),
+       PW = OW(54347),
+       LW = OW(54093),
+       cW = OW(54352),
+       wW = OW(54377),
+       tW = OW(54380);
+     const ZW = "imageProcessingCompatibility",
+       xW = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
+     mW.c.IncludesShadersStore[ZW] || (mW.c.IncludesShadersStore[ZW] = xW);
+     const lW = {
+         name: ZW,
+         shader: xW
+       },
+       AW = "skyPixelShader",
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/642.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/642.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/642.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/642.js#L4)

```diff
-   45533: (BB, OB, GB) => {
+   54093: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/642.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/642.js#L6)

```diff
-       e: () => oB
+       b: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/642.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/642.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "bumpVertex",
-       QB = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/642.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/642.js#L17-L19)

```diff
-   45433: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
+   64523: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       rgbdDecodePixelShader: () => cW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/642.js` (Changed code · before: `L21-L120` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b8d517a9cca2bd0c50cd6b6cf50c94cb5d431a65571aba6a34cc8f90d109604d) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/642.js#L21-L27) · [Before (L21-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/642.js#L21-L120)

```diff
-     var YB = GB(40864);
-     const DB = "bumpVertexDeclaration",
-       QB = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45384: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     GB(45374), GB(45378);
-     const DB = "defaultUboDeclaration",
- ... (84 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54093);
+     const NW = "rgbdDecodePixelShader",
+       PW = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
+     mW.c.ShadersStore[NW] || (mW.c.ShadersStore[NW] = PW);
+     const LW = [EW.b];
+     for (const wW of LW) mW.c.IncludesShadersStore[wW.name] || (mW.c.IncludesShadersStore[wW.name] = wW.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/643.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/643.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/643.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/643.js#L4)

```diff
-   45408: (BB, OB, GB) => {
+   54093: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/643.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/643.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "instancesDeclaration",
-       QB = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/643.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/643.js#L17-L19)

```diff
-   45492: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
+   64537: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       rgbdEncodePixelShader: () => cW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/643.js` (Changed code · before: `L21-L69` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d737fca56af6b5928026f2288fefa40f57998248ce270676916482412cd985f2) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/643.js#L21-L27) · [Before (L21-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/643.js#L21-L69)

```diff
-     var YB = GB(40864);
-     const DB = "instancesVertex",
-       QB = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45378: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "meshUboDeclaration",
-       QB = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
- ... (33 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54093);
+     const NW = "rgbdEncodePixelShader",
+       PW = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
+     mW.c.ShadersStore[NW] || (mW.c.ShadersStore[NW] = PW);
+     const LW = [EW.b];
+     for (const wW of LW) mW.c.IncludesShadersStore[wW.name] || (mW.c.IncludesShadersStore[wW.name] = wW.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/644.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/644.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69)

#### 1. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L4)

```diff
-   45384: (BB, OB, GB) => {
+   54199: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L6)

```diff
-       d: () => oB
+       c: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L8-L12)

```diff
-     var YB = GB(40864);
-     GB(45374), GB(45378);
-     const DB = "defaultUboDeclaration",
-       QB = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "bakedVertexAnimation",
+       NW = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L18` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L17) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L18)

```diff
-   45391: (BB, OB, GB) => {
+   54099: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L20` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L19) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L20)

```diff
-       d: () => oB
+       e: () => PW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L22-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L21-L24) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L22-L25)

```diff
-     var YB = GB(40864);
-     const DB = "helperFunctions",
-       QB = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "bakedVertexAnimationDeclaration",
+       NW = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L31)

```diff
-   45374: (BB, OB, GB) => {
+   54096: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L33)

```diff
-       d: () => oB
+       c: () => PW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L35-L38)

```diff
-     var YB = GB(40864);
-     const DB = "sceneUboDeclaration",
-       QB = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "bonesDeclaration",
+       NW = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L44-L46` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L43-L45) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L44-L46)

```diff
-   45565: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       defaultPixelShaderWGSL: () => xB
+   54190: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L48-L69` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L47-L50) · [Before (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L48-L69)

```diff
-     var YB = GB(40864),
-       DB = GB(45374),
-       QB = GB(45378),
-       oB = GB(45384),
-       jB = GB(45572),
-       yB = GB(45575),
-       JB = GB(45581),
-       MB = GB(45421),
-       PB = GB(45391),
-       zB = GB(45583),
-       lB = GB(45585),
-       pB = GB(45593);
-     const qB = "clusteredLightingCompute",
-       ZB = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
-     YB.b.IncludesShadersStoreWGSL[qB] || (YB.b.IncludesShadersStoreWGSL[qB] = ZB);
-     const NB = {
- ... (6 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "bonesVertex",
+       NW = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L73-L78` → after: `L54-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L54-L63) · [Before (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L73-L78)

```diff
-     };
-     var VB = GB(45597),
-       SB = GB(45606);
-     const nB = "fresnelFunction",
-       UB = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
-     YB.b.IncludesShadersStoreWGSL[nB] || (YB.b.IncludesShadersStoreWGSL[nB] = UB);
+     }
+   },
+   54222: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneVertex",
+       NW = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L82-L97` → after: `L67-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L67-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L67-L76) · [Before (L82-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L82-L97)

```diff
-     };
-     var kB = GB(45613),
-       dB = GB(45617),
-       KB = GB(45624),
-       uB = GB(45630),
-       mB = GB(45633),
-       IB = GB(45642),
-       FB = GB(45644),
-       iB = GB(45465),
-       LB = GB(45647),
-       gB = GB(45656),
-       rB = GB(45658),
-       XB = GB(45666);
-     const wB = "defaultFragmentAlpha",
-       EB = "#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpa … [truncated]
-     YB.b.IncludesShadersStoreWGSL[wB] || (YB.b.IncludesShadersStoreWGSL[wB] = EB);
+     }
+   },
+   54132: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneVertexDeclaration",
+       NW = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/644.js` (Changed code · before: `L101-L112` → after: `L80-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-29d47d5e65d1e0751d356523951a1fa47035f268c9daccb37c30c360b2e79e69) · [After (L80-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/644.js#L80-L167) · [Before (L101-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/644.js#L101-L112)

```diff
-     };
-     var hB = GB(45672),
-       aB = GB(45676),
-       eB = GB(45679),
-       TB = GB(45685),
-       bB = GB(45689),
-       CB = GB(45698);
-     const HB = "defaultPixelShader",
-       vB = "#include<defaultUboDeclaration>\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && … [truncated]
-     YB.b.ShadersStoreWGSL[HB] || (YB.b.ShadersStoreWGSL[HB] = vB);
-     const sB = [DB.d, QB.c, oB.d, jB.c, yB.d, JB.c, MB.b, PB.d, zB.b, lB.c, pB.c, NB, AB, VB.b, SB.d, fB, kB.e, dB.e, KB.e, uB.e, mB.b, IB.d, FB.d, iB.e, LB.e, gB.d, rB.b, XB.d, cB, hB.e, aB.c, eB.e, TB.e, bB.d, CB.e];
-     for (const tB of sB) YB.b.IncludesShadersStoreWGSL[tB.name] || (YB.b.IncludesShadersStoreWGSL[tB.name] = tB.shader);
+     }
+   },
+   54229: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "fogVertex",
+       NW = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54138: (WW, iW, OW) => {
+ ... (72 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/645.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/645.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85)

#### 1. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/645.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/645.js#L4)

```diff
-   45391: (BB, OB, GB) => {
+   54102: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/645.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/645.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "helperFunctions",
-       QB = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "instancesDeclaration",
+       NW = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/645.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/645.js#L17)

```diff
-   64216: (BB, OB, GB) => {
+   54181: (WW, iW, OW) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/645.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/645.js#L19)

```diff
-       c: () => oB
+       b: () => PW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/645.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/645.js#L21-L24)

```diff
-     var YB = GB(40864);
-     const DB = "pbrBRDFFunctions",
-       QB = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "instancesVertex",
+       NW = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L30-L32` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/645.js#L30-L32) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/645.js#L30-L32)

```diff
-   45374: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
+   65053: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       greasedLineVertexShader: () => wW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/645.js` (Changed code · before: `L34-L37` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e9efd8a4ad680d88cd23533baf4b08f7ca3586b3c3dc9508b88220fa1a70be85) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/645.js#L34-L41) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/645.js#L34-L37)

```diff
-     var YB = GB(40864);
-     const DB = "sceneUboDeclaration",
-       QB = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392),
+       EW = OW(54102),
+       NW = OW(54181);
+     const PW = "greasedLineVertexShader",
+       LW = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
+     mW.c.ShadersStore[PW] || (mW.c.ShadersStore[PW] = LW);
+     const cW = [EW.d, NW.b];
+     for (const tW of cW) mW.c.IncludesShadersStore[tW.name] || (mW.c.IncludesShadersStore[tW.name] = tW.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/646.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/646.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L4-L17` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L4) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L4-L17)

```diff
-   45506: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "bakedVertexAnimation",
-       QB = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45404: (BB, OB, GB) => {
+   54217: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L21-L60` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L8) · [Before (L21-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L21-L60)

```diff
-     var YB = GB(40864);
-     const DB = "bakedVertexAnimationDeclaration",
-       QB = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45397: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "bonesDeclaration",
-       QB = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
- ... (24 more removed lines; see GitHub link above)
+     var mW = OW(41392);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L62-L76` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L10-L11) · [Before (L62-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L62-L76)

```diff
-       QB = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45542: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "clipPlaneVertex",
-       QB = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L82` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L17) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L82)

```diff
-   45438: (BB, OB, GB) => {
+   54126: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L84` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L19) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L84)

```diff
-       b: () => oB
+       e: () => PW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L86-L89` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L21-L24) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L86-L89)

```diff
-     var YB = GB(40864);
-     const DB = "clipPlaneVertexDeclaration",
-       QB = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "bumpVertexDeclaration",
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L95` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L30) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L95)

```diff
-   64218: (BB, OB, GB) => {
+   64684: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L99` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L34) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L99)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L101-L102` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L36-L37) · [Before (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L101-L102)

```diff
-       QB = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+       NW = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L108-L134` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L43) · [Before (L108-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L108-L134)

```diff
-   45408: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "instancesDeclaration",
-       QB = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45492: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
- ... (11 more removed lines; see GitHub link above)
+   64680: (WW, iW, OW) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L138-L141` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L47-L50) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L138-L141)

```diff
-     var YB = GB(40864);
-     const DB = "morphTargetsVertex",
-       QB = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}\n#ifdef USE_VERTEX_PULLING\nvertexID=f32(vpVertexIndex)*uniforms.morphTargetTextureInfo.x;\n#else\nvertexID=f32 … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "pbrBRDFFunctions",
+       NW = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L147` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L56) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L147)

```diff
-   45463: (BB, OB, GB) => {
+   64673: (WW, iW, OW) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L151-L154` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L60-L64) · [Before (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L151-L154)

```diff
-     var YB = GB(40864);
-     const DB = "morphTargetsVertexDeclaration",
-       QB = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute position{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute normal{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute tangent{X} : vec3<f32>;\n#endif\n# … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     OW(54061), OW(54070);
+     const EW = "pbrUboDeclaration",
+       NW = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L160-L199` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L70) · [Before (L160-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L160-L199)

```diff
-   45483: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "morphTargetsVertexGlobal",
-       QB = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nvar vertexID : f32;\n#endif\n#endif\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45454: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
- ... (24 more removed lines; see GitHub link above)
+   64665: (WW, iW, OW) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/646.js` (Changed code · before: `L201-L223` → after: `L72-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cbR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6829bc66aabab5d6fcf84477a29a36a789bd10a1109f3111542472f1897148cb) · [After (L72-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/646.js#L72-L122) · [Before (L201-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/646.js#L201-L223)

```diff
-       geometryVertexShaderWGSL: () => SB
-     });
-     var YB = GB(40864),
-       DB = GB(45397),
-       QB = GB(45404),
-       oB = GB(45454),
-       jB = GB(45463),
-       yB = GB(45408),
-       JB = GB(45374),
-       MB = GB(45438),
-       PB = GB(64218),
-       zB = GB(45483),
-       lB = GB(45485),
-       pB = GB(45492),
-       qB = GB(45497),
-       ZB = GB(45506),
- ... (7 more removed lines; see GitHub link above)
+       pbrVertexShader: () => IW
+     });
+     var mW = OW(41392),
+       EW = OW(54054);
+     const NW = "pbrVertexDeclaration",
+       PW = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
+     mW.c.IncludesShadersStore[NW] || (mW.c.IncludesShadersStore[NW] = PW);
+     const LW = {
+       name: NW,
+       shader: PW
+     };
+     var cW = OW(54061),
+       wW = OW(54070),
+       tW = OW(64673),
+       ZW = OW(54084),
+       xW = OW(54116),
+ ... (35 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/647.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/647.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608)

#### 1. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L4)

```diff
-   45506: (BB, OB, GB) => {
+   54222: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L6)

```diff
-       d: () => oB
+       e: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "bakedVertexAnimation",
-       QB = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "clipPlaneVertex",
+       NW = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L17)

```diff
-   45404: (BB, OB, GB) => {
+   54132: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L19)

```diff
-       c: () => oB
+       e: () => PW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L21-L24)

```diff
-     var YB = GB(40864);
-     const DB = "bakedVertexAnimationDeclaration",
-       QB = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "clipPlaneVertexDeclaration",
+       NW = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L30)

```diff
-   45397: (BB, OB, GB) => {
+   54229: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L34-L37)

```diff
-     var YB = GB(40864);
-     const DB = "bonesDeclaration",
-       QB = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "fogVertex",
+       NW = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L43)

```diff
-   45497: (BB, OB, GB) => {
+   54138: (WW, iW, OW) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L45)

```diff
-       b: () => oB
+       c: () => PW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L47-L50)

```diff
-     var YB = GB(40864);
-     const DB = "bonesVertex",
-       QB = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "fogVertexDeclaration",
+       NW = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L56)

```diff
-   45542: (BB, OB, GB) => {
+   54166: (WW, iW, OW) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L58)

```diff
-       d: () => oB
+       b: () => PW
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L60-L63)

```diff
-     var YB = GB(40864);
-     const DB = "clipPlaneVertex",
-       QB = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "logDepthDeclaration",
+       NW = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L69)

```diff
-   45438: (BB, OB, GB) => {
+   54246: (WW, iW, OW) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L73-L76)

```diff
-     var YB = GB(40864);
-     const DB = "clipPlaneVertexDeclaration",
-       QB = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "logDepthVertex",
+       NW = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L82-L84` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L82-L84) · [Before (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L82-L84)

```diff
-   45551: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
+   64436: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       particlesVertexShader: () => lW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/647.js` (Changed code · before: `L86-L375` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-de8385313e20168a664d0381240365186d8e2b14806cf05fe33f44416a525608) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/647.js#L86-L97) · [Before (L86-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/647.js#L86-L375)

```diff
-     var YB = GB(40864);
-     const DB = "fogVertex",
-       QB = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45444: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "fogVertexDeclaration",
-       QB = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
- ... (274 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54132),
+       NW = OW(54138),
+       PW = OW(54166),
+       LW = OW(54222),
+       cW = OW(54229),
+       wW = OW(54246);
+     const tW = "particlesVertexShader",
+       ZW = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
+     mW.c.ShadersStore[tW] || (mW.c.ShadersStore[tW] = ZW);
+     const xW = [EW.e, NW.c, PW.b, LW.e, cW.d, wW.b];
+     for (const AW of xW) mW.c.IncludesShadersStore[AW.name] || (mW.c.IncludesShadersStore[AW.name] = AW.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/648.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/648.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873)

#### 1. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L4-L121` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L4) · [Before (L4-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L4-L121)

```diff
-   45656: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "clipPlaneFragment",
-       QB = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45644: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
- ... (102 more removed lines; see GitHub link above)
+   54222: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L125-L128` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L8-L11) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L125-L128)

```diff
-     var YB = GB(40864);
-     const DB = "logDepthDeclaration",
-       QB = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "clipPlaneVertex",
+       NW = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L134` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L17) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L134)

```diff
-   45679: (BB, OB, GB) => {
+   54132: (WW, iW, OW) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L138-L167` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L21-L24) · [Before (L138-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L138-L167)

```diff
-     var YB = GB(40864);
-     const DB = "logDepthFragment",
-       QB = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45585: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "ltcHelperFunctions",
-       QB = "fn LTCUv(N: vec3f,V: vec3f,roughness: f32)->vec2f {var LUTSIZE: f32=64.0;var LUTSCALE: f32=( LUTSIZE-1.0 )/LUTSIZE;var LUTBIAS:f32=0.5/LUTSIZE;var dotNV:f32=saturate( dot( N,V ) );var uv:vec2f=vec2f( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}\nfn … [truncated]
- ... (14 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "clipPlaneVertexDeclaration",
+       NW = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L173` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L30) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L173)

```diff
-   45689: (BB, OB, GB) => {
+   54229: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L177-L180` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L34-L37) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L177-L180)

```diff
-     var YB = GB(40864);
-     const DB = "meshBlendTagFragmentOutput",
-       QB = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "fogVertex",
+       NW = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L186` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L43) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L186)

```diff
-   45378: (BB, OB, GB) => {
+   54138: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L190-L193` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L47-L50) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L190-L193)

```diff
-     var YB = GB(40864);
-     const DB = "meshUboDeclaration",
-       QB = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "fogVertexDeclaration",
+       NW = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L199` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L56) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L199)

```diff
-   45572: (BB, OB, GB) => {
+   54166: (WW, iW, OW) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L201-L267` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L58) · [Before (L201-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L201-L267)

```diff
-       c: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "objectIdFunctions",
-       QB = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45581: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
-     });
-     var YB = GB(40864);
- ... (51 more removed lines; see GitHub link above)
+       b: () => PW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L269-L272` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L60-L63) · [Before (L269-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L269-L272)

```diff
-     var YB = GB(40864);
-     const DB = "samplerFragmentDeclaration",
-       QB = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "logDepthDeclaration",
+       NW = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L278` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L69) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L278)

```diff
-   45597: (BB, OB, GB) => {
+   54246: (WW, iW, OW) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L282-L285` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L73-L76) · [Before (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L282-L285)

```diff
-     var YB = GB(40864);
-     const DB = "shadowsFragmentFunctions",
-       QB = "#ifdef SHADOWS\n#ifndef SHADOWFLOAT\nfn unpack(color: vec4f)->f32\n{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}\n#endif\nfn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f3 … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "logDepthVertex",
+       NW = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L291-L293` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L82-L84) · [Before (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L291-L293)

```diff
-   45630: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
+   64447: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       skyVertexShader: () => lW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/648.js` (Changed code · before: `L295-L298` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-af4b80dc652343b58b6f1f9628996b0b715655c363902abbac1cdb186572f873) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/648.js#L86-L97) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/648.js#L295-L298)

```diff
-     var YB = GB(40864);
-     const DB = "textureRepetitionFunctions",
-       QB = "#if TEXTURE_REPETITION_MODE>0\nfn _texRepHash4(p: vec2f)->vec4f {return fract(sin(vec4f(\n1.0+dot(p,vec2f(37.0,17.0)),\n2.0+dot(p,vec2f(11.0,47.0)),\n3.0+dot(p,vec2f(41.0,29.0)),\n4.0+dot(p,vec2f(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nfn _te … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392),
+       EW = OW(54166),
+       NW = OW(54132),
+       PW = OW(54138),
+       LW = OW(54222),
+       cW = OW(54246),
+       wW = OW(54229);
+     const tW = "skyVertexShader",
+       ZW = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
+     mW.c.ShadersStore[tW] || (mW.c.ShadersStore[tW] = ZW);
+     const xW = [EW.b, NW.e, PW.c, LW.e, cW.b, wW.d];
+     for (const AW of xW) mW.c.IncludesShadersStore[AW.name] || (mW.c.IncludesShadersStore[AW.name] = AW.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/649.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/649.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L4)

```diff
-   45656: (BB, OB, GB) => {
+   54357: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L6)

```diff
-       d: () => oB
+       b: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "clipPlaneFragment",
-       QB = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "bumpFragment",
+       NW = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L17)

```diff
-   45644: (BB, OB, GB) => {
+   54336: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L19)

```diff
-       d: () => oB
+       b: () => PW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L21-L24)

```diff
-     var YB = GB(40864);
-     const DB = "clipPlaneFragmentDeclaration",
-       QB = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     OW(54297);
+     const EW = "bumpFragmentFunctions",
+       NW = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L30)

```diff
-   45685: (BB, OB, GB) => {
+   54328: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L32` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L33) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L32)

```diff
-       e: () => oB
+       d: () => PW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L34-L37)

```diff
-     var YB = GB(40864);
-     const DB = "fogFragment",
-       QB = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "bumpFragmentMainFunctions",
+       NW = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L43)

```diff
-   45647: (BB, OB, GB) => {
+   54285: (WW, iW, OW) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L45` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L46) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L45)

```diff
-       e: () => oB
+       d: () => PW
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L47-L50)

```diff
-     var YB = GB(40864);
-     const DB = "fogFragmentDeclaration",
-       QB = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "clusteredLightingFunctions",
+       NW = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L56` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L57) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L56)

```diff
-   45391: (BB, OB, GB) => {
+   54366: (WW, iW, OW) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L58` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L59) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L58)

```diff
-       d: () => oB
+       c: () => PW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L60-L63` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L61-L64) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L60-L63)

```diff
-     var YB = GB(40864);
-     const DB = "helperFunctions",
-       QB = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "decalFragment",
+       NW = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L69` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L70) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L69)

```diff
-   45617: (BB, OB, GB) => {
+   54372: (WW, iW, OW) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/649.js` (Changed code · before: `L73-L189` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c64017a2ccd0e6af8d334787a7c37b3f491306c9efe23c77cea899670d3b02c7) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/649.js#L74-L77) · [Before (L73-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/649.js#L73-L189)

```diff
-     var YB = GB(40864);
-     const DB = "imageProcessingDeclaration",
-       QB = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45624: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "imageProcessingFunctions",
-       QB = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
- ... (101 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "lightFragment",
+       NW = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/650.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/650.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L4)

```diff
-   45656: (BB, OB, GB) => {
+   54352: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L6)

```diff
-       d: () => oB
+       b: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L8)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L10-L11)

```diff
-       QB = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+       NW = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L17)

```diff
-   45644: (BB, OB, GB) => {
+   54343: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L19)

```diff
-       d: () => oB
+       b: () => PW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L21)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L23-L24)

```diff
-       QB = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+       NW = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L30)

```diff
-   45685: (BB, OB, GB) => {
+   54380: (WW, iW, OW) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L32)

```diff
-       e: () => oB
+       d: () => PW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L34)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L36-L37)

```diff
-       QB = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+       NW = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L43)

```diff
-   45647: (BB, OB, GB) => {
+   54347: (WW, iW, OW) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L45)

```diff
-       e: () => oB
+       c: () => PW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L47)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L49-L50` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L49-L50) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L49-L50)

```diff
-       QB = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+       NW = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L56-L58)

```diff
-   45391: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
+   54726: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       colorPixelShader: () => ZW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/650.js` (Changed code · before: `L60-L118` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0a405e55047d7150cf626ac714782daaab60fe218e479138d9cf5fc6606000c9) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/650.js#L60-L69) · [Before (L60-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/650.js#L60-L118)

```diff
-     var YB = GB(40864);
-     const DB = "helperFunctions",
-       QB = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45465: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "logDepthDeclaration",
-       QB = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
- ... (43 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54343),
+       NW = OW(54347),
+       PW = OW(54352),
+       LW = OW(54380);
+     const cW = "colorPixelShader",
+       wW = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
+     mW.c.ShadersStore[cW] || (mW.c.ShadersStore[cW] = wW);
+     const tW = [EW.b, NW.c, PW.b, LW.d];
+     for (const xW of tW) mW.c.IncludesShadersStore[xW.name] || (mW.c.IncludesShadersStore[xW.name] = xW.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/651.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/651.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/651.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/651.js#L4)

```diff
-   45391: (BB, OB, GB) => {
+   54552: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/651.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/651.js#L6)

```diff
-       d: () => oB
+       c: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/651.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/651.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "helperFunctions",
-       QB = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "bumpVertex",
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L17` → after: `L17-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L17-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/651.js#L17-L70) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/651.js#L17)

```diff
-   63997: (BB, OB, GB) => {
+   54443: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bumpVertexDeclaration",
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54398: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (38 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L19` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/651.js#L72) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/651.js#L19)

```diff
-       rgbdDecodePixelShaderWGSL: () => yB
+       defaultVertexShaderWGSL: () => RW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/651.js` (Changed code · before: `L21-L27` → after: `L74-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7aR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fb86d65457021a6950bb0ba28a66599ebc8525c821f7a4e651e26fb4b4b7a) · [After (L74-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/651.js#L74-L120) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/651.js#L21-L27)

```diff
-     var YB = GB(40864),
-       DB = GB(45391);
-     const QB = "rgbdDecodePixelShader",
-       oB = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
-     YB.b.ShadersStoreWGSL[QB] || (YB.b.ShadersStoreWGSL[QB] = oB);
-     const jB = [DB.d];
-     for (const JB of jB) YB.b.IncludesShadersStoreWGSL[JB.name] || (YB.b.IncludesShadersStoreWGSL[JB.name] = JB.shader);
+     var mW = OW(41392),
+       EW = OW(54392),
+       NW = OW(54394),
+       PW = OW(54398),
+       LW = OW(54405),
+       cW = OW(54407),
+       wW = OW(54409),
+       tW = OW(54413),
+       ZW = OW(54416),
+       xW = OW(54424),
+       lW = OW(54432),
+       AW = OW(54435),
+       bW = OW(54443),
+       jW = OW(54450),
+       UW = OW(54459);
+     const kW = "lightVxFragmentDeclaration",
+ ... (31 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/652.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/652.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/652.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/652.js#L4)

```diff
-   45391: (BB, OB, GB) => {
+   54416: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/652.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/652.js#L6)

```diff
-       d: () => oB
+       e: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/652.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/652.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "helperFunctions",
-       QB = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "instancesDeclaration",
+       NW = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L17` → after: `L17-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L17-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/652.js#L17-L56) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/652.js#L17)

```diff
-   64017: (BB, OB, GB) => {
+   54509: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "instancesVertex",
+       NW = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54394: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L19` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/652.js#L58) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/652.js#L19)

```diff
-       rgbdEncodePixelShaderWGSL: () => yB
+       greasedLineVertexShaderWGSL: () => ZW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/652.js` (Changed code · before: `L21-L27` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3bR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b48d1dd08293b46de02c20b452381f566562cf32b85e894c9cfcba75e81deb3b) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/652.js#L60-L69) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/652.js#L21-L27)

```diff
-     var YB = GB(40864),
-       DB = GB(45391);
-     const QB = "rgbdEncodePixelShader",
-       oB = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
-     YB.b.ShadersStoreWGSL[QB] || (YB.b.ShadersStoreWGSL[QB] = oB);
-     const jB = [DB.d];
-     for (const JB of jB) YB.b.IncludesShadersStoreWGSL[JB.name] || (YB.b.IncludesShadersStoreWGSL[JB.name] = JB.shader);
+     var mW = OW(41392),
+       EW = OW(54416),
+       NW = OW(54392),
+       PW = OW(54394),
+       LW = OW(54509);
+     const cW = "greasedLineVertexShader",
+       wW = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
+     mW.c.ShadersStoreWGSL[cW] || (mW.c.ShadersStoreWGSL[cW] = wW);
+     const tW = [EW.e, NW.c, PW.c, LW.c];
+     for (const xW of tW) mW.c.IncludesShadersStoreWGSL[xW.name] || (mW.c.IncludesShadersStoreWGSL[xW.name] = xW.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/653.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/653.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74)

#### 1. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L4)

```diff
-   45506: (BB, OB, GB) => {
+   54398: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L6)

```diff
-       d: () => oB
+       c: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "bakedVertexAnimation",
-       QB = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     OW(54392), OW(54394);
+     const EW = "defaultUboDeclaration",
+       NW = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L18) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L17)

```diff
-   45404: (BB, OB, GB) => {
+   54407: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L19` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L20) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L19)

```diff
-       c: () => oB
+       e: () => PW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L21-L24` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L22-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L21-L24)

```diff
-     var YB = GB(40864);
-     const DB = "bakedVertexAnimationDeclaration",
-       QB = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L30)

```diff
-   45397: (BB, OB, GB) => {
+   54392: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L32` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L33) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L32)

```diff
-       d: () => oB
+       c: () => PW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L34-L37)

```diff
-     var YB = GB(40864);
-     const DB = "bonesDeclaration",
-       QB = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "sceneUboDeclaration",
+       NW = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L43-L45` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L44-L46) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L43-L45)

```diff
-   45497: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
+   54581: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       defaultPixelShaderWGSL: () => FW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L47-L50` → after: `L48-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L48-L69) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L47-L50)

```diff
-     var YB = GB(40864);
-     const DB = "bonesVertex",
-       QB = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392),
+       EW = OW(54392),
+       NW = OW(54394),
+       PW = OW(54398),
+       LW = OW(54586),
+       cW = OW(54588),
+       wW = OW(54592),
+       tW = OW(54432),
+       ZW = OW(54407),
+       xW = OW(54595),
+       lW = OW(54599),
+       AW = OW(54602);
+     const bW = "clusteredLightingCompute",
+       jW = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
+     mW.c.IncludesShadersStoreWGSL[bW] || (mW.c.IncludesShadersStoreWGSL[bW] = jW);
+     const UW = {
+ ... (6 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L54-L63` → after: `L73-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L73-L78) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L54-L63)

```diff
-     }
-   },
-   45542: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "clipPlaneVertex",
-       QB = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     };
+     var KW = OW(54610),
+       SW = OW(54616);
+     const YW = "fresnelFunction",
+       yW = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[YW] || (mW.c.IncludesShadersStoreWGSL[YW] = yW);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L67-L76` → after: `L82-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L82-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L82-L97) · [Before (L67-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L67-L76)

```diff
-     }
-   },
-   45438: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "clipPlaneVertexDeclaration",
-       QB = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     };
+     var JW = OW(54618),
+       hW = OW(54624),
+       HW = OW(54629),
+       nW = OW(54633),
+       uW = OW(54635),
+       oW = OW(54639),
+       dW = OW(54641),
+       eW = OW(54478),
+       vW = OW(54648),
+       gW = OW(54655),
+       DW = OW(54660),
+       VW = OW(54664);
+     const pW = "defaultFragmentAlpha",
+       fW = "#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpa … [truncated]
+     mW.c.IncludesShadersStoreWGSL[pW] || (mW.c.IncludesShadersStoreWGSL[pW] = fW);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/653.js` (Changed code · before: `L80-L167` → after: `L101-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-860d2375b3b4073c698014a3998131e435c047f985276f84026483977321bd74) · [After (L101-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/653.js#L101-L112) · [Before (L80-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/653.js#L80-L167)

```diff
-     }
-   },
-   45551: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "fogVertex",
-       QB = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45444: (BB, OB, GB) => {
- ... (72 more removed lines; see GitHub link above)
+     };
+     var XW = OW(54673),
+       BW = OW(54677),
+       qW = OW(54682),
+       RW = OW(54691),
+       GW = OW(54698),
+       IW = OW(54702);
+     const aW = "defaultPixelShader",
+       rW = "#include<defaultUboDeclaration>\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && … [truncated]
+     mW.c.ShadersStoreWGSL[aW] || (mW.c.ShadersStoreWGSL[aW] = rW);
+     const zW = [EW.c, NW.c, PW.c, LW.d, cW.b, wW.e, tW.d, ZW.e, xW.c, lW.c, AW.d, UW, MW, KW.b, SW.c, TW, JW.e, hW.d, HW.e, nW.e, uW.c, oW.e, dW.d, eW.c, vW.d, gW.b, DW.e, VW.b, CW, XW.b, BW.c, qW.e, RW.b, GW.d, IW.b];
+     for (const QW of zW) mW.c.IncludesShadersStoreWGSL[QW.name] || (mW.c.IncludesShadersStoreWGSL[QW.name] = QW.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/654.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/654.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/654.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/654.js#L4)

```diff
-   45533: (BB, OB, GB) => {
+   54407: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/654.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/654.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "bumpVertex",
-       QB = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/654.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/654.js#L17)

```diff
-   45433: (BB, OB, GB) => {
+   64779: (WW, iW, OW) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/654.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/654.js#L19)

```diff
-       b: () => oB
+       d: () => PW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/654.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/654.js#L21-L24)

```diff
-     var YB = GB(40864);
-     const DB = "bumpVertexDeclaration",
-       QB = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "pbrBRDFFunctions",
+       NW = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/654.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/654.js#L30)

```diff
-   64218: (BB, OB, GB) => {
+   54392: (WW, iW, OW) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/654.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/654.js#L32)

```diff
-       e: () => oB
+       c: () => PW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/654.js` (Changed code · before: `L34-L102` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaffR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e5e8bfcdd4a96e17e3d28248b5711e4cd7b74e97883511b6000d3fbb461eaff) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/654.js#L34-L37) · [Before (L34-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/654.js#L34-L102)

```diff
-     var YB = GB(40864);
-     const DB = "harmonicsFunctions",
-       QB = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   64210: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
-     GB(45374), GB(45378);
-     const DB = "pbrUboDeclaration",
- ... (53 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "sceneUboDeclaration",
+       NW = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/655.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/655.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L4` → after: `L4-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L4-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/655.js#L4-L30) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/655.js#L4)

```diff
-   45542: (BB, OB, GB) => {
+   54524: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bakedVertexAnimation",
+       NW = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54413: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (11 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L8` → after: `L34-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L34-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/655.js#L34-L73) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/655.js#L8)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
+     const EW = "bonesDeclaration",
+       NW = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54517: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bonesVertex",
+       NW = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
+ ... (24 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L11-L17` → after: `L76-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L76-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/655.js#L76-L82) · [Before (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/655.js#L11-L17)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45438: (BB, OB, GB) => {
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54450: (WW, iW, OW) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L21` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/655.js#L86) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/655.js#L21)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L24-L82` → after: `L89-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L89-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/655.js#L89-L199) · [Before (L24-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/655.js#L24-L82)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45551: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "fogVertex",
-       QB = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
- ... (43 more removed lines; see GitHub link above)
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64786: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "harmonicsFunctions",
+       NW = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (95 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/655.js` (Changed code · before: `L84-L97` → after: `L201-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ddefa9d447a1e96c7f1173fcf8f2ea4e7eb082cd98b5a10234faff11dfb934e8) · [After (L201-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/655.js#L201-L223) · [Before (L84-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/655.js#L84-L97)

```diff
-       particlesVertexShaderWGSL: () => lB
-     });
-     var YB = GB(40864),
-       DB = GB(45438),
-       QB = GB(45444),
-       oB = GB(45465),
-       jB = GB(45542),
-       yB = GB(45551),
-       JB = GB(45561);
-     const MB = "particlesVertexShader",
-       PB = "attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;\n#ifdef ANIMATESHEET\nattribute cellIndex: f32;\n#endif\n#ifndef BILLBOARD\nattribute direction: vec3f;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute direction: vec3f;\n#endif … [truncated]
-     YB.b.ShadersStoreWGSL[MB] || (YB.b.ShadersStoreWGSL[MB] = PB);
-     const zB = [DB.b, QB.e, oB.e, jB.d, yB.d, JB.d];
-     for (const pB of zB) YB.b.IncludesShadersStoreWGSL[pB.name] || (YB.b.IncludesShadersStoreWGSL[pB.name] = pB.shader);
+       geometryVertexShaderWGSL: () => SW
+     });
+     var mW = OW(41392),
+       EW = OW(54409),
+       NW = OW(54413),
+       PW = OW(54466),
+       LW = OW(54470),
+       cW = OW(54416),
+       wW = OW(54392),
+       tW = OW(54450),
+       ZW = OW(64786),
+       xW = OW(54496),
+       lW = OW(54503),
+       AW = OW(54509),
+       bW = OW(54517),
+       jW = OW(54524),
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/656.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/656.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L4-L8` → after: `L4-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L4-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/656.js#L4-L60) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/656.js#L4-L8)

```diff
-   45542: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
+   54524: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bakedVertexAnimation",
+       NW = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54413: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (41 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L11-L21` → after: `L63-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/656.js#L63-L73) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/656.js#L11-L21)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45438: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54450: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L24-L34` → after: `L76-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/656.js#L76-L86) · [Before (L24-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/656.js#L24-L34)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45551: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54558: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L37-L47` → after: `L89-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L89-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/656.js#L89-L99) · [Before (L37-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/656.js#L37-L47)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45444: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54459: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L50-L60` → after: `L102-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L102-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/656.js#L102-L151) · [Before (L50-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/656.js#L50-L60)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45465: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54416: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "instancesDeclaration",
+       NW = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (34 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L63-L73` → after: `L154-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L154-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/656.js#L154-L164) · [Before (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/656.js#L63-L73)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45561: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54572: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/656.js` (Changed code · before: `L76-L97` → after: `L167-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1aR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cfe50f2385690767b958d02b87e4b277f107d25215711123d720d1f296ce9b1a) · [After (L167-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/656.js#L167-L375) · [Before (L76-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/656.js#L76-L97)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   63946: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       skyVertexShaderWGSL: () => lB
-     });
-     var YB = GB(40864),
-       DB = GB(45465),
-       QB = GB(45438),
-       oB = GB(45444),
-       jB = GB(45542),
-       yB = GB(45561),
- ... (6 more removed lines; see GitHub link above)
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54432: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "mainUVVaryingDeclaration",
+       NW = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (193 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/657.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/657.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L4)

```diff
-   45658: (BB, OB, GB) => {
+   54655: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "bumpFragment",
-       QB = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "clipPlaneFragment",
+       NW = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L17)

```diff
-   45642: (BB, OB, GB) => {
+   54641: (WW, iW, OW) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L21-L25)

```diff
-     var YB = GB(40864);
-     GB(45606);
-     const DB = "bumpFragmentFunctions",
-       QB = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "clipPlaneFragmentDeclaration",
+       NW = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L31` → after: `L30-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L30-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L30-L56) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L31)

```diff
-   45633: (BB, OB, GB) => {
+   54602: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clusteredLightingFunctions",
+       NW = "struct ClusteredLight {vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\nvLightDirection: vec4f,\nvLightFalloff: vec4f,}\nfn getClusteredLight(lightDataTexture: texture_2d<f32>,index: u32)->ClusteredLight {return ClusteredLight(\ntextureLoad(lightData … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54673: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+ ... (11 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L35-L38` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L60-L63) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L35-L38)

```diff
-     var YB = GB(40864);
-     const DB = "bumpFragmentMainFunctions",
-       QB = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "fogFragment",
+       NW = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L44` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L69) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L44)

```diff
-   45656: (BB, OB, GB) => {
+   54648: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L48-L51` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L73-L76) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L48-L51)

```diff
-     var YB = GB(40864);
-     const DB = "clipPlaneFragment",
-       QB = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "fogFragmentDeclaration",
+       NW = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L57` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L82) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L57)

```diff
-   45644: (BB, OB, GB) => {
+   54624: (WW, iW, OW) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L61-L64` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L86-L89) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L61-L64)

```diff
-     var YB = GB(40864);
-     const DB = "clipPlaneFragmentDeclaration",
-       QB = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "imageProcessingDeclaration",
+       NW = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L70` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L95) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L70)

```diff
-   45572: (BB, OB, GB) => {
+   54629: (WW, iW, OW) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L72` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L97) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L72)

```diff
-       c: () => oB
+       e: () => PW
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L74-L77` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L99-L102) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L74-L77)

```diff
-     var YB = GB(40864);
-     const DB = "objectIdFunctions",
-       QB = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "imageProcessingFunctions",
+       NW = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L83` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L108) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L83)

```diff
-   64387: (BB, OB, GB) => {
+   54595: (WW, iW, OW) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L85` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L110) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L85)

```diff
-       d: () => oB
+       c: () => PW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L87-L90` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L112-L115) · [Before (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L87-L90)

```diff
-     var YB = GB(40864);
-     const DB = "openpbrDielectricReflectance",
-       QB = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "lightUboDeclaration",
+       NW = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L96` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L121) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L96)

```diff
-   64392: (BB, OB, GB) => {
+   54478: (WW, iW, OW) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L100-L103` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L125-L128) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L100-L103)

```diff
-     var YB = GB(40864);
-     const DB = "openpbrGeometryInfo",
-       QB = "struct geometryInfoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32};struct geometryInfoAnisoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32,\nanisotropy: f32,\nanisotropicTange … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "logDepthDeclaration",
+       NW = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L109` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L134) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L109)

```diff
-   64396: (BB, OB, GB) => {
+   54682: (WW, iW, OW) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L113-L116` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L138-L141) · [Before (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L113-L116)

```diff
-     var YB = GB(40864);
-     const DB = "openpbrIblFunctions",
-       QB = "#ifdef REFLECTION\nfn sampleIrradiance(\nsurfaceNormal: vec3f\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,vEnvironmentIrradianceSH: vec3f\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defi … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "logDepthFragment",
+       NW = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L122` → after: `L147-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L147-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L147-L160) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L122)

```diff
-   64402: (BB, OB, GB) => {
+   54599: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "ltcHelperFunctions",
+       NW = "fn LTCUv(N: vec3f,V: vec3f,roughness: f32)->vec2f {var LUTSIZE: f32=64.0;var LUTSCALE: f32=( LUTSIZE-1.0 )/LUTSIZE;var LUTBIAS:f32=0.5/LUTSIZE;var dotNV:f32=saturate( dot( N,V ) );var uv:vec2f=vec2f( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}\nfn … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54432: (WW, iW, OW) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L126-L129` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L164-L167) · [Before (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L126-L129)

```diff
-     var YB = GB(40864);
-     const DB = "openpbrSubsurfaceLayerData",
-       QB = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "mainUVVaryingDeclaration",
+       NW = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L135` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L173) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L135)

```diff
-   64399: (BB, OB, GB) => {
+   54698: (WW, iW, OW) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L137` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L175) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L137)

```diff
-       e: () => oB
+       d: () => PW
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L139-L142` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L177-L180) · [Before (L139-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L139-L142)

```diff
-     var YB = GB(40864);
-     const DB = "openpbrTransmissionLayerData",
-       QB = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "meshBlendTagFragmentOutput",
+       NW = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L148` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L186) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L148)

```diff
-   64236: (BB, OB, GB) => {
+   54394: (WW, iW, OW) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L152-L155` → after: `L190-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L190-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L190-L232) · [Before (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L152-L155)

```diff
-     var YB = GB(40864);
-     const DB = "pbrFragmentReflectionDeclaration",
-       QB = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\nvar reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;\n#ifdef LODBASEDMICROSFURACE\n#else\nvar reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamp … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "meshUboDeclaration",
+       NW = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54586: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "objectIdFunctions",
+       NW = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
+ ... (27 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L161` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L238) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L161)

```diff
-   64299: (BB, OB, GB) => {
+   54588: (WW, iW, OW) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L165-L168` → after: `L242-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L242-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L242-L246) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L165-L168)

```diff
-     var YB = GB(40864);
-     const DB = "pbrIBLFunctions",
-       QB = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfn getLodFromAlphaG(cubeMapDimensionPixels: f32,microsurfaceAverageSlope: f32)->f32 {var microsurfaceAverageSlopeTexels: f32=cubeMapDimensionPixels*microsurfaceAverageSlope;var lod: f32=log2(microsurfaceAverageSlopeTe … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     OW(54586);
+     const EW = "prePassDeclaration",
+       NW = "#ifdef PREPASS\n#ifndef PREPASS_CUSTOM_VARYINGS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if (defined(PREPASS … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L174` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L252) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L174)

```diff
-   45613: (BB, OB, GB) => {
+   54618: (WW, iW, OW) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L178` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L256) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L178)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L181` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L259) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L181)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L187` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L265) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L187)

```diff
-   45606: (BB, OB, GB) => {
+   54616: (WW, iW, OW) => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L189` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L267) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L189)

```diff
-       d: () => oB
+       c: () => PW
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L191` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L269) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L191)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/657.js` (Changed code · before: `L194-L227` → after: `L272-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ceR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-24fe4b76c9df34ccc60931d96a241cee76b154486e18bd1465034fd1ca0408ce) · [After (L272-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/657.js#L272-L298) · [Before (L194-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/657.js#L194-L227)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   64414: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       geometryPixelShaderWGSL: () => fB
-     });
-     var YB = GB(40864),
-       DB = GB(45572),
-       QB = GB(45644),
-       oB = GB(45633),
-       jB = GB(45606),
-       yB = GB(45642),
- ... (18 more removed lines; see GitHub link above)
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54610: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "shadowsFragmentFunctions",
+       NW = "#ifdef SHADOWS\n#ifndef SHADOWFLOAT\nfn unpack(color: vec4f)->f32\n{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}\n#endif\nfn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f3 … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (11 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/658.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/658.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25)

#### 1. `bundles/preprod.bloxd.io/chunks/js/658.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/658.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/658.js#L4)

```diff
-   45658: (BB, OB, GB) => {
+   54655: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/658.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/658.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/658.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "bumpFragment",
-       QB = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "clipPlaneFragment",
+       NW = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/658.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/658.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/658.js#L17)

```diff
-   45642: (BB, OB, GB) => {
+   54641: (WW, iW, OW) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/658.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/658.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/658.js#L21-L25)

```diff
-     var YB = GB(40864);
-     GB(45606);
-     const DB = "bumpFragmentFunctions",
-       QB = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "clipPlaneFragmentDeclaration",
+       NW = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/658.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/658.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/658.js#L31)

```diff
-   45633: (BB, OB, GB) => {
+   54691: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/658.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/658.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/658.js#L35-L38)

```diff
-     var YB = GB(40864);
-     const DB = "bumpFragmentMainFunctions",
-       QB = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "fogFragment",
+       NW = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/658.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/658.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/658.js#L44)

```diff
-   45666: (BB, OB, GB) => {
+   54648: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/658.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/658.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/658.js#L48-L51)

```diff
-     var YB = GB(40864);
-     const DB = "decalFragment",
-       QB = "#ifdef DECAL\nvar decalTempColor=decalColor.rgb;var decalTempAlpha=decalColor.a;\n#ifdef GAMMADECAL\ndecalTempColor=toLinearSpaceVec3(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalTempAlpha=decalColor.a*decalColor.a;\n#endif\nsurfaceAlbedo=mix(surfaceAlbedo … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "fogFragmentDeclaration",
+       NW = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/658.js` (Changed code · before: `L57` → after: `L56-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25) · [After (L56-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/658.js#L56-L95) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/658.js#L57)

```diff
-   45676: (BB, OB, GB) => {
+   54407: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54624: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+ ... (24 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/658.js` (Changed code · before: `L61-L64` → after: `L99-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00a75cf37795b7a6e9db185cdfc563aab7b2abb53f49810c0f7eba60d8adcb25) · [After (L99-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/658.js#L99-L189) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/658.js#L61-L64)

```diff
-     var YB = GB(40864);
-     const DB = "lightFragment",
-       QB = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvar diffuse{X}: vec4f=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X})\n{let slic … [truncated]
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "logDepthDeclaration",
+       NW = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54682: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "logDepthFragment",
+       NW = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
+ ... (75 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/659.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/659.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842)

#### 1. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L4)

```diff
-   45656: (BB, OB, GB) => {
+   54655: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L6)

```diff
-       d: () => oB
+       b: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L8)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L11)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L17)

```diff
-   45644: (BB, OB, GB) => {
+   54641: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L21)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L24)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L30)

```diff
-   45685: (BB, OB, GB) => {
+   54691: (WW, iW, OW) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L32)

```diff
-       e: () => oB
+       b: () => PW
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L34)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L37)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L43)

```diff
-   45647: (BB, OB, GB) => {
+   54648: (WW, iW, OW) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L45)

```diff
-       e: () => oB
+       d: () => PW
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L47)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L50)

```diff
-     YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L56` → after: `L56-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L56-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L56-L95) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L56)

```diff
-   45705: (BB, OB, GB) => {
+   54407: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54478: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (24 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L58` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L97) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L58)

```diff
-       colorPixelShaderWGSL: () => PB
+       skyPixelShaderWGSL: () => UW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/659.js` (Changed code · before: `L60-L69` → after: `L99-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b69b003730402186c8054f969f7637e1f6744d965308b7a3e2497503882bf842) · [After (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/659.js#L99-L118) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/659.js#L60-L69)

```diff
-     var YB = GB(40864),
-       DB = GB(45644),
-       QB = GB(45647),
-       oB = GB(45656),
-       jB = GB(45685);
-     const yB = "colorPixelShader",
-       JB = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
-     YB.b.ShadersStoreWGSL[yB] || (YB.b.ShadersStoreWGSL[yB] = JB);
-     const MB = [DB.d, QB.e, oB.d, jB.e];
-     for (const zB of MB) YB.b.IncludesShadersStoreWGSL[zB.name] || (YB.b.IncludesShadersStoreWGSL[zB.name] = zB.shader);
+     var mW = OW(41392),
+       EW = OW(54641),
+       NW = OW(54478),
+       PW = OW(54648),
+       LW = OW(54407),
+       cW = OW(54655),
+       wW = OW(54682),
+       tW = OW(54691);
+     const ZW = "imageProcessingCompatibility",
+       xW = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[ZW] || (mW.c.IncludesShadersStoreWGSL[ZW] = xW);
+     const lW = {
+         name: ZW,
+         shader: xW
+       },
+       AW = "skyPixelShader",
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/660.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/660.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80)

#### 1. `bundles/preprod.bloxd.io/chunks/js/660.js` (Changed code · before: `L4-L6` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/660.js#L4-L14) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/660.js#L4-L6)

```diff
-   45700: (BB, OB, GB) => {
-     function YB(BB) {
-       return Math.floor(BB / 8)
+   54407: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/660.js` (Changed code · before: `L8-L13` → after: `L16-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80) · [After (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/660.js#L16-L19) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/660.js#L8-L13)

```diff
- 
-     function DB(BB) {
-       return 1 << BB % 8
-     }
-     GB.d(OB, {
-       OptimizeIndices: () => oB
+   },
+   64519: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       rgbdDecodePixelShaderWGSL: () => cW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/660.js` (Changed code · before: `L15-L63` → after: `L21-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-036ec1f097a801e17047f68c6009c66c467557ae5581095519471821ceea5f80) · [After (L21-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/660.js#L21-L30) · [Before (L15-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/660.js#L15-L63)

```diff
-     class QB {
-       constructor(BB) {
-         this.size = BB, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
-       }
-       get(BB) {
-         if (BB >= this.size) throw new RangeError("Bit index out of range");
-         const OB = YB(BB),
-           GB = DB(BB);
-         return 0 !== (this._byteArray[OB] & GB)
-       }
-       set(BB, OB) {
-         if (BB >= this.size) throw new RangeError("Bit index out of range");
-         const GB = YB(BB),
-           QB = DB(BB);
-         OB ? this._byteArray[GB] |= QB : this._byteArray[GB] &= ~QB
-       }
- ... (33 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54407);
+     const NW = "rgbdDecodePixelShader",
+       PW = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
+     mW.c.ShadersStoreWGSL[NW] || (mW.c.ShadersStoreWGSL[NW] = PW);
+     const LW = [EW.e];
+     for (const wW of LW) mW.c.IncludesShadersStoreWGSL[wW.name] || (mW.c.IncludesShadersStoreWGSL[wW.name] = wW.shader);
+     const cW = {
+       name: NW,
+       shader: PW
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/661.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/661.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/661.js` (Changed code · before: `L4-L5` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7ad) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/661.js#L4-L17) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/661.js#L4-L5)

```diff
-   63880: (BB, OB, GB) => {
-     var YB;
+   54407: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64545: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/661.js` (Changed code · before: `L7-L11` → after: `L19-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7adR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-41a287bd4bc63aa5885b743bb03b748091b5019a245d787ec43a84ab3c9ab7ad) · [After (L19-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/661.js#L19-L31) · [Before (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/661.js#L7-L11)

```diff
-         ShaderLanguage: () => YB
-       }),
-       function(BB) {
-         BB[BB.GLSL = 0] = "GLSL", BB[BB.WGSL = 1] = "WGSL"
-       }(YB || (YB = {}))
+       rgbdEncodePixelShaderWGSL: () => cW
+     });
+     var mW = OW(41392),
+       EW = OW(54407);
+     const NW = "rgbdEncodePixelShader",
+       PW = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
+     mW.c.ShadersStoreWGSL[NW] || (mW.c.ShadersStoreWGSL[NW] = PW);
+     const LW = [EW.e];
+     for (const wW of LW) mW.c.IncludesShadersStoreWGSL[wW.name] || (mW.c.IncludesShadersStoreWGSL[wW.name] = wW.shader);
+     const cW = {
+       name: NW,
+       shader: PW
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/662.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/662.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/662.js` (Changed code · before: `L4` → after: `L4-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3) · [After (L4-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/662.js#L4-L147) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/662.js#L4)

```diff
-   63889: (BB, OB, GB) => {
+   54524: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bakedVertexAnimation",
+       NW = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54413: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (128 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/662.js` (Changed code · before: `L6` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/662.js#L149) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/662.js#L6)

```diff
-       postprocessVertexShader: () => oB
+       colorVertexShaderWGSL: () => kW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/662.js` (Changed code · before: `L8-L11` → after: `L151-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-595fcbf566fba53824e13aec89f20cab380ae437b75a490cef5824113e217ba3) · [After (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/662.js#L151-L167) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/662.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "postprocessVertexShader",
-       QB = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     YB.b.ShadersStore[DB] || (YB.b.ShadersStore[DB] = QB);
+     var mW = OW(41392),
+       EW = OW(54409),
+       NW = OW(54413),
+       PW = OW(54450),
+       LW = OW(54459),
+       cW = OW(54416),
+       wW = OW(54509),
+       tW = OW(54517),
+       ZW = OW(54524),
+       xW = OW(54555),
+       lW = OW(54558),
+       AW = OW(54568);
+     const bW = "colorVertexShader",
+       jW = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform view: mat4x4f;\n#endif\n#i … [truncated]
+     mW.c.ShadersStoreWGSL[bW] || (mW.c.ShadersStoreWGSL[bW] = jW);
+     const UW = [EW.d, NW.c, PW.b, LW.b, cW.e, wW.c, tW.e, ZW.e, xW.d, lW.c, AW.d];
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/663.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/663.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/663.js` (Changed code · before: `L4` → after: `L4-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a) · [After (L4-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/663.js#L4-L57) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/663.js#L4)

```diff
-   63904: (BB, OB, GB) => {
+   54552: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bumpVertex",
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54443: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (38 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/663.js` (Changed code · before: `L6` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711aR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/663.js#L59) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/663.js#L6)

```diff
-       WorldCodeAiOutOfUsage: () => jB
+       pbrVertexShaderWGSL: () => qW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/663.js` (Changed code · before: `L8-L30` → after: `L61-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711aR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-81dc9de601f0205694a54e72bb4f5864630749bc6d6ce91586c7b67101a0711a) · [After (L61-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/663.js#L61-L105) · [Before (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/663.js#L8-L30)

```diff
-     var YB = GB(1175),
-       DB = GB(2516),
-       QB = GB(1485),
-       oB = GB(1282);
- 
-     function jB(BB) {
-       let {
-         onGetSuperRank: OB
-       } = BB;
-       const {
-         t: GB
-       } = (0, YB.H)(), jB = (0, DB.u)(Date.now()), yB = GB(jB.nameKey);
-       return (0, oB.jsxs)("div", {
-         className: "WorldCodeAiOutOfUsage",
-         children: [(0, oB.jsx)("p", {
-           className: "WorldCodeAiOutOfUsageText",
- ... (7 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54392),
+       NW = OW(54394),
+       PW = OW(64774),
+       LW = OW(54405),
+       cW = OW(54432),
+       wW = OW(54407),
+       tW = OW(64779),
+       ZW = OW(54409),
+       xW = OW(54413),
+       lW = OW(54416),
+       AW = OW(54424),
+       bW = OW(54435),
+       jW = OW(64786),
+       UW = OW(54443),
+       kW = OW(54450),
+ ... (29 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/664.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/664.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373)

#### 1. `bundles/preprod.bloxd.io/chunks/js/664.js` (Changed code · before: `L4` → after: `L4-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373) · [After (L4-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/664.js#L4-L82) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/664.js#L4)

```diff
-   63925: (BB, OB, GB) => {
+   54555: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneVertex",
+       NW = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54450: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+ ... (63 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/664.js` (Changed code · before: `L6` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/664.js#L84) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/664.js#L6)

```diff
-       particlesPixelShader: () => VB
+       particlesVertexShaderWGSL: () => lW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/664.js` (Changed code · before: `L8-L31` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b7cc9c4cdc9d991e346eccc8bb944b507995f9f207857ede3853b817e2eef373) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/664.js#L86-L97) · [Before (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/664.js#L8-L31)

```diff
-     var YB = GB(40864),
-       DB = GB(45227),
-       QB = GB(45233),
-       oB = GB(45308),
-       jB = GB(45275),
-       yB = GB(45133),
-       JB = GB(45051),
-       MB = GB(45283),
-       PB = GB(45317),
-       zB = GB(45323),
-       lB = GB(45355),
-       pB = GB(45360);
-     const qB = "geometryRenderingFragment",
-       ZB = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
-     YB.b.IncludesShadersStore[qB] || (YB.b.IncludesShadersStore[qB] = ZB);
-     const NB = {
- ... (8 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54450),
+       NW = OW(54459),
+       PW = OW(54478),
+       LW = OW(54555),
+       cW = OW(54558),
+       wW = OW(54572);
+     const tW = "particlesVertexShader",
+       ZW = "attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;\n#ifdef ANIMATESHEET\nattribute cellIndex: f32;\n#endif\n#ifndef BILLBOARD\nattribute direction: vec3f;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute direction: vec3f;\n#endif … [truncated]
+     mW.c.ShadersStoreWGSL[tW] || (mW.c.ShadersStoreWGSL[tW] = ZW);
+     const xW = [EW.b, NW.b, PW.c, LW.d, cW.c, wW.b];
+     for (const AW of xW) mW.c.IncludesShadersStoreWGSL[AW.name] || (mW.c.IncludesShadersStoreWGSL[AW.name] = AW.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/665.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/665.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577)

#### 1. `bundles/preprod.bloxd.io/chunks/js/665.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/665.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/665.js#L4)

```diff
-   63957: (BB, OB, GB) => {
+   54555: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/665.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/665.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/665.js#L6)

```diff
-       allocateF64Mat4: () => DB
+       d: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/665.js` (Changed code · before: `L8-L11` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/665.js#L8-L14) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/665.js#L8-L11)

```diff
-     var YB = GB(44854);
- 
-     function DB() {
-       return new YB.g(16)
+     var mW = OW(41392);
+     const EW = "clipPlaneVertex",
+       NW = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/665.js` (Changed code · before: `L13` → after: `L16-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7a264de9fefb07543b4b884701392406eccf92cff6615878e97990cdcc92f577) · [After (L16-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/665.js#L16-L101) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/665.js#L13)

```diff
-     DB["@@MAT4_STORAGE_F64@@"] = !0
+   },
+   54450: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneVertexDeclaration",
+       NW = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54558: (WW, iW, OW) => {
+     OW.d(iW, {
+ ... (70 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/666.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/666.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030)

#### 1. `bundles/preprod.bloxd.io/chunks/js/666.js` (Changed code · before: `L4` → after: `L4-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030) · [After (L4-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/666.js#L4-L200) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/666.js#L4)

```diff
-   63963: (BB, OB, GB) => {
+   54660: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bumpFragment",
+       NW = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54639: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+ ... (181 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/666.js` (Changed code · before: `L6-L57` → after: `L202-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5587ba94cd5cd108f1e685fa85f67aed6cd16a78611646532a7de927710ed030) · [After (L202-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/666.js#L202-L230) · [Before (L6-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/666.js#L6-L57)

```diff
-       applyLightFoOffset: () => oB,
-       getFloatingOriginOffset: () => DB,
-       lightFoVersion: () => QB,
-       wrapRenderableForFO: () => jB
-     });
-     var YB = GB(44858);
- 
-     function DB(BB) {
-       const OB = BB.camera;
-       if (!OB) return {
-         x: 0,
-         y: 0,
-         z: 0
-       };
-       const GB = OB.worldMatrix;
-       return {
- ... (36 more removed lines; see GitHub link above)
+       geometryPixelShaderWGSL: () => TW
+     });
+     var mW = OW(41392),
+       EW = OW(54586),
+       NW = OW(54641),
+       PW = OW(54635),
+       LW = OW(54616),
+       cW = OW(54639),
+       wW = OW(54407),
+       tW = OW(64807),
+       ZW = OW(54392),
+       xW = OW(64779),
+       lW = OW(64971),
+       AW = OW(64872),
+       bW = OW(54618),
+       jW = OW(64980),
+ ... (13 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/667.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/667.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12ee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/667.js` (Changed code · before: `L4-L9` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12ee) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/667.js#L4-L14) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/667.js#L4-L9)

```diff
-   63966: (BB, OB, GB) => {
-     function YB(BB, OB, GB, YB, DB, QB, oB) {
-       const jB = OB,
-         yB = YB,
-         JB = GB;
-       BB[JB + 0] = jB[yB + 0], BB[JB + 1] = jB[yB + 1], BB[JB + 2] = jB[yB + 2], BB[JB + 3] = jB[yB + 3], BB[JB + 4] = jB[yB + 4], BB[JB + 5] = jB[yB + 5], BB[JB + 6] = jB[yB + 6], BB[JB + 7] = jB[yB + 7], BB[JB + 8] = jB[yB + 8], BB[JB + 9] = jB[yB + 9], BB[JB + 10] = jB[yB + 10 … [truncated]
+   54660: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bumpFragment",
+       NW = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/667.js` (Changed code · before: `L11-L18` → after: `L16-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12eeR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12ee) · [After (L16-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/667.js#L16-L28) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/667.js#L11-L18)

```diff
- 
-     function DB(BB) {
-       return (OB, GB, DB, QB) => {
-         const oB = BB.camera;
-         if (!oB) return void YB(OB, GB, DB, QB, 0, 0, 0);
-         const jB = oB.worldMatrix;
-         YB(OB, GB, DB, QB, jB[12], jB[13], jB[14])
-       }
+   },
+   54639: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     OW(54616);
+     const EW = "bumpFragmentFunctions",
+       NW = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/667.js` (Changed code · before: `L20-L23` → after: `L30-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12eeR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-958a813a6023fdcfa56583c6a255aee7e559c760f9a57936fe1c064e7daa12ee) · [After (L30-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/667.js#L30-L68) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/667.js#L20-L23)

```diff
-     GB.r(OB), GB.d(OB, {
-       makePackMeshWorld: () => DB,
-       packMat4IntoF32WithOffset: () => YB
-     })
+   },
+   54635: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bumpFragmentMainFunctions",
+       NW = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54664: (WW, iW, OW) => {
+     OW.d(iW, {
+ ... (23 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/668.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/668.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L4-L6` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/668.js#L4-L14) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/668.js#L4-L6)

```diff
-   63973: (BB, OB, GB) => {
-     function YB(BB) {
-       return BB.features.has("timestamp-query")
+   54655: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneFragment",
+       NW = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L8-L32` → after: `L16-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/668.js#L16-L27) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/668.js#L8-L32)

```diff
- 
-     function DB(BB) {
-       return YB(BB) ? {
-         device: BB,
-         markerPipeline: BB.createComputePipeline({
-           layout: "auto",
-           compute: {
-             module: BB.createShaderModule({
-               code: "@compute @workgroup_size(1) fn main() {}"
-             }),
-             entryPoint: "main"
-           }
-         }),
-         querySet: BB.createQuerySet({
-           type: "timestamp",
-           count: 2
- ... (9 more removed lines; see GitHub link above)
+   },
+   54641: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneFragmentDeclaration",
+       NW = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L34-L42` → after: `L29-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/668.js#L29-L40) · [Before (L34-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/668.js#L34-L42)

```diff
- 
-     function QB(BB, OB) {
-       const GB = OB.beginComputePass({
-         timestampWrites: {
-           querySet: BB.querySet,
-           beginningOfPassWriteIndex: 0
-         }
-       });
-       GB.setPipeline(BB.markerPipeline), GB.dispatchWorkgroups(1), GB.end()
+   },
+   54691: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "fogFragment",
+       NW = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L44-L52` → after: `L42-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L42-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/668.js#L42-L53) · [Before (L44-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/668.js#L44-L52)

```diff
- 
-     function oB(BB, OB) {
-       const GB = OB.beginComputePass({
-         timestampWrites: {
-           querySet: BB.querySet,
-           endOfPassWriteIndex: 1
-         }
-       });
-       GB.setPipeline(BB.markerPipeline), GB.dispatchWorkgroups(1), GB.end()
+   },
+   54648: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "fogFragmentDeclaration",
+       NW = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/668.js` (Changed code · before: `L54-L69` → after: `L55-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6aR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-980e65f9d7267b10bf9a9341d3d0564bec8093aab2a1874e3e6f6ea0c664bd6a) · [After (L55-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/668.js#L55-L72) · [Before (L54-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/668.js#L54-L69)

```diff
- 
-     function jB(BB) {
-       if (BB.inFlight > 3) return;
-       const OB = BB.device,
-         GB = BB.pool.pop() ?? OB.createBuffer({
-           size: 16,
-           usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
-         }),
-         YB = OB.createCommandEncoder();
-       YB.resolveQuerySet(BB.querySet, 0, 2, BB.resolveBuf, 0), YB.copyBufferToBuffer(BB.resolveBuf, 0, GB, 0, 16), OB.queue.submit([YB.finish()]), BB.inFlight++, GB.mapAsync(GPUMapMode.READ).then((() => {
-         const OB = new BigInt64Array(GB.getMappedRange()),
-           YB = Number(OB[1] - OB[0]) / 1e6;
-         YB >= 0 && YB < 5e3 && (BB.lastMs = BB.lastMs > 0 ? .8 * BB.lastMs + .2 * YB : YB), GB.unmap(), BB.pool.push(GB), BB.inFlight--
-       }), (() => {
-         BB.inFlight--
-       }))
+   },
+   54719: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       colorPixelShaderWGSL: () => ZW
+     });
+     var mW = OW(41392),
+       EW = OW(54641),
+       NW = OW(54648),
+       PW = OW(54655),
+       LW = OW(54691);
+     const cW = "colorPixelShader",
+       wW = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
+     mW.c.ShadersStoreWGSL[cW] || (mW.c.ShadersStoreWGSL[cW] = wW);
+     const tW = [EW.d, NW.d, PW.b, LW.b];
+     for (const xW of tW) mW.c.IncludesShadersStoreWGSL[xW.name] || (mW.c.IncludesShadersStoreWGSL[xW.name] = xW.shader);
+     const ZW = {
+ ... (2 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/669.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/669.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93)

#### 1. `bundles/preprod.bloxd.io/chunks/js/669.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/669.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/669.js#L4-L7)

```diff
-   63977: (BB, OB, GB) => {
-     function YB(BB, OB) {
-       for (const GB of BB._frameGraph._tasks)
-         if (GB?._config && GB._colorAttachment && (GB._config.rt === OB.scRT || GB._config.rst === OB.scRT)) return GB
+   54711: (WW, iW, OW) => {
+     function mW(WW) {
+       return Math.floor(WW / 8)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/669.js` (Changed code · before: `L10-L21` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/669.js#L9-L10) · [Before (L10-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/669.js#L10-L21)

```diff
-     function DB(BB, OB) {
-       const GB = BB._renderingContexts[BB._renderingContexts.length - 1];
-       if (!GB?._frameGraph) return;
-       const DB = YB(OB, BB);
-       if (!DB) return;
-       if (1 === BB.msaaSamples) return void(DB._config.clr = !1);
-       const QB = DB.enabled;
-       DB._config.clr = !0, DB.enabled = !1, OB._beforeRender.unshift((() => {
-         const OB = YB(GB, BB),
-           oB = OB?._config.rst === BB.scRT && OB._config.rt._colorView;
-         DB.enabled = !!oB && QB, DB._config.clr = !oB, oB && (DB._colorAttachment.view = oB)
-       }))
+     function EW(WW) {
+       return 1 << WW % 8
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/669.js` (Changed code · before: `L23-L25` → after: `L12-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8484d1cbeb77dc605ec90bdbaa3e237b118381fa8922d1fb72a4cd122445fa93) · [After (L12-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/669.js#L12-L64) · [Before (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/669.js#L23-L25)

```diff
-     GB.r(OB), GB.d(OB, {
-       configureSwapchainOverlayScene: () => DB
-     })
+     OW.d(iW, {
+       OptimizeIndices: () => PW
+     });
+     class NW {
+       constructor(WW) {
+         this.size = WW, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
+       }
+       get(WW) {
+         if (WW >= this.size) throw new RangeError("Bit index out of range");
+         const iW = mW(WW),
+           OW = EW(WW);
+         return 0 !== (this._byteArray[iW] & OW)
+       }
+       set(WW, iW) {
+         if (WW >= this.size) throw new RangeError("Bit index out of range");
+         const OW = mW(WW),
+ ... (37 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/670.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/670.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00fc5c4ea111cdcb7b74b51c8a336ad4eb82be2e3ffbf931d219180d7ca9f44b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/670.js` (Changed code · before: `L4-L75` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00fc5c4ea111cdcb7b74b51c8a336ad4eb82be2e3ffbf931d219180d7ca9f44bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-00fc5c4ea111cdcb7b74b51c8a336ad4eb82be2e3ffbf931d219180d7ca9f44b) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/670.js#L4-L11) · [Before (L4-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/670.js#L4-L75)

```diff
-   63980: (BB, OB, GB) => {
-     GB.d(OB, {
-       createShadowTask: () => QB
-     });
-     var YB = null;
- 
-     function DB(BB) {
-       return YB?.get(BB)
-     }
- 
-     function QB(BB, OB) {
-       const GB = new Set;
-       0;
-       const YB = {
-         name: "KP",
-         engine: BB,
- ... (56 more removed lines; see GitHub link above)
+   64402: (WW, iW, OW) => {
+     var mW;
+     OW.r(iW), OW.d(iW, {
+         ShaderLanguage: () => mW
+       }),
+       function(WW) {
+         WW[WW.GLSL = 0] = "GLSL", WW[WW.WGSL = 1] = "WGSL"
+       }(mW || (mW = {}))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/671.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/671.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59)

#### 1. `bundles/preprod.bloxd.io/chunks/js/671.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/671.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/671.js#L4)

```diff
-   63982: (BB, OB, GB) => {
+   64405: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/671.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/671.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/671.js#L6-L9)

```diff
-       A: () => JB,
-       B: () => PB,
-       C: () => MB,
-       X: () => zB
+       postprocessVertexShader: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/671.js` (Changed code · before: `L11-L288` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-95795c93699a3d9986c9e50fe07895f3634f608706b31e36e9f43039b2a1be59) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/671.js#L8-L14) · [Before (L11-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/671.js#L11-L288)

```diff
-     var YB = GB(44838),
-       DB = (BB, OB) => BB.order - OB.order;
- 
-     function QB(BB, OB, GB) {
-       BB.pendingDisposers.set(OB, GB)
-     }
- 
-     function oB(BB, OB, GB) {
-       GB && BB.pendingDisposers.get(OB) === GB && BB.pendingDisposers.delete(OB)
-     }
-     var jB = null,
-       yB = null;
- 
-     function JB(BB, OB, GB, YB) {
-       if (!OB || GB.material !== OB) return YB ?? Promise.resolve();
-       const DB = PB(BB, OB._buildGroup, GB);
- ... (262 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "postprocessVertexShader",
+       NW = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/672.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/672.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989)

#### 1. `bundles/preprod.bloxd.io/chunks/js/672.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/672.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/672.js#L4)

```diff
-   64012: (BB, OB, GB) => {
+   64422: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/672.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/672.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/672.js#L6)

```diff
-       postprocessVertexShaderWGSL: () => oB
+       WorldCodeAiOutOfUsage: () => LW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/672.js` (Changed code · before: `L8-L14` → after: `L8-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c84cf67ed71fad5d83c6bf4f130d29d7b6a5d793abf02a9c6df281709515989) · [After (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/672.js#L8-L30) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/672.js#L8-L14)

```diff
-     var YB = GB(40864);
-     const DB = "postprocessVertexShader",
-       QB = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
-     YB.b.ShadersStoreWGSL[DB] || (YB.b.ShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(1172),
+       EW = OW(3210),
+       NW = OW(1532),
+       PW = OW(1283);
+ 
+     function LW(WW) {
+       let {
+         onGetSuperRank: iW
+       } = WW;
+       const {
+         t: OW
+       } = (0, mW.B)(), LW = (0, EW.o)(Date.now()), cW = OW(LW.nameKey);
+       return (0, PW.jsxs)("div", {
+         className: "WorldCodeAiOutOfUsage",
+         children: [(0, PW.jsx)("p", {
+           className: "WorldCodeAiOutOfUsageText",
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/673.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/673.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/673.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/673.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/673.js#L4)

```diff
-   64021: (BB, OB, GB) => {
+   64439: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/673.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/673.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/673.js#L6)

```diff
-       lod3DPixelShader: () => oB
+       particlesPixelShader: () => KW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/673.js` (Changed code · before: `L8-L11` → after: `L8-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210036683b79225a4ba0bb1c8355564e47180d97d4b11b506b95c4c4bd9719e1) · [After (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/673.js#L8-L31) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/673.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "lod3DPixelShader",
-       QB = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
-     YB.b.ShadersStore[DB] || (YB.b.ShadersStore[DB] = QB);
+     var mW = OW(41392),
+       EW = OW(54254),
+       NW = OW(54257),
+       PW = OW(54343),
+       LW = OW(54308),
+       cW = OW(54166),
+       wW = OW(54093),
+       tW = OW(54314),
+       ZW = OW(54347),
+       xW = OW(54352),
+       lW = OW(54377),
+       AW = OW(54380);
+     const bW = "geometryRenderingFragment",
+       jW = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
+     mW.c.IncludesShadersStore[bW] || (mW.c.IncludesShadersStore[bW] = jW);
+     const UW = {
+ ... (8 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/674.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/674.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/674.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/674.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/674.js#L4-L6)

```diff
-   64023: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       lodCubePixelShader: () => oB
+   64470: (WW, iW, OW) => {
+     OW.d(iW, {
+       allocateF64Mat4: () => EW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/674.js` (Changed code · before: `L8-L14` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f9c308e6d1b8a15900509d7e3777bd674a2db9248252b8e61c47413d79c942f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/674.js#L8-L11) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/674.js#L8-L14)

```diff
-     var YB = GB(40864);
-     const DB = "lodCubePixelShader",
-       QB = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
-     YB.b.ShadersStore[DB] || (YB.b.ShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(53896);
+ 
+     function EW() {
+       return new mW.g(16)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/675.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/675.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/675.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/675.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/675.js#L4)

```diff
-   64025: (BB, OB, GB) => {
+   64479: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/675.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/675.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/675.js#L6)

```diff
-       lodPixelShader: () => oB
+       applyLightFoOffset: () => PW,
+       getFloatingOriginOffset: () => EW,
+       lightFoVersion: () => NW,
+       wrapRenderableForFO: () => LW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/675.js` (Changed code · before: `L8-L14` → after: `L11-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fb808d8cdbbf6b86d85c124fbf2b7756d49ded864d09b6990ceea6377b54cdd6) · [After (L11-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/675.js#L11-L57) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/675.js#L8-L14)

```diff
-     var YB = GB(40864);
-     const DB = "lodPixelShader",
-       QB = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
-     YB.b.ShadersStore[DB] || (YB.b.ShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(53901);
+ 
+     function EW(WW) {
+       const iW = WW.camera;
+       if (!iW) return {
+         x: 0,
+         y: 0,
+         z: 0
+       };
+       const OW = iW.worldMatrix;
+       return {
+         x: OW[12],
+         y: OW[13],
+         z: OW[14]
+       }
+     }
+ ... (31 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/676.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/676.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/676.js` (Changed code · before: `L4` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/676.js#L4-L19) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/676.js#L4)

```diff
-   64031: (BB, OB, GB) => {
+   64482: (WW, iW, OW) => {
+     function mW(WW, iW, OW, mW, EW, NW, PW) {
+       const LW = iW,
+         cW = mW,
+         wW = OW;
+       WW[wW + 0] = LW[cW + 0], WW[wW + 1] = LW[cW + 1], WW[wW + 2] = LW[cW + 2], WW[wW + 3] = LW[cW + 3], WW[wW + 4] = LW[cW + 4], WW[wW + 5] = LW[cW + 5], WW[wW + 6] = LW[cW + 6], WW[wW + 7] = LW[cW + 7], WW[wW + 8] = LW[cW + 8], WW[wW + 9] = LW[cW + 9], WW[wW + 10] = LW[cW + 10 … [truncated]
+     }
+ 
+     function EW(WW) {
+       return (iW, OW, EW, NW) => {
+         const PW = WW.camera;
+         if (!PW) return void mW(iW, OW, EW, NW, 0, 0, 0);
+         const LW = PW.worldMatrix;
+         mW(iW, OW, EW, NW, LW[12], LW[13], LW[14])
+       }
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/676.js` (Changed code · before: `L6-L15` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76f7b04c6bf192f0ec64508946b21fbb806011650bc52f51f70b61b43430d8a0) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/676.js#L21-L23) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/676.js#L6-L15)

```diff
-       lod3DPixelShaderWGSL: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "lod3DPixelShader",
-       QB = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
-     YB.b.ShadersStoreWGSL[DB] || (YB.b.ShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
+       makePackMeshWorld: () => EW,
+       packMat4IntoF32WithOffset: () => mW
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/677.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/677.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/677.js` (Changed code · before: `L4` → after: `L4-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1) · [After (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/677.js#L4-L76) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/677.js#L4)

```diff
-   64034: (BB, OB, GB) => {
+   64486: (WW, iW, OW) => {
+     function mW(WW) {
+       return WW.features.has("timestamp-query")
+     }
+ 
+     function EW(WW) {
+       return mW(WW) ? {
+         device: WW,
+         markerPipeline: WW.createComputePipeline({
+           layout: "auto",
+           compute: {
+             module: WW.createShaderModule({
+               code: "@compute @workgroup_size(1) fn main() {}"
+             }),
+             entryPoint: "main"
+           }
+ ... (57 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/677.js` (Changed code · before: `L6-L15` → after: `L78-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-844ffb0617872cc56d1d99d3496f4e88714bfd07bdfcac9a888a20d6090438c1) · [After (L78-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/677.js#L78-L84) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/677.js#L6-L15)

```diff
-       lodCubePixelShaderWGSL: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "lodCubePixelShader",
-       QB = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
-     YB.b.ShadersStoreWGSL[DB] || (YB.b.ShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
+       createGpuFrameTimer: () => EW,
+       destroyGpuFrameTimer: () => cW,
+       gpuFrameTimerBegin: () => NW,
+       gpuFrameTimerEnd: () => PW,
+       gpuFrameTimerResolve: () => LW,
+       gpuTimingSupportedFor: () => mW
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/678.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/678.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/678.js` (Changed code · before: `L4` → after: `L4-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1d) · [After (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/678.js#L4-L22) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/678.js#L4)

```diff
-   64042: (BB, OB, GB) => {
+   64490: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       for (const OW of WW._frameGraph._tasks)
+         if (OW?._config && OW._colorAttachment && (OW._config.rt === iW.scRT || OW._config.rst === iW.scRT)) return OW
+     }
+ 
+     function EW(WW, iW) {
+       const OW = WW._renderingContexts[WW._renderingContexts.length - 1];
+       if (!OW?._frameGraph) return;
+       const EW = mW(iW, WW);
+       if (!EW) return;
+       if (1 === WW.msaaSamples) return void(EW._config.clr = !1);
+       const NW = EW.enabled;
+       EW._config.clr = !0, EW.enabled = !1, iW._beforeRender.unshift((() => {
+         const iW = mW(OW, WW),
+           PW = iW?._config.rst === WW.scRT && iW._config.rt._colorView;
+ ... (3 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/678.js` (Changed code · before: `L6-L15` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ef83ebabfc71dcb61aa7c65a666a3735ed7bb631f4ed3b291007fe78c8083d1d) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/678.js#L24-L25) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/678.js#L6-L15)

```diff
-       lodPixelShaderWGSL: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "lodPixelShader",
-       QB = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
-     YB.b.ShadersStoreWGSL[DB] || (YB.b.ShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
+       configureSwapchainOverlayScene: () => EW
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/679.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/679.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/679.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/679.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/679.js#L4-L6)

```diff
-   64046: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       passPixelShaderWGSL: () => oB
+   64497: (WW, iW, OW) => {
+     OW.d(iW, {
+       createShadowTask: () => NW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/679.js` (Changed code · before: `L8-L14` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-213f3c79187874beb7e4cb0bcf39c2c1069710a9d0772ac702803a3138d9663a) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/679.js#L8-L74) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/679.js#L8-L14)

```diff
-     var YB = GB(40864);
-     const DB = "passPixelShader",
-       QB = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
-     YB.b.ShadersStoreWGSL[DB] || (YB.b.ShadersStoreWGSL[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = null;
+ 
+     function EW(WW) {
+       return mW?.get(WW)
+     }
+ 
+     function NW(WW, iW) {
+       const OW = new Set;
+       0;
+       const mW = {
+         name: "nZ",
+         engine: WW,
+         rb: iW,
+         _passes: [],
+         async _preload() {
+           const WW = [];
+ ... (51 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/680.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/680.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/680.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/680.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/680.js#L4)

```diff
-   64051: (BB, OB, GB) => {
+   64503: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/680.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094c) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/680.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/680.js#L6)

```diff
-       passPixelShader: () => oB
+       A: () => wW,
+       B: () => ZW,
+       C: () => tW,
+       X: () => xW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/680.js` (Changed code · before: `L8-L14` → after: `L11-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-80b5e33e3ca491042217b863177608f8c99d89e0572ce88b6b2758ec2e0f094c) · [After (L11-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/680.js#L11-L288) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/680.js#L8-L14)

```diff
-     var YB = GB(40864);
-     const DB = "passPixelShader",
-       QB = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
-     YB.b.ShadersStore[DB] || (YB.b.ShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(53885),
+       EW = (WW, iW) => WW.order - iW.order;
+ 
+     function NW(WW, iW, OW) {
+       WW.pendingDisposers.set(iW, OW)
+     }
+ 
+     function PW(WW, iW, OW) {
+       OW && WW.pendingDisposers.get(iW) === OW && WW.pendingDisposers.delete(iW)
+     }
+     var LW = null,
+       cW = null;
+ 
+     function wW(WW, iW, OW, mW) {
+       if (!iW || OW.material !== iW) return mW ?? Promise.resolve();
+       const EW = ZW(WW, iW._buildGroup, OW);
+ ... (262 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/681.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/681.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/681.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/681.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/681.js#L4)

```diff
-   64053: (BB, OB, GB) => {
+   64531: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/681.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/681.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/681.js#L6)

```diff
-       passCubePixelShaderWGSL: () => oB
+       postprocessVertexShaderWGSL: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/681.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e37ffb8cef19627001cf56e5d89c8a12e3dabcd4e7d6519e335c00779f382df7) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/681.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/681.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "passCubePixelShader",
-       QB = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
-     YB.b.ShadersStoreWGSL[DB] || (YB.b.ShadersStoreWGSL[DB] = QB);
+     var mW = OW(41392);
+     const EW = "postprocessVertexShader",
+       NW = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
+     mW.c.ShadersStoreWGSL[EW] || (mW.c.ShadersStoreWGSL[EW] = NW);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/682.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/682.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/682.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/682.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/682.js#L4)

```diff
-   64055: (BB, OB, GB) => {
+   64554: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/682.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/682.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/682.js#L6)

```diff
-       passCubePixelShader: () => oB
+       lod3DPixelShader: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/682.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-83a8300a62d018289fea9693a88bba1902dfb69c3b7e7f331c9aa4638a56340e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/682.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/682.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "passCubePixelShader",
-       QB = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
-     YB.b.ShadersStore[DB] || (YB.b.ShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "lod3DPixelShader",
+       NW = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
+     mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/683.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/683.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330)

#### 1. `bundles/preprod.bloxd.io/chunks/js/683.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-770768ea390e35c9b10b57dbb54ac26e39d26c7c3979a8801a9f25bea9eb8330) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/683.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/683.js#L4)

```diff
-   64093: (BB, OB, GB) => {
+   64561: (WW, iW, OW) => {
```
