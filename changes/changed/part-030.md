# Changed — Bundle Modifications Report (Part 030 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `30 / 67` (**346** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 029](part-029.md) · [Part 031 →](part-031.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/357.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/357.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b)

#### 3. `bundles/bloxd.io/chunks/js/357.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/357.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/357.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "lod3DPixelShader",
-       Xz = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
-     Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "postprocessVertexShader",
+       ev = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
+     hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/358.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/358.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786)

#### 1. `bundles/bloxd.io/chunks/js/358.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/358.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/358.js#L4)

```diff
-   60578: (zz, tz, sz) => {
+   60830: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/358.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/358.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/358.js#L6)

```diff
-       lodCubePixelShader: () => Oz
+       lod3DPixelShader: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/358.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/358.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/358.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "lodCubePixelShader",
-       Xz = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
-     Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "lod3DPixelShader",
+       ev = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
+     hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/359.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/359.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa)

#### 1. `bundles/bloxd.io/chunks/js/359.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/359.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/359.js#L4)

```diff
-   60584: (zz, tz, sz) => {
+   60838: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/359.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faaR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/359.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/359.js#L6)

```diff
-       lodPixelShader: () => Oz
+       lodCubePixelShader: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/359.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faaR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/359.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/359.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "lodPixelShader",
-       Xz = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
-     Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "lodCubePixelShader",
+       ev = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
+     hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/360.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/360.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99)

#### 1. `bundles/bloxd.io/chunks/js/360.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/360.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/360.js#L4)

```diff
-   60593: (zz, tz, sz) => {
+   60840: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/360.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/360.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/360.js#L6)

```diff
-       lod3DPixelShaderWGSL: () => Oz
+       lodPixelShader: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/360.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/360.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/360.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "lod3DPixelShader",
-       Xz = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
-     Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "lodPixelShader",
+       ev = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
+     hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/361.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/361.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4)

#### 1. `bundles/bloxd.io/chunks/js/361.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/361.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/361.js#L4)

```diff
-   60602: (zz, tz, sz) => {
+   60843: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/361.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/361.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/361.js#L6)

```diff
-       lodCubePixelShaderWGSL: () => Oz
+       lod3DPixelShaderWGSL: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/361.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/361.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/361.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "lodCubePixelShader",
-       Xz = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
-     Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "lod3DPixelShader",
+       ev = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
+     hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/362.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/362.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46)

#### 1. `bundles/bloxd.io/chunks/js/362.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/362.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/362.js#L4)

```diff
-   60605: (zz, tz, sz) => {
+   60851: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/362.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/362.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/362.js#L6)

```diff
-       lodPixelShaderWGSL: () => Oz
+       lodCubePixelShaderWGSL: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/362.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/362.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/362.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "lodPixelShader",
-       Xz = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
-     Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "lodCubePixelShader",
+       ev = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
+     hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/363.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/363.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a)

#### 1. `bundles/bloxd.io/chunks/js/363.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/363.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/363.js#L4)

```diff
-   60612: (zz, tz, sz) => {
+   60858: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/363.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/363.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/363.js#L6)

```diff
-       passPixelShaderWGSL: () => Oz
+       lodPixelShaderWGSL: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/363.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/363.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/363.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "passPixelShader",
-       Xz = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
-     Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "lodPixelShader",
+       ev = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
+     hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/364.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/364.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e)

#### 1. `bundles/bloxd.io/chunks/js/364.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/364.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/364.js#L4)

```diff
-   60616: (zz, tz, sz) => {
+   60863: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/364.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/364.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/364.js#L6)

```diff
-       passPixelShader: () => Oz
+       passPixelShaderWGSL: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/364.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/364.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/364.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/364.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3eR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/364.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/364.js#L10-L11)

```diff
-       Xz = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
-     Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
+       ev = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
+     hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/365.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/365.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999)

#### 1. `bundles/bloxd.io/chunks/js/365.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/365.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/365.js#L4)

```diff
-   60618: (zz, tz, sz) => {
+   60869: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/365.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/365.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/365.js#L6)

```diff
-       passCubePixelShaderWGSL: () => Oz
+       passPixelShader: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/365.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/365.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/365.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "passCubePixelShader",
-       Xz = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
-     Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "passPixelShader",
+       ev = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
+     hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/366.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/366.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c)

#### 1. `bundles/bloxd.io/chunks/js/366.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/366.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/366.js#L4)

```diff
-   60623: (zz, tz, sz) => {
+   60878: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/366.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/366.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/366.js#L6)

```diff
-       passCubePixelShader: () => Oz
+       passCubePixelShaderWGSL: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/366.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/366.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/366.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/366.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/366.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/366.js#L10-L11)

```diff
-       Xz = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
-     Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
+       ev = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
+     hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/367.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/367.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4)

#### 1. `bundles/bloxd.io/chunks/js/367.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/367.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/367.js#L4)

```diff
-   60654: (zz, tz, sz) => {
+   60885: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/367.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/367.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/367.js#L6)

```diff
-       fxaaPixelShaderWGSL: () => Oz
+       passCubePixelShader: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/367.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/367.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/367.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "fxaaPixelShader",
-       Xz = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
-     Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "passCubePixelShader",
+       ev = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
+     hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/368.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/368.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64)

#### 1. `bundles/bloxd.io/chunks/js/368.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/368.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/368.js#L4)

```diff
-   60659: (zz, tz, sz) => {
+   60927: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/368.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/368.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/368.js#L6)

```diff
-       fxaaVertexShaderWGSL: () => Oz
+       fxaaPixelShaderWGSL: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/368.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/368.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/368.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "fxaaVertexShader",
-       Xz = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
-     Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "fxaaPixelShader",
+       ev = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
+     hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/369.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/369.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c)

#### 1. `bundles/bloxd.io/chunks/js/369.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/369.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/369.js#L4)

```diff
-   60663: (zz, tz, sz) => {
+   60931: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/369.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/369.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/369.js#L6)

```diff
-       fxaaPixelShader: () => Oz
+       fxaaVertexShaderWGSL: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/369.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/369.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/369.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "fxaaPixelShader",
-       Xz = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
-     Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "fxaaVertexShader",
+       ev = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
+     hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/370.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/370.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4)

#### 1. `bundles/bloxd.io/chunks/js/370.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/370.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/370.js#L4)

```diff
-   60671: (zz, tz, sz) => {
+   60934: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/370.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/370.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/370.js#L6)

```diff
-       fxaaVertexShader: () => Oz
+       fxaaPixelShader: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/370.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/370.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/370.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "fxaaVertexShader",
-       Xz = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
-     Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "fxaaPixelShader",
+       ev = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
+     hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/371.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/371.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2)

#### 1. `bundles/bloxd.io/chunks/js/371.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/371.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/371.js#L4-L18)

```diff
-   60682: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
-     });
-     var Fz = sz(39041);
-     sz(40980), sz(40984);
-     const Wz = "pbrUboDeclaration",
-       Xz = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60693: (zz, tz, sz) => {
+   60936: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/371.js` (Changed code · before: `L20` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/371.js#L6) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/371.js#L20)

```diff
-       pbrPixelShader: () => ms
+       fxaaVertexShader: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/371.js` (Changed code · before: `L22-L242` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/371.js#L8-L11) · [Before (L22-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/371.js#L22-L242)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41166),
-       Xz = sz(41173),
-       Oz = sz(41176),
-       oz = sz(41159);
-     const vz = "pbrFragmentDeclaration",
-       Uz = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
-     Fz.e.IncludesShadersStore[vz] || (Fz.e.IncludesShadersStore[vz] = Uz);
-     const Kz = {
-       name: vz,
-       shader: Uz
-     };
-     var uz = sz(40980),
-       Nz = sz(40984),
-       bz = sz(60682),
-       wz = sz(41023),
- ... (205 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
+     const Sv = "fxaaVertexShader",
+       ev = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
+     hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/372.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/372.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f)

#### 1. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L4)

```diff
-   60689: (zz, tz, sz) => {
+   60943: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L6)

```diff
-       d: () => Oz
+       e: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "harmonicsFunctions",
-       Xz = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     Pv(41199), Pv(41207);
+     const Sv = "pbrUboDeclaration",
+       ev = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L17-L19` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L18-L20) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L17-L19)

```diff
-   60732: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz
+   60956: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       pbrPixelShader: () => fP
```

#### 5. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L21-L24` → after: `L22-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L22-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L22-L29) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "hdrFilteringFunctions",
-       Xz = "#if NUM_SAMPLES\n#if NUM_SAMPLES>0\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\nprecision highp int;float radicalInverse_VdC(uint bits)\n{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x3333333 … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162),
+       Sv = Pv(41390),
+       ev = Pv(41396),
+       gv = Pv(41399),
+       pv = Pv(41387);
+     const dv = "pbrFragmentDeclaration",
+       Nv = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
+     hv.d.IncludesShadersStore[dv] || (hv.d.IncludesShadersStore[dv] = Nv);
```

#### 6. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L28-L37` → after: `L33-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L33-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L33-L44) · [Before (L28-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L28-L37)

```diff
-     }
-   },
-   60717: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "importanceSampling",
-       Xz = "vec3 hemisphereCosSample(vec2 u) {float phi=2.*PI*u.x;float cosTheta2=1.-u.y;float cosTheta=sqrt(cosTheta2);float sinTheta=sqrt(1.-cosTheta2);return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}\nvec3 hemisphereImportanceSampleDggx(vec2 u,float a) {float phi=2. … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     };
+     var Tv = Pv(41199),
+       Wv = Pv(41207),
+       wv = Pv(60943),
+       av = Pv(41258),
+       sv = Pv(60963),
+       Cv = Pv(41407),
+       iv = Pv(41415),
+       cv = Pv(41446);
+     const Gv = "samplerFragmentAlternateDeclaration",
+       mv = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     hv.d.IncludesShadersStore[Gv] || (hv.d.IncludesShadersStore[Gv] = mv);
```

#### 7. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L41-L50` → after: `L48-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L48-L52) · [Before (L41-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L41-L50)

```diff
-     }
-   },
-   60685: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "pbrBRDFFunctions",
-       Xz = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     };
+     var fv = Pv(60970);
+     const Fv = "pbrFragmentSamplersDeclaration",
+       Yv = "#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BAS … [truncated]
+     hv.d.IncludesShadersStore[Fv] || (hv.d.IncludesShadersStore[Fv] = Yv);
```

#### 8. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L54-L63` → after: `L56-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L56-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L56-L82) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L54-L63)

```diff
-     }
-   },
-   60754: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "pbrBlockImageProcessing",
-       Xz = "#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)\n#if !defined(SKIPFINALCOLORCLAMP)\nfinalColor.rgb=clamp(finalColor.rgb,0.,30.0);\n#endif\n#else\nfinalColor=applyImageProcessing(finalColor);\n#endif\nfinalColor.a*=visibility;\n#ifdef PREMULTIPLYALPHA … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     };
+     var Ov = Pv(41453),
+       Dv = Pv(41478),
+       Kv = Pv(41297),
+       Vv = Pv(41487),
+       Uv = Pv(41465),
+       Rv = Pv(41226),
+       xv = Pv(60976),
+       tv = Pv(60984),
+       qv = Pv(60986),
+       Iv = Pv(41461),
+       Qv = Pv(41438),
+       Zv = Pv(60951),
+       Av = Pv(41424),
+       Lv = Pv(60991),
+       Hv = Pv(61e3),
+ ... (11 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L65-L76` → after: `L84-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L84-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L84-L89) · [Before (L65-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L65-L76)

```diff
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60748: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "pbrBlockNormalGeometric",
-       Xz = "vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;\n#endif\nvec3 geometricNormalW=normalW;\n#if defined(TWOSIDEDLIGHTING … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+         name: kv,
+         shader: Xv
+       },
+       vz = "pbrBlockReflectivity",
+       zz = "struct reflectivityOutParams\n{float microSurface;float roughness;float diffuseRoughness;float reflectanceF0;vec3 reflectanceF90;vec3 colorReflectanceF0;vec3 colorReflectanceF90;\n#ifdef METALLICWORKFLOW\nvec3 surfaceAlbedo;float metallic;float specularWeight;vec3 die … [truncated]
+     hv.d.IncludesShadersStore[vz] || (hv.d.IncludesShadersStore[vz] = zz);
```

#### 10. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L78-L89` → after: `L91-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L91-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L91-L96) · [Before (L78-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L78-L89)

```diff
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60760: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "pbrDebug",
-       Xz = "#if DEBUGMODE>0\nif (vClipSpacePosition.x/vClipSpacePosition.w>=vDebugMode.x) {\n#if DEBUGMODE==1\ngl_FragColor.rgb=vPositionW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif DEBUGMODE==2 && defined(NORMAL)\ngl_FragColor.rgb=vNormalW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif  … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+         name: vz,
+         shader: zz
+       },
+       hz = "pbrBlockAmbientOcclusion",
+       Sz = "struct ambientOcclusionOutParams\n{vec3 ambientOcclusionColor;\n#if DEBUGMODE>0 && defined(AMBIENT)\nvec3 ambientOcclusionColorMap;\n#endif\n};ambientOcclusionOutParams ambientOcclusionBlock(\n#ifdef AMBIENT\nin vec3 ambientOcclusionColorMap_,\nin vec4 vAmbientInfos\n … [truncated]
+     hv.d.IncludesShadersStore[hz] || (hv.d.IncludesShadersStore[hz] = Sz);
```

#### 11. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L91-L102` → after: `L98-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L98-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L98-L103) · [Before (L91-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L91-L102)

```diff
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60727: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "pbrDirectLightingFalloffFunctions",
-       Xz = "float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)\n{return max(0.,1.0-length(lightOffset)/range);}\nfloat computeDistanceLightFalloff_Physical(float lightDistanceSquared)\n{return 1.0/maxEps(lightDistanceSquared);}\nfloat computeDistanceLightFal … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+         name: hz,
+         shader: Sz
+       },
+       gz = "pbrBlockAlphaFresnel",
+       pz = "#ifdef ALPHAFRESNEL\n#if defined(ALPHATEST) || defined(ALPHABLEND)\nstruct alphaFresnelOutParams\n{float alpha;};\n#define pbr_inline\nalphaFresnelOutParams alphaFresnelBlock(\nin vec3 normalW,\nin vec3 viewDirectionW,\nin float alpha,\nin float microSurface\n)\n{alph … [truncated]
+     hv.d.IncludesShadersStore[gz] || (hv.d.IncludesShadersStore[gz] = pz);
```

#### 12. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L104-L115` → after: `L105-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L105-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L105-L145) · [Before (L104-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L104-L115)

```diff
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60736: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "pbrDirectLightingFunctions",
-       Xz = "#define CLEARCOATREFLECTANCE90 1.0\nstruct lightingInfo\n{vec3 diffuse;\n#ifdef SS_TRANSLUCENCY\nvec3 diffuseTransmission;\n#endif\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef CLEARCOAT\nvec4 clearCoat;\n#endif\n#ifdef SHEEN\nvec3 sheen;\n#endif\n};float adjus … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+         name: gz,
+         shader: pz
+       },
+       Nz = "pbrBlockAnisotropic",
+       lz = "#ifdef ANISOTROPIC\nstruct anisotropicOutParams\n{float anisotropy;vec3 anisotropicTangent;vec3 anisotropicBitangent;vec3 anisotropicNormal;\n#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)\nvec3 anisotropyMapData;\n#endif\n};\n#define pbr_inline\nanisotropicOutParams … [truncated]
+     hv.d.IncludesShadersStore[Nz] || (hv.d.IncludesShadersStore[Nz] = lz);
+     const Tz = {
+         name: Nz,
+         shader: lz
+       },
+       Wz = "pbrBlockReflection",
+       wz = "#ifdef REFLECTION\nstruct reflectionOutParams\n{vec4 environmentRadiance;vec3 environmentIrradiance;\n#ifdef REFLECTIONMAP_3D\nvec3 reflectionCoords;\n#else\nvec2 reflectionCoords;\n#endif\n#ifdef SS_TRANSLUCENCY\n#ifdef USESPHERICALFROMREFLECTIONMAP\n#if !defined(NOR … [truncated]
+     hv.d.IncludesShadersStore[Wz] || (hv.d.IncludesShadersStore[Wz] = wz);
+     const az = {
+         name: Wz,
+         shader: wz
+ ... (25 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L119-L129` → after: `L149-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L149-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L149-L160) · [Before (L119-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L119-L129)

```diff
-     }
-   },
-   60721: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
-     });
-     var Fz = sz(39041);
-     sz(41193);
-     const Wz = "pbrDirectLightingSetupFunctions",
-       Xz = "struct preLightingInfo\n{vec3 lightOffset;float lightDistanceSquared;float lightDistance;float attenuation;vec3 L;vec3 H;float NdotV;float NdotLUnclamped;float NdotL;float VdotH;float LdotV;float roughness;float diffuseRoughness;vec3 surfaceAlbedo;\n#ifdef IRIDESCENCE … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     };
+     var Dz = Pv(41430);
+     const Kz = "pbrBlockReflectance0",
+       Vz = "float reflectanceF0=reflectivityOut.reflectanceF0;vec3 specularEnvironmentR0=reflectivityOut.colorReflectanceF0;vec3 specularEnvironmentR90=reflectivityOut.colorReflectanceF90;\n#ifdef ALPHAFRESNEL\nfloat reflectance90=fresnelGrazingReflectance(reflectanceF0);specular … [truncated]
+     hv.d.IncludesShadersStore[Kz] || (hv.d.IncludesShadersStore[Kz] = Vz);
+     const Uz = {
+         name: Kz,
+         shader: Vz
+       },
+       Rz = "pbrClusteredLightingFunctions",
+       xz = "#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\n#include<clusteredLightingFunctions>\n#define inline\nlightingInfo computeClusteredLighting(\nsampler2D lightDataTexture,\nsampler2D tileMaskTexture,\nvec4 lightData,\nivec2 sliceRange,\nvec3 V,\nvec3 N,\nvec3 posW, … [truncated]
+     hv.d.IncludesShadersStore[Rz] || (hv.d.IncludesShadersStore[Rz] = xz);
```

#### 14. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L133-L143` → after: `L164-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L164-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L164-L170) · [Before (L133-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L133-L143)

```diff
-     }
-   },
-   60701: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Oz
-     });
-     var Fz = sz(39041);
-     sz(41023);
-     const Wz = "pbrFragmentExtraDeclaration",
-       Xz = "varying vec3 vPositionW;\n#if DEBUGMODE>0\nvarying vec4 vClipSpacePosition;\n#endif\n#include<mainUVVaryingDeclaration>[1..7]\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)\nvarying vec3 vEnvironment … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     };
+     var qz = Pv(41493),
+       Iz = Pv(61019),
+       Qz = Pv(41500);
+     const Zz = "pbrBlockNormalFinal",
+       Az = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=gl_FrontFacing ? faceNormal : -faceNormal;\n#endif\nnormalW*=sign(dot(normalW,faceNormal) … [truncated]
+     hv.d.IncludesShadersStore[Zz] || (hv.d.IncludesShadersStore[Zz] = Az);
```

#### 15. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L147-L156` → after: `L174-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L174-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L174-L199) · [Before (L147-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L147-L156)

```diff
-     }
-   },
-   60708: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "pbrFragmentReflectionDeclaration",
-       Xz = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     };
+     var Hz = Pv(41512);
+     const Mz = "pbrBlockLightmapInit",
+       yz = "#ifdef LIGHTMAP\nvec4 lightmapColor=TEXRD(lightmapSampler,vLightmapUV+uvOffset);\n#ifdef RGBDLIGHTMAP\nlightmapColor.rgb=fromRGBD(lightmapColor);\n#endif\n#ifdef GAMMALIGHTMAP\nlightmapColor.rgb=toLinearSpace(lightmapColor.rgb);\n#endif\nlightmapColor.rgb*=vLightmapIn … [truncated]
+     hv.d.IncludesShadersStore[Mz] || (hv.d.IncludesShadersStore[Mz] = yz);
+     const Bz = {
+         name: Mz,
+         shader: yz
+       },
+       Jz = "pbrBlockGeometryInfo",
+       Ez = "float NdotVUnclamped=dot(normalW,viewDirectionW);float NdotV=absEps(NdotVUnclamped);float alphaG=convertRoughnessToAverageSlope(roughness);vec2 AARoughnessFactors=getAARoughnessFactors(normalW.xyz);\n#ifdef SPECULARAA\nalphaG+=AARoughnessFactors.y;\n#endif\n#if define … [truncated]
+     hv.d.IncludesShadersStore[Jz] || (hv.d.IncludesShadersStore[Jz] = Ez);
+     const oz = {
+         name: Jz,
+         shader: Ez
+       },
+ ... (10 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L160-L169` → after: `L203-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L203-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L203-L221) · [Before (L160-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L160-L169)

```diff
-     }
-   },
-   60719: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "pbrHelperFunctions",
-       Xz = "#define MINIMUMVARIANCE 0.0005\n#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\nfloat convertRoughnessToAverageSlope(float roughness)\n{return square(roughness)+MINIMUMVARIANCE;}\nfloat fresnelGrazingReflectance(float reflect … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     };
+     var zP = Pv(41518);
+     const PP = "pbrBlockFinalLitComponents",
+       hP = "aggShadow=aggShadow/numLights;\n#if defined(ENVIRONMENTBRDF)\n#ifdef MS_BRDF_ENERGY_CONSERVATION\nvec3 baseSpecularEnergyConservationFactor=getEnergyConservationFactor(vec3(reflectanceF0),environmentBrdf);vec3 coloredEnergyConservationFactor=getEnergyConservationFacto … [truncated]
+     hv.d.IncludesShadersStore[PP] || (hv.d.IncludesShadersStore[PP] = hP);
+     const SP = {
+         name: PP,
+         shader: hP
+       },
+       eP = "pbrBlockFinalUnlitComponents",
+       gP = "vec3 finalDiffuse=diffuseBase;finalDiffuse*=surfaceAlbedo;\n#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)\nfinalDiffuse*=subSurfaceOut.refractionOpacity;\n#endif\n#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)\nfinalDi … [truncated]
+     hv.d.IncludesShadersStore[eP] || (hv.d.IncludesShadersStore[eP] = gP);
+     const pP = {
+         name: eP,
+         shader: gP
+       },
+ ... (3 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L173-L182` → after: `L225-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L225-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L225-L231) · [Before (L173-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L173-L182)

```diff
-     }
-   },
-   60743: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "pbrIBLFunctions",
-       Xz = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     };
+     var TP = Pv(41524),
+       WP = Pv(41526),
+       wP = Pv(61026);
+     const aP = "pbrBlockPrePass",
+       sP = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nfloat writeGeometryInfo=1.0;\n#else\nfloat writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_INDEX,vec4(vPositionW,writeGeometryInfo));\ … [truncated]
+     hv.d.IncludesShadersStore[aP] || (hv.d.IncludesShadersStore[aP] = sP);
```

#### 18. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L186-L195` → after: `L235-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L235-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/372.js#L235-L242) · [Before (L186-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/372.js#L186-L195)

```diff
-     }
-   },
-   60713: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "subSurfaceScatteringFunctions",
-       Xz = "bool testLightingForSSS(float diffusionProfile)\n{return diffusionProfile<1.;}";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     };
+     var iP = Pv(41531),
+       cP = Pv(61035);
+     const GP = "pbrPixelShader",
+       mP = "#define PBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_EXTENSION\n#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#if … [truncated]
+     hv.d.ShadersStore[GP] || (hv.d.ShadersStore[GP] = mP);
+     const jP = [Sv.b, ev.b, gv.b, pv.e, lv, Tv.c, Wv.e, wv.e, av.e, sv.e, Cv.e, iv.c, cv.b, jv, fv.b, nv, Ov.c, Dv.d, Kv.e, Vv.b, Uv.d, Rv.c, xv.c, tv.e, qv.b, Iv.e, Qv.b, Zv.b, Av.c, Lv.d, Hv.c, Mv.b, yv.e, Bv.b, Jv.d, Ev.d, ov.b, bv.b, rv.e, uv, Pz, ez, dz, Tz, az, iz, mz, Fz,  … [truncated]
+     for (const FP of jP) hv.d.IncludesShadersStore[FP.name] || (hv.d.IncludesShadersStore[FP.name] = FP.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/373.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/373.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef)

#### 1. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L4)

```diff
-   60689: (zz, tz, sz) => {
+   60951: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L6)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L11)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 5. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L17)

