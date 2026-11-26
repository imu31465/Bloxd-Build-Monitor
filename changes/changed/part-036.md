# Changed — Bundle Modifications Report (Part 036 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `36 / 99` (**393** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 035](part-035.md) · [Part 037 →](part-037.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/687.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/687.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2)

#### 35. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L236-L237` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L216-L217) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L236-L237)

```diff
-     var li = iM(44876),
-       Ei = iM(64267);
+     var Dz = zU(45216),
+       Ez = zU(64400);
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L239-L242` → after: `L219-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L219-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/687.js#L219-L222) · [Before (L239-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/687.js#L239-L242)

```diff
-       Gi = "#define PBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_EXTENSION\n#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#if … [truncated]
-     OM.e.ShadersStore[Ui] || (OM.e.ShadersStore[Ui] = Gi);
-     const Ci = [SM.b, jM.e, aM.b, PM.e, zM, LM.d, mM.e, HM.c, hM.e, JM.c, dM.c, yM.c, lM.c, GM, CM.d, wM, tM.e, gM.c, uM.b, RM.c, pM.d, WM.c, sM.d, DM.d, kM.d, ZM.b, oM.b, fM.b, YM.b, NM.c, AM.d, xM.b, vM.d, FM.d, BM.c, XM.b, IM.b, KM.d, qM.e, cM, ir, jr, nr, Lr, hr, yr, Ur, er,  … [truncated]
-     for (const bi of Ci) OM.e.IncludesShadersStore[bi.name] || (OM.e.IncludesShadersStore[bi.name] = bi.shader);
+       Nz = "#define PBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<pbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n#include< … [truncated]
+     cU.b.ShadersStoreWGSL[Yz] || (cU.b.ShadersStoreWGSL[Yz] = Nz);
+     const Iz = [yU.b, QU.b, AU.b, FU.b, oU.c, DU.e, EU.c, YU.d, NU.c, IU.e, tU, gU.c, BU, ZU.d, RU.d, PU.c, WU.e, dU.b, LU.c, eU.c, CU.e, wU.b, qU.e, OU.d, SU.b, rU.c, uU.b, fU.b, iU.b, HU.d, MU.c, vU.e, VU.c, sU.e, nU.c, mU.e, lU.b, xU.d, JU.e, bU, UX, cX, AX, DX, NX, aX, kX, ZX … [truncated]
+     for (const az of Iz) cU.b.IncludesShadersStoreWGSL[az.name] || (cU.b.IncludesShadersStoreWGSL[az.name] = az.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/688.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/688.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L4)

```diff
-   64193: (MM, rM, iM) => {
+   64304: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L8)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L10-L11)

```diff
-       jM = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L17)

```diff
-   64239: (MM, rM, iM) => {
+   64367: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L21)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L23-L24)

```diff
-       jM = "#if NUM_SAMPLES\n#if NUM_SAMPLES>0\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\nprecision highp int;float radicalInverse_VdC(uint bits)\n{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x3333333 … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "#ifdef NUM_SAMPLES\n#if NUM_SAMPLES>0\nfn radicalInverse_VdC(value: u32)->f32 \n{var bits=(value<<16u) | (value>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<< … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L30)

```diff
-   64220: (MM, rM, iM) => {
+   64339: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L32)

```diff
-       d: () => aM
+       e: () => AU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L34)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L36-L37)

```diff
-       jM = "vec3 hemisphereCosSample(vec2 u) {float phi=2.*PI*u.x;float cosTheta2=1.-u.y;float cosTheta=sqrt(cosTheta2);float sinTheta=sqrt(1.-cosTheta2);return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}\nvec3 hemisphereImportanceSampleDggx(vec2 u,float a) {float phi=2. … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "fn hemisphereCosSample(u: vec2f)->vec3f {var phi: f32=2.*PI*u.x;var cosTheta2: f32=1.-u.y;var cosTheta: f32=sqrt(cosTheta2);var sinTheta: f32=sqrt(1.-cosTheta2);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}\nfn hemisphereImportanceSampleDggx(u: vec2f,a: … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L43)

```diff
-   64185: (MM, rM, iM) => {
+   64396: (UU, XU, zU) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "pbrBRDFFunctions",
-       jM = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "pbrBlockImageProcessing",
+       QU = "#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)\n#if !defined(SKIPFINALCOLORCLAMP)\nfinalColor=vec4f(clamp(finalColor.rgb,vec3f(0.),vec3f(30.0)),finalColor.a);\n#endif\n#else\nfinalColor=applyImageProcessing(finalColor);\n#endif\nfinalColor=vec4f(fin … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L56)

```diff
-   64265: (MM, rM, iM) => {
+   64392: (UU, XU, zU) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L58)

```diff
-       b: () => aM
+       c: () => AU
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L60-L63)

```diff
-     var OM = iM(40964);
-     const SM = "pbrBlockImageProcessing",
-       jM = "#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)\n#if !defined(SKIPFINALCOLORCLAMP)\nfinalColor.rgb=clamp(finalColor.rgb,0.,30.0);\n#endif\n#else\nfinalColor=applyImageProcessing(finalColor);\n#endif\nfinalColor.a*=visibility;\n#ifdef PREMULTIPLYALPHA … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "pbrBlockNormalGeometric",
+       QU = "var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-input.vPositionW);\n#ifdef NORMAL\nvar normalW: vec3f=normalize(input.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(input.vPositionW),dpdy(input.vPositionW)))*scene.vEyePosition.w;\n#endif\nvar ge … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L69)

```diff
-   64258: (MM, rM, iM) => {
+   64369: (UU, XU, zU) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L71)

```diff
-       d: () => aM
+       e: () => AU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L73-L76)

```diff
-     var OM = iM(40964);
-     const SM = "pbrBlockNormalGeometric",
-       jM = "vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;\n#endif\nvec3 geometricNormalW=normalW;\n#if defined(TWOSIDEDLIGHTING … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "pbrBlockReflectance0",
+       QU = "var reflectanceF0: f32=reflectivityOut.reflectanceF0;var specularEnvironmentR0: vec3f=reflectivityOut.colorReflectanceF0;var specularEnvironmentR90: vec3f= reflectivityOut.reflectanceF90;\n#ifdef ALPHAFRESNEL\nvar reflectance90: f32=fresnelGrazingReflectance(reflectan … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L82)

```diff
-   64267: (MM, rM, iM) => {
+   64377: (UU, XU, zU) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L84` → after: `L84-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L84-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L84-L98) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L84)

```diff
-       d: () => aM
+       c: () => AU
+     });
+     var cU = zU(40961);
+     zU(64369);
+     const yU = "pbrClusteredLightingFunctions",
+       QU = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nlightData: vec4f,\nsliceRange: vec2u,\nV: vec3f,\nN: vec3f,\nposW: vec3f,\nsurfaceAlbedo: vec3f,\nreflectivityOut: refle … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   64400: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => AU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L86` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L100) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L86)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L88-L89` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L102-L103) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L88-L89)

```diff
-       jM = "#if DEBUGMODE>0\nif (vClipSpacePosition.x/vClipSpacePosition.w>=vDebugMode.x) {\n#if DEBUGMODE==1\ngl_FragColor.rgb=vPositionW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif DEBUGMODE==2 && defined(NORMAL)\ngl_FragColor.rgb=vNormalW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif  … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "#if DEBUGMODE>0\nif (input.vClipSpacePosition.x/input.vClipSpacePosition.w>=uniforms.vDebugMode.x) {var color: vec3f;\n#if DEBUGMODE==1\ncolor=fragmentInputs.vPositionW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif DEBUGMODE==2 && defined(NORMAL)\ncolor=fragmentInputs.vNor … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L95` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L109) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L95)

```diff
-   64234: (MM, rM, iM) => {
+   64360: (UU, XU, zU) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L97` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L111) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L97)

```diff
-       d: () => aM
+       b: () => AU
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L99` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L113) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L99)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L101-L102` → after: `L115-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L115-L116) · [Before (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L101-L102)

```diff
-       jM = "float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)\n{return max(0.,1.0-length(lightOffset)/range);}\nfloat computeDistanceLightFalloff_Physical(float lightDistanceSquared)\n{return 1.0/maxEps(lightDistanceSquared);}\nfloat computeDistanceLightFal … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "fn computeDistanceLightFalloff_Standard(lightOffset: vec3f,range: f32)->f32\n{return max(0.,1.0-length(lightOffset)/range);}\nfn computeDistanceLightFalloff_Physical(lightDistanceSquared: f32)->f32\n{return 1.0/maxEps(lightDistanceSquared);}\nfn computeDistanceLightFa … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L108` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L122) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L108)

```diff
-   64243: (MM, rM, iM) => {
+   64385: (UU, XU, zU) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L110` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L124) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L110)

```diff
-       d: () => aM
+       e: () => AU
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L112` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L126-L127) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L112)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
+     zU(45106), zU(64377);
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L114-L115` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L129-L130) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L114-L115)

```diff
-       jM = "#define CLEARCOATREFLECTANCE90 1.0\nstruct lightingInfo\n{vec3 diffuse;\n#ifdef SS_TRANSLUCENCY\nvec3 diffuseTransmission;\n#endif\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef CLEARCOAT\nvec4 clearCoat;\n#endif\n#ifdef SHEEN\nvec3 sheen;\n#endif\n};float adjus … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "#define CLEARCOATREFLECTANCE90 1.0\nstruct lightingInfo\n{diffuse: vec3f,\n#ifdef SS_TRANSLUCENCY\ndiffuseTransmission: vec3f,\n#endif\n#ifdef SPECULARTERM\nspecular: vec3f,\n#endif\n#ifdef CLEARCOAT\nclearCoat: vec4f,\n#endif\n#ifdef SHEEN\nsheen: vec3f\n#endif\n};fn … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L121` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L136) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L121)

```diff
-   64230: (MM, rM, iM) => {
+   64355: (UU, XU, zU) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L123` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L138) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L123)

```diff
-       c: () => aM
+       b: () => AU
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L125-L126` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L140-L141) · [Before (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L125-L126)

```diff
-     var OM = iM(40964);
-     iM(44752);
+     var cU = zU(40961);
+     zU(45099);
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L128-L129` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L143-L144) · [Before (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L128-L129)

```diff
-       jM = "struct preLightingInfo\n{vec3 lightOffset;float lightDistanceSquared;float lightDistance;float attenuation;vec3 L;vec3 H;float NdotV;float NdotLUnclamped;float NdotL;float VdotH;float LdotV;float roughness;float diffuseRoughness;vec3 surfaceAlbedo;\n#ifdef IRIDESCENCE … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "struct preLightingInfo\n{lightOffset: vec3f,\nlightDistanceSquared: f32,\nlightDistance: f32,\nattenuation: f32,\nL: vec3f,\nH: vec3f,\nNdotV: f32,\nNdotLUnclamped: f32,\nNdotL: f32,\nVdotH: f32,\nLdotV: f32,\nroughness: f32,\ndiffuseRoughness: f32,\nsurfaceAlbedo: ve … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L135` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L150) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L135)

```diff
-   64205: (MM, rM, iM) => {
+   64320: (UU, XU, zU) => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L137` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L152) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L137)

```diff
-       c: () => aM
+       d: () => AU
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L139-L140` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L154-L155) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L139-L140)

```diff
-     var OM = iM(40964);
-     iM(44579);
+     var cU = zU(40961);
+     zU(44935);
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L142-L143` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L157-L158) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L142-L143)

```diff
-       jM = "varying vec3 vPositionW;\n#if DEBUGMODE>0\nvarying vec4 vClipSpacePosition;\n#endif\n#include<mainUVVaryingDeclaration>[1..7]\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)\nvarying vec3 vEnvironment … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "varying vPositionW: vec3f;\n#if DEBUGMODE>0\nvarying vClipSpacePosition: vec4f;\n#endif\n#include<mainUVVaryingDeclaration>[1..7]\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)\nvarying vEnvironmen … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L149` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L164) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L149)

```diff
-   64213: (MM, rM, iM) => {
+   64329: (UU, XU, zU) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L151` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L166) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L151)

```diff
-       d: () => aM
+       c: () => AU
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L153` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L168) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L153)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L155-L156` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L170-L171) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L155-L156)

```diff
-       jM = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\nvar reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;\n#ifdef LODBASEDMICROSFURACE\n#else\nvar reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamp … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L162` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L177) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L162)

```diff
-   64222: (MM, rM, iM) => {
+   64346: (UU, XU, zU) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L164` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L179) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L164)

```diff
-       d: () => aM
+       b: () => AU
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L166` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L181) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L166)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L168-L169` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L183-L184) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L168-L169)

```diff
-       jM = "#define MINIMUMVARIANCE 0.0005\n#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\nfloat convertRoughnessToAverageSlope(float roughness)\n{return square(roughness)+MINIMUMVARIANCE;}\nfloat fresnelGrazingReflectance(float reflect … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "#define MINIMUMVARIANCE 0.0005\n#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\nfn convertRoughnessToAverageSlope(roughness: f32)->f32\n{return roughness*roughness+MINIMU … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L175` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L190) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L175)

