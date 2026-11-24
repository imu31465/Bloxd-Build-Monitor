# Changed — Bundle Modifications Report (Part 025 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `25 / 65` (**340** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 024](part-024.md) · [Part 026 →](part-026.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/348.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/348.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25)

#### 4. `bundles/bloxd.io/chunks/js/348.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/348.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/348.js#L17-L19)

```diff
-   42352: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
+   61509: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       rgbdEncodePixelShaderWGSL: () => Lp
```

#### 5. `bundles/bloxd.io/chunks/js/348.js` (Changed code · before: `L21-L227` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/348.js#L21-L27) · [Before (L21-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/348.js#L21-L227)

```diff
-     var pD = wD(39776);
-     wD(42317);
-     const sD = "bumpFragmentFunctions",
-       KD = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42348: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "bumpFragmentMainFunctions",
- ... (191 more removed lines; see GitHub link above)
+     var Op = cp(40062),
+       op = cp(42520);
+     const Ip = "rgbdEncodePixelShader",
+       Sp = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
+     Op.b.ShadersStoreWGSL[Ip] || (Op.b.ShadersStoreWGSL[Ip] = Sp);
+     const xp = [op.e];
+     for (const Yp of xp) Op.b.IncludesShadersStoreWGSL[Yp.name] || (Op.b.IncludesShadersStoreWGSL[Yp.name] = Yp.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/349.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/349.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1)

#### 1. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/349.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/349.js#L4)

```diff
-   42374: (DD, zD, wD) => {
+   42639: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/349.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/349.js#L6)

```diff
-       b: () => rD
+       c: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/349.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/349.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "bumpFragment",
-       KD = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "bakedVertexAnimation",
+       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/349.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/349.js#L17)

```diff
-   42352: (DD, zD, wD) => {
+   42527: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/349.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/349.js#L19)

```diff
-       d: () => rD
+       e: () => Sp
```

#### 6. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/349.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/349.js#L21-L25)

```diff
-     var pD = wD(39776);
-     wD(42317);
-     const sD = "bumpFragmentFunctions",
-       KD = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "bakedVertexAnimationDeclaration",
+       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/349.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/349.js#L31)

```diff
-   42348: (DD, zD, wD) => {
+   42525: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/349.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/349.js#L33)

```diff
-       e: () => rD
+       c: () => Sp
```

#### 9. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/349.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/349.js#L35-L38)

```diff
-     var pD = wD(39776);
-     const sD = "bumpFragmentMainFunctions",
-       KD = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "bonesDeclaration",
+       Ip = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 10. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/349.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/349.js#L44)

```diff
-   42377: (DD, zD, wD) => {
+   42632: (pp, ip, cp) => {
```

#### 11. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/349.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/349.js#L48-L51)

```diff
-     var pD = wD(39776);
-     const sD = "decalFragment",
-       KD = "#ifdef DECAL\nvar decalTempColor=decalColor.rgb;var decalTempAlpha=decalColor.a;\n#ifdef GAMMADECAL\ndecalTempColor=toLinearSpaceVec3(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalTempAlpha=decalColor.a*decalColor.a;\n#endif\nsurfaceAlbedo=mix(surfaceAlbedo … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "bonesVertex",
+       Ip = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 12. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L57` → after: `L56-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L56-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/349.js#L56-L69) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/349.js#L57)

```diff
-   42390: (DD, zD, wD) => {
+   42677: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "clipPlaneVertex",
+       Ip = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42565: (pp, ip, cp) => {
```

#### 13. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L61-L64` → after: `L73-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L73-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/349.js#L73-L167) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/349.js#L61-L64)

```diff
-     var pD = wD(39776);
-     const sD = "lightFragment",
-       KD = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvar diffuse{X}: vec4f=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X})\n{let slic … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneVertexDeclaration",
+       Ip = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42680: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "fogVertex",
+       Ip = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+ ... (79 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/350.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/350.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea)

#### 1. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L4)

```diff
-   42365: (DD, zD, wD) => {
+   42669: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L6)

```diff
-       c: () => rD
+       e: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneFragment",
-       KD = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "bumpVertex",
+       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L17)

```diff
-   42357: (DD, zD, wD) => {
+   42556: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L19)

```diff
-       c: () => rD
+       b: () => Sp
```

#### 6. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneFragmentDeclaration",
-       KD = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "bumpVertexDeclaration",
+       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L30)

```diff
-   42401: (DD, zD, wD) => {
+   61754: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L32)

```diff
-       c: () => rD
+       b: () => Sp
```

#### 9. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L34-L37)

```diff
-     var pD = wD(39776);
-     const sD = "fogFragment",
-       KD = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "harmonicsFunctions",
+       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 10. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L43)

```diff
-   42359: (DD, zD, wD) => {
+   61741: (pp, ip, cp) => {
```

#### 11. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L45)

```diff
-       e: () => rD
+       d: () => Sp
```

#### 12. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L47-L50` → after: `L47-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L47-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L47-L50)

```diff
-     var pD = wD(39776);
-     const sD = "fogFragmentDeclaration",
-       KD = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     cp(42496), cp(42498);
+     const op = "pbrUboDeclaration",
+       Ip = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 13. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L56` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L57) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L56)

```diff
-   42435: (DD, zD, wD) => {
+   61736: (pp, ip, cp) => {
```

#### 14. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L58` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L59) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L58)

```diff
-       colorPixelShaderWGSL: () => AD
+       pbrVertexShaderWGSL: () => gp
```

#### 15. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L60-L69` → after: `L61-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L61-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/350.js#L61-L102) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/350.js#L60-L69)

```diff
-     var pD = wD(39776),
-       sD = wD(42357),
-       KD = wD(42359),
-       rD = wD(42365),
-       LD = wD(42401);
-     const cD = "colorPixelShader",
-       gD = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
-     pD.e.ShadersStoreWGSL[cD] || (pD.e.ShadersStoreWGSL[cD] = gD);
-     const RD = [sD.c, KD.e, rD.c, LD.c];
-     for (const UD of RD) pD.e.IncludesShadersStoreWGSL[UD.name] || (pD.e.IncludesShadersStoreWGSL[UD.name] = UD.shader);
+     var Op = cp(40062),
+       op = cp(42496),
+       Ip = cp(42498),
+       Sp = cp(61741),
+       xp = cp(42513),
+       Lp = cp(42542),
+       Yp = cp(42520),
+       Dp = cp(61745),
+       Ap = cp(42525),
+       Pp = cp(42527),
+       Wp = cp(42531),
+       yp = cp(42536),
+       Up = cp(42550),
+       wp = cp(61754),
+       vp = cp(42556),
+       tp = cp(42565),
+ ... (26 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/351.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/351.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df)

#### 1. `bundles/bloxd.io/chunks/js/351.js` (Changed code · before: `L4-L6` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/351.js#L4-L14) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/351.js#L4-L6)

```diff
-   42423: (DD, zD, wD) => {
-     function pD(DD) {
-       return Math.floor(DD / 8)
+   42677: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "clipPlaneVertex",
+       Ip = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
```

#### 2. `bundles/bloxd.io/chunks/js/351.js` (Changed code · before: `L8-L10` → after: `L16-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9dfR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df) · [After (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/351.js#L16-L27) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/351.js#L8-L10)

```diff
- 
-     function sD(DD) {
-       return 1 << DD % 8
+   },
+   42565: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "clipPlaneVertexDeclaration",
+       Ip = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
```

#### 3. `bundles/bloxd.io/chunks/js/351.js` (Changed code · before: `L13` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9dfR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/351.js#L32) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/351.js#L13)

```diff
-       OptimizeIndices: () => rD
+       d: () => Sp
```

#### 4. `bundles/bloxd.io/chunks/js/351.js` (Changed code · before: `L15-L30` → after: `L34-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9dfR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df) · [After (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/351.js#L34-L40) · [Before (L15-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/351.js#L15-L30)

```diff
-     class KD {
-       constructor(DD) {
-         this.size = DD, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
-       }
-       get(DD) {
-         if (DD >= this.size) throw new RangeError("Bit index out of range");
-         const zD = pD(DD),
-           wD = sD(DD);
-         return 0 !== (this._byteArray[zD] & wD)
-       }
-       set(DD, zD) {
-         if (DD >= this.size) throw new RangeError("Bit index out of range");
-         const wD = pD(DD),
-           KD = sD(DD);
-         zD ? this._byteArray[wD] |= KD : this._byteArray[wD] &= ~KD
-       }
+     var Op = cp(40062);
+     const op = "fogVertex",
+       Ip = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
```

#### 5. `bundles/bloxd.io/chunks/js/351.js` (Changed code · before: `L32-L63` → after: `L42-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9dfR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df) · [After (L42-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/351.js#L42-L100) · [Before (L32-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/351.js#L32-L63)

```diff
- 
-     function rD(DD) {
-       const zD = [],
-         wD = DD.length / 3;
-       for (let KD = 0; KD < wD; KD++) zD.push([DD[3 * KD], DD[3 * KD + 1], DD[3 * KD + 2]]);
-       const pD = new Map;
-       for (let KD = 0; KD < zD.length; KD++) {
-         const DD = zD[KD];
-         for (const zD of DD) {
-           let DD = pD.get(zD);
-           DD || pD.set(zD, DD = []), DD.push(KD)
-         }
-       }
-       const sD = new KD(wD),
-         rD = [],
-         LD = DD => {
- ... (16 more removed lines; see GitHub link above)
+   },
+   42567: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "fogVertexDeclaration",
+       Ip = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42598: (pp, ip, cp) => {
+     cp.d(ip, {
+ ... (43 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/352.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/352.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130)

#### 1. `bundles/bloxd.io/chunks/js/352.js` (Changed code · before: `L4-L5` → after: `L4-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130) · [After (L4-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/352.js#L4-L82) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/352.js#L4-L5)

```diff
-   61028: (DD, zD, wD) => {
-     var pD;
+   42677: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "clipPlaneVertex",
+       Ip = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42565: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+ ... (63 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/352.js` (Changed code · before: `L7-L11` → after: `L84-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130) · [After (L84-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/352.js#L84-L101) · [Before (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/352.js#L7-L11)

```diff
-         ShaderLanguage: () => pD
-       }),
-       function(DD) {
-         DD[DD.GLSL = 0] = "GLSL", DD[DD.WGSL = 1] = "WGSL"
-       }(pD || (pD = {}))
+       skyVertexShaderWGSL: () => Wp
+     });
+     var Op = cp(40062),
+       op = cp(42598),
+       Ip = cp(42565),
+       Sp = cp(42567),
+       xp = cp(42677),
+       Lp = cp(42697),
+       Yp = cp(42680);
+     const Dp = "skyVertexShader",
+       Ap = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying v … [truncated]
+     Op.b.ShadersStoreWGSL[Dp] || (Op.b.ShadersStoreWGSL[Dp] = Ap);
+     const Pp = [op.d, Ip.c, Sp.c, xp.e, Lp.b, Yp.d];
+     for (const yp of Pp) Op.b.IncludesShadersStoreWGSL[yp.name] || (Op.b.IncludesShadersStoreWGSL[yp.name] = yp.shader);
+     const Wp = {
+       name: Dp,
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/353.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/353.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3)

#### 1. `bundles/bloxd.io/chunks/js/353.js` (Changed code · before: `L4` → after: `L4-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3) · [After (L4-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/353.js#L4-L200) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/353.js#L4)

```diff
-   61035: (DD, zD, wD) => {
+   42797: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "bumpFragment",
+       Ip = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42777: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+ ... (181 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/353.js` (Changed code · before: `L6-L11` → after: `L202-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3) · [After (L202-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/353.js#L202-L227) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/353.js#L6-L11)

```diff
-       postprocessVertexShader: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "postprocessVertexShader",
-       KD = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
+       geometryPixelShaderWGSL: () => Rp
+     });
+     var Op = cp(40062),
+       op = cp(42711),
+       Ip = cp(42783),
+       Sp = cp(42771),
+       xp = cp(42742),
+       Lp = cp(42777),
+       Yp = cp(42520),
+       Dp = cp(61766),
+       Ap = cp(42496),
+       Pp = cp(61745),
+       Wp = cp(61883),
+       yp = cp(61818),
+       Up = cp(42749),
+       wp = cp(61885),
+ ... (10 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/354.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/354.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248)

#### 1. `bundles/bloxd.io/chunks/js/354.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/354.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/354.js#L4-L6)

```diff
-   61051: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       WorldCodeAiOutOfUsage: () => KD
+   42797: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
```

#### 2. `bundles/bloxd.io/chunks/js/354.js` (Changed code · before: `L8-L25` → after: `L8-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248) · [After (L8-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/354.js#L8-L67) · [Before (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/354.js#L8-L25)

```diff
-     var pD = wD(1447),
-       sD = wD(1096);
- 
-     function KD(DD) {
-       let {
-         onGetSuperRank: zD
-       } = DD;
-       return (0, sD.jsxs)("div", {
-         className: "WorldCodeAiOutOfUsage",
-         children: [(0, sD.jsx)("p", {
-           className: "WorldCodeAiOutOfUsageText",
-           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
-         }), (0, sD.jsx)(pD.o, {
-           className: "WorldCodeAiOutOfUsageButton",
-           onClick: zD,
-           children: "Get Super Rank"
- ... (2 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "bumpFragment",
+       Ip = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42777: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     cp(42742);
+     const op = "bumpFragmentFunctions",
+ ... (44 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/355.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/355.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de)

#### 1. `bundles/bloxd.io/chunks/js/355.js` (Changed code · before: `L4` → after: `L4-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7deR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de) · [After (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/355.js#L4-L56) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/355.js#L4)

```diff
-   61060: (DD, zD, wD) => {
+   42794: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "clipPlaneFragment",
+       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42783: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+ ... (37 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/355.js` (Changed code · before: `L6-L7` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7deR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/355.js#L58) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/355.js#L6-L7)

```diff
-       WorldCodeAiDeepSeekNotice: () => rD,
-       deepSeekPrivacyPolicyUrl: () => KD
+       colorPixelShaderWGSL: () => Ap
```

#### 3. `bundles/bloxd.io/chunks/js/355.js` (Changed code · before: `L9-L28` → after: `L60-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7deR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de) · [After (L60-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/355.js#L60-L72) · [Before (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/355.js#L9-L28)

```diff
-     var pD = wD(1200),
-       sD = wD(1096);
-     const KD = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";
- 
-     function rD() {
-       const {
-         t: DD
-       } = (0, pD.E)();
-       return (0, sD.jsxs)(sD.Fragment, {
-         children: [DD("superBotXd:deepSeekNotice"), " ", (0, sD.jsxs)("a", {
-           className: "WorldCodeAiDeepSeekPolicyLink",
-           href: KD,
-           target: "_blank",
-           rel: "noreferrer noopener",
-           children: [DD("superBotXd:deepSeekPrivacyPolicy"), " ", (0, sD.jsx)("span", {
-             "aria-hidden": "true",
- ... (4 more removed lines; see GitHub link above)
+     var Op = cp(40062),
+       op = cp(42783),
+       Ip = cp(42790),
+       Sp = cp(42794),
+       xp = cp(42825);
+     const Lp = "colorPixelShader",
+       Yp = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
+     Op.b.ShadersStoreWGSL[Lp] || (Op.b.ShadersStoreWGSL[Lp] = Yp);
+     const Dp = [op.d, Ip.b, Sp.d, xp.d];
+     for (const Pp of Dp) Op.b.IncludesShadersStoreWGSL[Pp.name] || (Op.b.IncludesShadersStoreWGSL[Pp.name] = Pp.shader);
+     const Ap = {
+       name: Lp,
+       shader: Yp
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/356.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/356.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9)

#### 1. `bundles/bloxd.io/chunks/js/356.js` (Changed code · before: `L4-L6` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/356.js#L4-L13) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/356.js#L4-L6)

```diff
-   61084: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       particlesPixelShader: () => JD
+   42843: (pp, ip, cp) => {
+     function Op(pp) {
+       return Math.floor(pp / 8)
+     }
+ 
+     function op(pp) {
+       return 1 << pp % 8
+     }
+     cp.d(ip, {
+       OptimizeIndices: () => Sp
```

#### 2. `bundles/bloxd.io/chunks/js/356.js` (Changed code · before: `L8-L34` → after: `L15-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9) · [After (L15-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/356.js#L15-L63) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/356.js#L8-L34)

```diff
-     var pD = wD(39776),
-       sD = wD(41971),
-       KD = wD(41975),
-       rD = wD(42041),
-       LD = wD(42013),
-       cD = wD(41887),
-       gD = wD(41822),
-       RD = wD(42015),
-       AD = wD(42046),
-       UD = wD(42052),
-       fD = wD(42076),
-       ID = wD(42079);
-     const BD = "geometryRenderingFragment",
-       GD = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
-     pD.e.IncludesShadersStore[BD] || (pD.e.IncludesShadersStore[BD] = GD);
-     const hD = {
- ... (11 more removed lines; see GitHub link above)
+     class Ip {
+       constructor(pp) {
+         this.size = pp, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
+       }
+       get(pp) {
+         if (pp >= this.size) throw new RangeError("Bit index out of range");
+         const ip = Op(pp),
+           cp = op(pp);
+         return 0 !== (this._byteArray[ip] & cp)
+       }
+       set(pp, ip) {
+         if (pp >= this.size) throw new RangeError("Bit index out of range");
+         const cp = Op(pp),
+           Ip = op(pp);
+         ip ? this._byteArray[cp] |= Ip : this._byteArray[cp] &= ~Ip
+       }
+ ... (33 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/357.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/357.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b)

#### 1. `bundles/bloxd.io/chunks/js/357.js` (Changed code · before: `L4-L13` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/357.js#L4-L11) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/357.js#L4-L13)

```diff
-   61106: (DD, zD, wD) => {
-     wD.d(zD, {
-       allocateF64Mat4: () => sD
-     });
-     var pD = wD(41620);
- 
-     function sD() {
-       return new pD.f(16)
-     }
-     sD["@@MAT4_STORAGE_F64@@"] = !0
+   61383: (pp, ip, cp) => {
+     var Op;
+     cp.r(ip), cp.d(ip, {
+         ShaderLanguage: () => Op
+       }),
+       function(pp) {
+         pp[pp.GLSL = 0] = "GLSL", pp[pp.WGSL = 1] = "WGSL"
+       }(Op || (Op = {}))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/358.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/358.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786)

#### 1. `bundles/bloxd.io/chunks/js/358.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/358.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/358.js#L4)

```diff
-   61108: (DD, zD, wD) => {
+   61392: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/358.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/358.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/358.js#L6-L9)

```diff
-       applyLightFoOffset: () => rD,
-       getFloatingOriginOffset: () => sD,
-       lightFoVersion: () => KD,
-       wrapRenderableForFO: () => LD
+       postprocessVertexShader: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/358.js` (Changed code · before: `L11-L57` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/358.js#L8-L14) · [Before (L11-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/358.js#L11-L57)

```diff
-     var pD = wD(41634);
- 
-     function sD(DD) {
-       const zD = DD.camera;
-       if (!zD) return {
-         x: 0,
-         y: 0,
-         z: 0
-       };
-       const wD = zD.worldMatrix;
-       return {
-         x: wD[12],
-         y: wD[13],
-         z: wD[14]
-       }
-     }
- ... (31 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "postprocessVertexShader",
+       Ip = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/359.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/359.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa)

#### 1. `bundles/bloxd.io/chunks/js/359.js` (Changed code · before: `L4-L10` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/359.js#L4-L9) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/359.js#L4-L10)

```diff
-   61116: (DD, zD, wD) => {
-     function pD(DD, zD, wD, pD, sD, KD, rD) {
-       const LD = zD,
-         cD = pD,
-         gD = wD;
-       DD[gD + 0] = LD[cD + 0], DD[gD + 1] = LD[cD + 1], DD[gD + 2] = LD[cD + 2], DD[gD + 3] = LD[cD + 3], DD[gD + 4] = LD[cD + 4], DD[gD + 5] = LD[cD + 5], DD[gD + 6] = LD[cD + 6], DD[gD + 7] = LD[cD + 7], DD[gD + 8] = LD[cD + 8], DD[gD + 9] = LD[cD + 9], DD[gD + 10] = LD[cD + 10 … [truncated]
-     }
+   61399: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       WorldCodeAiOutOfUsage: () => Ip
+     });
+     var Op = cp(1480),
+       op = cp(1112);
```

#### 2. `bundles/bloxd.io/chunks/js/359.js` (Changed code · before: `L13-L18` → after: `L12-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faaR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa) · [After (L12-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/359.js#L12-L25) · [Before (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/359.js#L13-L18)

```diff
-       return (zD, wD, sD, KD) => {
-         const rD = DD.camera;
-         if (!rD) return void pD(zD, wD, sD, KD, 0, 0, 0);
-         const LD = rD.worldMatrix;
-         pD(zD, wD, sD, KD, LD[12], LD[13], LD[14])
-       }
+       let {
+         onGetSuperRank: ip
+       } = pp;
+       return (0, op.jsxs)("div", {
+         className: "WorldCodeAiOutOfUsage",
+         children: [(0, op.jsx)("p", {
+           className: "WorldCodeAiOutOfUsageText",
+           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
+         }), (0, op.jsx)(Op.o, {
+           className: "WorldCodeAiOutOfUsageButton",
+           onClick: ip,
+           children: "Get Super Rank"
+         })]
+       })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/360.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/360.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99)

#### 1. `bundles/bloxd.io/chunks/js/360.js` (Changed code · before: `L4-L6` → after: `L4-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99) · [After (L4-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/360.js#L4-L34) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/360.js#L4-L6)

```diff
-   61123: (DD, zD, wD) => {
-     function pD(DD) {
-       return DD.features.has("timestamp-query")
+   61419: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       particlesPixelShader: () => ep
+     });
+     var Op = cp(40062),
+       op = cp(42362),
+       Ip = cp(42365),
+       Sp = cp(42436),
+       xp = cp(42412),
+       Lp = cp(42266),
+       Yp = cp(42174),
+       Dp = cp(42416),
+       Ap = cp(42443),
+       Pp = cp(42449),
+       Wp = cp(42470),
+       yp = cp(42476);
+ ... (15 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/361.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/361.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4)

#### 1. `bundles/bloxd.io/chunks/js/361.js` (Changed code · before: `L4-L7` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/361.js#L4-L11) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/361.js#L4-L7)

```diff
-   61129: (DD, zD, wD) => {
-     function pD(DD, zD) {
-       for (const wD of DD._frameGraph._tasks)
-         if (wD?._config && wD._colorAttachment && (wD._config.rt === zD.scRT || wD._config.rst === zD.scRT)) return wD
+   61441: (pp, ip, cp) => {
+     cp.d(ip, {
+       allocateF64Mat4: () => op
+     });
+     var Op = cp(41971);
+ 
+     function op() {
+       return new Op.g(16)
```

#### 2. `bundles/bloxd.io/chunks/js/361.js` (Changed code · before: `L9-L25` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/361.js#L13) · [Before (L9-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/361.js#L9-L25)

```diff
- 
-     function sD(DD, zD) {
-       const wD = DD._renderingContexts[DD._renderingContexts.length - 1];
-       if (!wD?._frameGraph) return;
-       const sD = pD(zD, DD);
-       if (!sD) return;
-       if (1 === DD.msaaSamples) return void(sD._config.clr = !1);
-       const KD = sD.enabled;
-       sD._config.clr = !0, sD.enabled = !1, zD._beforeRender.unshift((() => {
-         const zD = pD(wD, DD),
-           rD = zD?._config.rst === DD.scRT && zD._config.rt._colorView;
-         sD.enabled = !!rD && KD, sD._config.clr = !rD, rD && (sD._colorAttachment.view = rD)
-       }))
-     }
-     wD.r(zD), wD.d(zD, {
-       configureSwapchainOverlayScene: () => sD
- ... (1 more removed lines; see GitHub link above)
+     op["@@MAT4_STORAGE_F64@@"] = !0
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/362.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/362.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46)

#### 1. `bundles/bloxd.io/chunks/js/362.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/362.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/362.js#L4-L6)

```diff
-   61137: (DD, zD, wD) => {
-     wD.d(zD, {
-       createShadowTask: () => KD
+   61443: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       applyLightFoOffset: () => Sp,
+       getFloatingOriginOffset: () => op,
+       lightFoVersion: () => Ip,
+       wrapRenderableForFO: () => xp
```

#### 2. `bundles/bloxd.io/chunks/js/362.js` (Changed code · before: `L8` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/362.js#L11) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/362.js#L8)

```diff
-     var pD = null;
+     var Op = cp(41977);
```

#### 3. `bundles/bloxd.io/chunks/js/362.js` (Changed code · before: `L11` → after: `L14-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46) · [After (L14-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/362.js#L14-L29) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/362.js#L11)

```diff
-       return pD?.get(DD)
+       const ip = pp.camera;
+       if (!ip) return {
+         x: 0,
+         y: 0,
+         z: 0
+       };
+       const cp = ip.worldMatrix;
+       return {
+         x: cp[12],
+         y: cp[13],
+         z: cp[14]
+       }
+     }
+ 
+     function Ip(pp) {
+       return pp.camera ? pp.camera.worldMatrixVersion : 0
```

#### 4. `bundles/bloxd.io/chunks/js/362.js` (Changed code · before: `L15-L68` → after: `L33-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46) · [After (L33-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/362.js#L33-L46) · [Before (L15-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/362.js#L15-L68)

```diff
-       const wD = new Set;
-       0;
-       const pD = {
-         name: "rI",
-         engine: DD,
-         oB: zD,
-         _passes: [],
-         async _preload() {
-           const DD = [];
-           for (const wD of zD.lights) {
-             const zD = wD.shadowGenerator,
-               pD = zD ? sD(zD) : null;
-             zD?._preloadShadowTask && pD && DD.push(rD(zD, pD))
-           }
-           await Promise.all(DD)
-         },
- ... (38 more removed lines; see GitHub link above)
+       const cp = ip.camera?.worldMatrix;
+       if (!cp) return;
+       const op = cp[12],
+         Ip = cp[13],
+         Sp = cp[14];
+       let xp = 0;
+       for (const Lp of ip.lights) {
+         if (xp >= Op.d) break;
+         if (!Lp._writeLightUbo) continue;
+         const ip = 4 + 16 * xp,
+           cp = pp[ip + 3];
+         if (0 === cp || 2 === cp) {
+           const cp = Lp.worldMatrix;
+           pp[ip] = cp[12] - op, pp[ip + 1] = cp[13] - Ip, pp[ip + 2] = cp[14] - Sp
```

#### 5. `bundles/bloxd.io/chunks/js/362.js` (Changed code · before: `L70-L71` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/362.js#L48-L49) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/362.js#L70-L71)

```diff
-       };
-       return pD
+         xp++
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/362.js` (Changed code · before: `L73-L74` → after: `L51-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46) · [After (L51-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/362.js#L51-L57) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/362.js#L73-L74)

```diff
-     async function rD(DD, zD) {
-       DD._preloadPending = zD, await (DD._preloadShadowTask?.(zD)), DD._preloadPending === zD && (DD._preloadPending = void 0)
+ 
+     function xp(pp, ip, cp) {
+       let Op = -1;
+       return () => {
+         const op = ip.camera ? ip.camera.worldMatrixVersion : -1;
+         op !== Op && (cp(), Op = op), pp()
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/363.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/363.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a)

#### 1. `bundles/bloxd.io/chunks/js/363.js` (Changed code · before: `L4-L68` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/363.js#L4-L9) · [Before (L4-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/363.js#L4-L68)

```diff
-   61140: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       A: () => gD,
-       B: () => AD,
-       C: () => RD,
-       X: () => UD
-     });
-     var pD = wD(41625),
-       sD = (DD, zD) => DD.order - zD.order;
- 
-     function KD(DD, zD, wD) {
-       DD.pendingDisposers.set(zD, wD)
-     }
- 
-     function rD(DD, zD, wD) {
-       wD && DD.pendingDisposers.get(zD) === wD && DD.pendingDisposers.delete(zD)
- ... (49 more removed lines; see GitHub link above)
+   61449: (pp, ip, cp) => {
+     function Op(pp, ip, cp, Op, op, Ip, Sp) {
+       const xp = ip,
+         Lp = Op,
+         Yp = cp;
+       pp[Yp + 0] = xp[Lp + 0], pp[Yp + 1] = xp[Lp + 1], pp[Yp + 2] = xp[Lp + 2], pp[Yp + 3] = xp[Lp + 3], pp[Yp + 4] = xp[Lp + 4], pp[Yp + 5] = xp[Lp + 5], pp[Yp + 6] = xp[Lp + 6], pp[Yp + 7] = xp[Lp + 7], pp[Yp + 8] = xp[Lp + 8], pp[Yp + 9] = xp[Lp + 9], pp[Yp + 10] = xp[Lp + 10 … [truncated]
```

#### 2. `bundles/bloxd.io/chunks/js/363.js` (Changed code · before: `L72-L257` → after: `L13-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69aR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a) · [After (L13-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/363.js#L13-L17) · [Before (L72-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/363.js#L72-L257)

```diff
-       const zD = {
-           MI: !1,
-           error: null,
-           active: new Set,
-           chains: new WeakMap,
-           generations: new WeakMap,
-           installed: new WeakMap,
-           installedMeshes: new Set,
-           pendingDisposers: new WeakMap,
-           tail: null
-         },
-         wD = DD,
-         gD = {
-           queue: (wD, RD) => {
-             const AD = (zD.generations.get(RD) ?? 0) + 1,
-               UD = RD.material;
- ... (170 more removed lines; see GitHub link above)
+       return (ip, cp, op, Ip) => {
+         const Sp = pp.camera;
+         if (!Sp) return void Op(ip, cp, op, Ip, 0, 0, 0);
+         const xp = Sp.worldMatrix;
+         Op(ip, cp, op, Ip, xp[12], xp[13], xp[14])
```

#### 3. `bundles/bloxd.io/chunks/js/363.js` (Changed code · before: `L260-L289` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69aR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/363.js#L20-L23) · [Before (L260-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/363.js#L260-L289)

```diff
- 
-     function BD(DD, zD, wD) {
-       ID(DD, zD, wD)
-     }
- 
-     function GD(DD, zD, wD, pD, sD, KD) {
-       return !zD.MI && zD.generations.get(pD) === KD && DD.meshes.includes(pD) && pD.material === sD && sD._buildGroup === wD
-     }
- 
-     function hD(DD, zD, wD, sD) {
-       const KD = DD._meshDisposables.get(wD);
-       if (KD && KD !== sD) {
-         DD._meshDisposables.delete(wD);
-         for (const DD of KD) DD()
-       }
-       if (sD)
- ... (14 more removed lines; see GitHub link above)
+     cp.r(ip), cp.d(ip, {
+       makePackMeshWorld: () => op,
+       packMat4IntoF32WithOffset: () => Op
+     })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/364.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/364.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e)

#### 1. `bundles/bloxd.io/chunks/js/364.js` (Changed code · before: `L4` → after: `L4-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e) · [After (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/364.js#L4-L76) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/364.js#L4)

```diff
-   61157: (DD, zD, wD) => {
+   61456: (pp, ip, cp) => {
+     function Op(pp) {
+       return pp.features.has("timestamp-query")
+     }
+ 
+     function op(pp) {
+       return Op(pp) ? {
+         device: pp,
+         markerPipeline: pp.createComputePipeline({
+           layout: "auto",
+           compute: {
+             module: pp.createShaderModule({
+               code: "@compute @workgroup_size(1) fn main() {}"
+             }),
+             entryPoint: "main"
+           }
+ ... (57 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/364.js` (Changed code · before: `L6-L15` → after: `L78-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3eR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e) · [After (L78-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/364.js#L78-L84) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/364.js#L6-L15)

```diff
-       postprocessVertexShaderWGSL: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "postprocessVertexShader",
-       KD = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
-     pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
+       createGpuFrameTimer: () => op,
+       destroyGpuFrameTimer: () => Lp,
+       gpuFrameTimerBegin: () => Ip,
+       gpuFrameTimerEnd: () => Sp,
+       gpuFrameTimerResolve: () => xp,
+       gpuTimingSupportedFor: () => Op
+     })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/365.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/365.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999)

#### 1. `bundles/bloxd.io/chunks/js/365.js` (Changed code · before: `L4` → after: `L4-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999) · [After (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/365.js#L4-L22) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/365.js#L4)

```diff
-   61174: (DD, zD, wD) => {
+   61462: (pp, ip, cp) => {
+     function Op(pp, ip) {
+       for (const cp of pp._frameGraph._tasks)
+         if (cp?._config && cp._colorAttachment && (cp._config.rt === ip.scRT || cp._config.rst === ip.scRT)) return cp
+     }
+ 
+     function op(pp, ip) {
+       const cp = pp._renderingContexts[pp._renderingContexts.length - 1];
+       if (!cp?._frameGraph) return;
+       const op = Op(ip, pp);
+       if (!op) return;
+       if (1 === pp.msaaSamples) return void(op._config.clr = !1);
+       const Ip = op.enabled;
+       op._config.clr = !0, op.enabled = !1, ip._beforeRender.unshift((() => {
+         const ip = Op(cp, pp),
+           Sp = ip?._config.rst === pp.scRT && ip._config.rt._colorView;
+ ... (3 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/365.js` (Changed code · before: `L6-L15` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/365.js#L24-L25) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/365.js#L6-L15)

```diff
-       lod3DPixelShader: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "lod3DPixelShader",
-       KD = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
-     pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
+       configureSwapchainOverlayScene: () => op
+     })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/366.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/366.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c)

#### 1. `bundles/bloxd.io/chunks/js/366.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/366.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/366.js#L4-L6)

```diff
-   61180: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       lodCubePixelShader: () => rD
+   61466: (pp, ip, cp) => {
+     cp.d(ip, {
+       createShadowTask: () => Ip
```

#### 2. `bundles/bloxd.io/chunks/js/366.js` (Changed code · before: `L8-L14` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/366.js#L8-L74) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/366.js#L8-L14)

```diff
-     var pD = wD(39776);
-     const sD = "lodCubePixelShader",
-       KD = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
-     pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+     var Op = null;
+ 
+     function op(pp) {
+       return Op?.get(pp)
+     }
+ 
+     function Ip(pp, ip) {
+       const cp = new Set;
+       0;
+       const Op = {
+         name: "Ay",
+         engine: pp,
+         pw: ip,
+         _passes: [],
+         async _preload() {
+           const pp = [];
+ ... (51 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/367.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/367.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4)

#### 1. `bundles/bloxd.io/chunks/js/367.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/367.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/367.js#L4)

```diff
-   61183: (DD, zD, wD) => {
+   61471: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/367.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/367.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/367.js#L6)

```diff
-       lodPixelShader: () => rD
+       A: () => Yp,
+       B: () => Ap,
+       C: () => Dp,
+       X: () => Pp
```

#### 3. `bundles/bloxd.io/chunks/js/367.js` (Changed code · before: `L8-L14` → after: `L11-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4) · [After (L11-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/367.js#L11-L288) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/367.js#L8-L14)

```diff
-     var pD = wD(39776);
-     const sD = "lodPixelShader",
-       KD = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
-     pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+     var Op = cp(41959),
+       op = (pp, ip) => pp.order - ip.order;
+ 
+     function Ip(pp, ip, cp) {
+       pp.pendingDisposers.set(ip, cp)
+     }
+ 
+     function Sp(pp, ip, cp) {
+       cp && pp.pendingDisposers.get(ip) === cp && pp.pendingDisposers.delete(ip)
+     }
+     var xp = null,
+       Lp = null;
+ 
+     function Yp(pp, ip, cp, Op) {
+       if (!ip || cp.material !== ip) return Op ?? Promise.resolve();
+       const op = Ap(pp, ip._buildGroup, cp);
+ ... (262 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/368.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/368.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64)

#### 1. `bundles/bloxd.io/chunks/js/368.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/368.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/368.js#L4)

```diff
-   61185: (DD, zD, wD) => {
+   61499: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/368.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/368.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/368.js#L6)

```diff
-       lod3DPixelShaderWGSL: () => rD
+       postprocessVertexShaderWGSL: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/368.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/368.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/368.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "lod3DPixelShader",
-       KD = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
-     pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "postprocessVertexShader",
+       Ip = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/369.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/369.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c)

#### 1. `bundles/bloxd.io/chunks/js/369.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/369.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/369.js#L4)

```diff
-   61193: (DD, zD, wD) => {
+   61516: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/369.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/369.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/369.js#L6)

```diff
-       lodCubePixelShaderWGSL: () => rD
+       lod3DPixelShader: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/369.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/369.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/369.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "lodCubePixelShader",
-       KD = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
-     pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "lod3DPixelShader",
+       Ip = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/370.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/370.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4)

#### 1. `bundles/bloxd.io/chunks/js/370.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/370.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/370.js#L4)

```diff
-   61202: (DD, zD, wD) => {
+   61519: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/370.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/370.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/370.js#L6)

```diff
-       lodPixelShaderWGSL: () => rD
+       lodCubePixelShader: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/370.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/370.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/370.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "lodPixelShader",
-       KD = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
-     pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "lodCubePixelShader",
+       Ip = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/371.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/371.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2)

#### 1. `bundles/bloxd.io/chunks/js/371.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/371.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/371.js#L4)

```diff
-   61208: (DD, zD, wD) => {
+   61525: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/371.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/371.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/371.js#L6)

```diff
-       passPixelShaderWGSL: () => rD
+       lodPixelShader: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/371.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/371.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/371.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "passPixelShader",
-       KD = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
-     pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "lodPixelShader",
+       Ip = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/372.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/372.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f)

#### 1. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/372.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/372.js#L4)

```diff
-   61215: (DD, zD, wD) => {
+   61532: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/372.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/372.js#L6)

```diff
-       passPixelShader: () => rD
+       lod3DPixelShaderWGSL: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/372.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/372.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "passPixelShader",
-       KD = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
-     pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "lod3DPixelShader",
+       Ip = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/373.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/373.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef)

#### 1. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/373.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/373.js#L4)

```diff
-   61221: (DD, zD, wD) => {
+   61535: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/373.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/373.js#L6)

```diff
-       passCubePixelShaderWGSL: () => rD
+       lodCubePixelShaderWGSL: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/373.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/373.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "passCubePixelShader",
-       KD = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
-     pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "lodCubePixelShader",
+       Ip = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/374.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/374.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f)

#### 1. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/374.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/374.js#L4)

```diff
-   61227: (DD, zD, wD) => {
+   61544: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/374.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/374.js#L6)

```diff
-       passCubePixelShader: () => rD
+       lodPixelShaderWGSL: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/374.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/374.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "passCubePixelShader",
-       KD = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
-     pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "lodPixelShader",
+       Ip = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/375.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/375.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7)

#### 1. `bundles/bloxd.io/chunks/js/375.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/375.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/375.js#L4)

```diff
-   61272: (DD, zD, wD) => {
+   61552: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/375.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/375.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/375.js#L6)

```diff
-       fxaaPixelShaderWGSL: () => rD
+       passPixelShaderWGSL: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/375.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/375.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/375.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "fxaaPixelShader",
-       KD = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
-     pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "passPixelShader",
+       Ip = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/376.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/376.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514)

#### 1. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/376.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/376.js#L4)

```diff
-   61276: (DD, zD, wD) => {
+   61559: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/376.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/376.js#L6)

```diff
-       fxaaVertexShaderWGSL: () => rD
+       passPixelShader: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/376.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/376.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "fxaaVertexShader",
-       KD = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
-     pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "passPixelShader",
+       Ip = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/377.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/377.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4)

#### 1. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/377.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/377.js#L4)

```diff
-   61281: (DD, zD, wD) => {
+   61565: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/377.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/377.js#L6)

```diff
-       fxaaPixelShader: () => rD
+       passCubePixelShaderWGSL: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/377.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/377.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "fxaaPixelShader",
-       KD = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
-     pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "passCubePixelShader",
+       Ip = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/378.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/378.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace)

#### 1. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/378.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/378.js#L4)

```diff
-   61285: (DD, zD, wD) => {
+   61570: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/378.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/378.js#L6)

```diff
-       fxaaVertexShader: () => rD
+       passCubePixelShader: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/378.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/378.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "fxaaVertexShader",
-       KD = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
-     pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "passCubePixelShader",
+       Ip = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/379.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/379.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72)

#### 1. `bundles/bloxd.io/chunks/js/379.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/379.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/379.js#L4-L18)

```diff
-   61291: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
-     wD(41796), wD(41802);
-     const sD = "pbrUboDeclaration",
-       KD = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61306: (DD, zD, wD) => {
+   61601: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/379.js` (Changed code · before: `L20` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/379.js#L6) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/379.js#L20)

```diff
-       pbrPixelShader: () => Qw
+       fxaaPixelShaderWGSL: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/379.js` (Changed code · before: `L22-L242` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/379.js#L8-L11) · [Before (L22-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/379.js#L22-L242)

```diff
-     var pD = wD(39776),
-       sD = wD(41971),
-       KD = wD(41975),
-       rD = wD(41980),
-       LD = wD(41964);
-     const cD = "pbrFragmentDeclaration",
-       gD = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
-     pD.e.IncludesShadersStore[cD] || (pD.e.IncludesShadersStore[cD] = gD);
-     const RD = {
-       name: cD,
-       shader: gD
-     };
-     var AD = wD(41796),
-       UD = wD(41802),
-       fD = wD(61291),
-       ID = wD(41840),
- ... (205 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "fxaaPixelShader",
+       Ip = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/380.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/380.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355)

#### 1. `bundles/bloxd.io/chunks/js/380.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/380.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/380.js#L4-L6)

```diff
-   61302: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
+   61604: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       fxaaVertexShaderWGSL: () => Sp
```

#### 2. `bundles/bloxd.io/chunks/js/380.js` (Changed code · before: `L8-L195` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/380.js#L8-L11) · [Before (L8-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/380.js#L8-L195)

```diff
-     var pD = wD(39776);
-     const sD = "harmonicsFunctions",
-       KD = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61337: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "hdrFilteringFunctions",
-       KD = "#if NUM_SAMPLES\n#if NUM_SAMPLES>0\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\nprecision highp int;float radicalInverse_VdC(uint bits)\n{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x3333333 … [truncated]
- ... (172 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "fxaaVertexShader",
+       Ip = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/381.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/381.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543)

#### 1. `bundles/bloxd.io/chunks/js/381.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/381.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/381.js#L4-L6)

```diff
-   61302: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
+   61612: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       fxaaPixelShader: () => Sp
```

#### 2. `bundles/bloxd.io/chunks/js/381.js` (Changed code · before: `L8-L115` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/381.js#L8-L11) · [Before (L8-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/381.js#L8-L115)

```diff
-     var pD = wD(39776);
-     const sD = "harmonicsFunctions",
-       KD = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61483: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
-     wD(41796), wD(41802);
-     const sD = "openpbrUboDeclaration",
- ... (92 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "fxaaPixelShader",
+       Ip = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/382.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/382.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1)

#### 1. `bundles/bloxd.io/chunks/js/382.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/382.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/382.js#L4-L18)

```diff
-   61374: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
-     wD(42095), wD(42104);
-     const sD = "pbrUboDeclaration",
-       KD = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61398: (DD, zD, wD) => {
+   61618: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/382.js` (Changed code · before: `L20` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/382.js#L6) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/382.js#L20)

```diff
-       pbrPixelShaderWGSL: () => Bw
+       fxaaVertexShader: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/382.js` (Changed code · before: `L22-L222` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/382.js#L8-L11) · [Before (L22-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/382.js#L22-L222)

```diff
-     var pD = wD(39776),
-       sD = wD(42280),
-       KD = wD(42285),
-       rD = wD(42288),
-       LD = wD(42095),
-       cD = wD(42104),
-       gD = wD(61374),
-       RD = wD(42141),
-       AD = wD(61402),
-       UD = wD(42291),
-       fD = wD(42317);
-     const ID = "samplerFragmentAlternateDeclaration",
-       BD = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     pD.e.IncludesShadersStoreWGSL[ID] || (pD.e.IncludesShadersStoreWGSL[ID] = BD);
-     const GD = {
-       name: ID,
- ... (185 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "fxaaVertexShader",
+       Ip = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/383.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/383.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8)

#### 1. `bundles/bloxd.io/chunks/js/383.js` (Changed code · before: `L4-L17` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/383.js#L4) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/383.js#L4-L17)

```diff
-   61389: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "harmonicsFunctions",
-       KD = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61437: (DD, zD, wD) => {
+   61627: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/383.js` (Changed code · before: `L21-L37` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/383.js#L8-L12) · [Before (L21-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/383.js#L21-L37)

```diff
-     var pD = wD(39776);
-     const sD = "hdrFilteringFunctions",
-       KD = "#ifdef NUM_SAMPLES\n#if NUM_SAMPLES>0\nfn radicalInverse_VdC(value: u32)->f32 \n{var bits=(value<<16u) | (value>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<< … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61413: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "importanceSampling",
-       KD = "fn hemisphereCosSample(u: vec2f)->vec3f {var phi: f32=2.*PI*u.x;var cosTheta2: f32=1.-u.y;var cosTheta: f32=sqrt(cosTheta2);var sinTheta: f32=sqrt(1.-cosTheta2);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}\nfn hemisphereImportanceSampleDggx(u: vec2f,a: … [truncated]
- ... (1 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     cp(42157), cp(42159);
+     const op = "pbrUboDeclaration",
+       Ip = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 3. `bundles/bloxd.io/chunks/js/383.js` (Changed code · before: `L43-L73` → after: `L18-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8) · [After (L18-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/383.js#L18-L150) · [Before (L43-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/383.js#L43-L73)

```diff
-   61470: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "pbrBlockImageProcessing",
-       KD = "#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)\n#if !defined(SKIPFINALCOLORCLAMP)\nfinalColor=vec4f(clamp(finalColor.rgb,vec3f(0.),vec3f(30.0)),finalColor.a);\n#endif\n#else\nfinalColor=applyImageProcessing(finalColor);\n#endif\nfinalColor=vec4f(fin … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61467: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
- ... (15 more removed lines; see GitHub link above)
+   61644: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       pbrPixelShader: () => mc
+     });
+     var Op = cp(40062),
+       op = cp(42362),
+       Ip = cp(42365),
+       Sp = cp(42369),
+       xp = cp(42359);
+     const Lp = "pbrFragmentDeclaration",
+       Yp = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
+     Op.b.IncludesShadersStore[Lp] || (Op.b.IncludesShadersStore[Lp] = Yp);
+     const Dp = {
+       name: Lp,
+       shader: Yp
+     };
+ ... (117 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/383.js` (Changed code · before: `L75-L210` → after: `L152-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8) · [After (L152-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/383.js#L152-L242) · [Before (L75-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/383.js#L75-L210)

```diff
-       KD = "var reflectanceF0: f32=reflectivityOut.reflectanceF0;var specularEnvironmentR0: vec3f=reflectivityOut.colorReflectanceF0;var specularEnvironmentR90: vec3f= reflectivityOut.reflectanceF90;\n#ifdef ALPHAFRESNEL\nvar reflectance90: f32=fresnelGrazingReflectance(reflectan … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61448: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     wD(61441);
-     const sD = "pbrClusteredLightingFunctions",
-       KD = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nlightData: vec4f,\nsliceRange: vec2u,\nV: vec3f,\nN: vec3f,\nposW: vec3f,\nsurfaceAlbedo: vec3f,\nreflectivityOut: refle … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
- ... (120 more removed lines; see GitHub link above)
+       Xi = "float reflectanceF0=reflectivityOut.reflectanceF0;vec3 specularEnvironmentR0=reflectivityOut.colorReflectanceF0;vec3 specularEnvironmentR90=reflectivityOut.colorReflectanceF90;\n#ifdef ALPHAFRESNEL\nfloat reflectance90=fresnelGrazingReflectance(reflectanceF0);specular … [truncated]
+     Op.b.IncludesShadersStore[Ei] || (Op.b.IncludesShadersStore[Ei] = Xi);
+     const li = {
+         name: Ei,
+         shader: Xi
+       },
+       Qi = "pbrClusteredLightingFunctions",
+       Ji = "#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\n#include<clusteredLightingFunctions>\n#define inline\nlightingInfo computeClusteredLighting(\nsampler2D lightDataTexture,\nsampler2D tileMaskTexture,\nvec4 lightData,\nivec2 sliceRange,\nvec3 V,\nvec3 N,\nvec3 posW, … [truncated]
+     Op.b.IncludesShadersStore[Qi] || (Op.b.IncludesShadersStore[Qi] = Ji);
+     const Bi = {
+       name: Qi,
+       shader: Ji
+     };
+     var Ni = cp(42449),
+       Ti = cp(61715),
+       fi = cp(42452);
+ ... (75 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/384.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/384.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd)

#### 1. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/384.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/384.js#L4)

```diff
-   61389: (DD, zD, wD) => {
+   61640: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/384.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/384.js#L6)

```diff
-       d: () => rD
+       c: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/384.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/384.js#L8)

```diff
-     var pD = wD(39776);
+     var Op = cp(40062);
```

#### 4. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L10-L11` → after: `L10-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L10-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/384.js#L10-L102) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/384.js#L10-L11)

```diff
-       KD = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61698: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "hdrFilteringFunctions",
+       Ip = "#if NUM_SAMPLES\n#if NUM_SAMPLES>0\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\nprecision highp int;float radicalInverse_VdC(uint bits)\n{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x3333333 … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+ ... (77 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L17` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/384.js#L108) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/384.js#L17)

```diff
-   61545: (DD, zD, wD) => {
+   61700: (pp, ip, cp) => {
```

#### 6. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L21-L25` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/384.js#L112-L115) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/384.js#L21-L25)

```diff
-     var pD = wD(39776);
-     wD(42095), wD(42104);
-     const sD = "openpbrUboDeclaration",
-       KD = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "pbrDirectLightingFunctions",
+       Ip = "#define CLEARCOATREFLECTANCE90 1.0\nstruct lightingInfo\n{vec3 diffuse;\n#ifdef SS_TRANSLUCENCY\nvec3 diffuseTransmission;\n#endif\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef CLEARCOAT\nvec4 clearCoat;\n#endif\n#ifdef SHEEN\nvec3 sheen;\n#endif\n};float adjus … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L31-L33` → after: `L121-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/384.js#L121-L123) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/384.js#L31-L33)

```diff
-   61539: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       openpbrVertexShaderWGSL: () => tD
+   61685: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
```

#### 8. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L35-L51` → after: `L125-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L125-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/384.js#L125-L129) · [Before (L35-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/384.js#L35-L51)

```diff
-     var pD = wD(39776),
-       sD = wD(42095),
-       KD = wD(42104),
-       rD = wD(61545),
-       LD = wD(42112),
-       cD = wD(42141),
-       gD = wD(42114),
-       RD = wD(61380),
-       AD = wD(42122),
-       UD = wD(42127),
-       fD = wD(42132),
-       ID = wD(42139),
-       BD = wD(42143),
-       GD = wD(61389);
-     const hD = "openpbrNormalMapVertexDeclaration",
-       nD = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
- ... (1 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     cp(42385);
+     const op = "pbrDirectLightingSetupFunctions",
+       Ip = "struct preLightingInfo\n{vec3 lightOffset;float lightDistanceSquared;float lightDistance;float attenuation;vec3 L;vec3 H;float NdotV;float NdotLUnclamped;float NdotL;float VdotH;float LdotV;float roughness;float diffuseRoughness;vec3 surfaceAlbedo;\n#ifdef IRIDESCENCE … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 9. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L55-L74` → after: `L133-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L133-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/384.js#L133-L143) · [Before (L55-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/384.js#L55-L74)

```diff
-     };
-     var OD = wD(42159),
-       JD = wD(42168),
-       ED = wD(42170),
-       QD = wD(42176),
-       XD = wD(42182),
-       VD = wD(42190),
-       PD = wD(42192),
-       CD = wD(42194),
-       xD = wD(42197),
-       TD = wD(42204),
-       bD = wD(42208),
-       jD = wD(42216),
-       dD = wD(42225),
-       SD = wD(42230),
-       iD = wD(42232),
- ... (4 more removed lines; see GitHub link above)
+     }
+   },
+   61653: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     cp(42206);
+     const op = "pbrFragmentExtraDeclaration",
+       Ip = "varying vec3 vPositionW;\n#if DEBUGMODE>0\nvarying vec4 vClipSpacePosition;\n#endif\n#include<mainUVVaryingDeclaration>[1..7]\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)\nvarying vec3 vEnvironment … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 10. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L78-L88` → after: `L147-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L147-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/384.js#L147-L195) · [Before (L78-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/384.js#L78-L88)

```diff
-     };
-     var yD = wD(42252),
-       kD = wD(42255),
-       mD = wD(42258),
-       eD = wD(42266),
-       oD = wD(42269);
-     const aD = "openpbrVertexShader",
-       uD = "#define OPENPBR_VERTEX_SHADER\n#include<openpbrUboDeclaration>\n#define CUSTOM_VERTEX_BEGIN\n#ifndef USE_VERTEX_PULLING\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef TANGENT\nattribute tangent: vec4f;\n#endif\n#ifdef UV1\nattribu … [truncated]
-     pD.e.ShadersStoreWGSL[aD] || (pD.e.ShadersStoreWGSL[aD] = uD);
-     const vD = [sD.e, KD.b, rD.b, LD.c, cD.e, gD.b, RD.d, AD.c, UD.b, fD.d, ID.c, BD.b, GD.d, MD, OD.b, JD.b, ED.c, QD.e, XD.d, VD.c, PD.d, CD.e, xD.d, TD.d, bD.e, jD.c, dD.e, SD.b, iD.c, lD.c, ZD, yD.b, kD.d, mD.c, eD.b, oD.b];
-     for (const FD of vD) pD.e.IncludesShadersStoreWGSL[FD.name] || (pD.e.IncludesShadersStoreWGSL[FD.name] = FD.shader);
+     }
+   },
+   61660: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "pbrFragmentReflectionDeclaration",
+       Ip = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61678: (pp, ip, cp) => {
+ ... (33 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/385.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/385.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4)

#### 1. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L4)

```diff
-   61502: (DD, zD, wD) => {
+   61640: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L6-L19` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L6) · [Before (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L6-L19)

```diff
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "openpbrDielectricReflectance",
-       KD = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61508: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
+       c: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L21-L24` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L8-L11) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "openpbrGeometryInfo",
-       KD = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "harmonicsFunctions",
+       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L30` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L17) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L30)

```diff
-   61513: (DD, zD, wD) => {
+   61834: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L34-L74` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L21-L22) · [Before (L34-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L34-L74)

```diff
-     var pD = wD(39776);
-     const sD = "openpbrIblFunctions",
-       KD = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61530: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "openpbrSubsurfaceLayerData",
-       KD = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
- ... (25 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     cp(42157), cp(42159);
```

#### 6. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L77` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L25) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L77)

```diff
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L83` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L31) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L83)

```diff
-   61498: (DD, zD, wD) => {
+   61632: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L85` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L33) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L85)

```diff
-       c: () => rD
+       e: () => Sp
```

#### 9. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L87-L90` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L35-L38) · [Before (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L87-L90)

```diff
-     var pD = wD(39776);
-     const sD = "sceneFragmentDeclaration",
-       KD = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "pbrBRDFFunctions",
+       Ip = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 10. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L96` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L44) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L96)

```diff
-   61490: (DD, zD, wD) => {
+   61831: (pp, ip, cp) => {
```

#### 11. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L98` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L46) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L98)

```diff
-       openpbrPixelShader: () => Lw
+       openpbrVertexShader: () => Oi
```

#### 12. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L100-L108` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L48-L51) · [Before (L100-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L100-L108)

```diff
-     var pD = wD(39776),
-       sD = wD(41971),
-       KD = wD(41975),
-       rD = wD(41980),
-       LD = wD(61498),
-       cD = wD(41964);
-     const gD = "openpbrFragmentDeclaration",
-       RD = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
-     pD.e.IncludesShadersStore[gD] || (pD.e.IncludesShadersStore[gD] = RD);
+     var Op = cp(40062);
+     const op = "sceneVertexDeclaration",
+       Ip = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 13. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L113-L124` → after: `L56-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L56-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L56-L59) · [Before (L113-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L113-L124)

```diff
-     var UD = wD(41796),
-       fD = wD(41802),
-       ID = wD(61483),
-       BD = wD(41840),
-       GD = wD(61311),
-       hD = wD(41984),
-       nD = wD(41986),
-       MD = wD(42008),
-       OD = wD(61316);
-     const JD = "openpbrFragmentSamplersDeclaration",
-       ED = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
-     pD.e.IncludesShadersStore[JD] || (pD.e.IncludesShadersStore[JD] = ED);
+     var xp = cp(42151);
+     const Lp = "openpbrVertexDeclaration",
+       Yp = "#include<sceneVertexDeclaration>\n#ifdef BASE_COLOR\nuniform vec2 vBaseColorInfos;uniform mat4 baseColorMatrix;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;\n#endif\nuniform float vBaseDiffuseRoughness;\n#ifdef BASE_DIFFUSE … [truncated]
+     Op.b.IncludesShadersStore[Lp] || (Op.b.IncludesShadersStore[Lp] = Yp);
```

#### 14. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L129-L264` → after: `L64-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L64-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L64-L79) · [Before (L129-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L129-L264)

```diff
-     var XD = wD(42013),
-       VD = wD(42041),
-       PD = wD(41887),
-       CD = wD(42046),
-       xD = wD(42024),
-       TD = wD(41822),
-       bD = wD(61320),
-       jD = wD(61323),
-       dD = wD(61327),
-       SD = wD(42015),
-       iD = wD(42002),
-       lD = wD(61302),
-       WD = wD(41989),
-       ND = wD(61329),
-       ZD = wD(61335),
-       yD = wD(61294),
- ... (120 more removed lines; see GitHub link above)
+     var Ap = cp(42157),
+       Pp = cp(42159),
+       Wp = cp(61834),
+       yp = cp(42166),
+       Up = cp(42206),
+       wp = cp(42174),
+       vp = cp(61632),
+       tp = cp(42178),
+       Hp = cp(42182),
+       dp = cp(42190),
+       ep = cp(42198),
+       jp = cp(42215),
+       kp = cp(61640);
+     const mp = "openpbrNormalMapVertexDeclaration",
+       Rp = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     Op.b.IncludesShadersStore[mp] || (Op.b.IncludesShadersStore[mp] = Rp);
```

#### 15. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L269-L274` → after: `L84-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L84-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L84-L101) · [Before (L269-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L269-L274)

```diff
-     var Fz = wD(42076),
-       Yz = wD(42079),
-       Hz = wD(61353);
-     const qz = "openpbrBlockPrePass",
-       Dw = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nfloat writeGeometryInfo=1.0;\n#else\nfloat writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_INDEX,vec4(vPositionW,writeGeometryInfo));\ … [truncated]
-     pD.e.IncludesShadersStore[qz] || (pD.e.IncludesShadersStore[qz] = Dw);
+     var Mp = cp(42226),
+       Cp = cp(42232),
+       Ep = cp(42238),
+       Xp = cp(42246),
+       lp = cp(42251),
+       Qp = cp(42257),
+       Jp = cp(42266),
+       Bp = cp(42272),
+       Np = cp(42277),
+       Tp = cp(42286),
+       fp = cp(42291),
+       bp = cp(42298),
+       hp = cp(42302),
+       ap = cp(42305),
+       np = cp(42314);
+     const Fp = "openpbrNormalMapVertex",
+ ... (2 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L279-L285` → after: `L106-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L106-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/385.js#L106-L115) · [Before (L279-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/385.js#L279-L285)

```diff
-     var ww = wD(42084),
-       pw = wD(61361);
-     const sw = "openpbrPixelShader",
-       Kw = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_EXTENSION\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#ifdef … [truncated]
-     pD.e.ShadersStore[sw] || (pD.e.ShadersStore[sw] = Kw);
-     const rw = [sD.b, KD.b, rD.c, LD.c, cD.b, AD, UD.e, fD.c, ID.d, BD.e, GD.b, hD.b, nD.b, MD.b, OD.b, QD, XD.b, VD.d, PD.e, CD.e, xD.e, TD.c, bD.c, jD.e, dD.e, SD.d, iD.d, lD.b, WD.e, ND.d, ZD.c, yD.b, kD.b, mD.b, eD.d, uD, FD, YD.b, HD.b, zz, sz, Kz.b, rz.e, gz, Rz.c, Az.d, Iz … [truncated]
-     for (const gw of rw) pD.e.IncludesShadersStore[gw.name] || (pD.e.IncludesShadersStore[gw.name] = gw.shader);
+     var rp = cp(42319),
+       Zp = cp(42327),
+       zp = cp(42336),
+       sp = cp(42341),
+       Kp = cp(42346);
+     const Vp = "openpbrVertexShader",
+       ii = "#define OPENPBR_VERTEX_SHADER\n#define CUSTOM_VERTEX_EXTENSION\nprecision highp float;\n#include<__decl__openpbrVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#end … [truncated]
+     Op.b.ShadersStore[Vp] || (Op.b.ShadersStore[Vp] = ii);
+     const ci = [Sp, xp.e, Dp, Ap.d, Pp.d, Wp.e, yp.c, Up.e, wp.c, vp.e, tp.b, Hp.c, dp.e, ep.c, jp.e, kp.c, qp, Mp.c, Cp.e, Ep.b, Xp.d, lp.b, Qp.c, Jp.e, Bp.e, Np.b, Tp.b, fp.d, bp.e, hp.c, ap.b, np.b, Gp, rp.c, Zp.c, zp.e, sp.c, Kp.b];
+     for (const oi of ci) Op.b.IncludesShadersStore[oi.name] || (Op.b.IncludesShadersStore[oi.name] = oi.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/386.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/386.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff)

#### 1. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L4)

```diff
-   61553: (DD, zD, wD) => {
+   61741: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "openpbrDielectricReflectance",
-       KD = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     cp(42496), cp(42498);
+     const op = "pbrUboDeclaration",
+       Ip = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 3. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L17-L45` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L18-L20) · [Before (L17-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L17-L45)

```diff
-   61562: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "openpbrGeometryInfo",
-       KD = "struct geometryInfoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32};struct geometryInfoAnisoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32,\nanisotropy: f32,\nanisotropicTange … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61566: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
- ... (13 more removed lines; see GitHub link above)
+   61756: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       pbrPixelShaderWGSL: () => vc
```

#### 4. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L47-L50` → after: `L22-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L22-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L22-L35) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L47-L50)

```diff
-     var pD = wD(39776);
-     const sD = "openpbrSubsurfaceLayerData",
-       KD = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062),
+       op = cp(42711),
+       Ip = cp(42714),
+       Sp = cp(42718),
+       xp = cp(42496),
+       Lp = cp(42498),
+       Yp = cp(61741),
+       Dp = cp(42542),
+       Ap = cp(61762),
+       Pp = cp(42721),
+       Wp = cp(42742);
+     const yp = "samplerFragmentAlternateDeclaration",
+       Up = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     Op.b.IncludesShadersStoreWGSL[yp] || (Op.b.IncludesShadersStoreWGSL[yp] = Up);
```

#### 5. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L54-L63` → after: `L39-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L39-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L39-L43) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L54-L63)

```diff
-     }
-   },
-   61575: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "openpbrTransmissionLayerData",
-       KD = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     };
+     var vp = cp(61766);
+     const tp = "pbrFragmentSamplersDeclaration",
+       Hp = "#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BAS … [truncated]
+     Op.b.IncludesShadersStoreWGSL[tp] || (Op.b.IncludesShadersStoreWGSL[tp] = Hp);
```

#### 6. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L67-L77` → after: `L47-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L47-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L47-L76) · [Before (L67-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L67-L77)

```diff
-     }
-   },
-   61545: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     wD(42095), wD(42104);
-     const sD = "openpbrUboDeclaration",
-       KD = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     };
+     var ep = cp(42752),
+       jp = cp(42783),
+       kp = cp(42598),
+       mp = cp(42790),
+       Rp = cp(42765),
+       qp = cp(42520),
+       Mp = cp(61771),
+       Cp = cp(61778),
+       Ep = cp(61780),
+       Xp = cp(42759),
+       lp = cp(42736),
+       Qp = cp(61754),
+       Jp = cp(42726),
+       Bp = cp(61789),
+       Np = cp(61791),
+ ... (14 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L79-L101` → after: `L78-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L78-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L78-L83) · [Before (L79-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L79-L101)

```diff
-       name: sD,
-       shader: KD
-     }
-   },
-   61548: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       openpbrPixelShaderWGSL: () => Kw
-     });
-     var pD = wD(39776),
-       sD = wD(42280),
-       KD = wD(42285),
-       rD = wD(42288),
-       LD = wD(42095),
-       cD = wD(42104),
-       gD = wD(61545),
-       RD = wD(42141),
- ... (7 more removed lines; see GitHub link above)
+         name: zp,
+         shader: sp
+       },
+       Vp = "pbrBlockReflectivity",
+       ii = "struct reflectivityOutParams\n{microSurface: f32,\nroughness: f32,\ndiffuseRoughness: f32,\nreflectanceF0: f32,\nreflectanceF90: vec3f,\ncolorReflectanceF0: vec3f,\ncolorReflectanceF90: vec3f,\n#ifdef METALLICWORKFLOW\nsurfaceAlbedo: vec3f,\nmetallic: f32,\nspecularWe … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Vp] || (Op.b.IncludesShadersStoreWGSL[Vp] = ii);
```

#### 8. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L103-L130` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L85-L90) · [Before (L103-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L103-L130)

```diff
-       name: BD,
-       shader: GD
-     };
-     var nD = wD(42335),
-       MD = wD(42357),
-       OD = wD(42190),
-       JD = wD(42359),
-       ED = wD(42344),
-       QD = wD(42114),
-       XD = wD(61410),
-       VD = wD(61413),
-       PD = wD(61416),
-       CD = wD(42341),
-       xD = wD(42311),
-       TD = wD(61389),
-       bD = wD(42295),
- ... (12 more removed lines; see GitHub link above)
+         name: Vp,
+         shader: ii
+       },
+       Oi = "pbrBlockAmbientOcclusion",
+       oi = "struct ambientOcclusionOutParams\n{ambientOcclusionColor: vec3f,\n#if DEBUGMODE>0 && defined(AMBIENT)\nambientOcclusionColorMap: vec3f\n#endif\n};\n#define pbr_inline\nfn ambientOcclusionBlock(\n#ifdef AMBIENT\nambientOcclusionColorMap_: vec3f,\nvAmbientInfos: vec4f\n … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Oi] || (Op.b.IncludesShadersStoreWGSL[Oi] = oi);
```

#### 9. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L135-L137` → after: `L95-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L95-L97) · [Before (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L135-L137)

```diff
-       oD = "openpbrNormalMapFragmentFunctions",
-       aD = "#if defined(GEOMETRY_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal,_SAMPLERNAME_,geometryNormal)\n#endif\n#if defined(GEOMETRY_COAT_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_COAT_NORMA … [truncated]
-     pD.e.IncludesShadersStoreWGSL[oD] || (pD.e.IncludesShadersStoreWGSL[oD] = aD);
+       Si = "pbrBlockAlphaFresnel",
+       xi = "#ifdef ALPHAFRESNEL\n#if defined(ALPHATEST) || defined(ALPHABLEND)\nstruct alphaFresnelOutParams\n{alpha: f32};fn faceforward(N: vec3<f32>,I: vec3<f32>,Nref: vec3<f32>)->vec3<f32> {return select(N,-N,dot(Nref,I)>0.0);}\n#define pbr_inline\nfn alphaFresnelBlock(\nnorma … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Si] || (Op.b.IncludesShadersStoreWGSL[Si] = xi);
```

#### 10. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L139-L146` → after: `L99-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L99-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L99-L104) · [Before (L139-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L139-L146)

```diff
-       name: oD,
-       shader: aD
-     };
-     var vD = wD(42326),
-       tD = wD(61553);
-     const FD = "openpbrConductorReflectance",
-       YD = "#define pbr_inline\nfn conductorReflectance(baseColor: vec3f,specularColor: vec3f,specularWeight: f32)->ReflectanceParams\n{var outParams: ReflectanceParams;\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)\noutParams.coloredF0=baseColor*specularWeigh … [truncated]
-     pD.e.IncludesShadersStoreWGSL[FD] || (pD.e.IncludesShadersStoreWGSL[FD] = YD);
+         name: Si,
+         shader: xi
+       },
+       Yi = "pbrBlockAnisotropic",
+       Di = "#ifdef ANISOTROPIC\nstruct anisotropicOutParams\n{anisotropy: f32,\nanisotropicTangent: vec3f,\nanisotropicBitangent: vec3f,\nanisotropicNormal: vec3f,\n#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)\nanisotropyMapData: vec3f\n#endif\n};\n#define pbr_inline\nfn aniso … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Yi] || (Op.b.IncludesShadersStoreWGSL[Yi] = Di);
```

#### 11. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L151-L153` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L109-L111) · [Before (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L151-L153)

```diff
-       qD = "openpbrAmbientOcclusionFunctions",
-       Dz = "fn compute_specular_occlusion(n_dot_v: f32,metallic: f32,ambient_occlusion: f32,roughness: f32)->f32\n{let specular_occlusion: f32=saturate(pow(n_dot_v+ambient_occlusion,exp2(-16.0*roughness-1.0))-1.0+ambient_occlusion);return mix(specular_occlusion,1.0,metallic*squar … [truncated]
-     pD.e.IncludesShadersStoreWGSL[qD] || (pD.e.IncludesShadersStoreWGSL[qD] = Dz);
+       Pi = "pbrBlockReflection",
+       Wi = "#ifdef REFLECTION\nstruct reflectionOutParams\n{environmentRadiance: vec4f\n,environmentIrradiance: vec3f\n#ifdef REFLECTIONMAP_3D\n,reflectionCoords: vec3f\n#else\n,reflectionCoords: vec2f\n#endif\n#ifdef SS_TRANSLUCENCY\n#ifdef USESPHERICALFROMREFLECTIONMAP\n#if !de … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Pi] || (Op.b.IncludesShadersStoreWGSL[Pi] = Wi);
```

#### 12. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L155-L162` → after: `L113-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L113-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L113-L118) · [Before (L155-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L155-L162)

```diff
-       name: qD,
-       shader: Dz
-     };
-     var wz = wD(61562),
-       pz = wD(61566);
-     const sz = "openpbrVolumeFunctions",
-       Kz = "struct OpenPBRHomogeneousVolume {extinction_coeff: vec3f, \nss_albedo: vec3f, \nmulti_scatter_color: vec3f, \nabsorption_coeff: vec3f, \nscatter_coeff: vec3f, \nanisotropy: f32, };fn computeOpenPBRTransmissionVolume(\ntransmission_color: vec3f,\ntransmission_depth: f3 … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sz] || (pD.e.IncludesShadersStoreWGSL[sz] = Kz);
+         name: Pi,
+         shader: Wi
+       },
+       Ui = "pbrBlockSheen",
+       wi = "#ifdef SHEEN\nstruct sheenOutParams\n{sheenIntensity: f32\n,sheenColor: vec3f\n,sheenRoughness: f32\n#ifdef SHEEN_LINKWITHALBEDO\n,surfaceAlbedo: vec3f\n#endif\n#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)\n,sheenAlbedoScaling: f32\n#endif\n#if defined … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Ui] || (Op.b.IncludesShadersStoreWGSL[Ui] = wi);
```

#### 13. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L164-L171` → after: `L120-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L120-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L120-L125) · [Before (L164-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L164-L171)

```diff
-       name: sz,
-       shader: Kz
-     };
-     var Lz = wD(42365),
-       cz = wD(61467);
-     const gz = "openpbrNormalMapFragment",
-       Rz = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(GEOMETRY_NORMAL)\nvar normalScale: f32=uniforms.vGeometryNormalI … [truncated]
-     pD.e.IncludesShadersStoreWGSL[gz] || (pD.e.IncludesShadersStoreWGSL[gz] = Rz);
+         name: Ui,
+         shader: wi
+       },
+       ti = "pbrBlockClearcoat",
+       Hi = "struct clearcoatOutParams\n{specularEnvironmentR0: vec3f,\nconservationFactor: f32,\nclearCoatNormalW: vec3f,\nclearCoatAARoughnessFactors: vec2f,\nclearCoatIntensity: f32,\nclearCoatRoughness: f32,\n#ifdef REFLECTION\nfinalClearCoatRadianceScaled: vec3f,\n#endif\n#if … [truncated]
+     Op.b.IncludesShadersStoreWGSL[ti] || (Op.b.IncludesShadersStoreWGSL[ti] = Hi);
```

#### 14. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L176-L178` → after: `L130-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L130-L132) · [Before (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L176-L178)

```diff
-       Uz = "openpbrBlockNormalFinal",
-       fz = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
-     pD.e.IncludesShadersStoreWGSL[Uz] || (pD.e.IncludesShadersStoreWGSL[Uz] = fz);
+       ei = "pbrBlockIridescence",
+       ui = "struct iridescenceOutParams\n{iridescenceIntensity: f32,\niridescenceIOR: f32,\niridescenceThickness: f32,\nspecularEnvironmentR0: vec3f};\n#ifdef IRIDESCENCE\nfn iridescenceBlock(\nvIridescenceParams: vec4f\n,viewAngle_: f32\n,specularEnvironmentR0: vec3f\n#ifdef IRI … [truncated]
+     Op.b.IncludesShadersStoreWGSL[ei] || (Op.b.IncludesShadersStoreWGSL[ei] = ui);
```

#### 15. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L183-L185` → after: `L137-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L137-L139) · [Before (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L183-L185)

```diff
-       Bz = "openpbrBaseLayerData",
-       Gz = "var base_color=vec3f(0.8);var base_metalness: f32=0.0;var base_diffuse_roughness: f32=0.0;var specular_weight: f32=1.0;var specular_roughness: f32=0.3;var specular_color: vec3f=vec3f(1.0);var specular_roughness_anisotropy: f32=0.0;var specular_ior: f32=1.5;var alpha:  … [truncated]
-     pD.e.IncludesShadersStoreWGSL[Bz] || (pD.e.IncludesShadersStoreWGSL[Bz] = Gz);
+       ki = "pbrBlockSubSurface",
+       mi = "struct subSurfaceOutParams\n{specularEnvironmentReflectance: vec3f,\n#ifdef SS_REFRACTION\nfinalRefraction: vec3f,\nsurfaceAlbedo: vec3f,\n#ifdef SS_LINKREFRACTIONTOTRANSPARENCY\nalpha: f32,\n#endif\nrefractionOpacity: f32,\n#endif\n#ifdef SS_TRANSLUCENCY\ntransmittan … [truncated]
+     Op.b.IncludesShadersStoreWGSL[ki] || (Op.b.IncludesShadersStoreWGSL[ki] = mi);
```

#### 16. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L190-L194` → after: `L144-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L144-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L144-L157) · [Before (L190-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L190-L194)

```diff
-     var nz = wD(61575),
-       Mz = wD(61577);
-     const Oz = "openpbrCoatLayerData",
-       Jz = "var coat_weight: f32=0.0f;var coat_color: vec3f=vec3f(1.0f);var coat_roughness: f32=0.0f;var coat_roughness_anisotropy: f32=0.0f;var coat_ior: f32=1.6f;var coat_darkening: f32=1.0f;var geometry_coat_tangent: vec2f=vec2f(1.0f,0.0f);\n#ifdef COAT_WEIGHT\nvar coatWeightF … [truncated]
-     pD.e.IncludesShadersStoreWGSL[Oz] || (pD.e.IncludesShadersStoreWGSL[Oz] = Jz);
+     var qi = cp(42794),
+       Mi = cp(61820),
+       Ci = cp(42797);
+     const Ei = "pbrBlockNormalFinal",
+       Xi = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Ei] || (Op.b.IncludesShadersStoreWGSL[Ei] = Xi);
+     const li = {
+       name: Ei,
+       shader: Xi
+     };
+     var Qi = cp(42807);
+     const Ji = "pbrBlockLightmapInit",
+       Bi = "#ifdef LIGHTMAP\nvar lightmapColor: vec4f=TEXRD(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);\n#ifdef RGBDLIGHTMAP\nlightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);\n#endif\n#ifdef GAMMALIGHTMAP\nlightmapColor=vec4f(toLinear … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Ji] || (Op.b.IncludesShadersStoreWGSL[Ji] = Bi);
```

#### 17. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L199-L201` → after: `L162-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L162-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L162-L164) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L199-L201)

```diff
-       Qz = "openpbrThinFilmLayerData",
-       Xz = "#ifdef THIN_FILM\nvar thin_film_weight: f32=uniforms.vThinFilmWeight;var thin_film_thickness: f32=uniforms.vThinFilmThickness.r*1000.0f; \nvar thin_film_ior: f32=uniforms.vThinFilmIor;\n#ifdef THIN_FILM_WEIGHT\nvar thinFilmWeightFromTexture: f32=TEXRD(thinFilmWeightSa … [truncated]
-     pD.e.IncludesShadersStoreWGSL[Qz] || (pD.e.IncludesShadersStoreWGSL[Qz] = Xz);
+       Ti = "pbrBlockGeometryInfo",
+       fi = "var NdotVUnclamped: f32=dot(normalW,viewDirectionW);var NdotV: f32=absEps(NdotVUnclamped);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var AARoughnessFactors: vec2f=getAARoughnessFactors(normalW.xyz);\n#ifdef SPECULARAA\nalphaG+=AARoughnessFactors.y;\n#en … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Ti] || (Op.b.IncludesShadersStoreWGSL[Ti] = fi);
```

#### 18. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L206-L208` → after: `L169-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L169-L171) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L206-L208)

```diff
-       Pz = "openpbrFuzzLayerData",
-       Cz = "var fuzz_weight: f32=0.0f;var fuzz_color: vec3f=vec3f(1.0f);var fuzz_roughness: f32=0.0f;\n#ifdef FUZZ\n#ifdef FUZZ_WEIGHT\nlet fuzzWeightFromTexture: vec4f=TEXRD(fuzzWeightSampler,fuzzWeightSamplerSampler,fragmentInputs.vFuzzWeightUV+uvOffset);\n#endif\n#ifdef FUZZ_C … [truncated]
-     pD.e.IncludesShadersStoreWGSL[Pz] || (pD.e.IncludesShadersStoreWGSL[Pz] = Cz);
+       ai = "pbrBlockReflectance",
+       ni = "#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)\nvar baseSpecularEnvironmentReflectance: vec3f=getReflectanceFromBRDFWithEnvLookup(vec3f(reflectanceF0),vec3f(reflectivityOut.reflectanceF90),environmentBrdf);\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPE … [truncated]
+     Op.b.IncludesShadersStoreWGSL[ai] || (Op.b.IncludesShadersStoreWGSL[ai] = ni);
```

#### 19. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L213-L215` → after: `L176-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L176-L178) · [Before (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L213-L215)

```diff
-       Tz = "openpbrAmbientOcclusionData",
-       bz = "var ambient_occlusion: vec3f=vec3f(1.0f,1.0f,1.0f);var specular_ambient_occlusion: f32=1.0f;var coat_specular_ambient_occlusion: f32=1.0f;\n#ifdef AMBIENT_OCCLUSION\nvar ambientOcclusionFromTexture: vec3f=TEXRD(ambientOcclusionSampler,ambientOcclusionSamplerSampler,fr … [truncated]
-     pD.e.IncludesShadersStoreWGSL[Tz] || (pD.e.IncludesShadersStoreWGSL[Tz] = bz);
+       gi = "pbrBlockDirectLighting",
+       Gi = "var diffuseBase: vec3f=vec3f(0.,0.,0.);\n#ifdef SS_TRANSLUCENCY\nvar diffuseTransmissionBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef SPECULARTERM\nvar specularBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef CLEARCOAT\nvar clearCoatBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#i … [truncated]
+     Op.b.IncludesShadersStoreWGSL[gi] || (Op.b.IncludesShadersStoreWGSL[gi] = Gi);
```

#### 20. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L220-L230` → after: `L183-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L183-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L183-L186) · [Before (L220-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L220-L230)

```diff
-     var dz = wD(42382);
-     const Sz = "openpbrBackgroundTransmission",
-       iz = "var slab_translucent_background: vec4f=vec4f(0.,0.,0.,1.);\n#ifdef REFRACTED_BACKGROUND\n{let refractionLOD: f32=min(transmission_roughness,0.8)*uniforms.vBackgroundRefractionInfos.x;let lodTexelSize: f32=pow(2.0f,refractionLOD-uniforms.vBackgroundRefractionInfos.x);\ … [truncated]
-     pD.e.IncludesShadersStoreWGSL[Sz] || (pD.e.IncludesShadersStoreWGSL[Sz] = iz);
-     const lz = {
-         name: Sz,
-         shader: iz
-       },
-       Wz = "openpbrEnvironmentLighting",
-       Nz = "#if defined(REFLECTION) || defined(REFRACTED_BACKGROUND)\nvar coatAbsorption=vec3f(1.0f);var coatIblFresnel: f32=0.0;if (coat_weight>0.0) {coatIblFresnel=computeDielectricIblFresnel(coatReflectance,coatGeoInfo.environmentBrdf);let hemisphere_avg_fresnel: f32=coatRefle … [truncated]
-     pD.e.IncludesShadersStoreWGSL[Wz] || (pD.e.IncludesShadersStoreWGSL[Wz] = Nz);
+     var Zi = cp(42811);
+     const zi = "pbrBlockFinalLitComponents",
+       si = "aggShadow=aggShadow/numLights;\n#if defined(ENVIRONMENTBRDF)\n#ifdef MS_BRDF_ENERGY_CONSERVATION\nvar baseSpecularEnergyConservationFactor: vec3f=getEnergyConservationFactor(vec3f(reflectanceF0),environmentBrdf);var coloredEnergyConservationFactor: vec3f=getEnergyCons … [truncated]
+     Op.b.IncludesShadersStoreWGSL[zi] || (Op.b.IncludesShadersStoreWGSL[zi] = si);
```

#### 21. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L235-L237` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L191-L193) · [Before (L235-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L235-L237)

```diff
-       yz = "openpbrDirectLightingInit",
-       kz = "#ifdef LIGHT{X}\nvar preInfo{X}: preLightingInfo;var preInfoCoat{X}: preLightingInfo;let lightColor{X}: vec4f=light{X}.vLightDiffuse;var shadow{X}: f32=1.0f;\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X} … [truncated]
-     pD.e.IncludesShadersStoreWGSL[yz] || (pD.e.IncludesShadersStoreWGSL[yz] = kz);
+       Vi = "pbrBlockFinalUnlitComponents",
+       pc = "var finalDiffuse: vec3f=diffuseBase;finalDiffuse*=surfaceAlbedo;\n#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)\nfinalDiffuse*=subSurfaceOut.refractionOpacity;\n#endif\n#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)\nf … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Vi] || (Op.b.IncludesShadersStoreWGSL[Vi] = pc);
```

#### 22. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L242-L244` → after: `L198-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L198-L200) · [Before (L242-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L242-L244)

```diff
-       ez = "openpbrDirectLighting",
-       oz = "#ifdef LIGHT{X}\n{var slab_diffuse: vec3f=vec3f(0.f,0.f,0.f);var slab_translucent: vec3f=vec3f(0.f,0.f,0.f);var slab_glossy: vec3f=vec3f(0.f,0.f,0.f);var specularFresnel: f32=0.0f;var specularColoredFresnel: vec3f=vec3f(0.f,0.f,0.f);var slab_metal: vec3f=vec3f(0.f,0.f … [truncated]
-     pD.e.IncludesShadersStoreWGSL[ez] || (pD.e.IncludesShadersStoreWGSL[ez] = oz);
+       cc = "pbrBlockFinalColorComposition",
+       Oc = "var finalColor: vec4f= vec4f(\n#ifndef UNLIT\n#ifdef REFLECTION\nfinalIrradiance +\n#endif\n#ifdef SPECULARTERM\nfinalSpecularScaled +\n#endif\n#ifdef SHEEN\nfinalSheenScaled +\n#endif\n#ifdef CLEARCOAT\nfinalClearCoatScaled +\n#endif\n#ifdef REFLECTION\nfinalRadiance … [truncated]
+     Op.b.IncludesShadersStoreWGSL[cc] || (Op.b.IncludesShadersStoreWGSL[cc] = Oc);
```

#### 23. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L249-L255` → after: `L205-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L205-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L205-L211) · [Before (L249-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L249-L255)

```diff
-     var uz = wD(42396),
-       vz = wD(42401),
-       tz = wD(61470),
-       Fz = wD(42406);
-     const Yz = "openpbrBlockPrePass",
-       Hz = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
-     pD.e.IncludesShadersStoreWGSL[Yz] || (pD.e.IncludesShadersStoreWGSL[Yz] = Hz);
+     var Ic = cp(42820),
+       Sc = cp(42825),
+       xc = cp(61822),
+       Lc = cp(42831);
+     const Yc = "pbrBlockPrePass",
+       Dc = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Yc] || (Op.b.IncludesShadersStoreWGSL[Yc] = Dc);
```

#### 24. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L260-L266` → after: `L216-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L216-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/386.js#L216-L222) · [Before (L260-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/386.js#L260-L266)

```diff
-     var Dw = wD(42414),
-       zw = wD(61476);
-     const ww = "openpbrPixelShader",
-       pw = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<openpbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n# … [truncated]
-     pD.e.ShadersStoreWGSL[ww] || (pD.e.ShadersStoreWGSL[ww] = pw);
-     const sw = [sD.c, KD.c, rD.d, LD.e, cD.b, gD.b, RD.e, AD.d, UD.d, fD.d, ID.c, hD, nD.d, MD.c, OD.c, JD.e, ED.b, QD.b, XD.d, VD.d, PD.d, CD.e, xD.b, TD.d, bD.d, jD.d, dD.d, SD.d, iD.b, lD.b, WD.b, ND.b, ZD.d, yD.c, eD, uD, vD.c, tD.d, HD, zz, wz.d, pz.c, rz, Lz.c, cz.e, Az, Iz … [truncated]
-     for (const rw of sw) pD.e.IncludesShadersStoreWGSL[rw.name] || (pD.e.IncludesShadersStoreWGSL[rw.name] = rw.shader);
+     var Pc = cp(42839),
+       Wc = cp(61824);
+     const yc = "pbrPixelShader",
+       Uc = "#define PBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<pbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n#include< … [truncated]
+     Op.b.ShadersStoreWGSL[yc] || (Op.b.ShadersStoreWGSL[yc] = Uc);
+     const wc = [op.c, Ip.e, Sp.b, xp.e, Lp.e, Yp.d, Dp.e, Ap.c, Pp.e, Wp.d, wp, vp.e, dp, ep.d, jp.d, kp.d, mp.b, Rp.e, qp.e, Mp.d, Cp.b, Ep.d, Xp.e, lp.d, Qp.b, Jp.d, Bp.e, Np.b, Tp.c, fp.d, bp.c, hp.e, ap.d, np.b, Fp.c, gp.c, Gp.c, rp.c, Zp.d, Kp, ci, Ii, Li, Ai, yi, vi, di, ji … [truncated]
+     for (const tc of wc) Op.b.IncludesShadersStoreWGSL[tc.name] || (Op.b.IncludesShadersStoreWGSL[tc.name] = tc.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/387.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/387.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100be)

#### 1. `bundles/bloxd.io/chunks/js/387.js` (Changed code · before: `L4-L11` → after: `L4-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100beR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100be) · [After (L4-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/387.js#L4-L210) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/387.js#L4-L11)

```diff
-   61605: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       textureMergerPixelShaderWGSL: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "textureMergerPixelShader",
-       KD = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
-     pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
+   61754: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "harmonicsFunctions",
+       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61799: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+ ... (191 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/388.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/388.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424a)

#### 1. `bundles/bloxd.io/chunks/js/388.js` (Changed code · before: `L4` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424a) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/388.js#L4-L31) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/388.js#L4)

```diff
-   61607: (DD, zD, wD) => {
+   61754: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "harmonicsFunctions",
+       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61875: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+ ... (12 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/388.js` (Changed code · before: `L6` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424aR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424a) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/388.js#L33) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/388.js#L6)

```diff
-       textureMergerPixelShader: () => rD
+       openpbrVertexShaderWGSL: () => zp
```

#### 3. `bundles/bloxd.io/chunks/js/388.js` (Changed code · before: `L8-L11` → after: `L35-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424aR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424a) · [After (L35-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/388.js#L35-L88) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/388.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "textureMergerPixelShader",
-       KD = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
-     pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
+     var Op = cp(40062),
+       op = cp(42496),
+       Ip = cp(42498),
+       Sp = cp(61875),
+       xp = cp(42513),
+       Lp = cp(42542),
+       Yp = cp(42520),
+       Dp = cp(61745),
+       Ap = cp(42525),
+       Pp = cp(42527),
+       Wp = cp(42531),
+       yp = cp(42536),
+       Up = cp(42550),
+       wp = cp(61754);
+     const vp = "openpbrNormalMapVertexDeclaration",
+       tp = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+ ... (38 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/389.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/389.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4)

#### 1. `bundles/bloxd.io/chunks/js/389.js` (Changed code · before: `L4` → after: `L4-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4) · [After (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/389.js#L4-L96) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/389.js#L4)

```diff
-   61614: (DD, zD, wD) => {
+   61844: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "openpbrDielectricReflectance",
+       Ip = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61849: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+ ... (77 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/389.js` (Changed code · before: `L6` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/389.js#L98) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/389.js#L6)

```diff
-       proceduralVertexShaderWGSL: () => rD
+       openpbrPixelShader: () => Dc
```

#### 3. `bundles/bloxd.io/chunks/js/389.js` (Changed code · before: `L8-L11` → after: `L100-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4) · [After (L100-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/389.js#L100-L285) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/389.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "proceduralVertexShader",
-       KD = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
-     pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062),
+       op = cp(42362),
+       Ip = cp(42365),
+       Sp = cp(42369),
+       xp = cp(61840),
+       Lp = cp(42359);
+     const Yp = "openpbrFragmentDeclaration",
+       Dp = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
+     Op.b.IncludesShadersStore[Yp] || (Op.b.IncludesShadersStore[Yp] = Dp);
+     const Ap = {
+       name: Yp,
+       shader: Dp
+     };
+     var Pp = cp(42157),
+       Wp = cp(42159),
+       yp = cp(61834),
+ ... (170 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/390.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/390.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061)

#### 1. `bundles/bloxd.io/chunks/js/390.js` (Changed code · before: `L4` → after: `L4-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061) · [After (L4-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/390.js#L4-L83) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/390.js#L4)

```diff
-   61619: (DD, zD, wD) => {
+   61883: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "openpbrDielectricReflectance",
+       Ip = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61885: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+ ... (64 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/390.js` (Changed code · before: `L6` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/390.js#L85) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/390.js#L6)

```diff
-       proceduralVertexShader: () => rD
+       openpbrPixelShaderWGSL: () => Lc
```

#### 3. `bundles/bloxd.io/chunks/js/390.js` (Changed code · before: `L8-L11` → after: `L87-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061) · [After (L87-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/390.js#L87-L266) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/390.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "proceduralVertexShader",
-       KD = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
-     pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
+     var Op = cp(40062),
+       op = cp(42711),
+       Ip = cp(42714),
+       Sp = cp(42718),
+       xp = cp(42496),
+       Lp = cp(42498),
+       Yp = cp(61875),
+       Dp = cp(42542),
+       Ap = cp(61762),
+       Pp = cp(42721),
+       Wp = cp(42742),
+       yp = cp(61766);
+     const Up = "openpbrFragmentSamplersDeclaration",
+       wp = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Up] || (Op.b.IncludesShadersStoreWGSL[Up] = wp);
+     const vp = {
+ ... (164 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/391.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/391.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982)

#### 1. `bundles/bloxd.io/chunks/js/391.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/391.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/391.js#L4)

```diff
-   61626: (DD, zD, wD) => {
+   61931: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/391.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/391.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/391.js#L6)

```diff
-       greasedLinePixelShaderWGSL: () => rD
+       textureMergerPixelShaderWGSL: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/391.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/391.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/391.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "greasedLinePixelShader",
-       KD = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAn … [truncated]
-     pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "textureMergerPixelShader",
+       Ip = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/392.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/392.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270d)

#### 1. `bundles/bloxd.io/chunks/js/392.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/392.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/392.js#L4)

```diff
-   61636: (DD, zD, wD) => {
+   61935: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/392.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/392.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/392.js#L6)

```diff
-       greasedLinePixelShader: () => rD
+       textureMergerPixelShader: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/392.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270d) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/392.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/392.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "greasedLinePixelShader",
-       KD = "precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeA … [truncated]
-     pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "textureMergerPixelShader",
+       Ip = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/393.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/393.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234)

#### 1. `bundles/bloxd.io/chunks/js/393.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/393.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/393.js#L4)

```diff
-   61643: (DD, zD, wD) => {
+   61942: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/393.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/393.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/393.js#L6-L7)

```diff
-       rebuildScenePbrPipelines: () => LD,
-       rebuildSceneRenderables: () => cD
+       proceduralVertexShaderWGSL: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/393.js` (Changed code · before: `L9-L192` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/393.js#L8-L14) · [Before (L9-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/393.js#L9-L192)

```diff
-     var pD = wD(41625),
-       sD = (DD, zD) => DD.order - zD.order,
-       KD = 8,
-       rD = DD => cD(DD);
-     async function LD(DD) {
-       let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       await gD(DD, "pbr", zD)
-     }
-     async function cD(DD) {
-       await gD(DD, void 0, !1)
-     }
-     async function gD(DD, zD, LD) {
-       const cD = DD;
-       if (!cD._built && !LD) return;
-       const gD = cD._lightListVersion ?? 0,
-         RD = cD.surface.engine,
- ... (168 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "proceduralVertexShader",
+       Ip = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/73.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/73.js` (1681 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba)

#### 1. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L4-L524` → after: `L4-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L4-L20) · [Before (L4-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L4-L524)

```diff
-   37028: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => pD
-     });
-     const pD = {
-       "AK-47": {
-         gunType: "semi_automatic",
-         scopeType: "none",
-         muzzleFlashOffsetFromGun: [-5.5, -.25, 0],
-         muzzleFlashScale: 1.5,
-         autoFireWithMouse: !0,
-         fireRate: 600,
-         cadenceMs: 75,
-         equipDelay: 24,
-         damage: 20,
-         reloadTime: 2300,
- ... (505 more removed lines; see GitHub link above)
+   9340: (pp, ip) => {
+     ip.d = 8, ip.l = function(pp, ip, cp, Op) {
+       if (!Array.isArray(pp)) return !!pp;
+       ip -= Math.floor(ip), cp -= Math.floor(cp), Op -= Math.floor(Op);
+       for (var op = 0; op < pp.length; op += 6)
+         if (ip >= pp[op] && ip < pp[op + 3] && cp >= pp[op + 1] && cp < pp[op + 4] && Op >= pp[op + 2] && Op < pp[op + 5]) return !0;
+       return !1
+     }, ip.h = function(pp) {
+       for (var ip = [], cp = 0; cp < pp.length; cp++) {
+         var Op = pp[cp];
+         if (2 !== Op.length || 3 !== Op[0].length || 3 !== Op[1].length) throw new Error("Subvoxel boxes must contain two three-dimensional bounds");
+         for (var op = 0; op < 3; op++) {
+           var Ip = Op[0][op],
+             Sp = Op[1][op];
+           if (!Number.isInteger(Ip) || !Number.isInteger(Sp) || Ip < 0 || Sp > 8 || Ip >= Sp) throw new Error("Subvoxel bounds must be integers satisfying 0 <= start < end <= 8");
+           ip[6 * cp + op] = Ip / 8, ip[6 * cp + op + 3] = Sp / 8
+ ... (1 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L526-L527` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L22-L23) · [Before (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L526-L527)

```diff
-     };
-     for (const sD of Object.values(pD)) sD.msPerRound = 60 / sD.fireRate * 1e3, sD.msPerRoundTouchScreen = void 0 !== sD.fireRateWithHeldTouch ? 60 / sD.fireRateWithHeldTouch * 1e3 : sD.msPerRound, sD.cadenceMs ??= sD.msPerRound, sD.altYVelocityInaccuracy ??= sD.yVelocityInaccura … [truncated]
+       return ip
+     }
```

#### 3. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L529` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L25) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L529)

```diff
-   37035: (DD, zD, wD) => {
+   9414: (pp, ip, cp) => {
```

#### 4. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L533-L534` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L32-L33) · [Before (L533-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L533-L534)

```diff
-       h: () => gD,
-       k: () => RD,
+       i: () => Lp,
+       l: () => vp,
```

#### 5. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L536` → after: `L35-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L35-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L35-L39) · [Before (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L536)

```diff
-       p: () => GD
+       n: () => Sp,
+       o: () => Ip,
+       r: () => Wp,
+       v: () => Up,
+       z: () => yp
```

#### 6. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L538-L541` → after: `L41-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L41-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L41-L46) · [Before (L538-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L538-L541)

```diff
-     var pD = wD(351),
-       sD = wD(608),
-       KD = wD(353);
-     const rD = ["", "|meta|charging2", "|meta|charging3", "|meta|charging4"];
+     const Op = 39 == cp.j ? ["Conveyor Belt", "Splitter", "Sorting Gate", "Belt Loader", "Fast Belt", "Belt Lift", "Belt Drop", "Belt Tunnel", "Express Belt", "Fast Loader"] : null,
+       op = .002,
+       Ip = 2,
+       Sp = 3,
+       xp = .5,
+       Lp = 200;
```

#### 7. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L543-L544` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L48-L50) · [Before (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L543-L544)

```diff
-     function LD(DD, zD) {
-       return "" === zD ? DD : `${DD} ${zD}`
+     function Yp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : op;
+       return Math.max(0, Math.min((cp - pp) * Op, ip))
```

#### 8. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L547-L552` → after: `L53-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L53-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L53-L61) · [Before (L547-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L547-L552)

```diff
-     function cD(DD, zD, wD, sD) {
-       const KD = DD.replace((0, pD.ve)(zD.material), (0, pD.ve)(wD));
-       if (zD.kind === sD || "" === zD.kind) return KD;
-       const rD = (0, pD.ve)(zD.kind);
-       if (!KD.includes(rD)) throw new Error(`Cannot name assets for "${LD(wD,sD)}": "${KD}" has no "${rD}" to replace`);
-       return KD.replace(rD, (0, pD.ve)(sD))
+     function Dp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : op;
+       const Ip = [];
+       let Sp = ip;
+       for (const op of pp) {
+         const pp = Yp(op.at, Sp, cp, Op);
+         Ip.push(pp), Sp = pp - xp
+       }
+       return Ip
```

#### 9. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L555-L559` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L64-L66) · [Before (L555-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L555-L559)

```diff
-     function gD(DD) {
-       return DD.creativeKinds ? DD.creativeKinds.flatMap((zD => DD.materials.map((DD => LD(DD, zD))))) : DD.materials.flatMap((zD => DD.kinds.filter((zD => {
-         var wD;
-         return !(null !== (wD = DD.hiddenKinds) && void 0 !== wD && wD.includes(zD))
-       })).map((DD => LD(zD, DD)))))
+     function Ap(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : op;
+       return 0 === pp.length ? 1 / 0 : pp[0].at + ip / cp
```

#### 10. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L562-L563` → after: `L69-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L69-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L69-L76) · [Before (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L562-L563)

```diff
-     function RD(DD, zD) {
-       return DD.flatMap((DD => DD.kinds.includes(zD) ? DD.materials.map((DD => LD(DD, zD))) : []))
+     function Pp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : op,
+         Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+       const Sp = Dp(pp, ip, cp, Op),
+         [xp] = pp.splice(Ip, 1);
+       return Sp.splice(Ip, 1), pp.forEach(((pp, ip) => {
+         pp.at = cp - Sp[ip] / Op
+       })), xp
```

#### 11. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L565-L578` → after: `L78-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L78-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L78-L83) · [Before (L565-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L565-L578)

```diff
-     const AD = {
-       name: "diamondVariants",
-       materials: KD.m,
-       kinds: KD.j.map((DD => DD.trimStart())),
-       inheritsFrom: DD => ({
-         material: "Diamond",
-         kind: DD
-       }),
-       hiddenKinds: ["Crossbow Charged"],
-       creativeKinds: ["", "Fragment", "Pickaxe", "Axe", "Spade", "Hoe", "Sword", "Bow", "Crossbow", "Spear", "Dagger", "Club", "Mace", "Whip", "Boomerang", "Helmet", "Chestplate", "Gauntlets", "Leggings", "Boots"],
-       description: (DD, zD) => {
-         if ("Fragment" === zD) return {
-           translationKey: "Magmasteel" === DD ? "item:forgeFragmentDescription" : "item:elementalShardDescription"
-         }
+ 
+     function Wp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : op;
+       for (let op = Ap(pp, ip, Op); op <= cp; op = Ap(pp, ip, Op)) {
+         const cp = Pp(pp, ip, op, Op);
+         cp.at = op, pp.push(cp)
```

#### 12. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L580` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L85) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L580)

```diff
-     };
+     }
```

#### 13. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L582` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L87) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L582)

```diff
-     function UD(DD) {
+     function yp(pp, ip, cp) {
```

#### 14. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L584` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L89-L90) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L584)

```diff
-         translationKey: `item:${(0,pD.ue)(DD)}`
+         name: pp,
+         at: cp - ip / (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : op)
```

#### 15. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L588-L595` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L131-L132) · [Before (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L588-L595)

```diff
-         name: "decorativeArmour",
-         materials: KD.f,
-         kinds: sD.e,
-         inheritsFrom: DD => ({
-           material: "Diamond",
-           kind: DD
-         }),
-         displayName: UD
+         "Belt Lift": 1,
+         "Belt Drop": -1
```

#### 16. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L598-L607` → after: `L154-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L154-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L154-L156) · [Before (L598-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L598-L607)

```diff
-         name: "keys",
-         materials: ["Wooden", "Stone", "Iron", "Gold", "Diamond"],
-         kinds: ["Key"],
-         metadata: () => ({
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         }),
-         displayName: UD
+         leftRight: "",
+         leftFront: "|leftFront",
+         frontRight: "|frontRight"
```

#### 17. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L610-L611` → after: `L159-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L159-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L159-L161) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L610-L611)

```diff
-         Staff: "Club",
-         Shard: "Fragment"
+         leftRight: ["right", "left"],
+         leftFront: ["left", "front"],
+         frontRight: ["front", "right"]
```

#### 18. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L613-L631` → after: `L163-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L163-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L163-L203) · [Before (L613-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L613-L631)

```diff
-       GD = [AD, fD, {
-         name: "elemental",
-         materials: KD.n,
-         kinds: ["Shard", "Sword", "Bow", "Crossbow", "Crossbow Charged", "Spear", "Dagger", "Club", "Mace", "Whip", "Staff", ...sD.e],
-         inheritsFrom: DD => {
-           var zD;
-           return {
-             material: "Diamond",
-             kind: null !== (zD = BD[DD]) && void 0 !== zD ? zD : DD
-           }
-         },
-         hiddenKinds: ["Crossbow Charged"],
-         displayName: UD,
-         description: (DD, zD) => {
-           if ("Shard" === zD) return {
-             translationKey: "Sanguine" === DD || "Astral" === DD ? "item:forgeFragmentDescription" : "item:elementalShardDescription"
- ... (3 more removed lines; see GitHub link above)
+       Up = "|right";
+ 
+     function wp(pp) {
+       return pp.split("|")[0] !== Ap ? null : pp.endsWith(Wp.leftFront) ? "leftFront" : pp.endsWith(Wp.frontRight) ? "frontRight" : "leftRight"
+     }
+ 
+     function vp(pp, ip, cp) {
+       return function(pp) {
+         const ip = wp(pp);
+         return null === ip ? [] : yp[ip]
+       }(pp).map((pp => "right" === pp ? [cp, -ip] : "left" === pp ? [-cp, ip] : [ip, cp]))
+     }
+ 
+     function tp(pp) {
+       return pp.split("|")[0] === Pp && pp.endsWith(Up)
+     }
+ ... (25 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L633` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L205) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L633)

```diff
-   37015: (DD, zD, wD) => {
+   9338: (pp, ip, cp) => {
```

#### 20. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L636` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L209-L210) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L636)

```diff
-       g: () => OD,
+       e: () => Tp,
+       f: () => np,
```

#### 21. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L639-L641` → after: `L213-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L213-L215) · [Before (L639-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L639-L641)

```diff
-       m: () => VD,
-       o: () => CD,
-       s: () => QD
+       k: () => hp,
+       l: () => lp,
+       p: () => Xp
```

#### 22. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L643-L656` → after: `L217-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L217-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L217-L239) · [Before (L643-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L643-L656)

```diff
-     var pD = wD(351),
-       sD = wD(9236),
-       KD = wD(4486),
-       rD = wD(9198),
-       LD = wD(9220),
-       cD = wD(37024),
-       gD = wD(37035),
-       RD = wD(37037),
-       AD = wD(37043);
-     const UD = 16,
-       fD = {
-         comboWindowMs: 800,
-         comboMultipliers: [.5, 2 / 3, 5 / 6, 1],
-         backstabAngle: 2 * Math.PI / 3
+     var Op = cp(9340);
+     if (39 == cp.j) var op = cp(209);
+     var Ip = cp(9348),
+       Sp = cp(9427),
+       xp = cp(9429),
+       Lp = cp(9368),
+       Yp = cp(3289),
+       Dp = cp(337),
+       Ap = cp(4543),
+       Pp = cp(9385),
+       Wp = cp(636),
+       yp = cp(4334),
+       Up = cp(9359),
+       wp = cp(9404);
+     if (39 == cp.j) var vp = cp(9436);
+     var tp = cp(9438),
+ ... (7 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L658-L659` → after: `L241-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L241-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L241-L610) · [Before (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L658-L659)

```diff
-       ID = {
-         "Wood Pickaxe": {
+       itemTexture: "slime_trail",
+       solid: !1,
+       model: "rotatable",
+       modelScale: 8,
+       customModelInfo: {
+         yOffset: -.5,
+         unlit: !0,
+         yRotOffset: -Math.PI / 2
+       },
+       blockModel: "slime_trail",
+       heldItemGlb: "Slime Trail",
+       unlitStandaloneMesh: !0,
+       Jy: [14, 8, 11],
+       drops: null,
+       specialToolDrop: {
+         tool: [...Dp.ee],
+ ... (354 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L661` → after: `L612-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L612-L613) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L661)

```diff
-             translationKey: "item:woodPickaxe"
+             translationKey: "item:colouredChalkBricksStairs",
+             params: ip
```

#### 25. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L669` → after: `L616-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L616-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L616-L617) · [Before (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L669)

```diff
-             translationKey: "item:pickaxeDescription"
+             translationKey: "item:colouredChalkBricksStairsDescription",
+             params: ip
```

#### 26. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L671-L674` → after: `L619-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L619-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L619-L626) · [Before (L671-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L671-L674)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 2,
-           level: 1
+           ttb: 850,
+           textureInfo: `chalk_bricks_${(0,Dp.se)(pp)}`,
+           harvestType: "rock"
+         }
+       }))],
+       mp = {
+         displayName: {
+           translationKey: "item:chest"
```

#### 27. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L676-L691` → after: `L628-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L628-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L628-L635) · [Before (L676-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L676-L691)

```diff
-         "Stone Pickaxe": {
-           displayName: {
-             translationKey: "item:stonePickaxe"
-           },
-           type: "Tool",
-           textureInfo: "stone_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 22,
-           description: {
-             translationKey: "item:pickaxeDescription"
-           },
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 3.5,
-           level: 2
+         ttb: 3e3,
+         harvestType: "wood"
+       },
+       Rp = {
+         Unloaded: {
+           ttb: 100,
+           textureInfo: "unloaded",
+           harvestType: "granule"
```

#### 28. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L693` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L637) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L693)

```diff
-         "Iron Pickaxe": {
+         Dirt: {
```

#### 29. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L695-L703` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L639) · [Before (L695-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L695-L703)

```diff
-             translationKey: "item:ironPickaxe"
-           },
-           type: "Tool",
-           textureInfo: "iron_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 27,
-           description: {
-             translationKey: "item:pickaxeDescription"
+             translationKey: "item:dirt"
```

#### 30. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L705-L708` → after: `L641-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L641-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L641-L643) · [Before (L705-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L705-L708)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 6,
-           level: 3
+           ttb: 600,
+           textureInfo: "dirt",
+           harvestType: "granule"
```

#### 31. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L710` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L645) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L710)

```diff
-         "Gold Pickaxe": {
+         "Messy Dirt": {
```

#### 32. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L712` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L647) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L712)

```diff
-             translationKey: "item:goldPickaxe"
+             translationKey: "item:messyDirt"
```

#### 33. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L714-L725` → after: `L649-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L649-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L649-L651) · [Before (L714-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L714-L725)

```diff
-           type: "Tool",
-           textureInfo: "golden_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 30,
-           description: {
-             translationKey: "item:pickaxeDescription"
-           },
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 7,
-           level: 4
+           ttb: 600,
+           textureInfo: "coarse_dirt",
+           harvestType: "granule"
```

#### 34. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L727` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L653) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L727)

```diff
-         "Diamond Pickaxe": {
+         "Grass Block": {
```

#### 35. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L729-L737` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L655) · [Before (L729-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L729-L737)

```diff
-             translationKey: "item:diamondPickaxe"
-           },
-           type: "Tool",
-           textureInfo: "diamond_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 32,
-           description: {
-             translationKey: "item:pickaxeDescription"
+             translationKey: "item:grassBlock"
```

#### 36. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L739-L742` → after: `L657-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L657-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L657-L664) · [Before (L739-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L739-L742)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 8,
-           level: 5
+           ttb: 720,
+           textureInfo: ["grass_block_side", "grass_top", "dirt"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
```

#### 37. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L744` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L666) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L744)

```diff
-         "Moonstone Pickaxe": {
+         Sand: {
```

#### 38. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L746-L754` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L668) · [Before (L746-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L746-L754)

```diff
-             translationKey: "item:moonstonePickaxe"
-           },
-           type: "Tool",
-           textureInfo: "moonstone_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 32,
-           description: {
-             translationKey: "item:moonstonePickaxeDescription"
+             translationKey: "item:sand"
```

#### 39. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L756-L759` → after: `L670-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L670-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L670-L676) · [Before (L756-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L756-L759)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 9,
-           level: 5
+           ttb: 600,
+           textureInfo: "sand",
+           harvestType: "granule",
+           soundType: {
+             break: "sand",
+             place: "sand"
+           }
```

#### 40. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L761` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L678) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L761)

