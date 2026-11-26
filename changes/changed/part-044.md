# Changed — Bundle Modifications Report (Part 044 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `44 / 115` (**386** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 043](part-043.md) · [Part 045 →](part-045.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/687.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/687.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2)

#### 36. `bundles/preprod.bloxd.io/chunks/js/687.js` (Changed code · before: `L219-L222` → after: `L239-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-97f0f93d8f10397808ddc6c21dced29690e73aecf0969b4581b9a12364283fd2) · [After (L239-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/687.js#L239-L242) · [Before (L219-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/687.js#L219-L222)

```diff
-       Nz = "#define PBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<pbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n#include< … [truncated]
-     cU.b.ShadersStoreWGSL[Yz] || (cU.b.ShadersStoreWGSL[Yz] = Nz);
-     const Iz = [yU.b, QU.b, AU.b, FU.b, oU.c, DU.e, EU.c, YU.d, NU.c, IU.e, tU, gU.c, BU, ZU.d, RU.d, PU.c, WU.e, dU.b, LU.c, eU.c, CU.e, wU.b, qU.e, OU.d, SU.b, rU.c, uU.b, fU.b, iU.b, HU.d, MU.c, vU.e, VU.c, sU.e, nU.c, mU.e, lU.b, xU.d, JU.e, bU, UX, cX, AX, DX, NX, aX, kX, ZX … [truncated]
-     for (const az of Iz) cU.b.IncludesShadersStoreWGSL[az.name] || (cU.b.IncludesShadersStoreWGSL[az.name] = az.shader);
+       PL = "#define PBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_EXTENSION\n#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#if … [truncated]
+     AH.c.ShadersStore[vL] || (AH.c.ShadersStore[vL] = PL);
+     const TL = [rH.c, SH.d, hH.c, tH.c, EH, XH.e, GH.c, YH.d, uH.c, QH.b, WH.d, MH.d, xH.e, TH, UH.b, bH, kH.c, mH.e, oH.d, IH.d, fH.d, lH.d, KH.c, cH.b, eH.b, qH.c, gH.e, NH.d, RH.d, jH.b, nH.c, FH.b, DH.c, wH.d, ZH.d, dH.c, aH.b, sH.e, JH.d, yH, LB, SB, zB, XB, uB, MB, PB, VB,  … [truncated]
+     for (const VL of TL) AH.c.IncludesShadersStore[VL.name] || (AH.c.IncludesShadersStore[VL.name] = VL.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/688.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/688.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L4)

```diff
-   64304: (UU, XU, zU) => {
+   64391: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L6)

```diff
-       b: () => AU
+       d: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L8)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L10-L11)

```diff
-       QU = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L17)

```diff
-   64367: (UU, XU, zU) => {
+   64445: (HH, BH, LH) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L19)

```diff
-       d: () => AU
+       c: () => hH
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L21)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L23-L24)

```diff
-       QU = "#ifdef NUM_SAMPLES\n#if NUM_SAMPLES>0\nfn radicalInverse_VdC(value: u32)->f32 \n{var bits=(value<<16u) | (value>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<< … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "#if NUM_SAMPLES\n#if NUM_SAMPLES>0\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\nprecision highp int;float radicalInverse_VdC(uint bits)\n{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x3333333 … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L30)

```diff
-   64339: (UU, XU, zU) => {
+   64420: (HH, BH, LH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L32)

```diff
-       e: () => AU
+       b: () => hH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L34)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L36-L37)

```diff
-       QU = "fn hemisphereCosSample(u: vec2f)->vec3f {var phi: f32=2.*PI*u.x;var cosTheta2: f32=1.-u.y;var cosTheta: f32=sqrt(cosTheta2);var sinTheta: f32=sqrt(1.-cosTheta2);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}\nfn hemisphereImportanceSampleDggx(u: vec2f,a: … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "vec3 hemisphereCosSample(vec2 u) {float phi=2.*PI*u.x;float cosTheta2=1.-u.y;float cosTheta=sqrt(cosTheta2);float sinTheta=sqrt(1.-cosTheta2);return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}\nvec3 hemisphereImportanceSampleDggx(vec2 u,float a) {float phi=2. … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L43)

```diff
-   64396: (UU, XU, zU) => {
+   64388: (HH, BH, LH) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L47-L50)

```diff
-     var cU = zU(40961);
-     const yU = "pbrBlockImageProcessing",
-       QU = "#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)\n#if !defined(SKIPFINALCOLORCLAMP)\nfinalColor=vec4f(clamp(finalColor.rgb,vec3f(0.),vec3f(30.0)),finalColor.a);\n#endif\n#else\nfinalColor=applyImageProcessing(finalColor);\n#endif\nfinalColor=vec4f(fin … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "pbrBRDFFunctions",
+       SH = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L56)

```diff
-   64392: (UU, XU, zU) => {
+   64473: (HH, BH, LH) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L58)

```diff
-       c: () => AU
+       b: () => hH
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L60-L63)

```diff
-     var cU = zU(40961);
-     const yU = "pbrBlockNormalGeometric",
-       QU = "var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-input.vPositionW);\n#ifdef NORMAL\nvar normalW: vec3f=normalize(input.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(input.vPositionW),dpdy(input.vPositionW)))*scene.vEyePosition.w;\n#endif\nvar ge … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "pbrBlockImageProcessing",
+       SH = "#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)\n#if !defined(SKIPFINALCOLORCLAMP)\nfinalColor.rgb=clamp(finalColor.rgb,0.,30.0);\n#endif\n#else\nfinalColor=applyImageProcessing(finalColor);\n#endif\nfinalColor.a*=visibility;\n#ifdef PREMULTIPLYALPHA … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L69)

```diff
-   64369: (UU, XU, zU) => {
+   64464: (HH, BH, LH) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L71)

```diff
-       e: () => AU
+       b: () => hH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L73-L76)

```diff
-     var cU = zU(40961);
-     const yU = "pbrBlockReflectance0",
-       QU = "var reflectanceF0: f32=reflectivityOut.reflectanceF0;var specularEnvironmentR0: vec3f=reflectivityOut.colorReflectanceF0;var specularEnvironmentR90: vec3f= reflectivityOut.reflectanceF90;\n#ifdef ALPHAFRESNEL\nvar reflectance90: f32=fresnelGrazingReflectance(reflectan … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "pbrBlockNormalGeometric",
+       SH = "vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;\n#endif\nvec3 geometricNormalW=normalW;\n#if defined(TWOSIDEDLIGHTING … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L82)

```diff
-   64377: (UU, XU, zU) => {
+   64480: (HH, BH, LH) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L86-L100` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L86) · [Before (L86-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L86-L100)

```diff
-     var cU = zU(40961);
-     zU(64369);
-     const yU = "pbrClusteredLightingFunctions",
-       QU = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nlightData: vec4f,\nsliceRange: vec2u,\nV: vec3f,\nN: vec3f,\nposW: vec3f,\nsurfaceAlbedo: vec3f,\nreflectivityOut: refle … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   64400: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => AU
-     });
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L102-L103` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L88-L89) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L102-L103)

```diff
-       QU = "#if DEBUGMODE>0\nif (input.vClipSpacePosition.x/input.vClipSpacePosition.w>=uniforms.vDebugMode.x) {var color: vec3f;\n#if DEBUGMODE==1\ncolor=fragmentInputs.vPositionW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif DEBUGMODE==2 && defined(NORMAL)\ncolor=fragmentInputs.vNor … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "#if DEBUGMODE>0\nif (vClipSpacePosition.x/vClipSpacePosition.w>=vDebugMode.x) {\n#if DEBUGMODE==1\ngl_FragColor.rgb=vPositionW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif DEBUGMODE==2 && defined(NORMAL)\ngl_FragColor.rgb=vNormalW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif  … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L109` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L95) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L109)

```diff
-   64360: (UU, XU, zU) => {
+   64440: (HH, BH, LH) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L111` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L97) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L111)

```diff
-       b: () => AU
+       c: () => hH
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L113` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L99) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L113)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L115-L116` → after: `L101-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L101-L102) · [Before (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L115-L116)

```diff
-       QU = "fn computeDistanceLightFalloff_Standard(lightOffset: vec3f,range: f32)->f32\n{return max(0.,1.0-length(lightOffset)/range);}\nfn computeDistanceLightFalloff_Physical(lightDistanceSquared: f32)->f32\n{return 1.0/maxEps(lightDistanceSquared);}\nfn computeDistanceLightFa … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)\n{return max(0.,1.0-length(lightOffset)/range);}\nfloat computeDistanceLightFalloff_Physical(float lightDistanceSquared)\n{return 1.0/maxEps(lightDistanceSquared);}\nfloat computeDistanceLightFal … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L122` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L108) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L122)

```diff
-   64385: (UU, XU, zU) => {
+   64453: (HH, BH, LH) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L124` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L110) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L124)

```diff
-       e: () => AU
+       d: () => hH
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L126-L127` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L112) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L126-L127)

```diff
-     var cU = zU(40961);
-     zU(45106), zU(64377);
+     var AH = LH(41138);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L129-L130` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L114-L115) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L129-L130)

```diff
-       QU = "#define CLEARCOATREFLECTANCE90 1.0\nstruct lightingInfo\n{diffuse: vec3f,\n#ifdef SS_TRANSLUCENCY\ndiffuseTransmission: vec3f,\n#endif\n#ifdef SPECULARTERM\nspecular: vec3f,\n#endif\n#ifdef CLEARCOAT\nclearCoat: vec4f,\n#endif\n#ifdef SHEEN\nsheen: vec3f\n#endif\n};fn … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "#define CLEARCOATREFLECTANCE90 1.0\nstruct lightingInfo\n{vec3 diffuse;\n#ifdef SS_TRANSLUCENCY\nvec3 diffuseTransmission;\n#endif\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef CLEARCOAT\nvec4 clearCoat;\n#endif\n#ifdef SHEEN\nvec3 sheen;\n#endif\n};float adjus … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L136` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L121) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L136)

```diff
-   64355: (UU, XU, zU) => {
+   64435: (HH, BH, LH) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L140-L141` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L125-L126) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L140-L141)

```diff
-     var cU = zU(40961);
-     zU(45099);
+     var AH = LH(41138);
+     LH(45563);
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L143-L144` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L128-L129) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L143-L144)

```diff
-       QU = "struct preLightingInfo\n{lightOffset: vec3f,\nlightDistanceSquared: f32,\nlightDistance: f32,\nattenuation: f32,\nL: vec3f,\nH: vec3f,\nNdotV: f32,\nNdotLUnclamped: f32,\nNdotL: f32,\nVdotH: f32,\nLdotV: f32,\nroughness: f32,\ndiffuseRoughness: f32,\nsurfaceAlbedo: ve … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "struct preLightingInfo\n{vec3 lightOffset;float lightDistanceSquared;float lightDistance;float attenuation;vec3 L;vec3 H;float NdotV;float NdotLUnclamped;float NdotL;float VdotH;float LdotV;float roughness;float diffuseRoughness;vec3 surfaceAlbedo;\n#ifdef IRIDESCENCE … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L150` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L135) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L150)

```diff
-   64320: (UU, XU, zU) => {
+   64405: (HH, BH, LH) => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L152` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L137) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L152)

```diff
-       d: () => AU
+       b: () => hH
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L154-L155` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L139-L140) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L154-L155)

```diff
-     var cU = zU(40961);
-     zU(44935);
+     var AH = LH(41138);
+     LH(45395);
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L157-L158` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L142-L143) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L157-L158)

```diff
-       QU = "varying vPositionW: vec3f;\n#if DEBUGMODE>0\nvarying vClipSpacePosition: vec4f;\n#endif\n#include<mainUVVaryingDeclaration>[1..7]\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)\nvarying vEnvironmen … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "varying vec3 vPositionW;\n#if DEBUGMODE>0\nvarying vec4 vClipSpacePosition;\n#endif\n#include<mainUVVaryingDeclaration>[1..7]\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)\nvarying vec3 vEnvironment … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L164` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L149) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L164)

```diff
-   64329: (UU, XU, zU) => {
+   64414: (HH, BH, LH) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L166` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L151) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L166)

```diff
-       c: () => AU
+       b: () => hH
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L168` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L153) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L168)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L170-L171` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L155-L156) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L170-L171)

```diff
-       QU = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\nvar reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;\n#ifdef LODBASEDMICROSFURACE\n#else\nvar reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamp … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L177` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L162) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L177)

```diff
-   64346: (UU, XU, zU) => {
+   64426: (HH, BH, LH) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L181` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L166) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L181)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L183-L184` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L168-L169) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L183-L184)

```diff
-       QU = "#define MINIMUMVARIANCE 0.0005\n#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\nfn convertRoughnessToAverageSlope(roughness: f32)->f32\n{return roughness*roughness+MINIMU … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "#define MINIMUMVARIANCE 0.0005\n#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\nfloat convertRoughnessToAverageSlope(float roughness)\n{return square(roughness)+MINIMUMVARIANCE;}\nfloat fresnelGrazingReflectance(float reflect … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L190` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L175) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L190)

```diff
-   64387: (UU, XU, zU) => {
+   64458: (HH, BH, LH) => {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L192` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L177) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L192)

```diff
-       c: () => AU
+       d: () => hH
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L194` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L179) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L194)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L196-L197` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L181-L182) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L196-L197)

```diff
-       QU = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfn getLodFromAlphaG(cubeMapDimensionPixels: f32,microsurfaceAverageSlope: f32)->f32 {var microsurfaceAverageSlopeTexels: f32=cubeMapDimensionPixels*microsurfaceAverageSlope;var lod: f32=log2(microsurfaceAverageSlopeTe … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L203` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L188) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L203)

```diff
-   64335: (UU, XU, zU) => {
+   64418: (HH, BH, LH) => {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L207` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L192) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L207)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/688.js` (Changed code · before: `L209-L210` → after: `L194-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79dR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4bdebad2b5346a37a6543446100fa148f45f18fe2b0138399815df326ab7a79d) · [After (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/688.js#L194-L195) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/688.js#L209-L210)

```diff
-       QU = "fn testLightingForSSS(diffusionProfile: f32)->bool\n{return diffusionProfile<1.;}";
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "bool testLightingForSSS(float diffusionProfile)\n{return diffusionProfile<1.;}";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/689.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/689.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L4)

```diff
-   64304: (UU, XU, zU) => {
+   64391: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L6)

```diff
-       b: () => AU
+       d: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L8)

```diff
-     var cU = zU(40961);
+     var AH = LH(41138);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L10-L11)

```diff
-       QU = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L17)

```diff
-   64471: (UU, XU, zU) => {
+   64588: (HH, BH, LH) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L21-L22)

```diff
-     var cU = zU(40961);
-     zU(44887), zU(44891);
+     var AH = LH(41138);
+     LH(45342), LH(45351);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L24-L25` → after: `L24-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L24-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L24-L38) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L24-L25)

```diff
-       QU = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+       SH = "layout(std140,column_major) uniform;uniform Material {vec2 vTangentSpaceParams;vec4 vLightingIntensity;float pointSize;vec2 vDebugMode;vec2 renderTargetSize;vec4 cameraInfo;vec4 vTextureRepetitionHexTilingParams;mat4 backgroundRefractionMatrix;vec3 vBackgroundRefracti … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   64388: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "pbrBRDFFunctions",
+       SH = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L31` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L44) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L31)

```diff
-   64464: (UU, XU, zU) => {
+   64584: (HH, BH, LH) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L33` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L46) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L33)