```diff
-   64249: (MM, rM, iM) => {
+   64387: (UU, XU, zU) => {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L179` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L194) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L179)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L181-L182` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L196-L197) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L181-L182)

```diff
-       jM = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfn getLodFromAlphaG(cubeMapDimensionPixels: f32,microsurfaceAverageSlope: f32)->f32 {var microsurfaceAverageSlopeTexels: f32=cubeMapDimensionPixels*microsurfaceAverageSlope;var lod: f32=log2(microsurfaceAverageSlopeTe … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L188` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L203) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L188)

```diff
-   64217: (MM, rM, iM) => {
+   64335: (UU, XU, zU) => {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L190` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L205) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L190)

```diff
-       d: () => aM
+       c: () => AU
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L192` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L207) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L192)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L194-L195` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/688.js#L209-L210) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/688.js#L194-L195)

```diff
-       jM = "bool testLightingForSSS(float diffusionProfile)\n{return diffusionProfile<1.;}";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "fn testLightingForSSS(diffusionProfile: f32)->bool\n{return diffusionProfile<1.;}";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/689.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/689.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L4)

```diff
-   64193: (MM, rM, iM) => {
+   64304: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L8)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L10-L11)

```diff
-       jM = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L17)

```diff
-   64376: (MM, rM, iM) => {
+   64471: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L21-L22)

```diff
-     var OM = iM(40964);
-     iM(44525), iM(44534);
+     var cU = zU(40961);
+     zU(44887), zU(44891);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L24-L25)

```diff
-       jM = "layout(std140,column_major) uniform;uniform Material {vec2 vTangentSpaceParams;vec4 vLightingIntensity;float pointSize;vec2 vDebugMode;vec2 renderTargetSize;vec4 cameraInfo;vec4 vTextureRepetitionHexTilingParams;mat4 backgroundRefractionMatrix;vec3 vBackgroundRefracti … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+       QU = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L31-L44` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L31) · [Before (L31-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L31-L44)

```diff
-   64185: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "pbrBRDFFunctions",
-       jM = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   64371: (MM, rM, iM) => {
+   64464: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L46` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L33) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L46)

```diff
-       openpbrVertexShader: () => rr
+       openpbrVertexShaderWGSL: () => jU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L48-L76` → after: `L35-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L35-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L35-L48) · [Before (L48-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L48-L76)

```diff
-     var OM = iM(40964);
-     const SM = "sceneVertexDeclaration",
-       jM = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     };
-     var PM = iM(44520);
-     const nM = "openpbrVertexDeclaration",
-       QM = "#include<sceneVertexDeclaration>\n#ifdef BASE_COLOR\nuniform vec2 vBaseColorInfos;uniform mat4 baseColorMatrix;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;\n#endif\nuniform float vBaseDiffuseRoughness;\n#ifdef BASE_DIFFUSE … [truncated]
-     OM.e.IncludesShadersStore[nM] || (OM.e.IncludesShadersStore[nM] = QM);
-     const zM = {
-       name: nM,
-       shader: QM
-     };
- ... (13 more removed lines; see GitHub link above)
+     var cU = zU(40961),
+       yU = zU(44887),
+       QU = zU(44891),
+       AU = zU(64471),
+       FU = zU(44904),
+       oU = zU(44935),
+       DU = zU(44910),
+       EU = zU(64295),
+       YU = zU(44917),
+       NU = zU(44919),
+       IU = zU(44921),
+       pU = zU(44926),
+       aU = zU(44939),
+       tU = zU(64304);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L78-L79` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L50-L51) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L78-L79)

```diff
-       wM = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     OM.e.IncludesShadersStore[bM] || (OM.e.IncludesShadersStore[bM] = wM);
+       kU = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[gU] || (cU.b.IncludesShadersStoreWGSL[gU] = kU);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L84-L98` → after: `L56-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L56-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L56-L71) · [Before (L84-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L84-L98)

```diff
-     var gM = iM(44600),
-       uM = iM(44605),
-       RM = iM(44610),
-       pM = iM(44617),
-       WM = iM(44625),
-       sM = iM(44631),
-       DM = iM(44633),
-       kM = iM(44636),
-       ZM = iM(44642),
-       oM = iM(44647),
-       fM = iM(44649),
-       YM = iM(44658),
-       NM = iM(44660),
-       AM = iM(44664),
-       xM = iM(44671);
+     var BU = zU(44954),
+       ZU = zU(44962),
+       RU = zU(44966),
+       PU = zU(44975),
+       WU = zU(44977),
+       dU = zU(44983),
+       LU = zU(44992),
+       eU = zU(44997),
+       CU = zU(45004),
+       wU = zU(45006),
+       qU = zU(45010),
+       OU = zU(45019),
+       SU = zU(45027),
+       rU = zU(45032),
+       uU = zU(45036),
+       fU = zU(45041);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L100-L101` → after: `L73-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L73-L74) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L100-L101)

```diff
-       FM = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangen … [truncated]
-     OM.e.IncludesShadersStore[vM] || (OM.e.IncludesShadersStore[vM] = FM);
+       HU = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBit … [truncated]
+     cU.b.IncludesShadersStoreWGSL[iU] || (cU.b.IncludesShadersStoreWGSL[iU] = HU);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L106-L110` → after: `L79-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L79-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L79-L83) · [Before (L106-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L106-L110)

```diff
-     var XM = iM(44681),
-       IM = iM(44687),
-       KM = iM(44694),
-       qM = iM(44698),
-       TM = iM(44707);
+     var vU = zU(45046),
+       VU = zU(45052),
+       sU = zU(45060),
+       nU = zU(45063),
+       mU = zU(45072);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L112-L115` → after: `L85-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L85-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/689.js#L85-L88) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/689.js#L112-L115)

```diff
-       cM = "#define OPENPBR_VERTEX_SHADER\n#define CUSTOM_VERTEX_EXTENSION\nprecision highp float;\n#include<__decl__openpbrVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#end … [truncated]
-     OM.e.ShadersStore[VM] || (OM.e.ShadersStore[VM] = cM);
-     const Mr = [aM, PM.b, zM, LM.d, mM.e, HM.d, hM.e, JM.e, dM.c, yM.b, lM.b, EM.b, UM.e, GM.e, CM.d, eM.b, tM, gM.d, uM.e, RM.b, pM.e, WM.d, sM.b, DM.b, kM.e, ZM.d, oM.c, fM.d, YM.d, NM.d, AM.e, xM.b, BM, XM.e, IM.d, KM.c, qM.d, TM.d];
-     for (const ir of Mr) OM.e.IncludesShadersStore[ir.name] || (OM.e.IncludesShadersStore[ir.name] = ir.shader);
+       xU = "#define OPENPBR_VERTEX_SHADER\n#include<openpbrUboDeclaration>\n#define CUSTOM_VERTEX_BEGIN\n#ifndef USE_VERTEX_PULLING\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef TANGENT\nattribute tangent: vec4f;\n#endif\n#ifdef UV1\nattribu … [truncated]
+     cU.b.ShadersStoreWGSL[lU] || (cU.b.ShadersStoreWGSL[lU] = xU);
+     const JU = [yU.b, QU.c, AU.d, FU.b, oU.c, DU.c, EU.b, YU.b, NU.e, IU.d, pU.b, aU.b, tU.b, GU, BU.d, ZU.c, RU.b, PU.e, WU.d, dU.c, LU.d, eU.b, CU.b, wU.c, qU.b, OU.c, SU.c, rU.d, uU.b, fU.d, MU, vU.e, VU.b, sU.d, nU.c, mU.d];
+     for (const KU of JU) cU.b.IncludesShadersStoreWGSL[KU.name] || (cU.b.IncludesShadersStoreWGSL[KU.name] = KU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/690.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/690.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L4)

```diff
-   64280: (MM, rM, iM) => {
+   64437: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L8-L12)

```diff
-     var OM = iM(40964);
-     iM(44881), iM(44885);
-     const SM = "pbrUboDeclaration",
-       jM = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "openpbrDielectricReflectance",
+       QU = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L18` → after: `L17-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L17-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L17-L96) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L18)

```diff
-   64290: (MM, rM, iM) => {
+   64442: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "openpbrGeometryInfo",
+       QU = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   64448: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => AU
+ ... (64 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L20` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L98) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L20)

```diff
-       pbrPixelShaderWGSL: () => Ji
+       openpbrPixelShader: () => Fz
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L22-L35` → after: `L100-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L100-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L100-L108) · [Before (L22-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L22-L35)

```diff
-     var OM = iM(40964),
-       SM = iM(45086),
-       jM = iM(45095),
-       aM = iM(45098),
-       PM = iM(44881),
-       nM = iM(44885),
-       QM = iM(64280),
-       zM = iM(44935),
-       LM = iM(64293),
-       mM = iM(45106),
-       HM = iM(45129);
-     const hM = "samplerFragmentAlternateDeclaration",
-       JM = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     OM.e.IncludesShadersStoreWGSL[hM] || (OM.e.IncludesShadersStoreWGSL[hM] = JM);
+     var cU = zU(40961),
+       yU = zU(44754),
+       QU = zU(44759),
+       AU = zU(44764),
+       FU = zU(64429),
+       oU = zU(44745);
+     const DU = "openpbrFragmentDeclaration",
+       EU = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
+     cU.b.IncludesShadersStore[DU] || (cU.b.IncludesShadersStore[DU] = EU);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L40-L43` → after: `L113-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L113-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L113-L124) · [Before (L40-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L40-L43)

```diff
-     var yM = iM(64296);
-     const lM = "pbrFragmentSamplersDeclaration",
-       EM = "#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BAS … [truncated]
-     OM.e.IncludesShadersStoreWGSL[lM] || (OM.e.IncludesShadersStoreWGSL[lM] = EM);
+     var NU = zU(44571),
+       IU = zU(44575),
+       pU = zU(64413),
+       aU = zU(44620),
+       tU = zU(64212),
+       gU = zU(44767),
+       kU = zU(44774),
+       GU = zU(44791),
+       BU = zU(64221);
+     const ZU = "openpbrFragmentSamplersDeclaration",
+       RU = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
+     cU.b.IncludesShadersStore[ZU] || (cU.b.IncludesShadersStore[ZU] = RU);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L48-L90` → after: `L129-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L129-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L129-L150) · [Before (L48-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L48-L90)

```diff
-     var GM = iM(45139),
-       CM = iM(45168),
-       eM = iM(44987),
-       bM = iM(45177),
-       wM = iM(45148),
-       tM = iM(44908),
-       gM = iM(64298),
-       uM = iM(64304),
-       RM = iM(64308),
-       pM = iM(45142),
-       WM = iM(45124),
-       sM = iM(64284),
-       DM = iM(45108),
-       kM = iM(64317),
-       ZM = iM(64323),
-       oM = iM(64282),
- ... (27 more removed lines; see GitHub link above)
+     var WU = zU(44803),
+       dU = zU(44833),
+       LU = zU(44671),
+       eU = zU(44838),
+       CU = zU(44818),
+       wU = zU(44588),
+       qU = zU(64228),
+       OU = zU(64235),
+       SU = zU(64239),
+       rU = zU(44810),
+       uU = zU(44782),
+       fU = zU(64201),
+       iU = zU(44776),
+       HU = zU(64245),
+       MU = zU(64247),
+       vU = zU(64197),
+ ... (6 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L95-L97` → after: `L155-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L155-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L155-L157) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L95-L97)

