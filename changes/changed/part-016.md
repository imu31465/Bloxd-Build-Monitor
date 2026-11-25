# Changed — Bundle Modifications Report (Part 016 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `16 / 56` (**279** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/324.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/324.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2)

#### 1. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L4-L291` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/324.js#L4-L5) · [Before (L4-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/324.js#L4-L291)

```diff
-   42639: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bumpFragment",
-       LG = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42613: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
- ... (272 more removed lines; see GitHub link above)
+   42412: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAACCAYAAABc8yy2AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVAiZY5w8f8F/STExBi0NTYZNB84yEAOWTHzM8P3DFoY/8VUMmQrvGdbMfMdw5lQaI7IaxsfPnv/n5uRk4OHmYpBRVmGobWpioIZFAFNaJQbN7skBAAAAAElFTkSuQ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/325.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/325.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5)

#### 1. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L4-L241` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/325.js#L4-L5) · [Before (L4-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/325.js#L4-L241)

```diff
-   42465: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bakedVertexAnimation",
-       LG = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42367: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (222 more removed lines; see GitHub link above)
+   42421: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVDiNY2RgYGDoSnH7zwAFZXN2MaLznXx3wvkMDAwM+za7M5qYzUIRO3MqjZGJgYqAhYGBgUGa5yGKIDr/948vRBlGfZcRAod3BzOii505lYYhRpRh2CIAmzrqe/PL1 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/326.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/326.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a)

#### 1. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L4-L91` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/326.js#L4-L5) · [Before (L4-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/326.js#L4-L91)

```diff
-   42342: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
-     });
-     var wG = ZG(40237);
-     ZG(42327), ZG(42335);
-     const SG = "defaultUboDeclaration",
-       LG = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42519: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
- ... (72 more removed lines; see GitHub link above)
+   42426: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGBSURBVGiB7ZhBSsNQEIb/iUPdiAfwGi1duHbZE7hyFfFEYg/gCVy6EwRDeg0PULoxIM9NIw/tIsn/pw6SD8rrg3Yy8/6ZyfDs9u4pgeDhfmWL5ZqyUVelxIZvNu+MDRl1V … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/327.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/327.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042)

#### 1. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L4-L146` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/327.js#L4-L5) · [Before (L4-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/327.js#L4-L146)

```diff
-   42632: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "clipPlaneFragment",
-       LG = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42620: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
- ... (127 more removed lines; see GitHub link above)
+   42431: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY5xT4fVfWJybAQAPmAKUQohcYQAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.10007,0.03268,-0.0935,0.10007,0.03268,-0.0935 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/328.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/328.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81)

#### 1. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L4-L122` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/328.js#L4-L5) · [Before (L4-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/328.js#L4-L122)

```diff
-   42632: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "clipPlaneFragment",
-       LG = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42620: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
- ... (103 more removed lines; see GitHub link above)
+   42433: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABICAYAAABRGGN6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANRSURBVHic7Zo9iNRAFMcTGXKXs7ERK4u9K5btLIQFQRFEOFAOtLq1sLGyu8pGUA47Kzt7G63shAUbPeFk4Qq75YrTWmwOzr11pzkLmZhMJjMvM5PsS/J+VT5eZib/vLz3Z … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/329.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/329.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab)

#### 1. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L4-L31` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/329.js#L4-L5) · [Before (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/329.js#L4-L31)

```diff
-   42356: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "helperFunctions",
-       LG = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   61942: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       rgbdDecodePixelShader: () => UG
- ... (12 more removed lines; see GitHub link above)
+   42442: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA0CAYAAAD19ArKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJsSURBVGiB7Zi/a9tAHMWfjDg3jimtIWRwF8eDcdpuBUOgWUIgkD3UwXTv1j/A2AQ8hw7ZOrWUOv9Ag5csDQQCgQxJMBkSL81gupiYtI1ocYdaqnSS7nS+6MeBPyDQyae7x … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/330.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/330.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2)

#### 1. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L4-L31` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/330.js#L4-L5) · [Before (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/330.js#L4-L31)

```diff
-   42356: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "helperFunctions",
-       LG = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   61956: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       rgbdEncodePixelShader: () => UG
- ... (12 more removed lines; see GitHub link above)
+   42445: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADRSURBVFiF7ZU/CwIxDMVT6aJ+S3Fz80AQTg7xQBDOzU38gCI4qaM3tdwfqOZJazjymzrkweMlTUy5P72JQb5eGESTZQVLU1VbM+IIUmPvtysREY0n02Dh6/nwb0SDIDo5N … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/331.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/331.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430)

#### 1. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L4-L171` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/331.js#L4-L5) · [Before (L4-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/331.js#L4-L171)

```diff
-   42465: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bakedVertexAnimation",
-       LG = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42367: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (152 more removed lines; see GitHub link above)
+   42453: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZY3x268h/QVFZhonrTjMAACyMBdKWCLAlAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[1,0.53165,0.3176,1,0.53165,0.3176,1,0.53165 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/332.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/332.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1)

#### 1. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L4-L45` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/332.js#L4-L5) · [Before (L4-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/332.js#L4-L45)

```diff
-   42371: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "instancesDeclaration",
-       LG = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42460: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
- ... (26 more removed lines; see GitHub link above)
+   42461: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zg/TsMwFMafm5BKiPQCLCwIUXENBFInTsKA1AkmmNh6ETp1qHqNCili4QwNQmraEIY6Upykzh9bsmV9v83xe0mevzzZ+Rgp8nR/nRER7dM/IiKarSImi3+8v … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/333.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/333.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613)

#### 1. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L4-L126` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/333.js#L4-L5) · [Before (L4-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/333.js#L4-L126)

```diff
-   42491: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bumpVertex",
-       LG = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42399: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (107 more removed lines; see GitHub link above)
+   42468: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYARBDqAO3u+ADPAh4A0oEZ4lM0BcsAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/334.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/334.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069)

#### 1. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L4-L101` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/334.js#L4-L5) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/334.js#L4-L101)

```diff
-   42498: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "clipPlaneVertex",
-       LG = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42401: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
- ... (82 more removed lines; see GitHub link above)
+   42476: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY/zTqvi/+AAbAx8PKwOfdQQDADbJBJwakkKMAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/335.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/335.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6)

#### 1. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L4-L101` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/335.js#L4-L5) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/335.js#L4-L101)

```diff
-   42498: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "clipPlaneVertex",
-       LG = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42401: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
- ... (82 more removed lines; see GitHub link above)
+   42483: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY6wN1PnPwMDA0Lz+CmO+q/p/BgYGBiYGLAAAwGgF3kpJcUoAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/336.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/336.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028)

#### 1. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L4-L81` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/336.js#L4-L5) · [Before (L4-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/336.js#L4-L81)

```diff
-   42639: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bumpFragment",
-       LG = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42613: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
- ... (62 more removed lines; see GitHub link above)
+   42491: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAACCAYAAABWr4LkAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGvSURBVCiR7dHPS1MBAMDx73ObNffe5nNvG1uONMdwrsiKkJg0M4R+qIc6rQ5BEFQYCdEPWl70YJNcRXmYJK1SEZHGliKIiF6FgdgQi0hhTClR3yoK0rWuHbsGff6Fj/Dke … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/337.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/337.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557)

#### 1. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L4-L73` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/337.js#L4-L5) · [Before (L4-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/337.js#L4-L73)

```diff
-   42632: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "clipPlaneFragment",
-       LG = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42620: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
- ... (54 more removed lines; see GitHub link above)
+   42499: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAChSURBVDiNY2RgYGCYla7xnwEK0mbeYETnd0UawPkMDAwMZcsvMOa7qqOITdx9k5GJgYqAhYGBgYGbE8USDP63n3+JMoz6LiMEGtZdZkQXm7j7JoYYUYZhiwBs6qjvzS9fv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/338.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/338.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07)

#### 1. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L4-L124` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/338.js#L4-L5) · [Before (L4-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/338.js#L4-L124)

```diff
-   42840: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bumpVertex",
-       LG = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42747: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (105 more removed lines; see GitHub link above)
+   42508: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGISURBVGiB7ZgxSgNREIb/WUZtgqcQ0gh23iAH8AAeQdLYWtmJzeIRPICV1d7ALiDCQk4R0mjAZ5OVh6bY3f/fOMh+EF4eJLMz75+ZHZ49XF8mEFzdP9p8NqVslFUtseHLx … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/339.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/339.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2)

#### 1. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L4-L73` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/339.js#L4-L5) · [Before (L4-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/339.js#L4-L73)

```diff
-   42726: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "instancesDeclaration",
-       LG = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42809: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
- ... (54 more removed lines; see GitHub link above)
+   42516: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACcCAYAAAAXtcvFAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAr4SURBVHic7Z1NaBxHFsffSKPRSLbQYGGjEKS9yCxe2EOCIbAisN6czB7MkiwsOfpkCKwWLyw55JiDCayIA2ZzynEJ+0HIYfEp60BwIBDwwQctSJeVCQjbWSZMLM306GMPU … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/340.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/340.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f)

#### 1. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L4-L116` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/340.js#L4-L5) · [Before (L4-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/340.js#L4-L116)

```diff
-   42689: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     ZG(42684), ZG(42687);
-     const SG = "defaultUboDeclaration",
-       LG = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42702: (GG, bG, ZG) => {
-     ZG.d(bG, {
- ... (97 more removed lines; see GitHub link above)
+   42518: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAGACAYAAADLU767AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAABD7SURBVHic7Z1BiFzHEUBrnBaJRA5aKexFyATpYF2CDgoiNj44hOxNl70IiVyC8CEYg8GwwaBDEJiBBYPBCJ1ELlZgCOSimxfhnBITrFMSmD1ICOlmJI2Iwm7CbqQcdmvo6 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/341.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/341.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450)

#### 1. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L4-L41` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/341.js#L4-L5) · [Before (L4-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/341.js#L4-L41)

```diff
-   42702: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "helperFunctions",
-       LG = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   62201: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
- ... (22 more removed lines; see GitHub link above)
+   42525: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABVCAYAAAC/xEFcAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAARFSURBVHic7Z3PT9RAFMdfYV1+JIsQEjTiDyKERFGJIdEYYvwHxCM3PZmoiQeNf4DGGzHePBjjiZtc9eLBgxpiOBBClBhXIEhcoyawwIrAqqmH7iztbNtpt9Ppa/s+l5122 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/342.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/342.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2)

#### 1. `bundles/bloxd.io/chunks/js/342.js` (Changed code · before: `L4-L227` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/342.js#L4-L5) · [Before (L4-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/342.js#L4-L227)

```diff
-   42826: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bakedVertexAnimation",
-       LG = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42718: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (208 more removed lines; see GitHub link above)
+   42527: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABQCAYAAAD4K0AmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALYSURBVHic7du9btswFAXg64IGnHZIhgJpmq0emvRnaTe/R5+hz5S5Y9Y8gzu1HfoTZXA2xynQoSmQxIANqIPB2lYliyJpiUc83xLHIS0GJ1ciKaUjll6+ep3a9BuenoiIi … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/343.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/343.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2)

#### 1. `bundles/bloxd.io/chunks/js/343.js` (Changed code · before: `L4-L379` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/343.js#L4-L5) · [Before (L4-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/343.js#L4-L379)

```diff
-   42826: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bakedVertexAnimation",
-       LG = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42718: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (360 more removed lines; see GitHub link above)
+   42529: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAzSURBVAiZY7BVFfpvb2//X1OU53+gieR/BgYGBiYmKV0Goa+3GE5NlWB48/Eng6Yoz38ADtwN2A2YEbIAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/344.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/344.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5)

#### 1. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L4-L302` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/344.js#L4-L5) · [Before (L4-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/344.js#L4-L302)

```diff
-   42954: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "clipPlaneFragment",
-       LG = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42940: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (283 more removed lines; see GitHub link above)
+   42532: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/345.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/345.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89)

#### 1. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L4-L193` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/345.js#L4-L5) · [Before (L4-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/345.js#L4-L193)

```diff
-   42954: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "clipPlaneFragment",
-       LG = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42940: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (174 more removed lines; see GitHub link above)
+   42535: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfovws/OUJ36jAEAFFIDZYkSkDYAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.1171,0.50665,-0.3483,0.1171,0.50665,-0.34 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/346.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/346.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a)

#### 1. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L4-L122` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/346.js#L4-L5) · [Before (L4-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/346.js#L4-L122)

```diff
-   42954: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "clipPlaneFragment",
-       LG = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42940: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (103 more removed lines; see GitHub link above)
+   42540: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfr/5sMvBg15XgYAIxsEnz/wS4IAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/347.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/347.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373)

#### 1. `bundles/bloxd.io/chunks/js/347.js` (Changed code · before: `L4-L31` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/347.js#L4-L5) · [Before (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/347.js#L4-L31)

```diff
-   42702: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "helperFunctions",
-       LG = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   61933: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       rgbdDecodePixelShaderWGSL: () => UG
- ... (12 more removed lines; see GitHub link above)
+   42542: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAvSURBVAiZY3h5YPf/C3Pn/v/w+PF/Bihg/PD48X8BWVmGW6tWMfCLCTI8v/uIAQDQfhMsC1+8ywAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.61541 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/348.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/348.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25)

#### 1. `bundles/bloxd.io/chunks/js/348.js` (Changed code · before: `L4-L31` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/348.js#L4-L5) · [Before (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/348.js#L4-L31)

```diff
-   42702: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "helperFunctions",
-       LG = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   61960: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       rgbdEncodePixelShaderWGSL: () => UG
- ... (12 more removed lines; see GitHub link above)
+   42546: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/349.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/349.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1)

#### 1. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L4-L171` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/349.js#L4-L5) · [Before (L4-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/349.js#L4-L171)

```diff
-   42826: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bakedVertexAnimation",
-       LG = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42718: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (152 more removed lines; see GitHub link above)
+   42548: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY7w8f/5/MUUZBgAUqwNl1ncXcwAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.70912,1,0,0.70912,1,0,0.70912,1,0,0.79277,0.9 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/350.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/350.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea)

#### 1. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L4-L106` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/350.js#L4-L5) · [Before (L4-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/350.js#L4-L106)

```diff
-   42840: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bumpVertex",
-       LG = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42747: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (87 more removed lines; see GitHub link above)
+   42551: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY7i1atX/5xcv/mdgYPj/8sDu/wBgKgsY6yMuIAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.9375,0.50631,0.361,0.9375,0.50631 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/351.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/351.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df)

#### 1. `bundles/bloxd.io/chunks/js/351.js` (Changed code · before: `L4-L101` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/351.js#L4-L5) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/351.js#L4-L101)

```diff
-   42844: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "clipPlaneVertex",
-       LG = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42750: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
- ... (82 more removed lines; see GitHub link above)
+   42556: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/352.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/352.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130)

#### 1. `bundles/bloxd.io/chunks/js/352.js` (Changed code · before: `L4-L101` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/352.js#L4-L5) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/352.js#L4-L101)

```diff
-   42844: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "clipPlaneVertex",
-       LG = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42750: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
- ... (82 more removed lines; see GitHub link above)
+   42560: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVCiRY2CgK2BE5hjVmvz/9/UfAxM3E8O55jOMGIpgCmAAXSEKMCgy+o8uxkSMm4hSRD0wZIOAKEUAGl0ftSoKsxQAAAAASUVORK5CYII=","alphaCutoff":0.050 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/353.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/353.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3)

#### 1. `bundles/bloxd.io/chunks/js/353.js` (Changed code · before: `L4-L231` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/353.js#L4-L5) · [Before (L4-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/353.js#L4-L231)

```diff
-   42962: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bumpFragment",
-       LG = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42937: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
- ... (212 more removed lines; see GitHub link above)
+   42565: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB2SURBVCiRtZAxDsAgDANNVj6DEC9jZ+rel1Won2FNOoEghYqlt0RKbNkKAMCnID4FQcdr56KXr2m0mwuDLCEf13Brgt6t4weqqIeW6l9EwO6fKvo/0ziyBBe9kB1bmOokS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/354.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/354.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248)

#### 1. `bundles/bloxd.io/chunks/js/354.js` (Changed code · before: `L4-L68` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/354.js#L4-L5) · [Before (L4-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/354.js#L4-L68)

```diff
-   42962: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bumpFragment",
-       LG = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42937: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
- ... (49 more removed lines; see GitHub link above)
+   42569: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/355.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/355.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de)

#### 1. `bundles/bloxd.io/chunks/js/355.js` (Changed code · before: `L4-L73` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7deR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/355.js#L4-L5) · [Before (L4-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/355.js#L4-L73)

```diff
-   42954: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "clipPlaneFragment",
-       LG = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42940: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (54 more removed lines; see GitHub link above)
+   42577: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/356.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/356.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9)

#### 1. `bundles/bloxd.io/chunks/js/356.js` (Changed code · before: `L4-L64` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/356.js#L4-L5) · [Before (L4-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/356.js#L4-L64)

```diff
-   43002: (GG, bG, ZG) => {
-     function wG(GG) {
-       return Math.floor(GG / 8)
-     }
- 
-     function SG(GG) {
-       return 1 << GG % 8
-     }
-     ZG.d(bG, {
-       OptimizeIndices: () => yG
-     });
-     class LG {
-       constructor(GG) {
-         this.size = GG, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
-       }
-       get(GG) {
- ... (45 more removed lines; see GitHub link above)
+   42582: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/357.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/357.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b)

#### 1. `bundles/bloxd.io/chunks/js/357.js` (Changed code · before: `L4-L11` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/357.js#L4-L5) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/357.js#L4-L11)

```diff
-   61816: (GG, bG, ZG) => {
-     var wG;
-     ZG.r(bG), ZG.d(bG, {
-         ShaderLanguage: () => wG
-       }),
-       function(GG) {
-         GG[GG.GLSL = 0] = "GLSL", GG[GG.WGSL = 1] = "WGSL"
-       }(wG || (wG = {}))
+   42589: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABrCAYAAAD+ZTVwAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAT+SURBVHic7Zw/iBVHHMd/m6ze5faKiF0gBznUJojYSERISJAcoga1D6lsU4igTVKYJo2NqeRKwTJIjMiFEDhFBJsgQqqgIIeFIF5xu3on3rPYN8/d2T8zszszv9+8/X3g8 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/358.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/358.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786)

#### 1. `bundles/bloxd.io/chunks/js/358.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/358.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/358.js#L4-L15)

