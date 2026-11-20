# Changed — Bundle Modifications Report (Part 022 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `22 / 58` (**407** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 021](part-021.md) · [Part 023 →](part-023.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/382.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/382.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b)

#### 4. `bundles/preprod.bloxd.io/chunks/js/382.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/382.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/382.js#L10-L11)

```diff
-       iz = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
-     Ez.e.ShadersStore[nz] || (Ez.e.ShadersStore[nz] = iz);
+       Oq = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
+     Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/383.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/383.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08)

#### 1. `bundles/preprod.bloxd.io/chunks/js/383.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/383.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/383.js#L4)

```diff
-   61043: (zz, uz, bz) => {
+   61827: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/383.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/383.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/383.js#L6)

```diff
-       greasedLinePixelShaderWGSL: () => lz
+       proceduralVertexShader: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/383.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/383.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/383.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "greasedLinePixelShader",
-       iz = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAn … [truncated]
-     Ez.e.ShadersStoreWGSL[nz] || (Ez.e.ShadersStoreWGSL[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "proceduralVertexShader",
+       Oq = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
+     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/384.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/384.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/384.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/384.js#L4)

```diff
-   61057: (zz, uz, bz) => {
+   61838: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/384.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/384.js#L6)

```diff
-       greasedLinePixelShader: () => lz
+       greasedLinePixelShaderWGSL: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/384.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/384.js#L8)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/384.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/384.js#L10-L11)

```diff
-       iz = "precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeA … [truncated]
-     Ez.e.ShadersStore[nz] || (Ez.e.ShadersStore[nz] = iz);
+       Oq = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAn … [truncated]
+     Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/385.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/385.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/385.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/385.js#L4)

```diff
-   61065: (zz, uz, bz) => {
+   61848: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/385.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/385.js#L6-L7)

```diff
-       rebuildScenePbrPipelines: () => Mz,
-       rebuildSceneRenderables: () => tz
+       greasedLinePixelShader: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L9-L192` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/385.js#L8-L14) · [Before (L9-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/385.js#L9-L192)

```diff
-     var Ez = bz(40944),
-       nz = (zz, uz) => zz.order - uz.order,
-       iz = 8,
-       lz = zz => tz(zz);
-     async function Mz(zz) {
-       let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       await Hz(zz, "pbr", uz)
-     }
-     async function tz(zz) {
-       await Hz(zz, void 0, !1)
-     }
-     async function Hz(zz, uz, Mz) {
-       const tz = zz;
-       if (!tz._built && !Mz) return;
-       const Hz = tz._lightListVersion ?? 0,
-         Oz = tz.surface.engine,
- ... (168 more removed lines; see GitHub link above)
+     var Yq = gq(39617);
+     const lq = "greasedLinePixelShader",
+       Oq = "precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeA … [truncated]
+     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/70.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/70.js` (1640 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405)

#### 1. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4` → after: `L4-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L4-L25) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4)

```diff
-   36472: (zz, uz, bz) => {
+   9385: (qq, Eq) => {
+     Eq.b = 8, Eq.j = function(qq, Eq, gq, Yq) {
+       if (!Array.isArray(qq)) return !!qq;
+       Eq -= Math.floor(Eq), gq -= Math.floor(gq), Yq -= Math.floor(Yq);
+       for (var lq = 0; lq < qq.length; lq += 6)
+         if (Eq >= qq[lq] && Eq < qq[lq + 3] && gq >= qq[lq + 1] && gq < qq[lq + 4] && Yq >= qq[lq + 2] && Yq < qq[lq + 5]) return !0;
+       return !1
+     }, Eq.f = function(qq) {
+       for (var Eq = [], gq = 0; gq < qq.length; gq++) {
+         var Yq = qq[gq];
+         if (2 !== Yq.length || 3 !== Yq[0].length || 3 !== Yq[1].length) throw new Error("Subvoxel boxes must contain two three-dimensional bounds");
+         for (var lq = 0; lq < 3; lq++) {
+           var Oq = Yq[0][lq],
+             mq = Yq[1][lq];
+           if (!Number.isInteger(Oq) || !Number.isInteger(mq) || Oq < 0 || mq > 8 || Oq >= mq) throw new Error("Subvoxel bounds must be integers satisfying 0 <= start < end <= 8");
+           Eq[6 * gq + lq] = Oq / 8, Eq[6 * gq + lq + 3] = mq / 8
+ ... (6 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L7-L9` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L32-L33) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L7-L9)

```diff
-       c: () => tz,
-       d: () => Hz,
-       g: () => Oz,
+       e: () => lq,
+       h: () => dq,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L11` → after: `L35-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L35-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L35-L39) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L11)

```diff
-       n: () => Kz
+       n: () => jq,
+       q: () => xq,
+       t: () => mq,
+       w: () => Oq,
+       z: () => Nq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L13-L16` → after: `L41-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L41-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L41-L46) · [Before (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L13-L16)

```diff
-     var Ez = bz(328),
-       nz = bz(584),
-       iz = bz(330);
-     const lz = ["", "|meta|charging2", "|meta|charging3", "|meta|charging4"];
+     const Yq = 39 == gq.j ? ["Conveyor Belt", "Splitter", "Sorting Gate", "Belt Loader", "Fast Belt", "Belt Lift", "Belt Drop", "Belt Tunnel", "Express Belt", "Fast Loader"] : null,
+       lq = .002,
+       Oq = 2,
+       mq = 3,
+       xq = .5,
+       Aq = 200;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L18-L19` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L48-L50) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L18-L19)