```diff
-       Sr = "pbrBlockAlphaFresnel",
-       jr = "#ifdef ALPHAFRESNEL\n#if defined(ALPHATEST) || defined(ALPHABLEND)\nstruct alphaFresnelOutParams\n{alpha: f32};fn faceforward(N: vec3<f32>,I: vec3<f32>,Nref: vec3<f32>)->vec3<f32> {return select(N,-N,dot(Nref,I)>0.0);}\n#define pbr_inline\nfn alphaFresnelBlock(\nnorma … [truncated]
-     OM.e.IncludesShadersStoreWGSL[Sr] || (OM.e.IncludesShadersStoreWGSL[Sr] = jr);
+       JU = "openpbrNormalMapFragmentFunctions",
+       jU = "#if defined(GEOMETRY_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal,_SAMPLERNAME_,geometryNormal)\n#endif\n#if defined(GEOMETRY_COAT_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_COAT_NORMA … [truncated]
+     cU.b.IncludesShadersStore[JU] || (cU.b.IncludesShadersStore[JU] = jU);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L99-L104` → after: `L159-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L159-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L159-L166) · [Before (L99-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L99-L104)

```diff
-         name: Sr,
-         shader: jr
-       },
-       Pr = "pbrBlockAnisotropic",
-       nr = "#ifdef ANISOTROPIC\nstruct anisotropicOutParams\n{anisotropy: f32,\nanisotropicTangent: vec3f,\nanisotropicBitangent: vec3f,\nanisotropicNormal: vec3f,\n#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)\nanisotropyMapData: vec3f\n#endif\n};\n#define pbr_inline\nfn aniso … [truncated]
-     OM.e.IncludesShadersStoreWGSL[Pr] || (OM.e.IncludesShadersStoreWGSL[Pr] = nr);
+       name: JU,
+       shader: jU
+     };
+     var bU = zU(44798),
+       TU = zU(64437);
+     const hU = "openpbrConductorReflectance",
+       UX = "#define pbr_inline\nReflectanceParams conductorReflectance(in vec3 baseColor,in vec3 specularColor,in float specularWeight)\n{ReflectanceParams outParams;\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)\noutParams.coloredF0=baseColor*specularWeight;o … [truncated]
+     cU.b.IncludesShadersStore[hU] || (cU.b.IncludesShadersStore[hU] = UX);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L109-L111` → after: `L171-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L171-L173) · [Before (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L109-L111)

```diff
-       zr = "pbrBlockReflection",
-       Lr = "#ifdef REFLECTION\nstruct reflectionOutParams\n{environmentRadiance: vec4f\n,environmentIrradiance: vec3f\n#ifdef REFLECTIONMAP_3D\n,reflectionCoords: vec3f\n#else\n,reflectionCoords: vec2f\n#endif\n#ifdef SS_TRANSLUCENCY\n#ifdef USESPHERICALFROMREFLECTIONMAP\n#if !de … [truncated]
-     OM.e.IncludesShadersStoreWGSL[zr] || (OM.e.IncludesShadersStoreWGSL[zr] = Lr);
+       zX = "openpbrAmbientOcclusionFunctions",
+       cX = "float compute_specular_occlusion(const float n_dot_v,const float metallic,const float ambient_occlusion,const float roughness)\n{float specular_occlusion=saturate(pow(n_dot_v+ambient_occlusion,exp2(-16.0*roughness-1.0))-1.0+ambient_occlusion);return mix(specular_occlu … [truncated]
+     cU.b.IncludesShadersStore[zX] || (cU.b.IncludesShadersStore[zX] = cX);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L113-L118` → after: `L175-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L175-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L175-L182) · [Before (L113-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L113-L118)

```diff
-         name: zr,
-         shader: Lr
-       },
-       Hr = "pbrBlockSheen",
-       hr = "#ifdef SHEEN\nstruct sheenOutParams\n{sheenIntensity: f32\n,sheenColor: vec3f\n,sheenRoughness: f32\n#ifdef SHEEN_LINKWITHALBEDO\n,surfaceAlbedo: vec3f\n#endif\n#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)\n,sheenAlbedoScaling: f32\n#endif\n#if defined … [truncated]
-     OM.e.IncludesShadersStoreWGSL[Hr] || (OM.e.IncludesShadersStoreWGSL[Hr] = hr);
+       name: zX,
+       shader: cX
+     };
+     var QX = zU(64442),
+       AX = zU(64448);
+     const FX = "openpbrVolumeFunctions",
+       oX = "struct OpenPBRHomogeneousVolume {vec3 extinction_coeff; \nvec3 ss_albedo; \nvec3 multi_scatter_color; \nvec3 absorption_coeff; \nvec3 scatter_coeff; \nfloat anisotropy; };OpenPBRHomogeneousVolume computeOpenPBRTransmissionVolume(\nin vec3 transmission_color,\nin float … [truncated]
+     cU.b.IncludesShadersStore[FX] || (cU.b.IncludesShadersStore[FX] = oX);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L120-L125` → after: `L184-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L184-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L184-L191) · [Before (L120-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L120-L125)

```diff
-         name: Hr,
-         shader: hr
-       },
-       dr = "pbrBlockClearcoat",
-       yr = "struct clearcoatOutParams\n{specularEnvironmentR0: vec3f,\nconservationFactor: f32,\nclearCoatNormalW: vec3f,\nclearCoatAARoughnessFactors: vec2f,\nclearCoatIntensity: f32,\nclearCoatRoughness: f32,\n#ifdef REFLECTION\nfinalClearCoatRadianceScaled: vec3f,\n#endif\n#if … [truncated]
-     OM.e.IncludesShadersStoreWGSL[dr] || (OM.e.IncludesShadersStoreWGSL[dr] = yr);
+       name: FX,
+       shader: oX
+     };
+     var EX = zU(44841),
+       YX = zU(64269);
+     const NX = "openpbrNormalMapFragment",
+       IX = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(GEOMETRY_NORMAL)\nfloat normalScale=vGeometryNormalInfos.y;\n#else\nfloat n … [truncated]
+     cU.b.IncludesShadersStore[NX] || (cU.b.IncludesShadersStore[NX] = IX);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L130-L132` → after: `L196-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L196-L198) · [Before (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L130-L132)

```diff
-       Er = "pbrBlockIridescence",
-       Ur = "struct iridescenceOutParams\n{iridescenceIntensity: f32,\niridescenceIOR: f32,\niridescenceThickness: f32,\nspecularEnvironmentR0: vec3f};\n#ifdef IRIDESCENCE\nfn iridescenceBlock(\nvIridescenceParams: vec4f\n,viewAngle_: f32\n,specularEnvironmentR0: vec3f\n#ifdef IRI … [truncated]
-     OM.e.IncludesShadersStoreWGSL[Er] || (OM.e.IncludesShadersStoreWGSL[Er] = Ur);
+       aX = "openpbrBlockNormalFinal",
+       tX = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=gl_FrontFacing ? faceNormal : -faceNormal;\n#endif\nnormalW*=sign(dot(normalW,faceNormal) … [truncated]
+     cU.b.IncludesShadersStore[aX] || (cU.b.IncludesShadersStore[aX] = tX);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L137-L149` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L203-L205) · [Before (L137-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L137-L149)

```diff
-       Cr = "pbrBlockSubSurface",
-       er = "struct subSurfaceOutParams\n{specularEnvironmentReflectance: vec3f,\n#ifdef SS_REFRACTION\nfinalRefraction: vec3f,\nsurfaceAlbedo: vec3f,\n#ifdef SS_LINKREFRACTIONTOTRANSPARENCY\nalpha: f32,\n#endif\nrefractionOpacity: f32,\n#endif\n#ifdef SS_TRANSLUCENCY\ntransmittan … [truncated]
-     OM.e.IncludesShadersStoreWGSL[Cr] || (OM.e.IncludesShadersStoreWGSL[Cr] = er);
-     const br = {
-       name: Cr,
-       shader: er
-     };
-     var wr = iM(45185),
-       tr = iM(64356),
-       gr = iM(45189);
-     const ur = "pbrBlockNormalFinal",
-       Rr = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
-     OM.e.IncludesShadersStoreWGSL[ur] || (OM.e.IncludesShadersStoreWGSL[ur] = Rr);
+       kX = "openpbrBaseLayerData",
+       GX = "vec3 base_color=vec3(0.8);float base_metalness=0.0;float base_diffuse_roughness=0.0;float specular_weight=1.0;float specular_roughness=0.3;vec3 specular_color=vec3(1.0);float specular_roughness_anisotropy=0.0;float specular_ior=1.5;float alpha=1.0;vec2 geometry_tangen … [truncated]
+     cU.b.IncludesShadersStore[kX] || (cU.b.IncludesShadersStore[kX] = GX);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L154-L157` → after: `L210-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L210-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L210-L214) · [Before (L154-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L154-L157)

```diff
-     var Wr = iM(45199);
-     const sr = "pbrBlockLightmapInit",
-       Dr = "#ifdef LIGHTMAP\nvar lightmapColor: vec4f=TEXRD(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);\n#ifdef RGBDLIGHTMAP\nlightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);\n#endif\n#ifdef GAMMALIGHTMAP\nlightmapColor=vec4f(toLinear … [truncated]
-     OM.e.IncludesShadersStoreWGSL[sr] || (OM.e.IncludesShadersStoreWGSL[sr] = Dr);
+     var ZX = zU(64452),
+       RX = zU(64459);
+     const PX = "openpbrCoatLayerData",
+       WX = "float coat_weight=0.0;vec3 coat_color=vec3(1.0);float coat_roughness=0.0;float coat_roughness_anisotropy=0.0;float coat_ior=1.6;float coat_darkening=1.0;vec2 geometry_coat_tangent=vec2(1.0,0.0);\n#ifdef COAT_WEIGHT\nvec4 coatWeightFromTexture=TEXRD(coatWeightSampler,v … [truncated]
+     cU.b.IncludesShadersStore[PX] || (cU.b.IncludesShadersStore[PX] = WX);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L162-L164` → after: `L219-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L219-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L219-L221) · [Before (L162-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L162-L164)

```diff
-       Zr = "pbrBlockGeometryInfo",
-       or = "var NdotVUnclamped: f32=dot(normalW,viewDirectionW);var NdotV: f32=absEps(NdotVUnclamped);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var AARoughnessFactors: vec2f=getAARoughnessFactors(normalW.xyz);\n#ifdef SPECULARAA\nalphaG+=AARoughnessFactors.y;\n#en … [truncated]
-     OM.e.IncludesShadersStoreWGSL[Zr] || (OM.e.IncludesShadersStoreWGSL[Zr] = or);
+       LX = "openpbrThinFilmLayerData",
+       eX = "#ifdef THIN_FILM\nfloat thin_film_weight=vThinFilmWeight;float thin_film_thickness=vThinFilmThickness.r*1000.0; \nfloat thin_film_ior=vThinFilmIor;\n#ifdef THIN_FILM_WEIGHT\nfloat thinFilmWeightFromTexture=TEXRD(thinFilmWeightSampler,vThinFilmWeightUV+uvOffset).r*vThi … [truncated]
+     cU.b.IncludesShadersStore[LX] || (cU.b.IncludesShadersStore[LX] = eX);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L169-L171` → after: `L226-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L226-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L226-L228) · [Before (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L169-L171)

```diff
-       Yr = "pbrBlockReflectance",
-       Nr = "#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)\nvar baseSpecularEnvironmentReflectance: vec3f=getReflectanceFromBRDFWithEnvLookup(vec3f(reflectanceF0),vec3f(reflectivityOut.reflectanceF90),environmentBrdf);\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPE … [truncated]
-     OM.e.IncludesShadersStoreWGSL[Yr] || (OM.e.IncludesShadersStoreWGSL[Yr] = Nr);
+       wX = "openpbrFuzzLayerData",
+       qX = "float fuzz_weight=0.0;vec3 fuzz_color=vec3(1.0);float fuzz_roughness=0.0;\n#ifdef FUZZ\n#ifdef FUZZ_WEIGHT\nvec4 fuzzWeightFromTexture=TEXRD(fuzzWeightSampler,vFuzzWeightUV+uvOffset);\n#endif\n#ifdef FUZZ_COLOR\nvec4 fuzzColorFromTexture=TEXRD(fuzzColorSampler,vFuzzCo … [truncated]
+     cU.b.IncludesShadersStore[wX] || (cU.b.IncludesShadersStore[wX] = qX);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L176-L178` → after: `L233-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L233-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L233-L235) · [Before (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L176-L178)

```diff
-       xr = "pbrBlockDirectLighting",
-       vr = "var diffuseBase: vec3f=vec3f(0.,0.,0.);\n#ifdef SS_TRANSLUCENCY\nvar diffuseTransmissionBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef SPECULARTERM\nvar specularBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef CLEARCOAT\nvar clearCoatBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#i … [truncated]
-     OM.e.IncludesShadersStoreWGSL[xr] || (OM.e.IncludesShadersStoreWGSL[xr] = vr);
+       SX = "openpbrAmbientOcclusionData",
+       rX = "vec3 ambient_occlusion=vec3(1.0);float specular_ambient_occlusion=1.0;float coat_specular_ambient_occlusion=1.0;\n#ifdef AMBIENT_OCCLUSION\nvec3 ambientOcclusionFromTexture=TEXRD(ambientOcclusionSampler,vAmbientOcclusionUV+uvOffset).rgb;ambient_occlusion=vec3(ambientO … [truncated]
+     cU.b.IncludesShadersStore[SX] || (cU.b.IncludesShadersStore[SX] = rX);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L183-L186` → after: `L240-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L240-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L240-L250) · [Before (L183-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L183-L186)

```diff
-     var Br = iM(45203);
-     const Xr = "pbrBlockFinalLitComponents",
-       Ir = "aggShadow=aggShadow/numLights;\n#if defined(ENVIRONMENTBRDF)\n#ifdef MS_BRDF_ENERGY_CONSERVATION\nvar baseSpecularEnergyConservationFactor: vec3f=getEnergyConservationFactor(vec3f(reflectanceF0),environmentBrdf);var coloredEnergyConservationFactor: vec3f=getEnergyCons … [truncated]
-     OM.e.IncludesShadersStoreWGSL[Xr] || (OM.e.IncludesShadersStoreWGSL[Xr] = Ir);
+     var fX = zU(44850);
+     const iX = "openpbrBackgroundTransmission",
+       HX = "vec4 slab_translucent_background=vec4(0.,0.,0.,1.);\n#ifdef REFRACTED_BACKGROUND\n{float refractionLOD=min(transmission_roughness,0.8)*vBackgroundRefractionInfos.x;float lodTexelSize=pow(2.0,refractionLOD-vBackgroundRefractionInfos.x);\n#ifdef DISPERSION\n{\n#ifdef RE … [truncated]
+     cU.b.IncludesShadersStore[iX] || (cU.b.IncludesShadersStore[iX] = HX);
+     const MX = {
+         name: iX,
+         shader: HX
+       },
+       vX = "openpbrEnvironmentLighting",
+       VX = "#if defined(REFLECTION) || defined(REFRACTED_BACKGROUND)\nvec3 coatAbsorption=vec3(1.0);float coatIblFresnel=0.0;if (coat_weight>0.0) {coatIblFresnel=computeDielectricIblFresnel(coatReflectance,coatGeoInfo.environmentBrdf);float hemisphere_avg_fresnel=coatReflectance. … [truncated]
+     cU.b.IncludesShadersStore[vX] || (cU.b.IncludesShadersStore[vX] = VX);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L191-L193` → after: `L255-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L255-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L255-L257) · [Before (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L191-L193)

```diff
-       qr = "pbrBlockFinalUnlitComponents",
-       Tr = "var finalDiffuse: vec3f=diffuseBase;finalDiffuse*=surfaceAlbedo;\n#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)\nfinalDiffuse*=subSurfaceOut.refractionOpacity;\n#endif\n#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)\nf … [truncated]
-     OM.e.IncludesShadersStoreWGSL[qr] || (OM.e.IncludesShadersStoreWGSL[qr] = Tr);
+       nX = "openpbrDirectLightingInit",
+       mX = "#ifdef LIGHT{X}\npreLightingInfo preInfo{X};preLightingInfo preInfoCoat{X};vec4 lightColor{X}=light{X}.vLightDiffuse;float shadow{X}=1.;\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\n#define CUS … [truncated]
+     cU.b.IncludesShadersStore[nX] || (cU.b.IncludesShadersStore[nX] = mX);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L198-L200` → after: `L262-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L262-L264) · [Before (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L198-L200)

```diff
-       cr = "pbrBlockFinalColorComposition",
-       Mi = "var finalColor: vec4f= vec4f(\n#ifndef UNLIT\n#ifdef REFLECTION\nfinalIrradiance +\n#endif\n#ifdef SPECULARTERM\nfinalSpecularScaled +\n#endif\n#ifdef SHEEN\nfinalSheenScaled +\n#endif\n#ifdef CLEARCOAT\nfinalClearCoatScaled +\n#endif\n#ifdef REFLECTION\nfinalRadiance … [truncated]
-     OM.e.IncludesShadersStoreWGSL[cr] || (OM.e.IncludesShadersStoreWGSL[cr] = Mi);
+       xX = "openpbrDirectLighting",
+       JX = "#ifdef LIGHT{X}\n{vec3 slab_diffuse=vec3(0.,0.,0.);vec3 slab_translucent=vec3(0.,0.,0.);vec3 slab_glossy=vec3(0.,0.,0.);float specularFresnel=0.0;vec3 specularColoredFresnel=vec3(0.,0.,0.);vec3 slab_metal=vec3(0.,0.,0.);vec3 slab_coat=vec3(0.,0.,0.);float coatFresnel= … [truncated]
+     cU.b.IncludesShadersStore[xX] || (cU.b.IncludesShadersStore[xX] = JX);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L205-L211` → after: `L269-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L269-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L269-L274) · [Before (L205-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L205-L211)

```diff
-     var ii = iM(45205),
-       Oi = iM(45208),
-       Si = iM(64360),
-       ji = iM(45212);
-     const ai = "pbrBlockPrePass",
-       Pi = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
-     OM.e.IncludesShadersStoreWGSL[ai] || (OM.e.IncludesShadersStoreWGSL[ai] = Pi);
+     var KX = zU(44860),
+       bX = zU(44866),
+       TX = zU(64274);
+     const hX = "openpbrBlockPrePass",
+       Uz = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nfloat writeGeometryInfo=1.0;\n#else\nfloat writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_INDEX,vec4(vPositionW,writeGeometryInfo));\ … [truncated]
+     cU.b.IncludesShadersStore[hX] || (cU.b.IncludesShadersStore[hX] = Uz);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L216-L222` → after: `L279-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L279-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/690.js#L279-L285) · [Before (L216-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/690.js#L216-L222)

```diff
-     var Qi = iM(45218),
-       zi = iM(64362);
-     const Li = "pbrPixelShader",
-       mi = "#define PBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<pbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n#include< … [truncated]
-     OM.e.ShadersStoreWGSL[Li] || (OM.e.ShadersStoreWGSL[Li] = mi);
-     const Hi = [SM.b, jM.c, aM.b, PM.c, nM.e, QM.b, zM.c, LM.b, mM.b, HM.c, dM, yM.c, UM, GM.e, CM.c, eM.c, bM.c, wM.d, tM.d, gM.e, uM.c, RM.b, pM.e, WM.c, sM.e, DM.e, kM.e, ZM.e, oM.d, fM.d, YM.d, NM.e, AM.d, xM.b, vM.b, FM.c, BM.b, XM.c, IM.c, TM, Mr, Or, ar, Qr, mr, Jr, lr, Gr … [truncated]
-     for (const di of Hi) OM.e.IncludesShadersStoreWGSL[di.name] || (OM.e.IncludesShadersStoreWGSL[di.name] = di.shader);
+     var zz = zU(44875),
+       cz = zU(64281);
+     const yz = "openpbrPixelShader",
+       Qz = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_EXTENSION\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#ifdef … [truncated]
+     cU.b.ShadersStore[yz] || (cU.b.ShadersStore[yz] = Qz);
+     const Az = [yU.c, QU.d, AU.e, FU.e, oU.e, YU, NU.c, IU.c, pU.b, aU.e, tU.e, gU.c, kU.c, GU.e, BU.d, PU, WU.b, dU.c, LU.e, eU.b, CU.d, wU.d, qU.e, OU.c, SU.c, rU.c, uU.e, fU.c, iU.d, HU.b, MU.d, vU.d, VU.d, sU.c, nU.e, xU, KU, bU.c, TU.b, XX, yX, QX.b, AX.e, DX, EX.c, YX.b, pX … [truncated]
+     for (const oz of Az) cU.b.IncludesShadersStore[oz.name] || (cU.b.IncludesShadersStore[oz.name] = oz.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/691.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/691.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L4)

```diff
-   64284: (MM, rM, iM) => {
+   64479: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L6-L19` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L6) · [Before (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L6-L19)

```diff
-       e: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "harmonicsFunctions",
-       jM = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   64327: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
+       c: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L21-L24` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L8-L11) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "hdrFilteringFunctions",
-       jM = "#ifdef NUM_SAMPLES\n#if NUM_SAMPLES>0\nfn radicalInverse_VdC(value: u32)->f32 \n{var bits=(value<<16u) | (value>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<< … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "openpbrDielectricReflectance",
+       QU = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L30` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L17) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L30)