```diff
-   61824: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       postprocessVertexShader: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "postprocessVertexShader",
-       LG = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42596: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEjSURBVFiFY9w0Iek/AwnAr2Ae49lLt3DqMdZTYyTHTCZSNCCDm3cekKsVK2CBMb58/YFXIQ83BwpfXUUBp1q/gnmMZDuEFKChitsRDAwMDLCoM9ZTY9w/N+M/AwMDw+fPv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/359.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/359.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa)

#### 1. `bundles/bloxd.io/chunks/js/359.js` (Changed code · before: `L4-L26` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/359.js#L4-L5) · [Before (L4-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/359.js#L4-L26)

```diff
-   61838: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       WorldCodeAiOutOfUsage: () => LG
-     });
-     var wG = ZG(1393),
-       SG = ZG(1067);
- 
-     function LG(GG) {
-       let {
-         onGetSuperRank: bG
-       } = GG;
-       return (0, SG.jsxs)("div", {
-         className: "WorldCodeAiOutOfUsage",
-         children: [(0, SG.jsx)("p", {
-           className: "WorldCodeAiOutOfUsageText",
-           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
- ... (7 more removed lines; see GitHub link above)
+   42600: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAG3SURBVGiB7dixTsJAGAfw+0jjZCQNEVYjL4Abq2Fy8A1kcyMObjpoJF3YXOgTsDmy8Ai4yeDiUBYnNQZ9gnOitsfZa88vgr3/b6N3/eBPr98VSGhc3L/K5OvLUT81Xg1D0 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/360.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/360.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99)

#### 1. `bundles/bloxd.io/chunks/js/360.js` (Changed code · before: `L4-L35` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/360.js#L4-L5) · [Before (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/360.js#L4-L35)

```diff
-   61860: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       particlesPixelShader: () => oG
-     });
-     var wG = ZG(40237),
-       SG = ZG(42530),
-       LG = ZG(42536),
-       yG = ZG(42620),
-       kG = ZG(42585),
-       UG = ZG(42441),
-       YG = ZG(42356),
-       VG = ZG(42594),
-       pG = ZG(42623),
-       fG = ZG(42632),
-       QG = ZG(42672),
-       KG = ZG(42674);
- ... (16 more removed lines; see GitHub link above)
+   42602: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/361.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/361.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4)

#### 1. `bundles/bloxd.io/chunks/js/361.js` (Changed code · before: `L4-L13` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/361.js#L4-L5) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/361.js#L4-L13)

```diff
-   61886: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       allocateF64Mat4: () => SG
-     });
-     var wG = ZG(42170);
- 
-     function SG() {
-       return new wG.g(16)
-     }
-     SG["@@MAT4_STORAGE_F64@@"] = !0
+   42604: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAqCAYAAABGB/BgAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAD4SURBVFiF7ZYxDoJAEEXfqpUFBQfgBsbCg1h4GwsLC09CZ4zxGBYWhhtwAAsTqTRY4CBunMJARjH8hsxfwuezf5ZxKNjcdjnAIT8CMHFjALaXGIDzKQUgCCMA4mDttGf1t … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/362.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/362.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46)

#### 1. `bundles/bloxd.io/chunks/js/362.js` (Changed code · before: `L4-L58` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/362.js#L4-L5) · [Before (L4-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/362.js#L4-L58)

```diff
-   61893: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       applyLightFoOffset: () => yG,
-       getFloatingOriginOffset: () => SG,
-       lightFoVersion: () => LG,
-       wrapRenderableForFO: () => kG
-     });
-     var wG = ZG(42177);
- 
-     function SG(GG) {
-       const bG = GG.camera;
-       if (!bG) return {
-         x: 0,
-         y: 0,
-         z: 0
-       };
- ... (39 more removed lines; see GitHub link above)
+   42613: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zi9SgQxFIVv1lFRwUJQ8V3sV/E93MLGKRQWLAdshBXBYn0IrRadVux8EJEFC0HF37HJwN7sbDIzCSSE83XJ3JvMzZmQzBFkycbZRUFEVHz/EhHRuJ8KXfz66 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/363.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/363.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a)

#### 1. `bundles/bloxd.io/chunks/js/363.js` (Changed code · before: `L4-L23` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/363.js#L4-L5) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/363.js#L4-L23)

```diff
-   61902: (GG, bG, ZG) => {
-     function wG(GG, bG, ZG, wG, SG, LG, yG) {
-       const kG = bG,
-         UG = wG,
-         YG = ZG;
-       GG[YG + 0] = kG[UG + 0], GG[YG + 1] = kG[UG + 1], GG[YG + 2] = kG[UG + 2], GG[YG + 3] = kG[UG + 3], GG[YG + 4] = kG[UG + 4], GG[YG + 5] = kG[UG + 5], GG[YG + 6] = kG[UG + 6], GG[YG + 7] = kG[UG + 7], GG[YG + 8] = kG[UG + 8], GG[YG + 9] = kG[UG + 9], GG[YG + 10] = kG[UG + 10 … [truncated]
-     }
- 
-     function SG(GG) {
-       return (bG, ZG, SG, LG) => {
-         const yG = GG.camera;
-         if (!yG) return void wG(bG, ZG, SG, LG, 0, 0, 0);
-         const kG = yG.worldMatrix;
-         wG(bG, ZG, SG, LG, kG[12], kG[13], kG[14])
-       }
-     }
- ... (4 more removed lines; see GitHub link above)
+   42619: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAx1NSAPri6wA/y8MA1sEa4oTj3EEAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/364.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/364.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e)

#### 1. `bundles/bloxd.io/chunks/js/364.js` (Changed code · before: `L4-L84` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/364.js#L4-L5) · [Before (L4-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/364.js#L4-L84)

```diff
-   61904: (GG, bG, ZG) => {
-     function wG(GG) {
-       return GG.features.has("timestamp-query")
-     }
- 
-     function SG(GG) {
-       return wG(GG) ? {
-         device: GG,
-         markerPipeline: GG.createComputePipeline({
-           layout: "auto",
-           compute: {
-             module: GG.createShaderModule({
-               code: "@compute @workgroup_size(1) fn main() {}"
-             }),
-             entryPoint: "main"
-           }
- ... (65 more removed lines; see GitHub link above)
+   42627: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY4wvV/i/TSCfgUWImyFEto4BACzPBDzVKZ6iAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/365.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/365.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999)

#### 1. `bundles/bloxd.io/chunks/js/365.js` (Changed code · before: `L4-L25` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/365.js#L4-L5) · [Before (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/365.js#L4-L25)

```diff
-   61909: (GG, bG, ZG) => {
-     function wG(GG, bG) {
-       for (const ZG of GG._frameGraph._tasks)
-         if (ZG?._config && ZG._colorAttachment && (ZG._config.rt === bG.scRT || ZG._config.rst === bG.scRT)) return ZG
-     }
- 
-     function SG(GG, bG) {
-       const ZG = GG._renderingContexts[GG._renderingContexts.length - 1];
-       if (!ZG?._frameGraph) return;
-       const SG = wG(bG, GG);
-       if (!SG) return;
-       if (1 === GG.msaaSamples) return void(SG._config.clr = !1);
-       const LG = SG.enabled;
-       SG._config.clr = !0, SG.enabled = !1, bG._beforeRender.unshift((() => {
-         const bG = wG(ZG, GG),
-           yG = bG?._config.rst === GG.scRT && bG._config.rt._colorView;
- ... (6 more removed lines; see GitHub link above)
+   42635: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5ScOes/AwMDw/P0NEbR9v7/DAwMDEwMWAAAyvYGLkl26sMAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/366.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/366.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c)

#### 1. `bundles/bloxd.io/chunks/js/366.js` (Changed code · before: `L4-L75` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/366.js#L4-L5) · [Before (L4-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/366.js#L4-L75)

```diff
-   61916: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       createShadowTask: () => LG
-     });
-     var wG = null;
- 
-     function SG(GG) {
-       return wG?.get(GG)
-     }
- 
-     function LG(GG, bG) {
-       const ZG = new Set;
-       0;
-       const wG = {
-         name: "xQ",
-         engine: GG,
- ... (56 more removed lines; see GitHub link above)
+   42637: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAACCAYAAADyxTo3AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEuSURBVCiR7dBNK8MBAIDx579mzMbe/pumLdOWvB3cJ0Y5eD24jYNSCq24oNQuLkzZiMvKMqG0ZG2tVtrBWa0WUiQOa4QwL6UYc3VRPoDnGzw/YXktmDcaDNRW1xDdT/KXN … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/367.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/367.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4)

#### 1. `bundles/bloxd.io/chunks/js/367.js` (Changed code · before: `L4-L289` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/367.js#L4-L5) · [Before (L4-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/367.js#L4-L289)

```diff
-   61920: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       A: () => YG,
-       B: () => pG,
-       C: () => VG,
-       X: () => fG
-     });
-     var wG = ZG(42155),
-       SG = (GG, bG) => GG.order - bG.order;
- 
-     function LG(GG, bG, ZG) {
-       GG.pendingDisposers.set(bG, ZG)
-     }
- 
-     function yG(GG, bG, ZG) {
-       ZG && GG.pendingDisposers.get(bG) === ZG && GG.pendingDisposers.delete(bG)
- ... (270 more removed lines; see GitHub link above)
+   42645: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoqnD+zwAFdR17GdH50suWw/kMDAwMT6MiGUXb+1HEXlcWMjIxUBGwMDAwMCj/eIIiiM7/9/U7UYZR32WEwPPUJEZ0sdeVhRhiRBmGLQKwqaO+N798/ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/368.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/368.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64)

#### 1. `bundles/bloxd.io/chunks/js/368.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/368.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/368.js#L4-L15)

```diff
-   61951: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       postprocessVertexShaderWGSL: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "postprocessVertexShader",
-       LG = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
-     wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42654: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZixSgNBEIb/OcZC7IQUgvgivoSNlb0WNl55T5AytfZWNnkJX0QEkYN0wcLgWpiTRVPk7v83DnIfhM1CMjez/8zcsHZ2/5BAML84t8l0Rtlom1piwx+fnhkbM … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/369.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/369.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c)

#### 1. `bundles/bloxd.io/chunks/js/369.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/369.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/369.js#L4-L15)

```diff
-   61967: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       lod3DPixelShader: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "lod3DPixelShader",
-       LG = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
-     wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42661: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABMSURBVBiVY3QIZf/f6pvDgA6s43oZmTBEkQDLgdU/GT/YffqPLOidO5uRgYGBgYWBgYFBgJ8Pq068xuK3k4GBgeHDx0+4JXHZiRcAADlyDh3q8hR1AAAAAElFTkSuQmCC" … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/370.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/370.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4)

#### 1. `bundles/bloxd.io/chunks/js/370.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/370.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/370.js#L4-L15)

```diff
-   61970: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       lodCubePixelShader: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "lodCubePixelShader",
-       LG = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
-     wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42668: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABfSURBVBiVYwzKkvnPgAbevX7NwMDAwNDqm8PAwsvLgiL5+fMfFD4LugBM94HVPxk/2H36z4RuPDIQ4OdjwKuAgYEB0w3vXqMpQHfDgdU/GWHsDx8/4bdCgJ+PkAsYGAA3k … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/371.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/371.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2)

#### 1. `bundles/bloxd.io/chunks/js/371.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/371.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/371.js#L4-L15)

```diff
-   61977: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       lodPixelShader: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "lodPixelShader",
-       LG = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
-     wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42670: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH0SURBVEiJzVQxiNRAFH0jKbYRDQjCapmBRVmLS5FKBiFXWITbZkGwTSPYbW21rXZXpt0qzcqVN3AM2qTwilvuWIilLiwIWdlmu2/hTpxNsu54pPA1yc//w38v//1hPFXUD … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/372.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/372.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f)

#### 1. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/372.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/372.js#L4-L15)

```diff
-   61986: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       lod3DPixelShaderWGSL: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "lod3DPixelShader",
-       LG = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
-     wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42675: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAABCAYAAAAMwoR9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAwSURBVAiZASUA2v8A/wCZ/x+Rpf//ADP//wAA/8z////l/fP/P+/J/yWrwf/M/zP/t8EZO2UdOzkAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.14287 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/373.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/373.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef)

#### 1. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/373.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/373.js#L4-L15)

```diff
-   61995: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       lodCubePixelShaderWGSL: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "lodCubePixelShader",
-       LG = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
-     wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42684: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAElSURBVFiFY2SgEOisP/wfn/yVQFtGepjJRKolgxWMemSwAZaBdgADAwOD0tTtKHni27MvJKm/l+3JOBoj1ARcUjwUmzFsYoTR++PZ/wwMDAyz+dRRJFI/3UTh00p+K78xy … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/374.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/374.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f)

#### 1. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/374.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/374.js#L4-L15)

```diff
-   61997: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       lodPixelShaderWGSL: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "lodPixelShader",
-       LG = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
-     wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42686: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIQSURBVGiB7ZgxS8NAFMffSZKCgp/CwcHJwUUHJyMoitWhKIibg5uDk2NnJx3ERQSlg61YWjWC0sXVydFPUVBoUoiDPchdc3dJ7mhDeL/tkutd3/vf5d79CWhSWV8Oo+1aq … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/375.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/375.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7)

#### 1. `bundles/bloxd.io/chunks/js/375.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/375.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/375.js#L4-L15)

```diff
-   62004: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       passPixelShaderWGSL: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "passPixelShader",
-       LG = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
-     wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42692: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPWSURBVFiF3ZdbaBxlFIC/TWazk73imDQslazUEmgDqVECsSEPgkEQKfrQIl5AWSo2pn2xt9gmkiamaWy9NAEjkjSUIDFRlAh98TG0DyoI4oulxiRGI9ZOdrM7k393NqwP6 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/376.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/376.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514)

#### 1. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/376.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/376.js#L4-L15)

```diff
-   62011: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       passPixelShader: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "passPixelShader",
-       LG = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
-     wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42694: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA4CAYAAABQZsDpAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANySURBVGiB3Vm/ixNREJ7Vl8idtlaKhYU2AbFI5X9wcCBYCWdznCJaWAQhYHGkOBBF8BoRUZsE0gpC/gOrCBKwkCvsrGz1DpM9ziKZ9e28eTsvu7NJ3K/Jj/dr9n3fzHszG … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/377.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/377.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4)

#### 1. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/377.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/377.js#L4-L15)

```diff
-   62017: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       passCubePixelShaderWGSL: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "passCubePixelShader",
-       LG = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
-     wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42700: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB4SURBVCiRY2AYfoARXcAixuo/AwMDw9fXHxjYuDkYGBgYGH59/cHALSrAwMDAwHBiyTFGFlymXd55DcVAmGFYga67Fk5JmBwTugTMSdgATA5DEzEAQ9Ovrz9wKobJYWjiF … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/378.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/378.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace)

#### 1. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/378.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/378.js#L4-L15)

```diff
-   62025: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       passCubePixelShader: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "passCubePixelShader",
-       LG = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
-     wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42709: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAABCAYAAACbkyOnAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEXSURBVBiVdcE9LwNhAMDxv/Z6KvdSvZ6USNOIRGKxiEnEYkMHpn4BC0obiUlj8tZSX0BCTJKGIDZWwiYMEglhs5RGe889pz0+gd+vZWOv/DuSVDAtm8rtOTfqEPePOaT0M … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/379.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/379.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72)

#### 1. `bundles/bloxd.io/chunks/js/379.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/379.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/379.js#L4-L15)

```diff
-   62072: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       fxaaPixelShaderWGSL: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "fxaaPixelShader",
-       LG = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
-     wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42712: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAYAAADq6085AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVAiZATEAzv8B9Ke5//lBEQD1VWYA0wwrADMxNQDo4N4AC/P/ACOSdACgm5kANVRKAPLu7AAGX5UAEdoULN8RPVsAAAAASUVORK5CYII=","alphaCutoff":0,"ve … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/380.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/380.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355)

#### 1. `bundles/bloxd.io/chunks/js/380.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/380.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/380.js#L4-L15)

```diff
-   62081: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       fxaaVertexShaderWGSL: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "fxaaVertexShader",
-       LG = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
-     wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42716: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAANCAYAAACjDOAMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJjSURBVFiF7ZbNS1RhFIefiaCU/IohSxsiBElosBknN8L4BS10lYES2N6dK/FvCFftZm8gBuZqWgh9KLRJU0MhGQiRsdFksJpkRlenhZ7hXufet7mzqrjP8j7vub/FgcMPf … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/381.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/381.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543)

#### 1. `bundles/bloxd.io/chunks/js/381.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/381.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/381.js#L4-L15)

```diff
-   62084: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       fxaaPixelShader: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "fxaaPixelShader",
-       LG = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
-     wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42722: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/382.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/382.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1)

#### 1. `bundles/bloxd.io/chunks/js/382.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/382.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/382.js#L4-L15)

```diff
-   62086: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       fxaaVertexShader: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "fxaaVertexShader",
-       LG = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
-     wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42731: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABCSURBVBiVY1RSVv7PAAWXr1yHMRl0dTTh7Ht37zIyMRAJiFbI+PX7L7jVyNYhO4Obk40GVrPgsg5ZnCQTiVZINAAAQoERlZZrqhQAAAAASUVORK5CYII=","alphaCutof … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/383.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/383.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8)

#### 1. `bundles/bloxd.io/chunks/js/383.js` (Changed code · before: `L4-L246` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/383.js#L4-L5) · [Before (L4-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/383.js#L4-L246)

```diff
-   62095: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     ZG(42327), ZG(42335);
-     const SG = "pbrUboDeclaration",
-       LG = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   62109: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
- ... (227 more removed lines; see GitHub link above)
+   42739: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC+SURBVEiJY2xpn/qfgQhQU5nNSIra/XMz/jMwMDA4Js9gZCJGE6WABcaYN6cPq4KklCI4+/2bV0Qb7Jg8gxHDEmJAb28jIxHKMABJlpASJ8h8+sYJMYCUOCHbEorjBDkV4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/384.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/384.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd)

#### 1. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L4-L199` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/384.js#L4-L5) · [Before (L4-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/384.js#L4-L199)

```diff
-   62100: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "harmonicsFunctions",
-       LG = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   62156: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
- ... (180 more removed lines; see GitHub link above)
+   42746: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/385.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/385.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4)

#### 1. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L4-L119` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/385.js#L4-L5) · [Before (L4-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/385.js#L4-L119)

```diff
-   62100: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "harmonicsFunctions",
-       LG = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   62305: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
- ... (100 more removed lines; see GitHub link above)
+   42752: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA5CAYAAACCsf3qAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFpSURBVGiB7drPbcIwFAbw98DqhVM40xWyAwsUiRVYoWOwAitEogt0h64A5xYhIapKNBx4QeAq9R/sxIm+380ScYL5/CJjM3maf5TlbTsbX5pfn+zb5b+KnON0LBQR0frn/ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/386.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/386.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff)

#### 1. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L4-L226` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/386.js#L4-L5) · [Before (L4-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/386.js#L4-L226)

```diff
-   62199: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
-     });
-     var wG = ZG(40237);
-     ZG(42684), ZG(42687);
-     const SG = "pbrUboDeclaration",
-       LG = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   62212: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
- ... (207 more removed lines; see GitHub link above)
+   42755: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY5ieLf7/8yqV/79fGfzvmLvmPwBVswq9s1wBAAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[1,0.52644,0.3074,1,0.52644,0.3074,1 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/387.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/387.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100be)

#### 1. `bundles/bloxd.io/chunks/js/387.js` (Changed code · before: `L4-L214` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100beR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100be) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/387.js#L4-L5) · [Before (L4-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/387.js#L4-L214)

```diff
-   62207: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "harmonicsFunctions",
-       LG = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   62256: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (195 more removed lines; see GitHub link above)
+   42758: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHfSURBVEiJ7VS/S0JRGD03nsMbtAYhSMc3RKTDa4xQJApaAgWXVgfbbG9sbHARHPwLHhi0BElIEo41aIiDYwbCG8w3OPjgNlyvXt+75e3H0NBZLt/9vne/891z3iWOZVA9F … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/388.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/388.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424a)

#### 1. `bundles/bloxd.io/chunks/js/388.js` (Changed code · before: `L4-L92` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/388.js#L4-L5) · [Before (L4-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/388.js#L4-L92)

```diff
-   62207: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "harmonicsFunctions",
-       LG = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   62353: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
- ... (73 more removed lines; see GitHub link above)
+   42761: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAqSURBVAiZY7wxWe6/+oJqBgaGswwMDGcZrkz8xiAuxsLAeeE7A09YKQMAwl8KmURuPDUAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.85713,0.70382 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/389.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/389.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4)

#### 1. `bundles/bloxd.io/chunks/js/389.js` (Changed code · before: `L4-L289` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/389.js#L4-L5) · [Before (L4-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/389.js#L4-L289)

```diff
-   62331: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "openpbrDielectricReflectance",
-       LG = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   62336: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
- ... (270 more removed lines; see GitHub link above)
+   42763: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEbSURBVFiF7ZgxCsJAEEVnJAomNoKFWIjnEESs9BKezktoJSJYeQE7sQgWgk2SwhRrIQlOUNewWV2Ged3mh00m/082GwRDbpuB+qQ3xkf8xZy1shdxFSnENbx/3wAAwHXRI … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/390.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/390.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061)

#### 1. `bundles/bloxd.io/chunks/js/390.js` (Changed code · before: `L4-L270` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/390.js#L4-L5) · [Before (L4-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/390.js#L4-L270)

```diff
-   62371: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "openpbrDielectricReflectance",
-       LG = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   62375: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (251 more removed lines; see GitHub link above)
+   42768: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANISURBVFiF5ZdLaFNZHMZ/uT1tzA2tqKtKQi1DFoUxLoTioiFZdOGgdlYKAelipCMM1BcUfNWFRSyKD9DFuIizcgozqxGDWCjMYBdVEUYRgq3QJykucmnU3NR7c42LJtfXv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/391.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/391.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982)

#### 1. `bundles/bloxd.io/chunks/js/391.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/391.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/391.js#L4-L15)

```diff
-   62421: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       textureMergerPixelShaderWGSL: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "textureMergerPixelShader",
-       LG = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
-     wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42774: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAF9SURBVGiB7ZjfSsMwFMZPTbCo2/CFxH8wmTK88F288tLXmSIiw4ET6Rttw1HZrDcpNLFL2iaQEL7fXdqcNidfTpN+CVlyNrwuiIi2mw0REWXzWaLrf3IxLIiIGOdUjSs5P … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/392.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/392.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270d)

#### 1. `bundles/bloxd.io/chunks/js/392.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/392.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/392.js#L4-L15)

```diff
-   62426: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       textureMergerPixelShader: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "textureMergerPixelShader",
-       LG = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
-     wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42777: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFyYoAOvp6gD+8e4AzmUa4gxrmFAAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/393.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/393.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234)

#### 1. `bundles/bloxd.io/chunks/js/393.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/393.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/393.js#L4-L15)

```diff
-   62429: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       proceduralVertexShaderWGSL: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "proceduralVertexShader",
-       LG = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
-     wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42779: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY7RyWfaf+d8CBh5eXoZ38S0MADX5Bb3RlRVIAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/394.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/394.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-597404c30f9730379880935b3eaa855def22325a0daac664ae2b9f2dc19ab239)

#### 1. `bundles/bloxd.io/chunks/js/394.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-597404c30f9730379880935b3eaa855def22325a0daac664ae2b9f2dc19ab239R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-597404c30f9730379880935b3eaa855def22325a0daac664ae2b9f2dc19ab239) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/394.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/394.js#L4-L15)

```diff
-   62433: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       proceduralVertexShader: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "proceduralVertexShader",
-       LG = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
-     wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42788: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAACCAYAAAA3t6CmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFoSURBVCiR7dDLK+QBAMDx70/jOfPzmt+MRmRkkvcjW5tGxq4cLOawTsNBKYUUF4/IZRwYMbub04iMsG0SGTalSVzVlJYUicM0K4SfR5QxxtVxL3vz+RM+wtiUM6jTasnKy … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/395.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/395.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-22d9fe7d368f667c90947d6b270ff468357439949ae7209c4b6ca108927cceec)

#### 1. `bundles/bloxd.io/chunks/js/395.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-22d9fe7d368f667c90947d6b270ff468357439949ae7209c4b6ca108927cceecR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-22d9fe7d368f667c90947d6b270ff468357439949ae7209c4b6ca108927cceec) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/395.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/395.js#L4-L15)

```diff
-   62443: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       greasedLinePixelShaderWGSL: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "greasedLinePixelShader",
-       LG = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAn … [truncated]
-     wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42793: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACjSURBVDiNY2RgYGDoTTf8zwAFxTPPM6LzQ6IT4HwGBgaGNUsXMNo6uaGIHd63i5GJgYqAhYGBgUGC8xuKIDr/x/fvRBlGfZcRAlvWrWREFzu8bxeGGFGGYYsAbOqo780vX … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/396.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/396.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1ab362876e52db5d309239495380271a7df7b312697b4671e347f0f7d4073fc7)

#### 1. `bundles/bloxd.io/chunks/js/396.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1ab362876e52db5d309239495380271a7df7b312697b4671e347f0f7d4073fc7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1ab362876e52db5d309239495380271a7df7b312697b4671e347f0f7d4073fc7) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/396.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/396.js#L4-L15)

```diff
-   62454: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       greasedLinePixelShader: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "greasedLinePixelShader",
-       LG = "precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeA … [truncated]
-     wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+   42802: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGQSURBVGiB7ZivT8QwFMffuCVLSI6/gF8GwykECf8BAocgQeERJBgwJzEo3HkUrigEfwXqMBggE2guIVmyMMR1yb2ya7e1SZvm+3Hd3tv23ndN229ClpxcbFRERGVZERGRm … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/397.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/397.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f7f7c7c89c5eed442844b0be110897a8ec194635b63fe394f73e7579d9be711f)

#### 1. `bundles/bloxd.io/chunks/js/397.js` (Changed code · before: `L4-L193` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f7f7c7c89c5eed442844b0be110897a8ec194635b63fe394f73e7579d9be711fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f7f7c7c89c5eed442844b0be110897a8ec194635b63fe394f73e7579d9be711f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/397.js#L4-L5) · [Before (L4-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/397.js#L4-L193)

```diff
-   62457: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       rebuildScenePbrPipelines: () => kG,
-       rebuildSceneRenderables: () => UG
-     });
-     var wG = ZG(42155),
-       SG = (GG, bG) => GG.order - bG.order,
-       LG = 8,
-       yG = GG => UG(GG);
-     async function kG(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       await YG(GG, "pbr", bG)
-     }
-     async function UG(GG) {
-       await YG(GG, void 0, !1)
-     }
- ... (174 more removed lines; see GitHub link above)
+   42806: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFTbLAOjp+AAD4T0A0BkZ4rm59cYAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/84.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/84.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc)

#### 1. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L4-L5` → after: `L4-L16325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L4-L16325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/84.js#L4-L16325) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/84.js#L4-L5)