```diff
-     function Mz(zz, uz) {
-       return "" === uz ? zz : `${zz} ${uz}`
+     function cq(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lq;
+       return Math.max(0, Math.min((gq - qq) * Yq, Eq))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L22-L27` → after: `L53-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L53-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L53-L61) · [Before (L22-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L22-L27)

```diff
-     function tz(zz, uz, bz, nz) {
-       const iz = zz.replace((0, Ez.Ae)(uz.material), (0, Ez.Ae)(bz));
-       if (uz.kind === nz || "" === uz.kind) return iz;
-       const lz = (0, Ez.Ae)(uz.kind);
-       if (!iz.includes(lz)) throw new Error(`Cannot name assets for "${Mz(bz,nz)}": "${iz}" has no "${lz}" to replace`);
-       return iz.replace(lz, (0, Ez.Ae)(nz))
+     function uq(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lq;
+       const Oq = [];
+       let mq = Eq;
+       for (const lq of qq) {
+         const qq = cq(lq.at, mq, gq, Yq);
+         Oq.push(qq), mq = qq - xq
+       }
+       return Oq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L30-L34` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L64-L66) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L30-L34)

```diff
-     function Hz(zz) {
-       return zz.creativeKinds ? zz.creativeKinds.flatMap((uz => zz.materials.map((zz => Mz(zz, uz))))) : zz.materials.flatMap((uz => zz.kinds.filter((uz => {
-         var bz;
-         return !(null !== (bz = zz.hiddenKinds) && void 0 !== bz && bz.includes(uz))
-       })).map((zz => Mz(uz, zz)))))
+     function Bq(qq, Eq) {
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lq;
+       return 0 === qq.length ? 1 / 0 : qq[0].at + Eq / gq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L37-L38` → after: `L69-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L69-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L69-L76) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L37-L38)

```diff
-     function Oz(zz, uz) {
-       return zz.flatMap((zz => zz.kinds.includes(uz) ? zz.materials.map((zz => Mz(zz, uz))) : []))
+     function Wq(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lq,
+         Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+       const mq = uq(qq, Eq, gq, Yq),
+         [xq] = qq.splice(Oq, 1);
+       return mq.splice(Oq, 1), qq.forEach(((qq, Eq) => {
+         qq.at = gq - mq[Eq] / Yq
+       })), xq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L40-L53` → after: `L78-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L78-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L78-L83) · [Before (L40-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L40-L53)

```diff
-     const pz = {
-       name: "diamondVariants",
-       materials: iz.p,
-       kinds: iz.m.map((zz => zz.trimStart())),
-       inheritsFrom: zz => ({
-         material: "Diamond",
-         kind: zz
-       }),
-       hiddenKinds: ["Crossbow Charged"],
-       creativeKinds: ["", "Fragment", "Pickaxe", "Axe", "Spade", "Hoe", "Sword", "Bow", "Crossbow", "Spear", "Dagger", "Club", "Mace", "Whip", "Boomerang", "Helmet", "Chestplate", "Gauntlets", "Leggings", "Boots"],
-       description: (zz, uz) => {
-         if ("Fragment" === uz) return {
-           translationKey: "Magmasteel" === zz ? "item:forgeFragmentDescription" : "item:elementalShardDescription"
-         }
+ 
+     function Nq(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lq;
+       for (let lq = Bq(qq, Eq, Yq); lq <= gq; lq = Bq(qq, Eq, Yq)) {
+         const gq = Wq(qq, Eq, lq, Yq);
+         gq.at = lq, qq.push(gq)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L55` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L85) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L55)

```diff
-     };
+     }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L57` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L87) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L57)

```diff
-     function dz(zz) {
+     function aq(qq, Eq, gq) {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L59` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L89-L90) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L59)

```diff
-         translationKey: `item:${(0,Ez.ze)(zz)}`
+         name: qq,
+         at: gq - Eq / (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lq)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L62-L106` → after: `L93-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L93-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L93-L103) · [Before (L62-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L62-L106)

```diff
-     const Fz = {
-         name: "decorativeArmour",
-         materials: iz.h,
-         kinds: nz.c,
-         inheritsFrom: zz => ({
-           material: "Diamond",
-           kind: zz
-         }),
-         displayName: dz
-       },
-       Zz = {
-         name: "keys",
-         materials: ["Wooden", "Stone", "Iron", "Gold", "Diamond"],
-         kinds: ["Key"],
-         metadata: () => ({
-           type: "Item",
- ... (29 more removed lines; see GitHub link above)
+ 
+     function Vq(qq, Eq, gq, Yq, Oq) {
+       let mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : lq;
+       const xq = uq(qq, Eq, Oq, mq);
+       let Aq = 0;
+       qq.forEach(((qq, Eq) => {
+         qq.at = Oq - xq[Eq] / mq, xq[Eq] > Yq && (Aq = Eq + 1)
+       })), gq.at = Oq - Yq / mq, qq.splice(Aq, 0, gq)
+     }
+     const dq = "baf2BeltLines",
+       jq = "baf2BeltMoves"
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L108` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L105) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L108)

```diff
-   36465: (zz, uz, bz) => {
+   9457: (qq, Eq, gq) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L110` → after: `L107-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L107-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L107-L117) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L110)

```diff
-       e: () => fz,
+       B: () => Nq,
+       E: () => mq,
+       F: () => Pq,
+       H: () => yq,
+       L: () => oq,
+       P: () => Hq,
+       Q: () => cq,
+       S: () => dq,
+       W: () => jq,
+       X: () => Aq,
+       b: () => lq,
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L113` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L120) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L113)

```diff
-       i: () => Jz,
+       k: () => Qq,
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L116` → after: `L124-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L124-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L124-L127) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L116)

```diff
-       s: () => Pz
+       r: () => tq,
+       t: () => rq,
+       v: () => Wq,
+       x: () => Bq
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L118-L123` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L129) · [Before (L118-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L118-L123)

```diff
-     var Ez = bz(328),
-       nz = bz(9125),
-       iz = bz(4238),
-       lz = bz(9078),
-       Mz = bz(9104),
-       tz = bz(586);
+     var Yq = gq(598);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L125-L350` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L131-L132) · [Before (L125-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L125-L350)

```diff
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
-         clipSize: 30,
-         tagSpeedMult: .8,
-         subsequentTagSpeedReductionScalar: .55,
-         inaccuracyStanding: 10,
-         inaccuracyFromShot: 22,
- ... (210 more removed lines; see GitHub link above)
+         "Belt Lift": 1,
+         "Belt Drop": -1
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L352-L581` → after: `L134-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L134-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L134-L156) · [Before (L352-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L352-L581)

```diff
-       Deagle: {
-         gunType: "rifle",
-         scopeType: "none",
-         muzzleFlashOffsetFromGun: [-3.5, -1, 0],
-         muzzleFlashScale: 1.3,
-         autoFireWithMouse: !1,
-         fireRate: 200,
-         cadenceMs: 60 / 220 * 1e3,
-         equipDelay: 44,
-         damage: 36,
-         reloadTime: 2e3,
-         clipSize: 7,
-         tagSpeedMult: .78,
-         subsequentTagSpeedReductionScalar: .55,
-         inaccuracyStanding: 9,
-         inaccuracyFromShot: 22,
- ... (214 more removed lines; see GitHub link above)
+       Oq = "Belt Tunnel",
+       mq = 5,
+       xq = "|exit";
+ 
+     function Aq(qq, Eq) {
+       return Eq ? `${Oq}|meta|rot${qq}${xq}` : 1 === qq ? Oq : `${Oq}|meta|rot${qq}`
+     }
+ 
+     function cq(qq) {
+       return qq.endsWith(xq) && qq.startsWith(`${Oq}|`)
+     }
+     const uq = [
+         [0, -1],
+         [-1, 0],
+         [0, 1],
+         [1, 0]
+ ... (7 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L583-L610` → after: `L158-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L158-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L158-L161) · [Before (L583-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L583-L610)

```diff
-       GPMG: {
-         gunType: "rifle",
-         scopeType: "none",
-         muzzleFlashOffsetFromGun: [-12.5, -.5, 0],
-         muzzleFlashScale: 2,
-         autoFireWithMouse: !0,
-         fireRate: 600,
-         cadenceMs: 60 / 700 * 1e3,
-         equipDelay: 25,
-         damage: 24,
-         reloadTime: 4500,
-         clipSize: 75,
-         tagSpeedMult: .78,
-         subsequentTagSpeedReductionScalar: .55,
-         inaccuracyStanding: 10,
-         inaccuracyFromShot: 24,
- ... (12 more removed lines; see GitHub link above)
+       aq = {
+         leftRight: ["right", "left"],
+         leftFront: ["left", "front"],
+         frontRight: ["front", "right"]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L612-L643` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L163) · [Before (L612-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L612-L643)

```diff
-       DMR: {
-         gunType: "semi_automatic",
-         scopeType: "sniper",
-         keepScopeOnShot: !0,
-         muzzleFlashOffsetFromGun: [-6, -.5, 0],
-         muzzleFlashScale: 1.6,
-         autoFireWithMouse: !1,
-         fireRate: 270,
-         cadenceMs: 200,
-         equipDelay: 37,
-         damage: 34,
-         reloadTime: 2200,
-         clipSize: 8,
-         tagSpeedMult: .78,
-         subsequentTagSpeedReductionScalar: .55,
-         inaccuracyStanding: 8,
- ... (16 more removed lines; see GitHub link above)
+       Vq = "|right";
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L645-L667` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L165-L166) · [Before (L645-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L645-L667)

```diff
-     function Oz(zz, uz) {
-       console.assert("meta|charging1" === uz.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|charging1");
-       const bz = {
-         ...uz
-       };
-       return delete bz.rootMetaDesc, {
-         [zz]: {
-           ...uz,
-           textureInfo: uz.textureName
-         },
-         [`${zz}|meta|charging2`]: {
-           ...bz,
-           textureInfo: `${uz.textureName}_charging_2`
-         },
-         [`${zz}|meta|charging3`]: {
-           ...bz,
- ... (7 more removed lines; see GitHub link above)
+     function dq(qq) {
+       return qq.split("|")[0] !== Bq ? null : qq.endsWith(Nq.leftFront) ? "leftFront" : qq.endsWith(Nq.frontRight) ? "frontRight" : "leftRight"
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L673-L685` → after: `L170-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L170-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L170-L202) · [Before (L673-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L673-L685)

```diff
-       const Ez = {
-         [zz]: {
-           ...bz,
-           heldItemGlb: `${uz}_${pz}`,
-           textureInfo: `${uz}_${pz}`
-         }
-       };
-       for (const nz of dz) Ez[`${zz}|meta|${nz}`] = {
-         ...bz,
-         heldItemGlb: `${uz}_${nz}`,
-         textureInfo: `${uz}_${nz}`
-       };
-       return Ez
+       return function(qq) {
+         const Eq = dq(qq);
+         return null === Eq ? [] : aq[Eq]
+       }(qq).map((qq => "right" === qq ? [gq, -Eq] : "left" === qq ? [-gq, Eq] : [Eq, gq]))
+     }
+ 
+     function Hq(qq) {
+       return qq.split("|")[0] === Wq && qq.endsWith(Vq)
+     }
+ 
+     function oq(qq, Eq, gq) {
+       return Hq(qq) ? [gq, -Eq] : [-gq, Eq]
+     }
+     const Pq = 39 == gq.j ? ["Conveyor Belt", "Fast Belt", "Express Belt"] : null,
+       Qq = ["turnLeft", "turnRight"];
+ 
+ ... (17 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L688-L692` → after: `L234-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L234-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L234-L257) · [Before (L688-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L688-L692)

```diff
-       Sheep: tz.o.Sheep,
-       "Cave Golem": ["corrupted"],
-       "Draugr Zombie": ["flower", "flower2", "mushroom", "vine", "vine2", "corrupted", "corrupted2"],
-       "Draugr Huntress": ["chainmail"],
-       "Frost Wraith": ["tattered", "frostKing", "accursed"]
+       ttb: 200,
+       harvestType: "cuttable",
+       soundType: {
+         break: "cloth",
+         place: "cloth"
+       },
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
+ ... (8 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L696-L705` → after: `L261-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L261-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L261-L264) · [Before (L696-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L696-L705)

```diff
-       var bz;
-       const Ez = {
-         type: "Gun",
-         textureInfo: zz,
-         weight: 1,
-         stackable: !1,
-         keepMetaInChest: !0,
-         ...uz,
-         ...Hz[zz]
-       };
+       let {
+         textureAnimation: gq,
+         rotatable: Yq = !0
+       } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L707-L711` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L266-L275) · [Before (L707-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L707-L711)

```diff
-         [zz]: Ez,
-         [`${zz}|RequiresAmmo`]: {
-           ...Ez,
-           displayName: zz,
-           heldItemGlb: null !== (bz = Ez.heldItemGlb) && void 0 !== bz ? bz : zz
+         model: Yq ? "rotatable" : "CustomModel",
+         modelScale: 8,
+         blockModel: qq,
+         blockModelItem: !0,
+         heldItemScale: 4,
+         itemTexture: Eq,
+         customModelInfo: {
+           yOffset: -.5,
+           yRotOffset: Yq ? Math.PI : void 0,
+           textureAnimation: gq
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L715-L725` → after: `L279-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L279-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L279-L609) · [Before (L715-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L715-L725)

```diff
-     var Kz = bz(36472),
-       wz = bz(36478),
-       Xz = bz(36486);
-     const fz = 16,
-       sz = {
-         comboWindowMs: 800,
-         comboMultipliers: [.5, 2 / 3, 5 / 6, 1],
-         backstabAngle: 2 * Math.PI / 3
-       },
-       rz = {
-         "Wood Pickaxe": {
+     const Qq = (0, Yq.f)([
+         [
+           [0, 0, 0],
+           [8, 1, 8]
+         ]
+       ]),
+       yq = [(0, aq.jc)("Maple Stairs", {
+         displayName: {
+           translationKey: "item:mapleStairs"
+         },
+         ttb: 1800,
+         textureInfo: "planks_maple",
+         harvestType: "wood"
+       }), (0, aq.jc)("Pine Stairs", {
+         displayName: {
+           translationKey: "item:pineStairs"
+ ... (315 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L727` → after: `L611-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L611-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L611-L612) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L727)

```diff
-             translationKey: "item:woodPickaxe"
+             translationKey: "item:colouredChalkBricksStairs",
+             params: Eq
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L735` → after: `L615-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L615-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L615-L616) · [Before (L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L735)

```diff
-             translationKey: "item:pickaxeDescription"
+             translationKey: "item:colouredChalkBricksStairsDescription",
+             params: Eq
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L737-L740` → after: `L618-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L618-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L618-L634) · [Before (L737-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L737-L740)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 2,
-           level: 1
+           ttb: 850,
+           textureInfo: `chalk_bricks_${(0,cq.we)(qq)}`,
+           harvestType: "rock"
+         }
+       }))],
+       tq = {
+         displayName: {
+           translationKey: "item:chest"
+         },
+         ttb: 3e3,
+         harvestType: "wood"
+       },
+       rq = {
+         Unloaded: {
+           ttb: 100,
+           textureInfo: "unloaded",
+ ... (1 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L742` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L636) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L742)

```diff
-         "Stone Pickaxe": {
+         Dirt: {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L744-L752` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L638) · [Before (L744-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L744-L752)

```diff
-             translationKey: "item:stonePickaxe"
-           },
-           type: "Tool",
-           textureInfo: "stone_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 22,
-           description: {
-             translationKey: "item:pickaxeDescription"
+             translationKey: "item:dirt"
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L754-L757` → after: `L640-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L640-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L640-L642) · [Before (L754-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L754-L757)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 3.5,
-           level: 2
+           ttb: 600,
+           textureInfo: "dirt",
+           harvestType: "granule"
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L759` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L644) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L759)

```diff
-         "Iron Pickaxe": {
+         "Messy Dirt": {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L761-L769` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L646) · [Before (L761-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L761-L769)

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
+             translationKey: "item:messyDirt"
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L771-L774` → after: `L648-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L648-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L648-L650) · [Before (L771-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L771-L774)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 6,
-           level: 3
+           ttb: 600,
+           textureInfo: "coarse_dirt",
+           harvestType: "granule"
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L776` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L652) · [Before (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L776)

```diff
-         "Gold Pickaxe": {
+         "Grass Block": {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L778` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L654) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L778)

```diff
-             translationKey: "item:goldPickaxe"
+             translationKey: "item:grassBlock"
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L780-L791` → after: `L656-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L656-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L656-L663) · [Before (L780-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L780-L791)

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
+           ttb: 720,
+           textureInfo: ["grass_block_side", "grass_top", "dirt"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L793` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L665) · [Before (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L793)

```diff
-         "Diamond Pickaxe": {
+         Sand: {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L795` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L667) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L795)

```diff
-             translationKey: "item:diamondPickaxe"
+             translationKey: "item:sand"
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L797-L808` → after: `L669-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L669-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L669-L675) · [Before (L797-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L797-L808)

```diff
-           type: "Tool",
-           textureInfo: "diamond_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 32,
-           description: {
-             translationKey: "item:pickaxeDescription"
-           },
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 8,
-           level: 5
+           ttb: 600,
+           textureInfo: "sand",
+           harvestType: "granule",
+           soundType: {
+             break: "sand",
+             place: "sand"
+           }
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L810` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L677) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L810)

```diff
-         "Moonstone Pickaxe": {
+         Clay: {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L812` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L679) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L812)

```diff
-             translationKey: "item:moonstonePickaxe"
+             translationKey: "item:clay"
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L814-L825` → after: `L681-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L681-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L681-L683) · [Before (L814-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L814-L825)

```diff
-           type: "Tool",
-           textureInfo: "moonstone_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 32,
-           description: {
-             translationKey: "item:moonstonePickaxeDescription"
-           },
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 9,
-           level: 5
+           ttb: 720,
+           textureInfo: "clay",
+           harvestType: "granule"
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L827` → after: `L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L685) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L827)

```diff
-         "Golem Pickaxe": {
+         Gravel: {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L829-L837` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L687) · [Before (L829-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L829-L837)

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
+             translationKey: "item:gravel"
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L839-L842` → after: `L689-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L689-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L689-L691) · [Before (L839-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L839-L842)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 8,
-           level: 5
+           ttb: 720,
+           textureInfo: "gravel",
+           harvestType: "granule"
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L844` → after: `L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L693) · [Before (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L844)

```diff
-         "Wood Axe": {
+         Snow: {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L846-L854` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L695) · [Before (L846-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L846-L854)

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
+             translationKey: "item:snow"
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L856-L859` → after: `L697-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L697-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L697-L703) · [Before (L856-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L856-L859)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 2,
-           level: 1
+           ttb: 600,
+           textureInfo: "snow",
+           harvestType: "granule",
+           soundType: {
+             break: "snow",
+             place: "snow"
+           }
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L861` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L705) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L861)

```diff
-         "Stone Axe": {
+         "Maple Log": {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L863-L871` → after: `L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L707) · [Before (L863-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L863-L871)

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
+             translationKey: "item:mapleLog"
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L873-L876` → after: `L709-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L709-L711) · [Before (L873-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L873-L876)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 3.5,
-           level: 2
+           ttb: 2400,
+           textureInfo: "log_maple",
+           harvestType: "wood"
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L878` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L713) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L878)

```diff
-         "Iron Axe": {
+         "Pine Log": {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L880-L888` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L715) · [Before (L880-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L880-L888)

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
+             translationKey: "item:pineLog"
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L890-L893` → after: `L717-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L717-L719) · [Before (L890-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L890-L893)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 6,
-           level: 3
+           ttb: 2400,
+           textureInfo: "log_pine",
+           harvestType: "wood"
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L895` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L721) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L895)

```diff
-         "Gold Axe": {
+         "Plum Log": {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L897` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L723) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L897)

```diff
-             translationKey: "item:goldAxe"
+             translationKey: "item:plumLog"
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L899-L910` → after: `L725-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L725-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L725-L727) · [Before (L899-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L899-L910)

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
+           textureInfo: "log_plum",
+           harvestType: "wood"
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L912` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L729) · [Before (L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L912)

```diff
-         "Diamond Axe": {
+         "Cedar Log": {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L914-L922` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L731) · [Before (L914-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L914-L922)

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
+             translationKey: "item:cedarLog"
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L924-L927` → after: `L733-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L733-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L733-L735) · [Before (L924-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L924-L927)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 8,
-           level: 5
+           ttb: 2400,
+           textureInfo: "log_cedar",
+           harvestType: "wood"
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L929` → after: `L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L737) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L929)