```diff
-   60896: (zz, tz, sz) => {
+   61002: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L21-L25)

```diff
-     var Fz = sz(39041);
-     sz(40980), sz(40984);
-     const Wz = "openpbrUboDeclaration",
-       Xz = "layout(std140,column_major) uniform;uniform Material {vec2 vTangentSpaceParams;vec4 vLightingIntensity;float pointSize;vec2 vDebugMode;vec2 renderTargetSize;vec4 cameraInfo;vec4 vTextureRepetitionHexTilingParams;mat4 backgroundRefractionMatrix;vec3 vBackgroundRefracti … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "hdrFilteringFunctions",
+       ev = "#if NUM_SAMPLES\n#if NUM_SAMPLES>0\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\nprecision highp int;float radicalInverse_VdC(uint bits)\n{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x3333333 … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 7. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L31)

```diff
-   60685: (zz, tz, sz) => {
+   60984: (vv, zv, Pv) => {
```

#### 8. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L33` → after: `L32-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L32-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L32-L45) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L33)

```diff
-       c: () => Oz
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "importanceSampling",
+       ev = "vec3 hemisphereCosSample(vec2 u) {float phi=2.*PI*u.x;float cosTheta2=1.-u.y;float cosTheta=sqrt(cosTheta2);float sinTheta=sqrt(1.-cosTheta2);return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}\nvec3 hemisphereImportanceSampleDggx(vec2 u,float a) {float phi=2. … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   60949: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
```

#### 9. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L35` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L47) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L35)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 10. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L38` → after: `L50-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L50-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L50-L115) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L38)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   61026: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "pbrBlockImageProcessing",
+       ev = "#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)\n#if !defined(SKIPFINALCOLORCLAMP)\nfinalColor.rgb=clamp(finalColor.rgb,0.,30.0);\n#endif\n#else\nfinalColor=applyImageProcessing(finalColor);\n#endif\nfinalColor.a*=visibility;\n#ifdef PREMULTIPLYALPHA … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+ ... (50 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L44-L46` → after: `L121-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L121-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L121-L137) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L44-L46)

```diff
-   60894: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       openpbrVertexShader: () => tt
+   60991: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => gv
+     });
+     var hv = Pv(39162);
+     Pv(41424);
+     const Sv = "pbrDirectLightingSetupFunctions",
+       ev = "struct preLightingInfo\n{vec3 lightOffset;float lightDistanceSquared;float lightDistance;float attenuation;vec3 L;vec3 H;float NdotV;float NdotLUnclamped;float NdotL;float VdotH;float LdotV;float roughness;float diffuseRoughness;vec3 surfaceAlbedo;\n#ifdef IRIDESCENCE … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   60963: (vv, zv, Pv) => {
+     Pv.d(zv, {
+ ... (1 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L48-L51` → after: `L139-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L139-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L139-L143) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L48-L51)

```diff
-     var Fz = sz(39041);
-     const Wz = "sceneVertexDeclaration",
-       Xz = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     Pv(41258);
+     const Sv = "pbrFragmentExtraDeclaration",
+       ev = "varying vec3 vPositionW;\n#if DEBUGMODE>0\nvarying vec4 vClipSpacePosition;\n#endif\n#include<mainUVVaryingDeclaration>[1..7]\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)\nvarying vec3 vEnvironment … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 13. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L55-L59` → after: `L147-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L147-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L147-L156) · [Before (L55-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L55-L59)

```diff
-     };
-     var oz = sz(40978);
-     const vz = "openpbrVertexDeclaration",
-       Uz = "#include<sceneVertexDeclaration>\n#ifdef BASE_COLOR\nuniform vec2 vBaseColorInfos;uniform mat4 baseColorMatrix;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;\n#endif\nuniform float vBaseDiffuseRoughness;\n#ifdef BASE_DIFFUSE … [truncated]
-     Fz.e.IncludesShadersStore[vz] || (Fz.e.IncludesShadersStore[vz] = Uz);
+     }
+   },
+   60970: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "pbrFragmentReflectionDeclaration",
+       ev = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 14. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L63-L79` → after: `L160-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L160-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L160-L169) · [Before (L63-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L63-L79)

```diff
-     };
-     var uz = sz(40980),
-       Nz = sz(40984),
-       bz = sz(60896),
-       wz = sz(40996),
-       Dz = sz(41023),
-       gz = sz(40999),
-       Hz = sz(60685),
-       Bz = sz(41001),
-       Pz = sz(41006),
-       rz = sz(41015),
-       Yz = sz(41017),
-       xz = sz(41026),
-       mz = sz(60689);
-     const Jz = "openpbrNormalMapVertexDeclaration",
-       Iz = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
- ... (1 more removed lines; see GitHub link above)
+     }
+   },
+   60986: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "pbrHelperFunctions",
+       ev = "#define MINIMUMVARIANCE 0.0005\n#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\nfloat convertRoughnessToAverageSlope(float roughness)\n{return square(roughness)+MINIMUMVARIANCE;}\nfloat fresnelGrazingReflectance(float reflect … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 15. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L83-L101` → after: `L173-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L173-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L173-L182) · [Before (L83-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L83-L101)

```diff
-     };
-     var ez = sz(41034),
-       Zz = sz(41041),
-       Gz = sz(41047),
-       Tz = sz(41054),
-       cz = sz(41058),
-       jz = sz(41067),
-       Az = sz(41072),
-       yz = sz(41077),
-       Mz = sz(41086),
-       dz = sz(41092),
-       hz = sz(41094),
-       Qz = sz(41097),
-       kz = sz(41099),
-       iz = sz(41103),
-       Lz = sz(41112);
- ... (3 more removed lines; see GitHub link above)
+     }
+   },
+   61014: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "pbrIBLFunctions",
+       ev = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 16. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L105-L115` → after: `L186-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L186-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/373.js#L186-L195) · [Before (L105-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/373.js#L105-L115)

```diff
-     };
-     var qz = sz(41122),
-       Sz = sz(41127),
-       Vz = sz(41132),
-       Rz = sz(41141),
-       pz = sz(41148);
-     const fz = "openpbrVertexShader",
-       Ez = "#define OPENPBR_VERTEX_SHADER\n#define CUSTOM_VERTEX_EXTENSION\nprecision highp float;\n#include<__decl__openpbrVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#end … [truncated]
-     Fz.e.ShadersStore[fz] || (Fz.e.ShadersStore[fz] = Ez);
-     const zt = [Oz, oz.c, Kz, uz.d, Nz.c, bz.e, wz.e, Dz.e, gz.d, Hz.c, Bz.b, Pz.e, rz.b, Yz.e, xz.b, mz.d, Cz, ez.c, Zz.b, Gz.c, Tz.e, cz.b, jz.c, Az.c, yz.b, Mz.d, dz.c, hz.b, Qz.d, kz.c, iz.c, Lz.d, az, qz.e, Sz.b, Vz.e, Rz.d, pz.d];
-     for (const st of zt) Fz.e.IncludesShadersStore[st.name] || (Fz.e.IncludesShadersStore[st.name] = st.shader);
+     }
+   },
+   60976: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "subSurfaceScatteringFunctions",
+       ev = "bool testLightingForSSS(float diffusionProfile)\n{return diffusionProfile<1.;}";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/374.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/374.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f)