```diff
-       openpbrVertexShaderWGSL: () => jU
+       openpbrVertexShader: () => BB
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L35-L48` → after: `L48-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L48-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L48-L76) · [Before (L35-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L35-L48)

```diff
-     var cU = zU(40961),
-       yU = zU(44887),
-       QU = zU(44891),
-       AU = zU(64471),
-       FU = zU(44904),
-       oU = zU(44935),
-       DU = zU(44910),
-       EU = zU(64295),
-       YU = zU(44917),
-       NU = zU(44919),
-       IU = zU(44921),
-       pU = zU(44926),
-       aU = zU(44939),
-       tU = zU(64304);
+     var AH = LH(41138);
+     const rH = "sceneVertexDeclaration",
+       SH = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;\n";
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     };
+     var tH = LH(45336);
+     const zH = "openpbrVertexDeclaration",
+       CH = "#include<sceneVertexDeclaration>\n#ifdef BASE_COLOR\nuniform vec2 vBaseColorInfos;uniform mat4 baseColorMatrix;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;\n#endif\nuniform float vBaseDiffuseRoughness;\n#ifdef BASE_DIFFUSE … [truncated]
+     AH.c.IncludesShadersStore[zH] || (AH.c.IncludesShadersStore[zH] = CH);
+     const EH = {
+       name: zH,
+       shader: CH
+     };
+ ... (13 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L50-L51` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L78-L79) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L50-L51)

```diff
-       kU = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     cU.b.IncludesShadersStoreWGSL[gU] || (cU.b.IncludesShadersStoreWGSL[gU] = kU);
+       bH = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     AH.c.IncludesShadersStore[OH] || (AH.c.IncludesShadersStore[OH] = bH);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L56-L71` → after: `L84-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L84-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L84-L98) · [Before (L56-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L56-L71)

```diff
-     var BU = zU(44954),
-       ZU = zU(44962),
-       RU = zU(44966),
-       PU = zU(44975),
-       WU = zU(44977),
-       dU = zU(44983),
-       LU = zU(44992),
-       eU = zU(44997),
-       CU = zU(45004),
-       wU = zU(45006),
-       qU = zU(45010),
-       OU = zU(45019),
-       SU = zU(45027),
-       rU = zU(45032),
-       uU = zU(45036),
-       fU = zU(45041);
+     var mH = LH(45408),
+       oH = LH(45417),
+       IH = LH(45423),
+       fH = LH(45426),
+       lH = LH(45430),
+       KH = LH(45434),
+       cH = LH(45440),
+       eH = LH(45442),
+       qH = LH(45450),
+       gH = LH(45452),
+       NH = LH(45461),
+       RH = LH(45463),
+       jH = LH(45468),
+       nH = LH(45475),
+       FH = LH(45477);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L73-L74` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L100-L101) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L73-L74)

```diff
-       HU = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBit … [truncated]
-     cU.b.IncludesShadersStoreWGSL[iU] || (cU.b.IncludesShadersStoreWGSL[iU] = HU);
+       wH = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangen … [truncated]
+     AH.c.IncludesShadersStore[DH] || (AH.c.IncludesShadersStore[DH] = wH);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L79-L83` → after: `L106-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L106-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L106-L110) · [Before (L79-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L79-L83)

```diff
-     var vU = zU(45046),
-       VU = zU(45052),
-       sU = zU(45060),
-       nU = zU(45063),
-       mU = zU(45072);
+     var dH = LH(45489),
+       aH = LH(45497),
+       sH = LH(45502),
+       JH = LH(45505),
+       iH = LH(45514);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/689.js` (Changed code · before: `L85-L88` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5ddR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8070528822ca6ba3ba6e286b4040952038bb8ea88f63bfe6ac1b3c8479d7a5dd) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/689.js#L112-L115) · [Before (L85-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/689.js#L85-L88)

```diff
-       xU = "#define OPENPBR_VERTEX_SHADER\n#include<openpbrUboDeclaration>\n#define CUSTOM_VERTEX_BEGIN\n#ifndef USE_VERTEX_PULLING\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef TANGENT\nattribute tangent: vec4f;\n#endif\n#ifdef UV1\nattribu … [truncated]
-     cU.b.ShadersStoreWGSL[lU] || (cU.b.ShadersStoreWGSL[lU] = xU);
-     const JU = [yU.b, QU.c, AU.d, FU.b, oU.c, DU.c, EU.b, YU.b, NU.e, IU.d, pU.b, aU.b, tU.b, GU, BU.d, ZU.c, RU.b, PU.e, WU.d, dU.c, LU.d, eU.b, CU.b, wU.c, qU.b, OU.c, SU.c, rU.d, uU.b, fU.d, MU, vU.e, VU.b, sU.d, nU.c, mU.d];
-     for (const KU of JU) cU.b.IncludesShadersStoreWGSL[KU.name] || (cU.b.IncludesShadersStoreWGSL[KU.name] = KU.shader);
+       yH = "#define OPENPBR_VERTEX_SHADER\n#define CUSTOM_VERTEX_EXTENSION\nprecision highp float;\n#include<__decl__openpbrVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#end … [truncated]
+     AH.c.ShadersStore[pH] || (AH.c.ShadersStore[pH] = yH);
+     const HB = [hH, tH.b, EH, XH.e, GH.c, YH.d, uH.b, QH.c, WH.d, MH.b, xH.d, vH.e, PH.b, TH.c, UH.e, VH.d, kH, mH.b, oH.c, IH.b, fH.e, lH.b, KH.b, cH.d, eH.c, qH.b, gH.e, NH.b, RH.c, jH.d, nH.d, FH.b, ZH, dH.e, aH.e, sH.e, JH.b, iH.c];
+     for (const LB of HB) AH.c.IncludesShadersStore[LB.name] || (AH.c.IncludesShadersStore[LB.name] = LB.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/690.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/690.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L4-L30` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L4) · [Before (L4-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L4-L30)

```diff
-   64437: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "openpbrDielectricReflectance",
-       QU = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   64442: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
- ... (11 more removed lines; see GitHub link above)
+   64493: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L34-L37` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L8-L12) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L34-L37)

```diff
-     var cU = zU(40961);
-     const yU = "openpbrIblFunctions",
-       QU = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     var AH = LH(41138);
+     LH(45685), LH(45690);
+     const rH = "pbrUboDeclaration",
+       SH = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L43-L96` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L18) · [Before (L43-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L43-L96)

```diff
-   64459: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(40961);
-     const yU = "openpbrSubsurfaceLayerData",
-       QU = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
-     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
-     const AU = {
-       name: yU,
-       shader: QU
-     }
-   },
-   64452: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
- ... (38 more removed lines; see GitHub link above)
+   64507: (HH, BH, LH) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L98` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L20) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L98)

```diff
-       openpbrPixelShader: () => Fz
+       pbrPixelShaderWGSL: () => uL
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L100-L108` → after: `L22-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L22-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L22-L35) · [Before (L100-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L100-L108)

```diff
-     var cU = zU(40961),
-       yU = zU(44754),
-       QU = zU(44759),
-       AU = zU(44764),
-       FU = zU(64429),
-       oU = zU(44745);
-     const DU = "openpbrFragmentDeclaration",
-       EU = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
-     cU.b.IncludesShadersStore[DU] || (cU.b.IncludesShadersStore[DU] = EU);
+     var AH = LH(41138),
+       rH = LH(45855),
+       SH = LH(45863),
+       hH = LH(45865),
+       tH = LH(45685),
+       zH = LH(45690),
+       CH = LH(64493),
+       EH = LH(45734),
+       XH = LH(64509),
+       GH = LH(45870),
+       YH = LH(45901);
+     const uH = "samplerFragmentAlternateDeclaration",
+       QH = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     AH.c.IncludesShadersStoreWGSL[uH] || (AH.c.IncludesShadersStoreWGSL[uH] = QH);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L113-L124` → after: `L40-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L40-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L40-L43) · [Before (L113-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L113-L124)

```diff
-     var NU = zU(44571),
-       IU = zU(44575),
-       pU = zU(64413),
-       aU = zU(44620),
-       tU = zU(64212),
-       gU = zU(44767),
-       kU = zU(44774),
-       GU = zU(44791),
-       BU = zU(64221);
-     const ZU = "openpbrFragmentSamplersDeclaration",
-       RU = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
-     cU.b.IncludesShadersStore[ZU] || (cU.b.IncludesShadersStore[ZU] = RU);
+     var MH = LH(64518);
+     const xH = "pbrFragmentSamplersDeclaration",
+       vH = "#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BAS … [truncated]
+     AH.c.IncludesShadersStoreWGSL[xH] || (AH.c.IncludesShadersStoreWGSL[xH] = vH);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L129-L150` → after: `L48-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L48-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L48-L76) · [Before (L129-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L129-L150)

```diff
-     var WU = zU(44803),
-       dU = zU(44833),
-       LU = zU(44671),
-       eU = zU(44838),
-       CU = zU(44818),
-       wU = zU(44588),
-       qU = zU(64228),
-       OU = zU(64235),
-       SU = zU(64239),
-       rU = zU(44810),
-       uU = zU(44782),
-       fU = zU(64201),
-       iU = zU(44776),
-       HU = zU(64245),
-       MU = zU(64247),
-       vU = zU(64197),
- ... (6 more removed lines; see GitHub link above)
+     var TH = LH(45914),
+       UH = LH(45936),
+       VH = LH(45764),
+       OH = LH(45939),
+       bH = LH(45919),
+       kH = LH(45707),
+       mH = LH(64521),
+       oH = LH(64525),
+       IH = LH(64527),
+       fH = LH(45916),
+       lH = LH(45892),
+       KH = LH(64501),
+       cH = LH(45877),
+       eH = LH(64534),
+       qH = LH(64540),
+       gH = LH(64498),
+ ... (13 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L155-L157` → after: `L81-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L81-L83) · [Before (L155-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L155-L157)

```diff
-       JU = "openpbrNormalMapFragmentFunctions",
-       jU = "#if defined(GEOMETRY_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal,_SAMPLERNAME_,geometryNormal)\n#endif\n#if defined(GEOMETRY_COAT_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_COAT_NORMA … [truncated]
-     cU.b.IncludesShadersStore[JU] || (cU.b.IncludesShadersStore[JU] = jU);
+       pH = "pbrBlockReflectivity",
+       yH = "struct reflectivityOutParams\n{microSurface: f32,\nroughness: f32,\ndiffuseRoughness: f32,\nreflectanceF0: f32,\nreflectanceF90: vec3f,\ncolorReflectanceF0: vec3f,\ncolorReflectanceF90: vec3f,\n#ifdef METALLICWORKFLOW\nsurfaceAlbedo: vec3f,\nmetallic: f32,\nspecularWe … [truncated]
+     AH.c.IncludesShadersStoreWGSL[pH] || (AH.c.IncludesShadersStoreWGSL[pH] = yH);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L159-L166` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L85-L90) · [Before (L159-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L159-L166)

```diff
-       name: JU,
-       shader: jU
-     };
-     var bU = zU(44798),
-       TU = zU(64437);
-     const hU = "openpbrConductorReflectance",
-       UX = "#define pbr_inline\nReflectanceParams conductorReflectance(in vec3 baseColor,in vec3 specularColor,in float specularWeight)\n{ReflectanceParams outParams;\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)\noutParams.coloredF0=baseColor*specularWeight;o … [truncated]
-     cU.b.IncludesShadersStore[hU] || (cU.b.IncludesShadersStore[hU] = UX);
+         name: pH,
+         shader: yH
+       },
+       BB = "pbrBlockAmbientOcclusion",
+       LB = "struct ambientOcclusionOutParams\n{ambientOcclusionColor: vec3f,\n#if DEBUGMODE>0 && defined(AMBIENT)\nambientOcclusionColorMap: vec3f\n#endif\n};\n#define pbr_inline\nfn ambientOcclusionBlock(\n#ifdef AMBIENT\nambientOcclusionColorMap_: vec3f,\nvAmbientInfos: vec4f\n … [truncated]
+     AH.c.IncludesShadersStoreWGSL[BB] || (AH.c.IncludesShadersStoreWGSL[BB] = LB);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L171-L173` → after: `L95-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L95-L97) · [Before (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L171-L173)

```diff
-       zX = "openpbrAmbientOcclusionFunctions",
-       cX = "float compute_specular_occlusion(const float n_dot_v,const float metallic,const float ambient_occlusion,const float roughness)\n{float specular_occlusion=saturate(pow(n_dot_v+ambient_occlusion,exp2(-16.0*roughness-1.0))-1.0+ambient_occlusion);return mix(specular_occlu … [truncated]
-     cU.b.IncludesShadersStore[zX] || (cU.b.IncludesShadersStore[zX] = cX);
+       rB = "pbrBlockAlphaFresnel",
+       SB = "#ifdef ALPHAFRESNEL\n#if defined(ALPHATEST) || defined(ALPHABLEND)\nstruct alphaFresnelOutParams\n{alpha: f32};fn faceforward(N: vec3<f32>,I: vec3<f32>,Nref: vec3<f32>)->vec3<f32> {return select(N,-N,dot(Nref,I)>0.0);}\n#define pbr_inline\nfn alphaFresnelBlock(\nnorma … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rB] || (AH.c.IncludesShadersStoreWGSL[rB] = SB);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L175-L182` → after: `L99-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L99-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L99-L104) · [Before (L175-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L175-L182)

```diff
-       name: zX,
-       shader: cX
-     };
-     var QX = zU(64442),
-       AX = zU(64448);
-     const FX = "openpbrVolumeFunctions",
-       oX = "struct OpenPBRHomogeneousVolume {vec3 extinction_coeff; \nvec3 ss_albedo; \nvec3 multi_scatter_color; \nvec3 absorption_coeff; \nvec3 scatter_coeff; \nfloat anisotropy; };OpenPBRHomogeneousVolume computeOpenPBRTransmissionVolume(\nin vec3 transmission_color,\nin float … [truncated]
-     cU.b.IncludesShadersStore[FX] || (cU.b.IncludesShadersStore[FX] = oX);
+         name: rB,
+         shader: SB
+       },
+       tB = "pbrBlockAnisotropic",
+       zB = "#ifdef ANISOTROPIC\nstruct anisotropicOutParams\n{anisotropy: f32,\nanisotropicTangent: vec3f,\nanisotropicBitangent: vec3f,\nanisotropicNormal: vec3f,\n#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)\nanisotropyMapData: vec3f\n#endif\n};\n#define pbr_inline\nfn aniso … [truncated]
+     AH.c.IncludesShadersStoreWGSL[tB] || (AH.c.IncludesShadersStoreWGSL[tB] = zB);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L184-L191` → after: `L106-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L106-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L106-L118) · [Before (L184-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L184-L191)

```diff
-       name: FX,
-       shader: oX
-     };
-     var EX = zU(44841),
-       YX = zU(64269);
-     const NX = "openpbrNormalMapFragment",
-       IX = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(GEOMETRY_NORMAL)\nfloat normalScale=vGeometryNormalInfos.y;\n#else\nfloat n … [truncated]
-     cU.b.IncludesShadersStore[NX] || (cU.b.IncludesShadersStore[NX] = IX);
+         name: tB,
+         shader: zB
+       },
+       EB = "pbrBlockReflection",
+       XB = "#ifdef REFLECTION\nstruct reflectionOutParams\n{environmentRadiance: vec4f\n,environmentIrradiance: vec3f\n#ifdef REFLECTIONMAP_3D\n,reflectionCoords: vec3f\n#else\n,reflectionCoords: vec2f\n#endif\n#ifdef SS_TRANSLUCENCY\n#ifdef USESPHERICALFROMREFLECTIONMAP\n#if !de … [truncated]
+     AH.c.IncludesShadersStoreWGSL[EB] || (AH.c.IncludesShadersStoreWGSL[EB] = XB);
+     const GB = {
+         name: EB,
+         shader: XB
+       },
+       YB = "pbrBlockSheen",
+       uB = "#ifdef SHEEN\nstruct sheenOutParams\n{sheenIntensity: f32\n,sheenColor: vec3f\n,sheenRoughness: f32\n#ifdef SHEEN_LINKWITHALBEDO\n,surfaceAlbedo: vec3f\n#endif\n#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)\n,sheenAlbedoScaling: f32\n#endif\n#if defined … [truncated]
+     AH.c.IncludesShadersStoreWGSL[YB] || (AH.c.IncludesShadersStoreWGSL[YB] = uB);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L196-L198` → after: `L123-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L123-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L123-L125) · [Before (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L196-L198)

```diff
-       aX = "openpbrBlockNormalFinal",
-       tX = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=gl_FrontFacing ? faceNormal : -faceNormal;\n#endif\nnormalW*=sign(dot(normalW,faceNormal) … [truncated]
-     cU.b.IncludesShadersStore[aX] || (cU.b.IncludesShadersStore[aX] = tX);
+       WB = "pbrBlockClearcoat",
+       MB = "struct clearcoatOutParams\n{specularEnvironmentR0: vec3f,\nconservationFactor: f32,\nclearCoatNormalW: vec3f,\nclearCoatAARoughnessFactors: vec2f,\nclearCoatIntensity: f32,\nclearCoatRoughness: f32,\n#ifdef REFLECTION\nfinalClearCoatRadianceScaled: vec3f,\n#endif\n#if … [truncated]
+     AH.c.IncludesShadersStoreWGSL[WB] || (AH.c.IncludesShadersStoreWGSL[WB] = MB);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L203-L205` → after: `L130-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L130-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L130-L149) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L203-L205)