```diff
-         "Golem Pickaxe": {
+         Clay: {
```

#### 41. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L763-L771` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L680) · [Before (L763-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L763-L771)

```diff
-             translationKey: "item:golemPickaxe"
-           },
-           type: "Tool",
-           textureInfo: "golem_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 32,
-           description: {
-             translationKey: "item:golemPickaxeDescription"
+             translationKey: "item:clay"
```

#### 42. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L773-L776` → after: `L682-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L682-L684) · [Before (L773-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L773-L776)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 8,
-           level: 5
+           ttb: 720,
+           textureInfo: "clay",
+           harvestType: "granule"
```

#### 43. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L778` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L686) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L778)

```diff
-         "Wood Axe": {
+         Gravel: {
```

#### 44. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L780-L788` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L688) · [Before (L780-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L780-L788)

```diff
-             translationKey: "item:woodAxe"
-           },
-           type: "Tool",
-           textureInfo: "wooden_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 20,
-           description: {
-             translationKey: "item:axeDescription"
+             translationKey: "item:gravel"
```

#### 45. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L790-L793` → after: `L690-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L690-L692) · [Before (L790-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L790-L793)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 2,
-           level: 1
+           ttb: 720,
+           textureInfo: "gravel",
+           harvestType: "granule"
```

#### 46. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L795` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L694) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L795)