#### 1. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/374.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/374.js#L4)

```diff
-   60773: (zz, tz, sz) => {
+   60951: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/374.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/374.js#L6)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/374.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/374.js#L8-L12)

```diff
-     var Fz = sz(39041);
-     sz(41290), sz(41292);
-     const Wz = "pbrUboDeclaration",
-       Xz = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "harmonicsFunctions",
+       ev = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L18-L20` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/374.js#L17-L19) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/374.js#L18-L20)

```diff
-   60787: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       pbrPixelShaderWGSL: () => Ds
+   61176: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
```

#### 5. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L22-L43` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/374.js#L21-L25) · [Before (L22-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/374.js#L22-L43)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41470),
-       Xz = sz(41476),
-       Oz = sz(41479),
-       oz = sz(41290),
-       vz = sz(41292),
-       Uz = sz(60773),
-       Kz = sz(41336),
-       uz = sz(60796),
-       Nz = sz(41483),
-       bz = sz(41510);
-     const wz = "samplerFragmentAlternateDeclaration",
-       Dz = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[wz] || (Fz.e.IncludesShadersStoreWGSL[wz] = Dz);
-     const gz = {
-       name: wz,
- ... (6 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
+     Pv(41199), Pv(41207);
+     const Sv = "openpbrUboDeclaration",
+       ev = "layout(std140,column_major) uniform;uniform Material {vec2 vTangentSpaceParams;vec4 vLightingIntensity;float pointSize;vec2 vDebugMode;vec2 renderTargetSize;vec4 cameraInfo;vec4 vTextureRepetitionHexTilingParams;mat4 backgroundRefractionMatrix;vec3 vBackgroundRefracti … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L47-L139` → after: `L29-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L29-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/374.js#L29-L38) · [Before (L47-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/374.js#L47-L139)

```diff
-     };
-     var Yz = sz(41519),
-       xz = sz(41548),
-       mz = sz(41374),
-       Jz = sz(41556),
-       Iz = sz(41531),
-       Cz = sz(41314),
-       ez = sz(60810),
-       Zz = sz(60815),
-       Gz = sz(60820),
-       Tz = sz(41523),
-       cz = sz(41505),
-       jz = sz(60785),
-       Az = sz(41491),
-       yz = sz(60829),
-       Mz = sz(60838),
- ... (77 more removed lines; see GitHub link above)
+     }
+   },
+   60949: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "pbrBRDFFunctions",
+       ev = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 7. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L143-L149` → after: `L42-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L42-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/374.js#L42-L51) · [Before (L143-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/374.js#L143-L149)

```diff
-     };
-     var It = sz(41562),
-       Ct = sz(60876),
-       et = sz(41569);
-     const Zt = "pbrBlockNormalFinal",
-       Gt = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Zt] || (Fz.e.IncludesShadersStoreWGSL[Zt] = Gt);
+     }
+   },
+   61171: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       openpbrVertexShader: () => zz
+     });
+     var hv = Pv(39162);
+     const Sv = "sceneVertexDeclaration",
+       ev = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 8. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L154-L178` → after: `L56-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L56-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/374.js#L56-L59) · [Before (L154-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/374.js#L154-L178)

```diff
-     var ct = sz(41581);
-     const jt = "pbrBlockLightmapInit",
-       At = "#ifdef LIGHTMAP\nvar lightmapColor: vec4f=TEXRD(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);\n#ifdef RGBDLIGHTMAP\nlightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);\n#endif\n#ifdef GAMMALIGHTMAP\nlightmapColor=vec4f(toLinear … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[jt] || (Fz.e.IncludesShadersStoreWGSL[jt] = At);
-     const yt = {
-         name: jt,
-         shader: At
-       },
-       Mt = "pbrBlockGeometryInfo",
-       dt = "var NdotVUnclamped: f32=dot(normalW,viewDirectionW);var NdotV: f32=absEps(NdotVUnclamped);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var AARoughnessFactors: vec2f=getAARoughnessFactors(normalW.xyz);\n#ifdef SPECULARAA\nalphaG+=AARoughnessFactors.y;\n#en … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Mt] || (Fz.e.IncludesShadersStoreWGSL[Mt] = dt);
-     const ht = {
-         name: Mt,
-         shader: dt
-       },
-       Qt = "pbrBlockReflectance",
- ... (9 more removed lines; see GitHub link above)
+     var pv = Pv(41197);
+     const dv = "openpbrVertexDeclaration",
+       Nv = "#include<sceneVertexDeclaration>\n#ifdef BASE_COLOR\nuniform vec2 vBaseColorInfos;uniform mat4 baseColorMatrix;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;\n#endif\nuniform float vBaseDiffuseRoughness;\n#ifdef BASE_DIFFUSE … [truncated]
+     hv.d.IncludesShadersStore[dv] || (hv.d.IncludesShadersStore[dv] = Nv);
```

#### 9. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L183-L200` → after: `L64-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L64-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/374.js#L64-L79) · [Before (L183-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/374.js#L183-L200)

```diff
-     var qt = sz(41587);
-     const St = "pbrBlockFinalLitComponents",
-       Vt = "aggShadow=aggShadow/numLights;\n#if defined(ENVIRONMENTBRDF)\n#ifdef MS_BRDF_ENERGY_CONSERVATION\nvar baseSpecularEnergyConservationFactor: vec3f=getEnergyConservationFactor(vec3f(reflectanceF0),environmentBrdf);var coloredEnergyConservationFactor: vec3f=getEnergyCons … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[St] || (Fz.e.IncludesShadersStoreWGSL[St] = Vt);
-     const Rt = {
-         name: St,
-         shader: Vt
-       },
-       pt = "pbrBlockFinalUnlitComponents",
-       ft = "var finalDiffuse: vec3f=diffuseBase;finalDiffuse*=surfaceAlbedo;\n#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)\nfinalDiffuse*=subSurfaceOut.refractionOpacity;\n#endif\n#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)\nf … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[pt] || (Fz.e.IncludesShadersStoreWGSL[pt] = ft);
-     const Et = {
-         name: pt,
-         shader: ft
-       },
-       zs = "pbrBlockFinalColorComposition",
- ... (2 more removed lines; see GitHub link above)
+     var Tv = Pv(41199),
+       Wv = Pv(41207),
+       wv = Pv(61176),
+       av = Pv(41218),
+       sv = Pv(41258),
+       Cv = Pv(41226),
+       iv = Pv(60949),
+       cv = Pv(41231),
+       Gv = Pv(41236),
+       mv = Pv(41244),
+       jv = Pv(41252),
+       fv = Pv(41262),
+       Fv = Pv(60951);
+     const Yv = "openpbrNormalMapVertexDeclaration",
+       nv = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     hv.d.IncludesShadersStore[Yv] || (hv.d.IncludesShadersStore[Yv] = nv);
```

#### 10. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L205-L211` → after: `L84-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L84-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/374.js#L84-L101) · [Before (L205-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/374.js#L205-L211)