```diff
-       kX = "openpbrBaseLayerData",
-       GX = "vec3 base_color=vec3(0.8);float base_metalness=0.0;float base_diffuse_roughness=0.0;float specular_weight=1.0;float specular_roughness=0.3;vec3 specular_color=vec3(1.0);float specular_roughness_anisotropy=0.0;float specular_ior=1.5;float alpha=1.0;vec2 geometry_tangen … [truncated]
-     cU.b.IncludesShadersStore[kX] || (cU.b.IncludesShadersStore[kX] = GX);
+       vB = "pbrBlockIridescence",
+       PB = "struct iridescenceOutParams\n{iridescenceIntensity: f32,\niridescenceIOR: f32,\niridescenceThickness: f32,\nspecularEnvironmentR0: vec3f};\n#ifdef IRIDESCENCE\nfn iridescenceBlock(\nvIridescenceParams: vec4f\n,viewAngle_: f32\n,specularEnvironmentR0: vec3f\n#ifdef IRI … [truncated]
+     AH.c.IncludesShadersStoreWGSL[vB] || (AH.c.IncludesShadersStoreWGSL[vB] = PB);
+     const TB = {
+         name: vB,
+         shader: PB
+       },
+       UB = "pbrBlockSubSurface",
+       VB = "struct subSurfaceOutParams\n{specularEnvironmentReflectance: vec3f,\n#ifdef SS_REFRACTION\nfinalRefraction: vec3f,\nsurfaceAlbedo: vec3f,\n#ifdef SS_LINKREFRACTIONTOTRANSPARENCY\nalpha: f32,\n#endif\nrefractionOpacity: f32,\n#endif\n#ifdef SS_TRANSLUCENCY\ntransmittan … [truncated]
+     AH.c.IncludesShadersStoreWGSL[UB] || (AH.c.IncludesShadersStoreWGSL[UB] = VB);
+     const OB = {
+       name: UB,
+       shader: VB
+     };
+     var bB = LH(45948),
+       kB = LH(64570),
+ ... (4 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L210-L214` → after: `L154-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L154-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L154-L157) · [Before (L210-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L210-L214)

```diff
-     var ZX = zU(64452),
-       RX = zU(64459);
-     const PX = "openpbrCoatLayerData",
-       WX = "float coat_weight=0.0;vec3 coat_color=vec3(1.0);float coat_roughness=0.0;float coat_roughness_anisotropy=0.0;float coat_ior=1.6;float coat_darkening=1.0;vec2 geometry_coat_tangent=vec2(1.0,0.0);\n#ifdef COAT_WEIGHT\nvec4 coatWeightFromTexture=TEXRD(coatWeightSampler,v … [truncated]
-     cU.b.IncludesShadersStore[PX] || (cU.b.IncludesShadersStore[PX] = WX);
+     var lB = LH(45961);
+     const KB = "pbrBlockLightmapInit",
+       cB = "#ifdef LIGHTMAP\nvar lightmapColor: vec4f=TEXRD(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);\n#ifdef RGBDLIGHTMAP\nlightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);\n#endif\n#ifdef GAMMALIGHTMAP\nlightmapColor=vec4f(toLinear … [truncated]
+     AH.c.IncludesShadersStoreWGSL[KB] || (AH.c.IncludesShadersStoreWGSL[KB] = cB);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L219-L221` → after: `L162-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L162-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L162-L164) · [Before (L219-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L219-L221)

```diff
-       LX = "openpbrThinFilmLayerData",
-       eX = "#ifdef THIN_FILM\nfloat thin_film_weight=vThinFilmWeight;float thin_film_thickness=vThinFilmThickness.r*1000.0; \nfloat thin_film_ior=vThinFilmIor;\n#ifdef THIN_FILM_WEIGHT\nfloat thinFilmWeightFromTexture=TEXRD(thinFilmWeightSampler,vThinFilmWeightUV+uvOffset).r*vThi … [truncated]
-     cU.b.IncludesShadersStore[LX] || (cU.b.IncludesShadersStore[LX] = eX);
+       qB = "pbrBlockGeometryInfo",
+       gB = "var NdotVUnclamped: f32=dot(normalW,viewDirectionW);var NdotV: f32=absEps(NdotVUnclamped);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var AARoughnessFactors: vec2f=getAARoughnessFactors(normalW.xyz);\n#ifdef SPECULARAA\nalphaG+=AARoughnessFactors.y;\n#en … [truncated]
+     AH.c.IncludesShadersStoreWGSL[qB] || (AH.c.IncludesShadersStoreWGSL[qB] = gB);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L226-L228` → after: `L169-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L169-L171) · [Before (L226-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L226-L228)

```diff
-       wX = "openpbrFuzzLayerData",
-       qX = "float fuzz_weight=0.0;vec3 fuzz_color=vec3(1.0);float fuzz_roughness=0.0;\n#ifdef FUZZ\n#ifdef FUZZ_WEIGHT\nvec4 fuzzWeightFromTexture=TEXRD(fuzzWeightSampler,vFuzzWeightUV+uvOffset);\n#endif\n#ifdef FUZZ_COLOR\nvec4 fuzzColorFromTexture=TEXRD(fuzzColorSampler,vFuzzCo … [truncated]
-     cU.b.IncludesShadersStore[wX] || (cU.b.IncludesShadersStore[wX] = qX);
+       RB = "pbrBlockReflectance",
+       jB = "#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)\nvar baseSpecularEnvironmentReflectance: vec3f=getReflectanceFromBRDFWithEnvLookup(vec3f(reflectanceF0),vec3f(reflectivityOut.reflectanceF90),environmentBrdf);\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPE … [truncated]
+     AH.c.IncludesShadersStoreWGSL[RB] || (AH.c.IncludesShadersStoreWGSL[RB] = jB);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L233-L235` → after: `L176-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L176-L178) · [Before (L233-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L233-L235)

```diff
-       SX = "openpbrAmbientOcclusionData",
-       rX = "vec3 ambient_occlusion=vec3(1.0);float specular_ambient_occlusion=1.0;float coat_specular_ambient_occlusion=1.0;\n#ifdef AMBIENT_OCCLUSION\nvec3 ambientOcclusionFromTexture=TEXRD(ambientOcclusionSampler,vAmbientOcclusionUV+uvOffset).rgb;ambient_occlusion=vec3(ambientO … [truncated]
-     cU.b.IncludesShadersStore[SX] || (cU.b.IncludesShadersStore[SX] = rX);
+       FB = "pbrBlockDirectLighting",
+       DB = "var diffuseBase: vec3f=vec3f(0.,0.,0.);\n#ifdef SS_TRANSLUCENCY\nvar diffuseTransmissionBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef SPECULARTERM\nvar specularBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef CLEARCOAT\nvar clearCoatBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#i … [truncated]
+     AH.c.IncludesShadersStoreWGSL[FB] || (AH.c.IncludesShadersStoreWGSL[FB] = DB);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L240-L250` → after: `L183-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L183-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L183-L186) · [Before (L240-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L240-L250)

```diff
-     var fX = zU(44850);
-     const iX = "openpbrBackgroundTransmission",
-       HX = "vec4 slab_translucent_background=vec4(0.,0.,0.,1.);\n#ifdef REFRACTED_BACKGROUND\n{float refractionLOD=min(transmission_roughness,0.8)*vBackgroundRefractionInfos.x;float lodTexelSize=pow(2.0,refractionLOD-vBackgroundRefractionInfos.x);\n#ifdef DISPERSION\n{\n#ifdef RE … [truncated]
-     cU.b.IncludesShadersStore[iX] || (cU.b.IncludesShadersStore[iX] = HX);
-     const MX = {
-         name: iX,
-         shader: HX
-       },
-       vX = "openpbrEnvironmentLighting",
-       VX = "#if defined(REFLECTION) || defined(REFRACTED_BACKGROUND)\nvec3 coatAbsorption=vec3(1.0);float coatIblFresnel=0.0;if (coat_weight>0.0) {coatIblFresnel=computeDielectricIblFresnel(coatReflectance,coatGeoInfo.environmentBrdf);float hemisphere_avg_fresnel=coatReflectance. … [truncated]
-     cU.b.IncludesShadersStore[vX] || (cU.b.IncludesShadersStore[vX] = VX);
+     var ZB = LH(45963);
+     const dB = "pbrBlockFinalLitComponents",
+       aB = "aggShadow=aggShadow/numLights;\n#if defined(ENVIRONMENTBRDF)\n#ifdef MS_BRDF_ENERGY_CONSERVATION\nvar baseSpecularEnergyConservationFactor: vec3f=getEnergyConservationFactor(vec3f(reflectanceF0),environmentBrdf);var coloredEnergyConservationFactor: vec3f=getEnergyCons … [truncated]
+     AH.c.IncludesShadersStoreWGSL[dB] || (AH.c.IncludesShadersStoreWGSL[dB] = aB);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L255-L257` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L191-L193) · [Before (L255-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L255-L257)

```diff
-       nX = "openpbrDirectLightingInit",
-       mX = "#ifdef LIGHT{X}\npreLightingInfo preInfo{X};preLightingInfo preInfoCoat{X};vec4 lightColor{X}=light{X}.vLightDiffuse;float shadow{X}=1.;\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\n#define CUS … [truncated]
-     cU.b.IncludesShadersStore[nX] || (cU.b.IncludesShadersStore[nX] = mX);
+       JB = "pbrBlockFinalUnlitComponents",
+       iB = "var finalDiffuse: vec3f=diffuseBase;finalDiffuse*=surfaceAlbedo;\n#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)\nfinalDiffuse*=subSurfaceOut.refractionOpacity;\n#endif\n#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)\nf … [truncated]
+     AH.c.IncludesShadersStoreWGSL[JB] || (AH.c.IncludesShadersStoreWGSL[JB] = iB);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L262-L264` → after: `L198-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L198-L200) · [Before (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L262-L264)

```diff
-       xX = "openpbrDirectLighting",
-       JX = "#ifdef LIGHT{X}\n{vec3 slab_diffuse=vec3(0.,0.,0.);vec3 slab_translucent=vec3(0.,0.,0.);vec3 slab_glossy=vec3(0.,0.,0.);float specularFresnel=0.0;vec3 specularColoredFresnel=vec3(0.,0.,0.);vec3 slab_metal=vec3(0.,0.,0.);vec3 slab_coat=vec3(0.,0.,0.);float coatFresnel= … [truncated]
-     cU.b.IncludesShadersStore[xX] || (cU.b.IncludesShadersStore[xX] = JX);
+       yB = "pbrBlockFinalColorComposition",
+       HL = "var finalColor: vec4f= vec4f(\n#ifndef UNLIT\n#ifdef REFLECTION\nfinalIrradiance +\n#endif\n#ifdef SPECULARTERM\nfinalSpecularScaled +\n#endif\n#ifdef SHEEN\nfinalSheenScaled +\n#endif\n#ifdef CLEARCOAT\nfinalClearCoatScaled +\n#endif\n#ifdef REFLECTION\nfinalRadiance … [truncated]
+     AH.c.IncludesShadersStoreWGSL[yB] || (AH.c.IncludesShadersStoreWGSL[yB] = HL);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L269-L274` → after: `L205-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L205-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L205-L211) · [Before (L269-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L269-L274)

```diff
-     var KX = zU(44860),
-       bX = zU(44866),
-       TX = zU(64274);
-     const hX = "openpbrBlockPrePass",
-       Uz = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nfloat writeGeometryInfo=1.0;\n#else\nfloat writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_INDEX,vec4(vPositionW,writeGeometryInfo));\ … [truncated]
-     cU.b.IncludesShadersStore[hX] || (cU.b.IncludesShadersStore[hX] = Uz);
+     var LL = LH(45966),
+       AL = LH(45973),
+       rL = LH(64579),
+       SL = LH(45979);
+     const hL = "pbrBlockPrePass",
+       tL = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
+     AH.c.IncludesShadersStoreWGSL[hL] || (AH.c.IncludesShadersStoreWGSL[hL] = tL);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/690.js` (Changed code · before: `L279-L285` → after: `L216-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6aR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e6ed840522c90cc62d46ef5493d4552d57a4837c482c4db6df5a54b9a343ff6a) · [After (L216-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/690.js#L216-L222) · [Before (L279-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/690.js#L279-L285)

```diff
-     var zz = zU(44875),
-       cz = zU(64281);
-     const yz = "openpbrPixelShader",
-       Qz = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_EXTENSION\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#ifdef … [truncated]
-     cU.b.ShadersStore[yz] || (cU.b.ShadersStore[yz] = Qz);
-     const Az = [yU.c, QU.d, AU.e, FU.e, oU.e, YU, NU.c, IU.c, pU.b, aU.e, tU.e, gU.c, kU.c, GU.e, BU.d, PU, WU.b, dU.c, LU.e, eU.b, CU.d, wU.d, qU.e, OU.c, SU.c, rU.c, uU.e, fU.c, iU.d, HU.b, MU.d, vU.d, VU.d, sU.c, nU.e, xU, KU, bU.c, TU.b, XX, yX, QX.b, AX.e, DX, EX.c, YX.b, pX … [truncated]
-     for (const oz of Az) cU.b.IncludesShadersStore[oz.name] || (cU.b.IncludesShadersStore[oz.name] = oz.shader);
+     var CL = LH(45987),
+       EL = LH(64581);
+     const XL = "pbrPixelShader",
+       GL = "#define PBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<pbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n#include< … [truncated]
+     AH.c.ShadersStoreWGSL[XL] || (AH.c.ShadersStoreWGSL[XL] = GL);
+     const YL = [rH.c, SH.e, hH.e, tH.c, zH.c, CH.e, EH.d, XH.b, GH.c, YH.e, WH, MH.e, PH, TH.d, UH.b, VH.e, OH.c, bH.b, kH.d, mH.d, oH.c, IH.c, fH.c, lH.c, KH.c, cH.b, eH.d, qH.e, gH.d, NH.c, RH.c, jH.b, nH.e, FH.d, DH.d, wH.e, ZH.d, dH.c, aH.b, iH, HB, AB, hB, CB, GB, QB, xB, TB … [truncated]
+     for (const QL of YL) AH.c.IncludesShadersStoreWGSL[QL.name] || (AH.c.IncludesShadersStoreWGSL[QL.name] = QL.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/691.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/691.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L4)

```diff
-   64479: (UU, XU, zU) => {
+   64501: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "openpbrDielectricReflectance",
-       QU = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "harmonicsFunctions",
+       SH = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L17)

```diff
-   64482: (UU, XU, zU) => {
+   64545: (HH, BH, LH) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L21-L24)

```diff
-     var cU = zU(40961);
-     const yU = "openpbrGeometryInfo",
-       QU = "struct geometryInfoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32};struct geometryInfoAnisoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32,\nanisotropy: f32,\nanisotropicTange … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "hdrFilteringFunctions",
+       SH = "#ifdef NUM_SAMPLES\n#if NUM_SAMPLES>0\nfn radicalInverse_VdC(value: u32)->f32 \n{var bits=(value<<16u) | (value>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<< … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L30)

```diff
-   64491: (UU, XU, zU) => {
+   64525: (HH, BH, LH) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L32)

```diff
-       e: () => AU
+       c: () => hH
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L34-L37)

```diff
-     var cU = zU(40961);
-     const yU = "openpbrIblFunctions",
-       QU = "#ifdef REFLECTION\nfn sampleIrradiance(\nsurfaceNormal: vec3f\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,vEnvironmentIrradianceSH: vec3f\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defi … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "importanceSampling",
+       SH = "fn hemisphereCosSample(u: vec2f)->vec3f {var phi: f32=2.*PI*u.x;var cosTheta2: f32=1.-u.y;var cosTheta: f32=sqrt(cosTheta2);var sinTheta: f32=sqrt(1.-cosTheta2);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}\nfn hemisphereImportanceSampleDggx(u: vec2f,a: … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L43)

```diff
-   64503: (UU, XU, zU) => {
+   64579: (HH, BH, LH) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L45)

```diff
-       c: () => AU
+       b: () => hH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L47-L50)

```diff
-     var cU = zU(40961);
-     const yU = "openpbrSubsurfaceLayerData",
-       QU = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "pbrBlockImageProcessing",
+       SH = "#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)\n#if !defined(SKIPFINALCOLORCLAMP)\nfinalColor=vec4f(clamp(finalColor.rgb,vec3f(0.),vec3f(30.0)),finalColor.a);\n#endif\n#else\nfinalColor=applyImageProcessing(finalColor);\n#endif\nfinalColor=vec4f(fin … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L56)

```diff
-   64498: (UU, XU, zU) => {
+   64570: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L60-L63)

```diff
-     var cU = zU(40961);
-     const yU = "openpbrTransmissionLayerData",
-       QU = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "pbrBlockNormalGeometric",
+       SH = "var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-input.vPositionW);\n#ifdef NORMAL\nvar normalW: vec3f=normalize(input.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(input.vPositionW),dpdy(input.vPositionW)))*scene.vEyePosition.w;\n#endif\nvar ge … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L69)

```diff
-   64471: (UU, XU, zU) => {
+   64553: (HH, BH, LH) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L71)

```diff
-       d: () => AU
+       b: () => hH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L73-L77` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L73-L76) · [Before (L73-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L73-L77)

```diff
-     var cU = zU(40961);
-     zU(44887), zU(44891);
-     const yU = "openpbrUboDeclaration",
-       QU = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "pbrBlockReflectance0",
+       SH = "var reflectanceF0: f32=reflectivityOut.reflectanceF0;var specularEnvironmentR0: vec3f=reflectivityOut.colorReflectanceF0;var specularEnvironmentR90: vec3f= reflectivityOut.reflectanceF90;\n#ifdef ALPHAFRESNEL\nvar reflectance90: f32=fresnelGrazingReflectance(reflectan … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L83-L85` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L82-L84) · [Before (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L83-L85)

```diff
-   64474: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       openpbrPixelShaderWGSL: () => Qz
+   64561: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L87-L101` → after: `L86-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L86-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L86-L90) · [Before (L87-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L87-L101)

```diff
-     var cU = zU(40961),
-       yU = zU(45080),
-       QU = zU(45085),
-       AU = zU(45090),
-       FU = zU(44887),
-       oU = zU(44891),
-       DU = zU(64471),
-       EU = zU(44935),
-       YU = zU(64320),
-       NU = zU(45093),
-       IU = zU(45115),
-       pU = zU(64329);
-     const aU = "openpbrFragmentSamplersDeclaration",
-       tU = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
-     cU.b.IncludesShadersStoreWGSL[aU] || (cU.b.IncludesShadersStoreWGSL[aU] = tU);
+     var AH = LH(41138);
+     LH(64553);
+     const rH = "pbrClusteredLightingFunctions",
+       SH = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nlightData: vec4f,\nsliceRange: vec2u,\nV: vec3f,\nN: vec3f,\nposW: vec3f,\nsurfaceAlbedo: vec3f,\nreflectivityOut: refle … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L105-L137` → after: `L94-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L94-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L94-L103) · [Before (L105-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L105-L137)

```diff
-     };
-     var kU = zU(45126),
-       GU = zU(45154),
-       BU = zU(44983),
-       ZU = zU(45158),
-       RU = zU(45137),
-       PU = zU(44910),
-       WU = zU(64335),
-       dU = zU(64339),
-       LU = zU(64346),
-       eU = zU(45134),
-       CU = zU(45113),
-       wU = zU(64304),
-       qU = zU(45099),
-       OU = zU(64355),
-       SU = zU(64360),
- ... (17 more removed lines; see GitHub link above)
+     }
+   },
+   64581: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "pbrDebug",
+       SH = "#if DEBUGMODE>0\nif (input.vClipSpacePosition.x/input.vClipSpacePosition.w>=uniforms.vDebugMode.x) {var color: vec3f;\n#if DEBUGMODE==1\ncolor=fragmentInputs.vPositionW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif DEBUGMODE==2 && defined(NORMAL)\ncolor=fragmentInputs.vNor … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L141-L153` → after: `L107-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L107-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L107-L116) · [Before (L141-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L141-L153)

```diff
-     };
-     var JU = zU(45118),
-       jU = zU(64479);
-     const KU = "openpbrConductorReflectance",
-       bU = "#define pbr_inline\nfn conductorReflectance(baseColor: vec3f,specularColor: vec3f,specularWeight: f32)->ReflectanceParams\n{var outParams: ReflectanceParams;\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)\noutParams.coloredF0=baseColor*specularWeigh … [truncated]
-     cU.b.IncludesShadersStoreWGSL[KU] || (cU.b.IncludesShadersStoreWGSL[KU] = bU);
-     const TU = {
-         name: KU,
-         shader: bU
-       },
-       hU = "openpbrAmbientOcclusionFunctions",
-       UX = "fn compute_specular_occlusion(n_dot_v: f32,metallic: f32,ambient_occlusion: f32,roughness: f32)->f32\n{let specular_occlusion: f32=saturate(pow(n_dot_v+ambient_occlusion,exp2(-16.0*roughness-1.0))-1.0+ambient_occlusion);return mix(specular_occlusion,1.0,metallic*squar … [truncated]
-     cU.b.IncludesShadersStoreWGSL[hU] || (cU.b.IncludesShadersStoreWGSL[hU] = UX);
+     }
+   },
+   64540: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "pbrDirectLightingFalloffFunctions",
+       SH = "fn computeDistanceLightFalloff_Standard(lightOffset: vec3f,range: f32)->f32\n{return max(0.,1.0-length(lightOffset)/range);}\nfn computeDistanceLightFalloff_Physical(lightDistanceSquared: f32)->f32\n{return 1.0/maxEps(lightDistanceSquared);}\nfn computeDistanceLightFa … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L157-L162` → after: `L120-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L120-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L120-L130) · [Before (L157-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L157-L162)

