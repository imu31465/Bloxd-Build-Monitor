# Changed — Bundle Modifications Report (Part 018 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `18 / 50` (**305** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 017](part-017.md) · [Part 019 →](part-019.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/329.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/329.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe)

#### 17. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L71)

```diff
-       e: () => mq
+       d: () => nC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L73-L76)

```diff
-     var Yq = gq(39617);
-     const lq = "clipPlaneVertexDeclaration",
-       Oq = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "logDepthVertex",
+       bC = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L82-L84` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L82-L84) · [Before (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L82-L84)

```diff
-   42137: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
+   60981: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       particlesVertexShader: () => MC
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L86-L375` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L86-L97) · [Before (L86-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L86-L375)

```diff
-     var Yq = gq(39617);
-     const lq = "fogVertex",
-       Oq = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42048: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "fogVertexDeclaration",
-       Oq = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
- ... (274 more removed lines; see GitHub link above)
+     var QC = ZC(39674),
+       wC = ZC(41778),
+       bC = ZC(41787),
+       nC = ZC(41816),
+       fC = ZC(41875),
+       oC = ZC(41881),
+       qC = ZC(41894);
+     const FC = "particlesVertexShader",
+       WC = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
+     QC.b.ShadersStore[FC] || (QC.b.ShadersStore[FC] = WC);
+     const NC = [wC.d, bC.c, nC.c, fC.d, oC.d, qC.d];
+     for (const gC of NC) QC.b.IncludesShadersStore[gC.name] || (QC.b.IncludesShadersStore[gC.name] = gC.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/330.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/330.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L4)

```diff
-   42267: (qq, Eq, gq) => {
+   41875: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "clipPlaneFragment",
-       Oq = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "clipPlaneVertex",
+       bC = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L17-L43` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L17) · [Before (L17-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L17-L43)

```diff
-   42253: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "clipPlaneFragmentDeclaration",
-       Oq = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42204: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
- ... (11 more removed lines; see GitHub link above)
+   41778: (CC, zC, ZC) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L47-L50` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L21-L24) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L47-L50)

```diff
-     var Yq = gq(39617);
-     const lq = "depthPrePass",
-       Oq = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "clipPlaneVertexDeclaration",
+       bC = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L56` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L30) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L56)

```diff
-   42291: (qq, Eq, gq) => {
+   41881: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L58` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L32) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L58)

```diff
-       b: () => mq
+       d: () => nC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L60-L63` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L34-L37) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L60-L63)

```diff
-     var Yq = gq(39617);
-     const lq = "fogFragment",
-       Oq = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "fogVertex",
+       bC = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L69` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L43) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L69)

```diff
-   42258: (qq, Eq, gq) => {
+   41787: (CC, zC, ZC) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L73-L76` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L47-L50) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L73-L76)

```diff
-     var Yq = gq(39617);
-     const lq = "fogFragmentDeclaration",
-       Oq = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "fogVertexDeclaration",
+       bC = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L82` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L56) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L82)

```diff
-   42228: (qq, Eq, gq) => {
+   41816: (CC, zC, ZC) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L86-L125` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L60) · [Before (L86-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L86-L125)

```diff
-     var Yq = gq(39617);
-     const lq = "imageProcessingDeclaration",
-       Oq = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42231: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "imageProcessingFunctions",
-       Oq = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
- ... (24 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L127-L141` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L62-L63) · [Before (L127-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L127-L141)

```diff
-       Oq = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42289: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "logDepthFragment",
-       Oq = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+       bC = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L147-L173` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L69) · [Before (L147-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L147-L173)

```diff
-   42196: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "ltcHelperFunctions",
-       Oq = "fn LTCUv(N: vec3f,V: vec3f,roughness: f32)->vec2f {var LUTSIZE: f32=64.0;var LUTSCALE: f32=( LUTSIZE-1.0 )/LUTSIZE;var LUTBIAS:f32=0.5/LUTSIZE;var dotNV:f32=saturate( dot( N,V ) );var uv:vec2f=vec2f( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}\nfn … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42029: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
- ... (11 more removed lines; see GitHub link above)
+   41894: (CC, zC, ZC) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L177-L180` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L73-L76) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L177-L180)

```diff
-     var Yq = gq(39617);
-     const lq = "meshBlendTagFragmentOutput",
-       Oq = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "logDepthVertex",
+       bC = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L186-L293` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L82-L84) · [Before (L186-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L186-L293)

```diff
-   41979: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "meshUboDeclaration",
-       Oq = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42172: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
- ... (92 more removed lines; see GitHub link above)
+   60990: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       skyVertexShader: () => MC
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L295-L298` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/330.js#L86-L97) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/330.js#L295-L298)

```diff
-     var Yq = gq(39617);
-     const lq = "textureRepetitionFunctions",
-       Oq = "#if TEXTURE_REPETITION_MODE>0\nfn _texRepHash4(p: vec2f)->vec4f {return fract(sin(vec4f(\n1.0+dot(p,vec2f(37.0,17.0)),\n2.0+dot(p,vec2f(11.0,47.0)),\n3.0+dot(p,vec2f(41.0,29.0)),\n4.0+dot(p,vec2f(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nfn _te … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674),
+       wC = ZC(41816),
+       bC = ZC(41778),
+       nC = ZC(41787),
+       fC = ZC(41875),
+       oC = ZC(41894),
+       qC = ZC(41881);
+     const FC = "skyVertexShader",
+       WC = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
+     QC.b.ShadersStore[FC] || (QC.b.ShadersStore[FC] = WC);
+     const NC = [wC.c, bC.d, nC.c, fC.d, oC.d, qC.d];
+     for (const gC of NC) QC.b.IncludesShadersStore[gC.name] || (QC.b.IncludesShadersStore[gC.name] = gC.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/331.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/331.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824)

#### 1. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L4)

```diff
-   42267: (qq, Eq, gq) => {
+   42020: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L6)

```diff
-       d: () => mq
+       b: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "clipPlaneFragment",
-       Oq = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "bumpFragment",
+       bC = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L17)

```diff
-   42253: (qq, Eq, gq) => {
+   41988: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L19)

```diff
-       c: () => mq
+       d: () => nC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L21-L24)

```diff
-     var Yq = gq(39617);
-     const lq = "clipPlaneFragmentDeclaration",
-       Oq = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     ZC(41961);
+     const wC = "bumpFragmentFunctions",
+       bC = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L30)

```diff
-   42291: (qq, Eq, gq) => {
+   41982: (CC, zC, ZC) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L32` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L33) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L32)

```diff
-       b: () => mq
+       e: () => nC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L34-L37)

```diff
-     var Yq = gq(39617);
-     const lq = "fogFragment",
-       Oq = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "bumpFragmentMainFunctions",
+       bC = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L43)

```diff
-   42258: (qq, Eq, gq) => {
+   41946: (CC, zC, ZC) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L45` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L46) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L45)

```diff
-       c: () => mq
+       b: () => nC
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L47-L50)

```diff
-     var Yq = gq(39617);
-     const lq = "fogFragmentDeclaration",
-       Oq = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "clusteredLightingFunctions",
+       bC = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L56` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L57) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L56)

```diff
-   42e3: (qq, Eq, gq) => {
+   42029: (CC, zC, ZC) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L58` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L59) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L58)

```diff
-       b: () => mq
+       e: () => nC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L60-L63` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L61-L64) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L60-L63)

```diff
-     var Yq = gq(39617);
-     const lq = "helperFunctions",
-       Oq = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "decalFragment",
+       bC = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L69-L95` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L70) · [Before (L69-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L69-L95)

```diff
-   42228: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "imageProcessingDeclaration",
-       Oq = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42231: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
- ... (11 more removed lines; see GitHub link above)
+   42036: (CC, zC, ZC) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L99-L189` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/331.js#L74-L77) · [Before (L99-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/331.js#L99-L189)

```diff
-     var Yq = gq(39617);
-     const lq = "logDepthDeclaration",
-       Oq = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42289: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "logDepthFragment",
-       Oq = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
- ... (75 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "lightFragment",
+       bC = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/332.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/332.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782)

#### 1. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L4)

```diff
-   42267: (qq, Eq, gq) => {
+   42013: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L6)

```diff
-       d: () => mq
+       c: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L8)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L10-L11)

```diff
-       Oq = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+       bC = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L17)

```diff
-   42253: (qq, Eq, gq) => {
+   41996: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L19)

```diff
-       c: () => mq
+       b: () => nC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L21)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L23-L24)

```diff
-       Oq = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+       bC = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L30)

```diff
-   42291: (qq, Eq, gq) => {
+   42041: (CC, zC, ZC) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L32)

```diff
-       b: () => mq
+       c: () => nC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L34)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L36-L37)

```diff
-       Oq = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+       bC = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L43)

```diff
-   42258: (qq, Eq, gq) => {
+   42005: (CC, zC, ZC) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L47)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L49-L50` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L49-L50) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L49-L50)

```diff
-       Oq = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+       bC = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L56-L58)

```diff
-   42e3: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
+   42370: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       colorPixelShader: () => WC
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L60-L118` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/332.js#L60-L69) · [Before (L60-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/332.js#L60-L118)