```diff
-     var Fs = sz(41589),
-       Ws = sz(41596),
-       Xs = sz(60885),
-       Os = sz(41604);
-     const os = "pbrBlockPrePass",
-       vs = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[os] || (Fz.e.IncludesShadersStoreWGSL[os] = vs);
+     var Dv = Pv(41267),
+       Kv = Pv(41271),
+       Vv = Pv(41273),
+       Uv = Pv(41276),
+       Rv = Pv(41284),
+       xv = Pv(41289),
+       tv = Pv(41297),
+       qv = Pv(41299),
+       Iv = Pv(41307),
+       Qv = Pv(41313),
+       Zv = Pv(41321),
+       Av = Pv(41325),
+       Lv = Pv(41334),
+       Hv = Pv(41341),
+       Mv = Pv(41343);
+     const yv = "openpbrNormalMapVertex",
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L216-L222` → after: `L106-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L106-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/374.js#L106-L115) · [Before (L216-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/374.js#L216-L222)

```diff
-     var Ks = sz(41610),
-       us = sz(60890);
-     const Ns = "pbrPixelShader",
-       bs = "#define PBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<pbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n#include< … [truncated]
-     Fz.e.ShadersStoreWGSL[Ns] || (Fz.e.ShadersStoreWGSL[Ns] = bs);
-     const ws = [Wz.e, Xz.d, Oz.b, oz.c, vz.b, Uz.e, Kz.b, uz.b, Nz.e, bz.e, gz, Hz.d, rz, Yz.b, xz.c, mz.d, Jz.e, Iz.c, Cz.e, ez.c, Zz.d, Gz.d, Tz.d, cz.d, jz.d, Az.d, yz.d, Mz.d, dz.d, hz.d, Qz.c, kz.e, iz.c, Lz.c, lz.e, nz.d, az.c, qz.b, Sz.b, pz, zt, Ft, Ot, Ut, Nt, Dt, Bt, Yt … [truncated]
-     for (const gs of ws) Fz.e.IncludesShadersStoreWGSL[gs.name] || (Fz.e.IncludesShadersStoreWGSL[gs.name] = gs.shader);
+     var Ev = Pv(41355),
+       ov = Pv(41360),
+       bv = Pv(41366),
+       rv = Pv(41373),
+       kv = Pv(41377);
+     const Xv = "openpbrVertexShader",
+       uv = "#define OPENPBR_VERTEX_SHADER\n#define CUSTOM_VERTEX_EXTENSION\nprecision highp float;\n#include<__decl__openpbrVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#end … [truncated]
+     hv.d.ShadersStore[Xv] || (hv.d.ShadersStore[Xv] = uv);
+     const vz = [gv, pv.d, lv, Tv.c, Wv.e, wv.e, av.b, sv.e, Cv.c, iv.b, cv.b, Gv.b, mv.b, jv.e, fv.e, Fv.b, Ov, Dv.c, Kv.c, Vv.c, Uv.b, Rv.b, xv.e, tv.e, qv.e, Iv.d, Qv.e, Zv.d, Av.e, Lv.e, Hv.d, Mv.e, Jv, Ev.c, ov.b, bv.c, rv.c, kv.b];
+     for (const Pz of vz) hv.d.IncludesShadersStore[Pz.name] || (hv.d.IncludesShadersStore[Pz.name] = Pz.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/375.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/375.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7)

#### 1. `bundles/bloxd.io/chunks/js/375.js` (Changed code · before: `L4-L96` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/375.js#L4) · [Before (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/375.js#L4-L96)

```diff
-   60785: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "harmonicsFunctions",
-       Xz = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60844: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
- ... (77 more removed lines; see GitHub link above)
+   61049: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/375.js` (Changed code · before: `L100-L103` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/375.js#L8-L12) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/375.js#L100-L103)

```diff
-     var Fz = sz(39041);
-     const Wz = "pbrDebug",
-       Xz = "#if DEBUGMODE>0\nif (input.vClipSpacePosition.x/input.vClipSpacePosition.w>=uniforms.vDebugMode.x) {var color: vec3f;\n#if DEBUGMODE==1\ncolor=fragmentInputs.vPositionW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif DEBUGMODE==2 && defined(NORMAL)\ncolor=fragmentInputs.vNor … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     Pv(41541), Pv(41550);
+     const Sv = "pbrUboDeclaration",
+       ev = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 3. `bundles/bloxd.io/chunks/js/375.js` (Changed code · before: `L109-L210` → after: `L18-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7) · [After (L18-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/375.js#L18-L222) · [Before (L109-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/375.js#L109-L210)

```diff
-   60838: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "pbrDirectLightingFalloffFunctions",
-       Xz = "fn computeDistanceLightFalloff_Standard(lightOffset: vec3f,range: f32)->f32\n{return max(0.,1.0-length(lightOffset)/range);}\nfn computeDistanceLightFalloff_Physical(lightDistanceSquared: f32)->f32\n{return 1.0/maxEps(lightDistanceSquared);}\nfn computeDistanceLightFa … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60864: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Oz
- ... (86 more removed lines; see GitHub link above)
+   61071: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       pbrPixelShaderWGSL: () => aP
+     });
+     var hv = Pv(39162),
+       Sv = Pv(41737),
+       ev = Pv(41742),
+       gv = Pv(41745),
+       pv = Pv(41541),
+       dv = Pv(41550),
+       Nv = Pv(61049),
+       lv = Pv(41596),
+       Tv = Pv(61077),
+       Wv = Pv(41753),
+       wv = Pv(41776);
+     const av = "samplerFragmentAlternateDeclaration",
+ ... (189 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/376.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/376.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514)

#### 1. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/376.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/376.js#L4)

```diff
-   60785: (zz, tz, sz) => {
+   61066: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/376.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/376.js#L6)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/376.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/376.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L11` → after: `L11-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L11-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/376.js#L11-L130) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/376.js#L11)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   61117: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "hdrFilteringFunctions",
+       ev = "#ifdef NUM_SAMPLES\n#if NUM_SAMPLES>0\nfn radicalInverse_VdC(value: u32)->f32 \n{var bits=(value<<16u) | (value>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<< … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+ ... (104 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L17` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/376.js#L136) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/376.js#L17)

```diff
-   60940: (zz, tz, sz) => {
+   61103: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L21-L25` → after: `L140-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L140-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/376.js#L140-L144) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/376.js#L21-L25)

```diff
-     var Fz = sz(39041);
-     sz(41290), sz(41292);
-     const Wz = "openpbrUboDeclaration",
-       Xz = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     Pv(41759);
+     const Sv = "pbrDirectLightingSetupFunctions",
+       ev = "struct preLightingInfo\n{lightOffset: vec3f,\nlightDistanceSquared: f32,\nlightDistance: f32,\nattenuation: f32,\nL: vec3f,\nH: vec3f,\nNdotV: f32,\nNdotLUnclamped: f32,\nNdotL: f32,\nVdotH: f32,\nLdotV: f32,\nroughness: f32,\ndiffuseRoughness: f32,\nsurfaceAlbedo: ve … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 7. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L31-L88` → after: `L150-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L150-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/376.js#L150-L210) · [Before (L31-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/376.js#L31-L88)

```diff
-   60933: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       openpbrVertexShaderWGSL: () => Vz
-     });
-     var Fz = sz(39041),
-       Wz = sz(41290),
-       Xz = sz(41292),
-       Oz = sz(60940),
-       oz = sz(41309),
-       vz = sz(41336),
-       Uz = sz(41314),
-       Kz = sz(60777),
-       uz = sz(41321),
-       Nz = sz(41323),
-       bz = sz(41326),
-       wz = sz(41329),
- ... (42 more removed lines; see GitHub link above)
+   61077: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     Pv(41596);
+     const Sv = "pbrFragmentExtraDeclaration",
+       ev = "varying vPositionW: vec3f;\n#if DEBUGMODE>0\nvarying vClipSpacePosition: vec4f;\n#endif\n#include<mainUVVaryingDeclaration>[1..7]\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)\nvarying vEnvironmen … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   61083: (vv, zv, Pv) => {
+     Pv.d(zv, {
+ ... (45 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/377.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/377.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4)

#### 1. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/377.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/377.js#L4)

```diff
-   60909: (zz, tz, sz) => {
+   61066: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/377.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/377.js#L6)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/377.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/377.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "openpbrDielectricReflectance",
-       Xz = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "harmonicsFunctions",
+       ev = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/377.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/377.js#L17)

```diff
-   60914: (zz, tz, sz) => {
+   61221: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/377.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/377.js#L19)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 6. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L21-L74` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/377.js#L21-L22) · [Before (L21-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/377.js#L21-L74)

```diff
-     var Fz = sz(39041);
-     const Wz = "openpbrGeometryInfo",
-       Xz = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60919: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "openpbrIblFunctions",
-       Xz = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
- ... (38 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
+     Pv(41541), Pv(41550);
```

#### 7. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L76-L77` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/377.js#L24-L25) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/377.js#L76-L77)

```diff
-       Xz = "layout(std140,column_major) uniform;uniform Material {vec2 vTangentSpaceParams;vec4 vLightingIntensity;float pointSize;vec2 vDebugMode;vec2 renderTargetSize;vec4 cameraInfo;vec4 vTextureRepetitionHexTilingParams;mat4 backgroundRefractionMatrix;vec3 vBackgroundRefracti … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+       ev = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 8. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L83-L96` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/377.js#L31) · [Before (L83-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/377.js#L83-L96)

```diff
-   60905: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "sceneFragmentDeclaration",
-       Xz = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60898: (zz, tz, sz) => {
+   61217: (vv, zv, Pv) => {
```

#### 9. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L98` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/377.js#L33) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/377.js#L98)

```diff
-       openpbrPixelShader: () => vs
+       openpbrVertexShaderWGSL: () => bv
```

#### 10. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L100-L264` → after: `L35-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L35-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/377.js#L35-L51) · [Before (L100-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/377.js#L100-L264)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41166),
-       Xz = sz(41173),
-       Oz = sz(41176),
-       oz = sz(60905),
-       vz = sz(41159);
-     const Uz = "openpbrFragmentDeclaration",
-       Kz = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
-     Fz.e.IncludesShadersStore[Uz] || (Fz.e.IncludesShadersStore[Uz] = Kz);
-     const uz = {
-       name: Uz,
-       shader: Kz
-     };
-     var Nz = sz(40980),
-       bz = sz(40984),
-       wz = sz(60896),
- ... (149 more removed lines; see GitHub link above)
+     var hv = Pv(39162),
+       Sv = Pv(41541),
+       ev = Pv(41550),
+       gv = Pv(61221),
+       pv = Pv(41564),
+       dv = Pv(41596),
+       Nv = Pv(41572),
+       lv = Pv(61058),
+       Tv = Pv(41579),
+       Wv = Pv(41585),
+       wv = Pv(41587),
+       av = Pv(41591),
+       sv = Pv(41601),
+       Cv = Pv(61066);
+     const iv = "openpbrNormalMapVertexDeclaration",
+       cv = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L269-L274` → after: `L56-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L56-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/377.js#L56-L74) · [Before (L269-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/377.js#L269-L274)

```diff
-     var pt = sz(41270),
-       ft = sz(41277),
-       Et = sz(60754);
-     const zs = "openpbrBlockPrePass",
-       ts = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nfloat writeGeometryInfo=1.0;\n#else\nfloat writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_INDEX,vec4(vPositionW,writeGeometryInfo));\ … [truncated]
-     Fz.e.IncludesShadersStore[zs] || (Fz.e.IncludesShadersStore[zs] = ts);
+     var mv = Pv(41613),
+       jv = Pv(41618),
+       fv = Pv(41626),
+       Fv = Pv(41632),
+       Yv = Pv(41641),
+       nv = Pv(41647),
+       Ov = Pv(41652),
+       Dv = Pv(41657),
+       Kv = Pv(41665),
+       Vv = Pv(41668),
+       Uv = Pv(41677),
+       Rv = Pv(41682),
+       xv = Pv(41684),
+       tv = Pv(41689),
+       qv = Pv(41694),
+       Iv = Pv(41698);
+ ... (3 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L279-L285` → after: `L79-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L79-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/377.js#L79-L88) · [Before (L279-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/377.js#L279-L285)

```diff
-     var Fs = sz(41280),
-       Ws = sz(60760);
-     const Xs = "openpbrPixelShader",
-       Os = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_EXTENSION\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#ifdef … [truncated]
-     Fz.e.ShadersStore[Xs] || (Fz.e.ShadersStore[Xs] = Os);
-     const os = [Wz.c, Xz.c, Oz.e, oz.d, vz.c, uz, Nz.d, bz.c, wz.e, Dz.e, gz.c, Hz.d, Bz.c, Pz.e, rz.b, mz, Jz.c, Iz.b, Cz.c, ez.e, Zz.c, Gz.d, Tz.e, cz.d, jz.d, Az.d, yz.e, Mz.d, dz.b, hz.e, Qz.e, kz.c, iz.b, Lz.e, lz.d, qz, Rz, pz.e, fz.d, tt, Wt, Xt.e, Ot.e, Ut, Kt.e, ut.b, wt … [truncated]
-     for (const Us of os) Fz.e.IncludesShadersStore[Us.name] || (Fz.e.IncludesShadersStore[Us.name] = Us.shader);
+     var Lv = Pv(41709),
+       Hv = Pv(41717),
+       Mv = Pv(41719),
+       yv = Pv(41722),
+       Bv = Pv(41726);
+     const Jv = "openpbrVertexShader",
+       Ev = "#define OPENPBR_VERTEX_SHADER\n#include<openpbrUboDeclaration>\n#define CUSTOM_VERTEX_BEGIN\n#ifndef USE_VERTEX_PULLING\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef TANGENT\nattribute tangent: vec4f;\n#endif\n#ifdef UV1\nattribu … [truncated]
+     hv.d.ShadersStoreWGSL[Jv] || (hv.d.ShadersStoreWGSL[Jv] = Ev);
+     const ov = [Sv.e, ev.c, gv.b, pv.d, dv.b, Nv.c, lv.b, Tv.b, Wv.b, wv.b, av.e, sv.d, Cv.c, Gv, mv.c, jv.d, fv.e, Fv.b, Yv.e, nv.e, Ov.b, Dv.c, Kv.e, Vv.c, Uv.b, Rv.d, xv.e, tv.b, qv.e, Iv.b, Av, Lv.b, Hv.c, Mv.d, yv.c, Bv.e];
+     for (const rv of ov) hv.d.IncludesShadersStoreWGSL[rv.name] || (hv.d.IncludesShadersStoreWGSL[rv.name] = rv.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/378.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/378.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace)

#### 1. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L4)

```diff
-   60954: (zz, tz, sz) => {
+   61192: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L6)

```diff
-       d: () => Oz
+       e: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L10-L11)

```diff
-       Xz = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+       ev = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 5. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L17)

```diff
-   60959: (zz, tz, sz) => {
+   61194: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L19)

```diff
-       c: () => Oz
+       b: () => gv
```

#### 7. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L21)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 8. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L23-L24)

```diff
-       Xz = "struct geometryInfoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32};struct geometryInfoAnisoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32,\nanisotropy: f32,\nanisotropicTange … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+       ev = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L30)

```diff
-   60967: (zz, tz, sz) => {
+   61198: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L32)

```diff
-       e: () => Oz
+       d: () => gv
```

#### 11. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L34)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 12. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L36-L37)

```diff
-       Xz = "#ifdef REFLECTION\nfn sampleIrradiance(\nsurfaceNormal: vec3f\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,vEnvironmentIrradianceSH: vec3f\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defi … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+       ev = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 13. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L43)

```diff
-   60976: (zz, tz, sz) => {
+   61208: (vv, zv, Pv) => {
```

#### 14. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L45)

```diff
-       c: () => Oz
+       d: () => gv
```

#### 15. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L47)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 16. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L49-L50` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L49-L50) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L49-L50)

```diff
-       Xz = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+       ev = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 17. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L56)

```diff
-   60973: (zz, tz, sz) => {
+   61204: (vv, zv, Pv) => {
```

#### 18. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L58)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 19. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L60)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 20. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L62-L63` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L62-L63) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L62-L63)

```diff
-       Xz = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+       ev = "float transmission_weight=vTransmissionWeight;vec3 transmission_color=vTransmissionColor.rgb;float transmission_depth=vTransmissionDepth;vec3 transmission_scatter=vTransmissionScatter.rgb;float transmission_scatter_anisotropy=clamp(vTransmissionScatterAnisotropy,-0.99 … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 21. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L69)

```diff
-   60940: (zz, tz, sz) => {
+   61176: (vv, zv, Pv) => {
```

#### 22. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L71)

```diff
-       c: () => Oz
+       e: () => gv
```

#### 23. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L73-L74` → after: `L73-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L73-L74) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L73-L74)

```diff
-     var Fz = sz(39041);
-     sz(41290), sz(41292);
+     var hv = Pv(39162);
+     Pv(41199), Pv(41207);
```

#### 24. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L76-L77` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L76-L77) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L76-L77)

```diff
-       Xz = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+       ev = "layout(std140,column_major) uniform;uniform Material {vec2 vTangentSpaceParams;vec4 vLightingIntensity;float pointSize;vec2 vDebugMode;vec2 renderTargetSize;vec4 cameraInfo;vec4 vTextureRepetitionHexTilingParams;mat4 backgroundRefractionMatrix;vec3 vBackgroundRefracti … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 25. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L83` → after: `L83-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L83-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L83-L96) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L83)

```diff
-   60945: (zz, tz, sz) => {
+   61185: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "sceneFragmentDeclaration",
+       ev = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   61179: (vv, zv, Pv) => {
```

#### 26. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L85` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L98) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L85)

```diff
-       openpbrPixelShaderWGSL: () => Os
+       openpbrPixelShader: () => pP
```

#### 27. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L87-L98` → after: `L100-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L100-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L100-L121) · [Before (L87-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L87-L98)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41470),
-       Xz = sz(41476),
-       Oz = sz(41479),
-       oz = sz(41290),
-       vz = sz(41292),
-       Uz = sz(60940),
-       Kz = sz(41336),
-       uz = sz(60796),
-       Nz = sz(41483),
-       bz = sz(41510),
-       wz = sz(60805);
+     var hv = Pv(39162),
+       Sv = Pv(41390),
+       ev = Pv(41396),
+       gv = Pv(41399),
+       pv = Pv(61185),
+       dv = Pv(41387);
+     const Nv = "openpbrFragmentDeclaration",
+       lv = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
+     hv.d.IncludesShadersStore[Nv] || (hv.d.IncludesShadersStore[Nv] = lv);
+     const Tv = {
+       name: Nv,
+       shader: lv
+     };
+     var Wv = Pv(41199),
+       wv = Pv(41207),
+       av = Pv(61176),
+ ... (6 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L100-L101` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L123-L124) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L100-L101)

```diff
-       gz = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Dz] || (Fz.e.IncludesShadersStoreWGSL[Dz] = gz);
+       fv = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
+     hv.d.IncludesShadersStore[jv] || (hv.d.IncludesShadersStore[jv] = fv);
```

#### 29. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L106-L127` → after: `L129-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L129-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L129-L147) · [Before (L106-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L106-L127)

```diff
-     var Bz = sz(41519),
-       Pz = sz(41548),
-       rz = sz(41374),
-       Yz = sz(41556),
-       xz = sz(41531),
-       mz = sz(41314),
-       Jz = sz(60810),
-       Iz = sz(60815),
-       Cz = sz(60820),
-       ez = sz(41523),
-       Zz = sz(41505),
-       Gz = sz(60785),
-       Tz = sz(41491),
-       cz = sz(60829),
-       jz = sz(60838),
-       Az = sz(60777),
- ... (6 more removed lines; see GitHub link above)
+     var Yv = Pv(41453),
+       nv = Pv(41478),
+       Ov = Pv(41297),
+       Dv = Pv(41487),
+       Kv = Pv(41465),
+       Vv = Pv(41226),
+       Uv = Pv(60976),
+       Rv = Pv(60984),
+       xv = Pv(60986),
+       tv = Pv(41461),
+       qv = Pv(41438),
+       Iv = Pv(60951),
+       Qv = Pv(41424),
+       Zv = Pv(60991),
+       Av = Pv(61e3),
+       Lv = Pv(60949),
+ ... (3 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L129-L130` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L149-L150) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L129-L130)

```diff
-       Lz = "#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[iz] || (Fz.e.IncludesShadersStoreWGSL[iz] = Lz);
+       Jv = "#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\nuniform mat4 normalMatrix;\n#if defined(WEBGL … [truncated]
+     hv.d.IncludesShadersStore[Bv] || (hv.d.IncludesShadersStore[Bv] = Jv);
```

#### 31. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L136-L137` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L156-L157) · [Before (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L136-L137)

```diff
-       az = "#if defined(GEOMETRY_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal,_SAMPLERNAME_,geometryNormal)\n#endif\n#if defined(GEOMETRY_COAT_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_COAT_NORMA … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[nz] || (Fz.e.IncludesShadersStoreWGSL[nz] = az);
+       bv = "#if defined(GEOMETRY_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal,_SAMPLERNAME_,geometryNormal)\n#endif\n#if defined(GEOMETRY_COAT_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_COAT_NORMA … [truncated]
+     hv.d.IncludesShadersStore[ov] || (hv.d.IncludesShadersStore[ov] = bv);
```

#### 32. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L142-L143` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L162-L163) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L142-L143)

```diff
-     var Sz = sz(41516),
-       Vz = sz(60954);
+     var kv = Pv(41451),
+       Xv = Pv(61192);
```

#### 33. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L145-L146` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L165-L166) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L145-L146)

```diff
-       pz = "#define pbr_inline\nfn conductorReflectance(baseColor: vec3f,specularColor: vec3f,specularWeight: f32)->ReflectanceParams\n{var outParams: ReflectanceParams;\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)\noutParams.coloredF0=baseColor*specularWeigh … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Rz] || (Fz.e.IncludesShadersStoreWGSL[Rz] = pz);
+       vz = "#define pbr_inline\nReflectanceParams conductorReflectance(in vec3 baseColor,in vec3 specularColor,in float specularWeight)\n{ReflectanceParams outParams;\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)\noutParams.coloredF0=baseColor*specularWeight;o … [truncated]
+     hv.d.IncludesShadersStore[uv] || (hv.d.IncludesShadersStore[uv] = vz);
```

#### 34. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L152-L153` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L172-L173) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L152-L153)

```diff
-       zt = "fn compute_specular_occlusion(n_dot_v: f32,metallic: f32,ambient_occlusion: f32,roughness: f32)->f32\n{let specular_occlusion: f32=saturate(pow(n_dot_v+ambient_occlusion,exp2(-16.0*roughness-1.0))-1.0+ambient_occlusion);return mix(specular_occlusion,1.0,metallic*squar … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Ez] || (Fz.e.IncludesShadersStoreWGSL[Ez] = zt);
+       hz = "float compute_specular_occlusion(const float n_dot_v,const float metallic,const float ambient_occlusion,const float roughness)\n{float specular_occlusion=saturate(pow(n_dot_v+ambient_occlusion,exp2(-16.0*roughness-1.0))-1.0+ambient_occlusion);return mix(specular_occlu … [truncated]
+     hv.d.IncludesShadersStore[Pz] || (hv.d.IncludesShadersStore[Pz] = hz);
```

#### 35. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L158-L159` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L178-L179) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L158-L159)

```diff
-     var st = sz(60959),
-       Ft = sz(60967);
+     var ez = Pv(61194),
+       gz = Pv(61198);
```

#### 36. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L161-L162` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L181-L182) · [Before (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L161-L162)

```diff
-       Xt = "struct OpenPBRHomogeneousVolume {extinction_coeff: vec3f, \nss_albedo: vec3f, \nmulti_scatter_color: vec3f, \nabsorption_coeff: vec3f, \nscatter_coeff: vec3f, \nanisotropy: f32, };fn computeOpenPBRTransmissionVolume(\ntransmission_color: vec3f,\ntransmission_depth: f3 … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wt] || (Fz.e.IncludesShadersStoreWGSL[Wt] = Xt);
+       dz = "struct OpenPBRHomogeneousVolume {vec3 extinction_coeff; \nvec3 ss_albedo; \nvec3 multi_scatter_color; \nvec3 absorption_coeff; \nvec3 scatter_coeff; \nfloat anisotropy; };OpenPBRHomogeneousVolume computeOpenPBRTransmissionVolume(\nin vec3 transmission_color,\nin float … [truncated]
+     hv.d.IncludesShadersStore[pz] || (hv.d.IncludesShadersStore[pz] = dz);
```

#### 37. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L167-L168` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L187-L188) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L167-L168)

```diff
-     var ot = sz(41562),
-       vt = sz(60876);
+     var lz = Pv(41493),
+       Tz = Pv(61019);
```

#### 38. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L170-L171` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L190-L191) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L170-L171)

```diff
-       Kt = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(GEOMETRY_NORMAL)\nvar normalScale: f32=uniforms.vGeometryNormalI … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Ut] || (Fz.e.IncludesShadersStoreWGSL[Ut] = Kt);
+       wz = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(GEOMETRY_NORMAL)\nfloat normalScale=vGeometryNormalInfos.y;\n#else\nfloat n … [truncated]
+     hv.d.IncludesShadersStore[Wz] || (hv.d.IncludesShadersStore[Wz] = wz);
```

#### 39. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L177-L178` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L197-L198) · [Before (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L177-L178)

```diff
-       bt = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Nt] || (Fz.e.IncludesShadersStoreWGSL[Nt] = bt);
+       Cz = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=gl_FrontFacing ? faceNormal : -faceNormal;\n#endif\nnormalW*=sign(dot(normalW,faceNormal) … [truncated]
+     hv.d.IncludesShadersStore[sz] || (hv.d.IncludesShadersStore[sz] = Cz);
```

#### 40. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L184-L185` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L204-L205) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L184-L185)

```diff
-       gt = "var base_color=vec3f(0.8);var base_metalness: f32=0.0;var base_diffuse_roughness: f32=0.0;var specular_weight: f32=1.0;var specular_roughness: f32=0.3;var specular_color: vec3f=vec3f(1.0);var specular_roughness_anisotropy: f32=0.0;var specular_ior: f32=1.5;var alpha:  … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Dt] || (Fz.e.IncludesShadersStoreWGSL[Dt] = gt);
+       Gz = "vec3 base_color=vec3(0.8);float base_metalness=0.0;float base_diffuse_roughness=0.0;float specular_weight=1.0;float specular_roughness=0.3;vec3 specular_color=vec3(1.0);float specular_roughness_anisotropy=0.0;float specular_ior=1.5;float alpha=1.0;vec2 geometry_tangen … [truncated]
+     hv.d.IncludesShadersStore[cz] || (hv.d.IncludesShadersStore[cz] = Gz);
```

#### 41. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L190-L191` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L210-L211) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L190-L191)

```diff
-     var Bt = sz(60973),
-       Pt = sz(60976);
+     var jz = Pv(61204),
+       fz = Pv(61208);
```

#### 42. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L193-L194` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L213-L214) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L193-L194)

```diff
-       Yt = "var coat_weight: f32=0.0f;var coat_color: vec3f=vec3f(1.0f);var coat_roughness: f32=0.0f;var coat_roughness_anisotropy: f32=0.0f;var coat_ior: f32=1.6f;var coat_darkening: f32=1.0f;var geometry_coat_tangent: vec2f=vec2f(1.0f,0.0f);\n#ifdef COAT_WEIGHT\nvar coatWeightF … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[rt] || (Fz.e.IncludesShadersStoreWGSL[rt] = Yt);
+       Yz = "float coat_weight=0.0;vec3 coat_color=vec3(1.0);float coat_roughness=0.0;float coat_roughness_anisotropy=0.0;float coat_ior=1.6;float coat_darkening=1.0;vec2 geometry_coat_tangent=vec2(1.0,0.0);\n#ifdef COAT_WEIGHT\nvec4 coatWeightFromTexture=TEXRD(coatWeightSampler,v … [truncated]
+     hv.d.IncludesShadersStore[Fz] || (hv.d.IncludesShadersStore[Fz] = Yz);
```

#### 43. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L200-L201` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L220-L221) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L200-L201)

```diff
-       Jt = "#ifdef THIN_FILM\nvar thin_film_weight: f32=uniforms.vThinFilmWeight;var thin_film_thickness: f32=uniforms.vThinFilmThickness.r*1000.0f; \nvar thin_film_ior: f32=uniforms.vThinFilmIor;\n#ifdef THIN_FILM_WEIGHT\nvar thinFilmWeightFromTexture: f32=TEXRD(thinFilmWeightSa … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[mt] || (Fz.e.IncludesShadersStoreWGSL[mt] = Jt);
+       Dz = "#ifdef THIN_FILM\nfloat thin_film_weight=vThinFilmWeight;float thin_film_thickness=vThinFilmThickness.r*1000.0; \nfloat thin_film_ior=vThinFilmIor;\n#ifdef THIN_FILM_WEIGHT\nfloat thinFilmWeightFromTexture=TEXRD(thinFilmWeightSampler,vThinFilmWeightUV+uvOffset).r*vThi … [truncated]
+     hv.d.IncludesShadersStore[Oz] || (hv.d.IncludesShadersStore[Oz] = Dz);
```

#### 44. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L207-L208` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L227-L228) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L207-L208)

```diff
-       et = "var fuzz_weight: f32=0.0f;var fuzz_color: vec3f=vec3f(1.0f);var fuzz_roughness: f32=0.0f;\n#ifdef FUZZ\n#ifdef FUZZ_WEIGHT\nlet fuzzWeightFromTexture: vec4f=TEXRD(fuzzWeightSampler,fuzzWeightSamplerSampler,fragmentInputs.vFuzzWeightUV+uvOffset);\n#endif\n#ifdef FUZZ_C … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Ct] || (Fz.e.IncludesShadersStoreWGSL[Ct] = et);
+       Uz = "float fuzz_weight=0.0;vec3 fuzz_color=vec3(1.0);float fuzz_roughness=0.0;\n#ifdef FUZZ\n#ifdef FUZZ_WEIGHT\nvec4 fuzzWeightFromTexture=TEXRD(fuzzWeightSampler,vFuzzWeightUV+uvOffset);\n#endif\n#ifdef FUZZ_COLOR\nvec4 fuzzColorFromTexture=TEXRD(fuzzColorSampler,vFuzzCo … [truncated]
+     hv.d.IncludesShadersStore[Vz] || (hv.d.IncludesShadersStore[Vz] = Uz);
```

#### 45. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L214-L215` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L234-L235) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L214-L215)

```diff
-       Tt = "var ambient_occlusion: vec3f=vec3f(1.0f,1.0f,1.0f);var specular_ambient_occlusion: f32=1.0f;var coat_specular_ambient_occlusion: f32=1.0f;\n#ifdef AMBIENT_OCCLUSION\nvar ambientOcclusionFromTexture: vec3f=TEXRD(ambientOcclusionSampler,ambientOcclusionSamplerSampler,fr … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Gt] || (Fz.e.IncludesShadersStoreWGSL[Gt] = Tt);
+       tz = "vec3 ambient_occlusion=vec3(1.0);float specular_ambient_occlusion=1.0;float coat_specular_ambient_occlusion=1.0;\n#ifdef AMBIENT_OCCLUSION\nvec3 ambientOcclusionFromTexture=TEXRD(ambientOcclusionSampler,vAmbientOcclusionUV+uvOffset).rgb;ambient_occlusion=vec3(ambientO … [truncated]
+     hv.d.IncludesShadersStore[xz] || (hv.d.IncludesShadersStore[xz] = tz);
```

#### 46. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L220` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L240) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L220)

```diff
-     var jt = sz(41581);
+     var Iz = Pv(41512);
```

#### 47. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L222-L223` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L242-L243) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L222-L223)

```diff
-       yt = "var slab_translucent_background: vec4f=vec4f(0.,0.,0.,1.);\n#ifdef REFRACTED_BACKGROUND\n{let refractionLOD: f32=min(transmission_roughness,0.8)*uniforms.vBackgroundRefractionInfos.x;let lodTexelSize: f32=pow(2.0f,refractionLOD-uniforms.vBackgroundRefractionInfos.x);\ … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[At] || (Fz.e.IncludesShadersStoreWGSL[At] = yt);
+       Zz = "vec4 slab_translucent_background=vec4(0.,0.,0.,1.);\n#ifdef REFRACTED_BACKGROUND\n{float refractionLOD=min(transmission_roughness,0.8)*vBackgroundRefractionInfos.x;float lodTexelSize=pow(2.0,refractionLOD-vBackgroundRefractionInfos.x);\n#ifdef DISPERSION\n{\n#ifdef RE … [truncated]
+     hv.d.IncludesShadersStore[Qz] || (hv.d.IncludesShadersStore[Qz] = Zz);
```

#### 48. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L229-L230` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L249-L250) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L229-L230)

```diff
-       ht = "#if defined(REFLECTION) || defined(REFRACTED_BACKGROUND)\nvar coatAbsorption=vec3f(1.0f);var coatIblFresnel: f32=0.0;if (coat_weight>0.0) {coatIblFresnel=computeDielectricIblFresnel(coatReflectance,coatGeoInfo.environmentBrdf);let hemisphere_avg_fresnel: f32=coatRefle … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[dt] || (Fz.e.IncludesShadersStoreWGSL[dt] = ht);
+       Hz = "#if defined(REFLECTION) || defined(REFRACTED_BACKGROUND)\nvec3 coatAbsorption=vec3(1.0);float coatIblFresnel=0.0;if (coat_weight>0.0) {coatIblFresnel=computeDielectricIblFresnel(coatReflectance,coatGeoInfo.environmentBrdf);float hemisphere_avg_fresnel=coatReflectance. … [truncated]
+     hv.d.IncludesShadersStore[Lz] || (hv.d.IncludesShadersStore[Lz] = Hz);
```

#### 49. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L236-L237` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L256-L257) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L236-L237)

```diff
-       it = "#ifdef LIGHT{X}\nvar preInfo{X}: preLightingInfo;var preInfoCoat{X}: preLightingInfo;let lightColor{X}: vec4f=light{X}.vLightDiffuse;var shadow{X}: f32=1.0f;\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X} … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[kt] || (Fz.e.IncludesShadersStoreWGSL[kt] = it);
+       Bz = "#ifdef LIGHT{X}\npreLightingInfo preInfo{X};preLightingInfo preInfoCoat{X};vec4 lightColor{X}=light{X}.vLightDiffuse;float shadow{X}=1.;\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\n#define CUS … [truncated]
+     hv.d.IncludesShadersStore[yz] || (hv.d.IncludesShadersStore[yz] = Bz);
```

#### 50. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L243-L244` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L263-L264) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L243-L244)

```diff
-       nt = "#ifdef LIGHT{X}\n{var slab_diffuse: vec3f=vec3f(0.f,0.f,0.f);var slab_translucent: vec3f=vec3f(0.f,0.f,0.f);var slab_glossy: vec3f=vec3f(0.f,0.f,0.f);var specularFresnel: f32=0.0f;var specularColoredFresnel: vec3f=vec3f(0.f,0.f,0.f);var slab_metal: vec3f=vec3f(0.f,0.f … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[lt] || (Fz.e.IncludesShadersStoreWGSL[lt] = nt);
+       oz = "#ifdef LIGHT{X}\n{vec3 slab_diffuse=vec3(0.,0.,0.);vec3 slab_translucent=vec3(0.,0.,0.);vec3 slab_glossy=vec3(0.,0.,0.);float specularFresnel=0.0;vec3 specularColoredFresnel=vec3(0.,0.,0.);vec3 slab_metal=vec3(0.,0.,0.);vec3 slab_coat=vec3(0.,0.,0.);float coatFresnel= … [truncated]
+     hv.d.IncludesShadersStore[Ez] || (hv.d.IncludesShadersStore[Ez] = oz);
```

#### 51. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L249-L252` → after: `L269-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L269-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L269-L271) · [Before (L249-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L249-L252)

```diff
-     var St = sz(41589),
-       Vt = sz(41596),
-       Rt = sz(60885),
-       pt = sz(41604);
+     var rz = Pv(41524),
+       kz = Pv(41526),
+       Xz = Pv(61026);
```

#### 52. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L254-L255` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L273-L274) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L254-L255)

```diff
-       Et = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[ft] || (Fz.e.IncludesShadersStoreWGSL[ft] = Et);
+       vP = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nfloat writeGeometryInfo=1.0;\n#else\nfloat writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_INDEX,vec4(vPositionW,writeGeometryInfo));\ … [truncated]
+     hv.d.IncludesShadersStore[uz] || (hv.d.IncludesShadersStore[uz] = vP);
```

#### 53. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L260-L261` → after: `L279-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L279-L280) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L260-L261)

```diff
-     var ts = sz(41610),
-       ss = sz(60890);
+     var PP = Pv(41531),
+       hP = Pv(61035);
```

#### 54. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L263-L266` → after: `L282-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/378.js#L282-L285) · [Before (L263-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/378.js#L263-L266)

```diff
-       Ws = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<openpbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n# … [truncated]
-     Fz.e.ShadersStoreWGSL[Fs] || (Fz.e.ShadersStoreWGSL[Fs] = Ws);
-     const Xs = [Wz.e, Xz.d, Oz.b, oz.c, vz.b, Uz.c, Kz.b, uz.b, Nz.e, bz.e, wz.d, Hz, Bz.b, Pz.c, rz.d, Yz.e, xz.c, mz.e, Jz.c, Iz.d, Cz.d, ez.d, Zz.d, Gz.d, Tz.d, cz.d, jz.d, Az.d, yz.d, Mz.c, dz.e, hz.c, Qz.c, kz.e, lz, qz, Sz.b, Vz.d, fz, tt, st.c, Ft.e, Ot, ot.e, vt.e, ut, wt … [truncated]
-     for (const os of Xs) Fz.e.IncludesShadersStoreWGSL[os.name] || (Fz.e.IncludesShadersStoreWGSL[os.name] = os.shader);
+       eP = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_EXTENSION\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#ifdef … [truncated]
+     hv.d.ShadersStore[SP] || (hv.d.ShadersStore[SP] = eP);
+     const gP = [Sv.b, ev.b, gv.b, pv.e, dv.e, Tv, Wv.c, wv.e, av.e, sv.e, Cv.e, iv.e, cv.c, Gv.b, mv.b, Fv, Yv.c, nv.d, Ov.e, Dv.b, Kv.d, Vv.c, Uv.c, Rv.e, xv.b, tv.e, qv.b, Iv.b, Qv.c, Zv.d, Av.c, Lv.b, Hv.e, Mv.b, yv.d, Ev, rv, kv.b, Xv.e, zz, Sz, ez.b, gz.d, Nz, lz.c, Tz.e, az … [truncated]
+     for (const dP of gP) hv.d.IncludesShadersStore[dP.name] || (hv.d.IncludesShadersStore[dP.name] = dP.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/379.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/379.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72)

#### 1. `bundles/bloxd.io/chunks/js/379.js` (Changed code · before: `L4` → after: `L4-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72) · [After (L4-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/379.js#L4-L83) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/379.js#L4)

```diff
-   61e3: (zz, tz, sz) => {
+   61232: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "openpbrDielectricReflectance",
+       ev = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   61235: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
+ ... (64 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/379.js` (Changed code · before: `L6` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/379.js#L85) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/379.js#L6)

```diff
-       textureMergerPixelShaderWGSL: () => Oz
+       openpbrPixelShaderWGSL: () => eP
```

#### 3. `bundles/bloxd.io/chunks/js/379.js` (Changed code · before: `L8-L11` → after: `L87-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72) · [After (L87-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/379.js#L87-L266) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/379.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "textureMergerPixelShader",
-       Xz = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
-     Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162),
+       Sv = Pv(41737),
+       ev = Pv(41742),
+       gv = Pv(41745),
+       pv = Pv(41541),
+       dv = Pv(41550),
+       Nv = Pv(61221),
+       lv = Pv(41596),
+       Tv = Pv(61077),
+       Wv = Pv(41753),
+       wv = Pv(41776),
+       av = Pv(61083);
+     const sv = "openpbrFragmentSamplersDeclaration",
+       Cv = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
+     hv.d.IncludesShadersStoreWGSL[sv] || (hv.d.IncludesShadersStoreWGSL[sv] = Cv);
+     const iv = {
+ ... (164 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/380.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/380.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355)

#### 1. `bundles/bloxd.io/chunks/js/380.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/380.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/380.js#L4)

```diff
-   61002: (zz, tz, sz) => {
+   61279: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/380.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/380.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/380.js#L6)

```diff
-       textureMergerPixelShader: () => Oz
+       textureMergerPixelShaderWGSL: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/380.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/380.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/380.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/380.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/380.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/380.js#L10-L11)

```diff
-       Xz = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
-     Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
+       ev = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
+     hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/381.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/381.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543)

#### 1. `bundles/bloxd.io/chunks/js/381.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/381.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/381.js#L4)

```diff
-   61011: (zz, tz, sz) => {
+   61283: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/381.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/381.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/381.js#L6)

```diff
-       proceduralVertexShaderWGSL: () => Oz
+       textureMergerPixelShader: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/381.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/381.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/381.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "proceduralVertexShader",
-       Xz = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
-     Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "textureMergerPixelShader",
+       ev = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
+     hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/382.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/382.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1)

#### 1. `bundles/bloxd.io/chunks/js/382.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/382.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/382.js#L4)

```diff
-   61013: (zz, tz, sz) => {
+   61291: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/382.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/382.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/382.js#L6)

```diff
-       proceduralVertexShader: () => Oz
+       proceduralVertexShaderWGSL: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/382.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/382.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/382.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/382.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/382.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/382.js#L10-L11)

```diff
-       Xz = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
-     Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
+       ev = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
+     hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/383.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/383.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8)

#### 1. `bundles/bloxd.io/chunks/js/383.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/383.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/383.js#L4)

```diff
-   61024: (zz, tz, sz) => {
+   61295: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/383.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/383.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/383.js#L6)

```diff
-       greasedLinePixelShaderWGSL: () => Oz
+       proceduralVertexShader: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/383.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/383.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/383.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "greasedLinePixelShader",
-       Xz = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAn … [truncated]
-     Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "proceduralVertexShader",
+       ev = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
+     hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/384.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/384.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd)

#### 1. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/384.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/384.js#L4)

```diff
-   61034: (zz, tz, sz) => {
+   61308: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/384.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/384.js#L6)

```diff
-       greasedLinePixelShader: () => Oz
+       greasedLinePixelShaderWGSL: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/384.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/384.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/384.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/384.js#L10-L11)

```diff
-       Xz = "precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeA … [truncated]
-     Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
+       ev = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAn … [truncated]
+     hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/385.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/385.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4)

#### 1. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/385.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/385.js#L4)

```diff
-   61036: (zz, tz, sz) => {
+   61322: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/385.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/385.js#L6-L7)

```diff
-       rebuildScenePbrPipelines: () => oz,
-       rebuildSceneRenderables: () => vz
+       greasedLinePixelShader: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L9-L192` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/385.js#L8-L14) · [Before (L9-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/385.js#L9-L192)

```diff
-     var Fz = sz(40840),
-       Wz = (zz, tz) => zz.order - tz.order,
-       Xz = 8,
-       Oz = zz => vz(zz);
-     async function oz(zz) {
-       let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       await Uz(zz, "pbr", tz)
-     }
-     async function vz(zz) {
-       await Uz(zz, void 0, !1)
-     }
-     async function Uz(zz, tz, oz) {
-       const vz = zz;
-       if (!vz._built && !oz) return;
-       const Uz = vz._lightListVersion ?? 0,
-         Kz = vz.surface.engine,
- ... (168 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
+     const Sv = "greasedLinePixelShader",
+       ev = "precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeA … [truncated]
+     hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/70.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/70.js` (1640 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2)

#### 1. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L4` → after: `L4-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L4-L25) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L4)

```diff
-   36441: (zz, tz, sz) => {
+   9108: (vv, zv) => {
+     zv.b = 8, zv.i = function(vv, zv, Pv, hv) {
+       if (!Array.isArray(vv)) return !!vv;
+       zv -= Math.floor(zv), Pv -= Math.floor(Pv), hv -= Math.floor(hv);
+       for (var Sv = 0; Sv < vv.length; Sv += 6)
+         if (zv >= vv[Sv] && zv < vv[Sv + 3] && Pv >= vv[Sv + 1] && Pv < vv[Sv + 4] && hv >= vv[Sv + 2] && hv < vv[Sv + 5]) return !0;
+       return !1
+     }, zv.f = function(vv) {
+       for (var zv = [], Pv = 0; Pv < vv.length; Pv++) {
+         var hv = vv[Pv];
+         if (2 !== hv.length || 3 !== hv[0].length || 3 !== hv[1].length) throw new Error("Subvoxel boxes must contain two three-dimensional bounds");
+         for (var Sv = 0; Sv < 3; Sv++) {
+           var ev = hv[0][Sv],
+             gv = hv[1][Sv];
+           if (!Number.isInteger(ev) || !Number.isInteger(gv) || ev < 0 || gv > 8 || ev >= gv) throw new Error("Subvoxel bounds must be integers satisfying 0 <= start < end <= 8");
+           zv[6 * Pv + Sv] = ev / 8, zv[6 * Pv + Sv + 3] = gv / 8
+ ... (6 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L11` → after: `L35-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L35-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L35-L39) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L11)

```diff
-       p: () => gz
+       o: () => ev,
+       q: () => wv,
+       u: () => sv,
+       x: () => av,
+       z: () => Nv
```

#### 3. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L13-L16` → after: `L41-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L41-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L41-L46) · [Before (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L13-L16)

```diff
-     var Fz = sz(321),
-       Wz = sz(574),
-       Xz = sz(326);
-     const Oz = ["", "|meta|charging2", "|meta|charging3", "|meta|charging4"];
+     const hv = 39 == Pv.j ? ["Conveyor Belt", "Splitter", "Sorting Gate", "Belt Loader", "Fast Belt", "Belt Lift", "Belt Drop", "Belt Tunnel", "Express Belt", "Fast Loader"] : null,
+       Sv = .002,
+       ev = 2,
+       gv = 3,
+       pv = .5,
+       dv = 200;
```

#### 4. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L18-L19` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L48-L50) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L18-L19)

```diff
-     function oz(zz, tz) {
-       return "" === tz ? zz : `${zz} ${tz}`
+     function Nv(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sv;
+       return Math.max(0, Math.min((Pv - vv) * hv, zv))
```

#### 5. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L22-L27` → after: `L53-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L53-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L53-L61) · [Before (L22-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L22-L27)

```diff
-     function vz(zz, tz, sz, Wz) {
-       const Xz = zz.replace((0, Fz.ye)(tz.material), (0, Fz.ye)(sz));
-       if (tz.kind === Wz || "" === tz.kind) return Xz;
-       const Oz = (0, Fz.ye)(tz.kind);
-       if (!Xz.includes(Oz)) throw new Error(`Cannot name assets for "${oz(sz,Wz)}": "${Xz}" has no "${Oz}" to replace`);
-       return Xz.replace(Oz, (0, Fz.ye)(Wz))
+     function lv(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sv;
+       const ev = [];
+       let gv = zv;
+       for (const Sv of vv) {
+         const vv = Nv(Sv.at, gv, Pv, hv);
+         ev.push(vv), gv = vv - pv
+       }
+       return ev
```

#### 6. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L30-L34` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L64-L66) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L30-L34)

```diff
-     function Uz(zz) {
-       return zz.creativeKinds ? zz.creativeKinds.flatMap((tz => zz.materials.map((zz => oz(zz, tz))))) : zz.materials.flatMap((tz => zz.kinds.filter((tz => {
-         var sz;
-         return !(null !== (sz = zz.hiddenKinds) && void 0 !== sz && sz.includes(tz))
-       })).map((zz => oz(tz, zz)))))
+     function Tv(vv, zv) {
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sv;
+       return 0 === vv.length ? 1 / 0 : vv[0].at + zv / Pv
```

#### 7. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L37-L38` → after: `L69-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L69-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L69-L76) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L37-L38)

```diff
-     function Kz(zz, tz) {
-       return zz.flatMap((zz => zz.kinds.includes(tz) ? zz.materials.map((zz => oz(zz, tz))) : []))
+     function Wv(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sv,
+         ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+       const gv = lv(vv, zv, Pv, hv),
+         [pv] = vv.splice(ev, 1);
+       return gv.splice(ev, 1), vv.forEach(((vv, zv) => {
+         vv.at = Pv - gv[zv] / hv
+       })), pv
```

#### 8. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L40-L53` → after: `L78-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L78-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L78-L83) · [Before (L40-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L40-L53)

```diff
-     const uz = {
-       name: "diamondVariants",
-       materials: Xz.p,
-       kinds: Xz.m.map((zz => zz.trimStart())),
-       inheritsFrom: zz => ({
-         material: "Diamond",
-         kind: zz
-       }),
-       hiddenKinds: ["Crossbow Charged"],
-       creativeKinds: ["", "Fragment", "Pickaxe", "Axe", "Spade", "Hoe", "Sword", "Bow", "Crossbow", "Spear", "Dagger", "Club", "Mace", "Whip", "Boomerang", "Helmet", "Chestplate", "Gauntlets", "Leggings", "Boots"],
-       description: (zz, tz) => {
-         if ("Fragment" === tz) return {
-           translationKey: "Magmasteel" === zz ? "item:forgeFragmentDescription" : "item:elementalShardDescription"
-         }
+ 
+     function wv(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sv;
+       for (let Sv = Tv(vv, zv, hv); Sv <= Pv; Sv = Tv(vv, zv, hv)) {
+         const Pv = Wv(vv, zv, Sv, hv);
+         Pv.at = Sv, vv.push(Pv)
```

#### 9. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L55` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L85) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L55)

```diff
-     };
+     }
```

#### 10. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L57` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L87) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L57)

```diff
-     function Nz(zz) {
+     function av(vv, zv, Pv) {
```

#### 11. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L59` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L89-L90) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L59)

```diff
-         translationKey: `item:${(0,Fz.ue)(zz)}`
+         name: vv,
+         at: Pv - zv / (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sv)
```

#### 12. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L62-L106` → after: `L93-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L93-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L93-L103) · [Before (L62-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L62-L106)

```diff
-     const bz = {
-         name: "decorativeArmour",
-         materials: Xz.g,
-         kinds: Wz.c,
-         inheritsFrom: zz => ({
-           material: "Diamond",
-           kind: zz
-         }),
-         displayName: Nz
-       },
-       wz = {
-         name: "keys",
-         materials: ["Wooden", "Stone", "Iron", "Gold", "Diamond"],
-         kinds: ["Key"],
-         metadata: () => ({
-           type: "Item",
- ... (29 more removed lines; see GitHub link above)
+ 
+     function sv(vv, zv, Pv, hv, ev) {
+       let gv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Sv;
+       const pv = lv(vv, zv, ev, gv);
+       let dv = 0;
+       vv.forEach(((vv, zv) => {
+         vv.at = ev - pv[zv] / gv, pv[zv] > hv && (dv = zv + 1)
+       })), Pv.at = ev - hv / gv, vv.splice(dv, 0, Pv)
+     }
+     const Cv = "baf2BeltLines",
+       iv = "baf2BeltMoves"
```

#### 13. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L108` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L105) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L108)

```diff
-   36437: (zz, tz, sz) => {
+   9176: (vv, zv, Pv) => {
```

#### 14. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L110` → after: `L107-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L107-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L107-L116) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L110)

```diff
-       d: () => Pz,
+       C: () => wv,
+       F: () => gv,
+       G: () => mv,
+       J: () => fv,
+       M: () => Gv,
+       Q: () => cv,
+       T: () => Nv,
+       U: () => Cv,
+       Y: () => iv,
+       Z: () => dv,
```

#### 15. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L115-L116` → after: `L124-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L124-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L124-L127) · [Before (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L115-L116)

```diff
-       q: () => Az,
-       t: () => Tz
+       p: () => Fv,
+       s: () => Yv,
+       u: () => Wv,
+       y: () => Tv
```

#### 16. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L118-L123` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L129) · [Before (L118-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L118-L123)

```diff
-     var Fz = sz(321),
-       Wz = sz(8976),
-       Xz = sz(4101),
-       Oz = sz(8940),
-       oz = sz(8960),
-       vz = sz(577);
+     var hv = Pv(626);
```

#### 17. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L125-L151` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L131-L132) · [Before (L125-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L125-L151)

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
- ... (11 more removed lines; see GitHub link above)
+         "Belt Lift": 1,
+         "Belt Drop": -1
```

#### 18. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L153-L581` → after: `L134-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L134-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L134-L156) · [Before (L153-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L153-L581)

```diff
-       M16: {
-         gunType: "semi_automatic",
-         scopeType: "none",
-         muzzleFlashOffsetFromGun: [-5.5, -.5, 0],
-         muzzleFlashScale: 1.5,
-         autoFireWithMouse: !0,
-         fireRate: 708,
-         cadenceMs: 60 / 900 * 1e3,
-         equipDelay: 23,
-         damage: 17,
-         reloadTime: 2300,
-         clipSize: 30,
-         tagSpeedMult: .8,
-         subsequentTagSpeedReductionScalar: .55,
-         inaccuracyStanding: 8,
-         inaccuracyFromShot: 12,
- ... (413 more removed lines; see GitHub link above)
+       ev = "Belt Tunnel",
+       gv = 5,
+       pv = "|exit";
+ 
+     function dv(vv, zv) {
+       return zv ? `${ev}|meta|rot${vv}${pv}` : 1 === vv ? ev : `${ev}|meta|rot${vv}`
+     }
+ 
+     function Nv(vv) {
+       return vv.endsWith(pv) && vv.startsWith(`${ev}|`)
+     }
+     const lv = [
+         [0, -1],
+         [-1, 0],
+         [0, 1],
+         [1, 0]
+ ... (7 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L583-L610` → after: `L158-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L158-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L158-L161) · [Before (L583-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L583-L610)

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
+       av = {
+         leftRight: ["right", "left"],
+         leftFront: ["left", "front"],
+         frontRight: ["front", "right"]
```

#### 20. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L612-L643` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L163) · [Before (L612-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L612-L643)

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
+       sv = "|right";
```

#### 21. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L645-L667` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L165-L166) · [Before (L645-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L645-L667)

```diff
-     function Kz(zz, tz) {
-       console.assert("meta|charging1" === tz.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|charging1");
-       const sz = {
-         ...tz
-       };
-       return delete sz.rootMetaDesc, {
-         [zz]: {
-           ...tz,
-           textureInfo: tz.textureName
-         },
-         [`${zz}|meta|charging2`]: {
-           ...sz,
-           textureInfo: `${tz.textureName}_charging_2`
-         },
-         [`${zz}|meta|charging3`]: {
-           ...sz,
- ... (7 more removed lines; see GitHub link above)
+     function Cv(vv) {
+       return vv.split("|")[0] !== Tv ? null : vv.endsWith(wv.leftFront) ? "leftFront" : vv.endsWith(wv.frontRight) ? "frontRight" : "leftRight"
```

#### 22. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L673-L685` → after: `L170-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L170-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L170-L173) · [Before (L673-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L673-L685)

```diff
-       const Fz = {
-         [zz]: {
-           ...sz,
-           heldItemGlb: `${tz}_${uz}`,
-           textureInfo: `${tz}_${uz}`
-         }
-       };
-       for (const Wz of Nz) Fz[`${zz}|meta|${Wz}`] = {
-         ...sz,
-         heldItemGlb: `${tz}_${Wz}`,
-         textureInfo: `${tz}_${Wz}`
-       };
-       return Fz
+       return function(vv) {
+         const zv = Cv(vv);
+         return null === zv ? [] : av[zv]
+       }(vv).map((vv => "right" === vv ? [Pv, -zv] : "left" === vv ? [-Pv, zv] : [zv, Pv]))
```

#### 23. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L688-L692` → after: `L234-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L234-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L234-L257) · [Before (L688-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L688-L692)

```diff
-       Sheep: vz.p.Sheep,
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

#### 24. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L696-L705` → after: `L261-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L261-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L261-L264) · [Before (L696-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L696-L705)

```diff
-       var sz;
-       const Fz = {
-         type: "Gun",
-         textureInfo: zz,
-         weight: 1,
-         stackable: !1,
-         keepMetaInChest: !0,
-         ...tz,
-         ...Uz[zz]
-       };
+       let {
+         textureAnimation: Pv,
+         rotatable: hv = !0
+       } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
```

#### 25. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L707-L711` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L266-L275) · [Before (L707-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L707-L711)

```diff
-         [zz]: Fz,
-         [`${zz}|RequiresAmmo`]: {
-           ...Fz,
-           displayName: zz,
-           heldItemGlb: null !== (sz = Fz.heldItemGlb) && void 0 !== sz ? sz : zz
+         model: hv ? "rotatable" : "CustomModel",
+         modelScale: 8,
+         blockModel: vv,
+         blockModelItem: !0,
+         heldItemScale: 4,
+         itemTexture: zv,
+         customModelInfo: {
+           yOffset: -.5,
+           yRotOffset: hv ? Math.PI : void 0,
+           textureAnimation: Pv
```

#### 26. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L715-L725` → after: `L279-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L279-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L279-L609) · [Before (L715-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L715-L725)

```diff
-     var gz = sz(36441),
-       Hz = sz(36449),
-       Bz = sz(36451);
-     const Pz = 16,
-       rz = {
-         comboWindowMs: 800,
-         comboMultipliers: [.5, 2 / 3, 5 / 6, 1],
-         backstabAngle: 2 * Math.PI / 3
-       },
-       Yz = {
-         "Wood Pickaxe": {
+     const jv = (0, hv.f)([
+         [
+           [0, 0, 0],
+           [8, 1, 8]
+         ]
+       ]),
+       fv = [(0, av.jc)("Maple Stairs", {
+         displayName: {
+           translationKey: "item:mapleStairs"
+         },
+         ttb: 1800,
+         textureInfo: "planks_maple",
+         harvestType: "wood"
+       }), (0, av.jc)("Pine Stairs", {
+         displayName: {
+           translationKey: "item:pineStairs"
+ ... (315 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L727` → after: `L611-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L611-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L611-L612) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L727)

```diff
-             translationKey: "item:woodPickaxe"
+             translationKey: "item:colouredChalkBricksStairs",
+             params: zv
```

#### 28. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L735` → after: `L615-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L615-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L615-L616) · [Before (L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L735)

```diff
-             translationKey: "item:pickaxeDescription"
+             translationKey: "item:colouredChalkBricksStairsDescription",
+             params: zv
```

#### 29. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L737-L740` → after: `L618-L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L618-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L618-L625) · [Before (L737-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L737-L740)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 2,
-           level: 1
+           ttb: 850,
+           textureInfo: `chalk_bricks_${(0,Nv.he)(vv)}`,
+           harvestType: "rock"
+         }
+       }))],
+       Fv = {
+         displayName: {
+           translationKey: "item:chest"
```

#### 30. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L742` → after: `L627-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L627-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L627-L636) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L742)

```diff
-         "Stone Pickaxe": {
+         ttb: 3e3,
+         harvestType: "wood"
+       },
+       Yv = {
+         Unloaded: {
+           ttb: 100,
+           textureInfo: "unloaded",
+           harvestType: "granule"
+         },
+         Dirt: {
```

#### 31. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L744-L752` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L638) · [Before (L744-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L744-L752)

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

#### 32. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L754-L757` → after: `L640-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L640-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L640-L642) · [Before (L754-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L754-L757)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 3.5,
-           level: 2
+           ttb: 600,
+           textureInfo: "dirt",
+           harvestType: "granule"
```

#### 33. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L759` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L644) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L759)

```diff
-         "Iron Pickaxe": {
+         "Messy Dirt": {
```

#### 34. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L761-L769` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L646) · [Before (L761-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L761-L769)

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

#### 35. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L771-L774` → after: `L648-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L648-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L648-L650) · [Before (L771-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L771-L774)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 6,
-           level: 3
+           ttb: 600,
+           textureInfo: "coarse_dirt",
+           harvestType: "granule"
```

#### 36. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L776` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L652) · [Before (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L776)

```diff
-         "Gold Pickaxe": {
+         "Grass Block": {
```

#### 37. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L778-L786` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L654) · [Before (L778-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L778-L786)

```diff
-             translationKey: "item:goldPickaxe"
-           },
-           type: "Tool",
-           textureInfo: "golden_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 30,
-           description: {
-             translationKey: "item:pickaxeDescription"
+             translationKey: "item:grassBlock"
```

#### 38. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L788-L791` → after: `L656-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L656-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L656-L663) · [Before (L788-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L788-L791)

```diff
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

#### 39. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L793` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L665) · [Before (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L793)

```diff
-         "Diamond Pickaxe": {
+         Sand: {
```

#### 40. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L795-L803` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L667) · [Before (L795-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L795-L803)

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
+             translationKey: "item:sand"
```

#### 41. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L805-L808` → after: `L669-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L669-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L669-L675) · [Before (L805-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L805-L808)

```diff
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

#### 42. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L810` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L677) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L810)

```diff
-         "Moonstone Pickaxe": {
+         Clay: {
```

#### 43. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L812-L820` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L679) · [Before (L812-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L812-L820)

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
+             translationKey: "item:clay"
```

#### 44. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L822-L825` → after: `L681-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L681-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L681-L683) · [Before (L822-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L822-L825)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 9,
-           level: 5
+           ttb: 720,
+           textureInfo: "clay",
+           harvestType: "granule"
```

#### 45. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L827` → after: `L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L685) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L827)

```diff
-         "Golem Pickaxe": {
+         Gravel: {
```

#### 46. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L829` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L687) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L829)

```diff
-             translationKey: "item:golemPickaxe"
+             translationKey: "item:gravel"
```

#### 47. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L831-L842` → after: `L689-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L689-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L689-L691) · [Before (L831-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L831-L842)

```diff
-           type: "Tool",
-           textureInfo: "golem_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 32,
-           description: {
-             translationKey: "item:golemPickaxeDescription"
-           },
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 8,
-           level: 5
+           ttb: 720,
+           textureInfo: "gravel",
+           harvestType: "granule"
```

#### 48. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L844` → after: `L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L693) · [Before (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L844)

```diff
-         "Wood Axe": {
+         Snow: {
```

#### 49. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L846-L854` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L695) · [Before (L846-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L846-L854)

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

#### 50. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L856-L859` → after: `L697-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L697-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L697-L703) · [Before (L856-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L856-L859)

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

#### 51. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L861` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L705) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L861)

```diff
-         "Stone Axe": {
+         "Maple Log": {
```

#### 52. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L863-L871` → after: `L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L707) · [Before (L863-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L863-L871)

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

#### 53. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L873-L876` → after: `L709-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L709-L711) · [Before (L873-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L873-L876)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 3.5,
-           level: 2
+           ttb: 2400,
+           textureInfo: "log_maple",
+           harvestType: "wood"
```

#### 54. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L878` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L713) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L878)

```diff
-         "Iron Axe": {
+         "Pine Log": {
```

#### 55. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L880-L888` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L715) · [Before (L880-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L880-L888)

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

#### 56. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L890-L893` → after: `L717-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L717-L719) · [Before (L890-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L890-L893)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 6,
-           level: 3
+           ttb: 2400,
+           textureInfo: "log_pine",
+           harvestType: "wood"
```

#### 57. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L895` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L721) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L895)

```diff
-         "Gold Axe": {
+         "Plum Log": {
```

#### 58. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L897-L905` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L723) · [Before (L897-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L897-L905)

```diff
-             translationKey: "item:goldAxe"
-           },
-           type: "Tool",
-           textureInfo: "golden_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 33,
-           description: {
-             translationKey: "item:axeDescription"
+             translationKey: "item:plumLog"
```

#### 59. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L907-L910` → after: `L725-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L725-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L725-L727) · [Before (L907-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L907-L910)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 7,
-           level: 4
+           ttb: 2400,
+           textureInfo: "log_plum",
+           harvestType: "wood"
```

#### 60. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L912` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L729) · [Before (L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L912)

```diff
-         "Diamond Axe": {
+         "Cedar Log": {
```

#### 61. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L914` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L731) · [Before (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L914)

```diff
-             translationKey: "item:diamondAxe"
+             translationKey: "item:cedarLog"
```

#### 62. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L916-L927` → after: `L733-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L733-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L733-L735) · [Before (L916-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L916-L927)

```diff
-           type: "Tool",
-           textureInfo: "diamond_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 36,
-           description: {
-             translationKey: "item:axeDescription"
-           },
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 8,
-           level: 5
+           ttb: 2400,
+           textureInfo: "log_cedar",
+           harvestType: "wood"
```

#### 63. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L929` → after: `L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L737) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L929)

```diff
-         "Moonstone Axe": {
+         "Aspen Log": {
```

#### 64. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L931-L955` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L739) · [Before (L931-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L931-L955)

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

#### 65. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L957-L960` → after: `L741-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L741-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L741-L743) · [Before (L957-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L957-L960)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 6,
-           level: 3
+           ttb: 2400,
+           textureInfo: "log_aspen",
+           harvestType: "wood"
```

#### 66. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L962` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L745) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L962)

```diff
-         "Wood Spade": {
+         "Jungle Log": {
```

#### 67. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L964` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L747) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L964)

```diff
-             translationKey: "item:woodSpade"
+             translationKey: "item:jungleLog"
```

#### 68. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L966-L972` → after: `L749-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L749-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L749-L755) · [Before (L966-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L966-L972)

```diff
-           type: "Tool",
-           textureInfo: "wooden_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 15,
-           description: {
-             translationKey: "item:spadeDescription"
+           ttb: 2400,
+           textureInfo: "log_jungle",
+           harvestType: "wood"
+         },
+         "Maple Wood Planks": {
+           displayName: {
+             translationKey: "item:mapleWoodPlanks"
```

#### 69. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L974-L977` → after: `L757-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L757-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L757-L759) · [Before (L974-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L974-L977)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 2,
-           level: 1
+           ttb: 1800,
+           textureInfo: "planks_maple",
+           harvestType: "wood"
```

#### 70. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L979` → after: `L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L761) · [Before (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L979)

```diff
-         "Stone Spade": {
+         "Aspen Wood Planks": {
```

#### 71. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L981` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L763) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L981)

```diff
-             translationKey: "item:stoneSpade"
+             translationKey: "item:aspenWoodPlanks"
```

#### 72. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L983-L989` → after: `L765-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L765-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L765-L771) · [Before (L983-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L983-L989)

```diff
-           type: "Tool",
-           textureInfo: "stone_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 19,
-           description: {
-             translationKey: "item:spadeDescription"
+           ttb: 1800,
+           textureInfo: "planks_aspen",
+           harvestType: "wood"
+         },
+         "Plum Wood Planks": {
+           displayName: {
+             translationKey: "item:plumWoodPlanks"
```

#### 73. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L991-L994` → after: `L773-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L773-L775) · [Before (L991-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L991-L994)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 3.5,
-           level: 2
+           ttb: 1800,
+           textureInfo: "planks_plum",
+           harvestType: "wood"
```

#### 74. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L996` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L777) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L996)