```diff
-   64304: (MM, rM, iM) => {
+   64482: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L34-L37` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L21-L24) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "importanceSampling",
-       jM = "fn hemisphereCosSample(u: vec2f)->vec3f {var phi: f32=2.*PI*u.x;var cosTheta2: f32=1.-u.y;var cosTheta: f32=sqrt(cosTheta2);var sinTheta: f32=sqrt(1.-cosTheta2);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}\nfn hemisphereImportanceSampleDggx(u: vec2f,a: … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "openpbrGeometryInfo",
+       QU = "struct geometryInfoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32};struct geometryInfoAnisoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32,\nanisotropy: f32,\nanisotropicTange … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L43` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L30) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L43)

```diff
-   64360: (MM, rM, iM) => {
+   64491: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L47-L50` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L34-L37) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "pbrBlockImageProcessing",
-       jM = "#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)\n#if !defined(SKIPFINALCOLORCLAMP)\nfinalColor=vec4f(clamp(finalColor.rgb,vec3f(0.),vec3f(30.0)),finalColor.a);\n#endif\n#else\nfinalColor=applyImageProcessing(finalColor);\n#endif\nfinalColor=vec4f(fin … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "openpbrIblFunctions",
+       QU = "#ifdef REFLECTION\nfn sampleIrradiance(\nsurfaceNormal: vec3f\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,vEnvironmentIrradianceSH: vec3f\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defi … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L56` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L43) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L56)

```diff
-   64356: (MM, rM, iM) => {
+   64503: (UU, XU, zU) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L58` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L45) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L58)

```diff
-       e: () => aM
+       c: () => AU
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L60-L63` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L47-L50) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L60-L63)

```diff
-     var OM = iM(40964);
-     const SM = "pbrBlockNormalGeometric",
-       jM = "var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-input.vPositionW);\n#ifdef NORMAL\nvar normalW: vec3f=normalize(input.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(input.vPositionW),dpdy(input.vPositionW)))*scene.vEyePosition.w;\n#endif\nvar ge … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "openpbrSubsurfaceLayerData",
+       QU = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L69` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L56) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L69)

```diff
-   64333: (MM, rM, iM) => {
+   64498: (UU, XU, zU) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L71` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L58) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L71)

```diff
-       e: () => aM
+       b: () => AU
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L73-L76` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L60-L63) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L73-L76)

```diff
-     var OM = iM(40964);
-     const SM = "pbrBlockReflectance0",
-       jM = "var reflectanceF0: f32=reflectivityOut.reflectanceF0;var specularEnvironmentR0: vec3f=reflectivityOut.colorReflectanceF0;var specularEnvironmentR90: vec3f= reflectivityOut.reflectanceF90;\n#ifdef ALPHAFRESNEL\nvar reflectance90: f32=fresnelGrazingReflectance(reflectan … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "openpbrTransmissionLayerData",
+       QU = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L82` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L69) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L82)