```diff
-     var Yq = gq(39617);
-     const lq = "helperFunctions",
-       Oq = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42074: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "logDepthDeclaration",
-       Oq = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
- ... (43 more removed lines; see GitHub link above)
+     var QC = ZC(39674),
+       wC = ZC(41996),
+       bC = ZC(42005),
+       nC = ZC(42013),
+       fC = ZC(42041);
+     const oC = "colorPixelShader",
+       qC = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
+     QC.b.ShadersStore[oC] || (QC.b.ShadersStore[oC] = qC);
+     const FC = [wC.b, bC.c, nC.c, fC.c];
+     for (const NC of FC) QC.b.IncludesShadersStore[NC.name] || (QC.b.IncludesShadersStore[NC.name] = NC.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/333.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/333.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/333.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/333.js#L4)

```diff
-   42e3: (qq, Eq, gq) => {
+   42186: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/333.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/333.js#L6)

```diff
-       b: () => mq
+       d: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/333.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/333.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "helperFunctions",
-       Oq = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "bumpVertex",
+       bC = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L17` → after: `L17-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L17-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/333.js#L17-L70) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/333.js#L17)

```diff
-   61357: (qq, Eq, gq) => {
+   42103: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "bumpVertexDeclaration",
+       bC = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42067: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+ ... (38 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L19` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/333.js#L72) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/333.js#L19)

```diff
-       rgbdDecodePixelShaderWGSL: () => Aq
+       defaultVertexShaderWGSL: () => jC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L21-L27` → after: `L74-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L74-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/333.js#L74-L120) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/333.js#L21-L27)

```diff
-     var Yq = gq(39617),
-       lq = gq(42e3);
-     const Oq = "rgbdDecodePixelShader",
-       mq = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
-     Yq.d.ShadersStoreWGSL[Oq] || (Yq.d.ShadersStoreWGSL[Oq] = mq);
-     const xq = [lq.b];
-     for (const cq of xq) Yq.d.IncludesShadersStoreWGSL[cq.name] || (Yq.d.IncludesShadersStoreWGSL[cq.name] = cq.shader);
+     var QC = ZC(39674),
+       wC = ZC(42058),
+       bC = ZC(42063),
+       nC = ZC(42067),
+       fC = ZC(42074),
+       oC = ZC(42076),
+       qC = ZC(42078),
+       FC = ZC(42080),
+       WC = ZC(42082),
+       NC = ZC(42090),
+       MC = ZC(42092),
+       gC = ZC(42100),
+       SC = ZC(42103),
+       pC = ZC(42106),
+       PC = ZC(42112);
+     const GC = "lightVxFragmentDeclaration",
+ ... (31 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/334.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/334.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae)

#### 1. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/334.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/334.js#L4)

```diff
-   42e3: (qq, Eq, gq) => {
+   42082: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/334.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/334.js#L6)

```diff
-       b: () => mq
+       d: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/334.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/334.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "helperFunctions",
-       Oq = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "instancesDeclaration",
+       bC = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L17` → after: `L17-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L17-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/334.js#L17-L56) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/334.js#L17)

```diff
-   61384: (qq, Eq, gq) => {
+   42159: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "instancesVertex",
+       bC = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42063: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L19` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/334.js#L58) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/334.js#L19)

```diff
-       rgbdEncodePixelShaderWGSL: () => Aq
+       greasedLineVertexShaderWGSL: () => WC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L21-L27` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/334.js#L60-L69) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/334.js#L21-L27)

```diff
-     var Yq = gq(39617),
-       lq = gq(42e3);
-     const Oq = "rgbdEncodePixelShader",
-       mq = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
-     Yq.d.ShadersStoreWGSL[Oq] || (Yq.d.ShadersStoreWGSL[Oq] = mq);
-     const xq = [lq.b];
-     for (const cq of xq) Yq.d.IncludesShadersStoreWGSL[cq.name] || (Yq.d.IncludesShadersStoreWGSL[cq.name] = cq.shader);
+     var QC = ZC(39674),
+       wC = ZC(42082),
+       bC = ZC(42058),
+       nC = ZC(42063),
+       fC = ZC(42159);
+     const oC = "greasedLineVertexShader",
+       qC = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
+     QC.b.ShadersStoreWGSL[oC] || (QC.b.ShadersStoreWGSL[oC] = qC);
+     const FC = [wC.d, bC.c, nC.c, fC.d];
+     for (const NC of FC) QC.b.IncludesShadersStoreWGSL[NC.name] || (QC.b.IncludesShadersStoreWGSL[NC.name] = NC.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/335.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/335.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/335.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/335.js#L4)

```diff
-   42106: (qq, Eq, gq) => {
+   42067: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/335.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/335.js#L6)

```diff
-       e: () => mq
+       d: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/335.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/335.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "bakedVertexAnimation",
-       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     ZC(42058), ZC(42063);
+     const wC = "defaultUboDeclaration",
+       bC = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/335.js#L18) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/335.js#L17)

```diff
-   42012: (qq, Eq, gq) => {
+   42076: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L21-L24` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/335.js#L22-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/335.js#L21-L24)

```diff
-     var Yq = gq(39617);
-     const lq = "bakedVertexAnimationDeclaration",
-       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "helperFunctions",
+       bC = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/335.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/335.js#L30)

```diff
-   42007: (qq, Eq, gq) => {
+   42058: (CC, zC, ZC) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L32` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/335.js#L33) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/335.js#L32)

```diff
-       e: () => mq
+       c: () => nC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/335.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/335.js#L34-L37)

```diff
-     var Yq = gq(39617);
-     const lq = "bonesDeclaration",
-       Oq = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "sceneUboDeclaration",
+       bC = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L43-L45` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/335.js#L44-L46) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/335.js#L43-L45)

```diff
-   42101: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
+   42221: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       defaultPixelShaderWGSL: () => kC
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L47-L50` → after: `L48-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/335.js#L48-L69) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/335.js#L47-L50)

```diff
-     var Yq = gq(39617);
-     const lq = "bonesVertex",
-       Oq = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674),
+       wC = ZC(42058),
+       bC = ZC(42063),
+       nC = ZC(42067),
+       fC = ZC(42223),
+       oC = ZC(42226),
+       qC = ZC(42229),
+       FC = ZC(42092),
+       WC = ZC(42076),
+       NC = ZC(42235),
+       MC = ZC(42239),
+       gC = ZC(42245);
+     const SC = "clusteredLightingCompute",
+       pC = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
+     QC.b.IncludesShadersStoreWGSL[SC] || (QC.b.IncludesShadersStoreWGSL[SC] = pC);
+     const PC = {
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L54-L63` → after: `L73-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/335.js#L73-L78) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/335.js#L54-L63)

```diff
-     }
-   },
-   42134: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "clipPlaneVertex",
-       Oq = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     };
+     var xC = ZC(42253),
+       JC = ZC(42255);
+     const IC = "fresnelFunction",
+       iC = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     QC.b.IncludesShadersStoreWGSL[IC] || (QC.b.IncludesShadersStoreWGSL[IC] = iC);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L67-L76` → after: `L82-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L82-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/335.js#L82-L97) · [Before (L67-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/335.js#L67-L76)

```diff
-     }
-   },
-   42041: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "clipPlaneVertexDeclaration",
-       Oq = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     };
+     var eC = ZC(42260),
+       hC = ZC(42265),
+       KC = ZC(42268),
+       YC = ZC(42274),
+       dC = ZC(42276),
+       mC = ZC(42279),
+       HC = ZC(42284),
+       EC = ZC(42135),
+       lC = ZC(42290),
+       XC = ZC(42296),
+       cC = ZC(42303),
+       uC = ZC(42309);
+     const rC = "defaultFragmentAlpha",
+       sC = "#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpa … [truncated]
+     QC.b.IncludesShadersStoreWGSL[rC] || (QC.b.IncludesShadersStoreWGSL[rC] = sC);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L80-L167` → after: `L101-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L101-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/335.js#L101-L112) · [Before (L80-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/335.js#L80-L167)

```diff
-     }
-   },
-   42137: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "fogVertex",
-       Oq = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42048: (qq, Eq, gq) => {
- ... (72 more removed lines; see GitHub link above)
+     };
+     var aC = ZC(42312),
+       tC = ZC(42319),
+       DC = ZC(42322),
+       jC = ZC(42328),
+       yC = ZC(42334),
+       LC = ZC(42343);
+     const UC = "defaultPixelShader",
+       BC = "#include<defaultUboDeclaration>\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && … [truncated]
+     QC.b.ShadersStoreWGSL[UC] || (QC.b.ShadersStoreWGSL[UC] = BC);
+     const OC = [wC.c, bC.c, nC.d, fC.e, oC.b, qC.e, FC.b, WC.b, NC.d, MC.d, gC.d, PC, AC, xC.d, JC.d, vC, eC.d, hC.d, KC.b, YC.c, dC.b, mC.c, HC.b, EC.c, lC.d, XC.b, cC.c, uC.e, TC, aC.e, tC.e, DC.c, jC.d, yC.e, LC.d];
+     for (const VC of OC) QC.b.IncludesShadersStoreWGSL[VC.name] || (QC.b.IncludesShadersStoreWGSL[VC.name] = VC.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/336.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/336.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/336.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/336.js#L4)

```diff
-   42125: (qq, Eq, gq) => {
+   42076: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/336.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/336.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "bumpVertex",
-       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "helperFunctions",
+       bC = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/336.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/336.js#L17)

```diff
-   42037: (qq, Eq, gq) => {
+   61291: (CC, zC, ZC) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/336.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/336.js#L21-L24)

```diff
-     var Yq = gq(39617);
-     const lq = "bumpVertexDeclaration",
-       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "pbrBRDFFunctions",
+       bC = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/336.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/336.js#L30)

```diff
-   61603: (qq, Eq, gq) => {
+   42058: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/336.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/336.js#L32)

```diff
-       d: () => mq
+       c: () => nC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L34-L102` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/336.js#L34-L37) · [Before (L34-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/336.js#L34-L102)

```diff
-     var Yq = gq(39617);
-     const lq = "harmonicsFunctions",
-       Oq = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   61593: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     gq(41973), gq(41979);
-     const lq = "pbrUboDeclaration",
- ... (53 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "sceneUboDeclaration",
+       bC = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/337.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/337.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L4-L8` → after: `L4-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L4-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/337.js#L4-L73) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/337.js#L4-L8)

```diff
-   42134: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
+   42172: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "bakedVertexAnimation",
+       bC = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42080: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+ ... (54 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L11-L21` → after: `L76-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/337.js#L76-L86) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/337.js#L11-L21)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42041: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42106: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L24-L82` → after: `L89-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L89-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/337.js#L89-L199) · [Before (L24-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/337.js#L24-L82)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42137: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "fogVertex",
-       Oq = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
- ... (43 more removed lines; see GitHub link above)
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   61300: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "harmonicsFunctions",
+       bC = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+ ... (95 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L84-L97` → after: `L201-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L201-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/337.js#L201-L223) · [Before (L84-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/337.js#L84-L97)

```diff
-       particlesVertexShaderWGSL: () => Nq
-     });
-     var Yq = gq(39617),
-       lq = gq(42041),
-       Oq = gq(42048),
-       mq = gq(42074),
-       xq = gq(42134),
-       Aq = gq(42137),
-       cq = gq(42157);
-     const uq = "particlesVertexShader",
-       Bq = "attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;\n#ifdef ANIMATESHEET\nattribute cellIndex: f32;\n#endif\n#ifndef BILLBOARD\nattribute direction: vec3f;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute direction: vec3f;\n#endif … [truncated]
-     Yq.d.ShadersStoreWGSL[uq] || (Yq.d.ShadersStoreWGSL[uq] = Bq);
-     const Wq = [lq.e, Oq.d, mq.d, xq.d, Aq.d, cq.d];
-     for (const aq of Wq) Yq.d.IncludesShadersStoreWGSL[aq.name] || (Yq.d.IncludesShadersStoreWGSL[aq.name] = aq.shader);
+       geometryVertexShaderWGSL: () => JC
+     });
+     var QC = ZC(39674),
+       wC = ZC(42078),
+       bC = ZC(42080),
+       nC = ZC(42120),
+       fC = ZC(42127),
+       oC = ZC(42082),
+       qC = ZC(42058),
+       FC = ZC(42106),
+       WC = ZC(61300),
+       NC = ZC(42152),
+       MC = ZC(42156),
+       gC = ZC(42159),
+       SC = ZC(42168),
+       pC = ZC(42172),
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/338.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/338.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31)

#### 1. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L4-L8` → after: `L4-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L4-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/338.js#L4-L60) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/338.js#L4-L8)

```diff
-   42134: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
+   42172: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "bakedVertexAnimation",
+       bC = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42080: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+ ... (41 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L11-L21` → after: `L63-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/338.js#L63-L73) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/338.js#L11-L21)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42041: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42106: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L24-L34` → after: `L76-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/338.js#L76-L86) · [Before (L24-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/338.js#L24-L34)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42137: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42202: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L37-L47` → after: `L89-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L89-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/338.js#L89-L99) · [Before (L37-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/338.js#L37-L47)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42048: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42112: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L50-L60` → after: `L102-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L102-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/338.js#L102-L151) · [Before (L50-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/338.js#L50-L60)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42074: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42082: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "instancesDeclaration",
+       bC = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+ ... (34 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L63-L73` → after: `L154-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L154-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/338.js#L154-L164) · [Before (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/338.js#L63-L73)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42157: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42214: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L76-L97` → after: `L167-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L167-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/338.js#L167-L375) · [Before (L76-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/338.js#L76-L97)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   61190: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       skyVertexShaderWGSL: () => Nq
-     });
-     var Yq = gq(39617),
-       lq = gq(42074),
-       Oq = gq(42041),
-       mq = gq(42048),
-       xq = gq(42134),
-       Aq = gq(42157),
- ... (6 more removed lines; see GitHub link above)
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42092: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "mainUVVaryingDeclaration",
+       bC = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+ ... (193 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/339.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/339.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L4)

```diff
-   42271: (qq, Eq, gq) => {
+   42296: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L6` → after: `L6-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L6-L19) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L6)