```diff
-         "Stone Axe": {
+         Snow: {
```

#### 47. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L797-L805` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L696) · [Before (L797-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L797-L805)

```diff
-             translationKey: "item:stoneAxe"
-           },
-           type: "Tool",
-           textureInfo: "stone_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 24,
-           description: {
-             translationKey: "item:axeDescription"
+             translationKey: "item:snow"
```

#### 48. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L807-L810` → after: `L698-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L698-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L698-L704) · [Before (L807-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L807-L810)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 3.5,
-           level: 2
+           ttb: 600,
+           textureInfo: "snow",
+           harvestType: "granule",
+           soundType: {
+             break: "snow",
+             place: "snow"
+           }
```

#### 49. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L812` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L706) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L812)

```diff
-         "Iron Axe": {
+         "Maple Log": {
```

#### 50. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L814-L822` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L708) · [Before (L814-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L814-L822)

```diff
-             translationKey: "item:ironAxe"
-           },
-           type: "Tool",
-           textureInfo: "iron_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 31,
-           description: {
-             translationKey: "item:axeDescription"
+             translationKey: "item:mapleLog"
```

#### 51. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L824-L827` → after: `L710-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L710-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L710-L712) · [Before (L824-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L824-L827)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 6,
-           level: 3
+           ttb: 2400,
+           textureInfo: "log_maple",
+           harvestType: "wood"
```

#### 52. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L829` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L714) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L829)