```diff
-   64342: (MM, rM, iM) => {
+   64471: (UU, XU, zU) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L86-L90` → after: `L73-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L73-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L73-L77) · [Before (L86-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L86-L90)

```diff
-     var OM = iM(40964);
-     iM(64333);
-     const SM = "pbrClusteredLightingFunctions",
-       jM = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nlightData: vec4f,\nsliceRange: vec2u,\nV: vec3f,\nN: vec3f,\nposW: vec3f,\nsurfaceAlbedo: vec3f,\nreflectivityOut: refle … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     zU(44887), zU(44891);
+     const yU = "openpbrUboDeclaration",
+       QU = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L96-L98` → after: `L83-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L83-L85) · [Before (L96-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L96-L98)

```diff
-   64362: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
+   64474: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       openpbrPixelShaderWGSL: () => Qz
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L100-L103` → after: `L87-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L87-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L87-L101) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L100-L103)

```diff
-     var OM = iM(40964);
-     const SM = "pbrDebug",
-       jM = "#if DEBUGMODE>0\nif (input.vClipSpacePosition.x/input.vClipSpacePosition.w>=uniforms.vDebugMode.x) {var color: vec3f;\n#if DEBUGMODE==1\ncolor=fragmentInputs.vPositionW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif DEBUGMODE==2 && defined(NORMAL)\ncolor=fragmentInputs.vNor … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961),
+       yU = zU(45080),
+       QU = zU(45085),
+       AU = zU(45090),
+       FU = zU(44887),
+       oU = zU(44891),
+       DU = zU(64471),
+       EU = zU(44935),
+       YU = zU(64320),
+       NU = zU(45093),
+       IU = zU(45115),
+       pU = zU(64329);
+     const aU = "openpbrFragmentSamplersDeclaration",
+       tU = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
+     cU.b.IncludesShadersStoreWGSL[aU] || (cU.b.IncludesShadersStoreWGSL[aU] = tU);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L107-L116` → after: `L105-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L105-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L105-L137) · [Before (L107-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L107-L116)

```diff
-     }
-   },
-   64323: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "pbrDirectLightingFalloffFunctions",
-       jM = "fn computeDistanceLightFalloff_Standard(lightOffset: vec3f,range: f32)->f32\n{return max(0.,1.0-length(lightOffset)/range);}\nfn computeDistanceLightFalloff_Physical(lightDistanceSquared: f32)->f32\n{return 1.0/maxEps(lightDistanceSquared);}\nfn computeDistanceLightFa … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     };
+     var kU = zU(45126),
+       GU = zU(45154),
+       BU = zU(44983),
+       ZU = zU(45158),
+       RU = zU(45137),
+       PU = zU(44910),
+       WU = zU(64335),
+       dU = zU(64339),
+       LU = zU(64346),
+       eU = zU(45134),
+       CU = zU(45113),
+       wU = zU(64304),
+       qU = zU(45099),
+       OU = zU(64355),
+       SU = zU(64360),
+ ... (17 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L120-L130` → after: `L141-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L141-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L141-L153) · [Before (L120-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L120-L130)

```diff
-     }
-   },
-   64346: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     iM(45116), iM(64342);
-     const SM = "pbrDirectLightingFunctions",
-       jM = "#define CLEARCOATREFLECTANCE90 1.0\nstruct lightingInfo\n{diffuse: vec3f,\n#ifdef SS_TRANSLUCENCY\ndiffuseTransmission: vec3f,\n#endif\n#ifdef SPECULARTERM\nspecular: vec3f,\n#endif\n#ifdef CLEARCOAT\nclearCoat: vec4f,\n#endif\n#ifdef SHEEN\nsheen: vec3f\n#endif\n};fn … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     };
+     var JU = zU(45118),
+       jU = zU(64479);
+     const KU = "openpbrConductorReflectance",
+       bU = "#define pbr_inline\nfn conductorReflectance(baseColor: vec3f,specularColor: vec3f,specularWeight: f32)->ReflectanceParams\n{var outParams: ReflectanceParams;\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)\noutParams.coloredF0=baseColor*specularWeigh … [truncated]
+     cU.b.IncludesShadersStoreWGSL[KU] || (cU.b.IncludesShadersStoreWGSL[KU] = bU);
+     const TU = {
+         name: KU,
+         shader: bU
+       },
+       hU = "openpbrAmbientOcclusionFunctions",
+       UX = "fn compute_specular_occlusion(n_dot_v: f32,metallic: f32,ambient_occlusion: f32,roughness: f32)->f32\n{let specular_occlusion: f32=saturate(pow(n_dot_v+ambient_occlusion,exp2(-16.0*roughness-1.0))-1.0+ambient_occlusion);return mix(specular_occlusion,1.0,metallic*squar … [truncated]
+     cU.b.IncludesShadersStoreWGSL[hU] || (cU.b.IncludesShadersStoreWGSL[hU] = UX);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L134-L144` → after: `L157-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L157-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L157-L162) · [Before (L134-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L134-L144)

```diff
-     }
-   },
-   64317: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(40964);
-     iM(45108);
-     const SM = "pbrDirectLightingSetupFunctions",
-       jM = "struct preLightingInfo\n{lightOffset: vec3f,\nlightDistanceSquared: f32,\nlightDistance: f32,\nattenuation: f32,\nL: vec3f,\nH: vec3f,\nNdotV: f32,\nNdotLUnclamped: f32,\nNdotL: f32,\nVdotH: f32,\nLdotV: f32,\nroughness: f32,\ndiffuseRoughness: f32,\nsurfaceAlbedo: ve … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     };
+     var zX = zU(64482),
+       cX = zU(64491);
+     const yX = "openpbrVolumeFunctions",
+       QX = "struct OpenPBRHomogeneousVolume {extinction_coeff: vec3f, \nss_albedo: vec3f, \nmulti_scatter_color: vec3f, \nabsorption_coeff: vec3f, \nscatter_coeff: vec3f, \nanisotropy: f32, };fn computeOpenPBRTransmissionVolume(\ntransmission_color: vec3f,\ntransmission_depth: f3 … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yX] || (cU.b.IncludesShadersStoreWGSL[yX] = QX);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L148-L158` → after: `L166-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L166-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L166-L185) · [Before (L148-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L148-L158)

```diff
-     }
-   },
-   64293: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     iM(44935);
-     const SM = "pbrFragmentExtraDeclaration",
-       jM = "varying vPositionW: vec3f;\n#if DEBUGMODE>0\nvarying vClipSpacePosition: vec4f;\n#endif\n#include<mainUVVaryingDeclaration>[1..7]\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)\nvarying vEnvironmen … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     };
+     var FX = zU(45165),
+       oX = zU(64392);
+     const DX = "openpbrNormalMapFragment",
+       EX = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(GEOMETRY_NORMAL)\nvar normalScale: f32=uniforms.vGeometryNormalI … [truncated]
+     cU.b.IncludesShadersStoreWGSL[DX] || (cU.b.IncludesShadersStoreWGSL[DX] = EX);
+     const YX = {
+         name: DX,
+         shader: EX
+       },
+       NX = "openpbrBlockNormalFinal",
+       IX = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
+     cU.b.IncludesShadersStoreWGSL[NX] || (cU.b.IncludesShadersStoreWGSL[NX] = IX);
+     const pX = {
+         name: NX,
+         shader: IX
+ ... (4 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L162-L171` → after: `L189-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L189-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L189-L215) · [Before (L162-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L162-L171)

```diff
-     }
-   },
-   64296: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "pbrFragmentReflectionDeclaration",
-       jM = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\nvar reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;\n#ifdef LODBASEDMICROSFURACE\n#else\nvar reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamp … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     };
+     var kX = zU(64498),
+       GX = zU(64503);
+     const BX = "openpbrCoatLayerData",
+       ZX = "var coat_weight: f32=0.0f;var coat_color: vec3f=vec3f(1.0f);var coat_roughness: f32=0.0f;var coat_roughness_anisotropy: f32=0.0f;var coat_ior: f32=1.6f;var coat_darkening: f32=1.0f;var geometry_coat_tangent: vec2f=vec2f(1.0f,0.0f);\n#ifdef COAT_WEIGHT\nvar coatWeightF … [truncated]
+     cU.b.IncludesShadersStoreWGSL[BX] || (cU.b.IncludesShadersStoreWGSL[BX] = ZX);
+     const RX = {
+         name: BX,
+         shader: ZX
+       },
+       PX = "openpbrThinFilmLayerData",
+       WX = "#ifdef THIN_FILM\nvar thin_film_weight: f32=uniforms.vThinFilmWeight;var thin_film_thickness: f32=uniforms.vThinFilmThickness.r*1000.0f; \nvar thin_film_ior: f32=uniforms.vThinFilmIor;\n#ifdef THIN_FILM_WEIGHT\nvar thinFilmWeightFromTexture: f32=TEXRD(thinFilmWeightSa … [truncated]
+     cU.b.IncludesShadersStoreWGSL[PX] || (cU.b.IncludesShadersStoreWGSL[PX] = WX);
+     const dX = {
+         name: PX,
+         shader: WX
+ ... (11 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L175-L184` → after: `L219-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L219-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L219-L244) · [Before (L175-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L175-L184)

```diff
-     }
-   },
-   64308: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "pbrHelperFunctions",
-       jM = "#define MINIMUMVARIANCE 0.0005\n#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\nfn convertRoughnessToAverageSlope(roughness: f32)->f32\n{return roughness*roughness+MINIMU … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     };
+     var SX = zU(45189);
+     const rX = "openpbrBackgroundTransmission",
+       uX = "var slab_translucent_background: vec4f=vec4f(0.,0.,0.,1.);\n#ifdef REFRACTED_BACKGROUND\n{let refractionLOD: f32=min(transmission_roughness,0.8)*uniforms.vBackgroundRefractionInfos.x;let lodTexelSize: f32=pow(2.0f,refractionLOD-uniforms.vBackgroundRefractionInfos.x);\ … [truncated]
+     cU.b.IncludesShadersStoreWGSL[rX] || (cU.b.IncludesShadersStoreWGSL[rX] = uX);
+     const fX = {
+         name: rX,
+         shader: uX
+       },
+       iX = "openpbrEnvironmentLighting",
+       HX = "#if defined(REFLECTION) || defined(REFRACTED_BACKGROUND)\nvar coatAbsorption=vec3f(1.0f);var coatIblFresnel: f32=0.0;if (coat_weight>0.0) {coatIblFresnel=computeDielectricIblFresnel(coatReflectance,coatGeoInfo.environmentBrdf);let hemisphere_avg_fresnel: f32=coatRefle … [truncated]
+     cU.b.IncludesShadersStoreWGSL[iX] || (cU.b.IncludesShadersStoreWGSL[iX] = HX);
+     const MX = {
+         name: iX,
+         shader: HX
+       },
+ ... (10 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L188-L197` → after: `L248-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L248-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L248-L255) · [Before (L188-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L188-L197)

```diff
-     }
-   },
-   64351: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "pbrIBLFunctions",
-       jM = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfn getLodFromAlphaG(cubeMapDimensionPixels: f32,microsurfaceAverageSlope: f32)->f32 {var microsurfaceAverageSlopeTexels: f32=cubeMapDimensionPixels*microsurfaceAverageSlope;var lod: f32=log2(microsurfaceAverageSlopeTe … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     };
+     var xX = zU(45201),
+       JX = zU(45205),
+       jX = zU(64396),
+       KX = zU(45212);
+     const bX = "openpbrBlockPrePass",
+       TX = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
+     cU.b.IncludesShadersStoreWGSL[bX] || (cU.b.IncludesShadersStoreWGSL[bX] = TX);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L201-L210` → after: `L259-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L259-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/691.js#L259-L266) · [Before (L201-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/691.js#L201-L210)

```diff
-     }
-   },
-   64298: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "subSurfaceScatteringFunctions",
-       jM = "fn testLightingForSSS(diffusionProfile: f32)->bool\n{return diffusionProfile<1.;}";
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
+     };
+     var Uz = zU(45216),
+       Xz = zU(64400);
+     const zz = "openpbrPixelShader",
+       cz = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<openpbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n# … [truncated]
+     cU.b.ShadersStoreWGSL[zz] || (cU.b.ShadersStoreWGSL[zz] = cz);
+     const yz = [yU.b, QU.b, AU.b, FU.b, oU.c, DU.d, EU.c, YU.d, NU.c, IU.e, pU.c, gU, kU.d, GU.d, BU.c, ZU.e, RU.b, PU.c, WU.c, dU.e, LU.b, eU.e, CU.d, wU.b, qU.c, OU.b, SU.b, rU.b, uU.d, fU.c, iU.e, HU.c, MU.e, vU.c, nU, xU, JU.d, jU.c, TU, XX, zX.c, cX.e, AX, FX.c, oX.c, YX, pX … [truncated]
+     for (const Az of yz) cU.b.IncludesShadersStoreWGSL[Az.name] || (cU.b.IncludesShadersStoreWGSL[Az.name] = Az.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/692.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/692.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0c367688340219bb7c5d9a8441b63a654c95b57d5e8c16f7ce21b25a3f745d6d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/692.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0c367688340219bb7c5d9a8441b63a654c95b57d5e8c16f7ce21b25a3f745d6dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0c367688340219bb7c5d9a8441b63a654c95b57d5e8c16f7ce21b25a3f745d6d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/692.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/692.js#L4-L6)

```diff
-   64284: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
+   64534: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       textureMergerPixelShaderWGSL: () => AU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/692.js` (Changed code · before: `L8-L88` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0c367688340219bb7c5d9a8441b63a654c95b57d5e8c16f7ce21b25a3f745d6dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0c367688340219bb7c5d9a8441b63a654c95b57d5e8c16f7ce21b25a3f745d6d) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/692.js#L8-L11) · [Before (L8-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/692.js#L8-L88)

```diff
-     var OM = iM(40964);
-     const SM = "harmonicsFunctions",
-       jM = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   64424: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
-     });
-     var OM = iM(40964);
-     iM(44881), iM(44885);
-     const SM = "openpbrUboDeclaration",
- ... (65 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "textureMergerPixelShader",
+       QU = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
+     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/693.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/693.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/693.js` (Changed code · before: `L4-L96` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/693.js#L4) · [Before (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/693.js#L4-L96)

```diff
-   64392: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "openpbrDielectricReflectance",
-       jM = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   64397: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
- ... (77 more removed lines; see GitHub link above)
+   64543: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/693.js` (Changed code · before: `L98` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/693.js#L6) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/693.js#L98)

```diff
-       openpbrPixelShader: () => Pi
+       textureMergerPixelShader: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/693.js` (Changed code · before: `L100-L285` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/693.js#L8-L11) · [Before (L100-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/693.js#L100-L285)

```diff
-     var OM = iM(40964),
-       SM = iM(44731),
-       jM = iM(44733),
-       aM = iM(44738),
-       PM = iM(64388),
-       nM = iM(44723);
-     const QM = "openpbrFragmentDeclaration",
-       zM = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
-     OM.e.IncludesShadersStore[QM] || (OM.e.IncludesShadersStore[QM] = zM);
-     const LM = {
-       name: QM,
-       shader: zM
-     };
-     var mM = iM(44525),
-       HM = iM(44534),
-       hM = iM(64376),
- ... (170 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "textureMergerPixelShader",
+       QU = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
+     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/694.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/694.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/694.js` (Changed code · before: `L4-L83` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/694.js#L4) · [Before (L4-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/694.js#L4-L83)

```diff
-   64437: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "openpbrDielectricReflectance",
-       jM = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   64442: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
- ... (64 more removed lines; see GitHub link above)
+   64551: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/694.js` (Changed code · before: `L85` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/694.js#L6) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/694.js#L85)

```diff
-       openpbrPixelShaderWGSL: () => ji
+       proceduralVertexShaderWGSL: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/694.js` (Changed code · before: `L87-L266` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bc) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/694.js#L8-L11) · [Before (L87-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/694.js#L87-L266)

```diff
-     var OM = iM(40964),
-       SM = iM(45086),
-       jM = iM(45095),
-       aM = iM(45098),
-       PM = iM(44881),
-       nM = iM(44885),
-       QM = iM(64424),
-       zM = iM(44935),
-       LM = iM(64293),
-       mM = iM(45106),
-       HM = iM(45129),
-       hM = iM(64296);
-     const JM = "openpbrFragmentSamplersDeclaration",
-       dM = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
-     OM.e.IncludesShadersStoreWGSL[JM] || (OM.e.IncludesShadersStoreWGSL[JM] = dM);
-     const yM = {
- ... (164 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "proceduralVertexShader",
+       QU = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
+     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/695.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/695.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36)

#### 1. `bundles/preprod.bloxd.io/chunks/js/695.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/695.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/695.js#L4)

```diff
-   64481: (MM, rM, iM) => {
+   64554: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/695.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/695.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/695.js#L6)

```diff
-       textureMergerPixelShaderWGSL: () => aM
+       proceduralVertexShader: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/695.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/695.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/695.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "textureMergerPixelShader",
-       jM = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
-     OM.e.ShadersStoreWGSL[SM] || (OM.e.ShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "proceduralVertexShader",
+       QU = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
+     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/696.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/696.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13)

#### 1. `bundles/preprod.bloxd.io/chunks/js/696.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/696.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/696.js#L4)

```diff
-   64489: (MM, rM, iM) => {
+   64561: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/696.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/696.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/696.js#L6)

```diff
-       textureMergerPixelShader: () => aM
+       greasedLinePixelShaderWGSL: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/696.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/696.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/696.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "textureMergerPixelShader",
-       jM = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
-     OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "greasedLinePixelShader",
+       QU = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAn … [truncated]
+     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/697.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/697.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/697.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/697.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/697.js#L4)

```diff
-   64492: (MM, rM, iM) => {
+   64568: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/697.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/697.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/697.js#L6)

```diff
-       proceduralVertexShaderWGSL: () => aM
+       greasedLinePixelShader: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/697.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/697.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/697.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "proceduralVertexShader",
-       jM = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
-     OM.e.ShadersStoreWGSL[SM] || (OM.e.ShadersStoreWGSL[SM] = jM);
+     var cU = zU(40961);
+     const yU = "greasedLinePixelShader",
+       QU = "precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeA … [truncated]
+     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/698.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/698.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73)

#### 1. `bundles/preprod.bloxd.io/chunks/js/698.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/698.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/698.js#L4)

```diff
-   64495: (MM, rM, iM) => {
+   64572: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/698.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/698.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/698.js#L6)

```diff
-       proceduralVertexShader: () => aM
+       rebuildScenePbrPipelines: () => FU,
+       rebuildSceneRenderables: () => oU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/698.js` (Changed code · before: `L8-L14` → after: `L9-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73) · [After (L9-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/698.js#L9-L192) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/698.js#L8-L14)

```diff
-     var OM = iM(40964);
-     const SM = "proceduralVertexShader",
-       jM = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
-     OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
+     var cU = zU(44400),
+       yU = (UU, XU) => UU.order - XU.order,
+       QU = 8,
+       AU = UU => oU(UU);
+     async function FU(UU) {
+       let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       await DU(UU, "pbr", XU)
+     }
+     async function oU(UU) {
+       await DU(UU, void 0, !1)
+     }
+     async function DU(UU, XU, FU) {
+       const oU = UU;
+       if (!oU._built && !FU) return;
+       const DU = oU._lightListVersion ?? 0,
+         EU = oU.surface.engine,
+ ... (168 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/84.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/84.js` (844 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L4-L5)

```diff
-   9825: (MM, rM) => {
-     rM.e = 8, rM.m = function(MM, rM, iM, OM) {
+   9788: (UU, XU) => {
+     XU.b = 8, XU.g = function(UU, XU, zU, cU) {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L11)

```diff
-     }, rM.i = function(MM) {
+     }, XU.d = function(UU) {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L25)

```diff
-   9890: (MM, rM, iM) => {
+   9864: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L28-L31` → after: `L29-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L29-L30) · [Before (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L28-L31)

```diff
-       E: () => QM,
-       I: () => mM,
-       b: () => OM,
-       e: () => SM,
+       G: () => NU,
+       d: () => cU,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L33)

```diff
-       i: () => nM,
+       h: () => tU,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L36` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L35) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L36)

```diff
-       o: () => aM,
+       m: () => FU,
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L38-L39` → after: `L37-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L37-L39) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L38-L39)

```diff
-       u: () => HM,
-       y: () => JM
+       t: () => QU,
+       v: () => IU,
+       z: () => aU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L41)

```diff
-     const OM = 45 == iM.j ? ["Conveyor Belt", "Splitter", "Sorting Gate", "Belt Loader", "Fast Belt", "Belt Lift", "Belt Drop", "Belt Tunnel", "Express Belt", "Fast Loader"] : null,
+     const cU = 46 == zU.j ? ["Conveyor Belt", "Splitter", "Sorting Gate", "Belt Loader", "Fast Belt", "Belt Lift", "Belt Drop", "Belt Tunnel", "Express Belt", "Fast Loader"] : null,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L105)

```diff
-   9895: (MM, rM, iM) => {
+   9867: (UU, XU, zU) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L107` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L107-L108) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L107)

```diff
-       C: () => mM,
+       B: () => YU,
+       E: () => IU,
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L112-L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L113) · [Before (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L112-L113)

```diff
-       O: () => CM,
-       P: () => EM,
+       Q: () => kU,
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L115-L118` → after: `L115-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L115-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L115-L118) · [Before (L115-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L115-L118)

```diff
-       V: () => QM,
-       Z: () => dM,
-       ab: () => yM,
-       bb: () => nM,
+       U: () => tU,
+       W: () => gU,
+       _: () => oU,
+       b: () => yU,
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L121-L126` → after: `L122-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L122-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L122-L126) · [Before (L121-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L121-L126)

```diff
-       j: () => jM,
-       k: () => GM,
-       m: () => JM,
-       q: () => wM,
-       t: () => tM,
-       x: () => eM,
+       l: () => aU,
+       n: () => dU,
+       r: () => LU,
+       u: () => PU,
+       w: () => WU,
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L129)

```diff
-     var OM = iM(625);
+     var cU = zU(646);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L139)

```diff
-       return rM ? `${jM}|meta|rot${MM}${PM}` : 1 === MM ? jM : `${jM}|meta|rot${MM}`
+       return XU ? `${QU}|meta|rot${UU}${FU}` : 1 === UU ? QU : `${QU}|meta|rot${UU}`
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L143)

```diff
-       return MM.endsWith(PM) && MM.startsWith(`${jM}|`)
+       return UU.endsWith(FU) && UU.startsWith(`${QU}|`)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L183)

```diff
-     const UM = 45 == iM.j ? ["Conveyor Belt", "Fast Belt", "Express Belt"] : null,
+     const BU = 46 == zU.j ? ["Conveyor Belt", "Fast Belt", "Express Belt"] : null,
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L187)

```diff
-       return null !== iM ? `${MM}|meta|rot${rM}|${iM}` : 1 === rM ? MM : `${MM}|meta|rot${rM}`
+       return null !== zU ? `${UU}|meta|rot${XU}|${zU}` : 1 === XU ? UU : `${UU}|meta|rot${XU}`
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L189)

```diff
-     const eM = 45 == iM.j ? ["Burner Drill", "Crusher", "Smelter", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Centrifuge", "Synthesizer", "Mob Farm"] : nu … [truncated]
+     const PU = 46 == zU.j ? ["Burner Drill", "Crusher", "Smelter", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Centrifuge", "Synthesizer", "Mob Farm"] : nu … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L191-L192` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L191-L192) · [Before (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L191-L192)

```diff
-       wM = 7 * OM.y,
-       tM = 4 * OM.y
+       dU = 7 * cU.D,
+       LU = 4 * cU.D
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L194)

```diff
-   9855: (MM, rM, iM) => {
+   9827: (UU, XU, zU) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L196)

```diff
-       c: () => OM
+       d: () => cU
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L205)

```diff
-   9816: (MM, rM, iM) => {
+   9782: (UU, XU, zU) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L209-L210` → after: `L208-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L208-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L208-L210) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L209-L210)