```diff
-         "Moonstone Axe": {
+         "Aspen Log": {
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L931-L955` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L739) · [Before (L931-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L931-L955)

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
+             translationKey: "item:aspenLog"
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L957-L960` → after: `L741-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L741-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L741-L743) · [Before (L957-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L957-L960)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 6,
-           level: 3
+           ttb: 2400,
+           textureInfo: "log_aspen",
+           harvestType: "wood"
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L962` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L745) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L962)

```diff
-         "Wood Spade": {
+         "Jungle Log": {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L964-L972` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L747) · [Before (L964-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L964-L972)

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
+             translationKey: "item:jungleLog"
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L974-L977` → after: `L749-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L749-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L749-L751) · [Before (L974-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L974-L977)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 2,
-           level: 1
+           ttb: 2400,
+           textureInfo: "log_jungle",
+           harvestType: "wood"
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L979` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L753) · [Before (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L979)

```diff
-         "Stone Spade": {
+         "Maple Wood Planks": {
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L981-L989` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L755) · [Before (L981-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L981-L989)

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
+             translationKey: "item:mapleWoodPlanks"
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L991-L994` → after: `L757-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L757-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L757-L759) · [Before (L991-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L991-L994)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 3.5,
-           level: 2
+           ttb: 1800,
+           textureInfo: "planks_maple",
+           harvestType: "wood"
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L996` → after: `L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L761) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L996)

```diff
-         "Iron Spade": {
+         "Aspen Wood Planks": {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L998-L1006` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L763) · [Before (L998-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L998-L1006)

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
+             translationKey: "item:aspenWoodPlanks"
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1008-L1011` → after: `L765-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L765-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L765-L767) · [Before (L1008-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1008-L1011)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 6,
-           level: 3
+           ttb: 1800,
+           textureInfo: "planks_aspen",
+           harvestType: "wood"
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1013` → after: `L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L769) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1013)

```diff
-         "Gold Spade": {
+         "Plum Wood Planks": {
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1015` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L771) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1015)

```diff
-             translationKey: "item:goldSpade"
+             translationKey: "item:plumWoodPlanks"
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1017-L1028` → after: `L773-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L773-L775) · [Before (L1017-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1017-L1028)

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
+           textureInfo: "planks_plum",
+           harvestType: "wood"
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1030` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L777) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1030)