```diff
-         "Gold Axe": {
+         "Pine Log": {
```

#### 53. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L831` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L716) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L831)

```diff
-             translationKey: "item:goldAxe"
+             translationKey: "item:pineLog"
```

#### 54. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L833-L844` → after: `L718-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L718-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L718-L720) · [Before (L833-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L833-L844)

```diff
-           type: "Tool",
-           textureInfo: "golden_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 33,
-           description: {
-             translationKey: "item:axeDescription"
-           },
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 7,
-           level: 4
+           ttb: 2400,
+           textureInfo: "log_pine",
+           harvestType: "wood"
```

#### 55. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L846` → after: `L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L722) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L846)

```diff
-         "Diamond Axe": {
+         "Plum Log": {
```

#### 56. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L848-L856` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L724) · [Before (L848-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L848-L856)

```diff
-             translationKey: "item:diamondAxe"
-           },
-           type: "Tool",
-           textureInfo: "diamond_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 36,
-           description: {
-             translationKey: "item:axeDescription"
+             translationKey: "item:plumLog"
```

#### 57. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L858-L861` → after: `L726-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L726-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L726-L728) · [Before (L858-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L858-L861)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 8,
-           level: 5
+           ttb: 2400,
+           textureInfo: "log_plum",
+           harvestType: "wood"
```

#### 58. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L863` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L730) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L863)