```diff
-         "Iron Spade": {
+         "Jungle Wood Planks": {
```

#### 75. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L998` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L779) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L998)

```diff
-             translationKey: "item:ironSpade"
+             translationKey: "item:jungleWoodPlanks"
```

#### 76. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1000-L1006` → after: `L781-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L781-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L781-L787) · [Before (L1000-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1000-L1006)

```diff
-           type: "Tool",
-           textureInfo: "iron_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 24,
-           description: {
-             translationKey: "item:spadeDescription"
+           ttb: 1800,
+           textureInfo: "planks_jungle",
+           harvestType: "wood"
+         },
+         "Pine Wood Planks": {
+           displayName: {
+             translationKey: "item:pineWoodPlanks"
```

#### 77. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1008-L1011` → after: `L789-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L789-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L789-L791) · [Before (L1008-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1008-L1011)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 6,
-           level: 3
+           ttb: 1800,
+           textureInfo: "planks_pine",
+           harvestType: "wood"
```

#### 78. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1013` → after: `L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L793) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1013)

```diff
-         "Gold Spade": {
+         "Cedar Wood Planks": {
```

#### 79. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1015` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L795) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1015)

```diff
-             translationKey: "item:goldSpade"
+             translationKey: "item:cedarWoodPlanks"
```