```diff
-       g: () => vM,
-       k: () => oM,
+       f: () => mU,
+       h: () => HU,
+       j: () => nU,
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L213-L215` → after: `L213-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L213-L215) · [Before (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L213-L215)

```diff
-       t: () => FM,
-       w: () => NM,
-       z: () => WM
+       r: () => VU,
+       u: () => SU,
+       x: () => OU
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L217-L233` → after: `L217-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L217-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L217-L234) · [Before (L217-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L217-L233)

```diff
-     var OM = iM(9825);
-     if (45 == iM.j) var SM = iM(187);
-     var jM = iM(9832),
-       aM = iM(9904),
-       PM = iM(9913),
-       nM = iM(9845),
-       QM = iM(3593),
-       zM = iM(332),
-       LM = iM(4843),
-       mM = iM(9863),
-       HM = iM(620),
-       hM = iM(4573),
-       JM = iM(9839),
-       dM = iM(9877);
-     if (45 == iM.j) var yM = iM(9918);
-     var lM = iM(9925),
- ... (1 more removed lines; see GitHub link above)
+     var cU = zU(9788);
+     if (46 == zU.j) var yU = zU(220);
+     var QU = zU(9792),
+       AU = zU(9874),
+       FU = zU(9882),
+       oU = zU(9885),
+       DU = zU(9814),
+       EU = zU(3557),
+       YU = zU(344),
+       NU = zU(4895),
+       IU = zU(9834),
+       pU = zU(638),
+       aU = zU(4602),
+       tU = zU(9808),
+       gU = zU(9848);
+     if (46 == zU.j) var kU = zU(9894);
+ ... (2 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L253` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L254) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L253)

```diff
-       Ch: [14, 8, 11],
+       Pp: [14, 8, 11],
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L256` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L257) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L256)

```diff
-         tool: [...zM.ce],
+         tool: [...YU.we],
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L280` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L281) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L280)

```diff
-     const CM = (0, OM.i)([
+     const PU = (0, cU.d)([
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L286` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L287) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L286)

```diff
-       eM = [(0, JM.hc)("Maple Stairs", {
+       WU = [(0, tU.ec)("Maple Stairs", {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L293` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L294) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L293)

```diff
-       }), (0, JM.hc)("Pine Stairs", {
+       }), (0, tU.ec)("Pine Stairs", {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L300` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L301) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L300)

```diff
-       }), (0, JM.hc)("Plum Stairs", {
+       }), (0, tU.ec)("Plum Stairs", {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L307` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L308) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L307)

```diff
-       }), (0, JM.hc)("Cedar Stairs", {
+       }), (0, tU.ec)("Cedar Stairs", {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L314` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L315) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L314)

```diff
-       }), (0, JM.hc)("Aspen Stairs", {
+       }), (0, tU.ec)("Aspen Stairs", {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L321` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L322) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L321)

```diff
-       }), (0, JM.hc)("Jungle Stairs", {
+       }), (0, tU.ec)("Jungle Stairs", {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L328` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L329) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L328)

```diff
-       }), (0, JM.hc)("Palm Stairs", {
+       }), (0, tU.ec)("Palm Stairs", {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L335` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L336) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L335)

```diff
-       }), (0, JM.hc)("Pear Stairs", {
+       }), (0, tU.ec)("Pear Stairs", {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L342` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L343) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L342)

```diff
-       }), (0, JM.hc)("Cherry Stairs", {
+       }), (0, tU.ec)("Cherry Stairs", {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L349` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L350) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L349)

```diff
-       }), (0, JM.hc)("Spectral Stairs", {
+       }), (0, tU.ec)("Spectral Stairs", {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L356` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L357) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L356)

```diff
-       }), (0, JM.hc)("Mango Stairs", {
+       }), (0, tU.ec)("Mango Stairs", {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L363` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L364) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L363)

```diff
-       }), (0, JM.hc)("Messy Stone Stairs", {
+       }), (0, tU.ec)("Messy Stone Stairs", {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L370` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L371) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L370)

```diff
-       }), (0, JM.hc)("Stone Stairs", {
+       }), (0, tU.ec)("Stone Stairs", {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L377` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L378) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L377)

```diff
-       }), (0, JM.hc)("Smooth Stone Stairs", {
+       }), (0, tU.ec)("Smooth Stone Stairs", {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L384` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L385) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L384)

```diff
-       }), (0, JM.hc)("Engraved Stone Stairs", {
+       }), (0, tU.ec)("Engraved Stone Stairs", {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L391` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L392) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L391)

```diff
-       }), (0, JM.hc)("Stone Bricks Stairs", {
+       }), (0, tU.ec)("Stone Bricks Stairs", {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L398` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L399) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L398)

```diff
-       }), (0, JM.hc)("Mossy Stone Stairs", {
+       }), (0, tU.ec)("Mossy Stone Stairs", {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L405` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L406) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L405)

```diff
-       }), (0, JM.hc)("Mossy Stone Bricks Stairs", {
+       }), (0, tU.ec)("Mossy Stone Bricks Stairs", {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L412` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L413) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L412)

```diff
-       }), (0, JM.hc)("Andesite Stairs", {
+       }), (0, tU.ec)("Andesite Stairs", {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L419` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L420) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L419)

```diff
-       }), (0, JM.hc)("Smooth Andesite Stairs", {
+       }), (0, tU.ec)("Smooth Andesite Stairs", {
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L426` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L427) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L426)

```diff
-       }), (0, JM.hc)("Engraved Andesite Stairs", {
+       }), (0, tU.ec)("Engraved Andesite Stairs", {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L433` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L434) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L433)

```diff
-       }), (0, JM.hc)("Andesite Bricks Stairs", {
+       }), (0, tU.ec)("Andesite Bricks Stairs", {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L440` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L441) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L440)

```diff
-       }), (0, JM.hc)("Diorite Stairs", {
+       }), (0, tU.ec)("Diorite Stairs", {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L447` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L448) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L447)

```diff
-       }), (0, JM.hc)("Smooth Diorite Stairs", {
+       }), (0, tU.ec)("Smooth Diorite Stairs", {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L454` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L455) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L454)

```diff
-       }), (0, JM.hc)("Engraved Diorite Stairs", {
+       }), (0, tU.ec)("Engraved Diorite Stairs", {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L461` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L462) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L461)

```diff
-       }), (0, JM.hc)("Diorite Bricks Stairs", {
+       }), (0, tU.ec)("Diorite Bricks Stairs", {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L468` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L469) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L468)

```diff
-       }), (0, JM.hc)("Granite Stairs", {
+       }), (0, tU.ec)("Granite Stairs", {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L475` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L476) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L475)

```diff
-       }), (0, JM.hc)("Smooth Granite Stairs", {
+       }), (0, tU.ec)("Smooth Granite Stairs", {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L482` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L483) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L482)

```diff
-       }), (0, JM.hc)("Engraved Granite Stairs", {
+       }), (0, tU.ec)("Engraved Granite Stairs", {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L489` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L490) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L489)

```diff
-       }), (0, JM.hc)("Granite Bricks Stairs", {
+       }), (0, tU.ec)("Granite Bricks Stairs", {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L496` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L497) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L496)

```diff
-       }), (0, JM.hc)("Sandstone Stairs", {
+       }), (0, tU.ec)("Sandstone Stairs", {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L503` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L504) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L503)

```diff
-       }), (0, JM.hc)("Smooth Sandstone Stairs", {
+       }), (0, tU.ec)("Smooth Sandstone Stairs", {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L510` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L511) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L510)

```diff
-       }), (0, JM.hc)("Engraved Sandstone Stairs", {
+       }), (0, tU.ec)("Engraved Sandstone Stairs", {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L517` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L518) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L517)

```diff
-       }), (0, JM.hc)("Marked Sandstone Stairs", {
+       }), (0, tU.ec)("Marked Sandstone Stairs", {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L524` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L525) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L524)

```diff
-       }), (0, JM.hc)("Sandstone Bricks Stairs", {
+       }), (0, tU.ec)("Sandstone Bricks Stairs", {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L531` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L532) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L531)

```diff
-       }), (0, JM.hc)("Red Sandstone Stairs", {
+       }), (0, tU.ec)("Red Sandstone Stairs", {
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L538` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L539) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L538)

```diff
-       }), (0, JM.hc)("Smooth Red Sandstone Stairs", {
+       }), (0, tU.ec)("Smooth Red Sandstone Stairs", {
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L545` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L546) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L545)

```diff
-       }), (0, JM.hc)("Engraved Red Sandstone Stairs", {
+       }), (0, tU.ec)("Engraved Red Sandstone Stairs", {
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L552` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L553) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L552)

```diff
-       }), (0, JM.hc)("Marked Red Sandstone Stairs", {
+       }), (0, tU.ec)("Marked Red Sandstone Stairs", {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L559` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L560) · [Before (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L559)

```diff
-       }), (0, JM.hc)("Red Sandstone Bricks Stairs", {
+       }), (0, tU.ec)("Red Sandstone Bricks Stairs", {
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L566` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L567) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L566)

```diff
-       }), (0, JM.hc)("Bricks Stairs", {
+       }), (0, tU.ec)("Bricks Stairs", {
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L573` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L574) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L573)

```diff
-       }), (0, JM.hc)("Ice Bricks Stairs", {
+       }), (0, tU.ec)("Ice Bricks Stairs", {
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L582` → after: `L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L583) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L582)

```diff
-       }), ...(0, JM.z)("Concrete", (MM => ({
+       }), ...(0, tU.r)("Concrete", (UU => ({
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L584` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L585) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L584)

```diff
-           translationKey: `item:${(0,zM.me)(MM)}ConcreteStairs`
+           translationKey: `item:${(0,YU.Ie)(UU)}ConcreteStairs`
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L587` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L588) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L587)

```diff
-         textureInfo: `${(0,zM.oe)(MM)}_concrete`,
+         textureInfo: `${(0,YU.Me)(UU)}_concrete`,
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L589` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L590) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L589)

```diff
-       }))), ...(0, JM.z)("Chalk", (MM => {
+       }))), ...(0, tU.r)("Chalk", (UU => {
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L591` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L592) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L591)

```diff
-           colour: `$t(colour:${(0,zM.oe)(MM)})`
+           colour: `$t(colour:${(0,YU.Me)(UU)})`
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L603` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L604) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L603)

```diff
-           textureInfo: `chalk_${(0,zM.oe)(MM)}`,
+           textureInfo: `chalk_${(0,YU.Me)(UU)}`,
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L606` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L607) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L606)

```diff
-       })), ...(0, JM.z)("Chalk Bricks", (MM => {
+       })), ...(0, tU.r)("Chalk Bricks", (UU => {
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L608` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L609) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L608)

```diff
-           colour: `$t(colour:${(0,zM.oe)(MM)})`
+           colour: `$t(colour:${(0,YU.Me)(UU)})`
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L620` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L621) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L620)

```diff
-           textureInfo: `chalk_bricks_${(0,zM.oe)(MM)}`,
+           textureInfo: `chalk_bricks_${(0,YU.Me)(UU)}`,
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L966` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L967) · [Before (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L966)

```diff
-             "Golem Pickaxe": LM.o
+             "Golem Pickaxe": NU.p
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L986` → after: `L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L987) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L986)

```diff
-             "Golem Pickaxe": LM.o
+             "Golem Pickaxe": NU.p
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1004` → after: `L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L1005) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L1004)

```diff
-             "Golem Pickaxe": LM.o
+             "Golem Pickaxe": NU.p
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1008` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L1009) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L1008)

```diff
-           Ch: [4, 4, 0]
+           Pp: [4, 4, 0]
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1018` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L1019) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L1018)

```diff
-           Ch: [0, 0, 2]
+           Pp: [0, 0, 2]
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1028` → after: `L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L1029) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L1028)

```diff
-           Ch: [1, 3, 1]
+           Pp: [1, 3, 1]
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1044` → after: `L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L1045) · [Before (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L1044)

```diff
-             "Golem Pickaxe": LM.o
+             "Golem Pickaxe": NU.p
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1050` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L1051) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L1050)

```diff
-           Ch: [2, 5, 5]
+           Pp: [2, 5, 5]
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1584` → after: `L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L1585) · [Before (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L1584)

```diff
-           Ch: [14, 10, 4]
+           Pp: [14, 10, 4]
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1830` → after: `L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L1831) · [Before (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L1830)

```diff
-           Ch: [14, 14, 14]
+           Pp: [14, 14, 14]
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1842` → after: `L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L1843) · [Before (L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L1842)

```diff
-           CH: !0,
+           BI: !0,
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1982` → after: `L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L1983) · [Before (L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L1982)

```diff
-           Ch: [5, 14, 14]
+           Pp: [5, 14, 14]
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1995` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L1996) · [Before (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L1995)

```diff
-           Ch: [15, 15, 13]
+           Pp: [15, 15, 13]
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L2209` → after: `L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L2210) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L2209)

```diff
-         ...(0, JM.Jb)("Furnace", {
+         ...(0, tU.zb)("Furnace", {
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L2219` → after: `L2220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R2220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L2220) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L2219)

```diff
-           Ch: [8, 5, 2],
+           Pp: [8, 5, 2],
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L2222` → after: `L2223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L2223) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L2222)