```diff
-         "Moonstone Axe": {
+         "Cedar Log": {
```

#### 59. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L865-L889` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L732) · [Before (L865-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L865-L889)

```diff
-             translationKey: "item:moonstoneAxe"
-           },
-           type: "Tool",
-           textureInfo: "moonstone_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 36,
-           description: {
-             translationKey: "item:moonstoneAxeDescription"
-           },
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 9,
-           level: 5,
-           lumberjackHeight: 6
-         },
- ... (9 more removed lines; see GitHub link above)
+             translationKey: "item:cedarLog"
```

#### 60. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L891-L894` → after: `L734-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L734-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L734-L736) · [Before (L891-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L891-L894)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 6,
-           level: 3
+           ttb: 2400,
+           textureInfo: "log_cedar",
+           harvestType: "wood"
```

#### 61. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L896` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L738) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L896)

```diff
-         "Wood Spade": {
+         "Aspen Log": {
```

#### 62. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L898-L906` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L740) · [Before (L898-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L898-L906)

```diff
-             translationKey: "item:woodSpade"
-           },
-           type: "Tool",
-           textureInfo: "wooden_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 15,
-           description: {
-             translationKey: "item:spadeDescription"
+             translationKey: "item:aspenLog"
```

#### 63. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L908-L911` → after: `L742-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L742-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L742-L744) · [Before (L908-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L908-L911)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 2,
-           level: 1
+           ttb: 2400,
+           textureInfo: "log_aspen",
+           harvestType: "wood"
```

#### 64. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L913` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L746) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L913)