#### 80. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1017-L1023` → after: `L797-L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L797-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L797-L803) · [Before (L1017-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1017-L1023)

```diff
-           type: "Tool",
-           textureInfo: "golden_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 26,
-           description: {
-             translationKey: "item:spadeDescription"
+           ttb: 1800,
+           textureInfo: "planks_cedar",
+           harvestType: "wood"
+         },
+         "Barkless Maple Log": {
+           displayName: {
+             translationKey: "item:barklessMapleLog"
```

#### 81. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1025-L1028` → after: `L805-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L805-L807) · [Before (L1025-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1025-L1028)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 7,
-           level: 4
+           ttb: 2e3,
+           textureInfo: "stripped_maple_log",
+           harvestType: "wood"
```

#### 82. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1030` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L809) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1030)

```diff
-         "Diamond Spade": {
+         "Barkless Aspen Log": {
```

#### 83. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1032` → after: `L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L811) · [Before (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1032)

```diff
-             translationKey: "item:diamondSpade"
+             translationKey: "item:barklessAspenLog"
```

#### 84. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1034-L1040` → after: `L813-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L813-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L813-L819) · [Before (L1034-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1034-L1040)

```diff
-           type: "Tool",
-           textureInfo: "diamond_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 28,
-           description: {
-             translationKey: "item:spadeDescription"
+           ttb: 2e3,
+           textureInfo: "stripped_aspen_log",
+           harvestType: "wood"
+         },
+         "Barkless Plum Log": {
+           displayName: {
+             translationKey: "item:barklessPlumLog"
```