```diff
-   4772: GG => {
-     GG.exports = "# Item Names (1532 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
+   9825: (MM, rM) => {
+     rM.e = 8, rM.m = function(MM, rM, iM, OM) {
+       if (!Array.isArray(MM)) return !!MM;
+       rM -= Math.floor(rM), iM -= Math.floor(iM), OM -= Math.floor(OM);
+       for (var SM = 0; SM < MM.length; SM += 6)
+         if (rM >= MM[SM] && rM < MM[SM + 3] && iM >= MM[SM + 1] && iM < MM[SM + 4] && OM >= MM[SM + 2] && OM < MM[SM + 5]) return !0;
+       return !1
+     }, rM.i = function(MM) {
+       for (var rM = [], iM = 0; iM < MM.length; iM++) {
+         var OM = MM[iM];
+         if (2 !== OM.length || 3 !== OM[0].length || 3 !== OM[1].length) throw new Error("Subvoxel boxes must contain two three-dimensional bounds");
+         for (var SM = 0; SM < 3; SM++) {
+           var jM = OM[0][SM],
+             aM = OM[1][SM];
+           if (!Number.isInteger(jM) || !Number.isInteger(aM) || jM < 0 || aM > 8 || jM >= aM) throw new Error("Subvoxel bounds must be integers satisfying 0 <= start < end <= 8");
+           rM[6 * iM + SM] = jM / 8, rM[6 * iM + SM + 3] = aM / 8
+ ... (16306 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/85.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/85.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20)

#### 1. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/85.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/85.js#L4-L6)

```diff
-   4779: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       default: () => wG
+   37981: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => OM
```

#### 2. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8-L4491` → after: `L8-L10107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8-L10107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/85.js#L8-L10107) · [Before (L8-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/85.js#L8-L4491)

```diff
-     const wG = String.raw`export interface GameApi {
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
-  * @param entityId
-  */
- getPosition(entityId: EntityId): Pos
- /**
- ... (4468 more removed lines; see GitHub link above)
+     const OM = {
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
+         clipSize: 30,
+         tagSpeedMult: .8,
+         subsequentTagSpeedReductionScalar: .55,
+         inaccuracyStanding: 10,
+ ... (10084 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/86.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/86.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba)

#### 1. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L4-L1287` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/86.js#L4) · [Before (L4-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/86.js#L4-L1287)

```diff
-   36871: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => qG,
-       d: () => AG
-     });
-     var wG = ZG(51),
-       SG = ZG(1895),
-       LG = ZG(36874),
-       yG = ZG.n(LG),
-       kG = ZG(4561),
-       UG = ZG(1876),
-       YG = ZG(1389),
-       VG = ZG(80),
-       pG = ZG(95),
-       fG = ZG(352),
-       QG = ZG(1006),
- ... (1268 more removed lines; see GitHub link above)
+   37988: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L19738-L23159` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/86.js#L9-L10) · [Before (L19738-L23159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/86.js#L19738-L23159)