```diff
-         "Diamond Spade": {
+         "Jungle Wood Planks": {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1032-L1040` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L779) · [Before (L1032-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1032-L1040)

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
+             translationKey: "item:jungleWoodPlanks"
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1042-L1045` → after: `L781-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L781-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L781-L783) · [Before (L1042-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1042-L1045)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 8,
-           level: 5
+           ttb: 1800,
+           textureInfo: "planks_jungle",
+           harvestType: "wood"
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1047` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L785) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1047)

```diff
-         "Wood Sword": {
+         "Pine Wood Planks": {
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1049-L1057` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L787) · [Before (L1049-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1049-L1057)

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
+             translationKey: "item:pineWoodPlanks"
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1059-L1062` → after: `L789-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L789-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L789-L791) · [Before (L1059-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1059-L1062)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 1
+           ttb: 1800,
+           textureInfo: "planks_pine",
+           harvestType: "wood"
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1064` → after: `L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L793) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1064)

```diff
-         "Stone Sword": {
+         "Cedar Wood Planks": {
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1066` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L795) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1066)

```diff
-             translationKey: "item:stoneSword"
+             translationKey: "item:cedarWoodPlanks"
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1068-L1079` → after: `L797-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L797-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L797-L799) · [Before (L1068-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1068-L1079)

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
+           textureInfo: "planks_cedar",
+           harvestType: "wood"
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1081` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L801) · [Before (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1081)

```diff
-         "Iron Sword": {
+         "Barkless Maple Log": {
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1083-L1091` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L803) · [Before (L1083-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1083-L1091)

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
+             translationKey: "item:barklessMapleLog"
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1093-L1096` → after: `L805-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L805-L807) · [Before (L1093-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1093-L1096)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 3
+           ttb: 2e3,
+           textureInfo: "stripped_maple_log",
+           harvestType: "wood"
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1098` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L809) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1098)

```diff
-         "Gold Sword": {
+         "Barkless Aspen Log": {
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1100` → after: `L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L811) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1100)

```diff
-             translationKey: "item:goldSword"
+             translationKey: "item:barklessAspenLog"
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1102-L1113` → after: `L813-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L813-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L813-L815) · [Before (L1102-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1102-L1113)

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
+           textureInfo: "stripped_aspen_log",
+           harvestType: "wood"
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1115` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L817) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1115)

```diff
-         "Diamond Sword": {
+         "Barkless Plum Log": {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1117-L1125` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L819) · [Before (L1117-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1117-L1125)

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
+             translationKey: "item:barklessPlumLog"
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1127-L1130` → after: `L821-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L821-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L821-L823) · [Before (L1127-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1127-L1130)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           ttb: 2e3,
+           textureInfo: "stripped_plum_log",
+           harvestType: "wood"
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1132` → after: `L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L825) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1132)

```diff
-         "Knight Sword": {
+         "Barkless Jungle Log": {
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1134` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L827) · [Before (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1134)

```diff
-             translationKey: "item:knightSword"
+             translationKey: "item:barklessJungleLog"
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1136-L1148` → after: `L829-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L829-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L829-L831) · [Before (L1136-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1136-L1148)

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
+           textureInfo: "stripped_jungle_log",
+           harvestType: "wood"
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1150` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L833) · [Before (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1150)

```diff
-         "Wood Hoe": {
+         "Barkless Pine Log": {
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1152-L1160` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L835) · [Before (L1152-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1152-L1160)

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
+             translationKey: "item:barklessPineLog"
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1162-L1165` → after: `L837-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L837-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L837-L839) · [Before (L1162-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1162-L1165)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 2,
-           level: 1
+           ttb: 2e3,
+           textureInfo: "stripped_pine_log",
+           harvestType: "wood"
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1167` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L841) · [Before (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1167)

```diff
-         "Stone Hoe": {
+         "Barkless Cedar Log": {
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1169-L1177` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L843) · [Before (L1169-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1169-L1177)

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
+             translationKey: "item:barklessCedarLog"
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1179-L1182` → after: `L845-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L845-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L845-L847) · [Before (L1179-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1179-L1182)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 2.5,
-           level: 2
+           ttb: 2e3,
+           textureInfo: "stripped_cedar_log",
+           harvestType: "wood"
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1184` → after: `L849-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L849-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L849-L854) · [Before (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1184)

```diff
-         "Iron Hoe": {
+         free_placeholder2: {
+           ttb: 1800,
+           textureInfo: "messy_stone",
+           harvestType: "rock"
+         },
+         Stone: {
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1186-L1194` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L856) · [Before (L1186-L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1186-L1194)

```diff
-             translationKey: "item:ironHoe"
-           },
-           type: "Tool",
-           textureInfo: "iron_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 24,
-           description: {
-             translationKey: "item:hoeDescription"
+             translationKey: "item:stone"
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1196-L1199` → after: `L858-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L858-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L858-L865) · [Before (L1196-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1196-L1199)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 3.25,
-           level: 3
+           ttb: 1800,
+           textureInfo: "stone",
+           harvestType: "rock",
+           drops: "Messy Stone",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Stone"
+           }
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1201` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L867) · [Before (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1201)

```diff
-         "Gold Hoe": {
+         "Messy Stone": {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1203-L1211` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L869) · [Before (L1203-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1203-L1211)

```diff
-             translationKey: "item:goldHoe"
-           },
-           type: "Tool",
-           textureInfo: "golden_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 26,
-           description: {
-             translationKey: "item:hoeDescription"
+             translationKey: "item:messyStone"
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1213-L1216` → after: `L871-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L871-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L871-L873) · [Before (L1213-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1213-L1216)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 3.75,
-           level: 4
+           ttb: 1800,
+           textureInfo: "messy_stone",
+           harvestType: "rock"
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1218` → after: `L875-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L875-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L875-L880) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1218)

```diff
-         "Diamond Hoe": {
+         free_placeholder: {
+           ttb: 1800,
+           textureInfo: "messy_stone",
+           harvestType: "rock"
+         },
+         "Smooth Stone": {
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1220` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L882) · [Before (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1220)

```diff
-             translationKey: "item:diamondHoe"
+             translationKey: "item:smoothStone"
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1222-L1228` → after: `L884-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L884-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L884-L890) · [Before (L1222-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1222-L1228)

```diff
-           type: "Tool",
-           textureInfo: "diamond_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 28,
-           description: {
-             translationKey: "item:hoeDescription"
+           ttb: 1800,
+           textureInfo: "smooth_stone",
+           harvestType: "rock"
+         },
+         Diorite: {
+           displayName: {
+             translationKey: "item:diorite"
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1230-L1233` → after: `L892-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L892-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L892-L894) · [Before (L1230-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1230-L1233)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 4.25,
-           level: 5
+           ttb: 1800,
+           textureInfo: "stone_diorite",
+           harvestType: "rock"
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1235` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L896) · [Before (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1235)

```diff
-         Flashlight: {
+         "Smooth Diorite": {
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1237` → after: `L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L898) · [Before (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1237)

```diff
-             translationKey: "item:flashlight"
+             translationKey: "item:smoothDiorite"
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1239-L1240` → after: `L900-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L900-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L900-L906) · [Before (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1239-L1240)

```diff
-           description: {
-             translationKey: "item:flashlightDescription"
+           ttb: 1800,
+           textureInfo: "stone_diorite_smooth",
+           harvestType: "rock"
+         },
+         Andesite: {
+           displayName: {
+             translationKey: "item:andesite"
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1242-L1251` → after: `L908-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L908-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L908-L910) · [Before (L1242-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1242-L1251)

```diff
-           type: "Item",
-           textureInfo: "flashlight",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           BZ: [15, 15, 15],
-           spotlightRange: 20,
-           spotlightConeAngle: 60,
-           firstPersonHeldRotationOffset: [-.34, -.014, .081],
-           thirdPersonHeldRotationOffset: [Math.PI / 2, 0, 0]
+           ttb: 1800,
+           textureInfo: "stone_andesite",
+           harvestType: "rock"
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1253` → after: `L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L912) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1253)

```diff
-         "Mining Helmet": {
+         "Smooth Andesite": {
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1255` → after: `L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L914) · [Before (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1255)

```diff
-             translationKey: "item:miningHelmet"
+             translationKey: "item:smoothAndesite"
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1257-L1258` → after: `L916-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L916-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L916-L922) · [Before (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1257-L1258)

```diff
-           description: {
-             translationKey: "item:miningHelmetDescription"
+           ttb: 1800,
+           textureInfo: "stone_andesite_smooth",
+           harvestType: "rock"
+         },
+         Granite: {
+           displayName: {
+             translationKey: "item:granite"
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1260-L1268` → after: `L924-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L924-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L924-L926) · [Before (L1260-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1260-L1268)

```diff
-           type: "Armour",
-           textureInfo: "mining_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07,
-           BZ: [15, 14, 11],
-           spotlightRange: 12,
-           spotlightConeAngle: 90
+           ttb: 1800,
+           textureInfo: "stone_granite",
+           harvestType: "rock"
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1270` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L928) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1270)

```diff
-         "Wood Helmet": {
+         "Smooth Granite": {
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1272` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L930) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1272)

```diff
-             translationKey: "item:woodHelmet"
+             translationKey: "item:smoothGranite"
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1274-L1279` → after: `L932-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L932-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L932-L934) · [Before (L1274-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1274-L1279)

```diff
-           type: "Armour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 1800,
+           textureInfo: "stone_granite_smooth",
+           harvestType: "rock"
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1281` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L936) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1281)

```diff
-         "Iron Helmet": {
+         Sandstone: {
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1283` → after: `L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L938) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1283)

```diff
-             translationKey: "item:ironHelmet"
+             translationKey: "item:sandstone"
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1285-L1290` → after: `L940-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L940-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L940-L942) · [Before (L1285-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1285-L1290)

```diff
-           type: "Armour",
-           textureInfo: "iron_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .09
+           ttb: 960,
+           textureInfo: "sandstone_normal",
+           harvestType: "rock"
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1292` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L944) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1292)

```diff
-         "Gold Helmet": {
+         Yellowstone: {
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1294` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L946) · [Before (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1294)

```diff
-             translationKey: "item:goldHelmet"
+             translationKey: "item:yellowstone"
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1296-L1301` → after: `L948-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L948-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L948-L950) · [Before (L1296-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1296-L1301)

```diff
-           type: "Armour",
-           textureInfo: "golden_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .11
+           ttb: 3600,
+           textureInfo: "end_stone",
+           harvestType: "rock"
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1303` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L952) · [Before (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1303)

```diff
-         "Diamond Helmet": {
+         "Coal Ore": {
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1305` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L954) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1305)

```diff
-             translationKey: "item:diamondHelmet"
+             translationKey: "item:coalOre"
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1307-L1312` → after: `L956-L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L956-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L956-L970) · [Before (L1307-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1307-L1312)

```diff
-           type: "Armour",
-           textureInfo: "diamond_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 3e3,
+           textureInfo: "coal_ore",
+           harvestType: "rock",
+           drops: "Coal",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Coal Ore"
+           },
+           specialToolBonusDrops: {
+             "Golem Pickaxe": uq.s
+           },
+           description: {
+             translationKey: "item:coalOreDescription"
+           },
+           onMinedAura: 5
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1314` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L972) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1314)

```diff
-         "Wood Chestplate": {
+         "Iron Ore": {
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1316` → after: `L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L974) · [Before (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1316)

```diff
-             translationKey: "item:woodChestplate"
+             translationKey: "item:ironOre"
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1318-L1323` → after: `L976-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L976-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L976-L988) · [Before (L1318-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1318-L1323)

```diff
-           type: "Armour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 3600,
+           textureInfo: "iron_ore",
+           harvestType: "rock",
+           drops: "Raw Iron",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Iron Ore"
+           },
+           specialToolBonusDrops: {
+             "Golem Pickaxe": uq.s
+           },
+           harvestLevel: 2,
+           onMinedAura: 15
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1325` → after: `L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L990) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1325)

```diff
-         "Iron Chestplate": {
+         "Gold Ore": {
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1327` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L992) · [Before (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1327)

```diff
-             translationKey: "item:ironChestplate"
+             translationKey: "item:goldOre"
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1329-L1334` → after: `L994-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L994-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L994-L1007) · [Before (L1329-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1329-L1334)

```diff
-           type: "Armour",
-           textureInfo: "iron_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .18
+           ttb: 4200,
+           textureInfo: "gold_ore",
+           harvestType: "rock",
+           drops: "Raw Gold",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Gold Ore"
+           },
+           specialToolBonusDrops: {
+             "Golem Pickaxe": uq.s
+           },
+           harvestLevel: 3,
+           onMinedAura: 30,
+           ma: [4, 4, 0]
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1336` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1009) · [Before (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1336)

```diff
-         "Gold Chestplate": {
+         "Lapis Lazuli Ore": {
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1338` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1011) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1338)

```diff
-             translationKey: "item:goldChestplate"
+             translationKey: "item:lapisLazuliOre"
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1340-L1345` → after: `L1013-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1013-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1013-L1017) · [Before (L1340-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1340-L1345)

```diff
-           type: "Armour",
-           textureInfo: "golden_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .21
+           ttb: 4200,
+           textureInfo: "lapis_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           ma: [0, 0, 2]
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1347` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1019) · [Before (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1347)

```diff
-         "Diamond Chestplate": {
+         "Emerald Ore": {
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1349` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1021) · [Before (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1349)

```diff
-             translationKey: "item:diamondChestplate"
+             translationKey: "item:emeraldOre"
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1351-L1356` → after: `L1023-L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1023-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1023-L1027) · [Before (L1351-L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1351-L1356)

```diff
-           type: "Armour",
-           textureInfo: "diamond_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .24
+           ttb: 4500,
+           textureInfo: "emerald_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           ma: [1, 3, 1]
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1358` → after: `L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1029) · [Before (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1358)

```diff
-         "Fur Chestplate": {
+         "Diamond Ore": {
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1360` → after: `L1031-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1031-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1031-L1043) · [Before (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1360)

```diff
-             translationKey: "item:furChestplate"
+             translationKey: "item:diamondOre"
+           },
+           ttb: 5e3,
+           textureInfo: "diamond_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           drops: "Diamond",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Diamond Ore"
+           },
+           specialToolBonusDrops: {
+             "Golem Pickaxe": uq.s
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1367` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1046) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1367)

```diff
-             translationKey: "item:furChestplateDescription"
+             translationKey: "item:diamondOreDescription"
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1369-L1371` → after: `L1048-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1048-L1049) · [Before (L1369-L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1369-L1371)

```diff
-           stackable: !1,
-           armourReduction: .22,
-           knockbackReduction: 1
+           onMinedAura: 40,
+           ma: [2, 5, 5]
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1373` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1051) · [Before (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1373)

```diff
-         "Wood Leggings": {
+         "Block of Coal": {
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1375` → after: `L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1053) · [Before (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1375)

```diff
-             translationKey: "item:woodLeggings"
+             translationKey: "item:blockOfCoal"
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1377-L1382` → after: `L1055-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1055-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1055-L1057) · [Before (L1377-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1377-L1382)

```diff
-           type: "Armour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 4500,
+           textureInfo: "coal_block",
+           harvestType: "rock"
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1384` → after: `L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1059) · [Before (L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1384)

```diff
-         "Iron Leggings": {
+         "Block of Iron": {
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1386` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1061) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1386)

```diff
-             translationKey: "item:ironLeggings"
+             translationKey: "item:blockOfIron"
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1388-L1393` → after: `L1063-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1063-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1063-L1065) · [Before (L1388-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1388-L1393)

```diff
-           type: "Armour",
-           textureInfo: "iron_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .14
+           ttb: 5400,
+           textureInfo: "iron_block",
+           harvestType: "rock"
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1395` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1067) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1395)

```diff
-         "Gold Leggings": {
+         "Block of Gold": {
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1397` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1069) · [Before (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1397)

```diff
-             translationKey: "item:goldLeggings"
+             translationKey: "item:blockOfGold"
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1399-L1404` → after: `L1071-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1071-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1071-L1073) · [Before (L1399-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1399-L1404)

```diff
-           type: "Armour",
-           textureInfo: "golden_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .16
+           ttb: 6300,
+           textureInfo: "gold_block",
+           harvestType: "rock"
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1406` → after: `L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1075) · [Before (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1406)

```diff
-         "Diamond Leggings": {
+         "Block of Lapis Lazuli": {
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1408` → after: `L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1077) · [Before (L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1408)

```diff
-             translationKey: "item:diamondLeggings"
+             translationKey: "item:blockOfLapisLazuli"
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1410-L1415` → after: `L1079-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1079-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1079-L1081) · [Before (L1410-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1410-L1415)

```diff
-           type: "Armour",
-           textureInfo: "diamond_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .19
+           ttb: 6300,
+           textureInfo: "lapis_block",
+           harvestType: "rock"
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1417` → after: `L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1083) · [Before (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1417)

```diff
-         "Wood Boots": {
+         "Block of Emerald": {
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1419` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1085) · [Before (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1419)

```diff
-             translationKey: "item:woodBoots"
+             translationKey: "item:blockOfEmerald"
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1421-L1426` → after: `L1087-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1087-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1087-L1089) · [Before (L1421-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1421-L1426)

```diff
-           type: "Armour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 6750,
+           textureInfo: "emerald_block",
+           harvestType: "rock"
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1428` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1091) · [Before (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1428)

```diff
-         "Iron Boots": {
+         "White Wool": {
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1430` → after: `L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1093) · [Before (L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1430)

```diff
-             translationKey: "item:ironBoots"
+             translationKey: "item:whiteWool"
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1432-L1437` → after: `L1095-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1095-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1095-L1101) · [Before (L1432-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1432-L1437)

```diff
-           type: "Armour",
-           textureInfo: "iron_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 960,
+           textureInfo: "wool_colored_white",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1439` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1103) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1439)

```diff
-         "Gold Boots": {
+         "Orange Wool": {
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1441` → after: `L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1105) · [Before (L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1441)

```diff
-             translationKey: "item:goldBoots"
+             translationKey: "item:orangeWool"
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1443-L1448` → after: `L1107-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1107-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1107-L1113) · [Before (L1443-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1443-L1448)

```diff
-           type: "Armour",
-           textureInfo: "golden_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .09
+           ttb: 960,
+           textureInfo: "wool_colored_orange",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1450` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1115) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1450)

```diff
-         "Diamond Boots": {
+         "Magenta Wool": {
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1452` → after: `L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1117) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1452)

```diff
-             translationKey: "item:diamondBoots"
+             translationKey: "item:magentaWool"
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1454-L1459` → after: `L1119-L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1119-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1119-L1125) · [Before (L1454-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1454-L1459)

```diff
-           type: "Armour",
-           textureInfo: "diamond_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 960,
+           textureInfo: "wool_colored_magenta",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1461` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1127) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1461)

```diff
-         "Spiked Boots": {
+         "Light Blue Wool": {
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1463-L1470` → after: `L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1129) · [Before (L1463-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1463-L1470)

```diff
-             translationKey: "item:spikedBoots"
-           },
-           type: "Armour",
-           textureInfo: "spiked_boots",
-           weight: 1,
-           heldItemScale: 1,
-           description: {
-             translationKey: "item:spikedBootsDescription"
+             translationKey: "item:lightBlueWool"
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1472-L1473` → after: `L1131-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1131-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1131-L1137) · [Before (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1472-L1473)

```diff
-           stackable: !1,
-           armourReduction: .09
+           ttb: 960,
+           textureInfo: "wool_colored_light_blue",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1475` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1139) · [Before (L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1475)

```diff
-         "Wood Gauntlets": {
+         "Yellow Wool": {
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1477` → after: `L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1141) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1477)

```diff
-             translationKey: "item:woodGauntlets"
+             translationKey: "item:yellowWool"
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1479-L1484` → after: `L1143-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1143-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1143-L1149) · [Before (L1479-L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1479-L1484)

```diff
-           type: "Armour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 960,
+           textureInfo: "wool_colored_yellow",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1486` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1151) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1486)

```diff
-         "Iron Gauntlets": {
+         "Lime Wool": {
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1488` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1153) · [Before (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1488)

```diff
-             translationKey: "item:ironGauntlets"
+             translationKey: "item:limeWool"
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1490-L1495` → after: `L1155-L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1155-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1155-L1161) · [Before (L1490-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1490-L1495)

```diff
-           type: "Armour",
-           textureInfo: "iron_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .08
+           ttb: 960,
+           textureInfo: "wool_colored_lime",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1497` → after: `L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1163) · [Before (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1497)

```diff
-         "Gold Gauntlets": {
+         "Pink Wool": {
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1499` → after: `L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1165) · [Before (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1499)

```diff
-             translationKey: "item:goldGauntlets"
+             translationKey: "item:pinkWool"
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1501-L1506` → after: `L1167-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1167-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1167-L1173) · [Before (L1501-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1501-L1506)

```diff
-           type: "Armour",
-           textureInfo: "golden_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 960,
+           textureInfo: "wool_colored_pink",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1508` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1175) · [Before (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1508)

```diff
-         "Diamond Gauntlets": {
+         "Gray Wool": {
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1510` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1177) · [Before (L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1510)

```diff
-             translationKey: "item:diamondGauntlets"
+             translationKey: "item:grayWool"
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1512-L1517` → after: `L1179-L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1179-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1179-L1185) · [Before (L1512-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1512-L1517)

```diff
-           type: "Armour",
-           textureInfo: "diamond_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .11
+           ttb: 960,
+           textureInfo: "wool_colored_gray",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1519` → after: `L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1187) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1519)

```diff
-         "Military Helmet": {
+         "Light Gray Wool": {
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1521` → after: `L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1189) · [Before (L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1521)

```diff
-             translationKey: "item:militaryHelmet"
+             translationKey: "item:lightGrayWool"
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1523-L1528` → after: `L1191-L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1191-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1191-L1197) · [Before (L1523-L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1523-L1528)

```diff
-           type: "Armour",
-           textureInfo: "military_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .11
+           ttb: 960,
+           textureInfo: "wool_colored_light_grey",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1530` → after: `L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1199) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1530)

```diff
-         "Military Chestplate": {
+         "Cyan Wool": {
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1532` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1201) · [Before (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1532)

```diff
-             translationKey: "item:militaryChestplate"
+             translationKey: "item:cyanWool"
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1534-L1539` → after: `L1203-L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1203-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1203-L1209) · [Before (L1534-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1534-L1539)

```diff
-           type: "Armour",
-           textureInfo: "military_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .21
+           ttb: 960,
+           textureInfo: "wool_colored_cyan",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1541` → after: `L1211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1211) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1541)

```diff
-         "Military Gauntlets": {
+         "Purple Wool": {
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1543` → after: `L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1213) · [Before (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1543)

```diff
-             translationKey: "item:militaryGauntlets"
+             translationKey: "item:purpleWool"
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1545-L1550` → after: `L1215-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1215-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1215-L1221) · [Before (L1545-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1545-L1550)

```diff
-           type: "Armour",
-           textureInfo: "military_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 960,
+           textureInfo: "wool_colored_purple",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1552` → after: `L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1223) · [Before (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1552)

```diff
-         "Military Leggings": {
+         "Blue Wool": {
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1554` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1225) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1554)

```diff
-             translationKey: "item:militaryLeggings"
+             translationKey: "item:blueWool"
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1556-L1561` → after: `L1227-L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1227-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1227-L1233) · [Before (L1556-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1556-L1561)

```diff
-           type: "Armour",
-           textureInfo: "military_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .16
+           ttb: 960,
+           textureInfo: "wool_colored_blue",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1563` → after: `L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1235) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1563)

```diff
-         "Military Boots": {
+         "Brown Wool": {
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1565` → after: `L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1237) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1565)

```diff
-             translationKey: "item:militaryBoots"
+             translationKey: "item:brownWool"
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1567-L1572` → after: `L1239-L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1239-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1239-L1245) · [Before (L1567-L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1567-L1572)

```diff
-           type: "Armour",
-           textureInfo: "military_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .09
+           ttb: 960,
+           textureInfo: "wool_colored_brown",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1574` → after: `L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1247) · [Before (L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1574)

```diff
-         "White Wood Helmet": {
+         "Green Wool": {
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1576` → after: `L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1249) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1576)

```diff
-             translationKey: "item:whiteWoodHelmet"
+             translationKey: "item:greenWool"
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1578-L1583` → after: `L1251-L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1251-L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1251-L1257) · [Before (L1578-L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1578-L1583)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 960,
+           textureInfo: "wool_colored_green",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1585` → after: `L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1259) · [Before (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1585)

```diff
-         "White Wood Chestplate": {
+         "Red Wool": {
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1587` → after: `L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1261) · [Before (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1587)

```diff
-             translationKey: "item:whiteWoodChestplate"
+             translationKey: "item:redWool"
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1589-L1594` → after: `L1263-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1263-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1263-L1269) · [Before (L1589-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1589-L1594)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 960,
+           textureInfo: "wool_colored_red",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1596` → after: `L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1271) · [Before (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1596)

```diff
-         "White Wood Leggings": {
+         "Black Wool": {
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1598` → after: `L1273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1273) · [Before (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1598)

```diff
-             translationKey: "item:whiteWoodLeggings"
+             translationKey: "item:blackWool"
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1600-L1605` → after: `L1275-L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1275-L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1275-L1281) · [Before (L1600-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1600-L1605)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 960,
+           textureInfo: "wool_colored_black",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1607` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1283) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1607)

```diff
-         "White Wood Boots": {
+         "Baked Clay": {
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1609` → after: `L1285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1285) · [Before (L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1609)

```diff
-             translationKey: "item:whiteWoodBoots"
+             translationKey: "item:bakedClay"
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1611-L1616` → after: `L1287-L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1287-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1287-L1289) · [Before (L1611-L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1611-L1616)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 1500,
+           textureInfo: "hardened_clay",
+           harvestType: "rock"
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1618` → after: `L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1291) · [Before (L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1618)

```diff
-         "White Wood Gauntlets": {
+         "White Baked Clay": {
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1620` → after: `L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1293) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1620)

```diff
-             translationKey: "item:whiteWoodGauntlets"
+             translationKey: "item:whiteBakedClay"
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1622-L1627` → after: `L1295-L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1295-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1295-L1297) · [Before (L1622-L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1622-L1627)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_white",
+           harvestType: "rock"
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1629` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1299) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1629)

```diff
-         "Orange Wood Helmet": {
+         "Orange Baked Clay": {
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1631` → after: `L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1301) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1631)

```diff
-             translationKey: "item:orangeWoodHelmet"
+             translationKey: "item:orangeBakedClay"
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1633-L1638` → after: `L1303-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1303-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1303-L1305) · [Before (L1633-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1633-L1638)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_orange",
+           harvestType: "rock"
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1640` → after: `L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1307) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1640)

```diff
-         "Orange Wood Chestplate": {
+         "Magenta Baked Clay": {
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1642` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1309) · [Before (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1642)

```diff
-             translationKey: "item:orangeWoodChestplate"
+             translationKey: "item:magentaBakedClay"
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1644-L1649` → after: `L1311-L1313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1311-L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1311-L1313) · [Before (L1644-L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1644-L1649)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_magenta",
+           harvestType: "rock"
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1651` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1315) · [Before (L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1651)

```diff
-         "Orange Wood Leggings": {
+         "Light Blue Baked Clay": {
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1653` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1317) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1653)

```diff
-             translationKey: "item:orangeWoodLeggings"
+             translationKey: "item:lightBlueBakedClay"
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1655-L1660` → after: `L1319-L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1319-L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1319-L1321) · [Before (L1655-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1655-L1660)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_light_blue",
+           harvestType: "rock"
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1662` → after: `L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1323) · [Before (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1662)

```diff
-         "Orange Wood Boots": {
+         "Yellow Baked Clay": {
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1664` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1325) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1664)

```diff
-             translationKey: "item:orangeWoodBoots"
+             translationKey: "item:yellowBakedClay"
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1666-L1671` → after: `L1327-L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1327-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1327-L1329) · [Before (L1666-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1666-L1671)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_yellow",
+           harvestType: "rock"
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1673` → after: `L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1331) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1673)

```diff
-         "Orange Wood Gauntlets": {
+         "Lime Baked Clay": {
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1675` → after: `L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1333) · [Before (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1675)

```diff
-             translationKey: "item:orangeWoodGauntlets"
+             translationKey: "item:limeBakedClay"
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1677-L1682` → after: `L1335-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1335-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1335-L1337) · [Before (L1677-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1677-L1682)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_lime",
+           harvestType: "rock"
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1684` → after: `L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1339) · [Before (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1684)

```diff
-         "Magenta Wood Helmet": {
+         "Pink Baked Clay": {
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1686` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1341) · [Before (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1686)

```diff
-             translationKey: "item:magentaWoodHelmet"
+             translationKey: "item:pinkBakedClay"
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1688-L1693` → after: `L1343-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1343-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1343-L1345) · [Before (L1688-L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1688-L1693)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_pink",
+           harvestType: "rock"
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1695` → after: `L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1347) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1695)

```diff
-         "Magenta Wood Chestplate": {
+         "Gray Baked Clay": {
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1697` → after: `L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1349) · [Before (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1697)

```diff
-             translationKey: "item:magentaWoodChestplate"
+             translationKey: "item:grayBakedClay"
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1699-L1704` → after: `L1351-L1353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1351-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1351-L1353) · [Before (L1699-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1699-L1704)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_gray",
+           harvestType: "rock"
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1706` → after: `L1355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1355) · [Before (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1706)

```diff
-         "Magenta Wood Leggings": {
+         "Light Gray Baked Clay": {
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1708` → after: `L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1357) · [Before (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1708)

```diff
-             translationKey: "item:magentaWoodLeggings"
+             translationKey: "item:lightGrayBakedClay"
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1710-L1715` → after: `L1359-L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1359-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1359-L1361) · [Before (L1710-L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1710-L1715)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_silver",
+           harvestType: "rock"
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1717` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1363) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1717)

```diff
-         "Magenta Wood Boots": {
+         "Cyan Baked Clay": {
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1719` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1365) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1719)

```diff
-             translationKey: "item:magentaWoodBoots"
+             translationKey: "item:cyanBakedClay"
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1721-L1726` → after: `L1367-L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1367-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1367-L1369) · [Before (L1721-L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1721-L1726)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_cyan",
+           harvestType: "rock"
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1728` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1371) · [Before (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1728)

```diff
-         "Magenta Wood Gauntlets": {
+         "Purple Baked Clay": {
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1730` → after: `L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1373) · [Before (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1730)

```diff
-             translationKey: "item:magentaWoodGauntlets"
+             translationKey: "item:purpleBakedClay"
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1732-L1737` → after: `L1375-L1377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1375-L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1375-L1377) · [Before (L1732-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1732-L1737)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_purple",
+           harvestType: "rock"
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1739` → after: `L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1379) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1739)

```diff
-         "Light Blue Wood Helmet": {
+         "Blue Baked Clay": {
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1741` → after: `L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1381) · [Before (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1741)

```diff
-             translationKey: "item:lightBlueWoodHelmet"
+             translationKey: "item:blueBakedClay"
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1743-L1748` → after: `L1383-L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1383-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1383-L1385) · [Before (L1743-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1743-L1748)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_blue",
+           harvestType: "rock"
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1750` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1387) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1750)

```diff
-         "Light Blue Wood Chestplate": {
+         "Brown Baked Clay": {
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1752` → after: `L1389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1389) · [Before (L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1752)

```diff
-             translationKey: "item:lightBlueWoodChestplate"
+             translationKey: "item:brownBakedClay"
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1754-L1759` → after: `L1391-L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1391-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1391-L1393) · [Before (L1754-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1754-L1759)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_brown",
+           harvestType: "rock"
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1761` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1395) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1761)

```diff
-         "Light Blue Wood Leggings": {
+         "Green Baked Clay": {
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1763` → after: `L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1397) · [Before (L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1763)

```diff
-             translationKey: "item:lightBlueWoodLeggings"
+             translationKey: "item:greenBakedClay"
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1765-L1770` → after: `L1399-L1401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1399-L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1399-L1401) · [Before (L1765-L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1765-L1770)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_green",
+           harvestType: "rock"
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1772` → after: `L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1403) · [Before (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1772)

```diff
-         "Light Blue Wood Boots": {
+         "Red Baked Clay": {
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1774` → after: `L1405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1405) · [Before (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1774)

```diff
-             translationKey: "item:lightBlueWoodBoots"
+             translationKey: "item:redBakedClay"
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1776-L1781` → after: `L1407-L1409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1407-L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1407-L1409) · [Before (L1776-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1776-L1781)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_red",
+           harvestType: "rock"
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1783` → after: `L1411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1411) · [Before (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1783)

```diff
-         "Light Blue Wood Gauntlets": {
+         "Black Baked Clay": {
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1785` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1413) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1785)

```diff
-             translationKey: "item:lightBlueWoodGauntlets"
+             translationKey: "item:blackBakedClay"
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1787-L1792` → after: `L1415-L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1415-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1415-L1417) · [Before (L1787-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1787-L1792)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_black",
+           harvestType: "rock"
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1794` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1419) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1794)

```diff
-         "Yellow Wood Helmet": {
+         "Gray Concrete": {
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1796` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1421) · [Before (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1796)

```diff
-             translationKey: "item:yellowWoodHelmet"
+             translationKey: "item:grayConcrete"
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1798-L1803` → after: `L1423-L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1423-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1423-L1425) · [Before (L1798-L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1798-L1803)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 2160,
+           textureInfo: "gray_concrete",
+           harvestType: "rock"
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1805` → after: `L1427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1427) · [Before (L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1805)

```diff
-         "Yellow Wood Chestplate": {
+         "Light Gray Concrete": {
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1807` → after: `L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1429) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1807)

```diff
-             translationKey: "item:yellowWoodChestplate"
+             translationKey: "item:lightGrayConcrete"
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1809-L1814` → after: `L1431-L1433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1431-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1431-L1433) · [Before (L1809-L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1809-L1814)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 2160,
+           textureInfo: "light_gray_concrete",
+           harvestType: "rock"
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1816` → after: `L1435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1435) · [Before (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1816)

```diff
-         "Yellow Wood Leggings": {
+         "Black Concrete": {
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1818` → after: `L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1437) · [Before (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1818)

```diff
-             translationKey: "item:yellowWoodLeggings"
+             translationKey: "item:blackConcrete"
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1820-L1825` → after: `L1439-L1441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1439-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1439-L1441) · [Before (L1820-L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1820-L1825)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 2160,
+           textureInfo: "black_concrete",
+           harvestType: "rock"
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1827` → after: `L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1443) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1827)

```diff
-         "Yellow Wood Boots": {
+         "Blue Concrete": {
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1829` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1445) · [Before (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1829)

```diff
-             translationKey: "item:yellowWoodBoots"
+             translationKey: "item:blueConcrete"
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1831-L1836` → after: `L1447-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1447-L1449) · [Before (L1831-L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1831-L1836)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 2160,
+           textureInfo: "blue_concrete",
+           harvestType: "rock"
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1838` → after: `L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1451) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1838)

```diff
-         "Yellow Wood Gauntlets": {
+         "Brown Concrete": {
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1840` → after: `L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1453) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1840)

```diff
-             translationKey: "item:yellowWoodGauntlets"
+             translationKey: "item:brownConcrete"
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1842-L1847` → after: `L1455-L1457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1455-L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1455-L1457) · [Before (L1842-L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1842-L1847)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 2160,
+           textureInfo: "brown_concrete",
+           harvestType: "rock"
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1849` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1459) · [Before (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1849)

```diff
-         "Lime Wood Helmet": {
+         "Cyan Concrete": {
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1851` → after: `L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1461) · [Before (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1851)

```diff
-             translationKey: "item:limeWoodHelmet"
+             translationKey: "item:cyanConcrete"
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1853-L1858` → after: `L1463-L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1463-L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1463-L1465) · [Before (L1853-L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1853-L1858)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 2160,
+           textureInfo: "cyan_concrete",
+           harvestType: "rock"
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1860` → after: `L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1467) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1860)

```diff
-         "Lime Wood Chestplate": {
+         "Light Blue Concrete": {
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1862` → after: `L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1469) · [Before (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1862)

```diff
-             translationKey: "item:limeWoodChestplate"
+             translationKey: "item:lightBlueConcrete"
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1864-L1869` → after: `L1471-L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1471-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1471-L1473) · [Before (L1864-L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1864-L1869)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 2160,
+           textureInfo: "light_blue_concrete",
+           harvestType: "rock"
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1871` → after: `L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1475) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1871)

```diff
-         "Lime Wood Leggings": {
+         "Lime Concrete": {
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1873` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1477) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1873)

```diff
-             translationKey: "item:limeWoodLeggings"
+             translationKey: "item:limeConcrete"
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1875-L1880` → after: `L1479-L1481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1479-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1479-L1481) · [Before (L1875-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1875-L1880)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 2160,
+           textureInfo: "lime_concrete",
+           harvestType: "rock"
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1882` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1483) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1882)

```diff
-         "Lime Wood Boots": {
+         "Magenta Concrete": {
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1884` → after: `L1485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1485) · [Before (L1884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1884)

```diff
-             translationKey: "item:limeWoodBoots"
+             translationKey: "item:magentaConcrete"
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1886-L1891` → after: `L1487-L1489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1487-L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1487-L1489) · [Before (L1886-L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1886-L1891)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 2160,
+           textureInfo: "magenta_concrete",
+           harvestType: "rock"
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1893` → after: `L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1491) · [Before (L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1893)

```diff
-         "Lime Wood Gauntlets": {
+         "Orange Concrete": {
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1895` → after: `L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1493) · [Before (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1895)

```diff
-             translationKey: "item:limeWoodGauntlets"
+             translationKey: "item:orangeConcrete"
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1897-L1902` → after: `L1495-L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1495-L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1495-L1497) · [Before (L1897-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1897-L1902)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 2160,
+           textureInfo: "orange_concrete",
+           harvestType: "rock"
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1904` → after: `L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1499) · [Before (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1904)

```diff
-         "Pink Wood Helmet": {
+         "Pink Concrete": {
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1906` → after: `L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1501) · [Before (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1906)

```diff
-             translationKey: "item:pinkWoodHelmet"
+             translationKey: "item:pinkConcrete"
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1908-L1913` → after: `L1503-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1503-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1503-L1505) · [Before (L1908-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1908-L1913)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 2160,
+           textureInfo: "pink_concrete",
+           harvestType: "rock"
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1915` → after: `L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1507) · [Before (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1915)

```diff
-         "Pink Wood Chestplate": {
+         "Purple Concrete": {
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1917` → after: `L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1509) · [Before (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1917)

```diff
-             translationKey: "item:pinkWoodChestplate"
+             translationKey: "item:purpleConcrete"
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1919-L1924` → after: `L1511-L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1511-L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1511-L1513) · [Before (L1919-L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1919-L1924)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 2160,
+           textureInfo: "purple_concrete",
+           harvestType: "rock"
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1926` → after: `L1515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1515) · [Before (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1926)

```diff
-         "Pink Wood Leggings": {
+         "Red Concrete": {
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1928` → after: `L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1517) · [Before (L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1928)

```diff
-             translationKey: "item:pinkWoodLeggings"
+             translationKey: "item:redConcrete"
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1930-L1935` → after: `L1519-L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1519-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1519-L1521) · [Before (L1930-L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1930-L1935)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 2160,
+           textureInfo: "red_concrete",
+           harvestType: "rock"
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1937` → after: `L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1523) · [Before (L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1937)

```diff
-         "Pink Wood Boots": {
+         "White Concrete": {
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1939` → after: `L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1525) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1939)

```diff
-             translationKey: "item:pinkWoodBoots"
+             translationKey: "item:whiteConcrete"
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1941-L1946` → after: `L1527-L1529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1527-L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1527-L1529) · [Before (L1941-L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1941-L1946)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 2160,
+           textureInfo: "white_concrete",
+           harvestType: "rock"
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1948` → after: `L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1531) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1948)

```diff
-         "Pink Wood Gauntlets": {
+         "Green Concrete": {
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1950` → after: `L1533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1533) · [Before (L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1950)

```diff
-             translationKey: "item:pinkWoodGauntlets"
+             translationKey: "item:greenConcrete"
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1952-L1957` → after: `L1535-L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1535-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1535-L1537) · [Before (L1952-L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1952-L1957)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 2160,
+           textureInfo: "green_concrete",
+           harvestType: "rock"
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1959` → after: `L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1539) · [Before (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1959)

```diff
-         "Gray Wood Helmet": {
+         "Yellow Concrete": {
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1961` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1541) · [Before (L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1961)

```diff
-             translationKey: "item:grayWoodHelmet"
+             translationKey: "item:yellowConcrete"
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1963-L1968` → after: `L1543-L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1543-L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1543-L1545) · [Before (L1963-L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1963-L1968)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 2160,
+           textureInfo: "yellow_concrete",
+           harvestType: "rock"
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1970` → after: `L1547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1547) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1970)

```diff
-         "Gray Wood Chestplate": {
+         "Pine Leaves": {
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1972` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1549) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1972)

```diff
-             translationKey: "item:grayWoodChestplate"
+             translationKey: "item:pineLeaves"
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1974-L1979` → after: `L1551-L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1551-L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1551-L1553) · [Before (L1974-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1974-L1979)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 350,
+           textureInfo: "leaves_pine",
+           harvestType: "cuttable"
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1981` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1555) · [Before (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1981)

```diff
-         "Gray Wood Leggings": {
+         "Aspen Leaves": {
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1983` → after: `L1557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1557) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1983)

```diff
-             translationKey: "item:grayWoodLeggings"
+             translationKey: "item:aspenLeaves"
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1985-L1990` → after: `L1559-L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1559-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1559-L1561) · [Before (L1985-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1985-L1990)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 350,
+           textureInfo: "leaves_aspen",
+           harvestType: "cuttable"
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1992` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1563) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1992)

```diff
-         "Gray Wood Boots": {
+         "Maple Leaves": {
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1994` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1565) · [Before (L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1994)

```diff
-             translationKey: "item:grayWoodBoots"
+             translationKey: "item:mapleLeaves"
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L1996-L2001` → after: `L1567-L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1567-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1567-L1569) · [Before (L1996-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L1996-L2001)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 350,
+           textureInfo: "leaves_maple",
+           harvestType: "cuttable"
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2003` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1571) · [Before (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2003)

```diff
-         "Gray Wood Gauntlets": {
+         "Jungle Leaves": {
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2005` → after: `L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1573) · [Before (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2005)

```diff
-             translationKey: "item:grayWoodGauntlets"
+             translationKey: "item:jungleLeaves"
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2007-L2012` → after: `L1575-L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1575-L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1575-L1577) · [Before (L2007-L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2007-L2012)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 350,
+           textureInfo: "leaves_jungle",
+           harvestType: "cuttable"
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2014-L2023` → after: `L1579-L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1579-L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1579-L1583) · [Before (L2014-L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2014-L2023)

```diff
-         "Light Gray Wood Helmet": {
-           displayName: {
-             translationKey: "item:lightGrayWoodHelmet"
-           },
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+         Pumpkin_placeholder: {
+           ttb: 1200,
+           textureInfo: "pumpkin_face_on",
+           harvestType: "wood",
+           ma: [14, 10, 4]
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2025` → after: `L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1585) · [Before (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2025)

```diff
-         "Light Gray Wood Chestplate": {
+         Watermelon: {
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2027` → after: `L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1587) · [Before (L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2027)

```diff
-             translationKey: "item:lightGrayWoodChestplate"
+             translationKey: "item:watermelon"
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2029-L2034` → after: `L1589-L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1589-L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1589-L1592) · [Before (L2029-L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2029-L2034)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 1200,
+           textureInfo: ["watermelon_side", "watermelon_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "wood"
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2036` → after: `L1594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1594) · [Before (L2036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2036)

```diff
-         "Light Gray Wood Leggings": {
+         Glass: {
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2038` → after: `L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1596) · [Before (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2038)

```diff
-             translationKey: "item:lightGrayWoodLeggings"
+             translationKey: "item:glass"
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2040-L2045` → after: `L1598-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1598-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1598-L1605) · [Before (L2040-L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2040-L2045)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 450,
+           textureInfo: "glass",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2047` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1607) · [Before (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2047)

```diff
-         "Light Gray Wood Boots": {
+         "Black Glass": {
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2049` → after: `L1609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1609) · [Before (L2049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2049)

```diff
-             translationKey: "item:lightGrayWoodBoots"
+             translationKey: "item:blackGlass"
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2051-L2056` → after: `L1611-L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1611-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1611-L1618) · [Before (L2051-L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2051-L2056)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 450,
+           textureInfo: "glass_black",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2058` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1620) · [Before (L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2058)

```diff
-         "Light Gray Wood Gauntlets": {
+         "Blue Glass": {
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2060` → after: `L1622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1622) · [Before (L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2060)

```diff
-             translationKey: "item:lightGrayWoodGauntlets"
+             translationKey: "item:blueGlass"
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2062-L2067` → after: `L1624-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1624-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1624-L1631) · [Before (L2062-L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2062-L2067)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 450,
+           textureInfo: "glass_blue",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2069` → after: `L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1633) · [Before (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2069)

```diff
-         "Cyan Wood Helmet": {
+         "Brown Glass": {
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2071` → after: `L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1635) · [Before (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2071)

```diff
-             translationKey: "item:cyanWoodHelmet"
+             translationKey: "item:brownGlass"
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2073-L2078` → after: `L1637-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1637-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1637-L1644) · [Before (L2073-L2078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2073-L2078)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 450,
+           textureInfo: "glass_brown",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2080` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1646) · [Before (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2080)

```diff
-         "Cyan Wood Chestplate": {
+         "Cyan Glass": {
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2082` → after: `L1648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1648) · [Before (L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2082)

```diff
-             translationKey: "item:cyanWoodChestplate"
+             translationKey: "item:cyanGlass"
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2084-L2089` → after: `L1650-L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1650-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1650-L1657) · [Before (L2084-L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2084-L2089)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 450,
+           textureInfo: "glass_cyan",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2091` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1659) · [Before (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2091)

```diff
-         "Cyan Wood Leggings": {
+         "Gray Glass": {
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2093` → after: `L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1661) · [Before (L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2093)

```diff
-             translationKey: "item:cyanWoodLeggings"
+             translationKey: "item:grayGlass"
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2095-L2100` → after: `L1663-L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1663-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1663-L1670) · [Before (L2095-L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2095-L2100)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 450,
+           textureInfo: "glass_gray",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2102` → after: `L1672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1672) · [Before (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2102)

```diff
-         "Cyan Wood Boots": {
+         "Light Gray Glass": {
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2104` → after: `L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1674) · [Before (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2104)

```diff
-             translationKey: "item:cyanWoodBoots"
+             translationKey: "item:lightGrayGlass"
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2106-L2111` → after: `L1676-L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1676-L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1676-L1683) · [Before (L2106-L2111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2106-L2111)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 450,
+           textureInfo: "glass_light_gray",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2113` → after: `L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1685) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2113)

```diff
-         "Cyan Wood Gauntlets": {
+         "Green Glass": {
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2115` → after: `L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1687) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2115)

```diff
-             translationKey: "item:cyanWoodGauntlets"
+             translationKey: "item:greenGlass"
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2117-L2122` → after: `L1689-L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1689-L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1689-L1696) · [Before (L2117-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2117-L2122)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 450,
+           textureInfo: "glass_green",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2124` → after: `L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1698) · [Before (L2124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2124)

```diff
-         "Purple Wood Helmet": {
+         "Light Blue Glass": {
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2126` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1700) · [Before (L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2126)

```diff
-             translationKey: "item:purpleWoodHelmet"
+             translationKey: "item:lightBlueGlass"
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2128-L2133` → after: `L1702-L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1702-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1702-L1709) · [Before (L2128-L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2128-L2133)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 450,
+           textureInfo: "glass_light_blue",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2135` → after: `L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1711) · [Before (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2135)

```diff
-         "Purple Wood Chestplate": {
+         "Lime Glass": {
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2137` → after: `L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1713) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2137)

```diff
-             translationKey: "item:purpleWoodChestplate"
+             translationKey: "item:limeGlass"
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2139-L2144` → after: `L1715-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1715-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1715-L1722) · [Before (L2139-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2139-L2144)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 450,
+           textureInfo: "glass_lime",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2146` → after: `L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1724) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2146)

```diff
-         "Purple Wood Leggings": {
+         "Magenta Glass": {
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2148` → after: `L1726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1726) · [Before (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2148)

```diff
-             translationKey: "item:purpleWoodLeggings"
+             translationKey: "item:magentaGlass"
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2150-L2155` → after: `L1728-L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1728-L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1728-L1735) · [Before (L2150-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2150-L2155)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 450,
+           textureInfo: "glass_magenta",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2157` → after: `L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1737) · [Before (L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2157)

```diff
-         "Purple Wood Boots": {
+         "Orange Glass": {
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2159` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1739) · [Before (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2159)

```diff
-             translationKey: "item:purpleWoodBoots"
+             translationKey: "item:orangeGlass"
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2161-L2166` → after: `L1741-L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1741-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1741-L1748) · [Before (L2161-L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2161-L2166)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 450,
+           textureInfo: "glass_orange",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2168` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1750) · [Before (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2168)

```diff
-         "Purple Wood Gauntlets": {
+         "Pink Glass": {
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2170` → after: `L1752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1752) · [Before (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2170)

```diff
-             translationKey: "item:purpleWoodGauntlets"
+             translationKey: "item:pinkGlass"
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2172-L2177` → after: `L1754-L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1754-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1754-L1761) · [Before (L2172-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2172-L2177)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 450,
+           textureInfo: "glass_pink",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2179` → after: `L1763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1763) · [Before (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2179)

```diff
-         "Blue Wood Helmet": {
+         "Purple Glass": {
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2181` → after: `L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1765) · [Before (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2181)

```diff
-             translationKey: "item:blueWoodHelmet"
+             translationKey: "item:purpleGlass"
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2183-L2188` → after: `L1767-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1767-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1767-L1774) · [Before (L2183-L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2183-L2188)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 450,
+           textureInfo: "glass_purple",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2190` → after: `L1776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1776) · [Before (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2190)

```diff
-         "Blue Wood Chestplate": {
+         "Red Glass": {
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2192` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1778) · [Before (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2192)

```diff
-             translationKey: "item:blueWoodChestplate"
+             translationKey: "item:redGlass"
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2194-L2199` → after: `L1780-L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1780-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1780-L1787) · [Before (L2194-L2199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2194-L2199)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 450,
+           textureInfo: "glass_red",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2201` → after: `L1789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1789) · [Before (L2201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2201)

```diff
-         "Blue Wood Leggings": {
+         "White Glass": {
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2203` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1791) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2203)

```diff
-             translationKey: "item:blueWoodLeggings"
+             translationKey: "item:whiteGlass"
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2205-L2210` → after: `L1793-L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1793-L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1793-L1800) · [Before (L2205-L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2205-L2210)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 450,
+           textureInfo: "glass_white",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2212` → after: `L1802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1802) · [Before (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2212)

```diff
-         "Blue Wood Boots": {
+         "Yellow Glass": {
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2214` → after: `L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1804) · [Before (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2214)

```diff
-             translationKey: "item:blueWoodBoots"
+             translationKey: "item:yellowGlass"
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2216-L2221` → after: `L1806-L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1806-L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1806-L1813) · [Before (L2216-L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2216-L2221)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 450,
+           textureInfo: "glass_yellow",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2223-L2232` → after: `L1815-L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1815-L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1815-L1834) · [Before (L2223-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2223-L2232)

```diff
-         "Blue Wood Gauntlets": {
-           displayName: {
-             translationKey: "item:blueWoodGauntlets"
-           },
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+         "UNUSED BLOCK TYPE": {
+           ttb: 450,
+           textureInfo: "glass_silver",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
+         },
+         "Dim Lamp On": {
+           ttb: 450,
+           textureInfo: "redstone_lamp_on",
+           harvestType: "rock",
+           ma: [14, 14, 14]
+         },
+ ... (4 more added lines; see GitHub link above)
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2234` → after: `L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1836) · [Before (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2234)

```diff
-         "Brown Wood Helmet": {
+         Water: {
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2236` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1838) · [Before (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2236)

```diff
-             translationKey: "item:brownWoodHelmet"
+             translationKey: "item:water"
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2238-L2243` → after: `L1840-L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1840-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1840-L1849) · [Before (L2238-L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2238-L2243)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           textureInfo: [.5, .5, .8, .9],
+           wW: !0,
+           drops: null,
+           harvestType: "rock"
+         },
+         "Invisible Solid": {
+           ttb: 3e3,
+           textureInfo: "invisible_solid",
+           transTex: !0,
+           harvestType: "rock"
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2245` → after: `L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1851) · [Before (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2245)

```diff
-         "Brown Wood Chestplate": {
+         Bricks: {
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2247` → after: `L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1853) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2247)

```diff
-             translationKey: "item:brownWoodChestplate"
+             translationKey: "item:bricks"
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2249-L2254` → after: `L1855-L1857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1855-L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1855-L1857) · [Before (L2249-L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2249-L2254)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 2400,
+           textureInfo: "brick",
+           harvestType: "rock"
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2256` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1859) · [Before (L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2256)

```diff
-         "Brown Wood Leggings": {
+         "Stone Bricks": {
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2258` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1861) · [Before (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2258)

```diff
-             translationKey: "item:brownWoodLeggings"
+             translationKey: "item:stoneBricks"
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2260-L2265` → after: `L1863-L1865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1863-L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1863-L1865) · [Before (L2260-L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2260-L2265)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 1800,
+           textureInfo: "stonebrick",
+           harvestType: "rock"
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2267` → after: `L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1867) · [Before (L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2267)

```diff
-         "Brown Wood Boots": {
+         "Dark Red Brick": {
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2269` → after: `L1869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1869) · [Before (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2269)

```diff
-             translationKey: "item:brownWoodBoots"
+             translationKey: "item:darkRedBrick"
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2271-L2276` → after: `L1871-L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1871-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1871-L1873) · [Before (L2271-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2271-L2276)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 2400,
+           textureInfo: "nether_brick",
+           harvestType: "rock"
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2278` → after: `L1875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1875) · [Before (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2278)

```diff
-         "Brown Wood Gauntlets": {
+         "Dark Red Stone": {
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L2280` → after: `L1877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R1877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L1877) · [Before (L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L2280)

```diff
-             translationKey: "item:brownWoodGauntlets"
+             translationKey: "item:darkRedStone"
```