```diff
-       c: () => mq
+       b: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "clipPlaneFragment",
+       bC = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42284: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L8-L11` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L21-L24) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "bumpFragment",
-       Oq = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "clipPlaneFragmentDeclaration",
+       bC = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L21-L25` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L47-L50) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L21-L25)

```diff
-     var Yq = gq(39617);
-     gq(42216);
-     const lq = "bumpFragmentFunctions",
-       Oq = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "depthPrePass",
+       bC = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L31` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L56) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L31)

```diff
-   42240: (qq, Eq, gq) => {
+   42328: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L33` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L58) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L33)

```diff
-       c: () => mq
+       d: () => nC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L35-L38` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L60-L63) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L35-L38)

```diff
-     var Yq = gq(39617);
-     const lq = "bumpFragmentMainFunctions",
-       Oq = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "fogFragment",
+       bC = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L44` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L69) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L44)

```diff
-   42267: (qq, Eq, gq) => {
+   42290: (CC, zC, ZC) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L48-L51` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L73-L76) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L48-L51)

```diff
-     var Yq = gq(39617);
-     const lq = "clipPlaneFragment",
-       Oq = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "fogFragmentDeclaration",
+       bC = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L57` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L82) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L57)

```diff
-   42253: (qq, Eq, gq) => {
+   42265: (CC, zC, ZC) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L59` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L84) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L59)

```diff
-       c: () => mq
+       d: () => nC
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L61-L64` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L86-L89) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L61-L64)

```diff
-     var Yq = gq(39617);
-     const lq = "clipPlaneFragmentDeclaration",
-       Oq = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "imageProcessingDeclaration",
+       bC = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L70` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L95) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L70)

```diff
-   42172: (qq, Eq, gq) => {
+   42268: (CC, zC, ZC) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L72` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L97) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L72)

```diff
-       e: () => mq
+       b: () => nC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L74-L77` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L99-L102) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L74-L77)

```diff
-     var Yq = gq(39617);
-     const lq = "objectIdFunctions",
-       Oq = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "imageProcessingFunctions",
+       bC = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L83` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L108) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L83)

```diff
-   61761: (qq, Eq, gq) => {
+   42235: (CC, zC, ZC) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L85` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L110) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L85)

```diff
-       e: () => mq
+       d: () => nC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L87-L90` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L112-L115) · [Before (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L87-L90)

```diff
-     var Yq = gq(39617);
-     const lq = "openpbrDielectricReflectance",
-       Oq = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "lightUboDeclaration",
+       bC = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L96` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L121) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L96)

```diff
-   61764: (qq, Eq, gq) => {
+   42135: (CC, zC, ZC) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L98` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L123) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L98)

```diff
-       e: () => mq
+       c: () => nC
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L100-L103` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L125-L128) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L100-L103)

```diff
-     var Yq = gq(39617);
-     const lq = "openpbrGeometryInfo",
-       Oq = "struct geometryInfoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32};struct geometryInfoAnisoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32,\nanisotropy: f32,\nanisotropicTange … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "logDepthDeclaration",
+       bC = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L109` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L134) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L109)

```diff
-   61770: (qq, Eq, gq) => {
+   42322: (CC, zC, ZC) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L113-L116` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L138-L141) · [Before (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L113-L116)

```diff
-     var Yq = gq(39617);
-     const lq = "openpbrIblFunctions",
-       Oq = "#ifdef REFLECTION\nfn sampleIrradiance(\nsurfaceNormal: vec3f\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,vEnvironmentIrradianceSH: vec3f\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defi … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "logDepthFragment",
+       bC = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L122` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L147) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L122)

```diff
-   61777: (qq, Eq, gq) => {
+   42239: (CC, zC, ZC) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L124` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L149) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L124)

```diff
-       b: () => mq
+       d: () => nC
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L126-L129` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L151-L154) · [Before (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L126-L129)

```diff
-     var Yq = gq(39617);
-     const lq = "openpbrSubsurfaceLayerData",
-       Oq = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "ltcHelperFunctions",
+       bC = "fn LTCUv(N: vec3f,V: vec3f,roughness: f32)->vec2f {var LUTSIZE: f32=64.0;var LUTSCALE: f32=( LUTSIZE-1.0 )/LUTSIZE;var LUTBIAS:f32=0.5/LUTSIZE;var dotNV:f32=saturate( dot( N,V ) );var uv:vec2f=vec2f( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}\nfn … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L135` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L160) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L135)

```diff
-   61774: (qq, Eq, gq) => {
+   42092: (CC, zC, ZC) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L139-L142` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L164-L167) · [Before (L139-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L139-L142)

```diff
-     var Yq = gq(39617);
-     const lq = "openpbrTransmissionLayerData",
-       Oq = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "mainUVVaryingDeclaration",
+       bC = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L148` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L173) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L148)

```diff
-   61617: (qq, Eq, gq) => {
+   42334: (CC, zC, ZC) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L150` → after: `L175-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L175-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L175-L201) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L150)

```diff
-       b: () => mq
+       e: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "meshBlendTagFragmentOutput",
+       bC = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42063: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+ ... (11 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L152-L155` → after: `L203-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L203-L206) · [Before (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L152-L155)

```diff
-     var Yq = gq(39617);
-     const lq = "pbrFragmentReflectionDeclaration",
-       Oq = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\nvar reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;\n#ifdef LODBASEDMICROSFURACE\n#else\nvar reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamp … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "objectIdFunctions",
+       bC = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L161` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L212) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L161)

```diff
-   61666: (qq, Eq, gq) => {
+   42229: (CC, zC, ZC) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L165-L168` → after: `L216-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L216-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L216-L232) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L165-L168)

```diff
-     var Yq = gq(39617);
-     const lq = "pbrIBLFunctions",
-       Oq = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfn getLodFromAlphaG(cubeMapDimensionPixels: f32,microsurfaceAverageSlope: f32)->f32 {var microsurfaceAverageSlopeTexels: f32=cubeMapDimensionPixels*microsurfaceAverageSlope;var lod: f32=log2(microsurfaceAverageSlopeTe … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "oitDeclaration",
+       bC = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#define MAX_DEPTH 99999.0\nvar oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;\n#endif\n";
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42343: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "oitFragment",
+       bC = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nvar fragDepth: f32=fragmentInputs.position.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nvar halfFloat: u32=pack2x16float( vec2f(fragDepth));var full: vec2f=unpack2x16float(halfFloat);fragDepth=full.x;\n#endif\nvar fragCoord … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L174` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L238) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L174)

```diff
-   42222: (qq, Eq, gq) => {
+   42226: (CC, zC, ZC) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L178` → after: `L242-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L242-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L242-L256) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L178)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
+     ZC(42223);
+     const wC = "prePassDeclaration",
+       bC = "#ifdef PREPASS\n#ifndef PREPASS_CUSTOM_VARYINGS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if (defined(PREPASS … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42260: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L181` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L259) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L181)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L187` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L265) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L187)

```diff
-   42216: (qq, Eq, gq) => {
+   42255: (CC, zC, ZC) => {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L189` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L267) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L189)

```diff
-       e: () => mq
+       d: () => nC
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L191` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L269) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L191)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L194-L227` → after: `L272-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L272-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/339.js#L272-L298) · [Before (L194-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/339.js#L194-L227)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   61787: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       geometryPixelShaderWGSL: () => vq
-     });
-     var Yq = gq(39617),
-       lq = gq(42172),
-       Oq = gq(42253),
-       mq = gq(42240),
-       xq = gq(42216),
-       Aq = gq(42245),
- ... (18 more removed lines; see GitHub link above)
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42253: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "shadowsFragmentFunctions",
+       bC = "#ifdef SHADOWS\n#ifndef SHADOWFLOAT\nfn unpack(color: vec4f)->f32\n{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}\n#endif\nfn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f3 … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+ ... (11 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/340.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/340.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/340.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/340.js#L4)

```diff
-   42271: (qq, Eq, gq) => {
+   42296: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/340.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/340.js#L6)

```diff
-       c: () => mq
+       b: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/340.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/340.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "bumpFragment",
-       Oq = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "clipPlaneFragment",
+       bC = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/340.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/340.js#L17)

```diff
-   42245: (qq, Eq, gq) => {
+   42284: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/340.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/340.js#L19)

```diff
-       e: () => mq
+       b: () => nC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/340.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/340.js#L21-L25)

```diff
-     var Yq = gq(39617);
-     gq(42216);
-     const lq = "bumpFragmentFunctions",
-       Oq = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "clipPlaneFragmentDeclaration",
+       bC = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/340.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/340.js#L31)

```diff
-   42240: (qq, Eq, gq) => {
+   42328: (CC, zC, ZC) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/340.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/340.js#L33)

```diff
-       c: () => mq
+       d: () => nC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/340.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/340.js#L35-L38)

```diff
-     var Yq = gq(39617);
-     const lq = "bumpFragmentMainFunctions",
-       Oq = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "fogFragment",
+       bC = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/340.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/340.js#L44)

```diff
-   42273: (qq, Eq, gq) => {
+   42290: (CC, zC, ZC) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/340.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/340.js#L48-L51)

```diff
-     var Yq = gq(39617);
-     const lq = "decalFragment",
-       Oq = "#ifdef DECAL\nvar decalTempColor=decalColor.rgb;var decalTempAlpha=decalColor.a;\n#ifdef GAMMADECAL\ndecalTempColor=toLinearSpaceVec3(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalTempAlpha=decalColor.a*decalColor.a;\n#endif\nsurfaceAlbedo=mix(surfaceAlbedo … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "fogFragmentDeclaration",
+       bC = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L57` → after: `L56-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L56-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/340.js#L56-L69) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/340.js#L57)

```diff
-   42283: (qq, Eq, gq) => {
+   42076: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "helperFunctions",
+       bC = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42265: (CC, zC, ZC) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L61-L64` → after: `L73-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L73-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/340.js#L73-L189) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/340.js#L61-L64)

```diff
-     var Yq = gq(39617);
-     const lq = "lightFragment",
-       Oq = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvar diffuse{X}: vec4f=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X})\n{let slic … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "imageProcessingDeclaration",
+       bC = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42268: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "imageProcessingFunctions",
+       bC = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
+ ... (101 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/341.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/341.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L4)

```diff
-   42267: (qq, Eq, gq) => {
+   42296: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L6)

```diff
-       d: () => mq
+       b: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L8)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L11)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L17)

```diff
-   42253: (qq, Eq, gq) => {
+   42284: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L19)

```diff
-       c: () => mq
+       b: () => nC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L21)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L24)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L30)

```diff
-   42291: (qq, Eq, gq) => {
+   42328: (CC, zC, ZC) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L32)

```diff
-       b: () => mq
+       d: () => nC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L34)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L37)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L43)

```diff
-   42258: (qq, Eq, gq) => {
+   42290: (CC, zC, ZC) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L45)

```diff
-       c: () => mq
+       d: () => nC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L47)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L50)

```diff
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L56` → after: `L56-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L56-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L56-L95) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L56)

```diff
-   42320: (qq, Eq, gq) => {
+   42076: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "helperFunctions",
+       bC = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42135: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+ ... (24 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L58` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L97) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L58)

```diff
-       colorPixelShaderWGSL: () => Bq
+       skyPixelShaderWGSL: () => PC
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L60-L69` → after: `L99-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/341.js#L99-L118) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/341.js#L60-L69)

```diff
-     var Yq = gq(39617),
-       lq = gq(42253),
-       Oq = gq(42258),
-       mq = gq(42267),
-       xq = gq(42291);
-     const Aq = "colorPixelShader",
-       cq = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
-     Yq.d.ShadersStoreWGSL[Aq] || (Yq.d.ShadersStoreWGSL[Aq] = cq);
-     const uq = [lq.c, Oq.c, mq.d, xq.b];
-     for (const Wq of uq) Yq.d.IncludesShadersStoreWGSL[Wq.name] || (Yq.d.IncludesShadersStoreWGSL[Wq.name] = Wq.shader);
+     var QC = ZC(39674),
+       wC = ZC(42284),
+       bC = ZC(42135),
+       nC = ZC(42290),
+       fC = ZC(42076),
+       oC = ZC(42296),
+       qC = ZC(42322),
+       FC = ZC(42328);
+     const WC = "imageProcessingCompatibility",
+       NC = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
+     QC.b.IncludesShadersStoreWGSL[WC] || (QC.b.IncludesShadersStoreWGSL[WC] = NC);
+     const MC = {
+         name: WC,
+         shader: NC
+       },
+       gC = "skyPixelShader",
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/342.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/342.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L4-L6` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/342.js#L4-L14) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/342.js#L4-L6)

```diff
-   42308: (qq, Eq, gq) => {
-     function Yq(qq) {
-       return Math.floor(qq / 8)
+   42076: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "helperFunctions",
+       bC = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L8-L13` → after: `L16-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/342.js#L16-L19) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/342.js#L8-L13)

```diff
- 
-     function lq(qq) {
-       return 1 << qq % 8
-     }
-     gq.d(Eq, {
-       OptimizeIndices: () => mq
+   },
+   61040: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       rgbdDecodePixelShaderWGSL: () => oC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L15-L63` → after: `L21-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L21-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/342.js#L21-L30) · [Before (L15-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/342.js#L15-L63)

```diff
-     class Oq {
-       constructor(qq) {
-         this.size = qq, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
-       }
-       get(qq) {
-         if (qq >= this.size) throw new RangeError("Bit index out of range");
-         const Eq = Yq(qq),
-           gq = lq(qq);
-         return 0 !== (this._byteArray[Eq] & gq)
-       }
-       set(qq, Eq) {
-         if (qq >= this.size) throw new RangeError("Bit index out of range");
-         const gq = Yq(qq),
-           Oq = lq(qq);
-         Eq ? this._byteArray[gq] |= Oq : this._byteArray[gq] &= ~Oq
-       }
- ... (33 more removed lines; see GitHub link above)
+     var QC = ZC(39674),
+       wC = ZC(42076);
+     const bC = "rgbdDecodePixelShader",
+       nC = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
+     QC.b.ShadersStoreWGSL[bC] || (QC.b.ShadersStoreWGSL[bC] = nC);
+     const fC = [wC.b];
+     for (const qC of fC) QC.b.IncludesShadersStoreWGSL[qC.name] || (QC.b.IncludesShadersStoreWGSL[qC.name] = qC.shader);
+     const oC = {
+       name: bC,
+       shader: nC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/343.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/343.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392)

#### 1. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/343.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/343.js#L2)

```diff
- export const ids = [343, 344];
+ export const ids = [343];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/343.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/343.js#L4)

```diff
-   43063: (qq, Eq, gq) => {
+   42076: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/343.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/343.js#L6)

```diff
-       gamePackSource: () => Oq
+       b: () => nC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L8-L15` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/343.js#L8-L14) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/343.js#L8-L15)

```diff
-     var Yq = gq(4821),
-       lq = gq(1477);
- 
-     function Oq(qq) {
-       return {
-         packKey: async Eq => (await lq.e.getGame(qq, Eq, !0)).customTexturePackKey,
-         fetchPack: Yq.e
-       }
+     var QC = ZC(39674);
+     const wC = "helperFunctions",
+       bC = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L18` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/343.js#L17) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/343.js#L18)

```diff
-   43055: (qq, Eq, gq) => {
+   61061: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L20-L24` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/343.js#L19) · [Before (L20-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/343.js#L20-L24)

```diff
-       fetchGuestContext: () => Wq,
-       guestJoinTarget: () => oq,
-       guestJoinWithPack: () => aq,
-       guestPackForGame: () => Nq,
-       invalidateGuestTrafficCode: () => Hq
+       rgbdEncodePixelShaderWGSL: () => oC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L26-L92` → after: `L21-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L21-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/343.js#L21-L30) · [Before (L26-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/343.js#L26-L92)

```diff
-     var Yq = gq(1195),
-       lq = gq(1477),
-       Oq = gq(96),
-       mq = gq(36515),
-       xq = gq(1109),
-       Aq = gq(40687),
-       cq = gq(43063),
-       uq = gq(40628);
- 
-     function Bq() {
-       if (Oq.featureFlags.useTurnstile) throw new Aq.TurnstilePageError
-     }
- 
-     function Wq() {
-       return (0, xq.fetchAnonymousUserContext)().catch((qq => (console.warn("the guest context didn't load", qq), null)))
-     }
- ... (51 more removed lines; see GitHub link above)
+     var QC = ZC(39674),
+       wC = ZC(42076);
+     const bC = "rgbdEncodePixelShader",
+       nC = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
+     QC.b.ShadersStoreWGSL[bC] || (QC.b.ShadersStoreWGSL[bC] = nC);
+     const fC = [wC.b];
+     for (const qC of fC) QC.b.IncludesShadersStoreWGSL[qC.name] || (QC.b.IncludesShadersStoreWGSL[qC.name] = qC.shader);
+     const oC = {
+       name: bC,
+       shader: nC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/344.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/344.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14)

#### 1. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/344.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/344.js#L4)

```diff
-   43063: (qq, Eq, gq) => {
+   42172: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/344.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/344.js#L6)

```diff
-       gamePackSource: () => Oq
+       d: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L8-L15` → after: `L8-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L8-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/344.js#L8-L170) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/344.js#L8-L15)

```diff
-     var Yq = gq(4821),
-       lq = gq(1477);
- 
-     function Oq(qq) {
-       return {
-         packKey: async Eq => (await lq.e.getGame(qq, Eq, !0)).customTexturePackKey,
-         fetchPack: Yq.e
-       }
+     var QC = ZC(39674);
+     const wC = "bakedVertexAnimation",
+       bC = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42080: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "bakedVertexAnimationDeclaration",
+       bC = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
+ ... (147 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/345.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/345.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/345.js` (Changed code · before: `L4-L5` → after: `L4-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365e) · [After (L4-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/345.js#L4-L57) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/345.js#L4-L5)

```diff
-   61130: (qq, Eq, gq) => {
-     var Yq;
+   42186: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "bumpVertex",
+       bC = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42103: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+ ... (38 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/345.js` (Changed code · before: `L7-L11` → after: `L59-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365eR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365e) · [After (L59-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/345.js#L59-L106) · [Before (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/345.js#L7-L11)

```diff
-         ShaderLanguage: () => Yq
-       }),
-       function(qq) {
-         qq[qq.GLSL = 0] = "GLSL", qq[qq.WGSL = 1] = "WGSL"
-       }(Yq || (Yq = {}))
+       pbrVertexShaderWGSL: () => DC
+     });
+     var QC = ZC(39674),
+       wC = ZC(42058),
+       bC = ZC(42063),
+       nC = ZC(61286),
+       fC = ZC(42074),
+       oC = ZC(42092),
+       qC = ZC(42076),
+       FC = ZC(61291),
+       WC = ZC(42078),
+       NC = ZC(42080),
+       MC = ZC(42082),
+       gC = ZC(42090),
+       SC = ZC(42100),
+       pC = ZC(61300),
+ ... (32 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/346.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/346.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/346.js` (Changed code · before: `L4` → after: `L4-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef) · [After (L4-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/346.js#L4-L82) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/346.js#L4)

```diff
-   61138: (qq, Eq, gq) => {
+   42194: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "clipPlaneVertex",
+       bC = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42106: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+ ... (63 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/346.js` (Changed code · before: `L6` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508efR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/346.js#L84) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/346.js#L6)

```diff
-       postprocessVertexShader: () => mq
+       particlesVertexShaderWGSL: () => MC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/346.js` (Changed code · before: `L8-L11` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508efR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/346.js#L86-L97) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/346.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "postprocessVertexShader",
-       Oq = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
+     var QC = ZC(39674),
+       wC = ZC(42106),
+       bC = ZC(42112),
+       nC = ZC(42135),
+       fC = ZC(42194),
+       oC = ZC(42202),
+       qC = ZC(42214);
+     const FC = "particlesVertexShader",
+       WC = "attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;\n#ifdef ANIMATESHEET\nattribute cellIndex: f32;\n#endif\n#ifndef BILLBOARD\nattribute direction: vec3f;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute direction: vec3f;\n#endif … [truncated]
+     QC.b.ShadersStoreWGSL[FC] || (QC.b.ShadersStoreWGSL[FC] = WC);
+     const NC = [wC.b, bC.c, nC.c, fC.b, oC.d, qC.b];
+     for (const gC of NC) QC.b.IncludesShadersStoreWGSL[gC.name] || (QC.b.IncludesShadersStoreWGSL[gC.name] = gC.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/347.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/347.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6fcc510fef0e71b626dbd5d11e4d41f1d43e50479af14d93c4ccae22518d8f84)

#### 1. `bundles/preprod.bloxd.io/chunks/js/347.js` (Changed code · before: `L4` → after: `L4-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6fcc510fef0e71b626dbd5d11e4d41f1d43e50479af14d93c4ccae22518d8f84R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6fcc510fef0e71b626dbd5d11e4d41f1d43e50479af14d93c4ccae22518d8f84) · [After (L4-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/347.js#L4-L82) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/347.js#L4)

```diff
-   61153: (qq, Eq, gq) => {
+   42194: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "clipPlaneVertex",
+       bC = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42106: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+ ... (63 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/347.js` (Changed code · before: `L6` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6fcc510fef0e71b626dbd5d11e4d41f1d43e50479af14d93c4ccae22518d8f84R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6fcc510fef0e71b626dbd5d11e4d41f1d43e50479af14d93c4ccae22518d8f84) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/347.js#L84) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/347.js#L6)

```diff
-       WorldCodeAiOutOfUsage: () => Oq
+       skyVertexShaderWGSL: () => MC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/347.js` (Changed code · before: `L8-L25` → after: `L86-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6fcc510fef0e71b626dbd5d11e4d41f1d43e50479af14d93c4ccae22518d8f84R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6fcc510fef0e71b626dbd5d11e4d41f1d43e50479af14d93c4ccae22518d8f84) · [After (L86-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/347.js#L86-L100) · [Before (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/347.js#L8-L25)

```diff
-     var Yq = gq(1422),
-       lq = gq(1070);
- 
-     function Oq(qq) {
-       let {
-         onGetSuperRank: Eq
-       } = qq;
-       return (0, lq.jsxs)("div", {
-         className: "WorldCodeAiOutOfUsage",
-         children: [(0, lq.jsx)("p", {
-           className: "WorldCodeAiOutOfUsageText",
-           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
-         }), (0, lq.jsx)(Yq.p, {
-           className: "WorldCodeAiOutOfUsageButton",
-           onClick: Eq,
-           children: "Get Super Rank"
- ... (2 more removed lines; see GitHub link above)
+     var QC = ZC(39674),
+       wC = ZC(42135),
+       bC = ZC(42106),
+       nC = ZC(42112),
+       fC = ZC(42194),
+       oC = ZC(42214),
+       qC = ZC(42202);
+     const FC = "skyVertexShader",
+       WC = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying v … [truncated]
+     QC.b.ShadersStoreWGSL[FC] || (QC.b.ShadersStoreWGSL[FC] = WC);
+     const NC = [wC.c, bC.b, nC.c, fC.b, oC.b, qC.d];
+     for (const gC of NC) QC.b.IncludesShadersStoreWGSL[gC.name] || (QC.b.IncludesShadersStoreWGSL[gC.name] = gC.shader);
+     const MC = {
+       name: FC,
+       shader: WC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/348.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/348.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934)

#### 1. `bundles/preprod.bloxd.io/chunks/js/348.js` (Changed code · before: `L4` → after: `L4-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934) · [After (L4-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/348.js#L4-L200) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/348.js#L4)

```diff
-   61156: (qq, Eq, gq) => {
+   42303: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "bumpFragment",
+       bC = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42279: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+ ... (181 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/348.js` (Changed code · before: `L6-L28` → after: `L202-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934) · [After (L202-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/348.js#L202-L230) · [Before (L6-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/348.js#L6-L28)

```diff
-       WorldCodeAiDeepSeekNotice: () => mq,
-       deepSeekPrivacyPolicyUrl: () => Oq
-     });
-     var Yq = gq(1183),
-       lq = gq(1070);
-     const Oq = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";
- 
-     function mq() {
-       const {
-         t: qq
-       } = (0, Yq.v)();
-       return (0, lq.jsxs)(lq.Fragment, {
-         children: [qq("superBotXd:deepSeekNotice"), " ", (0, lq.jsxs)("a", {
-           className: "WorldCodeAiDeepSeekPolicyLink",
-           href: Oq,
-           target: "_blank",
- ... (7 more removed lines; see GitHub link above)
+       geometryPixelShaderWGSL: () => vC
+     });
+     var QC = ZC(39674),
+       wC = ZC(42223),
+       bC = ZC(42284),
+       nC = ZC(42276),
+       fC = ZC(42255),
+       oC = ZC(42279),
+       qC = ZC(42076),
+       FC = ZC(61322),
+       WC = ZC(42058),
+       NC = ZC(61291),
+       MC = ZC(61471),
+       gC = ZC(61369),
+       SC = ZC(42260),
+       pC = ZC(61474),
+ ... (13 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/349.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/349.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab)

#### 1. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/349.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/349.js#L4-L6)

```diff
-   61175: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       particlesPixelShader: () => Qq
+   42303: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L8-L22` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/349.js#L8-L11) · [Before (L8-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/349.js#L8-L22)

```diff
-     var Yq = gq(39617),
-       lq = gq(41823),
-       Oq = gq(41831),
-       mq = gq(41905),
-       xq = gq(41880),
-       Aq = gq(41747),
-       cq = gq(41670),
-       uq = gq(41888),
-       Bq = gq(41912),
-       Wq = gq(41921),
-       Nq = gq(41948),
-       aq = gq(41956);
-     const Vq = "geometryRenderingFragment",
-       dq = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
-     Yq.d.IncludesShadersStore[Vq] || (Yq.d.IncludesShadersStore[Vq] = dq);
+     var QC = ZC(39674);
+     const wC = "bumpFragment",
+       bC = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L24-L31` → after: `L13-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L13-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/349.js#L13-L64) · [Before (L24-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/349.js#L24-L31)

```diff
-         name: Vq,
-         shader: dq
-       },
-       Hq = "particlesPixelShader",
-       oq = "#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\nvarying vec2 vUV;varying vec4 vColor;uniform vec4 textureMask;uniform sampler2D diffuseSampler;\n#ifdef PREPASS\nuniform float geometryZeroAlphaDiscard;\n#ifdef PREPASS_POSITION\nvarying vec3 vGeo … [truncated]
-     Yq.d.ShadersStore[Hq] || (Yq.d.ShadersStore[Hq] = oq);
-     const Pq = [lq.e, Oq.b, mq.d, xq.d, Aq.d, cq.c, uq.d, Bq.e, Wq.c, Nq.d, aq.e, jq];
-     for (const yq of Pq) Yq.d.IncludesShadersStore[yq.name] || (Yq.d.IncludesShadersStore[yq.name] = yq.shader);
+       name: wC,
+       shader: bC
+     }
+   },
+   42279: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     ZC(42255);
+     const wC = "bumpFragmentFunctions",
+       bC = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+ ... (36 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/350.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/350.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66)

#### 1. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/350.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/350.js#L4)

```diff
-   61205: (qq, Eq, gq) => {
+   42296: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/350.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/350.js#L6)

```diff
-       allocateF64Mat4: () => lq
+       b: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L8-L11` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/350.js#L8-L14) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/350.js#L8-L11)

```diff
-     var Yq = gq(41483);
- 
-     function lq() {
-       return new Yq.e(16)
+     var QC = ZC(39674);
+     const wC = "clipPlaneFragment",
+       bC = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L13` → after: `L16-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L16-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/350.js#L16-L73) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/350.js#L13)

```diff
-     lq["@@MAT4_STORAGE_F64@@"] = !0
+   },
+   42284: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "clipPlaneFragmentDeclaration",
+       bC = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   42328: (CC, zC, ZC) => {
+     ZC.d(zC, {
+ ... (42 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/351.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/351.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L4-L11` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/351.js#L4-L7) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/351.js#L4-L11)

```diff
-   61207: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       applyLightFoOffset: () => mq,
-       getFloatingOriginOffset: () => lq,
-       lightFoVersion: () => Oq,
-       wrapRenderableForFO: () => xq
-     });
-     var Yq = gq(41492);
+   42347: (CC, zC, ZC) => {
+     function QC(CC) {
+       return Math.floor(CC / 8)
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L14-L24` → after: `L10-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L10-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/351.js#L10-L29) · [Before (L14-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/351.js#L14-L24)

```diff
-       const Eq = qq.camera;
-       if (!Eq) return {
-         x: 0,
-         y: 0,
-         z: 0
-       };
-       const gq = Eq.worldMatrix;
-       return {
-         x: gq[12],
-         y: gq[13],
-         z: gq[14]
+       return 1 << CC % 8
+     }
+     ZC.d(zC, {
+       OptimizeIndices: () => nC
+     });
+     class bC {
+       constructor(CC) {
+         this.size = CC, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
+       }
+       get(CC) {
+         if (CC >= this.size) throw new RangeError("Bit index out of range");
+         const zC = QC(CC),
+           ZC = wC(CC);
+         return 0 !== (this._byteArray[zC] & ZC)
+       }
+       set(CC, zC) {
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L29-L37` → after: `L34-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L34-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/351.js#L34-L61) · [Before (L29-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/351.js#L29-L37)

```diff
-       return qq.camera ? qq.camera.worldMatrixVersion : 0
-     }
- 
-     function mq(qq, Eq) {
-       const gq = Eq.camera?.worldMatrix;
-       if (!gq) return;
-       const lq = gq[12],
-         Oq = gq[13],
-         mq = gq[14];
+       const zC = [],
+         ZC = CC.length / 3;
+       for (let bC = 0; bC < ZC; bC++) zC.push([CC[3 * bC], CC[3 * bC + 1], CC[3 * bC + 2]]);
+       const QC = new Map;
+       for (let bC = 0; bC < zC.length; bC++) {
+         const CC = zC[bC];
+         for (const zC of CC) {
+           let CC = QC.get(zC);
+           CC || QC.set(zC, CC = []), CC.push(bC)
+         }
+       }
+       const wC = new bC(ZC),
+         nC = [],
+         fC = CC => {
+           const ZC = [CC];
+           for (; ZC.length > 0;) {
+ ... (12 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L39-L57` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/351.js#L63) · [Before (L39-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/351.js#L39-L57)

```diff
-       for (const Aq of Eq.lights) {
-         if (xq >= Yq.e) break;
-         if (!Aq._writeLightUbo) continue;
-         const Eq = 4 + 16 * xq,
-           gq = qq[Eq + 3];
-         if (0 === gq || 2 === gq) {
-           const gq = Aq.worldMatrix;
-           qq[Eq] = gq[12] - lq, qq[Eq + 1] = gq[13] - Oq, qq[Eq + 2] = gq[14] - mq
-         }
-         xq++
-       }
-     }
- 
-     function xq(qq, Eq, gq) {
-       let Yq = -1;
-       return () => {
- ... (3 more removed lines; see GitHub link above)
+       for (const bC of nC) CC[oC++] = bC[0], CC[oC++] = bC[1], CC[oC++] = bC[2]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/352.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/352.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/352.js` (Changed code · before: `L4-L19` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/352.js#L4-L5) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/352.js#L4-L19)

```diff
-   61212: (qq, Eq, gq) => {
-     function Yq(qq, Eq, gq, Yq, lq, Oq, mq) {
-       const xq = Eq,
-         Aq = Yq,
-         cq = gq;
-       qq[cq + 0] = xq[Aq + 0], qq[cq + 1] = xq[Aq + 1], qq[cq + 2] = xq[Aq + 2], qq[cq + 3] = xq[Aq + 3], qq[cq + 4] = xq[Aq + 4], qq[cq + 5] = xq[Aq + 5], qq[cq + 6] = xq[Aq + 6], qq[cq + 7] = xq[Aq + 7], qq[cq + 8] = xq[Aq + 8], qq[cq + 9] = xq[Aq + 9], qq[cq + 10] = xq[Aq + 10 … [truncated]
-     }
- 
-     function lq(qq) {
-       return (Eq, gq, lq, Oq) => {
-         const mq = qq.camera;
-         if (!mq) return void Yq(Eq, gq, lq, Oq, 0, 0, 0);
-         const xq = mq.worldMatrix;
-         Yq(Eq, gq, lq, Oq, xq[12], xq[13], xq[14])
-       }
-     }
+   60932: (CC, zC, ZC) => {
+     var QC;
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/352.js` (Changed code · before: `L21-L23` → after: `L7-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1) · [After (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/352.js#L7-L11) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/352.js#L21-L23)

```diff
-       makePackMeshWorld: () => lq,
-       packMat4IntoF32WithOffset: () => Yq
-     })
+         ShaderLanguage: () => QC
+       }),
+       function(CC) {
+         CC[CC.GLSL = 0] = "GLSL", CC[CC.WGSL = 1] = "WGSL"
+       }(QC || (QC = {}))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/353.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/353.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575)

#### 1. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L4-L6` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/353.js#L4-L14) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/353.js#L4-L6)

```diff
-   61221: (qq, Eq, gq) => {
-     function Yq(qq) {
-       return qq.features.has("timestamp-query")
+   60938: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       postprocessVertexShader: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "postprocessVertexShader",
+       bC = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/354.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/354.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L4-L7` → after: `L4-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/354.js#L4-L25) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/354.js#L4-L7)

```diff
-   61225: (qq, Eq, gq) => {
-     function Yq(qq, Eq) {
-       for (const gq of qq._frameGraph._tasks)
-         if (gq?._config && gq._colorAttachment && (gq._config.rt === Eq.scRT || gq._config.rst === Eq.scRT)) return gq
+   60953: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       WorldCodeAiOutOfUsage: () => bC
+     });
+     var QC = ZC(1388),
+       wC = ZC(1056);
+ 
+     function bC(CC) {
+       let {
+         onGetSuperRank: zC
+       } = CC;
+       return (0, wC.jsxs)("div", {
+         className: "WorldCodeAiOutOfUsage",
+         children: [(0, wC.jsx)("p", {
+           className: "WorldCodeAiOutOfUsageText",
+           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/355.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/355.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/355.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/355.js#L4-L6)

```diff
-   61234: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       createShadowTask: () => Oq
+   60961: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       WorldCodeAiDeepSeekNotice: () => nC,
+       deepSeekPrivacyPolicyUrl: () => bC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L8` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/355.js#L9-L11) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/355.js#L8)

```diff
-     var Yq = null;
+     var QC = ZC(1143),
+       wC = ZC(1056);
+     const bC = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L10-L74` → after: `L13-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L13-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/355.js#L13-L28) · [Before (L10-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/355.js#L10-L74)

```diff
-     function lq(qq) {
-       return Yq?.get(qq)
-     }
- 
-     function Oq(qq, Eq) {
-       const gq = new Set;
-       0;
-       const Yq = {
-         name: "GN",
-         engine: qq,
-         PV: Eq,
-         _passes: [],
-         async _preload() {
-           const qq = [];
-           for (const gq of Eq.lights) {
-             const Eq = gq.shadowGenerator,
- ... (49 more removed lines; see GitHub link above)
+     function nC() {
+       const {
+         t: CC
+       } = (0, QC.y)();
+       return (0, wC.jsxs)(wC.Fragment, {
+         children: [CC("superBotXd:deepSeekNotice"), " ", (0, wC.jsxs)("a", {
+           className: "WorldCodeAiDeepSeekPolicyLink",
+           href: bC,
+           target: "_blank",
+           rel: "noreferrer noopener",
+           children: [CC("superBotXd:deepSeekPrivacyPolicy"), " ", (0, wC.jsx)("span", {
+             "aria-hidden": "true",
+             children: "\u2197"
+           })]
+         })]
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/356.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/356.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/356.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/356.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/356.js#L4)

```diff
-   61241: (qq, Eq, gq) => {
+   60987: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/356.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/356.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/356.js#L6-L9)

```diff
-       A: () => cq,
-       B: () => Bq,
-       C: () => uq,
-       X: () => Wq
+       particlesPixelShader: () => xC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/356.js` (Changed code · before: `L11-L288` → after: `L8-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7) · [After (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/356.js#L8-L34) · [Before (L11-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/356.js#L11-L288)

```diff
-     var Yq = gq(41489),
-       lq = (qq, Eq) => qq.order - Eq.order;
- 
-     function Oq(qq, Eq, gq) {
-       qq.pendingDisposers.set(Eq, gq)
-     }
- 
-     function mq(qq, Eq, gq) {
-       gq && qq.pendingDisposers.get(Eq) === gq && qq.pendingDisposers.delete(Eq)
-     }
-     var xq = null,
-       Aq = null;
- 
-     function cq(qq, Eq, gq, Yq) {
-       if (!Eq || gq.material !== Eq) return Yq ?? Promise.resolve();
-       const lq = Bq(qq, Eq._buildGroup, gq);
- ... (262 more removed lines; see GitHub link above)
+     var QC = ZC(39674),
+       wC = ZC(41911),
+       bC = ZC(41913),
+       nC = ZC(41996),
+       fC = ZC(41967),
+       oC = ZC(41816),
+       qC = ZC(41726),
+       FC = ZC(41975),
+       WC = ZC(42005),
+       NC = ZC(42013),
+       MC = ZC(42039),
+       gC = ZC(42041);
+     const SC = "geometryRenderingFragment",
+       pC = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
+     QC.b.IncludesShadersStore[SC] || (QC.b.IncludesShadersStore[SC] = pC);
+     const PC = {
+ ... (11 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/357.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/357.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219eca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/357.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219ecaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219eca) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/357.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/357.js#L4-L6)

```diff
-   61371: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       postprocessVertexShaderWGSL: () => mq
+   61010: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       allocateF64Mat4: () => wC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/357.js` (Changed code · before: `L8-L14` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219ecaR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219eca) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/357.js#L8-L11) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/357.js#L8-L14)

```diff
-     var Yq = gq(39617);
-     const lq = "postprocessVertexShader",
-       Oq = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
-     Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(41532);
+ 
+     function wC() {
+       return new QC.g(16)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/358.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/358.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872)

#### 1. `bundles/preprod.bloxd.io/chunks/js/358.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/358.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/358.js#L4)

```diff
-   61393: (qq, Eq, gq) => {
+   61016: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/358.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/358.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/358.js#L6)

```diff
-       lod3DPixelShader: () => mq
+       applyLightFoOffset: () => nC,
+       getFloatingOriginOffset: () => wC,
+       lightFoVersion: () => bC,
+       wrapRenderableForFO: () => fC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/358.js` (Changed code · before: `L8-L14` → after: `L11-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872) · [After (L11-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/358.js#L11-L57) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/358.js#L8-L14)

```diff
-     var Yq = gq(39617);
-     const lq = "lod3DPixelShader",
-       Oq = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
-     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(41543);
+ 
+     function wC(CC) {
+       const zC = CC.camera;
+       if (!zC) return {
+         x: 0,
+         y: 0,
+         z: 0
+       };
+       const ZC = zC.worldMatrix;
+       return {
+         x: ZC[12],
+         y: ZC[13],
+         z: ZC[14]
+       }
+     }
+ ... (31 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/359.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/359.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122)

#### 1. `bundles/preprod.bloxd.io/chunks/js/359.js` (Changed code · before: `L4` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/359.js#L4-L19) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/359.js#L4)

```diff
-   61396: (qq, Eq, gq) => {
+   61019: (CC, zC, ZC) => {
+     function QC(CC, zC, ZC, QC, wC, bC, nC) {
+       const fC = zC,
+         oC = QC,
+         qC = ZC;
+       CC[qC + 0] = fC[oC + 0], CC[qC + 1] = fC[oC + 1], CC[qC + 2] = fC[oC + 2], CC[qC + 3] = fC[oC + 3], CC[qC + 4] = fC[oC + 4], CC[qC + 5] = fC[oC + 5], CC[qC + 6] = fC[oC + 6], CC[qC + 7] = fC[oC + 7], CC[qC + 8] = fC[oC + 8], CC[qC + 9] = fC[oC + 9], CC[qC + 10] = fC[oC + 10 … [truncated]
+     }
+ 
+     function wC(CC) {
+       return (zC, ZC, wC, bC) => {
+         const nC = CC.camera;
+         if (!nC) return void QC(zC, ZC, wC, bC, 0, 0, 0);
+         const fC = nC.worldMatrix;
+         QC(zC, ZC, wC, bC, fC[12], fC[13], fC[14])
+       }
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/359.js` (Changed code · before: `L6-L15` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/359.js#L21-L23) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/359.js#L6-L15)

```diff
-       lodCubePixelShader: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "lodCubePixelShader",
-       Oq = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
-     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
+       makePackMeshWorld: () => wC,
+       packMat4IntoF32WithOffset: () => QC
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/360.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/360.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/360.js` (Changed code · before: `L4` → after: `L4-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdb) · [After (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/360.js#L4-L76) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/360.js#L4)

```diff
-   61402: (qq, Eq, gq) => {
+   61022: (CC, zC, ZC) => {
+     function QC(CC) {
+       return CC.features.has("timestamp-query")
+     }
+ 
+     function wC(CC) {
+       return QC(CC) ? {
+         device: CC,
+         markerPipeline: CC.createComputePipeline({
+           layout: "auto",
+           compute: {
+             module: CC.createShaderModule({
+               code: "@compute @workgroup_size(1) fn main() {}"
+             }),
+             entryPoint: "main"
+           }
+ ... (57 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/360.js` (Changed code · before: `L6-L15` → after: `L78-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdbR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdb) · [After (L78-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/360.js#L78-L84) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/360.js#L6-L15)

```diff
-       lodPixelShader: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "lodPixelShader",
-       Oq = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
-     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
+       createGpuFrameTimer: () => wC,
+       destroyGpuFrameTimer: () => oC,
+       gpuFrameTimerBegin: () => bC,
+       gpuFrameTimerEnd: () => nC,
+       gpuFrameTimerResolve: () => fC,
+       gpuTimingSupportedFor: () => QC
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/361.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/361.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/361.js` (Changed code · before: `L4` → after: `L4-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6) · [After (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/361.js#L4-L22) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/361.js#L4)

```diff
-   61408: (qq, Eq, gq) => {
+   61027: (CC, zC, ZC) => {
+     function QC(CC, zC) {
+       for (const ZC of CC._frameGraph._tasks)
+         if (ZC?._config && ZC._colorAttachment && (ZC._config.rt === zC.scRT || ZC._config.rst === zC.scRT)) return ZC
+     }
+ 
+     function wC(CC, zC) {
+       const ZC = CC._renderingContexts[CC._renderingContexts.length - 1];
+       if (!ZC?._frameGraph) return;
+       const wC = QC(zC, CC);
+       if (!wC) return;
+       if (1 === CC.msaaSamples) return void(wC._config.clr = !1);
+       const bC = wC.enabled;
+       wC._config.clr = !0, wC.enabled = !1, zC._beforeRender.unshift((() => {
+         const zC = QC(ZC, CC),
+           nC = zC?._config.rst === CC.scRT && zC._config.rt._colorView;
+ ... (3 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/361.js` (Changed code · before: `L6-L15` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/361.js#L24-L25) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/361.js#L6-L15)

```diff
-       lod3DPixelShaderWGSL: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "lod3DPixelShader",
-       Oq = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
-     Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
+       configureSwapchainOverlayScene: () => wC
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/362.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/362.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/362.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/362.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/362.js#L4-L6)

```diff
-   61415: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       lodCubePixelShaderWGSL: () => mq
+   61031: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       createShadowTask: () => bC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/362.js` (Changed code · before: `L8-L14` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/362.js#L8-L74) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/362.js#L8-L14)

```diff
-     var Yq = gq(39617);
-     const lq = "lodCubePixelShader",
-       Oq = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
-     Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = null;
+ 
+     function wC(CC) {
+       return QC?.get(CC)
+     }
+ 
+     function bC(CC, zC) {
+       const ZC = new Set;
+       0;
+       const QC = {
+         name: "Zg",
+         engine: CC,
+         sS: zC,
+         _passes: [],
+         async _preload() {
+           const CC = [];
+ ... (51 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/363.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/363.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171ede)

#### 1. `bundles/preprod.bloxd.io/chunks/js/363.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171edeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171ede) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/363.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/363.js#L4)

```diff
-   61419: (qq, Eq, gq) => {
+   61035: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/363.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171edeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171ede) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/363.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/363.js#L6)

```diff
-       lodPixelShaderWGSL: () => mq
+       A: () => qC,
+       B: () => WC,
+       C: () => FC,
+       X: () => NC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/363.js` (Changed code · before: `L8-L14` → after: `L11-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171edeR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171ede) · [After (L11-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/363.js#L11-L288) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/363.js#L8-L14)

```diff
-     var Yq = gq(39617);
-     const lq = "lodPixelShader",
-       Oq = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
-     Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(41540),
+       wC = (CC, zC) => CC.order - zC.order;
+ 
+     function bC(CC, zC, ZC) {
+       CC.pendingDisposers.set(zC, ZC)
+     }
+ 
+     function nC(CC, zC, ZC) {
+       ZC && CC.pendingDisposers.get(zC) === ZC && CC.pendingDisposers.delete(zC)
+     }
+     var fC = null,
+       oC = null;
+ 
+     function qC(CC, zC, ZC, QC) {
+       if (!zC || ZC.material !== zC) return QC ?? Promise.resolve();
+       const wC = WC(CC, zC._buildGroup, ZC);
+ ... (262 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/364.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/364.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582)

#### 1. `bundles/preprod.bloxd.io/chunks/js/364.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/364.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/364.js#L4)

```diff
-   61421: (qq, Eq, gq) => {
+   61047: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/364.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/364.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/364.js#L6)

```diff
-       passPixelShaderWGSL: () => mq
+       postprocessVertexShaderWGSL: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/364.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/364.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/364.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "passPixelShader",
-       Oq = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
-     Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "postprocessVertexShader",
+       bC = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
+     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/365.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/365.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/365.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/365.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/365.js#L4)

```diff
-   61424: (qq, Eq, gq) => {
+   61069: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/365.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/365.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/365.js#L6)

```diff
-       passPixelShader: () => mq
+       lod3DPixelShader: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/365.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9b) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/365.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/365.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "passPixelShader",
-       Oq = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
-     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "lod3DPixelShader",
+       bC = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
+     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/366.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/366.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/366.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/366.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/366.js#L4)

```diff
-   61429: (qq, Eq, gq) => {
+   61075: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/366.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/366.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/366.js#L6)

```diff
-       passCubePixelShaderWGSL: () => mq
+       lodCubePixelShader: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/366.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/366.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/366.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "passCubePixelShader",
-       Oq = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
-     Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "lodCubePixelShader",
+       bC = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
+     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/367.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/367.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/367.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/367.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/367.js#L4)

```diff
-   61432: (qq, Eq, gq) => {
+   61081: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/367.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/367.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/367.js#L6)

```diff
-       passCubePixelShader: () => mq
+       lodPixelShader: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/367.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/367.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/367.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "passCubePixelShader",
-       Oq = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
-     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "lodPixelShader",
+       bC = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
+     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/368.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/368.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/368.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/368.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/368.js#L4)

```diff
-   61473: (qq, Eq, gq) => {
+   61084: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/368.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/368.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/368.js#L6)

```diff
-       fxaaPixelShaderWGSL: () => mq
+       lod3DPixelShaderWGSL: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/368.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/368.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/368.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "fxaaPixelShader",
-       Oq = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
-     Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "lod3DPixelShader",
+       bC = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
+     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/369.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/369.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/369.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/369.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/369.js#L4)

```diff
-   61477: (qq, Eq, gq) => {
+   61088: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/369.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/369.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/369.js#L6)

```diff
-       fxaaVertexShaderWGSL: () => mq
+       lodCubePixelShaderWGSL: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/369.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/369.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/369.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "fxaaVertexShader",
-       Oq = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
-     Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "lodCubePixelShader",
+       bC = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
+     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/370.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/370.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87)

#### 1. `bundles/preprod.bloxd.io/chunks/js/370.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/370.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/370.js#L4)

```diff
-   61485: (qq, Eq, gq) => {
+   61096: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/370.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/370.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/370.js#L6)

```diff
-       fxaaPixelShader: () => mq
+       lodPixelShaderWGSL: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/370.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/370.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/370.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "fxaaPixelShader",
-       Oq = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
-     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "lodPixelShader",
+       bC = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
+     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/371.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/371.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/371.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/371.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/371.js#L4)

```diff
-   61488: (qq, Eq, gq) => {
+   61101: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/371.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/371.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/371.js#L6)

```diff
-       fxaaVertexShader: () => mq
+       passPixelShaderWGSL: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/371.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/371.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/371.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "fxaaVertexShader",
-       Oq = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
-     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "passPixelShader",
+       bC = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
+     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/372.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/372.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659)

#### 1. `bundles/preprod.bloxd.io/chunks/js/372.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/372.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/372.js#L4-L18)

```diff
-   61503: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     gq(41642), gq(41651);
-     const lq = "pbrUboDeclaration",
-       Oq = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   61523: (qq, Eq, gq) => {
+   61109: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/372.js` (Changed code · before: `L20` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/372.js#L6) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/372.js#L20)

```diff
-       pbrPixelShader: () => yg
+       passPixelShader: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/372.js` (Changed code · before: `L22-L242` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/372.js#L8-L11) · [Before (L22-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/372.js#L22-L242)

```diff
-     var Yq = gq(39617),
-       lq = gq(41823),
-       Oq = gq(41831),
-       mq = gq(41837),
-       xq = gq(41815);
-     const Aq = "pbrFragmentDeclaration",
-       cq = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
-     Yq.d.IncludesShadersStore[Aq] || (Yq.d.IncludesShadersStore[Aq] = cq);
-     const uq = {
-       name: Aq,
-       shader: cq
-     };
-     var Bq = gq(41642),
-       Wq = gq(41651),
-       Nq = gq(61503),
-       aq = gq(41698),
- ... (205 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "passPixelShader",
+       bC = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
+     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/373.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/373.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35)

#### 1. `bundles/preprod.bloxd.io/chunks/js/373.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/373.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/373.js#L4-L6)

```diff
-   61516: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
+   61111: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       passCubePixelShaderWGSL: () => nC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/373.js` (Changed code · before: `L8-L195` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/373.js#L8-L11) · [Before (L8-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/373.js#L8-L195)

```diff
-     var Yq = gq(39617);
-     const lq = "harmonicsFunctions",
-       Oq = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   61560: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "hdrFilteringFunctions",
-       Oq = "#if NUM_SAMPLES\n#if NUM_SAMPLES>0\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\nprecision highp int;float radicalInverse_VdC(uint bits)\n{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x3333333 … [truncated]
- ... (172 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "passCubePixelShader",
+       bC = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
+     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/374.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/374.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936)

#### 1. `bundles/preprod.bloxd.io/chunks/js/374.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/374.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/374.js#L4-L6)

```diff
-   61516: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
+   61118: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       passCubePixelShader: () => nC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/374.js` (Changed code · before: `L8-L115` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/374.js#L8-L11) · [Before (L8-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/374.js#L8-L115)

```diff
-     var Yq = gq(39617);
-     const lq = "harmonicsFunctions",
-       Oq = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   61699: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
-     gq(41642), gq(41651);
-     const lq = "openpbrUboDeclaration",
- ... (92 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "passCubePixelShader",
+       bC = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
+     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/375.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/375.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/375.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/375.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/375.js#L4-L18)

```diff
-   61593: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     gq(41973), gq(41979);
-     const lq = "pbrUboDeclaration",
-       Oq = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   61610: (qq, Eq, gq) => {
+   61149: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/375.js` (Changed code · before: `L20` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/375.js#L6) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/375.js#L20)

```diff
-       pbrPixelShaderWGSL: () => ag
+       fxaaPixelShaderWGSL: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/375.js` (Changed code · before: `L22-L222` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/375.js#L8-L11) · [Before (L22-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/375.js#L22-L222)

```diff
-     var Yq = gq(39617),
-       lq = gq(42172),
-       Oq = gq(42177),
-       mq = gq(42185),
-       xq = gq(41973),
-       Aq = gq(41979),
-       cq = gq(61593),
-       uq = gq(42029),
-       Bq = gq(61612),
-       Wq = gq(42189),
-       Nq = gq(42216);
-     const aq = "samplerFragmentAlternateDeclaration",
-       Vq = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[aq] || (Yq.d.IncludesShadersStoreWGSL[aq] = Vq);
-     const dq = {
-       name: aq,
- ... (185 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "fxaaPixelShader",
+       bC = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
+     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/376.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/376.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/376.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/376.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/376.js#L4-L6)

```diff
-   61603: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
+   61156: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       fxaaVertexShaderWGSL: () => nC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/376.js` (Changed code · before: `L8-L210` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/376.js#L8-L11) · [Before (L8-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/376.js#L8-L210)

```diff
-     var Yq = gq(39617);
-     const lq = "harmonicsFunctions",
-       Oq = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   61643: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "hdrFilteringFunctions",
-       Oq = "#ifdef NUM_SAMPLES\n#if NUM_SAMPLES>0\nfn radicalInverse_VdC(value: u32)->f32 \n{var bits=(value<<16u) | (value>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<< … [truncated]
- ... (187 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "fxaaVertexShader",
+       bC = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
+     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/377.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/377.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/377.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/377.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/377.js#L4-L6)

```diff
-   61603: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
+   61164: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       fxaaPixelShader: () => nC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/377.js` (Changed code · before: `L8-L88` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/377.js#L8-L11) · [Before (L8-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/377.js#L8-L88)

```diff
-     var Yq = gq(39617);
-     const lq = "harmonicsFunctions",
-       Oq = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   61748: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     gq(41973), gq(41979);
-     const lq = "openpbrUboDeclaration",
- ... (65 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "fxaaPixelShader",
+       bC = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
+     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/378.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/378.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/378.js` (Changed code · before: `L4-L96` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/378.js#L4) · [Before (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/378.js#L4-L96)

```diff
-   61716: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "openpbrDielectricReflectance",
-       Oq = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   61721: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
- ... (77 more removed lines; see GitHub link above)
+   61171: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/378.js` (Changed code · before: `L98` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/378.js#L6) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/378.js#L98)

```diff
-       openpbrPixelShader: () => xg
+       fxaaVertexShader: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/378.js` (Changed code · before: `L100-L285` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/378.js#L8-L11) · [Before (L100-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/378.js#L100-L285)

```diff
-     var Yq = gq(39617),
-       lq = gq(41823),
-       Oq = gq(41831),
-       mq = gq(41837),
-       xq = gq(61711),
-       Aq = gq(41815);
-     const cq = "openpbrFragmentDeclaration",
-       uq = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
-     Yq.d.IncludesShadersStore[cq] || (Yq.d.IncludesShadersStore[cq] = uq);
-     const Bq = {
-       name: cq,
-       shader: uq
-     };
-     var Wq = gq(41642),
-       Nq = gq(41651),
-       aq = gq(61699),
- ... (170 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "fxaaVertexShader",
+       bC = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
+     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/379.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/379.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21)

#### 1. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L4)

```diff
-   61761: (qq, Eq, gq) => {
+   61185: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L6)

```diff
-       e: () => mq
+       b: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "openpbrDielectricReflectance",
-       Oq = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     ZC(41703), ZC(41708);
+     const wC = "pbrUboDeclaration",
+       bC = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L17-L19` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L18-L20) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L17-L19)

```diff
-   61764: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
+   61204: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       pbrPixelShader: () => JZ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L21-L24` → after: `L22-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L22-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L22-L29) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L21-L24)

```diff
-     var Yq = gq(39617);
-     const lq = "openpbrGeometryInfo",
-       Oq = "struct geometryInfoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32};struct geometryInfoAnisoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32,\nanisotropy: f32,\nanisotropicTange … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674),
+       wC = ZC(41911),
+       bC = ZC(41913),
+       nC = ZC(41919),
+       fC = ZC(41909);
+     const oC = "pbrFragmentDeclaration",
+       qC = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
+     QC.b.IncludesShadersStore[oC] || (QC.b.IncludesShadersStore[oC] = qC);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L28-L37` → after: `L33-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L33-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L33-L44) · [Before (L28-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L28-L37)

```diff
-     }
-   },
-   61770: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "openpbrIblFunctions",
-       Oq = "#ifdef REFLECTION\nfn sampleIrradiance(\nsurfaceNormal: vec3f\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,vEnvironmentIrradianceSH: vec3f\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defi … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     };
+     var WC = ZC(41703),
+       NC = ZC(41708),
+       MC = ZC(61185),
+       gC = ZC(41755),
+       SC = ZC(61213),
+       pC = ZC(41925),
+       PC = ZC(41934),
+       GC = ZC(41961);
+     const RC = "samplerFragmentAlternateDeclaration",
+       AC = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     QC.b.IncludesShadersStore[RC] || (QC.b.IncludesShadersStore[RC] = AC);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L41-L50` → after: `L48-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L48-L52) · [Before (L41-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L41-L50)

```diff
-     }
-   },
-   61777: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "openpbrSubsurfaceLayerData",
-       Oq = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     };
+     var JC = ZC(61222);
+     const IC = "pbrFragmentSamplersDeclaration",
+       iC = "#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BAS … [truncated]
+     QC.b.IncludesShadersStore[IC] || (QC.b.IncludesShadersStore[IC] = iC);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L54-L63` → after: `L56-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L56-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L56-L82) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L54-L63)

```diff
-     }
-   },
-   61774: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "openpbrTransmissionLayerData",
-       Oq = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     };
+     var eC = ZC(41967),
+       hC = ZC(41996),
+       KC = ZC(41816),
+       YC = ZC(42005),
+       dC = ZC(41977),
+       mC = ZC(41726),
+       HC = ZC(61231),
+       EC = ZC(61235),
+       lC = ZC(61238),
+       XC = ZC(41975),
+       cC = ZC(41952),
+       uC = ZC(61198),
+       rC = ZC(41938),
+       sC = ZC(61247),
+       TC = ZC(61250),
+ ... (11 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L65-L77` → after: `L84-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L84-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L84-L89) · [Before (L65-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L65-L77)

```diff
-       name: lq,
-       shader: Oq
-     }
-   },
-   61748: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     gq(41973), gq(41979);
-     const lq = "openpbrUboDeclaration",
-       Oq = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+         name: OC,
+         shader: kC
+       },
+       Cz = "pbrBlockReflectivity",
+       zz = "struct reflectivityOutParams\n{float microSurface;float roughness;float diffuseRoughness;float reflectanceF0;vec3 reflectanceF90;vec3 colorReflectanceF0;vec3 colorReflectanceF90;\n#ifdef METALLICWORKFLOW\nvec3 surfaceAlbedo;float metallic;float specularWeight;vec3 die … [truncated]
+     QC.b.IncludesShadersStore[Cz] || (QC.b.IncludesShadersStore[Cz] = zz);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L79-L101` → after: `L91-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L91-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L91-L96) · [Before (L79-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L79-L101)

```diff
-       name: lq,
-       shader: Oq
-     }
-   },
-   61753: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       openpbrPixelShaderWGSL: () => Og
-     });
-     var Yq = gq(39617),
-       lq = gq(42172),
-       Oq = gq(42177),
-       mq = gq(42185),
-       xq = gq(41973),
-       Aq = gq(41979),
-       cq = gq(61748),
-       uq = gq(42029),
- ... (7 more removed lines; see GitHub link above)
+         name: Cz,
+         shader: zz
+       },
+       Qz = "pbrBlockAmbientOcclusion",
+       wz = "struct ambientOcclusionOutParams\n{vec3 ambientOcclusionColor;\n#if DEBUGMODE>0 && defined(AMBIENT)\nvec3 ambientOcclusionColorMap;\n#endif\n};ambientOcclusionOutParams ambientOcclusionBlock(\n#ifdef AMBIENT\nin vec3 ambientOcclusionColorMap_,\nin vec4 vAmbientInfos\n … [truncated]
+     QC.b.IncludesShadersStore[Qz] || (QC.b.IncludesShadersStore[Qz] = wz);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L103-L130` → after: `L98-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L98-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L98-L103) · [Before (L103-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L103-L130)

```diff
-       name: Vq,
-       shader: dq
-     };
-     var Hq = gq(42228),
-       oq = gq(42253),
-       Pq = gq(42074),
-       Qq = gq(42258),
-       yq = gq(42238),
-       tq = gq(42e3),
-       rq = gq(61626),
-       vq = gq(61631),
-       hq = gq(61635),
-       nq = gq(42231),
-       bq = gq(42210),
-       iq = gq(61603),
-       Zq = gq(42196),
- ... (12 more removed lines; see GitHub link above)
+         name: Qz,
+         shader: wz
+       },
+       nz = "pbrBlockAlphaFresnel",
+       fz = "#ifdef ALPHAFRESNEL\n#if defined(ALPHATEST) || defined(ALPHABLEND)\nstruct alphaFresnelOutParams\n{float alpha;};\n#define pbr_inline\nalphaFresnelOutParams alphaFresnelBlock(\nin vec3 normalW,\nin vec3 viewDirectionW,\nin float alpha,\nin float microSurface\n)\n{alph … [truncated]
+     QC.b.IncludesShadersStore[nz] || (QC.b.IncludesShadersStore[nz] = fz);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L135-L137` → after: `L108-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L108-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L108-L110) · [Before (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L135-L137)

```diff
-       Fq = "openpbrNormalMapFragmentFunctions",
-       sq = "#if defined(GEOMETRY_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal,_SAMPLERNAME_,geometryNormal)\n#endif\n#if defined(GEOMETRY_COAT_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_COAT_NORMA … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[Fq] || (Yq.d.IncludesShadersStoreWGSL[Fq] = sq);
+       qz = "pbrBlockAnisotropic",
+       Fz = "#ifdef ANISOTROPIC\nstruct anisotropicOutParams\n{float anisotropy;vec3 anisotropicTangent;vec3 anisotropicBitangent;vec3 anisotropicNormal;\n#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)\nvec3 anisotropyMapData;\n#endif\n};\n#define pbr_inline\nanisotropicOutParams … [truncated]
+     QC.b.IncludesShadersStore[qz] || (QC.b.IncludesShadersStore[qz] = Fz);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L139-L146` → after: `L112-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L112-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L112-L117) · [Before (L139-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L139-L146)

```diff
-       name: Fq,
-       shader: sq
-     };
-     var wq = gq(42222),
-       Kq = gq(61761);
-     const Cq = "openpbrConductorReflectance",
-       Iq = "#define pbr_inline\nfn conductorReflectance(baseColor: vec3f,specularColor: vec3f,specularWeight: f32)->ReflectanceParams\n{var outParams: ReflectanceParams;\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)\noutParams.coloredF0=baseColor*specularWeigh … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[Cq] || (Yq.d.IncludesShadersStoreWGSL[Cq] = Iq);
+         name: qz,
+         shader: Fz
+       },
+       Nz = "pbrBlockReflection",
+       Mz = "#ifdef REFLECTION\nstruct reflectionOutParams\n{vec4 environmentRadiance;vec3 environmentIrradiance;\n#ifdef REFLECTIONMAP_3D\nvec3 reflectionCoords;\n#else\nvec2 reflectionCoords;\n#endif\n#ifdef SS_TRANSLUCENCY\n#ifdef USESPHERICALFROMREFLECTIONMAP\n#if !defined(NOR … [truncated]
+     QC.b.IncludesShadersStore[Nz] || (QC.b.IncludesShadersStore[Nz] = Mz);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L151-L153` → after: `L122-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L122-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L122-L124) · [Before (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L151-L153)

```diff
-       Dq = "openpbrAmbientOcclusionFunctions",
-       qE = "fn compute_specular_occlusion(n_dot_v: f32,metallic: f32,ambient_occlusion: f32,roughness: f32)->f32\n{let specular_occlusion: f32=saturate(pow(n_dot_v+ambient_occlusion,exp2(-16.0*roughness-1.0))-1.0+ambient_occlusion);return mix(specular_occlusion,1.0,metallic*squar … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[Dq] || (Yq.d.IncludesShadersStoreWGSL[Dq] = qE);
+       Sz = "pbrBlockSheen",
+       pz = "#ifdef SHEEN\nstruct sheenOutParams\n{float sheenIntensity;vec3 sheenColor;float sheenRoughness;\n#ifdef SHEEN_LINKWITHALBEDO\nvec3 surfaceAlbedo;\n#endif\n#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)\nfloat sheenAlbedoScaling;\n#endif\n#if defined(REF … [truncated]
+     QC.b.IncludesShadersStore[Sz] || (QC.b.IncludesShadersStore[Sz] = pz);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L155-L162` → after: `L126-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L126-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L126-L131) · [Before (L155-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L155-L162)

```diff
-       name: Dq,
-       shader: qE
-     };
-     var gE = gq(61764),
-       YE = gq(61770);
-     const lE = "openpbrVolumeFunctions",
-       OE = "struct OpenPBRHomogeneousVolume {extinction_coeff: vec3f, \nss_albedo: vec3f, \nmulti_scatter_color: vec3f, \nabsorption_coeff: vec3f, \nscatter_coeff: vec3f, \nanisotropy: f32, };fn computeOpenPBRTransmissionVolume(\ntransmission_color: vec3f,\ntransmission_depth: f3 … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lE] || (Yq.d.IncludesShadersStoreWGSL[lE] = OE);
+         name: Sz,
+         shader: pz
+       },
+       Gz = "pbrBlockClearcoat",
+       Rz = "struct clearcoatOutParams\n{vec3 specularEnvironmentR0;float conservationFactor;vec3 clearCoatNormalW;vec2 clearCoatAARoughnessFactors;float clearCoatIntensity;float clearCoatRoughness;\n#ifdef REFLECTION\nvec3 finalClearCoatRadianceScaled;\n#endif\n#ifdef CLEARCOAT_T … [truncated]
+     QC.b.IncludesShadersStore[Gz] || (QC.b.IncludesShadersStore[Gz] = Rz);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L164-L171` → after: `L133-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L133-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L133-L138) · [Before (L164-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L164-L171)

```diff
-       name: lE,
-       shader: OE
-     };
-     var xE = gq(42267),
-       AE = gq(61673);
-     const cE = "openpbrNormalMapFragment",
-       uE = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(GEOMETRY_NORMAL)\nvar normalScale: f32=uniforms.vGeometryNormalI … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[cE] || (Yq.d.IncludesShadersStoreWGSL[cE] = uE);
+         name: Gz,
+         shader: Rz
+       },
+       xz = "pbrBlockIridescence",
+       Jz = "struct iridescenceOutParams\n{float iridescenceIntensity;float iridescenceIOR;float iridescenceThickness;vec3 specularEnvironmentR0;};\n#ifdef IRIDESCENCE\n#define pbr_inline\n#define inline\niridescenceOutParams iridescenceBlock(\nin vec4 vIridescenceParams\n,in floa … [truncated]
+     QC.b.IncludesShadersStore[xz] || (QC.b.IncludesShadersStore[xz] = Jz);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L176-L178` → after: `L143-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L143-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L143-L153) · [Before (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L176-L178)

```diff
-       WE = "openpbrBlockNormalFinal",
-       NE = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[WE] || (Yq.d.IncludesShadersStoreWGSL[WE] = NE);
+       iz = "pbrBlockSubSurface",
+       vz = "struct subSurfaceOutParams\n{vec3 specularEnvironmentReflectance;\n#ifdef SS_REFRACTION\nvec3 finalRefraction;vec3 surfaceAlbedo;\n#ifdef SS_LINKREFRACTIONTOTRANSPARENCY\nfloat alpha;\n#endif\nfloat refractionOpacity;\n#endif\n#ifdef SS_TRANSLUCENCY\nvec3 transmittanc … [truncated]
+     QC.b.IncludesShadersStore[iz] || (QC.b.IncludesShadersStore[iz] = vz);
+     const ez = {
+       name: iz,
+       shader: vz
+     };
+     var hz = ZC(41946);
+     const Kz = "pbrBlockReflectance0",
+       Yz = "float reflectanceF0=reflectivityOut.reflectanceF0;vec3 specularEnvironmentR0=reflectivityOut.colorReflectanceF0;vec3 specularEnvironmentR90=reflectivityOut.colorReflectanceF90;\n#ifdef ALPHAFRESNEL\nfloat reflectance90=fresnelGrazingReflectance(reflectanceF0);specular … [truncated]
+     QC.b.IncludesShadersStore[Kz] || (QC.b.IncludesShadersStore[Kz] = Yz);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L183-L185` → after: `L158-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L158-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L158-L170) · [Before (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L183-L185)

```diff
-       VE = "openpbrBaseLayerData",
-       dE = "var base_color=vec3f(0.8);var base_metalness: f32=0.0;var base_diffuse_roughness: f32=0.0;var specular_weight: f32=1.0;var specular_roughness: f32=0.3;var specular_color: vec3f=vec3f(1.0);var specular_roughness_anisotropy: f32=0.0;var specular_ior: f32=1.5;var alpha:  … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[VE] || (Yq.d.IncludesShadersStoreWGSL[VE] = dE);
+       mz = "pbrClusteredLightingFunctions",
+       Hz = "#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\n#include<clusteredLightingFunctions>\n#define inline\nlightingInfo computeClusteredLighting(\nsampler2D lightDataTexture,\nsampler2D tileMaskTexture,\nvec4 lightData,\nivec2 sliceRange,\nvec3 V,\nvec3 N,\nvec3 posW, … [truncated]
+     QC.b.IncludesShadersStore[mz] || (QC.b.IncludesShadersStore[mz] = Hz);
+     const Ez = {
+       name: mz,
+       shader: Hz
+     };
+     var lz = ZC(42013),
+       Xz = ZC(61263),
+       cz = ZC(42020);
+     const uz = "pbrBlockNormalFinal",
+       rz = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=gl_FrontFacing ? faceNormal : -faceNormal;\n#endif\nnormalW*=sign(dot(normalW,faceNormal) … [truncated]
+     QC.b.IncludesShadersStore[uz] || (QC.b.IncludesShadersStore[uz] = rz);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L190-L194` → after: `L175-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L175-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L175-L178) · [Before (L190-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L190-L194)

```diff
-     var HE = gq(61774),
-       oE = gq(61777);
-     const PE = "openpbrCoatLayerData",
-       QE = "var coat_weight: f32=0.0f;var coat_color: vec3f=vec3f(1.0f);var coat_roughness: f32=0.0f;var coat_roughness_anisotropy: f32=0.0f;var coat_ior: f32=1.6f;var coat_darkening: f32=1.0f;var geometry_coat_tangent: vec2f=vec2f(1.0f,0.0f);\n#ifdef COAT_WEIGHT\nvar coatWeightF … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[PE] || (Yq.d.IncludesShadersStoreWGSL[PE] = QE);
+     var Tz = ZC(42033);
+     const az = "pbrBlockLightmapInit",
+       tz = "#ifdef LIGHTMAP\nvec4 lightmapColor=TEXRD(lightmapSampler,vLightmapUV+uvOffset);\n#ifdef RGBDLIGHTMAP\nlightmapColor.rgb=fromRGBD(lightmapColor);\n#endif\n#ifdef GAMMALIGHTMAP\nlightmapColor.rgb=toLinearSpace(lightmapColor.rgb);\n#endif\nlightmapColor.rgb*=vLightmapIn … [truncated]
+     QC.b.IncludesShadersStore[az] || (QC.b.IncludesShadersStore[az] = tz);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L199-L201` → after: `L183-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L183-L185) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L199-L201)

```diff
-       tE = "openpbrThinFilmLayerData",
-       rE = "#ifdef THIN_FILM\nvar thin_film_weight: f32=uniforms.vThinFilmWeight;var thin_film_thickness: f32=uniforms.vThinFilmThickness.r*1000.0f; \nvar thin_film_ior: f32=uniforms.vThinFilmIor;\n#ifdef THIN_FILM_WEIGHT\nvar thinFilmWeightFromTexture: f32=TEXRD(thinFilmWeightSa … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[tE] || (Yq.d.IncludesShadersStoreWGSL[tE] = rE);
+       jz = "pbrBlockGeometryInfo",
+       yz = "float NdotVUnclamped=dot(normalW,viewDirectionW);float NdotV=absEps(NdotVUnclamped);float alphaG=convertRoughnessToAverageSlope(roughness);vec2 AARoughnessFactors=getAARoughnessFactors(normalW.xyz);\n#ifdef SPECULARAA\nalphaG+=AARoughnessFactors.y;\n#endif\n#if define … [truncated]
+     QC.b.IncludesShadersStore[jz] || (QC.b.IncludesShadersStore[jz] = yz);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L206-L208` → after: `L190-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L190-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L190-L192) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L206-L208)

```diff
-       hE = "openpbrFuzzLayerData",
-       nE = "var fuzz_weight: f32=0.0f;var fuzz_color: vec3f=vec3f(1.0f);var fuzz_roughness: f32=0.0f;\n#ifdef FUZZ\n#ifdef FUZZ_WEIGHT\nlet fuzzWeightFromTexture: vec4f=TEXRD(fuzzWeightSampler,fuzzWeightSamplerSampler,fragmentInputs.vFuzzWeightUV+uvOffset);\n#endif\n#ifdef FUZZ_C … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[hE] || (Yq.d.IncludesShadersStoreWGSL[hE] = nE);
+       Uz = "pbrBlockReflectance",
+       Bz = "#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)\nvec3 baseSpecularEnvironmentReflectance=getReflectanceFromBRDFLookup(vec3(reflectanceF0),reflectivityOut.reflectanceF90,environmentBrdf);\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)\ … [truncated]
+     QC.b.IncludesShadersStore[Uz] || (QC.b.IncludesShadersStore[Uz] = Bz);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L213-L215` → after: `L197-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L197-L199) · [Before (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L213-L215)

```diff
-       iE = "openpbrAmbientOcclusionData",
-       ZE = "var ambient_occlusion: vec3f=vec3f(1.0f,1.0f,1.0f);var specular_ambient_occlusion: f32=1.0f;var coat_specular_ambient_occlusion: f32=1.0f;\n#ifdef AMBIENT_OCCLUSION\nvar ambientOcclusionFromTexture: vec3f=TEXRD(ambientOcclusionSampler,ambientOcclusionSamplerSampler,fr … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[iE] || (Yq.d.IncludesShadersStoreWGSL[iE] = ZE);
+       kz = "pbrBlockDirectLighting",
+       Vz = "vec3 diffuseBase=vec3(0.,0.,0.);\n#ifdef SS_TRANSLUCENCY\nvec3 diffuseTransmissionBase=vec3(0.,0.,0.);\n#endif\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#ifdef CLEARCOAT\nvec3 clearCoatBase=vec3(0.,0.,0.);\n#endif\n#ifdef SHEEN\nvec3 sheenBase=v … [truncated]
+     QC.b.IncludesShadersStore[kz] || (QC.b.IncludesShadersStore[kz] = Vz);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L220-L230` → after: `L204-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L204-L207) · [Before (L220-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L220-L230)

```diff
-     var ME = gq(42275);
-     const TE = "openpbrBackgroundTransmission",
-       zE = "var slab_translucent_background: vec4f=vec4f(0.,0.,0.,1.);\n#ifdef REFRACTED_BACKGROUND\n{let refractionLOD: f32=min(transmission_roughness,0.8)*uniforms.vBackgroundRefractionInfos.x;let lodTexelSize: f32=pow(2.0f,refractionLOD-uniforms.vBackgroundRefractionInfos.x);\ … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[TE] || (Yq.d.IncludesShadersStoreWGSL[TE] = zE);
-     const SE = {
-         name: TE,
-         shader: zE
-       },
-       pE = "openpbrEnvironmentLighting",
-       GE = "#if defined(REFLECTION) || defined(REFRACTED_BACKGROUND)\nvar coatAbsorption=vec3f(1.0f);var coatIblFresnel: f32=0.0;if (coat_weight>0.0) {coatIblFresnel=computeDielectricIblFresnel(coatReflectance,coatGeoInfo.environmentBrdf);let hemisphere_avg_fresnel: f32=coatRefle … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[pE] || (Yq.d.IncludesShadersStoreWGSL[pE] = GE);
+     var zZ = ZC(42036);
+     const ZZ = "pbrBlockFinalLitComponents",
+       QZ = "aggShadow=aggShadow/numLights;\n#if defined(ENVIRONMENTBRDF)\n#ifdef MS_BRDF_ENERGY_CONSERVATION\nvec3 baseSpecularEnergyConservationFactor=getEnergyConservationFactor(vec3(reflectanceF0),environmentBrdf);vec3 coloredEnergyConservationFactor=getEnergyConservationFacto … [truncated]
+     QC.b.IncludesShadersStore[ZZ] || (QC.b.IncludesShadersStore[ZZ] = QZ);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L235-L237` → after: `L212-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L212-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L212-L214) · [Before (L235-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L235-L237)

```diff
-       JE = "openpbrDirectLightingInit",
-       kE = "#ifdef LIGHT{X}\nvar preInfo{X}: preLightingInfo;var preInfoCoat{X}: preLightingInfo;let lightColor{X}: vec4f=light{X}.vLightDiffuse;var shadow{X}: f32=1.0f;\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X} … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[JE] || (Yq.d.IncludesShadersStoreWGSL[JE] = kE);
+       bZ = "pbrBlockFinalUnlitComponents",
+       nZ = "vec3 finalDiffuse=diffuseBase;finalDiffuse*=surfaceAlbedo;\n#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)\nfinalDiffuse*=subSurfaceOut.refractionOpacity;\n#endif\n#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)\nfinalDi … [truncated]
+     QC.b.IncludesShadersStore[bZ] || (QC.b.IncludesShadersStore[bZ] = nZ);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L242-L244` → after: `L219-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L219-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L219-L221) · [Before (L242-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L242-L244)

```diff
-       UE = "openpbrDirectLighting",
-       FE = "#ifdef LIGHT{X}\n{var slab_diffuse: vec3f=vec3f(0.f,0.f,0.f);var slab_translucent: vec3f=vec3f(0.f,0.f,0.f);var slab_glossy: vec3f=vec3f(0.f,0.f,0.f);var specularFresnel: f32=0.0f;var specularColoredFresnel: vec3f=vec3f(0.f,0.f,0.f);var slab_metal: vec3f=vec3f(0.f,0.f … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[UE] || (Yq.d.IncludesShadersStoreWGSL[UE] = FE);
+       oZ = "pbrBlockFinalColorComposition",
+       qZ = "vec4 finalColor=vec4(\n#ifndef UNLIT\n#ifdef REFLECTION\nfinalIrradiance +\n#endif\n#ifdef SPECULARTERM\nfinalSpecularScaled +\n#endif\n#ifdef SHEEN\nfinalSheenScaled +\n#endif\n#ifdef CLEARCOAT\nfinalClearCoatScaled +\n#endif\n#ifdef REFLECTION\nfinalRadianceScaled + … [truncated]
+     QC.b.IncludesShadersStore[oZ] || (QC.b.IncludesShadersStore[oZ] = qZ);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L249-L255` → after: `L226-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L226-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L226-L231) · [Before (L249-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L249-L255)

```diff
-     var XE = gq(42289),
-       wE = gq(42291),
-       KE = gq(61682),
-       CE = gq(42300);
-     const IE = "openpbrBlockPrePass",
-       eE = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[IE] || (Yq.d.IncludesShadersStoreWGSL[IE] = eE);
+     var WZ = ZC(42039),
+       NZ = ZC(42041),
+       MZ = ZC(61271);
+     const gZ = "pbrBlockPrePass",
+       SZ = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nfloat writeGeometryInfo=1.0;\n#else\nfloat writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_INDEX,vec4(vPositionW,writeGeometryInfo));\ … [truncated]
+     QC.b.IncludesShadersStore[gZ] || (QC.b.IncludesShadersStore[gZ] = SZ);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L260-L266` → after: `L236-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L236-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/379.js#L236-L242) · [Before (L260-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/379.js#L260-L266)

```diff
-     var qg = gq(42302),
-       Eg = gq(61688);
-     const gg = "openpbrPixelShader",
-       Yg = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<openpbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n# … [truncated]
-     Yq.d.ShadersStoreWGSL[gg] || (Yq.d.ShadersStoreWGSL[gg] = Yg);
-     const lg = [lq.e, Oq.b, mq.d, xq.b, Aq.b, cq.b, uq.b, Bq.c, Wq.b, Nq.e, aq.b, jq, Hq.c, oq.c, Pq.d, Qq.c, yq.d, tq.b, rq.c, vq.b, hq.c, nq.b, bq.c, iq.d, Zq.b, fq.c, Mq.c, Tq.e, zq.e, Sq.b, pq.d, Gq.c, Lq.e, Jq.e, Uq, Xq, wq.b, Kq.e, eq, EE, gE.e, YE.c, mE, xE.d, AE.e, BE, aE … [truncated]
-     for (const mg of lg) Yq.d.IncludesShadersStoreWGSL[mg.name] || (Yq.d.IncludesShadersStoreWGSL[mg.name] = mg.shader);
+     var PZ = ZC(42044),
+       GZ = ZC(61275);
+     const RZ = "pbrPixelShader",
+       AZ = "#define PBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_EXTENSION\n#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#if … [truncated]
+     QC.b.ShadersStore[RZ] || (QC.b.ShadersStore[RZ] = AZ);
+     const xZ = [wC.d, bC.c, nC.e, fC.c, FC, WC.b, NC.e, MC.b, gC.e, SC.e, pC.c, PC.b, GC.e, xC, JC.b, vC, eC.c, hC.b, KC.c, YC.c, dC.e, mC.d, HC.d, EC.b, lC.b, XC.d, cC.e, uC.c, rC.c, sC.c, TC.e, aC.d, tC.e, DC.d, jC.d, yC.e, LC.d, UC.d, BC.e, VC, Zz, bz, oz, Wz, gz, Pz, Az, Iz,  … [truncated]
+     for (const IZ of xZ) QC.b.IncludesShadersStore[IZ.name] || (QC.b.IncludesShadersStore[IZ.name] = IZ.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/380.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/380.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/380.js` (Changed code · before: `L4-L11` → after: `L4-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfd) · [After (L4-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/380.js#L4-L195) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/380.js#L4-L11)

```diff
-   61805: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       textureMergerPixelShaderWGSL: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "textureMergerPixelShader",
-       Oq = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
-     Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
+   61198: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "harmonicsFunctions",
+       bC = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   61255: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+ ... (176 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/381.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/381.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/381.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/381.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/381.js#L4)

```diff
-   61812: (qq, Eq, gq) => {
+   61198: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "harmonicsFunctions",
+       bC = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   61397: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/381.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/381.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/381.js#L6)

```diff
-       textureMergerPixelShader: () => mq
+       openpbrVertexShader: () => zz
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/381.js` (Changed code · before: `L8-L11` → after: `L48-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1) · [After (L48-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/381.js#L48-L115) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/381.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "textureMergerPixelShader",
-       Oq = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
-     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "sceneVertexDeclaration",
+       bC = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     };
+     var fC = ZC(41699);
+     const oC = "openpbrVertexDeclaration",
+       qC = "#include<sceneVertexDeclaration>\n#ifdef BASE_COLOR\nuniform vec2 vBaseColorInfos;uniform mat4 baseColorMatrix;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;\n#endif\nuniform float vBaseDiffuseRoughness;\n#ifdef BASE_DIFFUSE … [truncated]
+     QC.b.IncludesShadersStore[oC] || (QC.b.IncludesShadersStore[oC] = qC);
+     const FC = {
+       name: oC,
+       shader: qC
+     };
+ ... (52 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/382.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/382.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/382.js` (Changed code · before: `L4` → after: `L4-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b) · [After (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/382.js#L4-L18) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/382.js#L4)

```diff
-   61820: (qq, Eq, gq) => {
+   61286: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     ZC(42058), ZC(42063);
+     const wC = "pbrUboDeclaration",
+       bC = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   61308: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/382.js` (Changed code · before: `L6` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471bR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/382.js#L20) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/382.js#L6)

```diff
-       proceduralVertexShaderWGSL: () => mq
+       pbrPixelShaderWGSL: () => gZ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/382.js` (Changed code · before: `L8-L11` → after: `L22-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471bR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b) · [After (L22-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/382.js#L22-L222) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/382.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "proceduralVertexShader",
-       Oq = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
-     Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674),
+       wC = ZC(42223),
+       bC = ZC(42226),
+       nC = ZC(42229),
+       fC = ZC(42058),
+       oC = ZC(42063),
+       qC = ZC(61286),
+       FC = ZC(42092),
+       WC = ZC(61313),
+       NC = ZC(42235),
+       MC = ZC(42255);
+     const gC = "samplerFragmentAlternateDeclaration",
+       SC = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     QC.b.IncludesShadersStoreWGSL[gC] || (QC.b.IncludesShadersStoreWGSL[gC] = SC);
+     const pC = {
+       name: gC,
+ ... (185 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/383.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/383.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08)

#### 1. `bundles/preprod.bloxd.io/chunks/js/383.js` (Changed code · before: `L4-L11` → after: `L4-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08) · [After (L4-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/383.js#L4-L210) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/383.js#L4-L11)

```diff
-   61827: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       proceduralVertexShader: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "proceduralVertexShader",
-       Oq = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
-     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
+   61300: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "harmonicsFunctions",
+       bC = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   61353: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+ ... (191 more added lines; see GitHub link above)
```