```diff
-     };
-     var zX = zU(64482),
-       cX = zU(64491);
-     const yX = "openpbrVolumeFunctions",
-       QX = "struct OpenPBRHomogeneousVolume {extinction_coeff: vec3f, \nss_albedo: vec3f, \nmulti_scatter_color: vec3f, \nabsorption_coeff: vec3f, \nscatter_coeff: vec3f, \nanisotropy: f32, };fn computeOpenPBRTransmissionVolume(\ntransmission_color: vec3f,\ntransmission_depth: f3 … [truncated]
-     cU.b.IncludesShadersStoreWGSL[yX] || (cU.b.IncludesShadersStoreWGSL[yX] = QX);
+     }
+   },
+   64564: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     LH(45884), LH(64561);
+     const rH = "pbrDirectLightingFunctions",
+       SH = "#define CLEARCOATREFLECTANCE90 1.0\nstruct lightingInfo\n{diffuse: vec3f,\n#ifdef SS_TRANSLUCENCY\ndiffuseTransmission: vec3f,\n#endif\n#ifdef SPECULARTERM\nspecular: vec3f,\n#endif\n#ifdef CLEARCOAT\nclearCoat: vec4f,\n#endif\n#ifdef SHEEN\nsheen: vec3f\n#endif\n};fn … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L166-L185` → after: `L134-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L134-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L134-L144) · [Before (L166-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L166-L185)

```diff
-     };
-     var FX = zU(45165),
-       oX = zU(64392);
-     const DX = "openpbrNormalMapFragment",
-       EX = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(GEOMETRY_NORMAL)\nvar normalScale: f32=uniforms.vGeometryNormalI … [truncated]
-     cU.b.IncludesShadersStoreWGSL[DX] || (cU.b.IncludesShadersStoreWGSL[DX] = EX);
-     const YX = {
-         name: DX,
-         shader: EX
-       },
-       NX = "openpbrBlockNormalFinal",
-       IX = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
-     cU.b.IncludesShadersStoreWGSL[NX] || (cU.b.IncludesShadersStoreWGSL[NX] = IX);
-     const pX = {
-         name: NX,
-         shader: IX
- ... (4 more removed lines; see GitHub link above)
+     }
+   },
+   64534: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     LH(45877);
+     const rH = "pbrDirectLightingSetupFunctions",
+       SH = "struct preLightingInfo\n{lightOffset: vec3f,\nlightDistanceSquared: f32,\nlightDistance: f32,\nattenuation: f32,\nL: vec3f,\nH: vec3f,\nNdotV: f32,\nNdotLUnclamped: f32,\nNdotL: f32,\nVdotH: f32,\nLdotV: f32,\nroughness: f32,\ndiffuseRoughness: f32,\nsurfaceAlbedo: ve … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L189-L215` → after: `L148-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L148-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L148-L158) · [Before (L189-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L189-L215)

```diff
-     };
-     var kX = zU(64498),
-       GX = zU(64503);
-     const BX = "openpbrCoatLayerData",
-       ZX = "var coat_weight: f32=0.0f;var coat_color: vec3f=vec3f(1.0f);var coat_roughness: f32=0.0f;var coat_roughness_anisotropy: f32=0.0f;var coat_ior: f32=1.6f;var coat_darkening: f32=1.0f;var geometry_coat_tangent: vec2f=vec2f(1.0f,0.0f);\n#ifdef COAT_WEIGHT\nvar coatWeightF … [truncated]
-     cU.b.IncludesShadersStoreWGSL[BX] || (cU.b.IncludesShadersStoreWGSL[BX] = ZX);
-     const RX = {
-         name: BX,
-         shader: ZX
-       },
-       PX = "openpbrThinFilmLayerData",
-       WX = "#ifdef THIN_FILM\nvar thin_film_weight: f32=uniforms.vThinFilmWeight;var thin_film_thickness: f32=uniforms.vThinFilmThickness.r*1000.0f; \nvar thin_film_ior: f32=uniforms.vThinFilmIor;\n#ifdef THIN_FILM_WEIGHT\nvar thinFilmWeightFromTexture: f32=TEXRD(thinFilmWeightSa … [truncated]
-     cU.b.IncludesShadersStoreWGSL[PX] || (cU.b.IncludesShadersStoreWGSL[PX] = WX);
-     const dX = {
-         name: PX,
-         shader: WX
- ... (11 more removed lines; see GitHub link above)
+     }
+   },
+   64509: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     LH(45734);
+     const rH = "pbrFragmentExtraDeclaration",
+       SH = "varying vPositionW: vec3f;\n#if DEBUGMODE>0\nvarying vClipSpacePosition: vec4f;\n#endif\n#include<mainUVVaryingDeclaration>[1..7]\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)\nvarying vEnvironmen … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L219-L237` → after: `L162-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L162-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L162-L171) · [Before (L219-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L219-L237)

```diff
-     };
-     var SX = zU(45189);
-     const rX = "openpbrBackgroundTransmission",
-       uX = "var slab_translucent_background: vec4f=vec4f(0.,0.,0.,1.);\n#ifdef REFRACTED_BACKGROUND\n{let refractionLOD: f32=min(transmission_roughness,0.8)*uniforms.vBackgroundRefractionInfos.x;let lodTexelSize: f32=pow(2.0f,refractionLOD-uniforms.vBackgroundRefractionInfos.x);\ … [truncated]
-     cU.b.IncludesShadersStoreWGSL[rX] || (cU.b.IncludesShadersStoreWGSL[rX] = uX);
-     const fX = {
-         name: rX,
-         shader: uX
-       },
-       iX = "openpbrEnvironmentLighting",
-       HX = "#if defined(REFLECTION) || defined(REFRACTED_BACKGROUND)\nvar coatAbsorption=vec3f(1.0f);var coatIblFresnel: f32=0.0;if (coat_weight>0.0) {coatIblFresnel=computeDielectricIblFresnel(coatReflectance,coatGeoInfo.environmentBrdf);let hemisphere_avg_fresnel: f32=coatRefle … [truncated]
-     cU.b.IncludesShadersStoreWGSL[iX] || (cU.b.IncludesShadersStoreWGSL[iX] = HX);
-     const MX = {
-         name: iX,
-         shader: HX
-       },
- ... (3 more removed lines; see GitHub link above)
+     }
+   },
+   64518: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "pbrFragmentReflectionDeclaration",
+       SH = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\nvar reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;\n#ifdef LODBASEDMICROSFURACE\n#else\nvar reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamp … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L239-L244` → after: `L173-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L173-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L173-L184) · [Before (L239-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L239-L244)