```diff
-         "Stone Spade": {
+         "Jungle Log": {
```

#### 65. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L915-L923` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L748) · [Before (L915-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L915-L923)

```diff
-             translationKey: "item:stoneSpade"
-           },
-           type: "Tool",
-           textureInfo: "stone_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 19,
-           description: {
-             translationKey: "item:spadeDescription"
+             translationKey: "item:jungleLog"
```

#### 66. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L925-L928` → after: `L750-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L750-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L750-L752) · [Before (L925-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L925-L928)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 3.5,
-           level: 2
+           ttb: 2400,
+           textureInfo: "log_jungle",
+           harvestType: "wood"
```

#### 67. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L930` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L754) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L930)

```diff
-         "Iron Spade": {
+         "Maple Wood Planks": {
```

#### 68. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L932-L940` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L756) · [Before (L932-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L932-L940)

```diff
-             translationKey: "item:ironSpade"
-           },
-           type: "Tool",
-           textureInfo: "iron_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 24,
-           description: {
-             translationKey: "item:spadeDescription"
+             translationKey: "item:mapleWoodPlanks"
```

#### 69. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L942-L945` → after: `L758-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L758-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L758-L760) · [Before (L942-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L942-L945)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 6,
-           level: 3
+           ttb: 1800,
+           textureInfo: "planks_maple",
+           harvestType: "wood"
```

#### 70. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L947` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L762) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L947)