```diff
-         ...(0, JM.Jb)("Workbench", {
+         ...(0, tU.zb)("Workbench", {
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L2444` → after: `L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L2445) · [Before (L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L2444)

```diff
-         ...(0, JM.Lb)("Chest", {
+         ...(0, tU.Ab)("Chest", {
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L2508` → after: `L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L2509) · [Before (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L2508)

```diff
-         ...(0, JM.Jb)("Maple Ladder", {
+         ...(0, tU.zb)("Maple Ladder", {
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L2521` → after: `L2522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R2522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L2522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L2522) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L2521)

```diff
-         ...(0, JM.Jb)("Vines", {
+         ...(0, tU.zb)("Vines", {
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L2542` → after: `L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L2543) · [Before (L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L2542)

```diff
-         ...(0, JM.Jb)("Iron Ladder", {
+         ...(0, tU.zb)("Iron Ladder", {
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3159` → after: `L3160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3160) · [Before (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3159)

```diff
-         ...(0, JM.yb)("Wheat", {
+         ...(0, tU.pb)("Wheat", {
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3345` → after: `L3346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3346) · [Before (L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3345)

```diff
-         ...(0, JM.Jb)("White Bed", {
+         ...(0, tU.zb)("White Bed", {
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3358` → after: `L3359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3359) · [Before (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3358)

```diff
-         ...(0, JM.Jb)("_White Bed Head", {
+         ...(0, tU.zb)("_White Bed Head", {
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3369` → after: `L3370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3370) · [Before (L3369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3369)

```diff
-         ...(0, JM.Jb)("Orange Bed", {
+         ...(0, tU.zb)("Orange Bed", {
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3382` → after: `L3383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3383) · [Before (L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3382)

```diff
-         ...(0, JM.Jb)("_Orange Bed Head", {
+         ...(0, tU.zb)("_Orange Bed Head", {
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3393` → after: `L3394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3394) · [Before (L3393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3393)

```diff
-         ...(0, JM.Jb)("Magenta Bed", {
+         ...(0, tU.zb)("Magenta Bed", {
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3406` → after: `L3407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3407) · [Before (L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3406)

```diff
-         ...(0, JM.Jb)("_Magenta Bed Head", {
+         ...(0, tU.zb)("_Magenta Bed Head", {
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3417` → after: `L3418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3418) · [Before (L3417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3417)

```diff
-         ...(0, JM.Jb)("Light Blue Bed", {
+         ...(0, tU.zb)("Light Blue Bed", {
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3430` → after: `L3431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3431) · [Before (L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3430)

```diff
-         ...(0, JM.Jb)("_Light Blue Bed Head", {
+         ...(0, tU.zb)("_Light Blue Bed Head", {
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3441` → after: `L3442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3442) · [Before (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3441)

```diff
-         ...(0, JM.Jb)("Yellow Bed", {
+         ...(0, tU.zb)("Yellow Bed", {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3454` → after: `L3455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3455) · [Before (L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3454)

```diff
-         ...(0, JM.Jb)("_Yellow Bed Head", {
+         ...(0, tU.zb)("_Yellow Bed Head", {
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3465` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3466) · [Before (L3465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3465)

```diff
-         ...(0, JM.Jb)("Lime Bed", {
+         ...(0, tU.zb)("Lime Bed", {
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3478` → after: `L3479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3479) · [Before (L3478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3478)

```diff
-         ...(0, JM.Jb)("_Lime Bed Head", {
+         ...(0, tU.zb)("_Lime Bed Head", {
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3489` → after: `L3490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3490) · [Before (L3489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3489)

```diff
-         ...(0, JM.Jb)("Pink Bed", {
+         ...(0, tU.zb)("Pink Bed", {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3502` → after: `L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3503) · [Before (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3502)

```diff
-         ...(0, JM.Jb)("_Pink Bed Head", {
+         ...(0, tU.zb)("_Pink Bed Head", {
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3513` → after: `L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3514) · [Before (L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3513)

```diff
-         ...(0, JM.Jb)("Gray Bed", {
+         ...(0, tU.zb)("Gray Bed", {
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3526` → after: `L3527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3527) · [Before (L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3526)

```diff
-         ...(0, JM.Jb)("_Gray Bed Head", {
+         ...(0, tU.zb)("_Gray Bed Head", {
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3537` → after: `L3538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3538) · [Before (L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3537)

```diff
-         ...(0, JM.Jb)("Light Gray Bed", {
+         ...(0, tU.zb)("Light Gray Bed", {
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3550` → after: `L3551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3551) · [Before (L3550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3550)

```diff
-         ...(0, JM.Jb)("_Light Gray Bed Head", {
+         ...(0, tU.zb)("_Light Gray Bed Head", {
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3561` → after: `L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3562) · [Before (L3561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3561)

```diff
-         ...(0, JM.Jb)("Cyan Bed", {
+         ...(0, tU.zb)("Cyan Bed", {
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3574` → after: `L3575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3575) · [Before (L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3574)

```diff
-         ...(0, JM.Jb)("_Cyan Bed Head", {
+         ...(0, tU.zb)("_Cyan Bed Head", {
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3585` → after: `L3586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3586) · [Before (L3585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3585)

```diff
-         ...(0, JM.Jb)("Purple Bed", {
+         ...(0, tU.zb)("Purple Bed", {
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3598` → after: `L3599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3599) · [Before (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3598)

```diff
-         ...(0, JM.Jb)("_Purple Bed Head", {
+         ...(0, tU.zb)("_Purple Bed Head", {
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3609` → after: `L3610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3610) · [Before (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3609)

```diff
-         ...(0, JM.Jb)("Blue Bed", {
+         ...(0, tU.zb)("Blue Bed", {
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3622` → after: `L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3623) · [Before (L3622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3622)

```diff
-         ...(0, JM.Jb)("_Blue Bed Head", {
+         ...(0, tU.zb)("_Blue Bed Head", {
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3633` → after: `L3634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3634) · [Before (L3633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3633)

```diff
-         ...(0, JM.Jb)("Brown Bed", {
+         ...(0, tU.zb)("Brown Bed", {
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3646` → after: `L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3647) · [Before (L3646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3646)

```diff
-         ...(0, JM.Jb)("_Brown Bed Head", {
+         ...(0, tU.zb)("_Brown Bed Head", {
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3657` → after: `L3658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3658) · [Before (L3657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3657)

```diff
-         ...(0, JM.Jb)("Green Bed", {
+         ...(0, tU.zb)("Green Bed", {
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3670` → after: `L3671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3671) · [Before (L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3670)

```diff
-         ...(0, JM.Jb)("_Green Bed Head", {
+         ...(0, tU.zb)("_Green Bed Head", {
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3681` → after: `L3682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3682) · [Before (L3681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3681)

```diff
-         ...(0, JM.Jb)("Red Bed", {
+         ...(0, tU.zb)("Red Bed", {
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3694` → after: `L3695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3695) · [Before (L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3694)

```diff
-         ...(0, JM.Jb)("_Red Bed Head", {
+         ...(0, tU.zb)("_Red Bed Head", {
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3705` → after: `L3706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3706) · [Before (L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3705)

```diff
-         ...(0, JM.Jb)("Black Bed", {
+         ...(0, tU.zb)("Black Bed", {
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3718` → after: `L3719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3719) · [Before (L3718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3718)

```diff
-         ...(0, JM.Jb)("_Black Bed Head", {
+         ...(0, tU.zb)("_Black Bed Head", {
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3752` → after: `L3753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3753) · [Before (L3752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3752)

```diff
-             "Golem Pickaxe": LM.o
+             "Golem Pickaxe": NU.p
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3758` → after: `L3759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3759) · [Before (L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3758)

```diff
-           Ch: [6, 6, 6]
+           Pp: [6, 6, 6]
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3760` → after: `L3761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3761) · [Before (L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3760)

```diff
-         ...(0, JM.Lb)("Moonstone Chest", {
+         ...(0, tU.Ab)("Moonstone Chest", {
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3792` → after: `L3793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L3793) · [Before (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L3792)

```diff
-           Ch: [9, 3, 1]
+           Pp: [9, 3, 1]
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4873` → after: `L4874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L4874) · [Before (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L4873)

```diff
-         ...(0, JM.Pb)("Fallen Maple Leaves", {
+         ...(0, tU.Eb)("Fallen Maple Leaves", {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4885` → after: `L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L4886) · [Before (L4885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L4885)

```diff
-         ...(0, JM.Pb)("Maple Slab", {
+         ...(0, tU.Eb)("Maple Slab", {
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4897` → after: `L4898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L4898) · [Before (L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L4897)

```diff
-         ...(0, JM.Pb)("Pine Slab", {
+         ...(0, tU.Eb)("Pine Slab", {
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4909` → after: `L4910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L4910) · [Before (L4909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L4909)

```diff
-         ...(0, JM.Pb)("Plum Slab", {
+         ...(0, tU.Eb)("Plum Slab", {
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4921` → after: `L4922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L4922) · [Before (L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L4921)

```diff
-         ...(0, JM.Pb)("Cedar Slab", {
+         ...(0, tU.Eb)("Cedar Slab", {
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4933` → after: `L4934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L4934) · [Before (L4933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L4933)

```diff
-         ...(0, JM.Pb)("Aspen Slab", {
+         ...(0, tU.Eb)("Aspen Slab", {
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4945` → after: `L4946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L4946) · [Before (L4945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L4945)

```diff
-         ...(0, JM.Pb)("Jungle Slab", {
+         ...(0, tU.Eb)("Jungle Slab", {
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4957` → after: `L4958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L4958) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L4957)

```diff
-         ...(0, JM.Pb)("Palm Slab", {
+         ...(0, tU.Eb)("Palm Slab", {
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4969` → after: `L4970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L4970) · [Before (L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L4969)

```diff
-         ...(0, JM.Pb)("Dirt Slab", {
+         ...(0, tU.Eb)("Dirt Slab", {
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4981` → after: `L4982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L4982) · [Before (L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L4981)

```diff
-         ...(0, JM.Pb)("Grass Slab", {
+         ...(0, tU.Eb)("Grass Slab", {
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4993` → after: `L4994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L4994) · [Before (L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L4993)

```diff
-         ...(0, JM.Pb)("Messy Stone Slab", {
+         ...(0, tU.Eb)("Messy Stone Slab", {
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5005` → after: `L5006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5006) · [Before (L5005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5005)

```diff
-         ...(0, JM.Pb)("Stone Slab", {
+         ...(0, tU.Eb)("Stone Slab", {
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5017` → after: `L5018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5018) · [Before (L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5017)

```diff
-         ...(0, JM.Pb)("Smooth Stone Slab", {
+         ...(0, tU.Eb)("Smooth Stone Slab", {
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5029` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5030) · [Before (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5029)

```diff
-         ...(0, JM.Pb)("Engraved Stone Slab", {
+         ...(0, tU.Eb)("Engraved Stone Slab", {
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5041` → after: `L5042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5042) · [Before (L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5041)

```diff
-         ...(0, JM.Pb)("Stone Bricks Slab", {
+         ...(0, tU.Eb)("Stone Bricks Slab", {
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5053` → after: `L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5054) · [Before (L5053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5053)

```diff
-         ...(0, JM.Pb)("Mossy Stone Slab", {
+         ...(0, tU.Eb)("Mossy Stone Slab", {
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5065` → after: `L5066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5066) · [Before (L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5065)

```diff
-         ...(0, JM.Pb)("Mossy Stone Bricks Slab", {
+         ...(0, tU.Eb)("Mossy Stone Bricks Slab", {
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5077` → after: `L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5078) · [Before (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5077)

```diff
-         ...(0, JM.Pb)("Andesite Slab", {
+         ...(0, tU.Eb)("Andesite Slab", {
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5089` → after: `L5090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5090) · [Before (L5089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5089)

```diff
-         ...(0, JM.Pb)("Smooth Andesite Slab", {
+         ...(0, tU.Eb)("Smooth Andesite Slab", {
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5101` → after: `L5102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5102) · [Before (L5101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5101)

```diff
-         ...(0, JM.Pb)("Engraved Andesite Slab", {
+         ...(0, tU.Eb)("Engraved Andesite Slab", {
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5113` → after: `L5114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5114) · [Before (L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5113)

```diff
-         ...(0, JM.Pb)("Andesite Bricks Slab", {
+         ...(0, tU.Eb)("Andesite Bricks Slab", {
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5125` → after: `L5126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5126) · [Before (L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5125)

```diff
-         ...(0, JM.Pb)("Diorite Slab", {
+         ...(0, tU.Eb)("Diorite Slab", {
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5137` → after: `L5138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5138) · [Before (L5137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5137)

```diff
-         ...(0, JM.Pb)("Smooth Diorite Slab", {
+         ...(0, tU.Eb)("Smooth Diorite Slab", {
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5149` → after: `L5150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5150) · [Before (L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5149)

```diff
-         ...(0, JM.Pb)("Engraved Diorite Slab", {
+         ...(0, tU.Eb)("Engraved Diorite Slab", {
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5161` → after: `L5162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5162) · [Before (L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5161)

```diff
-         ...(0, JM.Pb)("Diorite Bricks Slab", {
+         ...(0, tU.Eb)("Diorite Bricks Slab", {
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5173` → after: `L5174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5174) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5173)

```diff
-         ...(0, JM.Pb)("Granite Slab", {
+         ...(0, tU.Eb)("Granite Slab", {
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5185` → after: `L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5186) · [Before (L5185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5185)

```diff
-         ...(0, JM.Pb)("Smooth Granite Slab", {
+         ...(0, tU.Eb)("Smooth Granite Slab", {
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5197` → after: `L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5198) · [Before (L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5197)

```diff
-         ...(0, JM.Pb)("Engraved Granite Slab", {
+         ...(0, tU.Eb)("Engraved Granite Slab", {
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5209` → after: `L5210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5210) · [Before (L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5209)

```diff
-         ...(0, JM.Pb)("Granite Bricks Slab", {
+         ...(0, tU.Eb)("Granite Bricks Slab", {
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5221` → after: `L5222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5222) · [Before (L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5221)

```diff
-         ...(0, JM.Pb)("Sandstone Slab", {
+         ...(0, tU.Eb)("Sandstone Slab", {
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5233` → after: `L5234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5234) · [Before (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5233)

```diff
-         ...(0, JM.Pb)("Smooth Sandstone Slab", {
+         ...(0, tU.Eb)("Smooth Sandstone Slab", {
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5244` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5245) · [Before (L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5244)

```diff
-         ...(0, JM.Pb)("Engraved Sandstone Slab", {
+         ...(0, tU.Eb)("Engraved Sandstone Slab", {
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5256` → after: `L5257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5257) · [Before (L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5256)

```diff
-         ...(0, JM.Pb)("Marked Sandstone Slab", {
+         ...(0, tU.Eb)("Marked Sandstone Slab", {
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5268` → after: `L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5269) · [Before (L5268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5268)

```diff
-         ...(0, JM.Pb)("Sandstone Bricks Slab", {
+         ...(0, tU.Eb)("Sandstone Bricks Slab", {
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5280` → after: `L5281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5281) · [Before (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5280)

```diff
-         ...(0, JM.Pb)("Red Sandstone Slab", {
+         ...(0, tU.Eb)("Red Sandstone Slab", {
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5292` → after: `L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5293) · [Before (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5292)

```diff
-         ...(0, JM.Pb)("Smooth Red Sandstone Slab", {
+         ...(0, tU.Eb)("Smooth Red Sandstone Slab", {
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5303` → after: `L5304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5304) · [Before (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5303)

```diff
-         ...(0, JM.Pb)("Engraved Red Sandstone Slab", {
+         ...(0, tU.Eb)("Engraved Red Sandstone Slab", {
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5315` → after: `L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5316) · [Before (L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5315)

```diff
-         ...(0, JM.Pb)("Marked Red Sandstone Slab", {
+         ...(0, tU.Eb)("Marked Red Sandstone Slab", {
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5327` → after: `L5328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5328) · [Before (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5327)

```diff
-         ...(0, JM.Pb)("Red Sandstone Bricks Slab", {
+         ...(0, tU.Eb)("Red Sandstone Bricks Slab", {
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5339` → after: `L5340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5340) · [Before (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5339)

```diff
-         ...(0, JM.Pb)("Bricks Slab", {
+         ...(0, tU.Eb)("Bricks Slab", {
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5351` → after: `L5352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5352) · [Before (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5351)

```diff
-         ...(0, JM.Pb)("Ice Bricks Slab", {
+         ...(0, tU.Eb)("Ice Bricks Slab", {
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5614` → after: `L5615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5615) · [Before (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5614)

```diff
-         ...(0, JM.Pb)("Pear Slab", {
+         ...(0, tU.Eb)("Pear Slab", {
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5683` → after: `L5684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5684) · [Before (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5683)

```diff
-         ...(0, JM.Jb)("Board", {
+         ...(0, tU.zb)("Board", {
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5791` → after: `L5792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5792) · [Before (L5791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5791)

```diff
-         ...(0, JM.Jb)("Attached Watermelon Stem", {
+         ...(0, tU.zb)("Attached Watermelon Stem", {
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5835` → after: `L5836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5836) · [Before (L5835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5835)

```diff
-         ...(0, JM.Jb)("Attached Pumpkin Stem", {
+         ...(0, tU.zb)("Attached Pumpkin Stem", {
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5866` → after: `L5867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5867) · [Before (L5866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5866)

```diff
-         ...(0, JM.Lb)("Carved Pumpkin", {
+         ...(0, tU.Ab)("Carved Pumpkin", {
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5875` → after: `L5876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5876) · [Before (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5875)

```diff
-         ...(0, JM.Lb)("Jack o'Lantern", {
+         ...(0, tU.Ab)("Jack o'Lantern", {
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5883` → after: `L5884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5884) · [Before (L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5883)

```diff
-           Ch: [14, 10, 4]
+           Pp: [14, 10, 4]
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5907` → after: `L5908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L5908) · [Before (L5907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L5907)

```diff
-         ...(0, JM.Jb)("Attached Melon Stem", {
+         ...(0, tU.zb)("Attached Melon Stem", {
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6155` → after: `L6156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6156) · [Before (L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6155)

```diff
-         ...(0, JM.Jb)("Potion Table", {
+         ...(0, tU.zb)("Potion Table", {
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6172` → after: `L6173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6173) · [Before (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6172)

```diff
-         ...(0, JM.Jb)("Pine Ladder", {
+         ...(0, tU.zb)("Pine Ladder", {
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6188` → after: `L6189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6189) · [Before (L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6188)

```diff
-         ...(0, JM.Jb)("Plum Ladder", {
+         ...(0, tU.zb)("Plum Ladder", {
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6204` → after: `L6205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6205) · [Before (L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6204)

```diff
-         ...(0, JM.Jb)("Cedar Ladder", {
+         ...(0, tU.zb)("Cedar Ladder", {
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6219` → after: `L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6220) · [Before (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6219)

```diff
-         ...(0, JM.Jb)("Aspen Ladder", {
+         ...(0, tU.zb)("Aspen Ladder", {
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6234` → after: `L6235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6235) · [Before (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6234)

```diff
-         ...(0, JM.Jb)("Jungle Ladder", {
+         ...(0, tU.zb)("Jungle Ladder", {
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6250` → after: `L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6251) · [Before (L6250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6250)

```diff
-         ...(0, JM.Jb)("Palm Ladder", {
+         ...(0, tU.zb)("Palm Ladder", {
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6265` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6266) · [Before (L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6265)

```diff
-         ...(0, JM.Jb)("Pear Ladder", {
+         ...(0, tU.zb)("Pear Ladder", {
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6289` → after: `L6290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6290) · [Before (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6289)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6306` → after: `L6307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6307) · [Before (L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6306)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6323` → after: `L6324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6324) · [Before (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6323)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6340` → after: `L6341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6341) · [Before (L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6340)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6357` → after: `L6358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6358) · [Before (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6357)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6374` → after: `L6375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6375) · [Before (L6374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6374)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6391` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6392) · [Before (L6391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6391)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6408` → after: `L6409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6409) · [Before (L6408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6408)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6425` → after: `L6426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6426) · [Before (L6425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6425)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6442` → after: `L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6443) · [Before (L6442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6442)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6459` → after: `L6460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6460) · [Before (L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6459)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6476` → after: `L6477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6477) · [Before (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6476)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6493` → after: `L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6494) · [Before (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6493)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6510` → after: `L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6511) · [Before (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6510)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6527` → after: `L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6528) · [Before (L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6527)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6544` → after: `L6545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6545) · [Before (L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6544)

```diff
-           Hd: CM,
+           Ft: PU,
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6552` → after: `L6553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6553) · [Before (L6552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6552)

```diff
-         ...(0, JM.I)("Bookshelf", {
+         ...(0, tU.C)("Bookshelf", {
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6563` → after: `L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6564) · [Before (L6563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6563)

```diff
-         ...(0, JM.kb)("Mailbox", {
+         ...(0, tU.$)("Mailbox", {
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6590` → after: `L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6591) · [Before (L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6590)

```diff
-         ...(0, JM.yb)("Rice", {
+         ...(0, tU.pb)("Rice", {
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6622` → after: `L6623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6623) · [Before (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6622)

```diff
-         ...(0, JM.yb)("Cranberries", {
+         ...(0, tU.pb)("Cranberries", {
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6669` → after: `L6670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6670) · [Before (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6669)

```diff
-         ...(0, JM.yb)("Cotton", {
+         ...(0, tU.pb)("Cotton", {
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6823` → after: `L6824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6824) · [Before (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6823)

```diff
-         ...(0, JM.S)(),
+         ...(0, tU.M)(),
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6871` → after: `L6872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L6872) · [Before (L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L6871)

```diff
-         ...(0, JM.Pb)("Fallen Cherry Leaves", {
+         ...(0, tU.Eb)("Fallen Cherry Leaves", {
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7036` → after: `L7037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7037) · [Before (L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7036)

```diff
-         ...(0, JM.Pb)("Cherry Slab", {
+         ...(0, tU.Eb)("Cherry Slab", {
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7048` → after: `L7049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7049) · [Before (L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7048)

```diff
-         ...(0, JM.Jb)("Cherry Ladder", {
+         ...(0, tU.zb)("Cherry Ladder", {
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7221` → after: `L7222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7222) · [Before (L7221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7221)

```diff
-         ...(0, JM.yb)("Corn Seeds", {
+         ...(0, tU.pb)("Corn Seeds", {
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7247` → after: `L7248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7248) · [Before (L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7247)

```diff
-         ...(0, JM.yb)("Corn Plant", {
+         ...(0, tU.pb)("Corn Plant", {
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7277` → after: `L7278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7278) · [Before (L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7277)

```diff
-         ...(0, JM.Lb)("Loot Chest", {
+         ...(0, tU.Ab)("Loot Chest", {
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7311-L7312` → after: `L7312-L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7312-L7313) · [Before (L7311-L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7311-L7312)

```diff
-         ...(0, JM.L)((MM => `${MM} Paintball Explosive`), {
-           textureInfo: MM => [`explosive_paint_${(0,zM.oe)(MM)}_side`, `explosive_paint_${(0,zM.oe)(MM)}_top`],
+         ...(0, tU.F)((UU => `${UU} Paintball Explosive`), {
+           textureInfo: UU => [`explosive_paint_${(0,YU.Me)(UU)}_side`, `explosive_paint_${(0,YU.Me)(UU)}_top`],
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7317-L7318` → after: `L7318-L7319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7318-L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7318-L7319) · [Before (L7317-L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7317-L7318)

```diff
-         ...(0, JM.L)((MM => `${MM} Quick Paintball Explosive`), {
-           textureInfo: MM => `explosive_paint_quick_${(0,zM.oe)(MM)}`,
+         ...(0, tU.F)((UU => `${UU} Quick Paintball Explosive`), {
+           textureInfo: UU => `explosive_paint_quick_${(0,YU.Me)(UU)}`,
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7322-L7323` → after: `L7323-L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7323-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7323-L7324) · [Before (L7322-L7323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7322-L7323)

```diff
-         ...(0, JM.L)((MM => `${MM} Seeking Paintball Explosive`), {
-           textureInfo: MM => `explosive_paint_seeking_${(0,zM.oe)(MM)}`,
+         ...(0, tU.F)((UU => `${UU} Seeking Paintball Explosive`), {
+           textureInfo: UU => `explosive_paint_seeking_${(0,YU.Me)(UU)}`,
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7327-L7328` → after: `L7328-L7329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7328-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7328-L7329) · [Before (L7327-L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7327-L7328)

```diff
-         ...(0, JM.L)((MM => `${MM} Sticky Paintball Explosive`), {
-           textureInfo: MM => `explosive_paint_sticky_${(0,zM.oe)(MM)}`,
+         ...(0, tU.F)((UU => `${UU} Sticky Paintball Explosive`), {
+           textureInfo: UU => `explosive_paint_sticky_${(0,YU.Me)(UU)}`,
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7332` → after: `L7333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7333) · [Before (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7332)

```diff
-         ...(0, JM.Jb)("White Strongbed", {
+         ...(0, tU.zb)("White Strongbed", {
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7345` → after: `L7346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7346) · [Before (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7345)

```diff
-         ...(0, JM.Jb)("_White Strongbed Head", {
+         ...(0, tU.zb)("_White Strongbed Head", {
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7356` → after: `L7357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7357) · [Before (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7356)

```diff
-         ...(0, JM.Jb)("Orange Strongbed", {
+         ...(0, tU.zb)("Orange Strongbed", {
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7369` → after: `L7370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7370) · [Before (L7369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7369)

```diff
-         ...(0, JM.Jb)("_Orange Strongbed Head", {
+         ...(0, tU.zb)("_Orange Strongbed Head", {
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7380` → after: `L7381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7381) · [Before (L7380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7380)

```diff
-         ...(0, JM.Jb)("Magenta Strongbed", {
+         ...(0, tU.zb)("Magenta Strongbed", {
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7393` → after: `L7394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7394) · [Before (L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7393)

```diff
-         ...(0, JM.Jb)("_Magenta Strongbed Head", {
+         ...(0, tU.zb)("_Magenta Strongbed Head", {
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7404` → after: `L7405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7405) · [Before (L7404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7404)

```diff
-         ...(0, JM.Jb)("Light Blue Strongbed", {
+         ...(0, tU.zb)("Light Blue Strongbed", {
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7417` → after: `L7418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7418) · [Before (L7417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7417)

```diff
-         ...(0, JM.Jb)("_Light Blue Strongbed Head", {
+         ...(0, tU.zb)("_Light Blue Strongbed Head", {
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7428` → after: `L7429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7429) · [Before (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7428)

```diff
-         ...(0, JM.Jb)("Yellow Strongbed", {
+         ...(0, tU.zb)("Yellow Strongbed", {
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7441` → after: `L7442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7442) · [Before (L7441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7441)

```diff
-         ...(0, JM.Jb)("_Yellow Strongbed Head", {
+         ...(0, tU.zb)("_Yellow Strongbed Head", {
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7452` → after: `L7453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7453) · [Before (L7452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7452)

```diff
-         ...(0, JM.Jb)("Lime Strongbed", {
+         ...(0, tU.zb)("Lime Strongbed", {
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7465` → after: `L7466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7466) · [Before (L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7465)

```diff
-         ...(0, JM.Jb)("_Lime Strongbed Head", {
+         ...(0, tU.zb)("_Lime Strongbed Head", {
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7476` → after: `L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7477) · [Before (L7476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7476)

```diff
-         ...(0, JM.Jb)("Pink Strongbed", {
+         ...(0, tU.zb)("Pink Strongbed", {
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7489` → after: `L7490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7490) · [Before (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7489)

```diff
-         ...(0, JM.Jb)("_Pink Strongbed Head", {
+         ...(0, tU.zb)("_Pink Strongbed Head", {
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7500` → after: `L7501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7501) · [Before (L7500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7500)

```diff
-         ...(0, JM.Jb)("Gray Strongbed", {
+         ...(0, tU.zb)("Gray Strongbed", {
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7513` → after: `L7514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7514) · [Before (L7513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7513)

```diff
-         ...(0, JM.Jb)("_Gray Strongbed Head", {
+         ...(0, tU.zb)("_Gray Strongbed Head", {
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7524` → after: `L7525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7525) · [Before (L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7524)

```diff
-         ...(0, JM.Jb)("Light Gray Strongbed", {
+         ...(0, tU.zb)("Light Gray Strongbed", {
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7537` → after: `L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7538) · [Before (L7537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7537)

```diff
-         ...(0, JM.Jb)("_Light Gray Strongbed Head", {
+         ...(0, tU.zb)("_Light Gray Strongbed Head", {
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7548` → after: `L7549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7549) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7548)

```diff
-         ...(0, JM.Jb)("Cyan Strongbed", {
+         ...(0, tU.zb)("Cyan Strongbed", {
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7561` → after: `L7562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7562) · [Before (L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7561)

```diff
-         ...(0, JM.Jb)("_Cyan Strongbed Head", {
+         ...(0, tU.zb)("_Cyan Strongbed Head", {
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7572` → after: `L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7573) · [Before (L7572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7572)

```diff
-         ...(0, JM.Jb)("Purple Strongbed", {
+         ...(0, tU.zb)("Purple Strongbed", {
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7585` → after: `L7586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7586) · [Before (L7585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7585)

```diff
-         ...(0, JM.Jb)("_Purple Strongbed Head", {
+         ...(0, tU.zb)("_Purple Strongbed Head", {
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7596` → after: `L7597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7597) · [Before (L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7596)

```diff
-         ...(0, JM.Jb)("Blue Strongbed", {
+         ...(0, tU.zb)("Blue Strongbed", {
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7609` → after: `L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7610) · [Before (L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7609)

```diff
-         ...(0, JM.Jb)("_Blue Strongbed Head", {
+         ...(0, tU.zb)("_Blue Strongbed Head", {
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7620` → after: `L7621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7621) · [Before (L7620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7620)

```diff
-         ...(0, JM.Jb)("Brown Strongbed", {
+         ...(0, tU.zb)("Brown Strongbed", {
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7633` → after: `L7634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7634) · [Before (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7633)

```diff
-         ...(0, JM.Jb)("_Brown Strongbed Head", {
+         ...(0, tU.zb)("_Brown Strongbed Head", {
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7644` → after: `L7645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7645) · [Before (L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7644)

```diff
-         ...(0, JM.Jb)("Green Strongbed", {
+         ...(0, tU.zb)("Green Strongbed", {
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7657` → after: `L7658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7658) · [Before (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7657)

```diff
-         ...(0, JM.Jb)("_Green Strongbed Head", {
+         ...(0, tU.zb)("_Green Strongbed Head", {
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7668` → after: `L7669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7669) · [Before (L7668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7668)

```diff
-         ...(0, JM.Jb)("Red Strongbed", {
+         ...(0, tU.zb)("Red Strongbed", {
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7681` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/84.js#L7682) · [Before (L7681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/84.js#L7681)

```diff
-         ...(0, JM.Jb)("_Red Strongbed Head", {
+         ...(0, tU.zb)("_Red Strongbed Head", {
```