```diff
-         name: vX,
-         shader: VX
-       },
-       nX = "openpbrDirectLighting",
-       mX = "#ifdef LIGHT{X}\n{var slab_diffuse: vec3f=vec3f(0.f,0.f,0.f);var slab_translucent: vec3f=vec3f(0.f,0.f,0.f);var slab_glossy: vec3f=vec3f(0.f,0.f,0.f);var specularFresnel: f32=0.0f;var specularColoredFresnel: vec3f=vec3f(0.f,0.f,0.f);var slab_metal: vec3f=vec3f(0.f,0.f … [truncated]
-     cU.b.IncludesShadersStoreWGSL[nX] || (cU.b.IncludesShadersStoreWGSL[nX] = mX);
+       name: rH,
+       shader: SH
+     }
+   },
+   64527: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "pbrHelperFunctions",
+       SH = "#define MINIMUMVARIANCE 0.0005\n#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\nfn convertRoughnessToAverageSlope(roughness: f32)->f32\n{return roughness*roughness+MINIMU … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L248-L255` → after: `L188-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L188-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L188-L197) · [Before (L248-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L248-L255)

```diff
-     };
-     var xX = zU(45201),
-       JX = zU(45205),
-       jX = zU(64396),
-       KX = zU(45212);
-     const bX = "openpbrBlockPrePass",
-       TX = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
-     cU.b.IncludesShadersStoreWGSL[bX] || (cU.b.IncludesShadersStoreWGSL[bX] = TX);
+     }
+   },
+   64566: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "pbrIBLFunctions",
+       SH = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfn getLodFromAlphaG(cubeMapDimensionPixels: f32,microsurfaceAverageSlope: f32)->f32 {var microsurfaceAverageSlopeTexels: f32=cubeMapDimensionPixels*microsurfaceAverageSlope;var lod: f32=log2(microsurfaceAverageSlopeTe … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/691.js` (Changed code · before: `L259-L266` → after: `L201-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0ee652ea6dad9a88abac114f2e389c1a42b6ebfe8041cd11019178207e23a3c1) · [After (L201-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/691.js#L201-L210) · [Before (L259-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/691.js#L259-L266)

```diff
-     };
-     var Uz = zU(45216),
-       Xz = zU(64400);
-     const zz = "openpbrPixelShader",
-       cz = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<openpbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n# … [truncated]
-     cU.b.ShadersStoreWGSL[zz] || (cU.b.ShadersStoreWGSL[zz] = cz);
-     const yz = [yU.b, QU.b, AU.b, FU.b, oU.c, DU.d, EU.c, YU.d, NU.c, IU.e, pU.c, gU, kU.d, GU.d, BU.c, ZU.e, RU.b, PU.c, WU.c, dU.e, LU.b, eU.e, CU.d, wU.b, qU.c, OU.b, SU.b, rU.b, uU.d, fU.c, iU.e, HU.c, MU.e, vU.c, nU, xU, JU.d, jU.c, TU, XX, zX.c, cX.e, AX, FX.c, oX.c, YX, pX … [truncated]
-     for (const Az of yz) cU.b.IncludesShadersStoreWGSL[Az.name] || (cU.b.IncludesShadersStoreWGSL[Az.name] = Az.shader);
+     }
+   },
+   64521: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "subSurfaceScatteringFunctions",
+       SH = "fn testLightingForSSS(diffusionProfile: f32)->bool\n{return diffusionProfile<1.;}";
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/692.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/692.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0c367688340219bb7c5d9a8441b63a654c95b57d5e8c16f7ce21b25a3f745d6d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/692.js` (Changed code · before: `L4` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0c367688340219bb7c5d9a8441b63a654c95b57d5e8c16f7ce21b25a3f745d6dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0c367688340219bb7c5d9a8441b63a654c95b57d5e8c16f7ce21b25a3f745d6d) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/692.js#L4-L31) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/692.js#L4)

```diff
-   64534: (UU, XU, zU) => {
+   64501: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "harmonicsFunctions",
+       SH = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   64636: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+ ... (12 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/692.js` (Changed code · before: `L6` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0c367688340219bb7c5d9a8441b63a654c95b57d5e8c16f7ce21b25a3f745d6dR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0c367688340219bb7c5d9a8441b63a654c95b57d5e8c16f7ce21b25a3f745d6d) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/692.js#L33) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/692.js#L6)

```diff
-       textureMergerPixelShaderWGSL: () => AU
+       openpbrVertexShaderWGSL: () => sH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/692.js` (Changed code · before: `L8-L11` → after: `L35-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0c367688340219bb7c5d9a8441b63a654c95b57d5e8c16f7ce21b25a3f745d6dR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0c367688340219bb7c5d9a8441b63a654c95b57d5e8c16f7ce21b25a3f745d6d) · [After (L35-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/692.js#L35-L88) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/692.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "textureMergerPixelShader",
-       QU = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
-     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138),
+       rH = LH(45685),
+       SH = LH(45690),
+       hH = LH(64636),
+       tH = LH(45700),
+       zH = LH(45734),
+       CH = LH(45707),
+       EH = LH(64498),
+       XH = LH(45711),
+       GH = LH(45716),
+       YH = LH(45722),
+       uH = LH(45731),
+       QH = LH(45736),
+       WH = LH(64501);
+     const MH = "openpbrNormalMapVertexDeclaration",
+       xH = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+ ... (38 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/693.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/693.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/693.js` (Changed code · before: `L4` → after: `L4-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7) · [After (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/693.js#L4-L96) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/693.js#L4)

```diff
-   64543: (UU, XU, zU) => {
+   64612: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "openpbrDielectricReflectance",
+       SH = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   64614: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+ ... (77 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/693.js` (Changed code · before: `L6` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/693.js#L98) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/693.js#L6)

```diff
-       textureMergerPixelShader: () => AU
+       openpbrPixelShader: () => tL
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/693.js` (Changed code · before: `L8-L11` → after: `L100-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3e92fb2c421d0d932d85862bddc403cd9345ea0f3ca23b602567680ef60f71a7) · [After (L100-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/693.js#L100-L285) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/693.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "textureMergerPixelShader",
-       QU = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
-     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
+     var AH = LH(41138),
+       rH = LH(45536),
+       SH = LH(45541),
+       hH = LH(45549),
+       tH = LH(64604),
+       zH = LH(45527);
+     const CH = "openpbrFragmentDeclaration",
+       EH = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
+     AH.c.IncludesShadersStore[CH] || (AH.c.IncludesShadersStore[CH] = EH);
+     const XH = {
+       name: CH,
+       shader: EH
+     };
+     var GH = LH(45342),
+       YH = LH(45351),
+       uH = LH(64588),
+ ... (170 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/694.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/694.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/694.js` (Changed code · before: `L4` → after: `L4-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bc) · [After (L4-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/694.js#L4-L83) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/694.js#L4)

```diff
-   64551: (UU, XU, zU) => {
+   64654: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "openpbrDielectricReflectance",
+       SH = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
+     AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
+   },
+   64658: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH
+ ... (64 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/694.js` (Changed code · before: `L6` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bcR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bc) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/694.js#L85) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/694.js#L6)

```diff
-       proceduralVertexShaderWGSL: () => AU
+       openpbrPixelShaderWGSL: () => SL
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/694.js` (Changed code · before: `L8-L11` → after: `L87-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bcR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-439f5de3b648275ad91fba71407ae9d0211c1af38a4ff200745a6cb33c3cc1bc) · [After (L87-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/694.js#L87-L266) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/694.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "proceduralVertexShader",
-       QU = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
-     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138),
+       rH = LH(45855),
+       SH = LH(45863),
+       hH = LH(45865),
+       tH = LH(45685),
+       zH = LH(45690),
+       CH = LH(64636),
+       EH = LH(45734),
+       XH = LH(64509),
+       GH = LH(45870),
+       YH = LH(45901),
+       uH = LH(64518);
+     const QH = "openpbrFragmentSamplersDeclaration",
+       WH = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
+     AH.c.IncludesShadersStoreWGSL[QH] || (AH.c.IncludesShadersStoreWGSL[QH] = WH);
+     const MH = {
+ ... (164 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/695.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/695.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36)

#### 1. `bundles/preprod.bloxd.io/chunks/js/695.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/695.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/695.js#L4)

```diff
-   64554: (UU, XU, zU) => {
+   64708: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/695.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/695.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/695.js#L6)

```diff
-       proceduralVertexShader: () => AU
+       textureMergerPixelShaderWGSL: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/695.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b1649aa9d68259e7bd5130564d2af30494c819c5b4706bbb06ba8db2998bef36) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/695.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/695.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "proceduralVertexShader",
-       QU = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
-     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "textureMergerPixelShader",
+       SH = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
+     AH.c.ShadersStoreWGSL[rH] || (AH.c.ShadersStoreWGSL[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/696.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/696.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13)

#### 1. `bundles/preprod.bloxd.io/chunks/js/696.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/696.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/696.js#L4)

```diff
-   64561: (UU, XU, zU) => {
+   64714: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/696.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/696.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/696.js#L6)

```diff
-       greasedLinePixelShaderWGSL: () => AU
+       textureMergerPixelShader: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/696.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-81d917b821a999f4a96b1392f156763df3238eb488960f39ab3ac91c6e8d0a13) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/696.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/696.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "greasedLinePixelShader",
-       QU = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAn … [truncated]
-     cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
+     var AH = LH(41138);
+     const rH = "textureMergerPixelShader",
+       SH = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
+     AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/697.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/697.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/697.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/697.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/697.js#L4)

```diff
-   64568: (UU, XU, zU) => {
+   64720: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/697.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/697.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/697.js#L6)

```diff
-       greasedLinePixelShader: () => AU
+       proceduralVertexShaderWGSL: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/697.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-50498cf968f5261344cfbed89f0c8295b922cdccae868e269eb215f9dbd91b9c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/697.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/697.js#L8-L11)

```diff
-     var cU = zU(40961);
-     const yU = "greasedLinePixelShader",
-       QU = "precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeA … [truncated]
-     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
+     var AH = LH(41138);
+     const rH = "proceduralVertexShader",
+       SH = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
+     AH.c.ShadersStoreWGSL[rH] || (AH.c.ShadersStoreWGSL[rH] = SH);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/698.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/698.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73)

#### 1. `bundles/preprod.bloxd.io/chunks/js/698.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/698.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/698.js#L4)

```diff
-   64572: (UU, XU, zU) => {
+   64723: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/698.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/698.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/698.js#L6-L7)

```diff
-       rebuildScenePbrPipelines: () => FU,
-       rebuildSceneRenderables: () => oU
+       proceduralVertexShader: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/698.js` (Changed code · before: `L9-L192` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-740b192e618f9743d3894d4aecd859df277a4ace342614be494134fce4a4cb73) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/698.js#L8-L14) · [Before (L9-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/698.js#L9-L192)

```diff
-     var cU = zU(44400),
-       yU = (UU, XU) => UU.order - XU.order,
-       QU = 8,
-       AU = UU => oU(UU);
-     async function FU(UU) {
-       let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       await DU(UU, "pbr", XU)
-     }
-     async function oU(UU) {
-       await DU(UU, void 0, !1)
-     }
-     async function DU(UU, XU, FU) {
-       const oU = UU;
-       if (!oU._built && !FU) return;
-       const DU = oU._lightListVersion ?? 0,
-         EU = oU.surface.engine,
- ... (168 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "proceduralVertexShader",
+       SH = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
+     AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/84.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/84.js` (670 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L4-L5)

```diff
-   9788: (UU, XU) => {
-     XU.b = 8, XU.g = function(UU, XU, zU, cU) {
+   9943: (HH, BH) => {
+     BH.d = 8, BH.i = function(HH, BH, LH, AH) {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11)

```diff
-     }, XU.d = function(UU) {
+     }, BH.g = function(HH) {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L25)

```diff
-   9864: (UU, XU, zU) => {
+   10007: (HH, BH, LH) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L29-L30` → after: `L29-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L29-L30) · [Before (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L29-L30)

```diff
-       G: () => NU,
-       d: () => cU,
+       c: () => AH,
+       e: () => rH,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L32)

```diff
-       h: () => tU,
+       j: () => zH,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L35-L37` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L35-L37) · [Before (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L35-L37)

```diff
-       m: () => FU,
-       q: () => AU,
-       t: () => QU,
+       o: () => hH,
+       r: () => SH,
+       s: () => YH,
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L105)

```diff
-   9867: (UU, XU, zU) => {
+   10009: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L107-L118` → after: `L107-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L107-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L107-L117) · [Before (L107-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L107-L118)

```diff
-       B: () => YU,
-       E: () => IU,
-       F: () => AU,
-       J: () => BU,
-       L: () => RU,
-       M: () => GU,
-       Q: () => kU,
-       T: () => DU,
-       U: () => tU,
-       W: () => gU,
-       _: () => oU,
-       b: () => yU,
+       $: () => CH,
+       A: () => GH,
+       D: () => XH,
+       H: () => YH,
+       K: () => hH,
+       O: () => PH,
+       R: () => UH,
+       V: () => vH,
+       X: () => xH,
+       bb: () => WH,
+       db: () => MH,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L121)

```diff
-       i: () => ZU,
+       k: () => SH,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L123-L124` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L123-L124) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L123-L124)

```diff
-       n: () => dU,
-       r: () => LU,
+       p: () => QH,
+       s: () => bH,
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L126-L127` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L126-L127) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L126-L127)

```diff
-       w: () => WU,
-       y: () => NU
+       x: () => VH,
+       z: () => OH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L129)

```diff
-     var cU = zU(646);
+     var AH = LH(619);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L139)

```diff
-       return XU ? `${QU}|meta|rot${UU}${FU}` : 1 === UU ? QU : `${QU}|meta|rot${UU}`
+       return BH ? `${SH}|meta|rot${HH}${tH}` : 1 === HH ? SH : `${SH}|meta|rot${HH}`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L143)

```diff
-       return UU.endsWith(FU) && UU.startsWith(`${QU}|`)
+       return HH.endsWith(tH) && HH.startsWith(`${SH}|`)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L187)

```diff
-       return null !== zU ? `${UU}|meta|rot${XU}|${zU}` : 1 === XU ? UU : `${UU}|meta|rot${XU}`
+       return null !== LH ? `${HH}|meta|rot${BH}|${LH}` : 1 === BH ? HH : `${HH}|meta|rot${BH}`
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L194)

```diff
-   9827: (UU, XU, zU) => {
+   9973: (HH, BH, LH) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L196)

```diff
-       d: () => cU
+       c: () => AH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L205)

```diff
-   9782: (UU, XU, zU) => {
+   9940: (HH, BH, LH) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L208` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L209) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L208)

```diff
-       f: () => mU,
+       g: () => NH,
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L213)

```diff
-       r: () => VU,
+       q: () => nH,
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L217-L234` → after: `L217-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L217-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L217-L234) · [Before (L217-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L217-L234)

```diff
-     var cU = zU(9788);
-     if (46 == zU.j) var yU = zU(220);
-     var QU = zU(9792),
-       AU = zU(9874),
-       FU = zU(9882),
-       oU = zU(9885),
-       DU = zU(9814),
-       EU = zU(3557),
-       YU = zU(344),
-       NU = zU(4895),
-       IU = zU(9834),
-       pU = zU(638),
-       aU = zU(4602),
-       tU = zU(9808),
-       gU = zU(9848);
-     if (46 == zU.j) var kU = zU(9894);
- ... (2 more removed lines; see GitHub link above)
+     var AH = LH(9943);
+     if (46 == LH.j) var rH = LH(186);
+     var SH = LH(9946),
+       hH = LH(10015),
+       tH = LH(10018),
+       zH = LH(10026),
+       CH = LH(9957),
+       EH = LH(3540),
+       XH = LH(317),
+       GH = LH(4868),
+       YH = LH(9979),
+       uH = LH(614),
+       QH = LH(4611),
+       WH = LH(9955),
+       MH = LH(9994);
+     if (46 == LH.j) var xH = LH(10030);
+ ... (2 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L254` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L254) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L254)

```diff
-       Pp: [14, 8, 11],
+       Uu: [14, 8, 11],
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L257)

```diff
-         tool: [...YU.we],
+         tool: [...XH.ye],
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L281)

```diff
-     const PU = (0, cU.d)([
+     const VH = (0, AH.g)([
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L287` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L287) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L287)

```diff
-       WU = [(0, tU.ec)("Maple Stairs", {
+       OH = [(0, WH.$b)("Maple Stairs", {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L294)

```diff
-       }), (0, tU.ec)("Pine Stairs", {
+       }), (0, WH.$b)("Pine Stairs", {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L301)

```diff
-       }), (0, tU.ec)("Plum Stairs", {
+       }), (0, WH.$b)("Plum Stairs", {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L308` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L308) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L308)

```diff
-       }), (0, tU.ec)("Cedar Stairs", {
+       }), (0, WH.$b)("Cedar Stairs", {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L315)

```diff
-       }), (0, tU.ec)("Aspen Stairs", {
+       }), (0, WH.$b)("Aspen Stairs", {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L322)

```diff
-       }), (0, tU.ec)("Jungle Stairs", {
+       }), (0, WH.$b)("Jungle Stairs", {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L329)

```diff
-       }), (0, tU.ec)("Palm Stairs", {
+       }), (0, WH.$b)("Palm Stairs", {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L336)

```diff
-       }), (0, tU.ec)("Pear Stairs", {
+       }), (0, WH.$b)("Pear Stairs", {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L343)

```diff
-       }), (0, tU.ec)("Cherry Stairs", {
+       }), (0, WH.$b)("Cherry Stairs", {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L350)

```diff
-       }), (0, tU.ec)("Spectral Stairs", {
+       }), (0, WH.$b)("Spectral Stairs", {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L357)

```diff
-       }), (0, tU.ec)("Mango Stairs", {
+       }), (0, WH.$b)("Mango Stairs", {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L364)

```diff
-       }), (0, tU.ec)("Messy Stone Stairs", {
+       }), (0, WH.$b)("Messy Stone Stairs", {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L371)

```diff
-       }), (0, tU.ec)("Stone Stairs", {
+       }), (0, WH.$b)("Stone Stairs", {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L378)

```diff
-       }), (0, tU.ec)("Smooth Stone Stairs", {
+       }), (0, WH.$b)("Smooth Stone Stairs", {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L385` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L385) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L385)

```diff
-       }), (0, tU.ec)("Engraved Stone Stairs", {
+       }), (0, WH.$b)("Engraved Stone Stairs", {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L392` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L392) · [Before (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L392)

```diff
-       }), (0, tU.ec)("Stone Bricks Stairs", {
+       }), (0, WH.$b)("Stone Bricks Stairs", {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L399)

```diff
-       }), (0, tU.ec)("Mossy Stone Stairs", {
+       }), (0, WH.$b)("Mossy Stone Stairs", {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L406)

```diff
-       }), (0, tU.ec)("Mossy Stone Bricks Stairs", {
+       }), (0, WH.$b)("Mossy Stone Bricks Stairs", {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L413)

```diff
-       }), (0, tU.ec)("Andesite Stairs", {
+       }), (0, WH.$b)("Andesite Stairs", {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L420)

```diff
-       }), (0, tU.ec)("Smooth Andesite Stairs", {
+       }), (0, WH.$b)("Smooth Andesite Stairs", {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L427)

```diff
-       }), (0, tU.ec)("Engraved Andesite Stairs", {
+       }), (0, WH.$b)("Engraved Andesite Stairs", {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L434)

```diff
-       }), (0, tU.ec)("Andesite Bricks Stairs", {
+       }), (0, WH.$b)("Andesite Bricks Stairs", {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L441)

```diff
-       }), (0, tU.ec)("Diorite Stairs", {
+       }), (0, WH.$b)("Diorite Stairs", {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L448)

```diff
-       }), (0, tU.ec)("Smooth Diorite Stairs", {
+       }), (0, WH.$b)("Smooth Diorite Stairs", {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L455` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L455) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L455)

```diff
-       }), (0, tU.ec)("Engraved Diorite Stairs", {
+       }), (0, WH.$b)("Engraved Diorite Stairs", {
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L462)

```diff
-       }), (0, tU.ec)("Diorite Bricks Stairs", {
+       }), (0, WH.$b)("Diorite Bricks Stairs", {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L469` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L469) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L469)

```diff
-       }), (0, tU.ec)("Granite Stairs", {
+       }), (0, WH.$b)("Granite Stairs", {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L476)

```diff
-       }), (0, tU.ec)("Smooth Granite Stairs", {
+       }), (0, WH.$b)("Smooth Granite Stairs", {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L483)

```diff
-       }), (0, tU.ec)("Engraved Granite Stairs", {
+       }), (0, WH.$b)("Engraved Granite Stairs", {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L490)

```diff
-       }), (0, tU.ec)("Granite Bricks Stairs", {
+       }), (0, WH.$b)("Granite Bricks Stairs", {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L497` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L497) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L497)

```diff
-       }), (0, tU.ec)("Sandstone Stairs", {
+       }), (0, WH.$b)("Sandstone Stairs", {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L504` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L504) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L504)

```diff
-       }), (0, tU.ec)("Smooth Sandstone Stairs", {
+       }), (0, WH.$b)("Smooth Sandstone Stairs", {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L511` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L511) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L511)

```diff
-       }), (0, tU.ec)("Engraved Sandstone Stairs", {
+       }), (0, WH.$b)("Engraved Sandstone Stairs", {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L518` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L518) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L518)

```diff
-       }), (0, tU.ec)("Marked Sandstone Stairs", {
+       }), (0, WH.$b)("Marked Sandstone Stairs", {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L525)

```diff
-       }), (0, tU.ec)("Sandstone Bricks Stairs", {
+       }), (0, WH.$b)("Sandstone Bricks Stairs", {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L532)

```diff
-       }), (0, tU.ec)("Red Sandstone Stairs", {
+       }), (0, WH.$b)("Red Sandstone Stairs", {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L539` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L539) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L539)

```diff
-       }), (0, tU.ec)("Smooth Red Sandstone Stairs", {
+       }), (0, WH.$b)("Smooth Red Sandstone Stairs", {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L546` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L546) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L546)

```diff
-       }), (0, tU.ec)("Engraved Red Sandstone Stairs", {
+       }), (0, WH.$b)("Engraved Red Sandstone Stairs", {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L553)

```diff
-       }), (0, tU.ec)("Marked Red Sandstone Stairs", {
+       }), (0, WH.$b)("Marked Red Sandstone Stairs", {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L560` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L560) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L560)