#### 85. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1042-L1045` → after: `L821-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L821-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L821-L823) · [Before (L1042-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1042-L1045)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 8,
-           level: 5
+           ttb: 2e3,
+           textureInfo: "stripped_plum_log",
+           harvestType: "wood"
```

#### 86. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1047` → after: `L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L825) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1047)

```diff
-         "Wood Sword": {
+         "Barkless Jungle Log": {
```

#### 87. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1049` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L827) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1049)

```diff
-             translationKey: "item:woodSword"
+             translationKey: "item:barklessJungleLog"
```

#### 88. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1051-L1057` → after: `L829-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L829-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L829-L835) · [Before (L1051-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1051-L1057)

```diff
-           type: "Tool",
-           textureInfo: "wooden_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 22,
-           description: {
-             translationKey: "item:swordDescription"
+           ttb: 2e3,
+           textureInfo: "stripped_jungle_log",
+           harvestType: "wood"
+         },
+         "Barkless Pine Log": {
+           displayName: {
+             translationKey: "item:barklessPineLog"
```

#### 89. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1059-L1062` → after: `L837-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L837-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L837-L839) · [Before (L1059-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1059-L1062)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 1
+           ttb: 2e3,
+           textureInfo: "stripped_pine_log",
+           harvestType: "wood"
```

#### 90. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1064` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L841) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1064)

