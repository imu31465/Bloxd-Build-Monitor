# Changed — Bundle Modifications Report (Part 019 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `19 / 50` (**308** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 018](part-018.md) · [Part 020 →](part-020.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/384.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/384.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L4` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/384.js#L4-L31) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/384.js#L4)

```diff
-   61838: (qq, Eq, gq) => {
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
+   61455: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+ ... (12 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L6` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/384.js#L33) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/384.js#L6)

```diff
-       greasedLinePixelShaderWGSL: () => mq
+       openpbrVertexShaderWGSL: () => UC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L8-L11` → after: `L35-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L35-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/384.js#L35-L88) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/384.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "greasedLinePixelShader",
-       Oq = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAn … [truncated]
-     Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674),
+       wC = ZC(42058),
+       bC = ZC(42063),
+       nC = ZC(61455),
+       fC = ZC(42074),
+       oC = ZC(42092),
+       qC = ZC(42076),
+       FC = ZC(61291),
+       WC = ZC(42078),
+       NC = ZC(42080),
+       MC = ZC(42082),
+       gC = ZC(42090),
+       SC = ZC(42100),
+       pC = ZC(61300);
+     const PC = "openpbrNormalMapVertexDeclaration",
+       GC = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+ ... (38 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/385.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/385.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L4` → after: `L4-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/385.js#L4-L96) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/385.js#L4)

```diff
-   61848: (qq, Eq, gq) => {
+   61416: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "openpbrDielectricReflectance",
+       bC = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   61418: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+ ... (77 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L6` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/385.js#L98) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/385.js#L6)

```diff
-       greasedLinePixelShader: () => mq
+       openpbrPixelShader: () => fZ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L8-L11` → after: `L100-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L100-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/385.js#L100-L285) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/385.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "greasedLinePixelShader",
-       Oq = "precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeA … [truncated]
-     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
+     var QC = ZC(39674),
+       wC = ZC(41911),
+       bC = ZC(41913),
+       nC = ZC(41919),
+       fC = ZC(61414),
+       oC = ZC(41909);
+     const qC = "openpbrFragmentDeclaration",
+       FC = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
+     QC.b.IncludesShadersStore[qC] || (QC.b.IncludesShadersStore[qC] = FC);
+     const WC = {
+       name: qC,
+       shader: FC
+     };
+     var NC = ZC(41703),
+       MC = ZC(41708),
+       gC = ZC(61397),
+ ... (170 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/386.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/386.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L4-L7` → after: `L4-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L4-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/386.js#L4-L58) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/386.js#L4-L7)

```diff
-   61853: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       rebuildScenePbrPipelines: () => xq,
-       rebuildSceneRenderables: () => Aq
+   61471: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "openpbrDielectricReflectance",
+       bC = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   61474: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+ ... (39 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L9-L15` → after: `L60-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L60-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/386.js#L60-L66) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/386.js#L9-L15)

```diff
-     var Yq = gq(41489),
-       lq = (qq, Eq) => qq.order - Eq.order,
-       Oq = 8,
-       mq = qq => Aq(qq);
-     async function xq(qq) {
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       await cq(qq, "pbr", Eq)
+     var QC = ZC(39674);
+     const wC = "openpbrTransmissionLayerData",
+       bC = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L17-L18` → after: `L68-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L68-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/386.js#L68-L80) · [Before (L17-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/386.js#L17-L18)

```diff
-     async function Aq(qq) {
-       await cq(qq, void 0, !1)
+   },
+   61455: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+     });
+     var QC = ZC(39674);
+     ZC(42058), ZC(42063);
+     const wC = "openpbrUboDeclaration",
+       bC = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
+     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L20-L192` → after: `L82-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L82-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/386.js#L82-L269) · [Before (L20-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/386.js#L20-L192)

```diff
-     async function cq(qq, Eq, xq) {
-       const Aq = qq;
-       if (!Aq._built && !xq) return;
-       const cq = Aq._lightListVersion ?? 0,
-         uq = Aq.surface.engine,
-         Bq = qq => {
-           Aq._z ? qq.forEach((qq => qq())) : (0, Yq.c)(uq, (() => qq.forEach((qq => qq()))))
-         };
-       let Wq = !1,
-         Nq = !1,
-         aq = !1,
-         Vq = !1;
-       try {
-         for (let qq = 1;; qq++) {
-           if (void 0 !== Eq) {
-             await dq();
- ... (157 more removed lines; see GitHub link above)
+   },
+   61462: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       openpbrPixelShaderWGSL: () => bZ
+     });
+     var QC = ZC(39674),
+       wC = ZC(42223),
+       bC = ZC(42226),
+       nC = ZC(42229),
+       fC = ZC(42058),
+       oC = ZC(42063),
+       qC = ZC(61455),
+       FC = ZC(42092),
+       WC = ZC(61313),
+       NC = ZC(42235),
+       MC = ZC(42255),
+ ... (172 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/72.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/72.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ab68c546b14731dbc0f306e2c15992497d2607a95114515c4232965456e0f44b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/72.js` (Changed code · before: `L4` → after: `L4-L16271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ab68c546b14731dbc0f306e2c15992497d2607a95114515c4232965456e0f44bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ab68c546b14731dbc0f306e2c15992497d2607a95114515c4232965456e0f44b) · [After (L4-L16271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/72.js#L4-L16271) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/72.js#L4)

```diff
-   37102: (qq, Eq, gq) => {
+   9199: (CC, zC) => {
+     zC.c = 8, zC.g = function(CC, zC, ZC, QC) {
+       if (!Array.isArray(CC)) return !!CC;
+       zC -= Math.floor(zC), ZC -= Math.floor(ZC), QC -= Math.floor(QC);
+       for (var wC = 0; wC < CC.length; wC += 6)
+         if (zC >= CC[wC] && zC < CC[wC + 3] && ZC >= CC[wC + 1] && ZC < CC[wC + 4] && QC >= CC[wC + 2] && QC < CC[wC + 5]) return !0;
+       return !1
+     }, zC.d = function(CC) {
+       for (var zC = [], ZC = 0; ZC < CC.length; ZC++) {
+         var QC = CC[ZC];
+         if (2 !== QC.length || 3 !== QC[0].length || 3 !== QC[1].length) throw new Error("Subvoxel boxes must contain two three-dimensional bounds");
+         for (var wC = 0; wC < 3; wC++) {
+           var bC = QC[0][wC],
+             nC = QC[1][wC];
+           if (!Number.isInteger(bC) || !Number.isInteger(nC) || bC < 0 || nC > 8 || bC >= nC) throw new Error("Subvoxel bounds must be integers satisfying 0 <= start < end <= 8");
+           zC[6 * ZC + wC] = bC / 8, zC[6 * ZC + wC + 3] = nC / 8
+ ... (16252 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/72.js` (Changed code · before: `L7` → after: `L16274-L16277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ab68c546b14731dbc0f306e2c15992497d2607a95114515c4232965456e0f44bR16274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ab68c546b14731dbc0f306e2c15992497d2607a95114515c4232965456e0f44b) · [After (L16274-L16277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/72.js#L16274-L16277) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/72.js#L7)

```diff
-       e: () => lq
+       e: () => bC,
+       h: () => nC,
+       k: () => fC,
+       n: () => wC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/72.js` (Changed code · before: `L9-L10` → after: `L16279-L16325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ab68c546b14731dbc0f306e2c15992497d2607a95114515c4232965456e0f44bR16279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ab68c546b14731dbc0f306e2c15992497d2607a95114515c4232965456e0f44b) · [After (L16279-L16325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/72.js#L16279-L16325) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/72.js#L9-L10)

```diff
-     const Yq = ["Boat", "Obsidian Boat", "Hovercraft", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black  … [truncated]
-       lq = 39 == gq.j ? ["canAutoStep", "speedMultiplier"] : null
+     let QC = function(CC) {
+       return CC[CC.bot = 0] = "bot", CC[CC.top = 1] = "top", CC[CC.side = 2] = "side", CC
+     }({});
+     const wC = ["innerLeft", "innerRight", "outerLeft", "outerRight"];
+     class bC {
+       constructor(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC) {
+         this.rootName = CC, this.rootId = zC, this.metaStr = ZC, this.rot = QC, this.open = wC, this.halfblockPlacement = bC, this.Sw = nC, this.treeBase = fC, this.treeCanopy = oC, this.books = qC, this.freshlyGrown = FC, this.roots = WC, this.lava = NC, this.top = MC, this.gras … [truncated]
+       }
+     }
+     new Set(["metaStr", "rot", "halfblockPlacement", "stairsCorner"]);
+ 
+     function nC(CC, zC) {
+       zC.meta = fC(zC.name, zC.id, (zC => CC[zC].id), zC.rootMetaDesc)
+     }
+ 
+     function fC(CC, zC, ZC, nC) {
+ ... (31 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/73.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/73.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51)

#### 1. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L4-L14` → after: `L4-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L4-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L4-L657) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L4-L14)

```diff
-   37109: (qq, Eq, gq) => {
-     if (gq.d(Eq, {
-         b: () => Aq,
-         e: () => lq,
-         g: () => mq,
-         j: () => Oq,
-         m: () => Qq,
-         q: () => jq
-       }), 39 == gq.j) var Yq = gq(37111);
-     const lq = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
-       Oq = ["Blade", "Guard", "Handle"],
+   36909: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => QC
+     });
+     const QC = {
+       "AK-47": {
+         gunType: "semi_automatic",
+         scopeType: "none",
+         muzzleFlashOffsetFromGun: [-5.5, -.25, 0],
+         muzzleFlashScale: 1.5,
+         autoFireWithMouse: !0,
+         fireRate: 600,
+         cadenceMs: 75,
+         equipDelay: 24,
+         damage: 20,
+         reloadTime: 2300,
+ ... (638 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L16-L66` → after: `L659-L7366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L659-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L659-L7366) · [Before (L16-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L16-L66)

```diff
-         Wood: {
-           material: "Wood",
-           baseSword: "Wood Sword",
-           value: 1,
-           epithet: "Timber",
-           palette: ["#b88a52", "#7d5a32", "#3d2a14"],
-           trait: null,
-           bladeDamage: 0,
-           guardReduction: 0,
-           handleCooldown: 1,
-           handleKnockback: 0,
-           handleReach: 0
-         },
-         Stone: {
-           material: "Stone",
-           baseSword: "Stone Sword",
- ... (35 more removed lines; see GitHub link above)
+         "Wood Pickaxe": {
+           displayName: {
+             translationKey: "item:woodPickaxe"
+           },
+           type: "Tool",
+           textureInfo: "wooden_pickaxe",
+           weight: 1,
+           heldItemScale: 1,
+           damage: 18,
+           description: {
+             translationKey: "item:pickaxeDescription"
+           },
+           stackable: !1,
+           harvests: "rock",
+           multiplier: 2,
+           level: 1
+ ... (6692 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L68-L79` → after: `L7368-L7376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R7368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L7368-L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L7368-L7376) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L68-L79)

```diff
-         Diamond: {
-           material: "Diamond",
-           baseSword: "Diamond Sword",
-           value: 4,
-           epithet: "Brilliant",
-           palette: ["#8ff5ec", "#2fbcb0", "#0d4f4a"],
-           trait: "crit",
-           bladeDamage: .12,
-           guardReduction: .07,
-           handleCooldown: .92,
-           handleKnockback: .1,
-           handleReach: 0
+         "Lavaflow Trout": {
+           displayName: {
+             translationKey: "item:lavaflowTrout"
+           },
+           type: "Item",
+           textureInfo: "lavaflow_trout",
+           weight: 1,
+           heldItemScale: 1,
+           stackable: !0
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L81-L131` → after: `L7378-L9259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R7378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L7378-L9259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L7378-L9259) · [Before (L81-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L81-L131)

```diff
-         Moonstone: {
-           material: "Moonstone",
-           baseSword: "Moonstone Sword",
-           value: 4,
-           epithet: "Moonlit",
-           palette: ["#d9d2ff", "#8f7fe0", "#352a73"],
-           trait: "bossBane",
-           bladeDamage: .15,
-           guardReduction: .08,
-           handleCooldown: .9,
-           handleKnockback: .1,
-           handleReach: .25
-         },
-         Magmasteel: {
-           material: "Magmasteel",
-           baseSword: "Magmasteel Sword",
- ... (35 more removed lines; see GitHub link above)
+         "Lavawake Slopefish": {
+           displayName: {
+             translationKey: "item:lavawakeSlopefish"
+           },
+           type: "Item",
+           textureInfo: "lavawake_slopefish",
+           weight: 1,
+           heldItemScale: 1,
+           stackable: !0
+         },
+         "Magma Sardinella": {
+           displayName: {
+             translationKey: "item:magmaSardinella"
+           },
+           type: "Item",
+           textureInfo: "magma_sardinella",
+ ... (1866 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L134-L139` → after: `L9278-L9279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9278-L9279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L9278-L9279) · [Before (L134-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L134-L139)

```diff
-       xq = 4,
-       Aq = "Coal",
-       cq = {
-         Blade: 1,
-         Guard: .6,
-         Handle: .4
+       description: {
+         translationKey: `item:${YC}Description`
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L141-L184` → after: `L9281-L9292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9281-L9292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L9281-L9292) · [Before (L141-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L141-L184)

```diff
-       uq = 1.15,
-       Bq = 1.35,
-       Wq = .06,
-       Nq = {
-         defence: {
-           name: "Bulwark",
-           amount: .06,
-           describe: qq => `${rq(.06*qq)} less damage taken`
-         },
-         coins: {
-           name: "Midas",
-           amount: 4,
-           describe: qq => `Mobs you slay drop ${Math.round(4*qq)}+ extra coins`
-         },
-         crit: {
-           name: "Keen Edge",
- ... (28 more removed lines; see GitHub link above)
+       type: "Item",
+       textureInfo: (0, QC.ne)(KC),
+       weight: 1,
+       heldItemScale: 1,
+       stackable: !0
+     };
+     for (const [KC, YC] of [
+         ["Doom Rivet", "doomRivet"],
+         ["Doom Crest", "doomCrest"]
+       ]) gC[KC] = {
+       displayName: {
+         translationKey: `item:${YC}`
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L186-L225` → after: `L9294-L9559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9294-L9559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L9294-L9559) · [Before (L186-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L186-L225)

```diff
-       aq = {
-         eclipseField: {
-           name: "Eclipse Field",
-           description: "Right-click: slow every mob within 6 blocks for 3s",
-           cooldownMs: 25e3
-         },
-         starfall: {
-           name: "Meteor Shower",
-           description: "Right-click: call five falling stars around you",
-           cooldownMs: 3e4
-         },
-         magmaWave: {
-           name: "Magma Wave",
-           description: "Right-click: lay a line of fire pools ahead of you",
-           cooldownMs: 2e4
-         },
- ... (24 more removed lines; see GitHub link above)
+       description: {
+         translationKey: `item:${YC}Description`
+       },
+       type: "Item",
+       textureInfo: (0, QC.ne)(KC),
+       weight: 1,
+       heldItemScale: 1,
+       stackable: !0,
+       showInCreativeInven: !1
+     };
+     for (const [KC, YC, dC] of [
+         ["Raw Copper", "rawCopper", "raw_copper"],
+         ["Copper Bar", "copperBar", "copper_bar"],
+         ["Iron Grit", "ironGrit", "iron_grit"],
+         ["Gold Grit", "goldGrit", "gold_grit"],
+         ["Copper Grit", "copperGrit", "copper_grit"],
+ ... (250 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L228-L229` → after: `L9705-L9778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9705-L9778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L9705-L9778) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L228-L229)

```diff
-       Vq = 39 == gq.j ? Yq.d : null,
-       dq = "skyblock:forged:";
+       description: {
+         translationKey: "item:mobCageDescription"
+       },
+       type: "Item",
+       textureInfo: "mob_cage",
+       weight: 1,
+       heldItemScale: 1,
+       stackable: !0,
+       showInCreativeInven: !1
+     };
+     for (const KC of ["Pig", "Cow", "Sheep", "Deer", "Stag"]) gC[`Caged ${KC}`] = {
+       displayName: {
+         translationKey: `item:caged${KC}`
+       },
+       description: {
+         translationKey: "item:cagedMobDescription"
+ ... (58 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L232` → after: `L9781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L9781) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L232)

```diff
-       return `${qq} ${Eq}`
+       return [...CC, ...(0, qC.j)(qC.o, zC)].map((CC => vC[CC].id))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L237-L242` → after: `L9785-L9801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9785-L9801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L9785-L9801) · [Before (L237-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L237-L242)

```diff
-       let {
-         blade: Eq,
-         guard: gq,
-         handle: Yq
-       } = qq;
-       return `${dq}${Eq.toLowerCase()}-${gq.toLowerCase()}-${Yq.toLowerCase()}`
+       return CC.split(" ")[0]
+     }
+     const xC = .0018;
+     let JC = Object.values(nC.g).reduce(((CC, zC) => Math.max(CC, zC.id)), 0) + 1;
+     for (const KC in gC) gC[KC].id = JC, gC[KC].name = KC, gC[JC] = gC[KC], (0, wC.h)(gC, gC[KC]), ++JC;
+     const IC = {};
+     for (const KC in gC) {
+       var iC;
+       const CC = gC[KC];
+       IC[KC] = null !== (iC = IC[CC.id]) && void 0 !== iC ? iC : new bC.h(CC)
+     }
+     const vC = {},
+       eC = [nC.g, IC].flatMap(Object.entries);
+     for (const [KC, YC] of eC) vC[KC] = YC, vC[YC.id] = YC;
+     for (const KC of FC.e) {
+       const CC = KC;
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L245-L253` → after: `L9830-L9851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9830-L9851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L9830-L9851) · [Before (L245-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L245-L253)

```diff
-     function oq(qq) {
-       if (! function(qq) {
-           return "string" === typeof qq && qq.startsWith(dq)
-         }(qq)) return null;
-       const Eq = qq.slice(dq.length).split("-").map((qq => lq.find((Eq => Eq.toLowerCase() === qq))));
-       return 3 !== Eq.length || Eq.includes(void 0) ? null : {
-         blade: Eq[0],
-         guard: Eq[1],
-         handle: Eq[2]
+     function fC(CC, zC) {
+       console.assert("meta|charging1" === zC.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|charging1");
+       const ZC = {
+         ...zC
+       };
+       return delete ZC.rootMetaDesc, {
+         [CC]: {
+           ...zC,
+           textureInfo: zC.textureName
+         },
+         [`${CC}|meta|charging2`]: {
+           ...ZC,
+           textureInfo: `${zC.textureName}_charging_2`
+         },
+         [`${CC}|meta|charging3`]: {
+           ...ZC,
+ ... (6 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L258-L305` → after: `L9855-L9887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9855-L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L9855-L9887) · [Before (L258-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L258-L305)

```diff
-     function Qq(qq) {
-       var Eq;
-       let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vq;
-       const Yq = "string" === typeof qq ? oq(qq) : qq;
-       if (null === Yq) return null;
-       const lq = Hq(Yq),
-         Aq = gq === Vq ? Pq.get(lq) : void 0;
-       if (void 0 !== Aq) return Aq;
-       const dq = function(qq, Eq) {
-         var gq, Yq, lq, Aq, Vq, dq, jq, oq, Pq;
-         const {
-           blade: Qq,
-           guard: hq,
-           handle: nq
-         } = qq, bq = mq, iq = Qq === hq && hq === nq, Zq = tq((1 + bq[Qq].bladeDamage) * (iq ? 1 + Wq : 1)), fq = null !== (gq = Eq.damageMultiplier) && void 0 !== gq ? gq : Zq, Mq = null !== (Yq = Eq.cooldownMultiplier) && void 0 !== Yq ? Yq : bq[nq].handleCooldown, Tq = null != … [truncated]
-           const Eq = {},
- ... (32 more removed lines; see GitHub link above)
+     function oC(CC, zC) {
+       console.assert("meta|dir1" === zC.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|dir1");
+       const ZC = {
+         ...zC
+       };
+       return delete ZC.rootMetaDesc, {
+         [CC]: {
+           ...zC,
+           heldItemGlb: CC,
+           textureInfo: zC.textureName
+         },
+         [`${CC}|meta|dir2`]: {
+           ...ZC,
+           displayName: CC,
+           textureInfo: `${zC.textureName}_dir_2`
+         },
+ ... (17 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L307-L320` → after: `L9889-L9931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9889-L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L9889-L9931) · [Before (L307-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L307-L320)

```diff
-           lore: kq,
-           properties: sq,
-           effects: Xq,
-           named: Lq,
-           damageMultiplier: fq,
-           cooldownMultiplier: Mq,
-           knockbackMultiplier: Tq,
-           reachBonus: zq,
-           damageReduction: Sq,
-           traits: pq,
-           ability: Gq,
-           coalCost: Rq,
-           enchantmentTier: Fq,
-           powerMultiplier: tq(fq / Mq)
+           textureInfo: `${zC.textureName}_dir_6`
+         },
+         [`${CC}|meta|dir7`]: {
+           ...ZC,
+           displayName: CC,
+           textureInfo: `${zC.textureName}_dir_7`
+         },
+         [`${CC}|meta|dir8`]: {
+           ...ZC,
+           displayName: CC,
+           textureInfo: `${zC.textureName}_dir_8`
+         },
+         [`${CC}|meta|dir9`]: {
+           ...ZC,
+           displayName: CC,
+           textureInfo: `${zC.textureName}_dir_9`
+ ... (27 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L322-L323` → after: `L9933-L9939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9933-L9939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L9933-L9939) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L322-L323)

```diff
-       }(Yq, null !== (Eq = gq[lq]) && void 0 !== Eq ? Eq : {});
-       return gq === Vq && Pq.set(lq, dq), dq
+       };
+       for (const wC of FC) QC[`${CC}|meta|${wC}`] = {
+         ...ZC,
+         heldItemGlb: `${zC}_${wC}`,
+         textureInfo: `${zC}_${wC}`
+       };
+       return QC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L327` → after: `L9943-L9946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9943-L9946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L9943-L9946) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L327)

```diff
-       return "Blade" === Eq ? qq.blade : "Guard" === Eq ? qq.guard : qq.handle
+       const ZC = {},
+         QC = (0, bC.E)(CC, zC);
+       for (const wC in QC) Object.assign(ZC, fC(wC, QC[wC]));
+       return ZC
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L330-L331` → after: `L9949-L9984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9949-L9984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L9949-L9984) · [Before (L330-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L330-L331)

```diff
-     function tq(qq) {
-       return Math.round(100 * qq) / 100
+     function MC(CC, zC, ZC) {
+       console.assert(4 === ZC.length, "Must have 4 textures for bowl fill metadatas");
+       const QC = {
+         ...zC
+       };
+       delete QC.rootMetaDesc, delete QC.textureInfo, delete QC.afterEatenItem;
+       const wC = `Partially Full ${CC}`,
+         bC = `Half Full ${CC}`,
+         nC = `Nearly Full ${CC}`,
+         fC = CC;
+       return {
+         [wC]: {
+           ...zC,
+           textureInfo: ZC[0],
+           afterEatenItem: "Bowl",
+           rootMetaDesc: `${wC}|meta|charging1`
+ ... (20 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L334-L335` → after: `L9987-L10007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9987-L10007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L9987-L10007) · [Before (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L334-L335)

```diff
-     function rq(qq) {
-       return `${Math.round(100*qq)}%`
+     function gC() {
+       return Object.fromEntries(wC.B.map((CC => {
+         const zC = (0, QC.ke)(CC),
+           ZC = (0, QC.ne)(CC);
+         return [(0, QC.Jb)(CC), {
+           displayName: {
+             translationKey: `item:${zC}SpawnOrb`
+           },
+           type: "Item",
+           textureInfo: `${ZC}_spawn_orb`,
+           weight: 1,
+           heldItemScale: 1,
+           stackable: !0,
+           description: {
+             translationKey: `item:${zC}SpawnOrbDescription`,
+             params: {
+ ... (5 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L338-L339` → after: `L10017-L10056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10017-L10056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/73.js#L10017-L10056) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/73.js#L338-L339)

```diff
-     function vq(qq) {
-       return `${qq>=0?"+":""}${rq(qq)}`
+     function pC() {
+       return Object.fromEntries(wC.p.flatMap((CC => {
+         const zC = (0, QC.ne)(CC);
+         return wC.t[CC].map((ZC => {
+           var wC;
+           const bC = "default" !== ZC && (null === (wC = SC[CC]) || void 0 === wC ? void 0 : wC.includes(ZC)),
+             nC = bC ? {
+               heldItemGlb: (0, QC.ob)(CC, "default")
+             } : {};
+           return [(0, QC.ob)(CC, ZC), {
+             type: "Item",
+             textureInfo: `caught_${zC}_${bC?"default":ZC}`,
+             weight: 1,
+             heldItemScale: 1,
+             stackable: !1,
+             ...nC
+ ... (24 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/74.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/74.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/74.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/74.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/74.js#L4)

```diff
-   4516: (qq, Eq, gq) => {
+   36926: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/74.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4c) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/74.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/74.js#L6)

```diff
-       d: () => uq
+       e: () => QC,
+       i: () => wC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/74.js` (Changed code · before: `L8-L361` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4c) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/74.js#L9-L10) · [Before (L8-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/74.js#L8-L361)

```diff
-     var Yq = gq(24),
-       lq = gq(31),
-       Oq = gq(1274),
-       mq = gq(2733);
-     const xq = 3e4,
-       Aq = 1e3;
- 
-     function cq() {
-       return "visible" === document.visibilityState && "inGame" === Yq.b.get("gameState") && (0, Oq.p)()
-     }
- 
-     function uq(qq, Eq) {
-       (0, mq.v)() || function(qq, Eq, gq) {
-         let Yq = 0;
-         const lq = setInterval((() => {
-           Eq() && (Yq += Aq, Yq >= qq && (clearInterval(lq), gq()))
- ... (338 more removed lines; see GitHub link above)
+     const QC = ["Boat", "Obsidian Boat", "Hovercraft", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black  … [truncated]
+       wC = 39 == ZC.j ? ["canAutoStep", "speedMultiplier"] : null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/75.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/75.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/75.js` (Changed code · before: `L4-L45` → after: `L4-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1) · [After (L4-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/75.js#L4-L253) · [Before (L4-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/75.js#L4-L45)

```diff
-   4524: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => kE,
-       h: () => Bg,
-       k: () => IE,
-       n: () => Eg,
-       o: () => wE,
-       q: () => eE,
-       u: () => pE,
-       y: () => FE,
-       B: () => bE,
-       C: () => ug,
-       E: () => cg,
-       G: () => sE,
-       H: () => SE
-     });
- ... (26 more removed lines; see GitHub link above)
+   36932: (CC, zC, ZC) => {
+     if (ZC.d(zC, {
+         e: () => oC,
+         g: () => wC,
+         h: () => nC,
+         i: () => bC,
+         j: () => xC,
+         l: () => PC
+       }), 39 == ZC.j) var QC = ZC(36938);
+     const wC = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
+       bC = ["Blade", "Guard", "Handle"],
+       nC = {
+         Wood: {
+           material: "Wood",
+           baseSword: "Wood Sword",
+           value: 1,
+ ... (234 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/75.js` (Changed code · before: `L47-L56` → after: `L255-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1) · [After (L255-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/75.js#L255-L324) · [Before (L47-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/75.js#L47-L56)

```diff
-     } catch {}
-     const dq = 16,
-       jq = 256,
-       Hq = 0,
-       oq = 1,
-       Pq = 2,
-       Qq = 3;
-     let yq, tq = Hq,
-       rq = mq,
-       vq = 0;
+     }
+     const AC = new Map;
+ 
+     function xC(CC) {
+       var zC;
+       let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SC;
+       const QC = "string" === typeof CC ? RC(CC) : CC;
+       if (null === QC) return null;
+       const wC = GC(QC),
+         oC = ZC === SC ? AC.get(wC) : void 0;
+       if (void 0 !== oC) return oC;
+       const pC = function(CC, zC) {
+         var ZC, QC, wC, oC, SC, pC, PC, RC, AC;
+         const {
+           blade: xC,
+           guard: eC,
+ ... (54 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/75.js` (Changed code · before: `L59-L504` → after: `L327-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1) · [After (L327-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/75.js#L327-L339) · [Before (L59-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/75.js#L59-L504)

```diff
-       return qq === `function ${Eq}() { [native code] }` || qq === `function ${Eq}() {\n    [native code]\n}`
-     }
-     const nq = 0,
-       bq = 1,
-       iq = 2;
-     let Zq = nq;
- 
-     function fq(qq, Eq, gq) {
-       if (Zq === iq && tq === oq && ! function() {
-           const qq = yq;
-           return vq >= jq && (rq(Nq, Wq, [qq]), vq = 0), qq[vq++] < 256 / dq
-         }()) return function(qq, Eq, gq) {
-         return rq(qq, Eq, gq ?? 0)
-       }(...arguments);
-       if (Zq === nq || tq === Pq) return mq(qq, Eq, gq);
-       let Yq;
- ... (430 more removed lines; see GitHub link above)
+       return "Blade" === zC ? CC.blade : "Guard" === zC ? CC.guard : CC.handle
+     }
+ 
+     function IC(CC) {
+       return Math.round(100 * CC) / 100
+     }
+ 
+     function iC(CC) {
+       return `${Math.round(100*CC)}%`
+     }
+ 
+     function vC(CC) {
+       return `${CC>=0?"+":""}${iC(CC)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/76.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/76.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L2)

```diff
- export const ids = [76, 92];
+ export const ids = [76];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L4-L113` → after: `L4-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L4-L29) · [Before (L4-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L4-L113)

```diff
-     4648: (qq, Eq, gq) => {
-       gq.d(Eq, {
-         e: () => dq,
-         g: () => jq
-       });
-       var Yq = gq(1018),
-         lq = gq.n(Yq),
-         Oq = gq(57),
-         mq = gq(1183),
-         xq = gq(4656),
-         Aq = gq(1876),
-         cq = gq(2383),
-         uq = gq(4662),
-         Bq = gq(1070);
-       const Wq = new WeakMap;
-       let Nq = 0;
- ... (94 more removed lines; see GitHub link above)
+   4630: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => FC
+     });
+     var QC = ZC(20),
+       wC = ZC(28),
+       bC = ZC(1240),
+       nC = ZC(2800);
+     const fC = 3e4,
+       oC = 1e3;
+ 
+     function qC() {
+       return "visible" === document.visibilityState && "inGame" === QC.b.get("gameState") && (0, bC.x)()
+     }
+ 
+     function FC(CC, zC) {
+ ... (10 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L115-L116` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L31) · [Before (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L115-L116)

```diff
-                 maskImage: `url("${mq}")`,
-                 WebkitMaskImage: `url("${mq}")`
+                 color: "#ffd84a"
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L118-L127` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L33) · [Before (L118-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L118-L127)

```diff
-             }), (0, aq.jsx)("img", {
-               src: mq,
-               alt: ""
-             })]
-           }) : (0, aq.jsx)("img", {
-             className: Oq()("DocsPixelIcon", Yq),
-             src: mq,
-             alt: "",
-             "aria-hidden": "true",
-             style: lq
+             }]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L129-L605` → after: `L35-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L35-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L35-L98) · [Before (L129-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L129-L605)

```diff
-         }
-         const jq = 1500;
- 
-         function Hq() {
-           const [qq, Eq] = (0, Yq.useState)(null);
-           (0, Yq.useEffect)((() => {
-             if (null === qq) return;
-             const gq = setTimeout((() => {
-               Eq(null)
-             }), jq);
-             return () => {
-               clearTimeout(gq)
-             }
-           }), [qq]);
-           return [qq, qq => {
-             (0, Nq.d)(qq).then((() => {
- ... (461 more removed lines; see GitHub link above)
+         }))
+       }))
+     }
+   },
+   34014: (CC, zC, ZC) => {
+     function QC(CC, zC) {
+       return 0 === CC.length ? 0 : CC[Math.min(CC.length - 1, Math.floor(zC * CC.length))]
+     }
+ 
+     function wC(CC) {
+       return CC.toFixed(1)
+     }
+     ZC.d(zC, {
+       b: () => wC,
+       e: () => QC
+     })
+ ... (48 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L607-L619` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L100) · [Before (L607-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L607-L619)

```diff
-           const gq = qq.split("\n"),
-             Yq = gq.flatMap(((qq, Eq) => Xq.test(qq) ? [Eq] : []));
-           let lq = Iq(gq.slice(0, null !== (Eq = Yq[0]) && void 0 !== Eq ? Eq : gq.length)).doc;
-           return Yq.map(((qq, Eq) => {
-             var Oq;
-             const mq = Iq(gq.slice(qq, null !== (Oq = Yq[Eq + 1]) && void 0 !== Oq ? Oq : gq.length)),
-               xq = {
-                 name: gq[qq].match(Xq)[1],
-                 doc: lq,
-                 lines: mq.lines
-               };
-             return lq = mq.doc, xq
-           }))
+           bC.includes(oC.meshJobId) || (oC.meshJobId = zC)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L621-L622` → after: `L102-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L102-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L102-L112) · [Before (L621-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L621-L622)

```diff
- 
-         function Dq(qq) {
+       }
+       received(CC, zC, ZC) {
+         const QC = this.jobs.get(CC);
+         void 0 !== QC && (this.roundTrips.push(ZC - QC.sentAt), QC.receivedAt = ZC, QC.jobMs = zC)
+       }
+       failed(CC) {
+         this.jobs.delete(CC)
+       }
+       reassign(CC, zC, ZC) {
+         this.jobs.delete(zC);
+         for (const wC of null !== (QC = this.pending.get(CC)) && void 0 !== QC ? QC : []) {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L624-L803` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L114) · [Before (L624-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L624-L803)

```diff
-           const gq = qq.match(/^readonly \[([\s\S]*)\]$/);
-           return gq ? null !== (Eq = gq[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== Eq ? Eq : [] : null
-         }
- 
-         function qE(qq) {
-           if (!qq.startsWith("{") || !qq.endsWith("}")) return null;
-           const Eq = {
-               keys: [],
-               values: []
-             },
-             gq = qq => {
-               const gq = qq.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
-               gq && (Eq.keys.push(gq[1].startsWith('"') ? gq[1] : `"${gq[1]}"`), Eq.values.push(gq[2].trim()))
-             };
-           let Yq = 0,
-             lq = "";
- ... (164 more removed lines; see GitHub link above)
+           wC.meshJobId === zC && (wC.meshJobId = ZC)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L805-L1055` → after: `L116-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L116-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L116-L121) · [Before (L805-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L805-L1055)

```diff
- 
-         function oE(qq) {
-           const Eq = [];
-           let gq = 0;
-           for (const Yq of qq.matchAll(dE)) Eq.push(qq.slice(gq, Yq.index), (0, aq.jsx)(HE, {
-             colour: Yq[0]
-           }), Yq[0]), gq = Yq.index + Yq[0].length;
-           return Eq.push(qq.slice(gq)), Eq
-         }
- 
-         function PE(qq) {
-           let {
-             href: Eq,
-             children: gq
-           } = qq;
-           const lq = (0, Yq.useContext)(NE);
- ... (235 more removed lines; see GitHub link above)
+       }
+       applied(CC, zC, ZC) {
+         const QC = this.jobs.get(zC);
+         this.jobs.delete(zC), void 0 !== QC && this.show(CC, QC, ZC, (CC => CC.meshJobId === zC))
+       }
+       emptied(CC, zC) {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L1057-L1114` → after: `L123-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L123-L128) · [Before (L1057-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L1057-L1114)

```diff
-           progressBar: {
-             ZY: 30,
-             fY: .075,
-             MY: 5,
-             TY: !1,
-             description: [{
-               str: "Click repeatedly to complete!"
-             }],
-             zY: "fa-solid fa-computer-mouse",
-             scale: 3,
-             rotation: 15
-           },
-           timedClick: {
-             pY: 3e3,
-             icon: "fa-solid fa-computer-mouse",
-             label: [{
- ... (42 more removed lines; see GitHub link above)
+           sentAt: zC,
+           receivedAt: zC,
+           ahead: 0,
+           inFlight: 0,
+           HW: 0,
+           jobMs: 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L1116-L1340` → after: `L130-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L130-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L130-L141) · [Before (L1116-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L1116-L1340)

```diff
-         var pE = gq(296),
-           GE = gq(1968);
- 
-         function LE(qq) {
-           return qq.startsWith("fa-")
-         }
-         const JE = {
-             text: "Text",
-             icon: "Icon",
-             progressBar: "Progress bar",
-             keyBinding: "Key binding",
-             other: "Other"
-           },
-           kE = {
-             text: "Text",
-             icon: {
- ... (209 more removed lines; see GitHub link above)
+         this.show(CC, ZC, zC, (() => !0))
+       }
+       show(CC, zC, ZC, QC) {
+         const wC = this.pending.get(CC);
+         if (!wC) return;
+         const bC = wC.filter((wC => !QC(wC) || (this.record(CC, wC.editAt, zC, ZC), !1)));
+         bC.length > 0 ? this.pending.set(CC, bC) : this.pending.delete(CC)
+       }
+       Cg(CC) {
+         this.reported += CC, this === MC && this.reported >= nC && null !== gC && (gC(), gC = null)
+       }
+       record(CC, zC, ZC, QC) {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L1342-L1344` → after: `L143-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L143-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L143-L150) · [Before (L1342-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L1342-L1344)

```diff
-           "\n": "\\n",
-           "\r": "\\r",
-           "\t": "\\t"
+           totalMs: QC - zC,
+           slotMs: ZC.sentAt - zC,
+           workerMs: ZC.receivedAt - ZC.sentAt,
+           applyMs: QC - ZC.receivedAt,
+           ahead: ZC.ahead,
+           inFlight: ZC.inFlight,
+           HW: ZC.HW,
+           jobMs: ZC.jobMs
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L1347-L7209` → after: `L300-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L300-L302) · [Before (L1347-L7209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L1347-L7209)

```diff
-         function Eg(qq) {
-           let Eq = "";
-           for (let lq = 0; lq < qq.length; lq++) {
-             const Oq = qq[lq];
-             if ("\\" === Oq) {
-               var gq;
-               const Yq = null !== (gq = qq[lq + 1]) && void 0 !== gq ? gq : "";
-               Eq += "'" === Yq ? "'" : Oq + Yq, lq++
-             } else if ('"' === Oq) Eq += '\\"';
-             else {
-               var Yq;
-               Eq += null !== (Yq = qg[Oq]) && void 0 !== Yq ? Yq : Oq
-             }
-           }
-           return `"${Eq}"`
-         }
- ... (5847 more removed lines; see GitHub link above)
+     function WC(CC) {
+       return "unknown" === CC || FC(CC) >= 0
+     }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L7211-L7213` → after: `L304-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L304-L306) · [Before (L7211-L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L7211-L7213)

```diff
-                           function mq(qq) {
-                             return "string" !== typeof qq ? qq : Object.hasOwn(Oq, qq) ? Oq[qq] : null
-                           }
+     function NC(CC, zC) {
+       return CC[zC] >= "\ud800" && CC[zC] <= "\udbff" && zC + 1 < CC.length && CC[zC + 1] >= "\udc00" && CC[zC + 1] <= "\udfff" ? 2 : 1
+     }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L7215-L7217` → after: `L308-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L308-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L308-L310) · [Before (L7215-L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L7215-L7217)

```diff
-                           function xq(qq, Eq, gq) {
-                             return Math.min(gq, Math.max(Eq, qq))
-                           }
+     function MC(CC, zC, ZC) {
+       return 2 === ZC ? 4 : CC[zC] <= "\x7f" ? 1 : CC[zC] <= "\u07ff" ? 2 : 3
+     }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L7219-L7245` → after: `L312-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L312-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/76.js#L312-L382) · [Before (L7219-L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/76.js#L7219-L7245)

```diff
-                           function Aq(qq) {
-                             const Eq = xq(qq.durationMs, 10, 500),
-                               gq = xq(qq.attackMs, 0, Eq),
-                               {
-                                 intonation: lq
-                               } = qq;
-                             return {
-                               waveform: Yq.includes(qq.waveform) ? qq.waveform : "sine",
-                               pitchHz: xq(qq.pitchHz, 20, 4e3),
-                               glideSemitones: xq(qq.glideSemitones, -24, 24),
-                               durationMs: Eq,
-                               attackMs: gq,
-                               releaseMs: xq(qq.releaseMs, 0, Eq - gq),
-                               lowpassHz: null === qq.lowpassHz ? null : xq(qq.lowpassHz, 20, 2e4),
-                               volume: xq(qq.volume, 0, 2),
-                               intonation: {
- ... (11 more removed lines; see GitHub link above)
+     function gC(CC, zC, ZC) {
+       let QC = 0;
+       for (; QC < zC;) {
+         const zC = NC(CC, QC),
+           wC = MC(CC, QC, zC);
+         if (wC > ZC) break;
+         ZC -= wC, QC += zC
+       }
+       return QC
+     }
+ 
+     function SC(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
+       if ("string" !== typeof CC || CC.length > qC || !WC(CC)) return "t";
+       let ZC = 2;
+       for (let fC = 0; fC < CC.length;) {
+ ... (55 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/77.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/77.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L4-L23` → after: `L4-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L4-L56) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L4-L23)

```diff
-   4546: qq => {
-     function Eq(qq) {
-       return qq instanceof Map ? qq.clear = qq.delete = qq.set = function() {
-         throw new Error("map is read-only")
-       } : qq instanceof Set && (qq.add = qq.clear = qq.delete = function() {
-         throw new Error("set is read-only")
-       }), Object.freeze(qq), Object.getOwnPropertyNames(qq).forEach((gq => {
-         const Yq = qq[gq],
-           lq = typeof Yq;
-         "object" !== lq && "function" !== lq || Object.isFrozen(Yq) || Eq(Yq)
-       })), qq
-     }
-     class gq {
-       constructor(qq) {
-         void 0 === qq.data && (qq.data = {}), this.data = qq.data, this.isMatchIgnored = !1
-       }
- ... (4 more removed lines; see GitHub link above)
+   4635: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => Tz,
+       h: () => WZ,
+       j: () => Oz,
+       k: () => zZ,
+       l: () => Lz,
+       o: () => kz,
+       s: () => cz,
+       u: () => Dz,
+       v: () => Kz,
+       w: () => FZ,
+       A: () => qZ,
+       C: () => jz,
+       E: () => Xz
+     });
+ ... (37 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L25-L26` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L58-L59) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L25-L26)

```diff
-     function Yq(qq) {
-       return qq.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
+     function eC(CC, zC) {
+       return CC === `function ${zC}() { [native code] }` || CC === `function ${zC}() {\n    [native code]\n}`
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L29-L54` → after: `L66-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L66-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L66-L92) · [Before (L29-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L29-L54)

```diff
-     function lq(qq) {
-       const Eq = Object.create(null);
-       for (const Oq in qq) Eq[Oq] = qq[Oq];
-       for (var gq = arguments.length, Yq = new Array(gq > 1 ? gq - 1 : 0), lq = 1; lq < gq; lq++) Yq[lq - 1] = arguments[lq];
-       return Yq.forEach((function(qq) {
-         for (const gq in qq) Eq[gq] = qq[gq]
-       })), Eq
-     }
-     const Oq = qq => !!qq.scope;
-     class mq {
-       constructor(qq, Eq) {
-         this.buffer = "", this.classPrefix = Eq.classPrefix, qq.walk(this)
-       }
-       addText(qq) {
-         this.buffer += Yq(qq)
-       }
- ... (10 more removed lines; see GitHub link above)
+     function mC(CC, zC, ZC) {
+       if (dC === YC && IC === RC && ! function() {
+           const CC = JC;
+           return vC >= PC && (iC(MC, NC, [CC]), vC = 0), CC[vC++] < 256 / pC
+         }()) return function(CC, zC, ZC) {
+         return iC(CC, zC, ZC ?? 0)
+       }(...arguments);
+       if (dC === hC || IC === AC) return nC(CC, zC, ZC);
+       let QC;
+       dC = hC;
+       try {
+         IC === GC && (IC = xC, IC = function() {
+           const CC = nC(wC, nC, []);
+           if (eC(CC, "apply")) return AC;
+           if (null === nC(bC, /\(\.\.\.arguments\)/, [CC]) && null === nC(bC, /^function\s*\(\.\.\.[\w$]+\)/, [CC])) return AC;
+           if ("function" !== typeof SC || "function" !== typeof fC || "function" !== typeof oC || "function" !== typeof qC || "function" !== typeof FC || "function" !== typeof MC || "function" !== typeof WC || !eC(nC(wC, fC, []), "call") || !eC(nC(wC, oC, []), "apply") || !eC(nC( … [truncated]
+ ... (11 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L56-L69` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L94-L97) · [Before (L56-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L56-L69)

```diff
-           return `${gq}${qq}`
-         })(qq.scope, {
-           prefix: this.classPrefix
-         });
-         this.span(Eq)
-       }
-       closeNode(qq) {
-         Oq(qq) && (this.buffer += "</span>")
-       }
-       value() {
-         return this.buffer
-       }
-       span(qq) {
-         this.buffer += `<span class="${qq}">`
+           return iC = zC, RC
+         }()), QC = nC(CC, zC, ZC)
+       } catch (gC) {
+         throw IC = AC, gC
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L72-L117` → after: `L101-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L101-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L101-L104) · [Before (L72-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L72-L117)

```diff
-     const xq = function() {
-       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-       const Eq = {
-         children: []
-       };
-       return Object.assign(Eq, qq), Eq
-     };
-     class Aq {
-       constructor() {
-         this.jy = xq(), this.stack = [this.jy]
-       }
-       get top() {
-         return this.stack[this.stack.length - 1]
-       }
-       get root() {
-         return this.jy
- ... (30 more removed lines; see GitHub link above)
+     let HC = nC;
+ 
+     function EC() {
+       return (HC === nC ? 0 : 3) + dC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L119-L141` → after: `L106-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L106-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L106-L109) · [Before (L119-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L119-L141)

```diff
-     class cq extends Aq {
-       constructor(qq) {
-         super(), this.options = qq
-       }
-       addText(qq) {
-         "" !== qq && this.add(qq)
-       }
-       startScope(qq) {
-         this.openNode(qq)
-       }
-       endScope() {
-         this.closeNode()
-       }
-       __addSublanguage(qq, Eq) {
-         const gq = qq.root;
-         Eq && (gq.scope = `language:${Eq}`), this.add(gq)
- ... (7 more removed lines; see GitHub link above)
+ 
+     function lC() {
+       const CC = EC();
+       return HC = nC, CC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L145` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L113) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L145)

```diff
-       return qq ? "string" === typeof qq ? qq : qq.source : null
+       HC = CC >= 3 ? mC : nC, dC = CC % 3
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L149` → after: `L132-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L132-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L132-L138) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L149)

```diff
-       return aq("(?=", qq, ")")
+       if ("function" !== typeof CC) return "#a0.0";
+       const zC = HC(DC, kC, [CC]);
+       if (void 0 !== zC) return zC;
+       const ZC = HC(cC, CC, []),
+         QC = ZC.length > BC ? BC : ZC.length,
+         wC = `#${function(CC,zC){const ZC=HC(sC,yC,[zC]);if(null===ZC)return"s";const QC=ZC[1];if("ProxyObject"===QC)return"p";if(""!==QC)return HC(aC,QC,["bound "])?"b":"n";try{const zC=uC(CC,"name"),ZC=void 0!==zC&&HC(rC,zC,["value"])?zC.value:void 0;return"string"===typeof ZC& … [truncated]
+       return HC(jC, kC, [CC, wC]), wC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L153` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L142-L143) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L153)

```diff
-       return aq("(?:", qq, ")*")
+       const zC = HC(sC, OC, [CC]);
+       return null === zC ? CC : zC[1]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L156-L157` → after: `L157-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L157-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L157-L164) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L156-L157)

```diff
-     function Nq(qq) {
-       return aq("(?:", qq, ")?")
+     function Nz(CC, zC, ZC) {
+       return {
+         code: CC,
+         holder: zC,
+         key: ZC,
+         ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
+         native: new RegExp(`^function (get )?${ZC}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
+       }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L161-L162` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L168) · [Before (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L161-L162)

```diff
-       for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
-       return Eq.map((qq => uq(qq))).join("")
+       return Wz
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L166-L171` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L174) · [Before (L166-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L166-L171)

```diff
-       for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
-       const Yq = function(qq) {
-         const Eq = qq[qq.length - 1];
-         return "object" === typeof Eq && Eq.constructor === Object ? (qq.splice(qq.length - 1, 1), Eq) : {}
-       }(Eq);
-       return "(" + (Yq.capture ? "" : "?:") + Eq.map((qq => uq(qq))).join("|") + ")"
+       return Sz
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L175` → after: `L245-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L245-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L245-L250) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L175)

```diff
-       return new RegExp(qq.toString() + "|").exec("").length - 1
+       let zC;
+       try {
+         const ZC = qz(globalThis, CC);
+         zC = "function" === typeof ZC ? ZC.prototype : void 0
+       } catch {}
+       return () => zC
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L179-L197` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L253-L254) · [Before (L179-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L179-L197)

```diff
-     function Hq(qq, Eq) {
-       let {
-         joinWith: gq
-       } = Eq, Yq = 0;
-       return qq.map((qq => {
-         Yq += 1;
-         const Eq = Yq;
-         let gq = uq(qq),
-           lq = "";
-         for (; gq.length > 0;) {
-           const qq = jq.exec(gq);
-           if (!qq) {
-             lq += gq;
-             break
-           }
-           lq += gq.substring(0, qq.index), gq = gq.substring(qq.index + qq[0].length), "\\" === qq[0][0] && qq[1] ? lq += "\\" + String(Number(qq[1]) + Eq) : (lq += qq[0], "(" === qq[0] && Yq++)
- ... (3 more removed lines; see GitHub link above)
+     function Jz(CC, zC, ZC) {
+       return ZC.map((ZC => Nz(CC, zC, ZC)))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L199-L253` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L256-L257) · [Before (L199-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L199-L253)

```diff
-     const oq = "[a-zA-Z]\\w*",
-       Pq = "[a-zA-Z_]\\w*",
-       Qq = "\\b\\d+(\\.\\d+)?",
-       yq = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
-       tq = "\\b(0b[01]+)",
-       rq = {
-         gN: "\\\\[\\s\\S]",
-         relevance: 0
-       },
-       vq = {
-         scope: "string",
-         gN: "'",
-         end: "'",
-         illegal: "\\n",
-         contains: [rq]
-       },
- ... (39 more removed lines; see GitHub link above)
+     const Iz = Nz("rx", xz("HTMLCanvasElement"), "getContext"),
+       iz = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L255-L282` → after: `L259-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L259-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L259-L261) · [Before (L255-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L255-L282)

```diff
-         scope: "number",
-         gN: tq,
-         relevance: 0
-       },
-       zq = {
-         scope: "regexp",
-         gN: /\/(?=[^/\n]*\/)/,
-         end: /\/[gimuy]*/,
-         contains: [rq, {
-           gN: /\[/,
-           end: /\]/,
-           relevance: 0,
-           contains: [rq]
-         }]
-       },
-       Sq = {
- ... (12 more removed lines; see GitHub link above)
+         webgpu: [...Jz("gd", xz("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Jz("gq", xz("GPUQueue"), ["submit", "writeBuffer"]), ...Jz("ge", xz("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Jz("gp", xz("GPURenderPassEncoder … [truncated]
+         webgl: [...Jz("g2", xz("WebGL2RenderingContext"), [...iz, "drawArraysInstanced", "drawElementsInstanced"]), Iz],
+         webgl1: [...Jz("g1", xz("WebGLRenderingContext"), iz), Iz]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L284-L333` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L263-L264) · [Before (L284-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L284-L333)

```diff
-     var Lq = Object.freeze({
-       __proto__: null,
-       APOS_STRING_MODE: vq,
-       BACKSLASH_ESCAPE: rq,
-       BINARY_NUMBER_MODE: Tq,
-       BINARY_NUMBER_RE: tq,
-       COMMENT: nq,
-       C_BLOCK_COMMENT_MODE: iq,
-       C_LINE_COMMENT_MODE: bq,
-       C_NUMBER_MODE: Mq,
-       C_NUMBER_RE: yq,
-       END_SAME_AS_BEGIN: function(qq) {
-         return Object.assign(qq, {
-           "on:begin": (qq, Eq) => {
-             Eq.data._beginMatch = qq[1]
-           },
- ... (34 more removed lines; see GitHub link above)
+     let ez = [];
+     const hz = new WeakMap;
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L336` → after: `L267-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L267-L272) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L336)

```diff
-       "." === qq.input[qq.index - 1] && Eq.ignoreMatch()
+       const ZC = lC();
+       try {
+         HC(oz, hz, [CC, zC])
+       } finally {
+         XC(ZC)
+       }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L339-L340` → after: `L275-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L275-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L275-L282) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L339-L340)

```diff
-     function kq(qq, Eq) {
-       void 0 !== qq.className && (qq.scope = qq.className, delete qq.className)
+     function Yz(CC) {
+       try {
+         const zC = fZ(CC),
+           ZC = HC(fz, hz, [zC]);
+         return CZ(ZC, CC) ? dz(CC, !0) : `${dz(CC,!1)}${VC(ZC??zC)}`
+       } catch {
+         return `${dz(CC,!1)}${VC(void 0)}`
+       }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L344` → after: `L286-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L286-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L286-L290) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L344)

```diff
-       Eq && qq.beginKeywords && (qq.gN = "\\b(" + qq.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", qq.__beforeBegin = Jq, qq.keywords = qq.keywords || qq.beginKeywords, delete qq.beginKeywords, void 0 === qq.relevance && (qq.relevance = 0))
+       let {
+         code: ZC,
+         key: QC
+       } = CC;
+       return `wh:${ZC}${zC?"-dbg":""}:${QC}`
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L347-L348` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L293-L294) · [Before (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L347-L348)

```diff
-     function Uq(qq, Eq) {
-       Array.isArray(qq.illegal) && (qq.illegal = Vq(...qq.illegal))
+     function mz(CC) {
+       return Object.values(vz).flatMap((zC => zC.map((zC => dz(zC, CC)))))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L351-L354` → after: `L300-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L300-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L300-L309) · [Before (L351-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L351-L354)

```diff
-     function Fq(qq, Eq) {
-       if (qq.match) {
-         if (qq.gN || qq.end) throw new Error("begin & end are not supported with match");
-         qq.gN = qq.match, delete qq.match
+     function Xz(CC) {
+       ez = vz[CC]
+     }
+ 
+     function cz(CC) {
+       const zC = lC();
+       try {
+         return uz(CC) || uz(Cz(CC))
+       } finally {
+         XC(zC)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L358-L359` → after: `L313-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L313-L314) · [Before (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L358-L359)

```diff
-     function sq(qq, Eq) {
-       void 0 === qq.relevance && (qq.relevance = 1)
+     function uz(CC) {
+       return HC(nz, Ez, [CC])
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L376-L381` → after: `L317-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L317-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L317-L323) · [Before (L376-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L376-L381)

```diff
-     function Kq(qq, Eq) {
-       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
-       const Yq = Object.create(null);
-       return "string" === typeof qq ? lq(gq, qq.split(" ")) : Array.isArray(qq) ? lq(gq, qq) : Object.keys(qq).forEach((function(gq) {
-         Object.assign(Yq, Kq(qq[gq], Eq, gq))
-       })), Yq;
+     function rz(CC) {
+       return new Set(Az.filter((zC => zC.tier === CC)).map((CC => `wh:${CC.code}`)))
+     }
+     const sz = rz("punished"),
+       Tz = !1,
+       az = new Set(zz.c),
+       tz = rz("weighted");
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L383-L387` → after: `L325-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L325-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L325-L330) · [Before (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L383-L387)

```diff
-       function lq(qq, gq) {
-         Eq && (gq = gq.map((qq => qq.toLowerCase()))), gq.forEach((function(Eq) {
-           const gq = Eq.split("|");
-           Yq[gq[0]] = [qq, Cq(gq[0], gq[1])]
-         }))
+     function Dz(CC) {
+       const zC = lC();
+       try {
+         return yz(Cz(CC))
+       } finally {
+         XC(zC)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L391-L394` → after: `L334-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L334-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L334-L340) · [Before (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L391-L394)

```diff
-     function Cq(qq, Eq) {
-       return Eq ? Number(Eq) : function(qq) {
-         return wq.includes(qq.toLowerCase())
-       }(qq) ? 0 : 1
+     function jz(CC) {
+       const zC = lC();
+       try {
+         return Cz(CC)
+       } finally {
+         XC(zC)
+       }
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L409-L417` → after: `L343-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L343-L344) · [Before (L409-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L409-L417)

```diff
-     function gE(qq, Eq, gq) {
-       let {
-         key: Yq
-       } = gq, lq = 0;
-       const Oq = qq[Yq],
-         mq = {},
-         xq = {};
-       for (let Aq = 1; Aq <= Eq.length; Aq++) xq[Aq + lq] = Oq[Aq], mq[Aq + lq] = !0, lq += dq(Eq[Aq - 1]);
-       qq[Yq] = xq, qq[Yq]._emit = mq, qq[Yq]._multi = !0
+     function yz(CC) {
+       return HC(nz, tz, [CC])
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L421-L449` → after: `L348-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L348-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L348-L353) · [Before (L421-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L421-L449)

```diff
-       ! function(qq) {
-         qq.scope && "object" === typeof qq.scope && null !== qq.scope && (qq.beginScope = qq.scope, delete qq.scope)
-       }(qq), "string" === typeof qq.beginScope && (qq.beginScope = {
-           _wrap: qq.beginScope
-         }), "string" === typeof qq.endScope && (qq.endScope = {
-           _wrap: qq.endScope
-         }),
-         function(qq) {
-           if (Array.isArray(qq.gN)) {
-             if (qq.skip || qq.excludeBegin || qq.returnBegin) throw eq("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), EE;
-             if ("object" !== typeof qq.beginScope || null === qq.beginScope) throw eq("beginScope must be object"), EE;
-             gE(qq, qq.gN, {
-               key: "beginScope"
-             }), qq.gN = Hq(qq.gN, {
-               joinWith: ""
-             })
- ... (13 more removed lines; see GitHub link above)
+       const zC = lC();
+       try {
+         return Uz(CC)
+       } finally {
+         XC(zC)
+       }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L453-L546` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L357) · [Before (L453-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L453-L546)

```diff
-       function Eq(Eq, gq) {
-         return new RegExp(uq(Eq), "m" + (qq.case_insensitive ? "i" : "") + (qq.unicodeRegex ? "u" : "") + (gq ? "g" : ""))
-       }
-       class gq {
-         constructor() {
-           this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
-         }
-         addRule(qq, Eq) {
-           Eq.position = this.position++, this.matchIndexes[this.matchAt] = Eq, this.regexes.push([Eq, qq]), this.matchAt += dq(qq) + 1
-         }
-         compile() {
-           0 === this.regexes.length && (this.exec = () => null);
-           const qq = this.regexes.map((qq => qq[1]));
-           this.matcherRe = Eq(Hq(qq, {
-             joinWith: "|"
-           }), !0), this.lastIndex = 0
- ... (78 more removed lines; see GitHub link above)
+       return HC(nz, az, [CC])
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L550` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L361) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L550)

```diff
-       return !!qq && (qq.endsWithParent || OE(qq.starts))
+       return "wb" === CC || HC(nz, sz, [CC])
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L552-L554` → after: `L363-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L363-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L363-L369) · [Before (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L552-L554)

```diff
-     class mE extends Error {
-       constructor(qq, Eq) {
-         super(qq), this.name = "HTMLInjectionError", this.html = Eq
+ 
+     function Oz(CC) {
+       const zC = lC();
+       try {
+         return Bz(CC) || Uz(CC)
+       } finally {
+         XC(zC)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L582-L597` → after: `L373-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L373-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L373-L380) · [Before (L582-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L582-L597)

```diff
-         function dq(qq) {
-           return uq.noHighlightRe.test(qq)
-         }
- 
-         function jq(qq, Eq, gq) {
-           let Yq = "",
-             lq = "";
-           "object" === typeof Eq ? (Yq = qq, gq = Eq.ignoreIllegals, lq = Eq.language) : (qE("10.7.0", "highlight(lang, code, ...args) has been deprecated."), qE("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), lq … [truncated]
-           const Oq = {
-             code: Yq,
-             language: lq
-           };
-           hq("before:highlight", Oq);
-           const mq = Oq.result ? Oq.result : Hq(Oq.language, Oq.code, gq);
-           return mq.code = Oq.code, hq("after:highlight", mq), mq
-         }
+     function kz(CC) {
+       const zC = lC();
+       try {
+         return "wb" === CC || Tz && Bz(CC)
+       } finally {
+         XC(zC)
+       }
+     }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L599-L600` → after: `L382-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L382-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L382-L388) · [Before (L599-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L599-L600)

```diff
-         function Hq(qq, Eq, lq, Oq) {
-           const Aq = Object.create(null);
+     function Vz(CC, zC) {
+       let {
+         isGetter: ZC
+       } = zC;
+       const QC = Qz(CC, ZC ? "get" : "value");
+       return void 0 === QC ? void 0 : QC.value
+     }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L602-L624` → after: `L390-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L390-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L390-L396) · [Before (L602-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L602-L624)

```diff
-           function cq() {
-             if (!hq.keywords) return void bq.addText(iq);
-             let qq = 0;
-             hq.keywordPatternRe.lastIndex = 0;
-             let Eq = hq.keywordPatternRe.exec(iq),
-               gq = "";
-             for (; Eq;) {
-               gq += iq.substring(qq, Eq.index);
-               const lq = yq.case_insensitive ? Eq[0].toLowerCase() : Eq[0],
-                 Oq = (Yq = lq, hq.keywords[Yq]);
-               if (Oq) {
-                 const [qq, Yq] = Oq;
-                 if (bq.addText(gq), gq = "", Aq[lq] = (Aq[lq] || 0) + 1, Aq[lq] <= 7 && (Zq += Yq), qq.startsWith("_")) gq += Eq[0];
-                 else {
-                   const gq = yq.classNameAliases[qq] || qq;
-                   Wq(Eq[0], gq)
- ... (7 more removed lines; see GitHub link above)
+     function CZ(CC, zC) {
+       let {
+         isConstructor: ZC,
+         native: QC
+       } = zC;
+       return "function" === typeof CC && (!(!ZC && HC(bz, CC, ["prototype"])) && null !== HC(wz, QC, [HC(Zz, CC, [])]))
+     }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L626-L636` → after: `L398-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L398-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L398-L404) · [Before (L626-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L626-L636)

```diff
-           function Bq() {
-             null != hq.subLanguage ? function() {
-               if ("" === iq) return;
-               let qq = null;
-               if ("string" === typeof hq.subLanguage) {
-                 if (!Yq[hq.subLanguage]) return void bq.addText(iq);
-                 qq = Hq(hq.subLanguage, iq, !0, nq[hq.subLanguage]), nq[hq.subLanguage] = qq._top
-               } else qq = oq(iq, hq.subLanguage.length ? hq.subLanguage : null);
-               hq.relevance > 0 && (Zq += qq.relevance), bq.__addSublanguage(qq._emitter, qq.language)
-             }() : cq(), iq = ""
-           }
+     function zZ(CC, zC) {
+       return CZ(CC, Nz("", (() => {}), zC, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
+         isConstructor: !0
+       } : {}))
+     }
+     let ZZ = null,
+       QZ = !1;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L638-L640` → after: `L406-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L406-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L406-L412) · [Before (L638-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L638-L640)

```diff
-           function Wq(qq, Eq) {
-             "" !== qq && (bq.startScope(Eq), bq.addText(qq), bq.endScope())
-           }
+     function wZ() {
+       try {
+         return globalThis.WebAssembly === Wz
+       } catch {
+         return !1
+       }
+     }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L642-L652` → after: `L414-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L414-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L414-L430) · [Before (L642-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L642-L652)

```diff
-           function Nq(qq, Eq) {
-             let gq = 1;
-             const Yq = Eq.length - 1;
-             for (; gq <= Yq;) {
-               if (!qq._emit[gq]) {
-                 gq++;
-                 continue
-               }
-               const Yq = yq.classNameAliases[qq[gq]] || qq[gq],
-                 lq = Eq[gq];
-               Yq ? Wq(lq, Yq) : (iq = lq, cq(), iq = ""), gq++
+     function bZ(CC) {
+       try {
+         return function(CC) {
+           const {
+             holder: zC,
+             key: ZC,
+             onNamespace: QC,
+             inSecureContext: wC
+           } = CC, bC = zC(), nC = Rz(bC, ZC);
+           if (!nC) return !(wC && !0 === globalThis.isSecureContext);
+           const fC = Vz(nC, CC);
+           if (!CZ(fC, CC)) return !1;
+           if (QC) {
+             const zC = globalThis.WebAssembly;
+             if (zC !== bC && null !== zC && ("object" === typeof zC || "function" === typeof zC)) {
+               const QC = qz(zC, ZC);
+ ... (1 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L656-L680` → after: `L440-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L440-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L440-L448) · [Before (L656-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L656-L680)

```diff
-           function aq(qq, Eq) {
-             return qq.scope && "string" === typeof qq.scope && bq.openNode(yq.classNameAliases[qq.scope] || qq.scope), qq.beginScope && (qq.beginScope._wrap ? (Wq(iq, yq.classNameAliases[qq.beginScope._wrap] || qq.beginScope._wrap), iq = "") : qq.beginScope._multi && (Nq(qq.begin … [truncated]
-               parent: {
-                 value: hq
-               }
-             }), hq
-           }
- 
-           function Vq(qq, Eq, Yq) {
-             let lq = function(qq, Eq) {
-               const gq = qq && qq.exec(Eq);
-               return gq && 0 === gq.index
-             }(qq.endRe, Yq);
-             if (lq) {
-               if (qq["on:end"]) {
-                 const Yq = new gq(qq);
- ... (9 more removed lines; see GitHub link above)
+     function nZ(CC) {
+       const zC = `wh:${CC.code}`;
+       if ("punished" === CC.tier) return zC;
+       try {
+         return `${zC}${VC(fZ(CC))}`
+       } catch {
+         return `${zC}${VC(void 0)}`
+       }
+     }
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L682-L684` → after: `L450-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L450-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L450-L454) · [Before (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L682-L684)

```diff
-           function dq(qq) {
-             return 0 === hq.matcher.regexIndex ? (iq += qq[0], 1) : (Tq = !0, 0)
-           }
+     function fZ(CC) {
+       const zC = Rz(CC.holder(), CC.key),
+         ZC = void 0 === zC ? void 0 : Vz(zC, CC);
+       return CC.onNamespace && !wZ() && CZ(ZC, CC) ? qz(globalThis.WebAssembly, CC.key) : ZC
+     }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L686-L698` → after: `L456-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L456-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L456-L462) · [Before (L686-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L686-L698)

```diff
-           function jq(qq) {
-             const gq = qq[0],
-               Yq = Eq.substring(qq.index),
-               lq = Vq(hq, qq, Yq);
-             if (!lq) return cE;
-             const Oq = hq;
-             hq.endScope && hq.endScope._wrap ? (Bq(), Wq(gq, hq.endScope._wrap)) : hq.endScope && hq.endScope._multi ? (Bq(), Nq(hq.endScope, qq)) : Oq.skip ? iq += gq : (Oq.returnEnd || Oq.excludeEnd || (iq += gq), Bq(), Oq.excludeEnd && (iq = gq));
-             do {
-               hq.scope && bq.closeNode(), hq.skip || hq.subLanguage || (Zq += hq.relevance), hq = hq.parent
-             } while (hq !== lq.parent);
-             return lq.starts && aq(lq.starts, qq), Oq.returnEnd ? 0 : gq.length
-           }
-           let Pq = {};
+     function oZ(CC) {
+       if (Bz(CC)) return 5;
+       const zC = Cz(CC);
+       return yz(zC) ? 4 : Uz(CC) ? 3 : uz(zC) ? function(CC) {
+         return HC(nz, Hz, [CC])
+       }(zC) ? -1 : zC === lz ? 0 : 1 : 2
+     }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L700-L725` → after: `L464-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L464-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L464-L479) · [Before (L700-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L700-L725)

```diff
-           function Qq(Yq, Oq) {
-             const xq = Oq && Oq[0];
-             if (iq += Yq, null == xq) return Bq(), 0;
-             if ("gN" === Pq.type && "end" === Oq.type && Pq.index === Oq.index && "" === xq) {
-               if (iq += Eq.slice(Oq.index, Oq.index + 1), !mq) {
-                 const Eq = new Error(`0 width match regex (${qq})`);
-                 throw Eq.languageName = qq, Eq.badRule = Pq.rule, Eq
-               }
-               return 1
-             }
-             if (Pq = Oq, "gN" === Oq.type) return function(qq) {
-               const Eq = qq[0],
-                 Yq = qq.rule,
-                 lq = new gq(Yq),
-                 Oq = [Yq.__beforeBegin, Yq["on:begin"]];
-               for (const gq of Oq)
- ... (10 more removed lines; see GitHub link above)
+     function qZ() {
+       const CC = function() {
+         const CC = EC();
+         return IC === GC || IC === RC ? (HC = mC, dC = KC) : HC = nC, CC
+       }();
+       try {
+         if (null === ZZ || !Bz(ZZ)) {
+           const CC = function() {
+             if (void 0 === Wz) return null;
+             let CC = wZ() ? null : "wh:wa";
+             const zC = zC => {
+               null !== zC && (null === CC || oZ(zC) > oZ(CC)) && (CC = zC)
+             };
+             for (let ZC = 0; ZC < Az.length; ZC++) {
+               const CC = Az[ZC];
+               void 0 === CC || bZ(CC) || zC(nZ(CC))
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L727-L729` → after: `L481-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L481-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L481-L484) · [Before (L727-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L727-L729)

```diff
-             if ("illegal" === Oq.type && "" === xq) return iq += "\n", 1;
-             if (Mq > 1e5 && Mq > 3 * Oq.index) {
-               throw new Error("potential infinite loop, way more iterations than matches")
+             zC((0, zz.l)());
+             for (let ZC = 0; ZC < ez.length; ZC++) {
+               const CC = ez[ZC];
+               void 0 === CC || bZ(CC) || zC(Yz(CC))
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L731-L743` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L486) · [Before (L731-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L731-L743)

```diff
-             return iq += xq, xq.length
-           }
-           const yq = tq(qq);
-           if (!yq) throw eq(xq.replace("{}", qq)), new Error('Unknown language: "' + qq + '"');
-           const rq = lE(yq);
-           let vq = "",
-             hq = Oq || rq;
-           const nq = {},
-             bq = new uq.__emitter(uq);
-           ! function() {
-             const qq = [];
-             for (let Eq = hq; Eq !== yq; Eq = Eq.parent) Eq.scope && qq.unshift(Eq.scope);
-             qq.forEach((qq => bq.openNode(qq)))
+             return CC
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L745-L899` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L488) · [Before (L745-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L745-L899)

```diff
-           let iq = "",
-             Zq = 0,
-             fq = 0,
-             Mq = 0,
-             Tq = !1;
-           try {
-             if (yq.__emitTokens) yq.__emitTokens(Eq, bq);
-             else {
-               for (hq.matcher.considerAll();;) {
-                 Mq++, Tq ? Tq = !1 : hq.matcher.considerAll(), hq.matcher.lastIndex = fq;
-                 const qq = hq.matcher.exec(Eq);
-                 if (!qq) break;
-                 const gq = Qq(Eq.substring(fq, qq.index), qq);
-                 fq = qq.index + gq
-               }
-               Qq(Eq.substring(fq))
- ... (139 more removed lines; see GitHub link above)
+           (null === ZZ || null !== CC && oZ(CC) > oZ(ZZ)) && (ZZ = CC)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L901-L1322` → after: `L490-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L490-L491) · [Before (L901-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L901-L1322)

```diff
-         Object.assign(qq, {
-           highlight: jq,
-           highlightAuto: oq,
-           highlightAll: yq,
-           highlightElement: Pq,
-           highlightBlock: function(qq) {
-             return qE("10.7.0", "highlightBlock will be removed entirely in v12.0"), qE("10.7.0", "Please use highlightElement now."), Pq(qq)
-           },
-           configure: function(qq) {
-             uq = AE(uq, qq)
-           },
-           initHighlighting: () => {
-             yq(), qE("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
-           },
-           initHighlightingOnLoad: function() {
-             yq(), qE("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
- ... (406 more removed lines; see GitHub link above)
+       } finally {
+         XC(CC)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L1339-L1669` → after: `L495-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L495-L496) · [Before (L1339-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L1339-L1669)

```diff
-     function Bq(qq) {
-       const Eq = qq.regex,
-         gq = Yq,
-         Bq = "<>",
-         Wq = "</>",
-         Nq = {
-           gN: /<[A-Za-z0-9\\._:-]+/,
-           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
-           isTrulyOpeningTag: (qq, Eq) => {
-             const gq = qq[0].length + qq.index,
-               Yq = qq.input[gq];
-             if ("<" === Yq || "," === Yq) return void Eq.ignoreMatch();
-             let lq;
-             ">" === Yq && (((qq, Eq) => {
-               let {
-                 after: gq
- ... (315 more removed lines; see GitHub link above)
+     function FZ() {
+       QZ = !0
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L1672-L1723` → after: `L499-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L499-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/77.js#L499-L504) · [Before (L1672-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/77.js#L1672-L1723)

```diff
-     function Wq(qq) {
-       const Eq = qq.regex,
-         gq = Bq(qq),
-         mq = Yq,
-         xq = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
-         Aq = {
-           gN: [/namespace/, /\s+/, qq.IDENT_RE],
-           beginScope: {
-             1: "keyword",
-             3: "title.class"
-           }
-         },
-         Wq = {
-           beginKeywords: "interface",
-           end: /\{/,
-           excludeEnd: !0,
- ... (36 more removed lines; see GitHub link above)
+     function WZ() {
+       if (QZ) return "wb";
+       if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && qZ(), null !== ZZ) return ZZ;
+       if (void 0 === Wz) return "wn:unsupported";
+       const CC = (0, QC.q)();
+       return null === CC ? null : `wn:${CC}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/78.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/78.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224)

#### 1. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L2)

```diff
- export const ids = [78];
+ export const ids = [78, 93];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L4-L23` → after: `L4-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L4-L23) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L4-L23)

```diff
-   4565: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       A: () => Wq,
-       d: () => Yq,
-       g: () => mq,
-       j: () => dq,
-       n: () => Vq,
-       p: () => xq,
-       s: () => lq,
-       t: () => Oq,
-       u: () => aq,
-       w: () => Nq
-     });
-     const Yq = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
- 
-     function lq(qq) {
- ... (4 more removed lines; see GitHub link above)
+     4760: (CC, zC, ZC) => {
+       ZC.d(zC, {
+         c: () => pC,
+         d: () => PC
+       });
+       var QC = ZC(1002),
+         wC = ZC.n(QC),
+         bC = ZC(48),
+         nC = ZC(1143),
+         fC = ZC(4769),
+         oC = ZC(1811),
+         qC = ZC(2369),
+         FC = ZC(4775),
+         WC = ZC(1056);
+       const NC = new WeakMap;
+       let MC = 0;
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L25-L67` → after: `L25-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L25-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L25-L39) · [Before (L25-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L25-L67)

```diff
-     }
- 
-     function Oq(qq) {
-       return qq.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
-     }
-     const mq = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Yq.source}`, "g");
- 
-     function xq(qq, Eq) {
-       return 2 === qq.length ? Eq.replace(/^ (.*) $/, "$1") : Eq
-     }
- 
-     function Aq(qq) {
-       return "" === qq.trim()
-     }
- 
-     function cq(qq) {
- ... (27 more removed lines; see GitHub link above)
+ 
+       function SC(CC) {
+         let {
+           piece: zC
+         } = CC;
+         return "space" === zC.kind ? (0, WC.jsx)(WC.Fragment, {
+           children: zC.text
+         }) : (0, WC.jsx)("span", {
+           className: "DialogueWord",
+           style: {
+             "--word-delay": `${zC.delayMs}ms`
+           },
+           children: (0, WC.jsx)(fC.e, {
+             text: "icon" === zC.kind ? `[[${zC.icon}]]` : zC.text
+           })
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L73-L99` → after: `L43-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L43-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L43-L159) · [Before (L73-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L73-L99)

```diff
-     function Wq(qq) {
-       const Eq = qq.replace(/\r\n/g, "\n").split("\n"),
-         gq = [];
-       let Yq = 0;
-       for (; Yq < Eq.length;) {
-         const qq = Eq[Yq];
-         if (Aq(qq)) {
-           Yq++;
-           continue
-         }
-         const lq = qq.match(/^\s*```\s*(\w*)\s*$/);
-         if (lq) {
-           const qq = [];
-           for (Yq++; Yq < Eq.length && !/^\s*```\s*$/.test(Eq[Yq]);) qq.push(Eq[Yq]), Yq++;
-           Yq++, gq.push({
-             kind: "code",
- ... (11 more removed lines; see GitHub link above)
+       function pC(CC) {
+         let {
+           display: zC
+         } = CC;
+         const {
+           selectedLanguage: ZC
+         } = (0, nC.y)(), QC = (0, bC.useMemo)((() => (0, FC.c)((0, FC.f)(zC).plan.pieces)), [zC, ZC.code]);
+         return (0, WC.jsxs)("div", {
+           className: wC()("Dialogue", {
+             DialogueAnimateIn: !1 !== zC.animateIn
+           }),
+           children: [zC.speakerName && (0, WC.jsx)(oC.e, {
+             text: zC.speakerName,
+             className: "DialogueSpeaker"
+           }), (0, WC.jsx)("p", {
+             className: "DialogueLine",
+ ... (101 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L101-L103` → after: `L161-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L161-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L161-L180) · [Before (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L101-L103)

```diff
-             anchor: Oq(qq)
-           }), Yq++;
-           continue
+             label: ZC,
+             className: QC
+           } = CC;
+           const [wC, nC] = GC(), fC = !1 === (null === wC || void 0 === wC ? void 0 : wC.failed);
+           return (0, gC.jsxs)("button", {
+             type: "button",
+             className: bC()("DocsCopyButton", QC, {
+               Copied: fC
+             }),
+             title: `Copy ${zC.length>40?"to clipboard":zC}`,
+             "aria-label": ZC ? void 0 : `Copy ${zC}`,
+             onClick: CC => {
+               CC.stopPropagation(), nC(zC)
+             },
+             children: [(0, gC.jsx)(pC, {
+               name: fC ? "check" : "copy"
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L105-L109` → after: `L182-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L182-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L182-L417) · [Before (L105-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L105-L109)

```diff
-         if (/^\s*(-{3,}|\*{3,})\s*$/.test(qq)) {
-           gq.push({
-             kind: "rule"
-           }), Yq++;
-           continue
+         FC.c.registerLanguage("javascript", WC.b), FC.c.registerLanguage("typescript", NC.b);
+         const AC = {
+             js: "javascript",
+             ts: "typescript",
+             javascript: "javascript",
+             typescript: "typescript"
+           },
+           xC = {
+             javascript: "JavaScript",
+             typescript: "TypeScript"
+           },
+           JC = 24;
+ 
+         function IC(CC) {
+           let {
+             code: zC,
+ ... (220 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L111` → after: `L419-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L419-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L419-L674) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L111)

```diff
-         if (qq.trim().startsWith("|") && Yq + 1 < Eq.length && /^\s*\|[\s:|-]+\|\s*$/.test(Eq[Yq + 1])) {
+         const lC = "## Glossary of Referenced Types";
+         const XC = [{
+             id: "welcome",
+             slug: "",
+             title: "Welcome",
+             icon: "house",
+             summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
+             layout: "article",
+             markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Ge … [truncated]
+           }, ...vC.c.flatMap((CC => {
+             const zC = {
+               id: CC.id,
+               slug: EC(CC.id),
+               title: CC.title,
+               markdown: CC.content,
+               ...YC[CC.id]
+ ... (240 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L113-L120` → after: `L676-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L676-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L676-L701) · [Before (L113-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L113-L120)

```diff
-             Oq = [];
-           for (Yq += 2; Yq < Eq.length && Eq[Yq].trim().startsWith("|");) Oq.push(cq(Eq[Yq])), Yq++;
-           gq.push({
-             kind: "table",
-             header: lq,
-             rows: Oq
-           });
-           continue
+             ZC = function(CC) {
+               const zC = new Map,
+                 ZC = CC.find((CC => "_TypeOf" === CC.name));
+               let QC = null;
+               const wC = () => {
+                 if (QC) {
+                   const CC = QC.lines.join("\n");
+                   zC.set(QC.name, {
+                     text: CC,
+                     members: VC(CC),
+                     object: Cz(CC)
+                   })
+                 }
+               };
+               for (const bC of ZC.lines.slice(1, -1)) {
+                 const CC = bC.match(/^\t([\w$]+): (.+)$/);
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L122` → after: `L703-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L703-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L703-L806) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L122)

```diff
-         if (qq.startsWith(">")) {
+         let wz, bz, nz;
+ 
+         function fz() {
+           return bz ??= function(CC) {
+             const zC = kC(CC).find((CC => "GameApi" === CC.name)),
+               ZC = new Map,
+               QC = zC.lines;
+             for (let bC = 0; bC < QC.length; bC++) {
+               var wC;
+               if (!QC[bC].trimStart().startsWith("/**")) continue;
+               const CC = bC;
+               for (; bC < QC.length && !QC[bC].includes("*/");) bC++;
+               const zC = null === (wC = QC[bC + 1]) || void 0 === wC ? void 0 : wC.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
+               if (!zC) continue;
+               let nC = null;
+               const fC = [];
+ ... (88 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L124-L127` → after: `L808-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L808-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L808-L849) · [Before (L124-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L124-L127)

```diff
-           for (; Yq < Eq.length && Eq[Yq].startsWith(">");) qq.push(Eq[Yq].replace(/^>\s?/, "")), Yq++;
-           gq.push({
-             kind: "quote",
-             blocks: Wq(qq.join("\n"))
+           let ZC = 0;
+           for (const QC of CC.matchAll(pz)) zC.push(CC.slice(ZC, QC.index), (0, gC.jsx)(Gz, {
+             colour: QC[0]
+           }), QC[0]), ZC = QC.index + QC[0].length;
+           return zC.push(CC.slice(ZC)), zC
+         }
+ 
+         function Az(CC) {
+           let {
+             href: zC,
+             children: ZC
+           } = CC;
+           const wC = (0, QC.useContext)(Mz);
+           if (zC.startsWith("#")) {
+             const CC = aC(zC);
+             if (CC) return (0, gC.jsx)(nC.d, {
+ ... (26 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L129-L138` → after: `L851-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L851-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L851-L852) · [Before (L129-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L129-L138)

```diff
-           continue
-         }
-         if (uq.test(qq)) {
-           const lq = [],
-             Oq = /^\s*\d+\./.test(qq);
-           for (; Yq < Eq.length && !Aq(Eq[Yq]) && (uq.test(Eq[Yq]) || /^\s+\S/.test(Eq[Yq]));) lq.push(Eq[Yq]), Yq++;
-           gq.push({
-             kind: "list",
-             ordered: Oq,
-             items: Bq(lq)
+           if (oz().has(zC)) return (0, gC.jsx)(vz, {
+             type: zC
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L140-L163` → after: `L854-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L854-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L854-L866) · [Before (L140-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L140-L163)

```diff
-           continue
-         }
-         const xq = [];
-         for (; Yq < Eq.length && !Aq(Eq[Yq]) && !/^\s*```/.test(Eq[Yq]) && !/^#{1,6}\s/.test(Eq[Yq]) && !Eq[Yq].startsWith(">") && !uq.test(Eq[Yq]) && (!Eq[Yq].trim().startsWith("|") || 0 !== xq.length);) xq.push(Eq[Yq].trim()), Yq++;
-         0 === xq.length && (xq.push(Eq[Yq].trim()), Yq++), gq.push({
-           kind: "paragraph",
-           text: xq.join(" ")
-         })
-       }
-       return gq
-     }
- 
-     function Nq(qq) {
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-       const gq = Wq(qq);
-       let Yq = "";
- ... (8 more removed lines; see GitHub link above)
+           const wC = Nz(zC);
+           if (wC) return (0, gC.jsx)(nC.d, {
+             className: "DocsInlineCode DocsSymbolLink",
+             to: DC(ZC, uC(wC.pageId), wC.anchor),
+             children: zC
+           });
+           const bC = Pz(zC);
+           return (0, gC.jsxs)("code", {
+             className: "DocsInlineCode",
+             children: [bC && (0, gC.jsx)(Gz, {
+               colour: bC
+             }), zC]
+           })
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L165-L167` → after: `L868-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L868-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L868-L895) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L165-L167)

```diff
-         if ("heading" === cq.kind && 1 === cq.level && !Yq) {
-           Yq = cq.text;
-           continue
+ 
+         function Jz(CC) {
+           let {
+             text: zC
+           } = CC;
+           const ZC = [];
+           let wC = 0;
+           for (const QC of zC.matchAll(iC.e)) {
+             QC.index > wC && ZC.push(...Rz(zC.slice(wC, QC.index)));
+             const [, CC, bC, nC, fC, oC] = QC;
+             CC ? ZC.push((0, gC.jsx)(xz, {
+               code: (0, iC.j)(CC, bC)
+             })) : nC ? ZC.push((0, gC.jsx)("strong", {
+               children: (0, gC.jsx)(Jz, {
+                 text: nC
+               })
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L169-L174` → after: `L897-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L897-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L897-L930) · [Before (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L169-L174)

```diff
-         if ("heading" === cq.kind && cq.level <= Eq) {
-           Oq.push({
-             heading: cq,
-             blocks: []
-           });
-           continue
+         const Iz = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
+           iz = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);
+ 
+         function vz(CC) {
+           let {
+             type: zC
+           } = CC;
+           const ZC = oz(),
+             wC = [];
+           for (const QC of zC.trim().matchAll(Iz)) {
+             const [CC, zC, bC, nC, fC] = QC;
+             zC ? wC.push((0, gC.jsx)("span", {
+               className: "DocsTypeString",
+               children: CC
+             })) : bC && ZC.has(bC) ? wC.push((0, gC.jsx)(dz, {
+               name: bC,
+ ... (18 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L176-L298` → after: `L932-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L932-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L932-L983) · [Before (L176-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L176-L298)

```diff
-         const qq = Oq.at(-1);
-         qq ? qq.blocks.push(cq) : lq.push(cq)
-       }
-       const Aq = qq => {
-         for (;
-           "rule" === (null === (Eq = qq.at(-1)) || void 0 === Eq ? void 0 : Eq.kind);) {
-           var Eq;
-           qq.pop()
-         }
-       };
-       Aq(lq);
-       for (const cq of Oq) Aq(cq.blocks);
-       return {
-         title: Yq,
-         intro: lq,
-         sections: Oq
- ... (107 more removed lines; see GitHub link above)
+         const ez = 480,
+           hz = 6,
+           Kz = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
+         let Yz = 0;
+ 
+         function dz(CC) {
+           let {
+             name: zC,
+             definition: ZC
+           } = CC;
+           const wC = (0, QC.useContext)(Mz),
+             bC = qz[zC],
+             fC = (0, QC.useRef)(null),
+             oC = (0, QC.useRef)(null),
+             FC = (0, QC.useRef)(null),
+             [WC, NC] = (0, QC.useState)(!1),
+ ... (36 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L300-L364` → after: `L985-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L985-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L985-L1113) · [Before (L300-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L300-L364)

```diff
-           }, Eq);
-         case "table":
-           return (0, Oq.jsxs)("table", {
-             children: [(0, Oq.jsx)("thead", {
-               children: (0, Oq.jsx)("tr", {
-                 children: qq.header.map(((qq, Eq) => (0, Oq.jsx)("th", {
-                   children: Aq(qq)
-                 }, Eq)))
-               })
-             }), (0, Oq.jsx)("tbody", {
-               children: qq.rows.map(((qq, Eq) => (0, Oq.jsx)("tr", {
-                 children: qq.map(((qq, Eq) => (0, Oq.jsx)("td", {
-                   children: Aq(qq)
-                 }, Eq)))
-               }, Eq)))
-             })]
- ... (49 more removed lines; see GitHub link above)
+           }), [WC]), (0, gC.jsxs)(gC.Fragment, {
+             children: [(0, gC.jsx)("button", {
+               type: "button",
+               ref: fC,
+               className: "DocsTypeLink",
+               "aria-expanded": WC,
+               "aria-describedby": WC ? RC : void 0,
+               onMouseEnter: AC,
+               onMouseLeave: xC,
+               onFocus: AC,
+               onBlur: xC,
+               onKeyDown: CC => {
+                 "Tab" === CC.key && !CC.shiftKey && FC.current && (CC.preventDefault(), FC.current.focus())
+               },
+               onClick: AC,
+               children: zC
+ ... (113 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L366-L410` → after: `L1115-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L1115-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L1115-L1120) · [Before (L366-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L366-L410)

```diff
-           if (gq || /^\s*>/.test(Yq)) continue;
-           const qq = Yq.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
-           Eq.push(...(0, lq.v)(qq))
-         }
-         return Eq
-       }(qq).filter((qq => xq(qq) || cq.test(qq) && !Aq.test(qq)))
-     }
-     const Wq = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       Nq = [{
-         name: "Qwen3.6-27B",
-         temperature: .7,
-         reasoningEffort: "none"
-       }, {
-         name: "Qwen3.5-397B-A17B",
-         temperature: .7,
-         reasoningEffort: "none"
- ... (29 more removed lines; see GitHub link above)
+         };
+         var cz = ZC(310),
+           uz = ZC(1894);
+ 
+         function rz(CC) {
+           return CC.startsWith("fa-")
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L412-L413` → after: `L1122-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L1122-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L1122-L1142) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L412-L413)

```diff
-       }
-     }
+         const sz = {
+             text: "Text",
+             icon: "Icon",
+             progressBar: "Progress bar",
+             keyBinding: "Key binding",
+             other: "Other"
+           },
+           Tz = {
+             text: "Text",
+             icon: {
+               icon: "Pixelated Heart"
+             },
+             progressBar: {
+               type: "ProgressBar",
+               progress: .5
+             },
+ ... (5 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L415-L419` → after: `L1144-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L1144-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L1144-L1269) · [Before (L415-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L415-L419)

```diff
-     function oq(qq, Eq, gq) {
-       return new Promise(((lq, Oq) => {
-         const mq = new AbortController,
-           xq = () => {
-             mq.abort(), Oq((0, Yq.e)(gq))
+         function az(CC) {
+           return "string" === typeof CC ? "text" : "entityName" in CC || "translationKey" in CC ? "other" : (0, cz.ub)(CC) ? "progressBar" : (0, cz.tb)(CC) ? "keyBinding" : "icon" in CC ? "icon" : "str" in CC && "string" === typeof CC.str ? "text" : "other"
+         }
+         const tz = [{
+             path: ["style", "color"],
+             label: "Colour",
+             field: {
+               kind: "colour"
+             },
+             defaultText: "The surrounding text's"
+           }, {
+             path: ["style", "fontSize"],
+             label: "Font size",
+             field: {
+               kind: "size"
+             },
+ ... (110 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L421-L439` → after: `L1271-L1400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R1271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L1271-L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L1271-L1400) · [Before (L421-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L421-L439)

```diff
-         if (null !== gq && void 0 !== gq && gq.aborted) return void xq();
-         null === gq || void 0 === gq || gq.addEventListener("abort", xq, {
-           once: !0
-         });
-         const Aq = Nq.map((() => !1));
-         let cq = null;
-         const uq = Nq.map((() => !1)),
-           Bq = Nq.map((() => !1));
-         Nq.forEach(((Yq, Wq) => {
-           const aq = Hq(dq, mq.signal);
-           yq(Yq, [{
-             role: "user",
-             content: qq
-           }], aq.signal).then((qq => {
-             mq.signal.aborted || ("busy" === qq || "failed" === qq ? (uq[Wq] = "busy" === qq, Bq[Wq] = !0) : null !== qq && (null === cq || Wq < cq.rank) && (cq = {
-               rank: Wq,
- ... (3 more removed lines; see GitHub link above)
+ 
+         function jz(CC) {
+           return "string" === typeof CC ? {
+             str: CC
+           } : CC
+         }
+ 
+         function yz(CC, zC) {
+           let ZC = jz(CC);
+           for (const QC of zC) ZC = ZC && "object" === typeof ZC ? ZC[QC] : void 0;
+           return ZC
+         }
+ 
+         function Lz(CC, zC, ZC) {
+           const QC = (CC, wC) => {
+             var bC;
+ ... (114 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L441-L653` → after: `L1402-L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R1402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L1402-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L1402-L1429) · [Before (L441-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L441-L653)

```diff
-             }, Eq(cq.answer)))
-           }), (qq => {
-             mq.signal.aborted || (Bq[Wq] = !0, console.warn(`Studio AI: ${Yq.name} couldn't be reached`, qq))
-           })).finally((() => {
-             aq.clear(), Aq[Wq] = !0, mq.signal.aborted || (() => {
-               var qq, Eq;
-               const Yq = null !== (qq = null === (Eq = cq) || void 0 === Eq ? void 0 : Eq.rank) && void 0 !== qq ? qq : Nq.length;
-               Aq.slice(0, Yq).includes(!1) || (null === gq || void 0 === gq || gq.removeEventListener("abort", xq), mq.abort(), null !== cq ? lq({
-                 ...cq.answer,
-                 isFinal: !Bq.slice(0, cq.rank).includes(!0)
-               }) : Oq(new jq(uq.includes(!0) ? "busy" : "failed")))
-             })()
-           })).catch((qq => {
-             console.error("Studio AI: showing an answer failed", qq)
-           }))
-         }))
- ... (197 more removed lines; see GitHub link above)
+               return wC(), JSON.parse(zC)
+             }(CC.trim())
+           } catch (QC) {
+             return {
+               parts: null,
+               error: QC instanceof SyntaxError ? "This isn't a valid array yet." : QC.message
+             }
+           }
+           if (!Array.isArray(zC)) return {
+             parts: null,
+             error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
+           };
+           const ZC = zC.findIndex((CC => !ZZ(CC)));
+           return -1 !== ZC ? {
+             parts: null,
+             error: `Part ${ZC+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
+ ... (12 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L655-L700` → after: `L1431-L7297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L1431-L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/78.js#L1431-L7297) · [Before (L655-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/78.js#L655-L700)

```diff
-           xq = new RegExp(`(?:${Eq.source})`, `${Yq}y`).exec(qq);
-         if (xq) {
-           if (Oq.push(xq), !Eq.global) return Oq;
-           lq.lastIndex = mq(xq)
-         }
-         for (let Aq = lq.exec(qq); Aq; Aq = lq.exec(qq)) {
-           const gq = Wq(qq, Eq, Aq.index) - Aq.index;
-           if (Aq[0] = Aq[0].slice(gq), Aq.index += gq, Oq.push(Aq), !Eq.global) break;
-           lq.lastIndex = mq(Aq)
-         }
-         return Oq
-       }(qq, Eq, gq.notAfter) : function(qq, Eq, gq) {
-         const Yq = new RegExp(Eq.source, `${Eq.flags.replace(/[gy]/g,"")}g`),
-           lq = [];
-         for (let Oq = Yq.exec(qq); Oq; Oq = Yq.exec(qq))
-           if (!gq || gq(Oq)) {
- ... (30 more removed lines; see GitHub link above)
+           fZ = {
+             progressBar: Xz.progressBar.dZ,
+             timedClick: Xz.timedClick.icon,
+             gravityBar: Xz.gravityBar.icon,
+             precisionBar: Xz.precisionBar.icon,
+             rhythmClick: Xz.rhythmClick.icon
+           };
+ 
+         function oZ(CC) {
+           let {
+             type: zC
+           } = CC;
+           const [ZC, wC] = (0, QC.useState)("ready"), [nC, fC] = (0, QC.useState)(1), [oC, qC] = (0, QC.useState)(!0), FC = (0, QC.useRef)(null), WC = (0, QC.useRef)(null), NC = (0, QC.useRef)(null), MC = (0, QC.useRef)(new Set), SC = (0, QC.useRef)(!1), PC = fZ[zC], GC = (0, QC. … [truncated]
+             getState: () => {
+               var CC, zC;
+               return null !== (CC = null === (zC = NC.current) || void 0 === zC ? void 0 : zC.getState()) && void 0 !== CC ? CC : nZ
+ ... (5851 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/79.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/79.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda)

#### 1. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4` → after: `L4-L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L4-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/79.js#L4-L974) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/79.js#L4)

```diff
-   4572: (qq, Eq, gq) => {
+   4661: CC => {
+     function zC(CC) {
+       return CC instanceof Map ? CC.clear = CC.delete = CC.set = function() {
+         throw new Error("map is read-only")
+       } : CC instanceof Set && (CC.add = CC.clear = CC.delete = function() {
+         throw new Error("set is read-only")
+       }), Object.freeze(CC), Object.getOwnPropertyNames(CC).forEach((ZC => {
+         const QC = CC[ZC],
+           wC = typeof QC;
+         "object" !== wC && "function" !== wC || Object.isFrozen(QC) || zC(QC)
+       })), CC
+     }
+     class ZC {
+       constructor(CC) {
+         void 0 === CC.data && (CC.data = {}), this.data = CC.data, this.isMatchIgnored = !1
+       }
+ ... (955 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/79.js#L976) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/79.js#L6)

```diff
-       e: () => Vq
+       c: () => QC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L8-L17` → after: `L978-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L978-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/79.js#L978-L991) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/79.js#L8-L17)

```diff
-     const Yq = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
-       lq = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
-       Oq = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
-       mq = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
-       xq = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
-       Aq = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
-     var cq = gq(4579),
-       uq = gq(4581);
-     const Bq = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
-       Wq = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
+     const QC = ZC(4661)
+   },
+   4668: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => WC
+     });
+     const QC = "[A-Za-z$_][0-9A-Za-z$_]*",
+       wC = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugge … [truncated]
+       bC = ["true", "false", "null", "undefined", "NaN", "Infinity"],
+       nC = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigU … [truncated]
+       fC = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
+       oC = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
+       qC = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
+       FC = [].concat(oC, nC, fC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L20` → after: `L994-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L994-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/79.js#L994-L1323) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/79.js#L20)

```diff
-       return qq.split("\n").filter((qq => qq.startsWith("## "))).map((qq => qq.replace(/^## (.+)$/gm, "$1").trim()))
+       const zC = CC.regex,
+         ZC = QC,
+         WC = "<>",
+         NC = "</>",
+         MC = {
+           RM: /<[A-Za-z0-9\\._:-]+/,
+           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
+           isTrulyOpeningTag: (CC, zC) => {
+             const ZC = CC[0].length + CC.index,
+               QC = CC.input[ZC];
+             if ("<" === QC || "," === QC) return void zC.ignoreMatch();
+             let wC;
+             ">" === QC && (((CC, zC) => {
+               let {
+                 after: ZC
+               } = zC;
+ ... (314 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L24-L112` → after: `L1340-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1340-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/79.js#L1340-L1724) · [Before (L24-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/79.js#L24-L112)

```diff
-       return qq.split("\n").map(((qq, Eq) => 0 === Eq ? qq.trim() : qq.trim().replace(/^# ?/gm, " "))).join("\n\n")
-     }
-     const Vq = [{
-       id: "readme",
-       title: "Getting started",
-       content: '# Getting started\n\nThere are three places to write JavaScript in Bloxd: code blocks, code boards and World Code. Code in any of them controls the game through `api`, in custom games and worlds. Only players who can edit code (the `canEditCode` client option) can … [truncated]
-     }, {
-       id: "snippets",
-       title: "Snippets",
-       content: Wq,
-       subsections: Nq(Wq)
-     }, {
-       id: "changelog",
-       title: "Changelog",
-       content: '# Changelog\n\nHere you can discover the latest changes to the API.\n\n### 17th November 2026\n- Added the [`highlightedHotbarSlots`](#clientOptions-highlightedHotbarSlots) client option, to make hotbar slots pulse and show a player which item to use, e.g. `api.se … [truncated]
-     }, {
- ... (73 more removed lines; see GitHub link above)
+       const zC = CC.regex,
+         ZC = QC,
+         WC = "<>",
+         NC = "</>",
+         MC = {
+           RM: /<[A-Za-z0-9\\._:-]+/,
+           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
+           isTrulyOpeningTag: (CC, zC) => {
+             const ZC = CC[0].length + CC.index,
+               QC = CC.input[ZC];
+             if ("<" === QC || "," === QC) return void zC.ignoreMatch();
+             let wC;
+             ">" === QC && (((CC, zC) => {
+               let {
+                 after: ZC
+               } = zC;
+ ... (369 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/80.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/80.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102)

#### 1. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L4-L6` → after: `L4-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L4-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/80.js#L4-L697) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/80.js#L4-L6)

```diff
-   4579: qq => {
-     qq.exports = '# Block Names (1533 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
-   }
+   4674: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => QC,
+       e: () => nC,
+       g: () => pC,
+       h: () => SC,
+       j: () => fC,
+       n: () => wC,
+       p: () => bC,
+       r: () => gC,
+       s: () => MC,
+       u: () => NC
+     });
+     const QC = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
+ 
+     function wC(CC) {
+ ... (678 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/81.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/81.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L4-L5` → after: `L4-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L4-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/81.js#L4-L112) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/81.js#L4-L5)

```diff
-   4581: qq => {
-     qq.exports = "# Item Names (1532 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
+   4679: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => SC
+     });
+     const QC = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
+       wC = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
+       bC = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
+       nC = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
+       fC = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
+       oC = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
+     var qC = ZC(4688),
+       FC = ZC(4694);
+     const WC = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
+       NC = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
+ 
+     function MC(CC) {
+ ... (93 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/82.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/82.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18b547ff441c5b6195545c7bb1e67c7e408412b02f30591e01ceede9970029ba)

#### 1. `bundles/preprod.bloxd.io/chunks/js/82.js` (Changed code · before: `L4-L4485` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18b547ff441c5b6195545c7bb1e67c7e408412b02f30591e01ceede9970029baR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18b547ff441c5b6195545c7bb1e67c7e408412b02f30591e01ceede9970029ba) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/82.js#L4-L5) · [Before (L4-L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/82.js#L4-L4485)

```diff
-   4583: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       default: () => Yq
-     });
-     const Yq = String.raw`export interface GameApi {
- 		/** The ID of the player running the code.
- 		 *
- 		 * Lobby code usually has nobody running it, so this is null.
- 		 */
- 		myId: string | null
- 		/** The position of the code block or press to code board */
- 		thisPos: [number, number, number]
- 		/** The owner of the current custom lobby */
- 		lobbyOwnerId: string | null
- 		/**
-  * Get position of a player / entity.
- ... (4466 more removed lines; see GitHub link above)
+   4688: CC => {
+     CC.exports = '# Block Names (1533 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/83.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/83.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-53aca8b2c0d6cb60f55e420b640cb00cecf870e4e9bce279e4f89f744268bcd5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/83.js` (Changed code · before: `L4-L24059` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-53aca8b2c0d6cb60f55e420b640cb00cecf870e4e9bce279e4f89f744268bcd5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-53aca8b2c0d6cb60f55e420b640cb00cecf870e4e9bce279e4f89f744268bcd5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/83.js#L4-L5) · [Before (L4-L24059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/83.js#L4-L24059)

```diff
-   36584: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Lq,
-       f: () => pq
-     });
-     var Yq = gq(57),
-       lq = gq(1904),
-       Oq = gq(36586),
-       mq = gq.n(Oq),
-       xq = gq(4367),
-       Aq = gq(1876),
-       cq = gq(1416),
-       uq = gq(96),
-       Bq = gq(114),
-       Wq = gq(307),
-       Nq = gq(1018),
- ... (24040 more removed lines; see GitHub link above)
+   4694: CC => {
+     CC.exports = "# Item Names (1532 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/84.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/84.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/84.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/84.js#L4-L7)

```diff
-   4606: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Pq,
-       d: () => jq
+   4696: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       default: () => QC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9-L1787` → after: `L8-L4485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8-L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/84.js#L8-L4485) · [Before (L9-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/84.js#L9-L1787)

```diff
-     var Yq = gq(1292),
-       lq = gq(31);
-     var Oq = gq(307);
-     var mq = gq(598);
-     var xq = gq(2357),
-       Aq = gq(4608),
-       cq = gq(4627),
-       uq = gq(4637);
-     class Bq {
-       constructor(qq, Eq, gq, Yq, lq, Oq) {
-         this.id = qq, this.type = Eq, this.parameters = gq, this.tearDownNotification = Yq, this.onDonePromise = lq, this.resolveRequest = Oq
-       }
-     }
-     const Wq = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
-     class Nq {
-       constructor(qq, Eq, gq, Yq, lq, Oq) {
- ... (1763 more removed lines; see GitHub link above)
+     const QC = String.raw`export interface GameApi {
+ 		/** The ID of the player running the code.
+ 		 *
+ 		 * Lobby code usually has nobody running it, so this is null.
+ 		 */
+ 		myId: string | null
+ 		/** The position of the code block or press to code board */
+ 		thisPos: [number, number, number]
+ 		/** The owner of the current custom lobby */
+ 		lobbyOwnerId: string | null
+ 		/**
+  * Get position of a player / entity.
+  * @param entityId
+  */
+ getPosition(entityId: EntityId): Pos
+ /**
+ ... (4462 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/85.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/85.js` (85 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L2)

```diff
- export const ids = [85];
+ export const ids = [85, 194];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4-L63` → after: `L4-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L4-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L4-L78) · [Before (L4-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L4-L63)

```diff
-   40287: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       startWasmPadGameplay: () => Gq
-     });
-     gq(40293);
-     var Yq = gq(40295),
-       lq = gq(40309),
-       Oq = gq(1926),
-       mq = gq(40318),
-       xq = gq(4625),
-       Aq = gq(4608),
-       cq = gq(40320),
-       uq = gq(40325),
-       Bq = gq(4629),
-       Wq = gq(40394),
-       Nq = gq(2364),
- ... (44 more removed lines; see GitHub link above)
+   36414: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => sC,
+       g: () => uC
+     });
+     var QC = ZC(48),
+       wC = ZC(1840),
+       bC = ZC(36417),
+       nC = ZC.n(bC),
+       fC = ZC(4479),
+       oC = ZC(1811),
+       qC = ZC(1383),
+       FC = ZC(77),
+       WC = ZC(91),
+       NC = ZC(326),
+       MC = ZC(1002),
+ ... (59 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L65-L66` → after: `L80-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L80-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L80-L86) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L65-L66)

```diff
-           lq = () => {
-             gq = !1, Eq.reset(), Yq(0, 0)
+           QC = ZC => {
+             const QC = zC,
+               wC = QC && (0, dC.d)(ZC.changedTouches, QC.id);
+             wC && (ZC.preventDefault(), CC.scrollBy({
+               top: QC.y - wC.clientY,
+               behavior: "instant"
+             }), QC.y = wC.clientY)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L68-L77` → after: `L88-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L88-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L88-L93) · [Before (L68-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L68-L77)

```diff
-         return {
-           update: (lq, Oq, Aq) => {
-             gq || (qq.discardPending(), gq = !0);
-             const cq = (0, Vq.o)(Eq, lq, Oq, Aq, performance.now());
-             Yq(cq.yawRadPerSec, cq.pitchRadPerSec);
-             const uq = qq.drainLookDelta();
-             0 === uq.VJ && 0 === uq.dJ || (0, Nq.r)(xq.E.PadLook, mq.Ld.Gyro, uq.VJ, uq.dJ, 0)
-           },
-           release: lq,
-           uninstall: lq
+         return CC.addEventListener("touchstart", ZC, {
+           passive: !0
+         }), CC.addEventListener("touchmove", QC, {
+           passive: !1
+         }), () => {
+           CC.removeEventListener("touchstart", ZC), CC.removeEventListener("touchmove", QC)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L79-L87` → after: `L95-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L95-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L95-L139) · [Before (L79-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L79-L87)

```diff
-       },
-       Sq = () => {
-         const qq = fq();
-         return null !== qq && 0 !== (Mq(qq) & mq.Pd.PadSneakToggled)
-       },
-       pq = () => {
-         const qq = (qq => {
-           const Eq = qq => function() {
-             return (0, Wq.e)(), qq(...arguments)
+       }), [jC]);
+       const [yC, LC] = (0, QC.useState)(!1), [UC, BC] = (0, QC.useState)(!1), OC = (0, QC.useRef)(yC), kC = (0, QC.useRef)(null), VC = (0, QC.useRef)(!1), Cz = (0, QC.useRef)(null), zz = (0, QC.useRef)(null), Zz = (0, QC.useRef)(null), Qz = (0, QC.useRef)(fz);
+       Qz.current = fz;
+       const wz = (0, KC.j)();
+ 
+       function bz() {
+         AC.current = !1, MC(!1), zz.current.blur()
+       }
+ 
+       function nz(CC) {
+         OC.current = CC, LC(CC)
+       }
+ 
+       function fz() {
+         const CC = zz.current.value;
+         zz.current.value = "", oz(CC)
+ ... (29 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L89-L114` → after: `L141-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L141-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L141-L205) · [Before (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L89-L114)

```diff
-           return {
-             primaryFireDown: Eq((() => (bq(oq), 0))),
-             primaryFireUp: Eq((() => {
-               iq(oq)
-             })),
-             altFireDown: Eq((() => (bq(Pq), 0))),
-             altFireUp: Eq((() => {
-               iq(Pq)
-             })),
-             jumpDown: Eq((() => {
-               Zq(yq)
-             })),
-             specialActionDown: Eq((qq => {
-               bq(hq[qq])
-             })),
-             specialActionUp: Eq((qq => {
- ... (10 more removed lines; see GitHub link above)
+           document.addEventListener("touchstart", CC, {
+             capture: !0
+           });
+           const zC = CC => {
+             (0, eC.h)(CC.target) && (AC.current = !1, MC(!1))
+           };
+           document.addEventListener("mousedown", zC, {
+             capture: !0
+           });
+           const ZC = () => {
+               clearTimeout(kC.current), nz(!0)
+             },
+             QC = () => {
+               clearTimeout(kC.current), kC.current = setTimeout((() => {
+                 nz(!1), Fz()
+               }), 4e3)
+ ... (49 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L116` → after: `L207-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L207-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L207-L222) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L116)

```diff
-             pickBlock: Eq((() => (Zq(Qq), Tq(qq()))))
+             NC = () => {
+               qC = !0, WC.unobserve(oC), WC.observe(oC)
+             };
+           Cz.current = NC;
+           const gC = new MutationObserver(NC);
+           return gC.observe(oC, {
+             childList: !0,
+             subtree: !0
+           }), () => {
+             document.removeEventListener("keydown", fC, {
+               capture: !0
+             }), document.removeEventListener("touchstart", CC, {
+               capture: !0
+             }), document.removeEventListener("mousedown", zC, {
+               capture: !0
+             }), document.removeEventListener("pointerlockchange", bC), Cz.current = null, gC.disconnect(), WC.disconnect(), clearTimeout(kC.current)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L118-L148` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L224-L226) · [Before (L118-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L118-L148)

```diff
-         })(fq);
-         let Eq = !1,
-           gq = null;
-         const Yq = () => {
-           var qq;
-           null === (qq = gq) || void 0 === qq || qq(), gq = null
-         };
-         return {
-           bodies: () => qq,
-           look: zq(),
-           move: (qq, gq) => {
-             var lq;
-             Yq();
-             const {
-               bits: Oq,
-               flips: xq
- ... (15 more removed lines; see GitHub link above)
+         }), []), (0, RC.q)(zz, {
+           open: () => {
+             MC(!0)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L150-L154` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L228-L229) · [Before (L150-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L150-L154)

```diff
-           stopMoving: () => {
-             var qq;
-             Eq && (Eq = !(null !== (qq = fq()) && void 0 !== qq && qq.padMove(0, 0, 0, 0, 0, 0)), Yq(), gq = (0, Aq.x)((() => {
-               Yq(), (0, dq.f)(Sq())
-             })))
+           close: () => {
+             bz()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L156-L159` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L231-L232) · [Before (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L156-L159)

```diff
-           uninstall: Yq,
-           deviceChanged: qq => {
-             var gq;
-             "touch" === qq ? ((0, dq.f)(!1), null !== (gq = fq()) && void 0 !== gq && gq.padMove(0, 0, 0, 0, mq.Id.EndToggle, 0) && (Eq = !1)) : "gamepad" === qq && (0, dq.f)(Sq())
+           submit: () => {
+             "" !== zz.current.value && fz(), bz()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L161-L164` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L234-L235) · [Before (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L161-L164)

```diff
-           hasPlayer: () => null !== fq(),
-           isPlayerDead: () => {
-             var qq;
-             return !1 === (null === (qq = fq()) || void 0 === qq ? void 0 : qq.localPlayerAlive())
+           stepHistory: () => {
+             qz(1, !0)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L166-L168` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L237-L238) · [Before (L166-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L166-L168)

```diff
-           isReplayMode: () => {
-             const qq = fq();
-             return null !== qq && 0 !== (Mq(qq) & mq.Pd.Replay)
+           sendLine: CC => {
+             oz(CC), bz()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L170-L172` → after: `L240-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L240-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L240-L596) · [Before (L170-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L170-L172)

```diff
-           isFreeCameraOn: () => {
-             const qq = fq();
-             return null !== qq && 0 !== (Mq(qq) & mq.Pd.FreeCam)
+           selectNextChannel: () => {
+             iC.d.selectNextChannel()
+           }
+         }), (0, QC.useEffect)((() => {
+           var CC;
+           (AC.current = bC, zz.current) && (bC ? (aC.current = 0, zz.current.focus()) : (zz.current.blur(), null === (CC = Cz.current) || void 0 === CC || CC.call(Cz)))
+         }), [bC]),
+         function(CC, zC) {
+           (0, QC.useLayoutEffect)((() => {
+             if (!zC) return;
+             mC.d.hold();
+             const ZC = CC.current.closest(".InGameHeaderAndChat"),
+               QC = (0, HC.b)((CC => {
+                 let {
+                   top: zC,
+                   height: QC
+ ... (341 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L174-L177` → after: `L598-L24510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L598-L24510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L598-L24510) · [Before (L174-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L174-L177)

```diff
-           targetsBlock: () => Tq(fq()),
-           selectedSlotEmpty: () => {
-             var qq;
-             return !(null !== (qq = fq()) && void 0 !== qq && qq.items.Fc())
+           onPointerMove: CC => {
+             const ZC = PC.current;
+             if (!ZC) return;
+             const QC = "right" === zC ? ZC.start - CC.clientX : RC(CC) - ZC.start;
+             gC(Math.min(ZC.maxSize, Math.max(ZC.minSize, ZC.startSize + QC)))
+           },
+           onPointerUp: AC,
+           onPointerCancel: AC,
+           onLostPointerCapture: AC
+         }), FC && (0, fC.jsx)(nC.k, {
+           className: "ResizableSidePanelClose",
+           onClick: FC
+         })]
+       })
+     }
+   },
+ ... (23897 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L179-L181` → after: `L24512-L24518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24512-L24518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24512-L24518) · [Before (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L179-L181)

```diff
-           pickBlockAllowed: () => !!Oq.c.get("creative") && !!Oq.c.get("canPickBlocks"),
-           scrollHotbar: qq => {
-             nq(mq.Fd.Hotbar, mq.Ed.Down | (qq > 0 ? mq.Ed.Next : 0))
+           browserInfo: {
+             ua: window.navigator.userAgent,
+             name: (0, NC.getBrowserName)(),
+             version: (0, NC.getBrowserVersion)(),
+             platform: navigator.platform,
+             platformType: (0, NC.getPlatformType)(),
+             deviceType: (0, SC.c)()
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L183-L195` → after: `L24520-L24531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24520-L24531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24520-L24531) · [Before (L183-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L183-L195)

```diff
-           hasFullInventory: cq.j,
-           hasLobbyTab: () => (0, jq.d)({
-             lobbyLeaderboardInfo: Oq.c.get("lobbyLeaderboardInfo"),
-             lobbyManage: Oq.c.get("lobbyManage")
-           }),
-           contextActionInputs: () => {
-             var qq, Eq, gq, Yq;
-             const lq = fq();
-             return {
-               holdingGun: !1 !== (null === lq || void 0 === lq ? void 0 : lq.localPlayerAlive()) && "Gun" === (null === lq || void 0 === lq || null === (qq = lq.items.Fc()) || void 0 === qq || null === (Eq = qq.typeObj) || void 0 === Eq ? void 0 : Eq.type),
-               customButtons: null !== (gq = Oq.c.get("customButtons")) && void 0 !== gq ? gq : null,
-               touchscreenActionButton: null !== (Yq = Oq.c.get("touchscreenActionButton")) && void 0 !== Yq ? Yq : null
-             }
+           isLoggedIn: CC.isLoggedIn(),
+           lobbyName: ZC,
+           languages: xC(),
+           version: nC.e,
+           siteUsed: MC.y,
+           subsiteUsed: MC.H,
+           playSessionId: (0, pC.j)(zC),
+           visitSessionId: (0, GC.d)(),
+           clientReason: qC.r.reason,
+           budgetBasis: (0, AC.c)(),
+           ...null !== FC.n && {
+             diagClaim: FC.n.claimId
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L197-L198` → after: `L24533-L24534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24533-L24534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24533-L24534) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L197-L198)

```diff
-           pressTouchButton: qq => {
-             qq ? bq(vq) : iq(vq)
+           ...null !== vC && {
+             webGpuLoss: vC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L200-L208` → after: `L24536-L24562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24536-L24562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24536-L24562) · [Before (L200-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L200-L208)

```diff
-         }
-       },
-       Gq = () => {
-         const qq = (0, lq.d)(pq()),
-           Eq = (0, Yq.e)(),
-           gq = null;
-         return () => {
-           qq(), Eq(), null === gq || void 0 === gq || gq()
-         }
+         };
+       return null !== iC && (0, fC.qc)(iC) ? (eC.lobbyName = (0, QC.f)(iC, (0, QC.k)(zC), ZC), {
+         roomName: `classic_${oC.f}`,
+         joinOptions: eC
+       }) : {
+         roomName: zC,
+         joinOptions: eC
+       }
+     }
+   },
+   8774: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(8776),
+       wC = ZC(600),
+ ... (11 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L211` → after: `L24582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24582) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L211)

```diff
-   4625: (qq, Eq, gq) => {
+   36750: (CC, zC, ZC) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L217-L240` → after: `L24586-L24587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24586-L24587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24586-L24587) · [Before (L217-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L217-L240)

```diff
-       E: () => dq,
-       Eb: () => tq,
-       G: () => wq,
-       H: () => uq,
-       Hb: () => Mq,
-       L: () => Bq,
-       Lb: () => Jq,
-       Nb: () => zq,
-       O: () => cq,
-       Q: () => jq,
-       Qb: () => pq,
-       T: () => Aq,
-       Tb: () => Gq,
-       V: () => aq,
-       Vb: () => Qq,
-       Wb: () => yq,
- ... (8 more removed lines; see GitHub link above)
+       D: () => uC,
+       d: () => oC,
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L242-L245` → after: `L24589-L24590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24589-L24590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24589-L24590) · [Before (L242-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L242-L245)

```diff
-       fb: () => hq,
-       i: () => Wq,
-       ib: () => iq,
-       kb: () => kq,
+       j: () => fC,
+       k: () => HC,
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L247-L250` → after: `L24592-L24594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24592-L24594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24592-L24594) · [Before (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L247-L250)

```diff
-       mb: () => Lq,
-       pb: () => Sq,
-       q: () => Uq,
-       sb: () => Zq,
+       n: () => JC,
+       o: () => mC,
+       r: () => dC,
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L252-L256` → after: `L24596-L24597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24596-L24597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24596-L24597) · [Before (L252-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L252-L256)

```diff
-       u: () => Hq,
-       ub: () => Tq,
-       wb: () => fq,
-       y: () => mq,
-       zb: () => Vq
+       w: () => lC,
+       y: () => XC
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L258-L573` → after: `L24599-L24602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24599-L24602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24599-L24602) · [Before (L258-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L258-L573)

```diff
-     const Yq = 32,
-       lq = 33.333333333333336,
-       Oq = {
-         AbiVersion: 0,
-         Status: 1,
-         LastError: 2,
-         ErrorCount: 3,
-         FrameIndex: 4,
-         TicksRun: 5,
-         TicksDropped: 6,
-         Alpha: 7,
-         NetOutPtr: 8,
-         NetOutLen: 9,
-         WorkerOutPtr: 10,
-         WorkerOutLen: 11,
-         EventsPtr: 12,
- ... (300 more removed lines; see GitHub link above)
+     var QC = ZC(38);
+     const wC = {
+         codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
+         worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L576-L731` → after: `L24610-L24611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24610-L24611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24610-L24611) · [Before (L576-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L576-L731)

```diff
-         None: 0,
-         InputOverCapacity: 1,
-         InputTruncated: 2,
-         InputUnknownKind: 3,
-         InputNonFinite: 4,
-         NetOverCapacity: 16,
-         NetTruncated: 17,
-         NetOversize: 18,
-         NetBadKind: 19,
-         NetConnUnknown: 20,
-         NetConnBackwards: 21,
-         WorkerOverCapacity: 32,
-         WorkerTruncated: 33,
-         WorkerUnknownKind: 34,
-         TimeNonFinite: 48,
-         TimeBackwards: 49,
- ... (140 more removed lines; see GitHub link above)
+         codeBlockIntro: "codeBlockIntroShown",
+         worldCodeIntro: "worldCodeIntroShown"
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L735-L785` → after: `L24614-L24624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24614-L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24614-L24624) · [Before (L735-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L735-L785)

```diff
-         GameCodeMessage: 4,
-         NewOtherEntitySettings: 23,
-         NewClientOptions: 37,
-         Chat: 64,
-         UiRequestPopup: 8,
-         TaskProgress: 9,
-         CustomKillfeed: 15,
-         TopRightHelper: 24,
-         NewUiRequest: 51,
-         PlayerKilled: 61,
-         OverShopInfo: 43,
-         ShowShopTutorial: 76,
-         SetCookie: 0,
-         LeaveValues: 85,
-         CustomAnalyticsEvent: 31,
-         ProgressionEvent: 19,
- ... (35 more removed lines; see GitHub link above)
+         welcome: "welcomeComplete",
+         docsOverview: "docsOverviewComplete",
+         aiHelperOverview: "aiHelperOverviewComplete"
+       };
+     let NC = null,
+       MC = null;
+     const gC = new Set,
+       SC = new Set;
+     let pC = null;
+     const PC = new Set,
+       GC = new Set;
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L787-L788` → after: `L24626-L24629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24626-L24629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24626-L24629) · [Before (L787-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L787-L788)

```diff
-     function mq(qq) {
-       Oq = null !== qq && void 0 !== qq ? qq : lq
+     function RC() {
+       GC.forEach((CC => {
+         CC()
+       }))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L805-L807` → after: `L24648-L24652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24648-L24652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24648-L24652) · [Before (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L805-L807)

```diff
-       return Aq.add(qq), () => {
-         Aq.delete(qq)
-       }
+       const zC = AC();
+       zC[CC] || (NC = {
+         ...zC,
+         [CC]: !0
+       }, QC.i.setItem(qC, NC))
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L810-L815` → after: `L24655-L24656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24655-L24656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24655-L24656) · [Before (L810-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L810-L815)

```diff
-     function Hq(qq, Eq) {
-       for (const Yq of Aq) try {
-         Yq(qq)
-       } catch (gq) {
-         Eq(gq)
-       }
+     function JC(CC) {
+       return "docsOverview" === CC ? bC : "aiHelperOverview" === CC ? nC : MC ? wC[MC] : []
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L819-L821` → after: `L24660-L24665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24660-L24665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24660-L24665) · [Before (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L819-L821)

```diff
-       return cq.add(qq), () => {
-         cq.delete(qq)
-       }
+       return ("worldCodeButton" !== CC || !AC().worldCodeIntroShown) && !PC.has(CC)
+     }
+ 
+     function iC(CC) {
+       var zC;
+       return (null === (zC = pC) || void 0 === zC ? void 0 : zC.name) === CC ? pC.stepsDone : gC
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L825-L831` → after: `L24669-L24674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24669-L24674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24669-L24674) · [Before (L825-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L825-L831)

```diff
-       const gq = uq < 0 ? 0 : qq - uq;
-       uq = qq;
-       for (const lq of cq) try {
-         lq(gq)
-       } catch (Yq) {
-         Eq(Yq)
-       }
+       if (! function(CC) {
+           return pC ? pC.name === CC : "welcome" === CC
+         }(CC) || !IC(zC) || iC(CC).has(zC)) return !1;
+       if (pC) return !0;
+       const ZC = FC[zC];
+       return ZC ? !AC()[ZC] || SC.has(zC) : !AC()[WC[CC]]
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L835-L837` → after: `L24678-L24679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24678-L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24678-L24679) · [Before (L835-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L835-L837)

```diff
-       return Bq.add(qq), () => {
-         Bq.delete(qq)
-       }
+       var zC;
+       return null !== (zC = JC(CC).find((zC => vC(CC, zC)))) && void 0 !== zC ? zC : null
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L841-L843` → after: `L24683-L24684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24683-L24684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24683-L24684) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L841-L843)

```diff
-       return Wq.add(qq), () => {
-         Wq.delete(qq)
-       }
+       var zC;
+       xC(WC[CC]), (null === (zC = pC) || void 0 === zC ? void 0 : zC.name) === CC && (pC = null)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L848` → after: `L24688-L24692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24688-L24692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24688-L24692) · [Before (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L848)

```diff
-       tq += qq
+       const zC = (pC ? [pC.name] : ["welcome", "docsOverview"]).find((zC => eC(zC) === CC));
+       if (!zC) return;
+       iC(zC).add(CC);
+       const ZC = FC[CC];
+       ZC && (xC(ZC), pC || SC.add(CC)), null === eC(zC) && hC(zC), RC()
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L851-L853` → after: `L24695-L24709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24695-L24709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24695-L24709) · [Before (L851-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L851-L853)

```diff
-     function vq() {
-       const qq = tq;
-       return tq = 0, qq
+     function YC(CC, zC) {
+       const ZC = JC(CC),
+         QC = iC(CC);
+       for (let wC = ZC.indexOf(zC) - 1; wC >= 0; wC--)
+         if (QC.has(ZC[wC]) && IC(ZC[wC])) return ZC[wC];
+       return null
+     }
+ 
+     function dC(CC, zC) {
+       return null !== YC(CC, zC)
+     }
+ 
+     function mC(CC, zC) {
+       const ZC = YC(CC, zC);
+       ZC && (iC(CC).delete(ZC), RC())
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L857-L859` → after: `L24713-L24716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24713-L24716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24713-L24716) · [Before (L857-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L857-L859)

```diff
-       return Vq.add(qq), () => {
-         Vq.delete(qq)
-       }
+       hC(CC), "welcome" === CC && JC("welcome").forEach((CC => {
+         const zC = FC[CC];
+         zC && xC(zC)
+       })), RC()
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L863-L865` → after: `L24720-L24723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24720-L24723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24720-L24723) · [Before (L863-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L863-L865)

```diff
-       return dq.add(qq), () => {
-         dq.delete(qq)
-       }
+       pC = {
+         name: CC,
+         stepsDone: new Set
+       }, RC()
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L869` → after: `L24727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24727) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L869)

```diff
-       Nq = 0, aq = 0, uq = -1
+       (pC || 0 !== gC.size || 0 !== SC.size) && (pC = null, gC.clear(), SC.clear(), RC())
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L873-L876` → after: `L24731-L24732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24731-L24732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24731-L24732) · [Before (L873-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L873-L876)

```diff
-       if ("paced" === qq) return aq += Eq, null;
-       if ("drawn" !== qq && "skipped" !== qq) return null;
-       const gq = Eq + aq;
-       return aq = 0, gq
+       const ZC = zC ? CC : MC === CC ? null : MC;
+       ZC !== MC && (MC = ZC, RC())
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L879-L908` → after: `L24735-L24741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24735-L24741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24735-L24741) · [Before (L879-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L879-L908)

```diff
-     function Zq(qq, Eq, gq, lq) {
-       const Oq = (0, Yq.g)(Eq),
-         mq = qq > 0 ? performance.now() : 0;
-       for (let Yq = 0; Yq < qq; Yq++)
-         for (const qq of Vq) try {
-           qq()
-         } catch (xq) {
-           lq(xq)
-         }
-       if (qq > 0 && rq(performance.now() - mq), null !== gq) {
-         for (const qq of Bq) try {
-           qq(gq)
-         } catch (xq) {
-           lq(xq)
-         }
-         Nq += gq
- ... (14 more removed lines; see GitHub link above)
+     function cC(CC, zC) {
+       PC.has(CC) === zC && (zC ? PC.delete(CC) : PC.add(CC), RC())
+     }
+ 
+     function uC(CC) {
+       return GC.add(CC), () => {
+         GC.delete(CC)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L912` → after: `L24745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24745) · [Before (L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L912)

```diff
-   4622: (qq, Eq, gq) => {
+   36474: (CC, zC, ZC) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L968-L1007` → after: `L24749-L24750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24749-L24750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24749-L24750) · [Before (L968-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L968-L1007)

```diff
-       gd: () => Yq.Eb,
-       ge: () => sq,
-       hb: () => Yq.C,
-       hc: () => BE,
-       i: () => vq,
-       ic: () => lq.l,
-       id: () => Yq.Hb,
-       je: () => xE,
-       kb: () => Jq,
-       l: () => tq,
-       ld: () => Yq.Nb,
-       m: () => Yq.e,
-       mc: () => jq,
-       ne: () => VE,
-       o: () => WE,
-       ob: () => OE,
- ... (24 more removed lines; see GitHub link above)
+       h: () => PC,
+       l: () => qC
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1009-L1013` → after: `L24752-L24784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24752-L24784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24752-L24784) · [Before (L1009-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1009-L1013)

```diff
-     var Yq = gq(4625),
-       lq = gq(2357);
-     const Oq = Math.round(1e3 / Yq.bc),
-       mq = 4,
-       xq = 2;
+     var QC = ZC(20),
+       wC = ZC(2348),
+       bC = ZC(2351),
+       nC = ZC(2360),
+       fC = ZC(2431),
+       oC = ZC(28);
+ 
+     function qC(CC, zC) {
+       return (!(0, nC.c)() || 0 === CC && 0 === zC) && (0, bC.s)(wC.j.Joystick, 0, CC, zC, 0)
+     }
+     const FC = {
+       Action1: 1,
+       Action2: 2,
+       Action3: 3,
+       Attack: 4,
+       Use: 5,
+ ... (17 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1016` → after: `L24787-L24877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24787-L24877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24787-L24877) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1016)

```diff
-       return crypto.getRandomValues(new Uint32Array(xq))
+       return document.documentElement.classList.contains(fC.i)
+     }
+ 
+     function gC(CC) {
+       return !(CC instanceof HTMLElement) || CC.offsetWidth <= 0 || CC.offsetHeight <= 0 ? null : {
+         width: CC.offsetWidth,
+         height: CC.offsetHeight
+       }
+     }
+ 
+     function SC(CC, zC) {
+       const ZC = CC => Math.min(65535, Math.round(4 * CC));
+       return (ZC(CC) | ZC(zC) << 16) >>> 0
+     }
+ 
+     function pC(CC) {
+ ... (75 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1035` → after: `L24881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24881) · [Before (L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1035)

```diff
-       return (qq.nametagsHidden ? yq.NametagsHidden : 0) | (qq.crouchToggle ? yq.CrouchToggle : 0) | (qq.bhopDisabled ? yq.BhopDisabled : 0) | (qq.disableBobbing ? yq.DisableBobbing : 0) | (qq.ezTowering ? yq.EzTowering : 0) | (qq.ezBridging ? yq.EzBridging : 0) | (qq.showChunkBo … [truncated]
+       return [CC[0] + .5, CC[1] + .5, CC[2] + .5]
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1037-L1071` → after: `L24883-L24893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24883-L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24883-L24893) · [Before (L1037-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1037-L1071)

```diff
-     const aq = {
-         Flags: 0,
-         PhysicsVersion: 1,
-         InbuiltOverwritten: 2,
-         AltComplete: 3,
-         ProbeUsedProp: 4
-       },
-       Vq = {
-         Ready: 1,
-         SendFnReplaced: 2,
-         Butto: 4,
-         IdentityChanged: 32,
-         CheckFuncHit: 128,
-         OriginStackHit: 256
-       },
-       dq = {
- ... (19 more removed lines; see GitHub link above)
+     ZC.d(zC, {
+       e: () => wC,
+       i: () => QC
+     })
+   },
+   8792: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => wC,
+       i: () => QC
+     });
+     const QC = 100;
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1074` → after: `L24896-L24909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24896-L24909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24896-L24909) · [Before (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1074)

```diff
-       return (qq.showFog ? Wq.ShowFog : 0) | (qq.lighting ? Wq.Lighting : 0) | (qq.chunkFade ? Wq.ChunkFade : 0)
+       let {
+         translationKeys: zC = !1
+       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       return CC.map((CC => {
+         var ZC;
+         return null !== (ZC = function(CC, zC) {
+           if ("string" === typeof CC) return CC;
+           const ZC = "str" in CC ? CC.str : CC;
+           if ("string" === typeof ZC) return ZC;
+           if ("entityName" in ZC) return ZC.entityName;
+           if (zC && "translationKey" in ZC) return `{${ZC.translationKey}${void 0===ZC.params?"":` ${JSON.stringify(ZC.params)}`}}`;
+           return null
+         }(CC, zC)) && void 0 !== ZC ? ZC : " "
+       })).join("")
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1077-L1095` → after: `L24918-L24924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24918-L24924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24918-L24924) · [Before (L1077-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1077-L1095)

```diff
-         ResetFirst: 1,
-         AdStart: 2,
-         PreventMovement: 4,
-         AdEnd: 8,
-         PayloadMaxBytes: 1 << 20
-       },
-       yq = {
-         NametagsHidden: 1,
-         CrouchToggle: 2,
-         BhopDisabled: 4,
-         DisableBobbing: 8,
-         EzTowering: 16,
-         EzBridging: 32,
-         ShowChunkBorders: 64,
-         All: 127
-       },
- ... (3 more removed lines; see GitHub link above)
+         files: {
+           "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
+           "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
+         },
+         dependencies: [],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+         types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1098-L1099` → after: `L24927-L24932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24927-L24932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24927-L24932) · [Before (L1098-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1098-L1099)

```diff
-         Point: 1,
-         Stamped: 2
+         files: {
+           "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\ … [truncated]
+         },
+         dependencies: ["helpers"],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+         types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every  … [truncated]
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1102-L1103` → after: `L24935-L24943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24935-L24943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24935-L24943) · [Before (L1102-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1102-L1103)

```diff
-         Add: 1,
-         Clear: 2
+         files: {
+           "chunk.ts": 'import { setTimeout } from "./timers"\n\n/**\n * Forces a chunk to be loaded.\n * @param x - The x coordinate of the chunk\n * @param y - The y coordinate of the chunk\n * @param z - The z coordinate of the chunk\n * @param onLoaded - The function to call w … [truncated]
+           "index.ts": 'import { handleTimers } from "./timers"\n\ntick = () => {\n\thandleTimers()\n}\n\nexport { setTimeout, setInterval, clearTimeout, clearInterval } from "./timers"\nexport type { TimeoutId, IntervalId } from "./timers"\nexport { forceLoadChunk } from "./chunk … [truncated]
+           "random.ts": "/**\n * Generates a random integer between min and max, inclusive.\n * @param min - The minimum value.\n * @param max - The maximum value.\n * @param includeMax - Whether to include the max value in the range. Defaults to false.\n * @returns A random integ … [truncated]
+           "timers.ts": 'import { PlayerId } from "@bloxd"\n\ndeclare const __brand: unique symbol\ntype Branded<T, B> = T & { [__brand]: B }\nexport type TimeoutId = Branded<number, "TimeoutId">\nexport type IntervalId = Branded<number, "IntervalId">\n\nlet nextTimeoutId: number  … [truncated]
+         },
+         dependencies: [],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+         types: 'import { PlayerId } from \'@bloxd\';\n\ndeclare const __brand: unique symbol;\ntype Branded<T, B> = T & {\n    [__brand]: B;\n};\ntype TimeoutId = Branded<number, "TimeoutId">;\ntype IntervalId = Branded<number, "IntervalId">;\n/**\n * Registers a function to be c … [truncated]
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1110` → after: `L24946-L24956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24946-L24956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24946-L24956) · [Before (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1110)

```diff
-         Resume: 1
+         files: {
+           "MapVoter.ts": 'import { PlayerId } from "@bloxd"\nimport { BaseMapInfo, BaseTeamInfo } from "./types"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\nimport { shuffleArray, getRandomItem, setTimeout } from "@plugins/helpers"\n\nconst MAP_VOTING_CATEGORY = " … [truncated]
+           "SessionBasedGame.ts": 'import { BaseTeamInfo, BaseMapInfo, SessionBasedGameSetupOptions, MapSource } from "./types"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\nimport { BlockName, CustomTextStyling, PlayerId, Pos } from "@bloxd"\nimport { style, getDime … [truncated]
+           "SessionBasedPlayer.ts": 'import { BaseTeamInfo, BaseMapInfo } from "./types"\nimport { ChatTags, PlayerId, Pos, RecursiveReadonly } from "@bloxd"\nimport { SessionBasedGame } from "./SessionBasedGame"\nimport { style, getLowHigh } from "./helpers"\n\n/** Opacity a spec … [truncated]
+           "helpers.ts": 'import { CustomTextStyling, Pos, RecursiveReadonly, TranslatedText } from "@bloxd"\nimport { MapSource, MaybeRecursiveReadonly } from "./types"\n\nexport function style(msg: string | TranslatedText, colour: string): CustomTextStyling {\n\treturn [{ str: m … [truncated]
+           "index.ts": 'import { ChatTags, CustomTextStyling, EntityId, PlayerId, Pos, TranslatedText, RecursiveReadonly, BlockName } from "@bloxd"\nimport { BaseTeamInfo, BaseMapInfo, MapSource, SessionBasedGameSetupOptions } from "./types"\nimport { SessionBasedPlayer } from "./ … [truncated]
+           "types.ts": 'import { BlockName, CustomTextStyling, Pos, RecursiveReadonly } from "@bloxd"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\n\nexport type BaseTeamInfo = RecursiveReadonly<{\n\tname: string\n\tmaxPlayers: number\n\tcolour: string\n}>\n\n/** A w … [truncated]
+         },
+         dependencies: ["helpers"],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj … [truncated]
+         types: 'import * as _bloxd from \'@bloxd\';\nimport { PlayerId, CustomTextStyling, BlockName, ChatTags, Pos, RecursiveReadonly } from \'@bloxd\';\n\ndeclare class SessionBasedGame<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>, Player extends Session … [truncated]
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1113` → after: `L24959-L24998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR24959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L24959-L24998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L24959-L24998) · [Before (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1113)

```diff
-         Held: 1
+         debug: {
+           name: "debug",
+           specifier: "@plugins/debug",
+           sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
+           typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
+           files: QC.files,
+           dependencies: QC.dependencies,
+           bundledSource: QC.bundledSource,
+           types: QC.types
+         },
+         dialogue: {
+           name: "dialogue",
+           specifier: "@plugins/dialogue",
+           sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
+           typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
+           files: wC.files,
+ ... (24 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1116-L1117` → after: `L25001-L25014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25001-L25014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25001-L25014) · [Before (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1116-L1117)

```diff
-     function Mq(qq, Eq) {
-       return (qq | Eq << 8) >>> 0
+     function oC(CC) {
+       const zC = [],
+         ZC = new Set,
+         QC = CC => {
+           if (ZC.has(CC)) return;
+           const wC = fC[CC];
+           if (wC) {
+             ZC.add(CC);
+             for (const CC of wC.dependencies) QC(CC);
+             zC.push(CC)
+           }
+         };
+       for (const wC of CC) QC(wC);
+       return zC
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1121` → after: `L25033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25033) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1121)

```diff
-       return 255 & qq
+       return wC.includes(CC)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1125` → after: `L25037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25037) · [Before (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1125)

```diff
-       return qq >>> 8
+       return CC === QC.k || CC === QC.n
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1128-L1129` → after: `L25040-L25041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25040-L25041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25040-L25041) · [Before (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1128-L1129)

```diff
-     function Sq(qq) {
-       return qq + 3 & -4
+     function fC(CC, zC) {
+       return CC === QC.k && zC === QC.n || CC === QC.n && zC === QC.k
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1165` → after: `L25045-L25047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25045-L25047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25045-L25047) · [Before (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1165)

```diff
-       return qq === Xq.WorldgenSeed || qq === Xq.Generate
+       const zC = QC.n in CC,
+         ZC = QC.k in CC;
+       return zC && ZC ? null : zC ? QC.n : ZC ? QC.k : null
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1167-L1230` → after: `L25049-L25060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25049-L25060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25049-L25060) · [Before (L1167-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1167-L1230)

```diff
-     const Kq = 4,
-       Cq = 99,
-       Iq = {
-         PAIRS_MAX: 16,
-         FIXED_WORDS: 2,
-         PAIR_WORDS: 2,
-         WORDS_MAX: 34
-       },
-       eq = {
-         BYTES: 12,
-         WEBGPU: 1,
-         GL: 2,
-         WEBGPU_LOSSES_MAX: 1,
-         LOST: 0,
-         PIPELINE_FAILED: 1
-       },
- ... (48 more removed lines; see GitHub link above)
+ 
+     function qC(CC, zC, ZC) {
+       const QC = `${zC}/`;
+       return CC.filter((CC => CC.startsWith(QC))).map((CC => [CC, `${ZC}/${CC.slice(QC.length)}`]))
+     }
+ 
+     function FC(CC, zC) {
+       let ZC = 0;
+       for (const [QC, wC] of Object.entries(CC)) QC !== zC && (ZC += wC.length);
+       return ZC
+     }
+     const WC = "@plugins/";
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1233-L1235` → after: `L25063-L25067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25063-L25067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25063-L25067) · [Before (L1233-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1233-L1235)

```diff
-       for (const [Eq, gq] of Object.entries(Yq.f))
-         if (gq === qq) return Eq;
-       return `Unknown${qq}`
+       return `${WC}${CC}`
+     }
+ 
+     function MC(CC, zC) {
+       return `/node_modules/@plugins/${CC}/${zC}`
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1239-L1249` → after: `L25071-L25075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25071-L25075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25071-L25075) · [Before (L1239-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1239-L1249)

```diff
-       return {
-         status: qq[Yq.C.Status],
-         lastError: qq[Yq.C.LastError],
-         lastErrorDetail: qq[Yq.C.LastErrorDetail],
-         errorCount: qq[Yq.C.ErrorCount],
-         frameIndex: qq[Yq.C.FrameIndex],
-         tickIndex: qq[Yq.C.TickIndex],
-         renderPending: qq[Yq.C.RenderPending],
-         firstView: qq[Yq.C.FirstView],
-         chunksCancelled: qq[Yq.C.ChunksCancelled]
-       }
+       if (!CC.startsWith(WC)) return null;
+       const zC = CC.slice(WC.length);
+       return function(CC) {
+         return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(CC)
+       }(zC) ? zC : null
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1252` → after: `L25078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25078) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1252)

```diff
-   4616: (qq, Eq, gq) => {
+   36731: (CC, zC, ZC) => {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1254` → after: `L25080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25080) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1254)

```diff
-       c: () => mq,
+       d: () => fC,
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1256` → after: `L25082-L25084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25082-L25084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25082-L25084) · [Before (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1256)

```diff
-       g: () => lq
+       i: () => nC,
+       k: () => oC,
+       m: () => bC
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1258` → after: `L25086-L25089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25086-L25089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25086-L25089) · [Before (L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1258)

```diff
-     var Yq = gq(4622);
+     var QC = ZC(36725);
+     const wC = 5,
+       bC = "[SCHEMATIC]",
+       nC = 1024e4;
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1261` → after: `L25092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25092) · [Before (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1261)

```diff
-       return "none" !== qq
+       return CC.endsWith(".bloxdschem") && (0, QC.v)(CC.slice(0, -11) + ".ts") && CC.length <= 64
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1265-L1273` → after: `L25101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25101) · [Before (L1265-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1265-L1273)

```diff
-       if (!qq) return "none";
-       switch (Eq) {
-         case Yq.Y.Drawn:
-           return "drawn";
-         case Yq.Y.Paced:
-           return "paced";
-         default:
-           return "skipped"
-       }
+       return !CC.hidden && (zC || !CC.isRewardedAd)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1277` → after: `L25105-L25121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25105-L25121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25105-L25121) · [Before (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1277)

```diff
-       return "drawn" === qq
+       return "object" === typeof CC ? CC.option : CC
+     }
+ 
+     function bC(CC, zC) {
+       var ZC;
+       if ("dropdown" === (null === (ZC = CC.userInput) || void 0 === ZC ? void 0 : ZC.type) && "object" === typeof CC.userInput.dropdownOptions[0]) {
+         for (const ZC of CC.userInput.dropdownOptions)
+           if (wC(ZC) === zC) return "object" === typeof ZC ? ZC.cost : CC.cost;
+         console.error("Didn't find matching option for dropdown item. Item:", CC, "input:", zC)
+       }
+       return CC.cost
+     }
+ 
+     function nC(CC, zC, ZC) {
+       var QC;
+       const wC = null !== (QC = ZC.excludedPlayers) && void 0 !== QC ? QC : [zC];
+ ... (1 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1285-L1556` → after: `L25127-L25128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25127-L25128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25127-L25128) · [Before (L1285-L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1285-L1556)

```diff
-       l: () => Yq,
-       m: () => xq
-     });
-     const Yq = {
-         Mouse1: 1,
-         Mouse2: 2,
-         Mouse3: 3,
-         "Alt+Left Click": 4,
-         F2: 5,
-         F4: 6,
-         F5: 7,
-         F8: 8,
-         F9: 9,
-         Digit0: 10,
-         Digit1: 11,
-         Digit2: 12,
- ... (256 more removed lines; see GitHub link above)
+       k: () => QC
+     })
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1558` → after: `L25130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25130) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1558)

```diff
-   40394: (qq, Eq, gq) => {
+   36725: (CC, zC, ZC) => {
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1560-L1562` → after: `L25132-L25140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25132-L25140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25132-L25140) · [Before (L1560-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1560-L1562)

```diff
-       e: () => mq,
-       f: () => Oq,
-       i: () => lq
+       d: () => wC,
+       g: () => bC,
+       j: () => NC,
+       m: () => fC,
+       q: () => oC,
+       u: () => qC,
+       v: () => WC,
+       y: () => FC,
+       z: () => nC
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1564` → after: `L25142-L25148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25142-L25148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25142-L25148) · [Before (L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1564)

```diff
-     let Yq = null;
+     var QC = ZC(1183);
+     let wC = function(CC) {
+         return CC[CC.Join = 0] = "Join", CC[CC.Leave = 1] = "Leave", CC[CC.Push = 2] = "Push", CC[CC.Cursor = 3] = "Cursor", CC[CC.Submit = 4] = "Submit", CC[CC.ReloadAsVariation = 5] = "ReloadAsVariation", CC[CC.CreateFile = 6] = "CreateFile", CC[CC.RenameFile = 7] = "RenameFile … [truncated]
+       }({}),
+       bC = function(CC) {
+         return CC[CC.Joined = 0] = "Joined", CC[CC.Updates = 1] = "Updates", CC[CC.Presence = 2] = "Presence", CC[CC.RemoteCursor = 3] = "RemoteCursor", CC[CC.ForceClose = 4] = "ForceClose", CC[CC.LobbyFilesChanged = 5] = "LobbyFilesChanged", CC[CC.EngineSettings = 6] = "EngineSe … [truncated]
+       }({});
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1567` → after: `L25151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25151) · [Before (L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1567)

```diff
-       Yq = qq
+       return "lobby" === CC.kind ? `lobby:${CC.path}` : `codeBlock:${CC.pos[0]},${CC.pos[1]},${CC.pos[2]}`
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1571` → after: `L25155-L25170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25155-L25170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25155-L25170) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1571)

```diff
-       Yq === qq && (Yq = null)
+       if ("lobby" === CC) return {
+         kind: "lobby",
+         path: QC.k
+       };
+       if (CC.startsWith("lobby:")) {
+         const zC = CC.slice(6);
+         return WC(zC) ? {
+           kind: "lobby",
+           path: zC
+         } : null
+       }
+       const zC = CC.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
+       return zC ? {
+         kind: "codeBlock",
+         pos: [parseInt(zC[1]), parseInt(zC[2]), parseInt(zC[3])]
+       } : null
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1574-L1576` → after: `L25173-L25174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25173-L25174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25173-L25174) · [Before (L1574-L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1574-L1576)

```diff
-     function mq() {
-       var qq;
-       null === (qq = Yq) || void 0 === qq || qq()
+     function oC(CC) {
+       return CC.endsWith(".d.ts")
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1590` → after: `L25178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25178) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1590)

```diff
-       return qq instanceof HTMLElement && (!!(qq.isContentEditable || qq instanceof HTMLTextAreaElement || qq instanceof HTMLSelectElement) || qq instanceof HTMLInputElement && !Oq.has(qq.type))
+       return CC.endsWith(".ts") && !oC(CC)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1594-L1597` → after: `L25183-L25222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25183-L25222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25183-L25222) · [Before (L1594-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1594-L1597)

```diff
-       let Eq = null;
-       const gq = gq => {
-           const lq = mq(gq);
-           lq !== Eq && (Eq = lq, qq(Yq.i.UiCapture, Yq.C.Keyboard, 0, 0, lq ? Yq.C.Keyboard : 0))
+       if (!CC || CC !== CC.trim()) return !1;
+       if (CC.length > FC) return !1;
+       if (CC.startsWith("/") || CC.includes("\\") || CC.includes("\0")) return !1;
+       if (!oC(CC) && !qC(CC) && ! function(CC) {
+           return CC.endsWith(".js") && !CC.endsWith(".min.js") && !CC.endsWith(".bundle.js")
+         }(CC)) return !1;
+       const zC = CC.split("/");
+       for (const ZC of zC)
+         if ("" === ZC || "." === ZC || ".." === ZC) return !1;
+       return !0
+     }
+     const NC = 14e3
+   },
+   4783: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => wC,
+ ... (24 more added lines; see GitHub link above)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1599-L1600` → after: `L25224-L25239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25224-L25239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25224-L25239) · [Before (L1599-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1599-L1600)

```diff
-         lq = qq => {
-           gq(qq.target)
+         regular: {
+           waveform: "triangle",
+           pitchHz: 195,
+           glideSemitones: -.6,
+           durationMs: 70,
+           attackMs: 2,
+           releaseMs: 12,
+           lowpassHz: null,
+           volume: 1,
+           intonation: {
+             variationSemitones: 1.5,
+             declineSemitones: 2,
+             questionRiseSemitones: 4,
+             exclaimLiftSemitones: 2
+           },
+           syllableMs: 52
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1602-L1603` → after: `L25241-L25256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25241-L25256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25241-L25256) · [Before (L1602-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1602-L1603)

```diff
-         Oq = qq => {
-           gq(qq.relatedTarget)
+         dark: {
+           waveform: "sawtooth",
+           pitchHz: 80,
+           glideSemitones: -.6,
+           durationMs: 85,
+           attackMs: 6,
+           releaseMs: 16,
+           lowpassHz: 420,
+           volume: 1.05,
+           intonation: {
+             variationSemitones: 1,
+             declineSemitones: 3.5,
+             questionRiseSemitones: 2.5,
+             exclaimLiftSemitones: 1
+           },
+           syllableMs: 64
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1605-L1606` → after: `L25258-L25273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25258-L25273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25258-L25273) · [Before (L1605-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1605-L1606)

```diff
-         xq = () => {
-           gq(document.activeElement)
+         "high-pitched": {
+           waveform: "triangle",
+           pitchHz: 300,
+           glideSemitones: -.8,
+           durationMs: 55,
+           attackMs: 2,
+           releaseMs: 10,
+           lowpassHz: null,
+           volume: .8,
+           intonation: {
+             variationSemitones: 2.2,
+             declineSemitones: 2,
+             questionRiseSemitones: 5,
+             exclaimLiftSemitones: 3
+           },
+           syllableMs: 44
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1608-L1630` → after: `L25275-L25343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25275-L25343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25275-L25343) · [Before (L1608-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1608-L1630)

```diff
-         Aq = {
-           capture: !0,
-           passive: !0
-         };
-       return document.addEventListener("focusin", lq, Aq), document.addEventListener("focusout", Oq, Aq), document.addEventListener("keydown", xq, Aq), gq(document.activeElement), () => {
-         document.removeEventListener("focusin", lq, Aq), document.removeEventListener("focusout", Oq, Aq), document.removeEventListener("keydown", xq, Aq)
-       }
-     }
-     const Aq = new Map;
- 
-     function cq(qq, Eq) {
-       var gq;
-       let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
-       Aq.set(Yq, (null !== (gq = Aq.get(Yq)) && void 0 !== gq ? gq : 0) & ~qq | Eq & qq);
-       let Oq = 0;
-       for (const lq of Aq.values()) Oq |= lq;
- ... (7 more removed lines; see GitHub link above)
+         gruff: {
+           waveform: "sawtooth",
+           pitchHz: 105,
+           glideSemitones: -.8,
+           durationMs: 75,
+           attackMs: 4,
+           releaseMs: 14,
+           lowpassHz: 900,
+           volume: .85,
+           intonation: {
+             variationSemitones: 1.2,
+             declineSemitones: 3,
+             questionRiseSemitones: 3,
+             exclaimLiftSemitones: 2
+           },
+           syllableMs: 58
+ ... (53 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1633` → after: `L25346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25346) · [Before (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1633)

```diff
-       return / Bed(?: Head)?(?:\||$)/.test(qq) && !Yq(qq)
+       return "string" !== typeof CC ? CC : Object.hasOwn(bC, CC) ? bC[CC] : null
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1636-L1637` → after: `L25349-L25350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25349-L25350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25349-L25350) · [Before (L1636-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1636-L1637)

```diff
-     function Oq(qq) {
-       return qq.includes(" Strongbed")
+     function fC(CC, zC, ZC) {
+       return Math.min(ZC, Math.max(zC, CC))
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1641` → after: `L25354-L25375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25354-L25375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25354-L25375) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1641)

```diff
-       return Yq(qq) || lq(qq) || Oq(qq)
+       const zC = fC(CC.durationMs, 10, 500),
+         ZC = fC(CC.attackMs, 0, zC),
+         {
+           intonation: wC
+         } = CC;
+       return {
+         waveform: QC.includes(CC.waveform) ? CC.waveform : "sine",
+         pitchHz: fC(CC.pitchHz, 20, 4e3),
+         glideSemitones: fC(CC.glideSemitones, -24, 24),
+         durationMs: zC,
+         attackMs: ZC,
+         releaseMs: fC(CC.releaseMs, 0, zC - ZC),
+         lowpassHz: null === CC.lowpassHz ? null : fC(CC.lowpassHz, 20, 2e4),
+         volume: fC(CC.volume, 0, 2),
+         intonation: {
+           variationSemitones: fC(wC.variationSemitones, 0, 6),
+ ... (6 more added lines; see GitHub link above)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1650-L1668` → after: `L25378-L25380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25378-L25380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25378-L25380) · [Before (L1650-L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1650-L1668)

```diff
-   36979: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => cq
-     });
-     var Yq = gq(36985),
-       lq = gq(9379);
-     const Oq = [],
-       mq = [],
-       xq = [],
-       Aq = [];
-     for (const uq of Object.keys(lq.o))(0, Yq.c)(uq) ? Oq.push(uq) : (0, Yq.f)(uq) && mq.push(uq), (0, Yq.d)(uq) && xq.push(uq), (uq.includes(" Bed Head") || uq.includes(" Strongbed Head")) && Aq.push(uq);
-     const cq = {
-       leafBeds: Oq,
-       woolBeds: mq,
-       strongBeds: xq,
-       beds: [...Oq, ...mq, ...xq],
- ... (3 more removed lines; see GitHub link above)
+   8815: () => {},
+   9902: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L1670-L1701` → after: `L25382-L25398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR25382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L25382-L25398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/85.js#L25382-L25398) · [Before (L1670-L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/85.js#L1670-L1701)

```diff
-   6348: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq,
-       i: () => lq,
-       l: () => Aq,
-       m: () => Oq,
-       p: () => cq,
-       t: () => Yq,
-       w: () => xq
-     });
-     let Yq = function(qq) {
-         return qq[qq.DEFAULT = 0] = "DEFAULT", qq[qq.BOAT = 1] = "BOAT", qq[qq.GLIDER = 2] = "GLIDER", qq[qq.BALLOON = 3] = "BALLOON", qq[qq.SLEEPING = 4] = "SLEEPING", qq[qq.RIDING_MOB = 5] = "RIDING_MOB", qq[qq.CAR = 6] = "CAR", qq[qq.HOVERCRAFT = 7] = "HOVERCRAFT", qq
-       }({}),
-       lq = function(qq) {
-         return qq[qq.WOOD = 0] = "WOOD", qq[qq.OBSIDIAN = 1] = "OBSIDIAN", qq[qq.SPEED = 2] = "SPEED", qq
-       }({}),
- ... (16 more removed lines; see GitHub link above)
+   18209: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm … [truncated]
+   },
+   20118: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
+   },
+   20122: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
+   },
+   20130: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
+   },
+   20138: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
+   },
+   20140: CC => {
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/86.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/86.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14)

#### 1. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L4)

```diff
-   40434: (qq, Eq, gq) => {
+   4706: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L6-L23` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L6-L7) · [Before (L6-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L6-L23)

```diff
-       A: () => Cq,
-       E: () => Sq,
-       F: () => iq,
-       I: () => zq,
-       K: () => bq,
-       M: () => Fq,
-       N: () => Uq,
-       P: () => fq,
-       b: () => sq,
-       d: () => Gq,
-       e: () => hq,
-       i: () => Xq,
-       k: () => nq,
-       m: () => vq,
-       q: () => pq,
-       u: () => Zq,
- ... (2 more removed lines; see GitHub link above)
+       c: () => AC,
+       f: () => PC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L25-L68` → after: `L9-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L9-L19) · [Before (L25-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L25-L68)

```diff
-     var Yq = gq(1367),
-       lq = gq(31),
-       Oq = gq(1274),
-       mq = gq(2357),
-       xq = gq(4637),
-       Aq = gq(4608);
-     let cq, uq = !1,
-       Bq = !1,
-       Wq = !1,
-       Nq = !1;
-     const aq = 1300,
-       Vq = 3e3;
-     let dq = 0,
-       jq = !1,
-       Hq = !1,
-       oq = 0;
- ... (28 more removed lines; see GitHub link above)
+     var QC = ZC(1260),
+       wC = ZC(28);
+     var bC = ZC(326);
+     var nC = ZC(600);
+     var fC = ZC(2348),
+       oC = ZC(4711),
+       qC = ZC(4739),
+       FC = ZC(4752);
+     class WC {
+       constructor(CC, zC, ZC, QC, wC, bC) {
+         this.id = CC, this.type = zC, this.parameters = ZC, this.tearDownNotification = QC, this.onDonePromise = wC, this.resolveRequest = bC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L71-L74` → after: `L22-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L22-L30) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L71-L74)

```diff
- 
-     function Zq(qq) {
-       return rq.add(qq), () => {
-         rq.delete(qq)
+     const NC = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
+     class MC {
+       constructor(CC, zC, ZC, QC, wC, bC) {
+         this.id = CC, this.type = zC, this.parameters = ZC, this.resolveRequest = QC, this.onDonePromise = wC, this.tearDownNotification = bC, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.i … [truncated]
+         const nC = PC[zC];
+         if (!nC) throw console.error(`No QTE implementation registered for type: ${zC}`), new Error(`No QTE implementation registered for type: ${zC}`);
+         this.implementation = new nC(ZC, (CC => {
+           this.isCompleted = !0, this.resolveRequest(CC)
+         }), this.tearDownNotification), this.setupInputHandlers()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L76-L88` → after: `L32-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L32-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L32-L59) · [Before (L76-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L76-L88)

```diff
-     }
- 
-     function fq() {
-       (0, xq.k)(mq.C.Menu, (0, Oq.p)() ? 0 : mq.C.Menu)
-     }
- 
-     function Mq() {
-       Hq = !1, oq = 0, fq(), Uq()
-     }
- 
-     function Tq(qq) {
-       return tq.add(qq), () => {
-         tq.delete(qq)
+       setupInputHandlers() {
+         this.mouseSub = wC.o.subscribe("QTEMouseState", (CC => {
+           let {
+             isDown: zC
+           } = CC;
+           this.isCompleted || this.implementation.handleMouseInput(zC)
+         })), this.stopInputActions = (0, qC.k)((CC => {
+           this.isCompleted || !NC.has(CC.action) && !(0, qC.g)(CC) || this.implementation.handleMouseInput(CC.down)
+         })), this.tickSub = wC.o.subscribe("noaTick", (CC => {
+           if (this.isCompleted) return;
+           const zC = CC / 1e3;
+           this.implementation.handleTick(zC)
+         })), this.stopShellTicks = (0, oC.r)((() => {
+           this.isCompleted || this.implementation.handleTick(fC.p / 1e3)
+         }))
+       }
+ ... (12 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L91-L184` → after: `L62-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L62-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L62-L287) · [Before (L91-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L91-L184)

```diff
- 
-     function zq(qq) {
-       Bq = !1, qq !== uq && (uq = qq, Nq = !1, clearTimeout(cq), Wq = !uq && Qq, uq ? (jq = !1, Hq = !1, oq = 0) : bq() && !Qq && (Hq = !0), Qq = !1, uq && !bq() && Kq(), Iq(), Wq && Uq())
-     }
- 
-     function Sq(qq) {
-       qq !== jq && (jq = qq, qq || Uq())
-     }
- 
-     function pq() {
-       Bq = !1, Nq || !0 !== kq() || (Nq = !0, clearTimeout(cq), cq = setTimeout(Lq, aq))
-     }
- 
-     function Gq() {
-       return (!Bq || performance.now() - dq > Vq) && (Bq = (0, Aq.M)().lockPointer(), dq = performance.now()), Bq
-     }
- ... (78 more removed lines; see GitHub link above)
+     const gC = new QC.b,
+       SC = new Map;
+     let pC = null;
+     const PC = {
+       progressBar: class {
+         constructor(CC, zC, ZC) {
+           var QC, wC, bC, nC;
+           this.resolveRequest = zC, this.tearDownNotification = ZC, this.progress = 0, this.vZ = void 0, this.eZ = void 0, this.hZ = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
+           const fC = CC;
+           this.vZ = null !== (QC = fC.vZ) && void 0 !== QC ? QC : .075, this.eZ = null !== (wC = fC.eZ) && void 0 !== wC ? wC : 1, this.progress = null !== (bC = fC.iZ) && void 0 !== bC ? bC : 30, this.hZ = null !== (nC = fC.hZ) && void 0 !== nC && nC, this.parameters = fC
+         }
+         handleMouseInput(CC) {
+           CC && !this.isCompleted && (this.clickCount++, this.progress += this.eZ, this.progress >= 100 && this.complete(!0))
+         }
+         handleTick() {
+           if (!this.isCompleted)
+ ... (210 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L187` → after: `L290-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L290-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L290-L294) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L187)

```diff
-       return lq
+       (0, FC.e)(fC.v.Qte, pC ? fC.v.Qte : 0), pC ? wC.o.bp("qteStateUpdated", pC.getState()) : wC.o.bp("qteStateUpdated", {
+         type: null,
+         typeSpecificParameters: null,
+         isActive: !1
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L189-L195` → after: `L296-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L296-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L296-L306) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L189-L195)

```diff
- 
-     function uq(qq) {
-       Oq = qq
-     }
- 
-     function Bq() {
-       return Oq
+     class RC {
+       constructor(CC, zC) {
+         this.resultPromise = CC, this.tearDownQTE = zC
+       }
+       static create(CC, zC, ZC) {
+         const QC = Promise.race([CC, zC]);
+         return new RC(QC, ZC)
+       }
+       async getResult() {
+         return await this.resultPromise
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L197-L200` → after: `L308-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L308-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L308-L354) · [Before (L197-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L197-L200)

```diff
- 
-     function Wq() {
-       var qq, Eq;
-       return !0 === (null === (qq = lq) || void 0 === qq || null === (Eq = qq.currentViewer) || void 0 === Eq ? void 0 : Eq.inPlayback)
+     class AC {
+       static queueQTE(CC, zC, ZC) {
+         let QC, wC;
+         const bC = new Promise((CC => {
+             QC = CC
+           })),
+           nC = new Promise((CC => {
+             wC = () => {
+               CC("qteTornDown")
+             }
+           })),
+           fC = Promise.race([bC, nC]).then((() => {})),
+           oC = new WC(CC, zC, ZC, wC, fC, QC);
+         return SC.set(CC, oC), gC.enqueue(oC), pC || this.processNextQTE(), RC.create(bC, nC, wC)
+       }
+       static async processNextQTE() {
+ ... (31 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L203` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L357) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L203)

```diff
-   4608: (qq, Eq, gq) => {
+   4711: (CC, zC, ZC) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L206-L209` → after: `L361-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L361-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L361-L363) · [Before (L206-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L206-L209)

```diff
-       F: () => Hq,
-       J: () => mq,
-       M: () => xq,
-       N: () => vq,
+       E: () => fC,
+       G: () => vC,
+       b: () => iC,
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L213` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L366-L367) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L213)

```diff
-       l: () => iq,
+       j: () => YC,
+       k: () => PC,
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L216-L219` → after: `L371-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L371-L373) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L216-L219)

```diff
-       s: () => oq,
-       w: () => Qq,
-       x: () => hq,
-       y: () => nq
+       r: () => eC,
+       u: () => hC,
+       w: () => KC
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L221` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L375) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L221)

```diff
-     var Yq = gq(4616);
+     var QC = ZC(4719);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L230` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L384) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L230)

```diff
-       Oq = null !== qq && void 0 !== qq ? qq : lq
+       bC = null !== CC && void 0 !== CC ? CC : wC
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L322` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L476) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L322)

```diff
-       const Oq = (0, Yq.g)(Eq),
+       const bC = (0, QC.i)(zC),
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L354` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L508) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L354)

```diff
-   40650: (qq, Eq, gq) => {
+   4739: (CC, zC, ZC) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L356-L373` → after: `L510-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L510-L512) · [Before (L356-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L356-L373)

```diff
-       e: () => Yq
-     });
-     const Yq = {
-       stop: () => Yq,
-       fade: () => Yq,
-       rate: () => Yq,
-       getVolume: () => 0,
-       getRelativeVolume: () => 0,
-       setRelativeVolume: () => Yq,
-       setPannerAttr: () => Yq,
-       setPosition: () => Yq
-     }
-   },
-   4627: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Aq,
- ... (2 more removed lines; see GitHub link above)
+       e: () => oC,
+       g: () => bC,
+       k: () => fC
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L375-L376` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L514-L515) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L375-L376)

```diff
-     var Yq = gq(2357),
-       lq = gq(4629);
+     var QC = ZC(2348),
+       wC = ZC(4745);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L383` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L522) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L383)

```diff
-       return "mid-fire" === Eq && 0 !== (gq & Yq.e.AltLeftClick)
+       return "mid-fire" === zC && 0 !== (ZC & QC.c.AltLeftClick)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L394` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L533) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L394)

```diff
-       const Eq = lq.b[255 & qq];
+       const zC = wC.c[255 & CC];
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L399` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L538) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L399)

```diff
-           down: 0 !== (gq & Yq.e.Down),
+           down: 0 !== (ZC & QC.c.Down),
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L406` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L545) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L406)

```diff
-   4629: (qq, Eq, gq) => {
+   4745: (CC, zC, ZC) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L408` → after: `L547-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L547-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L547-L548) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L408)

```diff
-       b: () => lq,
+       c: () => wC,
+       d: () => bC,
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L410-L412` → after: `L550-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L550-L551) · [Before (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L410-L412)

```diff
-       i: () => mq,
-       l: () => Yq,
-       m: () => xq
+       g: () => QC,
+       h: () => fC
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L684` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L823) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L684)

```diff
-   40739: (qq, Eq, gq) => {
+   4752: (CC, zC, ZC) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L687-L733` → after: `L826-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L826-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L826-L827) · [Before (L687-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L687-L733)

```diff
-       c: () => cq,
-       g: () => Aq
-     });
-     var Yq = gq(4625),
-       lq = gq(2357),
-       Oq = gq(4637);
-     let mq = !1,
-       xq = !1;
- 
-     function Aq(qq) {
-       mq = !0;
-       try {
-         qq()
-       } finally {
-         mq = !1
-       }
- ... (31 more removed lines; see GitHub link above)
+       d: () => nC,
+       e: () => qC
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L735-L736` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L829-L830) · [Before (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L735-L736)

```diff
-     var Yq = gq(2357),
-       lq = gq(2364);
+     var QC = ZC(2348),
+       wC = ZC(2351);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L747` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L841) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L747)

```diff
-           lq !== Eq && (Eq = lq, qq(Yq.i.UiCapture, Yq.C.Keyboard, 0, 0, lq ? Yq.C.Keyboard : 0))
+           wC !== zC && (zC = wC, CC(QC.j.UiCapture, QC.v.Keyboard, 0, 0, wC ? QC.v.Keyboard : 0))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L771` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L865) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L771)

```diff
-       Aq.set(Yq, (null !== (gq = Aq.get(Yq)) && void 0 !== gq ? gq : 0) & ~qq | Eq & qq);
+       oC.set(QC, (null !== (ZC = oC.get(QC)) && void 0 !== ZC ? ZC : 0) & ~CC | zC & CC);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L774-L997` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/86.js#L868) · [Before (L774-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/86.js#L774-L997)

```diff
-       return (0, lq.B)(qq, Oq & qq)
-     }
-   },
-   40470: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => uq,
-       f: () => Aq,
-       j: () => xq,
-       k: () => cq
-     });
-     var Yq = gq(1914);
-     let lq = null,
-       Oq = 0;
-     const mq = new Set;
- 
-     function xq() {
- ... (208 more removed lines; see GitHub link above)
+       return (0, wC.v)(CC, bC & CC)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/87.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/87.js` (116 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L4)

```diff
-   38724: (qq, Eq, gq) => {
+   40717: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L6-L7` → after: `L6-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L6-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L6-L18) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L6-L7)

```diff
-       e: () => mq,
-       h: () => cq,
+       A: () => EC,
+       D: () => HC,
+       G: () => BC,
+       H: () => XC,
+       J: () => YC,
+       N: () => lC,
+       O: () => KC,
+       R: () => DC,
+       T: () => tC,
+       W: () => mC,
+       c: () => jC,
+       d: () => uC,
+       g: () => eC,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L9-L11` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L20-L23) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L9-L11)

```diff
-       m: () => Bq,
-       p: () => Aq,
-       q: () => xq
+       o: () => hC,
+       s: () => vC,
+       u: () => cC,
+       x: () => dC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L13-L32` → after: `L25-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L25-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L25-L45) · [Before (L13-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L13-L32)

```diff
-     const Yq = "A valid external Instance reference no longer exists.",
-       lq = [
-         [1e4, "<10s", "lt10s"],
-         [6e4, "<1m", "lt1m"],
-         [3e5, "<5m", "lt5m"],
-         [18e5, "<30m", "lt30m"],
-         [1 / 0, "30m+", "ge30m"]
-       ],
-       Oq = [
-         [1e3, "lt1s"],
-         [2e3, "lt2s"],
-         [5e3, "lt5s"],
-         [1e4, "lt10s"],
-         [3e4, "lt30s"],
-         [1 / 0, "ge30s"]
-       ];
- ... (4 more removed lines; see GitHub link above)
+     var QC = ZC(1347),
+       wC = ZC(28),
+       bC = ZC(1240),
+       nC = ZC(2348),
+       fC = ZC(4752),
+       oC = ZC(4711);
+     let qC, FC = !1,
+       WC = !1,
+       NC = !1,
+       MC = !1;
+     const gC = 1300,
+       SC = 3e3;
+     let pC = 0,
+       PC = !1,
+       GC = !1,
+       RC = 0;
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L34-L39` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L47-L48) · [Before (L34-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L34-L39)

```diff
-     function xq(qq, Eq) {
-       return qq ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(qq) {
-         var Eq;
-         const gq = null !== (Eq = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(qq)) && void 0 !== Eq ? Eq : /failed with ([A-Z][A-Z0-9_]+)/.exec(qq);
-         return gq ? gq[1] : qq.includes(Yq) ? "gpu_process_lost" : "other"
-       }(Eq)
+     function vC() {
+       return FC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L42-L43` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L51-L52) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L42-L43)

```diff
-     function Aq(qq) {
-       return `${(null===qq||void 0===qq?void 0:qq.vendor)||"unknown vendor"} ${(null===qq||void 0===qq?void 0:qq.architecture)||"unknown architecture"}`
+     function eC() {
+       return GC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L46-L47` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L55-L56) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L46-L47)

```diff
-     function cq(qq) {
-       return Wq(qq)[1]
+     function hC() {
+       return JC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L50-L51` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L59-L60) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L50-L51)

```diff
-     function uq(qq) {
-       return Wq(qq)[2]
+     function KC() {
+       return (0, bC.x)() && !JC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L55` → after: `L64-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L64-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L64-L69) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L55)

```diff
-       return Nq(Oq, qq)[1]
+       let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       if (CC !== JC) {
+         JC = CC;
+         for (const CC of [...iC]) CC(JC);
+         zC && tC()
+       }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L59` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L73-L75) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L59)

```diff
-       return Nq(lq, qq)
+       return iC.add(CC), () => {
+         iC.delete(CC)
+       }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L62-L79` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L78-L79) · [Before (L62-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L62-L79)

```diff
-     function Nq(qq, Eq) {
-       var gq;
-       return null !== (gq = qq.find((qq => {
-         let [gq] = qq;
-         return Eq < gq
-       }))) && void 0 !== gq ? gq : qq[qq.length - 1]
-     }
-   },
-   39012: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Yq,
-       f: () => lq
-     });
-     const Yq = 45e3;
-     class lq extends Error {
-       constructor() {
- ... (2 more removed lines; see GitHub link above)
+     function mC() {
+       (0, fC.e)(nC.v.Menu, (0, bC.x)() ? 0 : nC.v.Menu)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L92-L93` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L82-L83) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L92-L93)

```diff
-     function Oq(qq) {
-       return 2 ** Math.floor(Math.log2(Math.max(1, qq / lq)))
+     function HC() {
+       GC = !1, RC = 0, mC(), tC()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L97` → after: `L87-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L87-L89) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L97)

```diff
-       return (qq / lq).toFixed(1)
+       return IC.add(CC), () => {
+         IC.delete(CC)
+       }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L116` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L93) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L116)

```diff
-       return Math.floor(lq * qq / Oq)
+       WC = !1, CC !== FC && (FC = CC, MC = !1, clearTimeout(qC), NC = !FC && xC, FC ? (PC = !1, GC = !1, RC = 0) : KC() && !xC && (GC = !0), xC = !1, FC && !KC() && UC(), OC(), NC && tC())
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L120-L128` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L97) · [Before (L120-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L120-L128)

```diff
-       const Eq = qq - Math.floor(qq / 6);
-       let gq = Yq.c.maxChunkHorizAddDistance,
-         lq = Yq.c.maxChunkVertAddDistance;
-       if (uq(gq + 1, lq + 1) <= Eq) return null;
-       for (; uq(gq + 1, lq + 1) > Eq && (gq > 0 || lq > 0);) gq > lq ? gq-- : lq--;
-       return {
-         horizontal: gq,
-         vertical: lq
-       }
+       CC !== PC && (PC = CC, CC || tC())
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L131-L137` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L100-L101) · [Before (L131-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L131-L137)

```diff
-     function uq(qq, Eq) {
-       const gq = Math.max(qq, Eq);
-       let Yq = 0;
-       for (let lq = -gq; lq <= gq; lq++)
-         for (let Oq = -gq; Oq <= gq; Oq++)
-           for (let mq = -gq; mq <= gq; mq++) Bq(qq, Eq, lq, Oq, mq) && Yq++;
-       return Yq
+     function cC() {
+       WC = !1, MC || !0 !== TC() || (MC = !0, clearTimeout(qC), qC = setTimeout(rC, gC))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L140-L142` → after: `L104-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L104-L105) · [Before (L140-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L140-L142)

```diff
-     function Bq(qq, Eq, gq, Yq, lq) {
-       const Oq = gq * gq + lq * lq;
-       return qq === Eq ? Oq + Yq * Yq <= qq * qq : qq > Eq ? Math.abs(Yq) <= Eq && Oq + Yq * Yq <= qq * qq : Oq <= qq * qq && Oq + Yq * Yq <= Eq * Eq
+     function uC() {
+       return (!WC || performance.now() - pC > SC) && (WC = (0, oC.E)().lockPointer(), pC = performance.now()), WC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L158-L163` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L108-L109) · [Before (L158-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L158-L163)

```diff
-     function mq(qq) {
-       const Eq = qq.endsWith(Yq.h);
-       return {
-         text: (Eq ? qq.slice(0, -Yq.h.length) : qq) || null,
-         dropsCache: Eq
-       }
+     function rC() {
+       sC() && aC() && uC()
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L167-L169` → after: `L112-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L112-L113) · [Before (L167-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L167-L169)

```diff
-     function Aq(qq, Eq) {
-       const gq = uq(qq);
-       return null !== gq.name && "" === Yq.b[gq.name].text && null !== Eq ? Eq : gq.reason
+     function sC() {
+       return KC() && !FC && !PC && !(0, QC.h)()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L173` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L116) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L173)

```diff
-     function uq(qq) {
+     function TC() {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L175-L196` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L118) · [Before (L175-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L175-L196)

```diff
-       let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       const lq = null !== (Eq = Object.keys(Yq.b).find((Eq => Yq.b[Eq].code === qq))) && void 0 !== Eq ? Eq : null;
-       if (null === lq) return {
-         code: qq,
-         name: lq,
-         reason: null !== gq && void 0 !== gq ? gq : `${xq}\nCode: ${qq}`,
-         canReconnect: !1,
-         automaticallyReconnect: !1,
-         requiresRefresh: !1
-       };
-       const {
-         text: Oq,
-         canReconnect: mq = !1
-       } = Yq.b[lq], Aq = qq === Yq.b.outdatedVersion.code || qq === Yq.b.loadRecaptchaError.code;
-       return {
-         code: qq,
- ... (6 more removed lines; see GitHub link above)
+       return "undefined" === typeof navigator || null === (CC = navigator.userActivation) || void 0 === CC ? void 0 : CC.isActive
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L303-L322` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L122) · [Before (L303-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L303-L322)

```diff
-       return crypto.getRandomValues(new Uint32Array(xq))
-     }
-     const cq = {
-         Ok: 0,
-         Errors: 1,
-         Fatal: 2
-       },
-       uq = 16,
-       Bq = {
-         Draws: 1,
-         NetAll: 2
-       },
-       Wq = {
-         ShowFog: 1,
-         Lighting: 2,
-         ChunkFade: 4
- ... (4 more removed lines; see GitHub link above)
+       return NC && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== TC()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L360-L361` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L125-L126) · [Before (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L360-L361)

```diff
-     function Pq(qq) {
-       return (qq.showFog ? Wq.ShowFog : 0) | (qq.lighting ? Wq.Lighting : 0) | (qq.chunkFade ? Wq.ChunkFade : 0)
+     function tC() {
+       KC() ? sC() && !GC && aC() && uC() : FC && !xC && UC()
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L403-L404` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L129-L130) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L403-L404)

```diff
-     function Mq(qq, Eq) {
-       return (qq | Eq << 8) >>> 0
+     function DC() {
+       GC ? navigator.vendor.startsWith("Apple") ? LC() : RC = AC : tC()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L407-L408` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L133-L134) · [Before (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L407-L408)

```diff
-     function Tq(qq) {
-       return 255 & qq
+     function jC() {
+       RC > 0 && 0 === --RC && LC()
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L411-L412` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L137-L138) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L411-L412)

```diff
-     function zq(qq) {
-       return qq >>> 8
+     function yC() {
+       RC = 0
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L415-L416` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L141-L142) · [Before (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L415-L416)

```diff
-     function Sq(qq) {
-       return qq + 3 & -4
+     function LC() {
+       sC() && !0 === TC() && uC()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L451-L452` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L145-L146) · [Before (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L451-L452)

```diff
-     function wq(qq) {
-       return qq === Xq.WorldgenSeed || qq === Xq.Generate
+     function UC() {
+       xC = !0, (0, oC.E)().unlockPointer()
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L519-L522` → after: `L149-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L149-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L149-L152) · [Before (L519-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L519-L522)

```diff
-     function VE(qq) {
-       for (const [Eq, gq] of Object.entries(Yq.f))
-         if (gq === qq) return Eq;
-       return `Unknown${qq}`
+     function BC() {
+       WC = !1, NC = !1, MC = !1, clearTimeout(qC), PC = !1, GC = !1, RC = 0, xC = !1;
+       const CC = FC;
+       FC = !1, CC && OC()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L525-L536` → after: `L155-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L155-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L155-L157) · [Before (L525-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L525-L536)

```diff
-     function dE(qq) {
-       return {
-         status: qq[Yq.C.Status],
-         lastError: qq[Yq.C.LastError],
-         lastErrorDetail: qq[Yq.C.LastErrorDetail],
-         errorCount: qq[Yq.C.ErrorCount],
-         frameIndex: qq[Yq.C.FrameIndex],
-         tickIndex: qq[Yq.C.TickIndex],
-         renderPending: qq[Yq.C.RenderPending],
-         firstView: qq[Yq.C.FirstView],
-         chunksCancelled: qq[Yq.C.ChunksCancelled]
-       }
+     function OC() {
+       for (const CC of [...IC]) CC(FC);
+       wC.o.bp("pointerLockUpdate", FC)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L539` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L160) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L539)

```diff
-   40369: (qq, Eq, gq) => {
+   40518: (CC, zC, ZC) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L541` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L162) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L541)

```diff
-       d: () => Yq,
+       c: () => NC,
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L544-L547` → after: `L166-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L166-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L166-L168) · [Before (L544-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L544-L547)

```diff
-       l: () => Oq,
-       o: () => lq,
-       r: () => Aq,
-       v: () => uq
+       m: () => nC,
+       q: () => FC,
+       s: () => oC
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L549-L553` → after: `L170-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L170-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L170-L172) · [Before (L549-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L549-L553)

```diff
-     class Yq extends Error {
-       constructor() {
-         super(...arguments), this.name = "CoreCorruption"
-       }
-     }
+     let QC = null,
+       wC = null,
+       bC = null;
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L556` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L175) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L556)

```diff
-       return qq instanceof RangeError && /call stack/i.test(qq.message) || qq instanceof Error && "InternalError" === qq.name && /recursion/i.test(qq.message)
+       QC = CC
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L559-L560` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L178-L179) · [Before (L559-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L559-L560)

```diff
-     function Oq(qq) {
-       return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(qq))
+     function fC() {
+       return QC
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L565-L566` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L183) · [Before (L565-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L565-L566)

```diff
-       var Eq;
-       return qq instanceof WebAssembly.RuntimeError || qq instanceof Yq || lq(qq) && mq.test(null !== (Eq = qq.stack) && void 0 !== Eq ? Eq : "")
+       wC = CC
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L569-L571` → after: `L186-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L186-L187) · [Before (L569-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L569-L571)

```diff
-     function Aq(qq, Eq) {
-       if (xq(qq)) throw qq;
-       console.error(Eq, qq)
+     function qC() {
+       return wC
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L574-L575` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L190-L191) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L574-L575)

```diff
-     function cq(qq, Eq, gq, lq, Oq) {
-       if (Eq % lq !== 0 || Eq + gq > qq.byteLength) throw new Yq(`${Oq}: ${gq} bytes at ${Eq}, ${lq}-aligned, outside ${qq.byteLength} bytes of memory`)
+     function FC(CC) {
+       bC = CC
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L578-L579` → after: `L194-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L194-L195) · [Before (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L578-L579)

```diff
-     function uq(qq, Eq, gq, Yq, lq) {
-       return 0 === gq ? null : (cq(Eq, gq, Yq * qq.BYTES_PER_ELEMENT, qq.BYTES_PER_ELEMENT, lq), new qq(Eq, gq, Yq))
+     function WC() {
+       return bC
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L582-L600` → after: `L198-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L198-L200) · [Before (L582-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L582-L600)

```diff
-     function Bq(qq, Eq, gq, Yq, lq) {
-       return 0 === Eq ? null : (cq(qq, Eq, gq, Yq, lq), new DataView(qq, Eq, gq))
-     }
-   },
-   40735: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Yq
-     });
-     const Yq = {
-       destroy_stage_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAK0lEQVQYlWP8//8/IwMewIRPknQFjIyM/wmaYGdn9w9FE7IjYSagiFHsCwCM7A/Ccc+NjAAAAABJRU5ErkJggg==",
-       destroy_stage_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQklEQVQYlYWPMQ4AIAgDOeO7+v9XWScMOGinpjmgYJt4aKQB/ASqKtwASeuGZxrbAEhyRJxe1JJ1debtRIZt6PfmBqYNG36KBWHbAAAAAElFTkSuQmCC",
-       destroy_stage_2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARUlEQVQYlYWPwQnAMAwDdaVr2ftPVfWVIBJC9DI6LMvYRpIAjzn1rMaq9wQAbwnd/SWUJNkmb1eVkx07zPK5PaLTu37xA3+wH3UI6vmHAAAAAElFTkSuQmCC",
-       destroy_stage_3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAASUlEQVQYlW2PwQ3AMAjEfFXXYv+x3A+pSNqT+IBPMlEDkEQ6awdwMaJGzYTfVJUL4GydUFW5AbM5j2o+DrMEcE+g5dKzf/FrDjw47TfQdOS/BAAAAABJRU5ErkJggg==",
-       destroy_stage_4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATklEQVQYlYWPsRHDQAzDQF/W4u8/lZEmn5PtwuwkETwqagCSyE97B3AwpEbNNH8A1lpn2wvwN824tqpp6yN2G+dRzaPDhLgPm56peXvzC7EqSTSAXQcxAAAAAElFTkSuQmCC",
-       destroy_stage_5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATElEQVQYlW2PwREAMQgCIX1p/1Xd3idmNBN/iotowJJkG+2q2WkARwRD2LUkKTO/m44I7mWVyxDrxIsEvCqg7ZOhAyNx0d3Vrzc7+AM+lEvjLYgPSwAAAABJRU5ErkJggg==",
-       destroy_stage_6: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAT0lEQVQYlW2PyQ2AQAwDx9tXtv+qGD4ERQt+RY7lI2oAksiD5gBWH1WlGjUtTuIC2HtfHHi5qvJ0mRxt27nzqWZ1VhJnuU/Js8u77m/mFNyVEDqzHRw/iwAAAABJRU5ErkJggg==",
- ... (3 more removed lines; see GitHub link above)
+     function NC() {
+       var CC, zC;
+       return !0 === (null === (CC = wC) || void 0 === CC || null === (zC = CC.currentViewer) || void 0 === zC ? void 0 : zC.inPlayback)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L603` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L203) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L603)

```diff
-   40691: (qq, Eq, gq) => {
+   4711: (CC, zC, ZC) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L605` → after: `L205-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L205-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L205-L210) · [Before (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L605)

```diff
-       d: () => aq,
+       A: () => GC,
+       B: () => nC,
+       E: () => fC,
+       G: () => vC,
+       b: () => iC,
+       e: () => AC,
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L607-L608` → after: `L212-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L212-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L212-L219) · [Before (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L607-L608)

```diff
-       i: () => Wq,
-       k: () => Bq
+       j: () => YC,
+       k: () => PC,
+       m: () => JC,
+       n: () => RC,
+       p: () => xC,
+       r: () => eC,
+       u: () => hC,
+       w: () => KC
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L610-L615` → after: `L221-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L221-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L221-L227) · [Before (L610-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L610-L615)

```diff
-     const Yq = 2e3,
-       lq = "unavailable";
-     let Oq = () => Promise.resolve().then((() => gq(2859))),
-       mq = null,
-       xq = null,
-       Aq = cq();
+     var QC = ZC(4719);
+     const wC = {
+       lockPointer: () => !1,
+       unlockPointer: () => {},
+       leaveGame: () => {}
+     };
+     let bC = wC;
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L617-L626` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L229-L230) · [Before (L617-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L617-L626)

```diff
-     function cq() {
-       let qq = () => {};
-       return {
-         promise: new Promise((Eq => {
-           qq = () => {
-             Eq(null)
-           }
-         })),
-         resolve: qq
-       }
+     function nC(CC) {
+       bC = null !== CC && void 0 !== CC ? CC : wC
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L641-L642` → after: `L246-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L246-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L246-L249) · [Before (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L641-L642)

```diff
-     function Bq() {
-       uq().catch((() => {}))
+     function PC(CC) {
+       return oC.add(CC), () => {
+         oC.delete(CC)
+       }
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L645-L646` → after: `L252-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L252-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L252-L257) · [Before (L645-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L645-L646)

```diff
-     function Wq() {
-       Aq.resolve()
+     function GC(CC, zC) {
+       for (const QC of oC) try {
+         QC(CC)
+       } catch (ZC) {
+         zC(ZC)
+       }
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L649-L971` → after: `L260-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L260-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L260-L262) · [Before (L649-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L649-L971)

```diff
-     function Nq(qq, Eq, gq, Yq) {
-       if (null === qq) return {
-         errorKind: Eq,
-         fingerprint: lq,
-         dedupe: `${Eq}|${Yq}`
-       };
-       const {
-         fingerprint: Oq
-       } = qq.clientErrorKey(Eq, gq, Yq);
-       return {
-         errorKind: Eq,
-         fingerprint: Oq,
-         dedupe: Oq
-       }
-     }
- 
- ... (307 more removed lines; see GitHub link above)
+     function RC(CC) {
+       return qC.add(CC), () => {
+         qC.delete(CC)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L976-L1000` → after: `L267-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L267-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L267-L270) · [Before (L976-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L976-L1000)

```diff
-       try {
-         const gq = Eq().catch((Eq => {
-           console.warn(`${Mq} could not send the report to ${qq}`, Eq)
-         })).finally((() => {
-           dE.delete(gq)
-         }));
-         dE.add(gq)
-       } catch (gq) {
-         console.warn(`${Mq} could not send the report to ${qq}`, gq)
-       }
-     }
-     async function QE(qq) {
-       let Eq;
-       (0, mq.i)();
-       const gq = new Promise((gq => {
-         Eq = setTimeout(gq, qq)
- ... (9 more removed lines; see GitHub link above)
+       const ZC = FC < 0 ? 0 : CC - FC;
+       FC = CC;
+       for (const wC of qC) try {
+         wC(ZC)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1002-L1047` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L272) · [Before (L1002-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1002-L1047)

```diff
-         console.warn(`${Mq} could not send the counts`, qq)
-       }
-     }
-     async function tE() {
-       for (; dE.size > 0;) await Promise.allSettled([...dE])
-     }
- 
-     function rE() {
-       NE.clear(), aE = 0, BE = !1, Iq = 0, eq.clear(), VE = 0, (0, Aq.m)()
-     }
- 
-     function vE(qq, Eq, gq, Yq) {
-       VE += Eq;
-       for (const {
-           code: cq,
-           detail: uq
- ... (30 more removed lines; see GitHub link above)
+         zC(QC)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1060` → after: `L277-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L277-L279) · [Before (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1060)

```diff
-       return (0, iq.k)(qq instanceof Zq.c ? qq.trap : qq, yq.G, yq._)
+       return WC.add(CC), () => {
+         WC.delete(CC)
+       }
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1065-L1072` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L283-L284) · [Before (L1065-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1065-L1072)

```diff
-       return qq ? {
-         labels: [iE],
-         details: {
-           declined: "js"
-         }
-       } : {
-         labels: [],
-         details: {}
+       return NC.add(CC), () => {
+         NC.delete(CC)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1075-L1161` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L287) · [Before (L1075-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1075-L1161)

```diff
- 
-     function fE(qq, Eq, gq) {
-       return TE(qq, Eq, gq, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
-     }
- 
-     function ME(qq, Eq, gq) {
-       return TE(qq, Eq, gq, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
-     }
- 
-     function TE(qq, Eq, gq, Yq, lq) {
-       let {
-         memoryDetails: Oq = {},
-         declined: mq = !1
-       } = Yq;
-       const {
-         code: xq,
- ... (71 more removed lines; see GitHub link above)
+     let IC = 0;
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1164-L1183` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L290) · [Before (L1164-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1164-L1183)

```diff
-       PE("counts", (async () => {
-         await (0, Wq.e)(qq), BE = !0
-       }))
-     }
- 
-     function JE(qq, Eq, gq, Yq) {
-       const lq = ZE(Yq);
-       return HE({
-         kind: "unsupported",
-         code: Eq,
-         site: zq,
-         fatal: !1,
-         message: [...lq.labels, gq].join("; "),
-         details: {
-           cause: qq,
-           status: Eq,
- ... (4 more removed lines; see GitHub link above)
+       IC += CC
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1187-L1202` → after: `L294-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L294-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L294-L295) · [Before (L1187-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1187-L1202)

```diff
-       const {
-         code: qq,
-         message: Eq
-       } = bq.d;
-       return HE({
-         kind: "unstreamedLoad",
-         code: qq,
-         site: zq,
-         fatal: !1,
-         message: Eq
-       })
-     }
-     class RE extends Error {
-       constructor() {
-         super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
-       }
+       const CC = IC;
+       return IC = 0, CC
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1206-L1273` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L299-L300) · [Before (L1206-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1206-L1273)

```diff
-       return qq instanceof oq.l ? 0 === qq.code ? "JOIN-matchmake" : `JOIN-${qq.code}` : qq instanceof oq.e ? 0 === qq.code ? `JOIN-${qq.stage}` : `JOIN-${qq.stage}-${qq.code}` : qq instanceof Hq.b ? "JOIN-gameCode" : qq instanceof RE ? "JOIN-turnstilePage" : qq instanceof oq.u ? … [truncated]
-     }
- 
-     function FE(qq, Eq) {
-       const gq = (0, fq.j)(qq),
-         Yq = {
-           wasmBuild: Eq.wasm,
-           clientVersion: Eq.client
-         },
-         lq = qq instanceof RE ? {
-           text: (0, nq.j)(),
-           reload: !1
-         } : void 0,
-         Oq = (0, Pq.e)(qq),
-         mq = "expected" !== Oq;
-       return HE({
- ... (52 more removed lines; see GitHub link above)
+       return SC.add(CC), () => {
+         SC.delete(CC)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1345-L1486` → after: `L305-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L305-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L305-L307) · [Before (L1345-L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1345-L1486)

```diff
-       return qq.error instanceof tq.g ? `MODEL-${qq.error.status}` : qq.error instanceof rq.g ? "MODEL-ring" : "MODEL-network"
-     }
- 
-     function eE(qq, Eq) {
-       const gq = IE(qq),
-         Yq = `model file ${qq.file} ${qq.startup?"(startup) ":""}could not load`,
-         lq = {
-           file: String(qq.file),
-           url: qq.url,
-           wasmBuild: Eq.wasm,
-           clientVersion: Eq.client
-         };
-       return HE({
-         kind: qq.startup ? "model" : "modelLate",
-         code: gq,
-         site: Gq,
- ... (126 more removed lines; see GitHub link above)
+       return pC.add(CC), () => {
+         pC.delete(CC)
+       }
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1489-L1501` → after: `L310-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L310-L311) · [Before (L1489-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1489-L1501)

```diff
-     function mg(qq, Eq, gq) {
-       const Yq = {
-         wasmBuild: gq.wasm,
-         clientVersion: gq.client
-       };
-       return HE({
-         kind: "recovered",
-         code: qq,
-         site: jq.s,
-         fatal: !1,
-         message: Eq,
-         details: Yq
-       })
+     function KC() {
+       MC = 0, gC = 0, FC = -1
```