```diff
-       }), (0, tU.ec)("Red Sandstone Bricks Stairs", {
+       }), (0, WH.$b)("Red Sandstone Bricks Stairs", {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L567` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L567) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L567)

```diff
-       }), (0, tU.ec)("Bricks Stairs", {
+       }), (0, WH.$b)("Bricks Stairs", {
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L574` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L574) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L574)

```diff
-       }), (0, tU.ec)("Ice Bricks Stairs", {
+       }), (0, WH.$b)("Ice Bricks Stairs", {
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L583` → after: `L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L583) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L583)

```diff
-       }), ...(0, tU.r)("Concrete", (UU => ({
+       }), ...(0, WH.t)("Concrete", (HH => ({
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L585)

```diff
-           translationKey: `item:${(0,YU.Ie)(UU)}ConcreteStairs`
+           translationKey: `item:${(0,XH.Fe)(HH)}ConcreteStairs`
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L588)

```diff
-         textureInfo: `${(0,YU.Me)(UU)}_concrete`,
+         textureInfo: `${(0,XH.Je)(HH)}_concrete`,
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L590)

```diff
-       }))), ...(0, tU.r)("Chalk", (UU => {
+       }))), ...(0, WH.t)("Chalk", (HH => {
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L592)

```diff
-           colour: `$t(colour:${(0,YU.Me)(UU)})`
+           colour: `$t(colour:${(0,XH.Je)(HH)})`
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L604)

```diff
-           textureInfo: `chalk_${(0,YU.Me)(UU)}`,
+           textureInfo: `chalk_${(0,XH.Je)(HH)}`,
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L607)

```diff
-       })), ...(0, tU.r)("Chalk Bricks", (UU => {
+       })), ...(0, WH.t)("Chalk Bricks", (HH => {
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L609)

```diff
-           colour: `$t(colour:${(0,YU.Me)(UU)})`
+           colour: `$t(colour:${(0,XH.Je)(HH)})`
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L621)

```diff
-           textureInfo: `chalk_bricks_${(0,YU.Me)(UU)}`,
+           textureInfo: `chalk_bricks_${(0,XH.Je)(HH)}`,
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L967` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L967) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L967)

```diff
-             "Golem Pickaxe": NU.p
+             "Golem Pickaxe": GH.q
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L987` → after: `L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L987) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L987)

```diff
-             "Golem Pickaxe": NU.p
+             "Golem Pickaxe": GH.q
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1005` → after: `L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L1005) · [Before (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L1005)

```diff
-             "Golem Pickaxe": NU.p
+             "Golem Pickaxe": GH.q
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L1009)

```diff
-           Pp: [4, 4, 0]
+           Uu: [4, 4, 0]
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L1019)

```diff
-           Pp: [0, 0, 2]
+           Uu: [0, 0, 2]
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1029` → after: `L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L1029) · [Before (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L1029)

```diff
-           Pp: [1, 3, 1]
+           Uu: [1, 3, 1]
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1045` → after: `L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L1045) · [Before (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L1045)

```diff
-             "Golem Pickaxe": NU.p
+             "Golem Pickaxe": GH.q
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1051` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L1051) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L1051)

```diff
-           Pp: [2, 5, 5]
+           Uu: [2, 5, 5]
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1585` → after: `L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L1585) · [Before (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L1585)

```diff
-           Pp: [14, 10, 4]
+           Uu: [14, 10, 4]
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1831` → after: `L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L1831) · [Before (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L1831)

```diff
-           Pp: [14, 14, 14]
+           Uu: [14, 14, 14]
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1843` → after: `L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L1843) · [Before (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L1843)

```diff
-           BI: !0,
+           UY: !0,
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1983` → after: `L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L1983) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L1983)

```diff
-           Pp: [5, 14, 14]
+           Uu: [5, 14, 14]
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L1996)