```diff
-     const wG = new Map;
- 
-     function SG(GG) {
-       var bG;
-       return null === GG ? null : null !== (bG = wG.get(GG)) && void 0 !== bG ? bG : null
-     }
- 
-     function LG(GG, bG) {
-       return wG.set(GG, bG), () => {
-         wG.get(GG) === bG && wG.delete(GG)
-       }
-     }
-   },
-   37329: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => Bb,
- ... (3406 more removed lines; see GitHub link above)
+     const OM = ["Boat", "Obsidian Boat", "Hovercraft", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black  … [truncated]
+       SM = 45 == iM.j ? ["canAutoStep", "speedMultiplier"] : null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/87.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/87.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e)

#### 1. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L4-L97` → after: `L4-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L4-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/87.js#L4-L131) · [Before (L4-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/87.js#L4-L97)

```diff
-   4792: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => EG,
-       g: () => JG
-     });
-     var wG = ZG(1270),
-       SG = ZG(19);
-     var LG = ZG(352);
-     var yG = ZG(604);
-     var kG = ZG(2380),
-       UG = ZG(4800),
-       YG = ZG(4827),
-       VG = ZG(4842);
-     class pG {
-       constructor(GG, bG, ZG, wG, SG, LG) {
-         this.id = GG, this.type = bG, this.parameters = ZG, this.tearDownNotification = wG, this.onDonePromise = SG, this.resolveRequest = LG
- ... (78 more removed lines; see GitHub link above)
+   37996: (MM, rM, iM) => {
+     if (iM.d(rM, {
+         d: () => nM,
+         h: () => SM,
+         k: () => aM,
+         l: () => jM,
+         m: () => GM,
+         q: () => yM
+       }), 45 == iM.j) var OM = iM(38005);
+     const SM = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
+       jM = ["Blade", "Guard", "Handle"],
+       aM = {
+         Wood: {
+           material: "Wood",
+           baseSword: "Wood Sword",
+           value: 1,
+ ... (112 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L100-L130` → after: `L134-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L134-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/87.js#L134-L183) · [Before (L100-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/87.js#L100-L130)

```diff
-       timedClick: class {
-         constructor(GG, bG, ZG) {
-           var wG;
-           this.resolveRequest = bG, this.tearDownNotification = ZG, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = GG, this.timeWindowMs = null !== (wG = this.parameters.Lb) && void … [truncated]
-         }
-         handleMouseInput(GG) {
-           if (!GG || this.isCompleted) return;
-           Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
-         }
-         handleTick() {
-           if (this.isCompleted) return;
-           Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
-         }
-         complete(GG) {
-           this.isCompleted = !0, this.resolveRequest(GG)
-         }
- ... (15 more removed lines; see GitHub link above)
+       PM = 4,
+       nM = "Coal",
+       QM = {
+         Blade: 1,
+         Guard: .6,
+         Handle: .4
+       },
+       zM = 1.15,
+       LM = 1.35,
+       mM = .06,
+       HM = {
+         defence: {
+           name: "Bulwark",
+           amount: .06,
+           describe: MM => `${bM(.06*MM)} less damage taken`
+         },
+ ... (34 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L133-L193` → after: `L186-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L186-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/87.js#L186-L225) · [Before (L133-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/87.js#L133-L193)

```diff
-       gravityBar: class {
-         constructor(GG, bG, ZG) {
-           var wG;
-           this.resolveRequest = bG, this.tearDownNotification = ZG, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirect … [truncated]
-           const SG = GG;
-           this.parameters = {
-             ...SG,
-             Yb: LG.c.clamp(SG.Yb, .05, 1)
-           }, this.progress = null !== (wG = SG.NG) && void 0 !== wG ? wG : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
-         }
-         handleMouseInput(GG) {
-           this.isMouseDown = GG
-         }
-         handleTick(GG) {
-           this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(GG))
-         }
- ... (45 more removed lines; see GitHub link above)
+       hM = {
+         eclipseField: {
+           name: "Eclipse Field",
+           description: "Right-click: slow every mob within 6 blocks for 3s",
+           cooldownMs: 25e3
+         },
+         starfall: {
+           name: "Meteor Shower",
+           description: "Right-click: call five falling stars around you",
+           cooldownMs: 3e4
+         },
+         magmaWave: {
+           name: "Magma Wave",
+           description: "Right-click: lay a line of fire pools ahead of you",
+           cooldownMs: 2e4
+         },
+ ... (24 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L196-L199` → after: `L228-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L228-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/87.js#L228-L290) · [Before (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/87.js#L196-L199)

```diff
-       precisionBar: class {
-         constructor(GG, bG, ZG) {
-           var wG, SG, yG, kG, UG;
-           this.resolveRequest = bG, this.tearDownNotification = ZG, this.startTime = void 0, this.speed = void 0, this.Jb = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
+       JM = 45 == iM.j ? OM.e : null,
+       dM = "skyblock:forged:";
+ 
+     function yM(MM, rM) {
+       return `${MM} ${rM}`
+     }
+     SM.flatMap((MM => jM.map((rM => yM(MM, rM)))));
+ 
+     function lM(MM) {
+       let {
+         blade: rM,
+         guard: iM,
+         handle: OM
+       } = MM;
+       return `${dM}${rM.toLowerCase()}-${iM.toLowerCase()}-${OM.toLowerCase()}`
+     }
+ ... (47 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L201-L211` → after: `L292-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L292-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/87.js#L292-L320) · [Before (L201-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/87.js#L201-L211)

```diff
-           this.parameters = {
-             ...YG,
-             speed: null !== (wG = YG.speed) && void 0 !== wG ? wG : .5,
-             Jb: LG.c.clamp(YG.Jb, .05, 1),
-             label: null !== (SG = YG.label) && void 0 !== SG ? SG : [{
-               str: "Click when the marker is within the green zone."
-             }],
-             icon: null !== (yG = YG.icon) && void 0 !== yG ? yG : null,
-             scale: null !== (kG = YG.scale) && void 0 !== kG ? kG : 1,
-             rotation: null !== (UG = YG.rotation) && void 0 !== UG ? UG : 0
-           }, this.speed = this.parameters.speed, this.Jb = this.parameters.Jb, this.startTime = Date.now()
+           return PM * (SM[rM].value + SM[iM].value + SM[OM].value)
+         }(MM), vM = uM[GM].value + uM[tM].value + uM[gM].value, FM = YM ? "Tier 5" : vM <= 4 ? "Tier 1" : vM <= 8 ? "Tier 2" : vM <= 14 ? "Tier 3" : vM <= 22 ? "Tier 4" : "Tier 5", BM = [];
+         1 !== WM && BM.push(`${wM(WM-1)} damage`);
+         1 !== sM && BM.push(`${bM(1/sM-1)} faster strikes`);
+         1 !== DM && BM.push(`${wM(DM-1)} knockback`);
+         kM > 0 && BM.push(`+${kM} reach`);
+         ZM > 0 && BM.push(`${bM(ZM)} less damage taken while held`);
+         const XM = [];
+         for (const jM of Object.keys(oM)) XM.push(`${HM[jM].name}: ${HM[jM].describe(oM[jM])}`);
+         null !== fM && XM.push(`${hM[fM].name}: ${hM[fM].description}`);
+         return BM.push(...XM), {
+           id: lM(MM),
+           parts: MM,
+           baseSword: uM[GM].baseSword,
+           displayName: NM,
+           lore: AM,
+ ... (13 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L213-L403` → after: `L322-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/87.js#L322-L323) · [Before (L213-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/87.js#L213-L403)

```diff
-         handleMouseInput(GG) {
-           if (GG) {
-             this.updateMarkerPosition();
-             const GG = Math.abs(this.markerPosition - .5) <= this.Jb / 2;
-             this.complete(GG)
-           }
-         }
-         handleTick() {
-           this.isCompleted || this.updateMarkerPosition()
-         }
-         updateMarkerPosition() {
-           const GG = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
-           this.markerPosition = GG <= .5 ? 2 * GG : 2 - 2 * GG
-         }
-         complete(GG) {
-           this.isCompleted = !0, this.resolveRequest(GG)
- ... (175 more removed lines; see GitHub link above)
+       }(OM, null !== (rM = iM[SM]) && void 0 !== rM ? rM : {});
+       return iM === JM && UM.set(SM, dM), dM
```

#### 7. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L407-L868` → after: `L327-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L327-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/87.js#L327-L339) · [Before (L407-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/87.js#L407-L868)

```diff
-       for (const wG of UG) try {
-         wG(GG)
-       } catch (ZG) {
-         bG(ZG)
-       }
-     }
- 
-     function zG(GG) {
-       return YG.add(GG), () => {
-         YG.delete(GG)
-       }
-     }
- 
-     function EG(GG, bG) {
-       const ZG = VG < 0 ? 0 : GG - VG;
-       VG = GG;
- ... (446 more removed lines; see GitHub link above)
+       return "Blade" === rM ? MM.blade : "Guard" === rM ? MM.guard : MM.handle
+     }
+ 
+     function eM(MM) {
+       return Math.round(100 * MM) / 100
+     }
+ 
+     function bM(MM) {
+       return `${Math.round(100*MM)}%`
+     }
+ 
+     function wM(MM) {
+       return `${MM>=0?"+":""}${bM(MM)}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (108 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 1. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L4` → after: `L4-L35955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L4-L35955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L4-L35955) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L4)

```diff
-   41263: (GG, bG, ZG) => {
+   38136: (MM, rM, iM) => {
+     var OM = {
+       "./67/67_Atlas.png": 27689,
+       "./67/67_Model.glb": 33840,
+       "./67/67_Reconstructed.glb": 33842,
+       "./67/variations/0_67_default.png": 27694,
+       "./Armour Collector/Armour Collector_Atlas.png": 27701,
+       "./Armour Collector/Armour Collector_Model.glb": 33844,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33853,
+       "./Armour Collector/variations/0_armour collector_default.png": 27708,
+       "./Bear/BearSaddle_Atlas.png": 27710,
+       "./Bear/Bear_Atlas.png": 27712,
+       "./Bear/Bear_Model.glb": 33860,
+       "./Bear/variations/0_bear_default.png": 27720,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27723,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33865,
+ ... (35936 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6-L15` → after: `L35957-L36166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR35957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L35957-L36166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L35957-L36166) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L6-L15)

```diff
-       A: () => lG,
-       C: () => cG,
-       F: () => NG,
-       G: () => PG,
-       K: () => FG,
-       O: () => jG,
-       R: () => IG,
-       U: () => RG,
-       W: () => eG,
-       _: () => aG,
+       b: () => zM,
+       e: () => jM,
+       g: () => aM
+     });
+     var OM = iM(38515);
+     const SM = .001;
+ 
+     function jM(MM, rM) {
+       const iM = rM - MM.startDelaySeconds;
+       if (iM < 0) return NaN;
+       const jM = MM.lengthSeconds;
+       if (jM <= 0) return iM;
+       switch (MM.loop) {
+         case OM.h.Once:
+           return iM;
+         case OM.h.Hold:
+ ... (194 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19-L23` → after: `L36233-L36830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR36233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L36233-L36830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L36233-L36830) · [Before (L19-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L19-L23)

```diff
-       o: () => HG,
-       q: () => mG,
-       s: () => CG,
-       v: () => MG,
-       y: () => vG
+       n: () => vM,
+       q: () => XM
+     });
+     var OM = iM(620),
+       SM = iM(613),
+       jM = iM(37988),
+       aM = iM(38506),
+       PM = iM(38511);
+     class nM extends Error {}
+ 
+     function QM(MM) {
+       return {
+         constant: MM,
+         input: -1
+       }
+     }
+ ... (582 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25-L45` → after: `L36832-L36836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR36832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L36832-L36836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L36832-L36836) · [Before (L25-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L25-L45)

```diff
-     var wG = ZG(1343),
-       SG = ZG(19),
-       LG = ZG(1251),
-       yG = ZG(2380),
-       kG = ZG(4842),
-       UG = ZG(4800);
-     let YG, VG = !1,
-       pG = !1,
-       fG = !1,
-       QG = !1;
-     const KG = 1300,
-       hG = 3e3;
-     let dG = 0,
-       JG = !1,
-       rG = !1,
-       zG = 0;
- ... (5 more removed lines; see GitHub link above)
+     var OM = iM(38515),
+       SM = iM(38524);
+     const jM = /^-?\d+(\.\d+f?)?$/,
+       aM = "{([",
+       PM = "})]";
```

#### 5. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L47-L48` → after: `L36838-L36864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR36838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L36838-L36864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L36838-L36864) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L47-L48)

```diff
-     function CG() {
-       return VG
+     function nM(MM) {
+       return "" === MM || "0" === MM || MM.length > SM.d ? MM : jM.test(MM) ? (-parseFloat(MM)).toString() : function(MM, rM) {
+         if (MM.includes("return ")) return function(MM, rM) {
+           let iM = "",
+             OM = 0,
+             SM = 0;
+           for (;;) {
+             const jM = MM.indexOf("return ", SM);
+             if (-1 === jM) break;
+             const aM = jM + 7,
+               PM = zM(MM, aM);
+             if (-1 !== PM) {
+               if (iM += MM.substring(OM, aM) + rM(MM.substring(aM, PM)), OM = PM, PM === MM.length) break;
+               SM = PM + 1
+             } else SM = LM(MM, aM) + 1
+           }
+ ... (11 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L51` → after: `L36867-L36889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR36867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L36867-L36889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L36867-L36889) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L51)

```diff
-     function WG() {
+     function QM(MM) {
+       let rM, iM = !0,
+         OM = 0,
+         SM = "";
+       for (const jM of MM) {
+         if (0 === OM) {
+           let MM, OM = !0;
+           if ("-" === jM && "*" !== rM && "/" !== rM) {
+             iM || rM || (SM += "+"), iM = !1;
+             continue
+           }
+           if (" " === jM || "\n" === jM) OM = !1;
+           else {
+             if ("+" === jM && "*" !== rM && "/" !== rM) {
+               SM += "-", iM = !1;
+               continue
+ ... (7 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L55` → after: `L36893-L36917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR36893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L36893-L36917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L36893-L36917) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L55)

```diff
-     function mG() {
+     function zM(MM, rM) {
+       if (rM >= MM.length || mM(MM[rM])) return -1;
+       for (let iM = rM + 1; iM < MM.length; iM++) {
+         if (";" === MM[iM]) return iM;
+         if (mM(MM[iM])) return -1
+       }
+       return MM.length
+     }
+ 
+     function LM(MM, rM) {
+       for (let iM = rM; iM < MM.length; iM++)
+         if (mM(MM[iM])) return iM;
+       return MM.length
+     }
+ 
+     function mM(MM) {
+ ... (9 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L60` → after: `L37189-L37481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR37189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L37189-L37481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L37189-L37481) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L60)

```diff
-       return (0, LG.A)() && !XG
+       return Tr ??= (0, Kr.q)(qr, "builtIn"), Tr
+     }
+   },
+   38524: (MM, rM, iM) => {
+     function OM(MM, rM, iM) {
+       if ("+" !== MM && "-" !== MM && "*" !== MM && "/" !== MM) return null;
+       const OM = rM.evaluate,
+         SM = iM.evaluate,
+         jM = iM.constant;
+       if (null !== jM) {
+         if ("/" === MM) return 0 === jM ? () => 0 : MM => OM(MM) / jM;
+         if (void 0 !== rM.query) {
+           const iM = rM.query;
+           switch (MM) {
+             case "+":
+               return MM => MM.queries[iM] + jM;
+ ... (277 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L64-L68` → after: `L37552-L37743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR37552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L37552-L37743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L37552-L37743) · [Before (L64-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L64-L68)

```diff
-       let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (GG !== XG) {
-         XG = GG;
-         for (const GG of [...iG]) GG(XG);
-         bG && eG()
+       return {
+         constant: MM,
+         readsClock: !1,
+         readsAnimTime: !1,
+         cost: 0,
+         evaluate: () => MM
+       }
+     }
+     class AM {
+       constructor(MM, rM) {
+         this.tokens = MM, this.variableSlots = rM, this.index = 0, this.depth = 0, this.nodeCount = 0, this.readsClock = !1, this.readsAnimTime = !1
+       }
+       get nodes() {
+         return this.nodeCount
+       }
+       parseProgram() {
+ ... (176 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L73-L74` → after: `L37758-L37774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR37758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L37758-L37774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L37758-L37774) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L73-L74)

```diff
-       return iG.add(GG), () => {
-         iG.delete(GG)
+       return {
+         name: "collideEntitiesProjectile",
+         order: 70,
+         state: {
+           callback: null,
+           _lastPos: null
+         },
+         PU: function(MM, rM) {},
+         vW: null,
+         system: function(rM, iM) {
+           ! function(MM) {
+             const rM = MM.hU.iZ("collideEntitiesProjectile");
+             if (0 === rM.length) return;
+             const iM = mM(MM);
+             for (const OM of rM) OM && LM(MM, OM, iM)
+           }(MM)
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L78-L79` → after: `L37778-L37784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR37778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L37778-L37784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L37778-L37784) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L78-L79)

```diff
-     function aG() {
-       (0, kG.j)(yG.t.Menu, (0, LG.A)() ? 0 : yG.t.Menu)
+     function nM(MM, rM) {
+       var iM;
+       const OM = mM(MM),
+         jM = MM.hU.Av(rM),
+         aM = MM.hU.jK(rM),
+         PM = [jM.hm.base[0] + aM.width / 2, jM.hm.base[1] + aM.height / 2, jM.hm.base[2] + aM.width / 2];
+       SM().add(PM, PM, null !== (iM = aM.Am) && void 0 !== iM ? iM : MM.Am), LM(MM, MM.hU.getState(rM, "collideEntitiesProjectile"), OM, PM)
```

#### 12. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L82-L83` → after: `L37789-L37803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR37789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L37789-L37803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L37789-L37803) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L82-L83)

```diff
-     function cG() {
-       rG = !1, zG = 0, aG(), eG()
+     function LM(MM, rM, iM) {
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.hU.XE(rM.HZ);
+       if (null === rM._lastPos) return void(rM._lastPos = SM().clone(OM));
+       SM().sub(QM, OM, rM._lastPos);
+       const jM = SM().length(QM);
+       0 === jM && (QM[0] = 1e-4);
+       for (let SM = 0; SM < zM.length; SM++) {
+         const OM = iM[SM];
+         if (!MM.hU.BMM(OM.HZ, "collideEntities")) continue;
+         if (!OM.TiM) continue;
+         const LM = aM().distance(rM._lastPos, QM, zM[SM]);
+         if (PM = rM._lastPos, nM = zM[SM], (PM[0] >= nM[0][0] && PM[0] <= nM[1][0] && PM[1] >= nM[0][1] && PM[1] <= nM[1][1] && PM[2] >= nM[0][2] && PM[2] <= nM[1][2] || Math.abs(LM) <= jM) && (rM.callback(OM.HZ), !MM.hU.BMM(rM.HZ, "collideEntitiesProjectile"))) break
+       }
+       var PM, nM;
+       SM().copy(rM._lastPos, OM)
```

#### 13. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L87-L88` → after: `L37807-L37844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR37807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L37807-L37844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L37807-L37844) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L87-L88)

```diff
-       return uG.add(GG), () => {
-         uG.delete(GG)
+       const rM = MM.hU.iZ("collideEntities");
+       for (let jM = 0; jM < rM.length; jM++) {
+         var iM, OM;
+         const aM = MM.hU.jK(rM[jM].HZ),
+           PM = rM[jM].KiM / 2,
+           nM = rM[jM].qiM / 2;
+         zM[jM] = [
+           [aM.siM[0] - PM, aM.siM[1] - nM, aM.siM[2] - PM],
+           [aM.siM[3] + PM, aM.siM[4] + nM, aM.siM[5] + PM]
+         ], SM().add(zM[jM][0], zM[jM][0], null !== (iM = aM.Am) && void 0 !== iM ? iM : MM.Am), SM().add(zM[jM][1], zM[jM][1], null !== (OM = aM.Am) && void 0 !== OM ? OM : MM.Am)
+       }
+       return zM.length = rM.length, rM.slice()
+     }
+   },
+   38662: (MM, rM, iM) => {
+     iM.d(rM, {
+ ... (22 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L93` → after: `L37870-L37935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR37870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L37870-L37935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L37870-L37935) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L93)

```diff
-       pG = !1, GG !== VG && (VG = GG, QG = !1, clearTimeout(YG), fG = !VG && oG, VG ? (JG = !1, rG = !1, zG = 0) : IG() && !oG && (rG = !0), oG = !1, VG && !IG() && DG(), OG(), fG && eG())
+       return {
+         name: "movement",
+         order: 30,
+         stateConstructor: aM,
+         PU: (rM, iM) => {
+           iM.Cm = MM, PM = iM.isInCobweb, nM = iM.isInFluid
+         },
+         vW: null,
+         system: function(MM, rM) {}
+       }
+     }
+   },
+   38142: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM
+     });
+ ... (50 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L97` → after: `L37960-L37961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR37960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L37960-L37961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L37960-L37961) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L97)

```diff
-       GG !== JG && (JG = GG, GG || eG())
+       const rM = SM.k[MM];
+       return !!rM && (!(MM in jM.g) && (rM.model ? "Slab" === rM.model : !rM.twoDBlockItem))
```

#### 16. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L100-L101` → after: `L37964-L37968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR37964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L37964-L37968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L37964-L37968) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L100-L101)

```diff
-     function MG() {
-       pG = !1, QG || !0 !== nG() || (QG = !0, clearTimeout(YG), YG = setTimeout(sG, KG))
+     function HM(MM, rM, iM) {
+       const OM = rM - MM;
+       if (OM <= 0) return zM;
+       const SM = Math.min(1, Math.max(0, (iM - MM) / OM));
+       return QM + (zM - QM) * SM
```

#### 17. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L104-L105` → after: `L37971-L37973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR37971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L37971-L37973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L37971-L37973) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L104-L105)

```diff
-     function AG() {
-       return (!pG || performance.now() - dG > hG) && (pG = (0, UG.I)().lockPointer(), dG = performance.now()), pG
+     function hM(MM, rM, iM) {
+       const OM = HM(MM.startedAtMs, MM.endsAtMs, iM);
+       return HM(rM.startedAtMs, rM.endsAtMs, iM) >= OM ? rM : MM
```

#### 18. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L108-L109` → after: `L37976-L37989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR37976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L37976-L37989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L37976-L37989) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L108-L109)

```diff
-     function sG() {
-       qG() && gG() && AG()
+     function JM(MM, rM, iM) {
+       let OM = 1 / 0;
+       for (let SM = 0; SM < 3; SM++) {
+         if (0 === rM[SM]) continue;
+         const jM = rM[SM] > 0 ? iM[SM] + 1 : iM[SM];
+         OM = Math.min(OM, (jM - MM[SM]) / rM[SM])
+       }
+       return OM
+     }
+     const dM = Math.sqrt(3)
+   },
+   38721: (MM, rM, iM) => {
+     function OM(MM) {
+       return "string" !== typeof MM || 2 !== MM.length && ":" !== MM[2] ? null : MM[0] + MM[1]
```

#### 19. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L112-L113` → after: `L38005-L38012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38005-L38012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38005-L38012) · [Before (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L112-L113)

```diff
-     function qG() {
-       return IG() && !VG && !JG && !(0, wG.k)()
+     function jM(MM) {
+       if (function(MM) {
+           for (let rM = 0; rM < SM.length; rM++)
+             if (MM === SM[rM]) return !0;
+           return !1
+         }(MM)) return !1;
+       const rM = OM(MM);
+       return "op" === rM || "ep" === rM || "wi" === rM || "pp" === rM || "fp:call" === MM || "fp:t" === MM
```

#### 20. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L116-L118` → after: `L38015-L38016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38015-L38016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38015-L38016) · [Before (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L116-L118)

```diff
-     function nG() {
-       var GG;
-       return "undefined" === typeof navigator || null === (GG = navigator.userActivation) || void 0 === GG ? void 0 : GG.isActive
+     function aM(MM) {
+       return "fp" === OM(MM) && !jM(MM)
```

#### 21. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L121-L122` → after: `L38019-L38021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38019-L38021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38019-L38021) · [Before (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L121-L122)

```diff
-     function gG() {
-       return fG && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== nG()
+     function PM(MM) {
+       if ("string" !== typeof MM) return !1;
+       return "o" === MM[0] && "p" === MM[1] && (2 === MM.length || ":" === MM[2]) || "fp:call" === MM || "2" === MM || "t" === MM || "a" === MM
```

#### 22. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L125-L126` → after: `L38024-L38025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38024-L38025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38024-L38025) · [Before (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L125-L126)

```diff
-     function eG() {
-       IG() ? qG() && !rG && gG() && AG() : VG && !oG && DG()
+     function nM(MM, rM) {
+       return `~${function(MM){return MM.length<2?MM:":"===MM[1]?MM[0]:MM[0]+MM[1]}(rM)}~${MM}`
```

#### 23. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L129-L130` → after: `L38029-L38037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38029-L38037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38029-L38037) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L129-L130)

```diff
-     function RG() {
-       rG ? navigator.vendor.startsWith("Apple") ? tG() : zG = EG : eG()
+     function zM(MM) {
+       let rM = MM.length - 1;
+       for (let iM = 0; iM < 2; iM++) {
+         const iM = rM;
+         for (; rM >= 0 && MM[rM] >= "0" && MM[rM] <= "9";) rM--;
+         if (rM < 0 || rM === iM || ":" !== MM[rM]) return -1;
+         rM--
+       }
+       return rM + 1
```

#### 24. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L133-L134` → after: `L38040-L38041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38040-L38041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38040-L38041) · [Before (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L133-L134)

```diff
-     function TG() {
-       zG > 0 && 0 === --zG && tG()
+     function LM(MM) {
+       return "unknown" === MM || zM(MM) >= 0
```

#### 25. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L137-L138` → after: `L38044-L38045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38044-L38045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38044-L38045) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L137-L138)

```diff
-     function HG() {
-       zG = 0
+     function mM(MM, rM) {
+       return MM[rM] >= "\ud800" && MM[rM] <= "\udbff" && rM + 1 < MM.length && MM[rM + 1] >= "\udc00" && MM[rM + 1] <= "\udfff" ? 2 : 1
```

#### 26. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L141-L142` → after: `L38048-L38049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38048-L38049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38048-L38049) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L141-L142)

```diff
-     function tG() {
-       qG() && !0 === nG() && AG()
+     function HM(MM, rM, iM) {
+       return 2 === iM ? 4 : MM[rM] <= "\x7f" ? 1 : MM[rM] <= "\u07ff" ? 2 : 3
```

#### 27. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L145-L146` → after: `L38052-L38060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38052-L38060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38052-L38060) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L145-L146)

```diff
-     function DG() {
-       oG = !0, (0, UG.I)().unlockPointer()
+     function hM(MM, rM, iM) {
+       let OM = 0;
+       for (; OM < rM;) {
+         const rM = mM(MM, OM),
+           SM = HM(MM, OM, rM);
+         if (SM > iM) break;
+         iM -= SM, OM += rM
+       }
+       return OM
```

#### 28. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L149-L152` → after: `L38063-L38079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38063-L38079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38063-L38079) · [Before (L149-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L149-L152)

```diff
-     function NG() {
-       pG = !1, fG = !1, QG = !1, clearTimeout(YG), JG = !1, rG = !1, zG = 0, oG = !1;
-       const GG = VG;
-       VG = !1, GG && OG()
+     function JM(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
+       if ("string" !== typeof MM || MM.length > QM || !LM(MM)) return "t";
+       let iM = 2;
+       for (let PM = 0; PM < MM.length;) {
+         const rM = mM(MM, PM);
+         iM += HM(MM, PM, rM), PM += rM
+       }
+       if (iM <= rM) return `t ${MM}`;
+       const OM = zM(MM),
+         SM = rM - 2 - (MM.length - OM);
+       if (SM < 0) return "t";
+       const jM = hM(MM, OM, SM);
+       let aM = "t ";
+       for (let PM = 0; PM < jM; PM++) aM += MM[PM];
+       for (let PM = OM; PM < MM.length; PM++) aM += MM[PM];
+ ... (1 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L155-L157` → after: `L38083-L38087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38083-L38087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38083-L38087) · [Before (L155-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L155-L157)

```diff
-     function OG() {
-       for (const GG of [...uG]) GG(VG);
-       SG.l.xh("pointerLockUpdate", VG)
+     function yM(MM) {
+       let rM = "so:";
+       const iM = hM(MM, MM.length, dM - rM.length);
+       for (let OM = 0; OM < iM; OM++) rM += MM[OM];
+       return rM
```

#### 30. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L159-L172` → after: `L38089-L38091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38089-L38091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38089-L38091) · [Before (L159-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L159-L172)

```diff
-   },
-   41056: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => fG,
-       g: () => kG,
-       k: () => pG,
-       l: () => YG,
-       m: () => yG,
-       n: () => VG,
-       q: () => UG
-     });
-     let wG = null,
-       SG = null,
-       LG = null;
+     const lM = "BABYLON ",
+       EM = "DECODE ",
+       UM = "BABYLON@ ";
```

#### 31. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L175` → after: `L38094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38094) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L175)

```diff
-       wG = GG
+       return yM(lM + MM)
```

#### 32. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L178-L179` → after: `L38097-L38098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38097-L38098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38097-L38098) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L178-L179)

```diff
-     function kG() {
-       return wG
+     function CM(MM, rM) {
+       return yM(UM + MM + " " + rM)
```

#### 33. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L183` → after: `L38102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38102) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L183)

```diff
-       SG = GG
+       return yM(EM + MM)
```

#### 34. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L186-L187` → after: `L38115-L38117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38115-L38117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38115-L38117) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L186-L187)

```diff
-     function YG() {
-       return SG
+     function aM(MM) {
+       var rM;
+       return !0 === (null === MM || void 0 === MM || null === (rM = MM.name) || void 0 === rM ? void 0 : rM.includes("Firecracker"))
```

#### 35. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L191` → after: `L38121-L38123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38121-L38123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38121-L38123) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L191)

```diff
-       LG = GG
+       for (let rM = 0; rM < jM.r; rM++)
+         if (aM(MM.getItemAtIdx(rM))) return rM;
+       return null
```

#### 36. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L194` → after: `L38126-L38132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38126-L38132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38126-L38132) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L194)

```diff
-     function pG() {
+     function nM(MM) {
+       let rM = 0;
+       for (let OM = 0; OM < jM.r; OM++) {
+         const SM = MM.getItemAtIdx(OM);
+         var iM;
+         if (aM(SM)) rM += null !== (iM = SM.amount) && void 0 !== iM ? iM : 1
+       }
```

#### 37. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L198-L200` → after: `L38136-L38143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38136-L38143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38136-L38143) · [Before (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L198-L200)

```diff
-     function fG() {
-       var GG, bG;
-       return !0 === (null === (GG = SG) || void 0 === GG || null === (bG = GG.currentViewer) || void 0 === bG ? void 0 : bG.inPlayback)
+     function QM(MM, rM, iM, jM) {
+       if (iM !== OM.l.GLIDING && jM !== OM.l.GLIDING) return;
+       const aM = MM.hU.nrM(rM);
+       if (aM.gliderFuelCooldownEnd = 0, iM === OM.l.GLIDING) {
+         var nM;
+         const iM = null === (nM = MM.hU.urM(rM)) || void 0 === nM ? void 0 : nM.inventory;
+         iM && null !== PM(iM) && MM.bloxd.startGliderFuelCooldown(rM, aM, SM.g.getFirecrackerCooldownMultiplier(iM.getItemAtSelectedSlot()))
+       }
```

#### 38. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L203` → after: `L38146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38146) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L203)

```diff
-   4800: (GG, bG, ZG) => {
+   38977: (MM, rM, iM) => {
```

#### 39. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L205-L209` → after: `L38148-L38149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38148-L38149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38148-L38149) · [Before (L205-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L205-L209)

```diff
-       A: () => rG,
-       E: () => yG,
-       I: () => kG,
-       K: () => CG,
-       c: () => iG,
+       b: () => jM,
+       d: () => nM,
```

#### 40. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L216-L219` → after: `L38154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38154) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L216-L219)

```diff
-       r: () => oG,
-       t: () => WG,
-       u: () => mG,
-       y: () => IG
+       s: () => SM
```

#### 41. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L221-L227` → after: `L38156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38156) · [Before (L221-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L221-L227)

```diff
-     var wG = ZG(4804);
-     const SG = {
-       lockPointer: () => !1,
-       unlockPointer: () => {},
-       leaveGame: () => {}
-     };
-     let LG = SG;
+     var OM = iM(4586);
```

#### 42. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L230` → after: `L38159-L38160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38159-L38160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38159-L38160) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L230)

```diff
-       LG = null !== GG && void 0 !== GG ? GG : SG
+       const rM = new OM.h(`blockBreakDrop|${MM}`);
+       return () => rM.next()
```

#### 43. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L233-L234` → after: `L38163-L38164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38163-L38164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38163-L38164) · [Before (L233-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L233-L234)

```diff
-     function kG() {
-       return LG
+     function jM(MM) {
+       MM.gravityMultiplier = 2, MM.friction = 4, MM.vz = .02, MM.fm = 0, MM.fluidDrag = .2
```

#### 44. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L236-L244` → after: `L38166-L38170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38166-L38170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38166-L38170) · [Before (L236-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L236-L244)

```diff
-     const UG = new Set,
-       YG = new Set;
-     let VG = -1;
-     const pG = new Set,
-       fG = new Set;
-     let QG = 0,
-       KG = 0;
-     const hG = new Set,
-       dG = new Set;
+ 
+     function aM(MM, rM) {
+       return [MM[0] + .2 * rM() + .4, MM[1] + .5, MM[2] + .2 * rM() + .4]
+     }
+     const PM = .01;
```

#### 45. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L247-L249` → after: `L38173-L38178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38173-L38178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38173-L38178) · [Before (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L247-L249)

```diff
-       return UG.add(GG), () => {
-         UG.delete(GG)
-       }
+       return [PM - MM() * PM * 2, .05, PM - MM() * PM * 2]
+     }
+ 
+     function QM(MM) {
+       const rM = Math.hypot(MM[0], MM[1], MM[2]);
+       return rM > 0 && Number.isFinite(rM) ? [MM[0] / rM, MM[1] / rM, MM[2] / rM] : null
```

#### 46. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L253-L257` → after: `L38182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38182) · [Before (L253-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L253-L257)

```diff
-       for (const wG of UG) try {
-         wG(GG)
-       } catch (ZG) {
-         bG(ZG)
-       }
+       return [MM[0] + .5 * rM[0], MM[1] + .5 * rM[1], MM[2] + .5 * rM[2]]
```

#### 47. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L261-L263` → after: `L38186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38186) · [Before (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L261-L263)

```diff
-       return YG.add(GG), () => {
-         YG.delete(GG)
-       }
+       return [3.5 / 30 * MM[0], 7 / 30 * MM[1], 3.5 / 30 * MM[2]]
```

#### 48. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L267-L272` → after: `L38203-L38218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38203-L38218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38203-L38218) · [Before (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L267-L272)

```diff
-       const ZG = VG < 0 ? 0 : GG - VG;
-       VG = GG;
-       for (const SG of YG) try {
-         SG(ZG)
-       } catch (wG) {
-         bG(wG)
+       var iM;
+       const zM = (0, OM.d)(rM),
+         LM = zM.physicsBodyDimensions.width,
+         mM = zM.physicsBodyDimensions.height,
+         HM = zM.hitBoxDimensions.width,
+         hM = zM.hitBoxDimensions.height,
+         JM = Math.min(Math.max(LM * MM, aM), SM.g),
+         dM = Math.min(Math.max(mM * MM, PM), SM.e),
+         yM = Math.max(HM * Math.min(MM, SM.g / LM), nM),
+         lM = Math.max(hM * Math.min(MM, SM.e / mM), QM);
+       return {
+         physicsBodyWidth: JM,
+         physicsBodyHeight: dM,
+         collideEntitiesWidthExpand: Math.max(0, yM - JM),
+         collideEntitiesHeightExpand: Math.max(0, lM - dM),
+         shadowSize: jM * MM * (null !== (iM = zM.modelScale) && void 0 !== iM ? iM : 1)
```

#### 49. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L276-L279` → after: `L38232-L38233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38232-L38233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38232-L38233) · [Before (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L276-L279)

```diff
-     function oG(GG) {
-       return pG.add(GG), () => {
-         pG.delete(GG)
-       }
+     function aM(MM, rM, iM) {
+       return `${MM}|${rM}|${iM}`
```

#### 50. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L283-L285` → after: `L38237-L38238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38237-L38238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38237-L38238) · [Before (L283-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L283-L285)

```diff
-       return fG.add(GG), () => {
-         fG.delete(GG)
-       }
+       const [rM, iM, OM] = MM.split("|");
+       return [Number(rM), Number(iM), Number(OM)]
```

#### 51. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L287` → after: `L38240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38240) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L287)

```diff
-     let uG = 0;
+     const nM = iM(181).f.HL;
```

#### 52. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L290` → after: `L38243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38243) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L290)

```diff
-       uG += GG
+       return jM()(MM, [nM, nM, nM])
```

#### 53. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L293-L295` → after: `L38375-L38389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38375-L38389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38375-L38389) · [Before (L293-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L293-L295)

```diff
-     function CG() {
-       const GG = uG;
-       return uG = 0, GG
+     function mM(MM, rM) {
+       return {
+         ...LM,
+         speedMultiplier: rM,
+         fluidSpeedMultiplier: .02,
+         effect: {
+           name: "Driving",
+           icon: MM
+         },
+         horizontalBounciness: 0,
+         steering: {
+           ...zM,
+           turnRate: 1.65
+         }
+       }
```

#### 54. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L299-L300` → after: `L38455-L38463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38455-L38463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38455-L38463) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L299-L300)

```diff
-       return hG.add(GG), () => {
-         hG.delete(GG)
+       return {
+         model: "cameraDirection",
+         maxSpeed: MM,
+         minSpeed: .5,
+         pitchAcceleration: .0125,
+         friction: 0,
+         impulseDecayTicks: 100,
+         biasMagnitude: 1.5,
+         excessVelocityBleedPerTick: .5
```

#### 55. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L305-L306` → after: `L38534-L38539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38534-L38539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38534-L38539) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L305-L306)

```diff
-       return dG.add(GG), () => {
-         dG.delete(GG)
+       return {
+         effect: {
+           name: "Floating",
+           icon: `${MM} Balloon`,
+           duration: 16e3
+         }
```

#### 56. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L309-L328` → after: `L38542-L38572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38542-L38572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38542-L38572) · [Before (L309-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L309-L328)

```diff
- 
-     function IG() {
-       QG = 0, KG = 0, VG = -1
-     }
- 
-     function FG(GG, bG) {
-       if ("paced" === GG) return KG += bG, null;
-       if ("drawn" !== GG && "skipped" !== GG) return null;
-       const ZG = bG + KG;
-       return KG = 0, ZG
-     }
- 
-     function vG(GG, bG, ZG, SG) {
-       const LG = (0, wG.l)(bG),
-         yG = GG > 0 ? performance.now() : 0;
-       for (let wG = 0; wG < GG; wG++)
- ... (4 more removed lines; see GitHub link above)
+     const UM = {
+       [OM.o.ROTATION_1]: {
+         fixedHeading: 0
+       },
+       [OM.o.ROTATION_2]: {
+         fixedHeading: Math.PI / 2
+       },
+       [OM.o.ROTATION_3]: {
+         fixedHeading: Math.PI
+       },
+       [OM.o.ROTATION_4]: {
+         fixedHeading: -Math.PI / 2
+       }
+     };
+     var GM = iM(9816),
+       CM = function(MM) {
+ ... (15 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L330-L334` → after: `L38574-L38588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38574-L38588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38574-L38588) · [Before (L330-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L330-L334)

```diff
-       if (GG > 0 && iG(performance.now() - yG), null !== ZG) {
-         for (const GG of pG) try {
-           GG(ZG)
-         } catch (kG) {
-           SG(kG)
+         this.tierSettings = {
+           ...iM
+         };
+         const OM = {},
+           jM = {};
+         for (const SM in this.baseSettings) {
+           const MM = this.baseSettings[SM];
+           if ("number" !== typeof MM) continue;
+           let rM = MM,
+             iM = MM;
+           for (const OM in this.tierSettings) {
+             const MM = this.tierSettings[OM][SM];
+             "number" === typeof MM && (MM > iM && (iM = MM), MM < rM && (rM = MM))
+           }
+           OM[SM] = rM, jM[SM] = iM
```

#### 58. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L336-L344` → after: `L38590-L38607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38590-L38607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38590-L38607) · [Before (L336-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L336-L344)

```diff
-         QG += ZG
-       }
-       if ("drawn" === bG) {
-         const GG = QG;
-         QG = 0;
-         for (const bG of fG) try {
-           bG(GG)
-         } catch (kG) {
-           SG(kG)
+         this.minSettings = {
+           ...OM
+         }, this.maxSettings = {
+           ...jM
+         };
+         const aM = this.buildTierLookups((MM => MM.speedMultiplierByBlock), bM),
+           PM = this.buildTierLookups((MM => MM.canAutoStepByBlock), wM);
+         this.baseBlockLookups = {
+           speedMultiplier: aM.base,
+           canAutoStep: PM.base
+         };
+         const nM = {};
+         for (const SM in this.tierSettings) {
+           const MM = Number(SM);
+           nM[MM] = {
+             speedMultiplier: aM.tiers[MM],
+ ... (2 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L347-L350` → after: `L38611-L38635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38611-L38635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38611-L38635) · [Before (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L347-L350)

```diff
-       for (const wG of dG) try {
-         wG(GG, LG)
-       } catch (kG) {
-         SG(kG)
+       getAllSettingsForTier(MM) {
+         return null === MM ? this.baseSettings : this.tierSettings[MM]
+       }
+       getBlockLookupsForTier(MM) {
+         return null === MM ? this.baseBlockLookups : this.tierBlockLookups[MM]
+       }
+       getMinSetting(MM) {
+         return this.minSettings[MM]
+       }
+       getMaxSetting(MM) {
+         return this.maxSettings[MM]
+       }
+       buildTierLookups(MM, rM) {
+         const iM = MM(this.baseSettings),
+           OM = rM(iM),
+           SM = {};
+ ... (9 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L379-L383` → after: `L38640-L38643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38640-L38643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38640-L38643) · [Before (L379-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L379-L383)

```diff
-       let {
-         action: bG,
-         flags: ZG
-       } = GG;
-       return "mid-fire" === bG && 0 !== (ZG & wG.b.AltLeftClick)
+       return (0, jM.xc)(MM) ? null : (0, jM.cb)(GM.p, (rM => {
+         var iM;
+         return null !== (iM = MM[(0, GM.g)(rM)]) && void 0 !== iM ? iM : 1
+       }), Float64Array)
```

#### 61. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L388-L390` → after: `L38647-L38650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38647-L38650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38647-L38650) · [Before (L388-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L388-L390)

```diff
-       return yG.add(GG), () => {
-         yG.delete(GG)
-       }
+       return (0, jM.xc)(MM) ? null : (0, jM.cb)(GM.p, (rM => {
+         const iM = MM[(0, GM.g)(rM)];
+         return void 0 === iM ? CM.Unset : iM ? CM.On : CM.Off
+       }), Uint8Array)
```

#### 62. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L393-L403` → after: `L38653-L38663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38653-L38663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38653-L38663) · [Before (L393-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L393-L403)

```diff
-     function UG(GG) {
-       const bG = SG.e[255 & GG];
-       if (void 0 === bG) return;
-       const ZG = GG >>> 8 & 255,
-         LG = {
-           action: bG,
-           down: 0 !== (ZG & wG.b.Down),
-           flags: ZG,
-           press: GG >>> 16
-         };
-       for (const wG of yG) wG(LG)
+     function tM(MM, rM, iM) {
+       if (MM) {
+         let iM = !1;
+         for (let OM = 0; OM < rM.length; OM++) {
+           const SM = MM[rM[OM]];
+           if (SM === CM.On) return !0;
+           SM === CM.Off && (iM = !0)
+         }
+         if (iM) return !1
+       }
+       return iM
```

#### 63. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L415-L694` → after: `L38666-L38722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38666-L38722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38666-L38722) · [Before (L415-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L415-L694)

```diff
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
-         Digit3: 13,
-         Digit4: 14,
-         Digit5: 15,
-         Digit6: 16,
- ... (264 more removed lines; see GitHub link above)
+       [OM.n.DEFAULT]: new eM(SM.g, {}),
+       [OM.n.BOAT]: new eM(aM, PM),
+       [OM.n.GLIDER]: new eM(JM, dM),
+       [OM.n.BALLOON]: new eM(yM, lM),
+       [OM.n.SLEEPING]: new eM({
+         canRun: !1,
+         jumpMultiplier: 0,
+         speedMultiplier: 0,
+         pose: "sleeping",
+         effect: {
+           name: "Sleeping",
+           icon: "Red Bed"
+         },
+         movementForceMultiplier: 0,
+         disableBaseMovement: !0
+       }, UM),
+ ... (41 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L697-L702` → after: `L38725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38725) · [Before (L697-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L697-L702)

```diff
-       yG = !0;
-       try {
-         GG()
-       } finally {
-         yG = !1
-       }
+       return gM[MM]
```

#### 65. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L706-L719` → after: `L38729-L38735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38729-L38735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38729-L38735) · [Before (L706-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L706-L719)

```diff
-       if (yG) return !1;
-       switch (GG) {
-         case wG.M.MouseDown:
-         case wG.M.MouseUp:
-         case wG.M.TouchStart:
-         case wG.M.TouchEnd:
-         case wG.M.TouchCancel:
-         case wG.M.TouchButton:
-           return !0;
-         case wG.M.KeyDown:
-         case wG.M.KeyUp:
-           return 0 === (bG & SG.e.Repeat) && !(0, LG.f)(document.activeElement);
-         default:
-           return !1
+       return gM[MM].getAllSettingsForTier(rM)
+     }
+ 
+     function* pM() {
+       for (const MM in gM) {
+         const rM = Number(MM);
+         yield rM
```

#### 66. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L723-L726` → after: `L38739-L38745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38739-L38745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38739-L38745) · [Before (L723-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L723-L726)

```diff
-     function VG(GG) {
-       kG || (kG = !0, queueMicrotask((() => {
-         kG = !1, GG()
-       })))
+     function WM(MM, rM, iM) {
+       const OM = rM ? MM.fluidSpeedMultiplier : iM ? MM.landSpeedMultiplier : MM.airSpeedMultiplier;
+       return MM.speedMultiplier * OM
+     }
+ 
+     function sM(MM, rM, iM) {
+       return null !== MM.fixedHeading ? MM.fixedHeading : MM.steering ? rM : iM
```

#### 67. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L729` → after: `L38748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38748) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L729)

```diff
-   4842: (GG, bG, ZG) => {
+   38654: (MM, rM, iM) => {
```

#### 68. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L731-L733` → after: `L38750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38750) · [Before (L731-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L731-L733)

```diff
-       e: () => kG,
-       f: () => yG,
-       j: () => YG
+       b: () => aM
```

#### 69. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L735-L747` → after: `L38752-L38756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38752-L38756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38752-L38756) · [Before (L735-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L735-L747)

```diff
-     var wG = ZG(2380),
-       SG = ZG(2388);
-     const LG = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);
- 
-     function yG(GG) {
-       return GG instanceof HTMLElement && (!!(GG.isContentEditable || GG instanceof HTMLTextAreaElement || GG instanceof HTMLSelectElement) || GG instanceof HTMLInputElement && !LG.has(GG.type))
-     }
- 
-     function kG(GG) {
-       let bG = null;
-       const ZG = ZG => {
-           const SG = yG(ZG);
-           SG !== bG && (bG = SG, GG(wG.g.UiCapture, wG.t.Keyboard, 0, 0, SG ? wG.t.Keyboard : 0))
+     var OM = iM(9816),
+       SM = iM(332);
+     const jM = {
+         Vines: {
+           upForceScalar: 1.05
```

#### 70. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L749-L750` → after: `L38758-L38759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38758-L38759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38758-L38759) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L749-L750)

```diff
-         SG = GG => {
-           ZG(GG.target)
+         "Maple Ladder": {
+           upForceScalar: 1.05
```

#### 71. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L752-L753` → after: `L38761-L38762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38761-L38762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38761-L38762) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L752-L753)

```diff
-         LG = GG => {
-           ZG(GG.relatedTarget)
+         "Pine Ladder": {
+           upForceScalar: 1.05
```

#### 72. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L755-L756` → after: `L38764-L38765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38764-L38765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38764-L38765) · [Before (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L755-L756)

```diff
-         kG = () => {
-           ZG(document.activeElement)
+         "Plum Ladder": {
+           upForceScalar: 1.05
```

#### 73. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L758-L763` → after: `L38767-L38856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38767-L38856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38767-L38856) · [Before (L758-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L758-L763)

```diff
-         UG = {
-           capture: !0,
-           passive: !0
-         };
-       return document.addEventListener("focusin", SG, UG), document.addEventListener("focusout", LG, UG), document.addEventListener("keydown", kG, UG), ZG(document.activeElement), () => {
-         document.removeEventListener("focusin", SG, UG), document.removeEventListener("focusout", LG, UG), document.removeEventListener("keydown", kG, UG)
+         "Cedar Ladder": {
+           upForceScalar: 1.25
+         },
+         "Aspen Ladder": {
+           upForceScalar: 1.05
+         },
+         "Jungle Ladder": {
+           upForceScalar: 1.25
+         },
+         "Palm Ladder": {
+           upForceScalar: 1.25
+         },
+         "Pear Ladder": {
+           upForceScalar: 1.05
+         },
+         "Cherry Ladder": {
+ ... (74 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L768-L774` → after: `L38860-L38865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38860-L38865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38860-L38865) · [Before (L768-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L768-L774)

```diff
-     function YG(GG, bG) {
-       var ZG;
-       let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
-       UG.set(wG, (null !== (ZG = UG.get(wG)) && void 0 !== ZG ? ZG : 0) & ~GG | bG & GG);
-       let LG = 0;
-       for (const SG of UG.values()) LG |= SG;
-       return (0, SG.G)(GG, LG & GG)
+     function aM(MM, rM, iM) {
+       return !MM.released && (iM || !rM)
+     }
+ 
+     function PM(MM, rM, iM, OM, SM) {
+       return MM && rM && (0 !== iM[0] && !OM || 0 !== iM[2] && !SM)
```

#### 75. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L777` → after: `L38868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38868) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L777)

```diff
-   41344: (GG, bG, ZG) => {
+   6936: (MM, rM, iM) => {
```

#### 76. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L781-L782` → after: `L38872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38872) · [Before (L781-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L781-L782)

```diff
-       k: () => kG,
-       n: () => YG
+       h: () => mM
```

#### 77. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L784-L791` → after: `L38874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38874) · [Before (L784-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L784-L791)

```diff
-     var wG = ZG(1910);
-     let SG = null,
-       LG = 0;
-     const yG = new Set;
- 
-     function kG() {
-       return SG
-     }
+     var OM = iM(6944);
```

#### 78. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L793-L794` → after: `L38876-L38877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38876-L38877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38876-L38877) · [Before (L793-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L793-L794)

```diff
-     function UG() {
-       return LG
+     function SM(MM, rM) {
+       return MM && rM === OM.n.DEFAULT
```

#### 79. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L796-L799` → after: `L38879-L38891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38879-L38891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38879-L38891) · [Before (L796-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L796-L799)

```diff
- 
-     function YG(GG) {
-       SG = GG, LG++, (0, wG.d)();
-       for (const bG of yG) bG()
+     const jM = 150,
+       aM = 1.6,
+       PM = 65,
+       nM = 500,
+       QM = .6,
+       zM = .5;
+     class LM {
+       constructor() {
+         this.Gr = 0, this.Cr = 0, this.yVelocity = 0
+       }
+       reset() {
+         this.Gr = 0, this.Cr = 0, this.yVelocity = 0
+       }
```

#### 80. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L802-L803` → after: `L38894-L38899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38894-L38899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38894-L38899) · [Before (L802-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L802-L803)

```diff
-     function VG(GG) {
-       yG.add(GG)
+     function mM(MM, rM, iM, OM) {
+       let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
+       MM.Gr = rM ? Math.min(MM.Gr + aM / jM * SM, aM) : 0, 0 === iM ? MM.Cr = 0 : OM ? MM.Cr = SM : MM.Cr += SM;
+       const LM = Math.min(MM.Cr, jM) / jM,
+         mM = (PM + LM * nM) * iM;
+       return MM.yVelocity *= Math.pow(QM, SM), Math.abs(MM.yVelocity) < zM && (MM.yVelocity = 0), mM
```

#### 81. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L806` → after: `L38902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38902) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L806)

```diff
-   41390: (GG, bG, ZG) => {
+   39480: (MM, rM, iM) => {
```

#### 82. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L808` → after: `L38904-L38905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38904-L38905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38904-L38905) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L808)

```diff
-       e: () => wG
+       e: () => SM,
+       g: () => OM
```

#### 83. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L810` → after: `L38907-L38909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38907-L38909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38907-L38909) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L810)

```diff
-     const wG = 2e3
+     const OM = 25,
+       SM = 90;
+     Math.min(OM, SM)
```

#### 84. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L812` → after: `L38911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38911) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L812)

```diff
-   41271: (GG, bG, ZG) => {
+   38609: (MM, rM, iM) => {
```

#### 85. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L816-L819` → after: `L38914-L38915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38914-L38915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38914-L38915) · [Before (L816-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L816-L819)

```diff
-       f: () => zG,
-       h: () => oG,
-       k: () => EG,
-       l: () => uG
+       g: () => aM,
+       h: () => PM
```

#### 86. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L821-L829` → after: `L38917-L38922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38917-L38922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38917-L38922) · [Before (L821-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L821-L829)

```diff
-     var wG = ZG(161),
-       SG = ZG(17),
-       LG = ZG(19),
-       yG = ZG(2889),
-       kG = ZG(1260),
-       UG = ZG(34414),
-       YG = ZG(300),
-       VG = ZG(80),
-       pG = ZG(153);
+     var OM = iM(347),
+       SM = iM.n(OM),
+       jM = iM(332);
+     let aM, PM, nM;
+     var QM, zM, LM, mM, HM, hM, JM, dM, yM;
+     const lM = [2, 0, 1, 115, 6, 3, 168, "i", "g", 29, 4, 8, 255, "length", "undefined", "d", 63, "fromCodePoint", 7, 12, "push", "b", 196, 9, 91, 5, 177, 8191, 88, 13, 14, !1, 105, 190, "h", "c", 36, 157, 42, 10, "a", "e", 174, "f", 163, 62, 222, 130, !0, 106, 120, 31, 209, 46,  … [truncated]
```

#### 87. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L831-L841` → after: `L38924-L38936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38924-L38936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38924-L38936) · [Before (L831-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L831-L841)

```diff
-     function fG() {
-       var GG;
-       const bG = (0, yG.G)(),
-         ZG = function(GG, bG) {
-           return {
-             sampleCount: GG.antiAliasing ? 4 : 1,
-             n: (0, yG.A)(GG.pixelScale, bG),
-             pixelated: (0, yG.w)(GG.pixelSmoothing)
-           }
-         }(SG.e.get("clientEscMenuOptions"), bG);
-       return ZG.sampleCount > 1 && (0, UG.b)() && (ZG.sampleCount = 1), ZG.n = null !== (GG = (0, UG.l)()) && void 0 !== GG ? GG : ZG.n, wG.f.includes((0, VG.getSoftwareRenderer)()) && (ZG.sampleCount = 1, ZG.n = Math.max(ZG.n, (0, yG.A)(pG.o.pixelScale, bG))), ZG
+     function EM(...MM) {
+       return MM[lM[13]] = lM[2], typeof QM[MM[lM[1]]] === lM[14] ? QM[MM[lM[1]]] = function(...MM) {
+         for (tM(MM[lM[13]] = lM[2], MM[lM[5]] = '0(^>+?=|1&}3#[@".,)b8t;9P:!A_2XLT]~`cR/wa7vEQ%Ky5IB{UHDusFCVSJOlmoWGfkjMgZhrp<NeYn6xqzi4*$d', MM[lM[0]] = "" + (MM[lM[1]] || ""), MM[-lM[4]] = MM[lM[0]].length, MM[lM[10]] = [], MM[lM[8]] = lM[1], MM[lM[9]] = lM[1], MM[lM[7]] = -lM … [truncated]
+           if (MM[-lM[6]] = MM[lM[5]].indexOf(MM[lM[0]][MM[-lM[3]]]), MM[-lM[6]] !== -lM[2])
+             if (MM[lM[7]] < lM[1]) MM[lM[7]] = MM[-lM[6]];
+             else {
+               tM(MM[lM[7]] += MM[-lM[6]] * lM[24], MM[lM[8]] |= MM[lM[7]] << MM[lM[9]], MM[lM[9]] += (MM[lM[7]] & lM[27]) > lM[28] ? lM[29] : lM[30]);
+               do {
+                 tM(MM[lM[10]].push(MM[lM[8]] & lM[12]), MM[lM[8]] >>= lM[11], MM[lM[9]] -= lM[11])
+               } while (MM[lM[9]] > lM[18]);
+               MM[lM[7]] = -lM[2]
+             } return MM[lM[7]] > -lM[2] && MM[lM[10]].push((MM[lM[8]] | MM[lM[7]] << MM[lM[9]]) & lM[12]), UM(MM[lM[10]])
+       }(zM[MM[lM[1]]]) : QM[MM[lM[1]]]
```

#### 88. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L848-L849` → after: `L38939-L38940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38939-L38940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38939-L38940) · [Before (L848-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L848-L849)

```diff
-     function JG() {
-       for (const GG of hG) GG()
+     function UM(...MM) {
+       return MM[lM[13]] = lM[2], typeof mM !== lM[14] && mM ? (new mM).decode(new HM(MM[lM[1]])) : typeof hM !== lM[14] && hM ? hM.from(MM[lM[1]]).toString("utf-8") : yM(MM[lM[1]])
```

#### 89. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L852-L855` → after: `L38943-L38983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38943-L38983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38943-L38983) · [Before (L852-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L852-L855)

```diff
-     function rG() {
-       if (null === QG) {
-         const GG = document.createElement("div");
-         GG.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", GG.setAttribute("aria-hidden", "true"), document.body.append(GG), KG = GG, QG = new yG.d(GG, JG)
+     function GM() {}
+     tM(QM = {}, zM = ['"{GH/Z_#"SI`#xD79M*&2YSYr,J', '39kM5q8ch@i"@?m,W%PX|i$(|', 'X~=paZ"[I&=^aA!_2Mt_LU0', "8F]Xon~#hVg;$c7:CMl=V~k|nSfZVA>Pbl4Duew|@VxTn5J,x=D|mw~m)Sa", "k,_<Q`!i>FtpWCRbc#F=", "#hq2kc&7!@", "0#H|`D<{)&/ecVew", "{MX+[uHy=uiS%.MPnL${=O{(*,[AdkcPh%oDU{,7>", "g>d1 … [truncated]
+       var MM, rM, iM, OM = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }];
+       tM(MM = void 0, rM = []);
+       try {
+         tM(MM = Object, rM[lM[20]]("".__proto__.constructor.name))
+       } catch (HM) {}
+       MM: for (iM = lM[1]; iM < OM[lM[13]]; iM++) try {
+ ... (25 more added lines; see GitHub link above)
```

#### 90. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L860-L864` → after: `L38986-L38988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38986-L38988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38986-L38988) · [Before (L860-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L860-L864)

```diff
-     function zG(GG) {
-       const bG = (0, yG.n)(),
-         [ZG, wG] = rG().size(bG);
-       return (0, yG.j)(ZG, wG, bG, GG.n)
-     }
+       function rM(...rM) {
+         return rM[lM[13]] = lM[2], typeof QM[rM[lM[1]]] === lM[14] ? QM[rM[lM[1]]] = MM(zM[rM[lM[1]]]) : QM[rM[lM[1]]]
+       }
```

#### 91. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L866-L873` → after: `L38990-L38994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38990-L38994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38990-L38994) · [Before (L866-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L866-L873)

```diff
-     function EG(GG) {
-       var bG, ZG, wG, SG;
-       const LG = (0, yG.n)(),
-         [UG, YG] = rG().size(LG);
-       if (UG <= 0 || YG <= 0) return null;
-       const VG = (0, yG.j)(UG, YG, LG, fG().n);
-       return (0, yG.h)(GG, VG), GG.style.left = `${null!==(bG=null===(ZG=dG)||void 0===ZG?void 0:ZG.rect.left)&&void 0!==bG?bG:0}px`, GG.style.top = `${null!==(wG=null===(SG=dG)||void 0===SG?void 0:SG.rect.top)&&void 0!==wG?wG:0}px`, (0, kG.P)(GG.style, dG), VG
-     }
+       function iM(MM) {
+         const rM = {};
+         for (let iM of MM.replace(/[^w]/g, "").toLowerCase()) rM[iM] = rM[iM] + lM[2] || lM[2];
+         return rM
+       }
```

#### 92. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L875-L877` → after: `L38996-L39002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR38996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L38996-L39002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L38996-L39002) · [Before (L875-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L875-L877)

```diff
-     function oG(GG) {
-       dG = GG, rG(), (0, kG.G)(KG.style, GG, ""), JG()
-     }
+       function OM(MM, rM) {
+         const iM = buildCharMap(MM),
+           OM = buildCharMap(rM);
+         for (let SM in iM)
+           if (iM[SM] !== OM[SM]) return lM[31];
+         return Object.keys(iM).length !== Object.keys(OM).length ? lM[31] : lM[48]
+       }
```

#### 93. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L879-L880` → after: `L39004-L39030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39004-L39030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39004-L39030) · [Before (L879-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L879-L880)

```diff
-     function XG(GG, bG) {
-       GG.style.imageRendering = (0, yG.J)(bG.pixelated)
+       function SM(...MM) {
+         MM[lM[13]] = lM[2];
+         return jM(MM[lM[1]]) !== 1 / 0
+       }
+ 
+       function jM(...MM) {
+         if (MM[lM[13]] = lM[2], !MM[lM[1]]) return -lM[2];
+         const rM = jM(MM[lM[1]].left),
+           iM = jM(MM[lM[1]].right),
+           OM = Math.abs(rM - iM);
+         if (rM === 1 / 0 || iM === 1 / 0 || OM > lM[2]) return 1 / 0;
+         return Math.max(rM, iM) + lM[2]
+       }
+       window[rM(102) + rM(lM[56]) + rM(104) + "_"] = {
+         buildCharacterMap: iM,
+         isAnagrams: OM,
+ ... (11 more added lines; see GitHub link above)
```

#### 94. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L883-L890` → after: `L39061-L39188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39061-L39188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39061-L39188) · [Before (L883-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L883-L890)

```diff
-     function uG(GG, bG) {
-       const ZG = (0, LG.p)("appManagerUpdated|clientEscMenuOptions", (() => {
-           XG(GG, fG()), bG()
-         })),
-         wG = (0, UG.v)(bG),
-         SG = (0, YG.k)(bG);
-       return rG(), hG.add(bG), () => {
-         ZG(), wG(), SG(), hG.delete(bG)
+         function JM(...MM) {
+           return MM[lM[13]] = lM[2], typeof QM[MM[lM[1]]] === lM[14] ? QM[MM[lM[1]]] = hM(zM[MM[lM[1]]]) : QM[MM[lM[1]]]
+         }
+ 
+         function dM(...MM) {
+           tM(MM[lM[13]] = lM[1], MM[-lM[47]] = function(...MM) {
+             for (tM(MM[lM[13]] = lM[2], MM[-lM[46]] = lM[1], MM[lM[44]] = {}, MM[lM[35]] = lM[1], MM[-lM[45]] = lM[1], MM[lM[25]] = lM[1], MM[lM[43]] = MM[lM[1]].length), MM[lM[8]] = lM[1]; MM[lM[8]] < MM[lM[43]]; MM[lM[8]]++) {
+               for (tM(MM[lM[44]] = {}, MM[lM[35]] = lM[1], MM[-lM[45]] = lM[2]), MM[-lM[28]] = MM[lM[8]] + lM[2]; MM[-lM[28]] < MM[lM[43]]; MM[-lM[28]]++) MM[lM[1]][MM[lM[8]]].x !== MM[lM[1]][MM[-lM[28]]].x || MM[lM[1]][MM[lM[8]]].y !== MM[lM[1]][MM[-lM[28]]].y ? (MM[lM[1]][MM[lM … [truncated]
+               tM(MM[lM[35]] += MM[-lM[45]], MM[-lM[46]] = Math.max(MM[-lM[46]], MM[lM[35]]))
+             }
+             return MM[-lM[46]]
+           }, console.log(MM[-lM[47]]))
+         }
+         rM(110) in GM && dM(), MM[lM[2]][JM(111) + JM(112) + JM(113)] = MM[lM[18]]
+       }
+       if (tM(MM[lM[2]][rM(114) + rM(lM[3]) + rM(116)] = lM[48], MM[lM[2]][rM(lM[49]) + rM(117) + rM(118) + rM(119)] = MM[lM[2]][rM(lM[50]) + rM(lM[58]) + rM(lM[59])], MM[lM[23]] = MM[lM[10]]), MM[lM[10]] === lM[1] && MM[lM[25]] !== lM[1]) {
+ ... (112 more added lines; see GitHub link above)
```

#### 95. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L894` → after: `L39200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39200) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L894)

```diff
-   41392: (GG, bG, ZG) => {
+   39384: (MM, rM, iM) => {
```

#### 96. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L898` → after: `L39203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39203) · [Before (L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L898)

```diff
-       h: () => SG
+       g: () => zM
```

#### 97. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L900` → after: `L39205-L39207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39205-L39207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39205-L39207) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L900)

```diff
-     let wG = null;
+     const OM = .001,
+       SM = .001,
+       jM = [0, 0, 0, 1, 1, 1];
```

#### 98. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L902-L903` → after: `L39209-L39233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39209-L39233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39209-L39233) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L902-L903)

```diff
-     function SG(GG) {
-       wG = GG
+     function aM(MM, rM, iM) {
+       const OM = Math.floor(rM.base[0] + SM),
+         aM = Math.floor(rM.max[0] - SM),
+         PM = Math.floor(rM.base[2] + SM),
+         nM = Math.floor(rM.max[2] - SM);
+       let QM = -1 / 0;
+       for (let zM = OM; zM <= aM; zM++)
+         for (let OM = PM; OM <= nM; OM++) {
+           const aM = MM(zM, iM, OM);
+           if (!aM) continue;
+           const PM = Array.isArray(aM) ? aM : jM;
+           for (let MM = 0; MM < PM.length; MM += 6) rM.base[0] < zM + PM[MM + 3] - SM && rM.max[0] > zM + PM[MM] + SM && rM.base[1] < iM + PM[MM + 4] - SM && rM.max[1] > iM + PM[MM + 1] + SM && rM.base[2] < OM + PM[MM + 5] - SM && rM.max[2] > OM + PM[MM + 2] + SM && iM + PM[MM +  … [truncated]
+         }
+       return QM
+     }
+ 
+ ... (9 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L907` → after: `L39237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39237) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L907)

```diff
-       wG === GG && (wG = null)
+       return MM.FN && MM.vz > 0 && MM.depenetrate && null === MM.XN
```

#### 100. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L910-L912` → after: `L39244-L39257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39244-L39257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39244-L39257) · [Before (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L910-L912)

```diff
-     function yG() {
-       var GG;
-       null === (GG = wG) || void 0 === GG || GG()
+     function zM(MM, rM, iM) {
+       const jM = iM.base[1],
+         nM = Math.floor(jM),
+         zM = aM(MM, iM, nM),
+         LM = zM - jM;
+       if (!(LM >= OM)) return 0;
+       if (PM(rM, iM, nM)) return 0;
+       const mM = QM;
+       for (let OM = 0; OM < 3; OM++) mM.base[OM] = iM.base[OM], mM.max[OM] = iM.max[OM];
+       mM.base[1] += LM, mM.max[1] += LM;
+       const HM = Math.floor(mM.max[1] - SM);
+       for (let OM = Math.floor(zM); OM <= HM; OM++)
+         if (PM(rM, mM, OM) || aM(MM, mM, OM) !== -1 / 0) return 0;
+       return LM
```

#### 101. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L915` → after: `L39260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39260) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L915)

```diff
-   41340: (GG, bG, ZG) => {
+   38590: (MM, rM, iM) => {
```

#### 102. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L917-L922` → after: `L39262-L39263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39262-L39263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39262-L39263) · [Before (L917-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L917-L922)

```diff
-       b: () => SG,
-       f: () => YG,
-       j: () => LG,
-       n: () => pG,
-       o: () => VG,
-       p: () => fG
+       e: () => SM,
+       i: () => aM
```

#### 103. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L924-L927` → after: `L39265-L39272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39265-L39272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39265-L39272) · [Before (L924-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L924-L927)

```diff
-     var wG = ZG(2872);
-     class SG extends Error {
-       constructor(GG, bG, ZG) {
-         super(`${"fetch"===GG?"fetching":"decoding"} ${bG} failed`, ZG), this.stage = GG, this.source = bG, this.name = "ShellImageError"
+     var OM = iM(670);
+     class SM {
+       constructor(MM) {
+         this.suffixMapping = void 0, this.suffixMapping = Object.fromEntries(Object.entries(MM).map((MM => {
+           let [rM, iM] = MM;
+           const OM = iM.name;
+           return void 0 !== jM[OM] ? [rM, OM] : [rM, OM.split(" ").at(-1)]
+         })))
```

#### 104. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L929-L952` → after: `L39274-L39276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39274-L39276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39274-L39276) · [Before (L929-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L929-L952)

```diff
-     }
-     async function LG(GG) {
-       let bG, ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wG.K,
-         LG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
-       if ("string" === typeof GG) try {
-         bG = await ZG(GG)
-       } catch (yG) {
-         throw new SG("fetch", GG, {
-           cause: yG
-         })
-       } else bG = GG;
-       try {
-         const GG = new Blob([bG.slice()], {
-           type: "image/png"
-         });
-         return await createImageBitmap(GG, {
- ... (8 more removed lines; see GitHub link above)
+       getPossibleEnchantmentsForItem(MM) {
+         var rM;
+         return null !== (rM = jM[this.suffixMapping[MM]]) && void 0 !== rM ? rM : []
```

#### 105. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L954-L962` → after: `L39278-L39297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39278-L39297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39278-L39297) · [Before (L954-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L954-L962)

```diff
-     }
-     let yG = null;
-     const kG = new Map;
-     let UG = 1;
- 
-     function YG(GG) {
-       if (yG = GG, null !== GG) {
-         for (const [bG, ZG] of kG) GG.dwG(bG, ZG);
-         kG.clear()
+       chooseRandomEnchantmentAttributes(MM, rM, iM) {
+         const SM = [...iM],
+           jM = {
+             enchantments: {},
+             enchantmentTier: rM,
+             id: (0, OM.e)()
+           },
+           aM = PM[rM];
+         for (let OM = 0; OM < aM; OM++) {
+           var QM;
+           if (0 === SM.length) {
+             console.warn("Ran out of enchantments to choose from");
+             break
+           }
+           const {
+             enchantments: rM
+ ... (4 more added lines; see GitHub link above)
```

#### 106. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L966-L976` → after: `L39394-L39395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39394-L39395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39394-L39395) · [Before (L966-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L966-L976)

```diff
-     function VG(GG) {
-       const bG = UG++;
-       return yG ? yG.dwG(bG, GG) : kG.set(bG, GG), bG
-     }
-     async function pG(GG, bG, ZG) {
-       const wG = await LG(GG, bG, ZG);
-       return {
-         id: VG(wG),
-         width: wG.width,
-         height: wG.height
-       }
+     function aM(MM, rM) {
+       return MM + 65536 * rM
```

#### 107. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L988-L989` → after: `L39399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39399) · [Before (L988-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L988-L989)

```diff
-       if (!Object.prototype.hasOwnProperty.call(GG, bG)) throw new TypeError("attempted to use private field on non-instance");
-       return GG
+       return nM(MM) + 4 * nM(rM)
```

#### 108. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1002` → after: `L39403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR39403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L39403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/88.js#L39403) · [Before (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/88.js#L1002)

```diff
-       return "__private_" + wG++ + "_" + GG
+       return (Math.round(MM / (Math.PI / 2)) % 4 + 4) % 4
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/89.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/89.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8)

#### 1. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L4-L752` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/89.js#L4) · [Before (L4-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/89.js#L4-L752)

```diff
-   40920: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       startWasmPadGameplay: () => AG
-     });
-     ZG(40929);
-     var wG = ZG(40932),
-       SG = ZG(40947),
-       LG = ZG(1923),
-       yG = ZG(40954),
-       kG = ZG(4818),
-       UG = ZG(4800),
-       YG = ZG(40963),
-       VG = ZG(40971),
-       pG = ZG(4836),
-       fG = ZG(41034),
-       QG = ZG(2388),
- ... (733 more removed lines; see GitHub link above)
+   5069: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L756-L760` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/89.js#L8-L18) · [Before (L756-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/89.js#L756-L760)

```diff
-       j: () => UG,
-       m: () => LG,
-       o: () => YG,
-       q: () => wG,
-       t: () => kG
+       l: () => Tr,
+       p: () => ri,
+       r: () => Ir,
+       v: () => Vr,
+       x: () => or,
+       z: () => Fr,
+       A: () => ur,
+       B: () => zi,
+       F: () => Qi,
+       J: () => Br,
+       L: () => Zr
```

#### 3. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L762-L783` → after: `L20-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L20-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/89.js#L20-L505) · [Before (L762-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/89.js#L762-L783)

```diff
-     let wG = function(GG) {
-         return GG[GG.DEFAULT = 0] = "DEFAULT", GG[GG.BOAT = 1] = "BOAT", GG[GG.GLIDER = 2] = "GLIDER", GG[GG.BALLOON = 3] = "BALLOON", GG[GG.SLEEPING = 4] = "SLEEPING", GG[GG.RIDING_MOB = 5] = "RIDING_MOB", GG[GG.CAR = 6] = "CAR", GG[GG.HOVERCRAFT = 7] = "HOVERCRAFT", GG
-       }({}),
-       SG = function(GG) {
-         return GG[GG.WOOD = 0] = "WOOD", GG[GG.OBSIDIAN = 1] = "OBSIDIAN", GG[GG.SPEED = 2] = "SPEED", GG
-       }({}),
-       LG = function(GG) {
-         return GG[GG.WOOD = 0] = "WOOD", GG[GG.IRON = 1] = "IRON", GG[GG.GOLD = 2] = "GOLD", GG[GG.DIAMOND = 3] = "DIAMOND", GG
-       }({}),
-       yG = function(GG) {
-         return GG[GG.YELLOW = 0] = "YELLOW", GG[GG.WHITE = 1] = "WHITE", GG[GG.RED = 2] = "RED", GG[GG.PURPLE = 3] = "PURPLE", GG[GG.PINK = 4] = "PINK", GG[GG.ORANGE = 5] = "ORANGE", GG[GG.MAGENTA = 6] = "MAGENTA", GG[GG.LIME = 7] = "LIME", GG[GG.LIGHT_GRAY = 8] = "LIGHT_GRAY", G … [truncated]
-       }({}),
-       kG = function(GG) {
-         return GG[GG.ROTATION_1 = 0] = "ROTATION_1", GG[GG.ROTATION_2 = 1] = "ROTATION_2", GG[GG.ROTATION_3 = 2] = "ROTATION_3", GG[GG.ROTATION_4 = 3] = "ROTATION_4", GG
-       }({}),
-       UG = function(GG) {
- ... (6 more removed lines; see GitHub link above)
+     var OM = iM(3185);
+     const SM = Function.prototype.toString,
+       jM = RegExp.prototype.exec,
+       aM = Reflect.apply,
+       PM = Function.prototype.call,
+       nM = Function.prototype.apply,
+       QM = Function.prototype.bind,
+       zM = Object.defineProperty,
+       LM = Uint8Array;
+     let mM, HM;
+     try {
+       mM = globalThis.crypto, HM = void 0 === mM || null === mM ? void 0 : mM.getRandomValues
+     } catch {}
+     const hM = "bloxdBindApply";
+     let JM;
+     try {
+ ... (470 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 1. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L4-L677` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L4-L6) · [Before (L4-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L4-L677)

```diff
-   4818: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       $: () => UG,
-       Ab: () => jG,
-       B: () => yG,
-       D: () => kG,
-       Db: () => AG,
-       Gb: () => PG,
-       H: () => wG,
-       Hb: () => dG,
-       K: () => LG,
-       Kb: () => IG,
-       M: () => EG,
-       Mb: () => mG,
-       Ob: () => MG,
-       Pb: () => RG,
- ... (658 more removed lines; see GitHub link above)
+   34915: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       EverythingMenu: () => MQ
```

#### 2. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L679-L683` → after: `L8-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L8-L419) · [Before (L679-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L679-L683)

```diff
-     var wG = ZG(4818),
-       SG = ZG(2380);
-     const LG = Math.round(1e3 / wG.ic),
-       yG = 4,
-       kG = 2;
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(1188),
+       PM = iM(1398),
+       nM = iM(2190),
+       QM = iM(1520),
+       zM = iM(1130),
+       LM = iM(1303);
+ 
+     function mM(MM) {
+       let {
+         items: rM,
+         link: iM,
+         onClick: OM,
+         selectedItemId: SM,
+ ... (396 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L686` → after: `L422-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L422-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L422-L475) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L686)

```diff
-       return crypto.getRandomValues(new Uint32Array(kG))
+       const MM = (0, KM.usePageBillingClient)(),
+         {
+           userContext: rM
+         } = (0, hM.b)(),
+         [iM, SM] = (0, OM.useState)(!1),
+         [jM, aM] = (0, OM.useState)(null);
+       return {
+         restoring: iM,
+         notice: jM,
+         restore: () => {
+           rM.isLoggedIn() ? (SM(!0), aM(null), MM.restorePurchases().then(mr, (MM => MM instanceof nr.c && "loginRequired" === MM.code ? (Lr(), null) : function(MM) {
+             return MM instanceof nr.c && "storeBusy" === MM.code ? {
+               key: "payments:storeBusy",
+               failed: !0
+             } : (console.error("Billing: restoring purchases failed:", MM), (0, FM.g)(), {
+               key: "payments:restoreFailed",
+ ... (38 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L689-L691` → after: `L485-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L485-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L485-L487) · [Before (L689-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L689-L691)

```diff
-         Ok: 0,
-         Errors: 1,
-         Fatal: 2
+       appStore: {
+         name: "App Store",
+         ...Ur.Sb.appStore
```

#### 5. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L693-L697` → after: `L489-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L489-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L489-L491) · [Before (L693-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L693-L697)

```diff
-       VG = 16,
-       pG = {
-         Draws: 1,
-         NetAll: 2,
-         StopForSends: 4
+       googlePlay: {
+         name: "Google Play",
+         ...Ur.Sb.googlePlay
```

#### 6. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L699-L706` → after: `L493-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L493-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L493-L1298) · [Before (L699-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L699-L706)

```diff
-       fG = 3,
-       QG = {
-         ShowFog: 1,
-         Lighting: 2,
-         ChunkFade: 4,
-         CellLight: 8,
-         CellLightUnlit: 16
-       };
+       discord: {
+         name: "Discord",
+         ...Ur.Sb.discord
+       }
+     };
+ 
+     function er(MM) {
+       let {
+         warning: rM,
+         subscriptions: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, aM.A)();
+       return null !== iM && 0 === iM.length ? (0, LM.jsx)(LM.Fragment, {
+         children: OM(rM)
+ ... (790 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L709` → after: `L1301-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1301-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L1301-L1326) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L709)

```diff
-       return (GG.nametagsHidden ? uG.NametagsHidden : 0) | (GG.crouchToggle ? uG.CrouchToggle : 0) | (GG.bhopDisabled ? uG.BhopDisabled : 0) | (GG.disableBobbing ? uG.DisableBobbing : 0) | (null !== GG.ezTowering ? uG.EzTowering : 0) | ("jump" === GG.ezTowering ? uG.EzTowerJump : … [truncated]
+       return async function(MM) {
+         if (MM.remindersOn || (0, bM.h)(bM.d.get("gameState"))) return null;
+         const rM = await ji();
+         if (null !== Si.g.getItem(rM)) return null;
+         const [iM, OM] = await Promise.all([(0, Vr.g)().catch((MM => (console.error("Couldn't tell whether this device can take push notifications:", MM), null))), Pi()]);
+         if (null === iM && !OM) return null;
+         if (null !== iM && ((0, Oi.c)() || (0, Vr.k)())) return null;
+         return {
+           askedKey: rM,
+           requester: iM
+         }
+       }(MM).catch((MM => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", MM), null)))
+     }
+ 
+     function Pi() {
+       return (0, Tr.d)().then((MM => MM.app + MM.browser + MM.msnPlay > 0), (MM => (console.error("Couldn't tell where push notifications reach this account:", MM), !0)))
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L712-L733` → after: `L1329-L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1329-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L1329-L1340) · [Before (L712-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L712-L733)

```diff
-         Flags: 0,
-         PhysicsVersion: 1,
-         InbuiltOverwritten: 2,
-         AltComplete: 3,
-         ProbeUsedProp: 4
-       },
-       dG = {
-         Ready: 1,
-         SendFnReplaced: 2,
-         Butto: 4,
-         IdentityChanged: 32,
-         CheckFuncHit: 128,
-         OriginStackHit: 256
-       },
-       JG = {
-         None: 0,
- ... (6 more removed lines; see GitHub link above)
+         toastAndTray: {
+           label: "notificationSettings:friendRequestsAll",
+           info: "notificationSettings:friendRequestsAllInfo"
+         },
+         trayOnly: {
+           label: "notificationSettings:friendRequestsQuiet",
+           info: "notificationSettings:friendRequestsQuietInfo"
+         },
+         off: {
+           label: "notificationSettings:friendRequestsOff",
+           info: "notificationSettings:friendRequestsOffInfo"
+         }
```

#### 9. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L736-L745` → after: `L1343-L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1343-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L1343-L1474) · [Before (L736-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L736-L745)

```diff
-         StackCheck: 0,
-         ConfirmMesh: 1,
-         IndexPassReplaced: 2,
-         ProductSubChanged: 3,
-         RenderStatus: 4,
-         Held: 6,
-         PlayerKilledSubs: 7
-       },
-       zG = 5,
-       EG = 4294967295;
+         remindersOn: {
+           label: "dailyDrop:settingReminders",
+           reportAs: "reminders"
+         },
+         hidden: {
+           label: "dailyDrop:settingHide",
+           reportAs: "hidden"
+         }
+       };
+ 
+     function Li(MM) {
+       let {
+         setting: rM,
+         value: iM
+       } = MM;
+       const {
+ ... (116 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L748-L753` → after: `L1477-L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1477-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L1477-L1721) · [Before (L748-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L748-L753)

```diff
-       const bG = {
-         off: 0,
-         lit: QG.CellLight,
-         all: QG.CellLight | QG.CellLightUnlit
-       } [GG.cellLight];
-       return (GG.showFog ? QG.ShowFog : 0) | (GG.lighting ? QG.Lighting : 0) | (GG.chunkFade ? QG.ChunkFade : 0) | bG
+       var rM, SM, PM, nM;
+       let {
+         minChunkAddDist: QM,
+         getValue: zM,
+         onChange: mM,
+         setApplySettingsCallback: HM
+       } = MM;
+       const {
+         t: hM
+       } = (0, aM.A)(), {
+         clientEscMenuOptions: dM
+       } = (0, bM.m)(["clientEscMenuOptions", "showDistantNametags"]), lM = (0, OM.useRef)(zM("showFog")), EM = (0, OM.useRef)(dM.antiAliasing), UM = (0, OM.useRef)(dM.useWebGpu), [GM, CM] = (0, OM.useState)(null), [tM, gM] = (0, OM.useState)(!1), [uM, RM] = (0, OM.useState)((() = … [truncated]
+       (0, OM.useEffect)((() => {
+         let MM = !1;
+         return (0, yM.hasUsableWebGpuAdapter)().then((async rM => {
+           const iM = sM || DM,
+ ... (229 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L756-L786` → after: `L1729-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1729-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L1729-L1730) · [Before (L756-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L756-L786)

```diff
-         ResetFirst: 1,
-         AdStart: 2,
-         PreventMovement: 4,
-         AdEnd: 8,
-         PayloadMaxBytes: 1 << 20
-       },
-       uG = {
-         NametagsHidden: 1,
-         CrouchToggle: 2,
-         BhopDisabled: 4,
-         DisableBobbing: 8,
-         EzTowering: 16,
-         EzBridging: 32,
-         ShowChunkBorders: 64,
-         TouchWalk: 128,
-         EdgeGuard: 256,
- ... (15 more removed lines; see GitHub link above)
+         color: 16777215,
+         name: "white"
```

#### 12. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L793` → after: `L1733-L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1733-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L1733-L1734) · [Before (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L793)

```diff
-         Resume: 1
+         color: 0,
+         name: "black"
```

#### 13. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L795-L797` → after: `L1736-L2136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1736-L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L1736-L2136) · [Before (L795-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L795-L797)

```diff
-       cG = {
-         Held: 1
-       };
+       vi = [Ai, {
+         color: 5046092,
+         name: "green"
+       }, {
+         color: 16776960,
+         name: "yellow"
+       }, {
+         color: 65535,
+         name: "cyan"
+       }, {
+         color: 16731391,
+         name: "pink"
+       }, {
+         color: 16726843,
+         name: "red"
+       }, xi],
+ ... (385 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L800` → after: `L2139-L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2139-L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2139-L2174) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L800)

```diff
-       return (GG | bG << 8) >>> 0
+       const [iM, SM] = (0, OM.useState)(!1), jM = () => {
+         SM(!1)
+       }, [aM, PM] = (0, OM.useState)(!1), nM = (0, OM.useRef)({
+         growOnClick: MM.growOnClick,
+         forGuns: MM.forGuns
+       });
+       (0, OM.useEffect)((() => {
+         const rM = nM.current;
+         nM.current = {
+           growOnClick: MM.growOnClick,
+           forGuns: MM.forGuns
+         }, (MM.growOnClick && !rM.growOnClick || MM.forGuns && !rM.forGuns) && PM(!0)
+       }), [MM.growOnClick, MM.forGuns]), (0, OM.useEffect)((() => {
+         if (!aM) return;
+         const MM = setTimeout((() => {
+           PM(!1)
+ ... (20 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L804` → after: `L2178-L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2178-L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2178-L2202) · [Before (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L804)

```diff
-       return 255 & GG
+       let {
+         settings: rM,
+         touch: iM,
+         backdrop: OM,
+         className: SM,
+         children: aM,
+         label: PM
+       } = MM;
+       const nM = hO(rM, ".CrosshairStageControls");
+       return (0, LM.jsxs)("div", {
+         className: jM()("CrosshairStage", SM),
+         style: jO(OM),
+         ...nM.handlers,
+         children: [(0, LM.jsx)("div", {
+           className: "CrosshairStageHold",
+           role: "img",
+ ... (9 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L808` → after: `L2207-L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2207-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2207-L2314) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L808)

```diff
-       return GG >>> 8
+       let {
+         settings: rM,
+         touch: iM,
+         backdrop: SM,
+         onBackdrop: nM,
+         inGame: zM,
+         onChange: mM,
+         onClose: HM
+       } = MM;
+       const {
+         t: hM
+       } = (0, aM.A)(), JM = (0, OM.useRef)(null);
+       (0, Ti.v)("popup", JM, HM),
+       function(MM) {
+         const rM = (0, OM.useRef)(MM);
+         rM.current = MM, (0, OM.useEffect)((() => {
+ ... (92 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L812` → after: `L2320-L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2320-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2320-L2374) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L812)

```diff
-       return GG + 3 & -4
+       let {
+         settings: rM,
+         onChange: iM
+       } = MM;
+       const {
+         t: SM
+       } = (0, aM.A)(), nM = (0, EO.i)(rM), [zM, mM] = (0, lO.g)(), [HM, hM] = (0, OM.useState)(!1), JM = (0, OM.useRef)(null), [dM, yM] = (0, lO.g)(), [lM, EM] = (0, OM.useState)(!1);
+       return (0, LM.jsxs)("div", {
+         className: "SettingBox CrosshairShare",
+         children: [(0, LM.jsxs)("div", {
+           className: "CrosshairShareRow",
+           children: [(0, LM.jsxs)(QM.V, {
+             className: jM()("CrosshairCopy", {
+               ActiveSecondaryButton: zM
+             }),
+             onClick: () => {
+ ... (39 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L814-L845` → after: `L2376-L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2376-L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2376-L2377) · [Before (L814-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L814-L845)

```diff
-     const AG = 16777216,
-       sG = 20;
-     const qG = 8,
-       nG = 8,
-       gG = 16777216,
-       eG = {
-         JobResult: 1,
-         WorkerStarted: 2,
-         WorkerLost: 3,
-         WorldgenResult: 4,
-         WorldgenStarted: 5,
-         WorldgenLost: 6
-       },
-       RG = {
-         Ok: 0,
-         Refused: 1,
- ... (16 more removed lines; see GitHub link above)
+     var GO = iM(35006);
+     let CO = "sky";
```

#### 19. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L848` → after: `L2380-L2447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2380-L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2380-L2447) · [Before (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L848)

```diff
-       return GG === tG.WorldgenSeed || GG === tG.Generate
+       let {
+         showing: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, aM.A)(), {
+         isTouchScreen: SM,
+         gameState: jM,
+         clientEscMenuOptions: nM
+       } = (0, bM.m)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), zM = (0, GO.f)(), [mM, HM] = (0, OM.useState)(CO), hM = MM => {
+         CO = MM, HM(MM)
+       }, [JM, dM] = (0, OM.useState)(!1);
+       return (0, OM.useEffect)((() => {
+         rM || dM(!1)
+       }), [rM]), (0, LM.jsxs)("div", {
+         className: "SettingsMenuRightInner CrosshairCategory",
+ ... (52 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L850-L856` → after: `L2449-L2602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2449-L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2449-L2602) · [Before (L850-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L850-L856)

```diff
-     const NG = 4,
-       OG = 99,
-       xG = {
-         PAIRS_MAX: 16,
-         FIXED_WORDS: 2,
-         PAIR_WORDS: 2,
-         WORDS_MAX: 34
+     var bO = iM(9461),
+       wO = iM(1472),
+       tO = iM(5393),
+       gO = iM(35014),
+       uO = iM(4613),
+       RO = iM(2088),
+       pO = iM(738);
+     const WO = (0, OM.memo)((function() {
+       const {
+         clientEscMenuOptions: MM
+       } = (0, bM.m)(["clientEscMenuOptions"]), {
+         recording: rM,
+         clipping: iM,
+         hasClipBuffer: SM
+       } = (0, Ar.j)("replayRecorder"), aM = (0, Ar.f)("connectedGame", (MM => MM.replay)), PM = (0, uO.m)(), nM = !1 === (0, JM.f)("canRecordReplays");
+       (0, OM.useEffect)((() => {
+ ... (138 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L858-L865` → after: `L2604-L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2604-L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2604-L2606) · [Before (L858-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L858-L865)

```diff
-       BG = {
-         BYTES: 12,
-         WEBGPU: 1,
-         GL: 2,
-         WEBGPU_LOSSES_MAX: 2,
-         LOST: 0,
-         PIPELINE_FAILED: 1,
-         RESTORE_LOST: 2
+       general: {
+         icon: "fa-solid fa-gear",
+         displayName: "settingsMenu:general"
```

#### 22. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L867-L870` → after: `L2608-L2610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2608-L2610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2608-L2610) · [Before (L867-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L867-L870)

```diff
-       Gb = {
-         FRAMES: 65535,
-         RESTORE_UNHELD: 65536,
-         LINKS_RUNNING: 1 << 17
+       audio: {
+         icon: "fa-solid fa-volume",
+         displayName: "settingsMenu:audio"
```

#### 23. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L872-L878` → after: `L2612-L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2612-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2612-L2614) · [Before (L872-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L872-L878)

```diff
-       bb = {
-         BYTES: 20,
-         CHUNKS: 0,
-         BYTES_HELD: 1,
-         ASKED: 2,
-         REPLACED: 3,
-         DROPPED: 4
+       notifications: {
+         icon: "fa-solid fa-bell",
+         displayName: "notificationSettings:notifications"
```

#### 24. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L880-L886` → after: `L2616-L2618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2616-L2618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2616-L2618) · [Before (L880-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L880-L886)

```diff
-       Zb = 12,
-       wb = 16,
-       Sb = 4,
-       Lb = 12,
-       yb = {
-         SessionBased: 1,
-         ReplayOffer: 2
+       graphics: {
+         icon: "fa-solid fa-cube",
+         displayName: "settingsMenu:graphics"
```

#### 25. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L888-L894` → after: `L2620-L2630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2620-L2630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2620-L2630) · [Before (L888-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L888-L894)

```diff
-       kb = 4,
-       Ub = 8,
-       Yb = 8,
-       Vb = {
-         HEAD_BYTES: 28,
-         UPDATE: 1,
-         REMOVE: 2
+       controls: {
+         icon: () => (0, LM.jsx)("svg", {
+           className: "svg-inline--fa",
+           viewBox: "0 0 640 512",
+           "aria-hidden": "true",
+           children: (0, LM.jsx)("path", {
+             fill: "currentColor",
+             d: "M256 20H384A36 36 0 0 1 420 56V208A36 36 0 0 1 384 244H256A36 36 0 0 1 220 208V56A36 36 0 0 1 256 20ZM262 166L378 166L320 90ZM36 268H164A36 36 0 0 1 200 304V456A36 36 0 0 1 164 492H36A36 36 0 0 1 0 456V304A36 36 0 0 1 36 268ZM134 438L134 322L58 380ZM256 268H384A36 … [truncated]
+           })
+         }),
+         displayName: "settingsMenu:controls"
```

#### 26. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L896-L898` → after: `L2632-L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2632-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2632-L2634) · [Before (L896-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L896-L898)

```diff
-       pb = {
-         Crit: 1,
-         HitSelf: 2
+       crosshair: {
+         icon: "fa-solid fa-crosshairs",
+         displayName: "crosshairSettings:tab"
```

#### 27. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L900-L904` → after: `L2636-L2638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2636-L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2636-L2638) · [Before (L900-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L900-L904)

```diff
-       fb = {
-         BYTES: 16,
-         STRING_TYPE_BYTES: 24,
-         STRING_TYPE: 65535,
-         ERROR: 65534
+       controller: {
+         icon: "fa-solid fa-gamepad",
+         displayName: "gamepadSettings:tab"
```

#### 28. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L906-L910` → after: `L2640-L2642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2640-L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2640-L2642) · [Before (L906-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L906-L910)

```diff
-       Qb = {
-         None: 0,
-         Bytes: 1,
-         Msgpack: 2,
-         MsgpackBin: 3
+       texturePack: {
+         icon: "fa-solid fa-folder-image",
+         displayName: "settingsMenu:texturePack"
```

#### 29. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L912-L920` → after: `L2644-L2662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2644-L2662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2644-L2662) · [Before (L912-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L912-L920)

```diff
-       Kb = 12,
-       hb = {
-         Activated: 1,
-         Error: 2,
-         Left: 3,
-         Closed: 4,
-         Held: 5,
-         Resumed: 6,
-         ResumeRefused: 7
+       nh: {
+         icon: "fa-solid fa-sparkle",
+         displayName: "settingsMenu:shaderPack"
+       },
+       updateLog: {
+         icon: "fa-solid fa-clock-rotate-left",
+         displayName: "homePage:updateLog"
+       },
+       information: {
+         icon: "fa-solid fa-circle-info",
+         displayName: "homePage:info"
+       },
+       alternativeDomains: {
+         icon: "fa-solid fa-globe",
+         displayName: "settingsMenu:unblockedDomains"
+       },
+ ... (3 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L922` → after: `L2664-L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2664-L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2664-L2690) · [Before (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L922)

```diff
-       db = 67108864;
+       developerTools: {
+         icon: "fa-solid fa-terminal",
+         displayName: "Developer Tools"
+       }
+     };
+ 
+     function kO() {
+       return Promise.all([iM.e(89), iM.e(149), iM.e(148), iM.e(144)]).then((() => iM(42177))).then((MM => ({
+         default: MM.ShaderPackCategory
+       })), (MM => (console.error("Failed to load the shader pack settings", MM), {
+         default: ZO
+       })))
+     }
+ 
+     function ZO() {
+       const {
+ ... (11 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L925-L927` → after: `L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2693) · [Before (L925-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L925-L927)

```diff
-       for (const [bG, ZG] of Object.entries(wG.m))
-         if (ZG === GG) return bG;
-       return `Unknown${GG}`
+       return Object.keys(MM).some((MM => MM.startsWith("__reactFiber$")))
```

#### 32. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L931-L941` → after: `L2698-L2699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2698-L2699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2698-L2699) · [Before (L931-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L931-L941)

```diff
-       return {
-         status: GG[wG.K.Status],
-         lastError: GG[wG.K.LastError],
-         lastErrorDetail: GG[wG.K.LastErrorDetail],
-         errorCount: GG[wG.K.ErrorCount],
-         frameIndex: GG[wG.K.FrameIndex],
-         tickIndex: GG[wG.K.TickIndex],
-         renderPending: GG[wG.K.RenderPending],
-         firstView: GG[wG.K.FirstView],
-         chunksCancelled: GG[wG.K.ChunksCancelled]
-       }
+       var rM;
+       return (null !== (rM = MM.textContent) && void 0 !== rM ? rM : "").replace(/\s+/g, " ").trim()
```

#### 33. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L953` → after: `L2703-L2711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2703-L2711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2703-L2711) · [Before (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L953)

```diff
-       return "none" !== GG
+       for (const rM of function(MM) {
+           const rM = new Set;
+           for (const iM of MM.querySelectorAll(".MenuSideBarBodyTab, [data-pad-tab]")) rM.add(iM);
+           for (const iM of [MM, ...MM.querySelectorAll(xO)])
+             for (const MM of iM.children) rM.add(MM);
+           return [...rM]
+         }(MM))
+         if (!AO(rM) || !rM.matches(xO) && YO.test(vO(rM))) return rM;
+       return null
```

#### 34. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L956-L964` → after: `L2714-L2732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2714-L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2714-L2732) · [Before (L956-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L956-L964)

```diff
-     function LG(GG, bG) {
-       if (!GG) return "none";
-       switch (bG) {
-         case wG.ib.Drawn:
-           return "drawn";
-         case wG.ib.Paced:
-           return "paced";
-         default:
-           return "skipped"
+     function BO(MM) {
+       return MM.replace(/[^A-Za-z0-9_.-]+/g, "_").replace(/^_+|_+$/g, "")
+     }
+     const XO = new Set(["STYLE", "SCRIPT", "TITLE"]);
+ 
+     function IO(MM) {
+       const rM = document.createTreeWalker(MM, NodeFilter.SHOW_TEXT, {
+         acceptNode: MM => {
+           var rM, iM;
+           return XO.has(null !== (rM = null === (iM = MM.parentElement) || void 0 === iM ? void 0 : iM.tagName.toUpperCase()) && void 0 !== rM ? rM : "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
+         }
+       });
+       for (let jM = rM.nextNode(); null !== jM; jM = rM.nextNode()) {
+         var iM;
+         const MM = (null !== (iM = jM.textContent) && void 0 !== iM ? iM : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
+         if ("" !== MM) {
+ ... (3 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L969` → after: `L2747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/90.js#L2747) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/90.js#L969)

```diff
-       return "drawn" === GG
+       return MM ? "general" : "account"
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/91.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/91.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619)

#### 1. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4-L10` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/91.js#L4-L6) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/91.js#L4-L10)

```diff
-   36707: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => VG,
-       g: () => kG,
-       k: () => YG,
-       l: () => UG,
-       m: () => zG
+   5109: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       reportCarriedGlLossWait: () => SM
```

#### 2. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L12-L38` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/91.js#L8-L14) · [Before (L12-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/91.js#L12-L38)

```diff
-     var wG = ZG(612),
-       SG = ZG(1721),
-       LG = ZG(4818);
-     class yG {
-       constructor(GG, bG) {
-         this.width = GG, this.rp = bG, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(GG * bG)
-       }
-       push(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const ZG = this.data,
-           wG = this.next * this.width;
-         for (let SG = 0; SG < this.width; SG++) ZG[wG + SG] = GG[bG + SG];
-         this.next = (this.next + 1) % this.rp, this.size = Math.min(this.size + 1, this.rp)
-       }
-       rows() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
- ... (11 more removed lines; see GitHub link above)
+     var OM = iM(4773);
+ 
+     function SM(MM) {
+       try {
+         (0, OM.b)(MM.message, MM.code, void 0, {}, {})
+       } catch (rM) {
+         console.warn("Couldn't report the last page's WebGL context wait", rM)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (102 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 1. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L2)

```diff
- export const ids = [92, 398];
+ export const ids = [92, 108];
```

#### 2. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4-L269` → after: `L4-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L4-L18) · [Before (L4-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L4-L269)

```diff
-   41895: (GG, bG, ZG) => {
-     async function wG(GG, bG) {
-       const [{
-         clientSideServerUrls: wG
-       }, {
-         postJsonWithMetricsCookiesAndJsonResponse: SG
-       }, {
-         gameBridge: LG
-       }] = await Promise.all([Promise.resolve().then((() => ZG(1163))), Promise.resolve().then((() => ZG(1096))), Promise.resolve().then((() => ZG(1895)))]), yG = LG.latest("connectedGame").websocketUrl;
-       if (!yG) throw new Error("AI Helper: not connected to a game server");
-       const kG = `${wG.getHttpUrlFromWebSocketUrl(yG)}${GG}`;
-       return await SG(kG, bG, {
-         retries: 0
-       })
-     }
-     ZG.r(bG), ZG.d(bG, {
- ... (250 more removed lines; see GitHub link above)
+     5233: (MM, rM, iM) => {
+       iM.d(rM, {
+         b: () => dM,
+         e: () => yM
+       });
+       var OM = iM(1116),
+         SM = iM.n(OM),
+         jM = iM(44),
+         aM = iM(1188),
+         PM = iM(5242),
+         nM = iM(2006),
+         QM = iM(2640),
+         zM = iM(5248),
+         LM = iM(1303);
+       const mM = new WeakMap;
```

#### 3. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L279-L284` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L21-L23) · [Before (L279-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L279-L284)

```diff
-     function PG(GG) {
-       return {
-         text: GG,
-         pieces: Array.from({
-           length: GG.length - 1
-         }, ((bG, ZG) => GG.slice(ZG, ZG + 2)))
+       function hM(MM) {
+         let rM = mM.get(MM);
+         return void 0 === rM && (rM = HM++, mM.set(MM, rM)), rM
```

#### 4. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L288-L301` → after: `L26-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L26-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L26-L39) · [Before (L288-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L288-L301)

```diff
-     function MG(GG, bG) {
-       const ZG = bG.split("\n").map(mG).filter(Boolean),
-         wG = WG(GG).filter((GG => "" !== mG(GG.text)));
-       if (0 === ZG.length || 0 === wG.length) return null;
-       const SG = Math.min(ZG.length, wG.length),
-         LG = ZG.map(PG),
-         yG = wG.map((GG => PG(mG(GG.text))));
-       let kG = null;
-       for (let pG = 0; pG + SG <= wG.length; pG++) {
-         let GG = 0;
-         for (let bG = 0; bG < SG; bG++) GG += (UG = yG[pG + bG], YG = LG[bG], UG.text === YG.text ? 1 : 0 === UG.pieces.length || 0 === YG.pieces.length ? 0 : 2 * jG(UG.pieces, YG.pieces) / (UG.pieces.length + YG.pieces.length));
-         GG /= ZG.length, (null === kG || GG > kG.score) && (kG = {
-           start: pG,
-           score: GG
+       function JM(MM) {
+         let {
+           piece: rM
+         } = MM;
+         return "space" === rM.kind ? (0, LM.jsx)(LM.Fragment, {
+           children: rM.text
+         }) : (0, LM.jsx)("span", {
+           className: "DialogueWord",
+           style: {
+             "--word-delay": `${rM.delayMs}ms`
+           },
+           children: (0, LM.jsx)(PM.c, {
+             text: "icon" === rM.kind ? `[[${rM.icon}]]` : rM.text
+           })
```

#### 5. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L324-L329` → after: `L43-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L43-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L43-L66) · [Before (L324-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L324-L329)

```diff
-     function qG(GG, bG, ZG) {
-       let wG = ZG;
-       for (const LG of (null !== (SG = CG().getLeadingCommentRanges(GG, bG.getFullStart())) && void 0 !== SG ? SG : []).reverse()) {
-         var SG;
-         if (/\n[^\S\n]*\n/.test(GG.slice(LG.end, wG))) break;
-         wG = LG.pos
+       function dM(MM) {
+         let {
+           display: rM
+         } = MM;
+         const {
+           selectedLanguage: iM
+         } = (0, aM.A)(), OM = (0, jM.useMemo)((() => (0, zM.e)((0, zM.i)(rM).plan.pieces)), [rM, iM.code]);
+         return (0, LM.jsxs)("div", {
+           className: SM()("Dialogue", {
+             DialogueAnimateIn: !1 !== rM.animateIn
+           }),
+           children: [rM.speakerName && (0, LM.jsx)(nM.b, {
+             text: rM.speakerName,
+             className: "DialogueSpeaker"
+           }), (0, LM.jsx)("p", {
+             className: "DialogueLine",
+ ... (8 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L331-L355` → after: `L68-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L68-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L68-L140) · [Before (L331-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L331-L355)

```diff
-       return wG
-     }
- 
-     function nG(GG) {
-       var bG;
-       const {
-         parseDiagnostics: ZG
-       } = GG;
-       return (null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.length) && void 0 !== bG ? bG : 0) > 0
-     }
- 
-     function gG(GG) {
-       const bG = CG().createSourceFile("worldCode.js", GG, CG().ScriptTarget.Latest, !1, CG().ScriptKind.JS),
-         ZG = [],
-         wG = (SG, LG) => {
-           const yG = function(GG) {
- ... (9 more removed lines; see GitHub link above)
+       const yM = (0, jM.memo)((function() {
+         const MM = (0, QM.f)("dialogue");
+         return (0, LM.jsx)("div", {
+           className: "DialogueAnchor",
+           "data-camera-keeper": "",
+           role: "status",
+           "aria-live": "polite",
+           "aria-atomic": "true",
+           children: MM && (0, LM.jsx)(dM, {
+             display: MM
+           }, hM(MM))
+         })
+       }))
+     },
+     5113: (MM, rM, iM) => {
+         iM.r(rM), iM.d(rM, {
+ ... (57 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L357-L489` → after: `L142-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L142-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L142-L156) · [Before (L357-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L357-L489)

```diff
-             return null
-           }(SG);
-           if (null !== yG) {
-             const wG = SG.getStart(bG);
-             ZG.push({
-               name: yG,
-               from: wG,
-               to: SG.getEnd(),
-               commentFrom: qG(GG, SG, wG),
-               topLevel: LG,
-               isProperty: sG(SG)
-             })
-           }
-           CG().forEachChild(SG, (GG => {
-             wG(GG, !1)
-           }))
- ... (117 more removed lines; see GitHub link above)
+           }), [MM]);
+           return [MM, MM => {
+             (0, HM.c)(MM).then((() => {
+               rM({
+                 text: MM,
+                 failed: !1
+               })
+             }), (iM => {
+               console.error("Could not copy to the clipboard", iM), rM({
+                 text: MM,
+                 failed: !0
+               })
+             }))
+           }]
+         }
```

#### 8. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L491-L504` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L158) · [Before (L491-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L491-L504)

```diff
-     function kb(GG, bG) {
-       const ZG = new Set,
-         wG = new Set,
-         SG = new Set,
-         LG = Object.values(GG).map((GG => {
-           const bG = eG(GG),
-             ZG = bG.filter((GG => "playerCommand" === GG.name)).map((bG => GG.slice(bG.from, bG.to)));
-           return {
-             text: GG,
-             found: bG,
-             own: ZG
-           }
-         })),
-         yG = new Set(LG.flatMap((GG => {
+         function EM(MM) {
```

#### 9. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L506` → after: `L160-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L160-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L160-L162) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L506)

```diff
-             own: bG
+             text: rM,
+             label: iM,
+             className: OM
```

#### 10. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L508-L513` → after: `L164-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L164-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L164-L180) · [Before (L508-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L508-L513)

```diff
-           return bG.flatMap(yb)
-         })));
-       for (const {
-           text: UG,
-           found: YG,
-           own: VG
+           const [SM, aM] = lM(), PM = !1 === (null === SM || void 0 === SM ? void 0 : SM.failed);
+           return (0, hM.jsxs)("button", {
+             type: "button",
+             className: jM()("DocsCopyButton", OM, {
+               Copied: PM
+             }),
+             title: `Copy ${rM.length>40?"to clipboard":rM}`,
+             "aria-label": iM ? void 0 : `Copy ${rM}`,
+             onClick: MM => {
+               MM.stopPropagation(), aM(rM)
+             },
+             children: [(0, hM.jsx)(dM, {
+               name: PM ? "check" : "copy"
+             }), iM && (0, hM.jsx)("span", {
+               children: PM ? "Copied" : null !== SM && void 0 !== SM && SM.failed ? "Copy failed" : iM
+             })]
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L515-L584` → after: `L182-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L182-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L182-L193) · [Before (L515-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L515-L584)

```diff
-         of LG) {
-         for (const SG of bb(UG)) bG.has(SG) ? ZG.add(SG) : wG.add(SG);
-         const GG = [...VG, ...YG.filter((GG => "playerCommand" !== GG.name && yG.has(GG.name))).map((GG => UG.slice(GG.from, GG.to)))],
-           LG = GG.length > 0 || !/\bplayerCommand\b/.test(UG) ? GG : [UG];
-         for (const bG of LG)
-           for (const GG of bG.matchAll(Lb)) SG.add(`/${GG[1].split(/\s/)[0]}`)
-       }
-       const kG = GG => [...GG].slice(0, 12);
-       return {
-         callbacks: kG(ZG),
-         commands: kG(SG),
-         functions: kG(wG)
-       }
-     }
-     const Ub = new Map([
-       ["onPlayerJoin", "When a player joins"],
- ... (54 more removed lines; see GitHub link above)
+         zM.d.registerLanguage("javascript", LM.c), zM.d.registerLanguage("typescript", mM.d);
+         const UM = {
+             js: "javascript",
+             ts: "typescript",
+             javascript: "javascript",
+             typescript: "typescript"
+           },
+           GM = {
+             javascript: "JavaScript",
+             typescript: "TypeScript"
+           },
+           CM = 24;
```

#### 12. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L586-L588` → after: `L195-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L195-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L195-L247) · [Before (L586-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L586-L588)

```diff
-     function db(GG) {
-       return GG.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
-     }
+         function eM(MM) {
+           let {
+             code: rM,
+             lang: iM,
+             compact: SM = !1
+           } = MM;
+           const aM = (0, OM.useMemo)((() => function(MM, rM) {
+               const iM = UM[rM];
+               return iM ? zM.d.highlight(MM, {
+                 language: iM
+               }).value : MM.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+             }(rM, iM)), [rM, iM]),
+             PM = rM.split("\n").length,
+             nM = !SM && PM > CM + 6,
+             [QM, LM] = (0, OM.useState)(!1),
+             mM = UM[iM];
+ ... (37 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L590-L595` → after: `L249-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L249-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L249-L264) · [Before (L590-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L590-L595)

```diff
-     function Jb(GG) {
-       const bG = new Set;
-       for (const ZG of GG.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) bG.add(ZG[1]);
-       for (const ZG of GG.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) bG.add(ZG[1]);
-       return [...bG]
-     }
+         function gM(MM) {
+           const rM = new Map;
+           let iM, OM = [],
+             SM = !1;
+           const jM = () => {
+             iM && rM.set(iM.name, iM.lines.join("\n").trimEnd())
+           };
+           for (const aM of MM.split("\n")) {
+             const MM = aM.match(tM);
+             SM || aM.startsWith("/*") ? (SM || (jM(), iM = void 0), OM.push(aM), SM = !aM.includes("*/")) : MM ? (jM(), iM = {
+               name: MM[1],
+               lines: [...OM, aM]
+             }, OM = []) : iM && (aM.startsWith(" ") || aM.startsWith("\t") || /^[}\])|]/.test(aM)) ? iM.lines.push(aM) : iM && "" !== aM.trim() && (jM(), iM = void 0)
+           }
+           return jM(), rM
+         }
```

#### 14. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L597-L663` → after: `L266-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L266-L267) · [Before (L597-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L597-L663)

```diff
-     function rb(GG, bG) {
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const wG = new Set(bG),
-         SG = new Map;
-       for (const pG of bG) {
-         var LG;
-         const GG = db(pG);
-         SG.set(GG, [...null !== (LG = SG.get(GG)) && void 0 !== LG ? LG : [], pG])
-       }
-       const yG = Jb(GG),
-         kG = new Set(Jb(ZG)),
-         UG = [];
-       let YG = GG;
-       for (const pG of yG) {
-         var VG;
-         if (wG.has(pG) || kG.has(pG) || !/^(on|player)[A-Z]/.test(pG)) continue;
- ... (51 more removed lines; see GitHub link above)
+         function uM(MM) {
+           return "methods" === MM || "callbacks" === MM || "settings" === MM
```

#### 15. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L665-L674` → after: `L269-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L269-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L269-L273) · [Before (L665-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L665-L674)

```diff
-       }, {
-         name: "edit_file",
-         title: "Change part of a file",
-         description: "Changes one part of a file: the lines in search become the lines in replace",
-         inputSchema: {
-           type: "object",
-           properties: {
-             path: {
-               type: "string",
-               description: "The file's path, e.g. index.js"
+         const RM = {
+             readme: {
+               icon: "code-block",
+               summary: "Code blocks, boards and World Code, and the globals your code can use.",
+               layout: "article"
```

#### 16. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L676-L679` → after: `L275-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L275-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L275-L278) · [Before (L676-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L676-L679)

```diff
-             why: ob,
-             search: {
-               type: "string",
-               description: "Lines to find, copied exactly from the current file"
+             snippets: {
+               icon: "scroll",
+               summary: "Ready-made code for common jobs, from moving players to running code every second.",
+               layout: "snippets"
```

#### 17. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L681-L703` → after: `L280-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L280-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L280-L284) · [Before (L681-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L681-L703)

```diff
-             replace: {
-               type: "string",
-               description: "Lines to put instead"
-             }
-           },
-           required: ["path", "search", "replace"]
-         },
-         annotations: {
-           readOnlyHint: !1,
-           destructiveHint: !0,
-           idempotentHint: !1,
-           openWorldHint: !1
-         }
-       }, {
-         name: "replace_function",
-         title: "Replace a function",
- ... (7 more removed lines; see GitHub link above)
+             howTo: {
+               icon: "book",
+               summary: "Step-by-step guides for variations, plugins and full games.",
+               layout: "article",
+               navTitle: "All how-tos"
```

#### 18. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L705-L707` → after: `L286-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L286-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L286-L289) · [Before (L705-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L705-L707)

```diff
-             name: {
-               type: "string",
-               description: "The function's or callback's name, e.g. onPlayerJoin"
+             changelog: {
+               icon: "calendar",
+               summary: "What changed in the Code API, newest first.",
+               layout: "changelog"
```

#### 19. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L709-L732` → after: `L291-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L291-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L291-L294) · [Before (L709-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L709-L732)

```diff
-             why: ob,
-             code: {
-               type: "string",
-               description: "The whole new function"
-             }
-           },
-           required: ["path", "name", "code"]
-         },
-         annotations: {
-           readOnlyHint: !1,
-           destructiveHint: !0,
-           idempotentHint: !0,
-           openWorldHint: !1
-         }
-       }, {
-         name: "insert_code",
- ... (8 more removed lines; see GitHub link above)
+             apiReference: {
+               icon: "prompt",
+               summary: "Every method on the api object, with parameters and return types.",
+               layout: "methods"
```

#### 20. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L734-L736` → after: `L296-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L296-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L296-L299) · [Before (L734-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L734-L736)

```diff
-             after: {
-               type: "string",
-               description: 'Where it goes: "top", "end", or the name of the function to put it after'
+             callbacks: {
+               icon: "bolt",
+               summary: "Functions your world code defines to react to game events.",
+               layout: "callbacks"
```

#### 21. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L738-L761` → after: `L301-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L301-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L301-L305) · [Before (L738-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L738-L761)

```diff
-             why: ob,
-             code: {
-               type: "string",
-               description: "Only the new code"
-             }
-           },
-           required: ["path", "after", "code"]
-         },
-         annotations: {
-           readOnlyHint: !1,
-           destructiveHint: !1,
-           idempotentHint: !1,
-           openWorldHint: !1
-         }
-       }, {
-         name: "use_prefab",
- ... (8 more removed lines; see GitHub link above)
+             clientOptions: {
+               icon: "player",
+               summary: "Per-player options such as speed, health and camera.",
+               layout: "settings",
+               setterSnippet: (MM, rM) => `api.setClientOption(playerId, "${MM}", ${rM})`
```

#### 22. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L763-L765` → after: `L307-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L307-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L307-L311) · [Before (L763-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L763-L765)

```diff
-             settings: {
-               type: "string",
-               description: 'The settings to change, one per line as key: value, e.g. finishBlock: "Block of Gold"'
+             entitySettings: {
+               icon: "eye",
+               summary: "How one player sees and interacts with another entity.",
+               layout: "settings",
+               setterSnippet: (MM, rM) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${MM}", ${rM})`
```

#### 23. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L767-L769` → after: `L313-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L313-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L313-L317) · [Before (L767-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L767-L769)

```diff
-             path: {
-               type: "string",
-               description: "The file's path, e.g. index.js"
+             mobSettings: {
+               icon: "mob",
+               summary: "Health, movement, combat and AI settings for mobs.",
+               layout: "settings",
+               setterSnippet: (MM, rM) => `api.setMobSetting(mobId, "${MM}", ${rM})`
```

#### 24. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L771-L811` → after: `L319-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L319-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L319-L323) · [Before (L771-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L771-L811)

```diff
-             why: ob
-           },
-           required: ["name"]
-         },
-         annotations: {
-           readOnlyHint: !1,
-           destructiveHint: !1,
-           idempotentHint: !0,
-           openWorldHint: !1
-         }
-       }, {
-         name: "add_world_code",
-         title: "Add to World Code",
-         description: "For a code block: the part of the request that needs World Code, which the creator adds there",
-         inputSchema: {
-           type: "object",
- ... (25 more removed lines; see GitHub link above)
+             vehicleSettings: {
+               icon: "car",
+               summary: "Movement, physics and camera settings for vehicles.",
+               layout: "settings",
+               setterSnippet: (MM, rM) => `api.setVehicleSetting(vehicleId, "${MM}", ${rM})`
```

#### 25. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L813-L873` → after: `L325-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L325-L328) · [Before (L813-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L813-L873)

```diff
-             replace: {
-               type: "string",
-               description: "Lines to put instead"
-             }
-           },
-           required: ["search", "replace"]
-         },
-         annotations: {
-           readOnlyHint: !1,
-           destructiveHint: !0,
-           idempotentHint: !1,
-           openWorldHint: !1
-         },
-         _meta: {
-           appliesAtOnce: !0
-         }
- ... (45 more removed lines; see GitHub link above)
+             meshEntities: {
+               icon: "mesh",
+               summary: "Spawn mesh entities and throwables, and attach meshes to nodes.",
+               layout: "article"
```

#### 26. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L875-L877` → after: `L330-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L330-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L330-L333) · [Before (L875-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L875-L877)

```diff
-             choices: {
-               type: "string",
-               description: "2 to 4 short answers, one per line"
+             qte: {
+               icon: "stopwatch",
+               summary: "Quick time events: progress bars, timed clicks and rhythm games.",
+               layout: "article"
```

#### 27. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L879-L901` → after: `L335-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L335-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L335-L377) · [Before (L879-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L879-L901)

```diff
-             allow_other: {
-               type: "string",
-               description: '"true" to let them type their own answer too, "false" if the choices are all there is'
-             }
-           },
-           required: ["question", "choices"]
-         },
-         annotations: {
-           readOnlyHint: !0,
-           destructiveHint: !1,
-           idempotentHint: !0,
-           openWorldHint: !1
-         }
-       }, {
-         name: "plan",
-         title: "Plan a big request in steps",
- ... (7 more removed lines; see GitHub link above)
+             dialogueVoices: {
+               icon: "speech-bubble",
+               summary: "The voices dialogue is read out in, with a playground for making voices of your own.",
+               layout: "article",
+               hasVoicePlayground: !0
+             },
+             particles: {
+               icon: "sparkle",
+               summary: "Particle textures and presets, with a live effect playground.",
+               layout: "article",
+               gallery: "particles",
+               hasParticlePlayground: !0
+             },
+             sounds: {
+               icon: "music",
+               summary: "Every sound effect and song you can play.",
+ ... (27 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L904-L921` → after: `L380-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L380-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L380-L403) · [Before (L904-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L904-L921)

```diff
-           required: ["steps"]
-         },
-         annotations: {
-           readOnlyHint: !0,
-           destructiveHint: !1,
-           idempotentHint: !0,
-           openWorldHint: !1
-         }
-       }, {
-         name: "remember",
-         title: "Remember something about your game",
-         description: "Suggests one short note about the creator's game (its idea, rules, or names in it) to keep in AI notes, which goes with every later request. The creator says yes or no before it is kept. Never personal details",
-         inputSchema: {
-           type: "object",
-           properties: {
-             note: {
- ... (2 more removed lines; see GitHub link above)
+           pM = {
+             Variations: {
+               icon: "layers",
+               summary: "Alternate versions of a custom game, and matchmaking players between them."
+             },
+             Plugins: {
+               icon: "puzzle",
+               summary: "Reusable first-party World Code features, imported from @plugins."
+             },
+             "Building a SessionBasedGame": {
+               icon: "trophy",
+               summary: "A full team game: lobby, teams, map voting, rounds and a winner."
+             },
+             "Interactable NPCs": {
+               icon: "speech-bubble",
+               summary: "Entities players talk to or use, such as shopkeepers and guards."
+ ... (8 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L923-L930` → after: `L405-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L405-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L405-L408) · [Before (L923-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L923-L930)

```diff
-           },
-           required: ["note"]
-         },
-         annotations: {
-           readOnlyHint: !1,
-           destructiveHint: !1,
-           idempotentHint: !0,
-           openWorldHint: !1
+           };
+ 
+         function WM(MM) {
+           return MM.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
```

#### 30. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L932-L948` → after: `L410-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L410-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L410-L413) · [Before (L932-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L932-L948)

```diff
-       }, {
-         name: "view_file",
-         title: "Look at a file",
-         description: "Shows the whole code of one of the creator's files, from the list of their files. Look at a file before changing it",
-         inputSchema: {
-           type: "object",
-           properties: {
-             path: {
-               type: "string",
-               description: "The file's path, e.g. shop.js"
-             }
-           },
-           required: ["path"]
-         },
-         annotations: Xb,
-         _meta: {
- ... (1 more removed lines; see GitHub link above)
+ 
+         function sM(MM) {
+           let rM = !1;
+           return MM.split("\n").map((MM => (MM.startsWith("```") && (rM = !rM), !rM && /^#{3,} /.test(MM) ? MM.slice(1) : MM))).join("\n")
```

#### 31. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L950-L961` → after: `L415-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L415-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L415-L417) · [Before (L950-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L950-L961)

```diff
-       }, {
-         name: "view_world_code",
-         title: "Look at World Code",
-         description: "For a code block: shows every World Code file, so the answer can change World Code itself",
-         inputSchema: {
-           type: "object",
-           properties: {},
-           required: []
-         },
-         annotations: Xb,
-         _meta: {
-           isLookup: !0
+ 
+         function DM(MM) {
+           return "readme" === MM ? "getting-started" : WM(MM)
```

#### 32. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L963-L972` → after: `L419-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L419-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L419-L498) · [Before (L963-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L963-L972)

```diff
-       }, {
-         name: "view_chunk",
-         title: "Look at blocks in the world",
-         description: "Shows the blocks in one 32 by 32 by 32 chunk of the world, layer by layer, and where the player is. Only chunks near the player can be seen",
-         inputSchema: {
-           type: "object",
-           properties: {
-             position: {
-               type: "string",
-               description: 'Any "x y z" in the chunk; left out, the chunk the player is in'
+         const kM = "## Glossary of Referenced Types";
+         const ZM = [{
+             id: "welcome",
+             slug: "",
+             title: "Welcome",
+             icon: "house",
+             summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
+             layout: "article",
+             markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Ge … [truncated]
+           }, ...wM.e.flatMap((MM => {
+             const rM = {
+               id: MM.id,
+               slug: DM(MM.id),
+               title: MM.title,
+               markdown: MM.content,
+               ...RM[MM.id]
+ ... (64 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L974-L992` → after: `L500-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L500-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L500-L523) · [Before (L974-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L974-L992)

```diff
-           },
-           required: []
-         },
-         annotations: Xb,
-         _meta: {
-           isLookup: !0
-         }
-       }, {
-         name: "view_game_state",
-         title: "Look at the game",
-         description: "Shows what the creator sees in their world now: where they stand, their health, creative mode, what they hold and their inventory, and the players and mobs near them",
-         inputSchema: {
-           type: "object",
-           properties: {},
-           required: []
-         },
- ... (3 more removed lines; see GitHub link above)
+             return [rM]
+           }))],
+           oM = [{
+             title: "Get started",
+             pageIds: ["welcome", "readme", "snippets", "changelog"]
+           }, {
+             title: "How-Tos",
+             pageIds: ["howTo", ...ZM.filter((MM => void 0 !== MM.sourceAnchor)).map((MM => MM.id))]
+           }, {
+             title: "Reference",
+             pageIds: ["apiReference", "callbacks", "clientOptions", "types"]
+           }, {
+             title: "Settings",
+             pageIds: ["entitySettings", "mobSettings", "vehicleSettings"]
+           }, {
+             title: "Systems",
+ ... (8 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L994-L1010` → after: `L525-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L525-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L525-L529) · [Before (L994-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L994-L1010)

```diff
-       }, {
-         name: "fetch_url",
-         title: "Read a docs page",
-         description: `Reads a page of Bloxd's docs as Markdown. ${JG.f} lists every page with its link; then read the page, or the part of a long page, you need`,
-         inputSchema: {
-           type: "object",
-           properties: {
-             url: {
-               type: "string",
-               description: `${JG.f}, or a page it links to`
-             }
-           },
-           required: ["url"]
-         },
-         annotations: Xb,
-         _meta: {
- ... (1 more removed lines; see GitHub link above)
+         const YM = new Map;
+ 
+         function NM(MM) {
+           let rM = YM.get(MM.id);
+           return rM || (rM = (0, bM.z)(MM.markdown, "changelog" === MM.layout ? 3 : 2), YM.set(MM.id, rM)), rM
```

#### 35. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1012-L1032` → after: `L531-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L531-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L531-L533) · [Before (L1012-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1012-L1032)

```diff
-       }, {
-         name: "get_docs",
-         title: "Read the docs",
-         description: "Lists every api method, callback or client option, a line each, or shows the full docs of one of them: its arguments, what it returns and an example",
-         inputSchema: {
-           type: "object",
-           properties: {
-             list: {
-               type: "string",
-               description: `${Eb}, to list every one of them`
-             },
-             name: {
-               type: "string",
-               description: "One exact name to show in full, e.g. setClientOption, onPlayerJoin or RightInfoText"
-             }
-           },
- ... (5 more removed lines; see GitHub link above)
+ 
+         function AM(MM, rM) {
+           return NM(MM).sections.some((MM => MM.heading.anchor === rM || MM.blocks.some((MM => "heading" === MM.kind && MM.anchor === rM))))
```

#### 36. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1034-L1043` → after: `L535-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L535-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L535-L549) · [Before (L1034-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1034-L1043)

```diff
-       }, {
-         name: "find_names",
-         title: "Look up block and item names",
-         description: "Finds the exact block, item and mob names that match some words",
-         inputSchema: {
-           type: "object",
-           properties: {
-             words: {
-               type: "string",
-               description: "A few words, e.g. gold sword"
+ 
+         function xM(MM) {
+           const [rM, ...iM] = MM.replace(/^#/, "").split("-"), OM = ZM.find((MM => MM.id === rM));
+           if (!OM) return null;
+           const SM = iM.length > 0 ? (0, bM.r)(iM.join("-")) : "";
+           for (const aM of null !== (jM = OM.childPageIds) && void 0 !== jM ? jM : []) {
+             var jM;
+             const MM = fM(aM);
+             if (MM.sourceAnchor === SM) return {
+               page: MM,
+               anchor: ""
+             };
+             if (AM(MM, SM)) return {
+               page: MM,
+               anchor: SM
```

#### 37. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1045-L1050` → after: `L551-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L551-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L551-L555) · [Before (L1045-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1045-L1050)

```diff
-           },
-           required: ["words"]
-         },
-         annotations: Xb,
-         _meta: {
-           isLookup: !0
+           }
+           return {
+             page: OM,
+             anchor: SM
+           }
```

#### 38. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1052-L1062` → after: `L557-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L557-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L557-L560) · [Before (L1052-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1052-L1062)

```diff
-       }, {
-         name: "list_prefabs",
-         title: "Look at ready-made games",
-         description: "Lists the prefabs (ready-made games and features) of one kind of game, with their settings, and the ready-made functions for it",
-         inputSchema: {
-           type: "object",
-           properties: {
-             category: {
-               type: "string",
-               description: "The kind of game, e.g. pvp; left out, every prefab"
-             }
+         const vM = {
+           Examples: {
+             pageId: "snippets",
+             anchor: ""
```

#### 39. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1064-L1080` → after: `L562-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L562-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L562-L564) · [Before (L1064-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1064-L1080)

```diff
-           required: []
-         },
-         annotations: Xb,
-         _meta: {
-           isLookup: !0
-         }
-       }, {
-         name: "view_prefab",
-         title: "Look at a ready-made game",
-         description: "Shows one prefab in full: how it plays, every setting with its default, and the functions to replace by name to change it",
-         inputSchema: {
-           type: "object",
-           properties: {
-             name: {
-               type: "string",
-               description: "The prefab's name, e.g. parkour"
- ... (1 more removed lines; see GitHub link above)
+           Notes: {
+             pageId: "readme",
+             anchor: "Globals"
```

#### 40. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1082-L1086` → after: `L566-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L566-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L566-L575) · [Before (L1082-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1082-L1086)

```diff
-           required: ["name"]
-         },
-         annotations: Xb,
-         _meta: {
-           isLookup: !0
+           "Glossary-of-Referenced-Types": {
+             pageId: "types",
+             anchor: ""
+           }
+         };
+ 
+         function FM(MM, rM) {
+           let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+           const OM = rM.slug ? `${MM}/${rM.slug}` : MM;
+           return iM ? `${OM}#${iM}` : OM
```

#### 41. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1088-L1099` → after: `L577-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L577-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L577-L585) · [Before (L1088-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1088-L1099)

```diff
-       }, {
-         name: "view_errors",
-         title: "Look at errors",
-         description: "Shows every error their world showed recently, not only the newest few",
-         inputSchema: {
-           type: "object",
-           properties: {},
-           required: []
-         },
-         annotations: Xb,
-         _meta: {
-           isLookup: !0
+         var BM = iM(5169);
+         const XM = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
+           IM = new Set(["GameApi", "Console", "_TypeOf"]),
+           KM = 4;
+ 
+         function qM(MM) {
+           let rM = MM.length;
+           for (; rM > 0 && "" === MM[rM - 1].trim();) rM--;
+           return MM.slice(0, rM)
```

#### 42. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1118-L1133` → after: `L588-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L588-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L588-L602) · [Before (L1118-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1118-L1133)

```diff
-     function vb(GG) {
-       const bG = GG.trim();
-       return Ib.some((GG => GG.test(bG)))
-     }
- 
-     function ab(GG, bG) {
-       const ZG = GG.replace(mb, "");
-       return bG ? function(GG) {
-         const bG = GG.indexOf("```"),
-           ZG = -1 === bG ? GG : GG.slice(0, bG);
-         let wG = -1,
-           SG = -1,
-           LG = 0;
-         for (const yG of ZG.matchAll(Fb)) {
-           const GG = yG.index + yG[0].length;
-           vb(ZG.slice(LG, GG)) && (wG = -1 === wG ? LG : wG, SG = GG), LG = GG
+         function TM(MM) {
+           var rM;
+           const iM = qM(MM);
+           if (null === (rM = iM.at(-1)) || void 0 === rM || !rM.trimEnd().endsWith("*/")) return {
+             lines: iM,
+             doc: ""
+           };
+           const OM = iM.findLastIndex((MM => MM.startsWith("/**")));
+           return -1 === OM ? {
+             lines: iM,
+             doc: ""
+           } : {
+             lines: qM(iM.slice(0, OM)),
+             doc: iM.slice(OM).join("\n")
+           }
```

#### 43. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1141-L1152` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L605) · [Before (L1141-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1141-L1152)

```diff
-     function jb(GG) {
-       const bG = "string" === typeof GG ? GG.split(/[./:]/).pop() : void 0;
-       return function(GG) {
-         return ub.some((bG => bG.name === GG))
-       }(bG) ? bG : null
-     }
- 
-     function Pb(GG, bG) {
-       return ZG => {
-         const wG = [];
-         let SG;
-         for (const UG of ZG.matchAll(GG)) {
+         function VM(MM) {
```

#### 44. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1154-L1174` → after: `L607-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L607-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L607-L619) · [Before (L1154-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1154-L1174)

```diff
-           const GG = jb(UG[1]);
-           if (null === GG) continue;
-           const YG = {};
-           for (const ZG of UG[2].matchAll(bG)) {
-             var yG, kG;
-             YG[null !== (yG = ZG[1]) && void 0 !== yG ? yG : ZG[2]] = null !== (kG = ZG[3]) && void 0 !== kG ? kG : ZG[4]
-           }(null === (LG = SG) || void 0 === LG ? void 0 : LG.call.name) === GG && "" === ZG.slice(SG.index + SG.call.source.length, UG.index).trim() ? wG[wG.length - 1] = {
-             call: {
-               name: GG,
-               args: YG,
-               source: ZG.slice(SG.index, UG.index + UG[0].length)
-             },
-             index: SG.index
-           } : wG.push({
-             call: {
-               name: GG,
- ... (5 more removed lines; see GitHub link above)
+           const iM = MM.split("\n"),
+             OM = iM.flatMap(((MM, rM) => XM.test(MM) ? [rM] : []));
+           let SM = TM(iM.slice(0, null !== (rM = OM[0]) && void 0 !== rM ? rM : iM.length)).doc;
+           return OM.map(((MM, rM) => {
+             var jM;
+             const aM = TM(iM.slice(MM, null !== (jM = OM[rM + 1]) && void 0 !== jM ? jM : iM.length)),
+               PM = {
+                 name: iM[MM].match(XM)[1],
+                 doc: SM,
+                 lines: aM.lines
+               };
+             return SM = aM.doc, PM
+           }))
```

#### 45. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1180-L1182` → after: `L622-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L622-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L622-L626) · [Before (L1180-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1180-L1182)

```diff
-     function Mb(GG) {
-       return GG.replace(/\\(["\\nt])/g, ((GG, bG) => "n" === bG ? "\n" : "t" === bG ? "\t" : bG))
-     }
+         function cM(MM) {
+           var rM;
+           const iM = MM.match(/^readonly \[([\s\S]*)\]$/);
+           return iM ? null !== (rM = iM[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== rM ? rM : [] : null
+         }
```