```diff
-         "Gold Spade": {
+         "Aspen Wood Planks": {
```

#### 71. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L949` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L764) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L949)

```diff
-             translationKey: "item:goldSpade"
+             translationKey: "item:aspenWoodPlanks"
```

#### 72. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L951-L962` → after: `L766-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L766-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L766-L768) · [Before (L951-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L951-L962)

```diff
-           type: "Tool",
-           textureInfo: "golden_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 26,
-           description: {
-             translationKey: "item:spadeDescription"
-           },
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 7,
-           level: 4
+           ttb: 1800,
+           textureInfo: "planks_aspen",
+           harvestType: "wood"
```

#### 73. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L964` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L770) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L964)

```diff
-         "Diamond Spade": {
+         "Plum Wood Planks": {
```

#### 74. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L966-L974` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L772) · [Before (L966-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L966-L974)

```diff
-             translationKey: "item:diamondSpade"
-           },
-           type: "Tool",
-           textureInfo: "diamond_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 28,
-           description: {
-             translationKey: "item:spadeDescription"
+             translationKey: "item:plumWoodPlanks"
```

#### 75. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L976-L979` → after: `L774-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L774-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L774-L776) · [Before (L976-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L976-L979)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 8,
-           level: 5
+           ttb: 1800,
+           textureInfo: "planks_plum",
+           harvestType: "wood"
```

#### 76. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L981` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L778) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L981)

```diff
-         "Wood Sword": {
+         "Jungle Wood Planks": {
```

#### 77. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L983-L991` → after: `L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L780) · [Before (L983-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L983-L991)

```diff
-             translationKey: "item:woodSword"
-           },
-           type: "Tool",
-           textureInfo: "wooden_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 22,
-           description: {
-             translationKey: "item:swordDescription"
+             translationKey: "item:jungleWoodPlanks"
```