```diff
-           Pp: [15, 15, 13]
+           Uu: [15, 15, 13]
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L2220` → after: `L2220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R2220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L2220) · [Before (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L2220)

```diff
-           Pp: [8, 5, 2],
+           Uu: [8, 5, 2],
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L2445` → after: `L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L2445) · [Before (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L2445)

```diff
-         ...(0, tU.Ab)("Chest", {
+         ...(0, WH.Bb)("Chest", {
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3160` → after: `L3160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L3160) · [Before (L3160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L3160)

```diff
-         ...(0, tU.pb)("Wheat", {
+         ...(0, WH.rb)("Wheat", {
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3753` → after: `L3753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L3753) · [Before (L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L3753)

```diff
-             "Golem Pickaxe": NU.p
+             "Golem Pickaxe": GH.q
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3759` → after: `L3759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L3759) · [Before (L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L3759)

```diff
-           Pp: [6, 6, 6]
+           Uu: [6, 6, 6]
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3761` → after: `L3761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L3761) · [Before (L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L3761)

```diff
-         ...(0, tU.Ab)("Moonstone Chest", {
+         ...(0, WH.Bb)("Moonstone Chest", {
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L3793` → after: `L3793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R3793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L3793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L3793) · [Before (L3793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L3793)

```diff
-           Pp: [9, 3, 1]
+           Uu: [9, 3, 1]
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5867` → after: `L5867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L5867) · [Before (L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L5867)

```diff
-         ...(0, tU.Ab)("Carved Pumpkin", {
+         ...(0, WH.Bb)("Carved Pumpkin", {
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5876` → after: `L5876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L5876) · [Before (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L5876)

```diff
-         ...(0, tU.Ab)("Jack o'Lantern", {
+         ...(0, WH.Bb)("Jack o'Lantern", {
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L5884` → after: `L5884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R5884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L5884) · [Before (L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L5884)

```diff
-           Pp: [14, 10, 4]
+           Uu: [14, 10, 4]
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6290` → after: `L6290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6290) · [Before (L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6290)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6307` → after: `L6307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6307) · [Before (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6307)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6324` → after: `L6324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6324) · [Before (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6324)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6341` → after: `L6341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6341) · [Before (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6341)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6358` → after: `L6358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6358) · [Before (L6358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6358)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6375` → after: `L6375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6375) · [Before (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6375)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6392` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6392) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6392)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6409` → after: `L6409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6409) · [Before (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6409)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6426` → after: `L6426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6426) · [Before (L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6426)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6443` → after: `L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6443) · [Before (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6443)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6460` → after: `L6460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6460) · [Before (L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6460)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6477` → after: `L6477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6477) · [Before (L6477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6477)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6494` → after: `L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6494) · [Before (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6494)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6511` → after: `L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6511) · [Before (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6511)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6528` → after: `L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6528) · [Before (L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6528)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6545` → after: `L6545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6545) · [Before (L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6545)

```diff
-           Ft: PU,
+           hW: VH,
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6553` → after: `L6553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6553) · [Before (L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6553)

```diff
-         ...(0, tU.C)("Bookshelf", {
+         ...(0, WH.B)("Bookshelf", {
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6564` → after: `L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6564) · [Before (L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6564)

```diff
-         ...(0, tU.$)("Mailbox", {
+         ...(0, WH._)("Mailbox", {
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6591` → after: `L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6591) · [Before (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6591)

```diff
-         ...(0, tU.pb)("Rice", {
+         ...(0, WH.rb)("Rice", {
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6623` → after: `L6623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6623) · [Before (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6623)

```diff
-         ...(0, tU.pb)("Cranberries", {
+         ...(0, WH.rb)("Cranberries", {
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6670` → after: `L6670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6670) · [Before (L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6670)

```diff
-         ...(0, tU.pb)("Cotton", {
+         ...(0, WH.rb)("Cotton", {
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L6824` → after: `L6824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R6824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L6824) · [Before (L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L6824)

```diff
-         ...(0, tU.M)(),
+         ...(0, WH.N)(),
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7222` → after: `L7222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L7222) · [Before (L7222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L7222)

```diff
-         ...(0, tU.pb)("Corn Seeds", {
+         ...(0, WH.rb)("Corn Seeds", {
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7248` → after: `L7248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L7248) · [Before (L7248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L7248)

```diff
-         ...(0, tU.pb)("Corn Plant", {
+         ...(0, WH.rb)("Corn Plant", {
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7278` → after: `L7278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L7278) · [Before (L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L7278)

```diff
-         ...(0, tU.Ab)("Loot Chest", {
+         ...(0, WH.Bb)("Loot Chest", {
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7312-L7313` → after: `L7312-L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L7312-L7313) · [Before (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L7312-L7313)

```diff
-         ...(0, tU.F)((UU => `${UU} Paintball Explosive`), {
-           textureInfo: UU => [`explosive_paint_${(0,YU.Me)(UU)}_side`, `explosive_paint_${(0,YU.Me)(UU)}_top`],
+         ...(0, WH.I)((HH => `${HH} Paintball Explosive`), {
+           textureInfo: HH => [`explosive_paint_${(0,XH.Je)(HH)}_side`, `explosive_paint_${(0,XH.Je)(HH)}_top`],
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7318-L7319` → after: `L7318-L7319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7318-L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L7318-L7319) · [Before (L7318-L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L7318-L7319)

```diff
-         ...(0, tU.F)((UU => `${UU} Quick Paintball Explosive`), {
-           textureInfo: UU => `explosive_paint_quick_${(0,YU.Me)(UU)}`,
+         ...(0, WH.I)((HH => `${HH} Quick Paintball Explosive`), {
+           textureInfo: HH => `explosive_paint_quick_${(0,XH.Je)(HH)}`,
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7323-L7324` → after: `L7323-L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7323-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L7323-L7324) · [Before (L7323-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L7323-L7324)

```diff
-         ...(0, tU.F)((UU => `${UU} Seeking Paintball Explosive`), {
-           textureInfo: UU => `explosive_paint_seeking_${(0,YU.Me)(UU)}`,
+         ...(0, WH.I)((HH => `${HH} Seeking Paintball Explosive`), {
+           textureInfo: HH => `explosive_paint_seeking_${(0,XH.Je)(HH)}`,
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7328-L7329` → after: `L7328-L7329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7328-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L7328-L7329) · [Before (L7328-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L7328-L7329)

```diff
-         ...(0, tU.F)((UU => `${UU} Sticky Paintball Explosive`), {
-           textureInfo: UU => `explosive_paint_sticky_${(0,YU.Me)(UU)}`,
+         ...(0, WH.I)((HH => `${HH} Sticky Paintball Explosive`), {
+           textureInfo: HH => `explosive_paint_sticky_${(0,XH.Je)(HH)}`,
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7749` → after: `L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L7749) · [Before (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L7749)

```diff
-           BI: !0,
+           UY: !0,
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L7752` → after: `L7752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R7752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L7752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L7752) · [Before (L7752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L7752)

```diff
-           Pp: [14, 8, 2]
+           Uu: [14, 8, 2]
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8010` → after: `L8010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8010) · [Before (L8010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8010)

```diff
-         ...(0, tU.F)((UU => `Spawn Block (${UU})`), {
+         ...(0, WH.I)((HH => `Spawn Block (${HH})`), {
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8012` → after: `L8012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8012) · [Before (L8012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8012)

```diff
-             translationKey: `item:${(0,YU.Ie)(UU)}SpawnBlock`
+             translationKey: `item:${(0,XH.Fe)(HH)}SpawnBlock`
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8015` → after: `L8015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8015) · [Before (L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8015)

```diff
-           textureInfo: UU => [`${(0,YU.Me)(UU)}_spawn_block_top[rot[1`, `${(0,YU.Me)(UU)}_spawn_block_top[rot[2`, `${(0,YU.Me)(UU)}_spawn_block_top[rot[3`, `${(0,YU.Me)(UU)}_spawn_block_top[rot[4`, `${(0,YU.Me)(UU)}_spawn_block_side`],
+           textureInfo: HH => [`${(0,XH.Je)(HH)}_spawn_block_top[rot[1`, `${(0,XH.Je)(HH)}_spawn_block_top[rot[2`, `${(0,XH.Je)(HH)}_spawn_block_top[rot[3`, `${(0,XH.Je)(HH)}_spawn_block_top[rot[4`, `${(0,XH.Je)(HH)}_spawn_block_side`],
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8018` → after: `L8018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8018) · [Before (L8018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8018)

```diff
-           rootMetaDesc: UU => `Spawn Block (${UU})|meta|rot1`,
+           rootMetaDesc: HH => `Spawn Block (${HH})|meta|rot1`,
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8023` → after: `L8023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8023) · [Before (L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8023)

```diff
-         ...(0, tU.F)((UU => `Spawn Block (${UU})|meta|rot2`), {
+         ...(0, WH.I)((HH => `Spawn Block (${HH})|meta|rot2`), {
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8025` → after: `L8025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8025) · [Before (L8025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8025)

```diff
-           textureInfo: UU => [`${(0,YU.Me)(UU)}_spawn_block_top[rot[1`, `${(0,YU.Me)(UU)}_spawn_block_top[rot[2`, `${(0,YU.Me)(UU)}_spawn_block_top[rot[3`, `${(0,YU.Me)(UU)}_spawn_block_top[rot[4`, `${(0,YU.Me)(UU)}_spawn_block_side`],
+           textureInfo: HH => [`${(0,XH.Je)(HH)}_spawn_block_top[rot[1`, `${(0,XH.Je)(HH)}_spawn_block_top[rot[2`, `${(0,XH.Je)(HH)}_spawn_block_top[rot[3`, `${(0,XH.Je)(HH)}_spawn_block_top[rot[4`, `${(0,XH.Je)(HH)}_spawn_block_side`],
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8029` → after: `L8029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8029) · [Before (L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8029)

```diff
-         ...(0, tU.F)((UU => `Spawn Block (${UU})|meta|rot3`), {
+         ...(0, WH.I)((HH => `Spawn Block (${HH})|meta|rot3`), {
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8031` → after: `L8031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8031) · [Before (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8031)

```diff
-           textureInfo: UU => [`${(0,YU.Me)(UU)}_spawn_block_top[rot[1`, `${(0,YU.Me)(UU)}_spawn_block_top[rot[2`, `${(0,YU.Me)(UU)}_spawn_block_top[rot[3`, `${(0,YU.Me)(UU)}_spawn_block_top[rot[4`, `${(0,YU.Me)(UU)}_spawn_block_side`],
+           textureInfo: HH => [`${(0,XH.Je)(HH)}_spawn_block_top[rot[1`, `${(0,XH.Je)(HH)}_spawn_block_top[rot[2`, `${(0,XH.Je)(HH)}_spawn_block_top[rot[3`, `${(0,XH.Je)(HH)}_spawn_block_top[rot[4`, `${(0,XH.Je)(HH)}_spawn_block_side`],
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8035` → after: `L8035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8035) · [Before (L8035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8035)

```diff
-         ...(0, tU.F)((UU => `Spawn Block (${UU})|meta|rot4`), {
+         ...(0, WH.I)((HH => `Spawn Block (${HH})|meta|rot4`), {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8037` → after: `L8037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8037) · [Before (L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8037)

```diff
-           textureInfo: UU => [`${(0,YU.Me)(UU)}_spawn_block_top[rot[1`, `${(0,YU.Me)(UU)}_spawn_block_top[rot[2`, `${(0,YU.Me)(UU)}_spawn_block_top[rot[3`, `${(0,YU.Me)(UU)}_spawn_block_top[rot[4`, `${(0,YU.Me)(UU)}_spawn_block_side`],
+           textureInfo: HH => [`${(0,XH.Je)(HH)}_spawn_block_top[rot[1`, `${(0,XH.Je)(HH)}_spawn_block_top[rot[2`, `${(0,XH.Je)(HH)}_spawn_block_top[rot[3`, `${(0,XH.Je)(HH)}_spawn_block_top[rot[4`, `${(0,XH.Je)(HH)}_spawn_block_side`],
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8041` → after: `L8041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8041) · [Before (L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8041)

```diff
-         ...(0, tU.Ab)("Checkpoint Block", {
+         ...(0, WH.Bb)("Checkpoint Block", {
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8058` → after: `L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8058) · [Before (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8058)

```diff
-         ...(0, tU.Ab)("Custom Lobby Block", {
+         ...(0, WH.Bb)("Custom Lobby Block", {
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8075` → after: `L8075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8075) · [Before (L8075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8075)

```diff
-         ...(0, tU.F)((UU => `Generator Spawn Block (${UU})`), {
+         ...(0, WH.I)((HH => `Generator Spawn Block (${HH})`), {
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8077` → after: `L8077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8077) · [Before (L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8077)

```diff
-             translationKey: `item:${(0,YU.Ie)(UU)}GeneratorSpawnBlock`
+             translationKey: `item:${(0,XH.Fe)(HH)}GeneratorSpawnBlock`
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8080` → after: `L8080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8080) · [Before (L8080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8080)

```diff
-           textureInfo: UU => [`${(0,YU.Me)(UU)}_gen_spawn_top`, `${(0,YU.Me)(UU)}_gen_spawn_coal`, `${(0,YU.Me)(UU)}_gen_spawn_iron`],
+           textureInfo: HH => [`${(0,XH.Je)(HH)}_gen_spawn_top`, `${(0,XH.Je)(HH)}_gen_spawn_coal`, `${(0,XH.Je)(HH)}_gen_spawn_iron`],
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8087` → after: `L8087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8087) · [Before (L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8087)

```diff
-         ...(0, tU.Ab)("Trader Shop Spawn Block", {
+         ...(0, WH.Bb)("Trader Shop Spawn Block", {
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8104` → after: `L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8104) · [Before (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8104)

```diff
-         ...(0, tU.Ab)("Wizard Shop Spawn Block", {
+         ...(0, WH.Bb)("Wizard Shop Spawn Block", {
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8246-L8251` → after: `L8246-L8251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8246-L8251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8246-L8251) · [Before (L8246-L8251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8246-L8251)

```diff
-         ...(0, tU.hb)("Pig"),
-         ...(0, tU.hb)("Cow"),
-         ...(0, tU.hb)("Sheep"),
-         ...(0, tU.hb)("Cave Golem"),
-         ...(0, tU.hb)("Draugr Zombie"),
-         ...(0, tU.hb)("Draugr Skeleton"),
+         ...(0, WH.eb)("Pig"),
+         ...(0, WH.eb)("Cow"),
+         ...(0, WH.eb)("Sheep"),
+         ...(0, WH.eb)("Cave Golem"),
+         ...(0, WH.eb)("Draugr Zombie"),
+         ...(0, WH.eb)("Draugr Skeleton"),
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8273-L8275` → after: `L8273-L8275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8273-L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8273-L8275) · [Before (L8273-L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8273-L8275)

```diff
-         ...(0, tU.hb)("Frost Golem"),
-         ...(0, tU.hb)("Frost Zombie"),
-         ...(0, tU.hb)("Frost Skeleton"),
+         ...(0, WH.eb)("Frost Golem"),
+         ...(0, WH.eb)("Frost Zombie"),
+         ...(0, WH.eb)("Frost Skeleton"),
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8296` → after: `L8296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8296) · [Before (L8296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8296)

```diff
-         ...(0, tU.hb)("Draugr Knight"),
+         ...(0, WH.eb)("Draugr Knight"),
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8565` → after: `L8565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8565) · [Before (L8565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8565)

```diff
-           Pp: [2, 0, 2]
+           Uu: [2, 0, 2]
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8581` → after: `L8581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8581) · [Before (L8581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8581)

```diff
-           Pp: [4, 0, 4]
+           Uu: [4, 0, 4]
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8597` → after: `L8597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8597) · [Before (L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8597)

```diff
-           Pp: [6, 0, 6]
+           Uu: [6, 0, 6]
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8613` → after: `L8613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8613) · [Before (L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8613)

```diff
-           Pp: [8, 0, 8]
+           Uu: [8, 0, 8]
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8629` → after: `L8629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8629) · [Before (L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8629)

```diff
-           Pp: [10, 0, 10]
+           Uu: [10, 0, 10]
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8707-L8710` → after: `L8707-L8710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8707-L8710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8707-L8710) · [Before (L8707-L8710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8707-L8710)

```diff
-         ...(0, tU.hb)("Wolf"),
-         ...(0, tU.hb)("Bear"),
-         ...(0, tU.hb)("Deer"),
-         ...(0, tU.hb)("Stag"),
+         ...(0, WH.eb)("Wolf"),
+         ...(0, WH.eb)("Bear"),
+         ...(0, WH.eb)("Deer"),
+         ...(0, WH.eb)("Stag"),
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8744` → after: `L8744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8744) · [Before (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8744)

```diff
-           Pp: [7, 7, 2]
+           Uu: [7, 7, 2]
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8746` → after: `L8746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8746) · [Before (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8746)

```diff
-         ...(0, tU.hb)("Gold Watermelon Stag"),
+         ...(0, WH.eb)("Gold Watermelon Stag"),
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8770` → after: `L8770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8770) · [Before (L8770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8770)

```diff
-         ...(0, tU.F)((UU => `${UU} Chalk`), {
+         ...(0, WH.I)((HH => `${HH} Chalk`), {
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8774` → after: `L8774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8774) · [Before (L8774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8774)

```diff
-               colour: `$t(colour:${(0,YU.Me)(UU)})`
+               colour: `$t(colour:${(0,XH.Je)(HH)})`
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8780` → after: `L8780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8780) · [Before (L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8780)

```diff
-               colour: `$t(colour:${(0,YU.Me)(UU)})`
+               colour: `$t(colour:${(0,XH.Je)(HH)})`
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8784` → after: `L8784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8784) · [Before (L8784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8784)

```diff
-           textureInfo: UU => `chalk_${(0,YU.Me)(UU)}`,
+           textureInfo: HH => `chalk_${(0,XH.Je)(HH)}`,
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8787` → after: `L8787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8787) · [Before (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8787)

```diff
-         ...(0, tU.F)((UU => `${UU} Chalk Bricks`), {
+         ...(0, WH.I)((HH => `${HH} Chalk Bricks`), {
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8791` → after: `L8791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8791) · [Before (L8791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8791)

```diff
-               colour: `$t(colour:${(0,YU.Me)(UU)})`
+               colour: `$t(colour:${(0,XH.Je)(HH)})`
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8797` → after: `L8797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8797) · [Before (L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8797)

```diff
-               colour: `$t(colour:${(0,YU.Me)(UU)})`
+               colour: `$t(colour:${(0,XH.Je)(HH)})`
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8801` → after: `L8801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8801) · [Before (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8801)

```diff
-           textureInfo: UU => `chalk_bricks_${(0,YU.Me)(UU)}`,
+           textureInfo: HH => `chalk_bricks_${(0,XH.Je)(HH)}`,
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8804` → after: `L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8804) · [Before (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8804)

```diff
-         ...(0, tU.K)("$colour$ Chalk Slab", "$colour$ Chalk", "chalk_$colour$", "item:colouredChalkSlab", "item:colouredChalkSlabDescription", {
+         ...(0, WH.L)("$colour$ Chalk Slab", "$colour$ Chalk", "chalk_$colour$", "item:colouredChalkSlab", "item:colouredChalkSlabDescription", {
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8808` → after: `L8808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R8808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L8808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L8808) · [Before (L8808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L8808)

```diff
-         ...(0, tU.K)("$colour$ Chalk Bricks Slab", "$colour$ Chalk Bricks", ["chalk_bricks_slab_side_$colour$", "chalk_bricks_$colour$"], "item:colouredChalkBricksSlab", "item:colouredChalkBricksSlabDescription", {
+         ...(0, WH.L)("$colour$ Chalk Bricks Slab", "$colour$ Chalk Bricks", ["chalk_bricks_slab_side_$colour$", "chalk_bricks_$colour$"], "item:colouredChalkBricksSlab", "item:colouredChalkBricksSlabDescription", {
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9235-L9236` → after: `L9235-L9236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9235-L9236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9235-L9236) · [Before (L9235-L9236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9235-L9236)

```diff
-         ...(0, tU.hb)("Gorilla"),
-         ...(0, tU.hb)("Wildcat"),
+         ...(0, WH.eb)("Gorilla"),
+         ...(0, WH.eb)("Wildcat"),
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9328-L9329` → after: `L9328-L9329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9328-L9329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9328-L9329) · [Before (L9328-L9329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9328-L9329)

```diff
-         ...(0, tU.hb)("Draugr Huntress"),
-         ...(0, tU.hb)("Magma Golem"),
+         ...(0, WH.eb)("Draugr Huntress"),
+         ...(0, WH.eb)("Magma Golem"),
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9342` → after: `L9342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9342) · [Before (L9342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9342)

```diff
-           Pp: (0, tU.rb)("Black")
+           Uu: (0, WH.sb)("Black")
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9356` → after: `L9356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9356) · [Before (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9356)

```diff
-           Pp: (0, tU.rb)("Blue")
+           Uu: (0, WH.sb)("Blue")
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9370` → after: `L9370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9370) · [Before (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9370)

```diff
-           Pp: (0, tU.rb)("Brown")
+           Uu: (0, WH.sb)("Brown")
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9384` → after: `L9384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9384) · [Before (L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9384)

```diff
-           Pp: (0, tU.rb)("Cyan")
+           Uu: (0, WH.sb)("Cyan")
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9398` → after: `L9398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9398) · [Before (L9398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9398)

```diff
-           Pp: (0, tU.rb)("Gray")
+           Uu: (0, WH.sb)("Gray")
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9412` → after: `L9412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9412) · [Before (L9412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9412)

```diff
-           Pp: (0, tU.rb)("Green")
+           Uu: (0, WH.sb)("Green")
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9426` → after: `L9426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9426) · [Before (L9426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9426)

```diff
-           Pp: (0, tU.rb)("Grey")
+           Uu: (0, WH.sb)("Grey")
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9440` → after: `L9440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9440) · [Before (L9440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9440)

```diff
-           Pp: (0, tU.rb)("Light Blue")
+           Uu: (0, WH.sb)("Light Blue")
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9454` → after: `L9454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9454) · [Before (L9454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9454)

```diff
-           Pp: (0, tU.rb)("Light Gray")
+           Uu: (0, WH.sb)("Light Gray")
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9468` → after: `L9468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9468) · [Before (L9468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9468)

```diff
-           Pp: (0, tU.rb)("Lime")
+           Uu: (0, WH.sb)("Lime")
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9482` → after: `L9482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9482) · [Before (L9482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9482)

```diff
-           Pp: (0, tU.rb)("Magenta")
+           Uu: (0, WH.sb)("Magenta")
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9496` → after: `L9496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9496) · [Before (L9496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9496)

```diff
-           Pp: (0, tU.rb)("Orange")
+           Uu: (0, WH.sb)("Orange")
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9510` → after: `L9510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9510) · [Before (L9510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9510)

```diff
-           Pp: (0, tU.rb)("Pink")
+           Uu: (0, WH.sb)("Pink")
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9524` → after: `L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9524) · [Before (L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9524)

```diff
-           Pp: (0, tU.rb)("Purple")
+           Uu: (0, WH.sb)("Purple")
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9538` → after: `L9538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9538) · [Before (L9538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9538)

```diff
-           Pp: (0, tU.rb)("Red")
+           Uu: (0, WH.sb)("Red")
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9552` → after: `L9552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9552) · [Before (L9552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9552)

```diff
-           Pp: (0, tU.rb)("White")
+           Uu: (0, WH.sb)("White")
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9566` → after: `L9566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9566) · [Before (L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9566)

```diff
-           Pp: (0, tU.rb)("Yellow")
+           Uu: (0, WH.sb)("Yellow")
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9581` → after: `L9581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9581) · [Before (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9581)

```diff
-         ...(0, tU.hb)("Horse"),
+         ...(0, WH.eb)("Horse"),
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9593` → after: `L9593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9593) · [Before (L9593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9593)

```diff
-         ...(0, tU.pb)("Tomato Plant", {
+         ...(0, WH.rb)("Tomato Plant", {
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9646` → after: `L9646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9646) · [Before (L9646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9646)

```diff
-         ...(0, tU.pb)("Carrot Plant", {
+         ...(0, WH.rb)("Carrot Plant", {
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9690` → after: `L9690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9690) · [Before (L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9690)

```diff
-         ...(0, tU.pb)("Potato Plant", {
+         ...(0, WH.rb)("Potato Plant", {
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9730` → after: `L9730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9730) · [Before (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9730)

```diff
-         ...(0, tU.pb)("Strawberry Bush", {
+         ...(0, WH.rb)("Strawberry Bush", {
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9759` → after: `L9759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9759) · [Before (L9759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9759)

```diff
-         ...(0, tU.pb)("Sugar Cane Plant", {
+         ...(0, WH.rb)("Sugar Cane Plant", {
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9808` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9808) · [Before (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9808)

```diff
-         ...(0, tU.pb)("Lettuce Plant", {
+         ...(0, WH.rb)("Lettuce Plant", {
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9845` → after: `L9845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9845) · [Before (L9845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9845)

```diff
-         ...(0, tU.pb)("Coffee Plant", {
+         ...(0, WH.rb)("Coffee Plant", {
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9882` → after: `L9882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9882) · [Before (L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9882)

```diff
-         ...(0, tU.pb)("Cauliflower Plant", {
+         ...(0, WH.rb)("Cauliflower Plant", {
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9919` → after: `L9919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9919) · [Before (L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9919)

```diff
-         ...(0, tU.pb)("Parsnip Plant", {
+         ...(0, WH.rb)("Parsnip Plant", {
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9956` → after: `L9956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9956) · [Before (L9956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9956)

```diff
-         ...(0, tU.pb)("Blueberry Bush", {
+         ...(0, WH.rb)("Blueberry Bush", {
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L9985` → after: `L9985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R9985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L9985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L9985) · [Before (L9985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L9985)

```diff
-         ...(0, tU.pb)("Red Cabbage Plant", {
+         ...(0, WH.rb)("Red Cabbage Plant", {
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10026` → after: `L10026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10026) · [Before (L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10026)

```diff
-         ...(0, tU.pb)("Beetroot Plant", {
+         ...(0, WH.rb)("Beetroot Plant", {
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10086` → after: `L10086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10086) · [Before (L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10086)

```diff
-         ...(0, tU.Ab)("Iron Chest", {
+         ...(0, WH.Bb)("Iron Chest", {
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10179` → after: `L10179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10179) · [Before (L10179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10179)

```diff
-         ...(0, tU.A)("White Banner", {
+         ...(0, WH.z)("White Banner", {
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10200` → after: `L10200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10200) · [Before (L10200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10200)

```diff
-         ...(0, tU.A)("Orange Banner", {
+         ...(0, WH.z)("Orange Banner", {
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10221` → after: `L10221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10221) · [Before (L10221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10221)

```diff
-         ...(0, tU.A)("Magenta Banner", {
+         ...(0, WH.z)("Magenta Banner", {
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10242` → after: `L10242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10242) · [Before (L10242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10242)

```diff
-         ...(0, tU.A)("Light Blue Banner", {
+         ...(0, WH.z)("Light Blue Banner", {
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10263` → after: `L10263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10263) · [Before (L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10263)

```diff
-         ...(0, tU.A)("Yellow Banner", {
+         ...(0, WH.z)("Yellow Banner", {
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10284` → after: `L10284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10284) · [Before (L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10284)

```diff
-         ...(0, tU.A)("Lime Banner", {
+         ...(0, WH.z)("Lime Banner", {
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10305` → after: `L10305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10305) · [Before (L10305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10305)

```diff
-         ...(0, tU.A)("Pink Banner", {
+         ...(0, WH.z)("Pink Banner", {
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10326` → after: `L10326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10326) · [Before (L10326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10326)

```diff
-         ...(0, tU.A)("Gray Banner", {
+         ...(0, WH.z)("Gray Banner", {
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10347` → after: `L10347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10347) · [Before (L10347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10347)

```diff
-         ...(0, tU.A)("Light Gray Banner", {
+         ...(0, WH.z)("Light Gray Banner", {
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10368` → after: `L10368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10368) · [Before (L10368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10368)

```diff
-         ...(0, tU.A)("Cyan Banner", {
+         ...(0, WH.z)("Cyan Banner", {
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10389` → after: `L10389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10389) · [Before (L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10389)

```diff
-         ...(0, tU.A)("Purple Banner", {
+         ...(0, WH.z)("Purple Banner", {
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10410` → after: `L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10410) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10410)

```diff
-         ...(0, tU.A)("Blue Banner", {
+         ...(0, WH.z)("Blue Banner", {
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10431` → after: `L10431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10431) · [Before (L10431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10431)

```diff
-         ...(0, tU.A)("Brown Banner", {
+         ...(0, WH.z)("Brown Banner", {
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10452` → after: `L10452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10452) · [Before (L10452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10452)

```diff
-         ...(0, tU.A)("Green Banner", {
+         ...(0, WH.z)("Green Banner", {
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10473` → after: `L10473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10473) · [Before (L10473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10473)

```diff
-         ...(0, tU.A)("Red Banner", {
+         ...(0, WH.z)("Red Banner", {
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10494` → after: `L10494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10494) · [Before (L10494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10494)

```diff
-         ...(0, tU.A)("Black Banner", {
+         ...(0, WH.z)("Black Banner", {
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10515` → after: `L10515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10515) · [Before (L10515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10515)

```diff
-         ...(0, tU.A)("Draugr Banner", {
+         ...(0, WH.z)("Draugr Banner", {
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10536-L10540` → after: `L10536-L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10536-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10536-L10540) · [Before (L10536-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10536-L10540)

```diff
-         ...(0, tU.hb)("Spirit Golem"),
-         ...(0, tU.hb)("Spirit Wolf"),
-         ...(0, tU.hb)("Spirit Bear"),
-         ...(0, tU.hb)("Spirit Stag"),
-         ...(0, tU.hb)("Spirit Gorilla"),
+         ...(0, WH.eb)("Spirit Golem"),
+         ...(0, WH.eb)("Spirit Wolf"),
+         ...(0, WH.eb)("Spirit Bear"),
+         ...(0, WH.eb)("Spirit Stag"),
+         ...(0, WH.eb)("Spirit Gorilla"),
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10550-L10556` → after: `L10550-L10556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10550-L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10550-L10556) · [Before (L10550-L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10550-L10556)

```diff
-         ...(0, tU.db)("Sheep"),
-         ...(0, tU.db)("Cow"),
-         ...(0, tU.db)("Pig"),
-         ...(0, tU.db)("Horse"),
-         ...(0, tU.db)("Wolf"),
-         ...(0, tU.db)("Deer"),
-         ...(0, tU.db)("Wildcat"),
+         ...(0, WH.cb)("Sheep"),
+         ...(0, WH.cb)("Cow"),
+         ...(0, WH.cb)("Pig"),
+         ...(0, WH.cb)("Horse"),
+         ...(0, WH.cb)("Wolf"),
+         ...(0, WH.cb)("Deer"),
+         ...(0, WH.cb)("Wildcat"),
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10566` → after: `L10566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10566) · [Before (L10566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10566)

```diff
-         ...(0, tU.hb)("Draugr Warper"),
+         ...(0, WH.eb)("Draugr Warper"),
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10621-L10623` → after: `L10621-L10623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10621-L10623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10621-L10623) · [Before (L10621-L10623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10621-L10623)

```diff
-         ...(0, tU.Gb)("Magenta"),
-         ...(0, tU.Gb)("Light Gray"),
-         ...(0, tU.Gb)("Red"),
+         ...(0, WH.Fb)("Magenta"),
+         ...(0, WH.Fb)("Light Gray"),
+         ...(0, WH.Fb)("Red"),
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10632-L10647` → after: `L10632-L10647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10632-L10647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10632-L10647) · [Before (L10632-L10647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10632-L10647)

```diff
-         ...(0, tU.hb)("Frost Wraith"),
-         ...(0, tU.hb)("Draugr Reaver"),
-         ...(0, tU.Gb)("White"),
-         ...(0, tU.Gb)("Orange"),
-         ...(0, tU.Gb)("Light Blue"),
-         ...(0, tU.Gb)("Yellow"),
-         ...(0, tU.Gb)("Lime"),
-         ...(0, tU.Gb)("Pink"),
-         ...(0, tU.Gb)("Gray"),
-         ...(0, tU.Gb)("Cyan"),
-         ...(0, tU.Gb)("Purple"),
-         ...(0, tU.Gb)("Blue"),
-         ...(0, tU.Gb)("Brown"),
-         ...(0, tU.Gb)("Green"),
-         ...(0, tU.Gb)("Black"),
-         ...(0, tU.A)("Skull Banner", {
+         ...(0, WH.eb)("Frost Wraith"),
+         ...(0, WH.eb)("Draugr Reaver"),
+         ...(0, WH.Fb)("White"),
+         ...(0, WH.Fb)("Orange"),
+         ...(0, WH.Fb)("Light Blue"),
+         ...(0, WH.Fb)("Yellow"),
+         ...(0, WH.Fb)("Lime"),
+         ...(0, WH.Fb)("Pink"),
+         ...(0, WH.Fb)("Gray"),
+         ...(0, WH.Fb)("Cyan"),
+         ...(0, WH.Fb)("Purple"),
+         ...(0, WH.Fb)("Blue"),
+         ...(0, WH.Fb)("Brown"),
+         ...(0, WH.Fb)("Green"),
+         ...(0, WH.Fb)("Black"),
+         ...(0, WH.z)("Skull Banner", {
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L10668` → after: `L10668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R10668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L10668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L10668) · [Before (L10668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L10668)

```diff
-         ...(0, tU.A)("Rainbow Banner", {
+         ...(0, WH.z)("Rainbow Banner", {
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11051` → after: `L11051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11051) · [Before (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11051)

```diff
-           Pp: [5, 6, 8]
+           Uu: [5, 6, 8]
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11671` → after: `L11671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11671) · [Before (L11671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11671)

```diff
-           Pp: [14, 14, 12]
+           Uu: [14, 14, 12]
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11675` → after: `L11675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11675) · [Before (L11675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11675)

```diff
-         ...(0, tU.H)((UU => `${UU} Torch`), {
+         ...(0, WH.J)((HH => `${HH} Torch`), {
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11678` → after: `L11678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11678) · [Before (L11678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11678)

```diff
-           itemTexture: UU => `torch_${(0,YU.Me)(UU)}`,
+           itemTexture: HH => `torch_${(0,XH.Je)(HH)}`,
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11686` → after: `L11686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11686) · [Before (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11686)

```diff
-           blockModel: UU => `torch_${(0,YU.Me)(UU)}`,
+           blockModel: HH => `torch_${(0,XH.Je)(HH)}`,
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11690-L11693` → after: `L11690-L11693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11690-L11693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11690-L11693) · [Before (L11690-L11693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11690-L11693)

```diff
-           rootMetaDesc: UU => `${UU} Torch|meta|rot1|bot`,
-           Pp: UU => YU.J[UU]
-         }, (UU => `torch_wall_${(0,YU.Me)(UU)}`)),
-         ...(0, tU.F)((UU => `${UU} Neon`), {
+           rootMetaDesc: HH => `${HH} Torch|meta|rot1|bot`,
+           Uu: HH => XH.O[HH]
+         }, (HH => `torch_wall_${(0,XH.Je)(HH)}`)),
+         ...(0, WH.I)((HH => `${HH} Neon`), {
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11700` → after: `L11700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11700) · [Before (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11700)

```diff
-           textureInfo: UU => `neon_${(0,YU.Me)(UU)}`,
+           textureInfo: HH => `neon_${(0,XH.Je)(HH)}`,
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11702` → after: `L11702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11702) · [Before (L11702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11702)

```diff
-           Pp: UU => YU.J[UU]
+           Uu: HH => XH.O[HH]
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11704-L11705` → after: `L11704-L11705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11704-L11705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11704-L11705) · [Before (L11704-L11705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11704-L11705)

```diff
-         ...(0, tU.X)(),
-         ...(0, tU.F)((UU => `Invisible ${UU} Light`), {
+         ...(0, WH.U)(),
+         ...(0, WH.I)((HH => `Invisible ${HH} Light`), {
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11715` → after: `L11715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11715) · [Before (L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11715)

```diff
-           Pp: UU => YU.J[UU],
+           Uu: HH => XH.O[HH],
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11728` → after: `L11728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11728) · [Before (L11728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11728)

```diff
-           ot: 15,
+           tW: 15,
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11817` → after: `L11817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11817) · [Before (L11817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11817)

```diff
-           Pp: [8, 15, 15]
+           Uu: [8, 15, 15]
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11841` → after: `L11841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11841) · [Before (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11841)

```diff
-           Pp: [8, 15, 7],
+           Uu: [8, 15, 7],
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11903` → after: `L11903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11903) · [Before (L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11903)

```diff
-         ...(0, tU.mb)("Pipe", "pipe", {
+         ...(0, WH.nb)("Pipe", "pipe", {
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11921` → after: `L11921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11921) · [Before (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11921)

```diff
-         ...(0, tU.w)(),
+         ...(0, WH.v)(),
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11937` → after: `L11937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11937) · [Before (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11937)

```diff
-         ...(0, tU.mb)("Extractor Pipe", "extractor_pipe", {
+         ...(0, WH.nb)("Extractor Pipe", "extractor_pipe", {
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11974` → after: `L11974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11974) · [Before (L11974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11974)

```diff
-         ...(0, tU.mb)("Wire", "wire", {
+         ...(0, WH.nb)("Wire", "wire", {
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11992` → after: `L11992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R11992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L11992) · [Before (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L11992)

```diff
-         ...(0, tU.W)("Filter Pipe", "filter_pipe", "pz", {
+         ...(0, WH.T)("Filter Pipe", "filter_pipe", "pz", {
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L12044` → after: `L12044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R12044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L12044) · [Before (L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L12044)

```diff
-         ...(0, tU.hb)("Stalker"),
+         ...(0, WH.eb)("Stalker"),
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L12059` → after: `L12059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R12059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L12059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L12059) · [Before (L12059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L12059)

```diff
-             "Golem Pickaxe": NU.p
+             "Golem Pickaxe": GH.q
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L12065` → after: `L12065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R12065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L12065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L12065) · [Before (L12065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L12065)

```diff
-           Pp: [10, 3, 12]
+           Uu: [10, 3, 12]
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L12078` → after: `L12078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R12078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L12078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L12078) · [Before (L12078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L12078)

```diff
-         ...(0, tU.Z)(),
+         ...(0, WH.Y)(),
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L12119-L12120` → after: `L12119-L12120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R12119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L12119-L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L12119-L12120) · [Before (L12119-L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L12119-L12120)

```diff
-         ...(0, tU.hb)("Crone"),
-         ...(0, tU.hb)("Slime"),
+         ...(0, WH.eb)("Crone"),
+         ...(0, WH.eb)("Slime"),
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L12133-L12136` → after: `L12133-L12136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L12133-L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L12133-L12136) · [Before (L12133-L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L12133-L12136)

```diff
-         ...(0, tU.hb)("Iron Guardian"),
-         ...(0, tU.hb)("Gold Guardian"),
-         ...(0, tU.hb)("Diamond Guardian"),
-         ...(0, tU.hb)("Moonstone Guardian"),
+         ...(0, WH.eb)("Iron Guardian"),
+         ...(0, WH.eb)("Gold Guardian"),
+         ...(0, WH.eb)("Diamond Guardian"),
+         ...(0, WH.eb)("Moonstone Guardian"),
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L12218` → after: `L12218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R12218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/84.js#L12218) · [Before (L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/84.js#L12218)

```diff
-           Pp: [15, 15, 13]
+           Uu: [15, 15, 13]
```