```diff
-         "Stone Sword": {
+         "Barkless Cedar Log": {
```

#### 91. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1066` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L843) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1066)

```diff
-             translationKey: "item:stoneSword"
+             translationKey: "item:barklessCedarLog"
```

#### 92. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1068-L1074` → after: `L845-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L845-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L845-L856) · [Before (L1068-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1068-L1074)

```diff
-           type: "Tool",
-           textureInfo: "stone_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 27,
-           description: {
-             translationKey: "item:swordDescription"
+           ttb: 2e3,
+           textureInfo: "stripped_cedar_log",
+           harvestType: "wood"
+         },
+         free_placeholder2: {
+           ttb: 1800,
+           textureInfo: "messy_stone",
+           harvestType: "rock"
+         },
+         Stone: {
+           displayName: {
+             translationKey: "item:stone"
```

#### 93. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1076-L1079` → after: `L858-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L858-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L858-L865) · [Before (L1076-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1076-L1079)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 2
+           ttb: 1800,
+           textureInfo: "stone",
+           harvestType: "rock",
+           drops: "Messy Stone",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Stone"
+           }
```

#### 94. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1081` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L867) · [Before (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1081)

```diff
-         "Iron Sword": {
+         "Messy Stone": {
```

#### 95. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1083` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L869) · [Before (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1083)

```diff
-             translationKey: "item:ironSword"
+             translationKey: "item:messyStone"
```

#### 96. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1085-L1091` → after: `L871-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L871-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L871-L882) · [Before (L1085-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1085-L1091)

```diff
-           type: "Tool",
-           textureInfo: "iron_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 34,
-           description: {
-             translationKey: "item:swordDescription"
+           ttb: 1800,
+           textureInfo: "messy_stone",
+           harvestType: "rock"
+         },
+         free_placeholder: {
+           ttb: 1800,
+           textureInfo: "messy_stone",
+           harvestType: "rock"
+         },
+         "Smooth Stone": {
+           displayName: {
+             translationKey: "item:smoothStone"
```

#### 97. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1093-L1096` → after: `L884-L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L884-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L884-L886) · [Before (L1093-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1093-L1096)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 3
+           ttb: 1800,
+           textureInfo: "smooth_stone",
+           harvestType: "rock"
```

#### 98. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1098` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L888) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1098)

```diff
-         "Gold Sword": {
+         Diorite: {
```

#### 99. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1100` → after: `L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L890) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1100)

```diff
-             translationKey: "item:goldSword"
+             translationKey: "item:diorite"
```

#### 100. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1102-L1108` → after: `L892-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L892-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L892-L898) · [Before (L1102-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1102-L1108)

```diff
-           type: "Tool",
-           textureInfo: "golden_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 37,
-           description: {
-             translationKey: "item:swordDescription"
+           ttb: 1800,
+           textureInfo: "stone_diorite",
+           harvestType: "rock"
+         },
+         "Smooth Diorite": {
+           displayName: {
+             translationKey: "item:smoothDiorite"
```

#### 101. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1110-L1113` → after: `L900-L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L900-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L900-L902) · [Before (L1110-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1110-L1113)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 4
+           ttb: 1800,
+           textureInfo: "stone_diorite_smooth",
+           harvestType: "rock"
```

#### 102. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1115` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L904) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1115)

```diff
-         "Diamond Sword": {
+         Andesite: {
```

#### 103. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1117` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L906) · [Before (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1117)

```diff
-             translationKey: "item:diamondSword"
+             translationKey: "item:andesite"
```

#### 104. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1119-L1125` → after: `L908-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L908-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L908-L914) · [Before (L1119-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1119-L1125)

```diff
-           type: "Tool",
-           textureInfo: "diamond_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 40,
-           description: {
-             translationKey: "item:swordDescription"
+           ttb: 1800,
+           textureInfo: "stone_andesite",
+           harvestType: "rock"
+         },
+         "Smooth Andesite": {
+           displayName: {
+             translationKey: "item:smoothAndesite"
```

#### 105. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1127-L1130` → after: `L916-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L916-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L916-L918) · [Before (L1127-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1127-L1130)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           ttb: 1800,
+           textureInfo: "stone_andesite_smooth",
+           harvestType: "rock"
```

#### 106. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1132` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L920) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1132)

```diff
-         "Knight Sword": {
+         Granite: {
```

#### 107. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1134` → after: `L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L922) · [Before (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1134)

```diff
-             translationKey: "item:knightSword"
+             translationKey: "item:granite"
```

#### 108. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1136-L1143` → after: `L924-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L924-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L924-L930) · [Before (L1136-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1136-L1143)

```diff
-           type: "Tool",
-           textureInfo: "knight_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 43,
-           knockbackHorizontalScalar: 1.7,
-           description: {
-             translationKey: "item:knightSwordDescription"
+           ttb: 1800,
+           textureInfo: "stone_granite",
+           harvestType: "rock"
+         },
+         "Smooth Granite": {
+           displayName: {
+             translationKey: "item:smoothGranite"
```

#### 109. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1145-L1148` → after: `L932-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L932-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L932-L934) · [Before (L1145-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1145-L1148)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           ttb: 1800,
+           textureInfo: "stone_granite_smooth",
+           harvestType: "rock"
```

#### 110. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1150` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L936) · [Before (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1150)

```diff
-         "Wood Hoe": {
+         Sandstone: {
```

#### 111. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1152` → after: `L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L938) · [Before (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1152)

```diff
-             translationKey: "item:woodHoe"
+             translationKey: "item:sandstone"
```

#### 112. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1154-L1160` → after: `L940-L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L940-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L940-L946) · [Before (L1154-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1154-L1160)

```diff
-           type: "Tool",
-           textureInfo: "wooden_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 15,
-           description: {
-             translationKey: "item:hoeDescription"
+           ttb: 960,
+           textureInfo: "sandstone_normal",
+           harvestType: "rock"
+         },
+         Yellowstone: {
+           displayName: {
+             translationKey: "item:yellowstone"
```

#### 113. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1162-L1165` → after: `L948-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L948-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L948-L950) · [Before (L1162-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1162-L1165)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 2,
-           level: 1
+           ttb: 3600,
+           textureInfo: "end_stone",
+           harvestType: "rock"
```

#### 114. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1167` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L952) · [Before (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1167)

```diff
-         "Stone Hoe": {
+         "Coal Ore": {
```

#### 115. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1169` → after: `L954-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L954-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L954-L965) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1169)

```diff
-             translationKey: "item:stoneHoe"
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
+             "Golem Pickaxe": lv.o
```

#### 116. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1177` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L968) · [Before (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1177)

```diff
-             translationKey: "item:hoeDescription"
+             translationKey: "item:coalOreDescription"
```

#### 117. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1179-L1182` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L970) · [Before (L1179-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1179-L1182)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 2.5,
-           level: 2
+           onMinedAura: 5
```

#### 118. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1184` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L972) · [Before (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1184)

```diff
-         "Iron Hoe": {
+         "Iron Ore": {
```

#### 119. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1186` → after: `L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L974) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1186)

```diff
-             translationKey: "item:ironHoe"
+             translationKey: "item:ironOre"
```

#### 120. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1188-L1194` → after: `L976-L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L976-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L976-L982) · [Before (L1188-L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1188-L1194)

```diff
-           type: "Tool",
-           textureInfo: "iron_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 24,
-           description: {
-             translationKey: "item:hoeDescription"
+           ttb: 3600,
+           textureInfo: "iron_ore",
+           harvestType: "rock",
+           drops: "Raw Iron",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Iron Ore"
```

#### 121. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1196-L1199` → after: `L984-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L984-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L984-L988) · [Before (L1196-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1196-L1199)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 3.25,
-           level: 3
+           specialToolBonusDrops: {
+             "Golem Pickaxe": lv.o
+           },
+           harvestLevel: 2,
+           onMinedAura: 15
```

#### 122. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1201` → after: `L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L990) · [Before (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1201)

```diff
-         "Gold Hoe": {
+         "Gold Ore": {
```

#### 123. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1203` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L992) · [Before (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1203)

```diff
-             translationKey: "item:goldHoe"
+             translationKey: "item:goldOre"
```

#### 124. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1205-L1211` → after: `L994-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L994-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L994-L1003) · [Before (L1205-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1205-L1211)

```diff
-           type: "Tool",
-           textureInfo: "golden_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 26,
-           description: {
-             translationKey: "item:hoeDescription"
+           ttb: 4200,
+           textureInfo: "gold_ore",
+           harvestType: "rock",
+           drops: "Raw Gold",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Gold Ore"
+           },
+           specialToolBonusDrops: {
+             "Golem Pickaxe": lv.o
```

#### 125. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1213-L1216` → after: `L1005-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1005-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1005-L1007) · [Before (L1213-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1213-L1216)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 3.75,
-           level: 4
+           harvestLevel: 3,
+           onMinedAura: 30,
+           sa: [4, 4, 0]
```

#### 126. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1218` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1009) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1218)

```diff
-         "Diamond Hoe": {
+         "Lapis Lazuli Ore": {
```

#### 127. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1220` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1011) · [Before (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1220)

```diff
-             translationKey: "item:diamondHoe"
+             translationKey: "item:lapisLazuliOre"
```

#### 128. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1222-L1228` → after: `L1013-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1013-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1013-L1021) · [Before (L1222-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1222-L1228)

```diff
-           type: "Tool",
-           textureInfo: "diamond_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 28,
-           description: {
-             translationKey: "item:hoeDescription"
+           ttb: 4200,
+           textureInfo: "lapis_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           sa: [0, 0, 2]
+         },
+         "Emerald Ore": {
+           displayName: {
+             translationKey: "item:emeraldOre"
```

#### 129. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1230-L1233` → after: `L1023-L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1023-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1023-L1027) · [Before (L1230-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1230-L1233)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 4.25,
-           level: 5
+           ttb: 4500,
+           textureInfo: "emerald_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           sa: [1, 3, 1]
```

#### 130. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1235` → after: `L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1029) · [Before (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1235)

```diff
-         Flashlight: {
+         "Diamond Ore": {
```

#### 131. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1237` → after: `L1031-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1031-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1031-L1043) · [Before (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1237)

```diff
-             translationKey: "item:flashlight"
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
+             "Golem Pickaxe": lv.o
```

#### 132. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1240` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1046) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1240)

```diff
-             translationKey: "item:flashlightDescription"
+             translationKey: "item:diamondOreDescription"
```

#### 133. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1242-L1251` → after: `L1048-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1048-L1049) · [Before (L1242-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1242-L1251)

```diff
-           type: "Item",
-           textureInfo: "flashlight",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           fw: [15, 15, 15],
-           spotlightRange: 20,
-           spotlightConeAngle: 60,
-           firstPersonHeldRotationOffset: [-.34, -.014, .081],
-           thirdPersonHeldRotationOffset: [Math.PI / 2, 0, 0]
+           onMinedAura: 40,
+           sa: [2, 5, 5]
```

#### 134. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1253` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1051) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1253)

```diff
-         "Mining Helmet": {
+         "Block of Coal": {
```

#### 135. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1255-L1258` → after: `L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1053) · [Before (L1255-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1255-L1258)

```diff
-             translationKey: "item:miningHelmet"
-           },
-           description: {
-             translationKey: "item:miningHelmetDescription"
+             translationKey: "item:blockOfCoal"
```

#### 136. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1260-L1268` → after: `L1055-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1055-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1055-L1057) · [Before (L1260-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1260-L1268)

```diff
-           type: "Armour",
-           textureInfo: "mining_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07,
-           fw: [15, 14, 11],
-           spotlightRange: 12,
-           spotlightConeAngle: 90
+           ttb: 4500,
+           textureInfo: "coal_block",
+           harvestType: "rock"
```

#### 137. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1270` → after: `L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1059) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1270)

```diff
-         "Wood Helmet": {
+         "Block of Iron": {
```

#### 138. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1272` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1061) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1272)

```diff
-             translationKey: "item:woodHelmet"
+             translationKey: "item:blockOfIron"
```

#### 139. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1274-L1279` → after: `L1063-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1063-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1063-L1065) · [Before (L1274-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1274-L1279)

```diff
-           type: "Armour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 5400,
+           textureInfo: "iron_block",
+           harvestType: "rock"
```

#### 140. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1281` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1067) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1281)

```diff
-         "Iron Helmet": {
+         "Block of Gold": {
```

#### 141. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1283` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1069) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1283)

```diff
-             translationKey: "item:ironHelmet"
+             translationKey: "item:blockOfGold"
```

#### 142. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1285-L1290` → after: `L1071-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1071-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1071-L1073) · [Before (L1285-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1285-L1290)

```diff
-           type: "Armour",
-           textureInfo: "iron_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .09
+           ttb: 6300,
+           textureInfo: "gold_block",
+           harvestType: "rock"
```

#### 143. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1292` → after: `L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1075) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1292)

```diff
-         "Gold Helmet": {
+         "Block of Lapis Lazuli": {
```

#### 144. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1294` → after: `L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1077) · [Before (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1294)

```diff
-             translationKey: "item:goldHelmet"
+             translationKey: "item:blockOfLapisLazuli"
```

#### 145. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1296-L1301` → after: `L1079-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1079-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1079-L1081) · [Before (L1296-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1296-L1301)

```diff
-           type: "Armour",
-           textureInfo: "golden_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .11
+           ttb: 6300,
+           textureInfo: "lapis_block",
+           harvestType: "rock"
```

#### 146. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1303` → after: `L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1083) · [Before (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1303)

```diff
-         "Diamond Helmet": {
+         "Block of Emerald": {
```

#### 147. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1305` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1085) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1305)

```diff
-             translationKey: "item:diamondHelmet"
+             translationKey: "item:blockOfEmerald"
```

#### 148. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1307-L1312` → after: `L1087-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1087-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1087-L1089) · [Before (L1307-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1307-L1312)

```diff
-           type: "Armour",
-           textureInfo: "diamond_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 6750,
+           textureInfo: "emerald_block",
+           harvestType: "rock"
```

#### 149. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1314` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1091) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1314)

```diff
-         "Wood Chestplate": {
+         "White Wool": {
```

#### 150. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1316` → after: `L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1093) · [Before (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1316)

```diff
-             translationKey: "item:woodChestplate"
+             translationKey: "item:whiteWool"
```

#### 151. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1318-L1323` → after: `L1095-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1095-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1095-L1101) · [Before (L1318-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1318-L1323)

```diff
-           type: "Armour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 960,
+           textureInfo: "wool_colored_white",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 152. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1325` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1103) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1325)

```diff
-         "Iron Chestplate": {
+         "Orange Wool": {
```

#### 153. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1327` → after: `L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1105) · [Before (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1327)

```diff
-             translationKey: "item:ironChestplate"
+             translationKey: "item:orangeWool"
```

#### 154. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1329-L1334` → after: `L1107-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1107-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1107-L1113) · [Before (L1329-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1329-L1334)

```diff
-           type: "Armour",
-           textureInfo: "iron_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .18
+           ttb: 960,
+           textureInfo: "wool_colored_orange",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 155. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1336` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1115) · [Before (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1336)

```diff
-         "Gold Chestplate": {
+         "Magenta Wool": {
```

#### 156. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L1338` → after: `L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L1117) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L1338)

```diff
-             translationKey: "item:goldChestplate"
+             translationKey: "item:magentaWool"
```