#### 78. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L993-L996` → after: `L782-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L782-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L782-L784) · [Before (L993-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L993-L996)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 1
+           ttb: 1800,
+           textureInfo: "planks_jungle",
+           harvestType: "wood"
```

#### 79. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L998` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L786) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L998)

```diff
-         "Stone Sword": {
+         "Pine Wood Planks": {
```

#### 80. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1000` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L788) · [Before (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1000)

```diff
-             translationKey: "item:stoneSword"
+             translationKey: "item:pineWoodPlanks"
```

#### 81. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1002-L1013` → after: `L790-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L790-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L790-L792) · [Before (L1002-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1002-L1013)

```diff
-           type: "Tool",
-           textureInfo: "stone_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 27,
-           description: {
-             translationKey: "item:swordDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 2
+           ttb: 1800,
+           textureInfo: "planks_pine",
+           harvestType: "wood"
```

#### 82. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1015` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L794) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1015)

```diff
-         "Iron Sword": {
+         "Cedar Wood Planks": {
```

#### 83. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1017-L1025` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L796) · [Before (L1017-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1017-L1025)

```diff
-             translationKey: "item:ironSword"
-           },
-           type: "Tool",
-           textureInfo: "iron_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 34,
-           description: {
-             translationKey: "item:swordDescription"
+             translationKey: "item:cedarWoodPlanks"
```

#### 84. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1027-L1030` → after: `L798-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L798-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L798-L800) · [Before (L1027-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1027-L1030)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 3
+           ttb: 1800,
+           textureInfo: "planks_cedar",
+           harvestType: "wood"
```

#### 85. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1032` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L802) · [Before (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1032)

```diff
-         "Gold Sword": {
+         "Barkless Maple Log": {
```

#### 86. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1034` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L804) · [Before (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1034)

```diff
-             translationKey: "item:goldSword"
+             translationKey: "item:barklessMapleLog"
```

#### 87. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1036-L1047` → after: `L806-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L806-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L806-L808) · [Before (L1036-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1036-L1047)

```diff
-           type: "Tool",
-           textureInfo: "golden_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 37,
-           description: {
-             translationKey: "item:swordDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 4
+           ttb: 2e3,
+           textureInfo: "stripped_maple_log",
+           harvestType: "wood"
```

#### 88. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1049` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L810) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1049)

```diff
-         "Diamond Sword": {
+         "Barkless Aspen Log": {
```

#### 89. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1051-L1059` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L812) · [Before (L1051-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1051-L1059)

```diff
-             translationKey: "item:diamondSword"
-           },
-           type: "Tool",
-           textureInfo: "diamond_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 40,
-           description: {
-             translationKey: "item:swordDescription"
+             translationKey: "item:barklessAspenLog"
```

#### 90. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1061-L1064` → after: `L814-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L814-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L814-L816) · [Before (L1061-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1061-L1064)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           ttb: 2e3,
+           textureInfo: "stripped_aspen_log",
+           harvestType: "wood"
```

#### 91. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1066` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L818) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1066)

```diff
-         "Knight Sword": {
+         "Barkless Plum Log": {
```

#### 92. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1068` → after: `L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L820) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1068)

```diff
-             translationKey: "item:knightSword"
+             translationKey: "item:barklessPlumLog"
```

#### 93. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1070-L1082` → after: `L822-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L822-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L822-L824) · [Before (L1070-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1070-L1082)

```diff
-           type: "Tool",
-           textureInfo: "knight_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 43,
-           knockbackHorizontalScalar: 1.7,
-           description: {
-             translationKey: "item:knightSwordDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           ttb: 2e3,
+           textureInfo: "stripped_plum_log",
+           harvestType: "wood"
```

#### 94. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1084` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L826) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1084)

```diff
-         "Wood Hoe": {
+         "Barkless Jungle Log": {
```

#### 95. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1086-L1094` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L828) · [Before (L1086-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1086-L1094)

```diff
-             translationKey: "item:woodHoe"
-           },
-           type: "Tool",
-           textureInfo: "wooden_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 15,
-           description: {
-             translationKey: "item:hoeDescription"
+             translationKey: "item:barklessJungleLog"
```

#### 96. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1096-L1099` → after: `L830-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L830-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L830-L832) · [Before (L1096-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1096-L1099)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 2,
-           level: 1
+           ttb: 2e3,
+           textureInfo: "stripped_jungle_log",
+           harvestType: "wood"
```

#### 97. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1101` → after: `L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L834) · [Before (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1101)

```diff
-         "Stone Hoe": {
+         "Barkless Pine Log": {
```

#### 98. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1103-L1111` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L836) · [Before (L1103-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1103-L1111)

```diff
-             translationKey: "item:stoneHoe"
-           },
-           type: "Tool",
-           textureInfo: "stone_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 19,
-           description: {
-             translationKey: "item:hoeDescription"
+             translationKey: "item:barklessPineLog"
```

#### 99. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1113-L1116` → after: `L838-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L838-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L838-L840) · [Before (L1113-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1113-L1116)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 2.5,
-           level: 2
+           ttb: 2e3,
+           textureInfo: "stripped_pine_log",
+           harvestType: "wood"
```

#### 100. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1118` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L842) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1118)

```diff
-         "Iron Hoe": {
+         "Barkless Cedar Log": {
```

#### 101. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1120` → after: `L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L844) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1120)

```diff
-             translationKey: "item:ironHoe"
+             translationKey: "item:barklessCedarLog"
```

#### 102. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1122-L1133` → after: `L846-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L846-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L846-L848) · [Before (L1122-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1122-L1133)

```diff
-           type: "Tool",
-           textureInfo: "iron_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 24,
-           description: {
-             translationKey: "item:hoeDescription"
-           },
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 3.25,
-           level: 3
+           ttb: 2e3,
+           textureInfo: "stripped_cedar_log",
+           harvestType: "wood"
```

#### 103. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1135-L1150` → after: `L850-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L850-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L850-L853) · [Before (L1135-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1135-L1150)

```diff
-         "Gold Hoe": {
-           displayName: {
-             translationKey: "item:goldHoe"
-           },
-           type: "Tool",
-           textureInfo: "golden_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 26,
-           description: {
-             translationKey: "item:hoeDescription"
-           },
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 3.75,
-           level: 4
+         free_placeholder2: {
+           ttb: 1800,
+           textureInfo: "messy_stone",
+           harvestType: "rock"
```

#### 104. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1152` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L855) · [Before (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1152)

```diff
-         "Diamond Hoe": {
+         Stone: {
```

#### 105. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1154` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L857) · [Before (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1154)

```diff
-             translationKey: "item:diamondHoe"
+             translationKey: "item:stone"
```

#### 106. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1156-L1167` → after: `L859-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L859-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L859-L866) · [Before (L1156-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1156-L1167)

```diff
-           type: "Tool",
-           textureInfo: "diamond_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 28,
-           description: {
-             translationKey: "item:hoeDescription"
-           },
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 4.25,
-           level: 5
+           ttb: 1800,
+           textureInfo: "stone",
+           harvestType: "rock",
+           drops: "Messy Stone",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Stone"
+           }
```

#### 107. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1169` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L868) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1169)

```diff
-         Flashlight: {
+         "Messy Stone": {
```

#### 108. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1171` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L870) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1171)

```diff
-             translationKey: "item:flashlight"
+             translationKey: "item:messyStone"
```

#### 109. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1173-L1185` → after: `L872-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L872-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L872-L879) · [Before (L1173-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1173-L1185)

```diff
-           description: {
-             translationKey: "item:flashlightDescription"
-           },
-           type: "Item",
-           textureInfo: "flashlight",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           xI: [15, 15, 15],
-           spotlightRange: 20,
-           spotlightConeAngle: 60,
-           firstPersonHeldRotationOffset: [-.34, -.014, .081],
-           thirdPersonHeldRotationOffset: [Math.PI / 2, 0, 0]
+           ttb: 1800,
+           textureInfo: "messy_stone",
+           harvestType: "rock"
+         },
+         free_placeholder: {
+           ttb: 1800,
+           textureInfo: "messy_stone",
+           harvestType: "rock"
```

#### 110. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1187` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L881) · [Before (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1187)

```diff
-         "Mining Helmet": {
+         "Smooth Stone": {
```

#### 111. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1189` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L883) · [Before (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1189)

```diff
-             translationKey: "item:miningHelmet"
+             translationKey: "item:smoothStone"
```

#### 112. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1191-L1202` → after: `L885-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L885-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L885-L887) · [Before (L1191-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1191-L1202)

```diff
-           description: {
-             translationKey: "item:miningHelmetDescription"
-           },
-           type: "Armour",
-           textureInfo: "mining_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07,
-           xI: [15, 14, 11],
-           spotlightRange: 12,
-           spotlightConeAngle: 90
+           ttb: 1800,
+           textureInfo: "smooth_stone",
+           harvestType: "rock"
```

#### 113. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1204` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L889) · [Before (L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1204)

```diff
-         "Wood Helmet": {
+         Diorite: {
```

#### 114. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1206` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L891) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1206)

```diff
-             translationKey: "item:woodHelmet"
+             translationKey: "item:diorite"
```

#### 115. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1208-L1213` → after: `L893-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L893-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L893-L895) · [Before (L1208-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1208-L1213)

```diff
-           type: "Armour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 1800,
+           textureInfo: "stone_diorite",
+           harvestType: "rock"
```

#### 116. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1215` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L897) · [Before (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1215)

```diff
-         "Iron Helmet": {
+         "Smooth Diorite": {
```

#### 117. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1217` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L899) · [Before (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1217)

```diff
-             translationKey: "item:ironHelmet"
+             translationKey: "item:smoothDiorite"
```

#### 118. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1219-L1224` → after: `L901-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L901-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L901-L903) · [Before (L1219-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1219-L1224)

```diff
-           type: "Armour",
-           textureInfo: "iron_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .09
+           ttb: 1800,
+           textureInfo: "stone_diorite_smooth",
+           harvestType: "rock"
```

#### 119. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1226` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L905) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1226)

```diff
-         "Gold Helmet": {
+         Andesite: {
```

#### 120. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1228` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L907) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1228)

```diff
-             translationKey: "item:goldHelmet"
+             translationKey: "item:andesite"
```

#### 121. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1230-L1235` → after: `L909-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L909-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L909-L911) · [Before (L1230-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1230-L1235)

```diff
-           type: "Armour",
-           textureInfo: "golden_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .11
+           ttb: 1800,
+           textureInfo: "stone_andesite",
+           harvestType: "rock"
```

#### 122. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1237` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L913) · [Before (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1237)

```diff
-         "Diamond Helmet": {
+         "Smooth Andesite": {
```

#### 123. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1239` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L915) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1239)

```diff
-             translationKey: "item:diamondHelmet"
+             translationKey: "item:smoothAndesite"
```

#### 124. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1241-L1246` → after: `L917-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L917-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L917-L919) · [Before (L1241-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1241-L1246)

```diff
-           type: "Armour",
-           textureInfo: "diamond_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 1800,
+           textureInfo: "stone_andesite_smooth",
+           harvestType: "rock"
```

#### 125. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1248` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L921) · [Before (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1248)

```diff
-         "Wood Chestplate": {
+         Granite: {
```

#### 126. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1250` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L923) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1250)

```diff
-             translationKey: "item:woodChestplate"
+             translationKey: "item:granite"
```

#### 127. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1252-L1257` → after: `L925-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L925-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L925-L927) · [Before (L1252-L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1252-L1257)

```diff
-           type: "Armour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 1800,
+           textureInfo: "stone_granite",
+           harvestType: "rock"
```

#### 128. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1259` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L929) · [Before (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1259)

```diff
-         "Iron Chestplate": {
+         "Smooth Granite": {
```

#### 129. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1261` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L931) · [Before (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1261)

```diff
-             translationKey: "item:ironChestplate"
+             translationKey: "item:smoothGranite"
```

#### 130. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1263-L1268` → after: `L933-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L933-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L933-L935) · [Before (L1263-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1263-L1268)

```diff
-           type: "Armour",
-           textureInfo: "iron_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .18
+           ttb: 1800,
+           textureInfo: "stone_granite_smooth",
+           harvestType: "rock"
```

#### 131. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1270` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L937) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1270)

```diff
-         "Gold Chestplate": {
+         Sandstone: {
```

#### 132. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1272` → after: `L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L939) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1272)

```diff
-             translationKey: "item:goldChestplate"
+             translationKey: "item:sandstone"
```

#### 133. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1274-L1279` → after: `L941-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L941-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L941-L943) · [Before (L1274-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1274-L1279)

```diff
-           type: "Armour",
-           textureInfo: "golden_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .21
+           ttb: 960,
+           textureInfo: "sandstone_normal",
+           harvestType: "rock"
```

#### 134. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1281` → after: `L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L945) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1281)

```diff
-         "Diamond Chestplate": {
+         Yellowstone: {
```

#### 135. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1283` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L947) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1283)

```diff
-             translationKey: "item:diamondChestplate"
+             translationKey: "item:yellowstone"
```

#### 136. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1285-L1290` → after: `L949-L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L949-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L949-L951) · [Before (L1285-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1285-L1290)

```diff
-           type: "Armour",
-           textureInfo: "diamond_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .24
+           ttb: 3600,
+           textureInfo: "end_stone",
+           harvestType: "rock"
```

#### 137. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1292` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L953) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1292)

```diff
-         "Fur Chestplate": {
+         "Coal Ore": {
```

#### 138. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1294` → after: `L955-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L955-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L955-L966) · [Before (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1294)

```diff
-             translationKey: "item:furChestplate"
+             translationKey: "item:coalOre"
+           },
+           ttb: 3e3,
+           textureInfo: "coal_ore",
+           harvestType: "rock",
+           drops: "Coal",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Coal Ore"
+           },
+           specialToolBonusDrops: {
+             "Golem Pickaxe": Ap.v
```

#### 139. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1301` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L969) · [Before (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1301)

```diff
-             translationKey: "item:furChestplateDescription"
+             translationKey: "item:coalOreDescription"
```

#### 140. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1303-L1305` → after: `L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L971) · [Before (L1303-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1303-L1305)

```diff
-           stackable: !1,
-           armourReduction: .22,
-           knockbackReduction: 1
+           onMinedAura: 5
```

#### 141. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1307` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L973) · [Before (L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1307)

```diff
-         "Wood Leggings": {
+         "Iron Ore": {
```

#### 142. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1309` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L975) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1309)

```diff
-             translationKey: "item:woodLeggings"
+             translationKey: "item:ironOre"
```

#### 143. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1311-L1320` → after: `L977-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L977-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L977-L983) · [Before (L1311-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1311-L1320)

```diff
-           type: "Armour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
-         },
-         "Iron Leggings": {
-           displayName: {
-             translationKey: "item:ironLeggings"
+           ttb: 3600,
+           textureInfo: "iron_ore",
+           harvestType: "rock",
+           drops: "Raw Iron",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Iron Ore"
```

#### 144. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1322-L1331` → after: `L985-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L985-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L985-L986) · [Before (L1322-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1322-L1331)

```diff
-           type: "Armour",
-           textureInfo: "iron_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .14
-         },
-         "Gold Leggings": {
-           displayName: {
-             translationKey: "item:goldLeggings"
+           specialToolBonusDrops: {
+             "Golem Pickaxe": Ap.v
```

#### 145. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1333-L1338` → after: `L988-L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L988-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L988-L989) · [Before (L1333-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1333-L1338)

```diff
-           type: "Armour",
-           textureInfo: "golden_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .16
+           harvestLevel: 2,
+           onMinedAura: 15
```

#### 146. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1340` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L991) · [Before (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1340)

```diff
-         "Diamond Leggings": {
+         "Gold Ore": {
```

#### 147. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1342` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L993) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1342)

```diff
-             translationKey: "item:diamondLeggings"
+             translationKey: "item:goldOre"
```

#### 148. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1344-L1353` → after: `L995-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L995-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L995-L1001) · [Before (L1344-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1344-L1353)

```diff
-           type: "Armour",
-           textureInfo: "diamond_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .19
-         },
-         "Wood Boots": {
-           displayName: {
-             translationKey: "item:woodBoots"
+           ttb: 4200,
+           textureInfo: "gold_ore",
+           harvestType: "rock",
+           drops: "Raw Gold",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Gold Ore"
```

#### 149. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1355-L1364` → after: `L1003-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L1003-L1004) · [Before (L1355-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1355-L1364)

```diff
-           type: "Armour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
-         },
-         "Iron Boots": {
-           displayName: {
-             translationKey: "item:ironBoots"
+           specialToolBonusDrops: {
+             "Golem Pickaxe": Ap.v
```

#### 150. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1366-L1371` → after: `L1006-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L1006-L1008) · [Before (L1366-L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1366-L1371)

```diff
-           type: "Armour",
-           textureInfo: "iron_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           harvestLevel: 3,
+           onMinedAura: 30,
+           Jy: [4, 4, 0]
```

#### 151. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L1373` → after: `L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/73.js#L1010) · [Before (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/73.js#L1373)

```diff
-         "Gold Boots": {
+         "Lapis Lazuli Ore": {
```
